import { r as Er, c as at } from "./react-dom-vendor-DUDfcWRj.js";
import { g as lt, a as ct, r as ut } from "./lodash-vendor-RhPBt8ex.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(t) {
    const i = {};
    return (
      t.integrity && (i.integrity = t.integrity),
      t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function o(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = n(t);
    fetch(t.href, i);
  }
})();
var le = { exports: {} },
  S = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Be;
function dt() {
  if (Be) return S;
  Be = 1;
  var e = Er(),
    r = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, a) {
    var d,
      f = {},
      h = null,
      p = null;
    (a !== void 0 && (h = "" + a),
      u.key !== void 0 && (h = "" + u.key),
      u.ref !== void 0 && (p = u.ref));
    for (d in u) o.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (l && l.defaultProps) for (d in ((u = l.defaultProps), u)) f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: r, type: l, key: h, ref: p, props: f, _owner: t.current };
  }
  return ((S.Fragment = n), (S.jsx = s), (S.jsxs = s), S);
}
var Te;
function ft() {
  return (Te || ((Te = 1), (le.exports = dt())), le.exports);
}
var c = ft(),
  R = Er();
const pt = lt(R);
var ce = {},
  Re = function (e, r) {
    return (
      (Re =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, o) {
            n.__proto__ = o;
          }) ||
        function (n, o) {
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t]);
        }),
      Re(e, r)
    );
  };
function Or(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Re(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
}
var ie = function () {
  return (
    (ie =
      Object.assign ||
      function (r) {
        for (var n, o = 1, t = arguments.length; o < t; o++) {
          n = arguments[o];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }
        return r;
      }),
    ie.apply(this, arguments)
  );
};
function Rr(e, r) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, o = Object.getOwnPropertySymbols(e); t < o.length; t++)
      r.indexOf(o[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[t]) &&
        (n[o[t]] = e[o[t]]);
  return n;
}
function Pr(e, r, n, o) {
  var t = arguments.length,
    i = t < 3 ? r : o === null ? (o = Object.getOwnPropertyDescriptor(r, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, n, o);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (s = e[l]) && (i = (t < 3 ? s(i) : t > 3 ? s(r, n, i) : s(r, n)) || i);
  return (t > 3 && i && Object.defineProperty(r, n, i), i);
}
function Cr(e, r) {
  return function (n, o) {
    r(n, o, e);
  };
}
function Br(e, r, n, o, t, i) {
  function s(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var l = o.kind,
      u = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      a = !r && e ? (o.static ? e : e.prototype) : null,
      d = r || (a ? Object.getOwnPropertyDescriptor(a, o.name) : {}),
      f,
      h = !1,
      p = n.length - 1;
    p >= 0;
    p--
  ) {
    var y = {};
    for (var v in o) y[v] = v === "access" ? {} : o[v];
    for (var v in o.access) y.access[v] = o.access[v];
    y.addInitializer = function (m) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(s(m || null));
    };
    var b = (0, n[p])(l === "accessor" ? { get: d.get, set: d.set } : d[u], y);
    if (l === "accessor") {
      if (b === void 0) continue;
      if (b === null || typeof b != "object") throw new TypeError("Object expected");
      ((f = s(b.get)) && (d.get = f),
        (f = s(b.set)) && (d.set = f),
        (f = s(b.init)) && t.unshift(f));
    } else (f = s(b)) && (l === "field" ? t.unshift(f) : (d[u] = f));
  }
  (a && Object.defineProperty(a, o.name, d), (h = !0));
}
function Tr(e, r, n) {
  for (var o = arguments.length > 2, t = 0; t < r.length; t++)
    n = o ? r[t].call(e, n) : r[t].call(e);
  return o ? n : void 0;
}
function Ir(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Fr(e, r, n) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", r) : r })
  );
}
function Sr(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function qr(e, r, n, o) {
  function t(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function l(d) {
      try {
        a(o.next(d));
      } catch (f) {
        s(f);
      }
    }
    function u(d) {
      try {
        a(o.throw(d));
      } catch (f) {
        s(f);
      }
    }
    function a(d) {
      d.done ? i(d.value) : t(d.value).then(l, u);
    }
    a((o = o.apply(e, r || [])).next());
  });
}
function Mr(e, r) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    o,
    t,
    i,
    s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (s.next = l(0)),
    (s.throw = l(1)),
    (s.return = l(2)),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function l(a) {
    return function (d) {
      return u([a, d]);
    };
  }
  function u(a) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; s && ((s = 0), a[0] && (n = 0)), n; )
      try {
        if (
          ((o = 1),
          t &&
            (i =
              a[0] & 2 ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) &&
            !(i = i.call(t, a[1])).done)
        )
          return i;
        switch (((t = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return (n.label++, { value: a[1], done: !1 });
          case 5:
            (n.label++, (t = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = n.ops.pop()), n.trys.pop());
            continue;
          default:
            if (
              ((i = n.trys), !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < i[1]) {
              ((n.label = i[1]), (i = a));
              break;
            }
            if (i && n.label < i[2]) {
              ((n.label = i[2]), n.ops.push(a));
              break;
            }
            (i[2] && n.ops.pop(), n.trys.pop());
            continue;
        }
        a = r.call(e, n);
      } catch (d) {
        ((a = [6, d]), (t = 0));
      } finally {
        o = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var ae = Object.create
  ? function (e, r, n, o) {
      o === void 0 && (o = n);
      var t = Object.getOwnPropertyDescriptor(r, n);
      ((!t || ("get" in t ? !r.__esModule : t.writable || t.configurable)) &&
        (t = {
          enumerable: !0,
          get: function () {
            return r[n];
          },
        }),
        Object.defineProperty(e, o, t));
    }
  : function (e, r, n, o) {
      (o === void 0 && (o = n), (e[o] = r[n]));
    };
function kr(e, r) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && ae(r, e, n);
}
function se(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    n = r && e[r],
    o = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ce(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e),
    t,
    i = [],
    s;
  try {
    for (; (r === void 0 || r-- > 0) && !(t = o.next()).done; ) i.push(t.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      t && !t.done && (n = o.return) && n.call(o);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function Ar() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ce(arguments[r]));
  return e;
}
function Lr() {
  for (var e = 0, r = 0, n = arguments.length; r < n; r++) e += arguments[r].length;
  for (var o = Array(e), t = 0, r = 0; r < n; r++)
    for (var i = arguments[r], s = 0, l = i.length; s < l; s++, t++) o[t] = i[s];
  return o;
}
function Dr(e, r, n) {
  if (n || arguments.length === 2)
    for (var o = 0, t = r.length, i; o < t; o++)
      (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), (i[o] = r[o]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function I(e) {
  return this instanceof I ? ((this.v = e), this) : new I(e);
}
function Nr(e, r, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n.apply(e, r || []),
    t,
    i = [];
  return (
    (t = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    l("next"),
    l("throw"),
    l("return", s),
    (t[Symbol.asyncIterator] = function () {
      return this;
    }),
    t
  );
  function s(p) {
    return function (y) {
      return Promise.resolve(y).then(p, f);
    };
  }
  function l(p, y) {
    o[p] &&
      ((t[p] = function (v) {
        return new Promise(function (b, m) {
          i.push([p, v, b, m]) > 1 || u(p, v);
        });
      }),
      y && (t[p] = y(t[p])));
  }
  function u(p, y) {
    try {
      a(o[p](y));
    } catch (v) {
      h(i[0][3], v);
    }
  }
  function a(p) {
    p.value instanceof I ? Promise.resolve(p.value.v).then(d, f) : h(i[0][2], p);
  }
  function d(p) {
    u("next", p);
  }
  function f(p) {
    u("throw", p);
  }
  function h(p, y) {
    (p(y), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function $r(e) {
  var r, n;
  return (
    (r = {}),
    o("next"),
    o("throw", function (t) {
      throw t;
    }),
    o("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function o(t, i) {
    r[t] = e[t]
      ? function (s) {
          return (n = !n) ? { value: I(e[t](s)), done: !1 } : i ? i(s) : s;
        }
      : i;
  }
}
function Ur(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    n;
  return r
    ? r.call(e)
    : ((e = typeof se == "function" ? se(e) : e[Symbol.iterator]()),
      (n = {}),
      o("next"),
      o("throw"),
      o("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function o(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (l, u) {
          ((s = e[i](s)), t(l, u, s.done, s.value));
        });
      };
  }
  function t(i, s, l, u) {
    Promise.resolve(u).then(function (a) {
      i({ value: a, done: l });
    }, s);
  }
}
function Gr(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ht = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Pe = function (e) {
    return (
      (Pe =
        Object.getOwnPropertyNames ||
        function (r) {
          var n = [];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[n.length] = o);
          return n;
        }),
      Pe(e)
    );
  };
function Vr(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var n = Pe(e), o = 0; o < n.length; o++) n[o] !== "default" && ae(r, e, n[o]);
  return (ht(r, e), r);
}
function Wr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hr(e, r, n, o) {
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !o : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : r.get(e);
}
function zr(e, r, n, o, t) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !t) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !t : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? t.call(e, n) : t ? (t.value = n) : r.set(e, n), n);
}
function Jr(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Qr(e, r, n) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var o, t;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      o = r[Symbol.asyncDispose];
    }
    if (o === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((o = r[Symbol.dispose]), n && (t = o));
    }
    if (typeof o != "function") throw new TypeError("Object not disposable.");
    (t &&
      (o = function () {
        try {
          t.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: o, async: n }));
  } else n && e.stack.push({ async: !0 });
  return r;
}
var gt =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, n) {
        var o = new Error(n);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = r), o);
      };
function Kr(e) {
  function r(i) {
    ((e.error = e.hasError ? new gt(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var n,
    o = 0;
  function t() {
    for (; (n = e.stack.pop()); )
      try {
        if (!n.async && o === 1) return ((o = 0), e.stack.push(n), Promise.resolve().then(t));
        if (n.dispose) {
          var i = n.dispose.call(n.value);
          if (n.async)
            return (
              (o |= 2),
              Promise.resolve(i).then(t, function (s) {
                return (r(s), t());
              })
            );
        } else o |= 1;
      } catch (s) {
        r(s);
      }
    if (o === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return t();
}
function Xr(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (n, o, t, i, s) {
        return o
          ? r
            ? ".jsx"
            : ".js"
          : t && (!i || !s)
            ? n
            : t + i + "." + s.toLowerCase() + "js";
      })
    : e;
}
const yt = {
    __extends: Or,
    __assign: ie,
    __rest: Rr,
    __decorate: Pr,
    __param: Cr,
    __esDecorate: Br,
    __runInitializers: Tr,
    __propKey: Ir,
    __setFunctionName: Fr,
    __metadata: Sr,
    __awaiter: qr,
    __generator: Mr,
    __createBinding: ae,
    __exportStar: kr,
    __values: se,
    __read: Ce,
    __spread: Ar,
    __spreadArrays: Lr,
    __spreadArray: Dr,
    __await: I,
    __asyncGenerator: Nr,
    __asyncDelegator: $r,
    __asyncValues: Ur,
    __makeTemplateObject: Gr,
    __importStar: Vr,
    __importDefault: Wr,
    __classPrivateFieldGet: Hr,
    __classPrivateFieldSet: zr,
    __classPrivateFieldIn: Jr,
    __addDisposableResource: Qr,
    __disposeResources: Kr,
    __rewriteRelativeImportExtension: Xr,
  },
  vt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Qr,
        get __assign() {
          return ie;
        },
        __asyncDelegator: $r,
        __asyncGenerator: Nr,
        __asyncValues: Ur,
        __await: I,
        __awaiter: qr,
        __classPrivateFieldGet: Hr,
        __classPrivateFieldIn: Jr,
        __classPrivateFieldSet: zr,
        __createBinding: ae,
        __decorate: Pr,
        __disposeResources: Kr,
        __esDecorate: Br,
        __exportStar: kr,
        __extends: Or,
        __generator: Mr,
        __importDefault: Wr,
        __importStar: Vr,
        __makeTemplateObject: Gr,
        __metadata: Sr,
        __param: Cr,
        __propKey: Ir,
        __read: Ce,
        __rest: Rr,
        __rewriteRelativeImportExtension: Xr,
        __runInitializers: Tr,
        __setFunctionName: Fr,
        __spread: Ar,
        __spreadArray: Dr,
        __spreadArrays: Lr,
        __values: se,
        default: yt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = ct(vt);
var q = {},
  Ie;
function bt() {
  return (
    Ie ||
      ((Ie = 1),
      Object.defineProperty(q, "__esModule", { value: !0 }),
      (q.NavigationTarget = void 0),
      (q.NavigationTarget = {
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
    q
  );
}
var ue = {},
  de = {},
  M = {},
  k = {},
  Fe;
function x() {
  if (Fe) return k;
  ((Fe = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.BridgeAPIError = void 0));
  class e extends Error {}
  return ((k.BridgeAPIError = e), k);
}
var Se;
function _() {
  if (Se) return M;
  ((Se = 1), Object.defineProperty(M, "__esModule", { value: !0 }), (M.getCallBridge = void 0));
  const e = x();
  function r(o) {
    return !!o?.callBridge;
  }
  const n = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((M.getCallBridge = n), M);
}
var A = {},
  qe;
function Yr() {
  if (qe) return A;
  ((qe = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.withRateLimiter = void 0));
  const e = x(),
    r = (n, o, t, i) => {
      let s = Date.now(),
        l = 0;
      return async (...u) => {
        const a = Date.now();
        if ((a - s > t && ((s = a), (l = 0)), l >= o))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((l = l + 1), n(...u));
      };
    };
  return ((A.withRateLimiter = r), A);
}
var Me;
function _t() {
  return (
    Me ||
      ((Me = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = _(),
          n = x(),
          o = Yr(),
          t = (0, r.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((a) => typeof a == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (u, a) => {
            if (typeof u != "string") throw new n.BridgeAPIError("functionKey must be a string!");
            return (i(a), t("invoke", { functionKey: u, payload: a }));
          };
        e.invoke = (0, o.withRateLimiter)(
          s,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function l() {
          return e.invoke;
        }
        e.makeInvoke = l;
      })(de)),
    de
  );
}
var ke;
function mt() {
  return (
    ke ||
      ((ke = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(_t(), e));
      })(ue)),
    ue
  );
}
var fe = {},
  L = {},
  pe = {},
  Ae;
function Zr() {
  return (
    Ae ||
      ((Ae = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = _(),
          n = x(),
          o = Yr(),
          t = 500,
          i = 25,
          s = 1e3 * i;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          u = (f) => {
            if (f && Object.values(f).some((h) => typeof h == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (f) => async (h) => {
            u(h);
            const p = { ...h, invokeType: `ui-${f.toLowerCase()}-fetch` },
              y = await l("invoke", p),
              { success: v, payload: b, error: m } = y ?? {},
              w = { ...(v ? b : m) };
            if (w && w.headers)
              for (const F in w.headers)
                Array.isArray(w.headers[F]) && (w.headers[F] = w.headers[F].join(","));
            return w;
          },
          d = (f) => {
            const h = a(f);
            return (0, o.withRateLimiter)(
              h,
              t,
              s,
              `${f} invocation calls are rate limited at ${t}/${i}s`,
            );
          };
        e._invokeEndpointFn = d;
      })(pe)),
    pe
  );
}
var Le;
function wt() {
  if (Le) return L;
  ((Le = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.invokeRemote = void 0));
  const e = Zr(),
    r = (n) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(n);
  return ((L.invokeRemote = r), L);
}
var D = {},
  De;
function xt() {
  if (De) return D;
  ((De = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.invokeService = void 0));
  const e = Zr(),
    r = (n) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(n);
  return ((D.invokeService = r), D);
}
var Ne;
function jt() {
  return (
    Ne ||
      ((Ne = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(wt(), e), r.__exportStar(xt(), e));
      })(fe)),
    fe
  );
}
var he = {},
  N = {},
  $ = {},
  $e;
function Et() {
  if ($e) return $;
  (($e = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      if ((await n("submit", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = o), $);
}
var U = {},
  Ue;
function Ot() {
  if (Ue) return U;
  ((Ue = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.close = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      try {
        if ((await n("close", t)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((U.close = o), U);
}
var G = {},
  Ge;
function Rt() {
  if (Ge) return G;
  ((Ge = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.open = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await n("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((G.open = o), G);
}
var V = {},
  Ve;
function Pt() {
  if (Ve) return V;
  ((Ve = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.refresh = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      if ((await n("refresh", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((V.refresh = o), V);
}
var W = {},
  We;
function Ct() {
  if (We) return W;
  ((We = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.createHistory = void 0));
  const r = (0, _().getCallBridge)(),
    n = async () => {
      const o = await r("createHistory");
      return (
        o.listen((t) => {
          o.location = t;
        }),
        o
      );
    };
  return ((W.createHistory = n), W);
}
var H = {},
  ge = {},
  j = {},
  He;
function et() {
  return (
    He ||
      ((He = 1),
      Object.defineProperty(j, "__esModule", { value: !0 }),
      (j.FORGE_SUPPORTED_LOCALE_CODES = j.I18N_BUNDLE_FOLDER_NAME = j.I18N_INFO_FILE_NAME = void 0),
      (j.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (j.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (j.FORGE_SUPPORTED_LOCALE_CODES = [
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
    j
  );
}
var B = {},
  ze;
function Bt() {
  if (ze) return B;
  ((ze = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.TranslationsGetter = B.TranslationGetterError = void 0));
  const e = (o, t) => {
    o.includes(t) || o.push(t);
  };
  class r extends Error {
    constructor(t) {
      (super(t), (this.name = "TranslationGetterError"));
    }
  }
  B.TranslationGetterError = r;
  class n {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(t) {
      this.resourcesAccessor = t;
    }
    async getTranslations(t, i = { fallback: !0 }) {
      const s = await this.getI18nInfoConfig(),
        { fallback: l } = i;
      if (!l) {
        let u;
        return (
          s.locales.includes(t) && (u = await this.getTranslationResource(t)),
          { translations: u ?? null, locale: t }
        );
      }
      for (const u of this.getLocaleLookupOrder(t, s)) {
        const a = await this.getTranslationResource(u);
        if (a) return { translations: a, locale: u };
      }
      return { translations: null, locale: t };
    }
    async getTranslationsByLocaleLookupOrder(t) {
      const i = await this.getI18nInfoConfig(),
        s = this.getLocaleLookupOrder(t, i);
      return await Promise.all(
        s.map(async (l) => {
          const u = await this.getTranslationResource(l);
          return { locale: l, translations: u };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(t) {
      let i = this.translationResources.get(t);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(t)),
            this.translationResources.set(t, i));
        } catch (s) {
          throw s instanceof r ? s : new r(`Failed to get translation resource for locale: ${t}`);
        }
      return i;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (t) {
          throw t instanceof r ? t : new r("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(t, i) {
      const { locales: s, fallback: l } = i,
        u = [t],
        a = l[t];
      return (
        a && Array.isArray(a) && a.length > 0 && u.push(...a),
        e(u, i.fallback.default),
        u.filter((d) => s.includes(d))
      );
    }
  }
  return ((B.TranslationsGetter = n), B);
}
var z = {},
  ye = {},
  Je;
function rt() {
  return (
    Je ||
      ((Je = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const n = P.__importDefault(ut()),
          o = (i, s, l) => {
            const u = i[l];
            return u ? (0, e.getTranslationValueFromContent)(u, s) : null;
          };
        e.getTranslationValue = o;
        const t = (i, s) => {
          let l = i[s];
          if (!l) {
            const u = s.split(".");
            u.length > 1 && (l = (0, n.default)(i, u, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = t;
      })(ye)),
    ye
  );
}
var Qe;
function Tt() {
  if (Qe) return z;
  ((Qe = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.Translator = void 0));
  const e = rt();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(o, t) {
      ((this.locale = o), (this.translationsGetter = t));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(o) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let t = this.cache.get(o);
      if (t === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const s = (0, e.getTranslationValueFromContent)(i, o);
          if (s !== null) {
            t = s;
            break;
          }
        }
        ((t = t ?? null), this.cache.set(o, t));
      }
      return t;
    }
  }
  return ((z.Translator = r), z);
}
var J = {},
  Ke;
function It() {
  if (Ke) return J;
  ((Ke = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.ensureLocale = void 0));
  const e = et(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    n = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    o = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, s) => {
        const [l] = s.split("-");
        return (i[l] || (i[l] = s), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    t = (i) => {
      const s = i.replace("_", "-");
      return r.has(s) ? s : (o[s] ?? n[s] ?? null);
    };
  return ((J.ensureLocale = t), J);
}
var ve = {},
  Xe;
function Ft() {
  return (
    Xe ||
      ((Xe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          n = (a) => typeof a?.i18n == "string",
          o = (a) => a.startsWith("connect-"),
          t = (a) => a.startsWith("core:"),
          i = (a) => {
            const d = new Set(),
              f = (h, p) =>
                !r(h) || d.has(h)
                  ? []
                  : (d.add(h),
                    Object.entries(h).flatMap(([y, v]) => {
                      const b = [...p, y];
                      return n(v)
                        ? [{ propertyPath: b, key: v.i18n }]
                        : Array.isArray(v)
                          ? v.flatMap((m) => f(m, b))
                          : f(v, b);
                    }));
            return f(a, []);
          },
          s = (a) =>
            Object.entries(a).flatMap(([d, f]) =>
              !o(d) && !t(d) && f && Array.isArray(f) && f.length > 0 ? f.map((h) => [h, d]) : [],
            );
        e.getI18nSupportedModuleEntries = s;
        const l = (a) => {
          const d = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(a)) {
            const h = i(f[0]);
            for (const { key: p } of h) d.add(p);
          }
          return d.size > 0 ? Array.from(d) : [];
        };
        e.extractI18nKeysFromModules = l;
        const u = (a) => {
          const d = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(a)) {
            const h = i(f[0]);
            for (const p of h) d.push({ moduleName: f[1], ...p });
          }
          return d;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ve)),
    ve
  );
}
var be = {},
  Ye;
function St() {
  return (Ye || ((Ye = 1), Object.defineProperty(be, "__esModule", { value: !0 })), be);
}
var Ze;
function tt() {
  return (
    Ze ||
      ((Ze = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(et(), e),
          r.__exportStar(Bt(), e),
          r.__exportStar(Tt(), e),
          r.__exportStar(It(), e));
        var n = rt();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var o = Ft();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return o.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return o.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return o.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(St(), e));
      })(ge)),
    ge
  );
}
var er;
function qt() {
  if (er) return H;
  ((er = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getContext = void 0));
  const e = _(),
    r = tt(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      var t;
      const i = await n("getContext"),
        s = i?.locale;
      return (s && (i.locale = (t = (0, r.ensureLocale)(s)) !== null && t !== void 0 ? t : s), i);
    };
  return ((H.getContext = o), H);
}
var Q = {},
  rr;
function Mt() {
  if (rr) return Q;
  ((rr = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.changeWindowTitle = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      try {
        await n("changeWindowTitle", t);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Q.changeWindowTitle = o), Q);
}
var K = {},
  tr;
function kt() {
  if (tr) return K;
  ((tr = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.theme = void 0));
  const r = (0, _().getCallBridge)();
  return ((K.theme = { enable: () => r("enableTheming") }), K);
}
var X = {},
  Y = {},
  _e = {},
  T = {},
  nr;
function nt() {
  if (nr) return T;
  ((nr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.blobToBase64 = T.base64ToBlob = void 0));
  const e = (n, o) => {
    if (!n) return null;
    const t = n.includes(";base64") ? n.split(",")[1] : n,
      i = atob(t),
      s = new Array(i.length);
    for (let u = 0; u < i.length; u++) s[u] = i.charCodeAt(u);
    const l = new Uint8Array(s);
    return new Blob([l], { type: o });
  };
  T.base64ToBlob = e;
  const r = (n) =>
    new Promise((o, t) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = t),
        i.readAsDataURL(n));
    });
  return ((T.blobToBase64 = r), T);
}
var or;
function At() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = nt(),
          n = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const d = Object.getPrototypeOf(a);
            if (d === null) return !0;
            const f = Object.prototype.hasOwnProperty.call(d, "constructor") && d.constructor;
            return (
              typeof f == "function" &&
              f instanceof f &&
              Function.prototype.call(f) === Function.prototype.call(a)
            );
          },
          o = async (a) => ({ data: await (0, r.blobToBase64)(a), type: a.type }),
          t = (a) => (0, r.base64ToBlob)(a.data, a.type),
          i = async (a) => {
            if (a instanceof Blob) return { ...(await o(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((d) => (0, e.serialiseBlobsInPayload)(d)));
            if (a && n(a)) {
              const d = await Promise.all(
                Object.entries(a).map(async ([f, h]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(d);
            }
            return a;
          };
        e.serialiseBlobsInPayload = i;
        const s = (a) => {
          if (a && n(a) && "__isBlobData" in a) {
            const d = a;
            return t({ data: d.data, type: d.type });
          }
          if (Array.isArray(a)) return a.map((d) => (0, e.deserialiseBlobsInPayload)(d));
          if (a && n(a)) {
            const d = {};
            for (const [f, h] of Object.entries(a)) d[f] = (0, e.deserialiseBlobsInPayload)(h);
            return d;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = s;
        const l = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((d) => (0, e.containsBlobs)(d))
              : a && n(a)
                ? Object.values(a).some((d) => (0, e.containsBlobs)(d))
                : !1;
        e.containsBlobs = l;
        const u = (a) =>
          a && n(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((d) => (0, e.containsSerialisedBlobs)(d))
              : a && n(a)
                ? Object.values(a).some((d) => (0, e.containsSerialisedBlobs)(d))
                : !1;
        e.containsSerialisedBlobs = u;
      })(_e)),
    _e
  );
}
var ir;
function ot() {
  if (ir) return Y;
  ((ir = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.events = void 0));
  const e = _(),
    r = At(),
    n = (0, e.getCallBridge)(),
    o = async (i, s) => {
      let l = s;
      return (
        (0, r.containsBlobs)(s) && (l = await (0, r.serialiseBlobsInPayload)(s)),
        n("emit", { event: i, payload: l })
      );
    },
    t = (i, s) =>
      n("on", {
        event: i,
        callback: (u) => {
          let a = u;
          return (
            (0, r.containsSerialisedBlobs)(u) && (a = (0, r.deserialiseBlobsInPayload)(u)),
            s(a)
          );
        },
      });
  return ((Y.events = { emit: o, on: t }), Y);
}
var sr;
function Lt() {
  if (sr) return X;
  ((sr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.emitReadyEvent = void 0));
  const e = ot(),
    r = it(),
    n = "EXTENSION_READY",
    o = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
    };
  return ((X.emitReadyEvent = o), X);
}
var ar;
function it() {
  if (ar) return N;
  ((ar = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.view = void 0));
  const e = Et(),
    r = Ot(),
    n = Rt(),
    o = Pt(),
    t = Ct(),
    i = qt(),
    s = Mt(),
    l = kt(),
    u = Lt();
  return (
    (N.view = {
      submit: e.submit,
      close: r.close,
      open: n.open,
      refresh: o.refresh,
      createHistory: t.createHistory,
      getContext: i.getContext,
      theme: l.theme,
      changeWindowTitle: s.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
    }),
    N
  );
}
var lr;
function st() {
  return (
    lr ||
      ((lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(it(), e));
      })(he)),
    he
  );
}
var me = {},
  Z = {},
  cr;
function Dt() {
  if (cr) return Z;
  ((cr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.router = void 0));
  const r = (0, _().getCallBridge)(),
    n = async (s) => {
      if (!s?.target) throw new Error("target is required for getUrl");
      const l = await r("getUrl", s);
      if (!l) throw new Error("Failed to get URL");
      try {
        return new URL(l);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${l} (${u})`);
      }
    },
    o = (s) => {
      if (typeof s == "string") return r("navigate", { url: s, type: "same-tab" });
      if (!s?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...s, type: "same-tab" });
    },
    t = (s) => {
      if (typeof s == "string") return r("navigate", { url: s, type: "new-tab" });
      if (!s?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...s, type: "new-tab" });
    },
    i = async () => r("reload");
  return ((Z.router = { getUrl: n, navigate: o, open: t, reload: i }), Z);
}
var ur;
function Nt() {
  return (
    ur ||
      ((ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Dt(), e));
      })(me)),
    me
  );
}
var we = {},
  ee = {},
  dr;
function $t() {
  if (dr) return ee;
  ((dr = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Modal = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = () => {};
  class t {
    constructor(s) {
      var l, u;
      ((this.resource = s?.resource || null),
        (this.onClose = s?.onClose || o),
        (this.size = s?.size || "medium"),
        (this.context = s?.context || {}),
        (this.closeOnEscape = (l = s?.closeOnEscape) !== null && l !== void 0 ? l : !0),
        (this.closeOnOverlayClick =
          (u = s?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0));
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
          throw new r.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new r.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((ee.Modal = t), ee);
}
var fr;
function Ut() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar($t(), e));
      })(we)),
    we
  );
}
var E = {},
  re = {},
  pr;
function Gt() {
  if (pr) return re;
  ((pr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.productFetchApi = void 0));
  const e = nt(),
    r = async (t) => {
      const i = {};
      for (const [s, l] of t.entries())
        if (s === "file") {
          const u = l.name,
            a = l.type;
          ((i.file = await (0, e.blobToBase64)(l)), (i.__fileName = u), (i.__fileType = a));
        } else i[s] = l;
      return JSON.stringify(i);
    },
    n = async (t) => {
      const i = t?.body instanceof FormData,
        s = i ? await r(t?.body) : t?.body,
        l = new Request("", { body: s, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(u),
        isMultipartFormData: i,
      };
    },
    o = (t) => {
      const i = async (s, l, u) => {
        const { body: a, headers: d, isMultipartFormData: f } = await n(u);
        d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
        const h = {
            product: s,
            restPath: l,
            fetchRequestInit: { ...u, body: a, headers: [...d.entries()] },
            isMultipartFormData: f,
          },
          {
            body: p,
            headers: y,
            statusText: v,
            status: b,
            isAttachment: m,
          } = await t("fetchProduct", h),
          w = m ? (0, e.base64ToBlob)(p, y["content-type"]) : p;
        return new Response(w || null, { headers: y, status: b, statusText: v });
      };
      return {
        requestConfluence: (s, l) => i("confluence", s, l),
        requestJira: (s, l) => i("jira", s, l),
        requestBitbucket: (s, l) => i("bitbucket", s, l),
      };
    };
  return ((re.productFetchApi = o), re);
}
var hr;
function Vt() {
  if (hr) return E;
  hr = 1;
  var e;
  (Object.defineProperty(E, "__esModule", { value: !0 }),
    (E.requestBitbucket = E.requestJira = E.requestConfluence = void 0));
  const r = _();
  return (
    (e = (0, Gt().productFetchApi)((0, r.getCallBridge)())),
    (E.requestConfluence = e.requestConfluence),
    (E.requestJira = e.requestJira),
    (E.requestBitbucket = e.requestBitbucket),
    E
  );
}
var xe = {},
  te = {},
  gr;
function Wt() {
  if (gr) return te;
  ((gr = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.showFlag = void 0));
  const e = _(),
    r = x(),
    n = (0, e.getCallBridge)(),
    o = (t) => {
      var i;
      if (!t.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const s = n("showFlag", { ...t, type: (i = t.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await s, n("closeFlag", { id: t.id })) };
    };
  return ((te.showFlag = o), te);
}
var yr;
function Ht() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Wt();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(xe)),
    xe
  );
}
var je = {},
  vr;
function zt() {
  return (
    vr ||
      ((vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ot(), e));
      })(je)),
    je
  );
}
var Ee = {},
  ne = {},
  br;
function Jt() {
  if (br) return ne;
  ((br = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.realtime = void 0));
  const r = (0, _().getCallBridge)(),
    n = (s, l, u) => r("publishRealtimeChannel", { channelName: s, eventPayload: l, options: u }),
    o = (s, l, u) => r("subscribeRealtimeChannel", { channelName: s, onEvent: l, options: u }),
    t = (s, l, u) =>
      r("publishRealtimeChannel", { channelName: s, eventPayload: l, options: u, isGlobal: !0 }),
    i = (s, l, u) =>
      r("subscribeRealtimeChannel", { channelName: s, onEvent: l, options: u, isGlobal: !0 });
  return ((ne.realtime = { publish: n, subscribe: o, publishGlobal: t, subscribeGlobal: i }), ne);
}
var Oe = {},
  _r;
function Qt() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (r) {
            ((r.Board = "board"), (r.Issue = "issue"), (r.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(Oe)),
    Oe
  );
}
var mr;
function Kt() {
  return (
    mr ||
      ((mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var r = Jt();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var n = Qt();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return n.Jira;
          },
        });
      })(Ee)),
    Ee
  );
}
var O = {},
  wr;
function Xt() {
  if (wr) return O;
  ((wr = 1),
    Object.defineProperty(O, "__esModule", { value: !0 }),
    (O.createTranslationFunction = O.getTranslations = O.resetTranslationsCache = void 0));
  const e = tt(),
    r = st(),
    n = {
      getI18nInfoConfig: async () => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!l.ok) throw new Error("Failed to get i18n info config: " + l.statusText);
        return (await l.json()).config;
      },
      getTranslationResource: async (l) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${l}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${l}`);
        return u.json();
      },
    },
    o = new e.TranslationsGetter(n),
    t = () => {
      o.reset();
    };
  O.resetTranslationsCache = t;
  const i = async (l = null, u = { fallback: !0 }) => {
    let a = l;
    return (a || (a = (await r.view.getContext()).locale), await o.getTranslations(a, u));
  };
  O.getTranslations = i;
  const s = async (l = null) => {
    let u = l;
    u || (u = (await r.view.getContext()).locale);
    const a = new e.Translator(u, o);
    return (
      await a.init(),
      (d, f) => {
        var h, p;
        return (p = (h = a.translate(d)) !== null && h !== void 0 ? h : f) !== null && p !== void 0
          ? p
          : d;
      }
    );
  };
  return ((O.createTranslationFunction = s), O);
}
var xr;
function Yt() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var n = bt();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          r.__exportStar(mt(), e),
          r.__exportStar(jt(), e),
          r.__exportStar(st(), e),
          r.__exportStar(Nt(), e),
          r.__exportStar(Ut(), e),
          r.__exportStar(Vt(), e),
          r.__exportStar(Ht(), e),
          r.__exportStar(zt(), e),
          r.__exportStar(Kt(), e),
          (e.i18n = r.__importStar(Xt())));
      })(ce)),
    ce
  );
}
var oe = Yt();
const Zt = () => {
    const [e, r] = R.useState(null),
      [n, o] = R.useState(null),
      [t, i] = R.useState(!1),
      [s, l] = R.useState(null),
      [u, a] = R.useState(null),
      [d, f] = R.useState(null),
      [h, p] = R.useState(null),
      [y, v] = R.useState({ userName: "", product: "" }),
      b = async (g) => {
        (i(!0), l(null));
        try {
          const C = await oe.invoke("fetch", { cacheable: g });
          r(C);
        } catch (C) {
          l(C instanceof Error ? C.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      m = async () => {
        if (!y.userName.trim() || !y.product.trim()) {
          a("Please fill in all fields");
          return;
        }
        (i(!0), a(null));
        try {
          (await oe.invoke("insertUserOrOrder", y), a(null), v({ userName: "", product: "" }));
        } catch (g) {
          a(g instanceof Error ? g.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      w = async () => {
        (i(!0), f(null));
        try {
          (await oe.invoke("clearCache"), f(null));
        } catch (g) {
          f(g instanceof Error ? g.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      F = async () => {
        (i(!0), p(null));
        try {
          const g = await oe.invoke("runPerformanceAnalyze");
          (o(g), p(null));
        } catch (g) {
          p(g instanceof Error ? g.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return c.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        c.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        c.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            c.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            c.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                c.jsxs("li", {
                  children: [
                    c.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                c.jsxs("li", {
                  children: [
                    c.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                c.jsxs("li", {
                  children: [
                    c.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    c.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                c.jsxs("li", {
                  children: [
                    c.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            c.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            c.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            c.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "20px" },
              children: [
                c.jsx("button", {
                  onClick: () => b(!1),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "🚫 Non-Cached Query",
                }),
                c.jsx("button", {
                  onClick: () => b(!0),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "✅ Cached Query",
                }),
              ],
            }),
            s &&
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [c.jsx("strong", { children: "Error:" }), " ", s],
              }),
            e &&
              !s &&
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  c.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  c.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  c.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: c.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        c.jsx("thead", {
                          children: c.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              c.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              c.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              c.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              c.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product ID",
                              }),
                            ],
                          }),
                        }),
                        c.jsx("tbody", {
                          children: e.rows.map((g, C) =>
                            c.jsxs(
                              "tr",
                              {
                                children: [
                                  c.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: g.userId,
                                  }),
                                  c.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: g.userName,
                                  }),
                                  c.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: g.product || "N/A",
                                  }),
                                  c.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: g.productId || "N/A",
                                  }),
                                ],
                              },
                              C,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
        c.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            c.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            c.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            c.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: y.userId || "",
                      onChange: (g) =>
                        v({ ...y, userId: g.target.value ? parseInt(g.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: y.userName,
                      onChange: (g) => v({ ...y, userName: g.target.value }),
                      placeholder: "Enter user name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: y.productId || "",
                      onChange: (g) =>
                        v({ ...y, productId: g.target.value ? parseInt(g.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: y.product,
                      onChange: (g) => v({ ...y, product: g.target.value }),
                      placeholder: "Enter product name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("button", {
              onClick: m,
              disabled: t,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: t ? "not-allowed" : "pointer",
                opacity: t ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: t ? "Processing..." : "➕ Add User & Order",
            }),
            u &&
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [c.jsx("strong", { children: "Error:" }), " ", u],
              }),
          ],
        }),
        c.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            c.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            c.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            c.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                c.jsx("button", {
                  onClick: w,
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "🗑️ Clear Cache",
                }),
                c.jsx("button", {
                  onClick: F,
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            d &&
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [c.jsx("strong", { children: "Error:" }), " ", d],
              }),
            h &&
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [c.jsx("strong", { children: "Error:" }), " ", h],
              }),
          ],
        }),
        n &&
          !h &&
          c.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              c.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              c.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  c.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      c.jsxs("div", {
                        children: [c.jsx("strong", { children: "Window:" }), " ", n.window],
                      }),
                      c.jsxs("div", {
                        children: [c.jsx("strong", { children: "Top Queries:" }), " ", n.top],
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          n.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (n.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(n.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  n.rows.length > 0
                    ? c.jsxs("div", {
                        children: [
                          c.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", n.rows.length, ")"],
                          }),
                          n.rows.map((g, C) =>
                            c.jsxs(
                              "div",
                              {
                                style: {
                                  marginBottom: "20px",
                                  padding: "15px",
                                  backgroundColor: "#FFF2CC",
                                  border: "1px solid #FFD700",
                                  borderRadius: "4px",
                                },
                                children: [
                                  c.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          g.rank,
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Type:" }),
                                          " ",
                                          g.stmtType,
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          g.execCount,
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          g.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          g.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          g.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          g.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          g.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      c.jsx("strong", { children: "SQL Query:" }),
                                      c.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: g.digestText,
                                      }),
                                    ],
                                  }),
                                  c.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      c.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      c.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: g.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              C,
                            ),
                          ),
                        ],
                      })
                    : c.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          c.jsx("strong", { children: "✅ No slow queries found!" }),
                          c.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  en = document.getElementById("root"),
  rn = at.createRoot(en),
  jr = () => {
    rn.render(c.jsx(pt.StrictMode, { children: c.jsx(Zt, {}) }));
  };
oe.view.theme
  .enable()
  .then(() => {
    jr();
  })
  .catch((e) => {
    (console.error(e.message), jr());
  });
