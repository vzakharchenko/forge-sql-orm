const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-CvIyWUMB.js",
      "./react-dom-vendor-DTSHKYJW.js",
      "./client-core-vendor-Bz5kMKC-.js",
      "./lodash-vendor-Ce0R6Syi.js",
      "./body-zWXS9WXn.css",
    ]),
) => i.map((i) => d[i]);
import { r as dt, a as mi, c as dh } from "./react-dom-vendor-DTSHKYJW.js";
import { g as tr, a as As, r as Qt, s as He } from "./client-core-vendor-Bz5kMKC-.js";
import { r as fh } from "./lodash-vendor-Ce0R6Syi.js";
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
var Yi = { exports: {} },
  nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lu;
function ph() {
  if (lu) return nn;
  lu = 1;
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
  return ((nn.Fragment = r), (nn.jsx = o), (nn.jsxs = o), nn);
}
var du;
function hh() {
  return (du || ((du = 1), (Yi.exports = ph())), Yi.exports);
}
var L = hh(),
  b = dt();
const k = tr(b),
  fu = vh({ __proto__: null, default: k }, [b]);
var Ji = {},
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
function Xd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Yo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ei = function () {
  return (
    (ei =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    ei.apply(this, arguments)
  );
};
function Zd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Qd(e, t, r, n) {
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
function ef(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function tf(e, t, r, n, a, i) {
  function o(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
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
    h.addInitializer = function (y) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(y || null));
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
function rf(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function nf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function af(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function of(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function sf(e, t, r, n) {
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
function uf(e, t) {
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
var wi = Object.create
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
function cf(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && wi(t, e, r);
}
function ti(e) {
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
function lf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(js(arguments[t]));
  return e;
}
function df() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
  return n;
}
function ff(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function qr(e) {
  return this instanceof qr ? ((this.v = e), this) : new qr(e);
}
function vf(e, t, r) {
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
        return new Promise(function (g, y) {
          i.push([p, v, g, y]) > 1 || u(p, v);
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
    p.value instanceof qr ? Promise.resolve(p.value.v).then(l, d) : f(i[0][2], p);
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
function pf(e) {
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
function hf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ti == "function" ? ti(e) : e[Symbol.iterator]()),
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
function gf(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var gh = Object.create
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
function bf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Jo(e), n = 0; n < r.length; n++) r[n] !== "default" && wi(t, e, r[n]);
  return (gh(t, e), t);
}
function yf(e) {
  return e && e.__esModule ? e : { default: e };
}
function _f(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function mf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function wf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Of(e, t, r) {
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
function kf(e) {
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
function Sf(e, t) {
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
    __extends: Xd,
    __assign: ei,
    __rest: Zd,
    __decorate: Qd,
    __param: ef,
    __esDecorate: tf,
    __runInitializers: rf,
    __propKey: nf,
    __setFunctionName: af,
    __metadata: of,
    __awaiter: sf,
    __generator: uf,
    __createBinding: wi,
    __exportStar: cf,
    __values: ti,
    __read: js,
    __spread: lf,
    __spreadArrays: df,
    __spreadArray: ff,
    __await: qr,
    __asyncGenerator: vf,
    __asyncDelegator: pf,
    __asyncValues: hf,
    __makeTemplateObject: gf,
    __importStar: bf,
    __importDefault: yf,
    __classPrivateFieldGet: _f,
    __classPrivateFieldSet: mf,
    __classPrivateFieldIn: wf,
    __addDisposableResource: Of,
    __disposeResources: kf,
    __rewriteRelativeImportExtension: Sf,
  },
  _h = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Of,
        get __assign() {
          return ei;
        },
        __asyncDelegator: pf,
        __asyncGenerator: vf,
        __asyncValues: hf,
        __await: qr,
        __awaiter: sf,
        __classPrivateFieldGet: _f,
        __classPrivateFieldIn: wf,
        __classPrivateFieldSet: mf,
        __createBinding: wi,
        __decorate: Qd,
        __disposeResources: kf,
        __esDecorate: tf,
        __exportStar: cf,
        __extends: Xd,
        __generator: uf,
        __importDefault: yf,
        __importStar: bf,
        __makeTemplateObject: gf,
        __metadata: of,
        __param: ef,
        __propKey: nf,
        __read: js,
        __rest: Zd,
        __rewriteRelativeImportExtension: Sf,
        __runInitializers: rf,
        __setFunctionName: af,
        __spread: lf,
        __spreadArray: ff,
        __spreadArrays: df,
        __values: ti,
        default: yh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qt = As(_h);
var an = {},
  vu;
function mh() {
  return (
    vu ||
      ((vu = 1),
      Object.defineProperty(an, "__esModule", { value: !0 }),
      (an.NavigationTarget = void 0),
      (an.NavigationTarget = {
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
    an
  );
}
var Xi = {},
  Zi = {},
  on = {},
  sn = {},
  pu;
function ft() {
  if (pu) return sn;
  ((pu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((sn.BridgeAPIError = e), sn);
}
var hu;
function we() {
  if (hu) return on;
  ((hu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.getCallBridge = void 0));
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
  return ((on.getCallBridge = r), on);
}
var un = {},
  gu;
function Ef() {
  if (gu) return un;
  ((gu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.withRateLimiter = void 0));
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
  return ((un.withRateLimiter = t), un);
}
var bu;
function wh() {
  return (
    bu ||
      ((bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = we(),
          r = ft(),
          n = Ef(),
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
      })(Zi)),
    Zi
  );
}
var yu;
function Oh() {
  return (
    yu ||
      ((yu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(wh(), e));
      })(Xi)),
    Xi
  );
}
var Qi = {},
  cn = {},
  eo = {},
  _u;
function xf() {
  return (
    _u ||
      ((_u = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = we(),
          r = ft(),
          n = Ef(),
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
              { success: v, payload: g, error: y } = h ?? {},
              m = { ...(v ? g : y) };
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
      })(eo)),
    eo
  );
}
var mu;
function kh() {
  if (mu) return cn;
  ((mu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.invokeRemote = void 0));
  const e = xf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((cn.invokeRemote = t), cn);
}
var ln = {},
  wu;
function Sh() {
  if (wu) return ln;
  ((wu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.invokeService = void 0));
  const e = xf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((ln.invokeService = t), ln);
}
var Ou;
function Eh() {
  return (
    Ou ||
      ((Ou = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = qt;
        (t.__exportStar(kh(), e), t.__exportStar(Sh(), e));
      })(Qi)),
    Qi
  );
}
var to = {},
  dn = {},
  fn = {},
  ku;
function xh() {
  if (ku) return fn;
  ((ku = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.submit = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((fn.submit = n), fn);
}
var vn = {},
  Su;
function Ch() {
  if (Su) return vn;
  ((Su = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.close = void 0));
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
  return ((vn.close = n), vn);
}
var pn = {},
  Eu;
function Rh() {
  if (Eu) return pn;
  ((Eu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.open = void 0));
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
  return ((pn.open = n), pn);
}
var hn = {},
  xu;
function Ph() {
  if (xu) return hn;
  ((xu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.refresh = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((hn.refresh = n), hn);
}
var gn = {},
  Cu;
function Ah() {
  if (Cu) return gn;
  ((Cu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.createHistory = void 0));
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
  return ((gn.createHistory = r), gn);
}
var bn = {},
  ro = {},
  jt = {},
  Ru;
function Cf() {
  return (
    Ru ||
      ((Ru = 1),
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
var ar = {},
  Pu;
function jh() {
  if (Pu) return ar;
  ((Pu = 1),
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
var yn = {},
  no = {},
  Au;
function Rf() {
  return (
    Au ||
      ((Au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = qt.__importDefault(fh()),
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
      })(no)),
    no
  );
}
var ju;
function Ih() {
  if (ju) return yn;
  ((ju = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.Translator = void 0));
  const e = Rf();
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
  return ((yn.Translator = t), yn);
}
var _n = {},
  Iu;
function Dh() {
  if (Iu) return _n;
  ((Iu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.ensureLocale = void 0));
  const e = Cf(),
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
  return ((_n.ensureLocale = a), _n);
}
var ao = {},
  Du;
function Th() {
  return (
    Du ||
      ((Du = 1),
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
                          ? v.flatMap((y) => d(y, g))
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
      })(ao)),
    ao
  );
}
var io = {},
  Tu;
function Mh() {
  return (Tu || ((Tu = 1), Object.defineProperty(io, "__esModule", { value: !0 })), io);
}
var Mu;
function Pf() {
  return (
    Mu ||
      ((Mu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = qt;
        (t.__exportStar(Cf(), e),
          t.__exportStar(jh(), e),
          t.__exportStar(Ih(), e),
          t.__exportStar(Dh(), e));
        var r = Rf();
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
      })(ro)),
    ro
  );
}
var Lu;
function Lh() {
  if (Lu) return bn;
  ((Lu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.getContext = void 0));
  const e = we(),
    t = Pf(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((bn.getContext = n), bn);
}
var mn = {},
  $u;
function $h() {
  if ($u) return mn;
  (($u = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.changeWindowTitle = void 0));
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
  return ((mn.changeWindowTitle = n), mn);
}
var wn = {},
  Nu;
function Nh() {
  if (Nu) return wn;
  ((Nu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.theme = void 0));
  const t = (0, we().getCallBridge)();
  return ((wn.theme = { enable: () => t("enableTheming") }), wn);
}
var On = {},
  kn = {},
  oo = {},
  ir = {},
  Fu;
function Af() {
  if (Fu) return ir;
  ((Fu = 1),
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
var Bu;
function Fh() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Af(),
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
      })(oo)),
    oo
  );
}
var zu;
function jf() {
  if (zu) return kn;
  ((zu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.events = void 0));
  const e = we(),
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
  return ((kn.events = { emit: n, on: a }), kn);
}
var qu;
function Bh() {
  if (qu) return On;
  ((qu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.emitReadyEvent = void 0));
  const e = jf(),
    t = If(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((On.emitReadyEvent = n), On);
}
var Uu;
function If() {
  if (Uu) return dn;
  ((Uu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.view = void 0));
  const e = xh(),
    t = Ch(),
    r = Rh(),
    n = Ph(),
    a = Ah(),
    i = Lh(),
    o = $h(),
    s = Nh(),
    u = Bh();
  return (
    (dn.view = {
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
    dn
  );
}
var Vu;
function Df() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(If(), e));
      })(to)),
    to
  );
}
var so = {},
  Sn = {},
  Gu;
function zh() {
  if (Gu) return Sn;
  ((Gu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.router = void 0));
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
  return ((Sn.router = { getUrl: r, navigate: n, open: a, reload: i }), Sn);
}
var Hu;
function qh() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(zh(), e));
      })(so)),
    so
  );
}
var uo = {},
  En = {},
  Wu;
function Uh() {
  if (Wu) return En;
  ((Wu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Modal = void 0));
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
  return ((En.Modal = a), En);
}
var Ku;
function Vh() {
  return (
    Ku ||
      ((Ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(Uh(), e));
      })(uo)),
    uo
  );
}
var It = {},
  xn = {},
  Yu;
function Gh() {
  if (Yu) return xn;
  ((Yu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.productFetchApi = void 0));
  const e = Af(),
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
            isAttachment: y,
          } = await a("fetchProduct", f),
          m = y ? (0, e.base64ToBlob)(p, h["content-type"]) : p;
        return new Response(m || null, { headers: h, status: g, statusText: v });
      };
      return {
        requestConfluence: (o, s) => i("confluence", o, s),
        requestJira: (o, s) => i("jira", o, s),
        requestBitbucket: (o, s) => i("bitbucket", o, s),
      };
    };
  return ((xn.productFetchApi = n), xn);
}
var Ju;
function Hh() {
  if (Ju) return It;
  Ju = 1;
  var e;
  (Object.defineProperty(It, "__esModule", { value: !0 }),
    (It.requestBitbucket = It.requestJira = It.requestConfluence = void 0));
  const t = we();
  return (
    (e = (0, Gh().productFetchApi)((0, t.getCallBridge)())),
    (It.requestConfluence = e.requestConfluence),
    (It.requestJira = e.requestJira),
    (It.requestBitbucket = e.requestBitbucket),
    It
  );
}
var co = {},
  Cn = {},
  Xu;
function Wh() {
  if (Xu) return Cn;
  ((Xu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.showFlag = void 0));
  const e = we(),
    t = ft(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((Cn.showFlag = n), Cn);
}
var Zu;
function Kh() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Wh();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(co)),
    co
  );
}
var lo = {},
  Qu;
function Yh() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), qt.__exportStar(jf(), e));
      })(lo)),
    lo
  );
}
var fo = {},
  Rn = {},
  ec;
function Jh() {
  if (ec) return Rn;
  ((ec = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.realtime = void 0));
  const t = (0, we().getCallBridge)(),
    r = (o, s, u) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u }),
    n = (o, s, u) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u }),
    a = (o, s, u) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u, isGlobal: !0 }),
    i = (o, s, u) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u, isGlobal: !0 });
  return ((Rn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), Rn);
}
var vo = {},
  tc;
function Xh() {
  return (
    tc ||
      ((tc = 1),
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
var rc;
function Zh() {
  return (
    rc ||
      ((rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var t = Jh();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Xh();
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
var Dt = {},
  nc;
function Qh() {
  if (nc) return Dt;
  ((nc = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.createTranslationFunction = Dt.getTranslations = Dt.resetTranslationsCache = void 0));
  const e = Pf(),
    t = Df(),
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
var ac;
function eg() {
  return (
    ac ||
      ((ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = qt;
        var r = mh();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Oh(), e),
          t.__exportStar(Eh(), e),
          t.__exportStar(Df(), e),
          t.__exportStar(qh(), e),
          t.__exportStar(Vh(), e),
          t.__exportStar(Hh(), e),
          t.__exportStar(Kh(), e),
          t.__exportStar(Yh(), e),
          t.__exportStar(Zh(), e),
          (e.i18n = t.__importStar(Qh())));
      })(Ji)),
    Ji
  );
}
var Nt = eg();
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
function tg(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Tf(e) {
  var t = tg(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function ic(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Tf(n.key), n));
  }
}
function de(e, t, r) {
  return (
    t && ic(e.prototype, t),
    r && ic(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function rg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Te(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rg(e);
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
function ua(e, t) {
  return (
    (ua = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ua(e, t)
  );
}
function Me(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ua(e, t));
}
function x(e, t, r) {
  return (
    (t = Tf(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function me() {}
function ng(e) {
  if (Array.isArray(e)) return e;
}
function ag(e, t) {
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
function Xo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mf(e, t) {
  if (e) {
    if (typeof e == "string") return Xo(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Xo(e, t)
          : void 0
    );
  }
}
function ig() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return ng(e) || ag(e, t) || Mf(e, t) || ig();
}
var Lf = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  og = function (t) {
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
  ri = function (t, r) {
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
  $f = function (t, r, n) {
    return t ? { width: r } : {};
  },
  oc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  sg = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var s = oc(o, n, a),
      u = oc(i.index, n, a),
      c = r.slice(),
      l = c.splice(s, 1),
      d = X(l, 1),
      f = d[0];
    return (c.splice(u, 0, f), c);
  };
const ug = "modulepreload",
  cg = function (e, t) {
    return new URL(e, t).href;
  },
  sc = {},
  lg = function (t, r, n) {
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
          if (((l = cg(l, n)), l in sc)) return;
          sc[l] = !0;
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
            ((p.rel = d ? "stylesheet" : ug),
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
function dg(e, t) {
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
    a = dg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function uc(e, t) {
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
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : uc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fg = (function () {
  function e(t) {
    var r = this;
    (le(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = po({}, r.payload);
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
          Ie(r) === "object" && (this.payload = po(po({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function vg(e) {
  if (Array.isArray(e)) return Xo(e);
}
function pg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function hg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $e(e) {
  return vg(e) || pg(e) || Mf(e) || hg();
}
function gg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = H(e)) !== null; );
  return e;
}
function ni() {
  return (
    (ni =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = gg(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    ni.apply(null, arguments)
  );
}
function bg(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Nf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Nf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Nf = function () {
    return !!e;
  })();
}
function yg(e, t, r, n) {
  var a = ni(H(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var _g = (function (e) {
  function t(r) {
    var n;
    return (
      le(this, t),
      (n = bg(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = $e(n.context),
          i = $e(n.handlers),
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
          return this.hasFired ? this : yg(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(fg);
function cc(e, t, r, n, a, i, o) {
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
        cc(i, n, a, o, s, "next", u);
      }
      function s(u) {
        cc(i, n, a, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var ho = { exports: {} },
  go = { exports: {} },
  lc;
function Ff() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(go)),
    go.exports
  );
}
var bo = { exports: {} },
  yo = { exports: {} },
  dc;
function Bf() {
  return (
    dc ||
      ((dc = 1),
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
      })(yo)),
    yo.exports
  );
}
var fc;
function zf() {
  return (
    fc ||
      ((fc = 1),
      (function (e) {
        var t = Bf();
        function r() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            s = i.toStringTag || "@@toStringTag";
          function u(g, y, m, w) {
            var O = y && y.prototype instanceof l ? y : l,
              _ = Object.create(O.prototype);
            return (
              t(
                _,
                "_invoke",
                (function (S, E, j) {
                  var T,
                    R,
                    D,
                    z = 0,
                    B = j || [],
                    U = !1,
                    Z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (Y, N) {
                        return ((T = Y), (R = 0), (D = n), (Z.n = N), c);
                      },
                    };
                  function V(q, Y) {
                    for (R = q, D = Y, a = 0; !U && z && !N && a < B.length; a++) {
                      var N,
                        A = B[a],
                        be = Z.p,
                        oe = A[2];
                      q > 3
                        ? (N = oe === Y) &&
                          ((D = A[(R = A[4]) ? 5 : ((R = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          ((N = q < 2 && be < A[1])
                            ? ((R = 0), (Z.v = Y), (Z.n = A[1]))
                            : be < oe &&
                              (N = q < 3 || A[0] > Y || Y > oe) &&
                              ((A[4] = q), (A[5] = Y), (Z.n = oe), (R = 0)));
                    }
                    if (N || q > 1) return c;
                    throw ((U = !0), Y);
                  }
                  return function (q, Y, N) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (U && Y === 1 && V(Y, N), R = Y, D = N; (a = R < 2 ? n : D) || !U; ) {
                      T || (R ? (R < 3 ? (R > 1 && (Z.n = -1), V(R, D)) : (Z.n = D)) : (Z.v = D));
                      try {
                        if (((z = 2), T)) {
                          if ((R || (q = "next"), (a = T[q]))) {
                            if (!(a = a.call(T, D)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((D = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = T.return) && a.call(T),
                              R < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + q + "' method",
                                )),
                                (R = 1)));
                          T = n;
                        } else if ((a = (U = Z.n < 0) ? D : S.call(E, Z)) !== c) break;
                      } catch (A) {
                        ((T = n), (R = 1), (D = A));
                      } finally {
                        z = 1;
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
      })(bo)),
    bo.exports
  );
}
var _o = { exports: {} },
  mo = { exports: {} },
  wo = { exports: {} },
  vc;
function qf() {
  return (
    vc ||
      ((vc = 1),
      (function (e) {
        var t = Ff(),
          r = Bf();
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
      })(wo)),
    wo.exports
  );
}
var pc;
function Uf() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        var t = zf(),
          r = qf();
        function n(a, i, o, s, u) {
          return new r(t().w(a, i, o, s), u || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(mo)),
    mo.exports
  );
}
var hc;
function mg() {
  return (
    hc ||
      ((hc = 1),
      (function (e) {
        var t = Uf();
        function r(n, a, i, o, s) {
          var u = t(n, a, i, o, s);
          return u.next().then(function (c) {
            return c.done ? c.value : u.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(_o)),
    _o.exports
  );
}
var Oo = { exports: {} },
  gc;
function wg() {
  return (
    gc ||
      ((gc = 1),
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
      })(Oo)),
    Oo.exports
  );
}
var ko = { exports: {} },
  So = { exports: {} },
  bc;
function Og() {
  return (
    bc ||
      ((bc = 1),
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
      })(So)),
    So.exports
  );
}
var yc;
function kg() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        var t = Og().default;
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
      })(ko)),
    ko.exports
  );
}
var _c;
function Sg() {
  return (
    _c ||
      ((_c = 1),
      (function (e) {
        var t = Ff(),
          r = zf(),
          n = mg(),
          a = Uf(),
          i = qf(),
          o = wg(),
          s = kg();
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
            var g, y;
            return function (m) {
              (g ||
                ((g = {
                  stop: function () {
                    return y(m.a, 2);
                  },
                  catch: function () {
                    return m.v;
                  },
                  abrupt: function (O, _) {
                    return y(m.a, p[O], _);
                  },
                  delegateYield: function (O, _, S) {
                    return ((g.resultName = _), y(m.d, s(O), S));
                  },
                  finish: function (O) {
                    return y(m.f, O);
                  },
                }),
                (y = function (O, _, S) {
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
                wrap: function (y, m, w, O) {
                  return c.w(h(y), m, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (y, m) {
                  return new t(y, m);
                },
                AsyncIterator: i,
                async: function (y, m, w, O, _) {
                  return (f(m) ? a : n)(h(y), m, w, O, _);
                },
                keys: o,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ho)),
    ho.exports
  );
}
var Eo, mc;
function Eg() {
  if (mc) return Eo;
  mc = 1;
  var e = Sg()();
  Eo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Eo;
}
var xg = Eg();
const F = tr(xg);
var or = {},
  Sr = {},
  Ta = {},
  wc;
function Cg() {
  if (wc) return Ta;
  ((wc = 1), Object.defineProperty(Ta, "__esModule", { value: !0 }));
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
  Oc;
function Rg() {
  if (Oc) return Pn;
  ((Oc = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn._resolveDeltasResponse = void 0));
  const e = Qt(),
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
var kc;
function Vf() {
  if (kc) return Er;
  kc = 1;
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
  const t = Qt(),
    r = Rg();
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
        let y = {
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
          y = Object.assign(Object.assign({}, y), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, y, s);
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
var An = {},
  Sc;
function Pg() {
  if (Sc) return An;
  ((Sc = 1),
    Object.defineProperty(An, "__esModule", { value: !0 }),
    (An._makeParamStoreGetter = void 0));
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
  return ((An._makeParamStoreGetter = c), An);
}
var sr = {},
  Ec;
function Ag() {
  if (Ec) return sr;
  Ec = 1;
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
  const t = Qt(),
    r = Vf();
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
var xc;
function jg() {
  if (xc) return Sr;
  xc = 1;
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
        function h(y) {
          try {
            g(l.next(y));
          } catch (m) {
            p(m);
          }
        }
        function v(y) {
          try {
            g(l.throw(y));
          } catch (m) {
            p(m);
          }
        }
        function g(y) {
          y.done ? f(y.value) : d(y.value).then(h, v);
        }
        g((l = l.apply(s, u || [])).next());
      });
    };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Cg(),
    n = Vf(),
    a = Pg(),
    i = Ag();
  let o = class Zo extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof Zo
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Zo(u ?? "", {}));
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
      const y =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        m = y ?? g;
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
      const y = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                y,
                m,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: y }), y);
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
var Cc;
function Ig() {
  return (
    Cc ||
      ((Cc = 1),
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
        const n = Qt(),
          a = jg();
        ((e.StatsigClient = a.default), r(Qt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var ot = Ig(),
  xo = { exports: {} },
  Rc;
function Dg() {
  return (
    Rc ||
      ((Rc = 1),
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
              y = arguments.length,
              m,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), y)) {
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
              for (w = 1, m = new Array(y - 1); w < y; w++) m[w - 1] = arguments[w];
              g.fn.apply(g.context, m);
            } else {
              var O = g.length,
                _;
              for (w = 0; w < O; w++)
                switch ((g[w].once && this.removeListener(c, g[w].fn, void 0, !0), y)) {
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
                    if (!m) for (_ = 1, m = new Array(y - 1); _ < y; _++) m[_ - 1] = arguments[_];
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
              for (var v = 0, g = [], y = h.length; v < y; v++)
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
      })(xo)),
    xo.exports
  );
}
var Tg = Dg();
const Mg = tr(Tg);
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
function Wt(e) {
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
var Ma = "@all-features",
  Lg = (function () {
    function e() {
      (le(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Mg()));
    }
    return de(e, [
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
  $g = "fedramp-moderate";
function Ng() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === $g;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Is = (function (e) {
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
  Jn = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  ca = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Fg = [
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
function Qo(e) {
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
var La = function (t) {
    return Qo({ perimeter: Ng() ? ca.FEDRAMP_MODERATE : ca.COMMERCIAL }, t);
  },
  jn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, p) {
      var h = X(f, 1),
        v = h[0],
        g = X(p, 1),
        y = g[0];
      return v.localeCompare(y);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var s = X(n[o], 2),
        u = s[1],
        c = X(a[o], 2),
        l = c[1];
      if (u !== l) return !1;
    }
    return !0;
  },
  jc = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Bg = function (t) {
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
    var f = re(t, Fg);
    return Qo(
      Qo({}, f),
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
  zg = Object.entries(Is).map(function (e) {
    var t = X(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Gf = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = zg.find(function (o) {
            var s = X(o, 1),
              u = s[0];
            return i.includes(u);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Is.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  es = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Ic = (function () {
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
              u = Array.isArray(o) ? "array" : Ie(o);
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
                Gf(r.details),
                es(
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
  Dc = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (le(this, e),
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
              u,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                Gf(r.details),
                function (l, d) {
                  return r.get(d);
                },
                es(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                es(
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
  Br = "0.0.0-development";
function qg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Hf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hf = function () {
    return !!e;
  })();
}
function Ug(e, t, r) {
  if (Hf()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ua(a, r.prototype), a);
}
function ts(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ts = function (n) {
      if (n === null || !qg(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Ug(n, arguments, H(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ua(a, n)
      );
    }),
    ts(e)
  );
}
function Vg(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Wf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Tc = (function (e) {
  function t(r) {
    return (le(this, t), Vg(this, t, [r]));
  }
  return (Me(t, e), de(t));
})(ts(Error));
function Mc(e, t) {
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
function Gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Hg = 5e3,
  Wg = "https://api.atlassian.com/flags",
  Kg = "https://api.stg.atlassian.com/flags",
  Yg = "https://api.dev.atlassian.com/flags",
  Jg = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Xg = "https://api.atlassian-us-gov-mod.com/flags",
  Zg = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Qg = "oasis-stg.com/flags",
  eb = "atlassian-isolated.net/flags",
  tb = "/gateway/api/flags",
  Co = (function () {
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
                        new Tc(
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
                      throw new Tc("Unexpected 204 response");
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
          if (n) return tb;
          if (a === ca.FEDRAMP_MODERATE)
            switch (r) {
              case Jn.Production:
                return Xg;
              case Jn.Staging:
                return Jg;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === ca.COMMERCIAL)
            switch (r) {
              case Jn.Development:
                return Yg;
              case Jn.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : Kg;
              default:
                var s = this.getApiUrl(i);
                return s !== null ? s : Wg;
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
                          (c = o.fetchTimeoutMs || Hg),
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
                            Gg(
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
          if (n === void 0) return r ? Zg.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(Qg);
          var s = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(eb) : null;
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
function Lc(e, t) {
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
function In(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rb(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Kf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
function nb(e, t, r, n) {
  var a = ni(H(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var ab = (function (e) {
  function t() {
    var r;
    return (
      le(this, t),
      (r = rb(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
                            In(
                              In({}, this.bootstrapResult),
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
            In(In({}, this.bootstrapResult), {}, { fullUserHash: ot._getFullUserHash(n) })
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
          nb(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = In({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ot.DataAdapterCore);
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
function Re(e) {
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
function ib(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ob(e)) || t) {
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
function ob(e, t) {
  if (e) {
    if (typeof e == "string") return Nc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Nc(e, t)
          : void 0
    );
  }
}
function Nc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ro = "LocalOverride:Recognized",
  sb = "STATSIG_OVERRIDES",
  Fc = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  xr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  We = function (t, r) {
    return r + ":" + t;
  },
  ub = (function () {
    function e(t) {
      (le(this, e),
        (this._overrides = xr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return de(e, [
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
                f = X(l[c], 2),
                p = f[0],
                h = f[1];
              r.gates[p] = h;
            }
            for (
              var v = 0, g = Object.entries((y = u.configs) !== null && y !== void 0 ? y : {});
              v < g.length;
              v++
            ) {
              var y,
                m = X(g[v], 2),
                w = m[0],
                O = m[1];
              r.configs[w] = O;
            }
            for (
              var _ = 0, S = Object.entries((E = u.layers) !== null && E !== void 0 ? E : {});
              _ < S.length;
              _++
            ) {
              var E,
                j = X(S[_], 2),
                T = j[0],
                R = j[1];
              r.layers[T] = R;
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
            this.parseStoredOverrides(Fc),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Fc);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              s = ib(o),
              u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var c = u.value,
                  l = He._DJB2(c);
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
          var n = Re(Re({}, xr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = X(i[a], 2), s = o[0], u = o[1], c = 0, l = Object.entries(u);
              c < l.length;
              c++
            ) {
              var d = X(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(We(He._DJB2(f), s), p);
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
            : Re(Re({}, r), {}, { value: i, details: Re(Re({}, r.details), {}, { reason: Ro }) });
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
                : this._djb2Map.get(We(r.name, "layers"));
          return i == null
            ? null
            : Re(
                Re({}, r),
                {},
                {
                  __value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Re(Re({}, r.details), {}, { reason: Ro }),
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
            : Re(
                Re({}, r),
                {},
                {
                  value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Re(Re({}, r.details), {}, { reason: Ro }),
                },
              );
        },
      },
    ]);
  })(),
  cb = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Kt(e) {
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
var zc = "client-default-key",
  lb = "https://xp.atlassian.com/v1/rgstr",
  db = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? sb : n,
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
        x(this, "subscriptions", new Lg()),
        x(this, "dataAdapter", new ab()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new ub(a)));
    }
    return de(e, [
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
                        if (((u = La(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          jn(u, this.initOptions) ||
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
                        if (((c = La(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          jn(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Br),
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
                    clientVersion: Br,
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
                s.initOptions.environment !== Jn.Production &&
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
                          (c = La(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          jn(c, this.initOptions) ||
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
                          (s = La(a)),
                          (u = function () {
                            return Co.fetchExperimentValues(s, i, o).then(function (f) {
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
            return Ic.fromExperiment(
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
              new Ic(r, {}, "", { time: Date.now(), reason: Is.Error })
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
          return jn(this.currentIdentifiers, r) && jn(this.currentAttributes, n);
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
                          (l = Co.fetchClientSdk(a).then(function (y) {
                            return (s.sdkKey = y.clientSdkKey);
                          })),
                          (d = Co.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = X(f, 2)),
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
                function (y) {
                  for (;;)
                    switch ((y.prev = y.next)) {
                      case 0:
                        return (
                          (u = Kt(Kt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (y.prev = 1),
                          (y.next = 4),
                          i.setProfile(a, o, s)
                        );
                      case 4:
                        return (
                          (d = i.getClientSdkKey().then(function (m) {
                            return (u.sdkKey = m);
                          })),
                          (f = i.getExperimentValues()),
                          (y.next = 8),
                          Promise.all([d, f])
                        );
                      case 8:
                        ((p = y.sent),
                          (h = X(p, 2)),
                          (v = h[1]),
                          (c = v.experimentValues),
                          (l = v.customAttributesFromFetch),
                          (y.next = 22));
                        break;
                      case 15:
                        return (
                          (y.prev = 15),
                          (y.t0 = y.catch(1)),
                          y.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                y.t0 === null || y.t0 === void 0 ? void 0 : y.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (y.next = 21),
                          this.initFromValues(u, o, s)
                        );
                      case 21:
                        throw y.t0;
                      case 22:
                        return y.abrupt("return", this.initFromValues(u, o, l, c));
                      case 23:
                      case "end":
                        return y.stop();
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
                          (c = Bg(a)),
                          c.sdkKey || (c.sdkKey = zc),
                          ((s = c.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (c.networkConfig = Kt(
                              Kt({}, c.networkConfig),
                              {},
                              { logEventUrl: lb },
                            )),
                          c.perimeter === ca.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = re(c, cb)),
                          (this.user = jc(i, o)),
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
                          (this.statsigClient = new ot.StatsigClient(zc, this.user, p)),
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
                function (y) {
                  for (;;)
                    switch ((y.prev = y.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (y.prev = 1),
                          (y.next = 4),
                          a
                        );
                      case 4:
                        ((c = y.sent), (l = jc(i, c.customAttributesFromFetch)), (y.next = 13));
                        break;
                      case 8:
                        throw (
                          (y.prev = 8),
                          (y.t0 = y.catch(1)),
                          (p = y.t0 instanceof Error ? y.t0.message : JSON.stringify(y.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, p),
                          y.t0
                        );
                      case 13:
                        if (
                          ((h = !0),
                          (v = null),
                          (y.prev = 15),
                          this.dataAdapter.setBootstrapData(c.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          y.next = 21;
                          break;
                        }
                        return ((y.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        y.next = 27;
                        break;
                      case 23:
                        ((y.prev = 23), (y.t1 = y.catch(15)), (h = !1), (v = String(y.t1)));
                      case 27:
                        if (
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (u = s.updateUserCompletionCallback) === null ||
                            u === void 0 ||
                            u.call(s, h, v),
                          !h)
                        ) {
                          y.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          this.subscriptions.anyUpdated(),
                          (y.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return y.stop();
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
            return Dc.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Dc.fromLayer(ot._makeLayer(r, { reason: "Error" }, null))
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
I = G;
x(G, "client", new db());
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
x(G, "initializeCalled", I.client.initializeCalled.bind(I.client));
x(G, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
x(G, "initialize", I.client.initialize.bind(I.client));
x(G, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
x(G, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
x(G, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
x(G, "getExperiment", I.client.getExperiment.bind(I.client));
x(G, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
x(G, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
x(G, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
x(G, "overrideGate", I.client.overrideGate.bind(I.client));
x(G, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
x(G, "overrideConfig", I.client.overrideConfig.bind(I.client));
x(G, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
x(G, "setOverrides", I.client.setOverrides.bind(I.client));
x(G, "getOverrides", I.client.getOverrides.bind(I.client));
x(G, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
x(G, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
x(G, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
x(G, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
x(G, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
x(G, "updateUser", I.client.updateUser.bind(I.client));
x(G, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
x(G, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
x(G, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
x(G, "getLayer", I.client.getLayer.bind(I.client));
x(G, "getLayerValue", I.client.getLayerValue.bind(I.client));
var rs = G;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = G;
  else {
    var $a, Po;
    rs = window.__FEATUREGATES_JS__;
    var qc =
      (($a = rs) === null || $a === void 0 || (Po = $a.getPackageVersion) === null || Po === void 0
        ? void 0
        : Po.call($a)) || "4.10.0 or earlier";
    if (qc !== Br) {
      var fb = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(qc, " when module version ")
        .concat(Br, " was loading.");
      console.warn(fb);
    }
  }
var Cr,
  Rr,
  vb =
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.JEST_WORKER_ID) !== void 0,
  pb =
    !vb &&
    (globalThis == null ||
    (Rr = globalThis.process) === null ||
    Rr === void 0 ||
    (Rr = Rr.env) === null ||
    Rr === void 0
      ? void 0
      : Rr.NODE_ENV) !== "production",
  hb = function () {
    var t;
    pb && (t = console).debug.apply(t, arguments);
  },
  Ds = {},
  gb = "@atlaskit/platform-feature-flags",
  ea = "__PLATFORM_FEATURE_FLAGS__",
  Yf = typeof process < "u" && typeof Ds < "u",
  bb = Yf ? Ds.ENABLE_PLATFORM_FF === "true" : !1,
  yb = Yf ? Ds.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  _b = bb || yb,
  mb = { booleanResolver: void 0 },
  ta = typeof window < "u" ? window : globalThis;
ta[ea] = ta[ea] || mb;
function wb(e) {
  if (_b)
    return (
      hb(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        gb,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = ta[ea]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = ta[ea]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return rs.checkGate(e);
    var a = (n = ta[ea]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function Se(e) {
  return wb(e);
}
var Ob = b.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  kb = function () {
    return b.useContext(Ob);
  },
  ai = function (t) {
    var r = b.useRef(t);
    return ((r.current = t), r);
  };
function Sb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Eb(e, t) {
  var r = b.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = b.useRef(!0),
    a = b.useRef(r),
    i = n.current || !!(t && a.current.inputs && Sb(t, a.current.inputs)),
    o = i ? a.current : { inputs: t, result: e() };
  return (
    b.useEffect(
      function () {
        ((n.current = !1), (a.current = o));
      },
      [o],
    ),
    o.result
  );
}
function xb(e, t) {
  return Eb(function () {
    return e;
  }, t);
}
function Jf() {
  var e = kb(),
    t = xb(
      function (r) {
        return new _g({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Uc(e, t) {
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
      ? Uc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Uc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function la(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    u = Jf(),
    c = u.createAnalyticsEvent,
    l = ai(s),
    d = ai(t),
    f = b.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = Cb({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
function Vc(e, t) {
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
function Rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vc(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    s = Jf(),
    u = s.createAnalyticsEvent,
    c = ai(o),
    l = ai(t),
    d = b.useCallback(
      function () {
        var f = u({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = Rb({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, u, c, l],
    );
  return d;
}
var fr = "ASC",
  ii = "DESC",
  Pb = "small",
  oi = "large",
  Xf = 0.22;
const Ab = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, Ab) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Jt(e, t, r) {
  return e ?? "var(--c-, )";
}
var Hc = "#FF5630",
  Wc = "#DE350B",
  Pr = "#BF2600",
  Kc = "#FFC400",
  Yc = "#FFAB00",
  Ar = "#FF991F",
  Zf = "#DEEBFF",
  Xn = "#B3D4FF",
  si = "#4C9AFF",
  Jc = "#2684FF",
  Xc = "#0065FF",
  jr = "#0052CC",
  Zc = "#0747A6",
  Yt = "#FFFFFF",
  jb = "#FAFBFC",
  Pe = "#F4F5F7",
  ns = "#DFE1E6",
  ur = "#A5ADBA",
  Ib = "#8993A4",
  Db = "#6B778C",
  Qc = "#5E6C84",
  Tb = "#505F79",
  da = "#42526E",
  Ke = "#253858",
  Ir = "#172B4D",
  Dn = "rgba(9, 30, 66, 0.04)",
  as = "rgba(9, 30, 66, 0.08)",
  QS = "rgba(9, 30, 66, 0.25)",
  eE = "rgba(9, 30, 66, 0.31)",
  it = "#9FB0CC",
  Mb = "#8C9CB8",
  Ao = "#67758F",
  Tn = "#3B475C",
  el = "#313D52",
  Mn = "#1B2638",
  Dr = "#0D1424",
  Lb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"];
function tl(e, t) {
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
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $b = b.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      s = re(e, Lb);
    return b.createElement(
      "table",
      K({ inert: o ? "" : void 0, ref: t }, s, {
        "data-testid": i && "".concat(i, "--table"),
        className: C([
          "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
          r && "_1kqm1n9t",
          n && "_179r1tpy",
        ]),
        style: rl(
          rl(
            {},
            {
              "--local-dynamic-table-hover-bg":
                "var(--ds-background-neutral-subtle-hovered, ".concat(jb, ")"),
              "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, ".concat(
                Zf,
                ")",
              ),
              "--local-dynamic-table-hover-highlighted-bg":
                "var(--ds-background-selected-hovered, ".concat(Xn, ")"),
              "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, ".concat(
                si,
                ")",
              ),
            },
          ),
          {},
          {
            "--_mwqor1": Jt(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(ns, ")"),
              ),
            ),
          },
        ),
      }),
      a,
    );
  }),
  Nb = function (t) {
    var r = t.children;
    return b.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Fb = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Bb = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  zb = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
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
  qb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ub(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Qf() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Qf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qf = function () {
    return !!e;
  })();
}
var il = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Vb = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === fr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (u, c) {
      var l = il(u.cells, t, n),
        d = il(c.cells, t, n);
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
function Gb(e) {
  var t = (function (r) {
    function n() {
      var a;
      le(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      return ((a = Ub(this, n, [].concat(o))), x(a, "state", { pageRows: [] }), a);
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
                u = re(i, qb);
              return k.createElement(
                e,
                K({ pageRows: this.state.pageRows, head: o }, u, { ref: s }),
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
              ri(c, u);
              var h, v;
              return (
                p ? ((h = s), (v = s)) : ((h = Vb(u, s, c, l) || []), (v = Lf(h, d, f))),
                al(al({}, o), {}, { pageRows: v })
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
var Hb = "--local-dynamic-table-width",
  ev = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, Hb, "".concat(r, "%")) : void 0;
  },
  Wb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Kb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = re(t, Wb);
    return b.createElement(
      "td",
      K(
        {
          style: ev({ width: r }),
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
  Yb = ["isHighlighted", "children", "style", "testId", "className"],
  Jb = b.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      s = re(e, Yb);
    return b.createElement(
      "tr",
      K(
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
  Xb = ["cells"],
  Zb = ["content", "testId"],
  Qb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      u = re(r, Xb);
    return k.createElement(
      Jb,
      K(
        {},
        u,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(u.key)) },
      ),
      s.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          p = re(c, Zb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          Kb,
          K({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, p, {
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
function ey(e, t, r) {
  return (
    (t = H(t)),
    Te(e, tv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var ty = (function (e) {
    function t() {
      return (le(this, t), ey(this, t, arguments));
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
              u = n.testId,
              c = n.forwardedRef;
            return k.createElement(
              "tbody",
              { "data-testid": u && "".concat(u, "--body"), ref: c },
              a.map(function (l, d) {
                return k.createElement(Qb, {
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
  ry = Gb(
    k.forwardRef(function (e, t) {
      return k.createElement(ty, K({}, e, { forwardedRef: t }));
    }),
  );
function ny(e, t, r) {
  return (
    (t = H(t)),
    Te(e, rv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var ay = (function (e) {
  function t(r) {
    var n;
    return (le(this, t), (n = ny(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const Ts = b.createContext(null);
var iy = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function oy(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(da, ")")
    : "var(--ds-icon-inverse, ".concat(Yt, ")");
}
var Na = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  sy = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  nv = k.memo(
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
        f = typeof l == "number" ? l : iy[l],
        p = "".concat(o, "ms"),
        h = oy(a),
        v = b.useContext(Ts);
      return (
        sy(
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
            className: C([Na.wrapperStyles, Na.rotateStyles]),
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
              className: C([Na.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Na.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function sl(e) {
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
var ul = "--contents-opacity",
  uy = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  cy = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: sl(sl({}, x({}, ul, n)), {}, { "--_cnddr8": Jt("var(".concat(ul, ")")) }),
      },
      r,
    );
  },
  ly = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function dy(e, t, r) {
  return (
    (t = H(t)),
    Te(e, av() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var iv = (function (e) {
  function t() {
    return (le(this, t), dy(this, t, arguments));
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
            u = n.testId,
            c = n.loadingLabel;
          return k.createElement(
            uy,
            { testId: u },
            i ? k.createElement(cy, { contentsOpacity: s, testId: u }, a) : a,
            i &&
              k.createElement(
                ly,
                { testId: u },
                k.createElement(nv, {
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
x(iv, "defaultProps", {
  isLoading: !0,
  spinnerSize: oi,
  contentsOpacity: Xf,
  loadingLabel: "Loading table",
});
var fy = ["children", "testId"],
  vy = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = re(e, fy);
    return b.createElement(
      "div",
      K({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  py = function (t) {
    var r = t.children,
      n = t.testId;
    return b.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  hy = b.forwardRef(function (e, t) {
    var r = e.children;
    return b.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function gy(e, t, r) {
  return (
    (t = H(t)),
    Te(e, ov() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ov = function () {
    return !!e;
  })();
}
var sv = (function (e) {
  function t() {
    var r;
    le(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = gy(this, t, [].concat(a))),
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
          Ie(o.style) === "object" &&
          ((o.style.pointerEvents = u ? "none" : ""), (o.style.opacity = u ? c.toString() : ""));
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
                    y = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : y;
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
            vy,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                py,
                { testId: s },
                k.createElement(
                  hy,
                  { ref: this.spinnerRef },
                  k.createElement(nv, {
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
x(sv, "defaultProps", {
  isLoading: !0,
  spinnerSize: oi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Xf), ")"),
  loadingLabel: "Loading table",
});
function by(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = b.useState(t),
    a = X(n, 2),
    i = a[0],
    o = a[1],
    s = b.useRef(r);
  b.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var u = r ? e : i,
    c = b.useCallback(function (l) {
      s.current || o(l);
    }, []);
  return [u, c];
}
var Ln = {},
  $n = {},
  yy = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _y = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  my = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  wy = { core: 16, utility: 12 },
  Oy = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  cl = b.memo(function (t) {
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
      y = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !Se("platform-visual-refresh-icons"))
      return b.createElement(d, {
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
      else if (y) {
        var _ = t.size(y);
        O = _ === "small" || _ === "medium" ? _ : O;
      }
    }
    var S = wy[w],
      E = Oy[w][O][g],
      j = S + 2 * E;
    return b.createElement(
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
      b.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - E, " ")
          .concat(0 - E, " ")
          .concat(j, " ")
          .concat(j),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? my[g] : O === "small" ? _y[g] : yy[g],
        ]),
      }),
    );
  });
const ky = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: cl, default: cl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Oi = As(ky);
var ll;
function Sy() {
  if (ll) return $n;
  ((ll = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(dt()),
    t = r(Oi);
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
  return ((n.displayName = "ChevronLeftIcon"), ($n.default = n), $n);
}
var Nn = {};
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
function fl(e) {
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
var Ey = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  vl = b.memo(function (t) {
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
        : { children: n ? b.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return b.createElement(
      "span",
      K(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: fl(
            fl({}, v),
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
            u && Ey[u],
          ]),
        },
      ),
    );
  });
const xy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: vl, default: vl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  uv = As(xy);
var pl;
function Cy() {
  if (pl) return Nn;
  ((pl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = r(dt()),
    t = uv;
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
var hl;
function Ry() {
  if (hl) return Ln;
  ((hl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = n(dt()),
    t = n(Sy()),
    r = n(Cy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (Ln.default = a), Ln);
}
var Py = Ry();
const Ay = tr(Py);
var Fn = {},
  Bn = {},
  gl;
function jy() {
  if (gl) return Bn;
  ((gl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(dt()),
    t = r(Oi);
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
  return ((n.displayName = "ChevronRightIcon"), (Bn.default = n), Bn);
}
var zn = {},
  bl;
function Iy() {
  if (bl) return zn;
  ((bl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = r(dt()),
    t = uv;
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
var yl;
function Dy() {
  if (yl) return Fn;
  ((yl = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = n(dt()),
    t = n(jy()),
    r = n(Iy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Fn.default = a), Fn);
}
var Ty = Dy();
const My = tr(Ty);
var Ms = b.createContext("elevation.surface"),
  Ly = function () {
    return b.useContext(Ms);
  };
Ms.displayName = "SurfaceProvider";
var $y = [
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
  Ny = ["className"],
  Fy = {
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
  cv = {
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
  By = {
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
  zy = {
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
  qy = {
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
  Uy = {
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
  ki = b.forwardRef(function (e, t) {
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
      y = e.paddingInlineEnd,
      m = y === void 0 ? h : y,
      w = e.style,
      O = e.testId,
      _ = e.xcss,
      S = re(e, $y);
    S.className;
    var E = re(S, Ny),
      j = b.createElement(
        n,
        K(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Fy[i],
              i && Vy(i) && cv[i],
              l && By[l],
              f && zy[f],
              g && qy[g],
              m && Uy[m],
              _,
            ]),
          },
          E,
          { "data-testid": O },
        ),
        a,
      );
    return i ? b.createElement(Ms.Provider, { value: i }, j) : j;
  });
function Vy(e) {
  return e in cv;
}
const jo = () =>
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
  lv = (...e) => C(e);
function Gy() {
  return {
    css() {
      throw jo();
    },
    cssMap() {
      throw jo();
    },
    cx: lv,
    XCSSProp() {
      throw jo();
    },
  };
}
var Hy = Gy(),
  Wy = Hy.cx,
  Ky = [
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
  _l = {
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
  ml = {
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
  Yy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Jy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Xy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Zy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Qy = { root: "_1e0c1txw _vchhusvi" },
  ui = b.memo(
    b.forwardRef(function (e, t) {
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
        v = re(e, Ky);
      return b.createElement(
        n,
        K({}, v, {
          role: a,
          className: C([
            Qy.root,
            s && ml[s],
            u && ml[u],
            s && _l[s],
            c && _l[c],
            i && Zy[i],
            f && Jy[f],
            o && Yy[o],
            p && Xy[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ui.displayName = "Flex";
var e_ = [
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
  is = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  t_ = function (t) {
    var r = t.children;
    return b.createElement("span", { className: C([is.separator]) }, r);
  },
  Ga = b.memo(
    b.forwardRef(function (e, t) {
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
        y = re(e, e_),
        m = typeof f == "string" ? b.createElement(t_, null, f) : f,
        w = m
          ? b.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, _) {
                return b.createElement(b.Fragment, { key: _ }, f && _ > 0 ? m : null, O);
              })
          : g;
      return b.createElement(
        ui,
        K({}, y, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: u || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Wy(c === "hug" && is.hug, c === "fill" && is.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
Ga.displayName = "Inline";
var r_ = "Invariant failed";
function n_(e, t) {
  if (!e) throw new Error(r_);
}
var dv = b.createContext(!1),
  a_ = function () {
    return b.useContext(dv);
  },
  i_ = dv.Provider,
  o_ = ["span", "p", "strong", "em"],
  s_ = function (t, r) {
    var n = Ly();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return wl.hasOwnProperty(n) ? wl[n] : "color.text";
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
  u_ = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  c_ = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  l_ = {
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
  wl = {
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
  d_ = b.forwardRef(function (e, t) {
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
    n_(o_.includes(n));
    var p = a_(),
      h = s_(a, p);
    !u && !p && (u = "medium");
    var v = b.createElement(
      n,
      {
        id: s,
        className: C([
          Tr.root,
          u && u_[u],
          h && l_[h],
          l && Tr.truncation,
          l === 1 && Tr.breakAll,
          i && Tr["textAlign.".concat(i)],
          c && c_[c],
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
    return p ? v : b.createElement(i_, { value: !0 }, v);
  });
function f_() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var v_ = ["as", "children", "isInset", "testId", "style", "xcss"],
  p_ = ["className"],
  h_ = b.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      s = e.style,
      u = e.xcss,
      c = re(e, v_);
    c.className;
    var l = re(c, p_);
    return b.createElement(
      n,
      K({}, l, {
        ref: t,
        className: C([
          "_mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          Se("platform_dst_compiled_primitives_outline_reset") && "_ymio1r31 _ypr0glyw _zcxs1o36",
          u,
        ]),
        style: s,
        "data-testid": o,
      }),
      a,
    );
  }),
  g_ = [
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
  b_ = ["className"],
  Ol = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  y_ = b.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      s = o === void 0 ? me : o,
      u = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = re(e, g_),
      g = b.useContext(Ts),
      y = b.useCallback(
        function (O, _) {
          (g && g.tracePress(u, O.timeStamp), s(O, _));
        },
        [s, g, u],
      ),
      m = la({
        fn: y,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "14.15.2",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = re(v, b_);
    return b.createElement(
      h_,
      K({ as: "button", tabIndex: h ?? (f_() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: lv(Ol.root, n && Ol.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Io = {},
  qn = {},
  kl;
function fv() {
  if (kl) return qn;
  ((kl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.bind = void 0));
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
  return ((qn.bind = e), qn);
}
var cr = {},
  Sl;
function __() {
  if (Sl) return cr;
  Sl = 1;
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
  var t = fv();
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
var El;
function m_() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = fv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = __();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Io)),
    Io
  );
}
var Si = m_(),
  w_ = function () {
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
  vv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: w_() });
  },
  O_ = vv(),
  k_ = b.createContext(vv()),
  S_ = function (e) {
    return e.value++;
  },
  E_ = function (e) {
    return e ? e.prefix : "";
  },
  x_ = function (e) {
    var t = e || O_,
      r = E_(t),
      n = S_(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  pv = function () {
    var e = b.useContext(k_),
      t = b.useState(function () {
        return x_(e);
      })[0];
    return t;
  },
  C_ = function () {
    var e = pv().uid;
    return e;
  },
  R_ = function () {
    var e = pv().gen;
    return e;
  },
  Do,
  Ha = (Do = k.useId) !== null && Do !== void 0 ? Do : void 0;
function P_() {
  return Ha && Se("platform-dst-react-18-use-id")
    ? Se("platform-dst-react-18-use-id-selector-safe")
      ? Ha().replace(/[:«»]/g, "_")
      : Ha()
    : "uid".concat(C_());
}
function A_() {
  if (Ha && Se("platform-dst-react-18-use-id")) {
    var e = P_();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return R_();
}
var hv = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      i = t.id;
    return b.createElement(
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
  j_ = {
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
  I_ = ["children"];
function D_(e) {
  var t = function (s, u) {
      return s(u);
    },
    r = b.createContext(e);
  function n(o) {
    var s = b.useContext(r),
      u = s || t,
      c = u(o);
    return c;
  }
  function a(o) {
    var s = o.children,
      u = re(o, I_),
      c = n(u);
    return k.createElement(k.Fragment, null, s(c));
  }
  function i(o) {
    var s = b.useContext(r),
      u = o.value || t,
      c = b.useCallback(
        function (l) {
          return u(s, l);
        },
        [s, u],
      );
    return k.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var T_ = D_(function () {
    return { mode: "light" };
  }),
  M_ = T_.useTheme;
function L_(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function $_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var N_ = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($_(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = L_(a);
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
  ci = "-moz-",
  Q = "-webkit-",
  gv = "comm",
  Ls = "rule",
  $s = "decl",
  F_ = "@import",
  bv = "@keyframes",
  B_ = "@layer",
  z_ = Math.abs,
  Ei = String.fromCharCode,
  q_ = Object.assign;
function U_(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function yv(e) {
  return e.trim();
}
function V_(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function os(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function fa(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function Ns(e) {
  return e.length;
}
function Fa(e, t) {
  return (t.push(e), e);
}
function G_(e, t) {
  return e.map(t).join("");
}
var xi = 1,
  Ur = 1,
  _v = 0,
  De = 0,
  he = 0,
  Jr = "";
function Ci(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: xi,
    column: Ur,
    length: o,
    return: "",
  };
}
function Un(e, t) {
  return q_(Ci("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function H_() {
  return he;
}
function W_() {
  return ((he = De > 0 ? ye(Jr, --De) : 0), Ur--, he === 10 && ((Ur = 1), xi--), he);
}
function Be() {
  return ((he = De < _v ? ye(Jr, De++) : 0), Ur++, he === 10 && ((Ur = 1), xi++), he);
}
function mt() {
  return ye(Jr, De);
}
function Wa() {
  return De;
}
function wa(e, t) {
  return fa(Jr, e, t);
}
function va(e) {
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
function mv(e) {
  return ((xi = Ur = 1), (_v = gt((Jr = e))), (De = 0), []);
}
function wv(e) {
  return ((Jr = ""), e);
}
function Ka(e) {
  return yv(wa(De - 1, ss(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function K_(e) {
  for (; (he = mt()) && he < 33; ) Be();
  return va(e) > 2 || va(he) > 3 ? "" : " ";
}
function Y_(e, t) {
  for (; --t && Be() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return wa(e, Wa() + (t < 6 && mt() == 32 && Be() == 32));
}
function ss(e) {
  for (; Be(); )
    switch (he) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ss(he);
        break;
      case 40:
        e === 41 && ss(e);
        break;
      case 92:
        Be();
        break;
    }
  return De;
}
function J_(e, t) {
  for (; Be() && e + he !== 57; ) if (e + he === 84 && mt() === 47) break;
  return "/*" + wa(t, De - 1) + "*" + Ei(e === 47 ? e : Be());
}
function X_(e) {
  for (; !va(mt()); ) Be();
  return wa(e, De);
}
function Z_(e) {
  return wv(Ya("", null, null, null, [""], (e = mv(e)), 0, [0], e));
}
function Ya(e, t, r, n, a, i, o, s, u) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      y = 1,
      m = 0,
      w = "",
      O = a,
      _ = i,
      S = n,
      E = w;
    g;

  )
    switch (((h = m), (m = Be()))) {
      case 40:
        if (h != 108 && ye(E, d - 1) == 58) {
          os((E += ee(Ka(m), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ka(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += K_(h);
        break;
      case 92:
        E += Y_(Wa() - 1, 7);
        continue;
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            Fa(Q_(J_(Be(), Wa()), t, r), u);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[c++] = gt(E) * y;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (y == -1 && (E = ee(E, /\f/g, "")),
              p > 0 &&
                gt(E) - d &&
                Fa(p > 32 ? Cl(E + ";", n, r, d - 1) : Cl(ee(E, " ", "") + ";", n, r, d - 2), u));
            break;
          case 59:
            E += ";";
          default:
            if ((Fa((S = xl(E, t, r, c, l, a, s, w, (O = []), (_ = []), d)), i), m === 123))
              if (l === 0) Ya(E, t, S, S, O, i, d, s, _);
              else
                switch (f === 99 && ye(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ya(
                      e,
                      S,
                      S,
                      n && Fa(xl(e, S, S, 0, 0, a, s, w, a, (O = []), d), _),
                      a,
                      _,
                      d,
                      s,
                      n ? O : _,
                    );
                    break;
                  default:
                    Ya(E, S, S, S, [""], _, 0, s, _);
                }
        }
        ((c = l = p = 0), (v = y = 1), (w = E = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(E)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && W_() == 125) continue;
        }
        switch (((E += Ei(m)), m * v)) {
          case 38:
            y = l > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[c++] = (gt(E) - 1) * y), (y = 1));
            break;
          case 64:
            (mt() === 45 && (E += Ka(Be())), (f = mt()), (l = d = gt((w = E += X_(Wa())))), m++);
            break;
          case 45:
            h === 45 && gt(E) == 2 && (v = 0);
        }
    }
  return i;
}
function xl(e, t, r, n, a, i, o, s, u, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Ns(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var y = 0, m = fa(e, d + 1, (d = z_((v = o[h])))), w = e; y < p; ++y)
      (w = yv(v > 0 ? f[y] + " " + m : ee(m, /&\f/g, f[y]))) && (u[g++] = w);
  return Ci(e, t, r, a === 0 ? Ls : s, u, c, l);
}
function Q_(e, t, r) {
  return Ci(e, t, r, gv, Ei(H_()), fa(e, 2, -2), 0);
}
function Cl(e, t, r, n) {
  return Ci(e, t, r, $s, fa(e, 0, n), fa(e, n + 1, -1), n);
}
function zr(e, t) {
  for (var r = "", n = Ns(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function em(e, t, r, n) {
  switch (e.type) {
    case B_:
      if (e.children.length) break;
    case F_:
    case $s:
      return (e.return = e.return || e.value);
    case gv:
      return "";
    case bv:
      return (e.return = e.value + "{" + zr(e.children, n) + "}");
    case Ls:
      e.value = e.props.join(",");
  }
  return gt((r = zr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function tm(e) {
  var t = Ns(e);
  return function (r, n, a, i) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, a, i) || "";
    return o;
  };
}
function rm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function nm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var am = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = mt()), a === 38 && i === 12 && (r[n] = 1), !va(i); ) Be();
    return wa(t, De);
  },
  im = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (va(a)) {
        case 0:
          (a === 38 && mt() === 12 && (r[n] = 1), (t[n] += am(De - 1, r, n)));
          break;
        case 2:
          t[n] += Ka(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = mt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ei(a);
      }
    while ((a = Be()));
    return t;
  },
  om = function (t, r) {
    return wv(im(mv(t), r));
  },
  Rl = new WeakMap(),
  sm = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Rl.get(n)) && !a) {
        Rl.set(t, !0);
        for (var i = [], o = om(r, i), s = n.props, u = 0, c = 0; u < o.length; u++)
          for (var l = 0; l < s.length; l++, c++)
            t.props[c] = i[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
      }
    }
  },
  um = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Ov(e, t) {
  switch (U_(e, t)) {
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
      return Q + e + ci + e + _e + e + e;
    case 6828:
    case 4268:
      return Q + e + _e + e + e;
    case 6165:
      return Q + e + _e + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + _e + "flex-$1$2") + e;
    case 5443:
      return Q + e + _e + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + _e + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + _e + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + _e + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + _e + ee(e, "grow", "positive") + e;
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + _e + "flex-pack:$3"),
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
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + ci + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~os(e, "stretch") ? Ov(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, gt(e) - 3 - (~os(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
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
          return Q + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + _e + e + e;
  }
  return e;
}
var cm = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case $s:
          t.return = Ov(t.value, t.length);
          break;
        case bv:
          return zr([Un(t, { value: ee(t.value, "@", "@" + Q) })], a);
        case Ls:
          if (t.length)
            return G_(t.props, function (i) {
              switch (V_(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return zr([Un(t, { props: [ee(i, /:(read-\w+)/, ":" + ci + "$1")] })], a);
                case "::placeholder":
                  return zr(
                    [
                      Un(t, { props: [ee(i, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      Un(t, { props: [ee(i, /:(plac\w+)/, ":" + ci + "$1")] }),
                      Un(t, { props: [ee(i, /:(plac\w+)/, _e + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  lm = [cm],
  dm = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || lm,
      i = {},
      o,
      s = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), y = 1; y < g.length; y++)
            i[g[y]] = !0;
          s.push(v);
        },
      ));
    var u,
      c = [sm, um];
    {
      var l,
        d = [
          em,
          rm(function (v) {
            l.insert(v);
          }),
        ],
        f = tm(c.concat(a, d)),
        p = function (g) {
          return zr(Z_(g), f);
        };
      u = function (g, y, m, w) {
        ((l = m), p(g ? g + "{" + y.styles + "}" : y.styles), w && (h.inserted[y.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new N_({
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
  To = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pl;
function fm() {
  if (Pl) return te;
  Pl = 1;
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
    y = e ? Symbol.for("react.responder") : 60118,
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
    (te.AsyncMode = u),
    (te.ConcurrentMode = c),
    (te.ContextConsumer = s),
    (te.ContextProvider = o),
    (te.Element = t),
    (te.ForwardRef = l),
    (te.Fragment = n),
    (te.Lazy = h),
    (te.Memo = p),
    (te.Portal = r),
    (te.Profiler = i),
    (te.StrictMode = a),
    (te.Suspense = d),
    (te.isAsyncMode = function (_) {
      return O(_) || w(_) === u;
    }),
    (te.isConcurrentMode = O),
    (te.isContextConsumer = function (_) {
      return w(_) === s;
    }),
    (te.isContextProvider = function (_) {
      return w(_) === o;
    }),
    (te.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }),
    (te.isForwardRef = function (_) {
      return w(_) === l;
    }),
    (te.isFragment = function (_) {
      return w(_) === n;
    }),
    (te.isLazy = function (_) {
      return w(_) === h;
    }),
    (te.isMemo = function (_) {
      return w(_) === p;
    }),
    (te.isPortal = function (_) {
      return w(_) === r;
    }),
    (te.isProfiler = function (_) {
      return w(_) === i;
    }),
    (te.isStrictMode = function (_) {
      return w(_) === a;
    }),
    (te.isSuspense = function (_) {
      return w(_) === d;
    }),
    (te.isValidElementType = function (_) {
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
            _.$$typeof === y ||
            _.$$typeof === m ||
            _.$$typeof === v))
      );
    }),
    (te.typeOf = w),
    te
  );
}
var Al;
function vm() {
  return (Al || ((Al = 1), (To.exports = fm())), To.exports);
}
var Mo, jl;
function pm() {
  if (jl) return Mo;
  jl = 1;
  var e = vm(),
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
        var y = d(v);
        y && y !== f && p(h, y, g);
      }
      var m = u(v);
      c && (m = m.concat(c(v)));
      for (var w = o(h), O = o(v), _ = 0; _ < m.length; ++_) {
        var S = m[_];
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
  return ((Mo = p), Mo);
}
pm();
var hm = !0;
function kv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Fs = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || hm === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Sv = function (t, r, n) {
    Fs(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function gm(e) {
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
var bm = {
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
  ym = /[A-Z]|^ms/g,
  _m = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ev = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Il = function (t) {
    return t != null && typeof t != "boolean";
  },
  Lo = nm(function (e) {
    return Ev(e) ? e : e.replace(ym, "-$&").toLowerCase();
  }),
  Dl = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(_m, function (n, a, i) {
            return ((bt = { name: a, styles: i, next: bt }), a);
          });
    }
    return bm[t] !== 1 && !Ev(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function pa(e, t, r) {
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
      return mm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = bt,
          c = r(e);
        return ((bt = u), pa(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function mm(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += pa(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : Il(s) && (n += Lo(i) + ":" + Dl(i, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++) Il(o[u]) && (n += Lo(i) + ":" + Dl(i, o[u]) + ";");
      else {
        var c = pa(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Lo(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var Tl = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Bs(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += pa(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += pa(r, t, e[s])), n)) {
      var u = i;
      a += u[s];
    }
  Tl.lastIndex = 0;
  for (var c = "", l; (l = Tl.exec(a)) !== null; ) c += "-" + l[1];
  var d = gm(a) + c;
  return { name: d, styles: a, next: bt };
}
var wm = function (t) {
    return t();
  },
  Om = fu.useInsertionEffect ? fu.useInsertionEffect : !1,
  xv = Om || wm,
  Cv = b.createContext(typeof HTMLElement < "u" ? dm({ key: "css" }) : null);
Cv.Provider;
var Rv = function (t) {
    return b.forwardRef(function (r, n) {
      var a = b.useContext(Cv);
      return t(r, a, n);
    });
  },
  Pv = b.createContext({}),
  zs = {}.hasOwnProperty,
  us = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  km = function (t, r) {
    var n = {};
    for (var a in r) zs.call(r, a) && (n[a] = r[a]);
    return ((n[us] = t), n);
  },
  Sm = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Fs(r, n, a),
      xv(function () {
        return Sv(r, n, a);
      }),
      null
    );
  },
  Em = Rv(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[us],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = kv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var s = Bs(i, void 0, b.useContext(Pv));
    o += t.key + "-" + s.name;
    var u = {};
    for (var c in e) zs.call(e, c) && c !== "css" && c !== us && (u[c] = e[c]);
    return (
      (u.className = o),
      r && (u.ref = r),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(Sm, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        b.createElement(a, u),
      )
    );
  }),
  xm = Em,
  Mt = function (t, r) {
    var n = arguments;
    if (r == null || !zs.call(r, "css")) return b.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = xm), (i[1] = km(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return b.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Mt || (Mt = {}));
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Bs(t);
}
var Cm = function e(t) {
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
function Rm(e, t, r) {
  var n = [],
    a = kv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Pm = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      xv(function () {
        for (var a = 0; a < n.length; a++) Sv(r, n[a], !1);
      }),
      null
    );
  },
  Am = Rv(function (e, t) {
    var r = [],
      n = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        var d = Bs(c, t.registered);
        return (r.push(d), Fs(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return Rm(t.registered, n, Cm(c));
      },
      i = { css: n, cx: a, theme: b.useContext(Pv) },
      o = e.children(i);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(Pm, { cache: t, serializedArr: r }),
      o,
    );
  });
function jm(e, t) {
  var r = b.useRef(!0);
  b.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Av = 2,
  cs = Ct({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Av,
  }),
  ls = Ct({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Av,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  Im = Ct({
    "&:focus": cs,
    "&:focus-visible": cs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Dm = Ct({
    "&:focus": ls,
    "&:focus-visible": ls,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  jv = b.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? ls : cs,
      i = r ? Dm : Im,
      o = typeof n > "u" ? i : n === "on" && a;
    return Mt(Am, null, function (s) {
      var u = s.css,
        c = s.cx;
      return b.Children.only(
        o ? b.cloneElement(t, { className: c([u(o), t.props.className]) }) : t,
      );
    });
  });
jv.displayName = "FocusRing";
function Tt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Tm = 9;
function Ml(e) {
  e.keyCode !== Tm && Tt(e);
}
var Mm = {
    onMouseDownCapture: Tt,
    onMouseUpCapture: Tt,
    onKeyDownCapture: Ml,
    onKeyUpCapture: Ml,
    onTouchStartCapture: Tt,
    onTouchEndCapture: Tt,
    onPointerDownCapture: Tt,
    onPointerUpCapture: Tt,
    onClickCapture: Tt,
    onClick: Tt,
  },
  Lm = {};
function $m(e) {
  var t = e.isInteractive;
  return t ? Lm : Mm;
}
var Ll = "rgba(179, 212, 255, 0.6)",
  $l = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(Dn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Tn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(as, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(el, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(Ll, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Xn, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Dn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(jr, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(si, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Xc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Xn, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Zc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Jc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Dn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Tn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat(Yc, ")"),
          dark: "var(--ds-background-warning-bold, ".concat(Yc, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(Kc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(Kc, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Ar, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Dn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Tn, ")"),
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
          light: "var(--ds-background-danger-bold, ".concat(Wc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Wc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Hc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Hc, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Pr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Pr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(Dn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Tn, ")"),
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
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Pe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Pe, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(as, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(el, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(Ll, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Xn, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Dr, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Pe, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Ke, ")"),
          dark: "var(--ds-background-selected, ".concat(Pe, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(da, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(jr, ")"),
          dark: "var(--ds-text, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Mn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Mn, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Mn, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-text-warning-inverse, ".concat(Ir, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(Ir, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Mn, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Yt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Yt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Mn, ")"),
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
          light: "var(--ds-link, ".concat(jr, ")"),
          dark: "var(--ds-link, ".concat(si, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Xc, ")"),
          dark: "var(--ds-link, ".concat(Xn, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Zc, ")"),
          dark: "var(--ds-link-pressed, ".concat(Jc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(Ke, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(da, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(jr, ")"),
          dark: "var(--ds-text, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-text-subtle, ".concat(Db, ")"),
          dark: "var(--ds-text-subtle, ".concat(it, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Ib, ")"),
          dark: "var(--ds-text-subtle, ".concat(Zf, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Tb, ")"),
          dark: "var(--ds-text, ".concat(Mb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Pe, ")"),
          dark: "var(--ds-text-selected, ".concat(it, ")"),
        },
      },
    },
  };
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
function ae(e) {
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
var Xt = 8,
  $o = ["default", "primary", "danger", "warning"],
  ds = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  Nm = { default: ds.default, compact: ds.compact, none: "inherit" },
  Fm = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  Bm = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  zm = { default: "middle", compact: "middle", none: "baseline" },
  Iv = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  Dv = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  qm = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ae(ae({}, Dv), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  Um = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  Vm = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  Gm = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  Hm = {
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
  Wm = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  Km = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Ym = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ae(
      ae({}, Dv),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  Fl = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function Bl(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function Mr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: Bl({ group: $l.background[t], key: r, mode: n }),
    color: "".concat(Bl({ group: $l.color[t], key: r, mode: n }), " !important"),
  };
}
function Jm(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    s = Mr({ appearance: t, key: a ? "selected" : "default", mode: n });
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
          !Se("platform-component-visual-refresh") && s,
        ),
        {},
        {
          cursor: "pointer",
          height: ds[r],
          lineHeight: Nm[r],
          padding: o ? Bm[r] : Fm[r],
          verticalAlign: zm[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !Se("platform-component-visual-refresh") &&
          ae(
            ae(
              {
                "&:visited": ae({}, s),
                "&:hover": ae(
                  ae({}, Mr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ae(
                  ae({}, Mr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ae(
                  ae({}, Mr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ae(
                  ae({}, Mr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              Fl,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ae({}, Mr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      Se("platform-component-visual-refresh") &&
        (a
          ? Ym
          : ae(
              ae(
                ae(
                  ae(
                    ae(
                      ae(
                        ae(ae({}, t === "default" && qm), t === "primary" && Um),
                        t === "link" && Vm,
                      ),
                      t === "subtle" && Gm,
                    ),
                    t === "subtle-link" && Hm,
                  ),
                  t === "warning" && Wm,
                ),
                t === "danger" && Km,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: $o.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: $o.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: $o.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              Fl,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function zl(e) {
  var t = e.spacing;
  return Ct({
    display: "flex",
    margin: t === "none" ? 0 : Iv.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function Xm(e) {
  var t = e.spacing;
  return Ct({
    margin: t === "none" ? 0 : Iv.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Zm(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Qm = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qs = function (t) {
    return t && b.isValidElement(t) && t.type === hv;
  },
  e0 = [
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
  t0 = { "> *": { pointerEvents: "none" } },
  r0 = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  n0 = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  ql = function (t, r) {
    return !t || qs(t) ? null : r;
  },
  a0 = function (t, r) {
    return qs(t) ? t : t ? Mt("span", { css: r }, t) : null;
  },
  i0 = k.forwardRef(function (t, r) {
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
      y = t.isDisabled,
      m = y === void 0 ? !1 : y,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      _ = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? me : S,
      j = t.onFocus,
      T = t.onMouseDown,
      R = T === void 0 ? me : T,
      D = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      B = z === void 0 ? "default" : z,
      U = t.tabIndex,
      Z = U === void 0 ? 0 : U,
      V = t.type,
      q = V === void 0 ? (d ? void 0 : "button") : V,
      Y = t.testId,
      N = re(t, e0),
      A = b.useRef(),
      be = b.useCallback(
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
    jm(A, s);
    var oe = b.useContext(Ts),
      ue = b.useCallback(
        function (ve, Ve) {
          (oe && oe.tracePress(g, ve.timeStamp), E(ve, Ve));
        },
        [E, oe, g],
      ),
      fe = la({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.4.9",
        analyticsData: n,
      }),
      ge = b.useCallback(
        function (ve) {
          (ve.preventDefault(), R(ve));
        },
        [R],
      );
    b.useEffect(
      function () {
        var ve = A.current;
        m && ve && ve === document.activeElement && ve.blur();
      },
      [m],
    );
    var ce = !!D,
      Ue = Ct(Zm({ hasOverlay: ce })),
      Oe = !m && !ce,
      rt = {};
    return (
      (O || m || i === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(da, ")")
                : "var(--ds-icon-warning-inverse, ".concat(da, ")"),
              " !important",
            ),
          },
        }),
      Mt(
        jv,
        null,
        Mt(
          p,
          K(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [u, Oe ? null : t0],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": Y,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: _,
              onClick: fe,
              onFocus: j,
              onMouseDown: ge,
              tabIndex: m ? -1 : Z,
              type: q,
            },
            $m({ isInteractive: Oe }),
          ),
          v ? Mt("span", { css: [Ue, zl({ spacing: B }), ql(c, r0)] }, v) : null,
          a0(c, [Ue, Xm({ spacing: B })]),
          h ? Mt("span", { css: [Ue, zl({ spacing: B }), ql(c, n0)] }, h) : null,
          D ? Mt("span", { css: [Qm, rt] }, D) : null,
        ),
      )
    );
  });
function o0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return qs(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var s0 = [
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
  Ul = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Us = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        u = t.isSelected,
        c = u === void 0 ? !1 : u,
        l = t.onMouseDown,
        d = l === void 0 ? me : l,
        f = t.onMouseUp,
        p = f === void 0 ? me : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        y = g === void 0 ? "default" : g,
        m = re(t, s0),
        w = M_(),
        O = w.mode,
        _ = o0({ children: i, iconBefore: o, iconAfter: s }),
        S = b.useState(!1),
        E = X(S, 2),
        j = E[0],
        T = E[1],
        R = b.useCallback(
          function (B) {
            (d(B), Ul && T(!0));
          },
          [d, T],
        ),
        D = b.useCallback(
          function (B) {
            (p(B), Ul && T(!1));
          },
          [p, T],
        ),
        z = b.useMemo(
          function () {
            return Jm({
              appearance: a,
              spacing: y,
              mode: O,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: _,
            });
          },
          [a, y, O, c, v, _],
        );
      return k.createElement(
        i0,
        K({}, m, {
          ref: r,
          appearance: a,
          buttonCss: z,
          children: i,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: s,
          iconBefore: o,
          isSelected: c,
          onMouseDown: R,
          onMouseUp: D,
          spacing: y,
        }),
      );
    }),
  );
Us.displayName = "Button";
function Vl(e) {
  return k.createElement(Us, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function u0(e) {
  return k.createElement(Us, K({}, e, { appearance: "subtle" }));
}
var c0 = { container: "_1e0c1txw _kqswh2mm" };
function l0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    ki,
    { as: "li", testId: r, key: t, xcss: c0.container, paddingInline: "space.100" },
    k.createElement(
      d_,
      { testId: r && "".concat(r, "-text") },
      k.createElement(hv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Gl = {},
  Hl =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function d0(e, t) {
  return !!(e === t || (Hl(e) && Hl(t)));
}
function f0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!d0(e[r], t[r])) return !1;
  return !0;
}
function v0(e, t) {
  t === void 0 && (t = f0);
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
var p0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    s = n.transform,
    u = t.length,
    c = u > i,
    l = c && i - 4 < r,
    d = c && r < u - i + 3,
    f = v0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
      return t.slice(g, y).map(function (m, w) {
        return s(m, g + w, a);
      });
    });
  if (!c) return f(0, u);
  if (l && !d) {
    var p = i - 2;
    return [].concat(
      $e(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: u - p })],
      $e(f(u - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      $e(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: u - 1 })],
      $e(f(u - 1)),
    );
  }
  var v = i - 4;
  return [].concat(
    $e(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    $e(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: u - 1 })],
    $e(f(u - 1)),
  );
};
function Wl(e, t) {
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
function h0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fs = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  g0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.11",
  };
function Kl(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Ay : My;
  return k.createElement(
    ki,
    { as: "span", xcss: fs.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function b0(e, t) {
  var r = e.components,
    n = r === void 0 ? Gl : r,
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
    g = v === void 0 ? Gl : v,
    y = e.max,
    m = y === void 0 ? 7 : y,
    w = e.onChange,
    O = w === void 0 ? me : w,
    _ = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    j = E === void 0 ? l0 : E,
    T = e.analyticsContext,
    R = e.testId,
    D = e.isDisabled,
    z = by(o, function () {
      return i || 0;
    }),
    B = X(z, 2),
    U = B[0],
    Z = B[1],
    V = la(
      h0(
        {
          fn: function (N, A) {
            var be = N.event,
              oe = N.selectedPageIndex;
            (o === void 0 && Z(oe), O && O(be, _[oe], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: T,
        },
        g0,
      ),
    ),
    q = function (N, A, be) {
      var oe = _[U],
        ue = "".concat(l, " ").concat(S ? S(N, A) : N),
        fe = N === oe;
      return k.createElement(
        Ga,
        { as: "li", xcss: fs.paginationMenuItem, key: "page-".concat(S ? S(N, A) : A) },
        k.createElement(
          u0,
          {
            component: n.Page,
            onClick: function (ce) {
              return V({ event: ce, selectedPageIndex: A });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": ue,
            isSelected: fe,
            isDisabled: D,
            page: N,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S(N, A) : N,
        ),
      );
    };
  return k.createElement(
    ki,
    { testId: R, style: g, ref: t, "aria-label": u, as: "nav" },
    k.createElement(
      Ga,
      { space: "space.0", alignBlock: "center" },
      k.createElement(Vl, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return V({ event: N, selectedPageIndex: U - 1 });
        },
        isDisabled: D || U === 0,
        iconBefore: k.createElement(Kl, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        Ga,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: fs.paginationMenu },
        p0(_, U, { max: m, ellipsis: j, transform: q }, R),
      ),
      k.createElement(Vl, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return V({ event: N, selectedPageIndex: U + 1 });
        },
        isDisabled: D || U === _.length - 1,
        iconBefore: k.createElement(Kl, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var y0 = b.memo(b.forwardRef(b0));
function _0(e, t, r) {
  return (
    (t = H(t)),
    Te(e, Tv() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
  );
}
function Tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tv = function () {
    return !!e;
  })();
}
var m0 = (function (e) {
    function t() {
      var r;
      le(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = _0(this, t, [].concat(a))),
        x(r, "onChange", function (o, s, u) {
          r.props.onChange(s, u);
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
              u = n.testId,
              c = n.isDisabled,
              l = $e(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(y0, {
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
  w0 = ["isRanking", "testId"],
  O0 = [
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
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jl = "--local-dynamic-table-text-color",
  k0 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = re(t, w0);
    return b.createElement(
      "thead",
      K({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Mv = b.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children,
      a = e.isSortable,
      i = e.sortOrder,
      o = e.isFixedSize,
      s = e.shouldTruncate,
      u = e.onClick,
      c = e.style,
      l = e.testId,
      d = re(e, O0),
      f = Vn(
        Vn(Vn({}, c), r && ev({ width: r })),
        {},
        x({}, Jl, "var(--ds-text-subtlest, ".concat(Qc, ")")),
      ),
      p = i === fr,
      h = i === ii,
      v = function () {
        if (p) return "ascending";
        if (h) return "descending";
      },
      g = n ? "th" : "td",
      y = Se("platform-component-visual-refresh");
    return b.createElement(
      g,
      K({ "aria-sort": v(), onClick: y ? void 0 : u, ref: t, "data-testid": l }, d, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          y
            ? "_11c8dcr7 _179r1tpy _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygb1x42"
            : "_11c8dcr7 _179r1tpy _mqm2glyw _t51zglyw _191wglyw _vchhusvi _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4jp4b _1ygb1x42",
          !y && u && "_irr3bfnf _d0altlke",
          "_1bsb8a2a",
          o && s && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
          !y &&
            a &&
            "_173zglyw _pw6dglyw _1xgk1j28 _1wfn1j28 _y9yonqa1 _997wnqa1 _sklb1l7b _1j091l7b _19w61ule _1w611ule _1hvvidpf _n56nidpf _wyc4idpf _1d4oidpf _no7mstnw _qh32stnw _4b5mb3bt _hn3bb3bt _14gsx0bf _cigmx0bf _c77k1f6e _qzvtu2gc _f4731f6e _1fpyidpf _a04fh2mm _xv14glyw _58ej1kw7 _1ay31kw7 _mdbq1kw7 _10pp1kw7 _1yw3ze3t _n2fdze3t _8607ze3t _szhwze3t _1g2wwc43 _ze9fwc43 _1lcgnqa1 _at5qnqa1 _o4d71l7b _npl51l7b _1rp11onz _1iornqa1 _oi051l7b _1ehx1onz _19t8nqa1 _1bog1l7b",
          !y && p && "_c77k2wk4 _142s94yt",
          !y && h && "_f4732wk4 _17x894yt",
        ]),
        style: Vn(
          Vn({}, f),
          {},
          {
            "--_mwqor1": Jt(
              "var(--ds-border-width-selected, 2px)".concat(
                " solid ",
                "var(--ds-border, ".concat(ns, ")"),
              ),
            ),
            "--_17ckjys": Jt("var(--ds-text-subtle, ".concat("var(".concat(Jl, ")"), ")")),
            "--_z3oznn": Jt(
              "solid ".concat(
                "var(--ds-border-width-focused, 2px)",
                " ",
                "var(--ds-border-focused, ".concat(si, ")"),
              ),
            ),
            "--_6j4ewu": Jt("var(--ds-background-neutral-hovered, ".concat(as, ")")),
            "--_1rdacuj": Jt("3px solid ".concat("var(--ds-icon-disabled, ".concat(ns, ")"))),
            "--_1qca9zt": Jt("3px solid ".concat("var(--ds-icon-subtle, ".concat(Qc, ")"))),
          },
        ),
      }),
      n,
    );
  });
function S0(e, t, r) {
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
function $v(e) {
  return (function (t) {
    function r() {
      var n;
      le(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = S0(this, r, [].concat(i))),
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
var Gn = {},
  Xl;
function E0() {
  if (Xl) return Gn;
  ((Xl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(dt()),
    t = r(Oi);
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
  return ((n.displayName = "ArrowDownIcon"), (Gn.default = n), Gn);
}
var x0 = E0();
const C0 = tr(x0);
var Hn = {},
  Zl;
function R0() {
  if (Zl) return Hn;
  ((Zl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0));
  var e = r(dt()),
    t = r(Oi);
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
  return ((n.displayName = "ArrowUpIcon"), (Hn.default = n), Hn);
}
var P0 = R0();
const A0 = tr(P0);
var j0 = "Escape";
function I0(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = b.useRef(!1),
    a = b.useCallback(
      function (o) {
        r || n.current || o.key !== j0 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = b.useCallback(function () {
      n.current = !1;
    }, []);
  b.useEffect(
    function () {
      if (!(r && Se("platform_only_attach_escape_handler_on_view")))
        return Si.bindAll(
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
function Wn(e) {
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
var D0 = b.createContext(null),
  T0 = b.createContext(null);
function M0() {
  var e = b.useContext(T0);
  return e;
}
function L0(e) {
  var t = e.isOpen,
    r = e.onClose,
    n = b.useContext(D0),
    a = M0();
  b.useEffect(
    function () {
      if (n !== null && t) return n.onClose(r, { namespace: a });
    },
    [n, t, a, r],
  );
}
var Zn = { none: 0, small: 100, medium: 350, large: 700 },
  No = 0.5,
  $0 = { none: Zn.none, small: Zn.small * No, medium: Zn.medium * No, large: Zn.large * No },
  N0 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  F0 = function () {
    if (!N0()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  B0 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  z0 = function () {
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
      }, B0(t)),
      b.useCallback(function (n, a) {
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
  Nv = { appear: !0, isExiting: !1 },
  Fv = b.createContext(Nv),
  Ql = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nv;
    return k.createElement(Fv.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  ed = function (t) {
    var r = [];
    return (
      b.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  q0 = function (t, r) {
    for (var n = r.concat([]), a = U0(r), i = 0; i < t.length; i++) {
      var o = t[i],
        s = !a[o.key];
      s && n.splice(i + 1, 0, o);
    }
    return n;
  },
  U0 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  V0 = function (t, r) {
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
  Bv = b.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = b.useState([null, n]),
      o = X(i, 2),
      s = o[0],
      u = o[1],
      c = b.useState([]),
      l = X(c, 2),
      d = l[0],
      f = l[1],
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
    var y = X(s, 2),
      m = y[0],
      w = y[1],
      O = ed(m),
      _ = ed(w);
    w !== n && u([w, n]);
    var S = V0(_, O),
      E = !!S.size,
      j = _;
    if ((E && (j = q0(_, O)), a))
      if (d.length) j = d;
      else {
        var T = j.filter(function (R) {
          return S.has(R.key);
        });
        T.length && f(T);
      }
    return (
      S.size
        ? (j = j.map(function (R) {
            var D = S.has(R.key);
            return Ql(R, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (S.delete(R.key), S.size === 0 && (u([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (R) {
            return Ql(R, v);
          })),
      j
    );
  }),
  G0 = function () {
    return b.useContext(Fv);
  };
Bv.displayName = "ExitingPersistence";
function H0() {
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
var W0 = b.createContext(function () {
    return { isReady: !0, delay: 0, ref: me };
  }),
  K0 = function () {
    var t = H0(),
      r = b.useContext(W0);
    return r(t);
  },
  Y0 = function (t) {
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
      p = K0(),
      h = G0(),
      v = h.isExiting,
      g = h.onFinish,
      y = h.appear,
      m = z0(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      _ = v ? "exiting" : "entering",
      S = b.useState(y),
      E = X(S, 2),
      j = E[0],
      T = E[1];
    return (
      b.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!y) {
              l && l(_);
              return;
            }
            var D = function () {
              (_ === "exiting" && g?.(), R || T(!1), l?.(_));
            };
            if (F0()) {
              D();
              return;
            }
            return (
              T(!0),
              m(D, v ? $0[f] : Zn[f] + O),
              function () {
                R = !0;
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
        _,
      )
    );
  },
  J0 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  X0 = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      u = s === void 0 ? "proportional" : s,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? J0[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(u === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      Y0,
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
  Z0 = b.createContext();
b.createContext();
var Q0 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  ew = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  tw = function (t, r) {
    if (typeof t == "function") return ew(t, r);
    t != null && (t.current = r);
  },
  td = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  rd =
    typeof window < "u" && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  Ae = "top",
  et = "bottom",
  tt = "right",
  je = "left",
  Vs = "auto",
  Oa = [Ae, et, tt, je],
  Vr = "start",
  ha = "end",
  rw = "clippingParents",
  zv = "viewport",
  Kn = "popper",
  nw = "reference",
  nd = Oa.reduce(function (e, t) {
    return e.concat([t + "-" + Vr, t + "-" + ha]);
  }, []),
  qv = [].concat(Oa, [Vs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Vr, t + "-" + ha]);
  }, []),
  aw = "beforeRead",
  iw = "read",
  ow = "afterRead",
  sw = "beforeMain",
  uw = "main",
  cw = "afterMain",
  lw = "beforeWrite",
  dw = "write",
  fw = "afterWrite",
  vw = [aw, iw, ow, sw, uw, cw, lw, dw, fw];
function Et(e) {
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
function vr(e) {
  var t = ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pw(e) {
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
function hw(e) {
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
const gw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pw,
  effect: hw,
  requires: ["computeStyles"],
};
function wt(e) {
  return e.split("-")[0];
}
var lr = Math.max,
  li = Math.min,
  Gr = Math.round;
function vs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Uv() {
  return !/^((?!chrome|android).)*safari/i.test(vs());
}
function Hr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Qe(e) &&
    ((a = (e.offsetWidth > 0 && Gr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Gr(n.height) / e.offsetHeight) || 1));
  var o = vr(e) ? ze(e) : window,
    s = o.visualViewport,
    u = !Uv() && r,
    c = (n.left + (u && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (u && s ? s.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function Hs(e) {
  var t = Hr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Vv(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Gs(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return ze(e).getComputedStyle(e);
}
function bw(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function rr(e) {
  return ((vr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ri(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gs(e) ? e.host : null) || rr(e);
}
function ad(e) {
  return !Qe(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function yw(e) {
  var t = /firefox/i.test(vs()),
    r = /Trident/i.test(vs());
  if (r && Qe(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var a = Ri(e);
  for (Gs(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
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
function ka(e) {
  for (var t = ze(e), r = ad(e); r && bw(r) && zt(r).position === "static"; ) r = ad(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && zt(r).position === "static"))
    ? t
    : r || yw(e) || t;
}
function Ws(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ra(e, t, r) {
  return lr(e, li(t, r));
}
function _w(e, t, r) {
  var n = ra(e, t, r);
  return n > r ? r : n;
}
function Gv() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hv(e) {
  return Object.assign({}, Gv(), e);
}
function Wv(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var mw = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Hv(typeof t != "number" ? t : Wv(t, Oa))
  );
};
function ww(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = wt(r.placement),
    u = Ws(s),
    c = [je, tt].indexOf(s) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = mw(a.padding, r),
      f = Hs(i),
      p = u === "y" ? Ae : je,
      h = u === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[u] - o[u] - r.rects.popper[l],
      g = o[u] - r.rects.reference[u],
      y = ka(i),
      m = y ? (u === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      _ = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      E = ra(O, S, _),
      j = u;
    r.modifiersData[n] = ((t = {}), (t[j] = E), (t.centerOffset = E - S), t);
  }
}
function Ow(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Vv(t.elements.popper, a) && (t.elements.arrow = a)));
}
const kw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ww,
  effect: Ow,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Wr(e) {
  return e.split("-")[1];
}
var Sw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ew(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Gr(r * a) / a || 0, y: Gr(n * a) / a || 0 };
}
function id(e) {
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
  var y = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    w = je,
    O = Ae,
    _ = window;
  if (c) {
    var S = ka(r),
      E = "clientHeight",
      j = "clientWidth";
    if (
      (S === ze(r) &&
        ((S = rr(r)),
        zt(S).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Ae || ((a === je || a === tt) && i === ha))
    ) {
      O = et;
      var T = d && S === _ && _.visualViewport ? _.visualViewport.height : S[E];
      ((v -= T - n.height), (v *= u ? 1 : -1));
    }
    if (a === je || ((a === Ae || a === et) && i === ha)) {
      w = tt;
      var R = d && S === _ && _.visualViewport ? _.visualViewport.width : S[j];
      ((p -= R - n.width), (p *= u ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, c && Sw),
    z = l === !0 ? Ew({ x: p, y: v }, ze(r)) : { x: p, y: v };
  if (((p = z.x), (v = z.y), u)) {
    var B;
    return Object.assign(
      {},
      D,
      ((B = {}),
      (B[O] = m ? "0" : ""),
      (B[w] = y ? "0" : ""),
      (B.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[O] = m ? v + "px" : ""), (t[w] = y ? p + "px" : ""), (t.transform = ""), t),
  );
}
function xw(e) {
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
      variation: Wr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      id(
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
        id(
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
const Cw = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: xw, data: {} };
var Ba = { passive: !0 };
function Rw(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    u = ze(t.elements.popper),
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
  effect: Rw,
  data: {},
};
var Aw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ja(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Aw[t];
  });
}
var jw = { start: "end", end: "start" };
function od(e) {
  return e.replace(/start|end/g, function (t) {
    return jw[t];
  });
}
function Ks(e) {
  var t = ze(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ys(e) {
  return Hr(rr(e)).left + Ks(e).scrollLeft;
}
function Iw(e, t) {
  var r = ze(e),
    n = rr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    u = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = Uv();
    (c || (!c && t === "fixed")) && ((s = a.offsetLeft), (u = a.offsetTop));
  }
  return { width: i, height: o, x: s + Ys(e), y: u };
}
function Dw(e) {
  var t,
    r = rr(e),
    n = Ks(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = lr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = lr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + Ys(e),
    u = -n.scrollTop;
  return (
    zt(a || r).direction === "rtl" && (s += lr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: u }
  );
}
function Js(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Kv(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && Js(e)
      ? e
      : Kv(Ri(e));
}
function na(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Kv(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ze(n),
    o = a ? [i].concat(i.visualViewport || [], Js(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(na(Ri(o)));
}
function ps(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Tw(e, t) {
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
function sd(e, t, r) {
  return t === zv ? ps(Iw(e, r)) : vr(t) ? Tw(t, r) : ps(Dw(rr(e)));
}
function Mw(e) {
  var t = na(Ri(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && Qe(e) ? ka(e) : e;
  return vr(n)
    ? t.filter(function (a) {
        return vr(a) && Vv(a, n) && Et(a) !== "body";
      })
    : [];
}
function Lw(e, t, r, n) {
  var a = t === "clippingParents" ? Mw(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(
      function (u, c) {
        var l = sd(e, c, n);
        return (
          (u.top = lr(l.top, u.top)),
          (u.right = li(l.right, u.right)),
          (u.bottom = li(l.bottom, u.bottom)),
          (u.left = lr(l.left, u.left)),
          u
        );
      },
      sd(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Yv(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? wt(n) : null,
    i = n ? Wr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (a) {
    case Ae:
      u = { x: o, y: t.y - r.height };
      break;
    case et:
      u = { x: o, y: t.y + t.height };
      break;
    case tt:
      u = { x: t.x + t.width, y: s };
      break;
    case je:
      u = { x: t.x - r.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Ws(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Vr:
        u[c] = u[c] - (t[l] / 2 - r[l] / 2);
        break;
      case ha:
        u[c] = u[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function ga(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    u = s === void 0 ? rw : s,
    c = r.rootBoundary,
    l = c === void 0 ? zv : c,
    d = r.elementContext,
    f = d === void 0 ? Kn : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    y = Hv(typeof g != "number" ? g : Wv(g, Oa)),
    m = f === Kn ? nw : Kn,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    _ = Lw(vr(O) ? O : O.contextElement || rr(e.elements.popper), u, l, o),
    S = Hr(e.elements.reference),
    E = Yv({ reference: S, element: w, placement: a }),
    j = ps(Object.assign({}, w, E)),
    T = f === Kn ? j : S,
    R = {
      top: _.top - T.top + y.top,
      bottom: T.bottom - _.bottom + y.bottom,
      left: _.left - T.left + y.left,
      right: T.right - _.right + y.right,
    },
    D = e.modifiersData.offset;
  if (f === Kn && D) {
    var z = D[a];
    Object.keys(R).forEach(function (B) {
      var U = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        Z = [Ae, et].indexOf(B) >= 0 ? "y" : "x";
      R[B] += z[Z] * U;
    });
  }
  return R;
}
function $w(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    c = u === void 0 ? qv : u,
    l = Wr(n),
    d = l
      ? s
        ? nd
        : nd.filter(function (h) {
            return Wr(h) === l;
          })
      : Oa,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = ga(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[wt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function Nw(e) {
  if (wt(e) === Vs) return [];
  var t = Ja(e);
  return [od(e), t, od(t)];
}
function Fw(e) {
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
        y = wt(g),
        m = y === g,
        w = u || (m || !h ? [Ja(g)] : Nw(g)),
        O = [g].concat(w).reduce(function (fe, ge) {
          return fe.concat(
            wt(ge) === Vs
              ? $w(t, {
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
        _ = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        j = !0,
        T = O[0],
        R = 0;
      R < O.length;
      R++
    ) {
      var D = O[R],
        z = wt(D),
        B = Wr(D) === Vr,
        U = [Ae, et].indexOf(z) >= 0,
        Z = U ? "width" : "height",
        V = ga(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        q = U ? (B ? tt : je) : B ? et : Ae;
      _[Z] > S[Z] && (q = Ja(q));
      var Y = Ja(q),
        N = [];
      if (
        (i && N.push(V[z] <= 0),
        s && N.push(V[q] <= 0, V[Y] <= 0),
        N.every(function (fe) {
          return fe;
        }))
      ) {
        ((T = D), (j = !1));
        break;
      }
      E.set(D, N);
    }
    if (j)
      for (
        var A = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = E.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (rt) {
                  return rt;
                });
            });
            if (ce) return ((T = ce), "break");
          },
          oe = A;
        oe > 0;
        oe--
      ) {
        var ue = be(oe);
        if (ue === "break") break;
      }
    t.placement !== T && ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const Bw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ud(e, t, r) {
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
function cd(e) {
  return [Ae, tt, et, je].some(function (t) {
    return e[t] >= 0;
  });
}
function zw(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = ga(t, { elementContext: "reference" }),
    s = ga(t, { altBoundary: !0 }),
    u = ud(o, n),
    c = ud(s, a, i),
    l = cd(u),
    d = cd(c);
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
const qw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: zw,
};
function Uw(e, t, r) {
  var n = wt(e),
    a = [je, Ae].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [je, tt].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function Vw(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = qv.reduce(function (l, d) {
      return ((l[d] = Uw(d, t.rects, i)), l);
    }, {}),
    s = o[t.placement],
    u = s.x,
    c = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const Gw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Vw };
function Hw(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Yv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Ww = { name: "popperOffsets", enabled: !0, phase: "read", fn: Hw, data: {} };
function Kw(e) {
  return e === "x" ? "y" : "x";
}
function Yw(e) {
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
    g = ga(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: l }),
    y = wt(t.placement),
    m = Wr(t.placement),
    w = !m,
    O = Ws(y),
    _ = Kw(O),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    j = t.rects.popper,
    T = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof T == "number"
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var B,
        U = O === "y" ? Ae : je,
        Z = O === "y" ? et : tt,
        V = O === "y" ? "height" : "width",
        q = S[O],
        Y = q + g[U],
        N = q - g[Z],
        A = p ? -j[V] / 2 : 0,
        be = m === Vr ? E[V] : j[V],
        oe = m === Vr ? -j[V] : -E[V],
        ue = t.elements.arrow,
        fe = p && ue ? Hs(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Gv(),
        ce = ge[U],
        Ue = ge[Z],
        Oe = ra(0, E[V], fe[V]),
        rt = w ? E[V] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        ve = w ? -E[V] / 2 + A + Oe + Ue + R.mainAxis : oe + Oe + Ue + R.mainAxis,
        Ve = t.elements.arrow && ka(t.elements.arrow),
        Or = Ve ? (O === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        Pt = (B = D?.[O]) != null ? B : 0,
        Ee = q + rt - Pt - Or,
        xe = q + ve - Pt,
        Vt = ra(p ? li(Y, Ee) : Y, q, p ? lr(N, xe) : N);
      ((S[O] = Vt), (z[O] = Vt - q));
    }
    if (s) {
      var pt,
        nt = O === "x" ? Ae : je,
        Gt = O === "x" ? et : tt,
        Ge = S[_],
        Le = _ === "y" ? "height" : "width",
        Ce = Ge + g[nt],
        at = Ge - g[Gt],
        Ht = [Ae, je].indexOf(y) !== -1,
        Aa = (pt = D?.[_]) != null ? pt : 0,
        ja = Ht ? Ce : Ge - E[Le] - j[Le] - Aa + R.altAxis,
        Ia = Ht ? Ge + E[Le] + j[Le] - Aa - R.altAxis : at,
        Da = p && Ht ? _w(ja, Ge, Ia) : ra(p ? ja : Ce, Ge, p ? Ia : at);
      ((S[_] = Da), (z[_] = Da - Ge));
    }
    t.modifiersData[n] = z;
  }
}
const Jw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yw,
  requiresIfExists: ["offset"],
};
function Xw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Zw(e) {
  return e === ze(e) || !Qe(e) ? Ks(e) : Xw(e);
}
function Qw(e) {
  var t = e.getBoundingClientRect(),
    r = Gr(t.width) / e.offsetWidth || 1,
    n = Gr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function e1(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && Qw(t),
    i = rr(t),
    o = Hr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || Js(i)) && (s = Zw(t)),
      Qe(t) ? ((u = Hr(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : i && (u.x = Ys(i))),
    {
      x: o.left + s.scrollLeft - u.x,
      y: o.top + s.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function t1(e) {
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
function r1(e) {
  var t = t1(e);
  return vw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function n1(e) {
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
function a1(e) {
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
var ld = { placement: "bottom", modifiers: [], strategy: "absolute" };
function dd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function i1(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? ld : a;
  return function (s, u, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ld, i),
        modifiersData: {},
        elements: { reference: s, popper: u },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: l,
        setOptions: function (y) {
          var m = typeof y == "function" ? y(l.options) : y;
          (v(),
            (l.options = Object.assign({}, i, l.options, m)),
            (l.scrollParents = {
              reference: vr(s) ? na(s) : s.contextElement ? na(s.contextElement) : [],
              popper: na(u),
            }));
          var w = r1(a1([].concat(n, l.options.modifiers)));
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
            var y = l.elements,
              m = y.reference,
              w = y.popper;
            if (dd(m, w)) {
              ((l.rects = {
                reference: e1(m, ka(w), l.options.strategy === "fixed"),
                popper: Hs(w),
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
                var _ = l.orderedModifiers[O],
                  S = _.fn,
                  E = _.options,
                  j = E === void 0 ? {} : E,
                  T = _.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: T, instance: p }) || l);
              }
            }
          }
        },
        update: n1(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!dd(s, u)) return p;
    p.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var y = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          O = g.effect;
        if (typeof O == "function") {
          var _ = O({ state: l, name: y, instance: p, options: w }),
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
var o1 = [Pw, Ww, Cw, gw, Gw, Bw, Jw, kw, qw],
  s1 = i1({ defaultModifiers: o1 }),
  Fo,
  fd;
function u1() {
  if (fd) return Fo;
  fd = 1;
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
    (Fo = function (o, s) {
      try {
        return a(o, s);
      } catch (u) {
        if ((u.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw u;
      }
    }),
    Fo
  );
}
var c1 = u1();
const l1 = tr(c1);
var d1 = [],
  f1 = function (t, r, n) {
    n === void 0 && (n = {});
    var a = b.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || d1,
      },
      o = b.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = o[0],
      u = o[1],
      c = b.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            mi.flushSync(function () {
              u({
                styles: td(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: td(
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
      l = b.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return l1(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = b.useRef();
    return (
      rd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      rd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || s1,
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
  v1 = function () {},
  p1 = function () {
    return Promise.resolve(null);
  },
  h1 = [];
function g1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? h1 : i,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = b.useContext(Z0),
    f = b.useState(null),
    p = f[0],
    h = f[1],
    v = b.useState(null),
    g = v[0],
    y = v[1];
  b.useEffect(
    function () {
      tw(c, p);
    },
    [c, p],
  );
  var m = b.useMemo(
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
    w = f1(s || d, p, m),
    O = w.state,
    _ = w.styles,
    S = w.forceUpdate,
    E = w.update,
    j = b.useMemo(
      function () {
        return {
          ref: h,
          style: _.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: _.arrow, ref: y },
          forceUpdate: S || v1,
          update: E || p1,
        };
      },
      [h, y, r, O, _, E, S],
    );
  return Q0(l)(j);
}
function b1(e) {
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
            h = X(p, 1),
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
            y = l.width - 2 * t,
            m = l.height - 2 * t;
          (v === "top" && (m = u.rects.reference.y + g.y - t),
            v === "bottom" && (m = l.height - f.y - t),
            v === "left" && (y = u.rects.reference.x + g.x - t),
            v === "right" && (y = l.width - f.x - t),
            (u.styles.popper.maxWidth = "".concat(y, "px")),
            (u.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var hs = 5,
  y1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: hs,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function _1() {
  return null;
}
var m1 = [0, 8];
function w1(e) {
  var t = e.children,
    r = t === void 0 ? _1 : t,
    n = e.offset,
    a = n === void 0 ? m1 : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    s = e.referenceElement,
    u = s === void 0 ? void 0 : s,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = X(a, 2),
    v = h[0],
    g = h[1],
    y = b.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: hs, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          _ = p ? b1({ viewportPadding: hs }) : [];
        return [].concat(y1, [w, O], $e(_));
      },
      [v, g, p],
    ),
    m = b.useMemo(
      function () {
        return c == null ? y : [].concat($e(y), $e(c));
      },
      [y, c],
    );
  return k.createElement(g1, { modifiers: m, placement: o, strategy: d, referenceElement: u }, r);
}
var Jv = "atlaskit-portal-container",
  Xv = "body > .atlaskit-portal-container",
  Zv = "atlaskit-portal",
  O1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = Zv), (r.style.zIndex = "".concat(t)), r);
  },
  Qv = function () {
    return document.body;
  },
  ep = function () {
    var t = document.querySelector(Xv);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Jv),
        (n.style.display = "flex"),
        (r = Qv()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  k1 = function (t) {
    ep().removeChild(t);
  },
  S1 = function (t) {
    t.parentElement || ep().appendChild(t);
  },
  tp = function () {
    return document !== void 0;
  },
  E1 = function (t) {
    if (tp()) {
      var r = document.createElement("div");
      return ((r.className = Zv), (r.style.zIndex = "".concat(t)), r);
    }
  },
  x1 = function () {
    if (tp()) {
      var t = document.querySelector(Xv);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Jv),
          (n.style.display = "flex"),
          (r = Qv()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function C1(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useMemo(
      function () {
        return O1(t);
      },
      [t],
    );
  return (
    S1(n),
    b.useEffect(
      function () {
        return function () {
          k1(n);
        };
      },
      [n],
    ),
    mi.createPortal(r, n)
  );
}
var rp = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function R1(e) {
  var t = e.zIndex,
    r = e.children,
    n = b.useState(null),
    a = X(n, 2),
    i = a[0],
    o = a[1];
  rp(
    function () {
      var u = E1(t);
      o(u);
      var c = x1();
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
  var s = k.createElement(b.Suspense, { fallback: null }, r);
  return i ? mi.createPortal(s, i) : null;
}
var P1 = function (t) {
    var r = b.useState(!1),
      n = X(r, 2),
      a = n[0],
      i = n[1],
      o = b.useState(function () {
        return t === "layoutEffect" ? rp : b.useEffect;
      }),
      s = X(o, 1),
      u = s[0];
    return (
      u(function () {
        i(!0);
      }, []),
      a
    );
  },
  A1 = "akPortalMount",
  j1 = "akPortalUnmount",
  vd = {
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
  I1 = function (t) {
    return vd.hasOwnProperty(t) ? vd[t] : null;
  },
  D1 = function (t, r) {
    var n = { layer: I1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function pd(e, t) {
  var r = D1(e, t);
  window.dispatchEvent(r);
}
var T1 = function (t) {
  var r = Number(t);
  b.useEffect(
    function () {
      return (
        pd(A1, r),
        function () {
          pd(j1, r);
        }
      );
    },
    [r],
  );
};
function M1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = P1(i);
  return (
    T1(r),
    Se("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(R1, { zIndex: r }, n)
      : o
        ? k.createElement(C1, { zIndex: r }, n)
        : null
  );
}
var aa = new Set(),
  ba = null;
function hd() {
  if (!ba) {
    ba = Si.bindAll(window, [
      { type: "dragend", listener: Bo },
      { type: "pointerdown", listener: Bo },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Bo();
          };
        })(),
      },
    ]);
    var e = Array.from(aa);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Bo() {
  var e;
  ((e = ba) === null || e === void 0 || e(), (ba = null));
  var t = Array.from(aa);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function L1() {
  return Si.bindAll(window, [
    { type: "dragstart", listener: hd },
    { type: "dragenter", listener: hd },
  ]);
}
var za = null;
function $1(e) {
  return (
    za || (za = L1()),
    aa.add(e),
    e.onRegister({ isDragging: ba !== null }),
    function () {
      if ((aa.delete(e), aa.size === 0)) {
        var r;
        ((r = za) === null || r === void 0 || r(), (za = null));
      }
    }
  );
}
var ia = null;
function Qn() {
  ia != null && (window.clearTimeout(ia), (ia = null));
}
function gd(e, t) {
  (Qn(),
    (ia = window.setTimeout(function () {
      ((ia = null), e());
    }, t)));
}
var ht = null;
function N1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (Qn(), (ht = null));
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
          gd(function () {
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
    (ht && (Qn(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), gd(h, e.delay));
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
function F1(e, t) {
  var r = A_();
  return t ? "".concat(r(e)) : void 0;
}
var bd = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7",
  },
  B1 = function (t) {
    var r = t.shortcut;
    return b.createElement(
      "div",
      { className: C([bd.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return b.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([bd.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  np = b.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return b.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      b.createElement(
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
        d && Se("platform-dst-tooltip-shortcuts") && b.createElement(B1, { shortcut: d }),
      ),
    );
  });
np.displayName = "TooltipPrimitive";
var zo = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _85i5v77o _1q51v77o _y4ti12x7 _bozg12x7 _slp31hna",
    baseRefreshedPadding: "_1q511b66 _85i51b66",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  ap = b.forwardRef(function (t, r) {
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
    return b.createElement(
      np,
      {
        ref: r,
        style: n,
        className: C([
          zo.base,
          Se("platform-dst-tooltip-shortcuts") && zo.baseRefreshedPadding,
          o && zo.truncate,
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
ap.displayName = "TooltipContainer";
function yd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
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
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _d(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var z1 = j_.tooltip(),
  md = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  q1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  U1 = function (t) {
    return t.split("-")[0];
  };
function V1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    s = e.truncate,
    u = s === void 0 ? !1 : s,
    c = e.component,
    l = c === void 0 ? ap : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    y = g === void 0 ? me : g,
    m = e.onHide,
    w = m === void 0 ? me : m,
    O = e.canAppear,
    _ = e.hideTooltipOnClick,
    S = _ === void 0 ? !1 : _,
    E = e.hideTooltipOnMouseDown,
    j = E === void 0 ? !1 : E,
    T = e.analyticsContext,
    R = e.strategy,
    D = R === void 0 ? "fixed" : R,
    z = e.ignoreTooltipPointerEvents,
    B = z === void 0 ? !1 : z,
    U = e.isScreenReaderAnnouncementDisabled,
    Z = U === void 0 ? !1 : U,
    V = e.shortcut,
    q = n === "mouse" ? i : n,
    Y = Gc(Lr({ fn: y, action: "displayed", analyticsData: T }, md)),
    N = Gc(Lr({ fn: w, action: "hidden", analyticsData: T }, md)),
    A = b.useRef(null),
    be = b.useState("hide"),
    oe = X(be, 2),
    ue = oe[0],
    fe = oe[1],
    ge = b.useRef(null),
    ce = b.useRef(null),
    Ue = function (ne) {
      ((ce.current = ne), (ge.current = ne ? ne.firstElementChild : null));
    },
    Oe = b.useCallback(function (M) {
      ge.current = M;
    }, []),
    rt = Wn(ue),
    ve = Wn(Y),
    Ve = Wn(N),
    Or = Wn(v),
    Pt = Wn(O),
    Ee = b.useRef(!1),
    xe = b.useCallback(function (M) {
      ((A.current = M), (Ee.current = !1));
    }, []),
    Vt = b.useCallback(
      function () {
        A.current &&
          (Ee.current && Ve.current(), (A.current = null), (Ee.current = !1), fe("hide"));
      },
      [Ve],
    ),
    pt = b.useCallback(
      function () {
        A.current && (A.current.abort(), Ee.current && Ve.current(), (A.current = null));
      },
      [Ve],
    );
  b.useEffect(
    function () {
      return function () {
        A.current && pt();
      };
    },
    [pt],
  );
  var nt = b.useRef(!1);
  b.useEffect(function () {
    return $1({
      onRegister: function (ne) {
        var At = ne.isDragging;
        nt.current = At;
      },
      onDragStart: function () {
        var ne;
        ((ne = A.current) === null || ne === void 0 || ne.requestHide({ isImmediate: !0 }),
          (nt.current = !0));
      },
      onDragEnd: function () {
        nt.current = !1;
      },
    });
  }, []);
  var Gt = b.useCallback(
      function (M) {
        var ne;
        if (!nt.current) {
          if ((A.current && !A.current.isActive() && pt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Pt.current && !((ne = Pt.current) !== null && ne !== void 0 && ne.call(Pt)))) {
            var At = {
                source: M,
                delay: Or.current,
                show: function (kr) {
                  var rn = kr.isImmediate;
                  (Ee.current || ((Ee.current = !0), ve.current()),
                    fe(rn ? "show-immediate" : "fade-in"));
                },
                hide: function (kr) {
                  var rn = kr.isImmediate;
                  fe(rn ? "hide" : "before-fade-out");
                },
                done: Vt,
              },
              Wi = N1(At);
            xe(Wi);
          }
        }
      },
      [Pt, Or, Vt, xe, pt, ve],
    ),
    Ge = b.useCallback(
      function () {
        var M;
        (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (I0({ onClose: Ge, isDisabled: ue === "hide" || ue === "fade-out" }),
    b.useEffect(
      function () {
        if (ue === "hide") return me;
        ue === "before-fade-out" && fe("fade-out");
        var M = Si.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return M;
      },
      [ue],
    ));
  var Le = b.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    Ce = b.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = b.useCallback(
      function (M) {
        if (!(ce.current && M.target === ce.current) && !M.defaultPrevented) {
          M.preventDefault();
          var ne =
            n === "mouse"
              ? { type: "mouse", mouse: yd({ left: M.clientX, top: M.clientY }) }
              : { type: "keyboard" };
          Gt(ne);
        }
      },
      [n, Gt],
    ),
    Ht = b.useCallback(function (M) {
      (ce.current && M.target === ce.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Aa =
      n === "mouse"
        ? function (M) {
            var ne;
            (ne = A.current) !== null &&
              ne !== void 0 &&
              ne.isActive() &&
              (A.current.mousePosition = yd({ left: M.clientX, top: M.clientY }));
          }
        : void 0,
    ja = b.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Ia = b.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible") && Se("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Gt({ type: "keyboard" });
      },
      [Gt],
    ),
    Da = b.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    sh = b.useCallback(
      function (M) {
        M === "exiting" &&
          rt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [rt],
    ),
    uh = f,
    Gi = ue !== "hide" && !!o,
    iu = !Z && Gi,
    ou = ue !== "hide" && ue !== "fade-out",
    ch = b.useCallback(function () {
      var M;
      (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  L0({ isOpen: Gi && ou, onClose: ch });
  var su = function () {
      var ne;
      if (n === "mouse" && (ne = A.current) !== null && ne !== void 0 && ne.mousePosition) {
        var At;
        return (At = A.current) === null || At === void 0 ? void 0 : At.mousePosition;
      }
      return ge.current || void 0;
    },
    tn = F1("tooltip", iu),
    Hi = {
      onMouseOver: at,
      onMouseOut: Ht,
      onMouseMove: Aa,
      onMouseDown: Le,
      onClick: Ce,
      onFocus: Ia,
      onBlur: Da,
    };
  p && (Hi["data-testid"] = "".concat(p, "--container"));
  var uu = typeof t == "function";
  b.useEffect(
    function () {
      if (!uu) {
        var M = ge.current;
        if (!(!M || !tn))
          return (
            M.setAttribute("aria-describedby", tn),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [uu, tn],
  );
  var cu = iu
    ? k.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: tn },
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
          t(Lr(Lr({}, Hi), {}, { "aria-describedby": tn, ref: Oe })),
          cu,
        )
      : k.createElement(uh, K({}, Hi, { ref: Ue, role: "presentation" }), t, cu),
    Gi
      ? k.createElement(
          M1,
          { zIndex: z1 },
          k.createElement(w1, { placement: q, referenceElement: su(), strategy: D }, function (M) {
            var ne = M.ref,
              At = M.style,
              Wi = M.update,
              Ki = M.placement,
              kr = n === "mouse" ? void 0 : q1[U1(Ki)];
            return k.createElement(
              Bv,
              { appear: !0 },
              ou &&
                k.createElement(
                  X0,
                  {
                    distance: "constant",
                    entranceDirection: kr,
                    exitDirection: kr,
                    onFinish: sh,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (rn) {
                    var lh = rn.className;
                    return k.createElement(
                      l,
                      {
                        ref: ne,
                        className: "Tooltip ".concat(lh),
                        style: Lr(Lr({}, At), B && { pointerEvents: "none" }),
                        truncate: u,
                        placement: q,
                        testId: su() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Ht,
                        onMouseOver: ja,
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
var G1 = [
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
  Yn = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  wd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  ip = function (t) {
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
      y = t.isIconOnlyHeader,
      m = re(t, G1),
      w = b.useState(!1),
      O = X(w, 2),
      _ = O[0],
      S = O[1],
      E = b.useState(!1),
      j = X(E, 2),
      T = j[0],
      R = j[1],
      D = c === l || s !== void 0,
      z = _ || D || T,
      B = z && y,
      U = !y || z || (y && !T),
      Z = b.useCallback(
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
      q = b.useCallback(
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
      N = k.createElement(
        ki,
        { xcss: wd.headCellContainer, onMouseEnter: q, onMouseLeave: Y, onFocus: Z, onBlur: V },
        k.createElement(
          V1,
          { content: s === fr ? f : h },
          k.createElement(
            y_,
            { onClick: u, xcss: Yn.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              ui,
              { xcss: B ? Yn.hideIconHeaderWrapper : Yn.visibleHeaderWrapper },
              k.createElement("span", { className: C([wd.text]) }, r),
            ),
            U &&
              k.createElement(
                ui,
                { xcss: z ? Yn.sortIconVisibleWrapper : Yn.sortIconHiddenWrapper },
                s === fr
                  ? k.createElement(A0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(C0, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      Mv,
      K(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: s },
      ),
      o ? N : r,
    );
  },
  H1 = ["isRanking", "refHeight", "refWidth"];
function W1(e, t, r) {
  return (
    (t = H(t)),
    Te(e, op() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var K1 = (function (e) {
    function t() {
      return (le(this, t), W1(this, t, arguments));
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
              o = re(n, H1),
              s = $f(a, i);
            return k.createElement(ip, K({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  Y1 = $v(K1),
  J1 = ["content", "inlineStyles", "testId", "isRanking", "innerRef", "isSortable", "onClick"],
  sp = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      s = t.onClick,
      u = re(t, J1);
    return k.createElement(
      Mv,
      K(
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
  X1 = ["isRanking", "refHeight", "refWidth"];
function Z1(e, t, r) {
  return (
    (t = H(t)),
    Te(e, up() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Q1 = (function (e) {
    function t() {
      return (le(this, t), Z1(this, t, arguments));
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
              o = re(n, X1),
              s = $f(a, i);
            return k.createElement(sp, K({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(k.Component),
  eO = $v(Q1),
  tO = ["cells"],
  rO = [
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
function nO(e, t, r) {
  return (
    (t = H(t)),
    Te(e, cp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var aO = (function (e) {
    function t(r) {
      var n;
      return (le(this, t), (n = nO(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Me(t, e),
      de(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ri(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ri(n.sortKey, n.head);
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
            var h = d ? eO : sp,
              v = d ? Y1 : ip,
              g = i.cells,
              y = re(i, tO);
            return k.createElement(
              k0,
              K({}, y, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                g.map(function (m, w) {
                  var O = m.ascendingSortTooltip,
                    _ = m.buttonAriaRoleDescription,
                    S = m.colSpan,
                    E = m.content,
                    j = m.descendingSortTooltip,
                    T = m.isIconOnlyHeader,
                    R = m.isSortable,
                    D = m.key,
                    z = m.shouldTruncate,
                    B = m.testId,
                    U = m.width,
                    Z = re(m, rO),
                    V = "head-cell-".concat(w),
                    q = function () {
                      (n.setState({ activeSortButtonId: V }), R && c(m)());
                    };
                  return Se("platform-component-visual-refresh")
                    ? k.createElement(
                        v,
                        K(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: u,
                            isIconOnlyHeader: T,
                            isSortable: !!R,
                            isRanking: l,
                            key: D || w,
                            headCellId: V,
                            activeSortButtonId: p,
                            onClick: q,
                            testId: B || f,
                            shouldTruncate: z,
                            sortOrder: D === o ? s : void 0,
                            width: U,
                            ascendingSortTooltip: O,
                            descendingSortTooltip: j,
                            buttonAriaRoleDescription: _,
                          },
                          Z,
                        ),
                      )
                    : k.createElement(
                        h,
                        K(
                          {
                            colSpan: S,
                            content: E,
                            isFixedSize: u,
                            isSortable: !!R,
                            isRanking: l,
                            key: D || w,
                            onClick: R ? c(m) : void 0,
                            testId: B || f,
                            shouldTruncate: z,
                            sortOrder: D === o ? s : void 0,
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
  iO = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function oO(e) {
  switch (e) {
    case ii:
      return fr;
    case fr:
      return ii;
    default:
      return e;
  }
}
var sO = function (t) {
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
      y = t.rowsPerPage,
      m = y === void 0 ? 1 / 0 : y,
      w = t.onSetPage,
      O = w === void 0 ? me : w,
      _ = t.onSort,
      S = _ === void 0 ? me : _,
      E = t.page,
      j = E === void 0 ? 1 : E,
      T = t.emptyView,
      R = t.isRankable,
      D = R === void 0 ? !1 : R,
      z = t.isRankingDisabled,
      B = z === void 0 ? !1 : z,
      U = t.onRankStart,
      Z = U === void 0 ? me : U,
      V = t.onRankEnd,
      q = V === void 0 ? me : V,
      Y = t.loadingSpinnerSize,
      N = t.paginationi18n,
      A =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = b.useState(!1),
      oe = X(be, 2),
      ue = oe[0],
      fe = oe[1],
      ge = b.useRef(null),
      ce = la({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.16",
      }),
      Ue = la({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.2.16",
      });
    b.useEffect(
      function () {
        (ri(o, n), og(n));
      },
      [o, n],
    );
    var Oe = function (Ce) {
        return function () {
          var at = Ce.key;
          if (at) {
            if (ce && D && at === o && s === ii) {
              ce({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var Ht = at !== o ? fr : oO(s);
            ce && ce({ key: at, item: Ce, sortOrder: Ht });
          }
        };
      },
      rt = function (Ce, at) {
        O(Ce, at);
      },
      ve = function (Ce) {
        (fe(!0), Z(Ce));
      },
      Ve = function (Ce) {
        (fe(!1), Ue(Ce));
      },
      Or = function () {
        return Y || (Lf(i || [], j, m).length > 2 ? oi : Pb);
      },
      Pt = function () {
        return h ? k.createElement(Bb, { testId: l }) : T && k.createElement(zb, { testId: l }, T);
      },
      Ee = i && i.length,
      xe,
      Vt = !1;
    (d && Number.isInteger(d) && m && Ee && Ee <= d
      ? ((xe = Math.ceil(d / m)), (Vt = !0))
      : (xe = Ee && m ? Math.ceil(Ee / m) : 0),
      (xe = xe < 1 ? 1 : xe));
    var pt = j > xe ? xe : j,
      nt = !!Ee,
      Gt = Or(),
      Ge = Pt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        sv,
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
          $b,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: h },
          !!r && k.createElement(Nb, null, r),
          n &&
            k.createElement(aO, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: s,
              isRanking: ue,
              isRankable: D,
              testId: l,
            }),
          nt &&
            k.createElement(cO, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: m,
              page: pt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Vt,
              testId: l,
              isRankable: D,
              isRanking: ue,
              onRankStart: ve,
              onRankEnd: Ve,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      xe <= 1
        ? null
        : k.createElement(
            Fb,
            { testId: l },
            k.createElement(m0, {
              value: pt,
              onChange: rt,
              total: xe,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !nt &&
        Ge &&
        k.createElement(iv, { isLoading: h, spinnerSize: oi, testId: l, loadingLabel: u }, Ge),
    );
  },
  uO = b.lazy(function () {
    return lg(
      () => import("./body-CvIyWUMB.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  cO = b.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      u = t.isRankingDisabled,
      c = re(t, iO),
      l = a && !c.sortKey,
      d = b.useState(!1),
      f = X(d, 2),
      p = f[0],
      h = f[1];
    b.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = k.createElement(ry, K({ ref: r }, c));
    return l && p
      ? k.createElement(
          ay,
          { fallback: v },
          k.createElement(
            b.Suspense,
            { fallback: v },
            k.createElement(
              uO,
              K({ ref: r }, c, {
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
function lO(e, t, r) {
  return (
    (t = H(t)),
    Te(e, lp() ? Reflect.construct(t, r || [], H(e).constructor) : t.apply(e, r))
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
var Xs = (function (e) {
  function t() {
    var r;
    le(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = lO(this, t, [].concat(a))),
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
        var f = sg(o, c, l, d);
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
            u = this.props,
            c = u.caption,
            l = u.emptyView,
            d = u.head,
            f = u.highlightedRowIndex,
            p = u.loadingSpinnerSize,
            h = u.isLoading,
            v = u.loadingLabel,
            g = u.isFixedSize,
            y = u.isRankable,
            m = u.isRankingDisabled,
            w = u.rowsPerPage,
            O = u.paginationi18n,
            _ = u.onRankStart,
            S = u.onPageRowsUpdate,
            E = u.testId,
            j = u.label;
          return k.createElement(sO, {
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
            isRankable: y,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: _,
            onPageRowsUpdate: S,
            testId: E,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
x(Xs, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: me,
  onSort: me,
  rowsPerPage: 1 / 0,
});
const dO = (e, t, r, n) => {
    const a = Object.keys(n).map((i) => ({ key: i, content: i, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  dp = (e, t, r, n) => ({ cells: dO(e, t, r, n) });
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
var fO = {};
function Pi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : fO;
}
var fp = Object.assign,
  di = Object.getOwnPropertyDescriptor,
  Ot = Object.defineProperty,
  Ai = Object.prototype,
  gs = [];
Object.freeze(gs);
var vp = {};
Object.freeze(vp);
var vO = typeof Proxy < "u",
  pO = Object.toString();
function pp() {
  vO || W("Proxy not available");
}
function hp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Nr = function () {};
function ct(e) {
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
function ji(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!ji(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === pO;
}
function gp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ii(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function bp(e, t, r) {
  Ot(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function yr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ji(n) && n[r] === !0;
    }
  );
}
function Xr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function hO(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Lt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var yp = typeof Object.getOwnPropertySymbols < "u";
function gO(e) {
  var t = Object.keys(e);
  if (!yp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ai.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Di =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : yp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function _p(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return Ai.hasOwnProperty.call(e, t);
}
var bO =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Di(t).forEach(function (n) {
        r[n] = di(t, n);
      }),
      r
    );
  };
function Ne(e, t) {
  return !!(e & t);
}
function Fe(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, mO(n.key), n));
  }
}
function Zr(e, t, r) {
  return (t && yO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Fr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = wO(e)) || t) {
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
function mp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), bs(e, t));
}
function bs(e, t) {
  return (
    (bs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    bs(e, t)
  );
}
function _O(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function mO(e) {
  var t = _O(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wO(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Od(e, t)
          : void 0
    );
  }
}
var _t = Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, n) {
    if (Ea(n)) return e.decorate_20223_(r, n);
    Sa(r, n, e);
  }
  return Object.assign(t, e);
}
function Sa(e, t, r) {
  (Ft(e, _t) || Ii(e, _t, hr({}, e[_t])), RO(r) || (e[_t][t] = r));
}
function OO(e) {
  return (Ft(e, _t) || Ii(e, _t, hr({}, e[_t])), e[_t]);
}
function Ea(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var $ = Symbol("mobx administration"),
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
        return Lp(this);
      }),
      (t.reportChanged = function () {
        (Xe(), $p(this), Ze());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Zr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ne(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ne(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ne(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Zs = yr("Atom", nr);
function wp(e, t, r) {
  (t === void 0 && (t = Nr), r === void 0 && (r = Nr));
  var n = new nr(e);
  return (t !== Nr && Dk(n, t), r !== Nr && qp(n, r), n);
}
function kO(e, t) {
  return eh(e, t);
}
function SO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var fi = { structural: kO, default: SO };
function gr(e, t, r) {
  return Hp(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : er(e)
        ? se.object(e, void 0, { name: r })
        : Xr(e)
          ? se.map(e, { name: r })
          : Lt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Kr(e) && !_a(e)
              ? gp(e)
                ? Yr(e)
                : ya(r, e)
              : e;
}
function EO(e, t, r) {
  if (e == null || qi(e) || zi(e) || mr(e) || yt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (er(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Xr(e)) return se.map(e, { name: r, deep: !1 });
  if (Lt(e)) return se.set(e, { name: r, deep: !1 });
}
function Ti(e) {
  return e;
}
function xO(e, t) {
  return eh(e, t) ? t : e;
}
var CO = "override";
function RO(e) {
  return e.annotationType_ === CO;
}
function xa(e, t) {
  return { annotationType_: e, options_: t, make_: PO, extend_: AO, decorate_20223_: jO };
}
function PO(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Kr(r.value)) return 1;
  var i = Op(e, this, t, r, !1);
  return (Ot(n, t, i), 2);
}
function AO(e, t, r, n) {
  var a = Op(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function jO(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (c) {
      var l, d, f, p;
      return br(
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
        Kr(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      Kr(e) || (e = o(e)),
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
function IO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Op(e, t, r, n, a) {
  var i, o, s, u, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), IO(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: br(
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
function kp(e, t) {
  return { annotationType_: e, options_: t, make_: DO, extend_: TO, decorate_20223_: MO };
}
function DO(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Ft(e.target_, t) || !_a(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (_a(r.value)) return 1;
  var i = Sp(e, this, t, r, !1, !1);
  return (Ot(n, t, i), 2);
}
function TO(e, t, r, n) {
  var a,
    i = Sp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function MO(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    _a(e) || (e = Yr(e)),
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
function LO(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Sp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), LO(e, t, r, n));
  var o = n.value;
  if ((_a(o) || (o = Yr(o)), a)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function Qs(e, t) {
  return { annotationType_: e, options_: t, make_: $O, extend_: NO, decorate_20223_: FO };
}
function $O(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function NO(e, t, r, n) {
  return (
    BO(e, this, t, r),
    e.defineComputedProperty_(t, hr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function FO(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = Qr(this)[$],
        o = hr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new lt(o)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function BO(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Mi(e, t) {
  return { annotationType_: e, options_: t, make_: zO, extend_: qO, decorate_20223_: UO };
}
function zO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function qO(e, t, r, n) {
  var a, i;
  return (
    VO(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : gr,
      n,
    )
  );
}
function UO(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(s, u) {
    var c,
      l,
      d = Qr(s)[$],
      f = new dr(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : gr,
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
function VO(e, t, r, n) {
  t.annotationType_;
}
var GO = "true",
  HO = Ep();
function Ep(e) {
  return { annotationType_: GO, options_: e, make_: WO, extend_: KO, decorate_20223_: YO };
}
function WO(e, t, r, n) {
  var a, i;
  if (r.get) return Li.make_(e, t, r, n);
  if (r.set) {
    var o = Kr(r.set) ? r.set : br(t.toString(), r.set);
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
    if (gp(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Yr.bound : Yr;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? ya.bound : ya;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function KO(e, t, r, n) {
  var a, i;
  if (r.get) return Li.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: br(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return s.extend_(e, t, r, n);
}
function YO(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var JO = "observable",
  XO = "observable.ref",
  ZO = "observable.shallow",
  QO = "observable.struct",
  xp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(xp);
function qa(e) {
  return e || xp;
}
var ys = Mi(JO),
  ek = Mi(XO, { enhancer: Ti }),
  tk = Mi(ZO, { enhancer: EO }),
  rk = Mi(QO, { enhancer: xO }),
  Cp = kt(ys);
function Ua(e) {
  return e.deep === !0 ? gr : e.deep === !1 ? Ti : ak(e.defaultDecorator);
}
function nk(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Ep(e)) : void 0;
}
function ak(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : gr;
}
function Rp(e, t, r) {
  if (Ea(t)) return ys.decorate_20223_(e, t);
  if (pr(t)) {
    Sa(e, t, ys);
    return;
  }
  return Hp(e)
    ? e
    : er(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Xr(e)
          ? se.map(e, t)
          : Lt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
fp(Rp, Cp);
var ik = {
    box: function (t, r) {
      var n = qa(r);
      return new dr(t, Ua(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = qa(r);
      return (P.useProxies === !1 || n.proxy === !1 ? nS : Wk)(t, Ua(n), n.name);
    },
    map: function (t, r) {
      var n = qa(r);
      return new Kp(t, Ua(n), n.name);
    },
    set: function (t, r) {
      var n = qa(r);
      return new Yp(t, Ua(n), n.name);
    },
    object: function (t, r, n) {
      return wr(function () {
        return $k(P.useProxies === !1 || n?.proxy === !1 ? Qr({}, n) : Vk({}, n), t, r);
      });
    },
    ref: kt(ek),
    shallow: kt(tk),
    deep: Cp,
    struct: kt(rk),
  },
  se = fp(Rp, ik),
  Pp = "computed",
  ok = "computed.struct",
  _s = Qs(Pp),
  sk = Qs(ok, { equals: fi.structural }),
  Li = function (t, r) {
    if (Ea(r)) return _s.decorate_20223_(t, r);
    if (pr(r)) return Sa(t, r, _s);
    if (er(t)) return kt(Qs(Pp, t));
    var n = er(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new lt(n));
  };
Object.assign(Li, _s);
Li.struct = kt(sk);
var kd,
  Sd,
  vi = 0,
  uk = 1,
  ck =
    (kd = (Sd = di(function () {}, "name")) == null ? void 0 : Sd.configurable) != null ? kd : !1,
  Ed = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function br(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return lk(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    ck && ((Ed.value = e), Ot(a, "name", Ed)),
    a
  );
}
function lk(e, t, r, n, a) {
  var i = dk(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    fk(i);
  }
}
function dk(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    s = !t || !o;
  Xe();
  var u = P.allowStateChanges;
  s && (_r(), (u = $i(!0)));
  var c = eu(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: uk++,
      parentActionId_: vi,
    };
  return ((vi = l.actionId_), l);
}
function fk(e) {
  (vi !== e.actionId_ && W(30),
    (vi = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Ni(e.prevAllowStateChanges_),
    oa(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function vk(e, t) {
  var r = $i(e);
  try {
    return t();
  } finally {
    Ni(r);
  }
}
function $i(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Ni(e) {
  P.allowStateChanges = e;
}
var dr = (function (e) {
    function t(n, a, i, o, s) {
      var u;
      return (
        i === void 0 && (i = "ObservableValue"),
        s === void 0 && (s = fi.default),
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
    mp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== P.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ye(this)) {
          var i = Je(this, { object: this, type: St, newValue: a });
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
        return Ca(this, a);
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
          Ra(this, a)
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
        return _p(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(nr),
  lt = (function () {
    function e(r) {
      ((this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
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
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = br("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? fi.structural : fi.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        yk(this);
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
          P.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          ms(this) &&
            (this.warnAboutUntrackedRead_(), Xe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((Lp(this), ms(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && bk(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (Xa(a)) throw a.cause;
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
          o = a || Xa(n) || Xa(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = $i(!1),
          i;
        if (n) i = Ap(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new hi(o);
          }
        return (Ni(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ws(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          s = void 0;
        return Rk(function () {
          var u = i.get();
          if (!o || a) {
            var c = _r();
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
        return _p(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Zr(e, [
        {
          key: "isComputing",
          get: function () {
            return Ne(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ne(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ne(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ne(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ne(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
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
var Fi = yr("ComputedValue", lt),
  J;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(J || (J = {}));
var pi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(pi || (pi = {}));
var hi = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Xa(e) {
  return e instanceof hi;
}
function ms(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (var t = eu(!0), r = _r(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Fi(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), oa(t), !0);
            }
          if (e.dependenciesState_ === J.STALE_) return (Bt(r), oa(t), !0);
        }
      }
      return (Ip(e), Bt(r), oa(t), !1);
    }
  }
}
function Ap(e, t, r) {
  var n = eu(!0);
  (Ip(e),
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
      i = new hi(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), pk(e), oa(n), i);
}
function pk(e) {
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
    var u = t[i];
    (u.diffValue === 0 && Tp(u, e), (u.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), gk(c, e));
  }
  n !== J.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ws(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Tp(t[r], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function jp(e) {
  var t = _r();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function _r() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Bt(e) {
  P.trackingDerivation = e;
}
function eu(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function oa(e) {
  P.allowStateReads = e;
}
function Ip(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var Za = function () {
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
  Qa = !0,
  Dp = !1,
  P = (function () {
    var e = Pi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Qa = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Za().version && (Qa = !1),
      Qa
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Za()))
        : (setTimeout(function () {
            Dp || W(35);
          }, 1),
          new Za())
    );
  })();
function hk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && W(36), (Dp = !0), Qa)) {
    var e = Pi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new Za()));
  }
}
function gk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Tp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Mp(e));
}
function Mp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Xe() {
  P.inBatch++;
}
function Ze() {
  if (--P.inBatch === 0) {
    Np();
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
function Lp(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Mp(e), !1);
}
function $p(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === J.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = J.STALE_));
    }));
}
function bk(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function yk(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.UP_TO_DATE_ &&
        ((t.dependenciesState_ = J.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = J.NOT_TRACKING_),
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
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), Np());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Xe(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), ms(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((P.trackingContext = n), Ze());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Xe(), (this.isRunning = !0));
        var a = P.trackingContext;
        P.trackingContext = this;
        var i = Ap(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ws(this),
          Xa(i) && this.reportExceptionInDerivation_(i.cause),
          Ze());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Xe(), ws(this), Ze()));
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
    Zr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ne(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ne(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ne(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ne(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ne(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
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
var _k = 100,
  Os = function (t) {
    return t();
  };
function Np() {
  P.inBatch > 0 || P.isRunningReactions || Os(mk);
}
function mk() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === _k && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var gi = yr("Reaction", xt);
function wk(e) {
  var t = Os;
  Os = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function sa() {
  return !1;
}
function Ok(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Fp = "action",
  kk = "action.bound",
  Bp = "autoAction",
  Sk = "autoAction.bound",
  Ek = "<unnamed action>",
  ks = xa(Fp),
  xk = xa(kk, { bound: !0 }),
  Ss = xa(Bp, { autoAction: !0 }),
  Ck = xa(Sk, { autoAction: !0, bound: !0 });
function zp(e) {
  var t = function (n, a) {
    if (ct(n)) return br(n.name || Ek, n, e);
    if (ct(a)) return br(n, a, e);
    if (Ea(a)) return (e ? Ss : ks).decorate_20223_(n, a);
    if (pr(a)) return Sa(n, a, e ? Ss : ks);
    if (pr(n)) return kt(xa(e ? Bp : Fp, { name: n, autoAction: e }));
  };
  return t;
}
var ke = zp(!1);
Object.assign(ke, ks);
var ya = zp(!0);
Object.assign(ya, Ss);
ke.bound = kt(xk);
ya.bound = kt(Ck);
function Kr(e) {
  return ct(e) && e.isMobxAction === !0;
}
function Rk(e, t) {
  var r, n, a, i;
  t === void 0 && (t = vp);
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
    var c = Ak(t),
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
var Pk = function (t) {
  return t();
};
function Ak(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Pk;
}
var jk = "onBO",
  Ik = "onBUO";
function Dk(e, t, r) {
  return Up(jk, e, t, r);
}
function qp(e, t, r) {
  return Up(Ik, e, t, r);
}
function Up(e, t, r, n) {
  var a = _i(t),
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
var Tk = "never",
  Va = "always",
  Mk = "observed";
function Lk(e) {
  e.isolateGlobalState === !0 && hk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === Va ? !0 : t === Tk ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Va ? Va : r === Mk;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === Va)));
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
    e.reactionScheduler && wk(e.reactionScheduler));
}
function $k(e, t, r, n) {
  var a = bO(t);
  return (
    wr(function () {
      var i = Qr(e, n)[$];
      Di(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Nk(e, t) {
  return Vp(_i(e, t));
}
function Vp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Fk(e.observing_).map(Vp)),
    t
  );
}
function Fk(e) {
  return Array.from(new Set(e));
}
var Bk = 0;
function Gp() {
  this.message = "FLOW_CANCELLED";
}
Gp.prototype = Object.create(Error.prototype);
var qo = kp("flow"),
  zk = kp("flow.bound", { bound: !0 }),
  Yr = Object.assign(function (t, r) {
    if (Ea(r)) return qo.decorate_20223_(t, r);
    if (pr(r)) return Sa(t, r, qo);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var s = this,
          u = arguments,
          c = ++Bk,
          l = ke(a + " - runid: " + c + " - init", n).apply(s, u),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function y(O) {
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
              if (ct(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(y, m));
            }
            y(void 0);
          });
        return (
          (p.cancel = ke(a + " - runid: " + c + " - cancel", function () {
            try {
              f && xd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(Nr, Nr), xd(v), d(new Gp()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, qo);
Yr.bound = kt(zk);
function xd(e) {
  ct(e.cancel) && e.cancel();
}
function _a(e) {
  return e?.isMobXFlow === !0;
}
function qk(e, t) {
  return e ? qi(e) || !!e[$] || Zs(e) || gi(e) || Fi(e) : !1;
}
function Hp(e) {
  return qk(e);
}
function $t(e, t) {
  (t === void 0 && (t = void 0), Xe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function $r(e) {
  return e[$];
}
var Uk = {
  has: function (t, r) {
    return $r(t).has_(r);
  },
  get: function (t, r) {
    return $r(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return pr(r) ? ((a = $r(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return pr(r) ? ((n = $r(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = $r(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return $r(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function Vk(e, t) {
  var r, n;
  return (
    pp(),
    (e = Qr(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Uk))
  );
}
function Ye(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ca(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    hp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Je(e, t) {
  var r = _r();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, i = n.length;
      a < i && ((t = n[a](t)), t && !t.type && W(14), !!t);
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
function Ra(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    hp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = _r(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Bt(r);
  }
}
function Bi(e, t, r) {
  return (
    wr(function () {
      var n,
        a = Qr(e, r)[$];
      ((n = t) != null || (t = OO(e)),
        Di(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var Cd = "splice",
  St = "update",
  Gk = 1e4,
  Hk = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(bi, r)
              ? bi[r]
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
      W(15);
    },
  },
  tu = (function () {
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
          Ra(this, n)
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
          this.legacyMode_ && a > 0 && Qp(n + a + 1));
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
          i === void 0 && (i = gs),
          Ye(this))
        ) {
          var u = Je(this, { object: this.proxy_, type: Cd, index: n, removedCount: a, added: i });
          if (!u) return gs;
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
        if (i.length < Gk) {
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
        var o = !this.owned_ && sa(),
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
        var o = !this.owned_ && sa(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Cd,
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
        if ((this.legacyMode_ && n > i.length && W(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Ye(this)) {
            var s = Je(this, { type: St, object: this.proxy_, index: n, newValue: a });
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
function Wk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    pp(),
    wr(function () {
      var a = new tu(r, t, n, !1);
      bp(a.values_, $, a);
      var i = new Proxy(a.values_, Hk);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var bi = {
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
    return (P.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    P.trackingDerivation && W(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
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
ie("reduce", Wp);
ie("reduceRight", Wp);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (bi[e] = t(e));
}
function qe(e) {
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
function Wp(e) {
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
var Kk = yr("ObservableArrayAdministration", tu);
function zi(e) {
  return ji(e) && Kk(e[$]);
}
var Yk = {},
  Zt = "add",
  yi = "delete",
  Kp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = gr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = Yk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ct(Map) || W(18),
        wr(function () {
          ((i.keysAtom_ = wp("ObservableMap.keys()")),
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
          var o = (i = new dr(this.has_(n), Ti, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            qp(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ye(this)) {
          var o = Je(this, { type: i ? St : Zt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ye(this))) {
          var i = Je(this, { type: yi, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = sa(),
            s = st(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: yi,
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
          var o = sa(),
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
              l = new dr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = sa(),
          s = st(this),
          u =
            s || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Zt,
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
        return Rd({
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
        return Rd({
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
        for (var i = Fr(this), o; !(o = i()).done; ) {
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
            er(n)
              ? gO(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      s = i[1];
                    return a.set(o, s);
                  })
                : Xr(n)
                  ? (hO(n) || W(19, n),
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
        $t(function () {
          jp(function () {
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
          $t(function () {
            for (
              var i = Jk(n), o = new Map(), s = !1, u = Fr(a.data_.keys()), c;
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
            for (var p = Fr(i.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                y = v[1],
                m = a.data_.has(g);
              if ((a.set(g, y), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), m || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), _ = o.keys(), S = O.next(), E = _.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (E = _.next()));
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
        return Ra(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ca(this, n);
      }),
      Zr(e, [
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
  mr = yr("ObservableMap", Kp);
function Rd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), nu(e));
}
function Jk(e) {
  if (Xr(e) || mr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var Xk = {},
  Yp = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = gr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = Xk),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ct(Set) || W(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, a);
        }),
        wr(function () {
          ((i.atom_ = wp(i.name_)), r && i.replace(r));
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
          jp(function () {
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
          var i = Je(this, { type: Zt, object: this, newValue: n });
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
                    type: Zt,
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
        if (Ye(this)) {
          var i = Je(this, { type: yi, object: this, oldValue: n });
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
                    type: yi,
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
        return Pd({
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
        return Pd({
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
                : n != null && W("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return Ra(this, n);
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
      Zr(e, [
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
  yt = yr("ObservableSet", Yp);
function Pd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), nu(e));
}
var Ad = Object.create(null),
  jd = "remove",
  Jp = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = HO),
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
        if (i instanceof lt) return (i.set(a), !0);
        if (Ye(this)) {
          var o = Je(this, { type: St, object: this.proxy_ || this.target_, name: n, newValue: a });
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
            ((a = new dr(n in this.target_, Ti, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[_t]) != null && i[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ai; ) {
            var s = di(o, n);
            if (s) {
              var u = a.make_(this, n, s, o);
              if (u === 0) return;
              if (u === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Dd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var s = i.extend_(this, n, a, o);
        return (s && Dd(this, i, n), s);
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
              type: Zt,
              newValue: a.value,
            });
            if (!s) return null;
            var u = s.newValue;
            a.value !== u && (a = hr({}, a, { value: u }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Ot(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          Ze();
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
            var u = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: a,
            });
            if (!u) return null;
            a = u.newValue;
          }
          var c = Id(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Ot(this.target_, n, l);
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
          Xe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ye(this)) {
            var s = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var u = Id(n),
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
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (Ye(this)) {
          var i = Je(this, { object: this.proxy_ || this.target_, name: n, type: jd });
          if (!i) return null;
        }
        try {
          var o;
          Xe();
          var s = st(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var d;
            l = (d = di(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof dr && (l = c.value_), $p(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || u)
          ) {
            var f = {
              type: jd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && ut(this, f);
          }
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ra(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ca(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = st(this),
          s = !1;
        if (o || s) {
          var u =
            o || s
              ? {
                  type: Zt,
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
        return (this.keysAtom_.reportObserved(), Di(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Qr(e, t) {
  var r;
  if (Ft(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Jp(e, new Map(), String(n), nk(t));
  return (Ii(e, $, a), e);
}
var Zk = yr("ObservableObjectAdministration", Jp);
function Id(e) {
  return (
    Ad[e] ||
    (Ad[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function qi(e) {
  return ji(e) ? Zk(e[$]) : !1;
}
function Dd(e, t, r) {
  var n;
  (n = e.target_[_t]) == null || delete n[r];
}
var Qk = Zp(0),
  eS = (function () {
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
  Uo = 0,
  Xp = function () {};
function tS(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
tS(Xp, Array.prototype);
var ru = (function (e) {
  function t(n, a, i, o) {
    var s;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      wr(function () {
        var u = new tu(i, a, o, !0);
        ((u.proxy_ = s),
          bp(s, $, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          eS && Object.defineProperty(s, "0", Qk));
      }),
      s
    );
  }
  mp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (s) {
          return zi(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return nu({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Zr(t, [
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
})(Xp);
Object.entries(bi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ii(ru.prototype, t, r);
});
function Zp(e) {
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
function rS(e) {
  Ot(ru.prototype, "" + e, Zp(e));
}
function Qp(e) {
  if (e > Uo) {
    for (var t = Uo; t < e + 100; t++) rS(t);
    Uo = e;
  }
}
Qp(1e3);
function nS(e, t, r) {
  return new ru(e, t, r);
}
function _i(e, t) {
  if (typeof e == "object" && e !== null) {
    if (zi(e)) return (t !== void 0 && W(23), e[$].atom_);
    if (yt(e)) return e.atom_;
    if (mr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Es(e)), r);
    }
    if (qi(e)) {
      if (!t) return W(26);
      var n = e[$].values_.get(t);
      return (n || W(27, t, Es(e)), n);
    }
    if (Zs(e) || Fi(e) || gi(e)) return e;
  } else if (ct(e) && gi(e[$])) return e[$];
  W(28);
}
function aS(e, t) {
  if ((e || W(29), Zs(e) || Fi(e) || gi(e) || mr(e) || yt(e))) return e;
  if (e[$]) return e[$];
  W(24, e);
}
function Es(e, t) {
  var r;
  if (t !== void 0) r = _i(e, t);
  else {
    if (Kr(e)) return e.name;
    qi(e) || mr(e) || yt(e) ? (r = aS(e)) : (r = _i(e));
  }
  return r.name_;
}
function wr(e) {
  var t = _r(),
    r = $i(!0);
  Xe();
  try {
    return e();
  } finally {
    (Ze(), Ni(r), Bt(t));
  }
}
var Td = Ai.toString;
function eh(e, t, r) {
  return (r === void 0 && (r = -1), xs(e, t, r));
}
function xs(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = Td.call(e);
  if (o !== Td.call(t)) return !1;
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
  ((e = Md(e)), (t = Md(t)));
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
    for (; l--; ) if (!xs(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Ft(t, h) && xs(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Md(e) {
  return zi(e) ? e.slice() : Xr(e) || mr(e) || Lt(e) || yt(e) ? Array.from(e.entries()) : e;
}
var Ld,
  iS = ((Ld = Pi().Iterator) == null ? void 0 : Ld.prototype) || {};
function nu(e) {
  return ((e[Symbol.iterator] = oS), Object.assign(Object.create(iS), e));
}
function oS() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Pi();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ok, extras: { getDebugName: Es }, $mobx: $ });
if (!b.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Bi) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function sS(e) {
  e();
}
function uS(e) {
  (e || (e = sS), Lk({ reactionScheduler: e }));
}
function cS(e) {
  return Nk(e);
}
var lS = 1e4,
  dS = 1e4,
  fS = (function () {
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
            (n === void 0 && (n = lS), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, dS));
        },
      }),
      e
    );
  })(),
  vS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : fS,
  ma = new vS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Vo = { exports: {} },
  Go = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d;
function pS() {
  if ($d) return Go;
  $d = 1;
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
    (Go.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Go
  );
}
var Nd;
function hS() {
  return (Nd || ((Nd = 1), (Vo.exports = pS())), Vo.exports);
}
var gS = hS();
function Fd(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function bS(e, t) {
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
          n.reaction || (Fd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Fd(a), ma.register(r, a, a)),
    k.useDebugValue(a.reaction, cS),
    gS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Ho,
  Wo,
  th = typeof Symbol == "function" && Symbol.for,
  yS =
    (Wo =
      (Ho = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ho === void 0
        ? void 0
        : Ho.configurable) !== null && Wo !== void 0
      ? Wo
      : !1,
  Bd = th
    ? Symbol.for("react.forward_ref")
    : typeof b.forwardRef == "function" &&
      b.forwardRef(function (e) {
        return null;
      }).$$typeof,
  zd = th
    ? Symbol.for("react.memo")
    : typeof b.memo == "function" &&
      b.memo(function (e) {
        return null;
      }).$$typeof;
function _S(e, t) {
  var r;
  if (zd && e.$$typeof === zd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (Bd && e.$$typeof === Bd && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, u) {
    return bS(function () {
      return a(s, u);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    yS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = b.forwardRef(o)),
    (o = b.memo(o)),
    wS(e, o),
    o
  );
}
var mS = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function wS(e, t) {
  Object.keys(e).forEach(function (r) {
    mS[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ko;
uS(mi.unstable_batchedUpdates);
Ko = ma.finalizeAllImmediately;
function OS(e, t) {
  if (qd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !qd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function qd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ud = Symbol("patchMixins"),
  rh = Symbol("patchedDefinition");
function kS(e, t) {
  var r = (e[Ud] = e[Ud] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Vd(e, t) {
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
function Gd(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    Vd.call.apply(Vd, [this, e, t].concat(i));
  };
  return r;
}
function SS(e, t, r) {
  var n = kS(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[rh])) {
    var i = e[t],
      o = nh(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function nh(e, t, r, n, a) {
  var i,
    o = Gd(a, n);
  return (
    (i = {}),
    (i[rh] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (u) {
      if (this === e) o = Gd(u, n);
      else {
        var c = nh(this, t, r, n, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var Hd = Symbol("ObserverAdministration"),
  Wd = Symbol("isMobXReactObserver");
function Cs(e) {
  var t;
  return (t = e[Hd]) != null
    ? t
    : (e[Hd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Rs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function ES(e) {
  var t = e.prototype;
  if (e[Wd]) {
    var r = Rs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Wd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== b.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Kd;
    else if (t.shouldComponentUpdate !== Kd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Rs(e);
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
        value: xS.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = Cs(this);
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
    SS(t, "componentWillUnmount", function () {
      var o,
        s = Cs(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Rs(e) {
  return e.displayName || e.name || "<component>";
}
function xS(e) {
  var t = e.bind(this),
    r = Cs(this);
  function n() {
    r.reaction || ((r.reaction = CS(r)), r.mounted || ma.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = vk(!1, t);
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
function CS(e) {
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
function Kd(e, t) {
  return this.state !== t ? !0 : !OS(this.props, e);
}
function Ui(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(b.Component, e) ||
    Object.prototype.isPrototypeOf.call(b.PureComponent, e)
      ? ES(e)
      : _S(e)
  );
}
function Ps() {
  return (
    (Ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ps.apply(null, arguments)
  );
}
function RS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var PS = ["children"],
  Yd = k.createContext({});
function ah(e) {
  var t = e.children,
    r = RS(e, PS),
    n = k.useContext(Yd),
    a = k.useRef(Ps({}, n, r)),
    i = a.current;
  return k.createElement(Yd.Provider, { value: i }, t);
}
ah.displayName = "MobXProvider";
k.version.split(".")[0];
if (!b.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var AS = Object.defineProperty,
  jS = Object.getOwnPropertyDescriptor,
  Ut = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? jS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && AS(t, r, a), a);
  };
let Rt = class {
  constructor() {
    ((this.isLoading = !0), Bi(this));
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
Ut([se], Rt.prototype, "isLoading", 2);
Ut([se], Rt.prototype, "users", 2);
Ut([se], Rt.prototype, "duplicates", 2);
Ut([se], Rt.prototype, "sort", 2);
Ut([ke.bound], Rt.prototype, "saveUsers", 1);
Ut([ke.bound], Rt.prototype, "saveSort", 1);
Ut([ke.bound], Rt.prototype, "saveDuplicates", 1);
Ut([ke], Rt.prototype, "loading", 1);
Ut([ke], Rt.prototype, "stopLoading", 1);
const IS = new Rt();
var DS = Object.defineProperty,
  TS = Object.getOwnPropertyDescriptor,
  Pa = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? TS(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && DS(t, r, a), a);
  };
class en {
  constructor() {
    ((this.isLoading = !0), Bi(this));
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
Pa([se], en.prototype, "isLoading", 2);
Pa([se], en.prototype, "metadata", 2);
Pa([ke.bound], en.prototype, "saveMetadata", 1);
Pa([ke], en.prototype, "loading", 1);
Pa([ke], en.prototype, "stopLoading", 1);
const MS = new en();
var LS = Object.defineProperty,
  $S = Object.getOwnPropertyDescriptor,
  ih = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? $S(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && LS(t, r, a), a);
  };
class au {
  constructor() {
    ((this.state = "ROOT"), Bi(this));
  }
  saveState(t) {
    this.state = t;
  }
}
ih([se], au.prototype, "state", 2);
ih([ke.bound], au.prototype, "saveState", 1);
const NS = new au();
class FS {
  constructor() {
    ((this.usersStore = IS), (this.usersMetadata = MS), (this.stateStore = NS));
  }
}
const oh = new FS(),
  BS = b.createContext(oh),
  Vi = () => b.useContext(BS),
  zS = Ui(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = Vi(),
      n = dp(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? L.jsx("div", { children: "User Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Xs, {
                head: n,
                onSort: async (i) => {
                  let o = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const s = await Nt.invoke("fetch", { sortType: o });
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
                              (e.loading(), await Nt.invoke("delete", { id: i.id }));
                              const u = await Nt.invoke("fetch", { sortType: e.sort });
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
                    const i = await Nt.invoke("duplicate");
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
  qS = Ui(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = Vi(),
      [n, a] = b.useState({}),
      i = (s) => {
        const { name: u, value: c, type: l } = s.target;
        a((d) => ({ ...d, [u]: l === "number" ? Number(c) : c }));
      },
      o = async (s) => {
        (s.preventDefault(),
          console.log("Form Data:", n),
          await Nt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await Nt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
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
  US = Ui(() => {
    const { usersStore: e, usersMetadata: t } = Vi(),
      r = dp(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? L.jsx("div", { children: "Duplicate Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Xs, {
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
function VS() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = Vi();
  if (
    (b.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await Nt.invoke("fetchMetadata"));
          const a = await Nt.invoke("fetch", { type: "USER", sortType: e.sort });
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
            L.jsx(zS, {}),
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
            L.jsx(US, {}),
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
            L.jsx(qS, {}),
          ],
        }),
      });
    default:
      return L.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const GS = Ui(VS),
  HS = document.getElementById("root"),
  WS = dh.createRoot(HS),
  Jd = () => {
    WS.render(L.jsx(ah, { ...oh, children: L.jsx(GS, {}) }));
  };
Nt.view.theme
  .enable()
  .then(() => {
    Jd();
  })
  .catch((e) => {
    (console.error(e.message), Jd());
  });
export {
  si as B,
  QS as N,
  k as R,
  Jb as T,
  Me as _,
  de as a,
  ts as b,
  le as c,
  Te as d,
  H as e,
  X as f,
  x as g,
  re as h,
  Si as i,
  $e as j,
  K as k,
  n_ as l,
  Mt as m,
  Ct as n,
  Jt as o,
  C as p,
  eE as q,
  b as r,
  Pe as s,
  Kb as t,
  $f as u,
  Gb as v,
  $v as w,
};
