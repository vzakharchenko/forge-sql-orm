import { r as Tr, a as Lo, c as No } from "./react-dom-vendor-BO7srUs7.js";
import { g as xo, a as qo, r as Fo } from "./lodash-vendor-COZk6-qw.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Gt = { exports: {} },
  je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr;
function $o() {
  if (xr) return je;
  xr = 1;
  var e = Tr(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var l,
      f = {},
      v = null,
      h = null;
    (u !== void 0 && (v = "" + u),
      c.key !== void 0 && (v = "" + c.key),
      c.ref !== void 0 && (h = c.ref));
    for (l in c) r.call(c, l) && !o.hasOwnProperty(l) && (f[l] = c[l]);
    if (s && s.defaultProps) for (l in ((c = s.defaultProps), c)) f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: f, _owner: i.current };
  }
  return ((je.Fragment = n), (je.jsx = a), (je.jsxs = a), je);
}
var qr;
function Vo() {
  return (qr || ((qr = 1), (Gt.exports = $o())), Gt.exports);
}
var A = Vo(),
  E = Tr();
const vr = xo(E);
var Kt = {},
  hr = function (e, t) {
    return (
      (hr =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      hr(e, t)
    );
  };
function si(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  hr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var gt = function () {
  return (
    (gt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    gt.apply(this, arguments)
  );
};
function ui(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function ci(e, t, n, r) {
  var i = arguments.length,
    o = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return (i > 3 && o && Object.defineProperty(t, n, o), o);
}
function li(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function fi(e, t, n, r, i, o) {
  function a(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (
    var s = r.kind,
      c = s === "getter" ? "get" : s === "setter" ? "set" : "value",
      u = !t && e ? (r.static ? e : e.prototype) : null,
      l = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
      f,
      v = !1,
      h = n.length - 1;
    h >= 0;
    h--
  ) {
    var b = {};
    for (var p in r) b[p] = p === "access" ? {} : r[p];
    for (var p in r.access) b.access[p] = r.access[p];
    b.addInitializer = function (w) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(a(w || null));
    };
    var y = (0, n[h])(s === "accessor" ? { get: l.get, set: l.set } : l[c], b);
    if (s === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object") throw new TypeError("Object expected");
      ((f = a(y.get)) && (l.get = f),
        (f = a(y.set)) && (l.set = f),
        (f = a(y.init)) && i.unshift(f));
    } else (f = a(y)) && (s === "field" ? i.unshift(f) : (l[c] = f));
  }
  (u && Object.defineProperty(u, r.name, l), (v = !0));
}
function di(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function vi(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function hi(e, t, n) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t })
  );
}
function _i(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function pi(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (a) {
          a(o);
        });
  }
  return new (n || (n = Promise))(function (o, a) {
    function s(l) {
      try {
        u(r.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function bi(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    o,
    a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (a.next = s(0)),
    (a.throw = s(1)),
    (a.return = s(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(u) {
    return function (l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (o =
              u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
            !(o = o.call(i, u[1])).done)
        )
          return o;
        switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return (n.label++, { value: u[1], done: !1 });
          case 5:
            (n.label++, (i = u[1]), (u = [0]));
            continue;
          case 7:
            ((u = n.ops.pop()), n.trys.pop());
            continue;
          default:
            if (
              ((o = n.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < o[1]) {
              ((n.label = o[1]), (o = u));
              break;
            }
            if (o && n.label < o[2]) {
              ((n.label = o[2]), n.ops.push(u));
              break;
            }
            (o[2] && n.ops.pop(), n.trys.pop());
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        ((u = [6, l]), (i = 0));
      } finally {
        r = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Mt = Object.create
  ? function (e, t, n, r) {
      r === void 0 && (r = n);
      var i = Object.getOwnPropertyDescriptor(t, n);
      ((!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return t[n];
          },
        }),
        Object.defineProperty(e, r, i));
    }
  : function (e, t, n, r) {
      (r === void 0 && (r = n), (e[r] = t[n]));
    };
function gi(e, t) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Mt(t, e, n);
}
function yt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Mr(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    o = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function yi() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Mr(arguments[t]));
  return e;
}
function mi() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
  return r;
}
function Oi(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Se(e) {
  return this instanceof Se ? ((this.v = e), this) : new Se(e);
}
function wi(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    i,
    o = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", a),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function a(h) {
    return function (b) {
      return Promise.resolve(b).then(h, f);
    };
  }
  function s(h, b) {
    r[h] &&
      ((i[h] = function (p) {
        return new Promise(function (y, w) {
          o.push([h, p, y, w]) > 1 || c(h, p);
        });
      }),
      b && (i[h] = b(i[h])));
  }
  function c(h, b) {
    try {
      u(r[h](b));
    } catch (p) {
      v(o[0][3], p);
    }
  }
  function u(h) {
    h.value instanceof Se ? Promise.resolve(h.value.v).then(l, f) : v(o[0][2], h);
  }
  function l(h) {
    c("next", h);
  }
  function f(h) {
    c("throw", h);
  }
  function v(h, b) {
    (h(b), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function Si(e) {
  var t, n;
  return (
    (t = {}),
    r("next"),
    r("throw", function (i) {
      throw i;
    }),
    r("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(i, o) {
    t[i] = e[i]
      ? function (a) {
          return (n = !n) ? { value: Se(e[i](a)), done: !1 } : o ? o(a) : a;
        }
      : o;
  }
}
function Ai(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof yt == "function" ? yt(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(o) {
    n[o] =
      e[o] &&
      function (a) {
        return new Promise(function (s, c) {
          ((a = e[o](a)), i(s, c, a.done, a.value));
        });
      };
  }
  function i(o, a, s, c) {
    Promise.resolve(c).then(function (u) {
      o({ value: u, done: s });
    }, a);
  }
}
function Ei(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Uo = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  _r = function (e) {
    return (
      (_r =
        Object.getOwnPropertyNames ||
        function (t) {
          var n = [];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[n.length] = r);
          return n;
        }),
      _r(e)
    );
  };
function Pi(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = _r(e), r = 0; r < n.length; r++) n[r] !== "default" && Mt(t, e, n[r]);
  return (Uo(t, e), t);
}
function Ri(e) {
  return e && e.__esModule ? e : { default: e };
}
function ji(e, t, n, r) {
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Ti(e, t, n, r, i) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (r === "a" ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function Mi(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Bi(e, t, n) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var r, i;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((r = t[Symbol.dispose]), n && (i = r));
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    (i &&
      (r = function () {
        try {
          i.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: r, async: n }));
  } else n && e.stack.push({ async: !0 });
  return t;
}
var Go =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, n) {
        var r = new Error(n);
        return ((r.name = "SuppressedError"), (r.error = e), (r.suppressed = t), r);
      };
function Ci(e) {
  function t(o) {
    ((e.error = e.hasError ? new Go(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var n,
    r = 0;
  function i() {
    for (; (n = e.stack.pop()); )
      try {
        if (!n.async && r === 1) return ((r = 0), e.stack.push(n), Promise.resolve().then(i));
        if (n.dispose) {
          var o = n.dispose.call(n.value);
          if (n.async)
            return (
              (r |= 2),
              Promise.resolve(o).then(i, function (a) {
                return (t(a), i());
              })
            );
        } else r |= 1;
      } catch (a) {
        t(a);
      }
    if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function Ii(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (n, r, i, o, a) {
        return r
          ? t
            ? ".jsx"
            : ".js"
          : i && (!o || !a)
            ? n
            : i + o + "." + a.toLowerCase() + "js";
      })
    : e;
}
const Ko = {
    __extends: si,
    __assign: gt,
    __rest: ui,
    __decorate: ci,
    __param: li,
    __esDecorate: fi,
    __runInitializers: di,
    __propKey: vi,
    __setFunctionName: hi,
    __metadata: _i,
    __awaiter: pi,
    __generator: bi,
    __createBinding: Mt,
    __exportStar: gi,
    __values: yt,
    __read: Mr,
    __spread: yi,
    __spreadArrays: mi,
    __spreadArray: Oi,
    __await: Se,
    __asyncGenerator: wi,
    __asyncDelegator: Si,
    __asyncValues: Ai,
    __makeTemplateObject: Ei,
    __importStar: Pi,
    __importDefault: Ri,
    __classPrivateFieldGet: ji,
    __classPrivateFieldSet: Ti,
    __classPrivateFieldIn: Mi,
    __addDisposableResource: Bi,
    __disposeResources: Ci,
    __rewriteRelativeImportExtension: Ii,
  },
  zo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Bi,
        get __assign() {
          return gt;
        },
        __asyncDelegator: Si,
        __asyncGenerator: wi,
        __asyncValues: Ai,
        __await: Se,
        __awaiter: pi,
        __classPrivateFieldGet: ji,
        __classPrivateFieldIn: Mi,
        __classPrivateFieldSet: Ti,
        __createBinding: Mt,
        __decorate: ci,
        __disposeResources: Ci,
        __esDecorate: fi,
        __exportStar: gi,
        __extends: si,
        __generator: bi,
        __importDefault: Ri,
        __importStar: Pi,
        __makeTemplateObject: Ei,
        __metadata: _i,
        __param: li,
        __propKey: vi,
        __read: Mr,
        __rest: ui,
        __rewriteRelativeImportExtension: Ii,
        __runInitializers: di,
        __setFunctionName: hi,
        __spread: yi,
        __spreadArray: Oi,
        __spreadArrays: mi,
        __values: yt,
        default: Ko,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H = qo(zo);
var Te = {},
  Fr;
function Wo() {
  return (
    Fr ||
      ((Fr = 1),
      Object.defineProperty(Te, "__esModule", { value: !0 }),
      (Te.NavigationTarget = void 0),
      (Te.NavigationTarget = {
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
    Te
  );
}
var zt = {},
  Me = {},
  Be = {},
  Ce = {},
  $r;
function F() {
  if ($r) return Ce;
  (($r = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Ce.BridgeAPIError = e), Ce);
}
var Vr;
function P() {
  if (Vr) return Be;
  ((Vr = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.getCallBridge = void 0));
  const e = F();
  function t(r) {
    return !!r?.callBridge;
  }
  const n = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((Be.getCallBridge = n), Be);
}
var Ie = {},
  Ur;
function ki() {
  if (Ur) return Ie;
  ((Ur = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.withRateLimiter = void 0));
  const e = F(),
    t = (n, r, i, o) => {
      let a = Date.now(),
        s = 0;
      return async (...c) => {
        const u = Date.now();
        if ((u - a > i && ((a = u), (s = 0)), s >= r))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((s = s + 1), n(...c));
      };
    };
  return ((Ie.withRateLimiter = t), Ie);
}
var Gr;
function Ho() {
  if (Gr) return Me;
  ((Gr = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.invoke = void 0));
  const e = P(),
    t = F(),
    n = ki(),
    r = (0, e.getCallBridge)(),
    i = (a) => {
      if (a && Object.values(a).some((s) => typeof s == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    o = (a, s) => {
      if (typeof a != "string") throw new t.BridgeAPIError("functionKey must be a string!");
      return (i(s), r("invoke", { functionKey: a, payload: s }));
    };
  return (
    (Me.invoke = (0, n.withRateLimiter)(
      o,
      500,
      1e3 * 25,
      "Resolver calls are rate limited at 500req/25s",
    )),
    Me
  );
}
var Kr;
function Jo() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar(Ho(), e));
      })(zt)),
    zt
  );
}
var Wt = {},
  ke = {},
  Ht = {},
  zr;
function Di() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = P(),
          n = F(),
          r = ki(),
          i = 500,
          o = 25,
          a = 1e3 * o;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((v) => typeof v == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (f) => async (v) => {
            c(v);
            const h = { ...v, invokeType: `ui-${f.toLowerCase()}-fetch` },
              b = await s("invoke", h),
              { success: p, payload: y, error: w } = b ?? {},
              R = { ...(p ? y : w) };
            if (R && R.headers)
              for (const J in R.headers)
                Array.isArray(R.headers[J]) && (R.headers[J] = R.headers[J].join(","));
            return R;
          },
          l = (f) => {
            const v = u(f);
            return (0, r.withRateLimiter)(
              v,
              i,
              a,
              `${f} invocation calls are rate limited at ${i}/${o}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Ht)),
    Ht
  );
}
var Wr;
function Xo() {
  if (Wr) return ke;
  ((Wr = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.invokeRemote = void 0));
  const e = Di(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(n);
  return ((ke.invokeRemote = t), ke);
}
var De = {},
  Hr;
function Yo() {
  if (Hr) return De;
  ((Hr = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.invokeService = void 0));
  const e = Di(),
    t = (n) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(n);
  return ((De.invokeService = t), De);
}
var Jr;
function Zo() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = H;
        (t.__exportStar(Xo(), e), t.__exportStar(Yo(), e));
      })(Wt)),
    Wt
  );
}
var Jt = {},
  Le = {},
  Ne = {},
  Xr;
function Qo() {
  if (Xr) return Ne;
  ((Xr = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.submit = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      if ((await n("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Ne.submit = r), Ne);
}
var xe = {},
  Yr;
function ea() {
  if (Yr) return xe;
  ((Yr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.close = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      try {
        if ((await n("close", i)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((xe.close = r), xe);
}
var qe = {},
  Zr;
function ta() {
  if (Zr) return qe;
  ((Zr = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.open = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = async () => {
      try {
        if ((await n("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((qe.open = r), qe);
}
var Fe = {},
  Qr;
function ra() {
  if (Qr) return Fe;
  ((Qr = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.refresh = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      if ((await n("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Fe.refresh = r), Fe);
}
var $e = {},
  en;
function na() {
  if (en) return $e;
  ((en = 1), Object.defineProperty($e, "__esModule", { value: !0 }), ($e.createHistory = void 0));
  const t = (0, P().getCallBridge)(),
    n = async () => {
      const r = await t("createHistory");
      return (
        r.listen((i) => {
          r.location = i;
        }),
        r
      );
    };
  return (($e.createHistory = n), $e);
}
var Ve = {},
  Xt = {},
  X = {},
  tn;
function Li() {
  return (
    tn ||
      ((tn = 1),
      Object.defineProperty(X, "__esModule", { value: !0 }),
      (X.FORGE_SUPPORTED_LOCALE_CODES = X.I18N_BUNDLE_FOLDER_NAME = X.I18N_INFO_FILE_NAME = void 0),
      (X.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (X.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (X.FORGE_SUPPORTED_LOCALE_CODES = [
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
    X
  );
}
var ue = {},
  rn;
function ia() {
  if (rn) return ue;
  ((rn = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.TranslationsGetter = ue.TranslationGetterError = void 0));
  const e = (r, i) => {
    r.includes(i) || r.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  ue.TranslationGetterError = t;
  class n {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, o = { fallback: !0 }) {
      const a = await this.getI18nInfoConfig(),
        { fallback: s } = o;
      if (!s) {
        let c;
        return (
          a.locales.includes(i) && (c = await this.getTranslationResource(i)),
          { translations: c ?? null, locale: i }
        );
      }
      for (const c of this.getLocaleLookupOrder(i, a)) {
        const u = await this.getTranslationResource(c);
        if (u) return { translations: u, locale: c };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const o = await this.getI18nInfoConfig(),
        a = this.getLocaleLookupOrder(i, o);
      return await Promise.all(
        a.map(async (s) => {
          const c = await this.getTranslationResource(s);
          return { locale: s, translations: c };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(i) {
      let o = this.translationResources.get(i);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, o));
        } catch (a) {
          throw a instanceof t ? a : new t(`Failed to get translation resource for locale: ${i}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (i) {
          throw i instanceof t ? i : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(i, o) {
      const { locales: a, fallback: s } = o,
        c = [i],
        u = s[i];
      return (
        u && Array.isArray(u) && u.length > 0 && c.push(...u),
        e(c, o.fallback.default),
        c.filter((l) => a.includes(l))
      );
    }
  }
  return ((ue.TranslationsGetter = n), ue);
}
var Ue = {},
  Yt = {},
  nn;
function Ni() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const n = H.__importDefault(Fo()),
          r = (o, a, s) => {
            const c = o[s];
            return c ? (0, e.getTranslationValueFromContent)(c, a) : null;
          };
        e.getTranslationValue = r;
        const i = (o, a) => {
          let s = o[a];
          if (!s) {
            const c = a.split(".");
            c.length > 1 && (s = (0, n.default)(o, c, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = i;
      })(Yt)),
    Yt
  );
}
var on;
function oa() {
  if (on) return Ue;
  ((on = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.Translator = void 0));
  const e = Ni();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(r, i) {
      ((this.locale = r), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(r) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(r);
      if (i === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const a = (0, e.getTranslationValueFromContent)(o, r);
          if (a !== null) {
            i = a;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(r, i));
      }
      return i;
    }
  }
  return ((Ue.Translator = t), Ue);
}
var Ge = {},
  an;
function aa() {
  if (an) return Ge;
  ((an = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }), (Ge.ensureLocale = void 0));
  const e = Li(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    n = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    r = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, a) => {
        const [s] = a.split("-");
        return (o[s] || (o[s] = a), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (o) => {
      const a = o.replace("_", "-");
      return t.has(a) ? a : (r[a] ?? n[a] ?? null);
    };
  return ((Ge.ensureLocale = i), Ge);
}
var Zt = {},
  sn;
function sa() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (u) => typeof u == "object" && u !== null && !Array.isArray(u),
          n = (u) => typeof u?.i18n == "string",
          r = (u) => u.startsWith("connect-"),
          i = (u) => u.startsWith("core:"),
          o = (u) => {
            const l = new Set(),
              f = (v, h) =>
                !t(v) || l.has(v)
                  ? []
                  : (l.add(v),
                    Object.entries(v).flatMap(([b, p]) => {
                      const y = [...h, b];
                      return n(p)
                        ? [{ propertyPath: y, key: p.i18n }]
                        : Array.isArray(p)
                          ? p.flatMap((w) => f(w, y))
                          : f(p, y);
                    }));
            return f(u, []);
          },
          a = (u) =>
            Object.entries(u).flatMap(([l, f]) =>
              !r(l) && !i(l) && f && Array.isArray(f) && f.length > 0 ? f.map((v) => [v, l]) : [],
            );
        e.getI18nSupportedModuleEntries = a;
        const s = (u) => {
          const l = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(f[0]);
            for (const { key: h } of v) l.add(h);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const c = (u) => {
          const l = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(f[0]);
            for (const h of v) l.push({ moduleName: f[1], ...h });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(Zt)),
    Zt
  );
}
var Qt = {},
  un;
function ua() {
  return (un || ((un = 1), Object.defineProperty(Qt, "__esModule", { value: !0 })), Qt);
}
var cn;
function xi() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = H;
        (t.__exportStar(Li(), e),
          t.__exportStar(ia(), e),
          t.__exportStar(oa(), e),
          t.__exportStar(aa(), e));
        var n = Ni();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var r = sa();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return r.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return r.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return r.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(ua(), e));
      })(Xt)),
    Xt
  );
}
var ln;
function ca() {
  if (ln) return Ve;
  ((ln = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.getContext = void 0));
  const e = P(),
    t = xi(),
    n = (0, e.getCallBridge)(),
    r = async () => {
      var i;
      const o = await n("getContext"),
        a = o?.locale;
      return (a && (o.locale = (i = (0, t.ensureLocale)(a)) !== null && i !== void 0 ? i : a), o);
    };
  return ((Ve.getContext = r), Ve);
}
var Ke = {},
  fn;
function la() {
  if (fn) return Ke;
  ((fn = 1),
    Object.defineProperty(Ke, "__esModule", { value: !0 }),
    (Ke.changeWindowTitle = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = async (i) => {
      try {
        await n("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Ke.changeWindowTitle = r), Ke);
}
var ze = {},
  dn;
function fa() {
  if (dn) return ze;
  ((dn = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.theme = void 0));
  const t = (0, P().getCallBridge)();
  return ((ze.theme = { enable: () => t("enableTheming") }), ze);
}
var We = {},
  He = {},
  er = {},
  ce = {},
  vn;
function qi() {
  if (vn) return ce;
  ((vn = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.blobToBase64 = ce.base64ToBlob = void 0));
  const e = (n, r) => {
    if (!n) return null;
    const i = n.includes(";base64") ? n.split(",")[1] : n,
      o = atob(i),
      a = new Array(o.length);
    for (let c = 0; c < o.length; c++) a[c] = o.charCodeAt(c);
    const s = new Uint8Array(a);
    return new Blob([s], { type: r });
  };
  ce.base64ToBlob = e;
  const t = (n) =>
    new Promise((r, i) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        r(o.result);
      }),
        (o.onerror = i),
        o.readAsDataURL(n));
    });
  return ((ce.blobToBase64 = t), ce);
}
var hn;
function da() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = qi(),
          n = (u) => {
            if (
              typeof u != "object" ||
              u === null ||
              Object.prototype.toString.call(u) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(u);
            if (l === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(u)
            );
          },
          r = async (u) => ({ data: await (0, t.blobToBase64)(u), type: u.type }),
          i = (u) => (0, t.base64ToBlob)(u.data, u.type),
          o = async (u) => {
            if (u instanceof Blob) return { ...(await r(u)), __isBlobData: !0 };
            if (Array.isArray(u))
              return Promise.all(u.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (u && n(u)) {
              const l = await Promise.all(
                Object.entries(u).map(async ([f, v]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(v),
                ]),
              );
              return Object.fromEntries(l);
            }
            return u;
          };
        e.serialiseBlobsInPayload = o;
        const a = (u) => {
          if (u && n(u) && "__isBlobData" in u) {
            const l = u;
            return i({ data: l.data, type: l.type });
          }
          if (Array.isArray(u)) return u.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (u && n(u)) {
            const l = {};
            for (const [f, v] of Object.entries(u)) l[f] = (0, e.deserialiseBlobsInPayload)(v);
            return l;
          }
          return u;
        };
        e.deserialiseBlobsInPayload = a;
        const s = (u) =>
          u instanceof Blob
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsBlobs)(l))
              : u && n(u)
                ? Object.values(u).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = s;
        const c = (u) =>
          u && n(u) && "__isBlobData" in u
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsSerialisedBlobs)(l))
              : u && n(u)
                ? Object.values(u).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(er)),
    er
  );
}
var _n;
function Fi() {
  if (_n) return He;
  ((_n = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.events = void 0));
  const e = P(),
    t = da(),
    n = (0, e.getCallBridge)(),
    r = async (o, a) => {
      let s = a;
      return (
        (0, t.containsBlobs)(a) && (s = await (0, t.serialiseBlobsInPayload)(a)),
        n("emit", { event: o, payload: s })
      );
    },
    i = (o, a) =>
      n("on", {
        event: o,
        callback: (c) => {
          let u = c;
          return (
            (0, t.containsSerialisedBlobs)(c) && (u = (0, t.deserialiseBlobsInPayload)(c)),
            a(u)
          );
        },
      });
  return ((He.events = { emit: r, on: i }), He);
}
var pn;
function va() {
  if (pn) return We;
  ((pn = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.emitReadyEvent = void 0));
  const e = Fi(),
    t = $i(),
    n = "EXTENSION_READY",
    r = async () => {
      const i = await t.view.getContext();
      await e.events.emit(n, { localId: i.localId });
    };
  return ((We.emitReadyEvent = r), We);
}
var bn;
function $i() {
  if (bn) return Le;
  ((bn = 1), Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.view = void 0));
  const e = Qo(),
    t = ea(),
    n = ta(),
    r = ra(),
    i = na(),
    o = ca(),
    a = la(),
    s = fa(),
    c = va();
  return (
    (Le.view = {
      submit: e.submit,
      close: t.close,
      open: n.open,
      refresh: r.refresh,
      createHistory: i.createHistory,
      getContext: o.getContext,
      theme: s.theme,
      changeWindowTitle: a.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    Le
  );
}
var gn;
function Vi() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar($i(), e));
      })(Jt)),
    Jt
  );
}
var tr = {},
  Je = {},
  yn;
function ha() {
  if (yn) return Je;
  ((yn = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je.router = void 0));
  const t = (0, P().getCallBridge)(),
    n = async (a) => {
      if (!a?.target) throw new Error("target is required for getUrl");
      const s = await t("getUrl", a);
      if (!s) throw new Error("Failed to get URL");
      try {
        return new URL(s);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${s} (${c})`);
      }
    },
    r = (a) => {
      if (typeof a == "string") return t("navigate", { url: a, type: "same-tab" });
      if (!a?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...a, type: "same-tab" });
    },
    i = (a) => {
      if (typeof a == "string") return t("navigate", { url: a, type: "new-tab" });
      if (!a?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...a, type: "new-tab" });
    },
    o = async () => t("reload");
  return ((Je.router = { getUrl: n, navigate: r, open: i, reload: o }), Je);
}
var mn;
function _a() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar(ha(), e));
      })(tr)),
    tr
  );
}
var rr = {},
  Xe = {},
  On;
function pa() {
  if (On) return Xe;
  ((On = 1), Object.defineProperty(Xe, "__esModule", { value: !0 }), (Xe.Modal = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = () => {};
  class i {
    constructor(a) {
      var s, c;
      ((this.resource = a?.resource || null),
        (this.onClose = a?.onClose || r),
        (this.size = a?.size || "medium"),
        (this.context = a?.context || {}),
        (this.closeOnEscape = (s = a?.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick =
          (c = a?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
    }
    async open() {
      try {
        if (
          (await n("openModal", {
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
  return ((Xe.Modal = i), Xe);
}
var wn;
function ba() {
  return (
    wn ||
      ((wn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar(pa(), e));
      })(rr)),
    rr
  );
}
var Y = {},
  Ye = {},
  Sn;
function ga() {
  if (Sn) return Ye;
  ((Sn = 1), Object.defineProperty(Ye, "__esModule", { value: !0 }), (Ye.productFetchApi = void 0));
  const e = qi(),
    t = async (i) => {
      const o = {};
      for (const [a, s] of i.entries())
        if (a === "file") {
          const c = s.name,
            u = s.type;
          ((o.file = await (0, e.blobToBase64)(s)), (o.__fileName = c), (o.__fileType = u));
        } else o[a] = s;
      return JSON.stringify(o);
    },
    n = async (i) => {
      const o = i?.body instanceof FormData,
        a = o ? await t(i?.body) : i?.body,
        s = new Request("", { body: a, method: i?.method, headers: i?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: o,
      };
    },
    r = (i) => {
      const o = async (a, s, c) => {
        const { body: u, headers: l, isMultipartFormData: f } = await n(c);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const v = {
            product: a,
            restPath: s,
            fetchRequestInit: { ...c, body: u, headers: [...l.entries()] },
            isMultipartFormData: f,
          },
          {
            body: h,
            headers: b,
            statusText: p,
            status: y,
            isAttachment: w,
          } = await i("fetchProduct", v),
          R = w ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
        return new Response(R || null, { headers: b, status: y, statusText: p });
      };
      return {
        requestConfluence: (a, s) => o("confluence", a, s),
        requestJira: (a, s) => o("jira", a, s),
        requestBitbucket: (a, s) => o("bitbucket", a, s),
      };
    };
  return ((Ye.productFetchApi = r), Ye);
}
var An;
function ya() {
  if (An) return Y;
  An = 1;
  var e;
  (Object.defineProperty(Y, "__esModule", { value: !0 }),
    (Y.requestBitbucket = Y.requestJira = Y.requestConfluence = void 0));
  const t = P();
  return (
    (e = (0, ga().productFetchApi)((0, t.getCallBridge)())),
    (Y.requestConfluence = e.requestConfluence),
    (Y.requestJira = e.requestJira),
    (Y.requestBitbucket = e.requestBitbucket),
    Y
  );
}
var nr = {},
  Ze = {},
  En;
function ma() {
  if (En) return Ze;
  ((En = 1), Object.defineProperty(Ze, "__esModule", { value: !0 }), (Ze.showFlag = void 0));
  const e = P(),
    t = F(),
    n = (0, e.getCallBridge)(),
    r = (i) => {
      var o;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const a = n("showFlag", { ...i, type: (o = i.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await a, n("closeFlag", { id: i.id })) };
    };
  return ((Ze.showFlag = r), Ze);
}
var Pn;
function Oa() {
  return (
    Pn ||
      ((Pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = ma();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(nr)),
    nr
  );
}
var ir = {},
  Rn;
function wa() {
  return (
    Rn ||
      ((Rn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar(Fi(), e));
      })(ir)),
    ir
  );
}
var or = {},
  Qe = {},
  jn;
function Sa() {
  if (jn) return Qe;
  ((jn = 1), Object.defineProperty(Qe, "__esModule", { value: !0 }), (Qe.__realtime = void 0));
  const t = (0, P().getCallBridge)(),
    n = (i, o) => t("publishRealtimeChannel", { channelName: i, eventPayload: o }),
    r = (i, o) => t("subscribeRealtimeChannel", { channelName: i, onEvent: o });
  return ((Qe.__realtime = { publish: n, subscribe: r }), Qe);
}
var Tn;
function Aa() {
  return (
    Tn ||
      ((Tn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), H.__exportStar(Sa(), e));
      })(or)),
    or
  );
}
var Z = {},
  Mn;
function Ea() {
  if (Mn) return Z;
  ((Mn = 1),
    Object.defineProperty(Z, "__esModule", { value: !0 }),
    (Z.createTranslationFunction = Z.getTranslations = Z.resetTranslationsCache = void 0));
  const e = xi(),
    t = Vi(),
    n = {
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
    r = new e.TranslationsGetter(n),
    i = () => {
      r.reset();
    };
  Z.resetTranslationsCache = i;
  const o = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await r.getTranslations(u, c));
  };
  Z.getTranslations = o;
  const a = async (s = null) => {
    let c = s;
    c || (c = (await t.view.getContext()).locale);
    const u = new e.Translator(c, r);
    return (
      await u.init(),
      (l, f) => {
        var v, h;
        return (h = (v = u.translate(l)) !== null && v !== void 0 ? v : f) !== null && h !== void 0
          ? h
          : l;
      }
    );
  };
  return ((Z.createTranslationFunction = a), Z);
}
var Bn;
function Pa() {
  return (
    Bn ||
      ((Bn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = H;
        var n = Wo();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          t.__exportStar(Jo(), e),
          t.__exportStar(Zo(), e),
          t.__exportStar(Vi(), e),
          t.__exportStar(_a(), e),
          t.__exportStar(ba(), e),
          t.__exportStar(ya(), e),
          t.__exportStar(Oa(), e),
          t.__exportStar(wa(), e),
          t.__exportStar(Aa(), e),
          (e.i18n = t.__importStar(Ea())));
      })(Kt)),
    Kt
  );
}
var mt = Pa();
function g(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (n.length ? " " + n.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var Ra = {};
function Bt() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Ra;
}
var Ui = Object.assign,
  Ot = Object.getOwnPropertyDescriptor,
  G = Object.defineProperty,
  Ct = Object.prototype,
  pr = [];
Object.freeze(pr);
var Gi = {};
Object.freeze(Gi);
var ja = typeof Proxy < "u",
  Ta = Object.toString();
function Ki() {
  ja || g("Proxy not available");
}
function zi(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var me = function () {};
function x(e) {
  return typeof e == "function";
}
function fe(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function It(e) {
  return e !== null && typeof e == "object";
}
function oe(e) {
  if (!It(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === Ta;
}
function Wi(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function kt(e, t, n) {
  G(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Hi(e, t, n) {
  G(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function _e(e, t) {
  var n = "isMobX" + e;
  return (
    (t.prototype[n] = !0),
    function (r) {
      return It(r) && r[n] === !0;
    }
  );
}
function Ee(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Ma(e) {
  var t = Object.getPrototypeOf(e),
    n = Object.getPrototypeOf(t),
    r = Object.getPrototypeOf(n);
  return r === null;
}
function Q(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Ji = typeof Object.getOwnPropertySymbols < "u";
function Ba(e) {
  var t = Object.keys(e);
  if (!Ji) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (r) {
          return Ct.propertyIsEnumerable.call(e, r);
        }),
      )
    : t;
}
var Dt =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Ji
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Xi(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function te(e, t) {
  return Ct.hasOwnProperty.call(e, t);
}
var Ca =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      Dt(t).forEach(function (r) {
        n[r] = Ot(t, r);
      }),
      n
    );
  };
function T(e, t) {
  return !!(e & t);
}
function M(e, t, n) {
  return (n ? (e |= t) : (e &= ~t), e);
}
function Cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ia(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Da(r.key), r));
  }
}
function Pe(e, t, n) {
  return (t && Ia(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Oe(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = La(e)) || t) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(null, arguments)
  );
}
function Yi(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), br(e, t));
}
function br(e, t) {
  return (
    (br = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return ((n.__proto__ = r), n);
        }),
    br(e, t)
  );
}
function ka(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Da(e) {
  var t = ka(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function La(e, t) {
  if (e) {
    if (typeof e == "string") return Cn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Cn(e, t)
          : void 0
    );
  }
}
var U = Symbol("mobx-stored-annotations");
function K(e) {
  function t(n, r) {
    if (ut(r)) return e.decorate_20223_(n, r);
    st(n, r, e);
  }
  return Object.assign(t, e);
}
function st(e, t, n) {
  (te(e, U) || kt(e, U, de({}, e[U])), Ua(n) || (e[U][t] = n));
}
function Na(e) {
  return (te(e, U) || kt(e, U, de({}, e[U])), e[U]);
}
function ut(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var _ = Symbol("mobx administration"),
  ae = (function () {
    function e(n) {
      (n === void 0 && (n = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = m.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = n));
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.reportObserved = function () {
        return ho(this);
      }),
      (t.reportChanged = function () {
        (k(), _o(this), D());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Pe(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return T(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return T(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return T(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
ae.isBeingObservedMask_ = 1;
ae.isPendingUnobservationMask_ = 2;
ae.diffValueMask_ = 4;
var Br = _e("Atom", ae);
function Zi(e, t, n) {
  (t === void 0 && (t = me), n === void 0 && (n = me));
  var r = new ae(e);
  return (t !== me && Hs(r, t), n !== me && mo(r, n), r);
}
function xa(e, t) {
  return Co(e, t);
}
function qa(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var wt = { structural: xa, default: qa };
function ve(e, t, n) {
  return Ao(e)
    ? e
    : Array.isArray(e)
      ? S.array(e, { name: n })
      : oe(e)
        ? S.object(e, void 0, { name: n })
        : Ee(e)
          ? S.map(e, { name: n })
          : Q(e)
            ? S.set(e, { name: n })
            : typeof e == "function" && !it(e) && !ot(e)
              ? Wi(e)
                ? Ae(e)
                : nt(n, e)
              : e;
}
function Fa(e, t, n) {
  if (e == null || Ut(e) || Vt(e) || be(e) || V(e)) return e;
  if (Array.isArray(e)) return S.array(e, { name: n, deep: !1 });
  if (oe(e)) return S.object(e, void 0, { name: n, deep: !1 });
  if (Ee(e)) return S.map(e, { name: n, deep: !1 });
  if (Q(e)) return S.set(e, { name: n, deep: !1 });
}
function Lt(e) {
  return e;
}
function $a(e, t) {
  return Co(e, t) ? t : e;
}
var Va = "override";
function Ua(e) {
  return e.annotationType_ === Va;
}
function ct(e, t) {
  return { annotationType_: e, options_: t, make_: Ga, extend_: Ka, decorate_20223_: za };
}
function Ga(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (it(n.value)) return 1;
  var o = Qi(e, this, t, n, !1);
  return (G(r, t, o), 2);
}
function Ka(e, t, n, r) {
  var i = Qi(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function za(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    o = this,
    a = function (u) {
      var l, f, v, h;
      return he(
        (l = (f = o.options_) == null ? void 0 : f.name) != null ? l : r.toString(),
        u,
        (v = (h = o.options_) == null ? void 0 : h.autoAction) != null ? v : !1,
      );
    };
  if (n == "field")
    return function (c) {
      var u,
        l = c;
      return (
        it(l) || (l = a(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (n == "method") {
    var s;
    return (
      it(e) || (e = a(e)),
      (s = this.options_) != null &&
        s.bound &&
        i(function () {
          var c = this,
            u = c[r].bind(c);
          ((u.isMobxAction = !0), (c[r] = u));
        }),
      e
    );
  }
  g(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(r) +
      "' (kind: " +
      n +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function Wa(e, t, n, r) {
  (t.annotationType_, r.value);
}
function Qi(e, t, n, r, i) {
  var o, a, s, c, u, l, f;
  (i === void 0 && (i = d.safeDescriptors), Wa(e, t, n, r));
  var v = r.value;
  if ((o = t.options_) != null && o.bound) {
    var h;
    v = v.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: he(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : n.toString(),
      v,
      (c = (u = t.options_) == null ? void 0 : u.autoAction) != null ? c : !1,
      (l = t.options_) != null && l.bound ? ((f = e.proxy_) != null ? f : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function eo(e, t) {
  return { annotationType_: e, options_: t, make_: Ha, extend_: Ja, decorate_20223_: Xa };
}
function Ha(e, t, n, r) {
  var i;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!te(e.target_, t) || !ot(e.target_[t])) &&
    this.extend_(e, t, n, !1) === null
  )
    return 0;
  if (ot(n.value)) return 1;
  var o = to(e, this, t, n, !1, !1);
  return (G(r, t, o), 2);
}
function Ja(e, t, n, r) {
  var i,
    o = to(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function Xa(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    ot(e) || (e = Ae(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var o = this,
          a = o[r].bind(o);
        ((a.isMobXFlow = !0), (o[r] = a));
      }),
    e
  );
}
function Ya(e, t, n, r) {
  (t.annotationType_, r.value);
}
function to(e, t, n, r, i, o) {
  (o === void 0 && (o = d.safeDescriptors), Ya(e, t, n, r));
  var a = r.value;
  if ((ot(a) || (a = Ae(a)), i)) {
    var s;
    ((a = a.bind((s = e.proxy_) != null ? s : e.target_)), (a.isMobXFlow = !0));
  }
  return { value: a, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Cr(e, t) {
  return { annotationType_: e, options_: t, make_: Za, extend_: Qa, decorate_20223_: es };
}
function Za(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Qa(e, t, n, r) {
  return (
    ts(e, this, t, n),
    e.defineComputedProperty_(t, de({}, this.options_, { get: n.get, set: n.set }), r)
  );
}
function es(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = Re(this)[_],
        a = de({}, n.options_, { get: e, context: this });
      (a.name || (a.name = "ObservableObject." + r.toString()), o.values_.set(r, new q(a)));
    }),
    function () {
      return this[_].getObservablePropValue_(r);
    }
  );
}
function ts(e, t, n, r) {
  (t.annotationType_, r.get);
}
function Nt(e, t) {
  return { annotationType_: e, options_: t, make_: rs, extend_: ns, decorate_20223_: is };
}
function rs(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function ns(e, t, n, r) {
  var i, o;
  return (
    os(e, this),
    e.defineObservableProperty_(
      t,
      n.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : ve,
      r,
    )
  );
}
function is(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    o = new WeakSet();
  function a(s, c) {
    var u,
      l,
      f = Re(s)[_],
      v = new le(
        c,
        (u = (l = n.options_) == null ? void 0 : l.enhancer) != null ? u : ve,
        "ObservableObject." + i.toString(),
        !1,
      );
    (f.values_.set(i, v), o.add(s));
  }
  if (r == "accessor")
    return {
      get: function () {
        return (o.has(this) || a(this, e.get.call(this)), this[_].getObservablePropValue_(i));
      },
      set: function (c) {
        return (o.has(this) || a(this, c), this[_].setObservablePropValue_(i, c));
      },
      init: function (c) {
        return (o.has(this) || a(this, c), c);
      },
    };
}
function os(e, t, n, r) {
  t.annotationType_;
}
var as = "true",
  ss = ro();
function ro(e) {
  return { annotationType_: as, options_: e, make_: us, extend_: cs, decorate_20223_: ls };
}
function us(e, t, n, r) {
  var i, o;
  if (n.get) return xt.make_(e, t, n, r);
  if (n.set) {
    var a = he(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: d.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (G(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var s;
    if (Wi(n.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? Ae.bound : Ae;
      return u.make_(e, t, n, r);
    }
    var l = (s = this.options_) != null && s.autoBind ? nt.bound : nt;
    return l.make_(e, t, n, r);
  }
  var f = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? S.ref : S;
  if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return f.make_(e, t, n, r);
}
function cs(e, t, n, r) {
  var i, o;
  if (n.get) return xt.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(
      t,
      { configurable: d.safeDescriptors ? e.isPlainObject_ : !0, set: he(t.toString(), n.set) },
      r,
    );
  if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? S.ref : S;
  return s.extend_(e, t, n, r);
}
function ls(e, t) {
  g("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var fs = "observable",
  ds = "observable.ref",
  vs = "observable.shallow",
  hs = "observable.struct",
  no = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(no);
function dt(e) {
  return e || no;
}
var gr = Nt(fs),
  _s = Nt(ds, { enhancer: Lt }),
  ps = Nt(vs, { enhancer: Fa }),
  bs = Nt(hs, { enhancer: $a }),
  io = K(gr);
function vt(e) {
  return e.deep === !0 ? ve : e.deep === !1 ? Lt : ys(e.defaultDecorator);
}
function gs(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : ro(e)) : void 0;
}
function ys(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : ve;
}
function oo(e, t, n) {
  if (ut(t)) return gr.decorate_20223_(e, t);
  if (fe(t)) {
    st(e, t, gr);
    return;
  }
  return Ao(e)
    ? e
    : oe(e)
      ? S.object(e, t, n)
      : Array.isArray(e)
        ? S.array(e, t)
        : Ee(e)
          ? S.map(e, t)
          : Q(e)
            ? S.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : S.box(e, t);
}
Ui(oo, io);
var ms = {
    box: function (t, n) {
      var r = dt(n);
      return new le(t, vt(r), r.name, !0, r.equals);
    },
    array: function (t, n) {
      var r = dt(n);
      return (d.useProxies === !1 || r.proxy === !1 ? yu : cu)(t, vt(r), r.name);
    },
    map: function (t, n) {
      var r = dt(n);
      return new Po(t, vt(r), r.name);
    },
    set: function (t, n) {
      var r = dt(n);
      return new Ro(t, vt(r), r.name);
    },
    object: function (t, n, r) {
      return ge(function () {
        return Zs(d.useProxies === !1 || r?.proxy === !1 ? Re({}, r) : ou({}, r), t, n);
      });
    },
    ref: K(_s),
    shallow: K(ps),
    deep: io,
    struct: K(bs),
  },
  S = Ui(oo, ms),
  ao = "computed",
  Os = "computed.struct",
  yr = Cr(ao),
  ws = Cr(Os, { equals: wt.structural }),
  xt = function (t, n) {
    if (ut(n)) return yr.decorate_20223_(t, n);
    if (fe(n)) return st(t, n, yr);
    if (oe(t)) return K(Cr(ao, t));
    var r = oe(n) ? n : {};
    return ((r.get = t), r.name || (r.name = t.name || ""), new q(r));
  };
Object.assign(xt, yr);
xt.struct = K(ws);
var In,
  kn,
  St = 0,
  Ss = 1,
  As =
    (In = (kn = Ot(function () {}, "name")) == null ? void 0 : kn.configurable) != null ? In : !1,
  Dn = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function he(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Es(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    As && ((Dn.value = e), G(i, "name", Dn)),
    i
  );
}
function Es(e, t, n, r, i) {
  var o = Ps(e, t);
  try {
    return n.apply(r, i);
  } catch (a) {
    throw ((o.error_ = a), a);
  } finally {
    Rs(o);
  }
}
function Ps(e, t, n, r) {
  var i = !1,
    o = 0,
    a = d.trackingDerivation,
    s = !t || !a;
  k();
  var c = d.allowStateChanges;
  s && (pe(), (c = qt(!0)));
  var u = Ir(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: a,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: i,
      startTime_: o,
      actionId_: Ss++,
      parentActionId_: St,
    };
  return ((St = l.actionId_), l);
}
function Rs(e) {
  (St !== e.actionId_ && g(30),
    (St = e.parentActionId_),
    e.error_ !== void 0 && (d.suppressReactionErrors = !0),
    Ft(e.prevAllowStateChanges_),
    tt(e.prevAllowStateReads_),
    D(),
    e.runAsAction_ && re(e.prevDerivation_),
    (d.suppressReactionErrors = !1));
}
function js(e, t) {
  var n = qt(e);
  try {
    return t();
  } finally {
    Ft(n);
  }
}
function qt(e) {
  var t = d.allowStateChanges;
  return ((d.allowStateChanges = e), t);
}
function Ft(e) {
  d.allowStateChanges = e;
}
var le = (function (e) {
    function t(r, i, o, a, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = wt.default),
        (c = e.call(this, o) || this),
        (c.enhancer = void 0),
        (c.name_ = void 0),
        (c.equals = void 0),
        (c.hasUnreportedChange_ = !1),
        (c.interceptors_ = void 0),
        (c.changeListeners_ = void 0),
        (c.value_ = void 0),
        (c.dehancer = void 0),
        (c.enhancer = i),
        (c.name_ = o),
        (c.equals = s),
        (c.value_ = i(r, void 0, o)),
        c
      );
    }
    Yi(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (n.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== d.UNCHANGED && this.setNewValue_(i));
      }),
      (n.prepareNewValue_ = function (i) {
        if (C(this)) {
          var o = I(this, { object: this, type: z, newValue: i });
          if (!o) return d.UNCHANGED;
          i = o.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? d.UNCHANGED : i
        );
      }),
      (n.setNewValue_ = function (i) {
        var o = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          L(this) && N(this, { type: z, object: this, newValue: i, oldValue: o }));
      }),
      (n.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (n.intercept_ = function (i) {
        return lt(this, i);
      }),
      (n.observe_ = function (i, o) {
        return (
          o &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: z,
              newValue: this.value_,
              oldValue: void 0,
            }),
          ft(this, i)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (n.valueOf = function () {
        return Xi(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(ae),
  q = (function () {
    function e(n) {
      ((this.dependenciesState_ = m.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = m.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Et(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = At.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        n.get || g(31),
        (this.derivation = n.get),
        (this.name_ = n.name || "ComputedValue"),
        n.set && (this.setter_ = he("ComputedValue-setter", n.set)),
        (this.equals_ = n.equals || (n.compareStructural || n.struct ? wt.structural : wt.default)),
        (this.scope_ = n.context),
        (this.requiresReaction_ = n.requiresReaction),
        (this.keepAlive_ = !!n.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Is(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && g(32, this.name_, this.derivation),
          d.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          mr(this) &&
            (this.warnAboutUntrackedRead_(), k(), (this.value_ = this.computeValue_(!1)), D());
        else if ((ho(this), mr(this))) {
          var r = d.trackingContext;
          (this.keepAlive_ && !r && (d.trackingContext = this),
            this.trackAndCompute() && Cs(this),
            (d.trackingContext = r));
        }
        var i = this.value_;
        if (_t(i)) throw i.cause;
        return i;
      }),
      (t.set = function (r) {
        if (this.setter_) {
          (this.isRunningSetter && g(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, r);
          } finally {
            this.isRunningSetter = !1;
          }
        } else g(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var r = this.value_,
          i = this.dependenciesState_ === m.NOT_TRACKING_,
          o = this.computeValue_(!0),
          a = i || _t(r) || _t(o) || !this.equals_(r, o);
        return (a && (this.value_ = o), a);
      }),
      (t.computeValue_ = function (r) {
        this.isComputing = !0;
        var i = qt(!1),
          o;
        if (r) o = so(this, this.derivation, this.scope_);
        else if (d.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (a) {
            o = new Et(a);
          }
        return (Ft(i), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Or(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (r, i) {
        var o = this,
          a = !0,
          s = void 0;
        return Us(function () {
          var c = o.get();
          if (!a || i) {
            var u = pe();
            (r({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: z,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              re(u));
          }
          ((a = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Xi(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Pe(e, [
        {
          key: "isComputing",
          get: function () {
            return T(this.flags_, e.isComputingMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isComputingMask_, r);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return T(this.flags_, e.isRunningSetterMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isRunningSetterMask_, r);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return T(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return T(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return T(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = M(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
q.isComputingMask_ = 1;
q.isRunningSetterMask_ = 2;
q.isBeingObservedMask_ = 4;
q.isPendingUnobservationMask_ = 8;
q.diffValueMask_ = 16;
var $t = _e("ComputedValue", q),
  m;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(m || (m = {}));
var At;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(At || (At = {}));
var Et = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function _t(e) {
  return e instanceof Et;
}
function mr(e) {
  switch (e.dependenciesState_) {
    case m.UP_TO_DATE_:
      return !1;
    case m.NOT_TRACKING_:
    case m.STALE_:
      return !0;
    case m.POSSIBLY_STALE_: {
      for (var t = Ir(!0), n = pe(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
        var a = r[o];
        if ($t(a)) {
          if (d.disableErrorBoundaries) a.get();
          else
            try {
              a.get();
            } catch {
              return (re(n), tt(t), !0);
            }
          if (e.dependenciesState_ === m.STALE_) return (re(n), tt(t), !0);
        }
      }
      return (co(e), re(n), tt(t), !1);
    }
  }
}
function so(e, t, n) {
  var r = Ir(!0);
  (co(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++d.runId));
  var i = d.trackingDerivation;
  ((d.trackingDerivation = e), d.inBatch++);
  var o;
  if (d.disableErrorBoundaries === !0) o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (a) {
      o = new Et(a);
    }
  return (d.inBatch--, (d.trackingDerivation = i), Ts(e), tt(r), o);
}
function Ts(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = m.UP_TO_DATE_,
      i = 0,
      o = e.unboundDepsCount_,
      a = 0;
    a < o;
    a++
  ) {
    var s = n[a];
    (s.diffValue === 0 && ((s.diffValue = 1), i !== a && (n[i] = s), i++),
      s.dependenciesState_ > r && (r = s.dependenciesState_));
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var c = t[o];
    (c.diffValue === 0 && fo(c, e), (c.diffValue = 0));
  }
  for (; i--; ) {
    var u = n[i];
    u.diffValue === 1 && ((u.diffValue = 0), Bs(u, e));
  }
  r !== m.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function Or(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) fo(t[n], e);
  e.dependenciesState_ = m.NOT_TRACKING_;
}
function uo(e) {
  var t = pe();
  try {
    return e();
  } finally {
    re(t);
  }
}
function pe() {
  var e = d.trackingDerivation;
  return ((d.trackingDerivation = null), e);
}
function re(e) {
  d.trackingDerivation = e;
}
function Ir(e) {
  var t = d.allowStateReads;
  return ((d.allowStateReads = e), t);
}
function tt(e) {
  d.allowStateReads = e;
}
function co(e) {
  if (e.dependenciesState_ !== m.UP_TO_DATE_) {
    e.dependenciesState_ = m.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = m.UP_TO_DATE_;
  }
}
var pt = function () {
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
  bt = !0,
  lo = !1,
  d = (function () {
    var e = Bt();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (bt = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new pt().version && (bt = !1),
      bt
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new pt()))
        : (setTimeout(function () {
            lo || g(35);
          }, 1),
          new pt())
    );
  })();
function Ms() {
  if (((d.pendingReactions.length || d.inBatch || d.isRunningReactions) && g(36), (lo = !0), bt)) {
    var e = Bt();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (d = new pt()));
  }
}
function Bs(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function fo(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && vo(e));
}
function vo(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), d.pendingUnobservations.push(e));
}
function k() {
  d.inBatch++;
}
function D() {
  if (--d.inBatch === 0) {
    po();
    for (var e = d.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      ((n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof q && n.suspend_()));
    }
    d.pendingUnobservations = [];
  }
}
function ho(e) {
  var t = d.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && d.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && d.inBatch > 0 && vo(e), !1);
}
function _o(e) {
  e.lowestObserverState_ !== m.STALE_ &&
    ((e.lowestObserverState_ = m.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === m.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = m.STALE_));
    }));
}
function Cs(e) {
  e.lowestObserverState_ !== m.STALE_ &&
    ((e.lowestObserverState_ = m.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === m.POSSIBLY_STALE_
        ? (t.dependenciesState_ = m.STALE_)
        : t.dependenciesState_ === m.UP_TO_DATE_ && (e.lowestObserverState_ = m.UP_TO_DATE_);
    }));
}
function Is(e) {
  e.lowestObserverState_ === m.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = m.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === m.UP_TO_DATE_ &&
        ((t.dependenciesState_ = m.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var W = (function () {
  function e(n, r, i, o) {
    (n === void 0 && (n = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = m.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = At.NONE),
      (this.name_ = n),
      (this.onInvalidate_ = r),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = o));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), d.pendingReactions.push(this), po());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (k(), (this.isScheduled = !1));
        var r = d.trackingContext;
        if (((d.trackingContext = this), mr(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((d.trackingContext = r), D());
      }
    }),
    (t.track = function (r) {
      if (!this.isDisposed) {
        (k(), (this.isRunning = !0));
        var i = d.trackingContext;
        d.trackingContext = this;
        var o = so(this, r, void 0);
        ((d.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Or(this),
          _t(o) && this.reportExceptionInDerivation_(o.cause),
          D());
      }
    }),
    (t.reportExceptionInDerivation_ = function (r) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(r, this);
        return;
      }
      if (d.disableErrorBoundaries) throw r;
      var o = "[mobx] uncaught error in '" + this + "'";
      (d.suppressReactionErrors || console.error(o, r),
        d.globalReactionErrorHandlers.forEach(function (a) {
          return a(r, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (k(), Or(this), D()));
    }),
    (t.getDisposer_ = function (r) {
      var i = this,
        o = function a() {
          (i.dispose(),
            r == null || r.removeEventListener == null || r.removeEventListener("abort", a));
        };
      return (
        r == null || r.addEventListener == null || r.addEventListener("abort", o),
        (o[_] = this),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (r) {}),
    Pe(e, [
      {
        key: "isDisposed",
        get: function () {
          return T(this.flags_, e.isDisposedMask_);
        },
        set: function (r) {
          this.flags_ = M(this.flags_, e.isDisposedMask_, r);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return T(this.flags_, e.isScheduledMask_);
        },
        set: function (r) {
          this.flags_ = M(this.flags_, e.isScheduledMask_, r);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return T(this.flags_, e.isTrackPendingMask_);
        },
        set: function (r) {
          this.flags_ = M(this.flags_, e.isTrackPendingMask_, r);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return T(this.flags_, e.isRunningMask_);
        },
        set: function (r) {
          this.flags_ = M(this.flags_, e.isRunningMask_, r);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return T(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (r) {
          this.flags_ = M(this.flags_, e.diffValueMask_, r === 1);
        },
      },
    ])
  );
})();
W.isDisposedMask_ = 1;
W.isScheduledMask_ = 2;
W.isTrackPendingMask_ = 4;
W.isRunningMask_ = 8;
W.diffValueMask_ = 16;
var ks = 100,
  wr = function (t) {
    return t();
  };
function po() {
  d.inBatch > 0 || d.isRunningReactions || wr(Ds);
}
function Ds() {
  d.isRunningReactions = !0;
  for (var e = d.pendingReactions, t = 0; e.length > 0; ) {
    ++t === ks && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
  }
  d.isRunningReactions = !1;
}
var Pt = _e("Reaction", W);
function Ls(e) {
  var t = wr;
  wr = function (r) {
    return e(function () {
      return t(r);
    });
  };
}
function rt() {
  return !1;
}
function Ns(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var bo = "action",
  xs = "action.bound",
  go = "autoAction",
  qs = "autoAction.bound",
  Fs = "<unnamed action>",
  Sr = ct(bo),
  $s = ct(xs, { bound: !0 }),
  Ar = ct(go, { autoAction: !0 }),
  Vs = ct(qs, { autoAction: !0, bound: !0 });
function yo(e) {
  var t = function (r, i) {
    if (x(r)) return he(r.name || Fs, r, e);
    if (x(i)) return he(r, i, e);
    if (ut(i)) return (e ? Ar : Sr).decorate_20223_(r, i);
    if (fe(i)) return st(r, i, e ? Ar : Sr);
    if (fe(r)) return K(ct(e ? go : bo, { name: r, autoAction: e }));
  };
  return t;
}
var we = yo(!1);
Object.assign(we, Sr);
var nt = yo(!0);
Object.assign(nt, Ar);
we.bound = K($s);
nt.bound = K(Vs);
function it(e) {
  return x(e) && e.isMobxAction === !0;
}
function Us(e, t) {
  var n, r, i, o;
  t === void 0 && (t = Gi);
  var a = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new W(
      a,
      function () {
        this.track(f);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Ks(t),
      l = !1;
    c = new W(
      a,
      function () {
        l ||
          ((l = !0),
          u(function () {
            ((l = !1), c.isDisposed || c.track(f));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function f() {
    e(c);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || c.schedule_(),
    c.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Gs = function (t) {
  return t();
};
function Ks(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Gs;
}
var zs = "onBO",
  Ws = "onBUO";
function Hs(e, t, n) {
  return Oo(zs, e, t, n);
}
function mo(e, t, n) {
  return Oo(Ws, e, t, n);
}
function Oo(e, t, n, r) {
  var i = Tt(t),
    o = x(r) ? r : n,
    a = e + "L";
  return (
    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
    function () {
      var s = i[a];
      s && (s.delete(o), s.size === 0 && delete i[a]);
    }
  );
}
var Js = "never",
  ht = "always",
  Xs = "observed";
function Ys(e) {
  e.isolateGlobalState === !0 && Ms();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 && (d.useProxies = t === ht ? !0 : t === Js ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (d.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === ht ? ht : n === Xs;
    ((d.enforceActions = r), (d.allowStateChanges = !(r === !0 || r === ht)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (d[i] = !!e[i]);
  }),
    (d.allowStateReads = !d.observableRequiresReaction),
    e.reactionScheduler && Ls(e.reactionScheduler));
}
function Zs(e, t, n, r) {
  var i = Ca(t);
  return (
    ge(function () {
      var o = Re(e, r)[_];
      Dt(i).forEach(function (a) {
        o.extend_(a, i[a], n && a in n ? n[a] : !0);
      });
    }),
    e
  );
}
function Qs(e, t) {
  return wo(Tt(e, t));
}
function wo(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = eu(e.observing_).map(wo)),
    t
  );
}
function eu(e) {
  return Array.from(new Set(e));
}
var tu = 0;
function So() {
  this.message = "FLOW_CANCELLED";
}
So.prototype = Object.create(Error.prototype);
var ar = eo("flow"),
  ru = eo("flow.bound", { bound: !0 }),
  Ae = Object.assign(function (t, n) {
    if (ut(n)) return ar.decorate_20223_(t, n);
    if (fe(n)) return st(t, n, ar);
    var r = t,
      i = r.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          u = ++tu,
          l = we(i + " - runid: " + u + " - init", r).apply(s, c),
          f,
          v = void 0,
          h = new Promise(function (b, p) {
            var y = 0;
            f = p;
            function w(j) {
              v = void 0;
              var ne;
              try {
                ne = we(i + " - runid: " + u + " - yield " + y++, l.next).call(l, j);
              } catch (se) {
                return p(se);
              }
              J(ne);
            }
            function R(j) {
              v = void 0;
              var ne;
              try {
                ne = we(i + " - runid: " + u + " - yield " + y++, l.throw).call(l, j);
              } catch (se) {
                return p(se);
              }
              J(ne);
            }
            function J(j) {
              if (x(j?.then)) {
                j.then(J, p);
                return;
              }
              return j.done ? b(j.value) : ((v = Promise.resolve(j.value)), v.then(w, R));
            }
            w(void 0);
          });
        return (
          (h.cancel = we(i + " - runid: " + u + " - cancel", function () {
            try {
              v && Ln(v);
              var b = l.return(void 0),
                p = Promise.resolve(b.value);
              (p.then(me, me), Ln(p), f(new So()));
            } catch (y) {
              f(y);
            }
          })),
          h
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, ar);
Ae.bound = K(ru);
function Ln(e) {
  x(e.cancel) && e.cancel();
}
function ot(e) {
  return e?.isMobXFlow === !0;
}
function nu(e, t) {
  return e ? Ut(e) || !!e[_] || Br(e) || Pt(e) || $t(e) : !1;
}
function Ao(e) {
  return nu(e);
}
function ee(e, t) {
  (t === void 0 && (t = void 0), k());
  try {
    return e.apply(t);
  } finally {
    D();
  }
}
function ye(e) {
  return e[_];
}
var iu = {
  has: function (t, n) {
    return ye(t).has_(n);
  },
  get: function (t, n) {
    return ye(t).get_(n);
  },
  set: function (t, n, r) {
    var i;
    return fe(n) ? ((i = ye(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return fe(n) ? ((r = ye(t).delete_(n, !0)) != null ? r : !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var i;
    return (i = ye(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return ye(t).ownKeys_();
  },
  preventExtensions: function (t) {
    g(13);
  },
};
function ou(e, t) {
  var n, r;
  return (
    Ki(),
    (e = Re(e, t)),
    (r = (n = e[_]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, iu))
  );
}
function C(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function lt(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return (
    n.push(t),
    zi(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function I(e, t) {
  var n = pe();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
      i < o && ((t = r[i](t)), t && !t.type && g(14), !!t);
      i++
    );
    return t;
  } finally {
    re(n);
  }
}
function L(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function ft(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    n.push(t),
    zi(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function N(e, t) {
  var n = pe(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++) r[i](t);
    re(n);
  }
}
function au(e, t, n) {
  return (
    ge(function () {
      var r,
        i = Re(e, n)[_];
      ((r = t) != null || (t = Na(e)),
        Dt(t).forEach(function (o) {
          return i.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Nn = "splice",
  z = "update",
  su = 1e4,
  uu = {
    get: function (t, n) {
      var r = t[_];
      return n === _
        ? r
        : n === "length"
          ? r.getArrayLength_()
          : typeof n == "string" && !isNaN(n)
            ? r.get_(parseInt(n))
            : te(Rt, n)
              ? Rt[n]
              : t[n];
    },
    set: function (t, n, r) {
      var i = t[_];
      return (
        n === "length" && i.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      g(15);
    },
  },
  kr = (function () {
    function e(n, r, i, o) {
      (n === void 0 && (n = "ObservableArray"),
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
        (this.owned_ = i),
        (this.legacyMode_ = o),
        (this.atom_ = new ae(n)),
        (this.enhancer_ = function (a, s) {
          return r(a, s, "ObservableArray[..]");
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.dehanceValues_ = function (r) {
        return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
      }),
      (t.intercept_ = function (r) {
        return lt(this, r);
      }),
      (t.observe_ = function (r, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            r({
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
          ft(this, r)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (r) {
        (typeof r != "number" || isNaN(r) || r < 0) && g("Out of range: " + r);
        var i = this.values_.length;
        if (r !== i)
          if (r > i) {
            for (var o = new Array(r - i), a = 0; a < r - i; a++) o[a] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(r, i - r);
      }),
      (t.updateArrayLength_ = function (r, i) {
        (r !== this.lastKnownLength_ && g(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && Bo(r + i + 1));
      }),
      (t.spliceWithArray_ = function (r, i, o) {
        var a = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (r === void 0 ? (r = 0) : r > s ? (r = s) : r < 0 && (r = Math.max(0, s + r)),
          arguments.length === 1
            ? (i = s - r)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, s - r))),
          o === void 0 && (o = pr),
          C(this))
        ) {
          var c = I(this, { object: this.proxy_, type: Nn, index: r, removedCount: i, added: o });
          if (!c) return pr;
          ((i = c.removedCount), (o = c.added));
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (f) {
                  return a.enhancer_(f, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = o.length - i;
          this.updateArrayLength_(s, u);
        }
        var l = this.spliceItemsIntoValues_(r, i, o);
        return (
          (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (r, i, o) {
        if (o.length < su) {
          var a;
          return (a = this.values_).splice.apply(a, [r, i].concat(o));
        } else {
          var s = this.values_.slice(r, r + i),
            c = this.values_.slice(r + i);
          this.values_.length += o.length - i;
          for (var u = 0; u < o.length; u++) this.values_[r + u] = o[u];
          for (var l = 0; l < c.length; l++) this.values_[r + o.length + l] = c[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (r, i, o) {
        var a = !this.owned_ && rt(),
          s = L(this),
          c =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: z,
                  debugObjectName: this.atom_.name_,
                  index: r,
                  newValue: i,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), s && N(this, c));
      }),
      (t.notifyArraySplice_ = function (r, i, o) {
        var a = !this.owned_ && rt(),
          s = L(this),
          c =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Nn,
                  index: r,
                  removed: o,
                  added: i,
                  removedCount: o.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), s && N(this, c));
      }),
      (t.get_ = function (r) {
        if (this.legacyMode_ && r >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + r);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]));
      }),
      (t.set_ = function (r, i) {
        var o = this.values_;
        if ((this.legacyMode_ && r > o.length && g(17, r, o.length), r < o.length)) {
          this.atom_;
          var a = o[r];
          if (C(this)) {
            var s = I(this, { type: z, object: this.proxy_, index: r, newValue: i });
            if (!s) return;
            i = s.newValue;
          }
          i = this.enhancer_(i, a);
          var c = i !== a;
          c && ((o[r] = i), this.notifyArrayChildUpdate_(r, i, a));
        } else {
          for (var u = new Array(r + 1 - o.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          ((u[u.length - 1] = i), this.spliceWithArray_(o.length, 0, u));
        }
      }),
      e
    );
  })();
function cu(e, t, n, r) {
  return (
    n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    Ki(),
    ge(function () {
      var i = new kr(n, t, r, !1);
      Hi(i.values_, _, i);
      var o = new Proxy(i.values_, uu);
      return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Rt = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[_];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      i[o - 2] = arguments[o];
    var a = this[_];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function (t, n, r) {
    return this[_].spliceWithArray_(t, n, r);
  },
  push: function () {
    for (var t = this[_], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, r), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[_], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return (t.spliceWithArray_(0, 0, r), t.values_.length);
  },
  reverse: function () {
    return (d.trackingDerivation && g(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    d.trackingDerivation && g(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var n = this[_],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  },
};
O("at", B);
O("concat", B);
O("flat", B);
O("includes", B);
O("indexOf", B);
O("join", B);
O("lastIndexOf", B);
O("slice", B);
O("toString", B);
O("toLocaleString", B);
O("toSorted", B);
O("toSpliced", B);
O("with", B);
O("every", $);
O("filter", $);
O("find", $);
O("findIndex", $);
O("findLast", $);
O("findLastIndex", $);
O("flatMap", $);
O("forEach", $);
O("map", $);
O("some", $);
O("toReversed", $);
O("reduce", Eo);
O("reduceRight", Eo);
function O(e, t) {
  typeof Array.prototype[e] == "function" && (Rt[e] = t(e));
}
function B(e) {
  return function () {
    var t = this[_];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function $(e) {
  return function (t, n) {
    var r = this,
      i = this[_];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function (a, s) {
      return t.call(n, a, s, r);
    });
  };
}
function Eo(e) {
  return function () {
    var t = this,
      n = this[_];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (o, a, s) {
        return i(o, a, s, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var lu = _e("ObservableArrayAdministration", kr);
function Vt(e) {
  return It(e) && lu(e[_]);
}
var fu = {},
  ie = "add",
  jt = "delete",
  Po = (function () {
    function e(n, r, i) {
      var o = this;
      (r === void 0 && (r = ve),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[_] = fu),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = r),
        (this.name_ = i),
        x(Map) || g(18),
        ge(function () {
          ((o.keysAtom_ = Zi("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            n && o.merge(n));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (r) {
        return this.data_.has(r);
      }),
      (t.has = function (r) {
        var i = this;
        if (!d.trackingDerivation) return this.has_(r);
        var o = this.hasMap_.get(r);
        if (!o) {
          var a = (o = new le(this.has_(r), Lt, "ObservableMap.key?", !1));
          (this.hasMap_.set(r, a),
            mo(a, function () {
              return i.hasMap_.delete(r);
            }));
        }
        return o.get();
      }),
      (t.set = function (r, i) {
        var o = this.has_(r);
        if (C(this)) {
          var a = I(this, { type: o ? z : ie, object: this, newValue: i, name: r });
          if (!a) return this;
          i = a.newValue;
        }
        return (o ? this.updateValue_(r, i) : this.addValue_(r, i), this);
      }),
      (t.delete = function (r) {
        var i = this;
        if ((this.keysAtom_, C(this))) {
          var o = I(this, { type: jt, object: this, name: r });
          if (!o) return !1;
        }
        if (this.has_(r)) {
          var a = rt(),
            s = L(this),
            c =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: jt,
                    object: this,
                    oldValue: this.data_.get(r).value_,
                    name: r,
                  }
                : null;
          return (
            ee(function () {
              var u;
              (i.keysAtom_.reportChanged(), (u = i.hasMap_.get(r)) == null || u.setNewValue_(!1));
              var l = i.data_.get(r);
              (l.setNewValue_(void 0), i.data_.delete(r));
            }),
            s && N(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (r, i) {
        var o = this.data_.get(r);
        if (((i = o.prepareNewValue_(i)), i !== d.UNCHANGED)) {
          var a = rt(),
            s = L(this),
            c =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: z,
                    object: this,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          (o.setNewValue_(i), s && N(this, c));
        }
      }),
      (t.addValue_ = function (r, i) {
        var o = this;
        (this.keysAtom_,
          ee(function () {
            var u,
              l = new le(i, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(r, l),
              (i = l.value_),
              (u = o.hasMap_.get(r)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var a = rt(),
          s = L(this),
          c =
            s || a
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: ie,
                  object: this,
                  name: r,
                  newValue: i,
                }
              : null;
        s && N(this, c);
      }),
      (t.get = function (r) {
        return this.has(r)
          ? this.dehanceValue_(this.data_.get(r).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (t.values = function () {
        var r = this,
          i = this.keys();
        return xn({
          next: function () {
            var a = i.next(),
              s = a.done,
              c = a.value;
            return { done: s, value: s ? void 0 : r.get(c) };
          },
        });
      }),
      (t.entries = function () {
        var r = this,
          i = this.keys();
        return xn({
          next: function () {
            var a = i.next(),
              s = a.done,
              c = a.value;
            return { done: s, value: s ? void 0 : [c, r.get(c)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (r, i) {
        for (var o = Oe(this), a; !(a = o()).done; ) {
          var s = a.value,
            c = s[0],
            u = s[1];
          r.call(i, u, c, this);
        }
      }),
      (t.merge = function (r) {
        var i = this;
        return (
          be(r) && (r = new Map(r)),
          ee(function () {
            oe(r)
              ? Ba(r).forEach(function (o) {
                  return i.set(o, r[o]);
                })
              : Array.isArray(r)
                ? r.forEach(function (o) {
                    var a = o[0],
                      s = o[1];
                    return i.set(a, s);
                  })
                : Ee(r)
                  ? (Ma(r) || g(19, r),
                    r.forEach(function (o, a) {
                      return i.set(a, o);
                    }))
                  : r != null && g(20, r);
          }),
          this
        );
      }),
      (t.clear = function () {
        var r = this;
        ee(function () {
          uo(function () {
            for (var i = Oe(r.keys()), o; !(o = i()).done; ) {
              var a = o.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          ee(function () {
            for (
              var o = du(r), a = new Map(), s = !1, c = Oe(i.data_.keys()), u;
              !(u = c()).done;

            ) {
              var l = u.value;
              if (!o.has(l)) {
                var f = i.delete(l);
                if (f) s = !0;
                else {
                  var v = i.data_.get(l);
                  a.set(l, v);
                }
              }
            }
            for (var h = Oe(o.entries()), b; !(b = h()).done; ) {
              var p = b.value,
                y = p[0],
                w = p[1],
                R = i.data_.has(y);
              if ((i.set(y, w), i.data_.has(y))) {
                var J = i.data_.get(y);
                (a.set(y, J), R || (s = !0));
              }
            }
            if (!s)
              if (i.data_.size !== a.size) i.keysAtom_.reportChanged();
              else
                for (
                  var j = i.data_.keys(), ne = a.keys(), se = j.next(), Nr = ne.next();
                  !se.done;

                ) {
                  if (se.value !== Nr.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((se = j.next()), (Nr = ne.next()));
                }
            i.data_ = a;
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
      (t.observe_ = function (r, i) {
        return ft(this, r);
      }),
      (t.intercept_ = function (r) {
        return lt(this, r);
      }),
      Pe(e, [
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
  be = _e("ObservableMap", Po);
function xn(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Lr(e));
}
function du(e) {
  if (Ee(e) || be(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (oe(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return g(21, e);
}
var vu = {},
  Ro = (function () {
    function e(n, r, i) {
      var o = this;
      (r === void 0 && (r = ve),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[_] = vu),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        x(Set) || g(22),
        (this.enhancer_ = function (a, s) {
          return r(a, s, i);
        }),
        ge(function () {
          ((o.atom_ = Zi(o.name_)), n && o.replace(n));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.clear = function () {
        var r = this;
        ee(function () {
          uo(function () {
            for (var i = Oe(r.data_.values()), o; !(o = i()).done; ) {
              var a = o.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.forEach = function (r, i) {
        for (var o = Oe(this), a; !(a = o()).done; ) {
          var s = a.value;
          r.call(i, s, s, this);
        }
      }),
      (t.add = function (r) {
        var i = this;
        if ((this.atom_, C(this))) {
          var o = I(this, { type: ie, object: this, newValue: r });
          if (!o) return this;
          r = o.newValue;
        }
        if (!this.has(r)) {
          ee(function () {
            (i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged());
          });
          var a = !1,
            s = L(this),
            c =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ie,
                    object: this,
                    newValue: r,
                  }
                : null;
          s && N(this, c);
        }
        return this;
      }),
      (t.delete = function (r) {
        var i = this;
        if (C(this)) {
          var o = I(this, { type: jt, object: this, oldValue: r });
          if (!o) return !1;
        }
        if (this.has(r)) {
          var a = !1,
            s = L(this),
            c =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: jt,
                    object: this,
                    oldValue: r,
                  }
                : null;
          return (
            ee(function () {
              (i.atom_.reportChanged(), i.data_.delete(r));
            }),
            s && N(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (r) {
        return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r)));
      }),
      (t.entries = function () {
        var r = this.values();
        return qn({
          next: function () {
            var o = r.next(),
              a = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: [a, a], done: s };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var r = this,
          i = this.data_.values();
        return qn({
          next: function () {
            var a = i.next(),
              s = a.value,
              c = a.done;
            return c ? { value: void 0, done: c } : { value: r.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (r) {
        if (Q(r) && !V(r)) return r.intersection(this);
        var i = new Set(this);
        return i.intersection(r);
      }),
      (t.union = function (r) {
        if (Q(r) && !V(r)) return r.union(this);
        var i = new Set(this);
        return i.union(r);
      }),
      (t.difference = function (r) {
        return new Set(this).difference(r);
      }),
      (t.symmetricDifference = function (r) {
        if (Q(r) && !V(r)) return r.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(r);
      }),
      (t.isSubsetOf = function (r) {
        return new Set(this).isSubsetOf(r);
      }),
      (t.isSupersetOf = function (r) {
        return new Set(this).isSupersetOf(r);
      }),
      (t.isDisjointFrom = function (r) {
        if (Q(r) && !V(r)) return r.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(r);
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          V(r) && (r = new Set(r)),
          ee(function () {
            Array.isArray(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : Q(r)
                ? (i.clear(),
                  r.forEach(function (o) {
                    return i.add(o);
                  }))
                : r != null && g("Cannot initialize set from " + r);
          }),
          this
        );
      }),
      (t.observe_ = function (r, i) {
        return ft(this, r);
      }),
      (t.intercept_ = function (r) {
        return lt(this, r);
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
      Pe(e, [
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
  V = _e("ObservableSet", Ro);
function qn(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Lr(e));
}
var Fn = Object.create(null),
  $n = "remove",
  jo = (function () {
    function e(n, r, i, o) {
      (r === void 0 && (r = new Map()),
        o === void 0 && (o = ss),
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
        (this.target_ = n),
        (this.values_ = r),
        (this.name_ = i),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new ae("ObservableObject.keys")),
        (this.isPlainObject_ = oe(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (r) {
        return this.values_.get(r).get();
      }),
      (t.setObservablePropValue_ = function (r, i) {
        var o = this.values_.get(r);
        if (o instanceof q) return (o.set(i), !0);
        if (C(this)) {
          var a = I(this, { type: z, object: this.proxy_ || this.target_, name: r, newValue: i });
          if (!a) return null;
          i = a.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== d.UNCHANGED)) {
          var s = L(this),
            c = !1,
            u =
              s || c
                ? {
                    type: z,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          (o.setNewValue_(i), s && N(this, u));
        }
        return !0;
      }),
      (t.get_ = function (r) {
        return (d.trackingDerivation && !te(this.target_, r) && this.has_(r), this.target_[r]);
      }),
      (t.set_ = function (r, i, o) {
        return (
          o === void 0 && (o = !1),
          te(this.target_, r)
            ? this.values_.has(r)
              ? this.setObservablePropValue_(r, i)
              : o
                ? Reflect.set(this.target_, r, i)
                : ((this.target_[r] = i), !0)
            : this.extend_(
                r,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (r) {
        if (!d.trackingDerivation) return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(r);
        return (
          i ||
            ((i = new le(r in this.target_, Lt, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(r, i)),
          i.get()
        );
      }),
      (t.make_ = function (r, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(r in this.target_)) {
            var o;
            if ((o = this.target_[U]) != null && o[r]) return;
            g(1, i.annotationType_, this.name_ + "." + r.toString());
          }
          for (var a = this.target_; a && a !== Ct; ) {
            var s = Ot(a, r);
            if (s) {
              var c = i.make_(this, r, s, a);
              if (c === 0) return;
              if (c === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          Un(this, i, r);
        }
      }),
      (t.extend_ = function (r, i, o, a) {
        if ((a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(r, i, a);
        var s = o.extend_(this, r, i, a);
        return (s && Un(this, o, r), s);
      }),
      (t.defineProperty_ = function (r, i, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          k();
          var a = this.delete_(r);
          if (!a) return a;
          if (C(this)) {
            var s = I(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ie,
              newValue: i.value,
            });
            if (!s) return null;
            var c = s.newValue;
            i.value !== c && (i = de({}, i, { value: c }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, i)) return !1;
          } else G(this.target_, r, i);
          this.notifyPropertyAddition_(r, i.value);
        } finally {
          D();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (r, i, o, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          k();
          var s = this.delete_(r);
          if (!s) return s;
          if (C(this)) {
            var c = I(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ie,
              newValue: i,
            });
            if (!c) return null;
            i = c.newValue;
          }
          var u = Vn(r),
            l = {
              configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, r, l)) return !1;
          } else G(this.target_, r, l);
          var f = new le(i, o, "ObservableObject.key", !1);
          (this.values_.set(r, f), this.notifyPropertyAddition_(r, f.value_));
        } finally {
          D();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (r, i, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          k();
          var a = this.delete_(r);
          if (!a) return a;
          if (C(this)) {
            var s = I(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: ie,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var c = Vn(r),
            u = {
              configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, u)) return !1;
          } else G(this.target_, r, u);
          (this.values_.set(r, new q(i)), this.notifyPropertyAddition_(r, void 0));
        } finally {
          D();
        }
        return !0;
      }),
      (t.delete_ = function (r, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !te(this.target_, r))) return !0;
        if (C(this)) {
          var o = I(this, { object: this.proxy_ || this.target_, name: r, type: $n });
          if (!o) return null;
        }
        try {
          var a;
          k();
          var s = L(this),
            c = !1,
            u = this.values_.get(r),
            l = void 0;
          if (!u && (s || c)) {
            var f;
            l = (f = Ot(this.target_, r)) == null ? void 0 : f.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, r)) return !1;
          } else delete this.target_[r];
          if (
            (u && (this.values_.delete(r), u instanceof le && (l = u.value_), _o(u)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null || (a = a.get(r)) == null || a.set(r in this.target_),
            s || c)
          ) {
            var v = {
              type: $n,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: r,
            };
            s && N(this, v);
          }
        } finally {
          D();
        }
        return !0;
      }),
      (t.observe_ = function (r, i) {
        return ft(this, r);
      }),
      (t.intercept_ = function (r) {
        return lt(this, r);
      }),
      (t.notifyPropertyAddition_ = function (r, i) {
        var o,
          a = L(this),
          s = !1;
        if (a || s) {
          var c =
            a || s
              ? {
                  type: ie,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: r,
                  newValue: i,
                }
              : null;
          a && N(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(r)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Dt(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Re(e, t) {
  var n;
  if (te(e, _)) return e;
  var r = (n = t?.name) != null ? n : "ObservableObject",
    i = new jo(e, new Map(), String(r), gs(t));
  return (kt(e, _, i), e);
}
var hu = _e("ObservableObjectAdministration", jo);
function Vn(e) {
  return (
    Fn[e] ||
    (Fn[e] = {
      get: function () {
        return this[_].getObservablePropValue_(e);
      },
      set: function (n) {
        return this[_].setObservablePropValue_(e, n);
      },
    })
  );
}
function Ut(e) {
  return It(e) ? hu(e[_]) : !1;
}
function Un(e, t, n) {
  var r;
  (r = e.target_[U]) == null || delete r[n];
}
var _u = Mo(0),
  pu = (function () {
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
  sr = 0,
  To = function () {};
function bu(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
bu(To, Array.prototype);
var Dr = (function (e) {
  function t(r, i, o, a) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      a === void 0 && (a = !1),
      (s = e.call(this) || this),
      ge(function () {
        var c = new kr(o, i, a, !0);
        ((c.proxy_ = s),
          Hi(s, _, c),
          r && r.length && s.spliceWithArray(0, 0, r),
          pu && Object.defineProperty(s, "0", _u));
      }),
      s
    );
  }
  Yi(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[_].atom_.reportObserved();
      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return Vt(s) ? s.slice() : s;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var r = this,
        i = 0;
      return Lr({
        next: function () {
          return i < r.length ? { value: r[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Pe(t, [
      {
        key: "length",
        get: function () {
          return this[_].getArrayLength_();
        },
        set: function (i) {
          this[_].setArrayLength_(i);
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
})(To);
Object.entries(Rt).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== "concat" && kt(Dr.prototype, t, n);
});
function Mo(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[_].get_(e);
    },
    set: function (n) {
      this[_].set_(e, n);
    },
  };
}
function gu(e) {
  G(Dr.prototype, "" + e, Mo(e));
}
function Bo(e) {
  if (e > sr) {
    for (var t = sr; t < e + 100; t++) gu(t);
    sr = e;
  }
}
Bo(1e3);
function yu(e, t, n) {
  return new Dr(e, t, n);
}
function Tt(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Vt(e)) return (t !== void 0 && g(23), e[_].atom_);
    if (V(e)) return e.atom_;
    if (be(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return (n || g(25, t, Er(e)), n);
    }
    if (Ut(e)) {
      if (!t) return g(26);
      var r = e[_].values_.get(t);
      return (r || g(27, t, Er(e)), r);
    }
    if (Br(e) || $t(e) || Pt(e)) return e;
  } else if (x(e) && Pt(e[_])) return e[_];
  g(28);
}
function mu(e, t) {
  if ((e || g(29), Br(e) || $t(e) || Pt(e) || be(e) || V(e))) return e;
  if (e[_]) return e[_];
  g(24, e);
}
function Er(e, t) {
  var n;
  if (t !== void 0) n = Tt(e, t);
  else {
    if (it(e)) return e.name;
    Ut(e) || be(e) || V(e) ? (n = mu(e)) : (n = Tt(e));
  }
  return n.name_;
}
function ge(e) {
  var t = pe(),
    n = qt(!0);
  k();
  try {
    return e();
  } finally {
    (D(), Ft(n), re(t));
  }
}
var Gn = Ct.toString;
function Co(e, t, n) {
  return (n === void 0 && (n = -1), Pr(e, t, n));
}
function Pr(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var a = Gn.call(e);
  if (a !== Gn.call(t)) return !1;
  switch (a) {
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
      n >= 0 && n++;
      break;
  }
  ((e = Kn(e)), (t = Kn(t)));
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(x(c) && c instanceof c && x(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (n === 0) return !1;
  (n < 0 && (n = -1), (r = r || []), (i = i || []));
  for (var l = r.length; l--; ) if (r[l] === e) return i[l] === t;
  if ((r.push(e), i.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Pr(e[l], t[l], n - 1, r, i)) return !1;
  } else {
    var f = Object.keys(e),
      v = f.length;
    if (Object.keys(t).length !== v) return !1;
    for (var h = 0; h < v; h++) {
      var b = f[h];
      if (!(te(t, b) && Pr(e[b], t[b], n - 1, r, i))) return !1;
    }
  }
  return (r.pop(), i.pop(), !0);
}
function Kn(e) {
  return Vt(e) ? e.slice() : Ee(e) || be(e) || Q(e) || V(e) ? Array.from(e.entries()) : e;
}
var zn,
  Ou = ((zn = Bt().Iterator) == null ? void 0 : zn.prototype) || {};
function Lr(e) {
  return ((e[Symbol.iterator] = wu), Object.assign(Object.create(Ou), e));
}
function wu() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Bt();
  typeof t[e] > "u" && g("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ns, extras: { getDebugName: Er }, $mobx: _ });
if (!E.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!au) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Su(e) {
  e();
}
function Au(e) {
  (e || (e = Su), Ys({ reactionScheduler: e }));
}
function Eu(e) {
  return Qs(e);
}
var Pu = 1e4,
  Ru = 1e4,
  ju = (function () {
    function e(t) {
      var n = this;
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
          value: function (r) {
            (r === void 0 && (r = Pu), clearTimeout(n.sweepTimeout), (n.sweepTimeout = void 0));
            var i = Date.now();
            (n.registrations.forEach(function (o, a) {
              i - o.registeredAt >= r && (n.finalize(o.value), n.registrations.delete(a));
            }),
              n.registrations.size > 0 && n.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            n.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, n, r) {
          (this.registrations.set(r, { value: n, registeredAt: Date.now() }), this.scheduleSweep());
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Ru));
        },
      }),
      e
    );
  })(),
  Tu = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ju,
  at = new Tu(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ur = { exports: {} },
  cr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wn;
function Mu() {
  if (Wn) return cr;
  Wn = 1;
  var e = Tr();
  function t(f, v) {
    return (f === v && (f !== 0 || 1 / f === 1 / v)) || (f !== f && v !== v);
  }
  var n = typeof Object.is == "function" ? Object.is : t,
    r = e.useState,
    i = e.useEffect,
    o = e.useLayoutEffect,
    a = e.useDebugValue;
  function s(f, v) {
    var h = v(),
      b = r({ inst: { value: h, getSnapshot: v } }),
      p = b[0].inst,
      y = b[1];
    return (
      o(
        function () {
          ((p.value = h), (p.getSnapshot = v), c(p) && y({ inst: p }));
        },
        [f, h, v],
      ),
      i(
        function () {
          return (
            c(p) && y({ inst: p }),
            f(function () {
              c(p) && y({ inst: p });
            })
          );
        },
        [f],
      ),
      a(h),
      h
    );
  }
  function c(f) {
    var v = f.getSnapshot;
    f = f.value;
    try {
      var h = v();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function u(f, v) {
    return v();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : s;
  return (
    (cr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    cr
  );
}
var Hn;
function Bu() {
  return (Hn || ((Hn = 1), (ur.exports = Mu())), ur.exports);
}
var Cu = Bu();
function Jn(e) {
  e.reaction = new W("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Iu(e, t) {
  t === void 0 && (t = "observed");
  var n = vr.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          at.unregister(r),
          (r.onStoreChange = s),
          r.reaction || (Jn(r), (r.stateVersion = Symbol())),
          function () {
            var c;
            ((r.onStoreChange = null),
              (c = r.reaction) === null || c === void 0 || c.dispose(),
              (r.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  (i.reaction || (Jn(i), at.register(n, i, i)),
    vr.useDebugValue(i.reaction, Eu),
    Cu.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
  var o, a;
  if (
    (i.reaction.track(function () {
      try {
        o = e();
      } catch (s) {
        a = s;
      }
    }),
    a)
  )
    throw a;
  return o;
}
var lr,
  fr,
  Io = typeof Symbol == "function" && Symbol.for,
  ku =
    (fr =
      (lr = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || lr === void 0
        ? void 0
        : lr.configurable) !== null && fr !== void 0
      ? fr
      : !1,
  Xn = Io
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      E.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Yn = Io
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      E.memo(function (e) {
        return null;
      }).$$typeof;
function Du(e, t) {
  var n;
  if (Yn && e.$$typeof === Yn)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var r = (n = void 0) !== null && n !== void 0 ? n : !1,
    i = e,
    o = e.displayName || e.name;
  if (Xn && e.$$typeof === Xn && ((r = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function (s, c) {
    return Iu(function () {
      return i(s, c);
    }, o);
  };
  return (
    (a.displayName = e.displayName),
    ku && Object.defineProperty(a, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    r && (a = E.forwardRef(a)),
    (a = E.memo(a)),
    Nu(e, a),
    a
  );
}
var Lu = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Nu(e, t) {
  Object.keys(e).forEach(function (n) {
    Lu[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
var dr;
Au(Lo.unstable_batchedUpdates);
dr = at.finalizeAllImmediately;
function xu(e, t) {
  if (Zn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !Zn(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function Zn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Qn = Symbol("patchMixins"),
  ko = Symbol("patchedDefinition");
function qu(e, t) {
  var n = (e[Qn] = e[Qn] || {}),
    r = (n[t] = n[t] || {});
  return ((r.locks = r.locks || 0), (r.methods = r.methods || []), r);
}
function ei(e, t) {
  for (var n = this, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  t.locks++;
  try {
    var a;
    return (e != null && (a = e.apply(this, i)), a);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(n, i);
        }));
  }
}
function ti(e, t) {
  var n = function () {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    ei.call.apply(ei, [this, e, t].concat(o));
  };
  return n;
}
function Fu(e, t, n) {
  var r = qu(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[ko])) {
    var o = e[t],
      a = Do(e, t, i ? i.enumerable : void 0, r, o);
    Object.defineProperty(e, t, a);
  }
}
function Do(e, t, n, r, i) {
  var o,
    a = ti(i, r);
  return (
    (o = {}),
    (o[ko] = !0),
    (o.get = function () {
      return a;
    }),
    (o.set = function (c) {
      if (this === e) a = ti(c, r);
      else {
        var u = Do(this, t, n, r, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = n),
    o
  );
}
var ri = Symbol("ObserverAdministration"),
  ni = Symbol("isMobXReactObserver");
function Rr(e) {
  var t;
  return (t = e[ri]) != null
    ? t
    : (e[ri] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: jr(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function $u(e) {
  var t = e.prototype;
  if (e[ni]) {
    var n = jr(e);
    throw new Error(
      "The provided component class (" +
        n +
        ") has already been declared as an observer component.",
    );
  } else e[ni] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== E.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = ii;
    else if (t.shouldComponentUpdate !== ii)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var i = jr(e);
    throw new Error(
      "[mobx-react] class component (" +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: Vu.call(this, r),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var a = this,
        s = Rr(this);
      return (
        (s.mounted = !0),
        at.unregister(this),
        (s.forceUpdate = function () {
          return a.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    Fu(t, "componentWillUnmount", function () {
      var a,
        s = Rr(this);
      ((a = s.reaction) == null || a.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function jr(e) {
  return e.displayName || e.name || "<component>";
}
function Vu(e) {
  var t = e.bind(this),
    n = Rr(this);
  function r() {
    n.reaction || ((n.reaction = Uu(n)), n.mounted || at.register(this, n, this));
    var i = void 0,
      o = void 0;
    if (
      (n.reaction.track(function () {
        try {
          o = js(!1, t);
        } catch (a) {
          i = a;
        }
      }),
      i)
    )
      throw i;
    return o;
  }
  return r;
}
function Uu(e) {
  return new W(e.name + ".render()", function () {
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
function ii(e, t) {
  return this.state !== t ? !0 : !xu(this.props, e);
}
function Gu(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(E.Component, e) ||
    Object.prototype.isPrototypeOf.call(E.PureComponent, e)
      ? $u(e)
      : Du(e)
  );
}
vr.version.split(".")[0];
if (!E.Component) throw new Error("mobx-react requires React to be available");
if (!S) throw new Error("mobx-react requires mobx to be available");
async function et(e, t, n) {
  await mt.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: n,
    description: t,
    isAutoDismiss: !0,
  });
}
function Ku(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function oi() {
  return A.jsx("div", {
    className: "loading-overlay",
    children: A.jsx("div", { className: "loading-spinner" }),
  });
}
function zu() {
  const [e, t] = E.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [n, r] = E.useState(!0),
    [i, o] = E.useState(!1);
  E.useEffect(() => {
    a();
  }, []);
  const a = async () => {
      try {
        const u = await mt.invoke("getCheckList");
        t(u);
      } catch {
        await et(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        r(!1);
      }
    },
    s = async (u) => {
      try {
        o(!0);
        const l = await mt.invoke(u ? "updateWithOptimisticLocking" : "update", e);
        l.error
          ? l.concurrent
            ? (await et(
                "Concurrent Modification Detected",
                `User ${l.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await a())
            : await et(
                "Update Failed",
                l.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : l.data &&
            (t(l.data),
            await et(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await et(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        o(!1);
      }
    },
    c = (u) => {
      const l = [...JSON.parse(e.checkList)];
      ((l[u] = { ...l[u], done: !l[u].done }), t({ ...e, checkList: JSON.stringify(l) }));
    };
  return n
    ? A.jsx("div", { className: "checklist-container", children: A.jsx(oi, {}) })
    : A.jsxs("div", {
        className: "checklist-container",
        children: [
          i && A.jsx(oi, {}),
          A.jsxs("div", {
            className: "checklist-header",
            children: [
              A.jsx("h2", { children: "Issue Checklist" }),
              A.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", Ku(e.updatedAt)],
              }),
            ],
          }),
          A.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((u, l) =>
              A.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    A.jsx("input", { type: "checkbox", checked: u.done, onChange: () => c(l) }),
                    A.jsx("span", { children: u.label }),
                  ],
                },
                l,
              ),
            ),
          }),
          A.jsxs("div", {
            className: "buttons",
            children: [
              A.jsx("button", { onClick: () => s(!0), children: "Update with Locking" }),
              A.jsx("button", { onClick: () => s(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Wu = Gu(zu),
  Hu = document.getElementById("root"),
  Ju = No.createRoot(Hu),
  ai = () => {
    Ju.render(A.jsx(Wu, {}));
  };
mt.view.theme
  .enable()
  .then(() => {
    ai();
  })
  .catch((e) => {
    (console.error(e.message), ai());
  });
