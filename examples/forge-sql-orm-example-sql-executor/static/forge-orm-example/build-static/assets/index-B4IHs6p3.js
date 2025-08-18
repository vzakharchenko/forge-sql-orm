import { r as wr, c as at } from "./react-dom-vendor-DUDfcWRj.js";
import { g as ut, r as ct } from "./lodash-vendor-CHXXAK2W.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) n(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(t) {
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
  function n(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = o(t);
    fetch(t.href, i);
  }
})();
var ae = { exports: {} },
  x = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie;
function lt() {
  if (Ie) return x;
  Ie = 1;
  var e = wr(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, c, a) {
    var l,
      d = {},
      h = null,
      f = null;
    (a !== void 0 && (h = "" + a),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (f = c.ref));
    for (l in c) n.call(c, l) && !i.hasOwnProperty(l) && (d[l] = c[l]);
    if (u && u.defaultProps) for (l in ((c = u.defaultProps), c)) d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: r, type: u, key: h, ref: f, props: d, _owner: t.current };
  }
  return ((x.Fragment = o), (x.jsx = s), (x.jsxs = s), x);
}
var Te;
function dt() {
  return (Te || ((Te = 1), (ae.exports = lt())), ae.exports);
}
var v = dt(),
  I = wr(),
  ue = {},
  Re = function (e, r) {
    return (
      (Re =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, n) {
            o.__proto__ = n;
          }) ||
        function (o, n) {
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (o[t] = n[t]);
        }),
      Re(e, r)
    );
  };
function Er(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Re(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var oe = function () {
  return (
    (oe =
      Object.assign ||
      function (r) {
        for (var o, n = 1, t = arguments.length; n < t; n++) {
          o = arguments[n];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }),
    oe.apply(this, arguments)
  );
};
function Or(e, r) {
  var o = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      r.indexOf(n[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[t]) &&
        (o[n[t]] = e[n[t]]);
  return o;
}
function Rr(e, r, o, n) {
  var t = arguments.length,
    i = t < 3 ? r : n === null ? (n = Object.getOwnPropertyDescriptor(r, o)) : n,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, o, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (s = e[u]) && (i = (t < 3 ? s(i) : t > 3 ? s(r, o, i) : s(r, o)) || i);
  return (t > 3 && i && Object.defineProperty(r, o, i), i);
}
function Pr(e, r) {
  return function (o, n) {
    r(o, n, e);
  };
}
function jr(e, r, o, n, t, i) {
  function s(m) {
    if (m !== void 0 && typeof m != "function") throw new TypeError("Function expected");
    return m;
  }
  for (
    var u = n.kind,
      c = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      a = !r && e ? (n.static ? e : e.prototype) : null,
      l = r || (a ? Object.getOwnPropertyDescriptor(a, n.name) : {}),
      d,
      h = !1,
      f = o.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in n) p[_] = _ === "access" ? {} : n[_];
    for (var _ in n.access) p.access[_] = n.access[_];
    p.addInitializer = function (m) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(s(m || null));
    };
    var b = (0, o[f])(u === "accessor" ? { get: l.get, set: l.set } : l[c], p);
    if (u === "accessor") {
      if (b === void 0) continue;
      if (b === null || typeof b != "object") throw new TypeError("Object expected");
      ((d = s(b.get)) && (l.get = d),
        (d = s(b.set)) && (l.set = d),
        (d = s(b.init)) && t.unshift(d));
    } else (d = s(b)) && (u === "field" ? t.unshift(d) : (l[c] = d));
  }
  (a && Object.defineProperty(a, n.name, l), (h = !0));
}
function Ir(e, r, o) {
  for (var n = arguments.length > 2, t = 0; t < r.length; t++)
    o = n ? r[t].call(e, o) : r[t].call(e);
  return n ? o : void 0;
}
function Tr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Cr(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function Br(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Sr(e, r, o, n) {
  function t(i) {
    return i instanceof o
      ? i
      : new o(function (s) {
          s(i);
        });
  }
  return new (o || (o = Promise))(function (i, s) {
    function u(l) {
      try {
        a(n.next(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      try {
        a(n.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function a(l) {
      l.done ? i(l.value) : t(l.value).then(u, c);
    }
    a((n = n.apply(e, r || [])).next());
  });
}
function xr(e, r) {
  var o = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    t,
    i,
    s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (s.next = u(0)),
    (s.throw = u(1)),
    (s.return = u(2)),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function u(a) {
    return function (l) {
      return c([a, l]);
    };
  }
  function c(a) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && ((s = 0), a[0] && (o = 0)), o; )
      try {
        if (
          ((n = 1),
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
            return (o.label++, { value: a[1], done: !1 });
          case 5:
            (o.label++, (t = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              o.label = a[1];
              break;
            }
            if (a[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = a));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(a));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        a = r.call(e, o);
      } catch (l) {
        ((a = [6, l]), (t = 0));
      } finally {
        n = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var se = Object.create
  ? function (e, r, o, n) {
      n === void 0 && (n = o);
      var t = Object.getOwnPropertyDescriptor(r, o);
      ((!t || ("get" in t ? !r.__esModule : t.writable || t.configurable)) &&
        (t = {
          enumerable: !0,
          get: function () {
            return r[o];
          },
        }),
        Object.defineProperty(e, n, t));
    }
  : function (e, r, o, n) {
      (n === void 0 && (n = o), (e[n] = r[o]));
    };
function qr(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && se(r, e, o);
}
function ie(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    n = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function je(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e),
    t,
    i = [],
    s;
  try {
    for (; (r === void 0 || r-- > 0) && !(t = n.next()).done; ) i.push(t.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      t && !t.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function Fr() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(je(arguments[r]));
  return e;
}
function Mr() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var n = Array(e), t = 0, r = 0; r < o; r++)
    for (var i = arguments[r], s = 0, u = i.length; s < u; s++, t++) n[t] = i[s];
  return n;
}
function kr(e, r, o) {
  if (o || arguments.length === 2)
    for (var n = 0, t = r.length, i; n < t; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), (i[n] = r[n]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function B(e) {
  return this instanceof B ? ((this.v = e), this) : new B(e);
}
function Ar(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = o.apply(e, r || []),
    t,
    i = [];
  return (
    (t = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", s),
    (t[Symbol.asyncIterator] = function () {
      return this;
    }),
    t
  );
  function s(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function u(f, p) {
    n[f] &&
      ((t[f] = function (_) {
        return new Promise(function (b, m) {
          i.push([f, _, b, m]) > 1 || c(f, _);
        });
      }),
      p && (t[f] = p(t[f])));
  }
  function c(f, p) {
    try {
      a(n[f](p));
    } catch (_) {
      h(i[0][3], _);
    }
  }
  function a(f) {
    f.value instanceof B ? Promise.resolve(f.value.v).then(l, d) : h(i[0][2], f);
  }
  function l(f) {
    c("next", f);
  }
  function d(f) {
    c("throw", f);
  }
  function h(f, p) {
    (f(p), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function Lr(e) {
  var r, o;
  return (
    (r = {}),
    n("next"),
    n("throw", function (t) {
      throw t;
    }),
    n("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function n(t, i) {
    r[t] = e[t]
      ? function (s) {
          return (o = !o) ? { value: B(e[t](s)), done: !1 } : i ? i(s) : s;
        }
      : i;
  }
}
function Dr(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof ie == "function" ? ie(e) : e[Symbol.iterator]()),
      (o = {}),
      n("next"),
      n("throw"),
      n("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function n(i) {
    o[i] =
      e[i] &&
      function (s) {
        return new Promise(function (u, c) {
          ((s = e[i](s)), t(u, c, s.done, s.value));
        });
      };
  }
  function t(i, s, u, c) {
    Promise.resolve(c).then(function (a) {
      i({ value: a, done: u });
    }, s);
  }
}
function Nr(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ft = Object.create
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
          var o = [];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (o[o.length] = n);
          return o;
        }),
      Pe(e)
    );
  };
function $r(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = Pe(e), n = 0; n < o.length; n++) o[n] !== "default" && se(r, e, o[n]);
  return (ft(r, e), r);
}
function Gr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ur(e, r, o, n) {
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? n : o === "a" ? n.call(e) : n ? n.value : r.get(e);
}
function Vr(e, r, o, n, t) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !t) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !t : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? t.call(e, o) : t ? (t.value = o) : r.set(e, o), o);
}
function Hr(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Wr(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var n, t;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = r[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = r[Symbol.dispose]), o && (t = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (t &&
      (n = function () {
        try {
          t.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: n, async: o }));
  } else o && e.stack.push({ async: !0 });
  return r;
}
var ht =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var n = new Error(o);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = r), n);
      };
function Kr(e) {
  function r(i) {
    ((e.error = e.hasError ? new ht(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    n = 0;
  function t() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && n === 1) return ((n = 0), e.stack.push(o), Promise.resolve().then(t));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (n |= 2),
              Promise.resolve(i).then(t, function (s) {
                return (r(s), t());
              })
            );
        } else n |= 1;
      } catch (s) {
        r(s);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return t();
}
function Jr(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, n, t, i, s) {
        return n
          ? r
            ? ".jsx"
            : ".js"
          : t && (!i || !s)
            ? o
            : t + i + "." + s.toLowerCase() + "js";
      })
    : e;
}
const vt = {
    __extends: Er,
    __assign: oe,
    __rest: Or,
    __decorate: Rr,
    __param: Pr,
    __esDecorate: jr,
    __runInitializers: Ir,
    __propKey: Tr,
    __setFunctionName: Cr,
    __metadata: Br,
    __awaiter: Sr,
    __generator: xr,
    __createBinding: se,
    __exportStar: qr,
    __values: ie,
    __read: je,
    __spread: Fr,
    __spreadArrays: Mr,
    __spreadArray: kr,
    __await: B,
    __asyncGenerator: Ar,
    __asyncDelegator: Lr,
    __asyncValues: Dr,
    __makeTemplateObject: Nr,
    __importStar: $r,
    __importDefault: Gr,
    __classPrivateFieldGet: Ur,
    __classPrivateFieldSet: Vr,
    __classPrivateFieldIn: Hr,
    __addDisposableResource: Wr,
    __disposeResources: Kr,
    __rewriteRelativeImportExtension: Jr,
  },
  yt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Wr,
        get __assign() {
          return oe;
        },
        __asyncDelegator: Lr,
        __asyncGenerator: Ar,
        __asyncValues: Dr,
        __await: B,
        __awaiter: Sr,
        __classPrivateFieldGet: Ur,
        __classPrivateFieldIn: Hr,
        __classPrivateFieldSet: Vr,
        __createBinding: se,
        __decorate: Rr,
        __disposeResources: Kr,
        __esDecorate: jr,
        __exportStar: qr,
        __extends: Er,
        __generator: xr,
        __importDefault: Gr,
        __importStar: $r,
        __makeTemplateObject: Nr,
        __metadata: Br,
        __param: Pr,
        __propKey: Tr,
        __read: je,
        __rest: Or,
        __rewriteRelativeImportExtension: Jr,
        __runInitializers: Ir,
        __setFunctionName: Cr,
        __spread: Fr,
        __spreadArray: kr,
        __spreadArrays: Mr,
        __values: ie,
        default: vt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O = ut(yt);
var q = {},
  Ce;
function pt() {
  return (
    Ce ||
      ((Ce = 1),
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
var ce = {},
  le = {},
  F = {},
  M = {},
  Be;
function E() {
  if (Be) return M;
  ((Be = 1), Object.defineProperty(M, "__esModule", { value: !0 }), (M.BridgeAPIError = void 0));
  class e extends Error {}
  return ((M.BridgeAPIError = e), M);
}
var Se;
function g() {
  if (Se) return F;
  ((Se = 1), Object.defineProperty(F, "__esModule", { value: !0 }), (F.getCallBridge = void 0));
  const e = E();
  function r(n) {
    return !!n?.callBridge;
  }
  const o = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((F.getCallBridge = o), F);
}
var k = {},
  xe;
function zr() {
  if (xe) return k;
  ((xe = 1), Object.defineProperty(k, "__esModule", { value: !0 }), (k.withRateLimiter = void 0));
  const e = E(),
    r = (o, n, t, i) => {
      let s = Date.now(),
        u = 0;
      return async (...c) => {
        const a = Date.now();
        if ((a - s > t && ((s = a), (u = 0)), u >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), o(...c));
      };
    };
  return ((k.withRateLimiter = r), k);
}
var qe;
function _t() {
  return (
    qe ||
      ((qe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = g(),
          o = E(),
          n = zr(),
          t = (0, r.getCallBridge)(),
          i = (c) => {
            if (c && Object.values(c).some((a) => typeof a == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (c, a) => {
            if (typeof c != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(a), t("invoke", { functionKey: c, payload: a }));
          };
        e.invoke = (0, n.withRateLimiter)(
          s,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })(le)),
    le
  );
}
var Fe;
function bt() {
  return (
    Fe ||
      ((Fe = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(_t(), e));
      })(ce)),
    ce
  );
}
var de = {},
  A = {},
  fe = {},
  Me;
function Qr() {
  return (
    Me ||
      ((Me = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = g(),
          o = E(),
          n = zr(),
          t = 500,
          i = 25,
          s = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, r.getCallBridge)(),
          c = (d) => {
            if (d && Object.values(d).some((h) => typeof h == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (d) => async (h) => {
            c(h);
            const f = { ...h, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await u("invoke", f),
              { success: _, payload: b, error: m } = p ?? {},
              w = { ...(_ ? b : m) };
            if (w && w.headers)
              for (const S in w.headers)
                Array.isArray(w.headers[S]) && (w.headers[S] = w.headers[S].join(","));
            return w;
          },
          l = (d) => {
            const h = a(d);
            return (0, n.withRateLimiter)(
              h,
              t,
              s,
              `${d} invocation calls are rate limited at ${t}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(fe)),
    fe
  );
}
var ke;
function gt() {
  if (ke) return A;
  ((ke = 1), Object.defineProperty(A, "__esModule", { value: !0 }), (A.invokeRemote = void 0));
  const e = Qr(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((A.invokeRemote = r), A);
}
var L = {},
  Ae;
function mt() {
  if (Ae) return L;
  ((Ae = 1), Object.defineProperty(L, "__esModule", { value: !0 }), (L.invokeService = void 0));
  const e = Qr(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((L.invokeService = r), L);
}
var Le;
function wt() {
  return (
    Le ||
      ((Le = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = O;
        (r.__exportStar(gt(), e), r.__exportStar(mt(), e));
      })(de)),
    de
  );
}
var he = {},
  D = {},
  N = {},
  De;
function Et() {
  if (De) return N;
  ((De = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.submit = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = async (t) => {
      if ((await o("submit", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((N.submit = n), N);
}
var $ = {},
  Ne;
function Ot() {
  if (Ne) return $;
  ((Ne = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = async (t) => {
      try {
        if ((await o("close", t)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = n), $);
}
var G = {},
  $e;
function Rt() {
  if ($e) return G;
  (($e = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.open = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await o("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((G.open = n), G);
}
var U = {},
  Ge;
function Pt() {
  if (Ge) return U;
  ((Ge = 1), Object.defineProperty(U, "__esModule", { value: !0 }), (U.refresh = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = async (t) => {
      if ((await o("refresh", t)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((U.refresh = n), U);
}
var V = {},
  Ue;
function jt() {
  if (Ue) return V;
  ((Ue = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.createHistory = void 0));
  const r = (0, g().getCallBridge)(),
    o = async () => {
      const n = await r("createHistory");
      return (
        n.listen((t) => {
          n.location = t;
        }),
        n
      );
    };
  return ((V.createHistory = o), V);
}
var H = {},
  ve = {},
  R = {},
  Ve;
function Xr() {
  return (
    Ve ||
      ((Ve = 1),
      Object.defineProperty(R, "__esModule", { value: !0 }),
      (R.FORGE_SUPPORTED_LOCALE_CODES = R.I18N_BUNDLE_FOLDER_NAME = R.I18N_INFO_FILE_NAME = void 0),
      (R.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (R.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (R.FORGE_SUPPORTED_LOCALE_CODES = [
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
    R
  );
}
var T = {},
  He;
function It() {
  if (He) return T;
  ((He = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (n, t) => {
    n.includes(t) || n.push(t);
  };
  class r extends Error {
    constructor(t) {
      (super(t), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = r;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(t) {
      this.resourcesAccessor = t;
    }
    async getTranslations(t, i = { fallback: !0 }) {
      const s = await this.getI18nInfoConfig(),
        { fallback: u } = i;
      if (!u) {
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
        s.map(async (u) => {
          const c = await this.getTranslationResource(u);
          return { locale: u, translations: c };
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
      const { locales: s, fallback: u } = i,
        c = [t],
        a = u[t];
      return (
        a && Array.isArray(a) && a.length > 0 && c.push(...a),
        e(c, i.fallback.default),
        c.filter((l) => s.includes(l))
      );
    }
  }
  return ((T.TranslationsGetter = o), T);
}
var W = {},
  ye = {},
  We;
function Yr() {
  return (
    We ||
      ((We = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = O.__importDefault(ct()),
          n = (i, s, u) => {
            const c = i[u];
            return c ? (0, e.getTranslationValueFromContent)(c, s) : null;
          };
        e.getTranslationValue = n;
        const t = (i, s) => {
          let u = i[s];
          if (!u) {
            const c = s.split(".");
            c.length > 1 && (u = (0, o.default)(i, c, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = t;
      })(ye)),
    ye
  );
}
var Ke;
function Tt() {
  if (Ke) return W;
  ((Ke = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.Translator = void 0));
  const e = Yr();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, t) {
      ((this.locale = n), (this.translationsGetter = t));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let t = this.cache.get(n);
      if (t === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const s = (0, e.getTranslationValueFromContent)(i, n);
          if (s !== null) {
            t = s;
            break;
          }
        }
        ((t = t ?? null), this.cache.set(n, t));
      }
      return t;
    }
  }
  return ((W.Translator = r), W);
}
var K = {},
  Je;
function Ct() {
  if (Je) return K;
  ((Je = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.ensureLocale = void 0));
  const e = Xr(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, s) => {
        const [u] = s.split("-");
        return (i[u] || (i[u] = s), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    t = (i) => {
      const s = i.replace("_", "-");
      return r.has(s) ? s : (n[s] ?? o[s] ?? null);
    };
  return ((K.ensureLocale = t), K);
}
var pe = {},
  ze;
function Bt() {
  return (
    ze ||
      ((ze = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          o = (a) => typeof a?.i18n == "string",
          n = (a) => a.startsWith("connect-"),
          t = (a) => a.startsWith("core:"),
          i = (a) => {
            const l = new Set(),
              d = (h, f) =>
                !r(h) || l.has(h)
                  ? []
                  : (l.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const b = [...f, p];
                      return o(_)
                        ? [{ propertyPath: b, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((m) => d(m, b))
                          : d(_, b);
                    }));
            return d(a, []);
          },
          s = (a) =>
            Object.entries(a).flatMap(([l, d]) =>
              !n(l) && !t(l) && d && Array.isArray(d) && d.length > 0 ? d.map((h) => [h, l]) : [],
            );
        e.getI18nSupportedModuleEntries = s;
        const u = (a) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const h = i(d[0]);
            for (const { key: f } of h) l.add(f);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const c = (a) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(a)) {
            const h = i(d[0]);
            for (const f of h) l.push({ moduleName: d[1], ...f });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(pe)),
    pe
  );
}
var _e = {},
  Qe;
function St() {
  return (Qe || ((Qe = 1), Object.defineProperty(_e, "__esModule", { value: !0 })), _e);
}
var Xe;
function Zr() {
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
        const r = O;
        (r.__exportStar(Xr(), e),
          r.__exportStar(It(), e),
          r.__exportStar(Tt(), e),
          r.__exportStar(Ct(), e));
        var o = Yr();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var n = Bt();
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
          r.__exportStar(St(), e));
      })(ve)),
    ve
  );
}
var Ye;
function xt() {
  if (Ye) return H;
  ((Ye = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getContext = void 0));
  const e = g(),
    r = Zr(),
    o = (0, e.getCallBridge)(),
    n = async () => {
      var t;
      const i = await o("getContext"),
        s = i?.locale;
      return (s && (i.locale = (t = (0, r.ensureLocale)(s)) !== null && t !== void 0 ? t : s), i);
    };
  return ((H.getContext = n), H);
}
var J = {},
  Ze;
function qt() {
  if (Ze) return J;
  ((Ze = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.changeWindowTitle = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = async (t) => {
      try {
        await o("changeWindowTitle", t);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((J.changeWindowTitle = n), J);
}
var z = {},
  er;
function Ft() {
  if (er) return z;
  ((er = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.theme = void 0));
  const r = (0, g().getCallBridge)();
  return ((z.theme = { enable: () => r("enableTheming") }), z);
}
var Q = {},
  X = {},
  be = {},
  C = {},
  rr;
function et() {
  if (rr) return C;
  ((rr = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.blobToBase64 = C.base64ToBlob = void 0));
  const e = (o, n) => {
    if (!o) return null;
    const t = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(t),
      s = new Array(i.length);
    for (let c = 0; c < i.length; c++) s[c] = i.charCodeAt(c);
    const u = new Uint8Array(s);
    return new Blob([u], { type: n });
  };
  C.base64ToBlob = e;
  const r = (o) =>
    new Promise((n, t) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        n(i.result);
      }),
        (i.onerror = t),
        i.readAsDataURL(o));
    });
  return ((C.blobToBase64 = r), C);
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
        const r = et(),
          o = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(a);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(a)
            );
          },
          n = async (a) => ({ data: await (0, r.blobToBase64)(a), type: a.type }),
          t = (a) => (0, r.base64ToBlob)(a.data, a.type),
          i = async (a) => {
            if (a instanceof Blob) return { ...(await n(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (a && o(a)) {
              const l = await Promise.all(
                Object.entries(a).map(async ([d, h]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(l);
            }
            return a;
          };
        e.serialiseBlobsInPayload = i;
        const s = (a) => {
          if (a && o(a) && "__isBlobData" in a) {
            const l = a;
            return t({ data: l.data, type: l.type });
          }
          if (Array.isArray(a)) return a.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (a && o(a)) {
            const l = {};
            for (const [d, h] of Object.entries(a)) l[d] = (0, e.deserialiseBlobsInPayload)(h);
            return l;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = s;
        const u = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((l) => (0, e.containsBlobs)(l))
              : a && o(a)
                ? Object.values(a).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = u;
        const c = (a) =>
          a && o(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((l) => (0, e.containsSerialisedBlobs)(l))
              : a && o(a)
                ? Object.values(a).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(be)),
    be
  );
}
var nr;
function rt() {
  if (nr) return X;
  ((nr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.events = void 0));
  const e = g(),
    r = Mt(),
    o = (0, e.getCallBridge)(),
    n = async (i, s) => {
      let u = s;
      return (
        (0, r.containsBlobs)(s) && (u = await (0, r.serialiseBlobsInPayload)(s)),
        o("emit", { event: i, payload: u })
      );
    },
    t = (i, s) =>
      o("on", {
        event: i,
        callback: (c) => {
          let a = c;
          return (
            (0, r.containsSerialisedBlobs)(c) && (a = (0, r.deserialiseBlobsInPayload)(c)),
            s(a)
          );
        },
      });
  return ((X.events = { emit: n, on: t }), X);
}
var or;
function kt() {
  if (or) return Q;
  ((or = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.emitReadyEvent = void 0));
  const e = rt(),
    r = tt(),
    o = "EXTENSION_READY",
    n = async () => {
      const t = await r.view.getContext();
      await e.events.emit(o, { localId: t.localId });
    };
  return ((Q.emitReadyEvent = n), Q);
}
var ir;
function tt() {
  if (ir) return D;
  ((ir = 1), Object.defineProperty(D, "__esModule", { value: !0 }), (D.view = void 0));
  const e = Et(),
    r = Ot(),
    o = Rt(),
    n = Pt(),
    t = jt(),
    i = xt(),
    s = qt(),
    u = Ft(),
    c = kt();
  return (
    (D.view = {
      submit: e.submit,
      close: r.close,
      open: o.open,
      refresh: n.refresh,
      createHistory: t.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: s.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
    }),
    D
  );
}
var sr;
function nt() {
  return (
    sr ||
      ((sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(tt(), e));
      })(he)),
    he
  );
}
var ge = {},
  Y = {},
  ar;
function At() {
  if (ar) return Y;
  ((ar = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.router = void 0));
  const r = (0, g().getCallBridge)(),
    o = async (s) => {
      if (!s?.target) throw new Error("target is required for getUrl");
      const u = await r("getUrl", s);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${u} (${c})`);
      }
    },
    n = (s) => {
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
  return ((Y.router = { getUrl: o, navigate: n, open: t, reload: i }), Y);
}
var ur;
function Lt() {
  return (
    ur ||
      ((ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(At(), e));
      })(ge)),
    ge
  );
}
var me = {},
  Z = {},
  cr;
function Dt() {
  if (cr) return Z;
  ((cr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.Modal = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = () => {};
  class t {
    constructor(s) {
      var u, c;
      ((this.resource = s?.resource || null),
        (this.onClose = s?.onClose || n),
        (this.size = s?.size || "medium"),
        (this.context = s?.context || {}),
        (this.closeOnEscape = (u = s?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick =
          (c = s?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0));
    }
    async open() {
      try {
        if (
          (await o("openModal", {
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
  return ((Z.Modal = t), Z);
}
var lr;
function Nt() {
  return (
    lr ||
      ((lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Dt(), e));
      })(me)),
    me
  );
}
var P = {},
  ee = {},
  dr;
function $t() {
  if (dr) return ee;
  ((dr = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.productFetchApi = void 0));
  const e = et(),
    r = async (t) => {
      const i = {};
      for (const [s, u] of t.entries())
        if (s === "file") {
          const c = u.name,
            a = u.type;
          ((i.file = await (0, e.blobToBase64)(u)), (i.__fileName = c), (i.__fileType = a));
        } else i[s] = u;
      return JSON.stringify(i);
    },
    o = async (t) => {
      const i = t?.body instanceof FormData,
        s = i ? await r(t?.body) : t?.body,
        u = new Request("", { body: s, method: t?.method, headers: t?.headers }),
        c = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(c),
        isMultipartFormData: i,
      };
    },
    n = (t) => {
      const i = async (s, u, c) => {
        const { body: a, headers: l, isMultipartFormData: d } = await o(c);
        l.has("X-Atlassian-Token") || l.set("X-Atlassian-Token", "no-check");
        const h = {
            product: s,
            restPath: u,
            fetchRequestInit: { ...c, body: a, headers: [...l.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: p,
            statusText: _,
            status: b,
            isAttachment: m,
          } = await t("fetchProduct", h),
          w = m ? (0, e.base64ToBlob)(f, p["content-type"]) : f;
        return new Response(w || null, { headers: p, status: b, statusText: _ });
      };
      return {
        requestConfluence: (s, u) => i("confluence", s, u),
        requestJira: (s, u) => i("jira", s, u),
        requestBitbucket: (s, u) => i("bitbucket", s, u),
      };
    };
  return ((ee.productFetchApi = n), ee);
}
var fr;
function Gt() {
  if (fr) return P;
  fr = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = g();
  return (
    (e = (0, $t().productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    P
  );
}
var we = {},
  re = {},
  hr;
function Ut() {
  if (hr) return re;
  ((hr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.showFlag = void 0));
  const e = g(),
    r = E(),
    o = (0, e.getCallBridge)(),
    n = (t) => {
      var i;
      if (!t.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const s = o("showFlag", { ...t, type: (i = t.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await s, o("closeFlag", { id: t.id })) };
    };
  return ((re.showFlag = n), re);
}
var vr;
function Vt() {
  return (
    vr ||
      ((vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = Ut();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(we)),
    we
  );
}
var Ee = {},
  yr;
function Ht() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(rt(), e));
      })(Ee)),
    Ee
  );
}
var Oe = {},
  te = {},
  pr;
function Wt() {
  if (pr) return te;
  ((pr = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.__realtime = void 0));
  const r = (0, g().getCallBridge)(),
    o = (s, u) => r("publishRealtimeChannel", { channelName: s, eventPayload: u }),
    n = (s, u, c) => r("subscribeRealtimeChannel", { channelName: s, onEvent: u, options: c }),
    t = (s, u) => r("publishRealtimeChannel", { channelName: s, eventPayload: u, isGlobal: !0 }),
    i = (s, u, c) =>
      r("subscribeRealtimeChannel", { channelName: s, onEvent: u, options: c, isGlobal: !0 });
  return ((te.__realtime = { publish: o, subscribe: n, publishGlobal: t, subscribeGlobal: i }), te);
}
var _r;
function Kt() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), O.__exportStar(Wt(), e));
      })(Oe)),
    Oe
  );
}
var j = {},
  br;
function Jt() {
  if (br) return j;
  ((br = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.createTranslationFunction = j.getTranslations = j.resetTranslationsCache = void 0));
  const e = Zr(),
    r = nt(),
    o = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return c.json();
      },
    },
    n = new e.TranslationsGetter(o),
    t = () => {
      n.reset();
    };
  j.resetTranslationsCache = t;
  const i = async (u = null, c = { fallback: !0 }) => {
    let a = u;
    return (a || (a = (await r.view.getContext()).locale), await n.getTranslations(a, c));
  };
  j.getTranslations = i;
  const s = async (u = null) => {
    let c = u;
    c || (c = (await r.view.getContext()).locale);
    const a = new e.Translator(c, n);
    return (
      await a.init(),
      (l, d) => {
        var h, f;
        return (f = (h = a.translate(l)) !== null && h !== void 0 ? h : d) !== null && f !== void 0
          ? f
          : l;
      }
    );
  };
  return ((j.createTranslationFunction = s), j);
}
var gr;
function zt() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = O;
        var o = pt();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(bt(), e),
          r.__exportStar(wt(), e),
          r.__exportStar(nt(), e),
          r.__exportStar(Lt(), e),
          r.__exportStar(Nt(), e),
          r.__exportStar(Gt(), e),
          r.__exportStar(Vt(), e),
          r.__exportStar(Ht(), e),
          r.__exportStar(Kt(), e),
          (e.i18n = r.__importStar(Jt())));
      })(ue)),
    ue
  );
}
var ne = zt();
function Qt() {
  const [e, r] = I.useState(""),
    [o, n] = I.useState(""),
    [t, i] = I.useState(""),
    [s, u] = I.useState(!1),
    [c, a] = I.useState(!1),
    [l, d] = I.useState(!1),
    [h, f] = I.useState([]),
    p = (y, ot, it) => {
      f((st) => [{ id: Date.now(), query: y, result: ot, timestamp: new Date(), type: it }, ...st]);
    },
    _ = async () => {
      try {
        (i(""), u(!0));
        const y = await ne.invoke("execute", { query: e });
        (n(y), p(e, y, "SQL"));
      } catch (y) {
        (i(y instanceof Error ? y.message : "An error occurred"), n(""));
      } finally {
        u(!1);
      }
    },
    b = async () => {
      try {
        (i(""), a(!0));
        const y = await ne.invoke("executeDDL", { query: e });
        (n(y), p(e, y, "DDL"));
      } catch (y) {
        (i(y instanceof Error ? y.message : "An error occurred"), n(""));
      } finally {
        a(!1);
      }
    },
    m = async () => {
      try {
        (i(""), d(!0));
        const y = await ne.invoke("executeCommand", { command: e });
        (n(y), p(e, y, "COMMAND"));
      } catch (y) {
        (i(y instanceof Error ? y.message : "An error occurred"), n(""));
      } finally {
        d(!1);
      }
    },
    w = (y) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(y),
    S = (y) => {
      switch (y) {
        case "SQL":
          return "#0052CC";
        case "DDL":
          return "#36B37E";
        case "COMMAND":
          return "#FF5630";
        default:
          return "#0052CC";
      }
    };
  return v.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      v.jsx("h1", { children: "SQL Query Executor" }),
      v.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          v.jsx("textarea", {
            value: e,
            onChange: (y) => r(y.target.value),
            placeholder: "Enter your SQL query here...",
            style: {
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              marginBottom: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
            },
          }),
          v.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              v.jsx("button", {
                onClick: _,
                disabled: s || c || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: s ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: s ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: s
                  ? v.jsxs(v.Fragment, {
                      children: [
                        v.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Query",
              }),
              v.jsx("button", {
                onClick: b,
                disabled: s || c || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: c ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: c ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: c
                  ? v.jsxs(v.Fragment, {
                      children: [
                        v.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute DDL",
              }),
              v.jsx("button", {
                onClick: m,
                disabled: s || c || l,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? v.jsxs(v.Fragment, {
                      children: [
                        v.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Command",
              }),
            ],
          }),
        ],
      }),
      t &&
        v.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: t,
        }),
      o &&
        v.jsxs("div", {
          children: [
            v.jsx("h3", { children: "Result:" }),
            v.jsx("pre", {
              style: {
                backgroundColor: "#F4F5F7",
                padding: "15px",
                borderRadius: "3px",
                overflow: "auto",
                maxHeight: "400px",
              },
              children: o,
            }),
          ],
        }),
      h.length > 0 &&
        v.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            v.jsx("h2", { children: "Query History" }),
            v.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: h.map((y) =>
                v.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      v.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: S(y.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          v.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [y.type, " Query"],
                          }),
                          v.jsx("span", { children: w(y.timestamp) }),
                        ],
                      }),
                      v.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          v.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              v.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              v.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: y.query,
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            children: [
                              v.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              v.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: y.result,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  y.id,
                ),
              ),
            }),
          ],
        }),
      v.jsx("style", {
        children: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
      }),
    ],
  });
}
const Xt = document.getElementById("root"),
  Yt = at.createRoot(Xt),
  mr = () => {
    Yt.render(v.jsx(Qt, {}));
  };
ne.view.theme
  .enable()
  .then(() => {
    mr();
  })
  .catch((e) => {
    (console.error(e.message), mr());
  });
