const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-JZ-m9_2T.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-B6dZQIUc.js",
      "./lodash-vendor-CqBVTi6s.js",
      "./body-zWXS9WXn.css",
    ]),
) => i.map((i) => d[i]);
import { r as vt, a as mi, c as ph } from "./react-dom-vendor-DTSHKYJW.js";
import { g as Rs, a as tr, r as Zt, s as Ve } from "./client-core-vendor-B6dZQIUc.js";
import { r as hh } from "./lodash-vendor-CqBVTi6s.js";
function gh(e, t) {
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
var Yi = { exports: {} },
  rn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc;
function bh() {
  if (dc) return rn;
  dc = 1;
  var e = vt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, c, u) {
    var l,
      d = {},
      f = null,
      h = null;
    (u !== void 0 && (f = "" + u),
      c.key !== void 0 && (f = "" + c.key),
      c.ref !== void 0 && (h = c.ref));
    for (l in c) n.call(c, l) && !i.hasOwnProperty(l) && (d[l] = c[l]);
    if (s && s.defaultProps) for (l in ((c = s.defaultProps), c)) d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: s, key: f, ref: h, props: d, _owner: a.current };
  }
  return ((rn.Fragment = r), (rn.jsx = o), (rn.jsxs = o), rn);
}
var fc;
function yh() {
  return (fc || ((fc = 1), (Yi.exports = bh())), Yi.exports);
}
var E = yh(),
  Ji = {},
  Ko = function (e, t) {
    return (
      (Ko =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ko(e, t)
    );
  };
function nf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ko(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Za = function () {
  return (
    (Za =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Za.apply(this, arguments)
  );
};
function af(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function of(e, t, r, n) {
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
function sf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function cf(e, t, r, n, a, i) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var s = n.kind,
      c = s === "getter" ? "get" : s === "setter" ? "set" : "value",
      u = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
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
    var g = (0, r[h])(s === "accessor" ? { get: l.get, set: l.set } : l[c], v);
    if (s === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && a.unshift(d));
    } else (d = o(g)) && (s === "field" ? a.unshift(d) : (l[c] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (f = !0));
}
function uf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function lf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function df(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function ff(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function vf(e, t, r, n) {
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
        u(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function u(l) {
      l.done ? i(l.value) : a(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function pf(e, t) {
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
  function s(u) {
    return function (l) {
      return c([u, l]);
    };
  }
  function c(u) {
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
            return (r.label++, { value: u[1], done: !1 });
          case 5:
            (r.label++, (a = u[1]), (u = [0]));
            continue;
          case 7:
            ((u = r.ops.pop()), r.trys.pop());
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
              ((r.label = i[1]), (i = u));
              break;
            }
            if (i && r.label < i[2]) {
              ((r.label = i[2]), r.ops.push(u));
              break;
            }
            (i[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        ((u = [6, l]), (a = 0));
      } finally {
        n = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
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
function hf(e, t) {
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
function As(e, t) {
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
function gf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(As(arguments[t]));
  return e;
}
function bf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function yf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function qr(e) {
  return this instanceof qr ? ((this.v = e), this) : new qr(e);
}
function mf(e, t, r) {
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
  function o(h) {
    return function (v) {
      return Promise.resolve(v).then(h, d);
    };
  }
  function s(h, v) {
    n[h] &&
      ((a[h] = function (p) {
        return new Promise(function (g, b) {
          i.push([h, p, g, b]) > 1 || c(h, p);
        });
      }),
      v && (a[h] = v(a[h])));
  }
  function c(h, v) {
    try {
      u(n[h](v));
    } catch (p) {
      f(i[0][3], p);
    }
  }
  function u(h) {
    h.value instanceof qr ? Promise.resolve(h.value.v).then(l, d) : f(i[0][2], h);
  }
  function l(h) {
    c("next", h);
  }
  function d(h) {
    c("throw", h);
  }
  function f(h, v) {
    (h(v), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function _f(e) {
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
function wf(e) {
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
        return new Promise(function (s, c) {
          ((o = e[i](o)), a(s, c, o.done, o.value));
        });
      };
  }
  function a(i, o, s, c) {
    Promise.resolve(c).then(function (u) {
      i({ value: u, done: s });
    }, o);
  }
}
function Of(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var mh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Yo = function (e) {
    return (
      (Yo =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Yo(e)
    );
  };
function kf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Yo(e), n = 0; n < r.length; n++) r[n] !== "default" && _i(t, e, r[n]);
  return (mh(t, e), t);
}
function Sf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ef(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function xf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Cf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Pf(e, t, r) {
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
var _h =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Rf(e) {
  function t(i) {
    ((e.error = e.hasError ? new _h(i, e.error, "An error was suppressed during disposal.") : i),
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
function Af(e, t) {
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
const wh = {
    __extends: nf,
    __assign: Za,
    __rest: af,
    __decorate: of,
    __param: sf,
    __esDecorate: cf,
    __runInitializers: uf,
    __propKey: lf,
    __setFunctionName: df,
    __metadata: ff,
    __awaiter: vf,
    __generator: pf,
    __createBinding: _i,
    __exportStar: hf,
    __values: ei,
    __read: As,
    __spread: gf,
    __spreadArrays: bf,
    __spreadArray: yf,
    __await: qr,
    __asyncGenerator: mf,
    __asyncDelegator: _f,
    __asyncValues: wf,
    __makeTemplateObject: Of,
    __importStar: kf,
    __importDefault: Sf,
    __classPrivateFieldGet: Ef,
    __classPrivateFieldSet: xf,
    __classPrivateFieldIn: Cf,
    __addDisposableResource: Pf,
    __disposeResources: Rf,
    __rewriteRelativeImportExtension: Af,
  },
  Oh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Pf,
        get __assign() {
          return Za;
        },
        __asyncDelegator: _f,
        __asyncGenerator: mf,
        __asyncValues: wf,
        __await: qr,
        __awaiter: vf,
        __classPrivateFieldGet: Ef,
        __classPrivateFieldIn: Cf,
        __classPrivateFieldSet: xf,
        __createBinding: _i,
        __decorate: of,
        __disposeResources: Rf,
        __esDecorate: cf,
        __exportStar: hf,
        __extends: nf,
        __generator: pf,
        __importDefault: Sf,
        __importStar: kf,
        __makeTemplateObject: Of,
        __metadata: ff,
        __param: sf,
        __propKey: lf,
        __read: As,
        __rest: af,
        __rewriteRelativeImportExtension: Af,
        __runInitializers: uf,
        __setFunctionName: df,
        __spread: gf,
        __spreadArray: yf,
        __spreadArrays: bf,
        __values: ei,
        default: wh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Wt = Rs(Oh);
var nn = {},
  vc;
function kh() {
  return (
    vc ||
      ((vc = 1),
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
var Xi = {},
  Qi = {},
  an = {},
  on = {},
  pc;
function pt() {
  if (pc) return on;
  ((pc = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.BridgeAPIError = void 0));
  class e extends Error {}
  return ((on.BridgeAPIError = e), on);
}
var hc;
function Oe() {
  if (hc) return an;
  ((hc = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.getCallBridge = void 0));
  const e = pt();
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
  gc;
function jf() {
  if (gc) return sn;
  ((gc = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.withRateLimiter = void 0));
  const e = pt(),
    t = (r, n, a, i) => {
      let o = Date.now(),
        s = 0;
      return async (...c) => {
        const u = Date.now();
        if ((u - o > a && ((o = u), (s = 0)), s >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((s = s + 1), r(...c));
      };
    };
  return ((sn.withRateLimiter = t), sn);
}
var bc;
function Sh() {
  return (
    bc ||
      ((bc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = Oe(),
          r = pt(),
          n = jf(),
          a = (0, t.getCallBridge)(),
          i = (c) => {
            if (c && Object.values(c).some((u) => typeof u == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (c, u) => {
            if (typeof c != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (i(u), a("invoke", { functionKey: c, payload: u }));
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
      })(Qi)),
    Qi
  );
}
var yc;
function Eh() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Wt.__exportStar(Sh(), e));
      })(Xi)),
    Xi
  );
}
var Zi = {},
  cn = {},
  eo = {},
  mc;
function If() {
  return (
    mc ||
      ((mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = Oe(),
          r = pt(),
          n = jf(),
          a = 500,
          i = 25,
          o = 1e3 * i;
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
          u = (d) => async (f) => {
            c(f);
            const h = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              v = await s("invoke", h),
              { success: p, payload: g, error: b } = v ?? {},
              _ = { ...(p ? g : b) };
            if (_ && _.headers)
              for (const w in _.headers)
                Array.isArray(_.headers[w]) && (_.headers[w] = _.headers[w].join(","));
            return _;
          },
          l = (d) => {
            const f = u(d);
            return (0, n.withRateLimiter)(
              f,
              a,
              o,
              `${d} invocation calls are rate limited at ${a}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(eo)),
    eo
  );
}
var _c;
function xh() {
  if (_c) return cn;
  ((_c = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.invokeRemote = void 0));
  const e = If(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((cn.invokeRemote = t), cn);
}
var un = {},
  wc;
function Ch() {
  if (wc) return un;
  ((wc = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeService = void 0));
  const e = If(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((un.invokeService = t), un);
}
var Oc;
function Ph() {
  return (
    Oc ||
      ((Oc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Wt;
        (t.__exportStar(xh(), e), t.__exportStar(Ch(), e));
      })(Zi)),
    Zi
  );
}
var to = {},
  ln = {},
  dn = {},
  kc;
function Rh() {
  if (kc) return dn;
  ((kc = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.submit = void 0));
  const e = Oe(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((dn.submit = n), dn);
}
var fn = {},
  Sc;
function Ah() {
  if (Sc) return fn;
  ((Sc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.close = void 0));
  const e = Oe(),
    t = pt(),
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
  Ec;
function jh() {
  if (Ec) return vn;
  ((Ec = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.open = void 0));
  const e = Oe(),
    t = pt(),
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
  xc;
function Ih() {
  if (xc) return pn;
  ((xc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.refresh = void 0));
  const e = Oe(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((pn.refresh = n), pn);
}
var hn = {},
  Cc;
function Dh() {
  if (Cc) return hn;
  ((Cc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.createHistory = void 0));
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
  ro = {},
  Lt = {},
  Pc;
function Df() {
  return (
    Pc ||
      ((Pc = 1),
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
  Rc;
function Th() {
  if (Rc) return ir;
  ((Rc = 1),
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
        { fallback: s } = i;
      if (!s) {
        let c;
        return (
          o.locales.includes(a) && (c = await this.getTranslationResource(a)),
          { translations: c ?? null, locale: a }
        );
      }
      for (const c of this.getLocaleLookupOrder(a, o)) {
        const u = await this.getTranslationResource(c);
        if (u) return { translations: u, locale: c };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const i = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(a, i);
      return await Promise.all(
        o.map(async (s) => {
          const c = await this.getTranslationResource(s);
          return { locale: s, translations: c };
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
        c = [a],
        u = s[a];
      return (
        u && Array.isArray(u) && u.length > 0 && c.push(...u),
        e(c, i.fallback.default),
        c.filter((l) => o.includes(l))
      );
    }
  }
  return ((ir.TranslationsGetter = r), ir);
}
var bn = {},
  no = {},
  Ac;
function Tf() {
  return (
    Ac ||
      ((Ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Wt.__importDefault(hh()),
          n = (i, o, s) => {
            const c = i[s];
            return c ? (0, e.getTranslationValueFromContent)(c, o) : null;
          };
        e.getTranslationValue = n;
        const a = (i, o) => {
          let s = i[o];
          if (!s) {
            const c = o.split(".");
            c.length > 1 && (s = (0, r.default)(i, c, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = a;
      })(no)),
    no
  );
}
var jc;
function Mh() {
  if (jc) return bn;
  ((jc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Translator = void 0));
  const e = Tf();
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
  Ic;
function Lh() {
  if (Ic) return yn;
  ((Ic = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.ensureLocale = void 0));
  const e = Df(),
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
var ao = {},
  Dc;
function Nh() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (u) => typeof u == "object" && u !== null && !Array.isArray(u),
          r = (u) => typeof u?.i18n == "string",
          n = (u) => u.startsWith("connect-"),
          a = (u) => u.startsWith("core:"),
          i = (u) => {
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
            return d(u, []);
          },
          o = (u) =>
            Object.entries(u).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const s = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = i(d[0]);
            for (const { key: h } of f) l.add(h);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const c = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const f = i(d[0]);
            for (const h of f) l.push({ moduleName: d[1], ...h });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ao)),
    ao
  );
}
var io = {},
  Tc;
function $h() {
  return (Tc || ((Tc = 1), Object.defineProperty(io, "__esModule", { value: !0 })), io);
}
var Mc;
function Mf() {
  return (
    Mc ||
      ((Mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Wt;
        (t.__exportStar(Df(), e),
          t.__exportStar(Th(), e),
          t.__exportStar(Mh(), e),
          t.__exportStar(Lh(), e));
        var r = Tf();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Nh();
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
          t.__exportStar($h(), e));
      })(ro)),
    ro
  );
}
var Lc;
function Fh() {
  if (Lc) return gn;
  ((Lc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.getContext = void 0));
  const e = Oe(),
    t = Mf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((gn.getContext = n), gn);
}
var mn = {},
  Nc;
function Bh() {
  if (Nc) return mn;
  ((Nc = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.changeWindowTitle = void 0));
  const e = Oe(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((mn.changeWindowTitle = n), mn);
}
var _n = {},
  $c;
function zh() {
  if ($c) return _n;
  (($c = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.theme = void 0));
  const t = (0, Oe().getCallBridge)();
  return ((_n.theme = { enable: () => t("enableTheming") }), _n);
}
var wn = {},
  On = {},
  oo = {},
  or = {},
  Fc;
function Lf() {
  if (Fc) return or;
  ((Fc = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.blobToBase64 = or.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let c = 0; c < i.length; c++) o[c] = i.charCodeAt(c);
    const s = new Uint8Array(o);
    return new Blob([s], { type: n });
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
var Bc;
function qh() {
  return (
    Bc ||
      ((Bc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Lf(),
          r = (u) => {
            if (
              typeof u != "object" ||
              u === null ||
              Object.prototype.toString.call(u) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(u);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(u)
            );
          },
          n = async (u) => ({ data: await (0, t.blobToBase64)(u), type: u.type }),
          a = (u) => (0, t.base64ToBlob)(u.data, u.type),
          i = async (u) => {
            if (u instanceof Blob) return { ...(await n(u)), __isBlobData: !0 };
            if (Array.isArray(u))
              return Promise.all(u.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (u && r(u)) {
              const l = await Promise.all(
                Object.entries(u).map(async ([d, f]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(f),
                ]),
              );
              return Object.fromEntries(l);
            }
            return u;
          };
        e.serialiseBlobsInPayload = i;
        const o = (u) => {
          if (u && r(u) && "__isBlobData" in u) {
            const l = u;
            return a({ data: l.data, type: l.type });
          }
          if (Array.isArray(u)) return u.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (u && r(u)) {
            const l = {};
            for (const [d, f] of Object.entries(u)) l[d] = (0, e.deserialiseBlobsInPayload)(f);
            return l;
          }
          return u;
        };
        e.deserialiseBlobsInPayload = o;
        const s = (u) =>
          u instanceof Blob
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = s;
        const c = (u) =>
          u && r(u) && "__isBlobData" in u
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsSerialisedBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(oo)),
    oo
  );
}
var zc;
function Nf() {
  if (zc) return On;
  ((zc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.events = void 0));
  const e = Oe(),
    t = qh(),
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
        callback: (c) => {
          let u = c;
          return (
            (0, t.containsSerialisedBlobs)(c) && (u = (0, t.deserialiseBlobsInPayload)(c)),
            o(u)
          );
        },
      });
  return ((On.events = { emit: n, on: a }), On);
}
var qc;
function Uh() {
  if (qc) return wn;
  ((qc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.emitReadyEvent = void 0));
  const e = Nf(),
    t = $f(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((wn.emitReadyEvent = n), wn);
}
var Uc;
function $f() {
  if (Uc) return ln;
  ((Uc = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.view = void 0));
  const e = Rh(),
    t = Ah(),
    r = jh(),
    n = Ih(),
    a = Dh(),
    i = Fh(),
    o = Bh(),
    s = zh(),
    c = Uh();
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
      emitReadyEvent: c.emitReadyEvent,
    }),
    ln
  );
}
var Vc;
function Ff() {
  return (
    Vc ||
      ((Vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Wt.__exportStar($f(), e));
      })(to)),
    to
  );
}
var so = {},
  kn = {},
  Gc;
function Vh() {
  if (Gc) return kn;
  ((Gc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.router = void 0));
  const t = (0, Oe().getCallBridge)(),
    r = async (o) => {
      if (!o?.target) throw new Error("target is required for getUrl");
      const s = await t("getUrl", o);
      if (!s) throw new Error("Failed to get URL");
      try {
        return new URL(s);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${s} (${c})`);
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
var Hc;
function Gh() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Wt.__exportStar(Vh(), e));
      })(so)),
    so
  );
}
var co = {},
  Sn = {},
  Wc;
function Hh() {
  if (Wc) return Sn;
  ((Wc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.Modal = void 0));
  const e = Oe(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(o) {
      var s, c;
      ((this.resource = o?.resource || null),
        (this.onClose = o?.onClose || n),
        (this.size = o?.size || "medium"),
        (this.context = o?.context || {}),
        (this.closeOnEscape = (s = o?.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick =
          (c = o?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
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
var Kc;
function Wh() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Wt.__exportStar(Hh(), e));
      })(co)),
    co
  );
}
var Nt = {},
  En = {},
  Yc;
function Kh() {
  if (Yc) return En;
  ((Yc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.productFetchApi = void 0));
  const e = Lf(),
    t = async (a) => {
      const i = {};
      for (const [o, s] of a.entries())
        if (o === "file") {
          const c = s.name,
            u = s.type;
          ((i.file = await (0, e.blobToBase64)(s)), (i.__fileName = c), (i.__fileType = u));
        } else i[o] = s;
      return JSON.stringify(i);
    },
    r = async (a) => {
      const i = a?.body instanceof FormData,
        o = i ? await t(a?.body) : a?.body,
        s = new Request("", { body: o, method: a?.method, headers: a?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: i,
      };
    },
    n = (a) => {
      const i = async (o, s, c) => {
        const { body: u, headers: l, isMultipartFormData: d } = await r(c);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const f = {
            product: o,
            restPath: s,
            fetchRequestInit: { ...c, body: u, headers: [...l.entries()] },
            isMultipartFormData: d,
          },
          {
            body: h,
            headers: v,
            statusText: p,
            status: g,
            isAttachment: b,
          } = await a("fetchProduct", f),
          _ = b ? (0, e.base64ToBlob)(h, v["content-type"]) : h;
        return new Response(_ || null, { headers: v, status: g, statusText: p });
      };
      return {
        requestConfluence: (o, s) => i("confluence", o, s),
        requestJira: (o, s) => i("jira", o, s),
        requestBitbucket: (o, s) => i("bitbucket", o, s),
      };
    };
  return ((En.productFetchApi = n), En);
}
var Jc;
function Yh() {
  if (Jc) return Nt;
  Jc = 1;
  var e;
  (Object.defineProperty(Nt, "__esModule", { value: !0 }),
    (Nt.requestBitbucket = Nt.requestJira = Nt.requestConfluence = void 0));
  const t = Oe();
  return (
    (e = (0, Kh().productFetchApi)((0, t.getCallBridge)())),
    (Nt.requestConfluence = e.requestConfluence),
    (Nt.requestJira = e.requestJira),
    (Nt.requestBitbucket = e.requestBitbucket),
    Nt
  );
}
var uo = {},
  xn = {},
  Xc;
function Jh() {
  if (Xc) return xn;
  ((Xc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.showFlag = void 0));
  const e = Oe(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((xn.showFlag = n), xn);
}
var Qc;
function Xh() {
  return (
    Qc ||
      ((Qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Jh();
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
var lo = {},
  Zc;
function Qh() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Wt.__exportStar(Nf(), e));
      })(lo)),
    lo
  );
}
var fo = {},
  Cn = {},
  eu;
function Zh() {
  if (eu) return Cn;
  ((eu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.realtime = void 0));
  const t = (0, Oe().getCallBridge)(),
    r = (o, s, c) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: c }),
    n = (o, s, c) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: c }),
    a = (o, s, c) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: c, isGlobal: !0 }),
    i = (o, s, c) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: c, isGlobal: !0 });
  return ((Cn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), Cn);
}
var vo = {},
  tu;
function eg() {
  return (
    tu ||
      ((tu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(vo)),
    vo
  );
}
var ru;
function tg() {
  return (
    ru ||
      ((ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Zh();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = eg();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        });
      })(fo)),
    fo
  );
}
var $t = {},
  nu;
function rg() {
  if (nu) return $t;
  ((nu = 1),
    Object.defineProperty($t, "__esModule", { value: !0 }),
    ($t.createTranslationFunction = $t.getTranslations = $t.resetTranslationsCache = void 0));
  const e = Mf(),
    t = Ff(),
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
  $t.resetTranslationsCache = a;
  const i = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  $t.getTranslations = i;
  const o = async (s = null) => {
    let c = s;
    c || (c = (await t.view.getContext()).locale);
    const u = new e.Translator(c, n);
    return (
      await u.init(),
      (l, d) => {
        var f, h;
        return (h = (f = u.translate(l)) !== null && f !== void 0 ? f : d) !== null && h !== void 0
          ? h
          : l;
      }
    );
  };
  return (($t.createTranslationFunction = o), $t);
}
var au;
function ng() {
  return (
    au ||
      ((au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Wt;
        var r = kh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Eh(), e),
          t.__exportStar(Ph(), e),
          t.__exportStar(Ff(), e),
          t.__exportStar(Gh(), e),
          t.__exportStar(Wh(), e),
          t.__exportStar(Yh(), e),
          t.__exportStar(Xh(), e),
          t.__exportStar(Qh(), e),
          t.__exportStar(tg(), e),
          (e.i18n = t.__importStar(rg())));
      })(Ji)),
    Ji
  );
}
var Ce = ng();
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
var ag = {};
function wi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : ag;
}
var Bf = Object.assign,
  ti = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  Oi = Object.prototype,
  Jo = [];
Object.freeze(Jo);
var zf = {};
Object.freeze(zf);
var ig = typeof Proxy < "u",
  og = Object.toString();
function qf() {
  ig || K("Proxy not available");
}
function Uf(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var $r = function () {};
function dt(e) {
  return typeof e == "function";
}
function pr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ki(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!ki(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === og;
}
function Vf(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Si(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Gf(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ki(n) && n[r] === !0;
    }
  );
}
function Yr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function sg(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function zt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Hf = typeof Object.getOwnPropertySymbols < "u";
function cg(e) {
  var t = Object.keys(e);
  if (!Hf) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Oi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ei =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Hf
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Wf(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Vt(e, t) {
  return Oi.hasOwnProperty.call(e, t);
}
var ug =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ei(t).forEach(function (n) {
        r[n] = ti(t, n);
      }),
      r
    );
  };
function Le(e, t) {
  return !!(e & t);
}
function Ne(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, fg(n.key), n));
  }
}
function Jr(e, t, r) {
  return (t && lg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Fr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = vg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    hr.apply(null, arguments)
  );
}
function Kf(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Xo(e, t));
}
function Xo(e, t) {
  return (
    (Xo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Xo(e, t)
  );
}
function dg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function fg(e) {
  var t = dg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vg(e, t) {
  if (e) {
    if (typeof e == "string") return iu(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? iu(e, t)
          : void 0
    );
  }
}
var Et = Symbol("mobx-stored-annotations");
function Ct(e) {
  function t(r, n) {
    if (Oa(n)) return e.decorate_20223_(r, n);
    wa(r, n, e);
  }
  return Object.assign(t, e);
}
function wa(e, t, r) {
  (Vt(e, Et) || Si(e, Et, hr({}, e[Et])), _g(r) || (e[Et][t] = r));
}
function pg(e) {
  return (Vt(e, Et) || Si(e, Et, hr({}, e[Et])), e[Et]);
}
function Oa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
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
        return lv(this);
      }),
      (t.reportChanged = function () {
        (Xe(), dv(this), Qe());
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
            this.flags_ = Ne(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var js = _r("Atom", rr);
function Yf(e, t, r) {
  (t === void 0 && (t = $r), r === void 0 && (r = $r));
  var n = new rr(e);
  return (t !== $r && Eb(n, t), r !== $r && gv(n, r), n);
}
function hg(e, t) {
  return Pv(e, t);
}
function gg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ri = { structural: hg, default: gg };
function gr(e, t, r) {
  return _v(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : er(e)
        ? se.object(e, void 0, { name: r })
        : Yr(e)
          ? se.map(e, { name: r })
          : zt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !ca(e) && !ua(e)
              ? Vf(e)
                ? Ur(e)
                : sa(r, e)
              : e;
}
function bg(e, t, r) {
  if (e == null || Di(e) || Ii(e) || Or(e) || St(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (er(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Yr(e)) return se.map(e, { name: r, deep: !1 });
  if (zt(e)) return se.set(e, { name: r, deep: !1 });
}
function xi(e) {
  return e;
}
function yg(e, t) {
  return Pv(e, t) ? t : e;
}
var mg = "override";
function _g(e) {
  return e.annotationType_ === mg;
}
function ka(e, t) {
  return { annotationType_: e, options_: t, make_: wg, extend_: Og, decorate_20223_: kg };
}
function wg(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ca(r.value)) return 1;
  var i = Jf(e, this, t, r, !1);
  return (xt(n, t, i), 2);
}
function Og(e, t, r, n) {
  var a = Jf(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function kg(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (u) {
      var l, d, f, h;
      return br(
        (l = (d = i.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (f = (h = i.options_) == null ? void 0 : h.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (c) {
      var u,
        l = c;
      return (
        ca(l) || (l = o(l)),
        (u = i.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      ca(e) || (e = o(e)),
      (s = this.options_) != null &&
        s.bound &&
        a(function () {
          var c = this,
            u = c[n].bind(c);
          ((u.isMobxAction = !0), (c[n] = u));
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
function Sg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Jf(e, t, r, n, a) {
  var i, o, s, c, u, l, d;
  (a === void 0 && (a = A.safeDescriptors), Sg(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: br(
      (o = (s = t.options_) == null ? void 0 : s.name) != null ? o : r.toString(),
      f,
      (c = (u = t.options_) == null ? void 0 : u.autoAction) != null ? c : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Xf(e, t) {
  return { annotationType_: e, options_: t, make_: Eg, extend_: xg, decorate_20223_: Cg };
}
function Eg(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Vt(e.target_, t) || !ua(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ua(r.value)) return 1;
  var i = Qf(e, this, t, r, !1, !1);
  return (xt(n, t, i), 2);
}
function xg(e, t, r, n) {
  var a,
    i = Qf(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function Cg(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ua(e) || (e = Ur(e)),
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
function Pg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Qf(e, t, r, n, a, i) {
  (i === void 0 && (i = A.safeDescriptors), Pg(e, t, r, n));
  var o = n.value;
  if ((ua(o) || (o = Ur(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Is(e, t) {
  return { annotationType_: e, options_: t, make_: Rg, extend_: Ag, decorate_20223_: jg };
}
function Rg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ag(e, t, r, n) {
  return (
    Ig(e, this, t, r),
    e.defineComputedProperty_(t, hr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function jg(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Xr(this)[N],
        o = hr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new ft(o)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function Ig(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ci(e, t) {
  return { annotationType_: e, options_: t, make_: Dg, extend_: Tg, decorate_20223_: Mg };
}
function Dg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Tg(e, t, r, n) {
  var a, i;
  return (
    Lg(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : gr,
      n,
    )
  );
}
function Mg(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(s, c) {
    var u,
      l,
      d = Xr(s)[N],
      f = new fr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : gr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), i.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (i.has(this) || o(this, e.get.call(this)), this[N].getObservablePropValue_(a));
      },
      set: function (c) {
        return (i.has(this) || o(this, c), this[N].setObservablePropValue_(a, c));
      },
      init: function (c) {
        return (i.has(this) || o(this, c), c);
      },
    };
}
function Lg(e, t, r, n) {
  t.annotationType_;
}
var Ng = "true",
  $g = Zf();
function Zf(e) {
  return { annotationType_: Ng, options_: e, make_: Fg, extend_: Bg, decorate_20223_: zg };
}
function Fg(e, t, r, n) {
  var a, i;
  if (r.get) return Pi.make_(e, t, r, n);
  if (r.set) {
    var o = br(t.toString(), r.set);
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
    var s;
    if (Vf(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? Ur.bound : Ur;
      return u.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? sa.bound : sa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Bg(e, t, r, n) {
  var a, i;
  if (r.get) return Pi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: br(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return s.extend_(e, t, r, n);
}
function zg(e, t) {
  K("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var qg = "observable",
  Ug = "observable.ref",
  Vg = "observable.shallow",
  Gg = "observable.struct",
  ev = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(ev);
function Da(e) {
  return e || ev;
}
var Qo = Ci(qg),
  Hg = Ci(Ug, { enhancer: xi }),
  Wg = Ci(Vg, { enhancer: bg }),
  Kg = Ci(Gg, { enhancer: yg }),
  tv = Ct(Qo);
function Ta(e) {
  return e.deep === !0 ? gr : e.deep === !1 ? xi : Jg(e.defaultDecorator);
}
function Yg(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Zf(e)) : void 0;
}
function Jg(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : gr;
}
function rv(e, t, r) {
  if (Oa(t)) return Qo.decorate_20223_(e, t);
  if (pr(t)) {
    wa(e, t, Qo);
    return;
  }
  return _v(e)
    ? e
    : er(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Yr(e)
          ? se.map(e, t)
          : zt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
Bf(rv, tv);
var Xg = {
    box: function (t, r) {
      var n = Da(r);
      return new fr(t, Ta(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Da(r);
      return (A.useProxies === !1 || n.proxy === !1 ? Yb : Fb)(t, Ta(n), n.name);
    },
    map: function (t, r) {
      var n = Da(r);
      return new Ov(t, Ta(n), n.name);
    },
    set: function (t, r) {
      var n = Da(r);
      return new kv(t, Ta(n), n.name);
    },
    object: function (t, r, n) {
      return kr(function () {
        return Rb(A.useProxies === !1 || n?.proxy === !1 ? Xr({}, n) : Lb({}, n), t, r);
      });
    },
    ref: Ct(Hg),
    shallow: Ct(Wg),
    deep: tv,
    struct: Ct(Kg),
  },
  se = Bf(rv, Xg),
  nv = "computed",
  Qg = "computed.struct",
  Zo = Is(nv),
  Zg = Is(Qg, { equals: ri.structural }),
  Pi = function (t, r) {
    if (Oa(r)) return Zo.decorate_20223_(t, r);
    if (pr(r)) return wa(t, r, Zo);
    if (er(t)) return Ct(Is(nv, t));
    var n = er(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ft(n));
  };
Object.assign(Pi, Zo);
Pi.struct = Ct(Zg);
var ou,
  su,
  ni = 0,
  eb = 1,
  tb =
    (ou = (su = ti(function () {}, "name")) == null ? void 0 : su.configurable) != null ? ou : !1,
  cu = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function br(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return rb(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    tb && ((cu.value = e), xt(a, "name", cu)),
    a
  );
}
function rb(e, t, r, n, a) {
  var i = nb(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    ab(i);
  }
}
function nb(e, t, r, n) {
  var a = !1,
    i = 0,
    o = A.trackingDerivation,
    s = !t || !o;
  Xe();
  var c = A.allowStateChanges;
  s && (wr(), (c = Ri(!0)));
  var u = Ds(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: i,
      actionId_: eb++,
      parentActionId_: ni,
    };
  return ((ni = l.actionId_), l);
}
function ab(e) {
  (ni !== e.actionId_ && K(30),
    (ni = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Ai(e.prevAllowStateChanges_),
    Zn(e.prevAllowStateReads_),
    Qe(),
    e.runAsAction_ && Gt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function ib(e, t) {
  var r = Ri(e);
  try {
    return t();
  } finally {
    Ai(r);
  }
}
function Ri(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Ai(e) {
  A.allowStateChanges = e;
}
var fr = (function (e) {
    function t(n, a, i, o, s) {
      var c;
      return (
        i === void 0 && (i = "ObservableValue"),
        s === void 0 && (s = ri.default),
        (c = e.call(this, i) || this),
        (c.enhancer = void 0),
        (c.name_ = void 0),
        (c.equals = void 0),
        (c.hasUnreportedChange_ = !1),
        (c.interceptors_ = void 0),
        (c.changeListeners_ = void 0),
        (c.value_ = void 0),
        (c.dehancer = void 0),
        (c.enhancer = a),
        (c.name_ = i),
        (c.equals = s),
        (c.value_ = a(n, void 0, i)),
        c
      );
    }
    Kf(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ye(this)) {
          var i = Je(this, { object: this, type: Pt, newValue: a });
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
          ut(this) && lt(this, { type: Pt, object: this, newValue: a, oldValue: i }));
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
        return Wf(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(rr),
  ft = (function () {
    function e(r) {
      ((this.dependenciesState_ = X.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = X.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ii(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = ai.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || K(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = br("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ri.structural : ri.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        lb(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          es(this) &&
            (this.warnAboutUntrackedRead_(), Xe(), (this.value_ = this.computeValue_(!1)), Qe());
        else if ((lv(this), es(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && ub(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (Va(a)) throw a.cause;
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
          o = a || Va(n) || Va(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Ri(!1),
          i;
        if (n) i = av(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new ii(o);
          }
        return (Ai(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ts(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return _b(function () {
          var c = i.get();
          if (!o || a) {
            var u = wr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Pt,
              object: i,
              newValue: c,
              oldValue: s,
            }),
              Gt(u));
          }
          ((o = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Wf(this.get());
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
            this.flags_ = Ne(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Le(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Le(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ne(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
ft.isComputingMask_ = 1;
ft.isRunningSetterMask_ = 2;
ft.isBeingObservedMask_ = 4;
ft.isPendingUnobservationMask_ = 8;
ft.diffValueMask_ = 16;
var ji = _r("ComputedValue", ft),
  X;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(X || (X = {}));
var ai;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(ai || (ai = {}));
var ii = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Va(e) {
  return e instanceof ii;
}
function es(e) {
  switch (e.dependenciesState_) {
    case X.UP_TO_DATE_:
      return !1;
    case X.NOT_TRACKING_:
    case X.STALE_:
      return !0;
    case X.POSSIBLY_STALE_: {
      for (var t = Ds(!0), r = wr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (ji(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Gt(r), Zn(t), !0);
            }
          if (e.dependenciesState_ === X.STALE_) return (Gt(r), Zn(t), !0);
        }
      }
      return (ov(e), Gt(r), Zn(t), !1);
    }
  }
}
function av(e, t, r) {
  var n = Ds(!0);
  (ov(e),
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
      i = new ii(o);
    }
  return (A.inBatch--, (A.trackingDerivation = a), ob(e), Zn(n), i);
}
function ob(e) {
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
    var c = t[i];
    (c.diffValue === 0 && cv(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), cb(u, e));
  }
  n !== X.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ts(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) cv(t[r], e);
  e.dependenciesState_ = X.NOT_TRACKING_;
}
function iv(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Gt(t);
  }
}
function wr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Gt(e) {
  A.trackingDerivation = e;
}
function Ds(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function Zn(e) {
  A.allowStateReads = e;
}
function ov(e) {
  if (e.dependenciesState_ !== X.UP_TO_DATE_) {
    e.dependenciesState_ = X.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = X.UP_TO_DATE_;
  }
}
var Ga = function () {
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
  Ha = !0,
  sv = !1,
  A = (function () {
    var e = wi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ha = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Ga().version && (Ha = !1),
      Ha
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Ga()))
        : (setTimeout(function () {
            sv || K(35);
          }, 1),
          new Ga())
    );
  })();
function sb() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && K(36), (sv = !0), Ha)) {
    var e = wi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new Ga()));
  }
}
function cb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function cv(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && uv(e));
}
function uv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Xe() {
  A.inBatch++;
}
function Qe() {
  if (--A.inBatch === 0) {
    fv();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ft && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function lv(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && uv(e), !1);
}
function dv(e) {
  e.lowestObserverState_ !== X.STALE_ &&
    ((e.lowestObserverState_ = X.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === X.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = X.STALE_));
    }));
}
function ub(e) {
  e.lowestObserverState_ !== X.STALE_ &&
    ((e.lowestObserverState_ = X.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === X.POSSIBLY_STALE_
        ? (t.dependenciesState_ = X.STALE_)
        : t.dependenciesState_ === X.UP_TO_DATE_ && (e.lowestObserverState_ = X.UP_TO_DATE_);
    }));
}
function lb(e) {
  e.lowestObserverState_ === X.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = X.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === X.UP_TO_DATE_ &&
        ((t.dependenciesState_ = X.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var jt = (function () {
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
      (this.isTracing_ = ai.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), fv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Xe(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), es(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((A.trackingContext = n), Qe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Xe(), (this.isRunning = !0));
        var a = A.trackingContext;
        A.trackingContext = this;
        var i = av(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ts(this),
          Va(i) && this.reportExceptionInDerivation_(i.cause),
          Qe());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Xe(), ts(this), Qe()));
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
          this.flags_ = Ne(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Le(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Le(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Le(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Le(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ne(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
jt.isDisposedMask_ = 1;
jt.isScheduledMask_ = 2;
jt.isTrackPendingMask_ = 4;
jt.isRunningMask_ = 8;
jt.diffValueMask_ = 16;
var db = 100,
  rs = function (t) {
    return t();
  };
function fv() {
  A.inBatch > 0 || A.isRunningReactions || rs(fb);
}
function fb() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === db && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var oi = _r("Reaction", jt);
function vb(e) {
  var t = rs;
  rs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ea() {
  return !1;
}
function pb(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var vv = "action",
  hb = "action.bound",
  pv = "autoAction",
  gb = "autoAction.bound",
  bb = "<unnamed action>",
  ns = ka(vv),
  yb = ka(hb, { bound: !0 }),
  as = ka(pv, { autoAction: !0 }),
  mb = ka(gb, { autoAction: !0, bound: !0 });
function hv(e) {
  var t = function (n, a) {
    if (dt(n)) return br(n.name || bb, n, e);
    if (dt(a)) return br(n, a, e);
    if (Oa(a)) return (e ? as : ns).decorate_20223_(n, a);
    if (pr(a)) return wa(n, a, e ? as : ns);
    if (pr(n)) return Ct(ka(e ? pv : vv, { name: n, autoAction: e }));
  };
  return t;
}
var Ze = hv(!1);
Object.assign(Ze, ns);
var sa = hv(!0);
Object.assign(sa, as);
Ze.bound = Ct(yb);
sa.bound = Ct(mb);
function ca(e) {
  return dt(e) && e.isMobxAction === !0;
}
function _b(e, t) {
  var r, n, a, i;
  t === void 0 && (t = zf);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new jt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Ob(t),
      l = !1;
    c = new jt(
      o,
      function () {
        l ||
          ((l = !0),
          u(function () {
            ((l = !1), c.isDisposed || c.track(d));
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
    c.getDisposer_((i = t) == null ? void 0 : i.signal)
  );
}
var wb = function (t) {
  return t();
};
function Ob(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : wb;
}
var kb = "onBO",
  Sb = "onBUO";
function Eb(e, t, r) {
  return bv(kb, e, t, r);
}
function gv(e, t, r) {
  return bv(Sb, e, t, r);
}
function bv(e, t, r, n) {
  var a = ui(t),
    i = dt(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var s = a[o];
      s && (s.delete(i), s.size === 0 && delete a[o]);
    }
  );
}
var xb = "never",
  Ma = "always",
  Cb = "observed";
function Pb(e) {
  e.isolateGlobalState === !0 && sb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Ma ? !0 : t === xb ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ma ? Ma : r === Cb;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Ma)));
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
    e.reactionScheduler && vb(e.reactionScheduler));
}
function Rb(e, t, r, n) {
  var a = ug(t);
  return (
    kr(function () {
      var i = Xr(e, n)[N];
      Ei(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Ab(e, t) {
  return yv(ui(e, t));
}
function yv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = jb(e.observing_).map(yv)),
    t
  );
}
function jb(e) {
  return Array.from(new Set(e));
}
var Ib = 0;
function mv() {
  this.message = "FLOW_CANCELLED";
}
mv.prototype = Object.create(Error.prototype);
var po = Xf("flow"),
  Db = Xf("flow.bound", { bound: !0 }),
  Ur = Object.assign(function (t, r) {
    if (Oa(r)) return po.decorate_20223_(t, r);
    if (pr(r)) return wa(t, r, po);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          c = arguments,
          u = ++Ib,
          l = Ze(a + " - runid: " + u + " - init", n).apply(s, c),
          d,
          f = void 0,
          h = new Promise(function (v, p) {
            var g = 0;
            d = p;
            function b(O) {
              f = void 0;
              var m;
              try {
                m = Ze(a + " - runid: " + u + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(m);
            }
            function _(O) {
              f = void 0;
              var m;
              try {
                m = Ze(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(m);
            }
            function w(O) {
              if (dt(O?.then)) {
                O.then(w, p);
                return;
              }
              return O.done ? v(O.value) : ((f = Promise.resolve(O.value)), f.then(b, _));
            }
            b(void 0);
          });
        return (
          (h.cancel = Ze(a + " - runid: " + u + " - cancel", function () {
            try {
              f && uu(f);
              var v = l.return(void 0),
                p = Promise.resolve(v.value);
              (p.then($r, $r), uu(p), d(new mv()));
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, po);
Ur.bound = Ct(Db);
function uu(e) {
  dt(e.cancel) && e.cancel();
}
function ua(e) {
  return e?.isMobXFlow === !0;
}
function Tb(e, t) {
  return e ? Di(e) || !!e[N] || js(e) || oi(e) || ji(e) : !1;
}
function _v(e) {
  return Tb(e);
}
function qt(e, t) {
  (t === void 0 && (t = void 0), Xe());
  try {
    return e.apply(t);
  } finally {
    Qe();
  }
}
function Er(e) {
  return e[N];
}
var Mb = {
  has: function (t, r) {
    return Er(t).has_(r);
  },
  get: function (t, r) {
    return Er(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return pr(r) ? ((a = Er(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return pr(r) ? ((n = Er(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Er(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Er(t).ownKeys_();
  },
  preventExtensions: function (t) {
    K(13);
  },
};
function Lb(e, t) {
  var r, n;
  return (
    qf(),
    (e = Xr(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Mb))
  );
}
function Ye(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Sa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Uf(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Je(e, t) {
  var r = wr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && K(14), !!t);
      a++
    );
    return t;
  } finally {
    Gt(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ea(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Uf(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function lt(e, t) {
  var r = wr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Gt(r);
  }
}
function Ts(e, t, r) {
  return (
    kr(function () {
      var n,
        a = Xr(e, r)[N];
      ((n = t) != null || (t = pg(e)),
        Ei(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var lu = "splice",
  Pt = "update",
  Nb = 1e4,
  $b = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Vt(si, r)
              ? si[r]
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
      K(15);
    },
  },
  Ms = (function () {
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
          this.legacyMode_ && a > 0 && Cv(n + a + 1));
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
          i === void 0 && (i = Jo),
          Ye(this))
        ) {
          var c = Je(this, { object: this.proxy_, type: lu, index: n, removedCount: a, added: i });
          if (!c) return Jo;
          ((a = c.removedCount), (i = c.added));
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
          this.updateArrayLength_(s, u);
        }
        var l = this.spliceItemsIntoValues_(n, a, i);
        return (
          (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, i) {
        if (i.length < Nb) {
          var o;
          return (o = this.values_).splice.apply(o, [n, a].concat(i));
        } else {
          var s = this.values_.slice(n, n + a),
            c = this.values_.slice(n + a);
          this.values_.length += i.length - a;
          for (var u = 0; u < i.length; u++) this.values_[n + u] = i[u];
          for (var l = 0; l < c.length; l++) this.values_[n + i.length + l] = c[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, i) {
        var o = !this.owned_ && ea(),
          s = ut(this),
          c =
            s || o
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
        (this.atom_.reportChanged(), s && lt(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && ea(),
          s = ut(this),
          c =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: lu,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && lt(this, c));
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
          if (Ye(this)) {
            var s = Je(this, { type: Pt, object: this.proxy_, index: n, newValue: a });
            if (!s) return;
            a = s.newValue;
          }
          a = this.enhancer_(a, o);
          var c = a !== o;
          c && ((i[n] = a), this.notifyArrayChildUpdate_(n, a, o));
        } else {
          for (var u = new Array(n + 1 - i.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          ((u[u.length - 1] = a), this.spliceWithArray_(i.length, 0, u));
        }
      }),
      e
    );
  })();
function Fb(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    qf(),
    kr(function () {
      var a = new Ms(r, t, n, !1);
      Gf(a.values_, N, a);
      var i = new Proxy(a.values_, $b);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var si = {
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
    return (A.trackingDerivation && K(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && K(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[N],
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
oe("every", ht);
oe("filter", ht);
oe("find", ht);
oe("findIndex", ht);
oe("findLast", ht);
oe("findLastIndex", ht);
oe("flatMap", ht);
oe("forEach", ht);
oe("map", ht);
oe("some", ht);
oe("toReversed", ht);
oe("reduce", wv);
oe("reduceRight", wv);
function oe(e, t) {
  typeof Array.prototype[e] == "function" && (si[e] = t(e));
}
function Be(e) {
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
    return i[e](function (o, s) {
      return t.call(r, o, s, n);
    });
  };
}
function wv(e) {
  return function () {
    var t = this,
      r = this[N];
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
var Bb = _r("ObservableArrayAdministration", Ms);
function Ii(e) {
  return ki(e) && Bb(e[N]);
}
var zb = {},
  Xt = "add",
  ci = "delete",
  Ov = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = gr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = zb),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        dt(Map) || K(18),
        kr(function () {
          ((i.keysAtom_ = Yf("ObservableMap.keys()")),
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
          var o = (i = new fr(this.has_(n), xi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            gv(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ye(this)) {
          var o = Je(this, { type: i ? Pt : Xt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ye(this))) {
          var i = Je(this, { type: ci, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = ea(),
            s = ut(this),
            c =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ci,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            qt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && lt(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var o = ea(),
            s = ut(this),
            c =
              s || o
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
          (i.setNewValue_(a), s && lt(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          qt(function () {
            var u,
              l = new fr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (u = i.hasMap_.get(n)) == null || u.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = ea(),
          s = ut(this),
          c =
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
        s && lt(this, c);
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
        return du({
          next: function () {
            var o = a.next(),
              s = o.done,
              c = o.value;
            return { done: s, value: s ? void 0 : n.get(c) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return du({
          next: function () {
            var o = a.next(),
              s = o.done,
              c = o.value;
            return { done: s, value: s ? void 0 : [c, n.get(c)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var i = Fr(this), o; !(o = i()).done; ) {
          var s = o.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Or(n) && (n = new Map(n)),
          qt(function () {
            er(n)
              ? cg(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Yr(n)
                  ? (sg(n) || K(19, n),
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
        qt(function () {
          iv(function () {
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
          qt(function () {
            for (
              var i = qb(n), o = new Map(), s = !1, c = Fr(a.data_.keys()), u;
              !(u = c()).done;

            ) {
              var l = u.value;
              if (!i.has(l)) {
                var d = a.delete(l);
                if (d) s = !0;
                else {
                  var f = a.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var h = Fr(i.entries()), v; !(v = h()).done; ) {
              var p = v.value,
                g = p[0],
                b = p[1],
                _ = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), _ || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), m = o.keys(), S = O.next(), C = m.next(); !S.done; ) {
                  if (S.value !== C.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (C = m.next()));
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
  Or = _r("ObservableMap", Ov);
function du(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Ns(e));
}
function qb(e) {
  if (Yr(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return K(21, e);
}
var Ub = {},
  kv = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = gr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = Ub),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        dt(Set) || K(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, a);
        }),
        kr(function () {
          ((i.atom_ = Yf(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        qt(function () {
          iv(function () {
            for (var a = Fr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = Fr(this), o; !(o = i()).done; ) {
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
          qt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            s = ut(this),
            c =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Xt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && lt(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ye(this)) {
          var i = Je(this, { type: ci, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            s = ut(this),
            c =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ci,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            qt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && lt(this, c),
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
        return fu({
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
        return fu({
          next: function () {
            var o = a.next(),
              s = o.value,
              c = o.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (zt(n) && !St(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (zt(n) && !St(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (zt(n) && !St(n)) return n.symmetricDifference(this);
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
        if (zt(n) && !St(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          St(n) && (n = new Set(n)),
          qt(function () {
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
                : n != null && K("Cannot initialize set from " + n);
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
  St = _r("ObservableSet", kv);
function fu(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Ns(e));
}
var vu = Object.create(null),
  pu = "remove",
  Sv = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = $g),
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
        (this.isPlainObject_ = er(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var i = this.values_.get(n);
        if (i instanceof ft) return (i.set(a), !0);
        if (Ye(this)) {
          var o = Je(this, { type: Pt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var s = ut(this),
            c = !1,
            u =
              s || c
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
          (i.setNewValue_(a), s && lt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !Vt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          Vt(this.target_, n)
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
            ((a = new fr(n in this.target_, xi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[Et]) != null && i[n]) return;
            K(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Oi; ) {
            var s = ti(o, n);
            if (s) {
              var c = a.make_(this, n, s, o);
              if (c === 0) return;
              if (c === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          gu(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && gu(this, i, n), s);
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
            var c = s.newValue;
            a.value !== c && (a = hr({}, a, { value: c }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else xt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          Qe();
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
            var c = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = hu(n),
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
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Qe();
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
          var c = hu(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else xt(this.target_, n, u);
          (this.values_.set(n, new ft(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Qe();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Vt(this.target_, n))) return !0;
        if (Ye(this)) {
          var i = Je(this, { object: this.proxy_ || this.target_, name: n, type: pu });
          if (!i) return null;
        }
        try {
          var o;
          Xe();
          var s = ut(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (s || c)) {
            var d;
            l = (d = ti(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof fr && (l = u.value_), dv(u)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || c)
          ) {
            var f = {
              type: pu,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && lt(this, f);
          }
        } finally {
          Qe();
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
          o = ut(this),
          s = !1;
        if (o || s) {
          var c =
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
          o && lt(this, c);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ei(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Xr(e, t) {
  var r;
  if (Vt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Sv(e, new Map(), String(n), Yg(t));
  return (Si(e, N, a), e);
}
var Vb = _r("ObservableObjectAdministration", Sv);
function hu(e) {
  return (
    vu[e] ||
    (vu[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function Di(e) {
  return ki(e) ? Vb(e[N]) : !1;
}
function gu(e, t, r) {
  var n;
  (n = e.target_[Et]) == null || delete n[r];
}
var Gb = xv(0),
  Hb = (function () {
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
  ho = 0,
  Ev = function () {};
function Wb(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Wb(Ev, Array.prototype);
var Ls = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      kr(function () {
        var c = new Ms(i, a, o, !0);
        ((c.proxy_ = s),
          Gf(s, N, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          Hb && Object.defineProperty(s, "0", Gb));
      }),
      s
    );
  }
  Kf(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (s) {
          return Ii(s) ? s.slice() : s;
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
    Jr(t, [
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
})(Ev);
Object.entries(si).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Si(Ls.prototype, t, r);
});
function xv(e) {
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
function Kb(e) {
  xt(Ls.prototype, "" + e, xv(e));
}
function Cv(e) {
  if (e > ho) {
    for (var t = ho; t < e + 100; t++) Kb(t);
    ho = e;
  }
}
Cv(1e3);
function Yb(e, t, r) {
  return new Ls(e, t, r);
}
function ui(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ii(e)) return (t !== void 0 && K(23), e[N].atom_);
    if (St(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || K(25, t, is(e)), r);
    }
    if (Di(e)) {
      if (!t) return K(26);
      var n = e[N].values_.get(t);
      return (n || K(27, t, is(e)), n);
    }
    if (js(e) || ji(e) || oi(e)) return e;
  } else if (dt(e) && oi(e[N])) return e[N];
  K(28);
}
function Jb(e, t) {
  if ((e || K(29), js(e) || ji(e) || oi(e) || Or(e) || St(e))) return e;
  if (e[N]) return e[N];
  K(24, e);
}
function is(e, t) {
  var r;
  if (t !== void 0) r = ui(e, t);
  else {
    if (ca(e)) return e.name;
    Di(e) || Or(e) || St(e) ? (r = Jb(e)) : (r = ui(e));
  }
  return r.name_;
}
function kr(e) {
  var t = wr(),
    r = Ri(!0);
  Xe();
  try {
    return e();
  } finally {
    (Qe(), Ai(r), Gt(t));
  }
}
var bu = Oi.toString;
function Pv(e, t, r) {
  return (r === void 0 && (r = -1), os(e, t, r));
}
function os(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = bu.call(e);
  if (o !== bu.call(t)) return !1;
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
  ((e = yu(e)), (t = yu(t)));
  var s = o === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(dt(c) && c instanceof c && dt(u) && u instanceof u) &&
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
    for (; l--; ) if (!os(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var v = d[h];
      if (!(Vt(t, v) && os(e[v], t[v], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function yu(e) {
  return Ii(e) ? e.slice() : Yr(e) || Or(e) || zt(e) || St(e) ? Array.from(e.entries()) : e;
}
var mu,
  Xb = ((mu = wi().Iterator) == null ? void 0 : mu.prototype) || {};
function Ns(e) {
  return ((e[Symbol.iterator] = Qb), Object.assign(Object.create(Xb), e));
}
function Qb() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = wi();
  typeof t[e] > "u" && K("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: pb, extras: { getDebugName: is }, $mobx: N });
var y = vt();
const k = tr(y),
  _u = gh({ __proto__: null, default: k }, [y]);
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ts) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Zb(e) {
  e();
}
function ey(e) {
  (e || (e = Zb), Pb({ reactionScheduler: e }));
}
function ty(e) {
  return Ab(e);
}
var ry = 1e4,
  ny = 1e4,
  ay = (function () {
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
            (n === void 0 && (n = ry), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, ny));
        },
      }),
      e
    );
  })(),
  iy = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ay,
  la = new iy(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  go = { exports: {} },
  bo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wu;
function oy() {
  if (wu) return bo;
  wu = 1;
  var e = vt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function s(d, f) {
    var h = f(),
      v = n({ inst: { value: h, getSnapshot: f } }),
      p = v[0].inst,
      g = v[1];
    return (
      i(
        function () {
          ((p.value = h), (p.getSnapshot = f), c(p) && g({ inst: p }));
        },
        [d, h, f],
      ),
      a(
        function () {
          return (
            c(p) && g({ inst: p }),
            d(function () {
              c(p) && g({ inst: p });
            })
          );
        },
        [d],
      ),
      o(h),
      h
    );
  }
  function c(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !r(d, h);
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
      : s;
  return (
    (bo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    bo
  );
}
var Ou;
function sy() {
  return (Ou || ((Ou = 1), (go.exports = oy())), go.exports);
}
var cy = sy();
function ku(e) {
  e.reaction = new jt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function uy(e, t) {
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
          la.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (ku(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (ku(a), la.register(r, a, a)),
    k.useDebugValue(a.reaction, ty),
    cy.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var yo,
  mo,
  Rv = typeof Symbol == "function" && Symbol.for,
  ly =
    (mo =
      (yo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || yo === void 0
        ? void 0
        : yo.configurable) !== null && mo !== void 0
      ? mo
      : !1,
  Su = Rv
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Eu = Rv
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function dy(e, t) {
  var r;
  if (Eu && e.$$typeof === Eu)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Su && e.$$typeof === Su && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, c) {
    return uy(function () {
      return a(s, c);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    ly && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    vy(e, o),
    o
  );
}
var fy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function vy(e, t) {
  Object.keys(e).forEach(function (r) {
    fy[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var _o;
ey(mi.unstable_batchedUpdates);
_o = la.finalizeAllImmediately;
function py(e, t) {
  if (xu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !xu(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function xu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Cu = Symbol("patchMixins"),
  Av = Symbol("patchedDefinition");
function hy(e, t) {
  var r = (e[Cu] = e[Cu] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Pu(e, t) {
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
function Ru(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Pu.call.apply(Pu, [this, e, t].concat(i));
  };
  return r;
}
function gy(e, t, r) {
  var n = hy(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Av])) {
    var i = e[t],
      o = jv(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function jv(e, t, r, n, a) {
  var i,
    o = Ru(a, n);
  return (
    (i = {}),
    (i[Av] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (c) {
      if (this === e) o = Ru(c, n);
      else {
        var u = jv(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Au = Symbol("ObserverAdministration"),
  ju = Symbol("isMobXReactObserver");
function ss(e) {
  var t;
  return (t = e[Au]) != null
    ? t
    : (e[Au] = {
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
function by(e) {
  var t = e.prototype;
  if (e[ju]) {
    var r = cs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[ju] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Iu;
    else if (t.shouldComponentUpdate !== Iu)
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
        value: yy.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = ss(this);
      return (
        (s.mounted = !0),
        la.unregister(this),
        (s.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    gy(t, "componentWillUnmount", function () {
      var o,
        s = ss(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function cs(e) {
  return e.displayName || e.name || "<component>";
}
function yy(e) {
  var t = e.bind(this),
    r = ss(this);
  function n() {
    r.reaction || ((r.reaction = my(r)), r.mounted || la.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = ib(!1, t);
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
function my(e) {
  return new jt(e.name + ".render()", function () {
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
function Iu(e, t) {
  return this.state !== t ? !0 : !py(this.props, e);
}
function Ti(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? by(e)
      : dy(e)
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
function _y(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var wy = ["children"],
  Du = k.createContext({});
function Iv(e) {
  var t = e.children,
    r = _y(e, wy),
    n = k.useContext(Du),
    a = k.useRef(us({}, n, r)),
    i = a.current;
  return k.createElement(Du.Provider, { value: i }, t);
}
Iv.displayName = "MobXProvider";
k.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var Oy = Object.defineProperty,
  ky = Object.getOwnPropertyDescriptor,
  Dt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? ky(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && Oy(t, r, a), a);
  };
class gt {
  constructor() {
    ((this.isLoading = !1), Ts(this));
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
Dt([se], gt.prototype, "isLoading", 2);
Dt([se], gt.prototype, "plan", 2);
Dt([se], gt.prototype, "planString", 2);
Dt([se], gt.prototype, "slowQueries", 2);
Dt([se], gt.prototype, "history", 2);
Dt([Ze.bound], gt.prototype, "showPlan", 1);
Dt([Ze.bound], gt.prototype, "saveSlowQuery", 1);
Dt([Ze.bound], gt.prototype, "saveHistory", 1);
Dt([Ze], gt.prototype, "loading", 1);
Dt([Ze], gt.prototype, "stopLoading", 1);
const Sy = new gt();
var Ey = Object.defineProperty,
  xy = Object.getOwnPropertyDescriptor,
  $s = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? xy(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && Ey(t, r, a), a);
  };
class Mi {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Ts(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
$s([se], Mi.prototype, "state", 2);
$s([se], Mi.prototype, "lastState", 2);
$s([Ze.bound], Mi.prototype, "saveState", 1);
const Fs = new Mi();
class Cy {
  constructor() {
    ((this.usersStore = Sy), (this.stateStore = Fs));
  }
}
const Dv = new Cy(),
  Py = y.createContext(Dv),
  Li = () => y.useContext(Py);
function ue(e, t) {
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
function Ry(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Tv(e) {
  var t = Ry(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Tu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Tv(n.key), n));
  }
}
function le(e, t, r) {
  return (
    t && Tu(e.prototype, t),
    r && Tu(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ay(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ie(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ay(e);
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
function da(e, t) {
  return (
    (da = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    da(e, t)
  );
}
function De(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && da(e, t));
}
function x(e, t, r) {
  return (
    (t = Tv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function jy(e) {
  if (Array.isArray(e)) return e;
}
function Iy(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      s = [],
      c = !0,
      u = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
    } catch (l) {
      ((u = !0), (a = l));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function ls(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mv(e, t) {
  if (e) {
    if (typeof e == "string") return ls(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ls(e, t)
          : void 0
    );
  }
}
function Dy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(e, t) {
  return jy(e) || Iy(e, t) || Mv(e, t) || Dy();
}
var Lv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Ty = function (t) {
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
  Nv = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Mu = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  My = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = Mu(o, n, a),
      c = Mu(i.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = Q(l, 1),
      f = d[0];
    return (u.splice(c, 0, f), u);
  };
const Ly = "modulepreload",
  Ny = function (e, t) {
    return new URL(e, t).href;
  },
  Lu = {},
  $y = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let u = function (l) {
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
        c = s?.nonce || s?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = Ny(l, n)), l in Lu)) return;
          Lu[l] = !0;
          const d = l.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let p = o.length - 1; p >= 0; p--) {
              const g = o[p];
              if (g.href === l && (!d || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Ly),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            c && v.setAttribute("nonce", c),
            document.head.appendChild(v),
            d)
          )
            return new Promise((p, g) => {
              (v.addEventListener("load", p),
                v.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`))));
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
function Fy(e, t) {
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
    a = Fy(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Nu(e, t) {
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
      ? Nu(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var By = (function () {
  function e(t) {
    var r = this;
    (ue(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = wo({}, r.payload);
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
          Ae(r) === "object" && (this.payload = wo(wo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function zy(e) {
  if (Array.isArray(e)) return ls(e);
}
function qy(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Uy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return zy(e) || qy(e) || Mv(e) || Uy();
}
function Vy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = H(e)) !== null; );
  return e;
}
function di() {
  return (
    (di =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Vy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    di.apply(null, arguments)
  );
}
function Gy(e, t, r) {
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
function Hy(e, t, r, n) {
  var a = di(H(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Wy = (function (e) {
  function t(r) {
    var n;
    return (
      ue(this, t),
      (n = Gy(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Me(n.context),
          i = Me(n.handlers),
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
    De(t, e),
    le(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : Hy(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(By);
function $u(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o),
      c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function ve(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(c) {
        $u(i, n, a, o, s, "next", c);
      }
      function s(c) {
        $u(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
var Oo = { exports: {} },
  ko = { exports: {} },
  Fu;
function Fv() {
  return (
    Fu ||
      ((Fu = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ko)),
    ko.exports
  );
}
var So = { exports: {} },
  Eo = { exports: {} },
  Bu;
function Bv() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        function t(r, n, a, i) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (c, u, l, d) {
              function f(h, v) {
                t(c, h, function (p) {
                  return this._invoke(h, v, p);
                });
              }
              u
                ? o
                  ? o(c, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (c[u] = l)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, i));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Eo)),
    Eo.exports
  );
}
var zu;
function zv() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        var t = Bv();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            s = i.toStringTag || "@@toStringTag";
          function c(g, b, _, w) {
            var O = b && b.prototype instanceof l ? b : l,
              m = Object.create(O.prototype);
            return (
              t(
                m,
                "_invoke",
                (function (S, C, I) {
                  var M,
                    P,
                    T,
                    B = 0,
                    F = I || [],
                    U = !1,
                    Z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: z,
                      f: z.bind(n, 4),
                      d: function (J, j) {
                        return ((M = J), (P = 0), (T = n), (Z.n = j), u);
                      },
                    };
                  function z(V, J) {
                    for (P = V, T = J, a = 0; !U && B && !j && a < F.length; a++) {
                      var j,
                        q = F[a],
                        he = Z.p,
                        W = q[2];
                      V > 3
                        ? (j = W === J) &&
                          ((T = q[(P = q[4]) ? 5 : ((P = 3), 3)]), (q[4] = q[5] = n))
                        : q[0] <= he &&
                          ((j = V < 2 && he < q[1])
                            ? ((P = 0), (Z.v = J), (Z.n = q[1]))
                            : he < W &&
                              (j = V < 3 || q[0] > J || J > W) &&
                              ((q[4] = V), (q[5] = J), (Z.n = W), (P = 0)));
                    }
                    if (j || V > 1) return u;
                    throw ((U = !0), J);
                  }
                  return function (V, J, j) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (U && J === 1 && z(J, j), P = J, T = j; (a = P < 2 ? n : T) || !U; ) {
                      M || (P ? (P < 3 ? (P > 1 && (Z.n = -1), z(P, T)) : (Z.n = T)) : (Z.v = T));
                      try {
                        if (((B = 2), M)) {
                          if ((P || (V = "next"), (a = M[V]))) {
                            if (!(a = a.call(M, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = M.return) && a.call(M),
                              P < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + V + "' method",
                                )),
                                (P = 1)));
                          M = n;
                        } else if ((a = (U = Z.n < 0) ? T : S.call(C, Z)) !== u) break;
                      } catch (q) {
                        ((M = n), (P = 1), (T = q));
                      } finally {
                        B = 1;
                      }
                    }
                    return { value: a, done: U };
                  };
                })(g, _, w),
                !0,
              ),
              m
            );
          }
          var u = {};
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
                : ((g.__proto__ = f), t(g, s, "GeneratorFunction")),
              (g.prototype = Object.create(v)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(v, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, s, "GeneratorFunction"),
            t(v),
            t(v, s, "Generator"),
            t(v, o, function () {
              return this;
            }),
            t(v, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: c, m: p };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(So)),
    So.exports
  );
}
var xo = { exports: {} },
  Co = { exports: {} },
  Po = { exports: {} },
  qu;
function qv() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        var t = Fv(),
          r = Bv();
        function n(a, i) {
          function o(c, u, l, d) {
            try {
              var f = a[c](u),
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
              function (c, u, l) {
                function d() {
                  return new i(function (f, h) {
                    o(c, l, f, h);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Po)),
    Po.exports
  );
}
var Uu;
function Uv() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        var t = zv(),
          r = qv();
        function n(a, i, o, s, c) {
          return new r(t().w(a, i, o, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Co)),
    Co.exports
  );
}
var Vu;
function Ky() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        var t = Uv();
        function r(n, a, i, o, s) {
          var c = t(n, a, i, o, s);
          return c.next().then(function (u) {
            return u.done ? u.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(xo)),
    xo.exports
  );
}
var Ro = { exports: {} },
  Gu;
function Yy() {
  return (
    Gu ||
      ((Gu = 1),
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
      })(Ro)),
    Ro.exports
  );
}
var Ao = { exports: {} },
  jo = { exports: {} },
  Hu;
function Jy() {
  return (
    Hu ||
      ((Hu = 1),
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
      })(jo)),
    jo.exports
  );
}
var Wu;
function Xy() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        var t = Jy().default;
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
      })(Ao)),
    Ao.exports
  );
}
var Ku;
function Qy() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        var t = Fv(),
          r = zv(),
          n = Ky(),
          a = Uv(),
          i = qv(),
          o = Yy(),
          s = Xy();
        function c() {
          var u = r(),
            l = u.m(c),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function f(p) {
            var g = typeof p == "function" && p.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var h = { throw: 1, return: 2, break: 3, continue: 3 };
          function v(p) {
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
                    return b(_.a, h[O], m);
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
                return p.call(this, g);
              } finally {
                ((_.p = g.prev), (_.n = g.next));
              }
            };
          }
          return ((e.exports = c =
            function () {
              return {
                wrap: function (b, _, w, O) {
                  return u.w(v(b), _, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: u.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: i,
                async: function (b, _, w, O, m) {
                  return (f(_) ? a : n)(v(b), _, w, O, m);
                },
                keys: o,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Oo)),
    Oo.exports
  );
}
var Io, Yu;
function Zy() {
  if (Yu) return Io;
  Yu = 1;
  var e = Qy()();
  Io = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Io;
}
var em = Zy();
const $ = tr(em);
var sr = {},
  xr = {},
  La = {},
  Ju;
function tm() {
  if (Ju) return La;
  ((Ju = 1), Object.defineProperty(La, "__esModule", { value: !0 }));
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
        const c = a.user,
          u = Object.assign(Object.assign({}, n), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(u) !== (0, e._getFullUserHash)(c) &&
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
      const c = (a = o.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && c.length > 0 && (s = s + c[0]),
        s !== "Uninitialized" &&
          s !== "NoValues" &&
          (s = `${s}:${n ? "Unrecognized" : "Recognized"}`));
      const u =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (u && (o.bootstrapMetadata = u), Object.assign(Object.assign({}, o), { reason: s }));
    }
  };
  return ((La.default = t), La);
}
var Cr = {},
  Pn = {},
  Xu;
function rm() {
  if (Xu) return Pn;
  ((Xu = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._resolveDeltasResponse = void 0));
  const e = Zt(),
    t = 2;
  function r(o, s) {
    const c = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const u = n(o, c),
      l = a(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === c.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: c.deltas_full_response,
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
    o?.forEach((c) => {
      delete s[c];
    });
  }
  return Pn;
}
var Qu;
function Vv() {
  if (Qu) return Cr;
  Qu = 1;
  var e =
    (Cr && Cr.__awaiter) ||
    function (a, i, o, s) {
      function c(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(v) {
          try {
            h(s.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(s.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? u(v.value) : c(v.value).then(d, f);
        }
        h((s = s.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = Zt(),
    r = rm();
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
    fetchEvaluations(i, o, s, c, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, h, v, p;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let b = {
          user: c,
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
            ((p =
              (v = (h = this._option) === null || h === void 0 ? void 0 : h.networkConfig) ===
                null || v === void 0
                ? void 0
                : v.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !_ ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, s);
      });
    }
    _fetchEvaluations(i, o, s, c) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: s,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
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
              c,
            );
      });
    }
  }
  return ((Cr.default = n), Cr);
}
var Rn = {},
  Zu;
function nm() {
  if (Zu) return Rn;
  ((Zu = 1),
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
  function o(l, d, f, h) {
    const p = l.getDynamicConfig(d.config_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function s(l, d, f, h) {
    const p = l.getExperiment(d.experiment_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(l, d, f, h) {
    const p = l.getLayer(d.layer_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function u(l, d, f) {
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
          return s(l, p, v, f);
        case "layer":
          return c(l, p, v, f);
        default:
          return v;
      }
    };
  }
  return ((Rn._makeParamStoreGetter = u), Rn);
}
var cr = {},
  el;
function am() {
  if (el) return cr;
  el = 1;
  var e =
    (cr && cr.__awaiter) ||
    function (a, i, o, s) {
      function c(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(v) {
          try {
            h(s.next(v));
          } catch (p) {
            l(p);
          }
        }
        function f(v) {
          try {
            h(s.throw(v));
          } catch (p) {
            l(p);
          }
        }
        function h(v) {
          v.done ? u(v.value) : c(v.value).then(d, f);
        }
        h((s = s.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(cr, "__esModule", { value: !0 }),
    (cr.StatsigEvaluationsDataAdapter = void 0));
  const t = Zt(),
    r = Vv();
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
    _fetchFromNetwork(i, o, s, c) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), i, s?.priority, o, c);
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
  return ((cr.StatsigEvaluationsDataAdapter = n), cr);
}
var tl;
function im() {
  if (tl) return xr;
  tl = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (s, c, u, l) {
      function d(f) {
        return f instanceof u
          ? f
          : new u(function (h) {
              h(f);
            });
      }
      return new (u || (u = Promise))(function (f, h) {
        function v(b) {
          try {
            g(l.next(b));
          } catch (_) {
            h(_);
          }
        }
        function p(b) {
          try {
            g(l.throw(b));
          } catch (_) {
            h(_);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(v, p);
        }
        g((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Zt(),
    r = tm(),
    n = Vv(),
    a = nm(),
    i = am();
  let o = class ds extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof ds
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ds(c ?? "", {}));
    }
    constructor(c, u, l = null) {
      var d, f;
      t.SDKType._setClientType(c, "javascript-client");
      const h = new n.default(l, (p) => {
        this.$emt(p);
      });
      (super(
        c,
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
        (this._store = new r.default(c)),
        (this._network = h),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const v = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of v) p.bind(this);
    }
    initializeSync(c) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
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
    updateUserSync(c, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(c, u, l);
      } catch (d) {
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(c, u, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(c);
      const h = this.dataAdapter.getDataSync(this._user);
      (h == null && f.push("NoCachedValues"),
        this._store.setValues(h, this._user),
        this._finalizeUpdate(h));
      const v = u?.disableBackgroundCacheRefresh;
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
    updateUserAsync(c, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, u);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
        }
      });
    }
    _updateUserAsyncImpl(c, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
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
    checkGate(c, u) {
      return this.getFeatureGate(c, u).value;
    }
    logEvent(c, u, l) {
      const d = typeof c == "string" ? { eventName: c, value: u, metadata: l } : c;
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
    _createErrorUpdateDetails(c, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        c,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, u) {
      this.dataAdapter.getDataAsync(c, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, u) {
      var l;
      const d = (0, t._normalizeUser)(c, u),
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
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getGate(c),
        v = (0, t._makeFeatureGate)(c, h, f),
        p =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, u),
        g = p ?? v;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getConfig(c),
        v = (0, t._makeDynamicConfig)(c, h, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, this._user, u),
        g = p ?? v;
      return (
        this._enqueueExposure(
          c,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(c, u) {
      var l, d, f, h;
      const { result: v, details: p } = this._store.getConfig(c),
        g = (0, t._makeExperiment)(c, p, v);
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
            : h.call(f, g, this._user, u),
        _ = b ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(c, u) {
      var l, d, f;
      const { result: h, details: v } = this._store.getLayer(c),
        p = (0, t._makeLayer)(c, v, h),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, p, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const b = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              c,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const v = {
          name: c,
          details: h,
          __configuration: f,
          get: (0, a._makeParamStoreGetter)(this, f, u),
        },
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, v, u);
      return (
        p != null &&
          ((v.__configuration = p.config),
          (v.details = p.details),
          (v.get = (0, a._makeParamStoreGetter)(this, p.config, u))),
        v
      );
    }
  };
  return ((xr.default = o), xr);
}
var rl;
function om() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        var t =
            (sr && sr.__createBinding) ||
            (Object.create
              ? function (o, s, c, u) {
                  u === void 0 && (u = c);
                  var l = Object.getOwnPropertyDescriptor(s, c);
                  ((!l || ("get" in l ? !s.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return s[c];
                      },
                    }),
                    Object.defineProperty(o, u, l));
                }
              : function (o, s, c, u) {
                  (u === void 0 && (u = c), (o[u] = s[c]));
                }),
          r =
            (sr && sr.__exportStar) ||
            function (o, s) {
              for (var c in o)
                c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, o, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Zt(),
          a = im();
        ((e.StatsigClient = a.default), r(Zt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(sr)),
    sr
  );
}
var ct = om(),
  Do = { exports: {} },
  nl;
function sm() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(c, u, l) {
          ((this.fn = c), (this.context = u), (this.once = l || !1));
        }
        function i(c, u, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var h = new a(l, d || c, f),
            v = r ? r + u : u;
          return (
            c._events[v]
              ? c._events[v].fn
                ? (c._events[v] = [c._events[v], h])
                : c._events[v].push(h)
              : ((c._events[v] = h), c._eventsCount++),
            c
          );
        }
        function o(c, u) {
          --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[u];
        }
        function s() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((s.prototype.eventNames = function () {
          var u = [],
            l,
            d;
          if (this._eventsCount === 0) return u;
          for (d in (l = this._events)) t.call(l, d) && u.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
        }),
          (s.prototype.listeners = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var f = 0, h = d.length, v = new Array(h); f < h; f++) v[f] = d[f].fn;
            return v;
          }),
          (s.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (u, l, d, f, h, v) {
            var p = r ? r + u : u;
            if (!this._events[p]) return !1;
            var g = this._events[p],
              b = arguments.length,
              _,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(u, g.fn, void 0, !0), b)) {
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
              for (w = 1, _ = new Array(b - 1); w < b; w++) _[w - 1] = arguments[w];
              g.fn.apply(g.context, _);
            } else {
              var O = g.length,
                m;
              for (w = 0; w < O; w++)
                switch ((g[w].once && this.removeListener(u, g[w].fn, void 0, !0), b)) {
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
          (s.prototype.on = function (u, l, d) {
            return i(this, u, l, d, !1);
          }),
          (s.prototype.once = function (u, l, d) {
            return i(this, u, l, d, !0);
          }),
          (s.prototype.removeListener = function (u, l, d, f) {
            var h = r ? r + u : u;
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
          (s.prototype.removeAllListeners = function (u) {
            var l;
            return (
              u
                ? ((l = r ? r + u : u), this._events[l] && o(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s));
      })(Do)),
    Do.exports
  );
}
var cm = sm();
const um = tr(cm);
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
function Yt(e) {
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
var Na = "@all-features",
  lm = (function () {
    function e() {
      (ue(this, e), x(this, "eventToValue", new Map()), (this.emitter = new um()));
    }
    return le(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            s = a(r, Yt(Yt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var l = a(r, Yt(Yt({}, i), {}, { fireGateExposure: !1 })),
              d = o.eventToValue.get(n);
            d !== l && (o.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, c),
            function () {
              o.emitter.off(r, c);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, i, o, s) {
          var c = this,
            u = "".concat(r, ".").concat(n),
            l = o(r, n, a, Yt(Yt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var h = o(r, n, a, Yt(Yt({}, s), {}, { fireExperimentExposure: !1 })),
              v = c.eventToValue.get(i);
            v !== h && (c.eventToValue.set(i, h), i(h));
          };
          return (
            this.emitter.on(u, d),
            function () {
              c.emitter.off(u, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Na, r),
            function () {
              n.emitter.off(Na, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Na),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Na;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  dm = "fedramp-moderate";
function fm() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === dm;
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
  Yn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  fa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  vm = [
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
function fs(e) {
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
var $a = function (t) {
    return fs({ perimeter: fm() ? fa.FEDRAMP_MODERATE : fa.COMMERCIAL }, t);
  },
  An = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, h) {
      var v = Q(f, 1),
        p = v[0],
        g = Q(h, 1),
        b = g[0];
      return p.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var s = Q(n[o], 2),
        c = s[1],
        u = Q(a[o], 2),
        l = u[1];
      if (c !== l) return !1;
    }
    return !0;
  },
  ol = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  pm = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      i = t.loggingBufferMaxSize,
      o = t.localMode,
      s = t.eventLoggingApi,
      c = t.eventLoggingApiForRetries,
      u = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var f = ne(t, vm);
    return fs(
      fs({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: s ? s + "rgstr" : void 0,
          logEventFallbackUrls: c ? [c] : void 0,
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
  hm = Object.entries(Bs).map(function (e) {
    var t = Q(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Gv = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = hm.find(function (o) {
            var s = Q(o, 1),
              c = s[0];
            return i.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Bs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  vs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  sl = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (ue(this, e),
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
              c = Array.isArray(o) ? "array" : Ae(o);
            if (a) {
              var u;
              return a(o)
                ? (this.fireExposure(r), o)
                : ((u = this._onDefaultValueFallback) === null ||
                    u === void 0 ||
                    u.call(this, this, r, s, c),
                  n);
            }
            return n == null || s === c
              ? (this.fireExposure(r), o)
              : ((i = this._onDefaultValueFallback) === null ||
                  i === void 0 ||
                  i.call(this, this, r, s, c),
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
                Gv(r.details),
                vs(
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
  cl = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (ue(this, e),
        (this._logParameterFunction = i),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = c),
        (this._explicitParameters = u));
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
              c,
              u = new e(
                r.name,
                r.__value,
                r.ruleID,
                Gv(r.details),
                function (l, d) {
                  return r.get(d);
                },
                vs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                vs(
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
                (c = r.__evaluation) === null || c === void 0 ? void 0 : c.explicit_parameters,
              );
            return u;
          },
        },
      ],
    );
  })(),
  Br = "5.5.4";
function gm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Hv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hv = function () {
    return !!e;
  })();
}
function bm(e, t, r) {
  if (Hv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && da(a, r.prototype), a);
}
function ps(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ps = function (n) {
      if (n === null || !gm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return bm(n, arguments, H(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        da(a, n)
      );
    }),
    ps(e)
  );
}
function ym(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Wv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wv = function () {
    return !!e;
  })();
}
var ul = (function (e) {
  function t(r) {
    return (ue(this, t), ym(this, t, [r]));
  }
  return (De(t, e), le(t));
})(ps(Error));
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
function mm(e) {
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
var _m = 5e3,
  wm = "https://api.atlassian.com/flags",
  Om = "https://api.stg.atlassian.com/flags",
  km = "https://api.dev.atlassian.com/flags",
  Sm = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Em = "https://api.atlassian-us-gov-mod.com/flags",
  xm = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Cm = "oasis-stg.com/flags",
  Pm = "atlassian-isolated.net/flags",
  Rm = "/gateway/api/flags",
  To = (function () {
    function e() {
      ue(this, e);
    }
    return le(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ve(
            $.mark(function n(a) {
              var i, o;
              return $.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (i = a.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(i)),
                          (c.prev = 2),
                          (c.next = 5),
                          this.fetchRequest(o, "GET", a)
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
          var t = ve(
            $.mark(function n(a, i, o) {
              var s;
              return $.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (s = { identifiers: i, customAttributes: o, targetApp: a.targetApp }),
                          (u.prev = 1),
                          (u.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, s)
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
          var t = ve(
            $.mark(function n(a) {
              var i;
              return $.wrap(function (s) {
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
                        new ul(
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
                      throw new ul("Unexpected 204 response");
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
            $.mark(function n(a) {
              var i;
              return $.wrap(function (s) {
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
          if (n) return Rm;
          if (a === fa.FEDRAMP_MODERATE)
            switch (r) {
              case Yn.Production:
                return Em;
              case Yn.Staging:
                return Sm;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === fa.COMMERCIAL)
            switch (r) {
              case Yn.Development:
                return km;
              case Yn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : Om;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : wm;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ve(
            $.mark(function n(a, i, o, s) {
              var c, u, l, d, f;
              return $.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        return (
                          (c = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (u = o.fetchTimeoutMs || _m),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (v.next = 5),
                          fetch(
                            "".concat(c).concat(a),
                            mm(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Br,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
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
          if (n === void 0) return r ? xm.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Cm);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Pm) : null;
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
function dl(e, t) {
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
      ? dl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Am(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Kv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Kv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kv = function () {
    return !!e;
  })();
}
function jm(e, t, r, n) {
  var a = di(H(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Im = (function (e) {
  function t() {
    var r;
    return (
      ue(this, t),
      (r = Am(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
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
                stableID: ct.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = ve(
            $.mark(function a(i, o) {
              return $.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                    case "end":
                      return c.stop();
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
            $.mark(function a(i, o, s) {
              return $.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            jn(
                              jn({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ct._getFullUserHash(o) },
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
            jn(jn({}, this.bootstrapResult), {}, { fullUserHash: ct._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = ve(
            $.mark(function a(i, o, s) {
              return $.wrap(function (u) {
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
          jm(t, "setData", this)([n, a]);
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
})(ct.DataAdapterCore);
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
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dm(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Tm(e)) || t) {
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
    s = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((o = u.done), u);
    },
    e: function (u) {
      ((s = !0), (i = u));
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
function Tm(e, t) {
  if (e) {
    if (typeof e == "string") return vl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? vl(e, t)
          : void 0
    );
  }
}
function vl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Mo = "LocalOverride:Recognized",
  Mm = "STATSIG_OVERRIDES",
  pl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Pr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  Lm = (function () {
    function e(t) {
      (ue(this, e),
        (this._overrides = Pr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return le(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Pr();
          } catch {
            return Pr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Pr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          for (var o = 0, s = a; o < s.length; o++) {
            for (
              var c = s[o],
                u = 0,
                l = Object.entries((d = c.gates) !== null && d !== void 0 ? d : {});
              u < l.length;
              u++
            ) {
              var d,
                f = Q(l[u], 2),
                h = f[0],
                v = f[1];
              r.gates[h] = v;
            }
            for (
              var p = 0, g = Object.entries((b = c.configs) !== null && b !== void 0 ? b : {});
              p < g.length;
              p++
            ) {
              var b,
                _ = Q(g[p], 2),
                w = _[0],
                O = _[1];
              r.configs[w] = O;
            }
            for (
              var m = 0, S = Object.entries((C = c.layers) !== null && C !== void 0 ? C : {});
              m < S.length;
              m++
            ) {
              var C,
                I = Q(S[m], 2),
                M = I[0],
                P = I[1];
              r.layers[M] = P;
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
            this.parseStoredOverrides(pl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(pl);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = Dm(o),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value,
                  l = Ve._DJB2(u);
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
          var n = Ee(Ee({}, Pr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = Q(i[a], 2), s = o[0], c = o[1], u = 0, l = Object.entries(c);
              u < l.length;
              u++
            ) {
              var d = Q(l[u], 2),
                f = d[0],
                h = d[1];
              this._djb2Map.set(Ge(Ve._DJB2(f), s), h);
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
            : Ee(Ee({}, r), {}, { value: i, details: Ee(Ee({}, r.details), {}, { reason: Mo }) });
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
          this._overrides = Pr();
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
            : Ee(
                Ee({}, r),
                {},
                {
                  __value: i,
                  get: Ve._makeTypedGet(r.name, i),
                  details: Ee(Ee({}, r.details), {}, { reason: Mo }),
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
            : Ee(
                Ee({}, r),
                {},
                {
                  value: i,
                  get: Ve._makeTypedGet(r.name, i),
                  details: Ee(Ee({}, r.details), {}, { reason: Mo }),
                },
              );
        },
      },
    ]);
  })(),
  Nm = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function hl(e, t) {
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
      ? hl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gl = "client-default-key",
  $m = "https://xp.atlassian.com/v1/rgstr",
  Fm = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Mm : n,
        i = r.overrideAdapter;
      (ue(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new lm()),
        x(this, "dataAdapter", new Im()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new Lm(a)));
    }
    return le(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ve(
            $.mark(function n(a, i, o) {
              var s = this,
                c,
                u;
              return $.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((c = $a(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          An(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.init(c, i, o)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                h = f - u;
                              s.fireClientEvent(u, h, "initialize", s.initCompleted, c.apiKey);
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
            $.mark(function n(a, i, o, s) {
              var c = this,
                u,
                l;
              return $.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((u = $a(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          An(u, this.initOptions) ||
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
                          this.provider.setClientVersion(Br),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, i, o, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              c.fireClientEvent(
                                l,
                                v,
                                "initializeWithProvider",
                                c.initCompleted,
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
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (u) {
                var l = Jt(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Br,
                    success: i,
                    startTime: r,
                    totalTime: n,
                  },
                  c && { apiKey: c },
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
                s.initOptions.environment !== Yn.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = ve(
            $.mark(function n(a, i, o) {
              var s = this,
                c,
                u,
                l,
                d = arguments;
              return $.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        if (
                          ((c = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = $a(a)),
                          !this.initPromise)
                        ) {
                          h.next = 5;
                          break;
                        }
                        return (
                          An(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          h.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(c, "has_updates") ||
                            (c.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.initFromValues(u, i, o, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                p = v - l;
                              s.fireClientEvent(l, p, "initializeFromValues", s.initCompleted);
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
          var t = ve(
            $.mark(function n(a, i, o) {
              var s, c;
              return $.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = $a(a)),
                          (c = function () {
                            return To.fetchExperimentValues(s, i, o).then(function (f) {
                              var h = f.experimentValues,
                                v = f.customAttributes;
                              return { experimentValues: h, customAttributesFromFetch: v };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, i, o)
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
            $.mark(function n(a, i) {
              var o = this;
              return $.wrap(
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
                        return ((c.next = 5), this.provider.setProfile(this.initOptions, a, i));
                      case 5:
                        return (
                          (c.next = 7),
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
          var t = ve(
            $.mark(function n(a, i) {
              var o,
                s,
                c = arguments;
              return $.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (o = c.length > 2 && c[2] !== void 0 ? c[2] : {}),
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
            return sl.fromExperiment(
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
              new sl(r, {}, "", { time: Date.now(), reason: Bs.Error })
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
          } catch (c) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: i,
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
          return An(this.currentIdentifiers, r) && An(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (c) {
              var u = i.fireGateExposure,
                l = u === void 0 ? !0 : u;
              l && a.manuallyLogGateExposure(r);
              try {
                n(c);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(c),
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
            c = function (l) {
              var d = s.fireExperimentExposure,
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
          var t = ve(
            $.mark(function n(a, i, o) {
              var s, c, u, l, d, f, h, v;
              return $.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = Jt({}, a)),
                          (g.prev = 1),
                          (l = To.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = To.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (h = Q(f, 2)),
                          (v = h[1]),
                          (c = v.experimentValues),
                          (u = v.customAttributes),
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
                        return g.abrupt("return", this.initFromValues(s, i, u, c));
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
            $.mark(function n(a, i, o, s) {
              var c, u, l, d, f, h, v, p;
              return $.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = Jt(Jt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          i.setProfile(a, o, s)
                        );
                      case 4:
                        return (
                          (d = i.getClientSdkKey().then(function (_) {
                            return (c.sdkKey = _);
                          })),
                          (f = i.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((h = b.sent),
                          (v = Q(h, 2)),
                          (p = v[1]),
                          (u = p.experimentValues),
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
                          this.initFromValues(c, o, s)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(c, o, l, u));
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
            $.mark(function n(a, i, o) {
              var s,
                c,
                u,
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
                          (c = v.length > 3 && v[3] !== void 0 ? v[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (u = pm(a)),
                          u.sdkKey || (u.sdkKey = gl),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = Jt(
                              Jt({}, u.networkConfig),
                              {},
                              { logEventUrl: $m },
                            )),
                          u.perimeter === fa.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (f = ne(u, Nm)),
                          (this.user = ol(i, o)),
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
                          (this.statsigClient = new ct.StatsigClient(gl, this.user, h)),
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
            $.mark(function n(a, i, o) {
              var s = this,
                c,
                u,
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
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, i, o)),
                          (this.initPromise = l.catch(
                            ve(
                              $.mark(function h() {
                                return $.wrap(function (p) {
                                  for (;;)
                                    switch ((p.prev = p.next)) {
                                      case 0:
                                        if (((s.initPromise = c), !s.provider)) {
                                          p.next = 4;
                                          break;
                                        }
                                        return (
                                          (p.next = 4),
                                          s.provider.setProfile(
                                            s.initOptions,
                                            s.currentIdentifiers,
                                            s.currentAttributes,
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
          var t = ve(
            $.mark(function n(a, i, o) {
              var s, c, u, l, d, f, h, v, p;
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
                        ((u = b.sent), (l = ol(i, u.customAttributesFromFetch)), (b.next = 13));
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
                          this.dataAdapter.setBootstrapData(u.experimentValues),
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
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (c = s.updateUserCompletionCallback) === null ||
                            c === void 0 ||
                            c.call(s, v, p),
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
          return Br;
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
            return cl.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              cl.fromLayer(ct._makeLayer(r, { reason: "Error" }, null))
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
          } catch (c) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: i,
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
  D,
  G = (function () {
    function e() {
      ue(this, e);
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
D = G;
x(G, "client", new Fm());
x(G, "hasCheckGateErrorOccurred", !1);
x(G, "hasGetExperimentValueErrorOccurred", !1);
x(G, "checkGate", function (e, t) {
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
x(G, "getExperimentValue", function (e, t, r, n) {
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
x(G, "initializeCalled", D.client.initializeCalled.bind(D.client));
x(G, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
x(G, "initialize", D.client.initialize.bind(D.client));
x(G, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
x(G, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
x(G, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
x(G, "getExperiment", D.client.getExperiment.bind(D.client));
x(G, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
x(G, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
x(G, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
x(G, "overrideGate", D.client.overrideGate.bind(D.client));
x(G, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
x(G, "overrideConfig", D.client.overrideConfig.bind(D.client));
x(G, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
x(G, "setOverrides", D.client.setOverrides.bind(D.client));
x(G, "getOverrides", D.client.getOverrides.bind(D.client));
x(G, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
x(G, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
x(G, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
x(G, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
x(G, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
x(G, "updateUser", D.client.updateUser.bind(D.client));
x(G, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
x(G, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
x(G, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
x(G, "getLayer", D.client.getLayer.bind(D.client));
x(G, "getLayerValue", D.client.getLayerValue.bind(D.client));
var hs = G;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = G;
  else {
    var Fa, Lo;
    hs = window.__FEATUREGATES_JS__;
    var bl =
      ((Fa = hs) === null || Fa === void 0 || (Lo = Fa.getPackageVersion) === null || Lo === void 0
        ? void 0
        : Lo.call(Fa)) || "4.10.0 or earlier";
    if (bl !== Br) {
      var Bm = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(bl, " when module version ")
        .concat(Br, " was loading.");
      console.warn(Bm);
    }
  }
var Rr,
  Ar,
  zm =
    (globalThis == null ||
    (Rr = globalThis.process) === null ||
    Rr === void 0 ||
    (Rr = Rr.env) === null ||
    Rr === void 0
      ? void 0
      : Rr.JEST_WORKER_ID) !== void 0,
  qm =
    !zm &&
    (globalThis == null ||
    (Ar = globalThis.process) === null ||
    Ar === void 0 ||
    (Ar = Ar.env) === null ||
    Ar === void 0
      ? void 0
      : Ar.NODE_ENV) !== "production",
  Um = function () {
    var t;
    qm && (t = console).debug.apply(t, arguments);
  },
  zs = {},
  Vm = "@atlaskit/platform-feature-flags",
  ta = "__PLATFORM_FEATURE_FLAGS__",
  Yv = typeof process < "u" && typeof zs < "u",
  Gm = Yv ? zs.ENABLE_PLATFORM_FF === "true" : !1,
  Hm = Yv ? zs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Wm = Gm || Hm,
  Km = { booleanResolver: void 0 },
  ra = typeof window < "u" ? window : globalThis;
ra[ta] = ra[ta] || Km;
function Ym(e) {
  if (Wm)
    return (
      Um(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Vm,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ra[ta]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ra[ta]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return hs.checkGate(e);
    var a = (n = ra[ta]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function et(e) {
  return Ym(e);
}
var Jm = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Xm = function () {
    return y.useContext(Jm);
  },
  fi = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function Qm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Zm(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && Qm(t, a.current.inputs)),
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
function e_(e, t) {
  return Zm(function () {
    return e;
  }, t);
}
function Jv() {
  var e = Xm(),
    t = e_(
      function (r) {
        return new Wy({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function t_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function va(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Jv(),
    u = c.createAnalyticsEvent,
    l = fi(s),
    d = fi(t),
    f = y.useCallback(
      function (h) {
        var v = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          p = t_({ componentName: n, packageName: i, packageVersion: o }, l.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), d.current(h, v));
      },
      [r, n, a, i, o, u, l, d],
    );
  return f;
}
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
function r_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ml(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _l(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = Jv(),
    c = s.createAnalyticsEvent,
    u = fi(o),
    l = fi(t),
    d = y.useCallback(
      function () {
        var f = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          h = r_({ componentName: n, packageName: a, packageVersion: i }, u.current);
        f.context.push(h);
        var v = f.clone();
        (v && v.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, c, u, l],
    );
  return d;
}
var yr = "ASC",
  vi = "DESC",
  n_ = "small",
  pi = "large",
  Xv = 0.22;
const a_ = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, a_) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Ke(e, t, r) {
  return e ?? "var(--c-, )";
}
var wl = "#FF5630",
  Ol = "#DE350B",
  jr = "#BF2600",
  kl = "#FFC400",
  Sl = "#FFAB00",
  Ir = "#FF991F",
  Qv = "#DEEBFF",
  Jn = "#B3D4FF",
  hi = "#4C9AFF",
  El = "#2684FF",
  xl = "#0065FF",
  Dr = "#0052CC",
  Cl = "#0747A6",
  Bt = "#FFFFFF",
  i_ = "#FAFBFC",
  xe = "#F4F5F7",
  gs = "#DFE1E6",
  ur = "#A5ADBA",
  o_ = "#8993A4",
  s_ = "#6B778C",
  Pl = "#5E6C84",
  c_ = "#505F79",
  pa = "#42526E",
  He = "#253858",
  dr = "#172B4D",
  In = "rgba(9, 30, 66, 0.04)",
  bs = "rgba(9, 30, 66, 0.08)",
  XS = "rgba(9, 30, 66, 0.25)",
  QS = "rgba(9, 30, 66, 0.31)",
  st = "#9FB0CC",
  u_ = "#8C9CB8",
  No = "#67758F",
  Dn = "#3B475C",
  Rl = "#313D52",
  Tn = "#1B2638",
  Tr = "#0D1424",
  l_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function Al(e, t) {
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
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Al(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Al(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var d_ = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = ne(e, l_);
    return y.createElement(
      "table",
      Y({ inert: o ? "" : void 0, ref: t }, s, {
        "data-testid": i && "".concat(i, "--table"),
        className: R([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179r1tpy",
        ]),
        style: jl(
          jl(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(i_, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                Qv,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(Jn, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                hi,
                ")",
              ),
            },
          ),
          {},
          {
            "--_mwqor1": Ke(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(gs, ")"),
              ),
            ),
          },
        ),
      }),
      a,
    );
  }),
  f_ = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  v_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  p_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  h_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
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
  g_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Il(e, t) {
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
      ? Il(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Il(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function b_(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Zv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Tl = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  y_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === yr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = Tl(c.cells, t, n),
        d = Tl(u.cells, t, n);
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
function m_(e) {
  var t = (function (r) {
    function n() {
      var a;
      ue(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = b_(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
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
                c = ne(i, g_);
              return k.createElement(
                e,
                Y({ pageRows: this.state.pageRows, head: o }, c, { ref: s }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var s = i.rows,
                c = i.head,
                u = i.sortKey,
                l = i.sortOrder,
                d = i.page,
                f = i.rowsPerPage,
                h = i.isTotalPagesControlledExternally;
              li(u, c);
              var v, p;
              return (
                h ? ((v = s), (p = s)) : ((v = y_(c, s, u, l) || []), (p = Lv(v, d, f))),
                Dl(Dl({}, o), {}, { pageRows: p })
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
var __ = "--local-dynamic-table-width",
  ep = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, __, "".concat(r, "%")) : void 0;
  },
  w_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  O_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ne(t, w_);
    return y.createElement(
      "td",
      Y(
        {
          style: ep({ width: r }),
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
  k_ = ["isHighlighted", "children", "style", "testId", "className"];
function Ml(e, t) {
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
function Ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ml(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var S_ = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = ne(e, k_);
    return y.createElement(
      "tr",
      Y(
        {
          className: R([
            "_bfhkqtfy _1ygb1i4z _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        s,
        {
          ref: t,
          "data-testid": i,
          style: Ll(
            Ll({}, a),
            {},
            {
              "--_4vkylo": Ke(
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
  E_ = ["cells"],
  x_ = ["content", "testId"],
  C_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      c = ne(r, E_);
    return k.createElement(
      S_,
      Y(
        {},
        c,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (u, l) {
        var d = u.content,
          f = u.testId,
          h = ne(u, x_),
          v = (n || { cells: [] }).cells[l] || {},
          p = v.shouldTruncate,
          g = v.width;
        return k.createElement(
          O_,
          Y({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, h, {
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
function P_(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, tp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var R_ = (function (e) {
    function t() {
      return (ue(this, t), P_(this, t, arguments));
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
              c = n.testId,
              u = n.forwardedRef;
            return k.createElement(
              "tbody",
              { "data-testid": c && "".concat(c, "--body"), ref: u },
              a.map(function (l, d) {
                return k.createElement(C_, {
                  head: i,
                  isFixedSize: o,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!s && (typeof s == "number" ? s === d : s.indexOf(d) > -1)),
                  testId: c,
                });
              }),
            );
          },
        },
      ])
    );
  })(k.Component),
  A_ = m_(
    k.forwardRef(function (e, t) {
      return k.createElement(R_, Y({}, e, { forwardedRef: t }));
    }),
  );
function j_(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, rp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var I_ = (function (e) {
  function t(r) {
    var n;
    return (ue(this, t), (n = j_(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const qs = y.createContext(null);
var D_ = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function T_(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(pa, ")")
    : "var(--ds-icon-inverse, ".concat(Bt, ")");
}
var Ba = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  M_ = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  np = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        s = t.interactionName,
        c = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        f = typeof l == "number" ? l : D_[l],
        h = "".concat(o, "ms"),
        v = T_(a),
        p = y.useContext(qs);
      return (
        M_(
          function () {
            if (p != null) return p.hold(s);
          },
          [p, s],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: h, width: f, height: f },
            className: R([Ba.wrapperStyles, Ba.rotateStyles]),
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
              "aria-label": c || void 0,
              style: { animationDelay: h },
              role: c ? "img" : "none",
              className: R([Ba.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: v },
              className: R([Ba.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Nl(e, t) {
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
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fl = "--contents-opacity",
  L_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  N_ = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: $l($l({}, x({}, Fl, n)), {}, { "--_cnddr8": Ke("var(".concat(Fl, ")")) }),
      },
      r,
    );
  },
  $_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function F_(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, ap() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ap = function () {
    return !!e;
  })();
}
var ip = (function (e) {
  function t() {
    return (ue(this, t), F_(this, t, arguments));
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
            c = n.testId,
            u = n.loadingLabel;
          return k.createElement(
            L_,
            { testId: c },
            i ? k.createElement(N_, { contentsOpacity: s, testId: c }, a) : a,
            i &&
              k.createElement(
                $_,
                { testId: c },
                k.createElement(np, {
                  size: o,
                  testId: c && "".concat(c, "--loadingSpinner"),
                  label: u,
                }),
              ),
          );
        },
      },
    ])
  );
})(k.Component);
x(ip, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: Xv,
  loadingLabel: "Loading table",
});
var B_ = ["children", "testId"],
  z_ = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ne(e, B_);
    return y.createElement(
      "div",
      Y({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  q_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  U_ = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function V_(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, op() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var sp = (function (e) {
  function t() {
    var r;
    ue(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = V_(this, t, [].concat(a))),
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
          c = s?.();
        return c || r.containerRef.current;
      }),
      x(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      x(r, "isVerticallyVisible", function (o, s) {
        var c = o.top,
          u = o.bottom;
        return u <= 0 ? !1 : c < s;
      }),
      x(r, "isFullyVerticallyVisible", function (o, s) {
        var c = o.top,
          u = o.bottom;
        return c >= 0 && u <= s;
      }),
      x(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "translateSpinner", function (o, s, c) {
        ((o.style.position = c ? "fixed" : ""),
          (o.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      x(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          s = r.props,
          c = s.isLoading,
          u = s.contentsOpacity;
        o &&
          o.style &&
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = c ? "none" : ""), (o.style.opacity = c ? u.toString() : ""));
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
            var c = o.getBoundingClientRect(),
              u = s.getBoundingClientRect(),
              l = u.height,
              d = this.isVerticallyVisible(c, i),
              f = c.top,
              h = c.bottom,
              v = c.height;
            if (d) {
              var p = v >= l * 3;
              if (p && !this.isFullyVerticallyVisible(c, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    _ = g < l * 3 ? f + l : b;
                  this.translateSpinner(s, _, !0);
                } else if (f < 0 && h > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(s, w, !0);
                } else {
                  var O = h / 2 - l / 2,
                    m = O < l ? O - (l - O) : O;
                  this.translateSpinner(s, m, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, i)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var C = S.getBoundingClientRect().top,
                I = (f - C) / 2;
              this.translateSpinner(s, I, !1);
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
            c = n.loadingLabel;
          return k.createElement(
            z_,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                q_,
                { testId: s },
                k.createElement(
                  U_,
                  { ref: this.spinnerRef },
                  k.createElement(np, {
                    size: o,
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
})(k.Component);
x(sp, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Xv), ")"),
  loadingLabel: "Loading table",
});
function G_(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = Q(n, 2),
    i = a[0],
    o = a[1],
    s = y.useRef(r);
  y.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var c = r ? e : i,
    u = y.useCallback(function (l) {
      s.current || o(l);
    }, []);
  return [c, u];
}
var Mn = {},
  Ln = {},
  H_ = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  W_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  K_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Y_ = { core: 16, utility: 12 },
  J_ = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  Bl = y.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      i = a === void 0 ? "currentColor" : a,
      o = n.testId,
      s = n.label,
      c = n.LEGACY_primaryColor,
      u = n.LEGACY_secondaryColor,
      l = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      h = n.shouldScale,
      v = n.LEGACY_margin,
      p = n.spacing,
      g = p === void 0 ? "none" : p,
      b = n.name,
      _ = f ? { __html: f } : void 0;
    if (d && !et("platform-visual-refresh-icons"))
      return y.createElement(d, {
        primaryColor: c ?? i,
        secondaryColor: u,
        size: l,
        label: s,
        testId: o,
        UNSAFE_margin: v,
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
    var S = Y_[w],
      C = J_[w][O][g],
      I = S + 2 * C;
    return y.createElement(
      "span",
      {
        "data-testid": o,
        role: s ? "img" : void 0,
        "aria-label": s || void 0,
        "aria-hidden": s ? void 0 : !0,
        style: { color: i },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          h && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || O === "small") && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - C, " ")
          .concat(0 - C, " ")
          .concat(I, " ")
          .concat(I),
        role: "presentation",
        dangerouslySetInnerHTML: _,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          h ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? K_[g] : O === "small" ? W_[g] : H_[g],
        ]),
      }),
    );
  });
const X_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Bl, default: Bl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ni = Rs(X_);
var zl;
function Q_() {
  if (zl) return Ln;
  ((zl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = r(vt()),
    t = r(Ni);
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
var Nn = {};
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
function Ul(e) {
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
var Z_ = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Vl = y.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      i = r.primaryColor,
      o = i === void 0 ? "currentColor" : i,
      s = r.secondaryColor,
      c = r.size,
      u = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      h = r.UNSAFE_margin,
      v = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? y.createElement(n, { role: "presentation" }) : null },
      p = d && f ? { width: d + "px", height: f + "px" } : null;
    return y.createElement(
      "span",
      Y(
        {
          "data-testid": u,
          "data-vc": "icon-".concat(u),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Ul(
            Ul({}, p),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": s, margin: h },
          ),
        },
        v,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            c && Z_[c],
          ]),
        },
      ),
    );
  });
const e0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Vl, default: Vl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  cp = Rs(e0);
var Gl;
function t0() {
  if (Gl) return Nn;
  ((Gl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = r(vt()),
    t = cp;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Nn.default = n), Nn);
}
var Hl;
function r0() {
  if (Hl) return Mn;
  ((Hl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = n(vt()),
    t = n(Q_()),
    r = n(t0());
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
var n0 = r0();
const a0 = tr(n0);
var $n = {},
  Fn = {},
  Wl;
function i0() {
  if (Wl) return Fn;
  ((Wl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = r(vt()),
    t = r(Ni);
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
  Kl;
function o0() {
  if (Kl) return Bn;
  ((Kl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(vt()),
    t = cp;
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
var Yl;
function s0() {
  if (Yl) return $n;
  ((Yl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = n(vt()),
    t = n(i0()),
    r = n(o0());
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
var c0 = s0();
const u0 = tr(c0);
var Us = y.createContext("elevation.surface"),
  l0 = function () {
    return y.useContext(Us);
  };
Us.displayName = "SurfaceProvider";
var d0 = [
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
  f0 = ["className"],
  v0 = {
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
  up = {
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
  p0 = {
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
  h0 = {
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
  g0 = {
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
  b0 = {
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
  $i = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      i = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? o : s,
      u = e.paddingBlockStart,
      l = u === void 0 ? c : u,
      d = e.paddingBlockEnd,
      f = d === void 0 ? c : d,
      h = e.paddingInline,
      v = h === void 0 ? o : h,
      p = e.paddingInlineStart,
      g = p === void 0 ? v : p,
      b = e.paddingInlineEnd,
      _ = b === void 0 ? v : b,
      w = e.style,
      O = e.testId,
      m = e.xcss,
      S = ne(e, d0);
    S.className;
    var C = ne(S, f0),
      I = y.createElement(
        n,
        Y(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              i && v0[i],
              i && y0(i) && up[i],
              l && p0[l],
              f && h0[f],
              g && g0[g],
              _ && b0[_],
              m,
            ]),
          },
          C,
          { "data-testid": O },
        ),
        a,
      );
    return i ? y.createElement(Us.Provider, { value: i }, I) : I;
  });
function y0(e) {
  return e in up;
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
  lp = (...e) => R(e);
function m0() {
  return {
    css() {
      throw $o();
    },
    cssMap() {
      throw $o();
    },
    cx: lp,
    XCSSProp() {
      throw $o();
    },
  };
}
var _0 = m0(),
  w0 = _0.cx,
  O0 = [
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
  Jl = {
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
  Xl = {
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
  k0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  S0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  E0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  x0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  C0 = { root: "_1e0c1txw _vchhusvi" },
  gi = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        i = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        u = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        h = e.wrap,
        v = e.xcss,
        p = ne(e, O0);
      return y.createElement(
        n,
        Y({}, p, {
          role: a,
          className: R([
            C0.root,
            s && Xl[s],
            c && Xl[c],
            s && Jl[s],
            u && Jl[u],
            i && x0[i],
            f && S0[f],
            o && k0[o],
            h && E0[h],
            v,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
gi.displayName = "Flex";
var P0 = [
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
  ys = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  R0 = function (t) {
    var r = t.children;
    return y.createElement("span", { className: R([ys.separator]) }, r);
  },
  Wa = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        i = a === void 0 ? "start" : a,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        u = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        h = e.xcss,
        v = e.testId,
        p = e.role,
        g = e.children,
        b = ne(e, P0),
        _ = typeof f == "string" ? y.createElement(R0, null, f) : f,
        w = _
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, m) {
                return y.createElement(y.Fragment, { key: m }, f && m > 0 ? _ : null, O);
              })
          : g;
      return y.createElement(
        gi,
        Y({}, b, {
          as: r,
          role: p,
          alignItems: i,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: w0(u === "hug" && ys.hug, u === "fill" && ys.fill, h),
          testId: v,
          ref: t,
        }),
        w,
      );
    }),
  );
Wa.displayName = "Inline";
var A0 = "Invariant failed";
function j0(e, t) {
  if (!e) throw new Error(A0);
}
var dp = y.createContext(!1),
  I0 = function () {
    return y.useContext(dp);
  },
  D0 = dp.Provider,
  T0 = ["span", "p", "strong", "em"],
  M0 = function (t, r) {
    var n = l0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Ql.hasOwnProperty(n) ? Ql[n] : "color.text";
    }
  },
  Mr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  L0 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  N0 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  $0 = {
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
  Ql = {
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
  F0 = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      i = e.align,
      o = e.testId,
      s = e.id,
      c = e.size,
      u = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    j0(T0.includes(n));
    var h = I0(),
      v = M0(a, h);
    !c && !h && (c = "medium");
    var p = y.createElement(
      n,
      {
        id: s,
        className: R([
          Mr.root,
          c && L0[c],
          v && $0[v],
          l && Mr.truncation,
          l === 1 && Mr.breakAll,
          i && Mr["textAlign.".concat(i)],
          u && N0[u],
          n === "em" && Mr["as.em"],
          n === "strong" && Mr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return h ? p : y.createElement(D0, { value: !0 }, p);
  });
function B0() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var z0 = ["as", "children", "isInset", "testId", "style", "xcss"],
  q0 = ["className"];
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
function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var U0 = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      u = ne(e, z0);
    u.className;
    var l = ne(u, q0);
    return y.createElement(
      n,
      Y({}, l, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gt5 _2mwq1gt5",
          c,
        ]),
        "data-testid": o,
        style: ed(
          ed({}, s),
          {},
          { "--_12dc40g": Ke("calc(0px - ".concat("var(--ds-border-width-focused, 2px)", ")")) },
        ),
      }),
      a,
    );
  }),
  V0 = [
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
  G0 = ["className"],
  td = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  H0 = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? we : o,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      h = e.xcss,
      v = e.tabIndex,
      p = ne(e, V0),
      g = y.useContext(qs),
      b = y.useCallback(
        function (O, m) {
          (g && g.tracePress(c, O.timeStamp), s(O, m));
        },
        [s, g, c],
      ),
      _ = va({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.14.2",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var w = ne(p, G0);
    return y.createElement(
      U0,
      Y({ as: "button", tabIndex: v ?? (B0() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: _,
        disabled: n,
        xcss: lp(td.root, n && td.disabled, h),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Fo = {},
  zn = {},
  rd;
function fp() {
  if (rd) return zn;
  ((rd = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.bind = void 0));
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
var lr = {},
  nd;
function W0() {
  if (nd) return lr;
  nd = 1;
  var e =
    (lr && lr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (i) {
            for (var o, s = 1, c = arguments.length; s < c; s++) {
              o = arguments[s];
              for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (i[u] = o[u]);
            }
            return i;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(lr, "__esModule", { value: !0 }), (lr.bindAll = void 0));
  var t = fp();
  function r(i) {
    if (!(typeof i > "u")) return typeof i == "boolean" ? { capture: i } : i;
  }
  function n(i, o) {
    if (o == null) return i;
    var s = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return s;
  }
  function a(i, o, s) {
    var c = o.map(function (u) {
      var l = n(u, s);
      return (0, t.bind)(i, l);
    });
    return function () {
      c.forEach(function (l) {
        return l();
      });
    };
  }
  return ((lr.bindAll = a), lr);
}
var ad;
function K0() {
  return (
    ad ||
      ((ad = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = fp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = W0();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Fo)),
    Fo
  );
}
var Fi = K0(),
  Y0 = function () {
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
  vp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Y0() });
  },
  J0 = vp(),
  X0 = y.createContext(vp()),
  Q0 = function (e) {
    return e.value++;
  },
  Z0 = function (e) {
    return e ? e.prefix : "";
  },
  ew = function (e) {
    var t = e || J0,
      r = Z0(t),
      n = Q0(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  pp = function () {
    var e = y.useContext(X0),
      t = y.useState(function () {
        return ew(e);
      })[0];
    return t;
  },
  tw = function () {
    var e = pp().uid;
    return e;
  },
  rw = function () {
    var e = pp().gen;
    return e;
  },
  Bo,
  Ka = (Bo = k.useId) !== null && Bo !== void 0 ? Bo : void 0;
function nw() {
  return Ka && et("platform-dst-react-18-use-id")
    ? et("platform-dst-react-18-use-id-selector-safe")
      ? Ka().replace(/[:«»]/g, "_")
      : Ka()
    : "uid".concat(tw());
}
function aw() {
  if (Ka && et("platform-dst-react-18-use-id")) {
    var e = nw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return rw();
}
var hp = function (t) {
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
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  iw = {
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
  ow = ["children"];
function sw(e) {
  var t = function (s, c) {
      return s(c);
    },
    r = y.createContext(e);
  function n(o) {
    var s = y.useContext(r),
      c = s || t,
      u = c(o);
    return u;
  }
  function a(o) {
    var s = o.children,
      c = ne(o, ow),
      u = n(c);
    return k.createElement(k.Fragment, null, s(u));
  }
  function i(o) {
    var s = y.useContext(r),
      c = o.value || t,
      u = y.useCallback(
        function (l) {
          return c(s, l);
        },
        [s, c],
      );
    return k.createElement(r.Provider, { value: u }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var cw = sw(function () {
    return { mode: "light" };
  }),
  uw = cw.useTheme;
function lw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function dw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var fw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = lw(a);
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
  bi = "-moz-",
  ee = "-webkit-",
  gp = "comm",
  Vs = "rule",
  Gs = "decl",
  vw = "@import",
  bp = "@keyframes",
  pw = "@layer",
  hw = Math.abs,
  Bi = String.fromCharCode,
  gw = Object.assign;
function bw(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function yp(e) {
  return e.trim();
}
function yw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function ms(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function ha(e, t, r) {
  return e.slice(t, r);
}
function Ot(e) {
  return e.length;
}
function Hs(e) {
  return e.length;
}
function za(e, t) {
  return (t.push(e), e);
}
function mw(e, t) {
  return e.map(t).join("");
}
var zi = 1,
  Vr = 1,
  mp = 0,
  je = 0,
  pe = 0,
  Qr = "";
function qi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: zi,
    column: Vr,
    length: o,
    return: "",
  };
}
function qn(e, t) {
  return gw(qi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _w() {
  return pe;
}
function ww() {
  return ((pe = je > 0 ? ye(Qr, --je) : 0), Vr--, pe === 10 && ((Vr = 1), zi--), pe);
}
function $e() {
  return ((pe = je < mp ? ye(Qr, je++) : 0), Vr++, pe === 10 && ((Vr = 1), zi++), pe);
}
function Rt() {
  return ye(Qr, je);
}
function Ya() {
  return je;
}
function xa(e, t) {
  return ha(Qr, e, t);
}
function ga(e) {
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
function _p(e) {
  return ((zi = Vr = 1), (mp = Ot((Qr = e))), (je = 0), []);
}
function wp(e) {
  return ((Qr = ""), e);
}
function Ja(e) {
  return yp(xa(je - 1, _s(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ow(e) {
  for (; (pe = Rt()) && pe < 33; ) $e();
  return ga(e) > 2 || ga(pe) > 3 ? "" : " ";
}
function kw(e, t) {
  for (; --t && $e() && !(pe < 48 || pe > 102 || (pe > 57 && pe < 65) || (pe > 70 && pe < 97)); );
  return xa(e, Ya() + (t < 6 && Rt() == 32 && $e() == 32));
}
function _s(e) {
  for (; $e(); )
    switch (pe) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _s(pe);
        break;
      case 40:
        e === 41 && _s(e);
        break;
      case 92:
        $e();
        break;
    }
  return je;
}
function Sw(e, t) {
  for (; $e() && e + pe !== 57; ) if (e + pe === 84 && Rt() === 47) break;
  return "/*" + xa(t, je - 1) + "*" + Bi(e === 47 ? e : $e());
}
function Ew(e) {
  for (; !ga(Rt()); ) $e();
  return xa(e, je);
}
function xw(e) {
  return wp(Xa("", null, null, null, [""], (e = _p(e)), 0, [0], e));
}
function Xa(e, t, r, n, a, i, o, s, c) {
  for (
    var u = 0,
      l = 0,
      d = o,
      f = 0,
      h = 0,
      v = 0,
      p = 1,
      g = 1,
      b = 1,
      _ = 0,
      w = "",
      O = a,
      m = i,
      S = n,
      C = w;
    g;

  )
    switch (((v = _), (_ = $e()))) {
      case 40:
        if (v != 108 && ye(C, d - 1) == 58) {
          ms((C += te(Ja(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ja(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ow(v);
        break;
      case 92:
        C += kw(Ya() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            za(Cw(Sw($e(), Ya()), t, r), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * p:
        s[u++] = Ot(C) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (C = te(C, /\f/g, "")),
              h > 0 &&
                Ot(C) - d &&
                za(h > 32 ? od(C + ";", n, r, d - 1) : od(te(C, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            C += ";";
          default:
            if ((za((S = id(C, t, r, u, l, a, s, w, (O = []), (m = []), d)), i), _ === 123))
              if (l === 0) Xa(C, t, S, S, O, i, d, s, m);
              else
                switch (f === 99 && ye(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xa(
                      e,
                      S,
                      S,
                      n && za(id(e, S, S, 0, 0, a, s, w, a, (O = []), d), m),
                      a,
                      m,
                      d,
                      s,
                      n ? O : m,
                    );
                    break;
                  default:
                    Xa(C, S, S, S, [""], m, 0, s, m);
                }
        }
        ((u = l = h = 0), (p = b = 1), (w = C = ""), (d = o));
        break;
      case 58:
        ((d = 1 + Ot(C)), (h = v));
      default:
        if (p < 1) {
          if (_ == 123) --p;
          else if (_ == 125 && p++ == 0 && ww() == 125) continue;
        }
        switch (((C += Bi(_)), _ * p)) {
          case 38:
            b = l > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (Ot(C) - 1) * b), (b = 1));
            break;
          case 64:
            (Rt() === 45 && (C += Ja($e())), (f = Rt()), (l = d = Ot((w = C += Ew(Ya())))), _++);
            break;
          case 45:
            v === 45 && Ot(C) == 2 && (p = 0);
        }
    }
  return i;
}
function id(e, t, r, n, a, i, o, s, c, u, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], h = Hs(f), v = 0, p = 0, g = 0; v < n; ++v)
    for (var b = 0, _ = ha(e, d + 1, (d = hw((p = o[v])))), w = e; b < h; ++b)
      (w = yp(p > 0 ? f[b] + " " + _ : te(_, /&\f/g, f[b]))) && (c[g++] = w);
  return qi(e, t, r, a === 0 ? Vs : s, c, u, l);
}
function Cw(e, t, r) {
  return qi(e, t, r, gp, Bi(_w()), ha(e, 2, -2), 0);
}
function od(e, t, r, n) {
  return qi(e, t, r, Gs, ha(e, 0, n), ha(e, n + 1, -1), n);
}
function zr(e, t) {
  for (var r = "", n = Hs(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Pw(e, t, r, n) {
  switch (e.type) {
    case pw:
      if (e.children.length) break;
    case vw:
    case Gs:
      return (e.return = e.return || e.value);
    case gp:
      return "";
    case bp:
      return (e.return = e.value + "{" + zr(e.children, n) + "}");
    case Vs:
      e.value = e.props.join(",");
  }
  return Ot((r = zr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Rw(e) {
  var t = Hs(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function Aw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function jw(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Iw = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = Rt()), a === 38 && i === 12 && (r[n] = 1), !ga(i); ) $e();
    return xa(t, je);
  },
  Dw = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (ga(a)) {
        case 0:
          (a === 38 && Rt() === 12 && (r[n] = 1), (t[n] += Iw(je - 1, r, n)));
          break;
        case 2:
          t[n] += Ja(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Rt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Bi(a);
      }
    while ((a = $e()));
    return t;
  },
  Tw = function (t, r) {
    return wp(Dw(_p(t), r));
  },
  sd = new WeakMap(),
  Mw = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !sd.get(n)) && !a) {
        sd.set(t, !0);
        for (var i = [], o = Tw(r, i), s = n.props, c = 0, u = 0; c < o.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = i[c] ? o[c].replace(/&\f/g, s[l]) : s[l] + " " + o[c];
      }
    }
  },
  Lw = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Op(e, t) {
  switch (bw(e, t)) {
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
      return ee + e + bi + e + _e + e + e;
    case 6828:
    case 4268:
      return ee + e + _e + e + e;
    case 6165:
      return ee + e + _e + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + _e + "flex-$1$2") + e;
    case 5443:
      return ee + e + _e + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + _e + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + _e + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + _e + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + _e + te(e, "grow", "positive") + e;
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
          te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + _e + "flex-pack:$3"),
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
      if (Ot(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + bi + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~ms(e, "stretch") ? Op(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, Ot(e) - 3 - (~ms(e, "!important") && 10))) {
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
                _e +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return ee + e + _e + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + _e + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + _e + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + _e + e + e;
  }
  return e;
}
var Nw = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gs:
          t.return = Op(t.value, t.length);
          break;
        case bp:
          return zr([qn(t, { value: te(t.value, "@", "@" + ee) })], a);
        case Vs:
          if (t.length)
            return mw(t.props, function (i) {
              switch (yw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return zr([qn(t, { props: [te(i, /:(read-\w+)/, ":" + bi + "$1")] })], a);
                case "::placeholder":
                  return zr(
                    [
                      qn(t, { props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      qn(t, { props: [te(i, /:(plac\w+)/, ":" + bi + "$1")] }),
                      qn(t, { props: [te(i, /:(plac\w+)/, _e + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  $w = [Nw],
  Fw = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || $w,
      i = {},
      o,
      s = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var g = p.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          s.push(p);
        },
      ));
    var c,
      u = [Mw, Lw];
    {
      var l,
        d = [
          Pw,
          Aw(function (p) {
            l.insert(p);
          }),
        ],
        f = Rw(u.concat(a, d)),
        h = function (g) {
          return zr(xw(g), f);
        };
      c = function (g, b, _, w) {
        ((l = _), h(g ? g + "{" + b.styles + "}" : b.styles), w && (v.inserted[b.name] = !0));
      };
    }
    var v = {
      key: r,
      sheet: new fw({
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
      insert: c,
    };
    return (v.sheet.hydrate(s), v);
  },
  zo = { exports: {} },
  re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function Bw() {
  if (cd) return re;
  cd = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    c = e ? Symbol.for("react.async_mode") : 60111,
    u = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    h = e ? Symbol.for("react.memo") : 60115,
    v = e ? Symbol.for("react.lazy") : 60116,
    p = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    _ = e ? Symbol.for("react.scope") : 60119;
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (((m = m.type), m)) {
            case c:
            case u:
            case n:
            case i:
            case a:
            case d:
              return m;
            default:
              switch (((m = m && m.$$typeof), m)) {
                case s:
                case l:
                case v:
                case h:
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
    return w(m) === u;
  }
  return (
    (re.AsyncMode = c),
    (re.ConcurrentMode = u),
    (re.ContextConsumer = s),
    (re.ContextProvider = o),
    (re.Element = t),
    (re.ForwardRef = l),
    (re.Fragment = n),
    (re.Lazy = v),
    (re.Memo = h),
    (re.Portal = r),
    (re.Profiler = i),
    (re.StrictMode = a),
    (re.Suspense = d),
    (re.isAsyncMode = function (m) {
      return O(m) || w(m) === c;
    }),
    (re.isConcurrentMode = O),
    (re.isContextConsumer = function (m) {
      return w(m) === s;
    }),
    (re.isContextProvider = function (m) {
      return w(m) === o;
    }),
    (re.isElement = function (m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }),
    (re.isForwardRef = function (m) {
      return w(m) === l;
    }),
    (re.isFragment = function (m) {
      return w(m) === n;
    }),
    (re.isLazy = function (m) {
      return w(m) === v;
    }),
    (re.isMemo = function (m) {
      return w(m) === h;
    }),
    (re.isPortal = function (m) {
      return w(m) === r;
    }),
    (re.isProfiler = function (m) {
      return w(m) === i;
    }),
    (re.isStrictMode = function (m) {
      return w(m) === a;
    }),
    (re.isSuspense = function (m) {
      return w(m) === d;
    }),
    (re.isValidElementType = function (m) {
      return (
        typeof m == "string" ||
        typeof m == "function" ||
        m === n ||
        m === u ||
        m === i ||
        m === a ||
        m === d ||
        m === f ||
        (typeof m == "object" &&
          m !== null &&
          (m.$$typeof === v ||
            m.$$typeof === h ||
            m.$$typeof === o ||
            m.$$typeof === s ||
            m.$$typeof === l ||
            m.$$typeof === g ||
            m.$$typeof === b ||
            m.$$typeof === _ ||
            m.$$typeof === p))
      );
    }),
    (re.typeOf = w),
    re
  );
}
var ud;
function zw() {
  return (ud || ((ud = 1), (zo.exports = Bw())), zo.exports);
}
var qo, ld;
function qw() {
  if (ld) return qo;
  ld = 1;
  var e = zw(),
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
  var s = Object.defineProperty,
    c = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function h(v, p, g) {
    if (typeof p != "string") {
      if (f) {
        var b = d(p);
        b && b !== f && h(v, b, g);
      }
      var _ = c(p);
      u && (_ = _.concat(u(p)));
      for (var w = o(v), O = o(p), m = 0; m < _.length; ++m) {
        var S = _[m];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var C = l(p, S);
          try {
            s(v, S, C);
          } catch {}
        }
      }
    }
    return v;
  }
  return ((qo = h), qo);
}
qw();
var Uw = !0;
function kp(e, t, r) {
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
    (n === !1 || Uw === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Sp = function (t, r, n) {
    Ws(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Vw(e) {
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
var Gw = {
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
  Hw = /[A-Z]|^ms/g,
  Ww = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ep = function (t) {
    return t.charCodeAt(1) === 45;
  },
  dd = function (t) {
    return t != null && typeof t != "boolean";
  },
  Uo = jw(function (e) {
    return Ep(e) ? e : e.replace(Hw, "-$&").toLowerCase();
  }),
  fd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Ww, function (n, a, i) {
            return ((kt = { name: a, styles: i, next: kt }), a);
          });
    }
    return Gw[t] !== 1 && !Ep(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function ba(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((kt = { name: a.name, styles: a.styles, next: kt }), a.name);
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((kt = { name: o.name, styles: o.styles, next: kt }), (o = o.next));
        var s = i.styles + ";";
        return s;
      }
      return Kw(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = kt,
          u = r(e);
        return ((kt = c), ba(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Kw(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += ba(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : dd(s) && (n += Uo(i) + ":" + fd(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var c = 0; c < o.length; c++) dd(o[c]) && (n += Uo(i) + ":" + fd(i, o[c]) + ";");
      else {
        var u = ba(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Uo(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var vd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  kt;
function Ks(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  kt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += ba(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += ba(r, t, e[s])), n)) {
      var c = i;
      a += c[s];
    }
  vd.lastIndex = 0;
  for (var u = "", l; (l = vd.exec(a)) !== null; ) u += "-" + l[1];
  var d = Vw(a) + u;
  return { name: d, styles: a, next: kt };
}
var Yw = function (t) {
    return t();
  },
  Jw = _u.useInsertionEffect ? _u.useInsertionEffect : !1,
  xp = Jw || Yw,
  Cp = y.createContext(typeof HTMLElement < "u" ? Fw({ key: "css" }) : null);
Cp.Provider;
var Pp = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Cp);
      return t(r, a, n);
    });
  },
  Rp = y.createContext({}),
  Ys = {}.hasOwnProperty,
  ws = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Xw = function (t, r) {
    var n = {};
    for (var a in r) Ys.call(r, a) && (n[a] = r[a]);
    return ((n[ws] = t), n);
  },
  Qw = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ws(r, n, a),
      xp(function () {
        return Sp(r, n, a);
      }),
      null
    );
  },
  Zw = Pp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ws],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = kp(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Ks(i, void 0, y.useContext(Rp));
    o += t.key + "-" + s.name;
    var c = {};
    for (var u in e) Ys.call(e, u) && u !== "css" && u !== ws && (c[u] = e[u]);
    return (
      (c.className = o),
      r && (c.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(Qw, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, c),
      )
    );
  }),
  e1 = Zw,
  Ut = function (t, r) {
    var n = arguments;
    if (r == null || !Ys.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = e1), (i[1] = Xw(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ut || (Ut = {}));
function Tt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ks(t);
}
var t1 = function e(t) {
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
function r1(e, t, r) {
  var n = [],
    a = kp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var n1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      xp(function () {
        for (var a = 0; a < n.length; a++) Sp(r, n[a], !1);
      }),
      null
    );
  },
  a1 = Pp(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = Ks(u, t.registered);
        return (r.push(d), Ws(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return r1(t.registered, n, t1(u));
      },
      i = { css: n, cx: a, theme: y.useContext(Rp) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(n1, { cache: t, serializedArr: r }),
      o,
    );
  });
function i1(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Ap = 2,
  Os = Tt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Ap,
  }),
  ks = Tt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Ap,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  o1 = Tt({
    "&:focus": Os,
    "&:focus-visible": Os,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  s1 = Tt({
    "&:focus": ks,
    "&:focus-visible": ks,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  jp = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? ks : Os,
      i = r ? s1 : o1,
      o = typeof n > "u" ? i : n === "on" && a;
    return Ut(a1, null, function (s) {
      var c = s.css,
        u = s.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: u([c(o), t.props.className]) }) : t,
      );
    });
  });
jp.displayName = "FocusRing";
function Ft(e) {
  (e.preventDefault(), e.stopPropagation());
}
var c1 = 9;
function pd(e) {
  e.keyCode !== c1 && Ft(e);
}
var u1 = {
    onMouseDownCapture: Ft,
    onMouseUpCapture: Ft,
    onKeyDownCapture: pd,
    onKeyUpCapture: pd,
    onTouchStartCapture: Ft,
    onTouchEndCapture: Ft,
    onPointerDownCapture: Ft,
    onPointerUpCapture: Ft,
    onClickCapture: Ft,
    onClick: Ft,
  },
  l1 = {};
function d1(e) {
  var t = e.isInteractive;
  return t ? l1 : u1;
}
var hd = "rgba(179, 212, 255, 0.6)",
  gd = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(In, ")"),
          dark: "var(--ds-background-neutral, ".concat(Dn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(bs, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Rl, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(hd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Dr, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(hi, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(xl, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Cl, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(El, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Sl, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Sl, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(kl, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(kl, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Ir, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ir, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ir, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(Ol, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Ol, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(wl, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(wl, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(jr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
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
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(bs, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Rl, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(hd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(He, ")"),
          dark: "var(--ds-background-selected, ".concat(Tr, ")"),
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
          light: "var(--ds-text, ".concat(pa, ")"),
          dark: "var(--ds-text, ".concat(st, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Dr, ")"),
          dark: "var(--ds-text, ".concat(Dr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Bt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Tn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(dr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(dr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(dr, ")"),
          dark: "var(--ds-text-selected, ".concat(dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(dr, ")"),
          dark: "var(--ds-text-selected, ".concat(dr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Bt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Bt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Bt, ")"),
          dark: "var(--ds-text-selected, ".concat(Bt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Bt, ")"),
          dark: "var(--ds-text-selected, ".concat(Bt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Dr, ")"),
          dark: "var(--ds-link, ".concat(hi, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(xl, ")"),
          dark: "var(--ds-link, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Cl, ")"),
          dark: "var(--ds-link-pressed, ".concat(El, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(No, ")"),
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
          light: "var(--ds-text, ".concat(pa, ")"),
          dark: "var(--ds-text, ".concat(st, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Dr, ")"),
          dark: "var(--ds-text, ".concat(Dr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(No, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(s_, ")"),
          dark: "var(--ds-text-subtle, ".concat(st, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(o_, ")"),
          dark: "var(--ds-text-subtle, ".concat(Qv, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(c_, ")"),
          dark: "var(--ds-text, ".concat(u_, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(No, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(xe, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
    },
  };
function bd(e, t) {
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
      ? bd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qt = 8,
  Vo = ["default", "primary", "danger", "warning"],
  Ss = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  f1 = { default: Ss.default, compact: Ss.compact, none: "inherit" },
  v1 = {
    default: "0 ".concat(Qt + Qt / 4, "px"),
    compact: "0 ".concat(Qt + Qt / 4, "px"),
    none: "0",
  },
  p1 = { compact: "0 ".concat(Qt / 4, "px"), default: "0 ".concat(Qt / 4, "px"), none: "0" },
  h1 = { default: "middle", compact: "middle", none: "baseline" },
  Ip = { content: "0 ".concat(Qt / 4, "px"), icon: "0 ".concat(Qt / 4, "px") },
  Dp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  g1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ie(ie({}, Dp), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  b1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  y1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  m1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  _1 = {
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
  w1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  O1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  k1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ie(
      ie({}, Dp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  yd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function md(e) {
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
    background: md({ group: gd.background[t], key: r, mode: n }),
    color: "".concat(md({ group: gd.color[t], key: r, mode: n }), " !important"),
  };
}
function S1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    s = Lr({ appearance: t, key: a ? "selected" : "default", mode: n });
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
          !et("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: Ss[r],
          lineHeight: f1[r],
          padding: o ? p1[r] : v1[r],
          verticalAlign: h1[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !et("platform-component-visual-refresh") &&
          ie(
            ie(
              {
                "&:visited": ie({}, s),
                "&:hover": ie(
                  ie({}, Lr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ie(
                  ie({}, Lr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ie(
                  ie({}, Lr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ie(
                  ie({}, Lr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              yd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ie({}, Lr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      et("platform-component-visual-refresh") &&
        (a
          ? k1
          : ie(
              ie(
                ie(
                  ie(
                    ie(
                      ie(
                        ie(ie({}, t === "default" && g1), t === "primary" && b1),
                        t === "link" && y1,
                      ),
                      t === "subtle" && m1,
                    ),
                    t === "subtle-link" && _1,
                  ),
                  t === "warning" && w1,
                ),
                t === "danger" && O1,
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
              yd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function _d(e) {
  var t = e.spacing;
  return Tt({
    display: "flex",
    margin: t === "none" ? 0 : Ip.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function E1(e) {
  var t = e.spacing;
  return Tt({
    margin: t === "none" ? 0 : Ip.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function x1(e) {
  var t = e.hasOverlay;
  return Tt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var C1 = {
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
    return t && y.isValidElement(t) && t.type === hp;
  },
  P1 = [
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
  R1 = { "> *": { pointerEvents: "none" } },
  A1 = Tt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  j1 = Tt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  wd = function (t, r) {
    return !t || Js(t) ? null : r;
  },
  I1 = function (t, r) {
    return Js(t) ? t : t ? Ut("span", { css: r }, t) : null;
  },
  D1 = k.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      i = a === void 0 ? "default" : a,
      o = t.autoFocus,
      s = o === void 0 ? !1 : o,
      c = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      f = t.component,
      h = f === void 0 ? (d ? "a" : "button") : f,
      v = t.iconAfter,
      p = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      _ = b === void 0 ? !1 : b,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      m = t.onBlur,
      S = t.onClick,
      C = S === void 0 ? we : S,
      I = t.onFocus,
      M = t.onMouseDown,
      P = M === void 0 ? we : M,
      T = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      F = B === void 0 ? "default" : B,
      U = t.tabIndex,
      Z = U === void 0 ? 0 : U,
      z = t.type,
      V = z === void 0 ? (d ? void 0 : "button") : z,
      J = t.testId,
      j = ne(t, P1),
      q = y.useRef(),
      he = y.useCallback(
        function (ce) {
          if (((q.current = ce), r != null)) {
            if (typeof r == "function") {
              r(ce);
              return;
            }
            r.current = ce;
          }
        },
        [q, r],
      );
    i1(q, s);
    var W = y.useContext(qs),
      be = y.useCallback(
        function (ce, bt) {
          (W && W.tracePress(g, ce.timeStamp), C(ce, bt));
        },
        [C, W, g],
      ),
      de = va({
        fn: be,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.4.8",
        analyticsData: n,
      }),
      fe = y.useCallback(
        function (ce) {
          (ce.preventDefault(), P(ce));
        },
        [P],
      );
    y.useEffect(
      function () {
        var ce = q.current;
        _ && ce && ce === document.activeElement && ce.blur();
      },
      [_],
    );
    var ge = !!T,
      ze = Tt(x1({ hasOverlay: ge })),
      me = !_ && !ge,
      at = {};
    return (
      (O || _ || i === "warning") &&
        (at = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || _
                ? "var(--ds-icon-subtle, ".concat(pa, ")")
                : "var(--ds-icon-warning-inverse, ".concat(pa, ")"),
              " !important",
            ),
          },
        }),
      Ut(
        jp,
        null,
        Ut(
          h,
          Y(
            {},
            j,
            {
              ref: he,
              className: l,
              css: [c, me ? null : R1],
              "data-has-overlay": ge ? !0 : void 0,
              "data-testid": J,
              disabled: _,
              href: me ? d : void 0,
              onBlur: m,
              onClick: de,
              onFocus: I,
              onMouseDown: fe,
              tabIndex: _ ? -1 : Z,
              type: V,
            },
            d1({ isInteractive: me }),
          ),
          p ? Ut("span", { css: [ze, _d({ spacing: F }), wd(u, A1)] }, p) : null,
          I1(u, [ze, E1({ spacing: F })]),
          v ? Ut("span", { css: [ze, _d({ spacing: F }), wd(u, j1)] }, v) : null,
          T ? Ut("span", { css: [C1, at] }, T) : null,
        ),
      )
    );
  });
function T1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Js(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var M1 = [
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
  Od = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Xs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        f = t.onMouseUp,
        h = f === void 0 ? we : f,
        v = t.shouldFitContainer,
        p = v === void 0 ? !1 : v,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        _ = ne(t, M1),
        w = uw(),
        O = w.mode,
        m = T1({ children: i, iconBefore: o, iconAfter: s }),
        S = y.useState(!1),
        C = Q(S, 2),
        I = C[0],
        M = C[1],
        P = y.useCallback(
          function (F) {
            (d(F), Od && M(!0));
          },
          [d, M],
        ),
        T = y.useCallback(
          function (F) {
            (h(F), Od && M(!1));
          },
          [h, M],
        ),
        B = y.useMemo(
          function () {
            return S1({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: u,
              shouldFitContainer: p,
              isOnlySingleIcon: m,
            });
          },
          [a, b, O, u, p, m],
        );
      return k.createElement(
        D1,
        Y({}, _, {
          ref: r,
          appearance: a,
          buttonCss: B,
          children: i,
          "data-firefox-is-active": I ? !0 : void 0,
          iconAfter: s,
          iconBefore: o,
          isSelected: u,
          onMouseDown: P,
          onMouseUp: T,
          spacing: b,
        }),
      );
    }),
  );
Xs.displayName = "Button";
function kd(e) {
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
function L1(e) {
  return k.createElement(Xs, Y({}, e, { appearance: "subtle" }));
}
var N1 = { container: "_1e0c1txw _kqswh2mm" };
function $1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    $i,
    { as: "li", testId: r, key: t, xcss: N1.container, paddingInline: "space.100" },
    k.createElement(
      F0,
      { testId: r && "".concat(r, "-text") },
      k.createElement(hp, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Sd = {},
  Ed =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function F1(e, t) {
  return !!(e === t || (Ed(e) && Ed(t)));
}
function B1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!F1(e[r], t[r])) return !1;
  return !0;
}
function z1(e, t) {
  t === void 0 && (t = B1);
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
var q1 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    s = n.transform,
    c = t.length,
    u = c > i,
    l = u && i - 4 < r,
    d = u && r < c - i + 3,
    f = z1(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(g, b).map(function (_, w) {
        return s(_, g + w, a);
      });
    });
  if (!u) return f(0, c);
  if (l && !d) {
    var h = i - 2;
    return [].concat(
      Me(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - h })],
      Me(f(c - h)),
    );
  }
  if (!l && d) {
    var v = i - 2;
    return [].concat(
      Me(f(0, v)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: v + 1, to: c - 1 })],
      Me(f(c - 1)),
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
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Me(f(c - 1)),
  );
};
function xd(e, t) {
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
function U1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Es = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  V1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function Cd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? a0 : u0;
  return k.createElement(
    $i,
    { as: "span", xcss: Es.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function G1(e, t) {
  var r = e.components,
    n = r === void 0 ? Sd : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
    o = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? "pagination" : s,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    h = e.nextLabel,
    v = h === void 0 ? "next" : h,
    p = e.style,
    g = p === void 0 ? Sd : p,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    m = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    I = C === void 0 ? $1 : C,
    M = e.analyticsContext,
    P = e.testId,
    T = e.isDisabled,
    B = G_(o, function () {
      return i || 0;
    }),
    F = Q(B, 2),
    U = F[0],
    Z = F[1],
    z = va(
      U1(
        {
          fn: function (j, q) {
            var he = j.event,
              W = j.selectedPageIndex;
            (o === void 0 && Z(W), O && O(he, m[W], q));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: M,
        },
        V1,
      ),
    ),
    V = function (j, q, he) {
      var W = m[U],
        be = "".concat(l, " ").concat(S ? S(j, q) : j),
        de = j === W;
      return k.createElement(
        Wa,
        { as: "li", xcss: Es.paginationMenuItem, key: "page-".concat(S ? S(j, q) : q) },
        k.createElement(
          L1,
          {
            component: n.Page,
            onClick: function (ge) {
              return z({ event: ge, selectedPageIndex: q });
            },
            "aria-current": de ? "page" : void 0,
            "aria-label": be,
            isSelected: de,
            isDisabled: T,
            page: j,
            testId:
              he &&
              ""
                .concat(he, "--")
                .concat(de ? "current-" : "", "page-")
                .concat(q),
          },
          S ? S(j, q) : j,
        ),
      );
    };
  return k.createElement(
    $i,
    { testId: P, style: g, ref: t, "aria-label": c, as: "nav" },
    k.createElement(
      Wa,
      { space: "space.0", alignBlock: "center" },
      k.createElement(kd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (j) {
          return z({ event: j, selectedPageIndex: U - 1 });
        },
        isDisabled: T || U === 0,
        iconBefore: k.createElement(Cd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      k.createElement(
        Wa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Es.paginationMenu },
        q1(m, U, { max: _, ellipsis: I, transform: V }, P),
      ),
      k.createElement(kd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (j) {
          return z({ event: j, selectedPageIndex: U + 1 });
        },
        isDisabled: T || U === m.length - 1,
        iconBefore: k.createElement(Cd, { chevronDirection: "right" }),
        "aria-label": v,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var H1 = y.memo(y.forwardRef(G1));
function W1(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Tp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Tp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tp = function () {
    return !!e;
  })();
}
var K1 = (function (e) {
    function t() {
      var r;
      ue(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = W1(this, t, [].concat(a))),
        x(r, "onChange", function (o, s, c) {
          r.props.onChange(s, c);
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
              c = n.testId,
              u = n.isDisabled,
              l = Me(Array(a)).map(function (f, h) {
                return h + 1;
              }),
              d = o - 1;
            return k.createElement(H1, {
              selectedIndex: d,
              isDisabled: u,
              label: s?.label,
              nextLabel: s?.next,
              previousLabel: s?.prev,
              pageLabel: s?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: c && "".concat(c, "--pagination"),
            });
          },
        },
      ])
    );
  })(k.Component),
  Y1 = ["isRanking", "testId"],
  J1 = [
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
function Pd(e, t) {
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
      ? Pd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rd = "--local-dynamic-table-text-color",
  X1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ne(t, Y1);
    return y.createElement(
      "thead",
      Y({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Mp = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      i = e.sortOrder,
      o = e.isFixedSize,
      s = e.shouldTruncate,
      c = e.onClick,
      u = e.style,
      l = e.testId,
      d = ne(e, J1),
      f = Un(
        Un(Un({}, u), r && ep({ width: r })),
        {},
        x({}, Rd, "var(--ds-text-subtlest, ".concat(Pl, ")")),
      ),
      h = i === yr,
      v = i === vi,
      p = function () {
        if (h) return "ascending";
        if (v) return "descending";
      },
      g = n ? "th" : "td",
      b = et("platform-component-visual-refresh");
    return y.createElement(
      g,
      Y({ "aria-sort": p(), onClick: b ? void 0 : c, ref: t, "data-testid": l }, d, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          b
            ? "_11c8dcr7 _179r1tpy _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygb1x42"
            : "_11c8dcr7 _179r1tpy _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygb1x42",
          !b && c && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          o && s && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
          !b &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !b && h && "_c77k2wk4 _142s94yt",
          !b && v && "_f4732wk4 _17x894yt",
        ]),
        style: Un(
          Un({}, f),
          {},
          {
            "--_mwqor1": Ke(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(gs, ")"),
              ),
            ),
            "--_17ckjys": Ke("var(--ds-text-subtle, ".concat("var(".concat(Rd, ")"), ")")),
            "--_z3oznn": Ke(
              "solid ".concat(
                "var(--ds-border-width-focused, 2px)",
                " ",
                "var(--ds-border-focused, ".concat(hi, ")"),
              ),
            ),
            "--_6j4ewu": Ke("var(--ds-background-neutral-hovered, ".concat(bs, ")")),
            "--_1rdacuj": Ke("3px solid ".concat("var(--ds-icon-disabled, ".concat(gs, ")"))),
            "--_1qca9zt": Ke("3px solid ".concat("var(--ds-icon-subtle, ".concat(Pl, ")"))),
          },
        ),
      }),
      n,
    );
  });
function Q1(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, Lp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lp = function () {
    return !!e;
  })();
}
function Np(e) {
  return (function (t) {
    function r() {
      var n;
      ue(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = Q1(this, r, [].concat(i))),
        x(n, "state", { refWidth: 0, refHeight: 0 }),
        x(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        x(n, "updateDimensions", function () {
          if (n.ref) {
            var s = n.ref.getBoundingClientRect(),
              c = s.width,
              u = s.height;
            (c !== n.state.refWidth || u !== n.state.refHeight) &&
              n.setState({ refWidth: c, refHeight: u });
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
  Ad;
function Z1() {
  if (Ad) return Vn;
  ((Ad = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = r(vt()),
    t = r(Ni);
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
var eO = Z1();
const tO = tr(eO);
var Gn = {},
  jd;
function rO() {
  if (jd) return Gn;
  ((jd = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(vt()),
    t = r(Ni);
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
var nO = rO();
const aO = tr(nO);
var iO = "Escape";
function oO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== iO || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!(r && et("platform_only_attach_escape_handler_on_view")))
        return Fi.bindAll(
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
var sO = y.createContext(null),
  cO = y.createContext(null);
function uO() {
  var e = y.useContext(cO);
  return e;
}
function lO(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(sO),
    a = uO();
  y.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Xn = { none: 0, small: 100, medium: 350, large: 700 },
  Go = 0.5,
  dO = { none: Xn.none, small: Xn.small * Go, medium: Xn.medium * Go, large: Xn.large * Go },
  fO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  vO = function () {
    if (!fO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  pO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  hO = function () {
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
      }, pO(t)),
      y.useCallback(function (n, a) {
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
          o[s - 2] = arguments[s];
        var c = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (u) {
                return u !== c;
              })),
                n());
            },
            a,
          ].concat(o),
        );
        r.current.push(c);
      }, [])
    );
  },
  $p = { appear: !0, isExiting: !1 },
  Fp = y.createContext($p),
  Id = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $p;
    return k.createElement(Fp.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Dd = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  gO = function (t, r) {
    for (var n = r.concat([]), a = bO(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  bO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  yO = function (t, r) {
    for (
      var n = new Set(
          t.map(function (c) {
            return c.key;
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
  Bp = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = y.useState([null, n]),
      o = Q(i, 2),
      s = o[0],
      c = o[1],
      u = y.useState([]),
      l = Q(u, 2),
      d = l[0],
      f = l[1],
      h = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      v = Q(h, 2),
      p = v[0],
      g = v[1];
    if (
      (y.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = Q(s, 2),
      _ = b[0],
      w = b[1],
      O = Dd(_),
      m = Dd(w);
    w !== n && c([w, n]);
    var S = yO(m, O),
      C = !!S.size,
      I = m;
    if ((C && (I = gO(m, O)), a))
      if (d.length) I = d;
      else {
        var M = I.filter(function (P) {
          return S.has(P.key);
        });
        M.length && f(M);
      }
    return (
      S.size
        ? (I = I.map(function (P) {
            var T = S.has(P.key);
            return Id(P, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(P.key), S.size === 0 && (c([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (I = I.map(function (P) {
            return Id(P, p);
          })),
      I
    );
  }),
  mO = function () {
    return y.useContext(Fp);
  };
Bp.displayName = "ExitingPersistence";
function _O() {
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
var wO = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  OO = function () {
    var t = _O(),
      r = y.useContext(wO);
    return r(t);
  },
  kO = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      i = a === void 0 ? n : a,
      o = t.enteringAnimation,
      s = t.exitingAnimation,
      c = s === void 0 ? o : s,
      u = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      h = OO(),
      v = mO(),
      p = v.isExiting,
      g = v.onFinish,
      b = v.appear,
      _ = hO(),
      w = u || !h.isReady,
      O = p ? 0 : h.delay,
      m = p ? "exiting" : "entering",
      S = y.useState(b),
      C = Q(S, 2),
      I = C[0],
      M = C[1];
    return (
      y.useEffect(
        function () {
          var P = !1;
          if (!w) {
            if (!b) {
              l && l(m);
              return;
            }
            var T = function () {
              (m === "exiting" && g?.(), P || M(!1), l?.(m));
            };
            if (vO()) {
              T();
              return;
            }
            return (
              M(!0),
              _(T, p ? dO[f] : Xn[f] + O),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, m, p, f, O, w, _],
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
                ((!p && o === "fade-in") || (p && c === "fade-in")) && R(["_j7hq1cgr"]),
                ((!p && o === "fade-out") || (p && c === "fade-out")) && R(["_j7hq1lln"]),
                ((!p && o === "zoom-in") || (p && c === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!p && o === "zoom-out") || (p && c === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!p && o === "slide-in-from-top") || (p && c === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!p && o === "slide-out-from-top") || (p && c === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!p && o === "slide-in-from-right") || (p && c === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!p && o === "slide-out-from-right") || (p && c === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!p && o === "slide-in-from-bottom") || (p && c === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!p && o === "slide-out-from-bottom") || (p && c === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!p && o === "slide-in-from-left") || (p && c === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!p && o === "slide-out-from-left") || (p && c === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!p && o === "fade-in-from-top") || (p && c === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!p && o === "fade-out-from-top") || (p && c === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!p && o === "fade-in-from-left") || (p && c === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!p && o === "fade-out-from-left") || (p && c === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!p && o === "fade-in-from-bottom") || (p && c === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!p && o === "fade-out-from-bottom") || (p && c === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!p && o === "fade-in-from-right") || (p && c === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!p && o === "fade-out-from-right") || (p && c === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!p && o === "fade-in-from-top-constant") ||
                  (p && c === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!p && o === "fade-out-from-top-constant") ||
                  (p && c === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!p && o === "fade-in-from-left-constant") ||
                  (p && c === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!p && o === "fade-out-from-left-constant") ||
                  (p && c === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!p && o === "fade-in-from-bottom-constant") ||
                  (p && c === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!p && o === "fade-out-from-bottom-constant") ||
                  (p && c === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!p && o === "fade-in-from-right-constant") ||
                  (p && c === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!p && o === "fade-out-from-right-constant") ||
                  (p && c === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        m,
      )
    );
  },
  SO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  EO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? SO[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      kO,
      {
        duration: a,
        enteringAnimation: i
          ? "fade-in-from-".concat(i).concat(c === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  xO = y.createContext();
y.createContext();
var CO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  PO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  RO = function (t, r) {
    if (typeof t == "function") return PO(t, r);
    t != null && (t.current = r);
  },
  Td = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Md =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Pe = "top",
  rt = "bottom",
  nt = "right",
  Re = "left",
  Qs = "auto",
  Ca = [Pe, rt, nt, Re],
  Gr = "start",
  ya = "end",
  AO = "clippingParents",
  zp = "viewport",
  Wn = "popper",
  jO = "reference",
  Ld = Ca.reduce(function (e, t) {
    return e.concat([t + "-" + Gr, t + "-" + ya]);
  }, []),
  qp = [].concat(Ca, [Qs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Gr, t + "-" + ya]);
  }, []),
  IO = "beforeRead",
  DO = "read",
  TO = "afterRead",
  MO = "beforeMain",
  LO = "main",
  NO = "afterMain",
  $O = "beforeWrite",
  FO = "write",
  BO = "afterWrite",
  zO = [IO, DO, TO, MO, LO, NO, $O, FO, BO];
function It(e) {
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
function mr(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function tt(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !tt(i) ||
      !It(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
      }));
  });
}
function UO(e) {
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
          s = o.reduce(function (c, u) {
            return ((c[u] = ""), c);
          }, {});
        !tt(a) ||
          !It(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const VO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qO,
  effect: UO,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var vr = Math.max,
  yi = Math.min,
  Hr = Math.round;
function xs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Up() {
  return !/^((?!chrome|android).)*safari/i.test(xs());
}
function Wr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    tt(e) &&
    ((a = (e.offsetWidth > 0 && Hr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Hr(n.height) / e.offsetHeight) || 1));
  var o = mr(e) ? Fe(e) : window,
    s = o.visualViewport,
    c = !Up() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: u + d, bottom: l + f, left: u, x: u, y: l };
}
function ec(e) {
  var t = Wr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Vp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Zs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ht(e) {
  return Fe(e).getComputedStyle(e);
}
function GO(e) {
  return ["table", "td", "th"].indexOf(It(e)) >= 0;
}
function nr(e) {
  return ((mr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ui(e) {
  return It(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zs(e) ? e.host : null) || nr(e);
}
function Nd(e) {
  return !tt(e) || Ht(e).position === "fixed" ? null : e.offsetParent;
}
function HO(e) {
  var t = /firefox/i.test(xs()),
    r = /Trident/i.test(xs());
  if (r && tt(e)) {
    var n = Ht(e);
    if (n.position === "fixed") return null;
  }
  var a = Ui(e);
  for (Zs(a) && (a = a.host); tt(a) && ["html", "body"].indexOf(It(a)) < 0; ) {
    var i = Ht(a);
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
function Pa(e) {
  for (var t = Fe(e), r = Nd(e); r && GO(r) && Ht(r).position === "static"; ) r = Nd(r);
  return r && (It(r) === "html" || (It(r) === "body" && Ht(r).position === "static"))
    ? t
    : r || HO(e) || t;
}
function tc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function na(e, t, r) {
  return vr(e, yi(t, r));
}
function WO(e, t, r) {
  var n = na(e, t, r);
  return n > r ? r : n;
}
function Gp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hp(e) {
  return Object.assign({}, Gp(), e);
}
function Wp(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var KO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Hp(typeof t != "number" ? t : Wp(t, Ca))
  );
};
function YO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = At(r.placement),
    c = tc(s),
    u = [Re, nt].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!i || !o)) {
    var d = KO(a.padding, r),
      f = ec(i),
      h = c === "y" ? Pe : Re,
      v = c === "y" ? rt : nt,
      p = r.rects.reference[l] + r.rects.reference[c] - o[c] - r.rects.popper[l],
      g = o[c] - r.rects.reference[c],
      b = Pa(i),
      _ = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = p / 2 - g / 2,
      O = d[h],
      m = _ - f[l] - d[v],
      S = _ / 2 - f[l] / 2 + w,
      C = na(O, S, m),
      I = c;
    r.modifiersData[n] = ((t = {}), (t[I] = C), (t.centerOffset = C - S), t);
  }
}
function JO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Vp(t.elements.popper, a) && (t.elements.arrow = a)));
}
const XO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: YO,
  effect: JO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Kr(e) {
  return e.split("-")[1];
}
var QO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ZO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Hr(r * a) / a || 0, y: Hr(n * a) / a || 0 };
}
function $d(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
    u = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    h = f === void 0 ? 0 : f,
    v = o.y,
    p = v === void 0 ? 0 : v,
    g = typeof l == "function" ? l({ x: h, y: p }) : { x: h, y: p };
  ((h = g.x), (p = g.y));
  var b = o.hasOwnProperty("x"),
    _ = o.hasOwnProperty("y"),
    w = Re,
    O = Pe,
    m = window;
  if (u) {
    var S = Pa(r),
      C = "clientHeight",
      I = "clientWidth";
    if (
      (S === Fe(r) &&
        ((S = nr(r)),
        Ht(S).position !== "static" &&
          s === "absolute" &&
          ((C = "scrollHeight"), (I = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Re || a === nt) && i === ya))
    ) {
      O = rt;
      var M = d && S === m && m.visualViewport ? m.visualViewport.height : S[C];
      ((p -= M - n.height), (p *= c ? 1 : -1));
    }
    if (a === Re || ((a === Pe || a === rt) && i === ya)) {
      w = nt;
      var P = d && S === m && m.visualViewport ? m.visualViewport.width : S[I];
      ((h -= P - n.width), (h *= c ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, u && QO),
    B = l === !0 ? ZO({ x: h, y: p }, Fe(r)) : { x: h, y: p };
  if (((h = B.x), (p = B.y), c)) {
    var F;
    return Object.assign(
      {},
      T,
      ((F = {}),
      (F[O] = _ ? "0" : ""),
      (F[w] = b ? "0" : ""),
      (F.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + p + "px)"
          : "translate3d(" + h + "px, " + p + "px, 0)"),
      F),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = _ ? p + "px" : ""), (t[w] = b ? h + "px" : ""), (t.transform = ""), t),
  );
}
function ek(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    u = {
      placement: At(t.placement),
      variation: Kr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      $d(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: c,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        $d(
          Object.assign({}, u, {
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
const tk = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ek, data: {} };
var qa = { passive: !0 };
function rk(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    c = Fe(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, qa);
      }),
    s && c.addEventListener("resize", r.update, qa),
    function () {
      (i &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, qa);
        }),
        s && c.removeEventListener("resize", r.update, qa));
    }
  );
}
const nk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: rk,
  data: {},
};
var ak = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return ak[t];
  });
}
var ik = { start: "end", end: "start" };
function Fd(e) {
  return e.replace(/start|end/g, function (t) {
    return ik[t];
  });
}
function rc(e) {
  var t = Fe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function nc(e) {
  return Wr(nr(e)).left + rc(e).scrollLeft;
}
function ok(e, t) {
  var r = Fe(e),
    n = nr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var u = Up();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: i, height: o, x: s + nc(e), y: c };
}
function sk(e) {
  var t,
    r = nr(e),
    n = rc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = vr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = vr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + nc(e),
    c = -n.scrollTop;
  return (
    Ht(a || r).direction === "rtl" && (s += vr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: c }
  );
}
function ac(e) {
  var t = Ht(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Kp(e) {
  return ["html", "body", "#document"].indexOf(It(e)) >= 0
    ? e.ownerDocument.body
    : tt(e) && ac(e)
      ? e
      : Kp(Ui(e));
}
function aa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Kp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Fe(n),
    o = a ? [i].concat(i.visualViewport || [], ac(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(aa(Ui(o)));
}
function Cs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function ck(e, t) {
  var r = Wr(e, !1, t === "fixed");
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
function Bd(e, t, r) {
  return t === zp ? Cs(ok(e, r)) : mr(t) ? ck(t, r) : Cs(sk(nr(e)));
}
function uk(e) {
  var t = aa(Ui(e)),
    r = ["absolute", "fixed"].indexOf(Ht(e).position) >= 0,
    n = r && tt(e) ? Pa(e) : e;
  return mr(n)
    ? t.filter(function (a) {
        return mr(a) && Vp(a, n) && It(a) !== "body";
      })
    : [];
}
function lk(e, t, r, n) {
  var a = t === "clippingParents" ? uk(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (c, u) {
        var l = Bd(e, u, n);
        return (
          (c.top = vr(l.top, c.top)),
          (c.right = yi(l.right, c.right)),
          (c.bottom = yi(l.bottom, c.bottom)),
          (c.left = vr(l.left, c.left)),
          c
        );
      },
      Bd(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Yp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? At(n) : null,
    i = n ? Kr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case Pe:
      c = { x: o, y: t.y - r.height };
      break;
    case rt:
      c = { x: o, y: t.y + t.height };
      break;
    case nt:
      c = { x: t.x + t.width, y: s };
      break;
    case Re:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? tc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (i) {
      case Gr:
        c[u] = c[u] - (t[l] / 2 - r[l] / 2);
        break;
      case ya:
        c[u] = c[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return c;
}
function ma(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    c = s === void 0 ? AO : s,
    u = r.rootBoundary,
    l = u === void 0 ? zp : u,
    d = r.elementContext,
    f = d === void 0 ? Wn : d,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = Hp(typeof g != "number" ? g : Wp(g, Ca)),
    _ = f === Wn ? jO : Wn,
    w = e.rects.popper,
    O = e.elements[v ? _ : f],
    m = lk(mr(O) ? O : O.contextElement || nr(e.elements.popper), c, l, o),
    S = Wr(e.elements.reference),
    C = Yp({ reference: S, element: w, placement: a }),
    I = Cs(Object.assign({}, w, C)),
    M = f === Wn ? I : S,
    P = {
      top: m.top - M.top + b.top,
      bottom: M.bottom - m.bottom + b.bottom,
      left: m.left - M.left + b.left,
      right: M.right - m.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === Wn && T) {
    var B = T[a];
    Object.keys(P).forEach(function (F) {
      var U = [nt, rt].indexOf(F) >= 0 ? 1 : -1,
        Z = [Pe, rt].indexOf(F) >= 0 ? "y" : "x";
      P[F] += B[Z] * U;
    });
  }
  return P;
}
function dk(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? qp : c,
    l = Kr(n),
    d = l
      ? s
        ? Ld
        : Ld.filter(function (v) {
            return Kr(v) === l;
          })
      : Ca,
    f = d.filter(function (v) {
      return u.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (v, p) {
    return ((v[p] = ma(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[At(p)]), v);
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function fk(e) {
  if (At(e) === Qs) return [];
  var t = Qa(e);
  return [Fd(e), t, Fd(t)];
}
function vk(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        o = r.altAxis,
        s = o === void 0 ? !0 : o,
        c = r.fallbackPlacements,
        u = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        h = r.flipVariations,
        v = h === void 0 ? !0 : h,
        p = r.allowedAutoPlacements,
        g = t.options.placement,
        b = At(g),
        _ = b === g,
        w = c || (_ || !v ? [Qa(g)] : fk(g)),
        O = [g].concat(w).reduce(function (de, fe) {
          return de.concat(
            At(fe) === Qs
              ? dk(t, {
                  placement: fe,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: v,
                  allowedAutoPlacements: p,
                })
              : fe,
          );
        }, []),
        m = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        I = !0,
        M = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var T = O[P],
        B = At(T),
        F = Kr(T) === Gr,
        U = [Pe, rt].indexOf(B) >= 0,
        Z = U ? "width" : "height",
        z = ma(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: u }),
        V = U ? (F ? nt : Re) : F ? rt : Pe;
      m[Z] > S[Z] && (V = Qa(V));
      var J = Qa(V),
        j = [];
      if (
        (i && j.push(z[B] <= 0),
        s && j.push(z[V] <= 0, z[J] <= 0),
        j.every(function (de) {
          return de;
        }))
      ) {
        ((M = T), (I = !1));
        break;
      }
      C.set(T, j);
    }
    if (I)
      for (
        var q = v ? 3 : 1,
          he = function (fe) {
            var ge = O.find(function (ze) {
              var me = C.get(ze);
              if (me)
                return me.slice(0, fe).every(function (at) {
                  return at;
                });
            });
            if (ge) return ((M = ge), "break");
          },
          W = q;
        W > 0;
        W--
      ) {
        var be = he(W);
        if (be === "break") break;
      }
    t.placement !== M && ((t.modifiersData[n]._skip = !0), (t.placement = M), (t.reset = !0));
  }
}
const pk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vk,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function zd(e, t, r) {
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
function qd(e) {
  return [Pe, nt, rt, Re].some(function (t) {
    return e[t] >= 0;
  });
}
function hk(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = ma(t, { elementContext: "reference" }),
    s = ma(t, { altBoundary: !0 }),
    c = zd(o, n),
    u = zd(s, a, i),
    l = qd(c),
    d = qd(u);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const gk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hk,
};
function bk(e, t, r) {
  var n = At(e),
    a = [Re, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Re, nt].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function yk(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = qp.reduce(function (l, d) {
      return ((l[d] = bk(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = o));
}
const mk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: yk };
function _k(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Yp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const wk = { name: "popperOffsets", enabled: !0, phase: "read", fn: _k, data: {} };
function Ok(e) {
  return e === "x" ? "y" : "x";
}
function kk(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    o = r.altAxis,
    s = o === void 0 ? !1 : o,
    c = r.boundary,
    u = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    h = f === void 0 ? !0 : f,
    v = r.tetherOffset,
    p = v === void 0 ? 0 : v,
    g = ma(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
    b = At(t.placement),
    _ = Kr(t.placement),
    w = !_,
    O = tc(b),
    m = Ok(O),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    I = t.rects.popper,
    M = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p,
    P =
      typeof M == "number"
        ? { mainAxis: M, altAxis: M }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var F,
        U = O === "y" ? Pe : Re,
        Z = O === "y" ? rt : nt,
        z = O === "y" ? "height" : "width",
        V = S[O],
        J = V + g[U],
        j = V - g[Z],
        q = h ? -I[z] / 2 : 0,
        he = _ === Gr ? C[z] : I[z],
        W = _ === Gr ? -I[z] : -C[z],
        be = t.elements.arrow,
        de = h && be ? ec(be) : { width: 0, height: 0 },
        fe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Gp(),
        ge = fe[U],
        ze = fe[Z],
        me = na(0, C[z], de[z]),
        at = w ? C[z] / 2 - q - me - ge - P.mainAxis : he - me - ge - P.mainAxis,
        ce = w ? -C[z] / 2 + q + me + ze + P.mainAxis : W + me + ze + P.mainAxis,
        bt = t.elements.arrow && Pa(t.elements.arrow),
        Kt = bt ? (O === "y" ? bt.clientTop || 0 : bt.clientLeft || 0) : 0,
        it = (F = T?.[O]) != null ? F : 0,
        yt = V + at - it - Kt,
        ke = V + ce - it,
        mt = na(h ? yi(J, yt) : J, V, h ? vr(j, ke) : j);
      ((S[O] = mt), (B[O] = mt - V));
    }
    if (s) {
      var _t,
        ot = O === "x" ? Pe : Re,
        Zr = O === "x" ? rt : nt,
        qe = S[m],
        Te = m === "y" ? "height" : "width",
        Se = qe + g[ot],
        Ue = qe - g[Zr],
        ar = [Pe, Re].indexOf(b) !== -1,
        Ra = (_t = T?.[m]) != null ? _t : 0,
        Aa = ar ? Se : qe - C[Te] - I[Te] - Ra + P.altAxis,
        ja = ar ? qe + C[Te] + I[Te] - Ra - P.altAxis : Ue,
        Ia = h && ar ? WO(Aa, qe, ja) : na(h ? Aa : Se, qe, h ? ja : Ue);
      ((S[m] = Ia), (B[m] = Ia - qe));
    }
    t.modifiersData[n] = B;
  }
}
const Sk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kk,
  requiresIfExists: ["offset"],
};
function Ek(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function xk(e) {
  return e === Fe(e) || !tt(e) ? rc(e) : Ek(e);
}
function Ck(e) {
  var t = e.getBoundingClientRect(),
    r = Hr(t.width) / e.offsetWidth || 1,
    n = Hr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Pk(e, t, r) {
  r === void 0 && (r = !1);
  var n = tt(t),
    a = tt(t) && Ck(t),
    i = nr(t),
    o = Wr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((It(t) !== "body" || ac(i)) && (s = xk(t)),
      tt(t) ? ((c = Wr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : i && (c.x = nc(i))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Rk(e) {
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
        var c = t.get(s);
        c && a(c);
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
function Ak(e) {
  var t = Rk(e);
  return zO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function jk(e) {
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
function Ik(e) {
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
var Ud = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dk(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? Ud : a;
  return function (s, c, u) {
    u === void 0 && (u = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ud, i),
        modifiersData: {},
        elements: { reference: s, popper: c },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: l,
        setOptions: function (b) {
          var _ = typeof b == "function" ? b(l.options) : b;
          (p(),
            (l.options = Object.assign({}, i, l.options, _)),
            (l.scrollParents = {
              reference: mr(s) ? aa(s) : s.contextElement ? aa(s.contextElement) : [],
              popper: aa(c),
            }));
          var w = Ak(Ik([].concat(n, l.options.modifiers)));
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
              _ = b.reference,
              w = b.popper;
            if (Vd(_, w)) {
              ((l.rects = {
                reference: Pk(_, Pa(w), l.options.strategy === "fixed"),
                popper: ec(w),
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
                var m = l.orderedModifiers[O],
                  S = m.fn,
                  C = m.options,
                  I = C === void 0 ? {} : C,
                  M = m.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: I, name: M, instance: h }) || l);
              }
            }
          }
        },
        update: jk(function () {
          return new Promise(function (g) {
            (h.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (p(), (f = !0));
        },
      };
    if (!Vd(s, c)) return h;
    h.setOptions(u).then(function (g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function v() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          _ = g.options,
          w = _ === void 0 ? {} : _,
          O = g.effect;
        if (typeof O == "function") {
          var m = O({ state: l, name: b, instance: h, options: w }),
            S = function () {};
          d.push(m || S);
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
var Tk = [nk, wk, tk, VO, mk, pk, Sk, XO, gk],
  Mk = Dk({ defaultModifiers: Tk }),
  Ho,
  Gd;
function Lk() {
  if (Gd) return Ho;
  Gd = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(i, o) {
    if (i === o) return !0;
    if (i && o && typeof i == "object" && typeof o == "object") {
      if (i.constructor !== o.constructor) return !1;
      var s, c, u;
      if (Array.isArray(i)) {
        if (((s = i.length), s != o.length)) return !1;
        for (c = s; c-- !== 0; ) if (!a(i[c], o[c])) return !1;
        return !0;
      }
      var l;
      if (t && i instanceof Map && o instanceof Map) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(c = l.next()).done; ) if (!o.has(c.value[0])) return !1;
        for (l = i.entries(); !(c = l.next()).done; )
          if (!a(c.value[1], o.get(c.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && o instanceof Set) {
        if (i.size !== o.size) return !1;
        for (l = i.entries(); !(c = l.next()).done; ) if (!o.has(c.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(o)) {
        if (((s = i.length), s != o.length)) return !1;
        for (c = s; c-- !== 0; ) if (i[c] !== o[c]) return !1;
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
      if (((u = Object.keys(i)), (s = u.length), s !== Object.keys(o).length)) return !1;
      for (c = s; c-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, u[c])) return !1;
      if (e && i instanceof Element) return !1;
      for (c = s; c-- !== 0; )
        if (
          !((u[c] === "_owner" || u[c] === "__v" || u[c] === "__o") && i.$$typeof) &&
          !a(i[u[c]], o[u[c]])
        )
          return !1;
      return !0;
    }
    return i !== i && o !== o;
  }
  return (
    (Ho = function (o, s) {
      try {
        return a(o, s);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw c;
      }
    }),
    Ho
  );
}
var Nk = Lk();
const $k = tr(Nk);
var Fk = [],
  Bk = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || Fk,
      },
      o = y.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = o[0],
      c = o[1],
      u = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (h) {
            var v = h.state,
              p = Object.keys(v.elements);
            mi.flushSync(function () {
              c({
                styles: Td(
                  p.map(function (g) {
                    return [g, v.styles[g] || {}];
                  }),
                ),
                attributes: Td(
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
      l = y.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return $k(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u],
      ),
      d = y.useRef();
    return (
      Md(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Md(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || Mk,
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
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  zk = function () {},
  qk = function () {
    return Promise.resolve(null);
  },
  Uk = [];
function Vk(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? Uk : i,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(xO),
    f = y.useState(null),
    h = f[0],
    v = f[1],
    p = y.useState(null),
    g = p[0],
    b = p[1];
  y.useEffect(
    function () {
      RO(u, h);
    },
    [u, h],
  );
  var _ = y.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: c,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, c, o, g],
    ),
    w = Bk(s || d, h, _),
    O = w.state,
    m = w.styles,
    S = w.forceUpdate,
    C = w.update,
    I = y.useMemo(
      function () {
        return {
          ref: v,
          style: m.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: m.arrow, ref: b },
          forceUpdate: S || zk,
          update: C || qk,
        };
      },
      [v, b, r, O, m, C, S],
    );
  return CO(l)(I);
}
function Gk(e) {
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
          c = n.state,
          u = c.modifiersData.maxSizeData;
        if (
          !(
            typeof (u == null || (a = u.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (u == null || (i = u.viewport) === null || i === void 0 ? void 0 : i.height) !=
              "number"
          )
        ) {
          var l = u.viewport,
            d = c.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            h = c.placement.split("-"),
            v = Q(h, 1),
            p = v[0],
            g =
              (o =
                (s = c.modifiersData) === null ||
                s === void 0 ||
                (s = s.offset) === null ||
                s === void 0
                  ? void 0
                  : s[c.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            _ = l.height - 2 * t;
          (p === "top" && (_ = c.rects.reference.y + g.y - t),
            p === "bottom" && (_ = l.height - f.y - t),
            p === "left" && (b = c.rects.reference.x + g.x - t),
            p === "right" && (b = l.width - f.x - t),
            (c.styles.popper.maxWidth = "".concat(b, "px")),
            (c.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var Ps = 5,
  Hk = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Ps,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function Wk() {
  return null;
}
var Kk = [0, 8];
function Yk(e) {
  var t = e.children,
    r = t === void 0 ? Wk : t,
    n = e.offset,
    a = n === void 0 ? Kk : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    h = f === void 0 ? !1 : f,
    v = Q(a, 2),
    p = v[0],
    g = v[1],
    b = y.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Ps, rootBoundary: h ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [p, g] } },
          m = h ? Gk({ viewportPadding: Ps }) : [];
        return [].concat(Hk, [w, O], Me(m));
      },
      [p, g, h],
    ),
    _ = y.useMemo(
      function () {
        return u == null ? b : [].concat(Me(b), Me(u));
      },
      [b, u],
    );
  return k.createElement(Vk, { modifiers: _, placement: o, strategy: d, referenceElement: c }, r);
}
var Jp = "atlaskit-portal-container",
  Xp = "body > .atlaskit-portal-container",
  Qp = "atlaskit-portal",
  Jk = function (t) {
    var r = document.createElement("div");
    return ((r.className = Qp), (r.style.zIndex = "".concat(t)), r);
  },
  Zp = function () {
    return document.body;
  },
  eh = function () {
    var t = document.querySelector(Xp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Jp),
        (n.style.display = "flex"),
        (r = Zp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  Xk = function (t) {
    eh().removeChild(t);
  },
  Qk = function (t) {
    t.parentElement || eh().appendChild(t);
  },
  th = function () {
    return document !== void 0;
  },
  Zk = function (t) {
    if (th()) {
      var r = document.createElement("div");
      return ((r.className = Qp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  eS = function () {
    if (th()) {
      var t = document.querySelector(Xp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Jp),
          (n.style.display = "flex"),
          (r = Zp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function tS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return Jk(t);
      },
      [t],
    );
  return (
    Qk(n),
    y.useEffect(
      function () {
        return function () {
          Xk(n);
        };
      },
      [n],
    ),
    mi.createPortal(r, n)
  );
}
var rh = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function rS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = Q(n, 2),
    i = a[0],
    o = a[1];
  rh(
    function () {
      var c = Zk(t);
      o(c);
      var u = eS();
      if (!(!c || !u))
        return (
          u.appendChild(c),
          function () {
            (c && u.removeChild(c), o(null));
          }
        );
    },
    [t],
  );
  var s = k.createElement(y.Suspense, { fallback: null }, r);
  return i ? mi.createPortal(s, i) : null;
}
var nS = function (t) {
    var r = y.useState(!1),
      n = Q(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? rh : y.useEffect;
      }),
      s = Q(o, 1),
      c = s[0];
    return (
      c(function () {
        i(!0);
      }, []),
      a
    );
  },
  aS = "akPortalMount",
  iS = "akPortalUnmount",
  Hd = {
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
  oS = function (t) {
    return Hd.hasOwnProperty(t) ? Hd[t] : null;
  },
  sS = function (t, r) {
    var n = { layer: oS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Wd(e, t) {
  var r = sS(e, t);
  window.dispatchEvent(r);
}
var cS = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        Wd(aS, r),
        function () {
          Wd(iS, r);
        }
      );
    },
    [r],
  );
};
function uS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = nS(i);
  return (
    cS(r),
    et("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(rS, { zIndex: r }, n)
      : o
        ? k.createElement(tS, { zIndex: r }, n)
        : null
  );
}
var ia = new Set(),
  _a = null;
function Kd() {
  if (!_a) {
    _a = Fi.bindAll(window, [
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
    var e = Array.from(ia);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Wo() {
  var e;
  ((e = _a) === null || e === void 0 || e(), (_a = null));
  var t = Array.from(ia);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function lS() {
  return Fi.bindAll(window, [
    { type: "dragstart", listener: Kd },
    { type: "dragenter", listener: Kd },
  ]);
}
var Ua = null;
function dS(e) {
  return (
    Ua || (Ua = lS()),
    ia.add(e),
    e.onRegister({ isDragging: _a !== null }),
    function () {
      if ((ia.delete(e), ia.size === 0)) {
        var r;
        ((r = Ua) === null || r === void 0 || r(), (Ua = null));
      }
    }
  );
}
var oa = null;
function Qn() {
  oa != null && (window.clearTimeout(oa), (oa = null));
}
function Yd(e, t) {
  (Qn(),
    (oa = window.setTimeout(function () {
      ((oa = null), e());
    }, t)));
}
var wt = null;
function fS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(wt && wt.entry === e);
  }
  function n() {
    r() && (Qn(), (wt = null));
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
        ((t = "shown"), Qn());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Qn(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(h) {
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
          Yd(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function c() {
    r() && t === "hide-animating" && a();
  }
  function u() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var h = !!(wt && wt.isVisible());
    (wt && (Qn(), wt.entry.hide({ isImmediate: !0 }), wt.entry.done(), (wt = null)),
      (wt = { entry: e, isVisible: u }));
    function v() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      v();
      return;
    }
    ((t = "waiting-to-show"), Yd(v, e.delay));
  }
  d();
  var f = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: c,
    mousePosition: l(),
  };
  return f;
}
function vS(e, t) {
  var r = aw();
  return t ? "".concat(r(e)) : void 0;
}
var nh = y.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    i = t.children,
    o = t.placement,
    s = t.testId,
    c = t.onMouseOut,
    u = t.onMouseOver,
    l = t.id;
  return y.createElement(
    "div",
    { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
    y.createElement(
      "div",
      {
        role: "tooltip",
        className: R(["_80om73ad", a]),
        onMouseOut: c,
        onMouseOver: u,
        "data-placement": o,
        "data-testid": s,
        id: l,
      },
      i,
    ),
  );
});
nh.displayName = "TooltipPrimitive";
function Jd(e, t) {
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
function Xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ah = y.forwardRef(function (t, r) {
  var n = t.style,
    a = t.className,
    i = t.children,
    o = t.truncate,
    s = t.placement,
    c = t.testId,
    u = t.onMouseOut,
    l = t.onMouseOver,
    d = t.id;
  return y.createElement(
    nh,
    {
      ref: r,
      className: R([
        "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkpioe _syaz1i9p _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
        o && "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
        a,
      ]),
      placement: s,
      testId: c,
      id: d,
      onMouseOut: u,
      onMouseOver: l,
      style: Xd(
        Xd({}, n),
        {},
        {
          "--_yr7xfv": Ke("var(--ds-background-neutral-bold, ".concat(dr, ")")),
          "--_ywovvi": Ke("var(--ds-text-inverse, ".concat(Bt, ")")),
        },
      ),
    },
    i,
  );
});
ah.displayName = "TooltipContainer";
function Qd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Zd(e, t) {
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
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var pS = iw.tooltip(),
  ef = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  hS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  gS = function (t) {
    return t.split("-")[0];
  };
function bS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    l = u === void 0 ? ah : u,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    h = e.testId,
    v = e.delay,
    p = v === void 0 ? 300 : v,
    g = e.onShow,
    b = g === void 0 ? we : g,
    _ = e.onHide,
    w = _ === void 0 ? we : _,
    O = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
    C = e.hideTooltipOnMouseDown,
    I = C === void 0 ? !1 : C,
    M = e.analyticsContext,
    P = e.strategy,
    T = P === void 0 ? "fixed" : P,
    B = e.ignoreTooltipPointerEvents,
    F = B === void 0 ? !1 : B,
    U = e.isScreenReaderAnnouncementDisabled,
    Z = U === void 0 ? !1 : U,
    z = n === "mouse" ? i : n,
    V = _l(Nr({ fn: b, action: "displayed", analyticsData: M }, ef)),
    J = _l(Nr({ fn: w, action: "hidden", analyticsData: M }, ef)),
    j = y.useRef(null),
    q = y.useState("hide"),
    he = Q(q, 2),
    W = he[0],
    be = he[1],
    de = y.useRef(null),
    fe = y.useRef(null),
    ge = function (ae) {
      ((fe.current = ae), (de.current = ae ? ae.firstElementChild : null));
    },
    ze = y.useCallback(function (L) {
      de.current = L;
    }, []),
    me = Hn(W),
    at = Hn(V),
    ce = Hn(J),
    bt = Hn(p),
    Kt = Hn(O),
    it = y.useRef(!1),
    yt = y.useCallback(function (L) {
      ((j.current = L), (it.current = !1));
    }, []),
    ke = y.useCallback(
      function () {
        j.current &&
          (it.current && ce.current(), (j.current = null), (it.current = !1), be("hide"));
      },
      [ce],
    ),
    mt = y.useCallback(
      function () {
        j.current && (j.current.abort(), it.current && ce.current(), (j.current = null));
      },
      [ce],
    );
  y.useEffect(
    function () {
      return function () {
        j.current && mt();
      };
    },
    [mt],
  );
  var _t = y.useRef(!1);
  y.useEffect(function () {
    return dS({
      onRegister: function (ae) {
        var Mt = ae.isDragging;
        _t.current = Mt;
      },
      onDragStart: function () {
        var ae;
        ((ae = j.current) === null || ae === void 0 || ae.requestHide({ isImmediate: !0 }),
          (_t.current = !0));
      },
      onDragEnd: function () {
        _t.current = !1;
      },
    });
  }, []);
  var ot = y.useCallback(
      function (L) {
        var ae;
        if (!_t.current) {
          if ((j.current && !j.current.isActive() && mt(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(Kt.current && !((ae = Kt.current) !== null && ae !== void 0 && ae.call(Kt)))) {
            var Mt = {
                source: L,
                delay: bt.current,
                show: function (Sr) {
                  var tn = Sr.isImmediate;
                  (it.current || ((it.current = !0), at.current()),
                    be(tn ? "show-immediate" : "fade-in"));
                },
                hide: function (Sr) {
                  var tn = Sr.isImmediate;
                  be(tn ? "hide" : "before-fade-out");
                },
                done: ke,
              },
              Wi = fS(Mt);
            yt(Wi);
          }
        }
      },
      [Kt, bt, ke, yt, mt, at],
    ),
    Zr = y.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (oO({ onClose: Zr, isDisabled: W === "hide" || W === "fade-out" }),
    y.useEffect(
      function () {
        if (W === "hide") return we;
        W === "before-fade-out" && be("fade-out");
        var L = Fi.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [W],
    ));
  var qe = y.useCallback(
      function () {
        I && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [I],
    ),
    Te = y.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Se = y.useCallback(
      function (L) {
        if (!(fe.current && L.target === fe.current) && !L.defaultPrevented) {
          L.preventDefault();
          var ae =
            n === "mouse"
              ? { type: "mouse", mouse: Qd({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          ot(ae);
        }
      },
      [n, ot],
    ),
    Ue = y.useCallback(function (L) {
      (fe.current && L.target === fe.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    ar =
      n === "mouse"
        ? function (L) {
            var ae;
            (ae = j.current) !== null &&
              ae !== void 0 &&
              ae.isActive() &&
              (j.current.mousePosition = Qd({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Ra = y.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    Aa = y.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && et("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        ot({ type: "keyboard" });
      },
      [ot],
    ),
    ja = y.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    Ia = y.useCallback(
      function (L) {
        L === "exiting" &&
          me.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [me],
    ),
    dh = f,
    Gi = W !== "hide" && !!o,
    oc = !Z && Gi,
    sc = W !== "hide" && W !== "fade-out",
    fh = y.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  lO({ isOpen: Gi && sc, onClose: fh });
  var cc = function () {
      var ae;
      if (n === "mouse" && (ae = j.current) !== null && ae !== void 0 && ae.mousePosition) {
        var Mt;
        return (Mt = j.current) === null || Mt === void 0 ? void 0 : Mt.mousePosition;
      }
      return de.current || void 0;
    },
    en = vS("tooltip", oc),
    Hi = {
      onMouseOver: Se,
      onMouseOut: Ue,
      onMouseMove: ar,
      onMouseDown: qe,
      onClick: Te,
      onFocus: Aa,
      onBlur: ja,
    };
  h && (Hi["data-testid"] = "".concat(h, "--container"));
  var uc = typeof t == "function";
  y.useEffect(
    function () {
      if (!uc) {
        var L = de.current;
        if (!(!L || !en))
          return (
            L.setAttribute("aria-describedby", en),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [uc, en],
  );
  var lc = oc
    ? k.createElement(
        "span",
        { "data-testid": h ? "".concat(h, "-hidden") : void 0, hidden: !0, id: en },
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
          t(Nr(Nr({}, Hi), {}, { "aria-describedby": en, ref: ze })),
          lc,
        )
      : k.createElement(dh, Y({}, Hi, { ref: ge, role: "presentation" }), t, lc),
    Gi
      ? k.createElement(
          uS,
          { zIndex: pS },
          k.createElement(Yk, { placement: z, referenceElement: cc(), strategy: T }, function (L) {
            var ae = L.ref,
              Mt = L.style,
              Wi = L.update,
              Ki = L.placement,
              Sr = n === "mouse" ? void 0 : hS[gS(Ki)];
            return k.createElement(
              Bp,
              { appear: !0 },
              sc &&
                k.createElement(
                  EO,
                  {
                    distance: "constant",
                    entranceDirection: Sr,
                    exitDirection: Sr,
                    onFinish: Ia,
                    duration: W !== "show-immediate" ? "medium" : "none",
                  },
                  function (tn) {
                    var vh = tn.className;
                    return k.createElement(
                      l,
                      {
                        ref: ae,
                        className: "Tooltip ".concat(vh),
                        style: Nr(Nr({}, Mt), F && { pointerEvents: "none" }),
                        truncate: c,
                        placement: z,
                        testId: cc() ? h : h && "".concat(h, "--unresolved"),
                        onMouseOut: Ue,
                        onMouseOver: Ra,
                      },
                      typeof o == "function" ? o({ update: Wi }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var yS = [
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
  tf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  ih = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.sortOrder,
      c = t.onClick,
      u = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      h = t.descendingSortTooltip,
      v = h === void 0 ? "Sort descending" : h,
      p = t.buttonAriaRoleDescription,
      g = p === void 0 ? "Sort button" : p,
      b = t.isIconOnlyHeader,
      _ = ne(t, yS),
      w = y.useState(!1),
      O = Q(w, 2),
      m = O[0],
      S = O[1],
      C = y.useState(!1),
      I = Q(C, 2),
      M = I[0],
      P = I[1],
      T = u === l || s !== void 0,
      B = m || T || M,
      F = B && b,
      U = !b || B || (b && !M),
      Z = y.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      z = y.useCallback(
        function () {
          P?.(!1);
        },
        [P],
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
      j = k.createElement(
        $i,
        { xcss: tf.headCellContainer, onMouseEnter: V, onMouseLeave: J, onFocus: Z, onBlur: z },
        k.createElement(
          bS,
          { content: s === yr ? f : v },
          k.createElement(
            H0,
            { onClick: c, xcss: Kn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              gi,
              { xcss: F ? Kn.hideIconHeaderWrapper : Kn.visibleHeaderWrapper },
              k.createElement("span", { className: R([tf.text]) }, r),
            ),
            U &&
              k.createElement(
                gi,
                { xcss: B ? Kn.sortIconVisibleWrapper : Kn.sortIconHiddenWrapper },
                s === yr
                  ? k.createElement(aO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(tO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      Mp,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        _,
        { isSortable: o, sortOrder: s },
      ),
      o ? j : r,
    );
  },
  mS = ["isRanking", "refHeight", "refWidth"];
function _S(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, oh() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var wS = (function (e) {
    function t() {
      return (ue(this, t), _S(this, t, arguments));
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
              o = ne(n, mS),
              s = Nv(a, i);
            return k.createElement(ih, Y({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  OS = Np(wS),
  kS = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  sh = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.onClick,
      c = ne(t, kS);
    return k.createElement(
      Mp,
      Y(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        c,
        { onClick: s, isSortable: o },
      ),
      o
        ? k.createElement("button", { type: "button", "aria-roledescription": "Sort button" }, r)
        : r,
    );
  },
  SS = ["isRanking", "refHeight", "refWidth"];
function ES(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, ch() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function ch() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ch = function () {
    return !!e;
  })();
}
var xS = (function (e) {
    function t() {
      return (ue(this, t), ES(this, t, arguments));
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
              o = ne(n, SS),
              s = Nv(a, i);
            return k.createElement(sh, Y({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  CS = Np(xS),
  PS = ["cells"],
  RS = [
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
function AS(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, uh() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function uh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (uh = function () {
    return !!e;
  })();
}
var jS = (function (e) {
    function t(r) {
      var n;
      return (ue(this, t), (n = AS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      De(t, e),
      le(t, [
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
              s = a.sortOrder,
              c = a.isFixedSize,
              u = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              h = this.state.activeSortButtonId;
            if (!i) return null;
            var v = d ? CS : sh,
              p = d ? OS : ih,
              g = i.cells,
              b = ne(i, PS);
            return k.createElement(
              X1,
              Y({}, b, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                g.map(function (_, w) {
                  var O = _.ascendingSortTooltip,
                    m = _.buttonAriaRoleDescription,
                    S = _.colSpan,
                    C = _.content,
                    I = _.descendingSortTooltip,
                    M = _.isIconOnlyHeader,
                    P = _.isSortable,
                    T = _.key,
                    B = _.shouldTruncate,
                    F = _.testId,
                    U = _.width,
                    Z = ne(_, RS),
                    z = "head-cell-".concat(w),
                    V = function () {
                      (n.setState({ activeSortButtonId: z }), P && u(_)());
                    };
                  return et("platform-component-visual-refresh")
                    ? k.createElement(
                        p,
                        Y(
                          {
                            colSpan: S,
                            content: C,
                            isFixedSize: c,
                            isIconOnlyHeader: M,
                            isSortable: !!P,
                            isRanking: l,
                            key: T || w,
                            headCellId: z,
                            activeSortButtonId: h,
                            onClick: V,
                            testId: F || f,
                            shouldTruncate: B,
                            sortOrder: T === o ? s : void 0,
                            width: U,
                            ascendingSortTooltip: O,
                            descendingSortTooltip: I,
                            buttonAriaRoleDescription: m,
                          },
                          Z,
                        ),
                      )
                    : k.createElement(
                        v,
                        Y(
                          {
                            colSpan: S,
                            content: C,
                            isFixedSize: c,
                            isSortable: !!P,
                            isRanking: l,
                            key: T || w,
                            onClick: P ? u(_) : void 0,
                            testId: F || f,
                            shouldTruncate: B,
                            sortOrder: T === o ? s : void 0,
                            width: U,
                          },
                          Z,
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
  IS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function DS(e) {
  switch (e) {
    case vi:
      return yr;
    case yr:
      return vi;
    default:
      return e;
  }
}
var TS = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      i = t.rows,
      o = t.sortKey,
      s = t.sortOrder,
      c = t.loadingLabel,
      u = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      f = t.label,
      h = t.isLoading,
      v = h === void 0 ? !1 : h,
      p = t.isFixedSize,
      g = p === void 0 ? !1 : p,
      b = t.rowsPerPage,
      _ = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      O = w === void 0 ? we : w,
      m = t.onSort,
      S = m === void 0 ? we : m,
      C = t.page,
      I = C === void 0 ? 1 : C,
      M = t.emptyView,
      P = t.isRankable,
      T = P === void 0 ? !1 : P,
      B = t.isRankingDisabled,
      F = B === void 0 ? !1 : B,
      U = t.onRankStart,
      Z = U === void 0 ? we : U,
      z = t.onRankEnd,
      V = z === void 0 ? we : z,
      J = t.loadingSpinnerSize,
      j = t.paginationi18n,
      q =
        j === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : j,
      he = y.useState(!1),
      W = Q(he, 2),
      be = W[0],
      de = W[1],
      fe = y.useRef(null),
      ge = va({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      ze = va({
        fn: V,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (li(o, n), Ty(n));
      },
      [o, n],
    );
    var me = function (Se) {
        return function () {
          var Ue = Se.key;
          if (Ue) {
            if (ge && T && Ue === o && s === vi) {
              ge({ key: null, sortOrder: null, item: Se });
              return;
            }
            var ar = Ue !== o ? yr : DS(s);
            ge && ge({ key: Ue, item: Se, sortOrder: ar });
          }
        };
      },
      at = function (Se, Ue) {
        O(Se, Ue);
      },
      ce = function (Se) {
        (de(!0), Z(Se));
      },
      bt = function (Se) {
        (de(!1), ze(Se));
      },
      Kt = function () {
        return J || (Lv(i || [], I, _).length > 2 ? pi : n_);
      },
      it = function () {
        return v ? k.createElement(p_, { testId: l }) : M && k.createElement(h_, { testId: l }, M);
      },
      yt = i && i.length,
      ke,
      mt = !1;
    (d && Number.isInteger(d) && _ && yt && yt <= d
      ? ((ke = Math.ceil(d / _)), (mt = !0))
      : (ke = yt && _ ? Math.ceil(yt / _) : 0),
      (ke = ke < 1 ? 1 : ke));
    var _t = I > ke ? ke : I,
      ot = !!yt,
      Zr = Kt(),
      qe = it();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        sp,
        {
          isLoading: v && ot,
          spinnerSize: Zr,
          targetRef: function () {
            return fe.current;
          },
          testId: l,
          loadingLabel: c,
        },
        k.createElement(
          d_,
          { isFixedSize: g, "aria-label": f, hasDataRow: ot, testId: l, isLoading: v },
          !!r && k.createElement(f_, null, r),
          n &&
            k.createElement(jS, {
              head: n,
              onSort: me,
              sortKey: o,
              sortOrder: s,
              isRanking: be,
              isRankable: T,
              testId: l,
            }),
          ot &&
            k.createElement(LS, {
              ref: fe,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: _,
              page: _t,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: mt,
              testId: l,
              isRankable: T,
              isRanking: be,
              onRankStart: ce,
              onRankEnd: bt,
              isRankingDisabled: F || v || !1,
            }),
        ),
      ),
      ke <= 1
        ? null
        : k.createElement(
            v_,
            { testId: l },
            k.createElement(K1, {
              value: _t,
              onChange: at,
              total: ke,
              i18n: q,
              isDisabled: v,
              testId: l,
            }),
          ),
      !ot &&
        qe &&
        k.createElement(ip, { isLoading: v, spinnerSize: pi, testId: l, loadingLabel: c }, qe),
    );
  },
  MS = y.lazy(function () {
    return $y(
      () => import("./body-JZ-m9_2T.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  LS = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      u = ne(t, IS),
      l = a && !u.sortKey,
      d = y.useState(!1),
      f = Q(d, 2),
      h = f[0],
      v = f[1];
    y.useEffect(
      function () {
        l && v(!0);
      },
      [l],
    );
    var p = k.createElement(A_, Y({ ref: r }, u));
    return l && h
      ? k.createElement(
          I_,
          { fallback: p },
          k.createElement(
            y.Suspense,
            { fallback: p },
            k.createElement(
              MS,
              Y({ ref: r }, u, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: s,
                isRankingDisabled: c,
              }),
            ),
          ),
        )
      : p;
  });
function NS(e, t, r) {
  return (
    (t = H(t)),
    Ie(e, lh() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function lh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lh = function () {
    return !!e;
  })();
}
var Vi = (function (e) {
  function t() {
    var r;
    ue(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = NS(this, t, [].concat(a))),
      x(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      x(r, "onSetPageHandler", function (o, s) {
        var c = r.props.onSetPage;
        c && (c(o, s), r.setState({ page: o }));
      }),
      x(r, "onSortHandler", function (o, s) {
        var c = o.key,
          u = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: c, item: u, sortOrder: l }, s), r.setState({ sortKey: c, sortOrder: l }));
      }),
      x(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      x(r, "onRankEndHandler", function (o) {
        var s = o.destination,
          c = r.state,
          u = c.rows,
          l = c.page,
          d = r.props.rowsPerPage;
        if (!s || !u) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = My(o, u, l, d);
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
            c = this.props,
            u = c.caption,
            l = c.emptyView,
            d = c.head,
            f = c.highlightedRowIndex,
            h = c.loadingSpinnerSize,
            v = c.isLoading,
            p = c.loadingLabel,
            g = c.isFixedSize,
            b = c.isRankable,
            _ = c.isRankingDisabled,
            w = c.rowsPerPage,
            O = c.paginationi18n,
            m = c.onRankStart,
            S = c.onPageRowsUpdate,
            C = c.testId,
            I = c.label;
          return k.createElement(TS, {
            paginationi18n: O,
            caption: u,
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
            rows: s,
            rowsPerPage: w,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: m,
            onPageRowsUpdate: S,
            testId: C,
            label: I,
          });
        },
      },
    ])
  );
})(k.Component);
x(Vi, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const $S = (e, t) => {
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
  ic = (e, t) => ({ cells: $S(e, t) }),
  FS = Ti(() => {
    const { usersStore: e } = Li(),
      t = ic(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? E.jsx("div", { children: "SlowQuery is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Vi, {
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
                                  (e.showPlan(n.parsedPlan, n.plan), Fs.saveState("PLAN"));
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
  BS = Ti(() => {
    const { usersStore: e } = Li(),
      t = ic(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? E.jsxs("div", { children: ["$", e.planString] })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Vi, {
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
  zS = Ti(() => {
    const { usersStore: e } = Li(),
      t = ic(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? E.jsx("div", { children: "Query history is EMPTY" })
      : E.jsx("div", {
          children: E.jsxs("div", {
            children: [
              E.jsx(Vi, {
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
                                  (e.showPlan(n.parsedPlan, n.plan), Fs.saveState("PLAN"));
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
  We = (e, t) => {
    Ce.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function qS() {
  const { usersStore: e, stateStore: t } = Li();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explain");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainAnalyze");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("explainAnalyzeWith");
        (e.showPlan(v, "Plan does not exists"), t.saveState("PLAN"));
      } catch (v) {
        (console.error(v), We("explain analyze error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Ce.invoke("executeQuery");
      } catch (v) {
        (console.error(v), We("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Ce.invoke("executeQueryWith");
      } catch (v) {
        (console.error(v), We("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Ce.invoke("optimizeQuery");
      } catch (v) {
        (console.error(v), We("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Ce.invoke("optimizeQueryCTE");
      } catch (v) {
        (console.error(v), We("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Ce.invoke("dropStats");
      } catch (v) {
        (console.error(v), We("dropStats error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Ce.invoke("deOptimizeQuery");
      } catch (v) {
        (console.error(v), We("deoptimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    f = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(v), t.saveState("HISTORY"));
      } catch (v) {
        (console.error(v), We("History error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    h = async () => {
      e.loading();
      try {
        const v = await Ce.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(v), t.saveState("SLOW_QUERY"));
      } catch (v) {
        (console.error(v), We("Slowquery error", v.message));
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
                    E.jsx("button", { onClick: c, children: "4. Add optimization indexes" }),
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
                    E.jsx("button", { onClick: s, children: "8. Execute CTE" }),
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
                      onClick: u,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    E.jsx("button", { onClick: s, children: "10. Execute CTE" }),
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
          E.jsx(FS, {}),
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
          E.jsx(zS, {}),
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
          E.jsx(BS, {}),
        ],
      });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const US = Ti(qS),
  VS = document.getElementById("root"),
  GS = ph.createRoot(VS),
  rf = () => {
    GS.render(E.jsx(Iv, { ...Dv, children: E.jsx(US, {}) }));
  };
Ce.view.theme
  .enable()
  .then(() => {
    rf();
  })
  .catch((e) => {
    (console.error(e.message), rf());
  });
export {
  hi as B,
  XS as N,
  k as R,
  S_ as T,
  De as _,
  le as a,
  ps as b,
  ue as c,
  Ie as d,
  H as e,
  Q as f,
  x as g,
  ne as h,
  Fi as i,
  Me as j,
  Y as k,
  j0 as l,
  Ut as m,
  Tt as n,
  Ke as o,
  R as p,
  QS as q,
  y as r,
  xe as s,
  O_ as t,
  Nv as u,
  m_ as v,
  Np as w,
};
