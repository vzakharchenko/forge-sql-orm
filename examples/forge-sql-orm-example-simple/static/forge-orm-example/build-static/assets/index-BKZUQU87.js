const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-BlDPw77o.js",
      "./react-dom-vendor-mZoKt2nW.js",
      "./client-core-vendor-CC-5grB7.js",
      "./lodash-vendor-DZoGCnbE.js",
      "./body-BBWlFbG-.css",
    ]),
) => i.map((i) => d[i]);
var Tp = Object.defineProperty;
var Lp = (e, t, r) =>
  t in e ? Tp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var Kt = (e, t, r) => Lp(e, typeof t != "symbol" ? t + "" : t, r);
import { r as dt, a as gi, c as Mp } from "./react-dom-vendor-mZoKt2nW.js";
import { g as mr, a as ls, r as Qt, s as Ve } from "./client-core-vendor-CC-5grB7.js";
import { r as $p } from "./lodash-vendor-DZoGCnbE.js";
function Np(e, t) {
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
  rn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs;
function Fp() {
  if (Gs) return rn;
  Gs = 1;
  var e = dt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, s, u) {
    var l,
      d = {},
      f = null,
      v = null;
    u !== void 0 && (f = "" + u),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (v = s.ref);
    for (l in s) n.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (c && c.defaultProps) for (l in ((s = c.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: c, key: f, ref: v, props: d, _owner: a.current };
  }
  return (rn.Fragment = r), (rn.jsx = o), (rn.jsxs = o), rn;
}
var Hs;
function zp() {
  return Hs || ((Hs = 1), (Vi.exports = Fp())), Vi.exports;
}
var z = zp(),
  y = dt();
const S = mr(y),
  Ws = Np({ __proto__: null, default: S }, [y]);
var Gi = {},
  Ao = function (e, t) {
    return (
      (Ao =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ao(e, t)
    );
  };
function Ed(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ao(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Ya = function () {
  return (
    (Ya =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Ya.apply(this, arguments)
  );
};
function xd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Cd(e, t, r, n) {
  var a = arguments.length,
    i = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
  return a > 3 && i && Object.defineProperty(t, r, i), i;
}
function Pd(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Rd(e, t, r, n, a, i) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = n.kind,
      s = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      u = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
      d,
      f = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var h = {};
    for (var p in n) h[p] = p === "access" ? {} : n[p];
    for (var p in n.access) h.access[p] = n.access[p];
    h.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(b || null));
    };
    var g = (0, r[v])(c === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      (d = o(g.get)) && (l.get = d), (d = o(g.set)) && (l.set = d), (d = o(g.init)) && a.unshift(d);
    } else (d = o(g)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  u && Object.defineProperty(u, n.name, l), (f = !0);
}
function Ad(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function jd(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Id(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Dd(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Td(e, t, r, n) {
  function a(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function c(l) {
      try {
        u(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function s(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function u(l) {
      l.done ? i(l.value) : a(l.value).then(c, s);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Ld(e, t) {
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
    (o.next = c(0)),
    (o.throw = c(1)),
    (o.return = c(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function c(u) {
    return function (l) {
      return s([u, l]);
    };
  }
  function s(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), u[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (i =
              u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) &&
            !(i = i.call(a, u[1])).done)
        )
          return i;
        switch (((a = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, (a = u[1]), (u = [0]);
            continue;
          case 7:
            (u = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((i = r.trys), !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < i[1]) {
              (r.label = i[1]), (i = u);
              break;
            }
            if (i && r.label < i[2]) {
              (r.label = i[2]), r.ops.push(u);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        (u = [6, l]), (a = 0);
      } finally {
        n = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var bi = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var a = Object.getOwnPropertyDescriptor(t, r);
      (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, a);
    }
  : function (e, t, r, n) {
      n === void 0 && (n = r), (e[n] = t[r]);
    };
function Md(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && bi(t, e, r);
}
function Ja(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ds(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function $d() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ds(arguments[t]));
  return e;
}
function Nd() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, c = i.length; o < c; o++, a++) n[a] = i[o];
  return n;
}
function Fd(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function qr(e) {
  return this instanceof qr ? ((this.v = e), this) : new qr(e);
}
function zd(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    i = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", o),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function o(v) {
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function c(v, h) {
    n[v] &&
      ((a[v] = function (p) {
        return new Promise(function (g, b) {
          i.push([v, p, g, b]) > 1 || s(v, p);
        });
      }),
      h && (a[v] = h(a[v])));
  }
  function s(v, h) {
    try {
      u(n[v](h));
    } catch (p) {
      f(i[0][3], p);
    }
  }
  function u(v) {
    v.value instanceof qr ? Promise.resolve(v.value.v).then(l, d) : f(i[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function f(v, h) {
    v(h), i.shift(), i.length && s(i[0][0], i[0][1]);
  }
}
function Bd(e) {
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
          return (r = !r) ? { value: qr(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function qd(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Ja == "function" ? Ja(e) : e[Symbol.iterator]()),
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
        return new Promise(function (c, s) {
          (o = e[i](o)), a(c, s, o.done, o.value);
        });
      };
  }
  function a(i, o, c, s) {
    Promise.resolve(s).then(function (u) {
      i({ value: u, done: c });
    }, o);
  }
}
function Ud(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
}
var Bp = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  jo = function (e) {
    return (
      (jo =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      jo(e)
    );
  };
function Vd(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = jo(e), n = 0; n < r.length; n++) r[n] !== "default" && bi(t, e, r[n]);
  return Bp(t, e), t;
}
function Gd(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hd(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Wd(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r;
}
function Kd(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Yd(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, a;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      (n = t[Symbol.dispose]), r && (a = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    a &&
      (n = function () {
        try {
          a.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var qp =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n;
      };
function Jd(e) {
  function t(i) {
    (e.error = e.hasError ? new qp(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0);
  }
  var r,
    n = 0;
  function a() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return (n = 0), e.stack.push(r), Promise.resolve().then(a);
        if (r.dispose) {
          var i = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(i).then(a, function (o) {
                return t(o), a();
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
function Xd(e, t) {
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
const Up = {
    __extends: Ed,
    __assign: Ya,
    __rest: xd,
    __decorate: Cd,
    __param: Pd,
    __esDecorate: Rd,
    __runInitializers: Ad,
    __propKey: jd,
    __setFunctionName: Id,
    __metadata: Dd,
    __awaiter: Td,
    __generator: Ld,
    __createBinding: bi,
    __exportStar: Md,
    __values: Ja,
    __read: ds,
    __spread: $d,
    __spreadArrays: Nd,
    __spreadArray: Fd,
    __await: qr,
    __asyncGenerator: zd,
    __asyncDelegator: Bd,
    __asyncValues: qd,
    __makeTemplateObject: Ud,
    __importStar: Vd,
    __importDefault: Gd,
    __classPrivateFieldGet: Hd,
    __classPrivateFieldSet: Wd,
    __classPrivateFieldIn: Kd,
    __addDisposableResource: Yd,
    __disposeResources: Jd,
    __rewriteRelativeImportExtension: Xd,
  },
  Vp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Yd,
        get __assign() {
          return Ya;
        },
        __asyncDelegator: Bd,
        __asyncGenerator: zd,
        __asyncValues: qd,
        __await: qr,
        __awaiter: Td,
        __classPrivateFieldGet: Hd,
        __classPrivateFieldIn: Kd,
        __classPrivateFieldSet: Wd,
        __createBinding: bi,
        __decorate: Cd,
        __disposeResources: Jd,
        __esDecorate: Rd,
        __exportStar: Md,
        __extends: Ed,
        __generator: Ld,
        __importDefault: Gd,
        __importStar: Vd,
        __makeTemplateObject: Ud,
        __metadata: Dd,
        __param: Pd,
        __propKey: jd,
        __read: ds,
        __rest: xd,
        __rewriteRelativeImportExtension: Xd,
        __runInitializers: Ad,
        __setFunctionName: Id,
        __spread: $d,
        __spreadArray: Fd,
        __spreadArrays: Nd,
        __values: Ja,
        default: Up,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Gt = ls(Vp);
var nn = {},
  Ks;
function Gp() {
  return (
    Ks ||
      ((Ks = 1),
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
var Hi = {},
  an = {},
  on = {},
  sn = {},
  Ys;
function jt() {
  if (Ys) return sn;
  (Ys = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.BridgeAPIError = void 0);
  class e extends Error {}
  return (sn.BridgeAPIError = e), sn;
}
var Js;
function Ie() {
  if (Js) return on;
  (Js = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.getCallBridge = void 0);
  const e = jt();
  function t(n) {
    return !!(n != null && n.callBridge);
  }
  const r = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return (on.getCallBridge = r), on;
}
var cn = {},
  Xs;
function Zd() {
  if (Xs) return cn;
  (Xs = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.withRateLimiter = void 0);
  const e = jt(),
    t = (r, n, a, i) => {
      let o = Date.now(),
        c = 0;
      return async (...s) => {
        const u = Date.now();
        if ((u - o > a && ((o = u), (c = 0)), c >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return (c = c + 1), r(...s);
      };
    };
  return (cn.withRateLimiter = t), cn;
}
var Zs;
function Hp() {
  if (Zs) return an;
  (Zs = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.invoke = void 0);
  const e = Ie(),
    t = jt(),
    r = Zd(),
    n = (0, e.getCallBridge)(),
    a = (o) => {
      if (o && Object.values(o).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    i = (o, c) => {
      if (typeof o != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return a(c), n("invoke", { functionKey: o, payload: c });
    };
  return (
    (an.invoke = (0, r.withRateLimiter)(
      i,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    an
  );
}
var Qs;
function Wp() {
  return (
    Qs ||
      ((Qs = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Hp(), e);
      })(Hi)),
    Hi
  );
}
var Wi = {},
  un = {},
  ec;
function Kp() {
  if (ec) return un;
  (ec = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeRemote = void 0);
  const e = Ie(),
    t = jt(),
    r = Zd(),
    n = 500,
    a = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    o = (s) => {
      if (s && Object.values(s).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = async (s) => {
      var u;
      o(s);
      const {
          success: l,
          payload: d,
          error: f,
        } = (u = await i("invoke", s)) !== null && u !== void 0 ? u : {},
        v = { ...(l ? d : f) };
      if (v && v.headers)
        for (const h in v.headers)
          Array.isArray(v.headers[h]) && (v.headers[h] = v.headers[h].join(","));
      return v;
    };
  return (
    (un.invokeRemote = (0, r.withRateLimiter)(
      c,
      n,
      a,
      "Remote invocation calls are rate limited at 500req/25s",
    )),
    un
  );
}
var tc;
function Yp() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Kp(), e);
      })(Wi)),
    Wi
  );
}
var Ki = {},
  ln = {},
  dn = {},
  rc;
function Jp() {
  if (rc) return dn;
  (rc = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.submit = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return (dn.submit = n), dn;
}
var fn = {},
  nc;
function Xp() {
  if (nc) return fn;
  (nc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.close = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (fn.close = n), fn;
}
var vn = {},
  ac;
function Zp() {
  if (ac) return vn;
  (ac = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.refresh = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (vn.refresh = n), vn;
}
var pn = {},
  ic;
function Qp() {
  if (ic) return pn;
  (ic = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.createHistory = void 0);
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
  return (pn.createHistory = r), pn;
}
var hn = {},
  Yi = {},
  Tt = {},
  oc;
function Qd() {
  return (
    oc ||
      ((oc = 1),
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
  sc;
function eh() {
  if (sc) return ar;
  (sc = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.TranslationsGetter = ar.TranslationGetterError = void 0);
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      super(a), (this.name = "TranslationGetterError");
    }
  }
  ar.TranslationGetterError = t;
  class r {
    constructor(a) {
      Kt(this, "resourcesAccessor");
      Kt(this, "i18nInfoConfig", null);
      Kt(this, "translationResources", new Map());
      this.resourcesAccessor = a;
    }
    async getTranslations(a, i = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let s;
        return (
          o.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, o)) {
        const u = await this.getTranslationResource(s);
        if (u) return { translations: u, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const i = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(a, i);
      return await Promise.all(
        o.map(async (c) => {
          const s = await this.getTranslationResource(c);
          return { locale: c, translations: s };
        }),
      );
    }
    reset() {
      (this.i18nInfoConfig = null), this.translationResources.clear();
    }
    async getTranslationResource(a) {
      let i = this.translationResources.get(a);
      if (!i)
        try {
          (i = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, i);
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
      const { locales: o, fallback: c } = i,
        s = [a],
        u = c[a];
      return (
        u && Array.isArray(u) && u.length > 0 && s.push(...u),
        e(s, i.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return (ar.TranslationsGetter = r), ar;
}
var gn = {},
  Ji = {},
  cc;
function ef() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0);
        const r = Gt.__importDefault($p()),
          n = (i, o, c) => {
            const s = i[c];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const a = (i, o) => {
          let c = i[o];
          if (!c) {
            const s = o.split(".");
            s.length > 1 && (c = (0, r.default)(i, s, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = a;
      })(Ji)),
    Ji
  );
}
var uc;
function th() {
  if (uc) return gn;
  (uc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.Translator = void 0);
  const e = ef();
  class t {
    constructor(n, a) {
      Kt(this, "locale");
      Kt(this, "translationsGetter");
      Kt(this, "localeLookupOrderedTranslations", null);
      Kt(this, "cache", new Map());
      (this.locale = n), (this.translationsGetter = a);
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
        (a = a ?? null), this.cache.set(n, a);
      }
      return a;
    }
  }
  return (gn.Translator = t), gn;
}
var bn = {},
  lc;
function rh() {
  if (lc) return bn;
  (lc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.ensureLocale = void 0);
  const e = Qd(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, o) => {
        const [c] = o.split("-");
        return i[c] || (i[c] = o), i;
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (i) => {
      const o = i.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return (bn.ensureLocale = a), bn;
}
var Xi = {},
  dc;
function nh() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0);
        const t = (u) => typeof u == "object" && u !== null && !Array.isArray(u),
          r = (u) => typeof (u == null ? void 0 : u.i18n) == "string",
          n = (u) => u.startsWith("connect-"),
          a = (u) => u.startsWith("core:"),
          i = (u) => {
            const l = new Set(),
              d = (f, v) =>
                !t(f) || l.has(f)
                  ? []
                  : (l.add(f),
                    Object.entries(f).flatMap(([h, p]) => {
                      const g = [...v, h];
                      return r(p)
                        ? [{ propertyPath: g, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((b) => d(b, g))
                          : d(p, g);
                    }));
            return d(u, []);
          },
          o = (u) =>
            Object.entries(u).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const c = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = i(d[0]);
            for (const { key: v } of f) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = i(d[0]);
            for (const v of f) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Xi)),
    Xi
  );
}
var Zi = {},
  fc;
function ah() {
  return fc || ((fc = 1), Object.defineProperty(Zi, "__esModule", { value: !0 })), Zi;
}
var vc;
function tf() {
  return (
    vc ||
      ((vc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0);
        const t = Gt;
        t.__exportStar(Qd(), e),
          t.__exportStar(eh(), e),
          t.__exportStar(th(), e),
          t.__exportStar(rh(), e);
        var r = ef();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = nh();
        Object.defineProperty(e, "extractI18nKeysFromModules", {
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
          t.__exportStar(ah(), e);
      })(Yi)),
    Yi
  );
}
var pc;
function ih() {
  if (pc) return hn;
  (pc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.getContext = void 0);
  const e = Ie(),
    t = tf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i == null ? void 0 : i.locale;
      return o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i;
    };
  return (hn.getContext = n), hn;
}
var yn = {},
  hc;
function oh() {
  if (hc) return yn;
  (hc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.changeWindowTitle = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return (yn.changeWindowTitle = n), yn;
}
var mn = {},
  gc;
function sh() {
  if (gc) return mn;
  (gc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.theme = void 0);
  const t = (0, Ie().getCallBridge)();
  return (mn.theme = { enable: () => t("enableTheming") }), mn;
}
var bc;
function ch() {
  if (bc) return ln;
  (bc = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.view = void 0);
  const e = Jp(),
    t = Xp(),
    r = Zp(),
    n = Qp(),
    a = ih(),
    i = oh(),
    o = sh();
  return (
    (ln.view = {
      submit: e.submit,
      close: t.close,
      refresh: r.refresh,
      createHistory: n.createHistory,
      getContext: a.getContext,
      theme: o.theme,
      changeWindowTitle: i.changeWindowTitle,
    }),
    ln
  );
}
var yc;
function rf() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(ch(), e);
      })(Ki)),
    Ki
  );
}
var Qi = {},
  _n = {},
  mc;
function uh() {
  if (mc) return _n;
  (mc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.router = void 0);
  const t = (0, Ie().getCallBridge)(),
    r = async (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "same-tab" });
      if (!(i != null && i.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "same-tab" });
    },
    n = async (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "new-tab" });
      if (!(i != null && i.target)) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "new-tab" });
    },
    a = async () => t("reload");
  return (_n.router = { navigate: r, open: n, reload: a }), _n;
}
var _c;
function lh() {
  return (
    _c ||
      ((_c = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(uh(), e);
      })(Qi)),
    Qi
  );
}
var eo = {},
  wn = {},
  wc;
function dh() {
  if (wc) return wn;
  (wc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.Modal = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(o) {
      var c, s;
      (this.resource = (o == null ? void 0 : o.resource) || null),
        (this.onClose = (o == null ? void 0 : o.onClose) || n),
        (this.size = (o == null ? void 0 : o.size) || "medium"),
        (this.context = (o == null ? void 0 : o.context) || {}),
        (this.closeOnEscape =
          (c = o == null ? void 0 : o.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick =
          (s = o == null ? void 0 : o.closeOnOverlayClick) !== null && s !== void 0 ? s : !0);
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
  return (wn.Modal = a), wn;
}
var Oc;
function fh() {
  return (
    Oc ||
      ((Oc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(dh(), e);
      })(eo)),
    eo
  );
}
var Lt = {},
  On = {},
  ir = {},
  kc;
function vh() {
  if (kc) return ir;
  (kc = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0);
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
    const c = new Uint8Array(o);
    return new Blob([c], { type: n });
  };
  ir.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const i = new FileReader();
      (i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = a),
        i.readAsDataURL(r);
    });
  return (ir.blobToBase64 = t), ir;
}
var Sc;
function ph() {
  if (Sc) return On;
  (Sc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.productFetchApi = void 0);
  const e = vh(),
    t = async (a) => {
      const i = {};
      for (const [o, c] of a.entries())
        if (o === "file") {
          const s = c.name,
            u = c.type;
          (i.file = await (0, e.blobToBase64)(c)), (i.__fileName = s), (i.__fileType = u);
        } else i[o] = c;
      return JSON.stringify(i);
    },
    r = async (a) => {
      const i = (a == null ? void 0 : a.body) instanceof FormData,
        o = i ? await t(a == null ? void 0 : a.body) : a == null ? void 0 : a.body,
        c = new Request("", {
          body: o,
          method: a == null ? void 0 : a.method,
          headers: a == null ? void 0 : a.headers,
        }),
        s = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(s),
        isMultipartFormData: i,
      };
    },
    n = (a) => {
      const i = async (o, c, s) => {
        const { body: u, headers: l, isMultipartFormData: d } = await r(s);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const f = {
            product: o,
            restPath: c,
            fetchRequestInit: { ...s, body: u, headers: [...l.entries()] },
            isMultipartFormData: d,
          },
          {
            body: v,
            headers: h,
            statusText: p,
            status: g,
            isAttachment: b,
          } = await a("fetchProduct", f),
          m = b ? (0, e.base64ToBlob)(v, h["content-type"]) : v;
        return new Response(m || null, { headers: h, status: g, statusText: p });
      };
      return {
        requestConfluence: (o, c) => i("confluence", o, c),
        requestJira: (o, c) => i("jira", o, c),
        requestBitbucket: (o, c) => i("bitbucket", o, c),
      };
    };
  return (On.productFetchApi = n), On;
}
var Ec;
function hh() {
  if (Ec) return Lt;
  Ec = 1;
  var e;
  Object.defineProperty(Lt, "__esModule", { value: !0 }),
    (Lt.requestBitbucket = Lt.requestJira = Lt.requestConfluence = void 0);
  const t = Ie();
  return (
    (e = (0, ph().productFetchApi)((0, t.getCallBridge)())),
    (Lt.requestConfluence = e.requestConfluence),
    (Lt.requestJira = e.requestJira),
    (Lt.requestBitbucket = e.requestBitbucket),
    Lt
  );
}
var to = {},
  kn = {},
  xc;
function gh() {
  if (xc) return kn;
  (xc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.showFlag = void 0);
  const e = Ie(),
    t = jt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return (kn.showFlag = n), kn;
}
var Cc;
function bh() {
  return (
    Cc ||
      ((Cc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0);
        var t = gh();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(to)),
    to
  );
}
var ro = {},
  Sn = {},
  Pc;
function yh() {
  if (Pc) return Sn;
  (Pc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.events = void 0);
  const t = (0, Ie().getCallBridge)(),
    r = (a, i) => t("emit", { event: a, payload: i }),
    n = (a, i) => t("on", { event: a, callback: i });
  return (Sn.events = { emit: r, on: n }), Sn;
}
var Rc;
function mh() {
  return (
    Rc ||
      ((Rc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(yh(), e);
      })(ro)),
    ro
  );
}
var Mt = {},
  Ac;
function _h() {
  if (Ac) return Mt;
  (Ac = 1),
    Object.defineProperty(Mt, "__esModule", { value: !0 }),
    (Mt.createTranslationFunction = Mt.getTranslations = Mt.resetTranslationsCache = void 0);
  const e = tf(),
    t = rf(),
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
  Mt.resetTranslationsCache = a;
  const i = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s);
  };
  Mt.getTranslations = i;
  const o = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const u = new e.Translator(s, n);
    return (
      await u.init(),
      (l, d) => {
        var f, v;
        return (v = (f = u.translate(l)) !== null && f !== void 0 ? f : d) !== null && v !== void 0
          ? v
          : l;
      }
    );
  };
  return (Mt.createTranslationFunction = o), Mt;
}
var jc;
function wh() {
  return (
    jc ||
      ((jc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0);
        const t = Gt;
        var r = Gp();
        Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Wp(), e),
          t.__exportStar(Yp(), e),
          t.__exportStar(rf(), e),
          t.__exportStar(lh(), e),
          t.__exportStar(fh(), e),
          t.__exportStar(hh(), e),
          t.__exportStar(bh(), e),
          t.__exportStar(mh(), e),
          (e.i18n = t.__importStar(_h()));
      })(Gi)),
    Gi
  );
}
var Bt = wh();
function pe(e, t) {
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
function Oh(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function nf(e) {
  var t = Oh(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Ic(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, nf(n.key), n);
  }
}
function he(e, t, r) {
  return (
    t && Ic(e.prototype, t),
    r && Ic(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function De(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return kh(e);
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
function aa(e, t) {
  return (
    (aa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    aa(e, t)
  );
}
function Te(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && aa(e, t);
}
function C(e, t, r) {
  return (
    (t = nf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ke() {}
function Sh(e) {
  if (Array.isArray(e)) return e;
}
function Eh(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      s = !0,
      u = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); s = !0);
    } catch (l) {
      (u = !0), (a = l);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return c;
  }
}
function Io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function af(e, t) {
  if (e) {
    if (typeof e == "string") return Io(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Io(e, t)
          : void 0
    );
  }
}
function xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(e, t) {
  return Sh(e) || Eh(e, t) || af(e, t) || xh();
}
var of = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Ch = function (t) {
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
  Xa = function (t, r) {
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
  sf = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Dc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Ph = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var c = Dc(o, n, a),
      s = Dc(i.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = te(l, 1),
      f = d[0];
    return u.splice(s, 0, f), u;
  };
const Rh = "modulepreload",
  Ah = function (e, t) {
    return new URL(e, t).href;
  },
  Tc = {},
  jh = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let o = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f }),
            ),
          ),
        );
      };
      const c = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        u = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      a = o(
        r.map((l) => {
          if (((l = Ah(l, n)), l in Tc)) return;
          Tc[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let p = c.length - 1; p >= 0; p--) {
              const g = c[p];
              if (g.href === l && (!d || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = d ? "stylesheet" : Rh),
            d || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = l),
            u && h.setAttribute("nonce", u),
            document.head.appendChild(h),
            d)
          )
            return new Promise((p, g) => {
              h.addEventListener("load", p),
                h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`)));
            });
        }),
      );
    }
    function i(o) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = o), window.dispatchEvent(c), !c.defaultPrevented)) throw o;
    }
    return a.then((o) => {
      for (const c of o || []) c.status === "rejected" && i(c.reason);
      return t().catch(i);
    });
  };
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    J.apply(null, arguments)
  );
}
function Ih(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function se(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = Ih(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      (r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function Lc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function no(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lc(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Dh = (function () {
  function e(t) {
    var r = this;
    pe(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = no({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload);
  }
  return he(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ae(r) === "object" && (this.payload = no(no({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Th(e) {
  if (Array.isArray(e)) return Io(e);
}
function Lh(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Mh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return Th(e) || Lh(e) || af(e) || Mh();
}
function $h(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function Za() {
  return (
    (Za =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = $h(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Za.apply(null, arguments)
  );
}
function Nh(e, t, r) {
  return (t = X(t)), De(e, cf() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function cf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cf = function () {
    return !!e;
  })();
}
function Fh(e, t, r, n) {
  var a = Za(X(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var zh = (function (e) {
  function t(r) {
    var n;
    return (
      pe(this, t),
      (n = Nh(this, t, [r])),
      C(n, "_isUIAnalyticsEvent", !0),
      C(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Me(n.context),
          i = Me(n.handlers),
          o = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: i, payload: o });
      }),
      C(n, "fire", function (a) {
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
    Te(t, e),
    he(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : Fh(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(Dh);
function Mc(e, t, r, n, a, i, o) {
  try {
    var c = e[i](o),
      s = c.value;
  } catch (u) {
    return void r(u);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function ge(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(s) {
        Mc(i, n, a, o, c, "next", s);
      }
      function c(s) {
        Mc(i, n, a, o, c, "throw", s);
      }
      o(void 0);
    });
  };
}
var ao = { exports: {} },
  io = { exports: {} },
  $c;
function Bh() {
  return (
    $c ||
      (($c = 1),
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
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(io)),
    io.exports
  );
}
var Nc;
function qh() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        var t = Bh().default;
        function r() {
          (e.exports = r =
            function () {
              return a;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var n,
            a = {},
            i = Object.prototype,
            o = i.hasOwnProperty,
            c = typeof Symbol == "function" ? Symbol : {},
            s = c.iterator || "@@iterator",
            u = c.asyncIterator || "@@asyncIterator",
            l = c.toStringTag || "@@toStringTag";
          function d(P, E, I, j) {
            return Object.defineProperty(P, E, {
              value: I,
              enumerable: !j,
              configurable: !j,
              writable: !j,
            });
          }
          try {
            d({}, "");
          } catch {
            d = function (I, j, M) {
              return (I[j] = M);
            };
          }
          function f(P, E, I, j) {
            var M = E && E.prototype instanceof p ? E : p,
              F = Object.create(M.prototype);
            return (
              d(
                F,
                "_invoke",
                (function (R, K, q) {
                  var G = 1;
                  return function (ie, Z) {
                    if (G === 3) throw Error("Generator is already running");
                    if (G === 4) {
                      if (ie === "throw") throw Z;
                      return { value: n, done: !0 };
                    }
                    for (q.method = ie, q.arg = Z; ; ) {
                      var le = q.delegate;
                      if (le) {
                        var fe = L(le, q);
                        if (fe) {
                          if (fe === h) continue;
                          return fe;
                        }
                      }
                      if (q.method === "next") q.sent = q._sent = q.arg;
                      else if (q.method === "throw") {
                        if (G === 1) throw ((G = 4), q.arg);
                        q.dispatchException(q.arg);
                      } else q.method === "return" && q.abrupt("return", q.arg);
                      G = 3;
                      var ye = v(R, K, q);
                      if (ye.type === "normal") {
                        if (((G = q.done ? 4 : 2), ye.arg === h)) continue;
                        return { value: ye.arg, done: q.done };
                      }
                      ye.type === "throw" && ((G = 4), (q.method = "throw"), (q.arg = ye.arg));
                    }
                  };
                })(P, I, new B(j || [])),
                !0,
              ),
              F
            );
          }
          function v(P, E, I) {
            try {
              return { type: "normal", arg: P.call(E, I) };
            } catch (j) {
              return { type: "throw", arg: j };
            }
          }
          a.wrap = f;
          var h = {};
          function p() {}
          function g() {}
          function b() {}
          var m = {};
          d(m, s, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            w = O && O(O(W([])));
          w && w !== i && o.call(w, s) && (m = w);
          var _ = (b.prototype = p.prototype = Object.create(m));
          function k(P) {
            ["next", "throw", "return"].forEach(function (E) {
              d(P, E, function (I) {
                return this._invoke(E, I);
              });
            });
          }
          function x(P, E) {
            function I(M, F, R, K) {
              var q = v(P[M], P, F);
              if (q.type !== "throw") {
                var G = q.arg,
                  ie = G.value;
                return ie && t(ie) == "object" && o.call(ie, "__await")
                  ? E.resolve(ie.__await).then(
                      function (Z) {
                        I("next", Z, R, K);
                      },
                      function (Z) {
                        I("throw", Z, R, K);
                      },
                    )
                  : E.resolve(ie).then(
                      function (Z) {
                        (G.value = Z), R(G);
                      },
                      function (Z) {
                        return I("throw", Z, R, K);
                      },
                    );
              }
              K(q.arg);
            }
            var j;
            d(
              this,
              "_invoke",
              function (M, F) {
                function R() {
                  return new E(function (K, q) {
                    I(M, F, K, q);
                  });
                }
                return (j = j ? j.then(R, R) : R());
              },
              !0,
            );
          }
          function L(P, E) {
            var I = E.method,
              j = P.i[I];
            if (j === n)
              return (
                (E.delegate = null),
                (I === "throw" &&
                  P.i.return &&
                  ((E.method = "return"), (E.arg = n), L(P, E), E.method === "throw")) ||
                  (I !== "return" &&
                    ((E.method = "throw"),
                    (E.arg = new TypeError("The iterator does not provide a '" + I + "' method")))),
                h
              );
            var M = v(j, P.i, E.arg);
            if (M.type === "throw")
              return (E.method = "throw"), (E.arg = M.arg), (E.delegate = null), h;
            var F = M.arg;
            return F
              ? F.done
                ? ((E[P.r] = F.value),
                  (E.next = P.n),
                  E.method !== "return" && ((E.method = "next"), (E.arg = n)),
                  (E.delegate = null),
                  h)
                : F
              : ((E.method = "throw"),
                (E.arg = new TypeError("iterator result is not an object")),
                (E.delegate = null),
                h);
          }
          function N(P) {
            this.tryEntries.push(P);
          }
          function T(P) {
            var E = P[4] || {};
            (E.type = "normal"), (E.arg = n), (P[4] = E);
          }
          function B(P) {
            (this.tryEntries = [[-1]]), P.forEach(N, this), this.reset(!0);
          }
          function W(P) {
            if (P != null) {
              var E = P[s];
              if (E) return E.call(P);
              if (typeof P.next == "function") return P;
              if (!isNaN(P.length)) {
                var I = -1,
                  j = function M() {
                    for (; ++I < P.length; )
                      if (o.call(P, I)) return (M.value = P[I]), (M.done = !1), M;
                    return (M.value = n), (M.done = !0), M;
                  };
                return (j.next = j);
              }
            }
            throw new TypeError(t(P) + " is not iterable");
          }
          return (
            (g.prototype = b),
            d(_, "constructor", b),
            d(b, "constructor", g),
            (g.displayName = d(b, l, "GeneratorFunction")),
            (a.isGeneratorFunction = function (P) {
              var E = typeof P == "function" && P.constructor;
              return !!E && (E === g || (E.displayName || E.name) === "GeneratorFunction");
            }),
            (a.mark = function (P) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(P, b)
                  : ((P.__proto__ = b), d(P, l, "GeneratorFunction")),
                (P.prototype = Object.create(_)),
                P
              );
            }),
            (a.awrap = function (P) {
              return { __await: P };
            }),
            k(x.prototype),
            d(x.prototype, u, function () {
              return this;
            }),
            (a.AsyncIterator = x),
            (a.async = function (P, E, I, j, M) {
              M === void 0 && (M = Promise);
              var F = new x(f(P, E, I, j), M);
              return a.isGeneratorFunction(E)
                ? F
                : F.next().then(function (R) {
                    return R.done ? R.value : F.next();
                  });
            }),
            k(_),
            d(_, l, "Generator"),
            d(_, s, function () {
              return this;
            }),
            d(_, "toString", function () {
              return "[object Generator]";
            }),
            (a.keys = function (P) {
              var E = Object(P),
                I = [];
              for (var j in E) I.unshift(j);
              return function M() {
                for (; I.length; ) if ((j = I.pop()) in E) return (M.value = j), (M.done = !1), M;
                return (M.done = !0), M;
              };
            }),
            (a.values = W),
            (B.prototype = {
              constructor: B,
              reset: function (E) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = n),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = n),
                  this.tryEntries.forEach(T),
                  !E)
                )
                  for (var I in this)
                    I.charAt(0) === "t" && o.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = n);
              },
              stop: function () {
                this.done = !0;
                var E = this.tryEntries[0][4];
                if (E.type === "throw") throw E.arg;
                return this.rval;
              },
              dispatchException: function (E) {
                if (this.done) throw E;
                var I = this;
                function j(ie) {
                  (R.type = "throw"), (R.arg = E), (I.next = ie);
                }
                for (var M = I.tryEntries.length - 1; M >= 0; --M) {
                  var F = this.tryEntries[M],
                    R = F[4],
                    K = this.prev,
                    q = F[1],
                    G = F[2];
                  if (F[0] === -1) return j("end"), !1;
                  if (!q && !G) throw Error("try statement without catch or finally");
                  if (F[0] != null && F[0] <= K) {
                    if (K < q) return (this.method = "next"), (this.arg = n), j(q), !0;
                    if (K < G) return j(G), !1;
                  }
                }
              },
              abrupt: function (E, I) {
                for (var j = this.tryEntries.length - 1; j >= 0; --j) {
                  var M = this.tryEntries[j];
                  if (M[0] > -1 && M[0] <= this.prev && this.prev < M[2]) {
                    var F = M;
                    break;
                  }
                }
                F && (E === "break" || E === "continue") && F[0] <= I && I <= F[2] && (F = null);
                var R = F ? F[4] : {};
                return (
                  (R.type = E),
                  (R.arg = I),
                  F ? ((this.method = "next"), (this.next = F[2]), h) : this.complete(R)
                );
              },
              complete: function (E, I) {
                if (E.type === "throw") throw E.arg;
                return (
                  E.type === "break" || E.type === "continue"
                    ? (this.next = E.arg)
                    : E.type === "return"
                      ? ((this.rval = this.arg = E.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : E.type === "normal" && I && (this.next = I),
                  h
                );
              },
              finish: function (E) {
                for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                  var j = this.tryEntries[I];
                  if (j[2] === E) return this.complete(j[4], j[3]), T(j), h;
                }
              },
              catch: function (E) {
                for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                  var j = this.tryEntries[I];
                  if (j[0] === E) {
                    var M = j[4];
                    if (M.type === "throw") {
                      var F = M.arg;
                      T(j);
                    }
                    return F;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (E, I, j) {
                return (
                  (this.delegate = { i: W(E), r: I, n: j }),
                  this.method === "next" && (this.arg = n),
                  h
                );
              },
            }),
            a
          );
        }
        (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(ao)),
    ao.exports
  );
}
var oo, Fc;
function Uh() {
  if (Fc) return oo;
  Fc = 1;
  var e = qh()();
  oo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return oo;
}
var Vh = Uh();
const H = mr(Vh);
var or = {},
  Er = {},
  Aa = {},
  zc;
function Gh() {
  if (zc) return Aa;
  (zc = 1), Object.defineProperty(Aa, "__esModule", { value: !0 });
  const e = Qt();
  let t = class {
    constructor(n) {
      (this._sdkKey = n),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set());
    }
    reset() {
      (this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null);
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
          (o == null ? void 0 : o.has_updates) !== !0 ||
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
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = n.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || c)
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
      return this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n;
    }
    _getDetails(n) {
      var a, i;
      const o = this.getCurrentSourceDetails();
      let c = o.reason;
      const s = (a = o.warnings) !== null && a !== void 0 ? a : [];
      this._source === "Bootstrap" && s.length > 0 && (c = c + s[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${n ? "Unrecognized" : "Recognized"}`);
      const u =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return u && (o.bootstrapMetadata = u), Object.assign(Object.assign({}, o), { reason: c });
    }
  };
  return (Aa.default = t), Aa;
}
var xr = {},
  En = {},
  Bc;
function Hh() {
  if (Bc) return En;
  (Bc = 1),
    Object.defineProperty(En, "__esModule", { value: !0 }),
    (En._resolveDeltasResponse = void 0);
  const e = Qt(),
    t = 2;
  function r(o, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const u = n(o, s),
      l = a(u),
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
  En._resolveDeltasResponse = r;
  function n(o, c) {
    return Object.assign(Object.assign(Object.assign({}, o), c), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(o) {
    const c = o;
    return (
      i(o.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      i(o.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      i(o.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function i(o, c) {
    o == null ||
      o.forEach((s) => {
        delete c[s];
      });
  }
  return En;
}
var qc;
function uf() {
  if (qc) return xr;
  qc = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (a, i, o, c) {
      function s(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (p) {
            l(p);
          }
        }
        function f(h) {
          try {
            v(c.throw(h));
          } catch (p) {
            l(p);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        v((c = c.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Hh();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const c = i == null ? void 0 : i.networkConfig;
      (this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c == null ? void 0 : c.initializeUrl,
          c == null ? void 0 : c.api,
          c == null ? void 0 : c.initializeFallbackUrls,
        ));
    }
    fetchEvaluations(i, o, c, s, u) {
      var l, d, f, v, h, p;
      return e(this, void 0, void 0, function* () {
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
        if (g != null && g.has_updates) {
          const m =
            (g == null ? void 0 : g.hash_used) !==
            ((p =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, c);
      });
    }
    _fetchEvaluations(i, o, c, s) {
      var u, l;
      return e(this, void 0, void 0, function* () {
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if ((d == null ? void 0 : d.code) === 204) return '{"has_updates": false}';
        if ((d == null ? void 0 : d.code) !== 200)
          return (u = d == null ? void 0 : d.body) !== null && u !== void 0 ? u : null;
        if (
          (o == null ? void 0 : o.has_updates) !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, c), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return (xr.default = n), xr;
}
var xn = {},
  Uc;
function Wh() {
  if (Uc) return xn;
  (Uc = 1),
    Object.defineProperty(xn, "__esModule", { value: !0 }),
    (xn._makeParamStoreGetter = void 0);
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
  function o(l, d, f, v) {
    const p = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(l, d, f, v) {
    const p = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function s(l, d, f, v) {
    const p = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function u(l, d, f) {
    return (v, h) => {
      if (d == null) return h;
      const p = d[v];
      if (p == null || (h != null && (0, e._typeOf)(h) !== p.param_type)) return h;
      switch (p.ref_type) {
        case "static":
          return a(p);
        case "gate":
          return i(l, p, f);
        case "dynamic_config":
          return o(l, p, h, f);
        case "experiment":
          return c(l, p, h, f);
        case "layer":
          return s(l, p, h, f);
        default:
          return h;
      }
    };
  }
  return (xn._makeParamStoreGetter = u), xn;
}
var sr = {},
  Vc;
function Kh() {
  if (Vc) return sr;
  Vc = 1;
  var e =
    (sr && sr.__awaiter) ||
    function (a, i, o, c) {
      function s(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (p) {
            l(p);
          }
        }
        function f(h) {
          try {
            v(c.throw(h));
          } catch (p) {
            l(p);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, f);
        }
        v((c = c.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0);
  const t = Qt(),
    r = uf();
  let n = class extends t.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null);
    }
    attach(i, o, c) {
      super.attach(i, o, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(o ?? {}));
    }
    getDataAsync(i, o, c) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), c);
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
    _fetchFromNetwork(i, o, c, s) {
      var u;
      return e(this, void 0, void 0, function* () {
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), i, c == null ? void 0 : c.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return (sr.StatsigEvaluationsDataAdapter = n), sr;
}
var Gc;
function Yh() {
  if (Gc) return Er;
  Gc = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (c, s, u, l) {
      function d(f) {
        return f instanceof u
          ? f
          : new u(function (v) {
              v(f);
            });
      }
      return new (u || (u = Promise))(function (f, v) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            v(m);
          }
        }
        function p(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            v(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, p);
        }
        g((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Qt(),
    r = Gh(),
    n = uf(),
    a = Wh(),
    i = Kh();
  let o = class Do extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof Do
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Do(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (p) => {
        this.$emt(p);
      });
      super(
        s,
        (d = l == null ? void 0 : l.dataAdapter) !== null && d !== void 0
          ? d
          : new i.StatsigEvaluationsDataAdapter(),
        v,
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
        (this._network = v),
        (this._user = this._configureUser(u, l));
      const h = (f = l == null ? void 0 : l.plugins) !== null && f !== void 0 ? f : [];
      for (const p of h) p.bind(this);
    }
    initializeSync(s) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
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
    updateUserSync(s, u) {
      var l;
      const d = performance.now(),
        f = [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      v == null && f.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v);
      const h = u == null ? void 0 : u.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && (v == null ? void 0 : v.source) === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
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
        d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (f = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: f })),
          this._finalizeUpdate(d),
          f ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(this._sdkKey, f, this._store.getCurrentSourceDetails());
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          v,
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
      };
    }
    checkGate(s, u) {
      return this.getFeatureGate(s, u).value;
    }
    logEvent(s, u, l) {
      const d = typeof s == "string" ? { eventName: s, value: u, metadata: l } : s;
      this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
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
    _finalizeUpdate(s) {
      this._store.finalize(), this._setStatus("Ready", s);
    }
    _runPostUpdate(s, u) {
      this.dataAdapter.getDataAsync(s, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options));
    }
    _configureUser(s, u) {
      var l;
      const d = (0, t._normalizeUser)(s, u),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return f && t.StableID.setOverride(f, this._sdkKey), d;
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: f, details: v } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, v, f),
        p =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = p ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: f, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = p ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, f, v;
      const { result: h, details: p } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, p, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(f, g, this._user, u),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(s, u) {
      var l, d, f;
      const { result: v, details: h } = this._store.getLayer(s),
        p = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, p, this._user, u);
      u != null && u.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        p,
        g,
        (f = g == null ? void 0 : g.__value) !== null && f !== void 0 ? f : p.__value,
        (m) => {
          (u != null && u.disableExposureLog) ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return this.$emt({ name: "layer_evaluation", layer: b }), b;
    }
    _getParameterStoreImpl(s, u) {
      var l, d;
      const { result: f, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
          details: v,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, u),
        },
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, u);
      return (
        p != null &&
          ((h.__configuration = p.config),
          (h.details = p.details),
          (h.get = (0, a._makeParamStoreGetter)(this, p.config, u))),
        h
      );
    }
  };
  return (Er.default = o), Er;
}
var Hc;
function Jh() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        var t =
            (or && or.__createBinding) ||
            (Object.create
              ? function (o, c, s, u) {
                  u === void 0 && (u = s);
                  var l = Object.getOwnPropertyDescriptor(c, s);
                  (!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(o, u, l);
                }
              : function (o, c, s, u) {
                  u === void 0 && (u = s), (o[u] = c[s]);
                }),
          r =
            (or && or.__exportStar) ||
            function (o, c) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, o, s);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0);
        const n = Qt(),
          a = Yh();
        (e.StatsigClient = a.default), r(Qt(), e);
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var mt = Jh(),
  so = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */ var Wc;
function Xh() {
  return (
    Wc ||
      ((Wc = 1),
      (function (e, t) {
        (function (r) {
          var n = Array.isArray
              ? Array.isArray
              : function (f) {
                  return Object.prototype.toString.call(f) === "[object Array]";
                },
            a = 10;
          function i() {
            (this._events = {}), this._conf && o.call(this, this._conf);
          }
          function o(d) {
            d
              ? ((this._conf = d),
                d.delimiter && (this.delimiter = d.delimiter),
                (this._maxListeners = d.maxListeners !== r ? d.maxListeners : a),
                d.wildcard && (this.wildcard = d.wildcard),
                d.newListener && (this.newListener = d.newListener),
                d.verboseMemoryLeak && (this.verboseMemoryLeak = d.verboseMemoryLeak),
                this.wildcard && (this.listenerTree = {}))
              : (this._maxListeners = a);
          }
          function c(d, f) {
            var v =
              "(node) warning: possible EventEmitter memory leak detected. " +
              d +
              " listeners added. Use emitter.setMaxListeners() to increase limit.";
            if (
              (this.verboseMemoryLeak && (v += " Event name: " + f + "."),
              typeof process < "u" && process.emitWarning)
            ) {
              var h = new Error(v);
              (h.name = "MaxListenersExceededWarning"),
                (h.emitter = this),
                (h.count = d),
                process.emitWarning(h);
            } else console.error(v), console.trace && console.trace();
          }
          function s(d) {
            (this._events = {}),
              (this.newListener = !1),
              (this.verboseMemoryLeak = !1),
              o.call(this, d);
          }
          s.EventEmitter2 = s;
          function u(d, f, v, h) {
            if (!v) return [];
            var p = [],
              g,
              b,
              m,
              O,
              w,
              _,
              k,
              x = f.length,
              L = f[h],
              N = f[h + 1];
            if (h === x && v._listeners) {
              if (typeof v._listeners == "function") return d && d.push(v._listeners), [v];
              for (g = 0, b = v._listeners.length; g < b; g++) d && d.push(v._listeners[g]);
              return [v];
            }
            if (L === "*" || L === "**" || v[L]) {
              if (L === "*") {
                for (m in v)
                  m !== "_listeners" && v.hasOwnProperty(m) && (p = p.concat(u(d, f, v[m], h + 1)));
                return p;
              } else if (L === "**") {
                (k = h + 1 === x || (h + 2 === x && N === "*")),
                  k && v._listeners && (p = p.concat(u(d, f, v, x)));
                for (m in v)
                  m !== "_listeners" &&
                    v.hasOwnProperty(m) &&
                    (m === "*" || m === "**"
                      ? (v[m]._listeners && !k && (p = p.concat(u(d, f, v[m], x))),
                        (p = p.concat(u(d, f, v[m], h))))
                      : m === N
                        ? (p = p.concat(u(d, f, v[m], h + 2)))
                        : (p = p.concat(u(d, f, v[m], h))));
                return p;
              }
              p = p.concat(u(d, f, v[L], h + 1));
            }
            if (((O = v["*"]), O && u(d, f, O, h + 1), (w = v["**"]), w))
              if (h < x) {
                w._listeners && u(d, f, w, x);
                for (m in w)
                  m !== "_listeners" &&
                    w.hasOwnProperty(m) &&
                    (m === N
                      ? u(d, f, w[m], h + 2)
                      : m === L
                        ? u(d, f, w[m], h + 1)
                        : ((_ = {}), (_[m] = w[m]), u(d, f, { "**": _ }, h + 1)));
              } else
                w._listeners ? u(d, f, w, x) : w["*"] && w["*"]._listeners && u(d, f, w["*"], x);
            return p;
          }
          function l(d, f) {
            d = typeof d == "string" ? d.split(this.delimiter) : d.slice();
            for (var v = 0, h = d.length; v + 1 < h; v++)
              if (d[v] === "**" && d[v + 1] === "**") return;
            for (var p = this.listenerTree, g = d.shift(); g !== r; ) {
              if ((p[g] || (p[g] = {}), (p = p[g]), d.length === 0))
                return (
                  p._listeners
                    ? (typeof p._listeners == "function" && (p._listeners = [p._listeners]),
                      p._listeners.push(f),
                      !p._listeners.warned &&
                        this._maxListeners > 0 &&
                        p._listeners.length > this._maxListeners &&
                        ((p._listeners.warned = !0), c.call(this, p._listeners.length, g)))
                    : (p._listeners = f),
                  !0
                );
              g = d.shift();
            }
            return !0;
          }
          (s.prototype.delimiter = "."),
            (s.prototype.setMaxListeners = function (d) {
              d !== r &&
                ((this._maxListeners = d),
                this._conf || (this._conf = {}),
                (this._conf.maxListeners = d));
            }),
            (s.prototype.event = ""),
            (s.prototype.once = function (d, f) {
              return this._once(d, f, !1);
            }),
            (s.prototype.prependOnceListener = function (d, f) {
              return this._once(d, f, !0);
            }),
            (s.prototype._once = function (d, f, v) {
              return this._many(d, 1, f, v), this;
            }),
            (s.prototype.many = function (d, f, v) {
              return this._many(d, f, v, !1);
            }),
            (s.prototype.prependMany = function (d, f, v) {
              return this._many(d, f, v, !0);
            }),
            (s.prototype._many = function (d, f, v, h) {
              var p = this;
              if (typeof v != "function")
                throw new Error("many only accepts instances of Function");
              function g() {
                return --f === 0 && p.off(d, g), v.apply(this, arguments);
              }
              return (g._origin = v), this._on(d, g, h), p;
            }),
            (s.prototype.emit = function () {
              this._events || i.call(this);
              var d = arguments[0];
              if (d === "newListener" && !this.newListener && !this._events.newListener) return !1;
              var f = arguments.length,
                v,
                h,
                p,
                g,
                b;
              if (this._all && this._all.length) {
                if (((b = this._all.slice()), f > 3))
                  for (v = new Array(f), g = 0; g < f; g++) v[g] = arguments[g];
                for (p = 0, h = b.length; p < h; p++)
                  switch (((this.event = d), f)) {
                    case 1:
                      b[p].call(this, d);
                      break;
                    case 2:
                      b[p].call(this, d, arguments[1]);
                      break;
                    case 3:
                      b[p].call(this, d, arguments[1], arguments[2]);
                      break;
                    default:
                      b[p].apply(this, v);
                  }
              }
              if (this.wildcard) {
                b = [];
                var m = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                u.call(this, b, m, this.listenerTree, 0);
              } else if (((b = this._events[d]), typeof b == "function")) {
                switch (((this.event = d), f)) {
                  case 1:
                    b.call(this);
                    break;
                  case 2:
                    b.call(this, arguments[1]);
                    break;
                  case 3:
                    b.call(this, arguments[1], arguments[2]);
                    break;
                  default:
                    for (v = new Array(f - 1), g = 1; g < f; g++) v[g - 1] = arguments[g];
                    b.apply(this, v);
                }
                return !0;
              } else b && (b = b.slice());
              if (b && b.length) {
                if (f > 3) for (v = new Array(f - 1), g = 1; g < f; g++) v[g - 1] = arguments[g];
                for (p = 0, h = b.length; p < h; p++)
                  switch (((this.event = d), f)) {
                    case 1:
                      b[p].call(this);
                      break;
                    case 2:
                      b[p].call(this, arguments[1]);
                      break;
                    case 3:
                      b[p].call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      b[p].apply(this, v);
                  }
                return !0;
              } else if (!this._all && d === "error")
                throw arguments[1] instanceof Error
                  ? arguments[1]
                  : new Error("Uncaught, unspecified 'error' event.");
              return !!this._all;
            }),
            (s.prototype.emitAsync = function () {
              this._events || i.call(this);
              var d = arguments[0];
              if (d === "newListener" && !this.newListener && !this._events.newListener)
                return Promise.resolve([!1]);
              var f = [],
                v = arguments.length,
                h,
                p,
                g,
                b,
                m;
              if (this._all) {
                if (v > 3) for (h = new Array(v), b = 1; b < v; b++) h[b] = arguments[b];
                for (g = 0, p = this._all.length; g < p; g++)
                  switch (((this.event = d), v)) {
                    case 1:
                      f.push(this._all[g].call(this, d));
                      break;
                    case 2:
                      f.push(this._all[g].call(this, d, arguments[1]));
                      break;
                    case 3:
                      f.push(this._all[g].call(this, d, arguments[1], arguments[2]));
                      break;
                    default:
                      f.push(this._all[g].apply(this, h));
                  }
              }
              if (this.wildcard) {
                m = [];
                var O = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                u.call(this, m, O, this.listenerTree, 0);
              } else m = this._events[d];
              if (typeof m == "function")
                switch (((this.event = d), v)) {
                  case 1:
                    f.push(m.call(this));
                    break;
                  case 2:
                    f.push(m.call(this, arguments[1]));
                    break;
                  case 3:
                    f.push(m.call(this, arguments[1], arguments[2]));
                    break;
                  default:
                    for (h = new Array(v - 1), b = 1; b < v; b++) h[b - 1] = arguments[b];
                    f.push(m.apply(this, h));
                }
              else if (m && m.length) {
                if (((m = m.slice()), v > 3))
                  for (h = new Array(v - 1), b = 1; b < v; b++) h[b - 1] = arguments[b];
                for (g = 0, p = m.length; g < p; g++)
                  switch (((this.event = d), v)) {
                    case 1:
                      f.push(m[g].call(this));
                      break;
                    case 2:
                      f.push(m[g].call(this, arguments[1]));
                      break;
                    case 3:
                      f.push(m[g].call(this, arguments[1], arguments[2]));
                      break;
                    default:
                      f.push(m[g].apply(this, h));
                  }
              } else if (!this._all && d === "error")
                return arguments[1] instanceof Error
                  ? Promise.reject(arguments[1])
                  : Promise.reject("Uncaught, unspecified 'error' event.");
              return Promise.all(f);
            }),
            (s.prototype.on = function (d, f) {
              return this._on(d, f, !1);
            }),
            (s.prototype.prependListener = function (d, f) {
              return this._on(d, f, !0);
            }),
            (s.prototype.onAny = function (d) {
              return this._onAny(d, !1);
            }),
            (s.prototype.prependAny = function (d) {
              return this._onAny(d, !0);
            }),
            (s.prototype.addListener = s.prototype.on),
            (s.prototype._onAny = function (d, f) {
              if (typeof d != "function")
                throw new Error("onAny only accepts instances of Function");
              return (
                this._all || (this._all = []), f ? this._all.unshift(d) : this._all.push(d), this
              );
            }),
            (s.prototype._on = function (d, f, v) {
              if (typeof d == "function") return this._onAny(d, f), this;
              if (typeof f != "function") throw new Error("on only accepts instances of Function");
              return (
                this._events || i.call(this),
                this.emit("newListener", d, f),
                this.wildcard
                  ? (l.call(this, d, f), this)
                  : (this._events[d]
                      ? (typeof this._events[d] == "function" &&
                          (this._events[d] = [this._events[d]]),
                        v ? this._events[d].unshift(f) : this._events[d].push(f),
                        !this._events[d].warned &&
                          this._maxListeners > 0 &&
                          this._events[d].length > this._maxListeners &&
                          ((this._events[d].warned = !0), c.call(this, this._events[d].length, d)))
                      : (this._events[d] = f),
                    this)
              );
            }),
            (s.prototype.off = function (d, f) {
              if (typeof f != "function")
                throw new Error("removeListener only takes instances of Function");
              var v,
                h = [];
              if (this.wildcard) {
                var p = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                h = u.call(this, null, p, this.listenerTree, 0);
              } else {
                if (!this._events[d]) return this;
                (v = this._events[d]), h.push({ _listeners: v });
              }
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                if (((v = b._listeners), n(v))) {
                  for (var m = -1, O = 0, w = v.length; O < w; O++)
                    if (
                      v[O] === f ||
                      (v[O].listener && v[O].listener === f) ||
                      (v[O]._origin && v[O]._origin === f)
                    ) {
                      m = O;
                      break;
                    }
                  if (m < 0) continue;
                  return (
                    this.wildcard ? b._listeners.splice(m, 1) : this._events[d].splice(m, 1),
                    v.length === 0 &&
                      (this.wildcard ? delete b._listeners : delete this._events[d]),
                    this.emit("removeListener", d, f),
                    this
                  );
                } else
                  (v === f || (v.listener && v.listener === f) || (v._origin && v._origin === f)) &&
                    (this.wildcard ? delete b._listeners : delete this._events[d],
                    this.emit("removeListener", d, f));
              }
              function _(k) {
                if (k !== r) {
                  var x = Object.keys(k);
                  for (var L in x) {
                    var N = x[L],
                      T = k[N];
                    T instanceof Function ||
                      typeof T != "object" ||
                      T === null ||
                      (Object.keys(T).length > 0 && _(k[N]),
                      Object.keys(T).length === 0 && delete k[N]);
                  }
                }
              }
              return _(this.listenerTree), this;
            }),
            (s.prototype.offAny = function (d) {
              var f = 0,
                v = 0,
                h;
              if (d && this._all && this._all.length > 0) {
                for (h = this._all, f = 0, v = h.length; f < v; f++)
                  if (d === h[f]) return h.splice(f, 1), this.emit("removeListenerAny", d), this;
              } else {
                for (h = this._all, f = 0, v = h.length; f < v; f++)
                  this.emit("removeListenerAny", h[f]);
                this._all = [];
              }
              return this;
            }),
            (s.prototype.removeListener = s.prototype.off),
            (s.prototype.removeAllListeners = function (d) {
              if (arguments.length === 0) return !this._events || i.call(this), this;
              if (this.wildcard)
                for (
                  var f = typeof d == "string" ? d.split(this.delimiter) : d.slice(),
                    v = u.call(this, null, f, this.listenerTree, 0),
                    h = 0;
                  h < v.length;
                  h++
                ) {
                  var p = v[h];
                  p._listeners = null;
                }
              else this._events && (this._events[d] = null);
              return this;
            }),
            (s.prototype.listeners = function (d) {
              if (this.wildcard) {
                var f = [],
                  v = typeof d == "string" ? d.split(this.delimiter) : d.slice();
                return u.call(this, f, v, this.listenerTree, 0), f;
              }
              return (
                this._events || i.call(this),
                this._events[d] || (this._events[d] = []),
                n(this._events[d]) || (this._events[d] = [this._events[d]]),
                this._events[d]
              );
            }),
            (s.prototype.eventNames = function () {
              return Object.keys(this._events);
            }),
            (s.prototype.listenerCount = function (d) {
              return this.listeners(d).length;
            }),
            (s.prototype.listenersAny = function () {
              return this._all ? this._all : [];
            }),
            (e.exports = s);
        })();
      })(so)),
    so.exports
  );
}
var Zh = Xh();
function Kc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kc(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ja = "@all-features",
  Qh = (function () {
    function e() {
      pe(this, e), C(this, "eventToValue", new Map()), (this.emitter = new Zh.EventEmitter2());
    }
    return he(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            c = a(r, Yt(Yt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
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
        value: function (r, n, a, i, o, c) {
          var s = this,
            u = "".concat(r, ".").concat(n),
            l = o(r, n, a, Yt(Yt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var v = o(r, n, a, Yt(Yt({}, c), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(i);
            h !== v && (s.eventToValue.set(i, v), i(v));
          };
          return (
            this.emitter.on(u, d),
            function () {
              s.emitter.off(u, d);
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
          this.emitter.emit(ja),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ja;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              });
        },
      },
    ]);
  })(),
  eg = "fedramp-moderate";
function tg() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === eg;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var fs = (function (e) {
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
  Hn = (function (e) {
    return (
      (e.Development = "development"), (e.Staging = "staging"), (e.Production = "production"), e
    );
  })({}),
  ia = (function (e) {
    return (e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e;
  })({}),
  rg = [
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
function Yc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yc(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ia = function (t) {
    return Qa({ perimeter: tg() ? ia.FEDRAMP_MODERATE : ia.COMMERCIAL }, t);
  },
  Cn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, v) {
      var h = te(f, 1),
        p = h[0],
        g = te(v, 1),
        b = g[0];
      return p.localeCompare(b);
    };
    n.sort(i), a.sort(i);
    for (var o = 0; o < n.length; o++) {
      var c = te(n[o], 2),
        s = c[1],
        u = te(a[o], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  Jc = function (t, r, n) {
    var a = {
      customIDs: !(r != null && r.stableID) && n ? Qa({ stableID: mt.StableID.get(n) }, t) : t,
      custom: r,
    };
    return t.atlassianAccountId && (a.userID = t.atlassianAccountId), a;
  },
  ng = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      i = t.loggingBufferMaxSize,
      o = t.localMode,
      c = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      u = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging;
    var f = se(t, rg);
    return Qa(
      Qa({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: c ? c + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: o || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: i,
        disableStorage: u === void 0 ? o : u,
        disableLogging: d === void 0 ? o : d,
      },
    );
  },
  ag = Object.entries(fs).map(function (e) {
    var t = te(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  lf = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = ag.find(function (o) {
            var c = te(o, 1),
              s = c[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : fs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Xc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      pe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c);
    }
    return he(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i,
              o = this.getValue(r, n);
            if (o == null) return n;
            var c = Array.isArray(n) ? "array" : Ae(n),
              s = Array.isArray(o) ? "array" : Ae(o);
            if (a) {
              var u;
              return a(o)
                ? (this.fireExposure(r), o)
                : ((u = this._onDefaultValueFallback) === null ||
                    u === void 0 ||
                    u.call(this, this, r, c, s),
                  n);
            }
            return n == null || c === s
              ? (this.fireExposure(r), o)
              : ((i = this._onDefaultValueFallback) === null ||
                  i === void 0 ||
                  i.call(this, this, r, c, s),
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
              i = new e(
                r.name,
                r.value,
                r.ruleID,
                lf(r.details),
                (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures,
                (a = r.groupName) !== null && a !== void 0 ? a : void 0,
              );
            return (i.experiment = r), i;
          },
        },
      ],
    );
  })(),
  Zc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      pe(this, e),
        (this._logParameterFunction = i),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = c),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = u);
    }
    return he(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i = this,
              o = this._value[r];
            if (o == null) return n;
            var c = function () {
              return i._logLayerParameterExposure(r), o;
            };
            return a
              ? a(o)
                ? c()
                : n
              : n == null || (Ae(o) === Ae(n) && Array.isArray(n) === Array.isArray(o))
                ? c()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var a = this._value[r];
            return a != null && this._logLayerParameterExposure(r), a ?? n;
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
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                lf(r.details),
                function (s, u) {
                  return r.get(u);
                },
                (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures,
                (a = r.__evaluation) === null || a === void 0
                  ? void 0
                  : a.undelegated_secondary_exposures,
                (i = r.__evaluation) === null || i === void 0
                  ? void 0
                  : i.allocated_experiment_name,
                (o = r.__evaluation) === null || o === void 0 ? void 0 : o.explicit_parameters,
              );
            return c;
          },
        },
      ],
    );
  })(),
  zr = "5.3.0";
function ig(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function df() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (df = function () {
    return !!e;
  })();
}
function og(e, t, r) {
  if (df()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && aa(a, r.prototype), a;
}
function To(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (To = function (n) {
      if (n === null || !ig(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return og(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        aa(a, n)
      );
    }),
    To(e)
  );
}
function sg(e, t, r) {
  return (t = X(t)), De(e, ff() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function ff() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ff = function () {
    return !!e;
  })();
}
var Qc = (function (e) {
  function t(r) {
    return pe(this, t), sg(this, t, [r]);
  }
  return Te(t, e), he(t);
})(To(Error));
function eu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? eu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : eu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ug = 5e3,
  lg = "https://api.atlassian.com/flags",
  dg = "https://api.stg.atlassian.com/flags",
  fg = "https://api.dev.atlassian.com/flags",
  vg = "https://api.stg.atlassian-us-gov-mod.com/flags",
  pg = "https://api.atlassian-us-gov-mod.com/flags",
  hg = "/gateway/api/flags",
  co = (function () {
    function e() {
      pe(this, e);
    }
    return he(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ge(
            H.mark(function n(a) {
              var i, o;
              return H.wrap(
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c;
              return H.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (c = { identifiers: i, customAttributes: o, targetApp: a.targetApp }),
                          (u.prev = 1),
                          (u.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, c)
                        );
                      case 4:
                        return u.abrupt("return", u.sent);
                      case 7:
                        if (((u.prev = 7), (u.t0 = u.catch(1)), !(u.t0 instanceof Error))) {
                          u.next = 11;
                          break;
                        }
                        throw u.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return u.stop();
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
          var t = ge(
            H.mark(function n(a) {
              var i;
              return H.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      if (a.ok) {
                        c.next = 5;
                        break;
                      }
                      return (c.next = 3), a.text();
                    case 3:
                      throw (
                        ((i = c.sent),
                        new Qc(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(i)),
                        ))
                      );
                    case 5:
                      if (a.status !== 204) {
                        c.next = 7;
                        break;
                      }
                      throw new Qc("Unexpected 204 response");
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
          var t = ge(
            H.mark(function n(a) {
              var i;
              return H.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return (c.next = 2), a.text();
                    case 2:
                      return (i = c.sent), c.abrupt("return", JSON.parse(i));
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
            a = arguments.length > 2 ? arguments[2] : void 0;
          if (n) return hg;
          if (a === ia.FEDRAMP_MODERATE)
            switch (r) {
              case Hn.Production:
                return pg;
              case Hn.Staging:
                return vg;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === ia.COMMERCIAL)
            switch (r) {
              case Hn.Development:
                return fg;
              case Hn.Staging:
                return dg;
              default:
                return lg;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ge(
            H.mark(function n(a, i, o, c) {
              var s, u, l, d, f;
              return H.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(o.environment, o.useGatewayURL, o.perimeter)),
                          (u = o.fetchTimeoutMs || ug),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            cg(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": zr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
                            ),
                          )
                        );
                      case 5:
                        return (f = h.sent), (h.next = 8), this.handleResponseError(f);
                      case 8:
                        return (h.next = 10), this.extractResponseBody(f);
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
    ]);
  })();
function tu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gg(e, t, r) {
  return (t = X(t)), De(e, vf() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function vf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vf = function () {
    return !!e;
  })();
}
function bg(e, t, r, n) {
  var a = Za(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var yg = (function (e) {
  function t() {
    var r;
    return (
      pe(this, t),
      (r = gg(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Te(t, e),
    he(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: mt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = ge(
            H.mark(function a(i, o) {
              return H.wrap(function (s) {
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
          var r = ge(
            H.mark(function a(i, o, c) {
              return H.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Pn(
                              Pn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: mt._getFullUserHash(o) },
                            ),
                        );
                      case 1:
                      case "end":
                        return u.stop();
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
            Pn(Pn({}, this.bootstrapResult), {}, { fullUserHash: mt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = ge(
            H.mark(function a(i, o, c) {
              return H.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return u.abrupt("return", null);
                    case 1:
                    case "end":
                      return u.stop();
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
          var a = mt._getStorageKey(this._getSdkKey(), n);
          return "".concat(mt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          bg(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Pn({}, this);
          return delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n;
        },
      },
    ])
  );
})(mt.DataAdapterCore);
function ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ru(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ru(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function mg(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = _g(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i,
    o = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return (o = u.done), u;
    },
    e: function (u) {
      (c = !0), (i = u);
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (c) throw i;
      }
    },
  };
}
function _g(e, t) {
  if (e) {
    if (typeof e == "string") return nu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? nu(e, t)
          : void 0
    );
  }
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var uo = "LocalOverride:Recognized",
  wg = "STATSIG_OVERRIDES",
  au = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Cr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  Og = (function () {
    function e(t) {
      pe(this, e),
        (this._overrides = Cr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t);
    }
    return he(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Cr();
          } catch {
            return Cr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Cr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          for (var o = 0, c = a; o < c.length; o++) {
            for (
              var s = c[o],
                u = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              u < l.length;
              u++
            ) {
              var d,
                f = te(l[u], 2),
                v = f[0],
                h = f[1];
              r.gates[v] = h;
            }
            for (
              var p = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              p < g.length;
              p++
            ) {
              var b,
                m = te(g[p], 2),
                O = m[0],
                w = m[1];
              r.configs[O] = w;
            }
            for (
              var _ = 0, k = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              _ < k.length;
              _++
            ) {
              var x,
                L = te(k[_], 2),
                N = L[0],
                T = L[1];
              r.layers[N] = T;
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
            this.parseStoredOverrides(au),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(au);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              c = mg(o),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u = s.value,
                  l = Ve._DJB2(u);
                o.has(l) && delete i[l];
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
          var n = xe(xe({}, Cr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = te(i[a], 2), c = o[0], s = o[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = te(l[u], 2),
                f = d[0],
                v = d[1];
              this._djb2Map.set(Ge(Ve._DJB2(f), c), v);
            }
          this._overrides = n;
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          this.applyOverrides(r), this.saveOverrides();
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          (this._overrides.gates[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "gates"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          delete this._overrides.gates[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "gates")),
            this.saveOverrides();
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
            : xe(xe({}, r), {}, { value: i, details: xe(xe({}, r.details), {}, { reason: uo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          (this._overrides.configs[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
            this.saveOverrides();
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
          (this._overrides.configs[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
            this.saveOverrides();
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
          (this._overrides.layers[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "layers"), n),
            this.saveOverrides();
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          delete this._overrides.layers[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "layers")),
            this.saveOverrides();
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Cr();
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
                  details: xe(xe({}, r.details), {}, { reason: uo }),
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
                  details: xe(xe({}, r.details), {}, { reason: uo }),
                },
              );
        },
      },
    ]);
  })(),
  kg = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function iu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? iu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : iu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ou = "client-default-key",
  Sg = "https://xp.atlassian.com/v1/rgstr",
  Eg = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? wg : n,
        i = r.overrideAdapter;
      pe(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new Qh()),
        C(this, "dataAdapter", new yg()),
        C(this, "statsigValuesUpdated", function () {
          t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated();
        }),
        (this.overrideAdapter = i || new Og(a));
    }
    return he(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ge(
            H.mark(function n(a, i, o) {
              var c = this,
                s,
                u;
              return H.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Ia(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Cn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, i, o)
                            .then(function () {
                              (c.initCompleted = !0), (c.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var f = performance.now(),
                                v = f - u;
                              c.fireClientEvent(u, v, "initialize", c.initCompleted, s.apiKey);
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
          var t = ge(
            H.mark(function n(a, i, o, c) {
              var s = this,
                u,
                l;
              return H.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((u = Ia(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Cn(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          f.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.provider = i),
                          this.provider.setClientVersion(zr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, i, o, c)
                            .then(function () {
                              (s.initCompleted = !0), (s.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var v = performance.now(),
                                h = v - l;
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
            c = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (u) {
                var l = Jt(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: zr,
                    success: i,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                u.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (u) {
                c.initOptions.environment !== Hn.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = ge(
            H.mark(function n(a, i, o) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return H.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = Ia(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          Cn(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.initFromValues(u, i, o, s)
                            .then(function () {
                              (c.initCompleted = !0), (c.initWithDefaults = !0);
                            })
                            .finally(function () {
                              var h = performance.now(),
                                p = h - l;
                              c.fireClientEvent(l, p, "initializeFromValues", c.initCompleted);
                            })),
                          v.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return v.stop();
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c, s;
              return H.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = Ia(a)),
                          (s = function () {
                            return co.fetchExperimentValues(c, i, o).then(function (f) {
                              var v = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
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
          var t = ge(
            H.mark(function n(a, i) {
              var o = this;
              return H.wrap(
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
                        return (s.next = 5), this.provider.setProfile(this.initOptions, a, i);
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
          var t = ge(
            H.mark(function n(a, i) {
              var o,
                c,
                s = arguments;
              return H.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (o = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (c = function () {
                            return Promise.resolve({
                              experimentValues: o,
                              customAttributesFromFetch: i,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, a, i)
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
            return console.error("Error occurred when trying to check FeatureGate: ".concat(a)), !0;
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
            return console.error("Error occurred when trying to check Experiment: ".concat(a)), !0;
          }
        },
      },
      {
        key: "manuallyLogGateExposure",
        value: function (r) {
          this.assertInitialized(this.statsigClient), this.statsigClient.checkGate(r);
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
            return Xc.fromExperiment(
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
              new Xc(r, {}, "", { time: Date.now(), reason: fs.Error })
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
            var c = i.typeGuard;
            return o.get(n, a, c);
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
          this.assertInitialized(this.statsigClient), this.statsigClient.getExperiment(r);
        },
      },
      {
        key: "manuallyLogLayerExposure",
        value: function (r, n) {
          var a;
          this.assertInitialized(this.statsigClient),
            (a = this.statsigClient.getLayer(r)) === null || a === void 0 || a.get(n);
        },
      },
      {
        key: "shutdownStatsig",
        value: function () {
          this.assertInitialized(this.statsigClient), this.statsigClient.shutdown();
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
          this.overrideAdapter.removeGateOverride(r), this.statsigValuesUpdated();
        },
      },
      {
        key: "overrideConfig",
        value: function (r, n) {
          this.overrideAdapter.overrideDynamicConfig(r, n), this.statsigValuesUpdated();
        },
      },
      {
        key: "clearConfigOverride",
        value: function (r) {
          this.overrideAdapter.removeDynamicConfigOverride(r), this.statsigValuesUpdated();
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          this.overrideAdapter.setOverrides(r), this.statsigValuesUpdated();
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
          this.overrideAdapter.removeAllOverrides(), this.statsigValuesUpdated();
        },
      },
      {
        key: "isCurrentUser",
        value: function (r, n) {
          return Cn(this.currentIdentifiers, r) && Cn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var u = i.fireGateExposure,
                l = u === void 0 ? !0 : u;
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
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = c.fireExperimentExposure,
                f = d === void 0 ? !0 : d;
              f && o.manuallyLogExperimentExposure(r);
              try {
                i(l);
              } catch (v) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  v,
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c, s, u, l, d, f, v, h;
              return H.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = Jt({}, a)),
                          (g.prev = 1),
                          (l = co.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = co.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        (f = g.sent),
                          (v = te(f, 2)),
                          (h = v[1]),
                          (s = h.experimentValues),
                          (u = h.customAttributes),
                          (g.next = 20);
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
                          this.initFromValues(c, i, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(c, i, u, s));
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
          var t = ge(
            H.mark(function n(a, i, o, c) {
              var s, u, l, d, f, v, h, p;
              return H.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Jt(Jt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          i.setProfile(a, o, c)
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
                        (v = b.sent),
                          (h = te(v, 2)),
                          (p = h[1]),
                          (u = p.experimentValues),
                          (l = p.customAttributesFromFetch),
                          (b.next = 22);
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
                          this.initFromValues(s, o, c)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, o, l, u));
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c,
                s,
                u,
                l,
                d,
                f,
                v,
                h = arguments;
              return H.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (u = ng(a)),
                          u.sdkKey || (u.sdkKey = ou),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = Jt(
                              Jt({}, u.networkConfig),
                              {},
                              { logEventUrl: Sg },
                            )),
                          u.perimeter === ia.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (f = se(u, kg)),
                          (this.sdkKey = l),
                          (this.user = Jc(i, o, this.sdkKey)),
                          (v = Jt(
                            Jt({}, f),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                            },
                          )),
                          (g.prev = 12),
                          (this.statsigClient = new mt.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new mt.StatsigClient(ou, this.user, v)),
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c = this,
                s,
                u,
                l;
              return H.wrap(
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
                        return (s = this.initPromise), (f.prev = 6), (f.next = 9), this.initPromise;
                      case 9:
                        f.next = 13;
                        break;
                      case 11:
                        (f.prev = 11), (f.t0 = f.catch(6));
                      case 13:
                        return (
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, i, o)),
                          (this.initPromise = l.catch(
                            ge(
                              H.mark(function v() {
                                return H.wrap(function (p) {
                                  for (;;)
                                    switch ((p.prev = p.next)) {
                                      case 0:
                                        if (((c.initPromise = s), !c.provider)) {
                                          p.next = 4;
                                          break;
                                        }
                                        return (
                                          (p.next = 4),
                                          c.provider.setProfile(
                                            c.initOptions,
                                            c.currentIdentifiers,
                                            c.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return p.stop();
                                    }
                                }, v);
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
          var t = ge(
            H.mark(function n(a, i, o) {
              var c, s, u, l, d, f, v, h, p;
              return H.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient), (b.prev = 1), (b.next = 4), a
                        );
                      case 4:
                        (u = b.sent),
                          (l = Jc(i, u.customAttributesFromFetch, this.sdkKey)),
                          (b.next = 13);
                        break;
                      case 8:
                        throw (
                          ((b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (v = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, v),
                          b.t0)
                        );
                      case 13:
                        return (
                          (h = !0),
                          (p = null),
                          (b.prev = 15),
                          this.dataAdapter.setBootstrapData(u.experimentValues),
                          (this.user = l),
                          (b.next = 20),
                          this.statsigClient.updateUserAsync(this.user)
                        );
                      case 20:
                        b.next = 26;
                        break;
                      case 22:
                        (b.prev = 22), (b.t1 = b.catch(15)), (h = !1), (p = String(b.t1));
                      case 26:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, h, p),
                          !h)
                        ) {
                          b.next = 33;
                          break;
                        }
                        (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          this.subscriptions.anyUpdated(),
                          (b.next = 34);
                        break;
                      case 33:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 34:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [
                  [1, 8],
                  [15, 22],
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
          return zr;
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
            return Zc.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Zc.fromLayer(mt._makeLayer(r, { reason: "Error" }, null))
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
            var c = i.typeGuard;
            return o.get(n, a, c);
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
  $,
  Y = (function () {
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
$ = Y;
C(Y, "client", new Eg());
C(Y, "hasCheckGateErrorOccurred", !1);
C(Y, "hasGetExperimentValueErrorOccurred", !1);
C(Y, "checkGate", function (e, t) {
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
    $.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      ($.hasCheckGateErrorOccurred = !0));
  }
  return $.client.checkGate(e, t);
});
C(Y, "getExperimentValue", function (e, t, r, n) {
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
      $.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: i,
        }),
        ($.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return $.client.getExperimentValue(e, t, r, n);
});
C(Y, "initializeCalled", $.client.initializeCalled.bind($.client));
C(Y, "initializeCompleted", $.client.initializeCompleted.bind($.client));
C(Y, "initialize", $.client.initialize.bind($.client));
C(Y, "initializeWithProvider", $.client.initializeWithProvider.bind($.client));
C(Y, "initializeFromValues", $.client.initializeFromValues.bind($.client));
C(Y, "manuallyLogGateExposure", $.client.manuallyLogGateExposure.bind($.client));
C(Y, "getExperiment", $.client.getExperiment.bind($.client));
C(Y, "manuallyLogExperimentExposure", $.client.manuallyLogExperimentExposure.bind($.client));
C(Y, "manuallyLogLayerExposure", $.client.manuallyLogLayerExposure.bind($.client));
C(Y, "shutdownStatsig", $.client.shutdownStatsig.bind($.client));
C(Y, "overrideGate", $.client.overrideGate.bind($.client));
C(Y, "clearGateOverride", $.client.clearGateOverride.bind($.client));
C(Y, "overrideConfig", $.client.overrideConfig.bind($.client));
C(Y, "clearConfigOverride", $.client.clearConfigOverride.bind($.client));
C(Y, "setOverrides", $.client.setOverrides.bind($.client));
C(Y, "getOverrides", $.client.getOverrides.bind($.client));
C(Y, "clearAllOverrides", $.client.clearAllOverrides.bind($.client));
C(Y, "isCurrentUser", $.client.isCurrentUser.bind($.client));
C(Y, "onGateUpdated", $.client.onGateUpdated.bind($.client));
C(Y, "onExperimentValueUpdated", $.client.onExperimentValueUpdated.bind($.client));
C(Y, "onAnyUpdated", $.client.onAnyUpdated.bind($.client));
C(Y, "updateUser", $.client.updateUser.bind($.client));
C(Y, "updateUserWithProvider", $.client.updateUserWithProvider.bind($.client));
C(Y, "updateUserWithValues", $.client.updateUserWithValues.bind($.client));
C(Y, "getPackageVersion", $.client.getPackageVersion.bind($.client));
C(Y, "getLayer", $.client.getLayer.bind($.client));
C(Y, "getLayerValue", $.client.getLayerValue.bind($.client));
var Lo = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var Da, lo;
    Lo = window.__FEATUREGATES_JS__;
    var su =
      ((Da = Lo) === null || Da === void 0 || (lo = Da.getPackageVersion) === null || lo === void 0
        ? void 0
        : lo.call(Da)) || "4.10.0 or earlier";
    if (su !== zr) {
      var xg = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(su, " when module version ")
        .concat(zr, " was loading.");
      console.warn(xg);
    }
  }
var Pr,
  Rr,
  Cg =
    (globalThis == null ||
    (Pr = globalThis.process) === null ||
    Pr === void 0 ||
    (Pr = Pr.env) === null ||
    Pr === void 0
      ? void 0
      : Pr.JEST_WORKER_ID) !== void 0,
  Pg =
    !Cg &&
    (globalThis == null ||
    (Rr = globalThis.process) === null ||
    Rr === void 0 ||
    (Rr = Rr.env) === null ||
    Rr === void 0
      ? void 0
      : Rr.NODE_ENV) !== "production",
  Rg = function () {
    var t;
    Pg && (t = console).debug.apply(t, arguments);
  },
  vs = {},
  Ag = "@atlaskit/platform-feature-flags",
  Jn = "__PLATFORM_FEATURE_FLAGS__",
  pf = typeof process < "u" && typeof vs < "u",
  jg = pf ? vs.ENABLE_PLATFORM_FF === "true" : !1,
  Ig = pf ? vs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Dg = jg || Ig,
  Tg = { booleanResolver: void 0 },
  Xn = typeof window < "u" ? window : globalThis;
Xn[Jn] = Xn[Jn] || Tg;
function Lg(e) {
  if (Dg)
    return (
      Rg(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Ag,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Xn[Jn]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Xn[Jn]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Lo.checkGate(e);
    var a = (n = Xn[Jn]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function me(e) {
  return Lg(e);
}
var Mg = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  $g = function () {
    return y.useContext(Mg);
  },
  ei = function (t) {
    var r = y.useRef(t);
    return (r.current = t), r;
  };
function Ng(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Fg(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && Ng(t, a.current.inputs)),
    o = i ? a.current : { inputs: t, result: e() };
  return (
    y.useEffect(
      function () {
        (n.current = !1), (a.current = o);
      },
      [o],
    ),
    o.result
  );
}
function zg(e, t) {
  return Fg(function () {
    return e;
  }, t);
}
function hf() {
  var e = $g(),
    t = zg(
      function (r) {
        return new zh({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function cu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function oa(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    c = e.analyticsData,
    s = hf(),
    u = s.createAnalyticsEvent,
    l = ei(c),
    d = ei(t),
    f = y.useCallback(
      function (v) {
        var h = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          p = Bg({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(p);
        var g = h.clone();
        g && g.fire("atlaskit"), d.current(v, h);
      },
      [r, n, a, i, o, u, l, d],
    );
  return f;
}
function uu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uu(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : uu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function lu(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    c = hf(),
    s = c.createAnalyticsEvent,
    u = ei(o),
    l = ei(t),
    d = y.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          v = qg({ componentName: n, packageName: a, packageVersion: i }, u.current);
        f.context.push(v);
        var h = f.clone();
        h && h.fire("atlaskit"), l.current(f);
      },
      [r, n, a, i, s, u, l],
    );
  return d;
}
var vr = "ASC",
  ti = "DESC",
  Ug = "small",
  ri = "large",
  gf = 0.22;
const Vg = 5;
function D(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Vg) : i;
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
var du = "#FF5630",
  fu = "#DE350B",
  Ar = "#BF2600",
  vu = "#FFC400",
  pu = "#FFAB00",
  jr = "#FF991F",
  bf = "#DEEBFF",
  Wn = "#B3D4FF",
  ni = "#4C9AFF",
  hu = "#2684FF",
  gu = "#0065FF",
  Ir = "#0052CC",
  bu = "#0747A6",
  Nt = "#FFFFFF",
  Gg = "#FAFBFC",
  Ce = "#F4F5F7",
  Mo = "#DFE1E6",
  cr = "#A5ADBA",
  Hg = "#8993A4",
  Wg = "#6B778C",
  yu = "#5E6C84",
  Kg = "#505F79",
  sa = "#42526E",
  He = "#253858",
  lr = "#172B4D",
  Rn = "rgba(9, 30, 66, 0.04)",
  $o = "rgba(9, 30, 66, 0.08)",
  aS = "rgba(9, 30, 66, 0.25)",
  iS = "rgba(9, 30, 66, 0.31)",
  it = "#9FB0CC",
  Yg = "#8C9CB8",
  fo = "#67758F",
  An = "#3B475C",
  mu = "#313D52",
  jn = "#1B2638",
  Dr = "#0D1424",
  Jg = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function _u(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function wu(e) {
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
var Xg = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      c = se(e, Jg);
    return y.createElement(
      "table",
      J({ inert: o ? "" : void 0, ref: t }, c, {
        "data-testid": i && "".concat(i, "--table"),
        className: D([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179rralu",
        ]),
        style: wu(
          wu(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(Gg, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                bf,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(Wn, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                ni,
                ")",
              ),
            },
          ),
          {},
          { "--_k02y3n": We("2px solid ".concat("var(--ds-border, ".concat(Mo, ")"))) },
        ),
      }),
      a,
    );
  }),
  Zg = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: D(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Qg = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: D(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  eb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: D(["_4t3i1jdh"]),
      },
      r,
    );
  },
  tb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: D([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  rb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ku(e) {
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
function nb(e, t, r) {
  return (t = X(t)), De(e, yf() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function yf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (yf = function () {
    return !!e;
  })();
}
var Su = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  ab = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === vr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = Su(s.cells, t, n),
        d = Su(u.cells, t, n);
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
function ib(e) {
  var t = (function (r) {
    function n() {
      var a;
      pe(this, n);
      for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
      return (a = nb(this, n, [].concat(o))), C(a, "state", { pageRows: [] }), a;
    }
    return (
      Te(n, r),
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
              i.sortKey, i.sortOrder, i.rowsPerPage, i.page;
              var c = i.forwardedRef,
                s = se(i, rb);
              return S.createElement(
                e,
                J({ pageRows: this.state.pageRows, head: o }, s, { ref: c }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var c = i.rows,
                s = i.head,
                u = i.sortKey,
                l = i.sortOrder,
                d = i.page,
                f = i.rowsPerPage,
                v = i.isTotalPagesControlledExternally;
              Xa(u, s);
              var h, p;
              return (
                v ? ((h = c), (p = c)) : ((h = ab(s, c, u, l) || []), (p = of(h, d, f))),
                ku(ku({}, o), {}, { pageRows: p })
              );
            },
          },
        ],
      )
    );
  })(S.Component);
  return S.forwardRef(function (r, n) {
    return S.createElement(t, J({}, r, { forwardedRef: n }));
  });
}
var ob = "--local-dynamic-table-width",
  mf = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, ob, "".concat(r, "%")) : void 0;
  },
  sb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  cb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = se(t, sb);
    return y.createElement(
      "td",
      J(
        {
          style: mf({ width: r }),
          ref: i,
          className: D([
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
  ub = ["isHighlighted", "children", "style", "testId", "className"];
function Eu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xu(e) {
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
var lb = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      c = se(e, ub);
    return y.createElement(
      "tr",
      J(
        {
          className: D([
            "_bfhkqtfy _1ygb1852 _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        c,
        {
          ref: t,
          "data-testid": i,
          style: xu(
            xu({}, a),
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
  db = ["cells"],
  fb = ["content", "testId"],
  vb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      c = r.cells,
      s = se(r, db);
    return S.createElement(
      lb,
      J(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          f = u.testId,
          v = se(u, fb),
          h = (n || { cells: [] }).cells[l] || {},
          p = h.shouldTruncate,
          g = h.width;
        return S.createElement(
          cb,
          J({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, v, {
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
function pb(e, t, r) {
  return (t = X(t)), De(e, _f() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function _f() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_f = function () {
    return !!e;
  })();
}
var hb = (function (e) {
    function t() {
      return pe(this, t), pb(this, t, arguments);
    }
    return (
      Te(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              i = n.head,
              o = n.isFixedSize,
              c = n.highlightedRowIndex,
              s = n.testId,
              u = n.forwardedRef;
            return S.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: u },
              a.map(function (l, d) {
                return S.createElement(vb, {
                  head: i,
                  isFixedSize: o,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!c && (typeof c == "number" ? c === d : c.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(S.Component),
  gb = ib(
    S.forwardRef(function (e, t) {
      return S.createElement(hb, J({}, e, { forwardedRef: t }));
    }),
  );
function bb(e, t, r) {
  return (t = X(t)), De(e, wf() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function wf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wf = function () {
    return !!e;
  })();
}
var yb = (function (e) {
  function t(r) {
    var n;
    return pe(this, t), (n = bb(this, t, [r])), (n.state = { hasError: !1 }), n;
  }
  return (
    Te(t, e),
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
})(S.Component);
const ps = y.createContext(null);
var mb = { xsmall: 8, small: 16, medium: 24, large: 48, xlarge: 96 };
function _b(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(sa, ")")
    : "var(--ds-icon-inverse, ".concat(Nt, ")");
}
var Ta = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1eco _5sag9cwz _1pgl1ytf _1o51q7pw _tzy4idpf",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _opj11kw7 _134c892t _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  wb = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Of = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        c = t.interactionName,
        s = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        f = typeof l == "number" ? l : mb[l],
        v = "".concat(o, "ms"),
        h = _b(a),
        p = y.useContext(ps);
      return (
        wb(
          function () {
            if (p != null) return p.hold(c);
          },
          [p, c],
        ),
        S.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: f, height: f },
            className: D([Ta.wrapperStyles, Ta.rotateStyles]),
          },
          S.createElement(
            "svg",
            {
              height: f,
              width: f,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: v },
              role: s ? "img" : "none",
              className: D([Ta.loadInStyles]),
            },
            S.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: D([Ta.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Cu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pu(e) {
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
var Ru = "--contents-opacity",
  Ob = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: D(["_kqswh2mm"]) },
      r,
    );
  },
  kb = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: D(["_tzy47hfw _lcxvglyw"]),
        style: Pu(Pu({}, C({}, Ru, n)), {}, { "--_cnddr8": We("var(".concat(Ru, ")")) }),
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
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: D(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Eb(e, t, r) {
  return (t = X(t)), De(e, kf() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function kf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kf = function () {
    return !!e;
  })();
}
var Sf = (function (e) {
  function t() {
    return pe(this, t), Eb(this, t, arguments);
  }
  return (
    Te(t, e),
    he(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            i = n.isLoading,
            o = n.spinnerSize,
            c = n.contentsOpacity,
            s = n.testId,
            u = n.loadingLabel;
          return S.createElement(
            Ob,
            { testId: s },
            i ? S.createElement(kb, { contentsOpacity: c, testId: s }, a) : a,
            i &&
              S.createElement(
                Sb,
                { testId: s },
                S.createElement(Of, {
                  size: o,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: u,
                }),
              ),
          );
        },
      },
    ])
  );
})(S.Component);
C(Sf, "defaultProps", {
  isLoading: !0,
  spinnerSize: ri,
  contentsOpacity: gf,
  loadingLabel: "Loading table",
});
var xb = ["children", "testId"],
  Cb = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = se(e, xb);
    return y.createElement(
      "div",
      J({}, a, { "data-testid": n, ref: t, className: D(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Pb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: D(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Rb = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: D(["_kqswh2mm _152tidpf"]) }, r);
  });
function Ab(e, t, r) {
  return (t = X(t)), De(e, Ef() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Ef() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ef = function () {
    return !!e;
  })();
}
var xf = (function (e) {
  function t() {
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = Ab(this, t, [].concat(a))),
      C(r, "spinnerRef", S.createRef()),
      C(r, "containerRef", S.createRef()),
      C(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      C(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
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
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = o.targetRef,
          s = c == null ? void 0 : c();
        return s || r.containerRef.current;
      }),
      C(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      C(r, "isVerticallyVisible", function (o, c) {
        var s = o.top,
          u = o.bottom;
        return u <= 0 ? !1 : s < c;
      }),
      C(r, "isFullyVerticallyVisible", function (o, c) {
        var s = o.top,
          u = o.bottom;
        return s >= 0 && u <= c;
      }),
      C(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "translateSpinner", function (o, c, s) {
        (o.style.position = s ? "fixed" : ""),
          (o.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : "");
      }),
      C(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          c = r.props,
          s = c.isLoading,
          u = c.contentsOpacity;
        o &&
          o.style &&
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Te(t, e),
    he(t, [
      {
        key: "attachListeners",
        value: function () {
          window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize);
        },
      },
      {
        key: "detachListeners",
        value: function () {
          window.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("resize", this.handleResize);
        },
      },
      {
        key: "updateSpinnerPosition",
        value: function () {
          var n,
            a,
            i = window.innerHeight,
            o = this.getTargetNode(),
            c = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !c)) {
            var s = o.getBoundingClientRect(),
              u = c.getBoundingClientRect(),
              l = u.height,
              d = this.isVerticallyVisible(s, i),
              f = s.top,
              v = s.bottom,
              h = s.height;
            if (d) {
              var p = h >= l * 3;
              if (p && !this.isFullyVerticallyVisible(s, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(c, m, !0);
                } else if (f < 0 && v > i) {
                  var O = i / 2 - l / 2;
                  this.translateSpinner(c, O, !0);
                } else {
                  var w = v / 2 - l / 2,
                    _ = w < l ? w - (l - w) : w;
                  this.translateSpinner(c, _, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, i)) return;
            var k = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (k && typeof k.getBoundingClientRect == "function") {
              var x = k.getBoundingClientRect().top,
                L = (f - x) / 2;
              this.translateSpinner(c, L, !1);
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
            c = n.testId,
            s = n.loadingLabel;
          return S.createElement(
            Cb,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              S.createElement(
                Pb,
                { testId: c },
                S.createElement(
                  Rb,
                  { ref: this.spinnerRef },
                  S.createElement(Of, {
                    size: o,
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
})(S.Component);
C(xf, "defaultProps", {
  isLoading: !0,
  spinnerSize: ri,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(gf), ")"),
  loadingLabel: "Loading table",
});
function jb(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = te(n, 2),
    i = a[0],
    o = a[1],
    c = y.useRef(r);
  y.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : i,
    u = y.useCallback(function (l) {
      c.current || o(l);
    }, []);
  return [s, u];
}
var In = {},
  Dn = {},
  Ib = { none: "_1bsbpxbi _4t3ipxbi", compact: "", spacious: "_1bsb1ejb _4t3i1ejb" },
  Db = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Tb = { core: 16, utility: 12 },
  Au = { core: { none: 0, spacious: 4 }, utility: { none: 0, compact: 2, spacious: 6 } },
  ju = y.memo(function (t) {
    var r,
      n,
      a,
      i = t,
      o = i.color,
      c = o === void 0 ? "currentColor" : o,
      s = i.testId,
      u = i.label,
      l = i.LEGACY_primaryColor,
      d = i.LEGACY_secondaryColor,
      f = i.LEGACY_size,
      v = i.LEGACY_fallbackIcon,
      h = i.dangerouslySetGlyph,
      p = i.shouldScale,
      g = i.LEGACY_margin,
      b = h ? { __html: h } : void 0;
    if (v && !me("platform-visual-refresh-icons"))
      return y.createElement(v, {
        primaryColor: l ?? c,
        secondaryColor: d,
        size: f,
        label: u,
        testId: s,
        UNSAFE_margin: g,
      });
    var m = Tb[(r = t.type) !== null && r !== void 0 ? r : "core"],
      O;
    if (t.type === "utility") {
      var w;
      O = Au[t.type][(w = t.spacing) !== null && w !== void 0 ? w : "none"];
    } else {
      var _;
      O = Au.core[(_ = t.spacing) !== null && _ !== void 0 ? _ : "none"];
    }
    var k = m + 2 * O;
    return y.createElement(
      "span",
      {
        "data-testid": s,
        role: u ? "img" : void 0,
        "aria-label": u || void 0,
        "aria-hidden": u ? void 0 : !0,
        style: { color: c },
        className: D([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          t.type === "utility" && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - O, " ")
          .concat(0 - O, " ")
          .concat(k, " ")
          .concat(k),
        role: "presentation",
        dangerouslySetInnerHTML: b,
        className: D([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p
            ? "_1bsb1kw7 _4t3i1kw7"
            : t.type === "utility"
              ? Db[(n = t.spacing) !== null && n !== void 0 ? n : "none"]
              : Ib[(a = t.spacing) !== null && a !== void 0 ? a : "none"],
        ]),
      }),
    );
  });
const Lb = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ju, default: ju }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  yi = ls(Lb);
var Iu;
function Cf() {
  if (Iu) return Dn;
  (Iu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0);
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
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="m4.06 6 3.97-3.97L6.97.97l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5 1.06-1.06z" clip-rule="evenodd"/>',
          type: "utility",
        },
        a,
      ),
    );
  return (n.displayName = "ChevronLeftIcon"), (Dn.default = n), Dn;
}
var Tn = {};
function Du(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Tu(e) {
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
var Mb = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  No = y.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      i = r.primaryColor,
      o = i === void 0 ? "currentColor" : i,
      c = r.secondaryColor,
      s = r.size,
      u = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      v = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? y.createElement(n, { role: "presentation" }) : null },
      p = d && f ? { width: d + "px", height: f + "px" } : null;
    return y.createElement(
      "span",
      J(
        {
          "data-testid": u,
          "data-vc": "icon-".concat(u),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Tu(
            Tu({}, p),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": c, margin: v },
          ),
        },
        h,
        {
          className: D([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === c && "_18hbwc43",
            c === "transparent" && "_4fyi1j28",
            s && Mb[s],
          ]),
        },
      ),
    );
  }),
  $b = ["dangerouslySetGlyph"],
  Lu = {
    utility: { small: "compact", medium: "spacious" },
    core: { small: "none", medium: "spacious" },
  },
  Nb = y.memo(function (t) {
    var r,
      n = t.dangerouslySetGlyph,
      a = se(t, $b),
      i = a.newIcon,
      o = (r = a.size) !== null && r !== void 0 ? r : "medium",
      c = !a.isFacadeDisabled && me("platform-visual-refresh-icons-legacy-facade");
    if (c && i && (o === "small" || o === "medium"))
      if (a.iconType === "utility") {
        var s = i;
        return S.createElement(
          s,
          J({}, a, {
            spacing: me("platform-visual-refresh-icons-facade-button-fix") ? Lu.utility[o] : "none",
            color: a.primaryColor || "currentColor",
            type: a.iconType,
          }),
        );
      } else {
        var u = i;
        return S.createElement(
          u,
          J({}, a, {
            spacing: Lu.core[o],
            color: a.primaryColor || "currentColor",
            type: a.iconType,
          }),
        );
      }
    return S.createElement(No, J({ dangerouslySetGlyph: n }, a));
  });
const Fb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Icon: No, IconFacade: Nb, default: No },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Pf = ls(Fb);
var Mu;
function zb() {
  if (Mu) return Tn;
  (Mu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0);
  var e = n(dt()),
    t = Pf,
    r = n(Cf());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.IconFacade,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="m9.005 10.995 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414"/></svg>',
        },
        i,
        { newIcon: r.default, iconType: "utility" },
      ),
    );
  return (a.displayName = "ChevronLeftLargeIcon"), (Tn.default = a), Tn;
}
var $u;
function Bb() {
  if ($u) return In;
  ($u = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0);
  var e = n(dt()),
    t = n(Cf()),
    r = n(zb());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, i));
  return (a.Name = "ChevronLeftIconMigration"), (In.default = a), In;
}
var qb = Bb();
const Ub = mr(qb);
var Ln = {},
  Mn = {},
  Nu;
function Rf() {
  if (Nu) return Mn;
  (Nu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0);
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
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M7.94 6 3.97 2.03 5.03.97l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5-1.06-1.06z" clip-rule="evenodd"/>',
          type: "utility",
        },
        a,
      ),
    );
  return (n.displayName = "ChevronRightIcon"), (Mn.default = n), Mn;
}
var $n = {},
  Fu;
function Vb() {
  if (Fu) return $n;
  (Fu = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0);
  var e = n(dt()),
    t = Pf,
    r = n(Rf());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.IconFacade,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"/></svg>',
        },
        i,
        { newIcon: r.default, iconType: "utility" },
      ),
    );
  return (a.displayName = "ChevronRightLargeIcon"), ($n.default = a), $n;
}
var zu;
function Gb() {
  if (zu) return Ln;
  (zu = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0);
  var e = n(dt()),
    t = n(Rf()),
    r = n(Vb());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(t.default, Object.assign({ LEGACY_fallbackIcon: r.default }, i));
  return (a.Name = "ChevronRightIconMigration"), (Ln.default = a), Ln;
}
var Hb = Gb();
const Wb = mr(Hb);
var hs = y.createContext("elevation.surface"),
  Kb = function () {
    return y.useContext(hs);
  };
hs.displayName = "SurfaceProvider";
var Yb = [
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
  Jb = ["className"],
  Xb = {
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
  Af = {
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
  Zb = {
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
  Qb = {
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
  ey = {
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
  ty = {
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
      c = e.paddingBlock,
      s = c === void 0 ? o : c,
      u = e.paddingBlockStart,
      l = u === void 0 ? s : u,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      v = e.paddingInline,
      h = v === void 0 ? o : v,
      p = e.paddingInlineStart,
      g = p === void 0 ? h : p,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      O = e.style,
      w = e.testId,
      _ = e.xcss,
      k = se(e, Yb);
    k.className;
    var x = se(k, Jb),
      L = y.createElement(
        n,
        J(
          {
            style: O,
            ref: t,
            className: D([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Xb[i],
              i && ry(i) && Af[i],
              l && Zb[l],
              f && Qb[f],
              g && ey[g],
              m && ty[m],
              _,
            ]),
          },
          x,
          { "data-testid": w },
        ),
        a,
      );
    return i ? y.createElement(hs.Provider, { value: i }, L) : L;
  });
function ry(e) {
  return e in Af;
}
const vo = () =>
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
  jf = (...e) => D(e);
function ny() {
  return {
    css() {
      throw vo();
    },
    cssMap() {
      throw vo();
    },
    cx: jf,
    XCSSProp() {
      throw vo();
    },
  };
}
var ay = ny(),
  iy = ay.cx,
  Bu = {
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
  qu = {
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
  oy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  sy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  cy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  uy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  ly = { root: "_1e0c1txw _vchhusvi" },
  ai = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        i = e.alignItems,
        o = e.justifyContent,
        c = e.gap,
        s = e.columnGap,
        u = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        v = e.wrap,
        h = e.xcss;
      return y.createElement(
        n,
        {
          role: a,
          className: D([
            ly.root,
            c && qu[c],
            s && qu[s],
            c && Bu[c],
            u && Bu[u],
            i && uy[i],
            f && sy[f],
            o && oy[o],
            v && cy[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        },
        l,
      );
    }),
  );
ai.displayName = "Flex";
var Fo = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  dy = function (t) {
    var r = t.children;
    return y.createElement("span", { className: D([Fo.separator]) }, r);
  },
  Ba = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        i = a === void 0 ? "start" : a,
        o = e.shouldWrap,
        c = o === void 0 ? !1 : o,
        s = e.spread,
        u = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        v = e.xcss,
        h = e.testId,
        p = e.role,
        g = e.children,
        b = typeof f == "string" ? y.createElement(dy, null, f) : f,
        m = b
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, w) {
                return y.createElement(y.Fragment, { key: w }, f && w > 0 ? b : null, O);
              })
          : g;
      return y.createElement(
        ai,
        {
          as: r,
          role: p,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: iy(u === "hug" && Fo.hug, u === "fill" && Fo.fill, v),
          testId: h,
          ref: t,
        },
        m,
      );
    }),
  );
Ba.displayName = "Inline";
var fy = "Invariant failed";
function vy(e, t) {
  if (!e) throw new Error(fy);
}
var If = y.createContext(!1),
  py = function () {
    return y.useContext(If);
  },
  hy = If.Provider,
  gy = ["span", "p", "strong", "em"],
  by = function (t, r) {
    var n = Kb();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Uu.hasOwnProperty(n) ? Uu[n] : "color.text";
    }
  },
  Tr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  yy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  my = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  _y = {
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
  Uu = {
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
  Df = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      i = e.align,
      o = e.testId,
      c = e.id,
      s = e.size,
      u = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    vy(gy.includes(n));
    var v = py(),
      h = by(a, v);
    !s && !v && (s = "medium");
    var p = y.createElement(
      n,
      {
        id: c,
        className: D([
          Tr.root,
          s && yy[s],
          h && _y[h],
          l && Tr.truncation,
          l === 1 && Tr.breakAll,
          i && Tr["textAlign.".concat(i)],
          u && my[u],
          n === "em" && Tr["as.em"],
          n === "strong" && Tr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return v ? p : y.createElement(hy, { value: !0 }, p);
  });
function wy() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Oy = ["as", "children", "isInset", "testId", "style", "xcss"],
  ky = ["className"];
function Vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
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
var Sy = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      c = e.style,
      s = e.xcss,
      u = se(e, Oy);
    u.className;
    var l = se(u, ky);
    return y.createElement(
      n,
      J({}, l, {
        ref: t,
        className: D([
          "_mizu194a _1ah31bk5 _ra3xnqa1 _128m1bk5 _1cvmnqa1 _4davt94y",
          i && "_1ah3115h _2mwq115h",
          s,
        ]),
        "data-testid": o,
        style: Gu(
          Gu({}, c),
          {},
          { "--_1203r2w": We("calc(0px - ".concat("var(--ds-border-width-outline, 2px)", ")")) },
        ),
      }),
      a,
    );
  }),
  Ey = [
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
  xy = ["className"],
  Hu = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Cy = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      c = o === void 0 ? ke : o,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      v = e.xcss,
      h = e.tabIndex,
      p = se(e, Ey),
      g = y.useContext(ps),
      b = y.useCallback(
        function (w, _) {
          g && g.tracePress(s, w.timeStamp), c(w, _);
        },
        [c, g, s],
      ),
      m = oa({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.7.3",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var O = se(p, xy);
    return y.createElement(
      Sy,
      J({ as: "button", tabIndex: h ?? (wy() && !n ? 0 : void 0), style: d }, O, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: jf(Hu.root, n && Hu.disabled, v),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  po = {},
  Nn = {},
  Wu;
function Tf() {
  if (Wu) return Nn;
  (Wu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.bind = void 0);
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
  return (Nn.bind = e), Nn;
}
var ur = {},
  Ku;
function Py() {
  if (Ku) return ur;
  Ku = 1;
  var e =
    (ur && ur.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (i) {
            for (var o, c = 1, s = arguments.length; c < s; c++) {
              o = arguments[c];
              for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (i[u] = o[u]);
            }
            return i;
          }),
        e.apply(this, arguments)
      );
    };
  Object.defineProperty(ur, "__esModule", { value: !0 }), (ur.bindAll = void 0);
  var t = Tf();
  function r(i) {
    if (!(typeof i > "u")) return typeof i == "boolean" ? { capture: i } : i;
  }
  function n(i, o) {
    if (o == null) return i;
    var c = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return c;
  }
  function a(i, o, c) {
    var s = o.map(function (u) {
      var l = n(u, c);
      return (0, t.bind)(i, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return (ur.bindAll = a), ur;
}
var Yu;
function Ry() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0);
        var t = Tf();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Py();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(po)),
    po
  );
}
var _i = Ry(),
  Ay = function () {
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
  Lf = function (e) {
    return e === void 0 && (e = ""), { value: 1, prefix: e, uid: Ay() };
  },
  jy = Lf(),
  Iy = y.createContext(Lf()),
  Dy = function (e) {
    return e.value++;
  },
  Ty = function (e) {
    return e ? e.prefix : "";
  },
  Ly = function (e) {
    var t = e || jy,
      r = Ty(t),
      n = Dy(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  My = function () {
    var e = y.useContext(Iy),
      t = y.useState(function () {
        return Ly(e);
      })[0];
    return t;
  },
  $y = function () {
    var e = My().gen;
    return e;
  },
  ho,
  Ju = (ho = S.useId) !== null && ho !== void 0 ? ho : void 0;
function Ny() {
  if (Ju && me("platform-dst-react-18-use-id")) {
    var e = Ju();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return $y();
}
var Mf = function (t) {
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
        className: D([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  Fy = function () {
    return 8;
  },
  $f = {
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
  zy = ["children"];
function By(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = y.createContext(e);
  function n(o) {
    var c = y.useContext(r),
      s = c || t,
      u = s(o);
    return u;
  }
  function a(o) {
    var c = o.children,
      s = se(o, zy),
      u = n(s);
    return S.createElement(S.Fragment, null, c(u));
  }
  function i(o) {
    var c = y.useContext(r),
      s = o.value || t,
      u = y.useCallback(
        function (l) {
          return s(c, l);
        },
        [c, s],
      );
    return S.createElement(r.Provider, { value: u }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var qy = By(function () {
    return { mode: "light" };
  }),
  Uy = qy.useTheme;
function Vy(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Gy(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Hy = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (a) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, i),
          n.tags.push(a);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gy(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Vy(a);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          var a;
          return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Oe = "-ms-",
  ii = "-moz-",
  re = "-webkit-",
  Nf = "comm",
  gs = "rule",
  bs = "decl",
  Wy = "@import",
  Ff = "@keyframes",
  Ky = "@layer",
  Yy = Math.abs,
  wi = String.fromCharCode,
  Jy = Object.assign;
function Xy(e, t) {
  return _e(e, 0) ^ 45
    ? (((((((t << 2) ^ _e(e, 0)) << 2) ^ _e(e, 1)) << 2) ^ _e(e, 2)) << 2) ^ _e(e, 3)
    : 0;
}
function zf(e) {
  return e.trim();
}
function Zy(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, r) {
  return e.replace(t, r);
}
function zo(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function ca(e, t, r) {
  return e.slice(t, r);
}
function _t(e) {
  return e.length;
}
function ys(e) {
  return e.length;
}
function La(e, t) {
  return t.push(e), e;
}
function Qy(e, t) {
  return e.map(t).join("");
}
var Oi = 1,
  Ur = 1,
  Bf = 0,
  je = 0,
  be = 0,
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
    column: Ur,
    length: o,
    return: "",
  };
}
function Fn(e, t) {
  return Jy(ki("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function em() {
  return be;
}
function tm() {
  return (be = je > 0 ? _e(Yr, --je) : 0), Ur--, be === 10 && ((Ur = 1), Oi--), be;
}
function Fe() {
  return (be = je < Bf ? _e(Yr, je++) : 0), Ur++, be === 10 && ((Ur = 1), Oi++), be;
}
function St() {
  return _e(Yr, je);
}
function qa() {
  return je;
}
function ya(e, t) {
  return ca(Yr, e, t);
}
function ua(e) {
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
function qf(e) {
  return (Oi = Ur = 1), (Bf = _t((Yr = e))), (je = 0), [];
}
function Uf(e) {
  return (Yr = ""), e;
}
function Ua(e) {
  return zf(ya(je - 1, Bo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rm(e) {
  for (; (be = St()) && be < 33; ) Fe();
  return ua(e) > 2 || ua(be) > 3 ? "" : " ";
}
function nm(e, t) {
  for (; --t && Fe() && !(be < 48 || be > 102 || (be > 57 && be < 65) || (be > 70 && be < 97)); );
  return ya(e, qa() + (t < 6 && St() == 32 && Fe() == 32));
}
function Bo(e) {
  for (; Fe(); )
    switch (be) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bo(be);
        break;
      case 40:
        e === 41 && Bo(e);
        break;
      case 92:
        Fe();
        break;
    }
  return je;
}
function am(e, t) {
  for (; Fe() && e + be !== 57; ) if (e + be === 84 && St() === 47) break;
  return "/*" + ya(t, je - 1) + "*" + wi(e === 47 ? e : Fe());
}
function im(e) {
  for (; !ua(St()); ) Fe();
  return ya(e, je);
}
function om(e) {
  return Uf(Va("", null, null, null, [""], (e = qf(e)), 0, [0], e));
}
function Va(e, t, r, n, a, i, o, c, s) {
  for (
    var u = 0,
      l = 0,
      d = o,
      f = 0,
      v = 0,
      h = 0,
      p = 1,
      g = 1,
      b = 1,
      m = 0,
      O = "",
      w = a,
      _ = i,
      k = n,
      x = O;
    g;

  )
    switch (((h = m), (m = Fe()))) {
      case 40:
        if (h != 108 && _e(x, d - 1) == 58) {
          zo((x += ne(Ua(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ua(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += rm(h);
        break;
      case 92:
        x += nm(qa() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            La(sm(am(Fe(), qa()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * p:
        c[u++] = _t(x) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            b == -1 && (x = ne(x, /\f/g, "")),
              v > 0 &&
                _t(x) - d &&
                La(v > 32 ? Zu(x + ";", n, r, d - 1) : Zu(ne(x, " ", "") + ";", n, r, d - 2), s);
            break;
          case 59:
            x += ";";
          default:
            if ((La((k = Xu(x, t, r, u, l, a, c, O, (w = []), (_ = []), d)), i), m === 123))
              if (l === 0) Va(x, t, k, k, w, i, d, c, _);
              else
                switch (f === 99 && _e(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Va(
                      e,
                      k,
                      k,
                      n && La(Xu(e, k, k, 0, 0, a, c, O, a, (w = []), d), _),
                      a,
                      _,
                      d,
                      c,
                      n ? w : _,
                    );
                    break;
                  default:
                    Va(x, k, k, k, [""], _, 0, c, _);
                }
        }
        (u = l = v = 0), (p = b = 1), (O = x = ""), (d = o);
        break;
      case 58:
        (d = 1 + _t(x)), (v = h);
      default:
        if (p < 1) {
          if (m == 123) --p;
          else if (m == 125 && p++ == 0 && tm() == 125) continue;
        }
        switch (((x += wi(m)), m * p)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (c[u++] = (_t(x) - 1) * b), (b = 1);
            break;
          case 64:
            St() === 45 && (x += Ua(Fe())), (f = St()), (l = d = _t((O = x += im(qa())))), m++;
            break;
          case 45:
            h === 45 && _t(x) == 2 && (p = 0);
        }
    }
  return i;
}
function Xu(e, t, r, n, a, i, o, c, s, u, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], v = ys(f), h = 0, p = 0, g = 0; h < n; ++h)
    for (var b = 0, m = ca(e, d + 1, (d = Yy((p = o[h])))), O = e; b < v; ++b)
      (O = zf(p > 0 ? f[b] + " " + m : ne(m, /&\f/g, f[b]))) && (s[g++] = O);
  return ki(e, t, r, a === 0 ? gs : c, s, u, l);
}
function sm(e, t, r) {
  return ki(e, t, r, Nf, wi(em()), ca(e, 2, -2), 0);
}
function Zu(e, t, r, n) {
  return ki(e, t, r, bs, ca(e, 0, n), ca(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = ys(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function cm(e, t, r, n) {
  switch (e.type) {
    case Ky:
      if (e.children.length) break;
    case Wy:
    case bs:
      return (e.return = e.return || e.value);
    case Nf:
      return "";
    case Ff:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case gs:
      e.value = e.props.join(",");
  }
  return _t((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function um(e) {
  var t = ys(e);
  return function (r, n, a, i) {
    for (var o = "", c = 0; c < t; c++) o += e[c](r, n, a, i) || "";
    return o;
  };
}
function lm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function dm(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var fm = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = St()), a === 38 && i === 12 && (r[n] = 1), !ua(i); ) Fe();
    return ya(t, je);
  },
  vm = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (ua(a)) {
        case 0:
          a === 38 && St() === 12 && (r[n] = 1), (t[n] += fm(je - 1, r, n));
          break;
        case 2:
          t[n] += Ua(a);
          break;
        case 4:
          if (a === 44) {
            (t[++n] = St() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += wi(a);
      }
    while ((a = Fe()));
    return t;
  },
  pm = function (t, r) {
    return Uf(vm(qf(t), r));
  },
  Qu = new WeakMap(),
  hm = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Qu.get(n)) && !a) {
        Qu.set(t, !0);
        for (var i = [], o = pm(r, i), c = n.props, s = 0, u = 0; s < o.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = i[s] ? o[s].replace(/&\f/g, c[l]) : c[l] + " " + o[s];
      }
    }
  },
  gm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Vf(e, t) {
  switch (Xy(e, t)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + ii + e + Oe + e + e;
    case 6828:
    case 4268:
      return re + e + Oe + e + e;
    case 6165:
      return re + e + Oe + "flex-" + e + e;
    case 5187:
      return re + e + ne(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return re + e + Oe + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return re + e + Oe + "flex-line-pack" + ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return re + e + Oe + ne(e, "shrink", "negative") + e;
    case 5292:
      return re + e + Oe + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return re + "box-" + ne(e, "-grow", "") + re + e + Oe + ne(e, "grow", "positive") + e;
    case 4554:
      return re + ne(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return ne(ne(ne(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        re +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (_t(e) - 1 - t > 6)
        switch (_e(e, t + 1)) {
          case 109:
            if (_e(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + re + "$2-$3$1" + ii + (_e(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~zo(e, "stretch") ? Vf(ne(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, _t(e) - 3 - (~zo(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + re) + e;
        case 101:
          return (
            ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                re +
                (_e(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                re +
                "$2$3$1" +
                Oe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (_e(e, t + 11)) {
        case 114:
          return re + e + Oe + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + Oe + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + Oe + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Oe + e + e;
  }
  return e;
}
var bm = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case bs:
          t.return = Vf(t.value, t.length);
          break;
        case Ff:
          return Br([Fn(t, { value: ne(t.value, "@", "@" + re) })], a);
        case gs:
          if (t.length)
            return Qy(t.props, function (i) {
              switch (Zy(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([Fn(t, { props: [ne(i, /:(read-\w+)/, ":" + ii + "$1")] })], a);
                case "::placeholder":
                  return Br(
                    [
                      Fn(t, { props: [ne(i, /:(plac\w+)/, ":" + re + "input-$1")] }),
                      Fn(t, { props: [ne(i, /:(plac\w+)/, ":" + ii + "$1")] }),
                      Fn(t, { props: [ne(i, /:(plac\w+)/, Oe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  ym = [bm],
  mm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || ym,
      i = {},
      o,
      c = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var g = p.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          c.push(p);
        },
      );
    var s,
      u = [hm, gm];
    {
      var l,
        d = [
          cm,
          lm(function (p) {
            l.insert(p);
          }),
        ],
        f = um(u.concat(a, d)),
        v = function (g) {
          return Br(om(g), f);
        };
      s = function (g, b, m, O) {
        (l = m), v(g ? g + "{" + b.styles + "}" : b.styles), O && (h.inserted[b.name] = !0);
      };
    }
    var h = {
      key: r,
      sheet: new Hy({
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
    return h.sheet.hydrate(c), h;
  },
  go = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var el;
function _m() {
  if (el) return ae;
  el = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    c = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    u = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    p = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function O(_) {
    if (typeof _ == "object" && _ !== null) {
      var k = _.$$typeof;
      switch (k) {
        case t:
          switch (((_ = _.type), _)) {
            case s:
            case u:
            case n:
            case i:
            case a:
            case d:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case c:
                case l:
                case h:
                case v:
                case o:
                  return _;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function w(_) {
    return O(_) === u;
  }
  return (
    (ae.AsyncMode = s),
    (ae.ConcurrentMode = u),
    (ae.ContextConsumer = c),
    (ae.ContextProvider = o),
    (ae.Element = t),
    (ae.ForwardRef = l),
    (ae.Fragment = n),
    (ae.Lazy = h),
    (ae.Memo = v),
    (ae.Portal = r),
    (ae.Profiler = i),
    (ae.StrictMode = a),
    (ae.Suspense = d),
    (ae.isAsyncMode = function (_) {
      return w(_) || O(_) === s;
    }),
    (ae.isConcurrentMode = w),
    (ae.isContextConsumer = function (_) {
      return O(_) === c;
    }),
    (ae.isContextProvider = function (_) {
      return O(_) === o;
    }),
    (ae.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }),
    (ae.isForwardRef = function (_) {
      return O(_) === l;
    }),
    (ae.isFragment = function (_) {
      return O(_) === n;
    }),
    (ae.isLazy = function (_) {
      return O(_) === h;
    }),
    (ae.isMemo = function (_) {
      return O(_) === v;
    }),
    (ae.isPortal = function (_) {
      return O(_) === r;
    }),
    (ae.isProfiler = function (_) {
      return O(_) === i;
    }),
    (ae.isStrictMode = function (_) {
      return O(_) === a;
    }),
    (ae.isSuspense = function (_) {
      return O(_) === d;
    }),
    (ae.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === n ||
        _ === u ||
        _ === i ||
        _ === a ||
        _ === d ||
        _ === f ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === h ||
            _.$$typeof === v ||
            _.$$typeof === o ||
            _.$$typeof === c ||
            _.$$typeof === l ||
            _.$$typeof === g ||
            _.$$typeof === b ||
            _.$$typeof === m ||
            _.$$typeof === p))
      );
    }),
    (ae.typeOf = O),
    ae
  );
}
var tl;
function wm() {
  return tl || ((tl = 1), (go.exports = _m())), go.exports;
}
var bo, rl;
function Om() {
  if (rl) return bo;
  rl = 1;
  var e = wm(),
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
  (i[e.ForwardRef] = n), (i[e.Memo] = a);
  function o(h) {
    return e.isMemo(h) ? a : i[h.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function v(h, p, g) {
    if (typeof p != "string") {
      if (f) {
        var b = d(p);
        b && b !== f && v(h, b, g);
      }
      var m = s(p);
      u && (m = m.concat(u(p)));
      for (var O = o(h), w = o(p), _ = 0; _ < m.length; ++_) {
        var k = m[_];
        if (!r[k] && !(g && g[k]) && !(w && w[k]) && !(O && O[k])) {
          var x = l(p, k);
          try {
            c(h, k, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return (bo = v), bo;
}
Om();
var km = !0;
function Gf(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var ms = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || km === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Hf = function (t, r, n) {
    ms(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Sm(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Em = {
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
  xm = /[A-Z]|^ms/g,
  Cm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Wf = function (t) {
    return t.charCodeAt(1) === 45;
  },
  nl = function (t) {
    return t != null && typeof t != "boolean";
  },
  yo = dm(function (e) {
    return Wf(e) ? e : e.replace(xm, "-$&").toLowerCase();
  }),
  al = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Cm, function (n, a, i) {
            return (wt = { name: a, styles: i, next: wt }), a;
          });
    }
    return Em[t] !== 1 && !Wf(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function la(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return (wt = { name: a.name, styles: a.styles, next: wt }), a.name;
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; ) (wt = { name: o.name, styles: o.styles, next: wt }), (o = o.next);
        var c = i.styles + ";";
        return c;
      }
      return Pm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = wt,
          u = r(e);
        return (wt = s), la(e, t, u);
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Pm(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += la(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var c = o;
        t != null && t[c] !== void 0
          ? (n += i + "{" + t[c] + "}")
          : nl(c) && (n += yo(i) + ":" + al(i, c) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) nl(o[s]) && (n += yo(i) + ":" + al(i, o[s]) + ";");
      else {
        var u = la(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += yo(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var il = /label:\s*([^\s;{]+)\s*(;|$)/g,
  wt;
function _s(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  wt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (n = !1), (a += la(r, t, i));
  else {
    var o = i;
    a += o[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += la(r, t, e[c])), n)) {
      var s = i;
      a += s[c];
    }
  il.lastIndex = 0;
  for (var u = "", l; (l = il.exec(a)) !== null; ) u += "-" + l[1];
  var d = Sm(a) + u;
  return { name: d, styles: a, next: wt };
}
var Rm = function (t) {
    return t();
  },
  Am = Ws.useInsertionEffect ? Ws.useInsertionEffect : !1,
  Kf = Am || Rm,
  Yf = y.createContext(typeof HTMLElement < "u" ? mm({ key: "css" }) : null);
Yf.Provider;
var Jf = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Yf);
      return t(r, a, n);
    });
  },
  Xf = y.createContext({}),
  ws = {}.hasOwnProperty,
  qo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  jm = function (t, r) {
    var n = {};
    for (var a in r) ws.call(r, a) && (n[a] = r[a]);
    return (n[qo] = t), n;
  },
  Im = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      ms(r, n, a),
      Kf(function () {
        return Hf(r, n, a);
      }),
      null
    );
  },
  Dm = Jf(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[qo],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Gf(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var c = _s(i, void 0, y.useContext(Xf));
    o += t.key + "-" + c.name;
    var s = {};
    for (var u in e) ws.call(e, u) && u !== "css" && u !== qo && (s[u] = e[u]);
    return (
      (s.className = o),
      r && (s.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(Im, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        y.createElement(a, s),
      )
    );
  }),
  Tm = Dm,
  ot = function (t, r) {
    var n = arguments;
    if (r == null || !ws.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    (i[0] = Tm), (i[1] = jm(t, r));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ot || (ot = {}));
function ft() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return _s(t);
}
var Lm = function e(t) {
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
            for (var c in i) i[c] && c && (o && (o += " "), (o += c));
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
function Mm(e, t, r) {
  var n = [],
    a = Gf(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var $m = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Kf(function () {
        for (var a = 0; a < n.length; a++) Hf(r, n[a], !1);
      }),
      null
    );
  },
  Nm = Jf(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = _s(u, t.registered);
        return r.push(d), ms(t, d, !1), t.key + "-" + d.name;
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return Mm(t.registered, n, Lm(u));
      },
      i = { css: n, cx: a, theme: y.useContext(Xf) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement($m, { cache: t, serializedArr: r }),
      o,
    );
  });
function Fm(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      e && r.current && t && e.current && e.current.focus(), (r.current = !1);
    },
    [t, e],
  );
}
var ol = 2,
  Uo = ft({
    outline: "".concat(ol, "px solid ", "var(--ds-border-focused, #2684FF)"),
    outlineOffset: ol,
  }),
  Vo = ft({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-outline, 2px)",
  }),
  zm = ft({
    "&:focus": Uo,
    "&:focus-visible": Uo,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid" },
    },
  }),
  Bm = ft({
    "&:focus": Vo,
    "&:focus-visible": Vo,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "1px solid", outlineOffset: "-1px" },
    },
  }),
  Zf = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Vo : Uo,
      i = r ? Bm : zm,
      o = typeof n > "u" ? i : n === "on" && a;
    return ot(Nm, null, function (c) {
      var s = c.css,
        u = c.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: u([s(o), t.props.className]) }) : t,
      );
    });
  });
Zf.displayName = "FocusRing";
function $t(e) {
  e.preventDefault(), e.stopPropagation();
}
var qm = 9;
function sl(e) {
  e.keyCode !== qm && $t(e);
}
var Um = {
    onMouseDownCapture: $t,
    onMouseUpCapture: $t,
    onKeyDownCapture: sl,
    onKeyUpCapture: sl,
    onTouchStartCapture: $t,
    onTouchEndCapture: $t,
    onPointerDownCapture: $t,
    onPointerUpCapture: $t,
    onClickCapture: $t,
    onClick: $t,
  },
  Vm = {};
function Gm(e) {
  var t = e.isInteractive;
  return t ? Vm : Um;
}
var cl = "rgba(179, 212, 255, 0.6)",
  ul = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Rn, ")"),
          dark: "var(--ds-background-neutral, ".concat(An, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat($o, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(mu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(cl, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Wn, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Rn, ")"),
          dark: "var(--ds-background-disabled, ".concat(An, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ir, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(ni, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(gu, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Wn, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(bu, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(hu, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Rn, ")"),
          dark: "var(--ds-background-disabled, ".concat(An, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(pu, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(pu, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(vu, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(vu, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Rn, ")"),
          dark: "var(--ds-background-disabled, ".concat(An, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(fu, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(fu, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(du, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(du, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Rn, ")"),
          dark: "var(--ds-background-disabled, ".concat(An, ")"),
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
          light: "var(--ds-background-neutral-subtle-hovered, ".concat($o, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(mu, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(cl, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Wn, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
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
          light: "var(--ds-text, ".concat(sa, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ir, ")"),
          dark: "var(--ds-text, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(jn, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Nt, ")"),
          dark: "var(--ds-text-inverse, ".concat(jn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(jn, ")"),
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
          light: "var(--ds-text-warning-inverse, ".concat(lr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(lr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(jn, ")"),
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
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(jn, ")"),
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
          light: "var(--ds-link, ".concat(Ir, ")"),
          dark: "var(--ds-link, ".concat(ni, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(gu, ")"),
          dark: "var(--ds-link, ".concat(Wn, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(bu, ")"),
          dark: "var(--ds-link-pressed, ".concat(hu, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(fo, ")"),
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
          light: "var(--ds-text, ".concat(sa, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ir, ")"),
          dark: "var(--ds-text, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(fo, ")"),
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
          light: "var(--ds-text-subtle, ".concat(Wg, ")"),
          dark: "var(--ds-text-subtle, ".concat(it, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Hg, ")"),
          dark: "var(--ds-text-subtle, ".concat(bf, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Kg, ")"),
          dark: "var(--ds-text, ".concat(Yg, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(cr, ")"),
          dark: "var(--ds-text-disabled, ".concat(fo, ")"),
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
function ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ll(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xt = Fy(),
  mo = ["default", "primary", "danger", "warning"],
  Go = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  Hm = { default: Go.default, compact: Go.compact, none: "inherit" },
  Wm = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  Km = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  Ym = { default: "middle", compact: "middle", none: "baseline" },
  Qf = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  ev = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  Jm = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&:not([disabled])::after": oe(
      oe({}, ev),
      {},
      { content: '""', borderColor: "var(--ds-border, #091E4224)" },
    ),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
  },
  Xm = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Zm = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  Qm = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  e_ = {
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
  t_ = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  r_ = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  n_ = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": oe(
      oe({}, ev),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  dl = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function fl(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Lr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: fl({ group: ul.background[t], key: r, mode: n }),
    color: "".concat(fl({ group: ul.color[t], key: r, mode: n }), " !important"),
  };
}
function a_(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    c = Lr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return oe(
    oe(
      oe(
        oe(
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
          !me("platform-component-visual-refresh") && c,
        ),
        {},
        {
          cursor: "pointer",
          height: Go[r],
          lineHeight: Hm[r],
          padding: o ? Km[r] : Wm[r],
          verticalAlign: Ym[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !me("platform-component-visual-refresh") &&
          oe(
            oe(
              {
                "&:visited": oe({}, c),
                "&:hover": oe(
                  oe({}, Lr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": oe(
                  oe({}, Lr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': oe(
                  oe({}, Lr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": oe(
                  oe({}, Lr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              dl,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                oe({}, Lr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      me("platform-component-visual-refresh") &&
        (a
          ? n_
          : oe(
              oe(
                oe(
                  oe(
                    oe(
                      oe(
                        oe(oe({}, t === "default" && Jm), t === "primary" && Xm),
                        t === "link" && Zm,
                      ),
                      t === "subtle" && Qm,
                    ),
                    t === "subtle-link" && e_,
                  ),
                  t === "warning" && t_,
                ),
                t === "danger" && r_,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: mo.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: mo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: mo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              dl,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function vl(e) {
  var t = e.spacing;
  return ft({
    display: "flex",
    margin: t === "none" ? 0 : Qf.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function i_(e) {
  var t = e.spacing;
  return ft({
    margin: t === "none" ? 0 : Qf.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function o_(e) {
  var t = e.hasOverlay;
  return ft({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var s_ = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Os = function (t) {
    return t && y.isValidElement(t) && t.type === Mf;
  },
  c_ = [
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
  u_ = { "> *": { pointerEvents: "none" } },
  l_ = ft({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  d_ = ft({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  pl = function (t, r) {
    return !t || Os(t) ? null : r;
  },
  f_ = function (t, r) {
    return Os(t) ? t : t ? ot("span", { css: r }, t) : null;
  },
  v_ = S.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      i = a === void 0 ? "default" : a,
      o = t.autoFocus,
      c = o === void 0 ? !1 : o,
      s = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      f = t.component,
      v = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      p = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      O = t.isSelected,
      w = O === void 0 ? !1 : O,
      _ = t.onBlur,
      k = t.onClick,
      x = k === void 0 ? ke : k,
      L = t.onFocus,
      N = t.onMouseDown,
      T = N === void 0 ? ke : N,
      B = t.overlay;
    t.shouldFitContainer;
    var W = t.spacing,
      P = W === void 0 ? "default" : W,
      E = t.tabIndex,
      I = E === void 0 ? 0 : E,
      j = t.type,
      M = j === void 0 ? (d ? void 0 : "button") : j,
      F = t.testId,
      R = se(t, c_),
      K = y.useRef(),
      q = y.useCallback(
        function (ve) {
          if (((K.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [K, r],
      );
    Fm(K, c);
    var G = y.useContext(ps),
      ie = y.useCallback(
        function (ve, pt) {
          G && G.tracePress(g, ve.timeStamp), x(ve, pt);
        },
        [x, G, g],
      ),
      Z = oa({
        fn: ie,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.0.8",
        analyticsData: n,
      }),
      le = y.useCallback(
        function (ve) {
          ve.preventDefault(), T(ve);
        },
        [T],
      );
    y.useEffect(
      function () {
        var ve = K.current;
        m && ve && ve === document.activeElement && ve.blur();
      },
      [m],
    );
    var fe = !!B,
      ye = ft(o_({ hasOverlay: fe })),
      we = !m && !fe,
      rt = {};
    return (
      (w || m || i === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              w || m
                ? "var(--ds-icon-subtle, ".concat(sa, ")")
                : "var(--ds-icon-warning-inverse, ".concat(sa, ")"),
              " !important",
            ),
          },
        }),
      ot(
        Zf,
        null,
        ot(
          v,
          J(
            {},
            R,
            {
              ref: q,
              className: l,
              css: [s, we ? null : u_],
              "data-has-overlay": fe ? !0 : void 0,
              "data-testid": F,
              disabled: m,
              href: we ? d : void 0,
              onBlur: _,
              onClick: Z,
              onFocus: L,
              onMouseDown: le,
              tabIndex: m ? -1 : I,
              type: M,
            },
            Gm({ isInteractive: we }),
          ),
          p ? ot("span", { css: [ye, vl({ spacing: P }), pl(u, l_)] }, p) : null,
          f_(u, [ye, i_({ spacing: P })]),
          h ? ot("span", { css: [ye, vl({ spacing: P }), pl(u, d_)] }, h) : null,
          B ? ot("span", { css: [s_, rt] }, B) : null,
        ),
      )
    );
  });
function p_(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Os(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var h_ = [
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
  hl = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  ks = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? ke : l,
        f = t.onMouseUp,
        v = f === void 0 ? ke : f,
        h = t.shouldFitContainer,
        p = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = se(t, h_),
        O = Uy(),
        w = O.mode,
        _ = p_({ children: i, iconBefore: o, iconAfter: c }),
        k = y.useState(!1),
        x = te(k, 2),
        L = x[0],
        N = x[1],
        T = y.useCallback(
          function (P) {
            d(P), hl && N(!0);
          },
          [d, N],
        ),
        B = y.useCallback(
          function (P) {
            v(P), hl && N(!1);
          },
          [v, N],
        ),
        W = y.useMemo(
          function () {
            return a_({
              appearance: a,
              spacing: b,
              mode: w,
              isSelected: u,
              shouldFitContainer: p,
              isOnlySingleIcon: _,
            });
          },
          [a, b, w, u, p, _],
        );
      return S.createElement(
        v_,
        J({}, m, {
          ref: r,
          appearance: a,
          buttonCss: W,
          children: i,
          "data-firefox-is-active": L ? !0 : void 0,
          iconAfter: c,
          iconBefore: o,
          isSelected: u,
          onMouseDown: T,
          onMouseUp: B,
          spacing: b,
        }),
      );
    }),
  );
ks.displayName = "Button";
function gl(e) {
  return S.createElement(ks, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function g_(e) {
  return S.createElement(ks, J({}, e, { appearance: "subtle" }));
}
var b_ = { container: "_1e0c1txw _kqswh2mm" };
function y_(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return S.createElement(
    mi,
    { as: "li", testId: r, key: t, xcss: b_.container, paddingInline: "space.100" },
    S.createElement(
      Df,
      { testId: r && "".concat(r, "-text") },
      S.createElement(Mf, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var bl = {},
  yl =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function m_(e, t) {
  return !!(e === t || (yl(e) && yl(t)));
}
function __(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!m_(e[r], t[r])) return !1;
  return !0;
}
function w_(e, t) {
  t === void 0 && (t = __);
  var r = null;
  function n() {
    for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, a);
    return (r = { lastResult: o, lastArgs: a, lastThis: this }), o;
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var O_ = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > i,
    l = u && i - 4 < r,
    d = u && r < s - i + 3,
    f = w_(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, O) {
        return c(m, g + O, a);
      });
    });
  if (!u) return f(0, s);
  if (l && !d) {
    var v = i - 2;
    return [].concat(
      Me(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Me(f(s - v)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      Me(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      Me(f(s - 1)),
    );
  }
  var p = i - 4;
  return [].concat(
    Me(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(p / 2),
      }),
    ],
    Me(f(r - Math.floor(p / 2), r + p - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Me(f(s - 1)),
  );
};
function ml(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function k_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ml(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ho = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  S_ = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.1",
  };
function _l(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Ub : Wb;
  return S.createElement(
    mi,
    { as: "span", xcss: Ho.navigatorIconWrapper },
    S.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
    }),
  );
}
function E_(e, t) {
  var r = e.components,
    n = r === void 0 ? bl : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
    o = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    h = v === void 0 ? "next" : v,
    p = e.style,
    g = p === void 0 ? bl : p,
    b = e.max,
    m = b === void 0 ? 7 : b,
    O = e.onChange,
    w = O === void 0 ? ke : O,
    _ = e.pages,
    k = e.getPageLabel,
    x = e.renderEllipsis,
    L = x === void 0 ? y_ : x,
    N = e.analyticsContext,
    T = e.testId,
    B = e.isDisabled,
    W = jb(o, function () {
      return i || 0;
    }),
    P = te(W, 2),
    E = P[0],
    I = P[1],
    j = oa(
      k_(
        {
          fn: function (R, K) {
            var q = R.event,
              G = R.selectedPageIndex;
            o === void 0 && I(G), w && w(q, _[G], K);
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: N,
        },
        S_,
      ),
    ),
    M = function (R, K, q) {
      var G = _[E],
        ie = "".concat(l, " ").concat(k ? k(R, K) : R),
        Z = R === G;
      return S.createElement(
        Ba,
        { as: "li", xcss: Ho.paginationMenuItem, key: "page-".concat(k ? k(R, K) : K) },
        S.createElement(
          g_,
          {
            component: n.Page,
            onClick: function (fe) {
              return j({ event: fe, selectedPageIndex: K });
            },
            "aria-current": Z ? "page" : void 0,
            "aria-label": ie,
            isSelected: Z,
            isDisabled: B,
            page: R,
            testId:
              q &&
              ""
                .concat(q, "--")
                .concat(Z ? "current-" : "", "page-")
                .concat(K),
          },
          k ? k(R, K) : R,
        ),
      );
    };
  return S.createElement(
    mi,
    { testId: T, style: g, ref: t, "aria-label": s, as: "nav" },
    S.createElement(
      Ba,
      { space: "space.0", alignBlock: "center" },
      S.createElement(gl, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (R) {
          return j({ event: R, selectedPageIndex: E - 1 });
        },
        isDisabled: B || E === 0,
        iconBefore: S.createElement(_l, { chevronDirection: "left" }),
        "aria-label": f,
        testId: T && "".concat(T, "--left-navigator"),
      }),
      S.createElement(
        Ba,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ho.paginationMenu },
        O_(_, E, { max: m, ellipsis: L, transform: M }, T),
      ),
      S.createElement(gl, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (R) {
          return j({ event: R, selectedPageIndex: E + 1 });
        },
        isDisabled: B || E === _.length - 1,
        iconBefore: S.createElement(_l, { chevronDirection: "right" }),
        "aria-label": h,
        testId: T && "".concat(T, "--right-navigator"),
      }),
    ),
  );
}
var x_ = y.memo(y.forwardRef(E_));
function C_(e, t, r) {
  return (t = X(t)), De(e, tv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tv = function () {
    return !!e;
  })();
}
var P_ = (function (e) {
    function t() {
      var r;
      pe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = C_(this, t, [].concat(a))),
        C(r, "onChange", function (o, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Te(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              i = n.value,
              o = i === void 0 ? 1 : i,
              c = n.i18n,
              s = n.testId,
              u = n.isDisabled,
              l = Me(Array(a)).map(function (f, v) {
                return v + 1;
              }),
              d = o - 1;
            return S.createElement(x_, {
              selectedIndex: d,
              isDisabled: u,
              label: c == null ? void 0 : c.label,
              nextLabel: c == null ? void 0 : c.next,
              previousLabel: c == null ? void 0 : c.prev,
              pageLabel: c == null ? void 0 : c.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(S.Component),
  R_ = ["isRanking", "testId"],
  A_ = [
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
function wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ol = "--local-dynamic-table-text-color",
  j_ = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = se(t, R_);
    return y.createElement(
      "thead",
      J({ "data-testid": n }, a, { className: D(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  rv = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      i = e.sortOrder,
      o = e.isFixedSize,
      c = e.shouldTruncate,
      s = e.onClick,
      u = e.style,
      l = e.testId,
      d = se(e, A_),
      f = zn(
        zn(zn({}, u), r && mf({ width: r })),
        {},
        C({}, Ol, "var(--ds-text-subtlest, ".concat(yu, ")")),
      ),
      v = i === vr,
      h = i === ti,
      p = function () {
        if (v) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      b = me("platform-component-visual-refresh");
    return y.createElement(
      g,
      J({ "aria-sort": p(), onClick: b ? void 0 : s, ref: t, "data-testid": l }, d, {
        className: D([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          b
            ? "_11c8dcr7 _179rralu _mqm2glyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbuwsq"
            : "_11c8dcr7 _179rralu _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygbuwsq",
          !b && s && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          o && c && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
          !b &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !b && v && "_c77k2wk4 _142s94yt",
          !b && h && "_f4732wk4 _17x894yt",
        ]),
        style: zn(
          zn({}, f),
          {},
          {
            "--_k02y3n": We("2px solid ".concat("var(--ds-border, ".concat(Mo, ")"))),
            "--_17ckjys": We("var(--ds-text-subtle, ".concat("var(".concat(Ol, ")"), ")")),
            "--_jz8ahf": We("solid 2px ".concat("var(--ds-border-focused, ".concat(ni, ")"))),
            "--_6j4ewu": We("var(--ds-background-neutral-hovered, ".concat($o, ")")),
            "--_1rdacuj": We("3px solid ".concat("var(--ds-icon-disabled, ".concat(Mo, ")"))),
            "--_1qca9zt": We("3px solid ".concat("var(--ds-icon-subtle, ".concat(yu, ")"))),
          },
        ),
      }),
      n,
    );
  });
function I_(e, t, r) {
  return (t = X(t)), De(e, nv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function nv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (nv = function () {
    return !!e;
  })();
}
function av(e) {
  return (function (t) {
    function r() {
      var n;
      pe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = I_(this, r, [].concat(i))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        C(n, "updateDimensions", function () {
          if (n.ref) {
            var c = n.ref.getBoundingClientRect(),
              s = c.width,
              u = c.height;
            (s !== n.state.refWidth || u !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: u });
          }
        }),
        n
      );
    }
    return (
      Te(r, t),
      he(r, [
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
            return S.createElement(
              e,
              J({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(S.Component);
}
var Bn = {},
  kl;
function D_() {
  if (kl) return Bn;
  (kl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0);
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
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return (n.displayName = "ArrowDownIcon"), (Bn.default = n), Bn;
}
var T_ = D_();
const L_ = mr(T_);
var qn = {},
  Sl;
function M_() {
  if (Sl) return qn;
  (Sl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0);
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
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return (n.displayName = "ArrowUpIcon"), (qn.default = n), qn;
}
var $_ = M_();
const N_ = mr($_);
var F_ = "Escape";
function z_(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== F_ || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      return _i.bindAll(
        document,
        [
          { type: "keydown", listener: a },
          { type: "keyup", listener: i },
        ],
        { capture: !1 },
      );
    },
    [a, i],
  );
}
function Un(e) {
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
var B_ = y.createContext(null),
  q_ = y.createContext(null);
function U_() {
  var e = y.useContext(q_);
  return e;
}
function V_(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(B_),
    a = U_();
  y.useEffect(
    function () {
      if (!me("platform_dst_open_layer_observer_close_layers") && n !== null && t)
        return (
          n.increment(),
          function () {
            n.decrement();
          }
        );
    },
    [n, t, a],
  ),
    y.useEffect(
      function () {
        if (me("platform_dst_open_layer_observer_close_layers") && n !== null && t)
          return n.onClose(r, { namespace: a });
      },
      [n, t, a, r],
    );
}
var Kn = { none: 0, small: 100, medium: 350, large: 700 },
  _o = 0.5,
  G_ = { none: Kn.none, small: Kn.small * _o, medium: Kn.medium * _o, large: Kn.large * _o },
  H_ = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  iv = function () {
    if (!H_()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  W_ = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  K_ = function () {
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
      }, W_(t)),
      y.useCallback(function (n, a) {
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), c = 2; c < i; c++)
          o[c - 2] = arguments[c];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              (r.current = r.current.filter(function (u) {
                return u !== s;
              })),
                n();
            },
            a,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  ov = { appear: !0, isExiting: !1 },
  sv = y.createContext(ov),
  El = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ov;
    return S.createElement(sv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  xl = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Y_ = function (t, r) {
    for (var n = r.concat([]), a = J_(r), i = 0; i < t.length; i++) {
      var o = t[i],
        c = !a[o.key];
      c && n.splice(i + 1, 0, o);
    }
    return n;
  },
  J_ = function (t) {
    return t.reduce(function (r, n) {
      return (r[n.key] = n), r;
    }, {});
  },
  X_ = function (t, r) {
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
        c = o.key;
      n.has(c) || a.add(c);
    }
    return a;
  },
  cv = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = y.useState([null, n]),
      o = te(i, 2),
      c = o[0],
      s = o[1],
      u = y.useState([]),
      l = te(u, 2),
      d = l[0],
      f = l[1],
      v = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = te(v, 2),
      p = h[0],
      g = h[1];
    if (
      (y.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      (iv() && !me("platform_design_system_motion_on_finish_fix")) || typeof c == "boolean")
    )
      return n;
    var b = te(c, 2),
      m = b[0],
      O = b[1],
      w = xl(m),
      _ = xl(O);
    O !== n && s([O, n]);
    var k = X_(_, w),
      x = !!k.size,
      L = _;
    if ((x && (L = Y_(_, w)), a))
      if (d.length) L = d;
      else {
        var N = L.filter(function (T) {
          return k.has(T.key);
        });
        N.length && f(N);
      }
    return (
      k.size
        ? (L = L.map(function (T) {
            var B = k.has(T.key);
            return El(T, {
              appear: !0,
              isExiting: B,
              onFinish: B
                ? function () {
                    k.delete(T.key), k.size === 0 && (s([null, n]), f([]));
                  }
                : void 0,
            });
          }))
        : (L = L.map(function (T) {
            return El(T, p);
          })),
      L
    );
  }),
  Z_ = function () {
    return y.useContext(sv);
  };
cv.displayName = "ExitingPersistence";
function Q_() {
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
var e0 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: ke };
  }),
  t0 = function () {
    var t = Q_(),
      r = y.useContext(e0);
    return r(t);
  },
  r0 = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      i = a === void 0 ? n : a,
      o = t.enteringAnimation,
      c = t.exitingAnimation,
      s = c === void 0 ? o : c,
      u = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      v = t0(),
      h = Z_(),
      p = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = K_(),
      O = u || !v.isReady,
      w = p ? 0 : v.delay,
      _ = p ? "exiting" : "entering",
      k = y.useState(b),
      x = te(k, 2),
      L = x[0],
      N = x[1];
    return (
      y.useEffect(
        function () {
          var T = !1;
          if (!O) {
            if (!b) {
              l && l(_);
              return;
            }
            var B = function () {
              _ === "exiting" && (g == null || g()), T || N(!1), l == null || l(_);
            };
            if (iv() && me("platform_design_system_motion_on_finish_fix")) {
              B();
              return;
            }
            return (
              N(!0),
              m(B, p ? G_[f] : Kn[f] + w),
              function () {
                T = !0;
              }
            );
          }
        },
        [g, _, p, f, w, O, m],
      ),
      r(
        {
          ref: v.ref,
          className: L
            ? D([
                D(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                O && D(["_1y0ctrqk"]),
                f === "small" && D(["_5sag1yx9"]),
                f === "medium" && D(["_5sag1ttt"]),
                f === "large" && D(["_5sagpwmj"]),
                p && f === "small" && D(["_5sag14ed"]),
                p && f === "medium" && D(["_5sagluct"]),
                p && f === "large" && D(["_5sag1ttt"]),
                p && D(["_ju255cps _1o51q7pw"]),
                !p && n === "linear" && D(["_1pglp3kn"]),
                !p && n === "ease-out" && D(["_1pgldkwg"]),
                !p && n === "ease-in" && D(["_1pgl1nzg"]),
                !p && n === "ease-in-out" && D(["_1pgl1fu8"]),
                p && n === "linear" && D(["_1pglp3kn"]),
                p && i === "ease-out" && D(["_1pgldkwg"]),
                p && i === "ease-in" && D(["_1pgl1nzg"]),
                p && i === "ease-in-out" && D(["_1pgl1fu8"]),
                ((!p && o === "fade-in") || (p && s === "fade-in")) && D(["_j7hq1cgr"]),
                ((!p && o === "fade-out") || (p && s === "fade-out")) && D(["_j7hq1lln"]),
                ((!p && o === "zoom-in") || (p && s === "zoom-in")) && D(["_j7hqe8p0"]),
                ((!p && o === "zoom-out") || (p && s === "zoom-out")) && D(["_j7hqy6ql"]),
                ((!p && o === "slide-in-from-top") || (p && s === "slide-in-from-top")) &&
                  D(["_j7hqqshu"]),
                ((!p && o === "slide-out-from-top") || (p && s === "slide-out-from-top")) &&
                  D(["_j7hq7ri4"]),
                ((!p && o === "slide-in-from-right") || (p && s === "slide-in-from-right")) &&
                  D(["_j7hqdfjr"]),
                ((!p && o === "slide-out-from-right") || (p && s === "slide-out-from-right")) &&
                  D(["_j7hqonfj"]),
                ((!p && o === "slide-in-from-bottom") || (p && s === "slide-in-from-bottom")) &&
                  D(["_j7hq1liq"]),
                ((!p && o === "slide-out-from-bottom") || (p && s === "slide-out-from-bottom")) &&
                  D(["_j7hqhnf1"]),
                ((!p && o === "slide-in-from-left") || (p && s === "slide-in-from-left")) &&
                  D(["_j7hq1bh1"]),
                ((!p && o === "slide-out-from-left") || (p && s === "slide-out-from-left")) &&
                  D(["_j7hqj08w"]),
                ((!p && o === "fade-in-from-top") || (p && s === "fade-in-from-top")) &&
                  D(["_j7hq2iua"]),
                ((!p && o === "fade-out-from-top") || (p && s === "fade-out-from-top")) &&
                  D(["_j7hq39va"]),
                ((!p && o === "fade-in-from-left") || (p && s === "fade-in-from-left")) &&
                  D(["_j7hq15m2"]),
                ((!p && o === "fade-out-from-left") || (p && s === "fade-out-from-left")) &&
                  D(["_j7hq1yiv"]),
                ((!p && o === "fade-in-from-bottom") || (p && s === "fade-in-from-bottom")) &&
                  D(["_j7hq1w00"]),
                ((!p && o === "fade-out-from-bottom") || (p && s === "fade-out-from-bottom")) &&
                  D(["_j7hqzy3z"]),
                ((!p && o === "fade-in-from-right") || (p && s === "fade-in-from-right")) &&
                  D(["_j7hqpqak"]),
                ((!p && o === "fade-out-from-right") || (p && s === "fade-out-from-right")) &&
                  D(["_j7hq1ebg"]),
                ((!p && o === "fade-in-from-top-constant") ||
                  (p && s === "fade-in-from-top-constant")) &&
                  D(["_j7hqm2e2"]),
                ((!p && o === "fade-out-from-top-constant") ||
                  (p && s === "fade-out-from-top-constant")) &&
                  D(["_j7hq97jn"]),
                ((!p && o === "fade-in-from-left-constant") ||
                  (p && s === "fade-in-from-left-constant")) &&
                  D(["_j7hqovgq"]),
                ((!p && o === "fade-out-from-left-constant") ||
                  (p && s === "fade-out-from-left-constant")) &&
                  D(["_j7hq15do"]),
                ((!p && o === "fade-in-from-bottom-constant") ||
                  (p && s === "fade-in-from-bottom-constant")) &&
                  D(["_j7hq797a"]),
                ((!p && o === "fade-out-from-bottom-constant") ||
                  (p && s === "fade-out-from-bottom-constant")) &&
                  D(["_j7hqwo7r"]),
                ((!p && o === "fade-in-from-right-constant") ||
                  (p && s === "fade-in-from-right-constant")) &&
                  D(["_j7hqt8u5"]),
                ((!p && o === "fade-out-from-right-constant") ||
                  (p && s === "fade-out-from-right-constant")) &&
                  D(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(w, "ms") },
        },
        _,
      )
    );
  },
  n0 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  a0 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? n0[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return S.createElement(
      r0,
      {
        duration: a,
        enteringAnimation: i
          ? "fade-in-from-".concat(i).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  i0 = y.createContext();
y.createContext();
var o0 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  s0 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  c0 = function (t, r) {
    if (typeof t == "function") return s0(t, r);
    t != null && (t.current = r);
  },
  Cl = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return (r[a] = i), r;
    }, {});
  },
  Pl =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Pe = "top",
  et = "bottom",
  tt = "right",
  Re = "left",
  Ss = "auto",
  ma = [Pe, et, tt, Re],
  Vr = "start",
  da = "end",
  u0 = "clippingParents",
  uv = "viewport",
  Vn = "popper",
  l0 = "reference",
  Rl = ma.reduce(function (e, t) {
    return e.concat([t + "-" + Vr, t + "-" + da]);
  }, []),
  lv = [].concat(ma, [Ss]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Vr, t + "-" + da]);
  }, []),
  d0 = "beforeRead",
  f0 = "read",
  v0 = "afterRead",
  p0 = "beforeMain",
  h0 = "main",
  g0 = "afterMain",
  b0 = "beforeWrite",
  y0 = "write",
  m0 = "afterWrite",
  _0 = [d0, f0, v0, p0, h0, g0, b0, y0, m0];
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ze(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function pr(e) {
  var t = ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Es(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function w0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Qe(i) ||
      !Rt(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var c = a[o];
        c === !1 ? i.removeAttribute(o) : i.setAttribute(o, c === !0 ? "" : c);
      }));
  });
}
function O0(e) {
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
          c = o.reduce(function (s, u) {
            return (s[u] = ""), s;
          }, {});
        !Qe(a) ||
          !Rt(a) ||
          (Object.assign(a.style, c),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const k0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: w0,
  effect: O0,
  requires: ["computeStyles"],
};
function Et(e) {
  return e.split("-")[0];
}
var dr = Math.max,
  oi = Math.min,
  Gr = Math.round;
function Wo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function dv() {
  return !/^((?!chrome|android).)*safari/i.test(Wo());
}
function Hr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Qe(e) &&
    ((a = (e.offsetWidth > 0 && Gr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Gr(n.height) / e.offsetHeight) || 1));
  var o = pr(e) ? ze(e) : window,
    c = o.visualViewport,
    s = !dv() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: u + d, bottom: l + f, left: u, x: u, y: l };
}
function xs(e) {
  var t = Hr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function fv(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Es(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Vt(e) {
  return ze(e).getComputedStyle(e);
}
function S0(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function tr(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Si(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Es(e) ? e.host : null) || tr(e);
}
function Al(e) {
  return !Qe(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function E0(e) {
  var t = /firefox/i.test(Wo()),
    r = /Trident/i.test(Wo());
  if (r && Qe(e)) {
    var n = Vt(e);
    if (n.position === "fixed") return null;
  }
  var a = Si(e);
  for (Es(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Rt(a)) < 0; ) {
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
function _a(e) {
  for (var t = ze(e), r = Al(e); r && S0(r) && Vt(r).position === "static"; ) r = Al(r);
  return r && (Rt(r) === "html" || (Rt(r) === "body" && Vt(r).position === "static"))
    ? t
    : r || E0(e) || t;
}
function Cs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zn(e, t, r) {
  return dr(e, oi(t, r));
}
function x0(e, t, r) {
  var n = Zn(e, t, r);
  return n > r ? r : n;
}
function vv() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function pv(e) {
  return Object.assign({}, vv(), e);
}
function hv(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var C0 = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    pv(typeof t != "number" ? t : hv(t, ma))
  );
};
function P0(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    c = Et(r.placement),
    s = Cs(c),
    u = [Re, tt].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!i || !o)) {
    var d = C0(a.padding, r),
      f = xs(i),
      v = s === "y" ? Pe : Re,
      h = s === "y" ? et : tt,
      p = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = _a(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      O = p / 2 - g / 2,
      w = d[v],
      _ = m - f[l] - d[h],
      k = m / 2 - f[l] / 2 + O,
      x = Zn(w, k, _),
      L = s;
    r.modifiersData[n] = ((t = {}), (t[L] = x), (t.centerOffset = x - k), t);
  }
}
function R0(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (fv(t.elements.popper, a) && (t.elements.arrow = a)));
}
const A0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: P0,
  effect: R0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Wr(e) {
  return e.split("-")[1];
}
var j0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function I0(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Gr(r * a) / a || 0, y: Gr(n * a) / a || 0 };
}
function jl(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    v = f === void 0 ? 0 : f,
    h = o.y,
    p = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: v, y: p }) : { x: v, y: p };
  (v = g.x), (p = g.y);
  var b = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    O = Re,
    w = Pe,
    _ = window;
  if (u) {
    var k = _a(r),
      x = "clientHeight",
      L = "clientWidth";
    if (
      (k === ze(r) &&
        ((k = tr(r)),
        Vt(k).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (L = "scrollWidth"))),
      (k = k),
      a === Pe || ((a === Re || a === tt) && i === da))
    ) {
      w = et;
      var N = d && k === _ && _.visualViewport ? _.visualViewport.height : k[x];
      (p -= N - n.height), (p *= s ? 1 : -1);
    }
    if (a === Re || ((a === Pe || a === et) && i === da)) {
      O = tt;
      var T = d && k === _ && _.visualViewport ? _.visualViewport.width : k[L];
      (v -= T - n.width), (v *= s ? 1 : -1);
    }
  }
  var B = Object.assign({ position: c }, u && j0),
    W = l === !0 ? I0({ x: v, y: p }, ze(r)) : { x: v, y: p };
  if (((v = W.x), (p = W.y), s)) {
    var P;
    return Object.assign(
      {},
      B,
      ((P = {}),
      (P[w] = m ? "0" : ""),
      (P[O] = b ? "0" : ""),
      (P.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + p + "px)"
          : "translate3d(" + v + "px, " + p + "px, 0)"),
      P),
    );
  }
  return Object.assign(
    {},
    B,
    ((t = {}), (t[w] = m ? p + "px" : ""), (t[O] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function D0(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: Et(t.placement),
      variation: Wr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      jl(
        Object.assign({}, u, {
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
        jl(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const T0 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: D0, data: {} };
var Ma = { passive: !0 };
function L0(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    c = o === void 0 ? !0 : o,
    s = ze(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, Ma);
      }),
    c && s.addEventListener("resize", r.update, Ma),
    function () {
      i &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Ma);
        }),
        c && s.removeEventListener("resize", r.update, Ma);
    }
  );
}
const M0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: L0,
  data: {},
};
var $0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ga(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return $0[t];
  });
}
var N0 = { start: "end", end: "start" };
function Il(e) {
  return e.replace(/start|end/g, function (t) {
    return N0[t];
  });
}
function Ps(e) {
  var t = ze(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Rs(e) {
  return Hr(tr(e)).left + Ps(e).scrollLeft;
}
function F0(e, t) {
  var r = ze(e),
    n = tr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    (i = a.width), (o = a.height);
    var u = dv();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: c + Rs(e), y: s };
}
function z0(e) {
  var t,
    r = tr(e),
    n = Ps(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = dr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = dr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + Rs(e),
    s = -n.scrollTop;
  return (
    Vt(a || r).direction === "rtl" && (c += dr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: c, y: s }
  );
}
function As(e) {
  var t = Vt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function gv(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && As(e)
      ? e
      : gv(Si(e));
}
function Qn(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = gv(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ze(n),
    o = a ? [i].concat(i.visualViewport || [], As(n) ? n : []) : n,
    c = t.concat(o);
  return a ? c : c.concat(Qn(Si(o)));
}
function Ko(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function B0(e, t) {
  var r = Hr(e, !1, t === "fixed");
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
function Dl(e, t, r) {
  return t === uv ? Ko(F0(e, r)) : pr(t) ? B0(t, r) : Ko(z0(tr(e)));
}
function q0(e) {
  var t = Qn(Si(e)),
    r = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
    n = r && Qe(e) ? _a(e) : e;
  return pr(n)
    ? t.filter(function (a) {
        return pr(a) && fv(a, n) && Rt(a) !== "body";
      })
    : [];
}
function U0(e, t, r, n) {
  var a = t === "clippingParents" ? q0(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    c = i.reduce(
      function (s, u) {
        var l = Dl(e, u, n);
        return (
          (s.top = dr(l.top, s.top)),
          (s.right = oi(l.right, s.right)),
          (s.bottom = oi(l.bottom, s.bottom)),
          (s.left = dr(l.left, s.left)),
          s
        );
      },
      Dl(e, o, n),
    );
  return (
    (c.width = c.right - c.left), (c.height = c.bottom - c.top), (c.x = c.left), (c.y = c.top), c
  );
}
function bv(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Et(n) : null,
    i = n ? Wr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case et:
      s = { x: o, y: t.y + t.height };
      break;
    case tt:
      s = { x: t.x + t.width, y: c };
      break;
    case Re:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? Cs(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (i) {
      case Vr:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case da:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function fa(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    c = r.boundary,
    s = c === void 0 ? u0 : c,
    u = r.rootBoundary,
    l = u === void 0 ? uv : u,
    d = r.elementContext,
    f = d === void 0 ? Vn : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = pv(typeof g != "number" ? g : hv(g, ma)),
    m = f === Vn ? l0 : Vn,
    O = e.rects.popper,
    w = e.elements[h ? m : f],
    _ = U0(pr(w) ? w : w.contextElement || tr(e.elements.popper), s, l, o),
    k = Hr(e.elements.reference),
    x = bv({ reference: k, element: O, placement: a }),
    L = Ko(Object.assign({}, O, x)),
    N = f === Vn ? L : k,
    T = {
      top: _.top - N.top + b.top,
      bottom: N.bottom - _.bottom + b.bottom,
      left: _.left - N.left + b.left,
      right: N.right - _.right + b.right,
    },
    B = e.modifiersData.offset;
  if (f === Vn && B) {
    var W = B[a];
    Object.keys(T).forEach(function (P) {
      var E = [tt, et].indexOf(P) >= 0 ? 1 : -1,
        I = [Pe, et].indexOf(P) >= 0 ? "y" : "x";
      T[P] += W[I] * E;
    });
  }
  return T;
}
function V0(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? lv : s,
    l = Wr(n),
    d = l
      ? c
        ? Rl
        : Rl.filter(function (h) {
            return Wr(h) === l;
          })
      : ma,
    f = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var v = f.reduce(function (h, p) {
    return (h[p] = fa(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[Et(p)]), h;
  }, {});
  return Object.keys(v).sort(function (h, p) {
    return v[h] - v[p];
  });
}
function G0(e) {
  if (Et(e) === Ss) return [];
  var t = Ga(e);
  return [Il(e), t, Il(t)];
}
function H0(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        o = r.altAxis,
        c = o === void 0 ? !0 : o,
        s = r.fallbackPlacements,
        u = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        v = r.flipVariations,
        h = v === void 0 ? !0 : v,
        p = r.allowedAutoPlacements,
        g = t.options.placement,
        b = Et(g),
        m = b === g,
        O = s || (m || !h ? [Ga(g)] : G0(g)),
        w = [g].concat(O).reduce(function (Z, le) {
          return Z.concat(
            Et(le) === Ss
              ? V0(t, {
                  placement: le,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: p,
                })
              : le,
          );
        }, []),
        _ = t.rects.reference,
        k = t.rects.popper,
        x = new Map(),
        L = !0,
        N = w[0],
        T = 0;
      T < w.length;
      T++
    ) {
      var B = w[T],
        W = Et(B),
        P = Wr(B) === Vr,
        E = [Pe, et].indexOf(W) >= 0,
        I = E ? "width" : "height",
        j = fa(t, { placement: B, boundary: l, rootBoundary: d, altBoundary: f, padding: u }),
        M = E ? (P ? tt : Re) : P ? et : Pe;
      _[I] > k[I] && (M = Ga(M));
      var F = Ga(M),
        R = [];
      if (
        (i && R.push(j[W] <= 0),
        c && R.push(j[M] <= 0, j[F] <= 0),
        R.every(function (Z) {
          return Z;
        }))
      ) {
        (N = B), (L = !1);
        break;
      }
      x.set(B, R);
    }
    if (L)
      for (
        var K = h ? 3 : 1,
          q = function (le) {
            var fe = w.find(function (ye) {
              var we = x.get(ye);
              if (we)
                return we.slice(0, le).every(function (rt) {
                  return rt;
                });
            });
            if (fe) return (N = fe), "break";
          },
          G = K;
        G > 0;
        G--
      ) {
        var ie = q(G);
        if (ie === "break") break;
      }
    t.placement !== N && ((t.modifiersData[n]._skip = !0), (t.placement = N), (t.reset = !0));
  }
}
const W0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: H0,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Tl(e, t, r) {
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
function Ll(e) {
  return [Pe, tt, et, Re].some(function (t) {
    return e[t] >= 0;
  });
}
function K0(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = fa(t, { elementContext: "reference" }),
    c = fa(t, { altBoundary: !0 }),
    s = Tl(o, n),
    u = Tl(c, a, i),
    l = Ll(s),
    d = Ll(u);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    }));
}
const Y0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: K0,
};
function J0(e, t, r) {
  var n = Et(e),
    a = [Re, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    c = i[1];
  return (
    (o = o || 0), (c = (c || 0) * a), [Re, tt].indexOf(n) >= 0 ? { x: c, y: o } : { x: o, y: c }
  );
}
function X0(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = lv.reduce(function (l, d) {
      return (l[d] = J0(d, t.rects, i)), l;
    }, {}),
    c = o[t.placement],
    s = c.x,
    u = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = o);
}
const Z0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: X0 };
function Q0(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = bv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const ew = { name: "popperOffsets", enabled: !0, phase: "read", fn: Q0, data: {} };
function tw(e) {
  return e === "x" ? "y" : "x";
}
function rw(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    o = r.altAxis,
    c = o === void 0 ? !1 : o,
    s = r.boundary,
    u = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    v = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    p = h === void 0 ? 0 : h,
    g = fa(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = Et(t.placement),
    m = Wr(t.placement),
    O = !m,
    w = Cs(b),
    _ = tw(w),
    k = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    L = t.rects.popper,
    N = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
    T =
      typeof N == "number"
        ? { mainAxis: N, altAxis: N }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
    B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    W = { x: 0, y: 0 };
  if (k) {
    if (i) {
      var P,
        E = w === "y" ? Pe : Re,
        I = w === "y" ? et : tt,
        j = w === "y" ? "height" : "width",
        M = k[w],
        F = M + g[E],
        R = M - g[I],
        K = v ? -L[j] / 2 : 0,
        q = m === Vr ? x[j] : L[j],
        G = m === Vr ? -L[j] : -x[j],
        ie = t.elements.arrow,
        Z = v && ie ? xs(ie) : { width: 0, height: 0 },
        le = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : vv(),
        fe = le[E],
        ye = le[I],
        we = Zn(0, x[j], Z[j]),
        rt = O ? x[j] / 2 - K - we - fe - T.mainAxis : q - we - fe - T.mainAxis,
        ve = O ? -x[j] / 2 + K + we + ye + T.mainAxis : G + we + ye + T.mainAxis,
        pt = t.elements.arrow && _a(t.elements.arrow),
        Wt = pt ? (w === "y" ? pt.clientTop || 0 : pt.clientLeft || 0) : 0,
        nt = (P = B == null ? void 0 : B[w]) != null ? P : 0,
        ht = M + rt - nt - Wt,
        Se = M + ve - nt,
        gt = Zn(v ? oi(F, ht) : F, M, v ? dr(R, Se) : R);
      (k[w] = gt), (W[w] = gt - M);
    }
    if (c) {
      var bt,
        at = w === "x" ? Pe : Re,
        Qr = w === "x" ? et : tt,
        qe = k[_],
        Le = _ === "y" ? "height" : "width",
        Ee = qe + g[at],
        Ue = qe - g[Qr],
        nr = [Pe, Re].indexOf(b) !== -1,
        xa = (bt = B == null ? void 0 : B[_]) != null ? bt : 0,
        Ca = nr ? Ee : qe - x[Le] - L[Le] - xa + T.altAxis,
        Pa = nr ? qe + x[Le] + L[Le] - xa - T.altAxis : Ue,
        Ra = v && nr ? x0(Ca, qe, Pa) : Zn(v ? Ca : Ee, qe, v ? Pa : Ue);
      (k[_] = Ra), (W[_] = Ra - qe);
    }
    t.modifiersData[n] = W;
  }
}
const nw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rw,
  requiresIfExists: ["offset"],
};
function aw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function iw(e) {
  return e === ze(e) || !Qe(e) ? Ps(e) : aw(e);
}
function ow(e) {
  var t = e.getBoundingClientRect(),
    r = Gr(t.width) / e.offsetWidth || 1,
    n = Gr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function sw(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && ow(t),
    i = tr(t),
    o = Hr(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Rt(t) !== "body" || As(i)) && (c = iw(t)),
      Qe(t) ? ((s = Hr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = Rs(i))),
    {
      x: o.left + c.scrollLeft - s.x,
      y: o.top + c.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function cw(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function (c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && a(s);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || a(i);
    }),
    n
  );
}
function uw(e) {
  var t = cw(e);
  return _0.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function lw(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function dw(e) {
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
var Ml = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $l() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fw(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? Ml : a;
  return function (c, s, u) {
    u === void 0 && (u = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ml, i),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      v = {
        state: l,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(l.options) : b;
          p(),
            (l.options = Object.assign({}, i, l.options, m)),
            (l.scrollParents = {
              reference: pr(c) ? Qn(c) : c.contextElement ? Qn(c.contextElement) : [],
              popper: Qn(s),
            });
          var O = uw(dw([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = O.filter(function (w) {
              return w.enabled;
            })),
            h(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = l.elements,
              m = b.reference,
              O = b.popper;
            if ($l(m, O)) {
              (l.rects = {
                reference: sw(m, _a(O), l.options.strategy === "fixed"),
                popper: xs(O),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (T) {
                  return (l.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var w = 0; w < l.orderedModifiers.length; w++) {
                if (l.reset === !0) {
                  (l.reset = !1), (w = -1);
                  continue;
                }
                var _ = l.orderedModifiers[w],
                  k = _.fn,
                  x = _.options,
                  L = x === void 0 ? {} : x,
                  N = _.name;
                typeof k == "function" &&
                  (l = k({ state: l, options: L, name: N, instance: v }) || l);
              }
            }
          }
        },
        update: lw(function () {
          return new Promise(function (g) {
            v.forceUpdate(), g(l);
          });
        }),
        destroy: function () {
          p(), (f = !0);
        },
      };
    if (!$l(c, s)) return v;
    v.setOptions(u).then(function (g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          O = m === void 0 ? {} : m,
          w = g.effect;
        if (typeof w == "function") {
          var _ = w({ state: l, name: b, instance: v, options: O }),
            k = function () {};
          d.push(_ || k);
        }
      });
    }
    function p() {
      d.forEach(function (g) {
        return g();
      }),
        (d = []);
    }
    return v;
  };
}
var vw = [M0, ew, T0, k0, Z0, W0, nw, A0, Y0],
  pw = fw({ defaultModifiers: vw }),
  wo,
  Nl;
function hw() {
  if (Nl) return wo;
  Nl = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(i, o) {
    if (i === o) return !0;
    if (i && o && typeof i == "object" && typeof o == "object") {
      if (i.constructor !== o.constructor) return !1;
      var c, s, u;
      if (Array.isArray(i)) {
        if (((c = i.length), c != o.length)) return !1;
        for (s = c; s-- !== 0; ) if (!a(i[s], o[s])) return !1;
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
        if (((c = i.length), c != o.length)) return !1;
        for (s = c; s-- !== 0; ) if (i[s] !== o[s]) return !1;
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
      if (((u = Object.keys(i)), (c = u.length), c !== Object.keys(o).length)) return !1;
      for (s = c; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, u[s])) return !1;
      if (e && i instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (
          !((u[s] === "_owner" || u[s] === "__v" || u[s] === "__o") && i.$$typeof) &&
          !a(i[u[s]], o[u[s]])
        )
          return !1;
      return !0;
    }
    return i !== i && o !== o;
  }
  return (
    (wo = function (o, c) {
      try {
        return a(o, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw s;
      }
    }),
    wo
  );
}
var gw = hw();
const bw = mr(gw);
var yw = [],
  mw = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || yw,
      },
      o = y.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = o[0],
      s = o[1],
      u = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              p = Object.keys(h.elements);
            gi.flushSync(function () {
              s({
                styles: Cl(
                  p.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Cl(
                  p.map(function (g) {
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
            modifiers: [].concat(i.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return bw(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u],
      ),
      d = y.useRef();
    return (
      Pl(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Pl(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || pw,
              v = f(t, r, l);
            return (
              (d.current = v),
              function () {
                v.destroy(), (d.current = null);
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
  _w = function () {},
  ww = function () {
    return Promise.resolve(null);
  },
  Ow = [];
function kw(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? Ow : i,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(i0),
    f = y.useState(null),
    v = f[0],
    h = f[1],
    p = y.useState(null),
    g = p[0],
    b = p[1];
  y.useEffect(
    function () {
      c0(u, v);
    },
    [u, v],
  );
  var m = y.useMemo(
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
    O = mw(c || d, v, m),
    w = O.state,
    _ = O.styles,
    k = O.forceUpdate,
    x = O.update,
    L = y.useMemo(
      function () {
        return {
          ref: h,
          style: _.popper,
          placement: w ? w.placement : r,
          hasPopperEscaped:
            w && w.modifiersData.hide ? w.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            w && w.modifiersData.hide ? w.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: _.arrow, ref: b },
          forceUpdate: k || _w,
          update: x || ww,
        };
      },
      [h, b, r, w, _, x, k],
    );
  return o0(l)(L);
}
function Sw(e) {
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
          c,
          s = n.state,
          u = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (u == null || (a = u.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (u == null || (i = u.viewport) === null || i === void 0 ? void 0 : i.height) !=
              "number"
          )
        ) {
          var l = u.viewport,
            d = s.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            h = te(v, 1),
            p = h[0],
            g =
              (o =
                (c = s.modifiersData) === null ||
                c === void 0 ||
                (c = c.offset) === null ||
                c === void 0
                  ? void 0
                  : c[s.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            m = l.height - 2 * t;
          p === "top" && (m = s.rects.reference.y + g.y - t),
            p === "bottom" && (m = l.height - f.y - t),
            p === "left" && (b = s.rects.reference.x + g.x - t),
            p === "right" && (b = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(m, "px"));
        }
      },
    },
  ];
}
var Yo = 5,
  Ew = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Yo,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function xw() {
  return null;
}
var Cw = [0, 8];
function Pw(e) {
  var t = e.children,
    r = t === void 0 ? xw : t,
    n = e.offset,
    a = n === void 0 ? Cw : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    v = f === void 0 ? !1 : f,
    h = te(a, 2),
    p = h[0],
    g = h[1],
    b = y.useMemo(
      function () {
        var O = {
            name: "preventOverflow",
            options: { padding: Yo, rootBoundary: v ? "viewport" : "document" },
          },
          w = { name: "offset", options: { offset: [p, g] } },
          _ = v ? Sw({ viewportPadding: Yo }) : [];
        return [].concat(Ew, [O, w], Me(_));
      },
      [p, g, v],
    ),
    m = y.useMemo(
      function () {
        return u == null ? b : [].concat(Me(b), Me(u));
      },
      [b, u],
    );
  return S.createElement(kw, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var yv = "atlaskit-portal-container",
  mv = "body > .atlaskit-portal-container",
  _v = "atlaskit-portal",
  Rw = function (t) {
    var r = document.createElement("div");
    return (r.className = _v), (r.style.zIndex = "".concat(t)), r;
  },
  wv = function () {
    return document.body;
  },
  Ov = function () {
    var t = document.querySelector(mv);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = yv),
        (n.style.display = "flex"),
        (r = wv()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  Aw = function (t) {
    Ov().removeChild(t);
  },
  jw = function (t) {
    t.parentElement || Ov().appendChild(t);
  },
  kv = function () {
    return document !== void 0;
  },
  Iw = function (t) {
    if (kv()) {
      var r = document.createElement("div");
      return (r.className = _v), (r.style.zIndex = "".concat(t)), r;
    }
  },
  Dw = function () {
    if (kv()) {
      var t = document.querySelector(mv);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = yv),
          (n.style.display = "flex"),
          (r = wv()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function Tw(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return Rw(t);
      },
      [t],
    );
  return (
    jw(n),
    y.useEffect(
      function () {
        return function () {
          Aw(n);
        };
      },
      [n],
    ),
    gi.createPortal(r, n)
  );
}
var Sv = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function Lw(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = te(n, 2),
    i = a[0],
    o = a[1];
  Sv(
    function () {
      var s = Iw(t);
      o(s);
      var u = Dw();
      if (!(!s || !u))
        return (
          u.appendChild(s),
          function () {
            s && u.removeChild(s), o(null);
          }
        );
    },
    [t],
  );
  var c = S.createElement(y.Suspense, { fallback: null }, r);
  return i ? gi.createPortal(c, i) : null;
}
var Mw = function (t) {
    var r = y.useState(!1),
      n = te(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? Sv : y.useEffect;
      }),
      c = te(o, 1),
      s = c[0];
    return (
      s(function () {
        i(!0);
      }, []),
      a
    );
  },
  $w = "akPortalMount",
  Nw = "akPortalUnmount",
  Fl = {
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
  Fw = function (t) {
    return Fl.hasOwnProperty(t) ? Fl[t] : null;
  },
  zw = function (t, r) {
    var n = { layer: Fw(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function zl(e, t) {
  var r = zw(e, t);
  window.dispatchEvent(r);
}
var Bw = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        zl($w, r),
        function () {
          zl(Nw, r);
        }
      );
    },
    [r],
  );
};
function qw(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = Mw(i);
  return (
    Bw(r),
    me("platform_design_system_team_portal_logic_r18_fix")
      ? S.createElement(Lw, { zIndex: r }, n)
      : o
        ? S.createElement(Tw, { zIndex: r }, n)
        : null
  );
}
var ea = new Set(),
  va = null;
function Bl() {
  if (!va) {
    va = _i.bindAll(window, [
      { type: "dragend", listener: Oo },
      { type: "pointerdown", listener: Oo },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Oo();
          };
        })(),
      },
    ]);
    var e = Array.from(ea);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Oo() {
  var e;
  (e = va) === null || e === void 0 || e(), (va = null);
  var t = Array.from(ea);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function Uw() {
  return _i.bindAll(window, [
    { type: "dragstart", listener: Bl },
    { type: "dragenter", listener: Bl },
  ]);
}
var $a = null;
function Vw(e) {
  return (
    $a || ($a = Uw()),
    ea.add(e),
    e.onRegister({ isDragging: va !== null }),
    function () {
      if ((ea.delete(e), ea.size === 0)) {
        var r;
        (r = $a) === null || r === void 0 || r(), ($a = null);
      }
    }
  );
}
var ta = null;
function Yn() {
  ta != null && (window.clearTimeout(ta), (ta = null));
}
function ql(e, t) {
  Yn(),
    (ta = window.setTimeout(function () {
      (ta = null), e();
    }, t));
}
var yt = null;
function Gw(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(yt && yt.entry === e);
  }
  function n() {
    r() && (Yn(), (yt = null));
  }
  function a() {
    r() && e.done(), (t = "done"), n();
  }
  function i() {
    r() && e.hide({ isImmediate: !0 }), a();
  }
  function o() {
    if (r()) {
      if (t === "waiting-to-hide") {
        (t = "shown"), Yn();
        return;
      }
      if (t === "hide-animating") {
        (t = "shown"), Yn(), e.show({ isImmediate: !1 });
        return;
      }
    }
  }
  function c(v) {
    var h = v.isImmediate;
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
        (t = "waiting-to-hide"),
          ql(function () {
            (t = "hide-animating"), e.hide({ isImmediate: !1 });
          }, e.delay);
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function u() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = !!(yt && yt.isVisible());
    yt && (Yn(), yt.entry.hide({ isImmediate: !0 }), yt.entry.done(), (yt = null)),
      (yt = { entry: e, isVisible: u });
    function h() {
      (t = "shown"), e.show({ isImmediate: v });
    }
    if (v) {
      h();
      return;
    }
    (t = "waiting-to-show"), ql(h, e.delay);
  }
  d();
  var f = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return f;
}
function Hw(e, t) {
  var r = Ny();
  return t ? "".concat(r(e)) : void 0;
}
function Ul(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ul(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ul(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ev = "tooltipPrimitiveZindex",
  Ww = ft({ zindex: "var(".concat(Ev, ")"), cursor: "default" }),
  xv = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = Vl(Vl({}, n), {}, C({}, Ev, $f.tooltip()));
    return ot(
      "div",
      { ref: r, style: d, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      ot(
        "div",
        {
          role: "tooltip",
          className: a,
          onMouseOut: s,
          onMouseOver: u,
          css: Ww,
          "data-placement": o,
          "data-testid": c,
          id: l,
        },
        i,
      ),
    );
  });
xv.displayName = "TooltipPrimitive";
function Gl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Cv = y.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    i = t.children,
    o = t.truncate,
    c = t.placement,
    s = t.testId,
    u = t.onMouseOut,
    l = t.onMouseOver,
    d = t.id;
  return y.createElement(
    xv,
    {
      ref: r,
      className: D([
        "_2rko1sit _11c8dcr7 _vchhusvi _p12fp3fh _bfhkpioe _syaz1i9p _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
        o && "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
        a,
      ]),
      placement: c,
      testId: s,
      id: d,
      onMouseOut: u,
      onMouseOver: l,
      style: Hl(
        Hl({}, n),
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
Cv.displayName = "TooltipContainer";
function Wl(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kl(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Kw = $f.tooltip(),
  Yl = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.0.6" },
  Yw = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Jw = function (t) {
    return t.split("-")[0];
  };
function Pv(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? Cv : u,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    p = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? ke : g,
    m = e.onHide,
    O = m === void 0 ? ke : m,
    w = e.canAppear,
    _ = e.hideTooltipOnClick,
    k = _ === void 0 ? !1 : _,
    x = e.hideTooltipOnMouseDown,
    L = x === void 0 ? !1 : x,
    N = e.analyticsContext,
    T = e.strategy,
    B = T === void 0 ? "fixed" : T,
    W = e.ignoreTooltipPointerEvents,
    P = W === void 0 ? !1 : W,
    E = e.isScreenReaderAnnouncementDisabled,
    I = E === void 0 ? !1 : E,
    j = n === "mouse" ? i : n,
    M = lu(Mr({ fn: b, action: "displayed", analyticsData: N }, Yl)),
    F = lu(Mr({ fn: O, action: "hidden", analyticsData: N }, Yl)),
    R = y.useRef(null),
    K = y.useState("hide"),
    q = te(K, 2),
    G = q[0],
    ie = q[1],
    Z = y.useRef(null),
    le = y.useRef(null),
    fe = function (ce) {
      (le.current = ce), (Z.current = ce ? ce.firstElementChild : null);
    },
    ye = y.useCallback(function (U) {
      Z.current = U;
    }, []),
    we = Un(G),
    rt = Un(M),
    ve = Un(F),
    pt = Un(p),
    Wt = Un(w),
    nt = y.useRef(!1),
    ht = y.useCallback(function (U) {
      (R.current = U), (nt.current = !1);
    }, []),
    Se = y.useCallback(
      function () {
        R.current &&
          (nt.current && ve.current(), (R.current = null), (nt.current = !1), ie("hide"));
      },
      [ve],
    ),
    gt = y.useCallback(
      function () {
        R.current && (R.current.abort(), nt.current && ve.current(), (R.current = null));
      },
      [ve],
    );
  y.useEffect(
    function () {
      return function () {
        R.current && gt();
      };
    },
    [gt],
  );
  var bt = y.useRef(!1);
  y.useEffect(function () {
    return Vw({
      onRegister: function (ce) {
        var Dt = ce.isDragging;
        bt.current = Dt;
      },
      onDragStart: function () {
        var ce;
        (ce = R.current) === null || ce === void 0 || ce.requestHide({ isImmediate: !0 }),
          (bt.current = !0);
      },
      onDragEnd: function () {
        bt.current = !1;
      },
    });
  }, []);
  var at = y.useCallback(
      function (U) {
        var ce;
        if (!bt.current) {
          if ((R.current && !R.current.isActive() && gt(), R.current && R.current.isActive())) {
            R.current.keep();
            return;
          }
          if (!(Wt.current && !((ce = Wt.current) !== null && ce !== void 0 && ce.call(Wt)))) {
            var Dt = {
                source: U,
                delay: pt.current,
                show: function (Sr) {
                  var tn = Sr.isImmediate;
                  nt.current || ((nt.current = !0), rt.current()),
                    ie(tn ? "show-immediate" : "fade-in");
                },
                hide: function (Sr) {
                  var tn = Sr.isImmediate;
                  ie(tn ? "hide" : "before-fade-out");
                },
                done: Se,
              },
              qi = Gw(Dt);
            ht(qi);
          }
        }
      },
      [Wt, pt, Se, ht, gt, rt],
    ),
    Qr = y.useCallback(
      function () {
        var U;
        (U = R.current) === null || U === void 0 || U.requestHide({ isImmediate: !0 });
      },
      [R],
    );
  z_({ onClose: Qr, isDisabled: G === "hide" || G === "fade-out" }),
    y.useEffect(
      function () {
        if (G === "hide") return ke;
        G === "before-fade-out" && ie("fade-out");
        var U = _i.bind(window, {
          type: "scroll",
          listener: function () {
            R.current && R.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return U;
      },
      [G],
    );
  var qe = y.useCallback(
      function () {
        L && R.current && R.current.requestHide({ isImmediate: !0 });
      },
      [L],
    ),
    Le = y.useCallback(
      function () {
        k && R.current && R.current.requestHide({ isImmediate: !0 });
      },
      [k],
    ),
    Ee = y.useCallback(
      function (U) {
        if (!(le.current && U.target === le.current) && !U.defaultPrevented) {
          U.preventDefault();
          var ce =
            n === "mouse"
              ? { type: "mouse", mouse: Wl({ left: U.clientX, top: U.clientY }) }
              : { type: "keyboard" };
          at(ce);
        }
      },
      [n, at],
    ),
    Ue = y.useCallback(function (U) {
      (le.current && U.target === le.current) ||
        U.defaultPrevented ||
        (U.preventDefault(), R.current && R.current.requestHide({ isImmediate: !1 }));
    }, []),
    nr =
      n === "mouse"
        ? function (U) {
            var ce;
            (ce = R.current) !== null &&
              ce !== void 0 &&
              ce.isActive() &&
              (R.current.mousePosition = Wl({ left: U.clientX, top: U.clientY }));
          }
        : void 0,
    xa = y.useCallback(function () {
      if (R.current && R.current.isActive()) {
        R.current.keep();
        return;
      }
    }, []),
    Ca = y.useCallback(
      function () {
        try {
          if (
            Z.current &&
            !Z.current.matches(":focus-visible") &&
            me("platform-tooltip-focus-visible")
          )
            return;
        } catch {}
        at({ type: "keyboard" });
      },
      [at],
    ),
    Pa = y.useCallback(function () {
      R.current && R.current.requestHide({ isImmediate: !1 });
    }, []),
    Ra = y.useCallback(
      function (U) {
        U === "exiting" &&
          we.current === "fade-out" &&
          R.current &&
          R.current.finishHideAnimation();
      },
      [we],
    ),
    jp = f,
    zi = G !== "hide" && !!o,
    zs = !I && zi,
    Bs = G !== "hide" && G !== "fade-out",
    Ip = y.useCallback(function () {
      var U;
      (U = R.current) === null || U === void 0 || U.requestHide({ isImmediate: !0 });
    }, []);
  V_({
    isOpen: zi && (me("platform_dst_open_layer_observer_close_layers") ? Bs : !0),
    onClose: Ip,
  });
  var qs = function () {
      var ce;
      if (n === "mouse" && (ce = R.current) !== null && ce !== void 0 && ce.mousePosition) {
        var Dt;
        return (Dt = R.current) === null || Dt === void 0 ? void 0 : Dt.mousePosition;
      }
      return Z.current || void 0;
    },
    en = Hw("tooltip", zs),
    Bi = {
      onMouseOver: Ee,
      onMouseOut: Ue,
      onMouseMove: nr,
      onMouseDown: qe,
      onClick: Le,
      onFocus: Ca,
      onBlur: Pa,
    };
  v && (Bi["data-testid"] = "".concat(v, "--container"));
  var Us = typeof t == "function";
  y.useEffect(
    function () {
      if (!Us) {
        var U = Z.current;
        if (!(!U || !en))
          return (
            U.setAttribute("aria-describedby", en),
            function () {
              return U.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Us, en],
  );
  var Vs = zs
    ? S.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: en },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return S.createElement(
    S.Fragment,
    null,
    typeof t == "function"
      ? S.createElement(
          S.Fragment,
          null,
          t(Mr(Mr({}, Bi), {}, { "aria-describedby": en, ref: ye })),
          Vs,
        )
      : S.createElement(jp, J({}, Bi, { ref: fe, role: "presentation" }), t, Vs),
    zi
      ? S.createElement(
          qw,
          { zIndex: Kw },
          S.createElement(Pw, { placement: j, referenceElement: qs(), strategy: B }, function (U) {
            var ce = U.ref,
              Dt = U.style,
              qi = U.update,
              Ui = U.placement,
              Sr = n === "mouse" ? void 0 : Yw[Jw(Ui)];
            return S.createElement(
              cv,
              { appear: !0 },
              Bs &&
                S.createElement(
                  a0,
                  {
                    distance: "constant",
                    entranceDirection: Sr,
                    exitDirection: Sr,
                    onFinish: Ra,
                    duration: G !== "show-immediate" ? "medium" : "none",
                  },
                  function (tn) {
                    var Dp = tn.className;
                    return S.createElement(
                      l,
                      {
                        ref: ce,
                        className: "Tooltip ".concat(Dp),
                        style: Mr(Mr({}, Dt), P && { pointerEvents: "none" }),
                        truncate: s,
                        placement: j,
                        testId: qs() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Ue,
                        onMouseOver: xa,
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
Pv.displayName = "Tooltip";
var Xw = [
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
  Gn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Zw = { headCellContainer: "_1e0c1txw _4cvr1h6o" },
  Rv = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      c = t.sortOrder,
      s = t.onClick,
      u = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      h = v === void 0 ? "Sort descending" : v,
      p = t.buttonAriaRoleDescription,
      g = p === void 0 ? "Sort button" : p,
      b = t.isIconOnlyHeader,
      m = se(t, Xw),
      O = y.useState(!1),
      w = te(O, 2),
      _ = w[0],
      k = w[1],
      x = y.useState(!1),
      L = te(x, 2),
      N = L[0],
      T = L[1],
      B = u === l || c !== void 0,
      W = _ || B || N,
      P = W && b,
      E = !b || W || (b && !N),
      I = y.useCallback(
        function () {
          T == null || T(!0);
        },
        [T],
      ),
      j = y.useCallback(
        function () {
          T == null || T(!1);
        },
        [T],
      ),
      M = y.useCallback(
        function () {
          k(!0);
        },
        [k],
      ),
      F = y.useCallback(
        function () {
          k(!1);
        },
        [k],
      ),
      R = S.createElement(
        mi,
        { xcss: Zw.headCellContainer, onMouseEnter: M, onMouseLeave: F, onFocus: I, onBlur: j },
        S.createElement(
          Pv,
          { content: c === vr ? f : h },
          S.createElement(
            Cy,
            { onClick: s, xcss: Gn.buttonWrapper, "aria-roledescription": g },
            S.createElement(
              ai,
              { xcss: P ? Gn.hideIconHeaderWrapper : Gn.visibleHeaderWrapper },
              S.createElement(
                Df,
                { size: "small", color: "color.text.subtle", weight: "bold", maxLines: 1 },
                r,
              ),
            ),
            E &&
              S.createElement(
                ai,
                { xcss: W ? Gn.sortIconVisibleWrapper : Gn.sortIconHiddenWrapper },
                c === vr
                  ? S.createElement(N_, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : S.createElement(L_, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return S.createElement(
      rv,
      J(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: c },
      ),
      o ? R : r,
    );
  },
  Qw = ["isRanking", "refHeight", "refWidth"];
function e1(e, t, r) {
  return (t = X(t)), De(e, Av() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Av() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Av = function () {
    return !!e;
  })();
}
var t1 = (function (e) {
    function t() {
      return pe(this, t), e1(this, t, arguments);
    }
    return (
      Te(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = se(n, Qw),
              c = sf(a, i);
            return S.createElement(Rv, J({ inlineStyles: c }, o));
          },
        },
      ])
    );
  })(S.Component),
  r1 = av(t1),
  n1 = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  jv = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      c = t.onClick,
      s = se(t, n1);
    return S.createElement(
      rv,
      J(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        s,
        { onClick: c, isSortable: o },
      ),
      o
        ? S.createElement("button", { type: "button", "aria-roledescription": "Sort button" }, r)
        : r,
    );
  },
  a1 = ["isRanking", "refHeight", "refWidth"];
function i1(e, t, r) {
  return (t = X(t)), De(e, Iv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Iv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Iv = function () {
    return !!e;
  })();
}
var o1 = (function (e) {
    function t() {
      return pe(this, t), i1(this, t, arguments);
    }
    return (
      Te(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = se(n, a1),
              c = sf(a, i);
            return S.createElement(jv, J({ inlineStyles: c }, o));
          },
        },
      ])
    );
  })(S.Component),
  s1 = av(o1),
  c1 = ["cells"],
  u1 = [
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
function l1(e, t, r) {
  return (t = X(t)), De(e, Dv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Dv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dv = function () {
    return !!e;
  })();
}
var d1 = (function (e) {
    function t(r) {
      var n;
      return pe(this, t), (n = l1(this, t, [r])), (n.state = { activeSortButtonId: null }), n;
    }
    return (
      Te(t, e),
      he(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Xa(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Xa(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.head,
              o = a.sortKey,
              c = a.sortOrder,
              s = a.isFixedSize,
              u = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              v = this.state.activeSortButtonId;
            if (!i) return null;
            var h = d ? s1 : jv,
              p = d ? r1 : Rv,
              g = i.cells,
              b = se(i, c1);
            return S.createElement(
              j_,
              J({}, b, { isRanking: l, testId: f && "".concat(f, "--head") }),
              S.createElement(
                "tr",
                null,
                g.map(function (m, O) {
                  var w = m.ascendingSortTooltip,
                    _ = m.buttonAriaRoleDescription,
                    k = m.colSpan,
                    x = m.content,
                    L = m.descendingSortTooltip,
                    N = m.isIconOnlyHeader,
                    T = m.isSortable,
                    B = m.key,
                    W = m.shouldTruncate,
                    P = m.testId,
                    E = m.width,
                    I = se(m, u1),
                    j = "head-cell-".concat(O),
                    M = function () {
                      n.setState({ activeSortButtonId: j }), T && u(m)();
                    };
                  return me("platform-component-visual-refresh")
                    ? S.createElement(
                        p,
                        J(
                          {
                            colSpan: k,
                            content: x,
                            isFixedSize: s,
                            isIconOnlyHeader: N,
                            isSortable: !!T,
                            isRanking: l,
                            key: B || O,
                            headCellId: j,
                            activeSortButtonId: v,
                            onClick: M,
                            testId: P || f,
                            shouldTruncate: W,
                            sortOrder: B === o ? c : void 0,
                            width: E,
                            ascendingSortTooltip: w,
                            descendingSortTooltip: L,
                            buttonAriaRoleDescription: _,
                          },
                          I,
                        ),
                      )
                    : S.createElement(
                        h,
                        J(
                          {
                            colSpan: k,
                            content: x,
                            isFixedSize: s,
                            isSortable: !!T,
                            isRanking: l,
                            key: B || O,
                            onClick: T ? u(m) : void 0,
                            testId: P || f,
                            shouldTruncate: W,
                            sortOrder: B === o ? c : void 0,
                            width: E,
                          },
                          I,
                        ),
                      );
                }),
              ),
            );
          },
        },
      ])
    );
  })(S.Component),
  f1 = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function v1(e) {
  switch (e) {
    case ti:
      return vr;
    case vr:
      return ti;
    default:
      return e;
  }
}
var p1 = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      i = t.rows,
      o = t.sortKey,
      c = t.sortOrder,
      s = t.loadingLabel,
      u = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      f = t.label,
      v = t.isLoading,
      h = v === void 0 ? !1 : v,
      p = t.isFixedSize,
      g = p === void 0 ? !1 : p,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      O = t.onSetPage,
      w = O === void 0 ? ke : O,
      _ = t.onSort,
      k = _ === void 0 ? ke : _,
      x = t.page,
      L = x === void 0 ? 1 : x,
      N = t.emptyView,
      T = t.isRankable,
      B = T === void 0 ? !1 : T,
      W = t.isRankingDisabled,
      P = W === void 0 ? !1 : W,
      E = t.onRankStart,
      I = E === void 0 ? ke : E,
      j = t.onRankEnd,
      M = j === void 0 ? ke : j,
      F = t.loadingSpinnerSize,
      R = t.paginationi18n,
      K =
        R === void 0
          ? {
              prev: me("eax-1131_fix_a11y_issues_global_issues_settings")
                ? "Previous Page"
                : "Previous",
              next: me("eax-1131_fix_a11y_issues_global_issues_settings") ? "Next Page" : "Next",
              label: "Pagination",
              pageLabel: "Page",
            }
          : R,
      q = y.useState(!1),
      G = te(q, 2),
      ie = G[0],
      Z = G[1],
      le = y.useRef(null),
      fe = oa({
        fn: k,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.1.1",
      }),
      ye = oa({
        fn: M,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.1.1",
      });
    y.useEffect(
      function () {
        Xa(o, n), Ch(n);
      },
      [o, n],
    );
    var we = function (Ee) {
        return function () {
          var Ue = Ee.key;
          if (Ue) {
            if (fe && B && Ue === o && c === ti) {
              fe({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var nr = Ue !== o ? vr : v1(c);
            fe && fe({ key: Ue, item: Ee, sortOrder: nr });
          }
        };
      },
      rt = function (Ee, Ue) {
        w(Ee, Ue);
      },
      ve = function (Ee) {
        Z(!0), I(Ee);
      },
      pt = function (Ee) {
        Z(!1), ye(Ee);
      },
      Wt = function () {
        return F || (of(i || [], L, m).length > 2 ? ri : Ug);
      },
      nt = function () {
        return h ? S.createElement(eb, { testId: l }) : N && S.createElement(tb, { testId: l }, N);
      },
      ht = i && i.length,
      Se,
      gt = !1;
    d && Number.isInteger(d) && m && ht && ht <= d
      ? ((Se = Math.ceil(d / m)), (gt = !0))
      : (Se = ht && m ? Math.ceil(ht / m) : 0),
      (Se = Se < 1 ? 1 : Se);
    var bt = L > Se ? Se : L,
      at = !!ht,
      Qr = Wt(),
      qe = nt();
    return S.createElement(
      S.Fragment,
      null,
      S.createElement(
        xf,
        {
          isLoading: h && at,
          spinnerSize: Qr,
          targetRef: function () {
            return le.current;
          },
          testId: l,
          loadingLabel: s,
        },
        S.createElement(
          Xg,
          { isFixedSize: g, "aria-label": f, hasDataRow: at, testId: l, isLoading: h },
          !!r && S.createElement(Zg, null, r),
          n &&
            S.createElement(d1, {
              head: n,
              onSort: we,
              sortKey: o,
              sortOrder: c,
              isRanking: ie,
              isRankable: B,
              testId: l,
            }),
          at &&
            S.createElement(g1, {
              ref: le,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: c,
              rowsPerPage: m,
              page: bt,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: gt,
              testId: l,
              isRankable: B,
              isRanking: ie,
              onRankStart: ve,
              onRankEnd: pt,
              isRankingDisabled: P || h || !1,
            }),
        ),
      ),
      Se <= 1
        ? null
        : S.createElement(
            Qg,
            { testId: l },
            S.createElement(P_, {
              value: bt,
              onChange: rt,
              total: Se,
              i18n: K,
              isDisabled: h,
              testId: l,
            }),
          ),
      !at &&
        qe &&
        S.createElement(Sf, { isLoading: h, spinnerSize: ri, testId: l, loadingLabel: s }, qe),
    );
  },
  h1 = y.lazy(function () {
    return jh(
      () => import("./body-BlDPw77o.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  g1 = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = se(t, f1),
      l = a && !u.sortKey,
      d = y.useState(!1),
      f = te(d, 2),
      v = f[0],
      h = f[1];
    y.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var p = S.createElement(gb, J({ ref: r }, u));
    return l && v
      ? S.createElement(
          yb,
          { fallback: p },
          S.createElement(
            y.Suspense,
            { fallback: p },
            S.createElement(
              h1,
              J({ ref: r }, u, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: c,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : p;
  });
function b1(e, t, r) {
  return (t = X(t)), De(e, Tv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tv = function () {
    return !!e;
  })();
}
var js = (function (e) {
  function t() {
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = b1(this, t, [].concat(a))),
      C(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      C(r, "onSetPageHandler", function (o, c) {
        var s = r.props.onSetPage;
        s && (s(o, c), r.setState({ page: o }));
      }),
      C(r, "onSortHandler", function (o, c) {
        var s = o.key,
          u = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: u, sortOrder: l }, c), r.setState({ sortKey: s, sortOrder: l }));
      }),
      C(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      C(r, "onRankEndHandler", function (o) {
        var c = o.destination,
          s = r.state,
          u = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!c || !u) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = Ph(o, u, l, d);
        r.setState({ rows: f }), r.onRankEndIfExistsHandler(o);
      }),
      r
    );
  }
  return (
    Te(t, e),
    he(t, [
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
            c = n.rows,
            s = this.props,
            u = s.caption,
            l = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            h = s.isLoading,
            p = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            m = s.isRankingDisabled,
            O = s.rowsPerPage,
            w = s.paginationi18n,
            _ = s.onRankStart,
            k = s.onPageRowsUpdate,
            x = s.testId,
            L = s.label;
          return S.createElement(p1, {
            paginationi18n: w,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: f,
            loadingSpinnerSize: v,
            isLoading: h,
            loadingLabel: p,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: O,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: _,
            onPageRowsUpdate: k,
            testId: x,
            label: L,
          });
        },
      },
    ])
  );
})(S.Component);
C(js, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: ke,
  onSort: ke,
  rowsPerPage: 1 / 0,
});
const y1 = (e, t, r) => {
    const n = [];
    switch (r) {
      case "USER": {
        n.push({ key: "id", content: "ID", isSortable: !0, width: 25 }),
          n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 });
        break;
      }
      case "DUPLICATE":
        n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 }),
          n.push({ key: "count", content: "COUNT", isSortable: !0, width: 25 });
    }
    return t && n.push({ key: "delete", content: "Delete", isSortable: !1, width: 25 }), n;
  },
  Lv = (e, t, r) => ({ cells: y1(e, t, r) });
function Q(e) {
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
var m1 = {};
function Ei() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : m1;
}
var Mv = Object.assign,
  si = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  xi = Object.prototype,
  Jo = [];
Object.freeze(Jo);
var $v = {};
Object.freeze($v);
var _1 = typeof Proxy < "u",
  w1 = Object.toString();
function Nv() {
  _1 || Q("Proxy not available");
}
function Fv(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var Nr = function () {};
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
function Ci(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!Ci(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === w1;
}
function zv(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Pi(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Bv(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
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
function O1(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ft(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var qv = typeof Object.getOwnPropertySymbols < "u";
function k1(e) {
  var t = Object.keys(e);
  if (!qv) return t;
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
var Ri =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : qv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Uv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return xi.hasOwnProperty.call(e, t);
}
var S1 =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ri(t).forEach(function (n) {
        r[n] = si(t, n);
      }),
      r
    );
  };
function $e(e, t) {
  return !!(e & t);
}
function Ne(e, t, r) {
  return r ? (e |= t) : (e &= ~t), e;
}
function Jl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function E1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, C1(n.key), n);
  }
}
function Xr(e, t, r) {
  return t && E1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = P1(e)) || t) {
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
function Vv(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Xo(e, t);
}
function Xo(e, t) {
  return (
    (Xo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Xo(e, t)
  );
}
function x1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function C1(e) {
  var t = x1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P1(e, t) {
  if (e) {
    if (typeof e == "string") return Jl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Jl(e, t)
          : void 0
    );
  }
}
var kt = Symbol("mobx-stored-annotations");
function Ct(e) {
  function t(r, n) {
    if (Oa(n)) return e.decorate_20223_(r, n);
    wa(r, n, e);
  }
  return Object.assign(t, e);
}
function wa(e, t, r) {
  qt(e, kt) || Pi(e, kt, gr({}, e[kt])), L1(r) || (e[kt][t] = r);
}
function R1(e) {
  return qt(e, kt) || Pi(e, kt, gr({}, e[kt])), e[kt];
}
function Oa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var V = Symbol("mobx administration"),
  rr = (function () {
    function e(r) {
      r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = ee.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r);
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
        return op(this);
      }),
      (t.reportChanged = function () {
        Je(), sp(this), Xe();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Xr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
rr.isBeingObservedMask_ = 1;
rr.isPendingUnobservationMask_ = 2;
rr.diffValueMask_ = 4;
var Is = _r("Atom", rr);
function Gv(e, t, r) {
  t === void 0 && (t = Nr), r === void 0 && (r = Nr);
  var n = new rr(e);
  return t !== Nr && zO(n, t), r !== Nr && fp(n, r), n;
}
function A1(e, t) {
  return Sp(e, t);
}
function j1(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ci = { structural: A1, default: j1 };
function br(e, t, r) {
  return gp(e)
    ? e
    : Array.isArray(e)
      ? de.array(e, { name: r })
      : er(e)
        ? de.object(e, void 0, { name: r })
        : Jr(e)
          ? de.map(e, { name: r })
          : Ft(e)
            ? de.set(e, { name: r })
            : typeof e == "function" && !ha(e) && !ga(e)
              ? zv(e)
                ? Kr(e)
                : pa(r, e)
              : e;
}
function I1(e, t, r) {
  if (e == null || $i(e) || Mi(e) || Or(e) || Ot(e)) return e;
  if (Array.isArray(e)) return de.array(e, { name: r, deep: !1 });
  if (er(e)) return de.object(e, void 0, { name: r, deep: !1 });
  if (Jr(e)) return de.map(e, { name: r, deep: !1 });
  if (Ft(e)) return de.set(e, { name: r, deep: !1 });
}
function Ai(e) {
  return e;
}
function D1(e, t) {
  return Sp(e, t) ? t : e;
}
var T1 = "override";
function L1(e) {
  return e.annotationType_ === T1;
}
function ka(e, t) {
  return { annotationType_: e, options_: t, make_: M1, extend_: $1, decorate_20223_: N1 };
}
function M1(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ha(r.value)) return 1;
  var i = Hv(e, this, t, r, !1);
  return xt(n, t, i), 2;
}
function $1(e, t, r, n) {
  var a = Hv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function N1(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (u) {
      var l, d, f, v;
      return yr(
        (l = (d = i.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (f = (v = i.options_) == null ? void 0 : v.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var u,
        l = s;
      return (
        ha(l) || (l = o(l)),
        (u = i.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      ha(e) || (e = o(e)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var s = this,
            u = s[n].bind(s);
          (u.isMobxAction = !0), (s[n] = u);
        }),
      e
    );
  }
  Q(
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
function F1(e, t, r, n) {
  t.annotationType_, n.value;
}
function Hv(e, t, r, n, a) {
  var i, o, c, s, u, l, d;
  a === void 0 && (a = A.safeDescriptors), F1(e, t, r, n);
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var v;
    f = f.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: yr(
      (o = (c = t.options_) == null ? void 0 : c.name) != null ? o : r.toString(),
      f,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Wv(e, t) {
  return { annotationType_: e, options_: t, make_: z1, extend_: B1, decorate_20223_: q1 };
}
function z1(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!qt(e.target_, t) || !ga(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ga(r.value)) return 1;
  var i = Kv(e, this, t, r, !1, !1);
  return xt(n, t, i), 2;
}
function B1(e, t, r, n) {
  var a,
    i = Kv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function q1(e, t) {
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
        (o.isMobXFlow = !0), (i[n] = o);
      }),
    e
  );
}
function U1(e, t, r, n) {
  t.annotationType_, n.value;
}
function Kv(e, t, r, n, a, i) {
  i === void 0 && (i = A.safeDescriptors), U1(e, t, r, n);
  var o = n.value;
  if ((ga(o) || (o = Kr(o)), a)) {
    var c;
    (o = o.bind((c = e.proxy_) != null ? c : e.target_)), (o.isMobXFlow = !0);
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Ds(e, t) {
  return { annotationType_: e, options_: t, make_: V1, extend_: G1, decorate_20223_: H1 };
}
function V1(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function G1(e, t, r, n) {
  return (
    W1(e, this, t, r),
    e.defineComputedProperty_(t, gr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function H1(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Zr(this)[V],
        o = gr({}, r.options_, { get: e, context: this });
      o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new lt(o));
    }),
    function () {
      return this[V].getObservablePropValue_(n);
    }
  );
}
function W1(e, t, r, n) {
  t.annotationType_, n.get;
}
function ji(e, t) {
  return { annotationType_: e, options_: t, make_: K1, extend_: Y1, decorate_20223_: J1 };
}
function K1(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Y1(e, t, r, n) {
  var a, i;
  return (
    X1(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : br,
      n,
    )
  );
}
function J1(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(c, s) {
    var u,
      l,
      d = Zr(c)[V],
      f = new fr(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : br,
        "ObservableObject." + a.toString(),
        !1,
      );
    d.values_.set(a, f), i.add(c);
  }
  if (n == "accessor")
    return {
      get: function () {
        return i.has(this) || o(this, e.get.call(this)), this[V].getObservablePropValue_(a);
      },
      set: function (s) {
        return i.has(this) || o(this, s), this[V].setObservablePropValue_(a, s);
      },
      init: function (s) {
        return i.has(this) || o(this, s), s;
      },
    };
}
function X1(e, t, r, n) {
  t.annotationType_;
}
var Z1 = "true",
  Q1 = Yv();
function Yv(e) {
  return { annotationType_: Z1, options_: e, make_: eO, extend_: tO, decorate_20223_: rO };
}
function eO(e, t, r, n) {
  var a, i;
  if (r.get) return Ii.make_(e, t, r, n);
  if (r.set) {
    var o = yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (xt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (zv(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Kr.bound : Kr;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? pa.bound : pa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? de.ref : de;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function tO(e, t, r, n) {
  var a, i;
  if (r.get) return Ii.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var c = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? de.ref : de;
  return c.extend_(e, t, r, n);
}
function rO(e, t) {
  Q("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var nO = "observable",
  aO = "observable.ref",
  iO = "observable.shallow",
  oO = "observable.struct",
  Jv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Jv);
function Na(e) {
  return e || Jv;
}
var Zo = ji(nO),
  sO = ji(aO, { enhancer: Ai }),
  cO = ji(iO, { enhancer: I1 }),
  uO = ji(oO, { enhancer: D1 }),
  Xv = Ct(Zo);
function Fa(e) {
  return e.deep === !0 ? br : e.deep === !1 ? Ai : dO(e.defaultDecorator);
}
function lO(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Yv(e)) : void 0;
}
function dO(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : br;
}
function Zv(e, t, r) {
  if (Oa(t)) return Zo.decorate_20223_(e, t);
  if (hr(t)) {
    wa(e, t, Zo);
    return;
  }
  return gp(e)
    ? e
    : er(e)
      ? de.object(e, t, r)
      : Array.isArray(e)
        ? de.array(e, t)
        : Jr(e)
          ? de.map(e, t)
          : Ft(e)
            ? de.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : de.box(e, t);
}
Mv(Zv, Xv);
var fO = {
    box: function (t, r) {
      var n = Na(r);
      return new fr(t, Fa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Na(r);
      return (A.useProxies === !1 || n.proxy === !1 ? lk : ek)(t, Fa(n), n.name);
    },
    map: function (t, r) {
      var n = Na(r);
      return new yp(t, Fa(n), n.name);
    },
    set: function (t, r) {
      var n = Na(r);
      return new mp(t, Fa(n), n.name);
    },
    object: function (t, r, n) {
      return kr(function () {
        return VO(
          A.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Zr({}, n) : XO({}, n),
          t,
          r,
        );
      });
    },
    ref: Ct(sO),
    shallow: Ct(cO),
    deep: Xv,
    struct: Ct(uO),
  },
  de = Mv(Zv, fO),
  Qv = "computed",
  vO = "computed.struct",
  Qo = Ds(Qv),
  pO = Ds(vO, { equals: ci.structural }),
  Ii = function (t, r) {
    if (Oa(r)) return Qo.decorate_20223_(t, r);
    if (hr(r)) return wa(t, r, Qo);
    if (er(t)) return Ct(Ds(Qv, t));
    var n = er(r) ? r : {};
    return (n.get = t), n.name || (n.name = t.name || ""), new lt(n);
  };
Object.assign(Ii, Qo);
Ii.struct = Ct(pO);
var Xl,
  Zl,
  ui = 0,
  hO = 1,
  gO =
    (Xl = (Zl = si(function () {}, "name")) == null ? void 0 : Zl.configurable) != null ? Xl : !1,
  Ql = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return bO(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    gO && ((Ql.value = e), xt(a, "name", Ql)),
    a
  );
}
function bO(e, t, r, n, a) {
  var i = yO(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    mO(i);
  }
}
function yO(e, t, r, n) {
  var a = !1,
    i = 0,
    o = A.trackingDerivation,
    c = !t || !o;
  Je();
  var s = A.allowStateChanges;
  c && (wr(), (s = Di(!0)));
  var u = Ts(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: i,
      actionId_: hO++,
      parentActionId_: ui,
    };
  return (ui = l.actionId_), l;
}
function mO(e) {
  ui !== e.actionId_ && Q(30),
    (ui = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Ti(e.prevAllowStateChanges_),
    ra(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Ut(e.prevDerivation_),
    (A.suppressReactionErrors = !1);
}
function _O(e, t) {
  var r = Di(e);
  try {
    return t();
  } finally {
    Ti(r);
  }
}
function Di(e) {
  var t = A.allowStateChanges;
  return (A.allowStateChanges = e), t;
}
function Ti(e) {
  A.allowStateChanges = e;
}
var fr = (function (e) {
    function t(n, a, i, o, c) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        c === void 0 && (c = ci.default),
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
        (s.equals = c),
        (s.value_ = a(n, void 0, i)),
        s
      );
    }
    Vv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a);
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ke(this)) {
          var i = Ye(this, { object: this, type: Pt, newValue: a });
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
        (this.value_ = a),
          this.reportChanged(),
          st(this) && ct(this, { type: Pt, object: this, newValue: a, oldValue: i });
      }),
      (r.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
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
              type: Pt,
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
        return Uv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(rr),
  lt = (function () {
    function e(r) {
      (this.dependenciesState_ = ee.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = ee.UP_TO_DATE_),
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
        r.get || Q(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ci.structural : ci.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        EO(this);
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
          (this.isComputing && Q(32, this.name_, this.derivation),
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          es(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((op(this), es(this))) {
          var n = A.trackingContext;
          this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && SO(this),
            (A.trackingContext = n);
        }
        var a = this.value_;
        if (Ha(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          this.isRunningSetter && Q(33, this.name_), (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else Q(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === ee.NOT_TRACKING_,
          i = this.computeValue_(!0),
          o = a || Ha(n) || Ha(i) || !this.equals_(n, i);
        return o && (this.value_ = i), o;
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Di(!1),
          i;
        if (n) i = ep(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new di(o);
          }
        return Ti(a), (this.isComputing = !1), i;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ts(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          c = void 0;
        return LO(function () {
          var s = i.get();
          if (!o || a) {
            var u = wr();
            n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Pt,
              object: i,
              newValue: s,
              oldValue: c,
            }),
              Ut(u);
          }
          (o = !1), (c = s);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Uv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Xr(e, [
        {
          key: "isComputing",
          get: function () {
            return $e(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return $e(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.diffValueMask_, n === 1);
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
var Li = _r("ComputedValue", lt),
  ee;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(ee || (ee = {}));
var li;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
})(li || (li = {}));
var di = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function Ha(e) {
  return e instanceof di;
}
function es(e) {
  switch (e.dependenciesState_) {
    case ee.UP_TO_DATE_:
      return !1;
    case ee.NOT_TRACKING_:
    case ee.STALE_:
      return !0;
    case ee.POSSIBLY_STALE_: {
      for (var t = Ts(!0), r = wr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Li(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return Ut(r), ra(t), !0;
            }
          if (e.dependenciesState_ === ee.STALE_) return Ut(r), ra(t), !0;
        }
      }
      return rp(e), Ut(r), ra(t), !1;
    }
  }
}
function ep(e, t, r) {
  var n = Ts(!0);
  rp(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId);
  var a = A.trackingDerivation;
  (A.trackingDerivation = e), A.inBatch++;
  var i;
  if (A.disableErrorBoundaries === !0) i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (o) {
      i = new di(o);
    }
  return A.inBatch--, (A.trackingDerivation = a), wO(e), ra(n), i;
}
function wO(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = ee.UP_TO_DATE_,
      a = 0,
      i = e.unboundDepsCount_,
      o = 0;
    o < i;
    o++
  ) {
    var c = r[o];
    c.diffValue === 0 && ((c.diffValue = 1), a !== o && (r[a] = c), a++),
      c.dependenciesState_ > n && (n = c.dependenciesState_);
  }
  for (r.length = a, e.newObserving_ = null, i = t.length; i--; ) {
    var s = t[i];
    s.diffValue === 0 && ap(s, e), (s.diffValue = 0);
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), kO(u, e));
  }
  n !== ee.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ts(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) ap(t[r], e);
  e.dependenciesState_ = ee.NOT_TRACKING_;
}
function tp(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Ut(t);
  }
}
function wr() {
  var e = A.trackingDerivation;
  return (A.trackingDerivation = null), e;
}
function Ut(e) {
  A.trackingDerivation = e;
}
function Ts(e) {
  var t = A.allowStateReads;
  return (A.allowStateReads = e), t;
}
function ra(e) {
  A.allowStateReads = e;
}
function rp(e) {
  if (e.dependenciesState_ !== ee.UP_TO_DATE_) {
    e.dependenciesState_ = ee.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = ee.UP_TO_DATE_;
  }
}
var Wa = function () {
    (this.version = 6),
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
      (this.safeDescriptors = !0);
  },
  Ka = !0,
  np = !1,
  A = (function () {
    var e = Ei();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ka = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Wa().version && (Ka = !1),
      Ka
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Wa()))
        : (setTimeout(function () {
            np || Q(35);
          }, 1),
          new Wa())
    );
  })();
function OO() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && Q(36), (np = !0), Ka)) {
    var e = Ei();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new Wa());
  }
}
function kO(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function ap(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && ip(e);
}
function ip(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Je() {
  A.inBatch++;
}
function Xe() {
  if (--A.inBatch === 0) {
    cp();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      (r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof lt && r.suspend_());
    }
    A.pendingUnobservations = [];
  }
}
function op(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && ip(e), !1);
}
function sp(e) {
  e.lowestObserverState_ !== ee.STALE_ &&
    ((e.lowestObserverState_ = ee.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === ee.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = ee.STALE_);
    }));
}
function SO(e) {
  e.lowestObserverState_ !== ee.STALE_ &&
    ((e.lowestObserverState_ = ee.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === ee.POSSIBLY_STALE_
        ? (t.dependenciesState_ = ee.STALE_)
        : t.dependenciesState_ === ee.UP_TO_DATE_ && (e.lowestObserverState_ = ee.UP_TO_DATE_);
    }));
}
function EO(e) {
  e.lowestObserverState_ === ee.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = ee.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === ee.UP_TO_DATE_ &&
        ((t.dependenciesState_ = ee.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var At = (function () {
  function e(r, n, a, i) {
    r === void 0 && (r = "Reaction"),
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
      (this.isTracing_ = li.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = a),
      (this.requiresObservable_ = i);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), cp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        Je(), (this.isScheduled = !1);
        var n = A.trackingContext;
        if (((A.trackingContext = this), es(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        (A.trackingContext = n), Xe();
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        Je(), (this.isRunning = !0);
        var a = A.trackingContext;
        A.trackingContext = this;
        var i = ep(this, n, void 0);
        (A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ts(this),
          Ha(i) && this.reportExceptionInDerivation_(i.cause),
          Xe();
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
      A.suppressReactionErrors || console.error(i, n),
        A.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, a);
        });
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), ts(this), Xe()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        i = function o() {
          a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o);
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", i), (i[V] = this), i
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
          return $e(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return $e(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return $e(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return $e(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
At.isDisposedMask_ = 1;
At.isScheduledMask_ = 2;
At.isTrackPendingMask_ = 4;
At.isRunningMask_ = 8;
At.diffValueMask_ = 16;
var xO = 100,
  rs = function (t) {
    return t();
  };
function cp() {
  A.inBatch > 0 || A.isRunningReactions || rs(CO);
}
function CO() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === xO && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var fi = _r("Reaction", At);
function PO(e) {
  var t = rs;
  rs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function na() {
  return !1;
}
function RO(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
}
var up = "action",
  AO = "action.bound",
  lp = "autoAction",
  jO = "autoAction.bound",
  IO = "<unnamed action>",
  ns = ka(up),
  DO = ka(AO, { bound: !0 }),
  as = ka(lp, { autoAction: !0 }),
  TO = ka(jO, { autoAction: !0, bound: !0 });
function dp(e) {
  var t = function (n, a) {
    if (ut(n)) return yr(n.name || IO, n, e);
    if (ut(a)) return yr(n, a, e);
    if (Oa(a)) return (e ? as : ns).decorate_20223_(n, a);
    if (hr(a)) return wa(n, a, e ? as : ns);
    if (hr(n)) return Ct(ka(e ? lp : up, { name: n, autoAction: e }));
  };
  return t;
}
var Ze = dp(!1);
Object.assign(Ze, ns);
var pa = dp(!0);
Object.assign(pa, as);
Ze.bound = Ct(DO);
pa.bound = Ct(TO);
function ha(e) {
  return ut(e) && e.isMobxAction === !0;
}
function LO(e, t) {
  var r, n, a, i;
  t === void 0 && (t = $v);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new At(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = $O(t),
      l = !1;
    s = new At(
      o,
      function () {
        l ||
          ((l = !0),
          u(function () {
            (l = !1), s.isDisposed || s.track(d);
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
var MO = function (t) {
  return t();
};
function $O(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : MO;
}
var NO = "onBO",
  FO = "onBUO";
function zO(e, t, r) {
  return vp(NO, e, t, r);
}
function fp(e, t, r) {
  return vp(FO, e, t, r);
}
function vp(e, t, r, n) {
  var a = hi(t),
    i = ut(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var c = a[o];
      c && (c.delete(i), c.size === 0 && delete a[o]);
    }
  );
}
var BO = "never",
  za = "always",
  qO = "observed";
function UO(e) {
  e.isolateGlobalState === !0 && OO();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === za ? !0 : t === BO ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === za ? za : r === qO;
    (A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === za));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (A[a] = !!e[a]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && PO(e.reactionScheduler);
}
function VO(e, t, r, n) {
  var a = S1(t);
  return (
    kr(function () {
      var i = Zr(e, n)[V];
      Ri(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function GO(e, t) {
  return pp(hi(e, t));
}
function pp(e) {
  var t = { name: e.name_ };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = HO(e.observing_).map(pp)), t;
}
function HO(e) {
  return Array.from(new Set(e));
}
var WO = 0;
function hp() {
  this.message = "FLOW_CANCELLED";
}
hp.prototype = Object.create(Error.prototype);
var ko = Wv("flow"),
  KO = Wv("flow.bound", { bound: !0 }),
  Kr = Object.assign(function (t, r) {
    if (Oa(r)) return ko.decorate_20223_(t, r);
    if (hr(r)) return wa(t, r, ko);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var c = this,
          s = arguments,
          u = ++WO,
          l = Ze(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          f = void 0,
          v = new Promise(function (h, p) {
            var g = 0;
            d = p;
            function b(w) {
              f = void 0;
              var _;
              try {
                _ = Ze(a + " - runid: " + u + " - yield " + g++, l.next).call(l, w);
              } catch (k) {
                return p(k);
              }
              O(_);
            }
            function m(w) {
              f = void 0;
              var _;
              try {
                _ = Ze(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, w);
              } catch (k) {
                return p(k);
              }
              O(_);
            }
            function O(w) {
              if (ut(w == null ? void 0 : w.then)) {
                w.then(O, p);
                return;
              }
              return w.done ? h(w.value) : ((f = Promise.resolve(w.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (v.cancel = Ze(a + " - runid: " + u + " - cancel", function () {
            try {
              f && ed(f);
              var h = l.return(void 0),
                p = Promise.resolve(h.value);
              p.then(Nr, Nr), ed(p), d(new hp());
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return (i.isMobXFlow = !0), i;
  }, ko);
Kr.bound = Ct(KO);
function ed(e) {
  ut(e.cancel) && e.cancel();
}
function ga(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function YO(e, t) {
  return e ? $i(e) || !!e[V] || Is(e) || fi(e) || Li(e) : !1;
}
function gp(e) {
  return YO(e);
}
function zt(e, t) {
  t === void 0 && (t = void 0), Je();
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function $r(e) {
  return e[V];
}
var JO = {
  has: function (t, r) {
    return $r(t).has_(r);
  },
  get: function (t, r) {
    return $r(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return hr(r) ? ((a = $r(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return hr(r) ? ((n = $r(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = $r(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return $r(t).ownKeys_();
  },
  preventExtensions: function (t) {
    Q(13);
  },
};
function XO(e, t) {
  var r, n;
  return Nv(), (e = Zr(e, t)), (n = (r = e[V]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, JO));
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Sa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Fv(function () {
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
      a < i && ((t = n[a](t)), t && !t.type && Q(14), !!t);
      a++
    );
    return t;
  } finally {
    Ut(r);
  }
}
function st(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ea(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Fv(function () {
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
function Ls(e, t, r) {
  return (
    kr(function () {
      var n,
        a = Zr(e, r)[V];
      (n = t) != null || (t = R1(e)),
        Ri(t).forEach(function (i) {
          return a.make_(i, t[i]);
        });
    }),
    e
  );
}
var td = "splice",
  Pt = "update",
  ZO = 1e4,
  QO = {
    get: function (t, r) {
      var n = t[V];
      return r === V
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(vi, r)
              ? vi[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[V];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      Q(15);
    },
  },
  Ms = (function () {
    function e(r, n, a, i) {
      r === void 0 && (r = "ObservableArray"),
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
        (this.enhancer_ = function (o, c) {
          return n(o, c, "ObservableArray[..]");
        });
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
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && Q("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var i = new Array(n - a), o = 0; o < n - a; o++) i[o] = void 0;
            this.spliceWithArray_(a, 0, i);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        n !== this.lastKnownLength_ && Q(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && kp(n + a + 1);
      }),
      (t.spliceWithArray_ = function (n, a, i) {
        var o = this;
        this.atom_;
        var c = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > c ? (n = c) : n < 0 && (n = Math.max(0, c + n)),
          arguments.length === 1
            ? (a = c - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, c - n))),
          i === void 0 && (i = Jo),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: td, index: n, removedCount: a, added: i });
          if (!s) return Jo;
          (a = s.removedCount), (i = s.added);
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
          var u = i.length - a;
          this.updateArrayLength_(c, u);
        }
        var l = this.spliceItemsIntoValues_(n, a, i);
        return (
          (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l), this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, i) {
        if (i.length < ZO) {
          var o;
          return (o = this.values_).splice.apply(o, [n, a].concat(i));
        } else {
          var c = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += i.length - a;
          for (var u = 0; u < i.length; u++) this.values_[n + u] = i[u];
          for (var l = 0; l < s.length; l++) this.values_[n + i.length + l] = s[l];
          return c;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, i) {
        var o = !this.owned_ && na(),
          c = st(this),
          s =
            c || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Pt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: i,
                }
              : null;
        this.atom_.reportChanged(), c && ct(this, s);
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && na(),
          c = st(this),
          s =
            c || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: td,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        this.atom_.reportChanged(), c && ct(this, s);
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
      }),
      (t.set_ = function (n, a) {
        var i = this.values_;
        if ((this.legacyMode_ && n > i.length && Q(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Ke(this)) {
            var c = Ye(this, { type: Pt, object: this.proxy_, index: n, newValue: a });
            if (!c) return;
            a = c.newValue;
          }
          a = this.enhancer_(a, o);
          var s = a !== o;
          s && ((i[n] = a), this.notifyArrayChildUpdate_(n, a, o));
        } else {
          for (var u = new Array(n + 1 - i.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          (u[u.length - 1] = a), this.spliceWithArray_(i.length, 0, u);
        }
      }),
      e
    );
  })();
function ek(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Nv(),
    kr(function () {
      var a = new Ms(r, t, n, !1);
      Bv(a.values_, V, a);
      var i = new Proxy(a.values_, QO);
      return (a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i;
    })
  );
}
var vi = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[V];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[V];
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
    return this[V].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[V], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[V].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[V], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function () {
    return A.trackingDerivation && Q(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function () {
    A.trackingDerivation && Q(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var r = this[V],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ue("at", Be);
ue("concat", Be);
ue("flat", Be);
ue("includes", Be);
ue("indexOf", Be);
ue("join", Be);
ue("lastIndexOf", Be);
ue("slice", Be);
ue("toString", Be);
ue("toLocaleString", Be);
ue("toSorted", Be);
ue("toSpliced", Be);
ue("with", Be);
ue("every", vt);
ue("filter", vt);
ue("find", vt);
ue("findIndex", vt);
ue("findLast", vt);
ue("findLastIndex", vt);
ue("flatMap", vt);
ue("forEach", vt);
ue("map", vt);
ue("some", vt);
ue("toReversed", vt);
ue("reduce", bp);
ue("reduceRight", bp);
function ue(e, t) {
  typeof Array.prototype[e] == "function" && (vi[e] = t(e));
}
function Be(e) {
  return function () {
    var t = this[V];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function vt(e) {
  return function (t, r) {
    var n = this,
      a = this[V];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function (o, c) {
      return t.call(r, o, c, n);
    });
  };
}
function bp(e) {
  return function () {
    var t = this,
      r = this[V];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (i, o, c) {
        return a(i, o, c, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var tk = _r("ObservableArrayAdministration", Ms);
function Mi(e) {
  return Ci(e) && tk(e[V]);
}
var rk = {},
  Zt = "add",
  pi = "delete",
  yp = (function () {
    function e(r, n, a) {
      var i = this;
      n === void 0 && (n = br),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[V] = rk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ut(Map) || Q(18),
        kr(function () {
          (i.keysAtom_ = Gv("ObservableMap.keys()")),
            (i.data_ = new Map()),
            (i.hasMap_ = new Map()),
            r && i.merge(r);
        });
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
          var o = (i = new fr(this.has_(n), Ai, "ObservableMap.key?", !1));
          this.hasMap_.set(n, o),
            fp(o, function () {
              return a.hasMap_.delete(n);
            });
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: i ? Pt : Zt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return i ? this.updateValue_(n, a) : this.addValue_(n, a), this;
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ke(this))) {
          var i = Ye(this, { type: pi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = na(),
            c = st(this),
            s =
              c || o
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
            zt(function () {
              var u;
              a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1);
              var l = a.data_.get(n);
              l.setNewValue_(void 0), a.data_.delete(n);
            }),
            c && ct(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var o = na(),
            c = st(this),
            s =
              c || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Pt,
                    object: this,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          i.setNewValue_(a), c && ct(this, s);
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        this.keysAtom_,
          zt(function () {
            var u,
              l = new fr(a, i.enhancer_, "ObservableMap.key", !1);
            i.data_.set(n, l),
              (a = l.value_),
              (u = i.hasMap_.get(n)) == null || u.setNewValue_(!0),
              i.keysAtom_.reportChanged();
          });
        var o = na(),
          c = st(this),
          s =
            c || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Zt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && ct(this, s);
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
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var n = this,
          a = this.keys();
        return rd({
          next: function () {
            var o = a.next(),
              c = o.done,
              s = o.value;
            return { done: c, value: c ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return rd({
          next: function () {
            var o = a.next(),
              c = o.done,
              s = o.value;
            return { done: c, value: c ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var i = Fr(this), o; !(o = i()).done; ) {
          var c = o.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Or(n) && (n = new Map(n)),
          zt(function () {
            er(n)
              ? k1(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      c = i[1];
                    return a.set(o, c);
                  })
                : Jr(n)
                  ? (O1(n) || Q(19, n),
                    n.forEach(function (i, o) {
                      return a.set(o, i);
                    }))
                  : n != null && Q(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        zt(function () {
          tp(function () {
            for (var a = Fr(n.keys()), i; !(i = a()).done; ) {
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
              var i = nk(n), o = new Map(), c = !1, s = Fr(a.data_.keys()), u;
              !(u = s()).done;

            ) {
              var l = u.value;
              if (!i.has(l)) {
                var d = a.delete(l);
                if (d) c = !0;
                else {
                  var f = a.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var v = Fr(i.entries()), h; !(h = v()).done; ) {
              var p = h.value,
                g = p[0],
                b = p[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var O = a.data_.get(g);
                o.set(g, O), m || (c = !0);
              }
            }
            if (!c)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var w = a.data_.keys(), _ = o.keys(), k = w.next(), x = _.next(); !k.done; ) {
                  if (k.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  (k = w.next()), (x = _.next());
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
            return this.keysAtom_.reportObserved(), this.data_.size;
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
  Or = _r("ObservableMap", yp);
function rd(e) {
  return (e[Symbol.toStringTag] = "MapIterator"), Ns(e);
}
function nk(e) {
  if (Jr(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return Q(21, e);
}
var ak = {},
  mp = (function () {
    function e(r, n, a) {
      var i = this;
      n === void 0 && (n = br),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[V] = ak),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ut(Set) || Q(22),
        (this.enhancer_ = function (o, c) {
          return n(o, c, a);
        }),
        kr(function () {
          (i.atom_ = Gv(i.name_)), r && i.replace(r);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        zt(function () {
          tp(function () {
            for (var a = Fr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = Fr(this), o; !(o = i()).done; ) {
          var c = o.value;
          n.call(a, c, c, this);
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
          zt(function () {
            a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged();
          });
          var o = !1,
            c = st(this),
            s =
              c || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Zt,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && ct(this, s);
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
            c = st(this),
            s =
              c || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: pi,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            zt(function () {
              a.atom_.reportChanged(), a.data_.delete(n);
            }),
            c && ct(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
      }),
      (t.entries = function () {
        var n = this.values();
        return nd({
          next: function () {
            var i = n.next(),
              o = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: [o, o], done: c };
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
        return nd({
          next: function () {
            var o = a.next(),
              c = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ft(n) && !Ot(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ft(n) && !Ot(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ft(n) && !Ot(n)) return n.symmetricDifference(this);
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
        if (Ft(n) && !Ot(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Ot(n) && (n = new Set(n)),
          zt(function () {
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
                : n != null && Q("Cannot initialize set from " + n);
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
            return this.atom_.reportObserved(), this.data_.size;
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
  Ot = _r("ObservableSet", mp);
function nd(e) {
  return (e[Symbol.toStringTag] = "SetIterator"), Ns(e);
}
var ad = Object.create(null),
  id = "remove",
  _p = (function () {
    function e(r, n, a, i) {
      n === void 0 && (n = new Map()),
        i === void 0 && (i = Q1),
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
        (this.isPlainObject_ = er(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var i = this.values_.get(n);
        if (i instanceof lt) return i.set(a), !0;
        if (Ke(this)) {
          var o = Ye(this, { type: Pt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var c = st(this),
            s = !1,
            u =
              c || s
                ? {
                    type: Pt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          i.setNewValue_(a), c && ct(this, u);
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return A.trackingDerivation && !qt(this.target_, n) && this.has_(n), this.target_[n];
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
            ((a = new fr(n in this.target_, Ai, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[kt]) != null && i[n]) return;
            Q(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== xi; ) {
            var c = si(o, n);
            if (c) {
              var s = a.make_(this, n, c, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          sd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var c = i.extend_(this, n, a, o);
        return c && sd(this, i, n), c;
      }),
      (t.defineProperty_ = function (n, a, i) {
        i === void 0 && (i = !1), this.keysAtom_;
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var c = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = gr({}, a, { value: s }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else xt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          Je();
          var c = this.delete_(n);
          if (!c) return c;
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
          var u = od(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else xt(this.target_, n, l);
          var d = new fr(a, i, "ObservableObject.key", !1);
          this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, i) {
        i === void 0 && (i = !1), this.keysAtom_;
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var c = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: void 0,
            });
            if (!c) return null;
          }
          a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_);
          var s = od(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else xt(this.target_, n, u);
          this.values_.set(n, new lt(a)), this.notifyPropertyAddition_(n, void 0);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Ke(this)) {
          var i = Ye(this, { object: this.proxy_ || this.target_, name: n, type: id });
          if (!i) return null;
        }
        try {
          var o;
          Je();
          var c = st(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = si(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof fr && (l = u.value_), sp(u)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            c || s)
          ) {
            var f = {
              type: id,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && ct(this, f);
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
          c = !1;
        if (o || c) {
          var s =
            o || c
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
        (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), Ri(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Zr(e, t) {
  var r;
  if (qt(e, V)) return e;
  var n = (r = t == null ? void 0 : t.name) != null ? r : "ObservableObject",
    a = new _p(e, new Map(), String(n), lO(t));
  return Pi(e, V, a), e;
}
var ik = _r("ObservableObjectAdministration", _p);
function od(e) {
  return (
    ad[e] ||
    (ad[e] = {
      get: function () {
        return this[V].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[V].setObservablePropValue_(e, r);
      },
    })
  );
}
function $i(e) {
  return Ci(e) ? ik(e[V]) : !1;
}
function sd(e, t, r) {
  var n;
  (n = e.target_[kt]) == null || delete n[r];
}
var ok = Op(0),
  sk = (function () {
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
  So = 0,
  wp = function () {};
function ck(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
ck(wp, Array.prototype);
var $s = (function (e) {
  function t(n, a, i, o) {
    var c;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (c = e.call(this) || this),
      kr(function () {
        var s = new Ms(i, a, o, !0);
        (s.proxy_ = c),
          Bv(c, V, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          sk && Object.defineProperty(c, "0", ok);
      }),
      c
    );
  }
  Vv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[V].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (c) {
          return Mi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Ns({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Xr(t, [
      {
        key: "length",
        get: function () {
          return this[V].getArrayLength_();
        },
        set: function (a) {
          this[V].setArrayLength_(a);
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
})(wp);
Object.entries(vi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Pi($s.prototype, t, r);
});
function Op(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[V].get_(e);
    },
    set: function (r) {
      this[V].set_(e, r);
    },
  };
}
function uk(e) {
  xt($s.prototype, "" + e, Op(e));
}
function kp(e) {
  if (e > So) {
    for (var t = So; t < e + 100; t++) uk(t);
    So = e;
  }
}
kp(1e3);
function lk(e, t, r) {
  return new $s(e, t, r);
}
function hi(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Mi(e)) return t !== void 0 && Q(23), e[V].atom_;
    if (Ot(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || Q(25, t, is(e)), r;
    }
    if ($i(e)) {
      if (!t) return Q(26);
      var n = e[V].values_.get(t);
      return n || Q(27, t, is(e)), n;
    }
    if (Is(e) || Li(e) || fi(e)) return e;
  } else if (ut(e) && fi(e[V])) return e[V];
  Q(28);
}
function dk(e, t) {
  if ((e || Q(29), Is(e) || Li(e) || fi(e) || Or(e) || Ot(e))) return e;
  if (e[V]) return e[V];
  Q(24, e);
}
function is(e, t) {
  var r;
  if (t !== void 0) r = hi(e, t);
  else {
    if (ha(e)) return e.name;
    $i(e) || Or(e) || Ot(e) ? (r = dk(e)) : (r = hi(e));
  }
  return r.name_;
}
function kr(e) {
  var t = wr(),
    r = Di(!0);
  Je();
  try {
    return e();
  } finally {
    Xe(), Ti(r), Ut(t);
  }
}
var cd = xi.toString;
function Sp(e, t, r) {
  return r === void 0 && (r = -1), os(e, t, r);
}
function os(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = cd.call(e);
  if (o !== cd.call(t)) return !1;
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
  (e = ud(e)), (t = ud(t));
  var c = o === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(ut(s) && s instanceof s && ut(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  r < 0 && (r = -1), (n = n || []), (a = a || []);
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), c)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!os(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var v = 0; v < f; v++) {
      var h = d[v];
      if (!(qt(t, h) && os(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return n.pop(), a.pop(), !0;
}
function ud(e) {
  return Mi(e) ? e.slice() : Jr(e) || Or(e) || Ft(e) || Ot(e) ? Array.from(e.entries()) : e;
}
var ld,
  fk = ((ld = Ei().Iterator) == null ? void 0 : ld.prototype) || {};
function Ns(e) {
  return (e[Symbol.iterator] = vk), Object.assign(Object.create(fk), e);
}
function vk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ei();
  typeof t[e] > "u" && Q("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: RO, extras: { getDebugName: is }, $mobx: V });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ls) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function pk(e) {
  e();
}
function hk(e) {
  e || (e = pk), UO({ reactionScheduler: e });
}
function gk(e) {
  return GO(e);
}
var bk = 1e4,
  yk = 1e4,
  mk = (function () {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
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
            n === void 0 && (n = bk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0);
            var a = Date.now();
            r.registrations.forEach(function (i, o) {
              a - i.registeredAt >= n && (r.finalize(i.value), r.registrations.delete(o));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, n) {
          this.registrations.set(n, { value: r, registeredAt: Date.now() }), this.scheduleSweep();
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, yk));
        },
      }),
      e
    );
  })(),
  _k = typeof FinalizationRegistry < "u" ? FinalizationRegistry : mk,
  ba = new _k(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
  }),
  Eo = { exports: {} },
  xo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function wk() {
  if (dd) return xo;
  dd = 1;
  var e = dt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function c(d, f) {
    var v = f(),
      h = n({ inst: { value: v, getSnapshot: f } }),
      p = h[0].inst,
      g = h[1];
    return (
      i(
        function () {
          (p.value = v), (p.getSnapshot = f), s(p) && g({ inst: p });
        },
        [d, v, f],
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
      o(v),
      v
    );
  }
  function s(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var v = f();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function u(d, f) {
    return f();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : c;
  return (
    (xo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l), xo
  );
}
var fd;
function Ok() {
  return fd || ((fd = 1), (Eo.exports = wk())), Eo.exports;
}
var kk = Ok();
function vd(e) {
  e.reaction = new At("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function Sk(e, t) {
  t === void 0 && (t = "observed");
  var r = S.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          ba.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (vd(n), (n.stateVersion = Symbol())),
          function () {
            var s;
            (n.onStoreChange = null),
              (s = n.reaction) === null || s === void 0 || s.dispose(),
              (n.reaction = null);
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
  a.reaction || (vd(a), ba.register(r, a, a)),
    S.useDebugValue(a.reaction, gk),
    kk.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot);
  var i, o;
  if (
    (a.reaction.track(function () {
      try {
        i = e();
      } catch (c) {
        o = c;
      }
    }),
    o)
  )
    throw o;
  return i;
}
var Co,
  Po,
  Ep = typeof Symbol == "function" && Symbol.for,
  Ek =
    (Po =
      (Co = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Co === void 0
        ? void 0
        : Co.configurable) !== null && Po !== void 0
      ? Po
      : !1,
  pd = Ep
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  hd = Ep
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function xk(e, t) {
  var r;
  if (hd && e.$$typeof === hd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (pd && e.$$typeof === pd && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (c, s) {
    return Sk(function () {
      return a(c, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    Ek && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    Pk(e, o),
    o
  );
}
var Ck = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Pk(e, t) {
  Object.keys(e).forEach(function (r) {
    Ck[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ro;
hk(gi.unstable_batchedUpdates);
Ro = ba.finalizeAllImmediately;
function Rk(e, t) {
  if (gd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !gd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function gd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var bd = Symbol("patchMixins"),
  xp = Symbol("patchedDefinition");
function Ak(e, t) {
  var r = (e[bd] = e[bd] || {}),
    n = (r[t] = r[t] || {});
  return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
}
function yd(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  t.locks++;
  try {
    var o;
    return e != null && (o = e.apply(this, a)), o;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (c) {
          c.apply(r, a);
        });
  }
}
function md(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    yd.call.apply(yd, [this, e, t].concat(i));
  };
  return r;
}
function jk(e, t, r) {
  var n = Ak(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[xp])) {
    var i = e[t],
      o = Cp(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Cp(e, t, r, n, a) {
  var i,
    o = md(a, n);
  return (
    (i = {}),
    (i[xp] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = md(s, n);
      else {
        var u = Cp(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var _d = Symbol("ObserverAdministration"),
  wd = Symbol("isMobXReactObserver");
function ss(e) {
  var t;
  return (t = e[_d]) != null
    ? t
    : (e[_d] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: cs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Ik(e) {
  var t = e.prototype;
  if (e[wd]) {
    var r = cs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[wd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Od;
    else if (t.shouldComponentUpdate !== Od)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = cs(e);
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
        value: Dk.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        c = ss(this);
      return (
        (c.mounted = !0),
        ba.unregister(this),
        (c.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        i == null ? void 0 : i.apply(this, arguments)
      );
    }),
    jk(t, "componentWillUnmount", function () {
      var o,
        c = ss(this);
      (o = c.reaction) == null || o.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1);
    }),
    e
  );
}
function cs(e) {
  return e.displayName || e.name || "<component>";
}
function Dk(e) {
  var t = e.bind(this),
    r = ss(this);
  function n() {
    r.reaction || ((r.reaction = Tk(r)), r.mounted || ba.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = _O(!1, t);
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
function Tk(e) {
  return new At(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    }
  });
}
function Od(e, t) {
  return this.state !== t ? !0 : !Rk(this.props, e);
}
function Ni(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? Ik(e)
      : xk(e)
  );
}
function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    us.apply(null, arguments)
  );
}
function Lk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Mk = ["children"],
  kd = S.createContext({});
function Pp(e) {
  var t = e.children,
    r = Lk(e, Mk),
    n = S.useContext(kd),
    a = S.useRef(us({}, n, r)),
    i = a.current;
  return S.createElement(kd.Provider, { value: i }, t);
}
Pp.displayName = "MobXProvider";
S.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!de) throw new Error("mobx-react requires mobx to be available");
var $k = Object.defineProperty,
  Nk = Object.getOwnPropertyDescriptor,
  Ht = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Nk(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return n && a && $k(t, r, a), a;
  };
class It {
  constructor() {
    (this.isLoading = !0), Ls(this);
  }
  saveUsers(t) {
    (this.users = t), (this.isLoading = !1);
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
Ht([de], It.prototype, "isLoading", 2);
Ht([de], It.prototype, "users", 2);
Ht([de], It.prototype, "duplicates", 2);
Ht([de], It.prototype, "sort", 2);
Ht([Ze.bound], It.prototype, "saveUsers", 1);
Ht([Ze.bound], It.prototype, "saveSort", 1);
Ht([Ze.bound], It.prototype, "saveDuplicates", 1);
Ht([Ze], It.prototype, "loading", 1);
Ht([Ze], It.prototype, "stopLoading", 1);
const Fk = new It();
var zk = Object.defineProperty,
  Bk = Object.getOwnPropertyDescriptor,
  Rp = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Bk(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return n && a && zk(t, r, a), a;
  };
class Fs {
  constructor() {
    (this.state = "ROOT"), Ls(this);
  }
  saveState(t) {
    this.state = t;
  }
}
Rp([de], Fs.prototype, "state", 2);
Rp([Ze.bound], Fs.prototype, "saveState", 1);
const qk = new Fs();
class Uk {
  constructor() {
    (this.usersStore = Fk), (this.stateStore = qk);
  }
}
const Ap = new Uk(),
  Vk = y.createContext(Ap),
  Fi = () => y.useContext(Vk),
  Gk = Ni(() => {
    const { usersStore: e, stateStore: t } = Fi(),
      r = Lv(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? z.jsx("div", { children: "User Table is EMPTY" })
      : z.jsx("div", {
          children: z.jsxs("div", {
            children: [
              z.jsx(js, {
                head: r,
                onSort: async (a) => {
                  let i = { name: a.key, sortType: a.sortOrder };
                  e.loading();
                  try {
                    const o = await Bt.invoke("fetch", { sortType: i });
                    e.saveUsers(o), e.saveSort(i);
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
                      content: z.jsx("div", {
                        children: z.jsx("button", {
                          onClick: async () => {
                            try {
                              e.loading(), await Bt.invoke("delete", { id: a.id });
                              const c = await Bt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(c);
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
                emptyView: z.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              z.jsx("br", {}),
              z.jsx("br", {}),
              z.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const a = await Bt.invoke("duplicate", { sortType: e.sort });
                    e.saveDuplicates(a), t.saveState("DUPLICATE");
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
  Hk = Ni(() => {
    const { usersStore: e, stateStore: t } = Fi(),
      [r, n] = y.useState({}),
      a = (o) => {
        const { name: c, value: s, type: u } = o.target;
        n((l) => ({ ...l, [c]: u === "number" ? Number(s) : s }));
      },
      i = async (o) => {
        o.preventDefault(), await Bt.invoke("create", { data: r }), e.loading();
        try {
          e.saveUsers(await Bt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT");
        } finally {
          e.stopLoading();
        }
      };
    return z.jsx("div", {
      children: z.jsxs("form", {
        onSubmit: i,
        children: [
          z.jsxs(
            "div",
            {
              children: [
                z.jsx("label", { htmlFor: "name", children: "Name" }),
                z.jsx("br", {}),
                z.jsx("input", { type: "text", id: "name", name: "name", onChange: a }),
                z.jsx("br", {}),
              ],
            },
            "name",
          ),
          z.jsxs(
            "div",
            {
              children: [
                z.jsx("label", { htmlFor: "email", children: "Email" }),
                z.jsx("br", {}),
                z.jsx("input", { type: "text", id: "email", name: "email", onChange: a }),
                z.jsx("br", {}),
              ],
            },
            "email",
          ),
          z.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  Wk = Ni(() => {
    const { usersStore: e } = Fi(),
      t = Lv(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? z.jsx("div", { children: "Duplicate Table is EMPTY" })
      : z.jsx("div", {
          children: z.jsxs("div", {
            children: [
              z.jsx(js, {
                head: t,
                onSort: async (n) => {
                  let a = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const i = await Bt.invoke("duplicate", { sortType: a });
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
                emptyView: z.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              z.jsx("br", {}),
              z.jsx("br", {}),
            ],
          }),
        });
  });
function Kk() {
  const { usersStore: e, stateStore: t } = Fi();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          const n = await Bt.invoke("fetch", { type: "USER", sortType: e.sort });
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
      return z.jsx("div", {
        children: z.jsxs("div", {
          children: [
            z.jsx("button", { onClick: () => t.saveState("ADD_USER"), children: "Add a new User" }),
            z.jsx("br", {}),
            z.jsx("br", {}),
            z.jsx(Gk, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return z.jsx("div", {
        children: z.jsxs("div", {
          children: [
            z.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            z.jsx("br", {}),
            z.jsx("br", {}),
            z.jsx(Wk, {}),
          ],
        }),
      });
    case "ADD_USER":
      return z.jsx("div", {
        children: z.jsxs("div", {
          children: [
            z.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            z.jsx("br", {}),
            z.jsx("br", {}),
            z.jsx(Hk, {}),
          ],
        }),
      });
    default:
      return z.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const Yk = Ni(Kk),
  Jk = document.getElementById("root"),
  Xk = Mp.createRoot(Jk),
  Sd = () => {
    Xk.render(z.jsx(Pp, { ...Ap, children: z.jsx(Yk, {}) }));
  };
Bt.view.theme
  .enable()
  .then(() => {
    Sd();
  })
  .catch((e) => {
    console.error(e.message), Sd();
  });
export {
  ni as B,
  aS as N,
  S as R,
  lb as T,
  Te as _,
  he as a,
  To as b,
  pe as c,
  De as d,
  X as e,
  te as f,
  C as g,
  se as h,
  _i as i,
  Me as j,
  J as k,
  vy as l,
  ot as m,
  ft as n,
  We as o,
  D as p,
  iS as q,
  y as r,
  Ce as s,
  cb as t,
  sf as u,
  ib as v,
  av as w,
};
