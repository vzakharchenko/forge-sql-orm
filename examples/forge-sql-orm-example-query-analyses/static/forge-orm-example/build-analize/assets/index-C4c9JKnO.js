const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-CnMYS8gp.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Cqv-4Eca.js",
      "./lodash-vendor-BJpaz59Q.js",
      "./body-zWXS9WXn.css",
    ]),
) => i.map((i) => d[i]);
import { r as vt, a as mi, c as vh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as As, a as rr, r as er, s as He } from "./client-core-vendor-Cqv-4Eca.js";
import { r as ph } from "./lodash-vendor-BJpaz59Q.js";
function hh(e, t) {
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
 */ var fc;
function gh() {
  if (fc) return rn;
  fc = 1;
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
var vc;
function bh() {
  return (vc || ((vc = 1), (Yi.exports = gh())), Yi.exports);
}
var E = bh(),
  Ji = {},
  Yo = function (e, t) {
    return (
      (Yo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Yo(e, t)
    );
  };
function tf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Yo(e, t);
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
function rf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function nf(e, t, r, n) {
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
function af(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function of(e, t, r, n, a, i) {
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
function sf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function cf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function uf(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function lf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function df(e, t, r, n) {
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
function ff(e, t) {
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
function vf(e, t) {
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
function js(e, t) {
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
function pf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(js(arguments[t]));
  return e;
}
function hf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function gf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ur(e) {
  return this instanceof Ur ? ((this.v = e), this) : new Ur(e);
}
function bf(e, t, r) {
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
    h.value instanceof Ur ? Promise.resolve(h.value.v).then(l, d) : f(i[0][2], h);
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
function yf(e) {
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
          return (r = !r) ? { value: Ur(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function mf(e) {
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
function _f(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var yh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Jo = function (e) {
    return (
      (Jo =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Jo(e)
    );
  };
function wf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Jo(e), n = 0; n < r.length; n++) r[n] !== "default" && _i(t, e, r[n]);
  return (yh(t, e), t);
}
function Of(e) {
  return e && e.__esModule ? e : { default: e };
}
function kf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Sf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Ef(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function xf(e, t, r) {
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
var mh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Cf(e) {
  function t(i) {
    ((e.error = e.hasError ? new mh(i, e.error, "An error was suppressed during disposal.") : i),
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
function Rf(e, t) {
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
const _h = {
    __extends: tf,
    __assign: Za,
    __rest: rf,
    __decorate: nf,
    __param: af,
    __esDecorate: of,
    __runInitializers: sf,
    __propKey: cf,
    __setFunctionName: uf,
    __metadata: lf,
    __awaiter: df,
    __generator: ff,
    __createBinding: _i,
    __exportStar: vf,
    __values: ei,
    __read: js,
    __spread: pf,
    __spreadArrays: hf,
    __spreadArray: gf,
    __await: Ur,
    __asyncGenerator: bf,
    __asyncDelegator: yf,
    __asyncValues: mf,
    __makeTemplateObject: _f,
    __importStar: wf,
    __importDefault: Of,
    __classPrivateFieldGet: kf,
    __classPrivateFieldSet: Sf,
    __classPrivateFieldIn: Ef,
    __addDisposableResource: xf,
    __disposeResources: Cf,
    __rewriteRelativeImportExtension: Rf,
  },
  wh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: xf,
        get __assign() {
          return Za;
        },
        __asyncDelegator: yf,
        __asyncGenerator: bf,
        __asyncValues: mf,
        __await: Ur,
        __awaiter: df,
        __classPrivateFieldGet: kf,
        __classPrivateFieldIn: Ef,
        __classPrivateFieldSet: Sf,
        __createBinding: _i,
        __decorate: nf,
        __disposeResources: Cf,
        __esDecorate: of,
        __exportStar: vf,
        __extends: tf,
        __generator: ff,
        __importDefault: Of,
        __importStar: wf,
        __makeTemplateObject: _f,
        __metadata: lf,
        __param: af,
        __propKey: cf,
        __read: js,
        __rest: rf,
        __rewriteRelativeImportExtension: Rf,
        __runInitializers: sf,
        __setFunctionName: uf,
        __spread: pf,
        __spreadArray: gf,
        __spreadArrays: hf,
        __values: ei,
        default: _h,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Gt = As(wh);
var nn = {},
  pc;
function Oh() {
  return (
    pc ||
      ((pc = 1),
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
  hc;
function pt() {
  if (hc) return on;
  ((hc = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.BridgeAPIError = void 0));
  class e extends Error {}
  return ((on.BridgeAPIError = e), on);
}
var gc;
function we() {
  if (gc) return an;
  ((gc = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.getCallBridge = void 0));
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
  bc;
function Pf() {
  if (bc) return sn;
  ((bc = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.withRateLimiter = void 0));
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
var yc;
function kh() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = we(),
          r = pt(),
          n = Pf(),
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
var mc;
function Sh() {
  return (
    mc ||
      ((mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(kh(), e));
      })(Xi)),
    Xi
  );
}
var Zi = {},
  cn = {},
  eo = {},
  _c;
function Af() {
  return (
    _c ||
      ((_c = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = we(),
          r = pt(),
          n = Pf(),
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
var wc;
function Eh() {
  if (wc) return cn;
  ((wc = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.invokeRemote = void 0));
  const e = Af(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((cn.invokeRemote = t), cn);
}
var un = {},
  Oc;
function xh() {
  if (Oc) return un;
  ((Oc = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeService = void 0));
  const e = Af(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((un.invokeService = t), un);
}
var kc;
function Ch() {
  return (
    kc ||
      ((kc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Gt;
        (t.__exportStar(Eh(), e), t.__exportStar(xh(), e));
      })(Zi)),
    Zi
  );
}
var to = {},
  ln = {},
  dn = {},
  Sc;
function Rh() {
  if (Sc) return dn;
  ((Sc = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.submit = void 0));
  const e = we(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((dn.submit = n), dn);
}
var fn = {},
  Ec;
function Ph() {
  if (Ec) return fn;
  ((Ec = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.close = void 0));
  const e = we(),
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
  xc;
function Ah() {
  if (xc) return vn;
  ((xc = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.open = void 0));
  const e = we(),
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
  Cc;
function jh() {
  if (Cc) return pn;
  ((Cc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.refresh = void 0));
  const e = we(),
    t = pt(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((pn.refresh = n), pn);
}
var hn = {},
  Rc;
function Ih() {
  if (Rc) return hn;
  ((Rc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.createHistory = void 0));
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
  return ((hn.createHistory = r), hn);
}
var gn = {},
  ro = {},
  Tt = {},
  Pc;
function jf() {
  return (
    Pc ||
      ((Pc = 1),
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
var ir = {},
  Ac;
function Dh() {
  if (Ac) return ir;
  ((Ac = 1),
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
  jc;
function If() {
  return (
    jc ||
      ((jc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Gt.__importDefault(ph()),
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
var Ic;
function Th() {
  if (Ic) return bn;
  ((Ic = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.Translator = void 0));
  const e = If();
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
  Dc;
function Mh() {
  if (Dc) return yn;
  ((Dc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.ensureLocale = void 0));
  const e = jf(),
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
  Tc;
function Lh() {
  return (
    Tc ||
      ((Tc = 1),
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
  Mc;
function Nh() {
  return (Mc || ((Mc = 1), Object.defineProperty(io, "__esModule", { value: !0 })), io);
}
var Lc;
function Df() {
  return (
    Lc ||
      ((Lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Gt;
        (t.__exportStar(jf(), e),
          t.__exportStar(Dh(), e),
          t.__exportStar(Th(), e),
          t.__exportStar(Mh(), e));
        var r = If();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Lh();
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
          t.__exportStar(Nh(), e));
      })(ro)),
    ro
  );
}
var Nc;
function $h() {
  if (Nc) return gn;
  ((Nc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.getContext = void 0));
  const e = we(),
    t = Df(),
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
  $c;
function Fh() {
  if ($c) return mn;
  (($c = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.changeWindowTitle = void 0));
  const e = we(),
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
  Fc;
function zh() {
  if (Fc) return _n;
  ((Fc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.theme = void 0));
  const t = (0, we().getCallBridge)();
  return ((_n.theme = { enable: () => t("enableTheming") }), _n);
}
var wn = {},
  On = {},
  oo = {},
  or = {},
  zc;
function Tf() {
  if (zc) return or;
  ((zc = 1),
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
function Bh() {
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
        const t = Tf(),
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
var qc;
function Mf() {
  if (qc) return On;
  ((qc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.events = void 0));
  const e = we(),
    t = Bh(),
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
var Uc;
function qh() {
  if (Uc) return wn;
  ((Uc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.emitReadyEvent = void 0));
  const e = Mf(),
    t = Lf(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((wn.emitReadyEvent = n), wn);
}
var Vc;
function Lf() {
  if (Vc) return ln;
  ((Vc = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.view = void 0));
  const e = Rh(),
    t = Ph(),
    r = Ah(),
    n = jh(),
    a = Ih(),
    i = $h(),
    o = Fh(),
    s = zh(),
    c = qh();
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
var Gc;
function Nf() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Lf(), e));
      })(to)),
    to
  );
}
var so = {},
  kn = {},
  Hc;
function Uh() {
  if (Hc) return kn;
  ((Hc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.router = void 0));
  const t = (0, we().getCallBridge)(),
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
var Wc;
function Vh() {
  return (
    Wc ||
      ((Wc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Uh(), e));
      })(so)),
    so
  );
}
var co = {},
  Sn = {},
  Kc;
function Gh() {
  if (Kc) return Sn;
  ((Kc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.Modal = void 0));
  const e = we(),
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
var Yc;
function Hh() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Gh(), e));
      })(co)),
    co
  );
}
var Mt = {},
  En = {},
  Jc;
function Wh() {
  if (Jc) return En;
  ((Jc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.productFetchApi = void 0));
  const e = Tf(),
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
var Xc;
function Kh() {
  if (Xc) return Mt;
  Xc = 1;
  var e;
  (Object.defineProperty(Mt, "__esModule", { value: !0 }),
    (Mt.requestBitbucket = Mt.requestJira = Mt.requestConfluence = void 0));
  const t = we();
  return (
    (e = (0, Wh().productFetchApi)((0, t.getCallBridge)())),
    (Mt.requestConfluence = e.requestConfluence),
    (Mt.requestJira = e.requestJira),
    (Mt.requestBitbucket = e.requestBitbucket),
    Mt
  );
}
var uo = {},
  xn = {},
  Qc;
function Yh() {
  if (Qc) return xn;
  ((Qc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.showFlag = void 0));
  const e = we(),
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
var Zc;
function Jh() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Yh();
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
  eu;
function Xh() {
  return (
    eu ||
      ((eu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Gt.__exportStar(Mf(), e));
      })(lo)),
    lo
  );
}
var fo = {},
  Cn = {},
  tu;
function Qh() {
  if (tu) return Cn;
  ((tu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.realtime = void 0));
  const t = (0, we().getCallBridge)(),
    r = (o, s, c) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: c }),
    n = (o, s, c) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: c }),
    a = (o, s, c) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: c, isGlobal: !0 }),
    i = (o, s, c) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: c, isGlobal: !0 });
  return ((Cn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), Cn);
}
var vo = {},
  ru;
function Zh() {
  return (
    ru ||
      ((ru = 1),
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
var nu;
function eg() {
  return (
    nu ||
      ((nu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Qh();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Zh();
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
var Lt = {},
  au;
function tg() {
  if (au) return Lt;
  ((au = 1),
    Object.defineProperty(Lt, "__esModule", { value: !0 }),
    (Lt.createTranslationFunction = Lt.getTranslations = Lt.resetTranslationsCache = void 0));
  const e = Df(),
    t = Nf(),
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
  Lt.resetTranslationsCache = a;
  const i = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  Lt.getTranslations = i;
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
  return ((Lt.createTranslationFunction = o), Lt);
}
var iu;
function rg() {
  return (
    iu ||
      ((iu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Gt;
        var r = Oh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Sh(), e),
          t.__exportStar(Ch(), e),
          t.__exportStar(Nf(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(Hh(), e),
          t.__exportStar(Kh(), e),
          t.__exportStar(Jh(), e),
          t.__exportStar(Xh(), e),
          t.__exportStar(eg(), e),
          (e.i18n = t.__importStar(tg())));
      })(Ji)),
    Ji
  );
}
var Pe = rg();
function W(e) {
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
var ng = {};
function wi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : ng;
}
var $f = Object.assign,
  ti = Object.getOwnPropertyDescriptor,
  kt = Object.defineProperty,
  Oi = Object.prototype,
  Xo = [];
Object.freeze(Xo);
var Ff = {};
Object.freeze(Ff);
var ag = typeof Proxy < "u",
  ig = Object.toString();
function zf() {
  ag || W("Proxy not available");
}
function Bf(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Fr = function () {};
function dt(e) {
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
function ki(e) {
  return e !== null && typeof e == "object";
}
function tr(e) {
  if (!ki(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === ig;
}
function qf(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Si(e, t, r) {
  kt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Uf(e, t, r) {
  kt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ki(n) && n[r] === !0;
    }
  );
}
function Jr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function og(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ft(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Vf = typeof Object.getOwnPropertySymbols < "u";
function sg(e) {
  var t = Object.keys(e);
  if (!Vf) return t;
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
    : Vf
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Gf(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return Oi.hasOwnProperty.call(e, t);
}
var cg =
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
function $e(e, t) {
  return !!(e & t);
}
function Fe(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function ou(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ug(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, dg(n.key), n));
  }
}
function Xr(e, t, r) {
  return (t && ug(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function zr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = fg(e)) || t) {
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
function Hf(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Qo(e, t));
}
function Qo(e, t) {
  return (
    (Qo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Qo(e, t)
  );
}
function lg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function dg(e) {
  var t = lg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fg(e, t) {
  if (e) {
    if (typeof e == "string") return ou(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ou(e, t)
          : void 0
    );
  }
}
var Ot = Symbol("mobx-stored-annotations");
function St(e) {
  function t(r, n) {
    if (Oa(n)) return e.decorate_20223_(r, n);
    wa(r, n, e);
  }
  return Object.assign(t, e);
}
function wa(e, t, r) {
  (qt(e, Ot) || Si(e, Ot, pr({}, e[Ot])), mg(r) || (e[Ot][t] = r));
}
function vg(e) {
  return (qt(e, Ot) || Si(e, Ot, pr({}, e[Ot])), e[Ot]);
}
function Oa(e) {
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
        (this.lowestObserverState_ = J.NOT_TRACKING_),
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
        return cv(this);
      }),
      (t.reportChanged = function () {
        (Qe(), uv(this), Ze());
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
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
nr.isBeingObservedMask_ = 1;
nr.isPendingUnobservationMask_ = 2;
nr.diffValueMask_ = 4;
var Is = mr("Atom", nr);
function Wf(e, t, r) {
  (t === void 0 && (t = Fr), r === void 0 && (r = Fr));
  var n = new nr(e);
  return (t !== Fr && Sb(n, t), r !== Fr && pv(n, r), n);
}
function pg(e, t) {
  return xv(e, t);
}
function hg(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ri = { structural: pg, default: hg };
function hr(e, t, r) {
  return yv(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : tr(e)
        ? se.object(e, void 0, { name: r })
        : Jr(e)
          ? se.map(e, { name: r })
          : Ft(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !ca(e) && !ua(e)
              ? qf(e)
                ? Vr(e)
                : sa(r, e)
              : e;
}
function gg(e, t, r) {
  if (e == null || Di(e) || Ii(e) || wr(e) || wt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (tr(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Jr(e)) return se.map(e, { name: r, deep: !1 });
  if (Ft(e)) return se.set(e, { name: r, deep: !1 });
}
function xi(e) {
  return e;
}
function bg(e, t) {
  return xv(e, t) ? t : e;
}
var yg = "override";
function mg(e) {
  return e.annotationType_ === yg;
}
function ka(e, t) {
  return { annotationType_: e, options_: t, make_: _g, extend_: wg, decorate_20223_: Og };
}
function _g(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ca(r.value)) return 1;
  var i = Kf(e, this, t, r, !1);
  return (kt(n, t, i), 2);
}
function wg(e, t, r, n) {
  var a = Kf(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Og(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (u) {
      var l, d, f, h;
      return gr(
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
  W(
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
function kg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Kf(e, t, r, n, a) {
  var i, o, s, c, u, l, d;
  (a === void 0 && (a = A.safeDescriptors), kg(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: gr(
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
function Yf(e, t) {
  return { annotationType_: e, options_: t, make_: Sg, extend_: Eg, decorate_20223_: xg };
}
function Sg(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!qt(e.target_, t) || !ua(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ua(r.value)) return 1;
  var i = Jf(e, this, t, r, !1, !1);
  return (kt(n, t, i), 2);
}
function Eg(e, t, r, n) {
  var a,
    i = Jf(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function xg(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    ua(e) || (e = Vr(e)),
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
function Cg(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Jf(e, t, r, n, a, i) {
  (i === void 0 && (i = A.safeDescriptors), Cg(e, t, r, n));
  var o = n.value;
  if ((ua(o) || (o = Vr(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Ds(e, t) {
  return { annotationType_: e, options_: t, make_: Rg, extend_: Pg, decorate_20223_: Ag };
}
function Rg(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Pg(e, t, r, n) {
  return (
    jg(e, this, t, r),
    e.defineComputedProperty_(t, pr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Ag(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Qr(this)[N],
        o = pr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new ft(o)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function jg(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ci(e, t) {
  return { annotationType_: e, options_: t, make_: Ig, extend_: Dg, decorate_20223_: Tg };
}
function Ig(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Dg(e, t, r, n) {
  var a, i;
  return (
    Mg(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : hr,
      n,
    )
  );
}
function Tg(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(s, c) {
    var u,
      l,
      d = Qr(s)[N],
      f = new dr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : hr,
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
function Mg(e, t, r, n) {
  t.annotationType_;
}
var Lg = "true",
  Ng = Xf();
function Xf(e) {
  return { annotationType_: Lg, options_: e, make_: $g, extend_: Fg, decorate_20223_: zg };
}
function $g(e, t, r, n) {
  var a, i;
  if (r.get) return Ri.make_(e, t, r, n);
  if (r.set) {
    var o = gr(t.toString(), r.set);
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
    var s;
    if (qf(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? Vr.bound : Vr;
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
function Fg(e, t, r, n) {
  var a, i;
  if (r.get) return Ri.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: gr(t.toString(), r.set) },
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
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Bg = "observable",
  qg = "observable.ref",
  Ug = "observable.shallow",
  Vg = "observable.struct",
  Qf = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Qf);
function Da(e) {
  return e || Qf;
}
var Zo = Ci(Bg),
  Gg = Ci(qg, { enhancer: xi }),
  Hg = Ci(Ug, { enhancer: gg }),
  Wg = Ci(Vg, { enhancer: bg }),
  Zf = St(Zo);
function Ta(e) {
  return e.deep === !0 ? hr : e.deep === !1 ? xi : Yg(e.defaultDecorator);
}
function Kg(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Xf(e)) : void 0;
}
function Yg(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : hr;
}
function ev(e, t, r) {
  if (Oa(t)) return Zo.decorate_20223_(e, t);
  if (vr(t)) {
    wa(e, t, Zo);
    return;
  }
  return yv(e)
    ? e
    : tr(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Jr(e)
          ? se.map(e, t)
          : Ft(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
$f(ev, Zf);
var Jg = {
    box: function (t, r) {
      var n = Da(r);
      return new dr(t, Ta(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Da(r);
      return (A.useProxies === !1 || n.proxy === !1 ? Kb : $b)(t, Ta(n), n.name);
    },
    map: function (t, r) {
      var n = Da(r);
      return new _v(t, Ta(n), n.name);
    },
    set: function (t, r) {
      var n = Da(r);
      return new wv(t, Ta(n), n.name);
    },
    object: function (t, r, n) {
      return Or(function () {
        return Rb(A.useProxies === !1 || n?.proxy === !1 ? Qr({}, n) : Mb({}, n), t, r);
      });
    },
    ref: St(Gg),
    shallow: St(Hg),
    deep: Zf,
    struct: St(Wg),
  },
  se = $f(ev, Jg),
  tv = "computed",
  Xg = "computed.struct",
  es = Ds(tv),
  Qg = Ds(Xg, { equals: ri.structural }),
  Ri = function (t, r) {
    if (Oa(r)) return es.decorate_20223_(t, r);
    if (vr(r)) return wa(t, r, es);
    if (tr(t)) return St(Ds(tv, t));
    var n = tr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ft(n));
  };
Object.assign(Ri, es);
Ri.struct = St(Qg);
var su,
  cu,
  ni = 0,
  Zg = 1,
  eb =
    (su = (cu = ti(function () {}, "name")) == null ? void 0 : cu.configurable) != null ? su : !1,
  uu = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function gr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return tb(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    eb && ((uu.value = e), kt(a, "name", uu)),
    a
  );
}
function tb(e, t, r, n, a) {
  var i = rb(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    nb(i);
  }
}
function rb(e, t, r, n) {
  var a = !1,
    i = 0,
    o = A.trackingDerivation,
    s = !t || !o;
  Qe();
  var c = A.allowStateChanges;
  s && (_r(), (c = Pi(!0)));
  var u = Ts(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: i,
      actionId_: Zg++,
      parentActionId_: ni,
    };
  return ((ni = l.actionId_), l);
}
function nb(e) {
  (ni !== e.actionId_ && W(30),
    (ni = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Ai(e.prevAllowStateChanges_),
    Zn(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Ut(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function ab(e, t) {
  var r = Pi(e);
  try {
    return t();
  } finally {
    Ai(r);
  }
}
function Pi(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Ai(e) {
  A.allowStateChanges = e;
}
var dr = (function (e) {
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
    Hf(t, e);
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
          ut(this) && lt(this, { type: Et, object: this, newValue: a, oldValue: i }));
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
              type: Et,
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
        return Gf(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(nr),
  ft = (function () {
    function e(r) {
      ((this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
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
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = gr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ri.structural : ri.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ub(this);
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
          (this.isComputing && W(32, this.name_, this.derivation),
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          ts(this) &&
            (this.warnAboutUntrackedRead_(), Qe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((cv(this), ts(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && cb(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (Va(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && W(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else W(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === J.NOT_TRACKING_,
          i = this.computeValue_(!0),
          o = a || Va(n) || Va(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Pi(!1),
          i;
        if (n) i = rv(this, this.derivation, this.scope_);
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
        this.keepAlive_ || (rs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return mb(function () {
          var c = i.get();
          if (!o || a) {
            var u = _r();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: Et,
              object: i,
              newValue: c,
              oldValue: s,
            }),
              Ut(u));
          }
          ((o = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Gf(this.get());
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
            this.flags_ = Fe(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return $e(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
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
var ji = mr("ComputedValue", ft),
  J;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(J || (J = {}));
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
function ts(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (var t = Ts(!0), r = _r(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (ji(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Ut(r), Zn(t), !0);
            }
          if (e.dependenciesState_ === J.STALE_) return (Ut(r), Zn(t), !0);
        }
      }
      return (av(e), Ut(r), Zn(t), !1);
    }
  }
}
function rv(e, t, r) {
  var n = Ts(!0);
  (av(e),
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
  return (A.inBatch--, (A.trackingDerivation = a), ib(e), Zn(n), i);
}
function ib(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = J.UP_TO_DATE_,
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
    (c.diffValue === 0 && ov(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), sb(u, e));
  }
  n !== J.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function rs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) ov(t[r], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function nv(e) {
  var t = _r();
  try {
    return e();
  } finally {
    Ut(t);
  }
}
function _r() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Ut(e) {
  A.trackingDerivation = e;
}
function Ts(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function Zn(e) {
  A.allowStateReads = e;
}
function av(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = J.UP_TO_DATE_;
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
  iv = !1,
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
            iv || W(35);
          }, 1),
          new Ga())
    );
  })();
function ob() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && W(36), (iv = !0), Ha)) {
    var e = wi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new Ga()));
  }
}
function sb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function ov(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && sv(e));
}
function sv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Qe() {
  A.inBatch++;
}
function Ze() {
  if (--A.inBatch === 0) {
    lv();
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
function cv(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && sv(e), !1);
}
function uv(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === J.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = J.STALE_));
    }));
}
function cb(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function ub(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.UP_TO_DATE_ &&
        ((t.dependenciesState_ = J.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = J.NOT_TRACKING_),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), lv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Qe(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), ts(this))) {
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
        var i = rv(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && rs(this),
          Va(i) && this.reportExceptionInDerivation_(i.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Qe(), rs(this), Ze()));
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
    Xr(e, [
      {
        key: "isDisposed",
        get: function () {
          return $e(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return $e(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return $e(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return $e(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
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
var lb = 100,
  ns = function (t) {
    return t();
  };
function lv() {
  A.inBatch > 0 || A.isRunningReactions || ns(db);
}
function db() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === lb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var oi = mr("Reaction", Rt);
function fb(e) {
  var t = ns;
  ns = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ea() {
  return !1;
}
function vb(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var dv = "action",
  pb = "action.bound",
  fv = "autoAction",
  hb = "autoAction.bound",
  gb = "<unnamed action>",
  as = ka(dv),
  bb = ka(pb, { bound: !0 }),
  is = ka(fv, { autoAction: !0 }),
  yb = ka(hb, { autoAction: !0, bound: !0 });
function vv(e) {
  var t = function (n, a) {
    if (dt(n)) return gr(n.name || gb, n, e);
    if (dt(a)) return gr(n, a, e);
    if (Oa(a)) return (e ? is : as).decorate_20223_(n, a);
    if (vr(a)) return wa(n, a, e ? is : as);
    if (vr(n)) return St(ka(e ? fv : dv, { name: n, autoAction: e }));
  };
  return t;
}
var et = vv(!1);
Object.assign(et, as);
var sa = vv(!0);
Object.assign(sa, is);
et.bound = St(bb);
sa.bound = St(yb);
function ca(e) {
  return dt(e) && e.isMobxAction === !0;
}
function mb(e, t) {
  var r, n, a, i;
  t === void 0 && (t = Ff);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new Rt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = wb(t),
      l = !1;
    c = new Rt(
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
var _b = function (t) {
  return t();
};
function wb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : _b;
}
var Ob = "onBO",
  kb = "onBUO";
function Sb(e, t, r) {
  return hv(Ob, e, t, r);
}
function pv(e, t, r) {
  return hv(kb, e, t, r);
}
function hv(e, t, r, n) {
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
var Eb = "never",
  Ma = "always",
  xb = "observed";
function Cb(e) {
  e.isolateGlobalState === !0 && ob();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Ma ? !0 : t === Eb ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ma ? Ma : r === xb;
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
    e.reactionScheduler && fb(e.reactionScheduler));
}
function Rb(e, t, r, n) {
  var a = cg(t);
  return (
    Or(function () {
      var i = Qr(e, n)[N];
      Ei(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Pb(e, t) {
  return gv(ui(e, t));
}
function gv(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Ab(e.observing_).map(gv)),
    t
  );
}
function Ab(e) {
  return Array.from(new Set(e));
}
var jb = 0;
function bv() {
  this.message = "FLOW_CANCELLED";
}
bv.prototype = Object.create(Error.prototype);
var po = Yf("flow"),
  Ib = Yf("flow.bound", { bound: !0 }),
  Vr = Object.assign(function (t, r) {
    if (Oa(r)) return po.decorate_20223_(t, r);
    if (vr(r)) return wa(t, r, po);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          c = arguments,
          u = ++jb,
          l = et(a + " - runid: " + u + " - init", n).apply(s, c),
          d,
          f = void 0,
          h = new Promise(function (v, p) {
            var g = 0;
            d = p;
            function b(O) {
              f = void 0;
              var m;
              try {
                m = et(a + " - runid: " + u + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return p(S);
              }
              w(m);
            }
            function _(O) {
              f = void 0;
              var m;
              try {
                m = et(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, O);
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
          (h.cancel = et(a + " - runid: " + u + " - cancel", function () {
            try {
              f && lu(f);
              var v = l.return(void 0),
                p = Promise.resolve(v.value);
              (p.then(Fr, Fr), lu(p), d(new bv()));
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, po);
Vr.bound = St(Ib);
function lu(e) {
  dt(e.cancel) && e.cancel();
}
function ua(e) {
  return e?.isMobXFlow === !0;
}
function Db(e, t) {
  return e ? Di(e) || !!e[N] || Is(e) || oi(e) || ji(e) : !1;
}
function yv(e) {
  return Db(e);
}
function zt(e, t) {
  (t === void 0 && (t = void 0), Qe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function Er(e) {
  return e[N];
}
var Tb = {
  has: function (t, r) {
    return Er(t).has_(r);
  },
  get: function (t, r) {
    return Er(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return vr(r) ? ((a = Er(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return vr(r) ? ((n = Er(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Er(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Er(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function Mb(e, t) {
  var r, n;
  return (
    zf(),
    (e = Qr(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Tb))
  );
}
function Je(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Sa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Bf(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Xe(e, t) {
  var r = _r();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && W(14), !!t);
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
function Ea(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Bf(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function lt(e, t) {
  var r = _r(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Ut(r);
  }
}
function Ms(e, t, r) {
  return (
    Or(function () {
      var n,
        a = Qr(e, r)[N];
      ((n = t) != null || (t = vg(e)),
        Ei(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var du = "splice",
  Et = "update",
  Lb = 1e4,
  Nb = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(si, r)
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
      W(15);
    },
  },
  Ls = (function () {
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
        (typeof n != "number" || isNaN(n) || n < 0) && W("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var i = new Array(n - a), o = 0; o < n - a; o++) i[o] = void 0;
            this.spliceWithArray_(a, 0, i);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && W(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Ev(n + a + 1));
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
          i === void 0 && (i = Xo),
          Je(this))
        ) {
          var c = Xe(this, { object: this.proxy_, type: du, index: n, removedCount: a, added: i });
          if (!c) return Xo;
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
        if (i.length < Lb) {
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
                  type: Et,
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
                  type: du,
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
        if ((this.legacyMode_ && n > i.length && W(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Je(this)) {
            var s = Xe(this, { type: Et, object: this.proxy_, index: n, newValue: a });
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
function $b(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    zf(),
    Or(function () {
      var a = new Ls(r, t, n, !1);
      Uf(a.values_, N, a);
      var i = new Proxy(a.values_, Nb);
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
    return (A.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && W(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[N],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", qe);
ie("concat", qe);
ie("flat", qe);
ie("includes", qe);
ie("indexOf", qe);
ie("join", qe);
ie("lastIndexOf", qe);
ie("slice", qe);
ie("toString", qe);
ie("toLocaleString", qe);
ie("toSorted", qe);
ie("toSpliced", qe);
ie("with", qe);
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
ie("reduce", mv);
ie("reduceRight", mv);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (si[e] = t(e));
}
function qe(e) {
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
function mv(e) {
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
var Fb = mr("ObservableArrayAdministration", Ls);
function Ii(e) {
  return ki(e) && Fb(e[N]);
}
var zb = {},
  Qt = "add",
  ci = "delete",
  _v = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
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
        dt(Map) || W(18),
        Or(function () {
          ((i.keysAtom_ = Wf("ObservableMap.keys()")),
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
          var o = (i = new dr(this.has_(n), xi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            pv(o, function () {
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
          var i = Xe(this, { type: ci, object: this, name: n });
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
            zt(function () {
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
                    type: Et,
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
          zt(function () {
            var u,
              l = new dr(a, i.enhancer_, "ObservableMap.key", !1);
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
                  type: Qt,
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
        return fu({
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
        return fu({
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
        for (var i = zr(this), o; !(o = i()).done; ) {
          var s = o.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          wr(n) && (n = new Map(n)),
          zt(function () {
            tr(n)
              ? sg(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Jr(n)
                  ? (og(n) || W(19, n),
                    n.forEach(function (i, o) {
                      return a.set(o, i);
                    }))
                  : n != null && W(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        zt(function () {
          nv(function () {
            for (var a = zr(n.keys()), i; !(i = a()).done; ) {
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
              var i = Bb(n), o = new Map(), s = !1, c = zr(a.data_.keys()), u;
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
            for (var h = zr(i.entries()), v; !(v = h()).done; ) {
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
  wr = mr("ObservableMap", _v);
function fu(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), $s(e));
}
function Bb(e) {
  if (Jr(e) || wr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (tr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var qb = {},
  wv = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = qb),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        dt(Set) || W(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, a);
        }),
        Or(function () {
          ((i.atom_ = Wf(i.name_)), r && i.replace(r));
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
          nv(function () {
            for (var a = zr(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = zr(this), o; !(o = i()).done; ) {
          var s = o.value;
          n.call(a, s, s, this);
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
          zt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            s = ut(this),
            c =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Qt,
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
        if (Je(this)) {
          var i = Xe(this, { type: ci, object: this, oldValue: n });
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
            zt(function () {
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
        return vu({
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
        return vu({
          next: function () {
            var o = a.next(),
              s = o.value,
              c = o.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ft(n) && !wt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ft(n) && !wt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ft(n) && !wt(n)) return n.symmetricDifference(this);
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
        if (Ft(n) && !wt(n)) return n.isDisjointFrom(this);
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
              : Ft(n)
                ? (a.clear(),
                  n.forEach(function (i) {
                    return a.add(i);
                  }))
                : n != null && W("Cannot initialize set from " + n);
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
  wt = mr("ObservableSet", wv);
function vu(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), $s(e));
}
var pu = Object.create(null),
  hu = "remove",
  Ov = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = Ng),
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
        if (i instanceof ft) return (i.set(a), !0);
        if (Je(this)) {
          var o = Xe(this, { type: Et, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var s = ut(this),
            c = !1,
            u =
              s || c
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
          (i.setNewValue_(a), s && lt(this, u));
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
            ((a = new dr(n in this.target_, xi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[Ot]) != null && i[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
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
          bu(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && bu(this, i, n), s);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Qe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Je(this)) {
            var s = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = pr({}, a, { value: c }));
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
          var s = this.delete_(n);
          if (!s) return s;
          if (Je(this)) {
            var c = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = gu(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else kt(this.target_, n, l);
          var d = new dr(a, i, "ObservableObject.key", !1);
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
            var s = Xe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Qt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = gu(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else kt(this.target_, n, u);
          (this.values_.set(n, new ft(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Je(this)) {
          var i = Xe(this, { object: this.proxy_ || this.target_, name: n, type: hu });
          if (!i) return null;
        }
        try {
          var o;
          Qe();
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
            (u && (this.values_.delete(n), u instanceof dr && (l = u.value_), uv(u)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || c)
          ) {
            var f = {
              type: hu,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && lt(this, f);
          }
        } finally {
          Ze();
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
                  type: Qt,
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
function Qr(e, t) {
  var r;
  if (qt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Ov(e, new Map(), String(n), Kg(t));
  return (Si(e, N, a), e);
}
var Ub = mr("ObservableObjectAdministration", Ov);
function gu(e) {
  return (
    pu[e] ||
    (pu[e] = {
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
  return ki(e) ? Ub(e[N]) : !1;
}
function bu(e, t, r) {
  var n;
  (n = e.target_[Ot]) == null || delete n[r];
}
var Vb = Sv(0),
  Gb = (function () {
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
  kv = function () {};
function Hb(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Hb(kv, Array.prototype);
var Ns = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      Or(function () {
        var c = new Ls(i, a, o, !0);
        ((c.proxy_ = s),
          Uf(s, N, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          Gb && Object.defineProperty(s, "0", Vb));
      }),
      s
    );
  }
  Hf(t, e);
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
      return $s({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Xr(t, [
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
})(kv);
Object.entries(si).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Si(Ns.prototype, t, r);
});
function Sv(e) {
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
function Wb(e) {
  kt(Ns.prototype, "" + e, Sv(e));
}
function Ev(e) {
  if (e > ho) {
    for (var t = ho; t < e + 100; t++) Wb(t);
    ho = e;
  }
}
Ev(1e3);
function Kb(e, t, r) {
  return new Ns(e, t, r);
}
function ui(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ii(e)) return (t !== void 0 && W(23), e[N].atom_);
    if (wt(e)) return e.atom_;
    if (wr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, os(e)), r);
    }
    if (Di(e)) {
      if (!t) return W(26);
      var n = e[N].values_.get(t);
      return (n || W(27, t, os(e)), n);
    }
    if (Is(e) || ji(e) || oi(e)) return e;
  } else if (dt(e) && oi(e[N])) return e[N];
  W(28);
}
function Yb(e, t) {
  if ((e || W(29), Is(e) || ji(e) || oi(e) || wr(e) || wt(e))) return e;
  if (e[N]) return e[N];
  W(24, e);
}
function os(e, t) {
  var r;
  if (t !== void 0) r = ui(e, t);
  else {
    if (ca(e)) return e.name;
    Di(e) || wr(e) || wt(e) ? (r = Yb(e)) : (r = ui(e));
  }
  return r.name_;
}
function Or(e) {
  var t = _r(),
    r = Pi(!0);
  Qe();
  try {
    return e();
  } finally {
    (Ze(), Ai(r), Ut(t));
  }
}
var yu = Oi.toString;
function xv(e, t, r) {
  return (r === void 0 && (r = -1), ss(e, t, r));
}
function ss(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = yu.call(e);
  if (o !== yu.call(t)) return !1;
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
  ((e = mu(e)), (t = mu(t)));
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
    for (; l--; ) if (!ss(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var v = d[h];
      if (!(qt(t, v) && ss(e[v], t[v], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function mu(e) {
  return Ii(e) ? e.slice() : Jr(e) || wr(e) || Ft(e) || wt(e) ? Array.from(e.entries()) : e;
}
var _u,
  Jb = ((_u = wi().Iterator) == null ? void 0 : _u.prototype) || {};
function $s(e) {
  return ((e[Symbol.iterator] = Xb), Object.assign(Object.create(Jb), e));
}
function Xb() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = wi();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: vb, extras: { getDebugName: os }, $mobx: N });
var y = vt();
const k = rr(y),
  wu = hh({ __proto__: null, default: k }, [y]);
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ms) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Qb(e) {
  e();
}
function Zb(e) {
  (e || (e = Qb), Cb({ reactionScheduler: e }));
}
function ey(e) {
  return Pb(e);
}
var ty = 1e4,
  ry = 1e4,
  ny = (function () {
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
            (n === void 0 && (n = ty), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, ry));
        },
      }),
      e
    );
  })(),
  ay = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ny,
  la = new ay(function (e) {
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
 */ var Ou;
function iy() {
  if (Ou) return bo;
  Ou = 1;
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
var ku;
function oy() {
  return (ku || ((ku = 1), (go.exports = iy())), go.exports);
}
var sy = oy();
function Su(e) {
  e.reaction = new Rt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function cy(e, t) {
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
          n.reaction || (Su(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Su(a), la.register(r, a, a)),
    k.useDebugValue(a.reaction, ey),
    sy.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
  Cv = typeof Symbol == "function" && Symbol.for,
  uy =
    (mo =
      (yo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || yo === void 0
        ? void 0
        : yo.configurable) !== null && mo !== void 0
      ? mo
      : !1,
  Eu = Cv
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  xu = Cv
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function ly(e, t) {
  var r;
  if (xu && e.$$typeof === xu)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Eu && e.$$typeof === Eu && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, c) {
    return cy(function () {
      return a(s, c);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    uy && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    fy(e, o),
    o
  );
}
var dy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function fy(e, t) {
  Object.keys(e).forEach(function (r) {
    dy[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var _o;
Zb(mi.unstable_batchedUpdates);
_o = la.finalizeAllImmediately;
function vy(e, t) {
  if (Cu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Cu(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Cu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ru = Symbol("patchMixins"),
  Rv = Symbol("patchedDefinition");
function py(e, t) {
  var r = (e[Ru] = e[Ru] || {}),
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
function Au(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Pu.call.apply(Pu, [this, e, t].concat(i));
  };
  return r;
}
function hy(e, t, r) {
  var n = py(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Rv])) {
    var i = e[t],
      o = Pv(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function Pv(e, t, r, n, a) {
  var i,
    o = Au(a, n);
  return (
    (i = {}),
    (i[Rv] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (c) {
      if (this === e) o = Au(c, n);
      else {
        var u = Pv(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var ju = Symbol("ObserverAdministration"),
  Iu = Symbol("isMobXReactObserver");
function cs(e) {
  var t;
  return (t = e[ju]) != null
    ? t
    : (e[ju] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: us(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function gy(e) {
  var t = e.prototype;
  if (e[Iu]) {
    var r = us(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Iu] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Du;
    else if (t.shouldComponentUpdate !== Du)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = us(e);
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
        value: by.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = cs(this);
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
    hy(t, "componentWillUnmount", function () {
      var o,
        s = cs(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function us(e) {
  return e.displayName || e.name || "<component>";
}
function by(e) {
  var t = e.bind(this),
    r = cs(this);
  function n() {
    r.reaction || ((r.reaction = yy(r)), r.mounted || la.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = ab(!1, t);
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
function yy(e) {
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
function Du(e, t) {
  return this.state !== t ? !0 : !vy(this.props, e);
}
function Ti(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? gy(e)
      : ly(e)
  );
}
function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ls.apply(null, arguments)
  );
}
function my(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var _y = ["children"],
  Tu = k.createContext({});
function Av(e) {
  var t = e.children,
    r = my(e, _y),
    n = k.useContext(Tu),
    a = k.useRef(ls({}, n, r)),
    i = a.current;
  return k.createElement(Tu.Provider, { value: i }, t);
}
Av.displayName = "MobXProvider";
k.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var wy = Object.defineProperty,
  Oy = Object.getOwnPropertyDescriptor,
  At = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Oy(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && wy(t, r, a), a);
  };
class gt {
  constructor() {
    ((this.isLoading = !1), Ms(this));
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
At([se], gt.prototype, "isLoading", 2);
At([se], gt.prototype, "plan", 2);
At([se], gt.prototype, "planString", 2);
At([se], gt.prototype, "slowQueries", 2);
At([se], gt.prototype, "history", 2);
At([et.bound], gt.prototype, "showPlan", 1);
At([et.bound], gt.prototype, "saveSlowQuery", 1);
At([et.bound], gt.prototype, "saveHistory", 1);
At([et], gt.prototype, "loading", 1);
At([et], gt.prototype, "stopLoading", 1);
const ky = new gt();
var Sy = Object.defineProperty,
  Ey = Object.getOwnPropertyDescriptor,
  Fs = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Ey(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && Sy(t, r, a), a);
  };
class Mi {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Ms(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
Fs([se], Mi.prototype, "state", 2);
Fs([se], Mi.prototype, "lastState", 2);
Fs([et.bound], Mi.prototype, "saveState", 1);
const zs = new Mi();
class xy {
  constructor() {
    ((this.usersStore = ky), (this.stateStore = zs));
  }
}
const jv = new xy(),
  Cy = y.createContext(jv),
  Li = () => y.useContext(Cy);
function le(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ie(e) {
  "@babel/helpers - typeof";
  return (
    (Ie =
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
    Ie(e)
  );
}
function Ry(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Iv(e) {
  var t = Ry(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function Mu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Iv(n.key), n));
  }
}
function de(e, t, r) {
  return (
    t && Mu(e.prototype, t),
    r && Mu(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Py(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Te(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Py(e);
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
function Me(e, t) {
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
    (t = Iv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function _e() {}
function Ay(e) {
  if (Array.isArray(e)) return e;
}
function jy(e, t) {
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
function ds(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Dv(e, t) {
  if (e) {
    if (typeof e == "string") return ds(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ds(e, t)
          : void 0
    );
  }
}
function Iy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return Ay(e) || jy(e, t) || Dv(e, t) || Iy();
}
var Tv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Dy = function (t) {
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
  Mv = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Lu = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Ty = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = Lu(o, n, a),
      c = Lu(i.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = X(l, 1),
      f = d[0];
    return (u.splice(c, 0, f), u);
  };
const My = "modulepreload",
  Ly = function (e, t) {
    return new URL(e, t).href;
  },
  Nu = {},
  Ny = function (t, r, n) {
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
          if (((l = Ly(l, n)), l in Nu)) return;
          Nu[l] = !0;
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
            ((h.rel = d ? "stylesheet" : My),
            d || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = l),
            c && h.setAttribute("nonce", c),
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
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o;
    }
    return a.then((o) => {
      for (const s of o || []) s.status === "rejected" && i(s.reason);
      return t().catch(i);
    });
  };
function K() {
  return (
    (K = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    K.apply(null, arguments)
  );
}
function $y(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function re(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = $y(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function $u(e, t) {
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
      ? $u(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $u(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fy = (function () {
  function e(t) {
    var r = this;
    (le(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = wo({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return de(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ie(r) === "object" && (this.payload = wo(wo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function zy(e) {
  if (Array.isArray(e)) return ds(e);
}
function By(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function qy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ne(e) {
  return zy(e) || By(e) || Dv(e) || qy();
}
function Uy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = H(e)) !== null; );
  return e;
}
function di() {
  return (
    (di =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Uy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    di.apply(null, arguments)
  );
}
function Vy(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Lv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lv = function () {
    return !!e;
  })();
}
function Gy(e, t, r, n) {
  var a = di(H(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var Hy = (function (e) {
  function t(r) {
    var n;
    return (
      le(this, t),
      (n = Vy(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Ne(n.context),
          i = Ne(n.handlers),
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
    Me(t, e),
    de(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : Gy(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(Fy);
function Fu(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o),
      c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function pe(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(c) {
        Fu(i, n, a, o, s, "next", c);
      }
      function s(c) {
        Fu(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
var Oo = { exports: {} },
  ko = { exports: {} },
  zu;
function Nv() {
  return (
    zu ||
      ((zu = 1),
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
function $v() {
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
var qu;
function Fv() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        var t = $v();
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
                    z = I || [],
                    U = !1,
                    Q = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (Y, $) {
                        return ((M = Y), (P = 0), (T = n), (Q.n = $), u);
                      },
                    };
                  function V(q, Y) {
                    for (P = q, T = Y, a = 0; !U && B && !$ && a < z.length; a++) {
                      var $,
                        j = z[a],
                        be = Q.p,
                        oe = j[2];
                      q > 3
                        ? ($ = oe === Y) &&
                          ((T = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= be &&
                          (($ = q < 2 && be < j[1])
                            ? ((P = 0), (Q.v = Y), (Q.n = j[1]))
                            : be < oe &&
                              ($ = q < 3 || j[0] > Y || Y > oe) &&
                              ((j[4] = q), (j[5] = Y), (Q.n = oe), (P = 0)));
                    }
                    if ($ || q > 1) return u;
                    throw ((U = !0), Y);
                  }
                  return function (q, Y, $) {
                    if (B > 1) throw TypeError("Generator is already running");
                    for (U && Y === 1 && V(Y, $), P = Y, T = $; (a = P < 2 ? n : T) || !U; ) {
                      M || (P ? (P < 3 ? (P > 1 && (Q.n = -1), V(P, T)) : (Q.n = T)) : (Q.v = T));
                      try {
                        if (((B = 2), M)) {
                          if ((P || (q = "next"), (a = M[q]))) {
                            if (!(a = a.call(M, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = M.return) && a.call(M),
                              P < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + q + "' method",
                                )),
                                (P = 1)));
                          M = n;
                        } else if ((a = (U = Q.n < 0) ? T : S.call(C, Q)) !== u) break;
                      } catch (j) {
                        ((M = n), (P = 1), (T = j));
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
  Ro = { exports: {} },
  Uu;
function zv() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        var t = Nv(),
          r = $v();
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
      })(Ro)),
    Ro.exports
  );
}
var Vu;
function Bv() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        var t = Fv(),
          r = zv();
        function n(a, i, o, s, c) {
          return new r(t().w(a, i, o, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Co)),
    Co.exports
  );
}
var Gu;
function Wy() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        var t = Bv();
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
var Po = { exports: {} },
  Hu;
function Ky() {
  return (
    Hu ||
      ((Hu = 1),
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
      })(Po)),
    Po.exports
  );
}
var Ao = { exports: {} },
  jo = { exports: {} },
  Wu;
function Yy() {
  return (
    Wu ||
      ((Wu = 1),
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
var Ku;
function Jy() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        var t = Yy().default;
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
var Yu;
function Xy() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        var t = Nv(),
          r = Fv(),
          n = Wy(),
          a = Bv(),
          i = zv(),
          o = Ky(),
          s = Jy();
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
var Io, Ju;
function Qy() {
  if (Ju) return Io;
  Ju = 1;
  var e = Xy()();
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
var Zy = Qy();
const F = rr(Zy);
var sr = {},
  xr = {},
  La = {},
  Xu;
function em() {
  if (Xu) return La;
  ((Xu = 1), Object.defineProperty(La, "__esModule", { value: !0 }));
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
  Rn = {},
  Qu;
function tm() {
  if (Qu) return Rn;
  ((Qu = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn._resolveDeltasResponse = void 0));
  const e = er(),
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
  Rn._resolveDeltasResponse = r;
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
  return Rn;
}
var Zu;
function qv() {
  if (Zu) return Cr;
  Zu = 1;
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
  const t = er(),
    r = tm();
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
var Pn = {},
  el;
function rm() {
  if (el) return Pn;
  ((el = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._makeParamStoreGetter = void 0));
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
  return ((Pn._makeParamStoreGetter = u), Pn);
}
var cr = {},
  tl;
function nm() {
  if (tl) return cr;
  tl = 1;
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
  const t = er(),
    r = qv();
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
var rl;
function am() {
  if (rl) return xr;
  rl = 1;
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
  const t = er(),
    r = em(),
    n = qv(),
    a = rm(),
    i = nm();
  let o = class fs extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof fs
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new fs(c ?? "", {}));
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
      var l, d, f;
      const h = (0, t._normalizeUser)(c, u),
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
var nl;
function im() {
  return (
    nl ||
      ((nl = 1),
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
        const n = er(),
          a = am();
        ((e.StatsigClient = a.default), r(er(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(sr)),
    sr
  );
}
var ct = im(),
  Do = { exports: {} },
  al;
function om() {
  return (
    al ||
      ((al = 1),
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
var sm = om();
const cm = rr(sm);
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
function Yt(e) {
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
var Na = "@all-features",
  um = (function () {
    function e() {
      (le(this, e), x(this, "eventToValue", new Map()), (this.emitter = new cm()));
    }
    return de(e, [
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
  lm = "fedramp-moderate";
function dm() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === lm;
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
  fm = [
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
function vs(e) {
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
var $a = function (t) {
    return vs({ perimeter: dm() ? fa.FEDRAMP_MODERATE : fa.COMMERCIAL }, t);
  },
  An = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, h) {
      var v = X(f, 1),
        p = v[0],
        g = X(h, 1),
        b = g[0];
      return p.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var s = X(n[o], 2),
        c = s[1],
        u = X(a[o], 2),
        l = u[1];
      if (c !== l) return !1;
    }
    return !0;
  },
  sl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  vm = function (t) {
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
    var f = re(t, fm);
    return vs(
      vs({}, f),
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
  pm = Object.entries(Bs).map(function (e) {
    var t = X(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Uv = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = pm.find(function (o) {
            var s = X(o, 1),
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
  ps = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  cl = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (le(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return de(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i,
              o = this.getValue(r, n);
            if (o == null) return n;
            var s = Array.isArray(n) ? "array" : Ie(n),
              c = Array.isArray(o) ? "array" : Ie(o);
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
                Uv(r.details),
                ps(
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
  ul = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (le(this, e),
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
    return de(
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
              : n == null || (Ie(o) === Ie(n) && Array.isArray(n) === Array.isArray(o))
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
                Uv(r.details),
                function (l, d) {
                  return r.get(d);
                },
                ps(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                ps(
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
  Br = "0.0.0-development";
function hm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vv = function () {
    return !!e;
  })();
}
function gm(e, t, r) {
  if (Vv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && da(a, r.prototype), a);
}
function hs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (hs = function (n) {
      if (n === null || !hm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return gm(n, arguments, H(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        da(a, n)
      );
    }),
    hs(e)
  );
}
function bm(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Gv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Gv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gv = function () {
    return !!e;
  })();
}
var ll = (function (e) {
  function t(r) {
    return (le(this, t), bm(this, t, [r]));
  }
  return (Me(t, e), de(t));
})(hs(Error));
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
function ym(e) {
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
var mm = 5e3,
  _m = "https://api.atlassian.com/flags",
  wm = "https://api.stg.atlassian.com/flags",
  Om = "https://api.dev.atlassian.com/flags",
  km = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Sm = "https://api.atlassian-us-gov-mod.com/flags",
  Em = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  xm = "oasis-stg.com/flags",
  Cm = "atlassian-isolated.net/flags",
  Rm = "/gateway/api/flags",
  To = (function () {
    function e() {
      le(this, e);
    }
    return de(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = pe(
            F.mark(function n(a) {
              var i, o;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s;
              return F.wrap(
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
                        new ll(
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
                      throw new ll("Unexpected 204 response");
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
          if (n) return Rm;
          if (a === fa.FEDRAMP_MODERATE)
            switch (r) {
              case Yn.Production:
                return Sm;
              case Yn.Staging:
                return km;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === fa.COMMERCIAL)
            switch (r) {
              case Yn.Development:
                return Om;
              case Yn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : wm;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : _m;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var c, u, l, d, f;
              return F.wrap(
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
                          (u = o.fetchTimeoutMs || mm),
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
                            ym(
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
          if (n === void 0) return r ? Em.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(xm);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Cm) : null;
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
function jn(e) {
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
function Pm(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Hv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Hv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hv = function () {
    return !!e;
  })();
}
function Am(e, t, r, n) {
  var a = di(H(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var jm = (function (e) {
  function t() {
    var r;
    return (
      le(this, t),
      (r = Pm(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Me(t, e),
    de(t, [
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
          var r = pe(
            F.mark(function a(i, o) {
              return F.wrap(function (c) {
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
          var r = pe(
            F.mark(function a(i, o, s) {
              return F.wrap(
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
          var r = pe(
            F.mark(function a(i, o, s) {
              return F.wrap(function (u) {
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
          Am(t, "setData", this)([n, a]);
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
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Im(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Dm(e)) || t) {
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
function Dm(e, t) {
  if (e) {
    if (typeof e == "string") return pl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? pl(e, t)
          : void 0
    );
  }
}
function pl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Mo = "LocalOverride:Recognized",
  Tm = "STATSIG_OVERRIDES",
  hl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Rr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  We = function (t, r) {
    return r + ":" + t;
  },
  Mm = (function () {
    function e(t) {
      (le(this, e),
        (this._overrides = Rr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return de(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Rr();
          } catch {
            return Rr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Rr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
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
                f = X(l[u], 2),
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
                _ = X(g[p], 2),
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
                I = X(S[m], 2),
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
            this.parseStoredOverrides(hl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(hl);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = Im(o),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value,
                  l = He._DJB2(u);
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
          var n = Ce(Ce({}, Rr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = X(i[a], 2), s = o[0], c = o[1], u = 0, l = Object.entries(c);
              u < l.length;
              u++
            ) {
              var d = X(l[u], 2),
                f = d[0],
                h = d[1];
              this._djb2Map.set(We(He._DJB2(f), s), h);
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
            this._djb2Map.set(We(He._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(We(He._DJB2(r), "gates")),
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
            : Ce(Ce({}, r), {}, { value: i, details: Ce(Ce({}, r.details), {}, { reason: Mo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(We(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(He._DJB2(r), "configs")),
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
            this._djb2Map.set(We(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(We(He._DJB2(r), "configs")),
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
            this._djb2Map.set(We(He._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(We(He._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Rr();
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
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Mo }),
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
                  get: He._makeTypedGet(r.name, i),
                  details: Ce(Ce({}, r.details), {}, { reason: Mo }),
                },
              );
        },
      },
    ]);
  })(),
  Lm = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bl = "client-default-key",
  Nm = "https://xp.atlassian.com/v1/rgstr",
  $m = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Tm : n,
        i = r.overrideAdapter;
      (le(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new um()),
        x(this, "dataAdapter", new jm()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new Mm(a)));
    }
    return de(e, [
      {
        key: "initialize",
        value: (function () {
          var t = pe(
            F.mark(function n(a, i, o) {
              var s = this,
                c,
                u;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var c = this,
                u,
                l;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s = this,
                c,
                u,
                l,
                d = arguments;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, c;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i) {
              var o = this;
              return F.wrap(
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
          var t = pe(
            F.mark(function n(a, i) {
              var o,
                s,
                c = arguments;
              return F.wrap(
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
            return cl.fromExperiment(
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
              new cl(r, {}, "", { time: Date.now(), reason: Bs.Error })
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, c, u, l, d, f, h, v;
              return F.wrap(
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
                          (h = X(f, 2)),
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
          var t = pe(
            F.mark(function n(a, i, o, s) {
              var c, u, l, d, f, h, v, p;
              return F.wrap(
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
                          (v = X(h, 2)),
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s,
                c,
                u,
                l,
                d,
                f,
                h,
                v = arguments;
              return F.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = v.length > 3 && v[3] !== void 0 ? v[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (u = vm(a)),
                          u.sdkKey || (u.sdkKey = bl),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = Jt(
                              Jt({}, u.networkConfig),
                              {},
                              { logEventUrl: Nm },
                            )),
                          u.perimeter === fa.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (f = re(u, Lm)),
                          (this.user = sl(i, o)),
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
                          (this.statsigClient = new ct.StatsigClient(bl, this.user, h)),
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
                c,
                u,
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
                            pe(
                              F.mark(function h() {
                                return F.wrap(function (p) {
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
          var t = pe(
            F.mark(function n(a, i, o) {
              var s, c, u, l, d, f, h, v, p;
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
                        ((u = b.sent), (l = sl(i, u.customAttributesFromFetch)), (b.next = 13));
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
            return ul.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              ul.fromLayer(ct._makeLayer(r, { reason: "Error" }, null))
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
      le(this, e);
    }
    return de(e, null, [
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
x(G, "client", new $m());
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
var gs = G;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = G;
  else {
    var Fa, Lo;
    gs = window.__FEATUREGATES_JS__;
    var yl =
      ((Fa = gs) === null || Fa === void 0 || (Lo = Fa.getPackageVersion) === null || Lo === void 0
        ? void 0
        : Lo.call(Fa)) || "4.10.0 or earlier";
    if (yl !== Br) {
      var Fm = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(yl, " when module version ")
        .concat(Br, " was loading.");
      console.warn(Fm);
    }
  }
var Pr,
  Ar,
  zm =
    (globalThis == null ||
    (Pr = globalThis.process) === null ||
    Pr === void 0 ||
    (Pr = Pr.env) === null ||
    Pr === void 0
      ? void 0
      : Pr.JEST_WORKER_ID) !== void 0,
  Bm =
    !zm &&
    (globalThis == null ||
    (Ar = globalThis.process) === null ||
    Ar === void 0 ||
    (Ar = Ar.env) === null ||
    Ar === void 0
      ? void 0
      : Ar.NODE_ENV) !== "production",
  qm = function () {
    var t;
    Bm && (t = console).debug.apply(t, arguments);
  },
  qs = {},
  Um = "@atlaskit/platform-feature-flags",
  ta = "__PLATFORM_FEATURE_FLAGS__",
  Wv = typeof process < "u" && typeof qs < "u",
  Vm = Wv ? qs.ENABLE_PLATFORM_FF === "true" : !1,
  Gm = Wv ? qs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Hm = Vm || Gm,
  Wm = { booleanResolver: void 0 },
  ra = typeof window < "u" ? window : globalThis;
ra[ta] = ra[ta] || Wm;
function Km(e) {
  if (Hm)
    return (
      qm(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Um,
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
      return gs.checkGate(e);
    var a = (n = ra[ta]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function ke(e) {
  return Km(e);
}
var Ym = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Jm = function () {
    return y.useContext(Ym);
  },
  fi = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function Xm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Qm(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    i = n.current || !!(t && a.current.inputs && Xm(t, a.current.inputs)),
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
function Zm(e, t) {
  return Qm(function () {
    return e;
  }, t);
}
function Kv() {
  var e = Jm(),
    t = Zm(
      function (r) {
        return new Hy({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
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
function e_(e) {
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
function va(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Kv(),
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
          p = e_({ componentName: n, packageName: i, packageVersion: o }, l.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), d.current(h, v));
      },
      [r, n, a, i, o, u, l, d],
    );
  return f;
}
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
function t_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _l(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _l(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = Kv(),
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
          h = t_({ componentName: n, packageName: a, packageVersion: i }, u.current);
        f.context.push(h);
        var v = f.clone();
        (v && v.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, c, u, l],
    );
  return d;
}
var br = "ASC",
  vi = "DESC",
  r_ = "small",
  pi = "large",
  Yv = 0.22;
const n_ = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, n_) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function $t(e, t, r) {
  return e ?? "var(--c-, )";
}
var Ol = "#FF5630",
  kl = "#DE350B",
  jr = "#BF2600",
  Sl = "#FFC400",
  El = "#FFAB00",
  Ir = "#FF991F",
  Jv = "#DEEBFF",
  Jn = "#B3D4FF",
  hi = "#4C9AFF",
  xl = "#2684FF",
  Cl = "#0065FF",
  Dr = "#0052CC",
  Rl = "#0747A6",
  Xt = "#FFFFFF",
  a_ = "#FAFBFC",
  Re = "#F4F5F7",
  bs = "#DFE1E6",
  ur = "#A5ADBA",
  i_ = "#8993A4",
  o_ = "#6B778C",
  Pl = "#5E6C84",
  s_ = "#505F79",
  pa = "#42526E",
  Ke = "#253858",
  Tr = "#172B4D",
  In = "rgba(9, 30, 66, 0.04)",
  ys = "rgba(9, 30, 66, 0.08)",
  XS = "rgba(9, 30, 66, 0.25)",
  QS = "rgba(9, 30, 66, 0.31)",
  st = "#9FB0CC",
  c_ = "#8C9CB8",
  No = "#67758F",
  Dn = "#3B475C",
  Al = "#313D52",
  Tn = "#1B2638",
  Mr = "#0D1424",
  u_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
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
function Il(e) {
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
var l_ = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = re(e, u_);
    return y.createElement(
      "table",
      K({ inert: o ? "" : void 0, ref: t }, s, {
        "data-testid": i && "".concat(i, "--table"),
        className: R([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179r1tpy",
        ]),
        style: Il(
          Il(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(a_, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                Jv,
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
            "--_mwqor1": $t(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(bs, ")"),
              ),
            ),
          },
        ),
      }),
      a,
    );
  }),
  d_ = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  f_ = function (t) {
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
  v_ = function (t) {
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
  p_ = function (t) {
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
  h_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Dl(e, t) {
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
function Tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function g_(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Xv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Ml = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  b_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === br ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = Ml(c.cells, t, n),
        d = Ml(u.cells, t, n);
      if (l === void 0 || d === void 0) return i;
      if (Ie(l) !== Ie(d)) {
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
function y_(e) {
  var t = (function (r) {
    function n() {
      var a;
      le(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = g_(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
    }
    return (
      Me(n, r),
      de(
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
                c = re(i, h_);
              return k.createElement(
                e,
                K({ pageRows: this.state.pageRows, head: o }, c, { ref: s }),
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
                h ? ((v = s), (p = s)) : ((v = b_(c, s, u, l) || []), (p = Tv(v, d, f))),
                Tl(Tl({}, o), {}, { pageRows: p })
              );
            },
          },
        ],
      )
    );
  })(k.Component);
  return k.forwardRef(function (r, n) {
    return k.createElement(t, K({}, r, { forwardedRef: n }));
  });
}
var m_ = "--local-dynamic-table-width",
  Qv = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, m_, "".concat(r, "%")) : void 0;
  },
  __ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  w_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = re(t, __);
    return y.createElement(
      "td",
      K(
        {
          style: Qv({ width: r }),
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
  O_ = ["isHighlighted", "children", "style", "testId", "className"];
function Ll(e, t) {
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
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ll(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var k_ = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = re(e, O_);
    return y.createElement(
      "tr",
      K(
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
          style: Nl(
            Nl({}, a),
            {},
            {
              "--_4vkylo": $t(
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
  S_ = ["cells"],
  E_ = ["content", "testId"],
  x_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      c = re(r, S_);
    return k.createElement(
      k_,
      K(
        {},
        c,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (u, l) {
        var d = u.content,
          f = u.testId,
          h = re(u, E_),
          v = (n || { cells: [] }).cells[l] || {},
          p = v.shouldTruncate,
          g = v.width;
        return k.createElement(
          w_,
          K({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, h, {
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
function C_(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Zv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var R_ = (function (e) {
    function t() {
      return (le(this, t), C_(this, t, arguments));
    }
    return (
      Me(t, e),
      de(t, [
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
                return k.createElement(x_, {
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
  P_ = y_(
    k.forwardRef(function (e, t) {
      return k.createElement(R_, K({}, e, { forwardedRef: t }));
    }),
  );
function A_(e, t, r) {
  return (
    (t = H(t)),
    Te(e, ep() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ep = function () {
    return !!e;
  })();
}
var j_ = (function (e) {
  function t(r) {
    var n;
    return (le(this, t), (n = A_(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Me(t, e),
    de(
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
const Us = y.createContext(null);
var I_ = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function D_(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(pa, ")")
    : "var(--ds-icon-inverse, ".concat(Xt, ")");
}
var za = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  T_ = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  tp = k.memo(
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
        f = typeof l == "number" ? l : I_[l],
        h = "".concat(o, "ms"),
        v = D_(a),
        p = y.useContext(Us);
      return (
        T_(
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
            className: R([za.wrapperStyles, za.rotateStyles]),
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
              className: R([za.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: v },
              className: R([za.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function $l(e, t) {
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
function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $l(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $l(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var zl = "--contents-opacity",
  M_ = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  L_ = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Fl(Fl({}, x({}, zl, n)), {}, { "--_cnddr8": $t("var(".concat(zl, ")")) }),
      },
      r,
    );
  },
  N_ = function (t) {
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
function $_(e, t, r) {
  return (
    (t = H(t)),
    Te(e, rp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var np = (function (e) {
  function t() {
    return (le(this, t), $_(this, t, arguments));
  }
  return (
    Me(t, e),
    de(t, [
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
            M_,
            { testId: c },
            i ? k.createElement(L_, { contentsOpacity: s, testId: c }, a) : a,
            i &&
              k.createElement(
                N_,
                { testId: c },
                k.createElement(tp, {
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
x(np, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: Yv,
  loadingLabel: "Loading table",
});
var F_ = ["children", "testId"],
  z_ = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = re(e, F_);
    return y.createElement(
      "div",
      K({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  B_ = function (t) {
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
  q_ = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function U_(e, t, r) {
  return (
    (t = H(t)),
    Te(e, ap() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
    var r;
    le(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = U_(this, t, [].concat(a))),
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
          Ie(o.style) === "object" &&
          ((o.style.pointerEvents = c ? "none" : ""), (o.style.opacity = c ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Me(t, e),
    de(t, [
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
                B_,
                { testId: s },
                k.createElement(
                  q_,
                  { ref: this.spinnerRef },
                  k.createElement(tp, {
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
x(ip, "defaultProps", {
  isLoading: !0,
  spinnerSize: pi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Yv), ")"),
  loadingLabel: "Loading table",
});
function V_(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = X(n, 2),
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
  G_ = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  H_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  W_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  K_ = { core: 16, utility: 12 },
  Y_ = {
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
    if (d && !ke("platform-visual-refresh-icons"))
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
    var S = K_[w],
      C = Y_[w][O][g],
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
          h ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? W_[g] : O === "small" ? H_[g] : G_[g],
        ]),
      }),
    );
  });
const J_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Bl, default: Bl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ni = As(J_);
var ql;
function X_() {
  if (ql) return Ln;
  ((ql = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
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
function Ul(e, t) {
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
function Vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ul(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ul(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Q_ = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  Gl = y.memo(function (t) {
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
      K(
        {
          "data-testid": u,
          "data-vc": "icon-".concat(u),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Vl(
            Vl({}, p),
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
            c && Q_[c],
          ]),
        },
      ),
    );
  });
const Z_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Gl, default: Gl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  op = As(Z_);
var Hl;
function e0() {
  if (Hl) return Nn;
  ((Hl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = r(vt()),
    t = op;
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
var Wl;
function t0() {
  if (Wl) return Mn;
  ((Wl = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = n(vt()),
    t = n(X_()),
    r = n(e0());
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
var r0 = t0();
const n0 = rr(r0);
var $n = {},
  Fn = {},
  Kl;
function a0() {
  if (Kl) return Fn;
  ((Kl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
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
var zn = {},
  Yl;
function i0() {
  if (Yl) return zn;
  ((Yl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = r(vt()),
    t = op;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (zn.default = n), zn);
}
var Jl;
function o0() {
  if (Jl) return $n;
  ((Jl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = n(vt()),
    t = n(a0()),
    r = n(i0());
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
var s0 = o0();
const c0 = rr(s0);
var Vs = y.createContext("elevation.surface"),
  u0 = function () {
    return y.useContext(Vs);
  };
Vs.displayName = "SurfaceProvider";
var l0 = [
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
  d0 = ["className"],
  f0 = {
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
  sp = {
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
  v0 = {
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
  p0 = {
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
  h0 = {
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
  g0 = {
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
      S = re(e, l0);
    S.className;
    var C = re(S, d0),
      I = y.createElement(
        n,
        K(
          {
            style: w,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              i && f0[i],
              i && b0(i) && sp[i],
              l && v0[l],
              f && p0[f],
              g && h0[g],
              _ && g0[_],
              m,
            ]),
          },
          C,
          { "data-testid": O },
        ),
        a,
      );
    return i ? y.createElement(Vs.Provider, { value: i }, I) : I;
  });
function b0(e) {
  return e in sp;
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
  cp = (...e) => R(e);
function y0() {
  return {
    css() {
      throw $o();
    },
    cssMap() {
      throw $o();
    },
    cx: cp,
    XCSSProp() {
      throw $o();
    },
  };
}
var m0 = y0(),
  _0 = m0.cx,
  w0 = [
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
  Xl = {
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
  Ql = {
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
  O0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  k0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  S0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  E0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  x0 = { root: "_1e0c1txw _vchhusvi" },
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
        p = re(e, w0);
      return y.createElement(
        n,
        K({}, p, {
          role: a,
          className: R([
            x0.root,
            s && Ql[s],
            c && Ql[c],
            s && Xl[s],
            u && Xl[u],
            i && E0[i],
            f && k0[f],
            o && O0[o],
            h && S0[h],
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
var C0 = [
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
  ms = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  R0 = function (t) {
    var r = t.children;
    return y.createElement("span", { className: R([ms.separator]) }, r);
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
        b = re(e, C0),
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
        K({}, b, {
          as: r,
          role: p,
          alignItems: i,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: _0(u === "hug" && ms.hug, u === "fill" && ms.fill, h),
          testId: v,
          ref: t,
        }),
        w,
      );
    }),
  );
Wa.displayName = "Inline";
var P0 = "Invariant failed";
function A0(e, t) {
  if (!e) throw new Error(P0);
}
var up = y.createContext(!1),
  j0 = function () {
    return y.useContext(up);
  },
  I0 = up.Provider,
  D0 = ["span", "p", "strong", "em"],
  T0 = function (t, r) {
    var n = u0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Zl.hasOwnProperty(n) ? Zl[n] : "color.text";
    }
  },
  Lr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  M0 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  L0 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  N0 = {
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
  Zl = {
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
  $0 = y.forwardRef(function (e, t) {
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
    A0(D0.includes(n));
    var h = j0(),
      v = T0(a, h);
    !c && !h && (c = "medium");
    var p = y.createElement(
      n,
      {
        id: s,
        className: R([
          Lr.root,
          c && M0[c],
          v && N0[v],
          l && Lr.truncation,
          l === 1 && Lr.breakAll,
          i && Lr["textAlign.".concat(i)],
          u && L0[u],
          n === "em" && Lr["as.em"],
          n === "strong" && Lr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return h ? p : y.createElement(I0, { value: !0 }, p);
  });
function F0() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var z0 = ["as", "children", "isInset", "testId", "style", "xcss"],
  B0 = ["className"],
  q0 = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      u = re(e, z0);
    u.className;
    var l = re(u, B0);
    return y.createElement(
      n,
      K({}, l, {
        ref: t,
        className: R([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          ke("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          c,
        ]),
        style: s,
        "data-testid": o,
      }),
      a,
    );
  }),
  U0 = [
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
  V0 = ["className"],
  ed = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  G0 = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? _e : o,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      h = e.xcss,
      v = e.tabIndex,
      p = re(e, U0),
      g = y.useContext(Us),
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
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    p.className;
    var w = re(p, V0);
    return y.createElement(
      q0,
      K({ as: "button", tabIndex: v ?? (F0() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: _,
        disabled: n,
        xcss: cp(ed.root, n && ed.disabled, h),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Fo = {},
  Bn = {},
  td;
function lp() {
  if (td) return Bn;
  ((td = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.bind = void 0));
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
var lr = {},
  rd;
function H0() {
  if (rd) return lr;
  rd = 1;
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
  var t = lp();
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
var nd;
function W0() {
  return (
    nd ||
      ((nd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = lp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = H0();
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
var Fi = W0(),
  K0 = function () {
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
  dp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: K0() });
  },
  Y0 = dp(),
  J0 = y.createContext(dp()),
  X0 = function (e) {
    return e.value++;
  },
  Q0 = function (e) {
    return e ? e.prefix : "";
  },
  Z0 = function (e) {
    var t = e || Y0,
      r = Q0(t),
      n = X0(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  fp = function () {
    var e = y.useContext(J0),
      t = y.useState(function () {
        return Z0(e);
      })[0];
    return t;
  },
  ew = function () {
    var e = fp().uid;
    return e;
  },
  tw = function () {
    var e = fp().gen;
    return e;
  },
  zo,
  Ka = (zo = k.useId) !== null && zo !== void 0 ? zo : void 0;
function rw() {
  return Ka && ke("platform-dst-react-18-use-id")
    ? ke("platform-dst-react-18-use-id-selector-safe")
      ? Ka().replace(/[:«»]/g, "_")
      : Ka()
    : "uid".concat(ew());
}
function nw() {
  if (Ka && ke("platform-dst-react-18-use-id")) {
    var e = rw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return tw();
}
var vp = function (t) {
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
  aw = {
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
  iw = ["children"];
function ow(e) {
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
      c = re(o, iw),
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
var sw = ow(function () {
    return { mode: "light" };
  }),
  cw = sw.useTheme;
function uw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function lw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var dw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(lw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = uw(a);
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
  bi = "-moz-",
  Z = "-webkit-",
  pp = "comm",
  Gs = "rule",
  Hs = "decl",
  fw = "@import",
  hp = "@keyframes",
  vw = "@layer",
  pw = Math.abs,
  zi = String.fromCharCode,
  hw = Object.assign;
function gw(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function gp(e) {
  return e.trim();
}
function bw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function _s(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function ha(e, t, r) {
  return e.slice(t, r);
}
function mt(e) {
  return e.length;
}
function Ws(e) {
  return e.length;
}
function Ba(e, t) {
  return (t.push(e), e);
}
function yw(e, t) {
  return e.map(t).join("");
}
var Bi = 1,
  Gr = 1,
  bp = 0,
  De = 0,
  he = 0,
  Zr = "";
function qi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: Bi,
    column: Gr,
    length: o,
    return: "",
  };
}
function qn(e, t) {
  return hw(qi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mw() {
  return he;
}
function _w() {
  return ((he = De > 0 ? ye(Zr, --De) : 0), Gr--, he === 10 && ((Gr = 1), Bi--), he);
}
function ze() {
  return ((he = De < bp ? ye(Zr, De++) : 0), Gr++, he === 10 && ((Gr = 1), Bi++), he);
}
function xt() {
  return ye(Zr, De);
}
function Ya() {
  return De;
}
function xa(e, t) {
  return ha(Zr, e, t);
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
function yp(e) {
  return ((Bi = Gr = 1), (bp = mt((Zr = e))), (De = 0), []);
}
function mp(e) {
  return ((Zr = ""), e);
}
function Ja(e) {
  return gp(xa(De - 1, ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ww(e) {
  for (; (he = xt()) && he < 33; ) ze();
  return ga(e) > 2 || ga(he) > 3 ? "" : " ";
}
function Ow(e, t) {
  for (; --t && ze() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return xa(e, Ya() + (t < 6 && xt() == 32 && ze() == 32));
}
function ws(e) {
  for (; ze(); )
    switch (he) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ws(he);
        break;
      case 40:
        e === 41 && ws(e);
        break;
      case 92:
        ze();
        break;
    }
  return De;
}
function kw(e, t) {
  for (; ze() && e + he !== 57; ) if (e + he === 84 && xt() === 47) break;
  return "/*" + xa(t, De - 1) + "*" + zi(e === 47 ? e : ze());
}
function Sw(e) {
  for (; !ga(xt()); ) ze();
  return xa(e, De);
}
function Ew(e) {
  return mp(Xa("", null, null, null, [""], (e = yp(e)), 0, [0], e));
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
    switch (((v = _), (_ = ze()))) {
      case 40:
        if (v != 108 && ye(C, d - 1) == 58) {
          _s((C += ee(Ja(_), "&", "&\f")), "&\f") != -1 && (b = -1);
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
        C += ww(v);
        break;
      case 92:
        C += Ow(Ya() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            Ba(xw(kw(ze(), Ya()), t, r), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * p:
        s[u++] = mt(C) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (C = ee(C, /\f/g, "")),
              h > 0 &&
                mt(C) - d &&
                Ba(h > 32 ? id(C + ";", n, r, d - 1) : id(ee(C, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            C += ";";
          default:
            if ((Ba((S = ad(C, t, r, u, l, a, s, w, (O = []), (m = []), d)), i), _ === 123))
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
                      n && Ba(ad(e, S, S, 0, 0, a, s, w, a, (O = []), d), m),
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
        ((d = 1 + mt(C)), (h = v));
      default:
        if (p < 1) {
          if (_ == 123) --p;
          else if (_ == 125 && p++ == 0 && _w() == 125) continue;
        }
        switch (((C += zi(_)), _ * p)) {
          case 38:
            b = l > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (mt(C) - 1) * b), (b = 1));
            break;
          case 64:
            (xt() === 45 && (C += Ja(ze())), (f = xt()), (l = d = mt((w = C += Sw(Ya())))), _++);
            break;
          case 45:
            v === 45 && mt(C) == 2 && (p = 0);
        }
    }
  return i;
}
function ad(e, t, r, n, a, i, o, s, c, u, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], h = Ws(f), v = 0, p = 0, g = 0; v < n; ++v)
    for (var b = 0, _ = ha(e, d + 1, (d = pw((p = o[v])))), w = e; b < h; ++b)
      (w = gp(p > 0 ? f[b] + " " + _ : ee(_, /&\f/g, f[b]))) && (c[g++] = w);
  return qi(e, t, r, a === 0 ? Gs : s, c, u, l);
}
function xw(e, t, r) {
  return qi(e, t, r, pp, zi(mw()), ha(e, 2, -2), 0);
}
function id(e, t, r, n) {
  return qi(e, t, r, Hs, ha(e, 0, n), ha(e, n + 1, -1), n);
}
function qr(e, t) {
  for (var r = "", n = Ws(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Cw(e, t, r, n) {
  switch (e.type) {
    case vw:
      if (e.children.length) break;
    case fw:
    case Hs:
      return (e.return = e.return || e.value);
    case pp:
      return "";
    case hp:
      return (e.return = e.value + "{" + qr(e.children, n) + "}");
    case Gs:
      e.value = e.props.join(",");
  }
  return mt((r = qr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Rw(e) {
  var t = Ws(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function Pw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Aw(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var jw = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = xt()), a === 38 && i === 12 && (r[n] = 1), !ga(i); ) ze();
    return xa(t, De);
  },
  Iw = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (ga(a)) {
        case 0:
          (a === 38 && xt() === 12 && (r[n] = 1), (t[n] += jw(De - 1, r, n)));
          break;
        case 2:
          t[n] += Ja(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = xt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += zi(a);
      }
    while ((a = ze()));
    return t;
  },
  Dw = function (t, r) {
    return mp(Iw(yp(t), r));
  },
  od = new WeakMap(),
  Tw = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !od.get(n)) && !a) {
        od.set(t, !0);
        for (var i = [], o = Dw(r, i), s = n.props, c = 0, u = 0; c < o.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = i[c] ? o[c].replace(/&\f/g, s[l]) : s[l] + " " + o[c];
      }
    }
  },
  Mw = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function _p(e, t) {
  switch (gw(e, t)) {
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
      return Z + e + bi + e + me + e + e;
    case 6828:
    case 4268:
      return Z + e + me + e + e;
    case 6165:
      return Z + e + me + "flex-" + e + e;
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return Z + e + me + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + me + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + me + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + me + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + me + ee(e, "grow", "positive") + e;
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + me + "flex-pack:$3"),
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
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
      if (mt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + bi + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~_s(e, "stretch") ? _p(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, mt(e) - 3 - (~_s(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return (
            ee(
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
          return Z + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + me + e + e;
  }
  return e;
}
var Lw = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hs:
          t.return = _p(t.value, t.length);
          break;
        case hp:
          return qr([qn(t, { value: ee(t.value, "@", "@" + Z) })], a);
        case Gs:
          if (t.length)
            return yw(t.props, function (i) {
              switch (bw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return qr([qn(t, { props: [ee(i, /:(read-\w+)/, ":" + bi + "$1")] })], a);
                case "::placeholder":
                  return qr(
                    [
                      qn(t, { props: [ee(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      qn(t, { props: [ee(i, /:(plac\w+)/, ":" + bi + "$1")] }),
                      qn(t, { props: [ee(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Nw = [Lw],
  $w = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (p) {
        var g = p.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Nw,
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
      u = [Tw, Mw];
    {
      var l,
        d = [
          Cw,
          Pw(function (p) {
            l.insert(p);
          }),
        ],
        f = Rw(u.concat(a, d)),
        h = function (g) {
          return qr(Ew(g), f);
        };
      c = function (g, b, _, w) {
        ((l = _), h(g ? g + "{" + b.styles + "}" : b.styles), w && (v.inserted[b.name] = !0));
      };
    }
    var v = {
      key: r,
      sheet: new dw({
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
  Bo = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function Fw() {
  if (sd) return te;
  sd = 1;
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
    (te.AsyncMode = c),
    (te.ConcurrentMode = u),
    (te.ContextConsumer = s),
    (te.ContextProvider = o),
    (te.Element = t),
    (te.ForwardRef = l),
    (te.Fragment = n),
    (te.Lazy = v),
    (te.Memo = h),
    (te.Portal = r),
    (te.Profiler = i),
    (te.StrictMode = a),
    (te.Suspense = d),
    (te.isAsyncMode = function (m) {
      return O(m) || w(m) === c;
    }),
    (te.isConcurrentMode = O),
    (te.isContextConsumer = function (m) {
      return w(m) === s;
    }),
    (te.isContextProvider = function (m) {
      return w(m) === o;
    }),
    (te.isElement = function (m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }),
    (te.isForwardRef = function (m) {
      return w(m) === l;
    }),
    (te.isFragment = function (m) {
      return w(m) === n;
    }),
    (te.isLazy = function (m) {
      return w(m) === v;
    }),
    (te.isMemo = function (m) {
      return w(m) === h;
    }),
    (te.isPortal = function (m) {
      return w(m) === r;
    }),
    (te.isProfiler = function (m) {
      return w(m) === i;
    }),
    (te.isStrictMode = function (m) {
      return w(m) === a;
    }),
    (te.isSuspense = function (m) {
      return w(m) === d;
    }),
    (te.isValidElementType = function (m) {
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
    (te.typeOf = w),
    te
  );
}
var cd;
function zw() {
  return (cd || ((cd = 1), (Bo.exports = Fw())), Bo.exports);
}
var qo, ud;
function Bw() {
  if (ud) return qo;
  ud = 1;
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
Bw();
var qw = !0;
function wp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Ks = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || qw === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Op = function (t, r, n) {
    Ks(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Uw(e) {
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
var Vw = {
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
  Gw = /[A-Z]|^ms/g,
  Hw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  kp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ld = function (t) {
    return t != null && typeof t != "boolean";
  },
  Uo = Aw(function (e) {
    return kp(e) ? e : e.replace(Gw, "-$&").toLowerCase();
  }),
  dd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Hw, function (n, a, i) {
            return ((_t = { name: a, styles: i, next: _t }), a);
          });
    }
    return Vw[t] !== 1 && !kp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
      return Ww(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = _t,
          u = r(e);
        return ((_t = c), ba(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Ww(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += ba(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : ld(s) && (n += Uo(i) + ":" + dd(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var c = 0; c < o.length; c++) ld(o[c]) && (n += Uo(i) + ":" + dd(i, o[c]) + ";");
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
var fd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  _t;
function Ys(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  _t = void 0;
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
  fd.lastIndex = 0;
  for (var u = "", l; (l = fd.exec(a)) !== null; ) u += "-" + l[1];
  var d = Uw(a) + u;
  return { name: d, styles: a, next: _t };
}
var Kw = function (t) {
    return t();
  },
  Yw = wu.useInsertionEffect ? wu.useInsertionEffect : !1,
  Sp = Yw || Kw,
  Ep = y.createContext(typeof HTMLElement < "u" ? $w({ key: "css" }) : null);
Ep.Provider;
var xp = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Ep);
      return t(r, a, n);
    });
  },
  Cp = y.createContext({}),
  Js = {}.hasOwnProperty,
  Os = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Jw = function (t, r) {
    var n = {};
    for (var a in r) Js.call(r, a) && (n[a] = r[a]);
    return ((n[Os] = t), n);
  },
  Xw = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ks(r, n, a),
      Sp(function () {
        return Op(r, n, a);
      }),
      null
    );
  },
  Qw = xp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Os],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = wp(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Ys(i, void 0, y.useContext(Cp));
    o += t.key + "-" + s.name;
    var c = {};
    for (var u in e) Js.call(e, u) && u !== "css" && u !== Os && (c[u] = e[u]);
    return (
      (c.className = o),
      r && (c.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(Xw, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, c),
      )
    );
  }),
  Zw = Qw,
  Bt = function (t, r) {
    var n = arguments;
    if (r == null || !Js.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = Zw), (i[1] = Jw(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return y.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Bt || (Bt = {}));
function jt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ys(t);
}
var e1 = function e(t) {
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
function t1(e, t, r) {
  var n = [],
    a = wp(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var r1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Sp(function () {
        for (var a = 0; a < n.length; a++) Op(r, n[a], !1);
      }),
      null
    );
  },
  n1 = xp(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = Ys(u, t.registered);
        return (r.push(d), Ks(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return t1(t.registered, n, e1(u));
      },
      i = { css: n, cx: a, theme: y.useContext(Cp) },
      o = e.children(i);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(r1, { cache: t, serializedArr: r }),
      o,
    );
  });
function a1(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Rp = 2,
  ks = jt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Rp,
  }),
  Ss = jt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Rp,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  i1 = jt({
    "&:focus": ks,
    "&:focus-visible": ks,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  o1 = jt({
    "&:focus": Ss,
    "&:focus-visible": Ss,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Pp = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Ss : ks,
      i = r ? o1 : i1,
      o = typeof n > "u" ? i : n === "on" && a;
    return Bt(n1, null, function (s) {
      var c = s.css,
        u = s.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: u([c(o), t.props.className]) }) : t,
      );
    });
  });
Pp.displayName = "FocusRing";
function Nt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var s1 = 9;
function vd(e) {
  e.keyCode !== s1 && Nt(e);
}
var c1 = {
    onMouseDownCapture: Nt,
    onMouseUpCapture: Nt,
    onKeyDownCapture: vd,
    onKeyUpCapture: vd,
    onTouchStartCapture: Nt,
    onTouchEndCapture: Nt,
    onPointerDownCapture: Nt,
    onPointerUpCapture: Nt,
    onClickCapture: Nt,
    onClick: Nt,
  },
  u1 = {};
function l1(e) {
  var t = e.isInteractive;
  return t ? u1 : c1;
}
var pd = "rgba(179, 212, 255, 0.6)",
  hd = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(In, ")"),
          dark: "var(--ds-background-neutral, ".concat(Dn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(ys, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Al, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(pd, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Dr, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(hi, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Cl, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Rl, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(xl, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(In, ")"),
          dark: "var(--ds-background-disabled, ".concat(Dn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(El, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(El, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Sl, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Sl, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(kl, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(kl, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Ol, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Ol, ")"),
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
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(ys, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Al, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(pd, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Jn, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Mr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Re, ")"),
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
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Xt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Tn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(Tr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(Tr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Tr, ")"),
          dark: "var(--ds-text-selected, ".concat(Tr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Tr, ")"),
          dark: "var(--ds-text-selected, ".concat(Tr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Xt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Xt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Tn, ")"),
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
          light: "var(--ds-link, ".concat(Dr, ")"),
          dark: "var(--ds-link, ".concat(hi, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Cl, ")"),
          dark: "var(--ds-link, ".concat(Jn, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Rl, ")"),
          dark: "var(--ds-link-pressed, ".concat(xl, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(No, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
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
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(o_, ")"),
          dark: "var(--ds-text-subtle, ".concat(st, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(i_, ")"),
          dark: "var(--ds-text-subtle, ".concat(Jv, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(s_, ")"),
          dark: "var(--ds-text, ".concat(c_, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(No, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Re, ")"),
          dark: "var(--ds-text-selected, ".concat(st, ")"),
        },
      },
    },
  };
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
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zt = 8,
  Vo = ["default", "primary", "danger", "warning"],
  Es = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  d1 = { default: Es.default, compact: Es.compact, none: "inherit" },
  f1 = {
    default: "0 ".concat(Zt + Zt / 4, "px"),
    compact: "0 ".concat(Zt + Zt / 4, "px"),
    none: "0",
  },
  v1 = { compact: "0 ".concat(Zt / 4, "px"), default: "0 ".concat(Zt / 4, "px"), none: "0" },
  p1 = { default: "middle", compact: "middle", none: "baseline" },
  Ap = { content: "0 ".concat(Zt / 4, "px"), icon: "0 ".concat(Zt / 4, "px") },
  jp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  h1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ae(ae({}, jp), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  g1 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  b1 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  y1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  m1 = {
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
  _1 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  w1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  O1 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ae(
      ae({}, jp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  bd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function yd(e) {
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
    background: yd({ group: hd.background[t], key: r, mode: n }),
    color: "".concat(yd({ group: hd.color[t], key: r, mode: n }), " !important"),
  };
}
function k1(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    s = Nr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return ae(
    ae(
      ae(
        ae(
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
          !ke("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: Es[r],
          lineHeight: d1[r],
          padding: o ? v1[r] : f1[r],
          verticalAlign: p1[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !ke("platform-component-visual-refresh") &&
          ae(
            ae(
              {
                "&:visited": ae({}, s),
                "&:hover": ae(
                  ae({}, Nr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ae(
                  ae({}, Nr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ae(
                  ae({}, Nr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ae(
                  ae({}, Nr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              bd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ae({}, Nr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      ke("platform-component-visual-refresh") &&
        (a
          ? O1
          : ae(
              ae(
                ae(
                  ae(
                    ae(
                      ae(
                        ae(ae({}, t === "default" && h1), t === "primary" && g1),
                        t === "link" && b1,
                      ),
                      t === "subtle" && y1,
                    ),
                    t === "subtle-link" && m1,
                  ),
                  t === "warning" && _1,
                ),
                t === "danger" && w1,
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
              bd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function md(e) {
  var t = e.spacing;
  return jt({
    display: "flex",
    margin: t === "none" ? 0 : Ap.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function S1(e) {
  var t = e.spacing;
  return jt({
    margin: t === "none" ? 0 : Ap.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function E1(e) {
  var t = e.hasOverlay;
  return jt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var x1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Xs = function (t) {
    return t && y.isValidElement(t) && t.type === vp;
  },
  C1 = [
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
  P1 = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  A1 = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  _d = function (t, r) {
    return !t || Xs(t) ? null : r;
  },
  j1 = function (t, r) {
    return Xs(t) ? t : t ? Bt("span", { css: r }, t) : null;
  },
  I1 = k.forwardRef(function (t, r) {
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
      C = S === void 0 ? _e : S,
      I = t.onFocus,
      M = t.onMouseDown,
      P = M === void 0 ? _e : M,
      T = t.overlay;
    t.shouldFitContainer;
    var B = t.spacing,
      z = B === void 0 ? "default" : B,
      U = t.tabIndex,
      Q = U === void 0 ? 0 : U,
      V = t.type,
      q = V === void 0 ? (d ? void 0 : "button") : V,
      Y = t.testId,
      $ = re(t, C1),
      j = y.useRef(),
      be = y.useCallback(
        function (ve) {
          if (((j.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [j, r],
      );
    a1(j, s);
    var oe = y.useContext(Us),
      ce = y.useCallback(
        function (ve, Ve) {
          (oe && oe.tracePress(g, ve.timeStamp), C(ve, Ve));
        },
        [C, oe, g],
      ),
      fe = va({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.4.8",
        analyticsData: n,
      }),
      ge = y.useCallback(
        function (ve) {
          (ve.preventDefault(), P(ve));
        },
        [P],
      );
    y.useEffect(
      function () {
        var ve = j.current;
        _ && ve && ve === document.activeElement && ve.blur();
      },
      [_],
    );
    var ue = !!T,
      Ue = jt(E1({ hasOverlay: ue })),
      Oe = !_ && !ue,
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
      Bt(
        Pp,
        null,
        Bt(
          h,
          K(
            {},
            $,
            {
              ref: be,
              className: l,
              css: [c, Oe ? null : R1],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": Y,
              disabled: _,
              href: Oe ? d : void 0,
              onBlur: m,
              onClick: fe,
              onFocus: I,
              onMouseDown: ge,
              tabIndex: _ ? -1 : Q,
              type: q,
            },
            l1({ isInteractive: Oe }),
          ),
          p ? Bt("span", { css: [Ue, md({ spacing: z }), _d(u, P1)] }, p) : null,
          j1(u, [Ue, S1({ spacing: z })]),
          v ? Bt("span", { css: [Ue, md({ spacing: z }), _d(u, A1)] }, v) : null,
          T ? Bt("span", { css: [x1, at] }, T) : null,
        ),
      )
    );
  });
function D1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Xs(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var T1 = [
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
  wd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Qs = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? _e : l,
        f = t.onMouseUp,
        h = f === void 0 ? _e : f,
        v = t.shouldFitContainer,
        p = v === void 0 ? !1 : v,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        _ = re(t, T1),
        w = cw(),
        O = w.mode,
        m = D1({ children: i, iconBefore: o, iconAfter: s }),
        S = y.useState(!1),
        C = X(S, 2),
        I = C[0],
        M = C[1],
        P = y.useCallback(
          function (z) {
            (d(z), wd && M(!0));
          },
          [d, M],
        ),
        T = y.useCallback(
          function (z) {
            (h(z), wd && M(!1));
          },
          [h, M],
        ),
        B = y.useMemo(
          function () {
            return k1({
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
        I1,
        K({}, _, {
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
Qs.displayName = "Button";
function Od(e) {
  return k.createElement(Qs, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function M1(e) {
  return k.createElement(Qs, K({}, e, { appearance: "subtle" }));
}
var L1 = { container: "_1e0c1txw _kqswh2mm" };
function N1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    $i,
    { as: "li", testId: r, key: t, xcss: L1.container, paddingInline: "space.100" },
    k.createElement(
      $0,
      { testId: r && "".concat(r, "-text") },
      k.createElement(vp, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var kd = {},
  Sd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function $1(e, t) {
  return !!(e === t || (Sd(e) && Sd(t)));
}
function F1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!$1(e[r], t[r])) return !1;
  return !0;
}
function z1(e, t) {
  t === void 0 && (t = F1);
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
var B1 = function (t, r, n, a) {
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
      Ne(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - h })],
      Ne(f(c - h)),
    );
  }
  if (!l && d) {
    var v = i - 2;
    return [].concat(
      Ne(f(0, v)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: v + 1, to: c - 1 })],
      Ne(f(c - 1)),
    );
  }
  var p = i - 4;
  return [].concat(
    Ne(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(p / 2),
      }),
    ],
    Ne(f(r - Math.floor(p / 2), r + p - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Ne(f(c - 1)),
  );
};
function Ed(e, t) {
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
function q1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ed(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  U1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function xd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? n0 : c0;
  return k.createElement(
    $i,
    { as: "span", xcss: xs.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function V1(e, t) {
  var r = e.components,
    n = r === void 0 ? kd : r,
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
    g = p === void 0 ? kd : p,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? _e : w,
    m = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    I = C === void 0 ? N1 : C,
    M = e.analyticsContext,
    P = e.testId,
    T = e.isDisabled,
    B = V_(o, function () {
      return i || 0;
    }),
    z = X(B, 2),
    U = z[0],
    Q = z[1],
    V = va(
      q1(
        {
          fn: function ($, j) {
            var be = $.event,
              oe = $.selectedPageIndex;
            (o === void 0 && Q(oe), O && O(be, m[oe], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: M,
        },
        U1,
      ),
    ),
    q = function ($, j, be) {
      var oe = m[U],
        ce = "".concat(l, " ").concat(S ? S($, j) : $),
        fe = $ === oe;
      return k.createElement(
        Wa,
        { as: "li", xcss: xs.paginationMenuItem, key: "page-".concat(S ? S($, j) : j) },
        k.createElement(
          M1,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: j });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": ce,
            isSelected: fe,
            isDisabled: T,
            page: $,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S($, j) : $,
        ),
      );
    };
  return k.createElement(
    $i,
    { testId: P, style: g, ref: t, "aria-label": c, as: "nav" },
    k.createElement(
      Wa,
      { space: "space.0", alignBlock: "center" },
      k.createElement(Od, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function ($) {
          return V({ event: $, selectedPageIndex: U - 1 });
        },
        isDisabled: T || U === 0,
        iconBefore: k.createElement(xd, { chevronDirection: "left" }),
        "aria-label": f,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      k.createElement(
        Wa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: xs.paginationMenu },
        B1(m, U, { max: _, ellipsis: I, transform: q }, P),
      ),
      k.createElement(Od, {
        key: "right-navigator",
        component: n.Next,
        onClick: function ($) {
          return V({ event: $, selectedPageIndex: U + 1 });
        },
        isDisabled: T || U === m.length - 1,
        iconBefore: k.createElement(xd, { chevronDirection: "right" }),
        "aria-label": v,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var G1 = y.memo(y.forwardRef(V1));
function H1(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Ip() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Ip() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ip = function () {
    return !!e;
  })();
}
var W1 = (function (e) {
    function t() {
      var r;
      le(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = H1(this, t, [].concat(a))),
        x(r, "onChange", function (o, s, c) {
          r.props.onChange(s, c);
        }),
        r
      );
    }
    return (
      Me(t, e),
      de(t, [
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
              l = Ne(Array(a)).map(function (f, h) {
                return h + 1;
              }),
              d = o - 1;
            return k.createElement(G1, {
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
  K1 = ["isRanking", "testId"],
  Y1 = [
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
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rd = "--local-dynamic-table-text-color",
  J1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = re(t, K1);
    return y.createElement(
      "thead",
      K({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Dp = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      i = e.sortOrder,
      o = e.isFixedSize,
      s = e.shouldTruncate,
      c = e.onClick,
      u = e.style,
      l = e.testId,
      d = re(e, Y1),
      f = Un(
        Un(Un({}, u), r && Qv({ width: r })),
        {},
        x({}, Rd, "var(--ds-text-subtlest, ".concat(Pl, ")")),
      ),
      h = i === br,
      v = i === vi,
      p = function () {
        if (h) return "ascending";
        if (v) return "descending";
      },
      g = n ? "th" : "td",
      b = ke("platform-component-visual-refresh");
    return y.createElement(
      g,
      K({ "aria-sort": p(), onClick: b ? void 0 : c, ref: t, "data-testid": l }, d, {
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
            "--_mwqor1": $t(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(bs, ")"),
              ),
            ),
            "--_17ckjys": $t("var(--ds-text-subtle, ".concat("var(".concat(Rd, ")"), ")")),
            "--_z3oznn": $t(
              "solid ".concat(
                "var(--ds-border-width-focused, 2px)",
                " ",
                "var(--ds-border-focused, ".concat(hi, ")"),
              ),
            ),
            "--_6j4ewu": $t("var(--ds-background-neutral-hovered, ".concat(ys, ")")),
            "--_1rdacuj": $t("3px solid ".concat("var(--ds-icon-disabled, ".concat(bs, ")"))),
            "--_1qca9zt": $t("3px solid ".concat("var(--ds-icon-subtle, ".concat(Pl, ")"))),
          },
        ),
      }),
      n,
    );
  });
function X1(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Tp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
function Mp(e) {
  return (function (t) {
    function r() {
      var n;
      le(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = X1(this, r, [].concat(i))),
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
      Me(r, t),
      de(r, [
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
              K({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(k.Component);
}
var Vn = {},
  Pd;
function Q1() {
  if (Pd) return Vn;
  ((Pd = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
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
var Z1 = Q1();
const eO = rr(Z1);
var Gn = {},
  Ad;
function tO() {
  if (Ad) return Gn;
  ((Ad = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
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
var rO = tO();
const nO = rr(rO);
var aO = "Escape";
function iO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (o) {
        r || n.current || o.key !== aO || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!(r && ke("platform_only_attach_escape_handler_on_view")))
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
var oO = y.createContext(null),
  sO = y.createContext(null);
function cO() {
  var e = y.useContext(sO);
  return e;
}
function uO(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = y.useContext(oO),
    a = cO();
  y.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Xn = { none: 0, small: 100, medium: 350, large: 700 },
  Go = 0.5,
  lO = { none: Xn.none, small: Xn.small * Go, medium: Xn.medium * Go, large: Xn.large * Go },
  dO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  fO = function () {
    if (!dO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  vO = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  pO = function () {
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
      }, vO(t)),
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
  Lp = { appear: !0, isExiting: !1 },
  Np = y.createContext(Lp),
  jd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lp;
    return k.createElement(Np.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Id = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  hO = function (t, r) {
    for (var n = r.concat([]), a = gO(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  gO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  bO = function (t, r) {
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
  $p = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = y.useState([null, n]),
      o = X(i, 2),
      s = o[0],
      c = o[1],
      u = y.useState([]),
      l = X(u, 2),
      d = l[0],
      f = l[1],
      h = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      v = X(h, 2),
      p = v[0],
      g = v[1];
    if (
      (y.useEffect(function () {
        p.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = X(s, 2),
      _ = b[0],
      w = b[1],
      O = Id(_),
      m = Id(w);
    w !== n && c([w, n]);
    var S = bO(m, O),
      C = !!S.size,
      I = m;
    if ((C && (I = hO(m, O)), a))
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
            return jd(P, {
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
            return jd(P, p);
          })),
      I
    );
  }),
  yO = function () {
    return y.useContext(Np);
  };
$p.displayName = "ExitingPersistence";
function mO() {
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
var _O = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: _e };
  }),
  wO = function () {
    var t = mO(),
      r = y.useContext(_O);
    return r(t);
  },
  OO = function (t) {
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
      h = wO(),
      v = yO(),
      p = v.isExiting,
      g = v.onFinish,
      b = v.appear,
      _ = pO(),
      w = u || !h.isReady,
      O = p ? 0 : h.delay,
      m = p ? "exiting" : "entering",
      S = y.useState(b),
      C = X(S, 2),
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
            if (fO()) {
              T();
              return;
            }
            return (
              M(!0),
              _(T, p ? lO[f] : Xn[f] + O),
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
  kO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  SO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? kO[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      OO,
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
  EO = y.createContext();
y.createContext();
var xO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  CO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  RO = function (t, r) {
    if (typeof t == "function") return CO(t, r);
    t != null && (t.current = r);
  },
  Dd = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Td =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Ae = "top",
  rt = "bottom",
  nt = "right",
  je = "left",
  Zs = "auto",
  Ca = [Ae, rt, nt, je],
  Hr = "start",
  ya = "end",
  PO = "clippingParents",
  Fp = "viewport",
  Wn = "popper",
  AO = "reference",
  Md = Ca.reduce(function (e, t) {
    return e.concat([t + "-" + Hr, t + "-" + ya]);
  }, []),
  zp = [].concat(Ca, [Zs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Hr, t + "-" + ya]);
  }, []),
  jO = "beforeRead",
  IO = "read",
  DO = "afterRead",
  TO = "beforeMain",
  MO = "main",
  LO = "afterMain",
  NO = "beforeWrite",
  $O = "write",
  FO = "afterWrite",
  zO = [jO, IO, DO, TO, MO, LO, NO, $O, FO];
function Pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Be(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function yr(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function tt(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ec(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function BO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !tt(i) ||
      !Pt(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
      }));
  });
}
function qO(e) {
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
          !Pt(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const UO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: BO,
  effect: qO,
  requires: ["computeStyles"],
};
function Ct(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  yi = Math.min,
  Wr = Math.round;
function Cs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Bp() {
  return !/^((?!chrome|android).)*safari/i.test(Cs());
}
function Kr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    tt(e) &&
    ((a = (e.offsetWidth > 0 && Wr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Wr(n.height) / e.offsetHeight) || 1));
  var o = yr(e) ? Be(e) : window,
    s = o.visualViewport,
    c = !Bp() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: u + d, bottom: l + f, left: u, x: u, y: l };
}
function tc(e) {
  var t = Kr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function qp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ec(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Vt(e) {
  return Be(e).getComputedStyle(e);
}
function VO(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function ar(e) {
  return ((yr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ui(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ec(e) ? e.host : null) || ar(e);
}
function Ld(e) {
  return !tt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function GO(e) {
  var t = /firefox/i.test(Cs()),
    r = /Trident/i.test(Cs());
  if (r && tt(e)) {
    var n = Vt(e);
    if (n.position === "fixed") return null;
  }
  var a = Ui(e);
  for (ec(a) && (a = a.host); tt(a) && ["html", "body"].indexOf(Pt(a)) < 0; ) {
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
function Ra(e) {
  for (var t = Be(e), r = Ld(e); r && VO(r) && Vt(r).position === "static"; ) r = Ld(r);
  return r && (Pt(r) === "html" || (Pt(r) === "body" && Vt(r).position === "static"))
    ? t
    : r || GO(e) || t;
}
function rc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function na(e, t, r) {
  return fr(e, yi(t, r));
}
function HO(e, t, r) {
  var n = na(e, t, r);
  return n > r ? r : n;
}
function Up() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Vp(e) {
  return Object.assign({}, Up(), e);
}
function Gp(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var WO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Vp(typeof t != "number" ? t : Gp(t, Ca))
  );
};
function KO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = Ct(r.placement),
    c = rc(s),
    u = [je, nt].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!i || !o)) {
    var d = WO(a.padding, r),
      f = tc(i),
      h = c === "y" ? Ae : je,
      v = c === "y" ? rt : nt,
      p = r.rects.reference[l] + r.rects.reference[c] - o[c] - r.rects.popper[l],
      g = o[c] - r.rects.reference[c],
      b = Ra(i),
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
function YO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (qp(t.elements.popper, a) && (t.elements.arrow = a)));
}
const JO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: KO,
  effect: YO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Yr(e) {
  return e.split("-")[1];
}
var XO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function QO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Wr(r * a) / a || 0, y: Wr(n * a) / a || 0 };
}
function Nd(e) {
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
    w = je,
    O = Ae,
    m = window;
  if (u) {
    var S = Ra(r),
      C = "clientHeight",
      I = "clientWidth";
    if (
      (S === Be(r) &&
        ((S = ar(r)),
        Vt(S).position !== "static" &&
          s === "absolute" &&
          ((C = "scrollHeight"), (I = "scrollWidth"))),
      (S = S),
      a === Ae || ((a === je || a === nt) && i === ya))
    ) {
      O = rt;
      var M = d && S === m && m.visualViewport ? m.visualViewport.height : S[C];
      ((p -= M - n.height), (p *= c ? 1 : -1));
    }
    if (a === je || ((a === Ae || a === rt) && i === ya)) {
      w = nt;
      var P = d && S === m && m.visualViewport ? m.visualViewport.width : S[I];
      ((h -= P - n.width), (h *= c ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, u && XO),
    B = l === !0 ? QO({ x: h, y: p }, Be(r)) : { x: h, y: p };
  if (((h = B.x), (p = B.y), c)) {
    var z;
    return Object.assign(
      {},
      T,
      ((z = {}),
      (z[O] = _ ? "0" : ""),
      (z[w] = b ? "0" : ""),
      (z.transform =
        (m.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + p + "px)"
          : "translate3d(" + h + "px, " + p + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = _ ? p + "px" : ""), (t[w] = b ? h + "px" : ""), (t.transform = ""), t),
  );
}
function ZO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    u = {
      placement: Ct(t.placement),
      variation: Yr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Nd(
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
        Nd(
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
const ek = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ZO, data: {} };
var qa = { passive: !0 };
function tk(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    c = Be(t.elements.popper),
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
const rk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: tk,
  data: {},
};
var nk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return nk[t];
  });
}
var ak = { start: "end", end: "start" };
function $d(e) {
  return e.replace(/start|end/g, function (t) {
    return ak[t];
  });
}
function nc(e) {
  var t = Be(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function ac(e) {
  return Kr(ar(e)).left + nc(e).scrollLeft;
}
function ik(e, t) {
  var r = Be(e),
    n = ar(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var u = Bp();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: i, height: o, x: s + ac(e), y: c };
}
function ok(e) {
  var t,
    r = ar(e),
    n = nc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = fr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = fr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + ac(e),
    c = -n.scrollTop;
  return (
    Vt(a || r).direction === "rtl" && (s += fr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: c }
  );
}
function ic(e) {
  var t = Vt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Hp(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0
    ? e.ownerDocument.body
    : tt(e) && ic(e)
      ? e
      : Hp(Ui(e));
}
function aa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Hp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Be(n),
    o = a ? [i].concat(i.visualViewport || [], ic(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(aa(Ui(o)));
}
function Rs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function sk(e, t) {
  var r = Kr(e, !1, t === "fixed");
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
function Fd(e, t, r) {
  return t === Fp ? Rs(ik(e, r)) : yr(t) ? sk(t, r) : Rs(ok(ar(e)));
}
function ck(e) {
  var t = aa(Ui(e)),
    r = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
    n = r && tt(e) ? Ra(e) : e;
  return yr(n)
    ? t.filter(function (a) {
        return yr(a) && qp(a, n) && Pt(a) !== "body";
      })
    : [];
}
function uk(e, t, r, n) {
  var a = t === "clippingParents" ? ck(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (c, u) {
        var l = Fd(e, u, n);
        return (
          (c.top = fr(l.top, c.top)),
          (c.right = yi(l.right, c.right)),
          (c.bottom = yi(l.bottom, c.bottom)),
          (c.left = fr(l.left, c.left)),
          c
        );
      },
      Fd(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Wp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Ct(n) : null,
    i = n ? Yr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case Ae:
      c = { x: o, y: t.y - r.height };
      break;
    case rt:
      c = { x: o, y: t.y + t.height };
      break;
    case nt:
      c = { x: t.x + t.width, y: s };
      break;
    case je:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? rc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (i) {
      case Hr:
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
    c = s === void 0 ? PO : s,
    u = r.rootBoundary,
    l = u === void 0 ? Fp : u,
    d = r.elementContext,
    f = d === void 0 ? Wn : d,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    g = p === void 0 ? 0 : p,
    b = Vp(typeof g != "number" ? g : Gp(g, Ca)),
    _ = f === Wn ? AO : Wn,
    w = e.rects.popper,
    O = e.elements[v ? _ : f],
    m = uk(yr(O) ? O : O.contextElement || ar(e.elements.popper), c, l, o),
    S = Kr(e.elements.reference),
    C = Wp({ reference: S, element: w, placement: a }),
    I = Rs(Object.assign({}, w, C)),
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
    Object.keys(P).forEach(function (z) {
      var U = [nt, rt].indexOf(z) >= 0 ? 1 : -1,
        Q = [Ae, rt].indexOf(z) >= 0 ? "y" : "x";
      P[z] += B[Q] * U;
    });
  }
  return P;
}
function lk(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? zp : c,
    l = Yr(n),
    d = l
      ? s
        ? Md
        : Md.filter(function (v) {
            return Yr(v) === l;
          })
      : Ca,
    f = d.filter(function (v) {
      return u.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (v, p) {
    return ((v[p] = ma(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[Ct(p)]), v);
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function dk(e) {
  if (Ct(e) === Zs) return [];
  var t = Qa(e);
  return [$d(e), t, $d(t)];
}
function fk(e) {
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
        b = Ct(g),
        _ = b === g,
        w = c || (_ || !v ? [Qa(g)] : dk(g)),
        O = [g].concat(w).reduce(function (fe, ge) {
          return fe.concat(
            Ct(ge) === Zs
              ? lk(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: v,
                  allowedAutoPlacements: p,
                })
              : ge,
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
        B = Ct(T),
        z = Yr(T) === Hr,
        U = [Ae, rt].indexOf(B) >= 0,
        Q = U ? "width" : "height",
        V = ma(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: u }),
        q = U ? (z ? nt : je) : z ? rt : Ae;
      m[Q] > S[Q] && (q = Qa(q));
      var Y = Qa(q),
        $ = [];
      if (
        (i && $.push(V[B] <= 0),
        s && $.push(V[q] <= 0, V[Y] <= 0),
        $.every(function (fe) {
          return fe;
        }))
      ) {
        ((M = T), (I = !1));
        break;
      }
      C.set(T, $);
    }
    if (I)
      for (
        var j = v ? 3 : 1,
          be = function (ge) {
            var ue = O.find(function (Ue) {
              var Oe = C.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (at) {
                  return at;
                });
            });
            if (ue) return ((M = ue), "break");
          },
          oe = j;
        oe > 0;
        oe--
      ) {
        var ce = be(oe);
        if (ce === "break") break;
      }
    t.placement !== M && ((t.modifiersData[n]._skip = !0), (t.placement = M), (t.reset = !0));
  }
}
const vk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fk,
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
function Bd(e) {
  return [Ae, nt, rt, je].some(function (t) {
    return e[t] >= 0;
  });
}
function pk(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = ma(t, { elementContext: "reference" }),
    s = ma(t, { altBoundary: !0 }),
    c = zd(o, n),
    u = zd(s, a, i),
    l = Bd(c),
    d = Bd(u);
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
const hk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pk,
};
function gk(e, t, r) {
  var n = Ct(e),
    a = [je, Ae].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [je, nt].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function bk(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = zp.reduce(function (l, d) {
      return ((l[d] = gk(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = o));
}
const yk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: bk };
function mk(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Wp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const _k = { name: "popperOffsets", enabled: !0, phase: "read", fn: mk, data: {} };
function wk(e) {
  return e === "x" ? "y" : "x";
}
function Ok(e) {
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
    b = Ct(t.placement),
    _ = Yr(t.placement),
    w = !_,
    O = rc(b),
    m = wk(O),
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
      var z,
        U = O === "y" ? Ae : je,
        Q = O === "y" ? rt : nt,
        V = O === "y" ? "height" : "width",
        q = S[O],
        Y = q + g[U],
        $ = q - g[Q],
        j = h ? -I[V] / 2 : 0,
        be = _ === Hr ? C[V] : I[V],
        oe = _ === Hr ? -I[V] : -C[V],
        ce = t.elements.arrow,
        fe = h && ce ? tc(ce) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Up(),
        ue = ge[U],
        Ue = ge[Q],
        Oe = na(0, C[V], fe[V]),
        at = w ? C[V] / 2 - j - Oe - ue - P.mainAxis : be - Oe - ue - P.mainAxis,
        ve = w ? -C[V] / 2 + j + Oe + Ue + P.mainAxis : oe + Oe + Ue + P.mainAxis,
        Ve = t.elements.arrow && Ra(t.elements.arrow),
        kr = Ve ? (O === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        It = (z = T?.[O]) != null ? z : 0,
        Se = q + at - It - kr,
        Ee = q + ve - It,
        Ht = na(h ? yi(Y, Se) : Y, q, h ? fr($, Ee) : $);
      ((S[O] = Ht), (B[O] = Ht - q));
    }
    if (s) {
      var bt,
        it = O === "x" ? Ae : je,
        Wt = O === "x" ? rt : nt,
        Ge = S[m],
        Le = m === "y" ? "height" : "width",
        xe = Ge + g[it],
        ot = Ge - g[Wt],
        Kt = [Ae, je].indexOf(b) !== -1,
        Pa = (bt = T?.[m]) != null ? bt : 0,
        Aa = Kt ? xe : Ge - C[Le] - I[Le] - Pa + P.altAxis,
        ja = Kt ? Ge + C[Le] + I[Le] - Pa - P.altAxis : ot,
        Ia = h && Kt ? HO(Aa, Ge, ja) : na(h ? Aa : xe, Ge, h ? ja : ot);
      ((S[m] = Ia), (B[m] = Ia - Ge));
    }
    t.modifiersData[n] = B;
  }
}
const kk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ok,
  requiresIfExists: ["offset"],
};
function Sk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ek(e) {
  return e === Be(e) || !tt(e) ? nc(e) : Sk(e);
}
function xk(e) {
  var t = e.getBoundingClientRect(),
    r = Wr(t.width) / e.offsetWidth || 1,
    n = Wr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ck(e, t, r) {
  r === void 0 && (r = !1);
  var n = tt(t),
    a = tt(t) && xk(t),
    i = ar(t),
    o = Kr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Pt(t) !== "body" || ic(i)) && (s = Ek(t)),
      tt(t) ? ((c = Kr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : i && (c.x = ac(i))),
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
function Pk(e) {
  var t = Rk(e);
  return zO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Ak(e) {
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
function jk(e) {
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
var qd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ud() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ik(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? qd : a;
  return function (s, c, u) {
    u === void 0 && (u = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, qd, i),
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
              reference: yr(s) ? aa(s) : s.contextElement ? aa(s.contextElement) : [],
              popper: aa(c),
            }));
          var w = Pk(jk([].concat(n, l.options.modifiers)));
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
            if (Ud(_, w)) {
              ((l.rects = {
                reference: Ck(_, Ra(w), l.options.strategy === "fixed"),
                popper: tc(w),
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
        update: Ak(function () {
          return new Promise(function (g) {
            (h.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (p(), (f = !0));
        },
      };
    if (!Ud(s, c)) return h;
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
var Dk = [rk, _k, ek, UO, yk, vk, kk, JO, hk],
  Tk = Ik({ defaultModifiers: Dk }),
  Ho,
  Vd;
function Mk() {
  if (Vd) return Ho;
  Vd = 1;
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
var Lk = Mk();
const Nk = rr(Lk);
var $k = [],
  Fk = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || $k,
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
                styles: Dd(
                  p.map(function (g) {
                    return [g, v.styles[g] || {}];
                  }),
                ),
                attributes: Dd(
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
          return Nk(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u],
      ),
      d = y.useRef();
    return (
      Td(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Td(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || Tk,
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
  Bk = function () {
    return Promise.resolve(null);
  },
  qk = [];
function Uk(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? qk : i,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(EO),
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
    w = Fk(s || d, h, _),
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
          update: C || Bk,
        };
      },
      [v, b, r, O, m, C, S],
    );
  return xO(l)(I);
}
function Vk(e) {
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
            v = X(h, 1),
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
  Gk = [
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
function Hk() {
  return null;
}
var Wk = [0, 8];
function Kk(e) {
  var t = e.children,
    r = t === void 0 ? Hk : t,
    n = e.offset,
    a = n === void 0 ? Wk : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    h = f === void 0 ? !1 : f,
    v = X(a, 2),
    p = v[0],
    g = v[1],
    b = y.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Ps, rootBoundary: h ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [p, g] } },
          m = h ? Vk({ viewportPadding: Ps }) : [];
        return [].concat(Gk, [w, O], Ne(m));
      },
      [p, g, h],
    ),
    _ = y.useMemo(
      function () {
        return u == null ? b : [].concat(Ne(b), Ne(u));
      },
      [b, u],
    );
  return k.createElement(Uk, { modifiers: _, placement: o, strategy: d, referenceElement: c }, r);
}
var Kp = "atlaskit-portal-container",
  Yp = "body > .atlaskit-portal-container",
  Jp = "atlaskit-portal",
  Yk = function (t) {
    var r = document.createElement("div");
    return ((r.className = Jp), (r.style.zIndex = "".concat(t)), r);
  },
  Xp = function () {
    return document.body;
  },
  Qp = function () {
    var t = document.querySelector(Yp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Kp),
        (n.style.display = "flex"),
        (r = Xp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  Jk = function (t) {
    Qp().removeChild(t);
  },
  Xk = function (t) {
    t.parentElement || Qp().appendChild(t);
  },
  Zp = function () {
    return document !== void 0;
  },
  Qk = function (t) {
    if (Zp()) {
      var r = document.createElement("div");
      return ((r.className = Jp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  Zk = function () {
    if (Zp()) {
      var t = document.querySelector(Yp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Kp),
          (n.style.display = "flex"),
          (r = Xp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function eS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return Yk(t);
      },
      [t],
    );
  return (
    Xk(n),
    y.useEffect(
      function () {
        return function () {
          Jk(n);
        };
      },
      [n],
    ),
    mi.createPortal(r, n)
  );
}
var eh = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function tS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = X(n, 2),
    i = a[0],
    o = a[1];
  eh(
    function () {
      var c = Qk(t);
      o(c);
      var u = Zk();
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
var rS = function (t) {
    var r = y.useState(!1),
      n = X(r, 2),
      a = n[0],
      i = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? eh : y.useEffect;
      }),
      s = X(o, 1),
      c = s[0];
    return (
      c(function () {
        i(!0);
      }, []),
      a
    );
  },
  nS = "akPortalMount",
  aS = "akPortalUnmount",
  Gd = {
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
  iS = function (t) {
    return Gd.hasOwnProperty(t) ? Gd[t] : null;
  },
  oS = function (t, r) {
    var n = { layer: iS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Hd(e, t) {
  var r = oS(e, t);
  window.dispatchEvent(r);
}
var sS = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        Hd(nS, r),
        function () {
          Hd(aS, r);
        }
      );
    },
    [r],
  );
};
function cS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = rS(i);
  return (
    sS(r),
    ke("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(tS, { zIndex: r }, n)
      : o
        ? k.createElement(eS, { zIndex: r }, n)
        : null
  );
}
var ia = new Set(),
  _a = null;
function Wd() {
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
function uS() {
  return Fi.bindAll(window, [
    { type: "dragstart", listener: Wd },
    { type: "dragenter", listener: Wd },
  ]);
}
var Ua = null;
function lS(e) {
  return (
    Ua || (Ua = uS()),
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
function Kd(e, t) {
  (Qn(),
    (oa = window.setTimeout(function () {
      ((oa = null), e());
    }, t)));
}
var yt = null;
function dS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(yt && yt.entry === e);
  }
  function n() {
    r() && (Qn(), (yt = null));
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
          Kd(function () {
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
    var h = !!(yt && yt.isVisible());
    (yt && (Qn(), yt.entry.hide({ isImmediate: !0 }), yt.entry.done(), (yt = null)),
      (yt = { entry: e, isVisible: u }));
    function v() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      v();
      return;
    }
    ((t = "waiting-to-show"), Kd(v, e.delay));
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
function fS(e, t) {
  var r = nw();
  return t ? "".concat(r(e)) : void 0;
}
var Yd = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  vS = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: R([Yd.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([Yd.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  th = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
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
        d && ke("platform-dst-tooltip-shortcuts") && y.createElement(vS, { shortcut: d }),
      ),
    );
  });
th.displayName = "TooltipPrimitive";
var Ko = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  rh = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.truncate,
      s = t.placement,
      c = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return y.createElement(
      th,
      {
        ref: r,
        style: n,
        className: R([
          Ko.base,
          ke("platform-dst-tooltip-shortcuts") && Ko.baseRefreshedPadding,
          o && Ko.truncate,
          a,
        ]),
        placement: s,
        testId: c,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: f,
      },
      i,
    );
  });
rh.displayName = "TooltipContainer";
function Jd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Xd(e, t) {
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
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var pS = aw.tooltip(),
  Qd = {
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
    l = u === void 0 ? rh : u,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    h = e.testId,
    v = e.delay,
    p = v === void 0 ? 300 : v,
    g = e.onShow,
    b = g === void 0 ? _e : g,
    _ = e.onHide,
    w = _ === void 0 ? _e : _,
    O = e.canAppear,
    m = e.hideTooltipOnClick,
    S = m === void 0 ? !1 : m,
    C = e.hideTooltipOnMouseDown,
    I = C === void 0 ? !1 : C,
    M = e.analyticsContext,
    P = e.strategy,
    T = P === void 0 ? "fixed" : P,
    B = e.ignoreTooltipPointerEvents,
    z = B === void 0 ? !1 : B,
    U = e.isScreenReaderAnnouncementDisabled,
    Q = U === void 0 ? !1 : U,
    V = e.shortcut,
    q = n === "mouse" ? i : n,
    Y = wl($r({ fn: b, action: "displayed", analyticsData: M }, Qd)),
    $ = wl($r({ fn: w, action: "hidden", analyticsData: M }, Qd)),
    j = y.useRef(null),
    be = y.useState("hide"),
    oe = X(be, 2),
    ce = oe[0],
    fe = oe[1],
    ge = y.useRef(null),
    ue = y.useRef(null),
    Ue = function (ne) {
      ((ue.current = ne), (ge.current = ne ? ne.firstElementChild : null));
    },
    Oe = y.useCallback(function (L) {
      ge.current = L;
    }, []),
    at = Hn(ce),
    ve = Hn(Y),
    Ve = Hn($),
    kr = Hn(p),
    It = Hn(O),
    Se = y.useRef(!1),
    Ee = y.useCallback(function (L) {
      ((j.current = L), (Se.current = !1));
    }, []),
    Ht = y.useCallback(
      function () {
        j.current &&
          (Se.current && Ve.current(), (j.current = null), (Se.current = !1), fe("hide"));
      },
      [Ve],
    ),
    bt = y.useCallback(
      function () {
        j.current && (j.current.abort(), Se.current && Ve.current(), (j.current = null));
      },
      [Ve],
    );
  y.useEffect(
    function () {
      return function () {
        j.current && bt();
      };
    },
    [bt],
  );
  var it = y.useRef(!1);
  y.useEffect(function () {
    return lS({
      onRegister: function (ne) {
        var Dt = ne.isDragging;
        it.current = Dt;
      },
      onDragStart: function () {
        var ne;
        ((ne = j.current) === null || ne === void 0 || ne.requestHide({ isImmediate: !0 }),
          (it.current = !0));
      },
      onDragEnd: function () {
        it.current = !1;
      },
    });
  }, []);
  var Wt = y.useCallback(
      function (L) {
        var ne;
        if (!it.current) {
          if ((j.current && !j.current.isActive() && bt(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(It.current && !((ne = It.current) !== null && ne !== void 0 && ne.call(It)))) {
            var Dt = {
                source: L,
                delay: kr.current,
                show: function (Sr) {
                  var tn = Sr.isImmediate;
                  (Se.current || ((Se.current = !0), ve.current()),
                    fe(tn ? "show-immediate" : "fade-in"));
                },
                hide: function (Sr) {
                  var tn = Sr.isImmediate;
                  fe(tn ? "hide" : "before-fade-out");
                },
                done: Ht,
              },
              Wi = dS(Dt);
            Ee(Wi);
          }
        }
      },
      [It, kr, Ht, Ee, bt, ve],
    ),
    Ge = y.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (iO({ onClose: Ge, isDisabled: ce === "hide" || ce === "fade-out" }),
    y.useEffect(
      function () {
        if (ce === "hide") return _e;
        ce === "before-fade-out" && fe("fade-out");
        var L = Fi.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ce],
    ));
  var Le = y.useCallback(
      function () {
        I && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [I],
    ),
    xe = y.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    ot = y.useCallback(
      function (L) {
        if (!(ue.current && L.target === ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var ne =
            n === "mouse"
              ? { type: "mouse", mouse: Jd({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Wt(ne);
        }
      },
      [n, Wt],
    ),
    Kt = y.useCallback(function (L) {
      (ue.current && L.target === ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Pa =
      n === "mouse"
        ? function (L) {
            var ne;
            (ne = j.current) !== null &&
              ne !== void 0 &&
              ne.isActive() &&
              (j.current.mousePosition = Jd({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Aa = y.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    ja = y.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible") && ke("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Wt({ type: "keyboard" });
      },
      [Wt],
    ),
    Ia = y.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    uh = y.useCallback(
      function (L) {
        L === "exiting" &&
          at.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [at],
    ),
    lh = f,
    Gi = ce !== "hide" && !!o,
    sc = !Q && Gi,
    cc = ce !== "hide" && ce !== "fade-out",
    dh = y.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  uO({ isOpen: Gi && cc, onClose: dh });
  var uc = function () {
      var ne;
      if (n === "mouse" && (ne = j.current) !== null && ne !== void 0 && ne.mousePosition) {
        var Dt;
        return (Dt = j.current) === null || Dt === void 0 ? void 0 : Dt.mousePosition;
      }
      return ge.current || void 0;
    },
    en = fS("tooltip", sc),
    Hi = {
      onMouseOver: ot,
      onMouseOut: Kt,
      onMouseMove: Pa,
      onMouseDown: Le,
      onClick: xe,
      onFocus: ja,
      onBlur: Ia,
    };
  h && (Hi["data-testid"] = "".concat(h, "--container"));
  var lc = typeof t == "function";
  y.useEffect(
    function () {
      if (!lc) {
        var L = ge.current;
        if (!(!L || !en))
          return (
            L.setAttribute("aria-describedby", en),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [lc, en],
  );
  var dc = sc
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
          t($r($r({}, Hi), {}, { "aria-describedby": en, ref: Oe })),
          dc,
        )
      : k.createElement(lh, K({}, Hi, { ref: Ue, role: "presentation" }), t, dc),
    Gi
      ? k.createElement(
          cS,
          { zIndex: pS },
          k.createElement(Kk, { placement: q, referenceElement: uc(), strategy: T }, function (L) {
            var ne = L.ref,
              Dt = L.style,
              Wi = L.update,
              Ki = L.placement,
              Sr = n === "mouse" ? void 0 : hS[gS(Ki)];
            return k.createElement(
              $p,
              { appear: !0 },
              cc &&
                k.createElement(
                  SO,
                  {
                    distance: "constant",
                    entranceDirection: Sr,
                    exitDirection: Sr,
                    onFinish: uh,
                    duration: ce !== "show-immediate" ? "medium" : "none",
                  },
                  function (tn) {
                    var fh = tn.className;
                    return k.createElement(
                      l,
                      {
                        ref: ne,
                        className: "Tooltip ".concat(fh),
                        style: $r($r({}, Dt), z && { pointerEvents: "none" }),
                        truncate: c,
                        placement: q,
                        testId: uc() ? h : h && "".concat(h, "--unresolved"),
                        onMouseOut: Kt,
                        onMouseOver: Aa,
                        shortcut: V,
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
  Zd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  nh = function (t) {
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
      _ = re(t, yS),
      w = y.useState(!1),
      O = X(w, 2),
      m = O[0],
      S = O[1],
      C = y.useState(!1),
      I = X(C, 2),
      M = I[0],
      P = I[1],
      T = u === l || s !== void 0,
      B = m || T || M,
      z = B && b,
      U = !b || B || (b && !M),
      Q = y.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      V = y.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      q = y.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      Y = y.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      $ = k.createElement(
        $i,
        { xcss: Zd.headCellContainer, onMouseEnter: q, onMouseLeave: Y, onFocus: Q, onBlur: V },
        k.createElement(
          bS,
          { content: s === br ? f : v },
          k.createElement(
            G0,
            { onClick: c, xcss: Kn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              gi,
              { xcss: z ? Kn.hideIconHeaderWrapper : Kn.visibleHeaderWrapper },
              k.createElement("span", { className: R([Zd.text]) }, r),
            ),
            U &&
              k.createElement(
                gi,
                { xcss: B ? Kn.sortIconVisibleWrapper : Kn.sortIconHiddenWrapper },
                s === br
                  ? k.createElement(nO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(eO, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      Dp,
      K(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        _,
        { isSortable: o, sortOrder: s },
      ),
      o ? $ : r,
    );
  },
  mS = ["isRanking", "refHeight", "refWidth"];
function _S(e, t, r) {
  return (
    (t = H(t)),
    Te(e, ah() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var wS = (function (e) {
    function t() {
      return (le(this, t), _S(this, t, arguments));
    }
    return (
      Me(t, e),
      de(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = re(n, mS),
              s = Mv(a, i);
            return k.createElement(nh, K({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  OS = Mp(wS),
  kS = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  ih = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.onClick,
      c = re(t, kS);
    return k.createElement(
      Dp,
      K(
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
    Te(e, oh() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var xS = (function (e) {
    function t() {
      return (le(this, t), ES(this, t, arguments));
    }
    return (
      Me(t, e),
      de(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = re(n, SS),
              s = Mv(a, i);
            return k.createElement(ih, K({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  CS = Mp(xS),
  RS = ["cells"],
  PS = [
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
    Te(e, sh() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var jS = (function (e) {
    function t(r) {
      var n;
      return (le(this, t), (n = AS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Me(t, e),
      de(t, [
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
            var v = d ? CS : ih,
              p = d ? OS : nh,
              g = i.cells,
              b = re(i, RS);
            return k.createElement(
              J1,
              K({}, b, { isRanking: l, testId: f && "".concat(f, "--head") }),
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
                    z = _.testId,
                    U = _.width,
                    Q = re(_, PS),
                    V = "head-cell-".concat(w),
                    q = function () {
                      (n.setState({ activeSortButtonId: V }), P && u(_)());
                    };
                  return ke("platform-component-visual-refresh")
                    ? k.createElement(
                        p,
                        K(
                          {
                            colSpan: S,
                            content: C,
                            isFixedSize: c,
                            isIconOnlyHeader: M,
                            isSortable: !!P,
                            isRanking: l,
                            key: T || w,
                            headCellId: V,
                            activeSortButtonId: h,
                            onClick: q,
                            testId: z || f,
                            shouldTruncate: B,
                            sortOrder: T === o ? s : void 0,
                            width: U,
                            ascendingSortTooltip: O,
                            descendingSortTooltip: I,
                            buttonAriaRoleDescription: m,
                          },
                          Q,
                        ),
                      )
                    : k.createElement(
                        v,
                        K(
                          {
                            colSpan: S,
                            content: C,
                            isFixedSize: c,
                            isSortable: !!P,
                            isRanking: l,
                            key: T || w,
                            onClick: P ? u(_) : void 0,
                            testId: z || f,
                            shouldTruncate: B,
                            sortOrder: T === o ? s : void 0,
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
  IS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function DS(e) {
  switch (e) {
    case vi:
      return br;
    case br:
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
      O = w === void 0 ? _e : w,
      m = t.onSort,
      S = m === void 0 ? _e : m,
      C = t.page,
      I = C === void 0 ? 1 : C,
      M = t.emptyView,
      P = t.isRankable,
      T = P === void 0 ? !1 : P,
      B = t.isRankingDisabled,
      z = B === void 0 ? !1 : B,
      U = t.onRankStart,
      Q = U === void 0 ? _e : U,
      V = t.onRankEnd,
      q = V === void 0 ? _e : V,
      Y = t.loadingSpinnerSize,
      $ = t.paginationi18n,
      j =
        $ === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : $,
      be = y.useState(!1),
      oe = X(be, 2),
      ce = oe[0],
      fe = oe[1],
      ge = y.useRef(null),
      ue = va({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = va({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (li(o, n), Dy(n));
      },
      [o, n],
    );
    var Oe = function (xe) {
        return function () {
          var ot = xe.key;
          if (ot) {
            if (ue && T && ot === o && s === vi) {
              ue({ key: null, sortOrder: null, item: xe });
              return;
            }
            var Kt = ot !== o ? br : DS(s);
            ue && ue({ key: ot, item: xe, sortOrder: Kt });
          }
        };
      },
      at = function (xe, ot) {
        O(xe, ot);
      },
      ve = function (xe) {
        (fe(!0), Q(xe));
      },
      Ve = function (xe) {
        (fe(!1), Ue(xe));
      },
      kr = function () {
        return Y || (Tv(i || [], I, _).length > 2 ? pi : r_);
      },
      It = function () {
        return v ? k.createElement(v_, { testId: l }) : M && k.createElement(p_, { testId: l }, M);
      },
      Se = i && i.length,
      Ee,
      Ht = !1;
    (d && Number.isInteger(d) && _ && Se && Se <= d
      ? ((Ee = Math.ceil(d / _)), (Ht = !0))
      : (Ee = Se && _ ? Math.ceil(Se / _) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var bt = I > Ee ? Ee : I,
      it = !!Se,
      Wt = kr(),
      Ge = It();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        ip,
        {
          isLoading: v && it,
          spinnerSize: Wt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: c,
        },
        k.createElement(
          l_,
          { isFixedSize: g, "aria-label": f, hasDataRow: it, testId: l, isLoading: v },
          !!r && k.createElement(d_, null, r),
          n &&
            k.createElement(jS, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: s,
              isRanking: ce,
              isRankable: T,
              testId: l,
            }),
          it &&
            k.createElement(LS, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: _,
              page: bt,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: Ht,
              testId: l,
              isRankable: T,
              isRanking: ce,
              onRankStart: ve,
              onRankEnd: Ve,
              isRankingDisabled: z || v || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : k.createElement(
            f_,
            { testId: l },
            k.createElement(W1, {
              value: bt,
              onChange: at,
              total: Ee,
              i18n: j,
              isDisabled: v,
              testId: l,
            }),
          ),
      !it &&
        Ge &&
        k.createElement(np, { isLoading: v, spinnerSize: pi, testId: l, loadingLabel: c }, Ge),
    );
  },
  MS = y.lazy(function () {
    return Ny(
      () => import("./body-CnMYS8gp.js"),
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
      u = re(t, IS),
      l = a && !u.sortKey,
      d = y.useState(!1),
      f = X(d, 2),
      h = f[0],
      v = f[1];
    y.useEffect(
      function () {
        l && v(!0);
      },
      [l],
    );
    var p = k.createElement(P_, K({ ref: r }, u));
    return l && h
      ? k.createElement(
          j_,
          { fallback: p },
          k.createElement(
            y.Suspense,
            { fallback: p },
            k.createElement(
              MS,
              K({ ref: r }, u, {
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
    Te(e, ch() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Vi = (function (e) {
  function t() {
    var r;
    le(this, t);
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
        var f = Ty(o, u, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Me(t, e),
    de(t, [
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
  onSetPage: _e,
  onSort: _e,
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
  oc = (e, t) => ({ cells: $S(e, t) }),
  FS = Ti(() => {
    const { usersStore: e } = Li(),
      t = oc(!0, "SLOW_QUERY"),
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
                                  (e.showPlan(n.parsedPlan, n.plan), zs.saveState("PLAN"));
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
  zS = Ti(() => {
    const { usersStore: e } = Li(),
      t = oc(!0, "PLAN"),
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
  BS = Ti(() => {
    const { usersStore: e } = Li(),
      t = oc(!0, "HISTORY"),
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
                                  (e.showPlan(n.parsedPlan, n.plan), zs.saveState("PLAN"));
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
    Pe.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function qS() {
  const { usersStore: e, stateStore: t } = Li();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const v = await Pe.invoke("explain");
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
        const v = await Pe.invoke("explainWith");
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
        const v = await Pe.invoke("explainAnalyze");
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
        const v = await Pe.invoke("explainAnalyzeWith");
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
        await Pe.invoke("executeQuery");
      } catch (v) {
        (console.error(v), Ye("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Pe.invoke("executeQueryWith");
      } catch (v) {
        (console.error(v), Ye("execute query error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Pe.invoke("optimizeQuery");
      } catch (v) {
        (console.error(v), Ye("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Pe.invoke("optimizeQueryCTE");
      } catch (v) {
        (console.error(v), Ye("Optimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Pe.invoke("dropStats");
      } catch (v) {
        (console.error(v), Ye("dropStats error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Pe.invoke("deOptimizeQuery");
      } catch (v) {
        (console.error(v), Ye("deoptimize error", v.message));
      } finally {
        e.stopLoading();
      }
    },
    f = async () => {
      e.loading();
      try {
        const v = await Pe.invoke("analyzeQueriesHistory", {
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
        const v = await Pe.invoke("analyzeSlowQueries");
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
          E.jsx(BS, {}),
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
          E.jsx(zS, {}),
        ],
      });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const US = Ti(qS),
  VS = document.getElementById("root"),
  GS = vh.createRoot(VS),
  ef = () => {
    GS.render(E.jsx(Av, { ...jv, children: E.jsx(US, {}) }));
  };
Pe.view.theme
  .enable()
  .then(() => {
    ef();
  })
  .catch((e) => {
    (console.error(e.message), ef());
  });
export {
  hi as B,
  XS as N,
  k as R,
  k_ as T,
  Me as _,
  de as a,
  hs as b,
  le as c,
  Te as d,
  H as e,
  X as f,
  x as g,
  re as h,
  Fi as i,
  Ne as j,
  K as k,
  A0 as l,
  Bt as m,
  jt as n,
  $t as o,
  R as p,
  QS as q,
  y as r,
  Re as s,
  w_ as t,
  Mv as u,
  y_ as v,
  Mp as w,
};
