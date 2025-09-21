import { r as xr, c as it } from "./react-dom-vendor-DUDfcWRj.js";
import { g as st, a as at, r as lt } from "./lodash-vendor-RhPBt8ex.js";
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
var se = { exports: {} },
  T = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pe;
function ct() {
  if (Pe) return T;
  Pe = 1;
  var e = xr(),
    r = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, a) {
    var d,
      f = {},
      y = null,
      p = null;
    (a !== void 0 && (y = "" + a),
      c.key !== void 0 && (y = "" + c.key),
      c.ref !== void 0 && (p = c.ref));
    for (d in c) o.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in ((c = l.defaultProps), c)) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: r, type: l, key: y, ref: p, props: f, _owner: t.current };
  }
  return ((T.Fragment = n), (T.jsx = s), (T.jsxs = s), T);
}
var Be;
function ut() {
  return (Be || ((Be = 1), (se.exports = ct())), se.exports);
}
var u = ut(),
  B = xr();
const dt = st(B);
var ae = {},
  Oe = function (e, r) {
    return (
      (Oe =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, o) {
            n.__proto__ = o;
          }) ||
        function (n, o) {
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t]);
        }),
      Oe(e, r)
    );
  };
function jr(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Oe(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
}
var te = function () {
  return (
    (te =
      Object.assign ||
      function (r) {
        for (var n, o = 1, t = arguments.length; o < t; o++) {
          n = arguments[o];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }
        return r;
      }),
    te.apply(this, arguments)
  );
};
function Or(e, r) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, o = Object.getOwnPropertySymbols(e); t < o.length; t++)
      r.indexOf(o[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[t]) &&
        (n[o[t]] = e[o[t]]);
  return n;
}
function Er(e, r, n, o) {
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
function Rr(e, r) {
  return function (n, o) {
    r(n, o, e);
  };
}
function Pr(e, r, n, o, t, i) {
  function s(_) {
    if (_ !== void 0 && typeof _ != "function") throw new TypeError("Function expected");
    return _;
  }
  for (
    var l = o.kind,
      c = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      a = !r && e ? (o.static ? e : e.prototype) : null,
      d = r || (a ? Object.getOwnPropertyDescriptor(a, o.name) : {}),
      f,
      y = !1,
      p = n.length - 1;
    p >= 0;
    p--
  ) {
    var h = {};
    for (var g in o) h[g] = g === "access" ? {} : o[g];
    for (var g in o.access) h.access[g] = o.access[g];
    h.addInitializer = function (_) {
      if (y) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(s(_ || null));
    };
    var v = (0, n[p])(l === "accessor" ? { get: d.get, set: d.set } : d[c], h);
    if (l === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((f = s(v.get)) && (d.get = f),
        (f = s(v.set)) && (d.set = f),
        (f = s(v.init)) && t.unshift(f));
    } else (f = s(v)) && (l === "field" ? t.unshift(f) : (d[c] = f));
  }
  (a && Object.defineProperty(a, o.name, d), (y = !0));
}
function Br(e, r, n) {
  for (var o = arguments.length > 2, t = 0; t < r.length; t++)
    n = o ? r[t].call(e, n) : r[t].call(e);
  return o ? n : void 0;
}
function Cr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Tr(e, r, n) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", r) : r })
  );
}
function Ir(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Sr(e, r, n, o) {
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
    function c(d) {
      try {
        a(o.throw(d));
      } catch (f) {
        s(f);
      }
    }
    function a(d) {
      d.done ? i(d.value) : t(d.value).then(l, c);
    }
    a((o = o.apply(e, r || [])).next());
  });
}
function Fr(e, r) {
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
      return c([a, d]);
    };
  }
  function c(a) {
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
var oe = Object.create
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
function qr(e, r) {
  for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && oe(r, e, n);
}
function ne(e) {
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
function Re(e, r) {
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
function Mr() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Re(arguments[r]));
  return e;
}
function kr() {
  for (var e = 0, r = 0, n = arguments.length; r < n; r++) e += arguments[r].length;
  for (var o = Array(e), t = 0, r = 0; r < n; r++)
    for (var i = arguments[r], s = 0, l = i.length; s < l; s++, t++) o[t] = i[s];
  return o;
}
function Ar(e, r, n) {
  if (n || arguments.length === 2)
    for (var o = 0, t = r.length, i; o < t; o++)
      (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), (i[o] = r[o]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function C(e) {
  return this instanceof C ? ((this.v = e), this) : new C(e);
}
function Lr(e, r, n) {
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
    return function (h) {
      return Promise.resolve(h).then(p, f);
    };
  }
  function l(p, h) {
    o[p] &&
      ((t[p] = function (g) {
        return new Promise(function (v, _) {
          i.push([p, g, v, _]) > 1 || c(p, g);
        });
      }),
      h && (t[p] = h(t[p])));
  }
  function c(p, h) {
    try {
      a(o[p](h));
    } catch (g) {
      y(i[0][3], g);
    }
  }
  function a(p) {
    p.value instanceof C ? Promise.resolve(p.value.v).then(d, f) : y(i[0][2], p);
  }
  function d(p) {
    c("next", p);
  }
  function f(p) {
    c("throw", p);
  }
  function y(p, h) {
    (p(h), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function Dr(e) {
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
          return (n = !n) ? { value: C(e[t](s)), done: !1 } : i ? i(s) : s;
        }
      : i;
  }
}
function Nr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    n;
  return r
    ? r.call(e)
    : ((e = typeof ne == "function" ? ne(e) : e[Symbol.iterator]()),
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
        return new Promise(function (l, c) {
          ((s = e[i](s)), t(l, c, s.done, s.value));
        });
      };
  }
  function t(i, s, l, c) {
    Promise.resolve(c).then(function (a) {
      i({ value: a, done: l });
    }, s);
  }
}
function $r(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ft = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Ee = function (e) {
    return (
      (Ee =
        Object.getOwnPropertyNames ||
        function (r) {
          var n = [];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[n.length] = o);
          return n;
        }),
      Ee(e)
    );
  };
function Ur(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var n = Ee(e), o = 0; o < n.length; o++) n[o] !== "default" && oe(r, e, n[o]);
  return (ft(r, e), r);
}
function Gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vr(e, r, n, o) {
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !o : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : r.get(e);
}
function Wr(e, r, n, o, t) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !t) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !t : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (o === "a" ? t.call(e, n) : t ? (t.value = n) : r.set(e, n), n);
}
function Hr(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function zr(e, r, n) {
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
var ht =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, n) {
        var o = new Error(n);
        return ((o.name = "SuppressedError"), (o.error = e), (o.suppressed = r), o);
      };
function Jr(e) {
  function r(i) {
    ((e.error = e.hasError ? new ht(i, e.error, "An error was suppressed during disposal.") : i),
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
function Kr(e, r) {
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
const pt = {
    __extends: jr,
    __assign: te,
    __rest: Or,
    __decorate: Er,
    __param: Rr,
    __esDecorate: Pr,
    __runInitializers: Br,
    __propKey: Cr,
    __setFunctionName: Tr,
    __metadata: Ir,
    __awaiter: Sr,
    __generator: Fr,
    __createBinding: oe,
    __exportStar: qr,
    __values: ne,
    __read: Re,
    __spread: Mr,
    __spreadArrays: kr,
    __spreadArray: Ar,
    __await: C,
    __asyncGenerator: Lr,
    __asyncDelegator: Dr,
    __asyncValues: Nr,
    __makeTemplateObject: $r,
    __importStar: Ur,
    __importDefault: Gr,
    __classPrivateFieldGet: Vr,
    __classPrivateFieldSet: Wr,
    __classPrivateFieldIn: Hr,
    __addDisposableResource: zr,
    __disposeResources: Jr,
    __rewriteRelativeImportExtension: Kr,
  },
  yt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: zr,
        get __assign() {
          return te;
        },
        __asyncDelegator: Dr,
        __asyncGenerator: Lr,
        __asyncValues: Nr,
        __await: C,
        __awaiter: Sr,
        __classPrivateFieldGet: Vr,
        __classPrivateFieldIn: Hr,
        __classPrivateFieldSet: Wr,
        __createBinding: oe,
        __decorate: Er,
        __disposeResources: Jr,
        __esDecorate: Pr,
        __exportStar: qr,
        __extends: jr,
        __generator: Fr,
        __importDefault: Gr,
        __importStar: Ur,
        __makeTemplateObject: $r,
        __metadata: Ir,
        __param: Rr,
        __propKey: Cr,
        __read: Re,
        __rest: Or,
        __rewriteRelativeImportExtension: Kr,
        __runInitializers: Br,
        __setFunctionName: Tr,
        __spread: Mr,
        __spreadArray: Ar,
        __spreadArrays: kr,
        __values: ne,
        default: pt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E = at(yt);
var I = {},
  Ce;
function gt() {
  return (
    Ce ||
      ((Ce = 1),
      Object.defineProperty(I, "__esModule", { value: !0 }),
      (I.NavigationTarget = void 0),
      (I.NavigationTarget = {
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
    I
  );
}
var le = {},
  ce = {},
  S = {},
  F = {},
  Te;
function m() {
  if (Te) return F;
  ((Te = 1), Object.defineProperty(F, "__esModule", { value: !0 }), (F.BridgeAPIError = void 0));
  class e extends Error {}
  return ((F.BridgeAPIError = e), F);
}
var Ie;
function b() {
  if (Ie) return S;
  ((Ie = 1), Object.defineProperty(S, "__esModule", { value: !0 }), (S.getCallBridge = void 0));
  const e = m();
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
  return ((S.getCallBridge = n), S);
}
var q = {},
  Se;
function Qr() {
  if (Se) return q;
  ((Se = 1), Object.defineProperty(q, "__esModule", { value: !0 }), (q.withRateLimiter = void 0));
  const e = m(),
    r = (n, o, t, i) => {
      let s = Date.now(),
        l = 0;
      return async (...c) => {
        const a = Date.now();
        if ((a - s > t && ((s = a), (l = 0)), l >= o))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((l = l + 1), n(...c));
      };
    };
  return ((q.withRateLimiter = r), q);
}
var Fe;
function vt() {
  return (
    Fe ||
      ((Fe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = b(),
          n = m(),
          o = Qr(),
          t = (0, r.getCallBridge)(),
          i = (c) => {
            if (c && Object.values(c).some((a) => typeof a == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (c, a) => {
            if (typeof c != "string") throw new n.BridgeAPIError("functionKey must be a string!");
            return (i(a), t("invoke", { functionKey: c, payload: a }));
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
      })(ce)),
    ce
  );
}
var qe;
function bt() {
  return (
    qe ||
      ((qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(vt(), e));
      })(le)),
    le
  );
}
var ue = {},
  M = {},
  de = {},
  Me;
function Xr() {
  return (
    Me ||
      ((Me = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = b(),
          n = m(),
          o = Qr(),
          t = 500,
          i = 25,
          s = 1e3 * i;
        (function (f) {
          ((f.REMOTE = "Remote"), (f.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, r.getCallBridge)(),
          c = (f) => {
            if (f && Object.values(f).some((y) => typeof y == "function"))
              throw new n.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (f) => async (y) => {
            c(y);
            const p = { ...y, invokeType: `ui-${f.toLowerCase()}-fetch` },
              h = await l("invoke", p),
              { success: g, payload: v, error: _ } = h ?? {},
              w = { ...(g ? v : _) };
            if (w && w.headers)
              for (const ie in w.headers)
                Array.isArray(w.headers[ie]) && (w.headers[ie] = w.headers[ie].join(","));
            return w;
          },
          d = (f) => {
            const y = a(f);
            return (0, o.withRateLimiter)(
              y,
              t,
              s,
              `${f} invocation calls are rate limited at ${t}/${i}s`,
            );
          };
        e._invokeEndpointFn = d;
      })(de)),
    de
  );
}
var ke;
function _t() {
  if (ke) return M;
  ((ke = 1), Object.defineProperty(M, "__esModule", { value: !0 }), (M.invokeRemote = void 0));
  const e = Xr(),
    r = (n) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(n);
  return ((M.invokeRemote = r), M);
}
var k = {},
  Ae;
function mt() {
  if (Ae) return k;
  ((Ae = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.invokeService = void 0));
  const e = Xr(),
    r = (n) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(n);
  return ((k.invokeService = r), k);
}
var Le;
function wt() {
  return (
    Le ||
      ((Le = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = E;
        (r.__exportStar(_t(), e), r.__exportStar(mt(), e));
      })(ue)),
    ue
  );
}
var fe = {},
  A = {},
  L = {},
  De;
function xt() {
  if (De) return L;
  ((De = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.submit = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      if ((await n("submit", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((L.submit = o), L);
}
var D = {},
  Ne;
function jt() {
  if (Ne) return D;
  ((Ne = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.close = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      try {
        if ((await n("close", t)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((D.close = o), D);
}
var N = {},
  $e;
function Ot() {
  if ($e) return N;
  (($e = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.open = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      try {
        if ((await n("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((N.open = o), N);
}
var $ = {},
  Ue;
function Et() {
  if (Ue) return $;
  ((Ue = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.refresh = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      if ((await n("refresh", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (($.refresh = o), $);
}
var U = {},
  Ge;
function Rt() {
  if (Ge) return U;
  ((Ge = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.createHistory = void 0));
  const r = (0, b().getCallBridge)(),
    n = async () => {
      const o = await r("createHistory");
      return (
        o.listen((t) => {
          o.location = t;
        }),
        o
      );
    };
  return ((U.createHistory = n), U);
}
var G = {},
  he = {},
  x = {},
  Ve;
function Yr() {
  return (
    Ve ||
      ((Ve = 1),
      Object.defineProperty(x, "__esModule", { value: !0 }),
      (x.FORGE_SUPPORTED_LOCALE_CODES = x.I18N_BUNDLE_FOLDER_NAME = x.I18N_INFO_FILE_NAME = void 0),
      (x.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (x.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (x.FORGE_SUPPORTED_LOCALE_CODES = [
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
    x
  );
}
var R = {},
  We;
function Pt() {
  if (We) return R;
  ((We = 1),
    Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.TranslationsGetter = R.TranslationGetterError = void 0));
  const e = (o, t) => {
    o.includes(t) || o.push(t);
  };
  class r extends Error {
    constructor(t) {
      (super(t), (this.name = "TranslationGetterError"));
    }
  }
  R.TranslationGetterError = r;
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
        let c;
        return (
          s.locales.includes(t) && (c = await this.getTranslationResource(t)),
          { translations: c ?? null, locale: t }
        );
      }
      for (const c of this.getLocaleLookupOrder(t, s)) {
        const a = await this.getTranslationResource(c);
        if (a) return { translations: a, locale: c };
      }
      return { translations: null, locale: t };
    }
    async getTranslationsByLocaleLookupOrder(t) {
      const i = await this.getI18nInfoConfig(),
        s = this.getLocaleLookupOrder(t, i);
      return await Promise.all(
        s.map(async (l) => {
          const c = await this.getTranslationResource(l);
          return { locale: l, translations: c };
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
        c = [t],
        a = l[t];
      return (
        a && Array.isArray(a) && a.length > 0 && c.push(...a),
        e(c, i.fallback.default),
        c.filter((d) => s.includes(d))
      );
    }
  }
  return ((R.TranslationsGetter = n), R);
}
var V = {},
  pe = {},
  He;
function Zr() {
  return (
    He ||
      ((He = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const n = E.__importDefault(lt()),
          o = (i, s, l) => {
            const c = i[l];
            return c ? (0, e.getTranslationValueFromContent)(c, s) : null;
          };
        e.getTranslationValue = o;
        const t = (i, s) => {
          let l = i[s];
          if (!l) {
            const c = s.split(".");
            c.length > 1 && (l = (0, n.default)(i, c, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = t;
      })(pe)),
    pe
  );
}
var ze;
function Bt() {
  if (ze) return V;
  ((ze = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.Translator = void 0));
  const e = Zr();
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
  return ((V.Translator = r), V);
}
var W = {},
  Je;
function Ct() {
  if (Je) return W;
  ((Je = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.ensureLocale = void 0));
  const e = Yr(),
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
  return ((W.ensureLocale = t), W);
}
var ye = {},
  Ke;
function Tt() {
  return (
    Ke ||
      ((Ke = 1),
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
              f = (y, p) =>
                !r(y) || d.has(y)
                  ? []
                  : (d.add(y),
                    Object.entries(y).flatMap(([h, g]) => {
                      const v = [...p, h];
                      return n(g)
                        ? [{ propertyPath: v, key: g.i18n }]
                        : Array.isArray(g)
                          ? g.flatMap((_) => f(_, v))
                          : f(g, v);
                    }));
            return f(a, []);
          },
          s = (a) =>
            Object.entries(a).flatMap(([d, f]) =>
              !o(d) && !t(d) && f && Array.isArray(f) && f.length > 0 ? f.map((y) => [y, d]) : [],
            );
        e.getI18nSupportedModuleEntries = s;
        const l = (a) => {
          const d = new Set();
          for (const f of (0, e.getI18nSupportedModuleEntries)(a)) {
            const y = i(f[0]);
            for (const { key: p } of y) d.add(p);
          }
          return d.size > 0 ? Array.from(d) : [];
        };
        e.extractI18nKeysFromModules = l;
        const c = (a) => {
          const d = [];
          for (const f of (0, e.getI18nSupportedModuleEntries)(a)) {
            const y = i(f[0]);
            for (const p of y) d.push({ moduleName: f[1], ...p });
          }
          return d;
        };
        e.extractI18nPropertiesFromModules = c;
      })(ye)),
    ye
  );
}
var ge = {},
  Qe;
function It() {
  return (Qe || ((Qe = 1), Object.defineProperty(ge, "__esModule", { value: !0 })), ge);
}
var Xe;
function et() {
  return (
    Xe ||
      ((Xe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = E;
        (r.__exportStar(Yr(), e),
          r.__exportStar(Pt(), e),
          r.__exportStar(Bt(), e),
          r.__exportStar(Ct(), e));
        var n = Zr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return n.getTranslationValue;
          },
        });
        var o = Tt();
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
          r.__exportStar(It(), e));
      })(he)),
    he
  );
}
var Ye;
function St() {
  if (Ye) return G;
  ((Ye = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getContext = void 0));
  const e = b(),
    r = et(),
    n = (0, e.getCallBridge)(),
    o = async () => {
      var t;
      const i = await n("getContext"),
        s = i?.locale;
      return (s && (i.locale = (t = (0, r.ensureLocale)(s)) !== null && t !== void 0 ? t : s), i);
    };
  return ((G.getContext = o), G);
}
var H = {},
  Ze;
function Ft() {
  if (Ze) return H;
  ((Ze = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.changeWindowTitle = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = async (t) => {
      try {
        await n("changeWindowTitle", t);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((H.changeWindowTitle = o), H);
}
var z = {},
  er;
function qt() {
  if (er) return z;
  ((er = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.theme = void 0));
  const r = (0, b().getCallBridge)();
  return ((z.theme = { enable: () => r("enableTheming") }), z);
}
var J = {},
  K = {},
  ve = {},
  P = {},
  rr;
function rt() {
  if (rr) return P;
  ((rr = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.blobToBase64 = P.base64ToBlob = void 0));
  const e = (n, o) => {
    if (!n) return null;
    const t = n.includes(";base64") ? n.split(",")[1] : n,
      i = atob(t),
      s = new Array(i.length);
    for (let c = 0; c < i.length; c++) s[c] = i.charCodeAt(c);
    const l = new Uint8Array(s);
    return new Blob([l], { type: o });
  };
  P.base64ToBlob = e;
  const r = (n) =>
    new Promise((o, t) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        o(i.result);
      }),
        (i.onerror = t),
        i.readAsDataURL(n));
    });
  return ((P.blobToBase64 = r), P);
}
var tr;
function Mt() {
  return (
    tr ||
      ((tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = rt(),
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
                Object.entries(a).map(async ([f, y]) => [
                  f,
                  await (0, e.serialiseBlobsInPayload)(y),
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
            for (const [f, y] of Object.entries(a)) d[f] = (0, e.deserialiseBlobsInPayload)(y);
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
        const c = (a) =>
          a && n(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((d) => (0, e.containsSerialisedBlobs)(d))
              : a && n(a)
                ? Object.values(a).some((d) => (0, e.containsSerialisedBlobs)(d))
                : !1;
        e.containsSerialisedBlobs = c;
      })(ve)),
    ve
  );
}
var nr;
function tt() {
  if (nr) return K;
  ((nr = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.events = void 0));
  const e = b(),
    r = Mt(),
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
        callback: (c) => {
          let a = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (a = (0, r.deserialiseBlobsInPayload)(c)),
            s(a)
          );
        },
      });
  return ((K.events = { emit: o, on: t }), K);
}
var or;
function kt() {
  if (or) return J;
  ((or = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.emitReadyEvent = void 0));
  const e = tt(),
    r = nt(),
    n = "EXTENSION_READY",
    o = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
    };
  return ((J.emitReadyEvent = o), J);
}
var ir;
function nt() {
  if (ir) return A;
  ((ir = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.view = void 0));
  const e = xt(),
    r = jt(),
    n = Ot(),
    o = Et(),
    t = Rt(),
    i = St(),
    s = Ft(),
    l = qt(),
    c = kt();
  return (
    (A.view = {
      submit: e.submit,
      close: r.close,
      open: n.open,
      refresh: o.refresh,
      createHistory: t.createHistory,
      getContext: i.getContext,
      theme: l.theme,
      changeWindowTitle: s.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    A
  );
}
var sr;
function ot() {
  return (
    sr ||
      ((sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(nt(), e));
      })(fe)),
    fe
  );
}
var be = {},
  Q = {},
  ar;
function At() {
  if (ar) return Q;
  ((ar = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.router = void 0));
  const r = (0, b().getCallBridge)(),
    n = async (s) => {
      if (!s?.target) throw new Error("target is required for getUrl");
      const l = await r("getUrl", s);
      if (!l) throw new Error("Failed to get URL");
      try {
        return new URL(l);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${l} (${c})`);
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
  return ((Q.router = { getUrl: n, navigate: o, open: t, reload: i }), Q);
}
var lr;
function Lt() {
  return (
    lr ||
      ((lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(At(), e));
      })(be)),
    be
  );
}
var _e = {},
  X = {},
  cr;
function Dt() {
  if (cr) return X;
  ((cr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.Modal = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = () => {};
  class t {
    constructor(s) {
      var l, c;
      ((this.resource = s?.resource || null),
        (this.onClose = s?.onClose || o),
        (this.size = s?.size || "medium"),
        (this.context = s?.context || {}),
        (this.closeOnEscape = (l = s?.closeOnEscape) !== null && l !== void 0 ? l : !0),
        (this.closeOnOverlayClick =
          (c = s?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
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
  return ((X.Modal = t), X);
}
var ur;
function Nt() {
  return (
    ur ||
      ((ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(Dt(), e));
      })(_e)),
    _e
  );
}
var j = {},
  Y = {},
  dr;
function $t() {
  if (dr) return Y;
  ((dr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.productFetchApi = void 0));
  const e = rt(),
    r = async (t) => {
      const i = {};
      for (const [s, l] of t.entries())
        if (s === "file") {
          const c = l.name,
            a = l.type;
          ((i.file = await (0, e.blobToBase64)(l)), (i.__fileName = c), (i.__fileType = a));
        } else i[s] = l;
      return JSON.stringify(i);
    },
    n = async (t) => {
      const i = t?.body instanceof FormData,
        s = i ? await r(t?.body) : t?.body,
        l = new Request("", { body: s, method: t?.method, headers: t?.headers }),
        c = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(c),
        isMultipartFormData: i,
      };
    },
    o = (t) => {
      const i = async (s, l, c) => {
        const { body: a, headers: d, isMultipartFormData: f } = await n(c);
        d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
        const y = {
            product: s,
            restPath: l,
            fetchRequestInit: { ...c, body: a, headers: [...d.entries()] },
            isMultipartFormData: f,
          },
          {
            body: p,
            headers: h,
            statusText: g,
            status: v,
            isAttachment: _,
          } = await t("fetchProduct", y),
          w = _ ? (0, e.base64ToBlob)(p, h["content-type"]) : p;
        return new Response(w || null, { headers: h, status: v, statusText: g });
      };
      return {
        requestConfluence: (s, l) => i("confluence", s, l),
        requestJira: (s, l) => i("jira", s, l),
        requestBitbucket: (s, l) => i("bitbucket", s, l),
      };
    };
  return ((Y.productFetchApi = o), Y);
}
var fr;
function Ut() {
  if (fr) return j;
  fr = 1;
  var e;
  (Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.requestBitbucket = j.requestJira = j.requestConfluence = void 0));
  const r = b();
  return (
    (e = (0, $t().productFetchApi)((0, r.getCallBridge)())),
    (j.requestConfluence = e.requestConfluence),
    (j.requestJira = e.requestJira),
    (j.requestBitbucket = e.requestBitbucket),
    j
  );
}
var me = {},
  Z = {},
  hr;
function Gt() {
  if (hr) return Z;
  ((hr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.showFlag = void 0));
  const e = b(),
    r = m(),
    n = (0, e.getCallBridge)(),
    o = (t) => {
      var i;
      if (!t.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const s = n("showFlag", { ...t, type: (i = t.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await s, n("closeFlag", { id: t.id })) };
    };
  return ((Z.showFlag = o), Z);
}
var pr;
function Vt() {
  return (
    pr ||
      ((pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Gt();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(me)),
    me
  );
}
var we = {},
  yr;
function Wt() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), E.__exportStar(tt(), e));
      })(we)),
    we
  );
}
var xe = {},
  ee = {},
  gr;
function Ht() {
  if (gr) return ee;
  ((gr = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.realtime = void 0));
  const r = (0, b().getCallBridge)(),
    n = (s, l, c) => r("publishRealtimeChannel", { channelName: s, eventPayload: l, options: c }),
    o = (s, l, c) => r("subscribeRealtimeChannel", { channelName: s, onEvent: l, options: c }),
    t = (s, l, c) =>
      r("publishRealtimeChannel", { channelName: s, eventPayload: l, options: c, isGlobal: !0 }),
    i = (s, l, c) =>
      r("subscribeRealtimeChannel", { channelName: s, onEvent: l, options: c, isGlobal: !0 });
  return ((ee.realtime = { publish: n, subscribe: o, publishGlobal: t, subscribeGlobal: i }), ee);
}
var je = {},
  vr;
function zt() {
  return (
    vr ||
      ((vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Jira = void 0),
          (function (r) {
            ((r.Board = "board"), (r.Issue = "issue"), (r.Project = "project"));
          })(e.Jira || (e.Jira = {})));
      })(je)),
    je
  );
}
var br;
function Jt() {
  return (
    br ||
      ((br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Jira = e.realtime = void 0));
        var r = Ht();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var n = zt();
        Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return n.Jira;
          },
        });
      })(xe)),
    xe
  );
}
var O = {},
  _r;
function Kt() {
  if (_r) return O;
  ((_r = 1),
    Object.defineProperty(O, "__esModule", { value: !0 }),
    (O.createTranslationFunction = O.getTranslations = O.resetTranslationsCache = void 0));
  const e = et(),
    r = ot(),
    n = {
      getI18nInfoConfig: async () => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!l.ok) throw new Error("Failed to get i18n info config: " + l.statusText);
        return (await l.json()).config;
      },
      getTranslationResource: async (l) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${l}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${l}`);
        return c.json();
      },
    },
    o = new e.TranslationsGetter(n),
    t = () => {
      o.reset();
    };
  O.resetTranslationsCache = t;
  const i = async (l = null, c = { fallback: !0 }) => {
    let a = l;
    return (a || (a = (await r.view.getContext()).locale), await o.getTranslations(a, c));
  };
  O.getTranslations = i;
  const s = async (l = null) => {
    let c = l;
    c || (c = (await r.view.getContext()).locale);
    const a = new e.Translator(c, o);
    return (
      await a.init(),
      (d, f) => {
        var y, p;
        return (p = (y = a.translate(d)) !== null && y !== void 0 ? y : f) !== null && p !== void 0
          ? p
          : d;
      }
    );
  };
  return ((O.createTranslationFunction = s), O);
}
var mr;
function Qt() {
  return (
    mr ||
      ((mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = E;
        var n = gt();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return n.NavigationTarget;
          },
        }),
          r.__exportStar(bt(), e),
          r.__exportStar(wt(), e),
          r.__exportStar(ot(), e),
          r.__exportStar(Lt(), e),
          r.__exportStar(Nt(), e),
          r.__exportStar(Ut(), e),
          r.__exportStar(Vt(), e),
          r.__exportStar(Wt(), e),
          r.__exportStar(Jt(), e),
          (e.i18n = r.__importStar(Kt())));
      })(ae)),
    ae
  );
}
var re = Qt();
const Xt = () => {
    const [e, r] = B.useState(null),
      [n, o] = B.useState(null),
      [t, i] = B.useState(!1),
      [s, l] = B.useState(null),
      [c, a] = B.useState({ userName: "", product: "" }),
      d = async (h) => {
        (i(!0), l(null));
        try {
          const g = await re.invoke("fetch", { cacheable: h });
          r(g);
        } catch (g) {
          l(g instanceof Error ? g.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      f = async () => {
        if (!c.userName.trim() || !c.product.trim()) {
          l("Please fill in all fields");
          return;
        }
        (i(!0), l(null));
        try {
          (await re.invoke("insertUserOrOrder", c), l(null), a({ userName: "", product: "" }));
        } catch (h) {
          l(h instanceof Error ? h.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      y = async () => {
        (i(!0), l(null));
        try {
          (await re.invoke("clearCache"), l(null));
        } catch (h) {
          l(h instanceof Error ? h.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      p = async () => {
        (i(!0), l(null));
        try {
          const h = await re.invoke("runPerformanceAnalyze");
          (o(h), l(null));
        } catch (h) {
          l(h instanceof Error ? h.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return u.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        u.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        u.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            u.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            u.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            u.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "20px" },
              children: [
                u.jsx("button", {
                  onClick: () => d(!1),
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
                u.jsx("button", {
                  onClick: () => d(!0),
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
            e &&
              u.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  u.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  u.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  u.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: u.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        u.jsx("thead", {
                          children: u.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              u.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              u.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              u.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              u.jsx("th", {
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
                        u.jsx("tbody", {
                          children: e.rows.map((h, g) =>
                            u.jsxs(
                              "tr",
                              {
                                children: [
                                  u.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: h.userId,
                                  }),
                                  u.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: h.userName,
                                  }),
                                  u.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: h.product || "N/A",
                                  }),
                                  u.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: h.productId || "N/A",
                                  }),
                                ],
                              },
                              g,
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
        u.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            u.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            u.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            u.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    u.jsx("input", {
                      type: "number",
                      value: c.userId || "",
                      onChange: (h) =>
                        a({ ...c, userId: h.target.value ? parseInt(h.target.value) : void 0 }),
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
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    u.jsx("input", {
                      type: "text",
                      value: c.userName,
                      onChange: (h) => a({ ...c, userName: h.target.value }),
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
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    u.jsx("input", {
                      type: "number",
                      value: c.productId || "",
                      onChange: (h) =>
                        a({ ...c, productId: h.target.value ? parseInt(h.target.value) : void 0 }),
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
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    u.jsx("input", {
                      type: "text",
                      value: c.product,
                      onChange: (h) => a({ ...c, product: h.target.value }),
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
            u.jsx("button", {
              onClick: f,
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
          ],
        }),
        u.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            u.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            u.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            u.jsxs("div", {
              style: { display: "flex", gap: "10px" },
              children: [
                u.jsx("button", {
                  onClick: y,
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
                u.jsx("button", {
                  onClick: p,
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
          ],
        }),
        n &&
          u.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              u.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              u.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      u.jsxs("div", {
                        children: [u.jsx("strong", { children: "Window:" }), " ", n.window],
                      }),
                      u.jsxs("div", {
                        children: [u.jsx("strong", { children: "Top Queries:" }), " ", n.top],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          n.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (n.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(n.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  n.rows.length > 0
                    ? u.jsxs("div", {
                        children: [
                          u.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", n.rows.length, ")"],
                          }),
                          n.rows.map((h, g) =>
                            u.jsxs(
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
                                  u.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          h.rank,
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Type:" }),
                                          " ",
                                          h.stmtType,
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          h.execCount,
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          h.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          h.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          h.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          h.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      u.jsxs("div", {
                                        children: [
                                          u.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          h.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      u.jsx("strong", { children: "SQL Query:" }),
                                      u.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: h.digestText,
                                      }),
                                    ],
                                  }),
                                  u.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      u.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      u.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: h.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              g,
                            ),
                          ),
                        ],
                      })
                    : u.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          u.jsx("strong", { children: "✅ No slow queries found!" }),
                          u.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
        s &&
          u.jsxs("div", {
            style: {
              padding: "15px",
              backgroundColor: "#FFEBEE",
              border: "1px solid #FFCDD2",
              borderRadius: "4px",
              color: "#C62828",
              marginBottom: "20px",
            },
            children: [u.jsx("strong", { children: "Error:" }), " ", s],
          }),
        u.jsxs("div", {
          style: { padding: "20px", backgroundColor: "#F4F5F7", borderRadius: "8px" },
          children: [
            u.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            u.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                u.jsxs("li", {
                  children: [
                    u.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                u.jsxs("li", {
                  children: [
                    u.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                u.jsxs("li", {
                  children: [
                    u.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    u.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                u.jsxs("li", {
                  children: [
                    u.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Yt = document.getElementById("root"),
  Zt = it.createRoot(Yt),
  wr = () => {
    Zt.render(u.jsx(dt.StrictMode, { children: u.jsx(Xt, {}) }));
  };
re.view.theme
  .enable()
  .then(() => {
    wr();
  })
  .catch((e) => {
    (console.error(e.message), wr());
  });
