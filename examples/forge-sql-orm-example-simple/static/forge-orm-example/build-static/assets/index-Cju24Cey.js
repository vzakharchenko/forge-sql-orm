const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-CQ_2PMyI.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-D5e_hbaz.js",
      "./lodash-vendor-CzWGmDT2.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as ct, a as Fa, c as vg } from "./react-dom-vendor-B_rzBOmK.js";
import { g as Xt, a as ru, r as Jt, b as St, s as Ve } from "./client-core-vendor-D5e_hbaz.js";
import { r as pg } from "./lodash-vendor-CzWGmDT2.js";
function hg(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : { enumerable: !0, get: () => n[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var go = { exports: {} },
  Zr = {};
var Nu;
function gg() {
  if (Nu) return Zr;
  Nu = 1;
  var e = ct(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var l,
      d = {},
      p = null,
      v = null;
    (c !== void 0 && (p = "" + c),
      u.key !== void 0 && (p = "" + u.key),
      u.ref !== void 0 && (v = u.ref));
    for (l in u) n.call(u, l) && !a.hasOwnProperty(l) && (d[l] = u[l]);
    if (s && s.defaultProps) for (l in ((u = s.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: s, key: p, ref: v, props: d, _owner: i.current };
  }
  return ((Zr.Fragment = r), (Zr.jsx = o), (Zr.jsxs = o), Zr);
}
var Bu;
function _g() {
  return (Bu || ((Bu = 1), (go.exports = gg())), go.exports);
}
var M = _g(),
  m = ct();
const E = Xt(m),
  qu = hg({ __proto__: null, default: E }, [m]);
var _o = {},
  Os = function (e, t) {
    return (
      (Os =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      Os(e, t)
    );
  };
function ev(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Os(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ba = function () {
  return (
    (ba =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    ba.apply(this, arguments)
  );
};
function tv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function rv(e, t, r, n) {
  var i = arguments.length,
    a = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, t, r, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return (i > 3 && a && Object.defineProperty(t, r, a), a);
}
function nv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function iv(e, t, r, n, i, a) {
  function o(_) {
    if (_ !== void 0 && typeof _ != "function") throw new TypeError("Function expected");
    return _;
  }
  for (
    var s = n.kind,
      u = s === "getter" ? "get" : s === "setter" ? "set" : "value",
      c = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
      d,
      p = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var g = {};
    for (var f in n) g[f] = f === "access" ? {} : n[f];
    for (var f in n.access) g.access[f] = n.access[f];
    g.addInitializer = function (_) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var h = (0, r[v])(s === "accessor" ? { get: l.get, set: l.set } : l[u], g);
    if (s === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = o(h.get)) && (l.get = d),
        (d = o(h.set)) && (l.set = d),
        (d = o(h.init)) && i.unshift(d));
    } else (d = o(h)) && (s === "field" ? i.unshift(d) : (l[u] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (p = !0));
}
function av(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function ov(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function sv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function uv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function cv(e, t, r, n) {
  function i(a) {
    return a instanceof r
      ? a
      : new r(function (o) {
          o(a);
        });
  }
  return new (r || (r = Promise))(function (a, o) {
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
      l.done ? a(l.value) : i(l.value).then(s, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function lv(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    a,
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
          i &&
            (a =
              c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
            !(a = a.call(i, c[1])).done)
        )
          return a;
        switch (((i = 0), a && (c = [c[0] & 2, a.value]), c[0])) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (i = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || (c[1] > a[0] && c[1] < a[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              ((r.label = a[1]), (a = c));
              break;
            }
            if (a && r.label < a[2]) {
              ((r.label = a[2]), r.ops.push(c));
              break;
            }
            (a[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        ((c = [6, l]), (i = 0));
      } finally {
        n = a = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var Na = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var i = Object.getOwnPropertyDescriptor(t, r);
      ((!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, i));
    }
  : function (e, t, r, n) {
      (n === void 0 && (n = r), (e[n] = t[r]));
    };
function dv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Na(t, e, r);
}
function ya(e) {
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
function nu(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function fv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(nu(arguments[t]));
  return e;
}
function vv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) n[i] = a[o];
  return n;
}
function pv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Fr(e) {
  return this instanceof Fr ? ((this.v = e), this) : new Fr(e);
}
function hv(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    i,
    a = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(v) {
    return function (g) {
      return Promise.resolve(g).then(v, d);
    };
  }
  function s(v, g) {
    n[v] &&
      ((i[v] = function (f) {
        return new Promise(function (h, _) {
          a.push([v, f, h, _]) > 1 || u(v, f);
        });
      }),
      g && (i[v] = g(i[v])));
  }
  function u(v, g) {
    try {
      c(n[v](g));
    } catch (f) {
      p(a[0][3], f);
    }
  }
  function c(v) {
    v.value instanceof Fr ? Promise.resolve(v.value.v).then(l, d) : p(a[0][2], v);
  }
  function l(v) {
    u("next", v);
  }
  function d(v) {
    u("throw", v);
  }
  function p(v, g) {
    (v(g), a.shift(), a.length && u(a[0][0], a[0][1]));
  }
}
function gv(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (i) {
      throw i;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(i, a) {
    t[i] = e[i]
      ? function (o) {
          return (r = !r) ? { value: Fr(e[i](o)), done: !1 } : a ? a(o) : o;
        }
      : a;
  }
}
function _v(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ya == "function" ? ya(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(a) {
    r[a] =
      e[a] &&
      function (o) {
        return new Promise(function (s, u) {
          ((o = e[a](o)), i(s, u, o.done, o.value));
        });
      };
  }
  function i(a, o, s, u) {
    Promise.resolve(u).then(function (c) {
      a({ value: c, done: s });
    }, o);
  }
}
function bv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var bg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ss = function (e) {
    return (
      (Ss =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Ss(e)
    );
  };
function yv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ss(e), n = 0; n < r.length; n++) r[n] !== "default" && Na(t, e, r[n]);
  return (bg(t, e), t);
}
function mv(e) {
  return e && e.__esModule ? e : { default: e };
}
function wv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Ov(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function Sv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Ev(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), r && (i = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (i &&
      (n = function () {
        try {
          i.call(this);
        } catch (a) {
          return Promise.reject(a);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var yg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function kv(e) {
  function t(a) {
    ((e.error = e.hasError ? new yg(a, e.error, "An error was suppressed during disposal.") : a),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function i() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(i));
        if (r.dispose) {
          var a = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(a).then(i, function (o) {
                return (t(o), i());
              })
            );
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function xv(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, i, a, o) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : i && (!a || !o)
            ? r
            : i + a + "." + o.toLowerCase() + "js";
      })
    : e;
}
const mg = {
    __extends: ev,
    __assign: ba,
    __rest: tv,
    __decorate: rv,
    __param: nv,
    __esDecorate: iv,
    __runInitializers: av,
    __propKey: ov,
    __setFunctionName: sv,
    __metadata: uv,
    __awaiter: cv,
    __generator: lv,
    __createBinding: Na,
    __exportStar: dv,
    __values: ya,
    __read: nu,
    __spread: fv,
    __spreadArrays: vv,
    __spreadArray: pv,
    __await: Fr,
    __asyncGenerator: hv,
    __asyncDelegator: gv,
    __asyncValues: _v,
    __makeTemplateObject: bv,
    __importStar: yv,
    __importDefault: mv,
    __classPrivateFieldGet: wv,
    __classPrivateFieldSet: Ov,
    __classPrivateFieldIn: Sv,
    __addDisposableResource: Ev,
    __disposeResources: kv,
    __rewriteRelativeImportExtension: xv,
  },
  wg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ev,
        get __assign() {
          return ba;
        },
        __asyncDelegator: gv,
        __asyncGenerator: hv,
        __asyncValues: _v,
        __await: Fr,
        __awaiter: cv,
        __classPrivateFieldGet: wv,
        __classPrivateFieldIn: Sv,
        __classPrivateFieldSet: Ov,
        __createBinding: Na,
        __decorate: rv,
        __disposeResources: kv,
        __esDecorate: iv,
        __exportStar: dv,
        __extends: ev,
        __generator: lv,
        __importDefault: mv,
        __importStar: yv,
        __makeTemplateObject: bv,
        __metadata: uv,
        __param: nv,
        __propKey: ov,
        __read: nu,
        __rest: tv,
        __rewriteRelativeImportExtension: xv,
        __runInitializers: av,
        __setFunctionName: sv,
        __spread: fv,
        __spreadArray: pv,
        __spreadArrays: vv,
        __values: ya,
        default: mg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lt = ru(wg);
var Qr = {},
  Uu;
function Og() {
  return (
    Uu ||
      ((Uu = 1),
      Object.defineProperty(Qr, "__esModule", { value: !0 }),
      (Qr.NavigationTarget = void 0),
      (Qr.NavigationTarget = {
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
    Qr
  );
}
var bo = {},
  yo = {},
  en = {},
  tn = {},
  zu;
function _e() {
  if (zu) return tn;
  ((zu = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((tn.BridgeAPIError = e), tn);
}
var $u;
function se() {
  if ($u) return en;
  (($u = 1), Object.defineProperty(en, "__esModule", { value: !0 }), (en.getCallBridge = void 0));
  const e = _e();
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
  return ((en.getCallBridge = r), en);
}
var rn = {},
  Vu;
function Ba() {
  if (Vu) return rn;
  ((Vu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.withRateLimiter = void 0));
  const e = _e(),
    t = (r, n, i, a) => {
      let o = Date.now(),
        s = 0;
      return async (...u) => {
        const c = Date.now();
        if ((c - o > i && ((o = c), (s = 0)), s >= n))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((s = s + 1), r(...u));
      };
    };
  return ((rn.withRateLimiter = t), rn);
}
var Gu;
function Sg() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = se(),
          r = _e(),
          n = Ba(),
          i = (0, t.getCallBridge)(),
          a = (u) => {
            if (u && Object.values(u).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (u, c) => {
            if (typeof u != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (a(c), i("invoke", { functionKey: u, payload: c }));
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
      })(yo)),
    yo
  );
}
var Hu;
function Fi() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(Sg(), e));
      })(bo)),
    bo
  );
}
var mo = {},
  nn = {},
  wo = {},
  Wu;
function Rv() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = se(),
          r = _e(),
          n = Ba(),
          i = 500,
          a = 25,
          o = 1e3 * a;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (p) => {
            u(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await s("invoke", v),
              { success: f, payload: h, error: _ } = g ?? {},
              b = { ...(f ? h : _) };
            if (b && b.headers)
              for (const y in b.headers)
                Array.isArray(b.headers[y]) && (b.headers[y] = b.headers[y].join(","));
            return b;
          },
          l = (d) => {
            const p = c(d);
            return (0, n.withRateLimiter)(
              p,
              i,
              o,
              `${d} invocation calls are rate limited at ${i}/${a}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(wo)),
    wo
  );
}
var Ku;
function Eg() {
  if (Ku) return nn;
  ((Ku = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.invokeRemote = void 0));
  const e = Rv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((nn.invokeRemote = t), nn);
}
var an = {},
  Ju;
function kg() {
  if (Ju) return an;
  ((Ju = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.invokeService = void 0));
  const e = Rv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((an.invokeService = t), an);
}
var Yu;
function xg() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = lt;
        (t.__exportStar(Eg(), e), t.__exportStar(kg(), e));
      })(mo)),
    mo
  );
}
var Oo = {},
  on = {},
  sn = {},
  Xu;
function Rg() {
  if (Xu) return sn;
  ((Xu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.submit = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((sn.submit = n), sn);
}
var un = {},
  Zu;
function Cg() {
  if (Zu) return un;
  ((Zu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.close = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        if ((await r("close", i)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((un.close = n), un);
}
var cn = {},
  Qu;
function Pg() {
  if (Qu) return cn;
  ((Qu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.open = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((cn.open = n), cn);
}
var ln = {},
  ec;
function Ag() {
  if (ec) return ln;
  ((ec = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.refresh = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ln.refresh = n), ln);
}
var dn = {},
  tc;
function Ig() {
  if (tc) return dn;
  ((tc = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.createHistory = void 0));
  const t = (0, se().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((i) => {
          n.location = i;
        }),
        n
      );
    };
  return ((dn.createHistory = r), dn);
}
var fn = {},
  So = {},
  At = {},
  rc;
function Cv() {
  return (
    rc ||
      ((rc = 1),
      Object.defineProperty(At, "__esModule", { value: !0 }),
      (At.FORGE_SUPPORTED_LOCALE_CODES =
        At.I18N_BUNDLE_FOLDER_NAME =
        At.I18N_INFO_FILE_NAME =
          void 0),
      (At.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (At.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (At.FORGE_SUPPORTED_LOCALE_CODES = [
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
    At
  );
}
var er = {},
  nc;
function jg() {
  if (nc) return er;
  ((nc = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.TranslationsGetter = er.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  er.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, a = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: s } = a;
      if (!s) {
        let u;
        return (
          o.locales.includes(i) && (u = await this.getTranslationResource(i)),
          { translations: u ?? null, locale: i }
        );
      }
      for (const u of this.getLocaleLookupOrder(i, o)) {
        const c = await this.getTranslationResource(u);
        if (c) return { translations: c, locale: u };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const a = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(i, a);
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
    async getTranslationResource(i) {
      let a = this.translationResources.get(i);
      if (!a)
        try {
          ((a = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, a));
        } catch (o) {
          throw o instanceof t ? o : new t(`Failed to get translation resource for locale: ${i}`);
        }
      return a;
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
    getLocaleLookupOrder(i, a) {
      const { locales: o, fallback: s } = a,
        u = [i],
        c = s[i];
      return (
        c && Array.isArray(c) && c.length > 0 && u.push(...c),
        e(u, a.fallback.default),
        u.filter((l) => o.includes(l))
      );
    }
  }
  return ((er.TranslationsGetter = r), er);
}
var vn = {},
  Eo = {},
  ic;
function Pv() {
  return (
    ic ||
      ((ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = lt.__importDefault(pg()),
          n = (a, o, s) => {
            const u = a[s];
            return u ? (0, e.getTranslationValueFromContent)(u, o) : null;
          };
        e.getTranslationValue = n;
        const i = (a, o) => {
          let s = a[o];
          if (!s) {
            const u = o.split(".");
            u.length > 1 && (s = (0, r.default)(a, u, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = i;
      })(Eo)),
    Eo
  );
}
var ac;
function Dg() {
  if (ac) return vn;
  ((ac = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.Translator = void 0));
  const e = Pv();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, i) {
      ((this.locale = n), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(n);
      if (i === void 0) {
        for (const { translations: a } of this.localeLookupOrderedTranslations) {
          const o = (0, e.getTranslationValueFromContent)(a, n);
          if (o !== null) {
            i = o;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(n, i));
      }
      return i;
    }
  }
  return ((vn.Translator = t), vn);
}
var pn = {},
  oc;
function Tg() {
  if (oc) return pn;
  ((oc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.ensureLocale = void 0));
  const e = Cv(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, o) => {
        const [s] = o.split("-");
        return (a[s] || (a[s] = o), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (a) => {
      const o = a.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((pn.ensureLocale = i), pn);
}
var ko = {},
  sc;
function Mg() {
  return (
    sc ||
      ((sc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          r = (c) => typeof c?.i18n == "string",
          n = (c) => c.startsWith("connect-"),
          i = (c) => c.startsWith("core:"),
          a = (c) => {
            const l = new Set(),
              d = (p, v) =>
                !t(p) || l.has(p)
                  ? []
                  : (l.add(p),
                    Object.entries(p).flatMap(([g, f]) => {
                      const h = [...v, g];
                      return r(f)
                        ? [{ propertyPath: h, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((_) => d(_, h))
                          : d(f, h);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !i(l) && d && Array.isArray(d) && d.length > 0 ? d.map((p) => [p, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const s = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const u = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ko)),
    ko
  );
}
var xo = {},
  uc;
function Lg() {
  return (uc || ((uc = 1), Object.defineProperty(xo, "__esModule", { value: !0 })), xo);
}
var cc;
function Av() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = lt;
        (t.__exportStar(Cv(), e),
          t.__exportStar(jg(), e),
          t.__exportStar(Dg(), e),
          t.__exportStar(Tg(), e));
        var r = Pv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Mg();
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
          t.__exportStar(Lg(), e));
      })(So)),
    So
  );
}
var lc;
function Fg() {
  if (lc) return fn;
  ((lc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.getContext = void 0));
  const e = se(),
    t = Av(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((fn.getContext = n), fn);
}
var hn = {},
  dc;
function Ng() {
  if (dc) return hn;
  ((dc = 1),
    Object.defineProperty(hn, "__esModule", { value: !0 }),
    (hn.changeWindowTitle = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        await r("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((hn.changeWindowTitle = n), hn);
}
var gn = {},
  fc;
function Bg() {
  if (fc) return gn;
  ((fc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.theme = void 0));
  const t = (0, se().getCallBridge)();
  return ((gn.theme = { enable: () => t("enableTheming") }), gn);
}
var _n = {},
  bn = {},
  Ro = {},
  tr = {},
  vc;
function Iv() {
  if (vc) return tr;
  ((vc = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.blobToBase64 = tr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let u = 0; u < a.length; u++) o[u] = a.charCodeAt(u);
    const s = new Uint8Array(o);
    return new Blob([s], { type: n });
  };
  tr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((tr.blobToBase64 = t), tr);
}
var pc;
function qg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Iv(),
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
          i = (c) => (0, t.base64ToBlob)(c.data, c.type),
          a = async (c) => {
            if (c instanceof Blob) return { ...(await n(c)), __isBlobData: !0 };
            if (Array.isArray(c))
              return Promise.all(c.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (c && r(c)) {
              const l = await Promise.all(
                Object.entries(c).map(async ([d, p]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(p),
                ]),
              );
              return Object.fromEntries(l);
            }
            return c;
          };
        e.serialiseBlobsInPayload = a;
        const o = (c) => {
          if (c && r(c) && "__isBlobData" in c) {
            const l = c;
            return i({ data: l.data, type: l.type });
          }
          if (Array.isArray(c)) return c.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (c && r(c)) {
            const l = {};
            for (const [d, p] of Object.entries(c)) l[d] = (0, e.deserialiseBlobsInPayload)(p);
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
      })(Ro)),
    Ro
  );
}
var hc;
function jv() {
  if (hc) return bn;
  ((hc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.events = void 0));
  const e = se(),
    t = qg(),
    r = (0, e.getCallBridge)(),
    n = async (a, o) => {
      let s = o;
      return (
        (0, t.containsBlobs)(o) && (s = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: a, payload: s })
      );
    },
    i = (a, o) =>
      r("on", {
        event: a,
        callback: (u) => {
          let c = u;
          return (
            (0, t.containsSerialisedBlobs)(u) && (c = (0, t.deserialiseBlobsInPayload)(u)),
            o(c)
          );
        },
      });
  return ((bn.events = { emit: n, on: i }), bn);
}
var gc;
function Ug() {
  if (gc) return _n;
  ((gc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.emitReadyEvent = void 0));
  const e = jv(),
    t = Fv(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((_n.emitReadyEvent = n), _n);
}
const zg = "modulepreload",
  $g = function (e, t) {
    return new URL(e, t).href;
  },
  _c = {},
  Dv = function (t, r, n) {
    let i = Promise.resolve();
    if (r && r.length > 0) {
      let c = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p }),
            ),
          ),
        );
      };
      const o = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        u = s?.nonce || s?.getAttribute("nonce");
      i = c(
        r.map((l) => {
          if (((l = $g(l, n)), l in _c)) return;
          _c[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let g = o.length - 1; g >= 0; g--) {
              const f = o[g];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : zg),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            u && v.setAttribute("nonce", u),
            document.head.appendChild(v),
            d)
          )
            return new Promise((g, f) => {
              (v.addEventListener("load", g),
                v.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function a(o) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o;
    }
    return i.then((o) => {
      for (const s of o || []) s.status === "rejected" && a(s.reason);
      return t().catch(a);
    });
  };
var yn = {},
  Co = {},
  mn = {},
  Yi = {},
  bc;
function Tv() {
  if (bc) return Yi;
  ((bc = 1), Object.defineProperty(Yi, "__esModule", { value: !0 }), (Yi.default = r));
  let e;
  const t = new Uint8Array(16);
  function r() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(t);
  }
  return Yi;
}
var Or = {},
  wn = {},
  On = {},
  yc;
function Vg() {
  if (yc) return On;
  ((yc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((On.default = e), On);
}
var mc;
function qa() {
  if (mc) return wn;
  ((mc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.default = void 0));
  var e = t(Vg());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((wn.default = n), wn);
}
var wc;
function Ua() {
  if (wc) return Or;
  ((wc = 1),
    Object.defineProperty(Or, "__esModule", { value: !0 }),
    (Or.default = void 0),
    (Or.unsafeStringify = n));
  var e = t(qa());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const r = [];
  for (let o = 0; o < 256; ++o) r.push((o + 256).toString(16).slice(1));
  function n(o, s = 0) {
    return (
      r[o[s + 0]] +
      r[o[s + 1]] +
      r[o[s + 2]] +
      r[o[s + 3]] +
      "-" +
      r[o[s + 4]] +
      r[o[s + 5]] +
      "-" +
      r[o[s + 6]] +
      r[o[s + 7]] +
      "-" +
      r[o[s + 8]] +
      r[o[s + 9]] +
      "-" +
      r[o[s + 10]] +
      r[o[s + 11]] +
      r[o[s + 12]] +
      r[o[s + 13]] +
      r[o[s + 14]] +
      r[o[s + 15]]
    );
  }
  function i(o, s = 0) {
    const u = n(o, s);
    if (!(0, e.default)(u)) throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var a = i;
  return ((Or.default = a), Or);
}
var Oc;
function Gg() {
  if (Oc) return mn;
  ((Oc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.default = void 0));
  var e = r(Tv()),
    t = Ua();
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  let n,
    i,
    a = 0,
    o = 0;
  function s(c, l, d) {
    let p = (l && d) || 0;
    const v = l || new Array(16);
    c = c || {};
    let g = c.node || n,
      f = c.clockseq !== void 0 ? c.clockseq : i;
    if (g == null || f == null) {
      const w = c.random || (c.rng || e.default)();
      (g == null && (g = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = i = ((w[6] << 8) | w[7]) & 16383));
    }
    let h = c.msecs !== void 0 ? c.msecs : Date.now(),
      _ = c.nsecs !== void 0 ? c.nsecs : o + 1;
    const b = h - a + (_ - o) / 1e4;
    if (
      (b < 0 && c.clockseq === void 0 && (f = (f + 1) & 16383),
      (b < 0 || h > a) && c.nsecs === void 0 && (_ = 0),
      _ >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = h), (o = _), (i = f), (h += 122192928e5));
    const y = ((h & 268435455) * 1e4 + _) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
    const O = ((h / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (O >>> 8) & 255),
      (v[p++] = O & 255),
      (v[p++] = ((O >>> 24) & 15) | 16),
      (v[p++] = (O >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = g[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var u = s;
  return ((mn.default = u), mn);
}
var Sn = {},
  Vt = {},
  En = {},
  Sc;
function Mv() {
  if (Sc) return En;
  ((Sc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e = t(qa());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    let a;
    const o = new Uint8Array(16);
    return (
      (o[0] = (a = parseInt(i.slice(0, 8), 16)) >>> 24),
      (o[1] = (a >>> 16) & 255),
      (o[2] = (a >>> 8) & 255),
      (o[3] = a & 255),
      (o[4] = (a = parseInt(i.slice(9, 13), 16)) >>> 8),
      (o[5] = a & 255),
      (o[6] = (a = parseInt(i.slice(14, 18), 16)) >>> 8),
      (o[7] = a & 255),
      (o[8] = (a = parseInt(i.slice(19, 23), 16)) >>> 8),
      (o[9] = a & 255),
      (o[10] = ((a = parseInt(i.slice(24, 36), 16)) / 1099511627776) & 255),
      (o[11] = (a / 4294967296) & 255),
      (o[12] = (a >>> 24) & 255),
      (o[13] = (a >>> 16) & 255),
      (o[14] = (a >>> 8) & 255),
      (o[15] = a & 255),
      o
    );
  }
  var n = r;
  return ((En.default = n), En);
}
var Ec;
function Lv() {
  if (Ec) return Vt;
  ((Ec = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.URL = Vt.DNS = void 0),
    (Vt.default = o));
  var e = Ua(),
    t = r(Mv());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function n(s) {
    s = unescape(encodeURIComponent(s));
    const u = [];
    for (let c = 0; c < s.length; ++c) u.push(s.charCodeAt(c));
    return u;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  Vt.DNS = i;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Vt.URL = a;
  function o(s, u, c) {
    function l(d, p, v, g) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof p == "string" && (p = (0, t.default)(p)),
        ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(p),
        h.set(d, p.length),
        (h = c(h)),
        (h[6] = (h[6] & 15) | u),
        (h[8] = (h[8] & 63) | 128),
        v)
      ) {
        g = g || 0;
        for (let _ = 0; _ < 16; ++_) v[g + _] = h[_];
        return v;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      l.name = s;
    } catch {}
    return ((l.DNS = i), (l.URL = a), l);
  }
  return Vt;
}
var kn = {},
  kc;
function Hg() {
  if (kc) return kn;
  ((kc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const g = unescape(encodeURIComponent(v));
      v = new Uint8Array(g.length);
      for (let f = 0; f < g.length; ++f) v[f] = g.charCodeAt(f);
    }
    return t(n(i(v), v.length * 8));
  }
  function t(v) {
    const g = [],
      f = v.length * 32,
      h = "0123456789abcdef";
    for (let _ = 0; _ < f; _ += 8) {
      const b = (v[_ >> 5] >>> (_ % 32)) & 255,
        y = parseInt(h.charAt((b >>> 4) & 15) + h.charAt(b & 15), 16);
      g.push(y);
    }
    return g;
  }
  function r(v) {
    return (((v + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(v, g) {
    ((v[g >> 5] |= 128 << (g % 32)), (v[r(g) - 1] = g));
    let f = 1732584193,
      h = -271733879,
      _ = -1732584194,
      b = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const O = f,
        w = h,
        S = _,
        k = b;
      ((f = u(f, h, _, b, v[y], 7, -680876936)),
        (b = u(b, f, h, _, v[y + 1], 12, -389564586)),
        (_ = u(_, b, f, h, v[y + 2], 17, 606105819)),
        (h = u(h, _, b, f, v[y + 3], 22, -1044525330)),
        (f = u(f, h, _, b, v[y + 4], 7, -176418897)),
        (b = u(b, f, h, _, v[y + 5], 12, 1200080426)),
        (_ = u(_, b, f, h, v[y + 6], 17, -1473231341)),
        (h = u(h, _, b, f, v[y + 7], 22, -45705983)),
        (f = u(f, h, _, b, v[y + 8], 7, 1770035416)),
        (b = u(b, f, h, _, v[y + 9], 12, -1958414417)),
        (_ = u(_, b, f, h, v[y + 10], 17, -42063)),
        (h = u(h, _, b, f, v[y + 11], 22, -1990404162)),
        (f = u(f, h, _, b, v[y + 12], 7, 1804603682)),
        (b = u(b, f, h, _, v[y + 13], 12, -40341101)),
        (_ = u(_, b, f, h, v[y + 14], 17, -1502002290)),
        (h = u(h, _, b, f, v[y + 15], 22, 1236535329)),
        (f = c(f, h, _, b, v[y + 1], 5, -165796510)),
        (b = c(b, f, h, _, v[y + 6], 9, -1069501632)),
        (_ = c(_, b, f, h, v[y + 11], 14, 643717713)),
        (h = c(h, _, b, f, v[y], 20, -373897302)),
        (f = c(f, h, _, b, v[y + 5], 5, -701558691)),
        (b = c(b, f, h, _, v[y + 10], 9, 38016083)),
        (_ = c(_, b, f, h, v[y + 15], 14, -660478335)),
        (h = c(h, _, b, f, v[y + 4], 20, -405537848)),
        (f = c(f, h, _, b, v[y + 9], 5, 568446438)),
        (b = c(b, f, h, _, v[y + 14], 9, -1019803690)),
        (_ = c(_, b, f, h, v[y + 3], 14, -187363961)),
        (h = c(h, _, b, f, v[y + 8], 20, 1163531501)),
        (f = c(f, h, _, b, v[y + 13], 5, -1444681467)),
        (b = c(b, f, h, _, v[y + 2], 9, -51403784)),
        (_ = c(_, b, f, h, v[y + 7], 14, 1735328473)),
        (h = c(h, _, b, f, v[y + 12], 20, -1926607734)),
        (f = l(f, h, _, b, v[y + 5], 4, -378558)),
        (b = l(b, f, h, _, v[y + 8], 11, -2022574463)),
        (_ = l(_, b, f, h, v[y + 11], 16, 1839030562)),
        (h = l(h, _, b, f, v[y + 14], 23, -35309556)),
        (f = l(f, h, _, b, v[y + 1], 4, -1530992060)),
        (b = l(b, f, h, _, v[y + 4], 11, 1272893353)),
        (_ = l(_, b, f, h, v[y + 7], 16, -155497632)),
        (h = l(h, _, b, f, v[y + 10], 23, -1094730640)),
        (f = l(f, h, _, b, v[y + 13], 4, 681279174)),
        (b = l(b, f, h, _, v[y], 11, -358537222)),
        (_ = l(_, b, f, h, v[y + 3], 16, -722521979)),
        (h = l(h, _, b, f, v[y + 6], 23, 76029189)),
        (f = l(f, h, _, b, v[y + 9], 4, -640364487)),
        (b = l(b, f, h, _, v[y + 12], 11, -421815835)),
        (_ = l(_, b, f, h, v[y + 15], 16, 530742520)),
        (h = l(h, _, b, f, v[y + 2], 23, -995338651)),
        (f = d(f, h, _, b, v[y], 6, -198630844)),
        (b = d(b, f, h, _, v[y + 7], 10, 1126891415)),
        (_ = d(_, b, f, h, v[y + 14], 15, -1416354905)),
        (h = d(h, _, b, f, v[y + 5], 21, -57434055)),
        (f = d(f, h, _, b, v[y + 12], 6, 1700485571)),
        (b = d(b, f, h, _, v[y + 3], 10, -1894986606)),
        (_ = d(_, b, f, h, v[y + 10], 15, -1051523)),
        (h = d(h, _, b, f, v[y + 1], 21, -2054922799)),
        (f = d(f, h, _, b, v[y + 8], 6, 1873313359)),
        (b = d(b, f, h, _, v[y + 15], 10, -30611744)),
        (_ = d(_, b, f, h, v[y + 6], 15, -1560198380)),
        (h = d(h, _, b, f, v[y + 13], 21, 1309151649)),
        (f = d(f, h, _, b, v[y + 4], 6, -145523070)),
        (b = d(b, f, h, _, v[y + 11], 10, -1120210379)),
        (_ = d(_, b, f, h, v[y + 2], 15, 718787259)),
        (h = d(h, _, b, f, v[y + 9], 21, -343485551)),
        (f = a(f, O)),
        (h = a(h, w)),
        (_ = a(_, S)),
        (b = a(b, k)));
    }
    return [f, h, _, b];
  }
  function i(v) {
    if (v.length === 0) return [];
    const g = v.length * 8,
      f = new Uint32Array(r(g));
    for (let h = 0; h < g; h += 8) f[h >> 5] |= (v[h / 8] & 255) << (h % 32);
    return f;
  }
  function a(v, g) {
    const f = (v & 65535) + (g & 65535);
    return (((v >> 16) + (g >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function o(v, g) {
    return (v << g) | (v >>> (32 - g));
  }
  function s(v, g, f, h, _, b) {
    return a(o(a(a(g, v), a(h, b)), _), f);
  }
  function u(v, g, f, h, _, b, y) {
    return s((g & f) | (~g & h), v, g, _, b, y);
  }
  function c(v, g, f, h, _, b, y) {
    return s((g & h) | (f & ~h), v, g, _, b, y);
  }
  function l(v, g, f, h, _, b, y) {
    return s(g ^ f ^ h, v, g, _, b, y);
  }
  function d(v, g, f, h, _, b, y) {
    return s(f ^ (g | ~h), v, g, _, b, y);
  }
  var p = e;
  return ((kn.default = p), kn);
}
var xc;
function Wg() {
  if (xc) return Sn;
  ((xc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e = r(Lv()),
    t = r(Hg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((Sn.default = i), Sn);
}
var xn = {},
  Rn = {},
  Rc;
function Kg() {
  if (Rc) return Rn;
  ((Rc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Rn.default = t), Rn);
}
var Cc;
function Jg() {
  if (Cc) return xn;
  ((Cc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  var e = n(Kg()),
    t = n(Tv()),
    r = Ua();
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, s, u) {
    if (e.default.randomUUID && !s && !o) return e.default.randomUUID();
    o = o || {};
    const c = o.random || (o.rng || t.default)();
    if (((c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), s)) {
      u = u || 0;
      for (let l = 0; l < 16; ++l) s[u + l] = c[l];
      return s;
    }
    return (0, r.unsafeStringify)(c);
  }
  var a = i;
  return ((xn.default = a), xn);
}
var Cn = {},
  Pn = {},
  Pc;
function Yg() {
  if (Pc) return Pn;
  ((Pc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  function e(i, a, o, s) {
    switch (i) {
      case 0:
        return (a & o) ^ (~a & s);
      case 1:
        return a ^ o ^ s;
      case 2:
        return (a & o) ^ (a & s) ^ (o & s);
      case 3:
        return a ^ o ^ s;
    }
  }
  function t(i, a) {
    return (i << a) | (i >>> (32 - a));
  }
  function r(i) {
    const a = [1518500249, 1859775393, 2400959708, 3395469782],
      o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof i == "string") {
      const l = unescape(encodeURIComponent(i));
      i = [];
      for (let d = 0; d < l.length; ++d) i.push(l.charCodeAt(d));
    } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
    i.push(128);
    const s = i.length / 4 + 2,
      u = Math.ceil(s / 16),
      c = new Array(u);
    for (let l = 0; l < u; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (i[l * 64 + p * 4] << 24) |
          (i[l * 64 + p * 4 + 1] << 16) |
          (i[l * 64 + p * 4 + 2] << 8) |
          i[l * 64 + p * 4 + 3];
      c[l] = d;
    }
    ((c[u - 1][14] = ((i.length - 1) * 8) / Math.pow(2, 32)),
      (c[u - 1][14] = Math.floor(c[u - 1][14])),
      (c[u - 1][15] = ((i.length - 1) * 8) & 4294967295));
    for (let l = 0; l < u; ++l) {
      const d = new Uint32Array(80);
      for (let _ = 0; _ < 16; ++_) d[_] = c[l][_];
      for (let _ = 16; _ < 80; ++_) d[_] = t(d[_ - 3] ^ d[_ - 8] ^ d[_ - 14] ^ d[_ - 16], 1);
      let p = o[0],
        v = o[1],
        g = o[2],
        f = o[3],
        h = o[4];
      for (let _ = 0; _ < 80; ++_) {
        const b = Math.floor(_ / 20),
          y = (t(p, 5) + e(b, v, g, f) + h + a[b] + d[_]) >>> 0;
        ((h = f), (f = g), (g = t(v, 30) >>> 0), (v = p), (p = y));
      }
      ((o[0] = (o[0] + p) >>> 0),
        (o[1] = (o[1] + v) >>> 0),
        (o[2] = (o[2] + g) >>> 0),
        (o[3] = (o[3] + f) >>> 0),
        (o[4] = (o[4] + h) >>> 0));
    }
    return [
      (o[0] >> 24) & 255,
      (o[0] >> 16) & 255,
      (o[0] >> 8) & 255,
      o[0] & 255,
      (o[1] >> 24) & 255,
      (o[1] >> 16) & 255,
      (o[1] >> 8) & 255,
      o[1] & 255,
      (o[2] >> 24) & 255,
      (o[2] >> 16) & 255,
      (o[2] >> 8) & 255,
      o[2] & 255,
      (o[3] >> 24) & 255,
      (o[3] >> 16) & 255,
      (o[3] >> 8) & 255,
      o[3] & 255,
      (o[4] >> 24) & 255,
      (o[4] >> 16) & 255,
      (o[4] >> 8) & 255,
      o[4] & 255,
    ];
  }
  var n = r;
  return ((Pn.default = n), Pn);
}
var Ac;
function Xg() {
  if (Ac) return Cn;
  ((Ac = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var e = r(Lv()),
    t = r(Yg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((Cn.default = i), Cn);
}
var An = {},
  Ic;
function Zg() {
  if (Ic) return An;
  ((Ic = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((An.default = e), An);
}
var In = {},
  jc;
function Qg() {
  if (jc) return In;
  ((jc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = t(qa());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((In.default = n), In);
}
var Dc;
function e_() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }));
        var t = l(Gg()),
          r = l(Wg()),
          n = l(Jg()),
          i = l(Xg()),
          a = l(Zg()),
          o = l(Qg()),
          s = l(qa()),
          u = l(Ua()),
          c = l(Mv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Co)),
    Co
  );
}
var Tc;
function t_() {
  if (Tc) return yn;
  ((Tc = 1),
    Object.defineProperty(yn, "__esModule", { value: !0 }),
    (yn.createAdfRendererIframeProps = void 0));
  const e = e_(),
    t = async (r, n) => {
      const { iframeResizer: i } = await Dv(
          async () => {
            const { iframeResizer: c } = await import("./index-2D7JALmr.js").then((l) => l.i);
            return { iframeResizer: c };
          },
          [],
          import.meta.url,
        ),
        a = new URL(document.referrer).origin,
        o = `${a}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var c, l;
          const d = document.getElementById(s),
            p = {
              type: "adf-document",
              document: (c = r.extension.macro) === null || c === void 0 ? void 0 : c.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
            };
          (i(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (v) => {
                var g;
                (g = v?.iFrameResizer) === null || g === void 0 || g.resize();
              },
            },
            d || "",
          ),
            (l = d?.contentWindow) === null || l === void 0 || l.postMessage(p, a));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: o, onLoad: u }
      );
    };
  return ((yn.createAdfRendererIframeProps = t), yn);
}
var Mc;
function Fv() {
  if (Mc) return on;
  ((Mc = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.view = void 0));
  const e = Rg(),
    t = Cg(),
    r = Pg(),
    n = Ag(),
    i = Ig(),
    a = Fg(),
    o = Ng(),
    s = Bg(),
    u = Ug(),
    c = t_();
  return (
    (on.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: i.createHistory,
      getContext: a.getContext,
      theme: s.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
      createAdfRendererIframeProps: c.createAdfRendererIframeProps,
    }),
    on
  );
}
var Lc;
function iu() {
  return (
    Lc ||
      ((Lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(Fv(), e));
      })(Oo)),
    Oo
  );
}
var Po = {},
  jn = {},
  Fc;
function r_() {
  if (Fc) return jn;
  ((Fc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.router = void 0));
  const t = (0, se().getCallBridge)(),
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
    i = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    a = async () => t("reload");
  return ((jn.router = { getUrl: r, navigate: n, open: i, reload: a }), jn);
}
var Nc;
function n_() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(r_(), e));
      })(Po)),
    Po
  );
}
var Ao = {},
  Dn = {},
  Bc;
function i_() {
  if (Bc) return Dn;
  ((Bc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.Modal = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class i {
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
  return ((Dn.Modal = i), Dn);
}
var qc;
function a_() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(i_(), e));
      })(Ao)),
    Ao
  );
}
var nt = {},
  rr = {},
  Uc;
function o_() {
  if (Uc) return rr;
  ((Uc = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.productFetchApi = rr.remoteFetchApi = void 0));
  const e = Iv(),
    t = async (o) => {
      const s = {};
      for (const [u, c] of o.entries())
        if (u === "file") {
          const l = c.name,
            d = c.type;
          ((s.file = await (0, e.blobToBase64)(c)), (s.__fileName = l), (s.__fileType = d));
        } else s[u] = c;
      return JSON.stringify(s);
    },
    r = (o) => {
      if (!o) return o;
      if ("signal" in o) {
        const { signal: s, ...u } = o;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return o;
    },
    n = async (o) => {
      const s = o?.body instanceof FormData,
        u = s ? await t(o?.body) : o?.body,
        c = new Request("", { body: u, method: o?.method, headers: o?.headers }),
        l = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(l),
        isMultipartFormData: s,
      };
    },
    i = (o) => {
      const s = async (u, c) => {
        const l = r(c),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          g = {
            remoteKey: u,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: _,
            status: b,
            isAttachment: y,
          } = await o("fetchRemote", g),
          O = y ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(O || null, { headers: h, status: b, statusText: _ });
      };
      return { requestRemote: (u, c) => s(u, c) };
    };
  rr.remoteFetchApi = i;
  const a = (o) => {
    const s = async (u, c, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: u,
          restPath: c,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: g,
        },
        {
          body: h,
          headers: _,
          statusText: b,
          status: y,
          isAttachment: O,
        } = await o("fetchProduct", f),
        w = O ? (0, e.base64ToBlob)(h, _["content-type"]) : h;
      return new Response(w || null, { headers: _, status: y, statusText: b });
    };
    return {
      requestConfluence: (u, c) => s("confluence", u, c),
      requestJira: (u, c) => s("jira", u, c),
      requestBitbucket: (u, c) => s("bitbucket", u, c),
    };
  };
  return ((rr.productFetchApi = a), rr);
}
var zc;
function s_() {
  if (zc) return nt;
  zc = 1;
  var e;
  (Object.defineProperty(nt, "__esModule", { value: !0 }),
    (nt.requestRemote = nt.requestBitbucket = nt.requestJira = nt.requestConfluence = void 0));
  const t = se(),
    r = o_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (nt.requestConfluence = e.requestConfluence),
    (nt.requestJira = e.requestJira),
    (nt.requestBitbucket = e.requestBitbucket),
    (nt.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    nt
  );
}
var Io = {},
  Tn = {},
  $c;
function u_() {
  if ($c) return Tn;
  (($c = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.showFlag = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Tn.showFlag = n), Tn);
}
var Vc;
function c_() {
  return (
    Vc ||
      ((Vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = u_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Io)),
    Io
  );
}
var jo = {},
  Gc;
function l_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(jv(), e));
      })(jo)),
    jo
  );
}
var Do = {},
  Mn = {},
  Hc;
function d_() {
  if (Hc) return Mn;
  ((Hc = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.realtime = void 0));
  const t = (0, se().getCallBridge)(),
    r = (o, s, u) => t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u }),
    n = (o, s, u) => t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u }),
    i = (o, s, u) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: s, options: u, isGlobal: !0 }),
    a = (o, s, u) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: s, options: u, isGlobal: !0 });
  return ((Mn.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Mn);
}
var To = {},
  Wc;
function f_() {
  return (
    Wc ||
      ((Wc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (t) {
            ((t.Content = "content"), (t.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (t) {
            ((t.Repository = "repository"), (t.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(To)),
    To
  );
}
var Kc;
function v_() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = d_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = f_();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return r.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return r.Bitbucket;
            },
          }));
      })(Do)),
    Do
  );
}
var Mo = {},
  Ln = {},
  Lo = {},
  Jc;
function p_() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = se(),
          r = _e(),
          n = 30,
          i = (0, t.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const a = (s) => {
            switch (s.type) {
              case "forge":
                return { agentName: s.agentName, agentKey: s.agentKey, prompt: s.prompt };
              case "atlassian":
                return { agentName: s.agentName, prompt: s.prompt };
              default:
                return { prompt: s.prompt };
            }
          },
          o = async (s) => {
            if (s.type === "forge") {
              if (s.agentName.length > n) throw new Error("rovo agent name too long");
              if (s.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const u = a(s);
            if ((await i("openRovo", u)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = o;
      })(Lo)),
    Lo
  );
}
var Yc;
function h_() {
  if (Yc) return Ln;
  ((Yc = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.rovo = void 0));
  const e = p_();
  return ((Ln.rovo = { open: e.open }), Ln);
}
var Xc;
function g_() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), lt.__exportStar(h_(), e));
      })(Mo)),
    Mo
  );
}
var It = {},
  Zc;
function __() {
  if (Zc) return It;
  ((Zc = 1),
    Object.defineProperty(It, "__esModule", { value: !0 }),
    (It.createTranslationFunction = It.getTranslations = It.resetTranslationsCache = void 0));
  const e = Av(),
    t = iu(),
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
    i = () => {
      n.reset();
    };
  It.resetTranslationsCache = i;
  const a = async (s = null, u = { fallback: !0 }) => {
    let c = s;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, u));
  };
  It.getTranslations = a;
  const o = async (s = null) => {
    let u = s;
    u || (u = (await t.view.getContext()).locale);
    const c = new e.Translator(u, n);
    return (
      await c.init(),
      (l, d) => {
        var p, v;
        return (v = (p = c.translate(l)) !== null && p !== void 0 ? p : d) !== null && v !== void 0
          ? v
          : l;
      }
    );
  };
  return ((It.createTranslationFunction = o), It);
}
var Fo = {},
  No = {},
  Bo = {},
  Fn = {},
  Nn = {},
  Qc;
function Nv() {
  return (
    Qc ||
      ((Qc = 1),
      Object.defineProperty(Nn, "__esModule", { value: !0 }),
      (Nn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Nn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Nn
  );
}
var el;
function za() {
  if (el) return Fn;
  ((el = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = iu(),
    r = Nv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Fn.checkRestrictedEnvironment = n), Fn);
}
var tl;
function b_() {
  return (
    tl ||
      ((tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Fi(),
          r = _e(),
          n = za(),
          a = (0, se().getCallBridge)(),
          o = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const g = new Uint8Array(v);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          s = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              g = new Uint8Array(v),
              f = btoa(String.fromCharCode(...g));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          u = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((b, y) => {
                if (b instanceof Blob) return b;
                if (!(b && typeof b == "object" && "data" in b && typeof b.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return o(b.data, b.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((b) => s(b))),
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((b, y) => {
                const O = v[y];
                (f.set(O.checksum, b), h.set(O.checksum, y));
              }),
              Object.entries(g).map(([b, y]) => {
                const { key: O, checksum: w } = y,
                  S = f.get(w),
                  k = h.get(w);
                return k === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const I = await fetch(b, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: O,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
                            };
                          }
                        })(),
                        index: k,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: k,
                      };
              })
            );
          };
        e.createUploadPromises = u;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = c;
      })(Bo)),
    Bo
  );
}
var Bn = {},
  rl;
function y_() {
  if (rl) return Bn;
  ((rl = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.deleteObjects = void 0));
  const e = Fi(),
    t = _e(),
    r = za(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "delete" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        s.map(async (u) => {
          await (0, e.invoke)(o, { key: u });
        }),
      );
    };
  return ((Bn.deleteObjects = a), Bn);
}
var qn = {},
  nl;
function m_() {
  if (nl) return qn;
  ((nl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.download = void 0));
  const e = Fi(),
    t = _e(),
    r = za(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "download" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const u = await (0, e.invoke)(o, { keys: s });
      if (!u || typeof u != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const c = Object.entries(u).map(async ([d, p]) => {
        try {
          const v = await fetch(d, { method: "GET" });
          if (!v.ok)
            return {
              success: !1,
              key: p,
              status: v.status,
              error: `Download failed with status ${v.status}`,
            };
          const g = await v.blob();
          return { success: !0, key: p, blob: g, status: v.status };
        } catch (v) {
          return {
            success: !1,
            key: p,
            status: 503,
            error: v instanceof Error ? v.message : "Download failed",
          };
        }
      });
      return await Promise.all(c);
    };
  return ((qn.download = a), qn);
}
var Un = {},
  il;
function w_() {
  if (il) return Un;
  ((il = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.getMetadata = void 0));
  const e = Fi(),
    t = _e(),
    r = za(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "getMetadata" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        s.map(async (c) => {
          const l = await (0, e.invoke)(o, { key: c });
          return !l || typeof l != "object"
            ? { key: c, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((Un.getMetadata = a), Un);
}
var al;
function O_() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = b_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = y_(),
          n = m_(),
          i = w_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: i.getMetadata,
          delete: r.deleteObjects,
        };
      })(No)),
    No
  );
}
var ol;
function S_() {
  return (
    ol ||
      ((ol = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = lt;
        (t.__exportStar(O_(), e), t.__exportStar(Nv(), e));
      })(Fo)),
    Fo
  );
}
var qo = {},
  zn = {},
  nr = {},
  Sr = {},
  Xi = {},
  sl;
function E_() {
  if (sl) return Xi;
  ((sl = 1), Object.defineProperty(Xi, "__esModule", { value: !0 }));
  const e = Jt();
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
    setValues(n, i) {
      var a;
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
            n.source && o.user && this._setWarningState(i, o),
            e.SDKFlags.setFlags(this._sdkKey, (a = o.sdk_flags) !== null && a !== void 0 ? a : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
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
    _extractBootstrapMetadata(n, i) {
      if (n !== "Bootstrap") return null;
      const a = {};
      return (
        i.user && (a.user = i.user),
        i.sdkInfo && (a.generatorSDKInfo = i.sdkInfo),
        (a.lcut = i.time),
        a
      );
    }
    _getDetailedStoreResult(n, i) {
      let a = null;
      return (
        n && (a = n[i] ? n[i] : n[(0, e._DJB2)(i)]),
        { result: a, details: this._getDetails(a == null) }
      );
    }
    _setWarningState(n, i) {
      var a, o;
      const s = e.StableID.get(this._sdkKey);
      if (
        ((a = n.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== s &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || s)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const u = i.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(u) &&
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
      var i, a;
      const o = this.getCurrentSourceDetails();
      let s = o.reason;
      const u = (i = o.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && u.length > 0 && (s = s + u[0]),
        s !== "Uninitialized" &&
          s !== "NoValues" &&
          (s = `${s}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: s }));
    }
  }
  return ((Xi.default = t), Xi);
}
var Er = {},
  $n = {},
  ul;
function k_() {
  if (ul) return $n;
  ((ul = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n._resolveDeltasResponse = void 0));
  const e = Jt(),
    t = 2;
  function r(o, s) {
    const u = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const c = n(o, u),
      l = i(c),
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
  $n._resolveDeltasResponse = r;
  function n(o, s) {
    return Object.assign(Object.assign(Object.assign({}, o), s), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), s.dynamic_configs),
    });
  }
  function i(o) {
    const s = o;
    return (
      a(o.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      a(o.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      a(o.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function a(o, s) {
    o?.forEach((u) => {
      delete s[u];
    });
  }
  return $n;
}
var cl;
function Bv() {
  if (cl) return Er;
  cl = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (i, a, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : u(g.value).then(d, p);
        }
        v((s = s.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Jt(),
    r = k_();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const s = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, s, u, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: u,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const b =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && c ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: b ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(a, h, _, s);
      });
    }
    _fetchEvaluations(a, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
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
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, s), p), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((Er.default = n), Er);
}
var Vn = {},
  ll;
function x_() {
  if (ll) return Vn;
  ((ll = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn._makeParamStoreGetter = void 0));
  const e = Jt(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, g, p);
        case "experiment":
          return s(l, f, g, p);
        case "layer":
          return u(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((Vn._makeParamStoreGetter = c), Vn);
}
var ir = {},
  dl;
function R_() {
  if (dl) return ir;
  dl = 1;
  var e =
    (ir && ir.__awaiter) ||
    function (i, a, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : u(g.value).then(d, p);
        }
        v((s = s.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.StatsigEvaluationsDataAdapter = void 0));
  const t = Jt(),
    r = Bv();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, s) {
      (super.attach(a, o, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, s) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), s);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, s?.priority, o, u);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((ir.StatsigEvaluationsDataAdapter = n), ir);
}
var fl;
function C_() {
  if (fl) return Sr;
  fl = 1;
  var e =
    (Sr && Sr.__awaiter) ||
    function (s, u, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function g(_) {
          try {
            h(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            h(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function h(_) {
          _.done ? p(_.value) : d(_.value).then(g, f);
        }
        h((l = l.apply(s, u || [])).next());
      });
    };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = Jt(),
    r = E_(),
    n = Bv(),
    i = x_(),
    a = R_();
  class o extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof o
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new o(u ?? "", {}));
    }
    constructor(u, c, l = null) {
      var d, p;
      t.SDKType._setClientType(u, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
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
        (this._store = new r.default(u)),
        (this._network = v),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(u, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = c?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(u, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
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
      var l;
      const d = (0, t._normalizeUser)(u, c),
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(u),
        g = (0, t._makeFeatureGate)(u, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(u),
        g = (0, t._makeDynamicConfig)(u, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(u, c) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(u),
        h = (0, t._makeExperiment)(u, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, c),
        b = _ ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getLayerImpl(u, c) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(u),
        f = (0, t._makeLayer)(u, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const _ = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                b,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const g = {
          name: u,
          details: v,
          __configuration: p,
          get: (0, i._makeParamStoreGetter)(this, p, c),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, c);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        g
      );
    }
  }
  return ((Sr.default = o), Sr);
}
var vl;
function P_() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        var t =
            (nr && nr.__createBinding) ||
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
            (nr && nr.__exportStar) ||
            function (o, s) {
              for (var u in o)
                u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && t(s, o, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Jt(),
          i = C_();
        ((e.StatsigClient = i.default), r(Jt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(nr)),
    nr
  );
}
var Gn = {},
  Hn = {},
  pl;
function A_() {
  if (pl) return Hn;
  ((pl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.initFeatureFlags = void 0));
  const e = se(),
    t = _e(),
    r = Ba(),
    n = 500,
    i = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    o = (u) => {
      if (!u || !u.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (u) => (o(u), a("initFeatureFlags", { user: u.user }));
  return (
    (Hn.initFeatureFlags = (0, r.withRateLimiter)(
      s,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Hn
  );
}
var hl;
function I_() {
  if (hl) return Gn;
  ((hl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn.ForgeDataAdapter = void 0));
  const e = A_();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, i, a) {
      var o;
      if (n) return n;
      this.environment = ((o = this.options) === null || o === void 0 ? void 0 : o.environment) || {
        tier: "development",
      };
      const s = { ...i, statsigEnvironment: this.environment },
        u = await (0, e.initFeatureFlags)({ user: s }),
        c = {
          source: "Network",
          data: JSON.stringify(u),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = c), c);
    }
    getDataSync(n) {
      return this.cache;
    }
    async attach(n, i, a) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Gn.ForgeDataAdapter = t), Gn);
}
var Uo = {},
  gl;
function qv() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (r) {
            ((r.DEVELOPMENT = "DEVELOPMENT"),
              (r.STAGING = "STAGING"),
              (r.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (r) {
          r.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Uo)),
    Uo
  );
}
var Wn = {},
  _l;
function j_() {
  if (_l) return Wn;
  ((_l = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn.trackFeatureFlagEvent = void 0));
  const e = se(),
    t = _e(),
    r = qv(),
    n = Ba(),
    i = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    s = (c) => {
      if (!c || !c.type || !c.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(c.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(c).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (c) => (s(c), o("trackFeatureFlagEvent", c));
  return (
    (Wn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      u,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Wn
  );
}
var bl;
function D_() {
  if (bl) return zn;
  ((bl = 1),
    Object.defineProperty(zn, "__esModule", { value: !0 }),
    (zn.ForgeFeatureFlags = void 0));
  const e = P_(),
    t = I_(),
    r = qv(),
    n = j_();
  class i {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(o, s = {}) {
      var u;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const c = {
        environment: { tier: s.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (u = c.environment) === null || u === void 0 ? void 0 : u.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(o), c)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(o) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(o, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(o, !0), this.client.checkGate(o, { disableExposureLog: !0 }));
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
    convertUser(o) {
      return {
        userID: o.userId,
        custom: { ...(o.custom || {}), ...(o.attributes || {}) },
        customIDs: o.identifiers || {},
      };
    }
    sendCheckFlagEvent(o, s) {
      const u = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: o,
          success: s,
        },
      };
      (0, n.trackFeatureFlagEvent)(u);
    }
  }
  return ((zn.ForgeFeatureFlags = i), zn);
}
var yl;
function T_() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = D_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(qo)),
    qo
  );
}
var ml;
function M_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = lt;
        var r = Og();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Fi(), e),
          t.__exportStar(xg(), e),
          t.__exportStar(iu(), e),
          t.__exportStar(n_(), e),
          t.__exportStar(a_(), e),
          t.__exportStar(s_(), e),
          t.__exportStar(c_(), e),
          t.__exportStar(l_(), e),
          t.__exportStar(v_(), e),
          t.__exportStar(g_(), e),
          (e.i18n = t.__importStar(__())),
          t.__exportStar(S_(), e),
          t.__exportStar(T_(), e));
      })(_o)),
    _o
  );
}
var Lt = M_();
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
function L_(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Uv(e) {
  var t = L_(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function wl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Uv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && wl(e.prototype, t),
    r && wl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function F_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ne(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return F_(e);
}
function J(e) {
  return (
    (J = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    J(e)
  );
}
function ki(e, t) {
  return (
    (ki = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ki(e, t)
  );
}
function Be(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ki(e, t));
}
function x(e, t, r) {
  return (
    (t = Uv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function N_(e) {
  if (Array.isArray(e)) return e;
}
function B_(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      s = [],
      u = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
    } catch (l) {
      ((c = !0), (i = l));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zv(e, t) {
  if (e) {
    if (typeof e == "string") return Es(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Es(e, t)
          : void 0
    );
  }
}
function q_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return N_(e) || B_(e, t) || zv(e, t) || q_();
}
var $v = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  U_ = function (t) {
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
  ma = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (i) {
            return i.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (i) {
          console.error(i);
        }
    }
  },
  z_ = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Ol = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  $_ = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var s = Ol(o, n, i),
      u = Ol(a.index, n, i),
      c = r.slice(),
      l = c.splice(s, 1),
      d = K(l, 1),
      p = d[0];
    return (c.splice(u, 0, p), c);
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
function V_(e, t) {
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
    i = V_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
function Sl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var G_ = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = zo({}, r.payload);
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
          Ae(r) === "object" && (this.payload = zo(zo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function H_(e) {
  if (Array.isArray(e)) return Es(e);
}
function W_(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function K_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return H_(e) || W_(e) || zv(e) || K_();
}
function J_(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = J(e)) !== null; );
  return e;
}
function wa() {
  return (
    (wa =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = J_(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    wa.apply(null, arguments)
  );
}
function Y_(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Vv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vv = function () {
    return !!e;
  })();
}
function X_(e, t, r, n) {
  var i = wa(J(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Z_ = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = Y_(this, t, [r])),
        x(n, "_isUIAnalyticsEvent", !0),
        x(n, "clone", function () {
          if (n.hasFired) return null;
          var i = De(n.context),
            a = De(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        x(n, "fire", function (i) {
          n.hasFired ||
            (n.handlers.forEach(function (a) {
              return a(n, i);
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
      Be(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : X_(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(G_),
  Q_ = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  eb = function () {
    return m.useContext(Q_);
  },
  Oa = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function tb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function rb(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    i = m.useRef(r),
    a = n.current || !!(t && i.current.inputs && tb(t, i.current.inputs)),
    o = a ? i.current : { inputs: t, result: e() };
  return (
    m.useEffect(
      function () {
        ((n.current = !1), (i.current = o));
      },
      [o],
    ),
    o.result
  );
}
function nb(e, t) {
  return rb(function () {
    return e;
  }, t);
}
function Gv() {
  var e = eb(),
    t = nb(
      function (r) {
        return new Z_({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function El(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ib(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? El(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : El(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xi(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    u = Gv(),
    c = u.createAnalyticsEvent,
    l = Oa(s),
    d = Oa(t),
    p = m.useCallback(
      function (v) {
        var g = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = ib({ componentName: n, packageName: a, packageVersion: o }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, i, a, o, c, l, d],
    );
  return p;
}
function kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ab(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = Gv(),
    u = s.createAnalyticsEvent,
    c = Oa(o),
    l = Oa(t),
    d = m.useCallback(
      function () {
        var p = u({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = ab({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, u, c, l],
    );
  return d;
}
var lr = "ASC",
  Sa = "DESC",
  ob = "small",
  Ea = "large",
  Hv = 0.22;
const sb = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, sb) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Wv(e, t, r) {
  return e ?? "var(--c-, )";
}
var ub = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  cb = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = ne(e, ub);
    return m.createElement(
      "table",
      te(
        {
          inert: o ? "" : void 0,
          style: {
            "--local-dynamic-table-hover-bg":
              "var(--ds-background-neutral-subtle-hovered, #0515240F)",
            "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, #E9F2FE)",
            "--local-dynamic-table-hover-highlighted-bg":
              "var(--ds-background-selected-hovered, #CFE1FD)",
            "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, #4688EC)",
          },
          ref: t,
        },
        s,
        {
          "data-testid": a && "".concat(a, "--table"),
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  lb = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  db = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  fb = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  vb = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
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
  pb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function hb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Kv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Pl = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  gb = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === lr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (u, c) {
      var l = Pl(u.cells, t, n),
        d = Pl(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (Ae(l) !== Ae(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? a * o.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -a
          : (!d && d !== 0) || l > d
            ? a
            : l === d
              ? 0
              : 1;
    });
  };
function _b(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
      return ((i = hb(this, n, [].concat(o))), x(i, "state", { pageRows: [] }), i);
    }
    return (
      Be(n, r),
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
            value: function (a, o) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== o.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var a = this.props;
              a.rows;
              var o = a.head;
              (a.sortKey, a.sortOrder, a.rowsPerPage, a.page);
              var s = a.forwardedRef,
                u = ne(a, pb);
              return E.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, u, { ref: s }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (a, o) {
              var s = a.rows,
                u = a.head,
                c = a.sortKey,
                l = a.sortOrder,
                d = a.page,
                p = a.rowsPerPage,
                v = a.isTotalPagesControlledExternally;
              ma(c, u);
              var g, f;
              return (
                v ? ((g = s), (f = s)) : ((g = gb(u, s, c, l) || []), (f = $v(g, d, p))),
                Cl(Cl({}, o), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var bb = "--local-dynamic-table-width",
  Jv = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, bb, "".concat(r, "%")) : void 0;
  },
  yb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  mb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, yb);
    return m.createElement(
      "td",
      te(
        {
          style: Jv({ width: r }),
          ref: a,
          className: R([
            "_1bsb8a2a",
            n && i && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            o.className,
          ]),
        },
        o,
      ),
    );
  },
  wb = ["isHighlighted", "children", "style", "testId", "className"],
  Ob = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      s = ne(e, wb);
    return m.createElement(
      "tr",
      te(
        {
          style: i,
          className: R([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        s,
        { ref: t, "data-testid": a },
      ),
      n,
    );
  }),
  Sb = ["cells"],
  Eb = ["content", "testId"],
  kb = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      s = r.cells,
      u = ne(r, Sb);
    return E.createElement(
      Ob,
      te(
        {},
        u,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (i && "".concat(i, "--row-").concat(u.key)) },
      ),
      s.map(function (c, l) {
        var d = c.content,
          p = c.testId,
          v = ne(c, Eb),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return E.createElement(
          mb,
          te({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
            isFixedSize: a,
            key: l,
            shouldTruncate: f,
            width: h,
          }),
          d,
        );
      }),
    );
  };
function xb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Yv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Yv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yv = function () {
    return !!e;
  })();
}
var Rb = (function (e) {
    function t() {
      return (fe(this, t), xb(this, t, arguments));
    }
    return (
      Be(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.pageRows,
              a = n.head,
              o = n.isFixedSize,
              s = n.highlightedRowIndex,
              u = n.testId,
              c = n.forwardedRef;
            return E.createElement(
              "tbody",
              { "data-testid": u && "".concat(u, "--body"), ref: c },
              i.map(function (l, d) {
                return E.createElement(kb, {
                  head: a,
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
  })(E.Component),
  Cb = _b(
    E.forwardRef(function (e, t) {
      return E.createElement(Rb, te({}, e, { forwardedRef: t }));
    }),
  );
function Pb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Xv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Ab = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Pb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Be(t, e),
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
})(E.Component);
const au = m.createContext(null);
var Ib = "#FFFFFF",
  ks = "#42526E",
  jb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Db(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ks, ")")
    : "var(--ds-icon-inverse, ".concat(Ib, ")");
}
var Zi = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Tb = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Zv = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "inherit" : n,
        a = t.delay,
        o = a === void 0 ? 0 : a,
        s = t.interactionName,
        u = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        p = typeof l == "number" ? l : jb[l],
        v = "".concat(o, "ms"),
        g = Db(i),
        f = m.useContext(au);
      return (
        Tb(
          function () {
            if (f != null) return f.hold(s);
          },
          [f, s],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([Zi.wrapperStyles, Zi.rotateStyles]),
          },
          E.createElement(
            "svg",
            {
              height: p,
              width: p,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": u || void 0,
              style: { animationDelay: v },
              role: u ? "img" : "none",
              className: R([Zi.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([Zi.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Il(e) {
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
var jl = "--contents-opacity",
  Mb = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  Lb = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Il(Il({}, x({}, jl, n)), {}, { "--_cnddr8": Wv("var(".concat(jl, ")")) }),
      },
      r,
    );
  },
  Fb = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Nb(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Qv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Qv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qv = function () {
    return !!e;
  })();
}
var ep = (function (e) {
  function t() {
    return (fe(this, t), Nb(this, t, arguments));
  }
  return (
    Be(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            s = n.contentsOpacity,
            u = n.testId,
            c = n.loadingLabel;
          return E.createElement(
            Mb,
            { testId: u },
            a ? E.createElement(Lb, { contentsOpacity: s, testId: u }, i) : i,
            a &&
              E.createElement(
                Fb,
                { testId: u },
                E.createElement(Zv, {
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
})(E.Component);
x(ep, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ea,
  contentsOpacity: Hv,
  loadingLabel: "Loading table",
});
var Bb = ["children", "testId"],
  qb = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, Bb);
    return m.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Ub = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  zb = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function $b(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, tp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var rp = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = $b(this, t, [].concat(i))),
      x(r, "spinnerRef", E.createRef()),
      x(r, "containerRef", E.createRef()),
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
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = u ? "none" : ""), (o.style.opacity = u ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    Be(t, e),
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
            i,
            a = window.innerHeight,
            o = this.getTargetNode(),
            s = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !s)) {
            var u = o.getBoundingClientRect(),
              c = s.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(u, a),
              p = u.top,
              v = u.bottom,
              g = u.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(u, a)) {
                if (p >= 0) {
                  var h = a - p,
                    _ = h / 2 + p - l / 2,
                    b = h < l * 3 ? p + l : _;
                  this.translateSpinner(s, b, !0);
                } else if (p < 0 && v > a) {
                  var y = a / 2 - l / 2;
                  this.translateSpinner(s, y, !0);
                } else {
                  var O = v / 2 - l / 2,
                    w = O < l ? O - (l - O) : O;
                  this.translateSpinner(s, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, a)) return;
            var S = (i = this.containerRef) === null || i === void 0 ? void 0 : i.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var k = S.getBoundingClientRect().top,
                D = (p - k) / 2;
              this.translateSpinner(s, D, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            s = n.testId,
            u = n.loadingLabel;
          return E.createElement(
            qb,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                Ub,
                { testId: s },
                E.createElement(
                  zb,
                  { ref: this.spinnerRef },
                  E.createElement(Zv, {
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
})(E.Component);
x(rp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ea,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Hv), ")"),
  loadingLabel: "Loading table",
});
function Vb(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    i = K(n, 2),
    a = i[0],
    o = i[1],
    s = m.useRef(r);
  m.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var u = r ? e : a,
    c = m.useCallback(function (l) {
      s.current || o(l);
    }, []);
  return [u, c];
}
var Kn = {},
  Jn = {};
function Dl(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o),
      u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, i) {
      var a = e.apply(t, r);
      function o(u) {
        Dl(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Dl(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var $o = { exports: {} },
  Vo = { exports: {} },
  Tl;
function np() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Vo)),
    Vo.exports
  );
}
var Go = { exports: {} },
  Ho = { exports: {} },
  Ml;
function ip() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        function t(r, n, i, a) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (u, c, l, d) {
              function p(v, g) {
                t(u, v, function (f) {
                  return this._invoke(v, g, f);
                });
              }
              c
                ? o
                  ? o(u, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (u[c] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, i, a));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ho)),
    Ho.exports
  );
}
var Ll;
function ap() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        var t = ip();
        function r() {
          var n,
            i,
            a = typeof Symbol == "function" ? Symbol : {},
            o = a.iterator || "@@iterator",
            s = a.toStringTag || "@@toStringTag";
          function u(h, _, b, y) {
            var O = _ && _.prototype instanceof l ? _ : l,
              w = Object.create(O.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, k, D) {
                  var I,
                    C,
                    T,
                    U = 0,
                    q = D || [],
                    V = !1,
                    Y = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((I = X), (C = 0), (T = n), (Y.n = N), c);
                      },
                    };
                  function G($, X) {
                    for (C = $, T = X, i = 0; !V && U && !N && i < q.length; i++) {
                      var N,
                        A = q[i],
                        be = Y.p,
                        ae = A[2];
                      $ > 3
                        ? (N = ae === X) &&
                          ((T = A[(C = A[4]) ? 5 : ((C = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          ((N = $ < 2 && be < A[1])
                            ? ((C = 0), (Y.v = X), (Y.n = A[1]))
                            : be < ae &&
                              (N = $ < 3 || A[0] > X || X > ae) &&
                              ((A[4] = $), (A[5] = X), (Y.n = ae), (C = 0)));
                    }
                    if (N || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, N) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), C = X, T = N; (i = C < 2 ? n : T) || !V; ) {
                      I || (C ? (C < 3 ? (C > 1 && (Y.n = -1), G(C, T)) : (Y.n = T)) : (Y.v = T));
                      try {
                        if (((U = 2), I)) {
                          if ((C || ($ = "next"), (i = I[$]))) {
                            if (!(i = i.call(I, T)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((T = i.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (i = I.return) && i.call(I),
                              C < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (C = 1)));
                          I = n;
                        } else if ((i = (V = Y.n < 0) ? T : S.call(k, Y)) !== c) break;
                      } catch (A) {
                        ((I = n), (C = 1), (T = A));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: i, done: V };
                  };
                })(h, b, y),
                !0,
              ),
              w
            );
          }
          var c = {};
          function l() {}
          function d() {}
          function p() {}
          i = Object.getPrototypeOf;
          var v = [][o]
              ? i(i([][o]()))
              : (t((i = {}), o, function () {
                  return this;
                }),
                i),
            g = (p.prototype = l.prototype = Object.create(v));
          function f(h) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(h, p)
                : ((h.__proto__ = p), t(h, s, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = p),
            t(g, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, s, "GeneratorFunction"),
            t(g),
            t(g, s, "Generator"),
            t(g, o, function () {
              return this;
            }),
            t(g, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: u, m: f };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Go)),
    Go.exports
  );
}
var Wo = { exports: {} },
  Ko = { exports: {} },
  Jo = { exports: {} },
  Fl;
function op() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        var t = np(),
          r = ip();
        function n(i, a) {
          function o(u, c, l, d) {
            try {
              var p = i[u](c),
                v = p.value;
              return v instanceof t
                ? a.resolve(v.v).then(
                    function (g) {
                      o("next", g, l, d);
                    },
                    function (g) {
                      o("throw", g, l, d);
                    },
                  )
                : a.resolve(v).then(
                    function (g) {
                      ((p.value = g), l(p));
                    },
                    function (g) {
                      return o("throw", g, l, d);
                    },
                  );
            } catch (g) {
              d(g);
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
                  return new a(function (p, v) {
                    o(u, l, p, v);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Jo)),
    Jo.exports
  );
}
var Nl;
function sp() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        var t = ap(),
          r = op();
        function n(i, a, o, s, u) {
          return new r(t().w(i, a, o, s), u || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ko)),
    Ko.exports
  );
}
var Bl;
function Gb() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        var t = sp();
        function r(n, i, a, o, s) {
          var u = t(n, i, a, o, s);
          return u.next().then(function (c) {
            return c.done ? c.value : u.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Wo)),
    Wo.exports
  );
}
var Yo = { exports: {} },
  ql;
function Hb() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            i = [];
          for (var a in n) i.unshift(a);
          return function o() {
            for (; i.length; ) if ((a = i.pop()) in n) return ((o.value = a), (o.done = !1), o);
            return ((o.done = !0), o);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Yo)),
    Yo.exports
  );
}
var Xo = { exports: {} },
  Zo = { exports: {} },
  Ul;
function Wb() {
  return (
    Ul ||
      ((Ul = 1),
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
      })(Zo)),
    Zo.exports
  );
}
var zl;
function Kb() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        var t = Wb().default;
        function r(n) {
          if (n != null) {
            var i = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              a = 0;
            if (i) return i.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Xo)),
    Xo.exports
  );
}
var $l;
function Jb() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        var t = np(),
          r = ap(),
          n = Gb(),
          i = sp(),
          a = op(),
          o = Hb(),
          s = Kb();
        function u() {
          var c = r(),
            l = c.m(u),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function g(f) {
            var h, _;
            return function (b) {
              (h ||
                ((h = {
                  stop: function () {
                    return _(b.a, 2);
                  },
                  catch: function () {
                    return b.v;
                  },
                  abrupt: function (O, w) {
                    return _(b.a, v[O], w);
                  },
                  delegateYield: function (O, w, S) {
                    return ((h.resultName = w), _(b.d, s(O), S));
                  },
                  finish: function (O) {
                    return _(b.f, O);
                  },
                }),
                (_ = function (O, w, S) {
                  ((b.p = h.prev), (b.n = h.next));
                  try {
                    return O(w, S);
                  } finally {
                    h.next = b.n;
                  }
                })),
                h.resultName && ((h[h.resultName] = b.v), (h.resultName = void 0)),
                (h.sent = b.v),
                (h.next = b.n));
              try {
                return f.call(this, h);
              } finally {
                ((b.p = h.prev), (b.n = h.next));
              }
            };
          }
          return ((e.exports = u =
            function () {
              return {
                wrap: function (_, b, y, O) {
                  return c.w(g(_), b, y, O && O.reverse());
                },
                isGeneratorFunction: p,
                mark: c.m,
                awrap: function (_, b) {
                  return new t(_, b);
                },
                AsyncIterator: a,
                async: function (_, b, y, O, w) {
                  return (p(b) ? i : n)(g(_), b, y, O, w);
                },
                keys: o,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })($o)),
    $o.exports
  );
}
var Qo, Vl;
function Yb() {
  if (Vl) return Qo;
  Vl = 1;
  var e = Jb()();
  Qo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Qo;
}
var Xb = Yb();
const B = Xt(Xb);
var ar = {},
  kr = {},
  Qi = {},
  Yn = {},
  Gl;
function Zb() {
  if (Gl) return Yn;
  ((Gl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.V1InitializeContainer = void 0));
  const e = St();
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
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Yn.V1InitializeContainer = t), Yn);
}
var Xn = {},
  Hl;
function Qb() {
  if (Hl) return Xn;
  ((Hl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.V2InitializeContainer = void 0));
  const e = St();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var i, a, o;
      const s = this._getResultFromLookup(this._values.feature_gates, n);
      return s
        ? {
            name: n,
            value: s.v === !0,
            rule_id: (i = s.r) !== null && i !== void 0 ? i : "default",
            secondary_exposures: (a = s.s) !== null && a !== void 0 ? a : [],
            id_type: (o = s.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var i, a, o, s;
      const u = this._getResultFromLookup(this._values.dynamic_configs, n);
      return u
        ? {
            name: n,
            value: (i = this._values.values[u.v]) !== null && i !== void 0 ? i : {},
            rule_id: u.r,
            secondary_exposures: (a = u.s) !== null && a !== void 0 ? a : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
            is_user_in_experiment: u.ue === !0,
            passed: u.p === !0,
            group_name: (s = u.gn) !== null && s !== void 0 ? s : void 0,
            is_experiment_active: u.ea === !0,
            group: u.r,
            is_device_based: u.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var i, a, o, s, u, c;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (i = this._values.values[l.v]) !== null && i !== void 0 ? i : {},
            rule_id: l.r,
            secondary_exposures: (a = l.s) !== null && a !== void 0 ? a : [],
            is_user_in_experiment: l.ue === !0,
            group_name: (o = l.gn) !== null && o !== void 0 ? o : void 0,
            is_experiment_active: l.ea === !0,
            group: l.r,
            is_device_based: l.i === "stableID",
            allocated_experiment_name: (s = l.ae) !== null && s !== void 0 ? s : "",
            explicit_parameters: (u = l.ep) !== null && u !== void 0 ? u : [],
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
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Xn.V2InitializeContainer = t), Xn);
}
var Wl;
function ey() {
  if (Wl) return Qi;
  ((Wl = 1), Object.defineProperty(Qi, "__esModule", { value: !0 }));
  const e = St(),
    t = Zb(),
    r = Qb();
  let n = class {
    constructor(a) {
      ((this._sdkKey = a),
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
    setValues(a, o) {
      var s, u;
      if (!a) return !1;
      const c = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = a.source),
          c?.has_updates !== !0 ||
            ((s = c.time) !== null && s !== void 0 ? s : 0) < this._lcut ||
            ((this._rawValues = a.data),
            (this._lcut = c.time),
            (this._receivedAt = a.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, c)),
            a.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (u = c.sdk_flags) !== null && u !== void 0 ? u : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      const o = this._values ? this._values.getGate(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfig(a) {
      const o = this._values ? this._values.getConfig(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(a) {
      const o = this._values ? this._values.getLayer(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getParamStore(a) {
      const o = this._values ? this._values.getParamStore(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.getExposureMapping();
    }
    _extractBootstrapMetadata(a, o) {
      if (a !== "Bootstrap") return null;
      const s = {};
      return (
        o.user && (s.user = o.user),
        o.sdkInfo && (s.generatorSDKInfo = o.sdkInfo),
        (s.lcut = o.time),
        s
      );
    }
    _getDetailedStoreResult(a) {
      return { result: a, details: this._getDetails(a == null) };
    }
    _setWarningState(a, o) {
      var s, u;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((s = a.customIDs) === null || s === void 0 ? void 0 : s.stableID) !== c &&
        ((!((u = a.customIDs) === null || u === void 0) && u.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const l = o.user,
          d = Object.assign(Object.assign({}, a), {
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
      const a = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (a.warnings = Array.from(this._warnings)), a);
    }
    _getDetails(a) {
      var o, s;
      const u = this.getCurrentSourceDetails();
      let c = u.reason;
      const l = (o = u.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (s = this._bootstrapMetadata) !== null && s !== void 0
          ? s
          : void 0;
      return (d && (u.bootstrapMetadata = d), Object.assign(Object.assign({}, u), { reason: c }));
    }
  };
  return ((Qi.default = n), Qi);
}
var xr = {},
  Zn = {},
  Kl;
function ty() {
  if (Kl) return Zn;
  ((Kl = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn._resolveDeltasResponse = void 0));
  const e = St(),
    t = 2;
  function r(o, s) {
    const u = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const c = n(o, u),
      l = i(c),
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
  Zn._resolveDeltasResponse = r;
  function n(o, s) {
    return Object.assign(Object.assign(Object.assign({}, o), s), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), s.dynamic_configs),
    });
  }
  function i(o) {
    const s = o;
    return (
      a(o.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      a(o.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      a(o.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function a(o, s) {
    o?.forEach((u) => {
      delete s[u];
    });
  }
  return Zn;
}
var Jl;
function up() {
  if (Jl) return xr;
  Jl = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (i, a, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : u(g.value).then(d, p);
        }
        v((s = s.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = St(),
    r = ty();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const s = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, s, u, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: u,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const b =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && c ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: b ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(a, h, _, s);
      });
    }
    _fetchEvaluations(a, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
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
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, s), p), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((xr.default = n), xr);
}
var Qn = {},
  Yl;
function ry() {
  if (Yl) return Qn;
  ((Yl = 1),
    Object.defineProperty(Qn, "__esModule", { value: !0 }),
    (Qn._makeParamStoreGetter = void 0));
  const e = St(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, g, p);
        case "experiment":
          return s(l, f, g, p);
        case "layer":
          return u(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((Qn._makeParamStoreGetter = c), Qn);
}
var or = {},
  Xl;
function ny() {
  if (Xl) return or;
  Xl = 1;
  var e =
    (or && or.__awaiter) ||
    function (i, a, o, s) {
      function u(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : u(g.value).then(d, p);
        }
        v((s = s.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.StatsigEvaluationsDataAdapter = void 0));
  const t = St(),
    r = up();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, s) {
      (super.attach(a, o, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, s) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), s);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, s, u) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, s?.priority, o, u);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((or.StatsigEvaluationsDataAdapter = n), or);
}
var Zl;
function iy() {
  if (Zl) return kr;
  Zl = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (s, u, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function g(_) {
          try {
            h(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            h(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function h(_) {
          _.done ? p(_.value) : d(_.value).then(g, f);
        }
        h((l = l.apply(s, u || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = St(),
    r = ey(),
    n = up(),
    i = ry(),
    a = ny();
  let o = class xs extends t.StatsigClientBase {
    static instance(u) {
      const c = (0, t._getStatsigGlobal)().instance(u);
      return c instanceof xs
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new xs(u ?? "", {}));
    }
    constructor(u, c, l = null) {
      var d, p;
      t.SDKType._setClientType(u, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
        v,
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
        (this._network = v),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(u, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = c?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(u, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
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
      var l, d, p;
      const v = (0, t._normalizeUser)(u, c),
        g = (l = v.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (g) {
        const f =
          (p = (d = this.storageProvider).isReadyResolver) === null || p === void 0
            ? void 0
            : p.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(g, this._sdkKey),
              () => t.StableID.setOverride(g, this._sdkKey),
            )
          : t.StableID.setOverride(g, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (v.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, v.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        v
      );
    }
    _getFeatureGateImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(u),
        g = (0, t._makeFeatureGate)(u, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(u),
        g = (0, t._makeDynamicConfig)(u, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(u, c) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(u),
        h = (0, t._makeExperiment)(u, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, c),
        b = _ ?? h;
      return (
        this._enqueueExposure(
          u,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(u, c) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(u),
        f = (0, t._makeLayer)(u, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const _ = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                b,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(u, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const g = {
          name: u,
          details: v,
          __configuration: p,
          get: (0, i._makeParamStoreGetter)(this, p, c),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, c);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        g
      );
    }
  };
  return ((kr.default = o), kr);
}
var Ql;
function ay() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        var t =
            (ar && ar.__createBinding) ||
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
            (ar && ar.__exportStar) ||
            function (o, s) {
              for (var u in o)
                u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && t(s, o, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = St(),
          i = iy();
        ((e.StatsigClient = i.default), r(St(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ar)),
    ar
  );
}
var it = ay(),
  es = { exports: {} },
  ed;
function oy() {
  return (
    ed ||
      ((ed = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(u, c, l) {
          ((this.fn = u), (this.context = c), (this.once = l || !1));
        }
        function a(u, c, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new i(l, d || u, p),
            g = r ? r + c : c;
          return (
            u._events[g]
              ? u._events[g].fn
                ? (u._events[g] = [u._events[g], v])
                : u._events[g].push(v)
              : ((u._events[g] = v), u._eventsCount++),
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
            for (var p = 0, v = d.length, g = new Array(v); p < v; p++) g[p] = d[p].fn;
            return g;
          }),
          (s.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (c, l, d, p, v, g) {
            var f = r ? r + c : c;
            if (!this._events[f]) return !1;
            var h = this._events[f],
              _ = arguments.length,
              b,
              y;
            if (h.fn) {
              switch ((h.once && this.removeListener(c, h.fn, void 0, !0), _)) {
                case 1:
                  return (h.fn.call(h.context), !0);
                case 2:
                  return (h.fn.call(h.context, l), !0);
                case 3:
                  return (h.fn.call(h.context, l, d), !0);
                case 4:
                  return (h.fn.call(h.context, l, d, p), !0);
                case 5:
                  return (h.fn.call(h.context, l, d, p, v), !0);
                case 6:
                  return (h.fn.call(h.context, l, d, p, v, g), !0);
              }
              for (y = 1, b = new Array(_ - 1); y < _; y++) b[y - 1] = arguments[y];
              h.fn.apply(h.context, b);
            } else {
              var O = h.length,
                w;
              for (y = 0; y < O; y++)
                switch ((h[y].once && this.removeListener(c, h[y].fn, void 0, !0), _)) {
                  case 1:
                    h[y].fn.call(h[y].context);
                    break;
                  case 2:
                    h[y].fn.call(h[y].context, l);
                    break;
                  case 3:
                    h[y].fn.call(h[y].context, l, d);
                    break;
                  case 4:
                    h[y].fn.call(h[y].context, l, d, p);
                    break;
                  default:
                    if (!b) for (w = 1, b = new Array(_ - 1); w < _; w++) b[w - 1] = arguments[w];
                    h[y].fn.apply(h[y].context, b);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (c, l, d) {
            return a(this, c, l, d, !1);
          }),
          (s.prototype.once = function (c, l, d) {
            return a(this, c, l, d, !0);
          }),
          (s.prototype.removeListener = function (c, l, d, p) {
            var v = r ? r + c : c;
            if (!this._events[v]) return this;
            if (!l) return (o(this, v), this);
            var g = this._events[v];
            if (g.fn) g.fn === l && (!p || g.once) && (!d || g.context === d) && o(this, v);
            else {
              for (var f = 0, h = [], _ = g.length; f < _; f++)
                (g[f].fn !== l || (p && !g[f].once) || (d && g[f].context !== d)) && h.push(g[f]);
              h.length ? (this._events[v] = h.length === 1 ? h[0] : h) : o(this, v);
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
      })(es)),
    es.exports
  );
}
var sy = oy();
const uy = Xt(sy);
function td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ea = "@all-features",
  cy = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new uy()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            s = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var u = function () {
            var l = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 })),
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
        value: function (r, n, i, a, o, s) {
          var u = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, i, Gt(Gt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var v = o(r, n, i, Gt(Gt({}, s), {}, { fireExperimentExposure: !1 })),
              g = u.eventToValue.get(a);
            g !== v && (u.eventToValue.set(a, v), a(v));
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
            this.emitter.on(ea, r),
            function () {
              n.emitter.off(ea, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(ea),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ea;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  ly = "fedramp-moderate";
function dy() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === ly;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var ou = (function (e) {
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
  pi = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Ri = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  fy = [
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
function rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ta = function (t) {
    return Rs({ perimeter: dy() ? Ri.FEDRAMP_MODERATE : Ri.COMMERCIAL }, t);
  },
  ei = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var g = K(p, 1),
        f = g[0],
        h = K(v, 1),
        _ = h[0];
      return f.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var s = K(n[o], 2),
        u = s[1],
        c = K(i[o], 2),
        l = c[1];
      if (u !== l) return !1;
    }
    return !0;
  },
  nd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  vy = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      i = t.loggingIntervalMillis,
      a = t.loggingBufferMaxSize,
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
    var p = ne(t, fy);
    return Rs(
      Rs({}, p),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: s ? s + "rgstr" : void 0,
          logEventFallbackUrls: u ? [u] : void 0,
          preventAllNetworkTraffic: o || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: i,
        loggingBufferMaxSize: a,
        disableStorage: c === void 0 ? o : c,
        disableLogging: d === void 0 ? o : d,
      },
    );
  },
  py = Object.entries(ou).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  cp = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = py.find(function (o) {
            var s = K(o, 1),
              u = s[0];
            return a.includes(u);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : ou.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  Cs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  id = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = s));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a,
              o = this.getValue(r, n);
            if (o == null) return n;
            var s = Array.isArray(n) ? "array" : Ae(n),
              u = Array.isArray(o) ? "array" : Ae(o);
            if (i) {
              var c;
              return i(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, s, u),
                  n);
            }
            return n == null || s === u
              ? (this.fireExposure(r), o)
              : ((a = this._onDefaultValueFallback) === null ||
                  a === void 0 ||
                  a.call(this, this, r, s, u),
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
              i,
              a,
              o = new e(
                r.name,
                r.value,
                r.ruleID,
                cp(r.details),
                Cs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (a = r.groupName) !== null && a !== void 0 ? a : void 0,
              );
            return ((o.experiment = r), o);
          },
        },
      ],
    );
  })(),
  ad = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = a),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = i),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = u),
        (this._explicitParameters = c));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a = this,
              o = this._value[r];
            if (o == null) return n;
            var s = function () {
              return (a._logLayerParameterExposure(r), o);
            };
            return i
              ? i(o)
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
            var i = this._value[r];
            return (i != null && this._logLayerParameterExposure(r), i ?? n);
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
              i,
              a,
              o,
              s,
              u,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                cp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Cs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Cs(
                  (a =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && a !== void 0
                    ? a
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
  Mr = "0.0.0-development";
function hy(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lp = function () {
    return !!e;
  })();
}
function gy(e, t, r) {
  if (lp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && ki(i, r.prototype), i);
}
function Ps(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ps = function (n) {
      if (n === null || !hy(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return gy(n, arguments, J(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ki(i, n)
      );
    }),
    Ps(e)
  );
}
function _y(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, dp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function dp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dp = function () {
    return !!e;
  })();
}
var od = (function (e) {
  function t(r) {
    return (fe(this, t), _y(this, t, [r]));
  }
  return (Be(t, e), ve(t));
})(Ps(Error));
function sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function by(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var yy = 5e3,
  my = "https://api.atlassian.com/flags",
  wy = "https://api.stg.atlassian.com/flags",
  Oy = "https://api.dev.atlassian.com/flags",
  Sy = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Ey = "https://api.atlassian-us-gov-mod.com/flags",
  ky = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  xy = "oasis-stg.com/flags",
  Ry = "atlassian-isolated.net/flags",
  Cy = "/gateway/api/flags",
  ts = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            B.mark(function n(i) {
              var a, o;
              return B.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (a = i.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(a)),
                          (u.prev = 2),
                          (u.next = 5),
                          this.fetchRequest(o, "GET", i)
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
          var t = de(
            B.mark(function n(i, a, o) {
              var s;
              return B.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (s = { identifiers: a, customAttributes: o, targetApp: i.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", i, s)
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = de(
            B.mark(function n(i) {
              var a;
              return B.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      if (i.ok) {
                        s.next = 5;
                        break;
                      }
                      return ((s.next = 3), i.text());
                    case 3:
                      throw (
                        (a = s.sent),
                        new od(
                          "Non 2xx response status received, status: "
                            .concat(i.status, ", body: ")
                            .concat(JSON.stringify(a)),
                        )
                      );
                    case 5:
                      if (i.status !== 204) {
                        s.next = 7;
                        break;
                      }
                      throw new od("Unexpected 204 response");
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
          var t = de(
            B.mark(function n(i) {
              var a;
              return B.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return ((s.next = 2), i.text());
                    case 2:
                      return ((a = s.sent), s.abrupt("return", JSON.parse(a)));
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
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Cy;
          if (i === Ri.FEDRAMP_MODERATE)
            switch (r) {
              case pi.Production:
                return Ey;
              case pi.Staging:
                return Sy;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === Ri.COMMERCIAL)
            switch (r) {
              case pi.Development:
                return Oy;
              case pi.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : wy;
              default:
                var s = this.getApiUrl(a);
                return s !== null ? s : my;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o, s) {
              var u, c, l, d, p;
              return B.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || yy),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(c))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, c)),
                          (g.next = 5),
                          fetch(
                            "".concat(u).concat(i),
                            by(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Mr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
                            ),
                          )
                        );
                      case 5:
                        return ((p = g.sent), (g.next = 8), this.handleResponseError(p));
                      case 8:
                        return ((g.next = 10), this.extractResponseBody(p));
                      case 10:
                        return g.abrupt("return", g.sent);
                      case 11:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? ky.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(xy);
          var s = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(i, "//api.").concat(s[1], ".").concat(Ry) : null;
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
function ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ud(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ud(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Py(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, fp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function fp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fp = function () {
    return !!e;
  })();
}
function Ay(e, t, r, n) {
  var i = wa(J(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Iy = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = Py(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Be(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: it.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            B.mark(function i(a, o) {
              return B.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                    case "end":
                      return u.stop();
                  }
              }, i);
            }),
          );
          function n(i, a) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = de(
            B.mark(function i(a, o, s) {
              return B.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ti(
                              ti({}, this.bootstrapResult),
                              {},
                              { fullUserHash: it._getFullUserHash(o) },
                            ),
                        );
                      case 1:
                      case "end":
                        return c.stop();
                    }
                },
                i,
                this,
              );
            }),
          );
          function n(i, a, o) {
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
            ti(ti({}, this.bootstrapResult), {}, { fullUserHash: it._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            B.mark(function i(a, o, s) {
              return B.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return c.abrupt("return", null);
                    case 1:
                    case "end":
                      return c.stop();
                  }
              }, i);
            }),
          );
          function n(i, a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var i = it._getStorageKey(this._getSdkKey(), n);
          return "".concat(it.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, i) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, i) {
          Ay(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ti({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(it.DataAdapterCore);
function cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jy(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Dy(e)) || t) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
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
      ((s = !0), (a = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function Dy(e, t) {
  if (e) {
    if (typeof e == "string") return ld(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ld(e, t)
          : void 0
    );
  }
}
function ld(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var rs = "LocalOverride:Recognized",
  Ty = "STATSIG_OVERRIDES",
  dd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Rr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  My = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Rr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
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
          for (var r = Rr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          for (var o = 0, s = i; o < s.length; o++) {
            for (
              var u = s[o],
                c = 0,
                l = Object.entries((d = u.gates) !== null && d !== void 0 ? d : {});
              c < l.length;
              c++
            ) {
              var d,
                p = K(l[c], 2),
                v = p[0],
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((_ = u.configs) !== null && _ !== void 0 ? _ : {});
              f < h.length;
              f++
            ) {
              var _,
                b = K(h[f], 2),
                y = b[0],
                O = b[1];
              r.configs[y] = O;
            }
            for (
              var w = 0, S = Object.entries((k = u.layers) !== null && k !== void 0 ? k : {});
              w < S.length;
              w++
            ) {
              var k,
                D = K(S[w], 2),
                I = D[0],
                C = D[1];
              r.layers[I] = C;
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
            this.parseStoredOverrides(dd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(dd);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              s = jy(o),
              u;
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var c = u.value,
                  l = Ve._DJB2(c);
                o.has(l) && delete a[l];
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
          var n = xe(xe({}, Rr()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = K(a[i], 2), s = o[0], u = o[1], c = 0, l = Object.entries(u);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Ge(Ve._DJB2(p), s), v);
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
          var i,
            a =
              (i = this._overrides.gates[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "gates"));
          return a == null
            ? null
            : xe(xe({}, r), {}, { value: a, details: xe(xe({}, r.details), {}, { reason: rs }) });
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
          this._overrides = Rr();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var i,
            a =
              (i = this._overrides.layers[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "layers"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: rs }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var i,
            a =
              (i = n[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "configs"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: rs }),
                },
              );
        },
      },
    ]);
  })(),
  Ly = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vd = "client-default-key",
  Fy = "https://xp.atlassian.com/v1/rgstr",
  Ny = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? Ty : n,
        a = r.overrideAdapter;
      (fe(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new cy()),
        x(this, "dataAdapter", new Iy()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new My(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var s = this,
                u,
                c;
              return B.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((u = ta(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ei(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.init(u, a, o)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                v = p - c;
                              s.fireClientEvent(c, v, "initialize", s.initCompleted, u.apiKey);
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o, s) {
              var u = this,
                c,
                l;
              return B.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((c = ta(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ei(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.provider = a),
                          this.provider.setClientVersion(Mr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, a, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                g = v - l;
                              u.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                u.initCompleted,
                                a.getApiKey ? a.getApiKey() : void 0,
                              );
                            })),
                          p.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, i, a, o) {
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
        value: function (r, n, i, a) {
          var o,
            s = this,
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Ht(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Mr,
                    success: a,
                    startTime: r,
                    totalTime: n,
                  },
                  u && { apiKey: u },
                );
                c.sendOperationalEvent({
                  action: i,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (c) {
                s.initOptions.environment !== pi.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var s = this,
                u,
                c,
                l,
                d = arguments;
              return B.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((u = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = ta(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ei(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(u, "has_updates") ||
                            (u.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, a, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var g = performance.now(),
                                f = g - l;
                              s.fireClientEvent(l, f, "initializeFromValues", s.initCompleted);
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
          function r(n, i, a) {
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
            B.mark(function n(i, a, o) {
              var s, u;
              return B.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = ta(i)),
                          (u = function () {
                            return ts.fetchExperimentValues(s, a, o).then(function (p) {
                              var v = p.experimentValues,
                                g = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: g };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, a, o)
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = de(
            B.mark(function n(i, a) {
              var o = this;
              return B.wrap(
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
                        return ((u.next = 5), this.provider.setProfile(this.initOptions, i, a));
                      case 5:
                        return (
                          (u.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return o.provider.getExperimentValues();
                            },
                            i,
                            a,
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
          function r(n, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = de(
            B.mark(function n(i, a) {
              var o,
                s,
                u = arguments;
              return B.wrap(
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
                              customAttributesFromFetch: a,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, i, a)
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
          function r(n, i) {
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
            B.mark(function n() {
              return B.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (this.initPromise) {
                          a.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return");
                      case 4:
                        return ((a.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return a.stop();
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
            var i = n.fireGateExposure,
              a = i === void 0 ? !0 : i;
            return this.statsigClient.checkGate(r, { disableExposureLog: !a });
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
          } catch (i) {
            return (
              console.error("Error occurred when trying to check FeatureGate: ".concat(i)),
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
          } catch (i) {
            return (
              console.error("Error occurred when trying to check Experiment: ".concat(i)),
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
            var i = n.fireExperimentExposure,
              a = i === void 0 ? !0 : i;
            return id.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !a }),
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
              new id(r, {}, "", { time: Date.now(), reason: ou.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getExperiment(r, a);
          try {
            var s = a.typeGuard;
            return o.get(n, i, s);
          } catch (u) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: i,
                  options: a,
                  error: u,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              i
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
          var i;
          (this.assertInitialized(this.statsigClient),
            (i = this.statsigClient.getLayer(r)) === null || i === void 0 || i.get(n));
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
            var i;
            (i = this.statsigClient) === null ||
              i === void 0 ||
              i.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
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
          return ei(this.currentIdentifiers, r) && ei(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var i = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (u) {
              var c = a.fireGateExposure,
                l = c === void 0 ? !0 : c;
              l && i.manuallyLogGateExposure(r);
              try {
                n(u);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(u),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, o, this.checkGate.bind(this), a);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, i, a) {
          var o = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            u = function (l) {
              var d = s.fireExperimentExposure,
                p = d === void 0 ? !0 : d;
              p && o.manuallyLogExperimentExposure(r);
              try {
                a(l);
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
            i,
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
          var t = de(
            B.mark(function n(i, a, o) {
              var s, u, c, l, d, p, v, g;
              return B.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = Ht({}, i)),
                          (h.prev = 1),
                          (l = ts.fetchClientSdk(i).then(function (_) {
                            return (s.sdkKey = _.clientSdkKey);
                          })),
                          (d = ts.fetchExperimentValues(i, a, o)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = K(p, 2)),
                          (g = v[1]),
                          (u = g.experimentValues),
                          (c = g.customAttributes),
                          (h.next = 20));
                        break;
                      case 13:
                        return (
                          (h.prev = 13),
                          (h.t0 = h.catch(1)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (h.next = 19),
                          this.initFromValues(s, a, o)
                        );
                      case 19:
                        throw h.t0;
                      case 20:
                        return h.abrupt("return", this.initFromValues(s, a, c, u));
                      case 21:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
                [[1, 13]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o, s) {
              var u, c, l, d, p, v, g, f;
              return B.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (u = Ht(Ht({}, i), {}, { disableCurrentPageLogging: !0 })),
                          (_.prev = 1),
                          (_.next = 4),
                          a.setProfile(i, o, s)
                        );
                      case 4:
                        return (
                          (d = a.getClientSdkKey().then(function (b) {
                            return (u.sdkKey = b);
                          })),
                          (p = a.getExperimentValues()),
                          (_.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = _.sent),
                          (g = K(v, 2)),
                          (f = g[1]),
                          (c = f.experimentValues),
                          (l = f.customAttributesFromFetch),
                          (_.next = 22));
                        break;
                      case 15:
                        return (
                          (_.prev = 15),
                          (_.t0 = _.catch(1)),
                          _.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                _.t0 === null || _.t0 === void 0 ? void 0 : _.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (_.next = 21),
                          this.initFromValues(u, o, s)
                        );
                      case 21:
                        throw _.t0;
                      case 22:
                        return _.abrupt("return", this.initFromValues(u, o, l, c));
                      case 23:
                      case "end":
                        return _.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var s,
                u,
                c,
                l,
                d,
                p,
                v,
                g = arguments;
              return B.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (u = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = vy(i)),
                          c.sdkKey || (c.sdkKey = vd),
                          ((s = c.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (c.networkConfig = Ht(
                              Ht({}, c.networkConfig),
                              {},
                              { logEventUrl: Fy },
                            )),
                          c.perimeter === Ri.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ne(c, Ly)),
                          (this.user = nd(a, o)),
                          (v = Ht(
                            Ht({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: it.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? it.StableID.setOverride(a.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new it.StatsigClient(l, this.user, v)),
                          this.dataAdapter.setBootstrapData(u),
                          (h.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        h.next = 29;
                        break;
                      case 19:
                        return (
                          (h.prev = 19),
                          (h.t0 = h.catch(12)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new it.StatsigClient(vd, this.user, v)),
                          this.dataAdapter.setBootstrapData(),
                          (h.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), h.t0);
                      case 29:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
                [[12, 19]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var s = this,
                u,
                c,
                l;
              return B.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          p.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(a, o)) {
                          p.next = 5;
                          break;
                        }
                        return p.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (u = this.initPromise),
                          (p.prev = 6),
                          (p.next = 9),
                          this.initPromise
                        );
                      case 9:
                        p.next = 13;
                        break;
                      case 11:
                        ((p.prev = 11), (p.t0 = p.catch(6)));
                      case 13:
                        return (
                          (c = i()),
                          (l = this.updateStatsigClientUser(c, a, o)),
                          (this.initPromise = l.catch(
                            de(
                              B.mark(function v() {
                                return B.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((s.initPromise = u), !s.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          s.provider.setProfile(
                                            s.initOptions,
                                            s.currentIdentifiers,
                                            s.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return f.stop();
                                    }
                                }, v);
                              }),
                            ),
                          )),
                          p.abrupt("return", l)
                        );
                      case 17:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
                [[6, 11]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var s, u, c, l, d, p, v, g, f;
              return B.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (_.prev = 1),
                          (_.next = 4),
                          i
                        );
                      case 4:
                        ((c = _.sent), (l = nd(a, c.customAttributesFromFetch)), (_.next = 13));
                        break;
                      case 8:
                        throw (
                          (_.prev = 8),
                          (_.t0 = _.catch(1)),
                          (v = _.t0 instanceof Error ? _.t0.message : JSON.stringify(_.t0)),
                          (d = (p = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(p, !1, v),
                          _.t0
                        );
                      case 13:
                        if (
                          ((g = !0),
                          (f = null),
                          (_.prev = 15),
                          this.dataAdapter.setBootstrapData(c.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          _.next = 21;
                          break;
                        }
                        return ((_.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        _.next = 27;
                        break;
                      case 23:
                        ((_.prev = 23), (_.t1 = _.catch(15)), (g = !1), (f = String(_.t1)));
                      case 27:
                        if (
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (u = s.updateUserCompletionCallback) === null ||
                            u === void 0 ||
                            u.call(s, g, f),
                          !g)
                        ) {
                          _.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          this.subscriptions.anyUpdated(),
                          (_.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return _.stop();
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Mr;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var i = n.fireLayerExposure,
              a = i === void 0 ? !0 : i;
            return ad.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              ad.fromLayer(it._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getLayer(r, a);
          try {
            var s = a.typeGuard;
            return o.get(n, i, s);
          } catch (u) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: i,
                  options: a,
                  error: u,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              i
            );
          }
        },
      },
    ]);
  })(),
  j,
  z = (function () {
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
j = z;
x(z, "client", new Ny());
x(z, "hasCheckGateErrorOccurred", !1);
x(z, "hasGetExperimentValueErrorOccurred", !1);
x(z, "checkGate", function (e, t) {
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
x(z, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var i = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (i != null) return i;
    }
  } catch (a) {
    return (
      j.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (j.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return j.client.getExperimentValue(e, t, r, n);
});
x(z, "initializeCalled", j.client.initializeCalled.bind(j.client));
x(z, "initializeCompleted", j.client.initializeCompleted.bind(j.client));
x(z, "waitUntilInitializeCompleted", j.client.waitUntilInitializeCompleted.bind(j.client));
x(z, "initialize", j.client.initialize.bind(j.client));
x(z, "initializeWithProvider", j.client.initializeWithProvider.bind(j.client));
x(z, "initializeFromValues", j.client.initializeFromValues.bind(j.client));
x(z, "manuallyLogGateExposure", j.client.manuallyLogGateExposure.bind(j.client));
x(z, "getExperiment", j.client.getExperiment.bind(j.client));
x(z, "manuallyLogExperimentExposure", j.client.manuallyLogExperimentExposure.bind(j.client));
x(z, "manuallyLogLayerExposure", j.client.manuallyLogLayerExposure.bind(j.client));
x(z, "shutdownStatsig", j.client.shutdownStatsig.bind(j.client));
x(z, "overrideGate", j.client.overrideGate.bind(j.client));
x(z, "clearGateOverride", j.client.clearGateOverride.bind(j.client));
x(z, "overrideConfig", j.client.overrideConfig.bind(j.client));
x(z, "clearConfigOverride", j.client.clearConfigOverride.bind(j.client));
x(z, "setOverrides", j.client.setOverrides.bind(j.client));
x(z, "getOverrides", j.client.getOverrides.bind(j.client));
x(z, "clearAllOverrides", j.client.clearAllOverrides.bind(j.client));
x(z, "isCurrentUser", j.client.isCurrentUser.bind(j.client));
x(z, "onGateUpdated", j.client.onGateUpdated.bind(j.client));
x(z, "onExperimentValueUpdated", j.client.onExperimentValueUpdated.bind(j.client));
x(z, "onAnyUpdated", j.client.onAnyUpdated.bind(j.client));
x(z, "updateUser", j.client.updateUser.bind(j.client));
x(z, "updateUserWithProvider", j.client.updateUserWithProvider.bind(j.client));
x(z, "updateUserWithValues", j.client.updateUserWithValues.bind(j.client));
x(z, "getPackageVersion", j.client.getPackageVersion.bind(j.client));
x(z, "getLayer", j.client.getLayer.bind(j.client));
x(z, "getLayerValue", j.client.getLayerValue.bind(j.client));
var As = z;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = z;
  else {
    var ra, ns;
    As = window.__FEATUREGATES_JS__;
    var pd =
      ((ra = As) === null || ra === void 0 || (ns = ra.getPackageVersion) === null || ns === void 0
        ? void 0
        : ns.call(ra)) || "4.10.0 or earlier";
    if (pd !== Mr) {
      var By = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(pd, " when module version ")
        .concat(Mr, " was loading.");
      console.warn(By);
    }
  }
var Cr,
  Pr,
  qy =
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.JEST_WORKER_ID) !== void 0,
  Uy =
    !qy &&
    (globalThis == null ||
    (Pr = globalThis.process) === null ||
    Pr === void 0 ||
    (Pr = Pr.env) === null ||
    Pr === void 0
      ? void 0
      : Pr.NODE_ENV) !== "production",
  zy = function () {
    var t;
    Uy && (t = console).debug.apply(t, arguments);
  },
  su = {},
  $y = "@atlaskit/platform-feature-flags",
  _i = "__PLATFORM_FEATURE_FLAGS__",
  vp = typeof process < "u" && typeof su < "u",
  Vy = vp ? su.ENABLE_PLATFORM_FF === "true" : !1,
  Gy = vp ? su.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Hy = Vy || Gy,
  Wy = { booleanResolver: void 0 },
  bi = typeof window < "u" ? window : globalThis;
bi[_i] = bi[_i] || Wy;
function Ky(e) {
  if (Hy)
    return (
      zy(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        $y,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = bi[_i]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = bi[_i]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return As.checkGate(e);
    var i = (n = bi[_i]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Ky(e);
}
var Jy = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Yy = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Xy = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  hd = m.memo(function (t) {
    var r = t,
      n = r.color,
      i = n === void 0 ? "currentColor" : n,
      a = r.testId,
      o = r.label,
      s = r.LEGACY_primaryColor,
      u = r.LEGACY_secondaryColor,
      c = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      p = r.shouldScale,
      v = r.LEGACY_margin,
      g = r.spacing,
      f = g === void 0 ? "none" : g,
      h = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !Nr("platform-visual-refresh-icons"))
      return m.createElement(l, {
        primaryColor: s ?? i,
        secondaryColor: u,
        size: c,
        label: o,
        testId: a,
        UNSAFE_margin: v,
      });
    var b = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") b = t.size === "small" || t.size === "medium" ? t.size : b;
      else if (h) {
        var y = t.size(h);
        b = y === "small" || y === "medium" ? y : b;
      }
    }
    var O = 16,
      w = Xy[b][f],
      S = O + 2 * w;
    return m.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          b === "small" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - w, " ")
          .concat(0 - w, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: _,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : b === "small" ? Yy[f] : Jy[f],
        ]),
      }),
    );
  });
const Zy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: hd, default: hd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  $a = ru(Zy);
var gd;
function Qy() {
  if (gd) return Jn;
  ((gd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(ct()),
    t = r($a);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronLeftIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Jn.default = n), Jn);
}
var ri = {};
function _d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function bd(e) {
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
var em = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  yd = m.memo(function (t) {
    var r = t,
      n = r.glyph,
      i = r.dangerouslySetGlyph,
      a = r.primaryColor,
      o = a === void 0 ? "currentColor" : a,
      s = r.secondaryColor,
      u = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      p = r.height,
      v = r.UNSAFE_margin,
      g = i
        ? { dangerouslySetInnerHTML: { __html: i } }
        : { children: n ? m.createElement(n, { role: "presentation" }) : null },
      f = d && p ? { width: d + "px", height: p + "px" } : null;
    return m.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: bd(
            bd({}, f),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": s, margin: v },
          ),
        },
        g,
        {
          className: R([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === s && "_18hbwc43",
            s === "transparent" && "_4fyi1j28",
            u && em[u],
          ]),
        },
      ),
    );
  });
const tm = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: yd, default: yd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  pp = ru(tm);
var md;
function rm() {
  if (md) return ri;
  ((md = 1), Object.defineProperty(ri, "__esModule", { value: !0 }), (ri.default = void 0));
  var e = r(ct()),
    t = pp;
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="m9.005 10.995 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414"/></svg>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronLeftLargeIcon"), (ri.default = n), ri);
}
var wd;
function nm() {
  if (wd) return Kn;
  ((wd = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  var e = n(ct()),
    t = n(Qy()),
    r = n(rm());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronLeftIconMigration"), (Kn.default = i), Kn);
}
var im = nm();
const am = Xt(im);
var ni = {},
  ii = {},
  Od;
function om() {
  if (Od) return ii;
  ((Od = 1), Object.defineProperty(ii, "__esModule", { value: !0 }), (ii.default = void 0));
  var e = r(ct()),
    t = r($a);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronRightIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), (ii.default = n), ii);
}
var ai = {},
  Sd;
function sm() {
  if (Sd) return ai;
  ((Sd = 1), Object.defineProperty(ai, "__esModule", { value: !0 }), (ai.default = void 0));
  var e = r(ct()),
    t = pp;
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.Icon,
      Object.assign(
        {
          dangerouslySetGlyph:
            '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"/></svg>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronRightLargeIcon"), (ai.default = n), ai);
}
var Ed;
function um() {
  if (Ed) return ni;
  ((Ed = 1), Object.defineProperty(ni, "__esModule", { value: !0 }), (ni.default = void 0));
  var e = n(ct()),
    t = n(om()),
    r = n(sm());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronRightIconMigration"), (ni.default = i), ni);
}
var cm = um();
const lm = Xt(cm);
var uu = m.createContext("elevation.surface"),
  dm = function () {
    return m.useContext(uu);
  };
uu.displayName = "SurfaceProvider";
var fm = [
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
  vm = ["className"],
  pm = {
    "color.background.accent.lime.subtlest": "_bfhkm890",
    "color.background.accent.lime.subtlest.hovered": "_bfhkd4y8",
    "color.background.accent.lime.subtlest.pressed": "_bfhkkuup",
    "color.background.accent.lime.subtler": "_bfhkz2ec",
    "color.background.accent.lime.subtler.hovered": "_bfhk1gf0",
    "color.background.accent.lime.subtler.pressed": "_bfhk2kxc",
    "color.background.accent.lime.subtle": "_bfhkbq5w",
    "color.background.accent.lime.subtle.hovered": "_bfhkfoww",
    "color.background.accent.lime.subtle.pressed": "_bfhk1jbd",
    "color.background.accent.lime.bolder": "_bfhktde4",
    "color.background.accent.lime.bolder.hovered": "_bfhknzpa",
    "color.background.accent.lime.bolder.pressed": "_bfhkh0j0",
    "color.background.accent.red.subtlest": "_bfhk1vk5",
    "color.background.accent.red.subtlest.hovered": "_bfhk1i6i",
    "color.background.accent.red.subtlest.pressed": "_bfhknbir",
    "color.background.accent.red.subtler": "_bfhk1rtt",
    "color.background.accent.red.subtler.hovered": "_bfhkaffd",
    "color.background.accent.red.subtler.pressed": "_bfhk1j5a",
    "color.background.accent.red.subtle": "_bfhkkrt9",
    "color.background.accent.red.subtle.hovered": "_bfhk1sou",
    "color.background.accent.red.subtle.pressed": "_bfhk1fnn",
    "color.background.accent.red.bolder": "_bfhkuibq",
    "color.background.accent.red.bolder.hovered": "_bfhk100f",
    "color.background.accent.red.bolder.pressed": "_bfhk1cl6",
    "color.background.accent.orange.subtlest": "_bfhkf5uh",
    "color.background.accent.orange.subtlest.hovered": "_bfhk19yr",
    "color.background.accent.orange.subtlest.pressed": "_bfhkf90x",
    "color.background.accent.orange.subtler": "_bfhk165s",
    "color.background.accent.orange.subtler.hovered": "_bfhk1ei0",
    "color.background.accent.orange.subtler.pressed": "_bfhkdpo3",
    "color.background.accent.orange.subtle": "_bfhk1kkj",
    "color.background.accent.orange.subtle.hovered": "_bfhk9mfs",
    "color.background.accent.orange.subtle.pressed": "_bfhkaxpp",
    "color.background.accent.orange.bolder": "_bfhk1qg1",
    "color.background.accent.orange.bolder.hovered": "_bfhk12qo",
    "color.background.accent.orange.bolder.pressed": "_bfhk1fyq",
    "color.background.accent.yellow.subtlest": "_bfhkibhp",
    "color.background.accent.yellow.subtlest.hovered": "_bfhkaetg",
    "color.background.accent.yellow.subtlest.pressed": "_bfhk1o1l",
    "color.background.accent.yellow.subtler": "_bfhk1773",
    "color.background.accent.yellow.subtler.hovered": "_bfhk1uw7",
    "color.background.accent.yellow.subtler.pressed": "_bfhk1r9w",
    "color.background.accent.yellow.subtle": "_bfhk8y3s",
    "color.background.accent.yellow.subtle.hovered": "_bfhk819w",
    "color.background.accent.yellow.subtle.pressed": "_bfhk1jx0",
    "color.background.accent.yellow.bolder": "_bfhk1vop",
    "color.background.accent.yellow.bolder.hovered": "_bfhkkjqf",
    "color.background.accent.yellow.bolder.pressed": "_bfhk1okt",
    "color.background.accent.green.subtlest": "_bfhkn729",
    "color.background.accent.green.subtlest.hovered": "_bfhk3utz",
    "color.background.accent.green.subtlest.pressed": "_bfhkyfny",
    "color.background.accent.green.subtler": "_bfhk1wnw",
    "color.background.accent.green.subtler.hovered": "_bfhk1e2h",
    "color.background.accent.green.subtler.pressed": "_bfhkybhx",
    "color.background.accent.green.subtle": "_bfhk1rsu",
    "color.background.accent.green.subtle.hovered": "_bfhk12e3",
    "color.background.accent.green.subtle.pressed": "_bfhk1g86",
    "color.background.accent.green.bolder": "_bfhk1e5c",
    "color.background.accent.green.bolder.hovered": "_bfhka5yi",
    "color.background.accent.green.bolder.pressed": "_bfhk1j68",
    "color.background.accent.teal.subtlest": "_bfhk7xuz",
    "color.background.accent.teal.subtlest.hovered": "_bfhk108c",
    "color.background.accent.teal.subtlest.pressed": "_bfhk1cxp",
    "color.background.accent.teal.subtler": "_bfhk1a17",
    "color.background.accent.teal.subtler.hovered": "_bfhkkwwr",
    "color.background.accent.teal.subtler.pressed": "_bfhk1jb0",
    "color.background.accent.teal.subtle": "_bfhktdv8",
    "color.background.accent.teal.subtle.hovered": "_bfhkzh8h",
    "color.background.accent.teal.subtle.pressed": "_bfhk16zl",
    "color.background.accent.teal.bolder": "_bfhk2c8p",
    "color.background.accent.teal.bolder.hovered": "_bfhkl3ve",
    "color.background.accent.teal.bolder.pressed": "_bfhktor0",
    "color.background.accent.blue.subtlest": "_bfhk1s93",
    "color.background.accent.blue.subtlest.hovered": "_bfhkdaj9",
    "color.background.accent.blue.subtlest.pressed": "_bfhkxm0g",
    "color.background.accent.blue.subtler": "_bfhk1dy8",
    "color.background.accent.blue.subtler.hovered": "_bfhk815t",
    "color.background.accent.blue.subtler.pressed": "_bfhkrwxf",
    "color.background.accent.blue.subtle": "_bfhk115i",
    "color.background.accent.blue.subtle.hovered": "_bfhk9pr4",
    "color.background.accent.blue.subtle.pressed": "_bfhknpx7",
    "color.background.accent.blue.bolder": "_bfhk16e3",
    "color.background.accent.blue.bolder.hovered": "_bfhk1vbm",
    "color.background.accent.blue.bolder.pressed": "_bfhk1xwi",
    "color.background.accent.purple.subtlest": "_bfhkp2ly",
    "color.background.accent.purple.subtlest.hovered": "_bfhkkca2",
    "color.background.accent.purple.subtlest.pressed": "_bfhk1jbm",
    "color.background.accent.purple.subtler": "_bfhk1nm4",
    "color.background.accent.purple.subtler.hovered": "_bfhkattl",
    "color.background.accent.purple.subtler.pressed": "_bfhk3nfk",
    "color.background.accent.purple.subtle": "_bfhk18ah",
    "color.background.accent.purple.subtle.hovered": "_bfhk8bp1",
    "color.background.accent.purple.subtle.pressed": "_bfhk1cd2",
    "color.background.accent.purple.bolder": "_bfhkya33",
    "color.background.accent.purple.bolder.hovered": "_bfhk1af5",
    "color.background.accent.purple.bolder.pressed": "_bfhk6cze",
    "color.background.accent.magenta.subtlest": "_bfhk8tvm",
    "color.background.accent.magenta.subtlest.hovered": "_bfhkr3zd",
    "color.background.accent.magenta.subtlest.pressed": "_bfhk1ckf",
    "color.background.accent.magenta.subtler": "_bfhkv9ra",
    "color.background.accent.magenta.subtler.hovered": "_bfhk1axx",
    "color.background.accent.magenta.subtler.pressed": "_bfhk42ri",
    "color.background.accent.magenta.subtle": "_bfhk1mi6",
    "color.background.accent.magenta.subtle.hovered": "_bfhkrwyz",
    "color.background.accent.magenta.subtle.pressed": "_bfhk6c15",
    "color.background.accent.magenta.bolder": "_bfhkc3uk",
    "color.background.accent.magenta.bolder.hovered": "_bfhk1ok8",
    "color.background.accent.magenta.bolder.pressed": "_bfhkeawv",
    "color.background.accent.gray.subtlest": "_bfhkysee",
    "color.background.accent.gray.subtlest.hovered": "_bfhkwejn",
    "color.background.accent.gray.subtlest.pressed": "_bfhk18ut",
    "color.background.accent.gray.subtler": "_bfhk7qp0",
    "color.background.accent.gray.subtler.hovered": "_bfhk10ef",
    "color.background.accent.gray.subtler.pressed": "_bfhk1rk9",
    "color.background.accent.gray.subtle": "_bfhk18j9",
    "color.background.accent.gray.subtle.hovered": "_bfhk1nv3",
    "color.background.accent.gray.subtle.pressed": "_bfhkq9tj",
    "color.background.accent.gray.bolder": "_bfhk1i45",
    "color.background.accent.gray.bolder.hovered": "_bfhkbyip",
    "color.background.accent.gray.bolder.pressed": "_bfhk1van",
    "color.background.disabled": "_bfhkby5v",
    "color.background.input": "_bfhk1j9a",
    "color.background.input.hovered": "_bfhkl4ek",
    "color.background.input.pressed": "_bfhkr01l",
    "color.background.inverse.subtle": "_bfhk1vck",
    "color.background.inverse.subtle.hovered": "_bfhkmpja",
    "color.background.inverse.subtle.pressed": "_bfhk1gii",
    "color.background.neutral": "_bfhki8nm",
    "color.background.neutral.hovered": "_bfhkplhp",
    "color.background.neutral.pressed": "_bfhk1gdz",
    "color.background.neutral.subtle": "_bfhksm61",
    "color.background.neutral.subtle.hovered": "_bfhk1dpa",
    "color.background.neutral.subtle.pressed": "_bfhkfcek",
    "color.background.neutral.bold": "_bfhk1aqn",
    "color.background.neutral.bold.hovered": "_bfhk1ibz",
    "color.background.neutral.bold.pressed": "_bfhkof27",
    "color.background.selected": "_bfhk15s3",
    "color.background.selected.hovered": "_bfhkufnl",
    "color.background.selected.pressed": "_bfhknozp",
    "color.background.selected.bold": "_bfhkjmqp",
    "color.background.selected.bold.hovered": "_bfhk1q28",
    "color.background.selected.bold.pressed": "_bfhk12kk",
    "color.background.brand.subtlest": "_bfhk1gmr",
    "color.background.brand.subtlest.hovered": "_bfhk3v15",
    "color.background.brand.subtlest.pressed": "_bfhku02c",
    "color.background.brand.bold": "_bfhk1856",
    "color.background.brand.bold.hovered": "_bfhkhf2y",
    "color.background.brand.bold.pressed": "_bfhkg6ey",
    "color.background.brand.boldest": "_bfhk1o4i",
    "color.background.brand.boldest.hovered": "_bfhklefx",
    "color.background.brand.boldest.pressed": "_bfhk16k6",
    "color.background.danger": "_bfhk1gly",
    "color.background.danger.hovered": "_bfhk1yvi",
    "color.background.danger.pressed": "_bfhk1r4b",
    "color.background.danger.bold": "_bfhkybec",
    "color.background.danger.bold.hovered": "_bfhks9hg",
    "color.background.danger.bold.pressed": "_bfhk13a9",
    "color.background.warning": "_bfhk1917",
    "color.background.warning.hovered": "_bfhk19zu",
    "color.background.warning.pressed": "_bfhkzr32",
    "color.background.warning.bold": "_bfhk1kmu",
    "color.background.warning.bold.hovered": "_bfhk1spp",
    "color.background.warning.bold.pressed": "_bfhk4m4m",
    "color.background.success": "_bfhk1y9u",
    "color.background.success.hovered": "_bfhk1vfx",
    "color.background.success.pressed": "_bfhk1wl5",
    "color.background.success.bold": "_bfhkkcmj",
    "color.background.success.bold.hovered": "_bfhky7x8",
    "color.background.success.bold.pressed": "_bfhkwcbh",
    "color.background.discovery": "_bfhk6vm6",
    "color.background.discovery.hovered": "_bfhk12eq",
    "color.background.discovery.pressed": "_bfhk18vq",
    "color.background.discovery.bold": "_bfhku5tj",
    "color.background.discovery.bold.hovered": "_bfhkfqeg",
    "color.background.discovery.bold.pressed": "_bfhk1f1m",
    "color.background.information": "_bfhk19ip",
    "color.background.information.hovered": "_bfhk86z5",
    "color.background.information.pressed": "_bfhk1c1j",
    "color.background.information.bold": "_bfhkx4w0",
    "color.background.information.bold.hovered": "_bfhkq2ii",
    "color.background.information.bold.pressed": "_bfhkf89v",
    "color.blanket": "_bfhk1i5c",
    "color.blanket.selected": "_bfhk7wq0",
    "color.blanket.danger": "_bfhkrprw",
    "color.skeleton": "_bfhkizff",
    "color.skeleton.subtle": "_bfhkvkf5",
    "elevation.surface": "_bfhkvuon",
    "elevation.surface.hovered": "_bfhk19i6",
    "elevation.surface.pressed": "_bfhk13ro",
    "elevation.surface.overlay": "_bfhk1bhr",
    "elevation.surface.overlay.hovered": "_bfhk6o2t",
    "elevation.surface.overlay.pressed": "_bfhkm8nx",
    "elevation.surface.raised": "_bfhkhp5a",
    "elevation.surface.raised.hovered": "_bfhk116u",
    "elevation.surface.raised.pressed": "_bfhk14aj",
    "elevation.surface.sunken": "_bfhkhfxm",
    "utility.elevation.surface.current": "_bfhkchd4",
  },
  hp = {
    "elevation.surface": "_1q1lvuon",
    "elevation.surface.hovered": "_1q1l19i6",
    "elevation.surface.pressed": "_1q1l13ro",
    "elevation.surface.overlay": "_1q1l1bhr",
    "elevation.surface.overlay.hovered": "_1q1l6o2t",
    "elevation.surface.overlay.pressed": "_1q1lm8nx",
    "elevation.surface.raised": "_1q1lhp5a",
    "elevation.surface.raised.hovered": "_1q1l116u",
    "elevation.surface.raised.pressed": "_1q1l14aj",
    "elevation.surface.sunken": "_1q1lhfxm",
  },
  hm = {
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
  gm = {
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
  _m = {
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
  bm = {
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
  Va = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      u = s === void 0 ? o : s,
      c = e.paddingBlockStart,
      l = c === void 0 ? u : c,
      d = e.paddingBlockEnd,
      p = d === void 0 ? u : d,
      v = e.paddingInline,
      g = v === void 0 ? o : v,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      _ = e.paddingInlineEnd,
      b = _ === void 0 ? g : _,
      y = e.style,
      O = e.testId,
      w = e.xcss,
      S = ne(e, fm);
    S.className;
    var k = ne(S, vm),
      D = m.createElement(
        n,
        te(
          {
            style: y,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              a && pm[a],
              a && ym(a) && hp[a],
              l && hm[l],
              p && gm[p],
              h && _m[h],
              b && bm[b],
              w,
            ]),
          },
          k,
          { "data-testid": O },
        ),
        i,
      );
    return a ? m.createElement(uu.Provider, { value: a }, D) : D;
  });
function ym(e) {
  return e in hp;
}
const is = () =>
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
  gp = (...e) => R(e);
function mm() {
  return {
    css() {
      throw is();
    },
    cssMap() {
      throw is();
    },
    cx: gp,
    XCSSProp() {
      throw is();
    },
  };
}
var wm = mm(),
  Om = wm.cx,
  Sm = [
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
  kd = {
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
  xd = {
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
  Em = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  km = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  xm = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Rm = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Cm = { root: "_1e0c1txw _vchhusvi" },
  ka = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        u = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        p = e.direction,
        v = e.wrap,
        g = e.xcss,
        f = ne(e, Sm);
      return m.createElement(
        n,
        te({}, f, {
          role: i,
          className: R([
            Cm.root,
            s && xd[s],
            u && xd[u],
            s && kd[s],
            c && kd[c],
            a && Rm[a],
            p && km[p],
            o && Em[o],
            v && xm[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ka.displayName = "Flex";
var Pm = [
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
  Is = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Am = function (t) {
    var r = t.children;
    return m.createElement("span", { className: R([Is.separator]) }, r);
  },
  ca = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? "start" : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        u = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        p = e.separator,
        v = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        _ = ne(e, Pm),
        b = typeof p == "string" ? m.createElement(Am, null, p) : p,
        y = b
          ? m.Children.toArray(h)
              .filter(Boolean)
              .map(function (O, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : h;
      return m.createElement(
        ka,
        te({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: u || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Om(c === "hug" && Is.hug, c === "fill" && Is.fill, v),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
ca.displayName = "Inline";
var Im = "Invariant failed";
function jm(e, t) {
  if (!e) throw new Error(Im);
}
var _p = m.createContext(!1),
  Dm = function () {
    return m.useContext(_p);
  },
  Tm = _p.Provider,
  Mm = ["span", "p", "strong", "em"],
  Lm = function (t, r) {
    var n = dm();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Rd.hasOwnProperty(n) ? Rd[n] : "color.text";
    }
  },
  Ar = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Fm = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Nm = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Bm = {
    "color.text": "_syazi7uo",
    "color.text.accent.lime": "_syaz1tco",
    "color.text.accent.lime.bolder": "_syaz1ik3",
    "color.text.accent.red": "_syaz9lu1",
    "color.text.accent.red.bolder": "_syazhwvp",
    "color.text.accent.orange": "_syazp1lv",
    "color.text.accent.orange.bolder": "_syaz7i1p",
    "color.text.accent.yellow": "_syazfb2s",
    "color.text.accent.yellow.bolder": "_syazekll",
    "color.text.accent.green": "_syazh55r",
    "color.text.accent.green.bolder": "_syaz1y78",
    "color.text.accent.teal": "_syaz17qg",
    "color.text.accent.teal.bolder": "_syaz12v7",
    "color.text.accent.blue": "_syaz16jw",
    "color.text.accent.blue.bolder": "_syaz1kyx",
    "color.text.accent.purple": "_syazqmo9",
    "color.text.accent.purple.bolder": "_syaz1mn1",
    "color.text.accent.magenta": "_syaz1s8m",
    "color.text.accent.magenta.bolder": "_syaz1qur",
    "color.text.accent.gray": "_syaz1sqi",
    "color.text.accent.gray.bolder": "_syaz1tmo",
    "color.text.disabled": "_syaz1gmx",
    "color.text.inverse": "_syaz15cr",
    "color.text.selected": "_syaz6x5g",
    "color.text.brand": "_syaz1oa5",
    "color.text.danger": "_syaz1tmw",
    "color.text.warning": "_syaz1xn9",
    "color.text.warning.inverse": "_syaz1yd3",
    "color.text.success": "_syazgsak",
    "color.text.discovery": "_syazdv2p",
    "color.text.information": "_syazu3tg",
    "color.text.subtlest": "_syaz1rpy",
    "color.text.subtle": "_syazazsu",
    "color.link": "_syaz13af",
    "color.link.pressed": "_syaz12zz",
    "color.link.visited": "_syaz1ra0",
    "color.link.visited.pressed": "_syaz17z1",
  },
  Rd = {
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
  qm = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      i = e.color,
      a = e.align,
      o = e.testId,
      s = e.id,
      u = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      p = e.children;
    jm(Mm.includes(n));
    var v = Dm(),
      g = Lm(i, v);
    !u && !v && (u = "medium");
    var f = m.createElement(
      n,
      {
        id: s,
        className: R([
          Ar.root,
          u && Fm[u],
          g && Bm[g],
          l && Ar.truncation,
          l === 1 && Ar.breakAll,
          a && Ar["textAlign.".concat(a)],
          c && Nm[c],
          n === "em" && Ar["as.em"],
          n === "strong" && Ar["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(Tm, { value: !0 }, f);
  });
function Um() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var zm = ["as", "children", "isInset", "testId", "style", "xcss"],
  $m = ["className"],
  Vm = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      u = e.xcss,
      c = ne(e, zm);
    c.className;
    var l = ne(c, $m);
    return m.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          a && "_1ah31gjf _2mwq1gjf",
          u,
        ]),
        style: s,
        "data-testid": o,
      }),
      i,
    );
  }),
  Gm = [
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
  Hm = ["className"],
  Cd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Wm = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      i = e.type,
      a = i === void 0 ? "button" : i,
      o = e.onClick,
      s = o === void 0 ? we : o,
      u = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = ne(e, Gm),
      h = m.useContext(au),
      _ = m.useCallback(
        function (O, w) {
          (h && h.tracePress(u, O.timeStamp), s(O, w));
        },
        [s, h, u],
      ),
      b = xi({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ne(f, Hm);
    return m.createElement(
      Vm,
      te({ as: "button", tabIndex: g ?? (Um() && !n ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: gp(Cd.root, n && Cd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  as = {},
  oi = {},
  Pd;
function bp() {
  if (Pd) return oi;
  ((Pd = 1), Object.defineProperty(oi, "__esModule", { value: !0 }), (oi.bind = void 0));
  function e(t, r) {
    var n = r.type,
      i = r.listener,
      a = r.options;
    return (
      t.addEventListener(n, i, a),
      function () {
        t.removeEventListener(n, i, a);
      }
    );
  }
  return ((oi.bind = e), oi);
}
var sr = {},
  Ad;
function Km() {
  if (Ad) return sr;
  Ad = 1;
  var e =
    (sr && sr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (a) {
            for (var o, s = 1, u = arguments.length; s < u; s++) {
              o = arguments[s];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c]);
            }
            return a;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(sr, "__esModule", { value: !0 }), (sr.bindAll = void 0));
  var t = bp();
  function r(a) {
    if (!(typeof a > "u")) return typeof a == "boolean" ? { capture: a } : a;
  }
  function n(a, o) {
    if (o == null) return a;
    var s = e(e({}, a), { options: e(e({}, r(o)), r(a.options)) });
    return s;
  }
  function i(a, o, s) {
    var u = o.map(function (c) {
      var l = n(c, s);
      return (0, t.bind)(a, l);
    });
    return function () {
      u.forEach(function (l) {
        return l();
      });
    };
  }
  return ((sr.bindAll = i), sr);
}
var Id;
function Jm() {
  return (
    Id ||
      ((Id = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = bp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Km();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(as)),
    as
  );
}
var Ga = Jm(),
  Ym = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, i) {
        return typeof n == "number" || typeof n == "string"
          ? i
            ? "idx-".concat(i)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  yp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Ym() });
  },
  Xm = yp(),
  Zm = m.createContext(yp()),
  Qm = function (e) {
    return e.value++;
  },
  e0 = function (e) {
    return e ? e.prefix : "";
  },
  t0 = function (e) {
    var t = e || Xm,
      r = e0(t),
      n = Qm(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  mp = function () {
    var e = m.useContext(Zm),
      t = m.useState(function () {
        return t0(e);
      })[0];
    return t;
  },
  r0 = function () {
    var e = mp().uid;
    return e;
  },
  n0 = function () {
    var e = mp().gen;
    return e;
  },
  os,
  la = (os = E.useId) !== null && os !== void 0 ? os : void 0;
function i0() {
  return la && Nr("platform-dst-react-18-use-id")
    ? Nr("platform-dst-react-18-use-id-selector-safe")
      ? la().replace(/[:«»]/g, "_")
      : la()
    : "uid".concat(r0());
}
function a0() {
  if (la && Nr("platform-dst-react-18-use-id")) {
    var e = i0();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return n0();
}
var wp = function (t) {
    var r = t.children,
      n = t.testId,
      i = t.role,
      a = t.id;
    return m.createElement(
      "span",
      {
        id: a,
        "data-testid": n,
        role: i,
        className: R([
          "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
        ]),
      },
      r,
    );
  },
  o0 = {
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
  s0 = ["children"];
function u0(e) {
  var t = function (s, u) {
      return s(u);
    },
    r = m.createContext(e);
  function n(o) {
    var s = m.useContext(r),
      u = s || t,
      c = u(o);
    return c;
  }
  function i(o) {
    var s = o.children,
      u = ne(o, s0),
      c = n(u);
    return E.createElement(E.Fragment, null, s(c));
  }
  function a(o) {
    var s = m.useContext(r),
      u = o.value || t,
      c = m.useCallback(
        function (l) {
          return u(s, l);
        },
        [s, u],
      );
    return E.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: i, Provider: a, useTheme: n };
}
var c0 = u0(function () {
    return { mode: "light" };
  }),
  l0 = c0.useTheme;
function d0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function f0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var v0 = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (i) {
        var a;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
              ? (a = n.container.firstChild)
              : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, a),
          n.tags.push(i));
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(f0(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = d0(i);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var i;
          return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  me = "-ms-",
  xa = "-moz-",
  Z = "-webkit-",
  Op = "comm",
  cu = "rule",
  lu = "decl",
  p0 = "@import",
  Sp = "@keyframes",
  h0 = "@layer",
  g0 = Math.abs,
  Ha = String.fromCharCode,
  _0 = Object.assign;
function b0(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function Ep(e) {
  return e.trim();
}
function y0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function js(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ci(e, t, r) {
  return e.slice(t, r);
}
function pt(e) {
  return e.length;
}
function du(e) {
  return e.length;
}
function na(e, t) {
  return (t.push(e), e);
}
function m0(e, t) {
  return e.map(t).join("");
}
var Wa = 1,
  Br = 1,
  kp = 0,
  Ie = 0,
  he = 0,
  Hr = "";
function Ka(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: Wa,
    column: Br,
    length: o,
    return: "",
  };
}
function si(e, t) {
  return _0(Ka("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function w0() {
  return he;
}
function O0() {
  return ((he = Ie > 0 ? ye(Hr, --Ie) : 0), Br--, he === 10 && ((Br = 1), Wa--), he);
}
function Le() {
  return ((he = Ie < kp ? ye(Hr, Ie++) : 0), Br++, he === 10 && ((Br = 1), Wa++), he);
}
function bt() {
  return ye(Hr, Ie);
}
function da() {
  return Ie;
}
function Ni(e, t) {
  return Ci(Hr, e, t);
}
function Pi(e) {
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
function xp(e) {
  return ((Wa = Br = 1), (kp = pt((Hr = e))), (Ie = 0), []);
}
function Rp(e) {
  return ((Hr = ""), e);
}
function fa(e) {
  return Ep(Ni(Ie - 1, Ds(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function S0(e) {
  for (; (he = bt()) && he < 33; ) Le();
  return Pi(e) > 2 || Pi(he) > 3 ? "" : " ";
}
function E0(e, t) {
  for (; --t && Le() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Ni(e, da() + (t < 6 && bt() == 32 && Le() == 32));
}
function Ds(e) {
  for (; Le(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ds(he);
        break;
      case 40:
        e === 41 && Ds(e);
        break;
      case 92:
        Le();
        break;
    }
  return Ie;
}
function k0(e, t) {
  for (; Le() && e + he !== 57; ) if (e + he === 84 && bt() === 47) break;
  return "/*" + Ni(t, Ie - 1) + "*" + Ha(e === 47 ? e : Le());
}
function x0(e) {
  for (; !Pi(bt()); ) Le();
  return Ni(e, Ie);
}
function R0(e) {
  return Rp(va("", null, null, null, [""], (e = xp(e)), 0, [0], e));
}
function va(e, t, r, n, i, a, o, s, u) {
  for (
    var c = 0,
      l = 0,
      d = o,
      p = 0,
      v = 0,
      g = 0,
      f = 1,
      h = 1,
      _ = 1,
      b = 0,
      y = "",
      O = i,
      w = a,
      S = n,
      k = y;
    h;
  )
    switch (((g = b), (b = Le()))) {
      case 40:
        if (g != 108 && ye(k, d - 1) == 58) {
          js((k += Q(fa(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += fa(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += S0(g);
        break;
      case 92:
        k += E0(da() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            na(C0(k0(Le(), da()), t, r), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * f:
        s[c++] = pt(k) * _;
      case 125 * f:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (_ == -1 && (k = Q(k, /\f/g, "")),
              v > 0 &&
                pt(k) - d &&
                na(v > 32 ? Dd(k + ";", n, r, d - 1) : Dd(Q(k, " ", "") + ";", n, r, d - 2), u));
            break;
          case 59:
            k += ";";
          default:
            if ((na((S = jd(k, t, r, c, l, i, s, y, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) va(k, t, S, S, O, a, d, s, w);
              else
                switch (p === 99 && ye(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    va(
                      e,
                      S,
                      S,
                      n && na(jd(e, S, S, 0, 0, i, s, y, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      s,
                      n ? O : w,
                    );
                    break;
                  default:
                    va(k, S, S, S, [""], w, 0, s, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (y = k = ""), (d = o));
        break;
      case 58:
        ((d = 1 + pt(k)), (v = g));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && O0() == 125) continue;
        }
        switch (((k += Ha(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            ((s[c++] = (pt(k) - 1) * _), (_ = 1));
            break;
          case 64:
            (bt() === 45 && (k += fa(Le())), (p = bt()), (l = d = pt((y = k += x0(da())))), b++);
            break;
          case 45:
            g === 45 && pt(k) == 2 && (f = 0);
        }
    }
  return a;
}
function jd(e, t, r, n, i, a, o, s, u, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = du(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var _ = 0, b = Ci(e, d + 1, (d = g0((f = o[g])))), y = e; _ < v; ++_)
      (y = Ep(f > 0 ? p[_] + " " + b : Q(b, /&\f/g, p[_]))) && (u[h++] = y);
  return Ka(e, t, r, i === 0 ? cu : s, u, c, l);
}
function C0(e, t, r) {
  return Ka(e, t, r, Op, Ha(w0()), Ci(e, 2, -2), 0);
}
function Dd(e, t, r, n) {
  return Ka(e, t, r, lu, Ci(e, 0, n), Ci(e, n + 1, -1), n);
}
function Lr(e, t) {
  for (var r = "", n = du(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function P0(e, t, r, n) {
  switch (e.type) {
    case h0:
      if (e.children.length) break;
    case p0:
    case lu:
      return (e.return = e.return || e.value);
    case Op:
      return "";
    case Sp:
      return (e.return = e.value + "{" + Lr(e.children, n) + "}");
    case cu:
      e.value = e.props.join(",");
  }
  return pt((r = Lr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function A0(e) {
  var t = du(e);
  return function (r, n, i, a) {
    for (var o = "", s = 0; s < t; s++) o += e[s](r, n, i, a) || "";
    return o;
  };
}
function I0(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function j0(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var D0 = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = bt()), i === 38 && a === 12 && (r[n] = 1), !Pi(a); ) Le();
    return Ni(t, Ie);
  },
  T0 = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (Pi(i)) {
        case 0:
          (i === 38 && bt() === 12 && (r[n] = 1), (t[n] += D0(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += fa(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = bt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ha(i);
      }
    while ((i = Le()));
    return t;
  },
  M0 = function (t, r) {
    return Rp(T0(xp(t), r));
  },
  Td = new WeakMap(),
  L0 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Td.get(n)) && !i) {
        Td.set(t, !0);
        for (var a = [], o = M0(r, a), s = n.props, u = 0, c = 0; u < o.length; u++)
          for (var l = 0; l < s.length; l++, c++)
            t.props[c] = a[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
      }
    }
  },
  F0 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Cp(e, t) {
  switch (b0(e, t)) {
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
      return Z + e + xa + e + me + e + e;
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
      if (pt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + xa + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~js(e, "stretch") ? Cp(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, pt(e) - 3 - (~js(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return (
            Q(
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
var N0 = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case lu:
          t.return = Cp(t.value, t.length);
          break;
        case Sp:
          return Lr([si(t, { value: Q(t.value, "@", "@" + Z) })], i);
        case cu:
          if (t.length)
            return m0(t.props, function (a) {
              switch (y0(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Lr([si(t, { props: [Q(a, /:(read-\w+)/, ":" + xa + "$1")] })], i);
                case "::placeholder":
                  return Lr(
                    [
                      si(t, { props: [Q(a, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      si(t, { props: [Q(a, /:(plac\w+)/, ":" + xa + "$1")] }),
                      si(t, { props: [Q(a, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  B0 = [N0],
  q0 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || B0,
      a = {},
      o,
      s = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var h = f.getAttribute("data-emotion").split(" "), _ = 1; _ < h.length; _++)
            a[h[_]] = !0;
          s.push(f);
        },
      ));
    var u,
      c = [L0, F0];
    {
      var l,
        d = [
          P0,
          I0(function (f) {
            l.insert(f);
          }),
        ],
        p = A0(c.concat(i, d)),
        v = function (h) {
          return Lr(R0(h), p);
        };
      u = function (h, _, b, y) {
        ((l = b), v(h ? h + "{" + _.styles + "}" : _.styles), y && (g.inserted[_.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new v0({
        key: r,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: u,
    };
    return (g.sheet.hydrate(s), g);
  },
  ss = { exports: {} },
  ee = {};
var Md;
function U0() {
  if (Md) return ee;
  Md = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    i = e ? Symbol.for("react.strict_mode") : 60108,
    a = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    u = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    p = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    g = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    h = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    b = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case t:
          switch (((w = w.type), w)) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case s:
                case l:
                case g:
                case v:
                case o:
                  return w;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function O(w) {
    return y(w) === c;
  }
  return (
    (ee.AsyncMode = u),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = s),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = g),
    (ee.Memo = v),
    (ee.Portal = r),
    (ee.Profiler = a),
    (ee.StrictMode = i),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (w) {
      return O(w) || y(w) === u;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (w) {
      return y(w) === s;
    }),
    (ee.isContextProvider = function (w) {
      return y(w) === o;
    }),
    (ee.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ee.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (ee.isFragment = function (w) {
      return y(w) === n;
    }),
    (ee.isLazy = function (w) {
      return y(w) === g;
    }),
    (ee.isMemo = function (w) {
      return y(w) === v;
    }),
    (ee.isPortal = function (w) {
      return y(w) === r;
    }),
    (ee.isProfiler = function (w) {
      return y(w) === a;
    }),
    (ee.isStrictMode = function (w) {
      return y(w) === i;
    }),
    (ee.isSuspense = function (w) {
      return y(w) === d;
    }),
    (ee.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === c ||
        w === a ||
        w === i ||
        w === d ||
        w === p ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === v ||
            w.$$typeof === o ||
            w.$$typeof === s ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === _ ||
            w.$$typeof === b ||
            w.$$typeof === f))
      );
    }),
    (ee.typeOf = y),
    ee
  );
}
var Ld;
function z0() {
  return (Ld || ((Ld = 1), (ss.exports = U0())), ss.exports);
}
var us, Fd;
function $0() {
  if (Fd) return us;
  Fd = 1;
  var e = z0(),
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
    i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    a = {};
  ((a[e.ForwardRef] = n), (a[e.Memo] = i));
  function o(g) {
    return e.isMemo(g) ? i : a[g.$$typeof] || t;
  }
  var s = Object.defineProperty,
    u = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(g, f, h) {
    if (typeof f != "string") {
      if (p) {
        var _ = d(f);
        _ && _ !== p && v(g, _, h);
      }
      var b = u(f);
      c && (b = b.concat(c(f)));
      for (var y = o(g), O = o(f), w = 0; w < b.length; ++w) {
        var S = b[w];
        if (!r[S] && !(h && h[S]) && !(O && O[S]) && !(y && y[S])) {
          var k = l(f, S);
          try {
            s(g, S, k);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((us = v), us);
}
$0();
var V0 = !0;
function Pp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var fu = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || V0 === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  Ap = function (t, r, n) {
    fu(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function G0(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
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
  switch (i) {
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
var H0 = {
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
  W0 = /[A-Z]|^ms/g,
  K0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ip = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Nd = function (t) {
    return t != null && typeof t != "boolean";
  },
  cs = j0(function (e) {
    return Ip(e) ? e : e.replace(W0, "-$&").toLowerCase();
  }),
  Bd = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(K0, function (n, i, a) {
            return ((ht = { name: i, styles: a, next: ht }), i);
          });
    }
    return H0[t] !== 1 && !Ip(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ai(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((ht = { name: i.name, styles: i.styles, next: ht }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((ht = { name: o.name, styles: o.styles, next: ht }), (o = o.next));
        var s = a.styles + ";";
        return s;
      }
      return J0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = ht,
          c = r(e);
        return ((ht = u), Ai(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function J0(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Ai(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0
          ? (n += a + "{" + t[s] + "}")
          : Nd(s) && (n += cs(a) + ":" + Bd(a, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++) Nd(o[u]) && (n += cs(a) + ":" + Bd(a, o[u]) + ";");
      else {
        var c = Ai(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += cs(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var qd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ht;
function vu(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  ht = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += Ai(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((i += Ai(r, t, e[s])), n)) {
      var u = a;
      i += u[s];
    }
  qd.lastIndex = 0;
  for (var c = "", l; (l = qd.exec(i)) !== null; ) c += "-" + l[1];
  var d = G0(i) + c;
  return { name: d, styles: i, next: ht };
}
var Y0 = function (t) {
    return t();
  },
  X0 = qu.useInsertionEffect ? qu.useInsertionEffect : !1,
  jp = X0 || Y0,
  Dp = m.createContext(typeof HTMLElement < "u" ? q0({ key: "css" }) : null);
Dp.Provider;
var Tp = function (t) {
    return m.forwardRef(function (r, n) {
      var i = m.useContext(Dp);
      return t(r, i, n);
    });
  },
  Mp = m.createContext({}),
  pu = {}.hasOwnProperty,
  Ts = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Z0 = function (t, r) {
    var n = {};
    for (var i in r) pu.call(r, i) && (n[i] = r[i]);
    return ((n[Ts] = t), n);
  },
  Q0 = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      fu(r, n, i),
      jp(function () {
        return Ap(r, n, i);
      }),
      null
    );
  },
  ew = Tp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Ts],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Pp(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var s = vu(a, void 0, m.useContext(Mp));
    o += t.key + "-" + s.name;
    var u = {};
    for (var c in e) pu.call(e, c) && c !== "css" && c !== Ts && (u[c] = e[c]);
    return (
      (u.className = o),
      r && (u.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(Q0, { cache: t, serialized: s, isStringTag: typeof i == "string" }),
        m.createElement(i, u),
      )
    );
  }),
  tw = ew,
  Dt = function (t, r) {
    var n = arguments;
    if (r == null || !pu.call(r, "css")) return m.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = tw), (a[1] = Z0(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return m.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Dt || (Dt = {}));
function xt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return vu(t);
}
var rw = function e(t) {
  for (var r = t.length, n = 0, i = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var o = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a)) o = e(a);
          else {
            o = "";
            for (var s in a) a[s] && s && (o && (o += " "), (o += s));
          }
          break;
        }
        default:
          o = a;
      }
      o && (i && (i += " "), (i += o));
    }
  }
  return i;
};
function nw(e, t, r) {
  var n = [],
    i = Pp(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var iw = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      jp(function () {
        for (var i = 0; i < n.length; i++) Ap(r, n[i], !1);
      }),
      null
    );
  },
  aw = Tp(function (e, t) {
    var r = [],
      n = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        var d = vu(c, t.registered);
        return (r.push(d), fu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return nw(t.registered, n, rw(c));
      },
      a = { css: n, cx: i, theme: m.useContext(Mp) },
      o = e.children(a);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(iw, { cache: t, serializedArr: r }),
      o,
    );
  });
function ow(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Lp = 2,
  Ms = xt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Lp,
  }),
  Ls = xt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Lp,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  sw = xt({
    "&:focus": Ms,
    "&:focus-visible": Ms,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  uw = xt({
    "&:focus": Ls,
    "&:focus-visible": Ls,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Fp = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? Ls : Ms,
      a = r ? uw : sw,
      o = typeof n > "u" ? a : n === "on" && i;
    return Dt(aw, null, function (s) {
      var u = s.css,
        c = s.cx;
      return m.Children.only(
        o ? m.cloneElement(t, { className: c([u(o), t.props.className]) }) : t,
      );
    });
  });
Fp.displayName = "FocusRing";
function jt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var cw = 9;
function Ud(e) {
  e.keyCode !== cw && jt(e);
}
var lw = {
    onMouseDownCapture: jt,
    onMouseUpCapture: jt,
    onKeyDownCapture: Ud,
    onKeyUpCapture: Ud,
    onTouchStartCapture: jt,
    onTouchEndCapture: jt,
    onPointerDownCapture: jt,
    onPointerUpCapture: jt,
    onClickCapture: jt,
    onClick: jt,
  },
  dw = {};
function fw(e) {
  var t = e.isInteractive;
  return t ? dw : lw;
}
function zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wt = 8,
  ls = ["default", "primary", "danger", "warning"],
  Fs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  vw = { default: Fs.default, compact: Fs.compact, none: "inherit" },
  pw = {
    default: "0 ".concat(Wt + Wt / 4, "px"),
    compact: "0 ".concat(Wt + Wt / 4, "px"),
    none: "0",
  },
  hw = { compact: "0 ".concat(Wt / 4, "px"), default: "0 ".concat(Wt / 4, "px"), none: "0" },
  gw = { default: "middle", compact: "middle", none: "baseline" },
  Np = { content: "0 ".concat(Wt / 4, "px"), icon: "0 ".concat(Wt / 4, "px") },
  Bp = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  _w = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Re(Re({}, Bp), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  bw = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  yw = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  mw = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  ww = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": {
      background: "transparent",
      color: "var(--ds-text-subtle, #505258)",
      textDecoration: "underline",
    },
    "&:active": {
      background: "transparent",
      color: "var(--ds-text, #292A2E)",
      textDecoration: "underline",
    },
  },
  Ow = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  Sw = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Ew = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Re(
      Re({}, Bp),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  kw = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function xw(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Re(
    Re(
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
        cursor: "pointer",
        height: Fs[r],
        lineHeight: vw[r],
        padding: a ? hw[r] : pw[r],
        verticalAlign: gw[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? Ew
        : Re(
            Re(
              Re(
                Re(
                  Re(
                    Re(
                      Re(Re({}, t === "default" && _w), t === "primary" && bw),
                      t === "link" && yw,
                    ),
                    t === "subtle" && mw,
                  ),
                  t === "subtle-link" && ww,
                ),
                t === "warning" && Ow,
              ),
              t === "danger" && Sw,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: ls.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: ls.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: ls.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            kw,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function $d(e) {
  var t = e.spacing;
  return xt({
    display: "flex",
    margin: t === "none" ? 0 : Np.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function Rw(e) {
  var t = e.spacing;
  return xt({
    margin: t === "none" ? 0 : Np.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function Cw(e) {
  var t = e.hasOverlay;
  return xt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var Pw = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hu = function (t) {
    return t && m.isValidElement(t) && t.type === wp;
  },
  Aw = [
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
  Iw = { "> *": { pointerEvents: "none" } },
  jw = xt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  Dw = xt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Vd = function (t, r) {
    return !t || hu(t) ? null : r;
  },
  Tw = function (t, r) {
    return hu(t) ? t : t ? Dt("span", { css: r }, t) : null;
  },
  Mw = E.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      i = t.appearance,
      a = i === void 0 ? "default" : i,
      o = t.autoFocus,
      s = o === void 0 ? !1 : o,
      u = t.buttonCss,
      c = t.children,
      l = t.className,
      d = t.href,
      p = t.component,
      v = p === void 0 ? (d ? "a" : "button") : p,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      _ = t.isDisabled,
      b = _ === void 0 ? !1 : _,
      y = t.isSelected,
      O = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      k = S === void 0 ? we : S,
      D = t.onFocus,
      I = t.onMouseDown,
      C = I === void 0 ? we : I,
      T = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      q = U === void 0 ? "default" : U,
      V = t.tabIndex,
      Y = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ne(t, Aw),
      A = m.useRef(),
      be = m.useCallback(
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
    ow(A, s);
    var ae = m.useContext(au),
      ue = m.useCallback(
        function (pe, ze) {
          (ae && ae.tracePress(h, pe.timeStamp), k(pe, ze));
        },
        [k, ae, h],
      ),
      le = xi({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = m.useCallback(
        function (pe) {
          (pe.preventDefault(), C(pe));
        },
        [C],
      );
    m.useEffect(
      function () {
        var pe = A.current;
        b && pe && pe === document.activeElement && pe.blur();
      },
      [b],
    );
    var ce = !!T,
      Ue = xt(Cw({ hasOverlay: ce })),
      Oe = !b && !ce,
      et = {};
    return (
      (O || b || a === "warning") &&
        (et = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || b
                ? "var(--ds-icon-subtle, ".concat(ks, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ks, ")"),
              " !important",
            ),
          },
        }),
      Dt(
        Fp,
        null,
        Dt(
          v,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [u, Oe ? null : Iw],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: b,
              href: Oe ? d : void 0,
              onBlur: w,
              onClick: le,
              onFocus: D,
              onMouseDown: ge,
              tabIndex: b ? -1 : Y,
              type: $,
            },
            fw({ isInteractive: Oe }),
          ),
          f ? Dt("span", { css: [Ue, $d({ spacing: q }), Vd(c, jw)] }, f) : null,
          Tw(c, [Ue, Rw({ spacing: q })]),
          g ? Dt("span", { css: [Ue, $d({ spacing: q }), Vd(c, Dw)] }, g) : null,
          T ? Dt("span", { css: [Pw, et] }, T) : null,
        ),
      )
    );
  });
function Lw(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return hu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var Fw = [
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
  Gd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  gu = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "default" : n,
        a = t.children,
        o = t.iconBefore,
        s = t.iconAfter,
        u = t.isSelected,
        c = u === void 0 ? !1 : u,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        p = t.onMouseUp,
        v = p === void 0 ? we : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        _ = h === void 0 ? "default" : h,
        b = ne(t, Fw),
        y = l0(),
        O = y.mode,
        w = Lw({ children: a, iconBefore: o, iconAfter: s }),
        S = m.useState(!1),
        k = K(S, 2),
        D = k[0],
        I = k[1],
        C = m.useCallback(
          function (q) {
            (d(q), Gd && I(!0));
          },
          [d, I],
        ),
        T = m.useCallback(
          function (q) {
            (v(q), Gd && I(!1));
          },
          [v, I],
        ),
        U = m.useMemo(
          function () {
            return xw({
              appearance: i,
              spacing: _,
              isSelected: c,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [i, _, O, c, f, w],
        );
      return E.createElement(
        Mw,
        te({}, b, {
          ref: r,
          appearance: i,
          buttonCss: U,
          children: a,
          "data-firefox-is-active": D ? !0 : void 0,
          iconAfter: s,
          iconBefore: o,
          isSelected: c,
          onMouseDown: C,
          onMouseUp: T,
          spacing: _,
        }),
      );
    }),
  );
gu.displayName = "Button";
function Hd(e) {
  return E.createElement(gu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function Nw(e) {
  return E.createElement(gu, te({}, e, { appearance: "subtle" }));
}
var Bw = { container: "_1e0c1txw _kqswh2mm" };
function qw(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    Va,
    { as: "li", testId: r, key: t, xcss: Bw.container, paddingInline: "space.100" },
    E.createElement(
      qm,
      { testId: r && "".concat(r, "-text") },
      E.createElement(wp, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var Wd = {},
  Kd =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Uw(e, t) {
  return !!(e === t || (Kd(e) && Kd(t)));
}
function zw(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Uw(e[r], t[r])) return !1;
  return !0;
}
function $w(e, t) {
  t === void 0 && (t = zw);
  var r = null;
  function n() {
    for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
    if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, i);
    return ((r = { lastResult: o, lastArgs: i, lastThis: this }), o);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var Vw = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    s = n.transform,
    u = t.length,
    c = u > a,
    l = c && a - 4 < r,
    d = c && r < u - a + 3,
    p = $w(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
      return t.slice(h, _).map(function (b, y) {
        return s(b, h + y, i);
      });
    });
  if (!c) return p(0, u);
  if (l && !d) {
    var v = a - 2;
    return [].concat(
      De(p(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: u - v })],
      De(p(u - v)),
    );
  }
  if (!l && d) {
    var g = a - 2;
    return [].concat(
      De(p(0, g)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: g + 1, to: u - 1 })],
      De(p(u - 1)),
    );
  }
  var f = a - 4;
  return [].concat(
    De(p(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    De(p(r - Math.floor(f / 2), r + f - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: u - 1 })],
    De(p(u - 1)),
  );
};
function Jd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gw(e) {
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
var Ns = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  Hw = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Yd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? am : lm;
  return E.createElement(
    Va,
    { as: "span", xcss: Ns.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function Ww(e, t) {
  var r = e.components,
    n = r === void 0 ? Wd : r,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    s = e.label,
    u = s === void 0 ? "pagination" : s,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    g = v === void 0 ? "next" : v,
    f = e.style,
    h = f === void 0 ? Wd : f,
    _ = e.max,
    b = _ === void 0 ? 7 : _,
    y = e.onChange,
    O = y === void 0 ? we : y,
    w = e.pages,
    S = e.getPageLabel,
    k = e.renderEllipsis,
    D = k === void 0 ? qw : k,
    I = e.analyticsContext,
    C = e.testId,
    T = e.isDisabled,
    U = Vb(o, function () {
      return a || 0;
    }),
    q = K(U, 2),
    V = q[0],
    Y = q[1],
    G = xi(
      Gw(
        {
          fn: function (N, A) {
            var be = N.event,
              ae = N.selectedPageIndex;
            (o === void 0 && Y(ae), O && O(be, w[ae], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        Hw,
      ),
    ),
    $ = function (N, A, be) {
      var ae = w[V],
        ue = "".concat(l, " ").concat(S ? S(N, A) : N),
        le = N === ae;
      return E.createElement(
        ca,
        { as: "li", xcss: Ns.paginationMenuItem, key: "page-".concat(S ? S(N, A) : A) },
        E.createElement(
          Nw,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: A });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: T,
            page: N,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S(N, A) : N,
        ),
      );
    };
  return E.createElement(
    Va,
    { testId: C, style: h, ref: t, "aria-label": u, as: "nav" },
    E.createElement(
      ca,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Hd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: E.createElement(Yd, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      E.createElement(
        ca,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ns.paginationMenu },
        Vw(w, V, { max: b, ellipsis: D, transform: $ }, C),
      ),
      E.createElement(Hd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === w.length - 1,
        iconBefore: E.createElement(Yd, { chevronDirection: "right" }),
        "aria-label": g,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var Kw = m.memo(m.forwardRef(Ww));
function Jw(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, qp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (qp = function () {
    return !!e;
  })();
}
var Yw = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = Jw(this, t, [].concat(i))),
        x(r, "onChange", function (o, s, u) {
          r.props.onChange(s, u);
        }),
        r
      );
    }
    return (
      Be(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.total,
              a = n.value,
              o = a === void 0 ? 1 : a,
              s = n.i18n,
              u = n.testId,
              c = n.isDisabled,
              l = De(Array(i)).map(function (p, v) {
                return v + 1;
              }),
              d = o - 1;
            return E.createElement(Kw, {
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
  })(E.Component),
  Xw = ["isRanking", "testId"],
  Zw = [
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
function Xd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ui(e) {
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
var Zd = "--local-dynamic-table-text-color",
  Qw = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, Xw);
    return m.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  e1 = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      u = e.testId,
      c = ne(e, Zw),
      l = ui(
        ui(ui({}, s), r && Jv({ width: r })),
        {},
        x({}, Zd, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === lr,
      p = i === Sa,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return m.createElement(
      g,
      te({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": u }, c, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: ui(
          ui({}, l),
          {},
          { "--_17ckjys": Wv("var(--ds-text-subtle, ".concat("var(".concat(Zd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function t1(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, Up() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Up = function () {
    return !!e;
  })();
}
function r1(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = t1(this, r, [].concat(a))),
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
      Be(r, t),
      ve(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (i) {
            var a = this.props.isRanking,
              o = i.isRanking;
            o && !a && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.state,
              a = i.refWidth,
              o = i.refHeight;
            return E.createElement(
              e,
              te({ refWidth: a, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var ci = {},
  Qd;
function n1() {
  if (Qd) return ci;
  ((Qd = 1), Object.defineProperty(ci, "__esModule", { value: !0 }), (ci.default = void 0));
  var e = r(ct()),
    t = r($a);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowDownIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (ci.default = n), ci);
}
var i1 = n1();
const a1 = Xt(i1);
var li = {},
  ef;
function o1() {
  if (ef) return li;
  ((ef = 1), Object.defineProperty(li, "__esModule", { value: !0 }), (li.default = void 0));
  var e = r(ct()),
    t = r($a);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowUpIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (li.default = n), li);
}
var s1 = o1();
const u1 = Xt(s1);
var c1 = "Escape";
function l1(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    i = m.useCallback(
      function (o) {
        r || n.current || o.key !== c1 || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return Ga.bindAll(
          document,
          [
            { type: "keydown", listener: i },
            { type: "keyup", listener: a },
          ],
          { capture: !1 },
        );
    },
    [i, a, r],
  );
}
function di(e) {
  var t = m.useRef(e);
  return (
    m.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var d1 = m.createContext(null),
  f1 = m.createContext(null);
function v1() {
  var e = m.useContext(f1);
  return e;
}
function p1(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = m.useContext(d1),
    a = v1();
  m.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var hi = { none: 0, small: 100, medium: 350, large: 700 },
  ds = 0.5,
  h1 = { none: hi.none, small: hi.small * ds, medium: hi.medium * ds, large: hi.large * ds },
  g1 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  _1 = function () {
    if (!g1()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  b1 = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  y1 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = m.useRef([]);
    return (
      m.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, b1(t)),
      m.useCallback(function (n, i) {
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++)
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
            i,
          ].concat(o),
        );
        r.current.push(u);
      }, [])
    );
  },
  zp = { appear: !0, isExiting: !1 },
  $p = m.createContext(zp),
  tf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zp;
    return E.createElement($p.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  rf = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  m1 = function (t, r) {
    for (var n = r.concat([]), i = w1(r), a = 0; a < t.length; a++) {
      var o = t[a],
        s = !i[o.key];
      s && n.splice(a + 1, 0, o);
    }
    return n;
  },
  w1 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  O1 = function (t, r) {
    for (
      var n = new Set(
          t.map(function (u) {
            return u.key;
          }),
        ),
        i = new Set(),
        a = 0;
      a < r.length;
      a++
    ) {
      var o = r[a],
        s = o.key;
      n.has(s) || i.add(s);
    }
    return i;
  },
  Vp = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      i = e.exitThenEnter,
      a = m.useState([null, n]),
      o = K(a, 2),
      s = o[0],
      u = o[1],
      c = m.useState([]),
      l = K(c, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = K(v, 2),
      f = g[0],
      h = g[1];
    if (
      (m.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var _ = K(s, 2),
      b = _[0],
      y = _[1],
      O = rf(b),
      w = rf(y);
    y !== n && u([y, n]);
    var S = O1(w, O),
      k = !!S.size,
      D = w;
    if ((k && (D = m1(w, O)), i))
      if (d.length) D = d;
      else {
        var I = D.filter(function (C) {
          return S.has(C.key);
        });
        I.length && p(I);
      }
    return (
      S.size
        ? (D = D.map(function (C) {
            var T = S.has(C.key);
            return tf(C, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(C.key), S.size === 0 && (u([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (D = D.map(function (C) {
            return tf(C, f);
          })),
      D
    );
  }),
  S1 = function () {
    return m.useContext($p);
  };
Vp.displayName = "ExitingPersistence";
function E1() {
  var e = m.useRef("");
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
var k1 = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  x1 = function () {
    var t = E1(),
      r = m.useContext(k1);
    return r(t);
  },
  R1 = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      i = t.animationTimingFunctionExiting,
      a = i === void 0 ? n : i,
      o = t.enteringAnimation,
      s = t.exitingAnimation,
      u = s === void 0 ? o : s,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      p = d === void 0 ? "large" : d,
      v = x1(),
      g = S1(),
      f = g.isExiting,
      h = g.onFinish,
      _ = g.appear,
      b = y1(),
      y = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(_),
      k = K(S, 2),
      D = k[0],
      I = k[1];
    return (
      m.useEffect(
        function () {
          var C = !1;
          if (!y) {
            if (!_) {
              l && l(w);
              return;
            }
            var T = function () {
              (w === "exiting" && h?.(), C || I(!1), l?.(w));
            };
            if (_1()) {
              T();
              return;
            }
            return (
              I(!0),
              b(T, f ? h1[p] : hi[p] + O),
              function () {
                C = !0;
              }
            );
          }
        },
        [h, w, f, p, O, y, b],
      ),
      r(
        {
          ref: v.ref,
          className: D
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && R(["_1y0ctrqk"]),
                p === "small" && R(["_5sag1yx9"]),
                p === "medium" && R(["_5sag1ttt"]),
                p === "large" && R(["_5sagpwmj"]),
                f && p === "small" && R(["_5sag14ed"]),
                f && p === "medium" && R(["_5sagluct"]),
                f && p === "large" && R(["_5sag1ttt"]),
                f && R(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && R(["_1pglp3kn"]),
                !f && n === "ease-out" && R(["_1pgldkwg"]),
                !f && n === "ease-in" && R(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && R(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && R(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && R(["_1pglannl"]),
                !f && n === "ease-in-out" && R(["_1pgl1fu8"]),
                f && n === "linear" && R(["_1pglp3kn"]),
                f && a === "ease-out" && R(["_1pgldkwg"]),
                f && a === "ease-in" && R(["_1pgl1nzg"]),
                f && a === "ease-in-40-out" && R(["_1pgl5y64"]),
                f && a === "ease-in-60-out" && R(["_1pgl1ddy"]),
                f && a === "ease-in-80-out" && R(["_1pglannl"]),
                f && a === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!f && o === "fade-in") || (f && u === "fade-in")) && R(["_j7hq1cgr"]),
                ((!f && o === "fade-out") || (f && u === "fade-out")) && R(["_j7hq1lln"]),
                ((!f && o === "zoom-in") || (f && u === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!f && o === "zoom-out") || (f && u === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!f && o === "slide-in-from-top") || (f && u === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!f && o === "slide-out-from-top") || (f && u === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!f && o === "slide-in-from-right") || (f && u === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!f && o === "slide-out-from-right") || (f && u === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!f && o === "slide-in-from-bottom") || (f && u === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!f && o === "slide-out-from-bottom") || (f && u === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!f && o === "slide-in-from-left") || (f && u === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!f && o === "slide-out-from-left") || (f && u === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!f && o === "fade-in-from-top") || (f && u === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!f && o === "fade-out-from-top") || (f && u === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!f && o === "fade-in-from-left") || (f && u === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!f && o === "fade-out-from-left") || (f && u === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!f && o === "fade-in-from-bottom") || (f && u === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!f && o === "fade-out-from-bottom") || (f && u === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!f && o === "fade-in-from-right") || (f && u === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!f && o === "fade-out-from-right") || (f && u === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!f && o === "fade-in-from-top-constant") ||
                  (f && u === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!f && o === "fade-out-from-top-constant") ||
                  (f && u === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!f && o === "fade-in-from-left-constant") ||
                  (f && u === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!f && o === "fade-out-from-left-constant") ||
                  (f && u === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!f && o === "fade-in-from-bottom-constant") ||
                  (f && u === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!f && o === "fade-out-from-bottom-constant") ||
                  (f && u === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!f && o === "fade-in-from-right-constant") ||
                  (f && u === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!f && o === "fade-out-from-right-constant") ||
                  (f && u === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        w,
      )
    );
  },
  C1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  P1 = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      s = t.distance,
      u = s === void 0 ? "proportional" : s,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? C1[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(u === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      R1,
      {
        duration: i,
        enteringAnimation: a
          ? "fade-in-from-".concat(a).concat(u === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  A1 = m.createContext();
m.createContext();
var I1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  j1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  D1 = function (t, r) {
    if (typeof t == "function") return j1(t, r);
    t != null && (t.current = r);
  },
  nf = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  af =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Ce = "top",
  Ze = "bottom",
  Qe = "right",
  Pe = "left",
  _u = "auto",
  Bi = [Ce, Ze, Qe, Pe],
  qr = "start",
  Ii = "end",
  T1 = "clippingParents",
  Gp = "viewport",
  fi = "popper",
  M1 = "reference",
  of = Bi.reduce(function (e, t) {
    return e.concat([t + "-" + qr, t + "-" + Ii]);
  }, []),
  Hp = [].concat(Bi, [_u]).reduce(function (e, t) {
    return e.concat([t, t + "-" + qr, t + "-" + Ii]);
  }, []),
  L1 = "beforeRead",
  F1 = "read",
  N1 = "afterRead",
  B1 = "beforeMain",
  q1 = "main",
  U1 = "afterMain",
  z1 = "beforeWrite",
  $1 = "write",
  V1 = "afterWrite",
  G1 = [L1, F1, N1, B1, q1, U1, z1, $1, V1];
function Et(e) {
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
function dr(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function H1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Xe(a) ||
      !Et(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var s = i[o];
        s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
      }));
  });
}
function W1(e) {
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
        var i = t.elements[n],
          a = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          s = o.reduce(function (u, c) {
            return ((u[c] = ""), u);
          }, {});
        !Xe(i) ||
          !Et(i) ||
          (Object.assign(i.style, s),
          Object.keys(a).forEach(function (u) {
            i.removeAttribute(u);
          }));
      });
    }
  );
}
const K1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: H1,
  effect: W1,
  requires: ["computeStyles"],
};
function yt(e) {
  return e.split("-")[0];
}
var ur = Math.max,
  Ra = Math.min,
  Ur = Math.round;
function Bs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Wp() {
  return !/^((?!chrome|android).)*safari/i.test(Bs());
}
function zr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Xe(e) &&
    ((i = (e.offsetWidth > 0 && Ur(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Ur(n.height) / e.offsetHeight) || 1));
  var o = dr(e) ? Fe(e) : window,
    s = o.visualViewport,
    u = !Wp() && r,
    c = (n.left + (u && s ? s.offsetLeft : 0)) / i,
    l = (n.top + (u && s ? s.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function yu(e) {
  var t = zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Kp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && bu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Bt(e) {
  return Fe(e).getComputedStyle(e);
}
function J1(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function Zt(e) {
  return ((dr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ja(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (bu(e) ? e.host : null) || Zt(e);
}
function sf(e) {
  return !Xe(e) || Bt(e).position === "fixed" ? null : e.offsetParent;
}
function Y1(e) {
  var t = /firefox/i.test(Bs()),
    r = /Trident/i.test(Bs());
  if (r && Xe(e)) {
    var n = Bt(e);
    if (n.position === "fixed") return null;
  }
  var i = Ja(e);
  for (bu(i) && (i = i.host); Xe(i) && ["html", "body"].indexOf(Et(i)) < 0; ) {
    var a = Bt(i);
    if (
      a.transform !== "none" ||
      a.perspective !== "none" ||
      a.contain === "paint" ||
      ["transform", "perspective"].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === "filter") ||
      (t && a.filter && a.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function qi(e) {
  for (var t = Fe(e), r = sf(e); r && J1(r) && Bt(r).position === "static"; ) r = sf(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && Bt(r).position === "static"))
    ? t
    : r || Y1(e) || t;
}
function mu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yi(e, t, r) {
  return ur(e, Ra(t, r));
}
function X1(e, t, r) {
  var n = yi(e, t, r);
  return n > r ? r : n;
}
function Jp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Yp(e) {
  return Object.assign({}, Jp(), e);
}
function Xp(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Z1 = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Yp(typeof t != "number" ? t : Xp(t, Bi))
  );
};
function Q1(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = yt(r.placement),
    u = mu(s),
    c = [Pe, Qe].indexOf(s) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = Z1(i.padding, r),
      p = yu(a),
      v = u === "y" ? Ce : Pe,
      g = u === "y" ? Ze : Qe,
      f = r.rects.reference[l] + r.rects.reference[u] - o[u] - r.rects.popper[l],
      h = o[u] - r.rects.reference[u],
      _ = qi(a),
      b = _ ? (u === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      O = d[v],
      w = b - p[l] - d[g],
      S = b / 2 - p[l] / 2 + y,
      k = yi(O, S, w),
      D = u;
    r.modifiersData[n] = ((t = {}), (t[D] = k), (t.centerOffset = k - S), t);
  }
}
function eO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Kp(t.elements.popper, i) && (t.elements.arrow = i)));
}
const tO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Q1,
  effect: eO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function $r(e) {
  return e.split("-")[1];
}
var rO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nO(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Ur(r * i) / i || 0, y: Ur(n * i) / i || 0 };
}
function uf(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    i = e.placement,
    a = e.variation,
    o = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    p = o.x,
    v = p === void 0 ? 0 : p,
    g = o.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = h.x), (f = h.y));
  var _ = o.hasOwnProperty("x"),
    b = o.hasOwnProperty("y"),
    y = Pe,
    O = Ce,
    w = window;
  if (c) {
    var S = qi(r),
      k = "clientHeight",
      D = "clientWidth";
    if (
      (S === Fe(r) &&
        ((S = Zt(r)),
        Bt(S).position !== "static" &&
          s === "absolute" &&
          ((k = "scrollHeight"), (D = "scrollWidth"))),
      (S = S),
      i === Ce || ((i === Pe || i === Qe) && a === Ii))
    ) {
      O = Ze;
      var I = d && S === w && w.visualViewport ? w.visualViewport.height : S[k];
      ((f -= I - n.height), (f *= u ? 1 : -1));
    }
    if (i === Pe || ((i === Ce || i === Ze) && a === Ii)) {
      y = Qe;
      var C = d && S === w && w.visualViewport ? w.visualViewport.width : S[D];
      ((v -= C - n.width), (v *= u ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, c && rO),
    U = l === !0 ? nO({ x: v, y: f }, Fe(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), u)) {
    var q;
    return Object.assign(
      {},
      T,
      ((q = {}),
      (q[O] = b ? "0" : ""),
      (q[y] = _ ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      q),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[y] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function iO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    s = r.roundOffsets,
    u = s === void 0 ? !0 : s,
    c = {
      placement: yt(t.placement),
      variation: $r(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      uf(
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
        uf(
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
const aO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: iO, data: {} };
var ia = { passive: !0 };
function oO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    u = Fe(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ia);
      }),
    s && u.addEventListener("resize", r.update, ia),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ia);
        }),
        s && u.removeEventListener("resize", r.update, ia));
    }
  );
}
const sO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: oO,
  data: {},
};
var uO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return uO[t];
  });
}
var cO = { start: "end", end: "start" };
function cf(e) {
  return e.replace(/start|end/g, function (t) {
    return cO[t];
  });
}
function wu(e) {
  var t = Fe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ou(e) {
  return zr(Zt(e)).left + wu(e).scrollLeft;
}
function lO(e, t) {
  var r = Fe(e),
    n = Zt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    u = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Wp();
    (c || (!c && t === "fixed")) && ((s = i.offsetLeft), (u = i.offsetTop));
  }
  return { width: a, height: o, x: s + Ou(e), y: u };
}
function dO(e) {
  var t,
    r = Zt(e),
    n = wu(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = ur(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = ur(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    s = -n.scrollLeft + Ou(e),
    u = -n.scrollTop;
  return (
    Bt(i || r).direction === "rtl" && (s += ur(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: s, y: u }
  );
}
function Su(e) {
  var t = Bt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Zp(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Xe(e) && Su(e)
      ? e
      : Zp(Ja(e));
}
function mi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Zp(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Fe(n),
    o = i ? [a].concat(a.visualViewport || [], Su(n) ? n : []) : n,
    s = t.concat(o);
  return i ? s : s.concat(mi(Ja(o)));
}
function qs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function fO(e, t) {
  var r = zr(e, !1, t === "fixed");
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
function lf(e, t, r) {
  return t === Gp ? qs(lO(e, r)) : dr(t) ? fO(t, r) : qs(dO(Zt(e)));
}
function vO(e) {
  var t = mi(Ja(e)),
    r = ["absolute", "fixed"].indexOf(Bt(e).position) >= 0,
    n = r && Xe(e) ? qi(e) : e;
  return dr(n)
    ? t.filter(function (i) {
        return dr(i) && Kp(i, n) && Et(i) !== "body";
      })
    : [];
}
function pO(e, t, r, n) {
  var i = t === "clippingParents" ? vO(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    s = a.reduce(
      function (u, c) {
        var l = lf(e, c, n);
        return (
          (u.top = ur(l.top, u.top)),
          (u.right = Ra(l.right, u.right)),
          (u.bottom = Ra(l.bottom, u.bottom)),
          (u.left = ur(l.left, u.left)),
          u
        );
      },
      lf(e, o, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Qp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? yt(n) : null,
    a = n ? $r(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (i) {
    case Ce:
      u = { x: o, y: t.y - r.height };
      break;
    case Ze:
      u = { x: o, y: t.y + t.height };
      break;
    case Qe:
      u = { x: t.x + t.width, y: s };
      break;
    case Pe:
      u = { x: t.x - r.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = i ? mu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case qr:
        u[c] = u[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Ii:
        u[c] = u[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function ji(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    s = r.boundary,
    u = s === void 0 ? T1 : s,
    c = r.rootBoundary,
    l = c === void 0 ? Gp : c,
    d = r.elementContext,
    p = d === void 0 ? fi : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    _ = Yp(typeof h != "number" ? h : Xp(h, Bi)),
    b = p === fi ? M1 : fi,
    y = e.rects.popper,
    O = e.elements[g ? b : p],
    w = pO(dr(O) ? O : O.contextElement || Zt(e.elements.popper), u, l, o),
    S = zr(e.elements.reference),
    k = Qp({ reference: S, element: y, placement: i }),
    D = qs(Object.assign({}, y, k)),
    I = p === fi ? D : S,
    C = {
      top: w.top - I.top + _.top,
      bottom: I.bottom - w.bottom + _.bottom,
      left: w.left - I.left + _.left,
      right: I.right - w.right + _.right,
    },
    T = e.modifiersData.offset;
  if (p === fi && T) {
    var U = T[i];
    Object.keys(C).forEach(function (q) {
      var V = [Qe, Ze].indexOf(q) >= 0 ? 1 : -1,
        Y = [Ce, Ze].indexOf(q) >= 0 ? "y" : "x";
      C[q] += U[Y] * V;
    });
  }
  return C;
}
function hO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    c = u === void 0 ? Hp : u,
    l = $r(n),
    d = l
      ? s
        ? of
        : of.filter(function (g) {
            return $r(g) === l;
          })
      : Bi,
    p = d.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = ji(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[yt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function gO(e) {
  if (yt(e) === _u) return [];
  var t = pa(e);
  return [cf(e), t, cf(t)];
}
function _O(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var i = r.mainAxis,
        a = i === void 0 ? !0 : i,
        o = r.altAxis,
        s = o === void 0 ? !0 : o,
        u = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        v = r.flipVariations,
        g = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        _ = yt(h),
        b = _ === h,
        y = u || (b || !g ? [pa(h)] : gO(h)),
        O = [h].concat(y).reduce(function (le, ge) {
          return le.concat(
            yt(ge) === _u
              ? hO(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : ge,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        k = new Map(),
        D = !0,
        I = O[0],
        C = 0;
      C < O.length;
      C++
    ) {
      var T = O[C],
        U = yt(T),
        q = $r(T) === qr,
        V = [Ce, Ze].indexOf(U) >= 0,
        Y = V ? "width" : "height",
        G = ji(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        $ = V ? (q ? Qe : Pe) : q ? Ze : Ce;
      w[Y] > S[Y] && ($ = pa($));
      var X = pa($),
        N = [];
      if (
        (a && N.push(G[U] <= 0),
        s && N.push(G[$] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((I = T), (D = !1));
        break;
      }
      k.set(T, N);
    }
    if (D)
      for (
        var A = g ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = k.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (et) {
                  return et;
                });
            });
            if (ce) return ((I = ce), "break");
          },
          ae = A;
        ae > 0;
        ae--
      ) {
        var ue = be(ae);
        if (ue === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const bO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _O,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function df(e, t, r) {
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
function ff(e) {
  return [Ce, Qe, Ze, Pe].some(function (t) {
    return e[t] >= 0;
  });
}
function yO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = ji(t, { elementContext: "reference" }),
    s = ji(t, { altBoundary: !0 }),
    u = df(o, n),
    c = df(s, i, a),
    l = ff(u),
    d = ff(c);
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
const mO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yO,
};
function wO(e, t, r) {
  var n = yt(e),
    i = [Pe, Ce].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    s = a[1];
  return (
    (o = o || 0),
    (s = (s || 0) * i),
    [Pe, Qe].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function OO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Hp.reduce(function (l, d) {
      return ((l[d] = wO(d, t.rects, a)), l);
    }, {}),
    s = o[t.placement],
    u = s.x,
    c = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const SO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: OO };
function EO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Qp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const kO = { name: "popperOffsets", enabled: !0, phase: "read", fn: EO, data: {} };
function xO(e) {
  return e === "x" ? "y" : "x";
}
function RO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.mainAxis,
    a = i === void 0 ? !0 : i,
    o = r.altAxis,
    s = o === void 0 ? !1 : o,
    u = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    p = r.tether,
    v = p === void 0 ? !0 : p,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = ji(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: l }),
    _ = yt(t.placement),
    b = $r(t.placement),
    y = !b,
    O = mu(_),
    w = xO(O),
    S = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    D = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var q,
        V = O === "y" ? Ce : Pe,
        Y = O === "y" ? Ze : Qe,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + h[V],
        N = $ - h[Y],
        A = v ? -D[G] / 2 : 0,
        be = b === qr ? k[G] : D[G],
        ae = b === qr ? -D[G] : -k[G],
        ue = t.elements.arrow,
        le = v && ue ? yu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Jp(),
        ce = ge[V],
        Ue = ge[Y],
        Oe = yi(0, k[G], le[G]),
        et = y ? k[G] / 2 - A - Oe - ce - C.mainAxis : be - Oe - ce - C.mainAxis,
        pe = y ? -k[G] / 2 + A + Oe + Ue + C.mainAxis : ae + Oe + Ue + C.mainAxis,
        ze = t.elements.arrow && qi(t.elements.arrow),
        mr = ze ? (O === "y" ? ze.clientTop || 0 : ze.clientLeft || 0) : 0,
        Ct = (q = T?.[O]) != null ? q : 0,
        Se = $ + et - Ct - mr,
        Ee = $ + pe - Ct,
        Ut = yi(v ? Ra(X, Se) : X, $, v ? ur(N, Ee) : N);
      ((S[O] = Ut), (U[O] = Ut - $));
    }
    if (s) {
      var ft,
        tt = O === "x" ? Ce : Pe,
        zt = O === "x" ? Ze : Qe,
        $e = S[w],
        je = w === "y" ? "height" : "width",
        ke = $e + h[tt],
        rt = $e - h[zt],
        $t = [Ce, Pe].indexOf(_) !== -1,
        Hi = (ft = T?.[w]) != null ? ft : 0,
        Wi = $t ? ke : $e - k[je] - D[je] - Hi + C.altAxis,
        Ki = $t ? $e + k[je] + D[je] - Hi - C.altAxis : rt,
        Ji = v && $t ? X1(Wi, $e, Ki) : yi(v ? Wi : ke, $e, v ? Ki : rt);
      ((S[w] = Ji), (U[w] = Ji - $e));
    }
    t.modifiersData[n] = U;
  }
}
const CO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: RO,
  requiresIfExists: ["offset"],
};
function PO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function AO(e) {
  return e === Fe(e) || !Xe(e) ? wu(e) : PO(e);
}
function IO(e) {
  var t = e.getBoundingClientRect(),
    r = Ur(t.width) / e.offsetWidth || 1,
    n = Ur(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function jO(e, t, r) {
  r === void 0 && (r = !1);
  var n = Xe(t),
    i = Xe(t) && IO(t),
    a = Zt(t),
    o = zr(e, i, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || Su(a)) && (s = AO(t)),
      Xe(t) ? ((u = zr(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : a && (u.x = Ou(a))),
    {
      x: o.left + s.scrollLeft - u.x,
      y: o.top + s.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function DO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    (o.forEach(function (s) {
      if (!r.has(s)) {
        var u = t.get(s);
        u && i(u);
      }
    }),
      n.push(a));
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || i(a);
    }),
    n
  );
}
function TO(e) {
  var t = DO(e);
  return G1.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function MO(e) {
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
function LO(e) {
  var t = e.reduce(function (r, n) {
    var i = r[n.name];
    return (
      (r[n.name] = i
        ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var vf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function pf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function FO(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? vf : i;
  return function (s, u, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, vf, a),
        modifiersData: {},
        elements: { reference: s, popper: u },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      v = {
        state: l,
        setOptions: function (_) {
          var b = typeof _ == "function" ? _(l.options) : _;
          (f(),
            (l.options = Object.assign({}, a, l.options, b)),
            (l.scrollParents = {
              reference: dr(s) ? mi(s) : s.contextElement ? mi(s.contextElement) : [],
              popper: mi(u),
            }));
          var y = TO(LO([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (O) {
              return O.enabled;
            })),
            g(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var _ = l.elements,
              b = _.reference,
              y = _.popper;
            if (pf(b, y)) {
              ((l.rects = {
                reference: jO(b, qi(y), l.options.strategy === "fixed"),
                popper: yu(y),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (C) {
                  return (l.modifiersData[C.name] = Object.assign({}, C.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var w = l.orderedModifiers[O],
                  S = w.fn,
                  k = w.options,
                  D = k === void 0 ? {} : k,
                  I = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: D, name: I, instance: v }) || l);
              }
            }
          }
        },
        update: MO(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!pf(s, u)) return v;
    v.setOptions(c).then(function (h) {
      !p && c.onFirstUpdate && c.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var _ = h.name,
          b = h.options,
          y = b === void 0 ? {} : b,
          O = h.effect;
        if (typeof O == "function") {
          var w = O({ state: l, name: _, instance: v, options: y }),
            S = function () {};
          d.push(w || S);
        }
      });
    }
    function f() {
      (d.forEach(function (h) {
        return h();
      }),
        (d = []));
    }
    return v;
  };
}
var NO = [sO, kO, aO, K1, SO, bO, CO, tO, mO],
  BO = FO({ defaultModifiers: NO }),
  fs,
  hf;
function qO() {
  if (hf) return fs;
  hf = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(a, o) {
    if (a === o) return !0;
    if (a && o && typeof a == "object" && typeof o == "object") {
      if (a.constructor !== o.constructor) return !1;
      var s, u, c;
      if (Array.isArray(a)) {
        if (((s = a.length), s != o.length)) return !1;
        for (u = s; u-- !== 0; ) if (!i(a[u], o[u])) return !1;
        return !0;
      }
      var l;
      if (t && a instanceof Map && o instanceof Map) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(u = l.next()).done; ) if (!o.has(u.value[0])) return !1;
        for (l = a.entries(); !(u = l.next()).done; )
          if (!i(u.value[1], o.get(u.value[0]))) return !1;
        return !0;
      }
      if (r && a instanceof Set && o instanceof Set) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(u = l.next()).done; ) if (!o.has(u.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
        if (((s = a.length), s != o.length)) return !1;
        for (u = s; u-- !== 0; ) if (a[u] !== o[u]) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
      if (
        a.valueOf !== Object.prototype.valueOf &&
        typeof a.valueOf == "function" &&
        typeof o.valueOf == "function"
      )
        return a.valueOf() === o.valueOf();
      if (
        a.toString !== Object.prototype.toString &&
        typeof a.toString == "function" &&
        typeof o.toString == "function"
      )
        return a.toString() === o.toString();
      if (((c = Object.keys(a)), (s = c.length), s !== Object.keys(o).length)) return !1;
      for (u = s; u-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[u])) return !1;
      if (e && a instanceof Element) return !1;
      for (u = s; u-- !== 0; )
        if (
          !((c[u] === "_owner" || c[u] === "__v" || c[u] === "__o") && a.$$typeof) &&
          !i(a[c[u]], o[c[u]])
        )
          return !1;
      return !0;
    }
    return a !== a && o !== o;
  }
  return (
    (fs = function (o, s) {
      try {
        return i(o, s);
      } catch (u) {
        if ((u.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw u;
      }
    }),
    fs
  );
}
var UO = qO();
const zO = Xt(UO);
var $O = [],
  VO = function (t, r, n) {
    n === void 0 && (n = {});
    var i = m.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || $O,
      },
      o = m.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = o[0],
      u = o[1],
      c = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var g = v.state,
              f = Object.keys(g.elements);
            Fa.flushSync(function () {
              u({
                styles: nf(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: nf(
                  f.map(function (h) {
                    return [h, g.attributes[h]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      l = m.useMemo(
        function () {
          var p = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return zO(i.current, p) ? i.current || p : ((i.current = p), p);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = m.useRef();
    return (
      af(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      af(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || BO,
              v = p(t, r, l);
            return (
              (d.current = v),
              function () {
                (v.destroy(), (d.current = null));
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
  GO = function () {},
  HO = function () {
    return Promise.resolve(null);
  },
  WO = [];
function KO(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? WO : a,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = m.useContext(A1),
    p = m.useState(null),
    v = p[0],
    g = p[1],
    f = m.useState(null),
    h = f[0],
    _ = f[1];
  m.useEffect(
    function () {
      D1(c, v);
    },
    [c, v],
  );
  var b = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: i,
          onFirstUpdate: u,
          modifiers: [].concat(o, [{ name: "arrow", enabled: h != null, options: { element: h } }]),
        };
      },
      [r, i, u, o, h],
    ),
    y = VO(s || d, v, b),
    O = y.state,
    w = y.styles,
    S = y.forceUpdate,
    k = y.update,
    D = m.useMemo(
      function () {
        return {
          ref: g,
          style: w.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: _ },
          forceUpdate: S || GO,
          update: k || HO,
        };
      },
      [g, _, r, O, w, k, S],
    );
  return I1(l)(D);
}
function JO(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var i = n.state,
          a = n.name;
        window.visualViewport &&
          (i.modifiersData[a] = {
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
        var i,
          a,
          o,
          s,
          u = n.state,
          c = u.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.width) !=
              "number" ||
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = u.modifiersData.popperOffsets,
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = u.placement.split("-"),
            g = K(v, 1),
            f = g[0],
            h =
              (o =
                (s = u.modifiersData) === null ||
                s === void 0 ||
                (s = s.offset) === null ||
                s === void 0
                  ? void 0
                  : s[u.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            _ = l.width - 2 * t,
            b = l.height - 2 * t;
          (f === "top" && (b = u.rects.reference.y + h.y - t),
            f === "bottom" && (b = l.height - p.y - t),
            f === "left" && (_ = u.rects.reference.x + h.x - t),
            f === "right" && (_ = l.width - p.x - t),
            (u.styles.popper.maxWidth = "".concat(_, "px")),
            (u.styles.popper.maxHeight = "".concat(b, "px")));
        }
      },
    },
  ];
}
var Us = 5,
  YO = [
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
function XO() {
  return null;
}
var ZO = [0, 8];
function QO(e) {
  var t = e.children,
    r = t === void 0 ? XO : t,
    n = e.offset,
    i = n === void 0 ? ZO : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    s = e.referenceElement,
    u = s === void 0 ? void 0 : s,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = K(i, 2),
    f = g[0],
    h = g[1],
    _ = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: Us, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, h] } },
          w = v ? JO({ viewportPadding: Us }) : [];
        return [].concat(YO, [y, O], De(w));
      },
      [f, h, v],
    ),
    b = m.useMemo(
      function () {
        return c == null ? _ : [].concat(De(_), De(c));
      },
      [_, c],
    );
  return E.createElement(KO, { modifiers: b, placement: o, strategy: d, referenceElement: u }, r);
}
var eh = "atlaskit-portal-container",
  th = "body > .atlaskit-portal-container",
  rh = "atlaskit-portal",
  eS = function (t) {
    var r = document.createElement("div");
    return ((r.className = rh), (r.style.zIndex = "".concat(t)), r);
  },
  nh = function () {
    return document.body;
  },
  ih = function () {
    var t = document.querySelector(th);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = eh),
        (n.style.display = "flex"),
        (r = nh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  tS = function (t) {
    ih().removeChild(t);
  },
  rS = function (t) {
    t.parentElement || ih().appendChild(t);
  },
  ah = function () {
    return document !== void 0;
  },
  nS = function (t) {
    if (ah()) {
      var r = document.createElement("div");
      return ((r.className = rh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  iS = function () {
    if (ah()) {
      var t = document.querySelector(th);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = eh),
          (n.style.display = "flex"),
          (r = nh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function aS(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return eS(t);
      },
      [t],
    );
  return (
    rS(n),
    m.useEffect(
      function () {
        return function () {
          tS(n);
        };
      },
      [n],
    ),
    Fa.createPortal(r, n)
  );
}
var oh = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function oS(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  oh(
    function () {
      var u = nS(t);
      o(u);
      var c = iS();
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
  var s = E.createElement(m.Suspense, { fallback: null }, r);
  return a ? Fa.createPortal(s, a) : null;
}
var sS = function (t) {
    var r = m.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = m.useState(function () {
        return t === "layoutEffect" ? oh : m.useEffect;
      }),
      s = K(o, 1),
      u = s[0];
    return (
      u(function () {
        a(!0);
      }, []),
      i
    );
  },
  uS = "akPortalMount",
  cS = "akPortalUnmount",
  gf = {
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
  lS = function (t) {
    return gf.hasOwnProperty(t) ? gf[t] : null;
  },
  dS = function (t, r) {
    var n = { layer: lS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function _f(e, t) {
  var r = dS(e, t);
  window.dispatchEvent(r);
}
var fS = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        _f(uS, r),
        function () {
          _f(cS, r);
        }
      );
    },
    [r],
  );
};
function vS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = sS(a);
  return (
    fS(r),
    Nr("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(oS, { zIndex: r }, n)
      : o
        ? E.createElement(aS, { zIndex: r }, n)
        : null
  );
}
var wi = new Set(),
  Di = null;
function bf() {
  if (!Di) {
    Di = Ga.bindAll(window, [
      { type: "dragend", listener: vs },
      { type: "pointerdown", listener: vs },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            vs();
          };
        })(),
      },
    ]);
    var e = Array.from(wi);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function vs() {
  var e;
  ((e = Di) === null || e === void 0 || e(), (Di = null));
  var t = Array.from(wi);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function pS() {
  return Ga.bindAll(window, [
    { type: "dragstart", listener: bf },
    { type: "dragenter", listener: bf },
  ]);
}
var aa = null;
function hS(e) {
  return (
    aa || (aa = pS()),
    wi.add(e),
    e.onRegister({ isDragging: Di !== null }),
    function () {
      if ((wi.delete(e), wi.size === 0)) {
        var r;
        ((r = aa) === null || r === void 0 || r(), (aa = null));
      }
    }
  );
}
var Oi = null;
function gi() {
  Oi != null && (window.clearTimeout(Oi), (Oi = null));
}
function yf(e, t) {
  (gi(),
    (Oi = window.setTimeout(function () {
      ((Oi = null), e());
    }, t)));
}
var vt = null;
function gS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(vt && vt.entry === e);
  }
  function n() {
    r() && (gi(), (vt = null));
  }
  function i() {
    (r() && e.done(), (t = "done"), n());
  }
  function a() {
    (r() && e.hide({ isImmediate: !0 }), i());
  }
  function o() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), gi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), gi(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(v) {
    var g = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (g) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          yf(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function u() {
    r() && t === "hide-animating" && i();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = !!(vt && vt.isVisible());
    (vt && (gi(), vt.entry.hide({ isImmediate: !0 }), vt.entry.done(), (vt = null)),
      (vt = { entry: e, isVisible: c }));
    function g() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      g();
      return;
    }
    ((t = "waiting-to-show"), yf(g, e.delay));
  }
  d();
  var p = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: u,
    mousePosition: l(),
  };
  return p;
}
function _S(e, t) {
  var r = a0();
  return t ? "".concat(r(e)) : void 0;
}
var ps = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
    regularFont: "_11c81o8v",
  },
  bS = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: R([ps.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return m.createElement(
          "kbd",
          {
            key: "".concat(n, "-").concat(i),
            className: R([
              ps.shortcutSegment,
              Nr("platform-tooltip-shortcuts-regular-font") && ps.regularFont,
            ]),
          },
          n,
        );
      }),
    );
  },
  sh = m.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return m.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      m.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", i]),
          onMouseOut: u,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": s,
          id: l,
        },
        a,
        d && m.createElement(bS, { shortcut: d }),
      ),
    );
  });
sh.displayName = "TooltipPrimitive";
var mf = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  uh = m.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.truncate,
      s = t.placement,
      u = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return m.createElement(
      sh,
      {
        ref: r,
        style: n,
        className: R([mf.base, o && mf.truncate, i]),
        placement: s,
        testId: u,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: p,
      },
      a,
    );
  });
uh.displayName = "TooltipContainer";
function wf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Of(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Of(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Of(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var yS = o0.tooltip(),
  Sf = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.9.0" },
  mS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  wS = function (t) {
    return t.split("-")[0];
  };
function OS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    s = e.truncate,
    u = s === void 0 ? !1 : s,
    c = e.component,
    l = c === void 0 ? uh : c,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    _ = h === void 0 ? we : h,
    b = e.onHide,
    y = b === void 0 ? we : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    k = e.hideTooltipOnMouseDown,
    D = k === void 0 ? !1 : k,
    I = e.analyticsContext,
    C = e.strategy,
    T = C === void 0 ? "fixed" : C,
    U = e.ignoreTooltipPointerEvents,
    q = U === void 0 ? !1 : U,
    V = e.isScreenReaderAnnouncementDisabled,
    Y = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = xl(Ir({ fn: _, action: "displayed", analyticsData: I }, Sf)),
    N = xl(Ir({ fn: y, action: "hidden", analyticsData: I }, Sf)),
    A = m.useRef(null),
    be = m.useState("hide"),
    ae = K(be, 2),
    ue = ae[0],
    le = ae[1],
    ge = m.useRef(null),
    ce = m.useRef(null),
    Ue = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = m.useCallback(function (L) {
      ge.current = L;
    }, []),
    et = di(ue),
    pe = di(X),
    ze = di(N),
    mr = di(f),
    Ct = di(O),
    Se = m.useRef(!1),
    Ee = m.useCallback(function (L) {
      ((A.current = L), (Se.current = !1));
    }, []),
    Ut = m.useCallback(
      function () {
        A.current &&
          (Se.current && ze.current(), (A.current = null), (Se.current = !1), le("hide"));
      },
      [ze],
    ),
    ft = m.useCallback(
      function () {
        A.current && (A.current.abort(), Se.current && ze.current(), (A.current = null));
      },
      [ze],
    );
  m.useEffect(
    function () {
      return function () {
        A.current && ft();
      };
    },
    [ft],
  );
  var tt = m.useRef(!1);
  m.useEffect(function () {
    return hS({
      onRegister: function (re) {
        var Pt = re.isDragging;
        tt.current = Pt;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (tt.current = !0));
      },
      onDragEnd: function () {
        tt.current = !1;
      },
    });
  }, []);
  var zt = m.useCallback(
      function (L) {
        var re;
        if (!tt.current) {
          if ((A.current && !A.current.isActive() && ft(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Ct.current && !((re = Ct.current) !== null && re !== void 0 && re.call(Ct)))) {
            var Pt = {
                source: L,
                delay: mr.current,
                show: function (wr) {
                  var Xr = wr.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(Xr ? "show-immediate" : "fade-in"));
                },
                hide: function (wr) {
                  var Xr = wr.isImmediate;
                  le(Xr ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              po = gS(Pt);
            Ee(po);
          }
        }
      },
      [Ct, mr, Ut, Ee, ft, pe],
    ),
    $e = m.useCallback(
      function () {
        var L;
        (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (l1({ onClose: $e, isDisabled: ue === "hide" || ue === "fade-out" }),
    m.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = Ga.bind(window, {
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
  var je = m.useCallback(
      function () {
        D && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [D],
    ),
    ke = m.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    rt = m.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: wf({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          zt(re);
        }
      },
      [n, zt],
    ),
    $t = m.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Hi =
      n === "mouse"
        ? function (L) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = wf({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Wi = m.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Ki = m.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        zt({ type: "keyboard" });
      },
      [zt],
    ),
    Ji = m.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    cg = m.useCallback(
      function (L) {
        L === "exiting" &&
          et.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [et],
    ),
    lg = p,
    fo = ue !== "hide" && !!o,
    Du = !Y && fo,
    Tu = ue !== "hide" && ue !== "fade-out",
    dg = m.useCallback(function () {
      var L;
      (L = A.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  p1({ isOpen: fo && Tu, onClose: dg });
  var Mu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var Pt;
        return (Pt = A.current) === null || Pt === void 0 ? void 0 : Pt.mousePosition;
      }
      return ge.current || void 0;
    },
    Yr = _S("tooltip", Du),
    vo = {
      onMouseOver: rt,
      onMouseOut: $t,
      onMouseMove: Hi,
      onMouseDown: je,
      onClick: ke,
      onFocus: Ki,
      onBlur: Ji,
    };
  v && (vo["data-testid"] = "".concat(v, "--container"));
  var Lu = typeof t == "function";
  m.useEffect(
    function () {
      if (!Lu) {
        var L = ge.current;
        if (!(!L || !Yr))
          return (
            L.setAttribute("aria-describedby", Yr),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Lu, Yr],
  );
  var Fu = Du
    ? E.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: Yr },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t(Ir(Ir({}, vo), {}, { "aria-describedby": Yr, ref: Oe })),
          Fu,
        )
      : E.createElement(lg, te({}, vo, { ref: Ue, role: "presentation" }), t, Fu),
    fo
      ? E.createElement(
          vS,
          { zIndex: yS },
          E.createElement(QO, { placement: $, referenceElement: Mu(), strategy: T }, function (L) {
            var re = L.ref,
              Pt = L.style,
              po = L.update,
              ho = L.placement,
              wr = n === "mouse" ? void 0 : mS[wS(ho)];
            return E.createElement(
              Vp,
              { appear: !0 },
              Tu &&
                E.createElement(
                  P1,
                  {
                    distance: "constant",
                    entranceDirection: wr,
                    exitDirection: wr,
                    onFinish: cg,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (Xr) {
                    var fg = Xr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(fg),
                        style: Ir(Ir({}, Pt), q && { pointerEvents: "none" }),
                        truncate: u,
                        placement: $,
                        testId: Mu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: $t,
                        onMouseOver: Wi,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: po }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var SS = [
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
  vi = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Ef = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  ch = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      i = t.testId;
    t.isRanking;
    var a = t.innerRef,
      o = t.isSortable,
      s = t.sortOrder,
      u = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      g = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      _ = t.isIconOnlyHeader,
      b = ne(t, SS),
      y = m.useState(!1),
      O = K(y, 2),
      w = O[0],
      S = O[1],
      k = m.useState(!1),
      D = K(k, 2),
      I = D[0],
      C = D[1],
      T = c === l || s !== void 0,
      U = w || T || I,
      q = U && _,
      V = !_ || U || (_ && !I),
      Y = m.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      G = m.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      $ = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = E.createElement(
        Va,
        { xcss: Ef.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: Y, onBlur: G },
        E.createElement(
          OS,
          { content: s === lr ? p : g },
          E.createElement(
            Wm,
            { onClick: u, xcss: vi.buttonWrapper, "aria-roledescription": h },
            E.createElement(
              ka,
              { xcss: q ? vi.hideIconHeaderWrapper : vi.visibleHeaderWrapper },
              E.createElement("span", { className: R([Ef.text]) }, r),
            ),
            V &&
              E.createElement(
                ka,
                { xcss: U ? vi.sortIconVisibleWrapper : vi.sortIconHiddenWrapper },
                s === lr
                  ? E.createElement(u1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(a1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      e1,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        b,
        { isSortable: o, sortOrder: s },
      ),
      o ? N : r,
    );
  },
  ES = ["isRanking", "refHeight", "refWidth"];
function kS(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, lh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var xS = (function (e) {
    function t() {
      return (fe(this, t), kS(this, t, arguments));
    }
    return (
      Be(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, ES),
              s = z_(i, a);
            return E.createElement(ch, te({ inlineStyles: s }, o));
          },
        },
      ])
    );
  })(E.Component),
  RS = r1(xS),
  CS = ["cells"],
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
    (t = J(t)),
    Ne(e, dh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function dh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dh = function () {
    return !!e;
  })();
}
var IS = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = AS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Be(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ma(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ma(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.head,
              o = i.sortKey,
              s = i.sortOrder,
              u = i.isFixedSize,
              c = i.onSort,
              l = i.isRanking,
              d = i.isRankable,
              p = i.testId,
              v = this.state.activeSortButtonId;
            if (!a) return null;
            var g = d ? RS : ch,
              f = a.cells,
              h = ne(a, CS);
            return E.createElement(
              Qw,
              te({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var y = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    k = _.descendingSortTooltip,
                    D = _.isIconOnlyHeader,
                    I = _.isSortable,
                    C = _.key,
                    T = _.shouldTruncate,
                    U = _.testId,
                    q = _.width,
                    V = ne(_, PS),
                    Y = "head-cell-".concat(b),
                    G = function () {
                      (n.setState({ activeSortButtonId: Y }), I && c(_)());
                    };
                  return E.createElement(
                    g,
                    te(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: u,
                        isIconOnlyHeader: D,
                        isSortable: !!I,
                        isRanking: l,
                        key: C || b,
                        headCellId: Y,
                        activeSortButtonId: v,
                        onClick: G,
                        testId: U || p,
                        shouldTruncate: T,
                        sortOrder: C === o ? s : void 0,
                        width: q,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: k,
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
  })(E.Component),
  jS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function DS(e) {
  switch (e) {
    case Sa:
      return lr;
    case lr:
      return Sa;
    default:
      return e;
  }
}
var TS = function (t) {
    var r = t.caption,
      n = t.head,
      i = t.highlightedRowIndex,
      a = t.rows,
      o = t.sortKey,
      s = t.sortOrder,
      u = t.loadingLabel,
      c = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      p = t.label,
      v = t.isLoading,
      g = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      _ = t.rowsPerPage,
      b = _ === void 0 ? 1 / 0 : _,
      y = t.onSetPage,
      O = y === void 0 ? we : y,
      w = t.onSort,
      S = w === void 0 ? we : w,
      k = t.page,
      D = k === void 0 ? 1 : k,
      I = t.emptyView,
      C = t.isRankable,
      T = C === void 0 ? !1 : C,
      U = t.isRankingDisabled,
      q = U === void 0 ? !1 : U,
      V = t.onRankStart,
      Y = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      A =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = m.useState(!1),
      ae = K(be, 2),
      ue = ae[0],
      le = ae[1],
      ge = m.useRef(null),
      ce = xi({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = xi({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (ma(o, n), U_(n));
      },
      [o, n],
    );
    var Oe = function (ke) {
        return function () {
          var rt = ke.key;
          if (rt) {
            if (ce && T && rt === o && s === Sa) {
              ce({ key: null, sortOrder: null, item: ke });
              return;
            }
            var $t = rt !== o ? lr : DS(s);
            ce && ce({ key: rt, item: ke, sortOrder: $t });
          }
        };
      },
      et = function (ke, rt) {
        O(ke, rt);
      },
      pe = function (ke) {
        (le(!0), Y(ke));
      },
      ze = function (ke) {
        (le(!1), Ue(ke));
      },
      mr = function () {
        return X || ($v(a || [], D, b).length > 2 ? Ea : ob);
      },
      Ct = function () {
        return g ? E.createElement(fb, { testId: l }) : I && E.createElement(vb, { testId: l }, I);
      },
      Se = a && a.length,
      Ee,
      Ut = !1;
    (d && Number.isInteger(d) && b && Se && Se <= d
      ? ((Ee = Math.ceil(d / b)), (Ut = !0))
      : (Ee = Se && b ? Math.ceil(Se / b) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var ft = D > Ee ? Ee : D,
      tt = !!Se,
      zt = mr(),
      $e = Ct();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        rp,
        {
          isLoading: g && tt,
          spinnerSize: zt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: u,
        },
        E.createElement(
          cb,
          { isFixedSize: h, "aria-label": p, hasDataRow: tt, testId: l, isLoading: g },
          !!r && E.createElement(lb, null, r),
          n &&
            E.createElement(IS, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: s,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          tt &&
            E.createElement(LS, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: s,
              rowsPerPage: b,
              page: ft,
              isFixedSize: h || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: ze,
              isRankingDisabled: q || g || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : E.createElement(
            db,
            { testId: l },
            E.createElement(Yw, {
              value: ft,
              onChange: et,
              total: Ee,
              i18n: A,
              isDisabled: g,
              testId: l,
            }),
          ),
      !tt &&
        $e &&
        E.createElement(ep, { isLoading: g, spinnerSize: Ea, testId: l, loadingLabel: u }, $e),
    );
  },
  MS = m.lazy(function () {
    return Dv(
      () => import("./body-CQ_2PMyI.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  LS = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      s = t.onRankEnd,
      u = t.isRankingDisabled,
      c = ne(t, jS),
      l = i && !c.sortKey,
      d = m.useState(!1),
      p = K(d, 2),
      v = p[0],
      g = p[1];
    m.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = E.createElement(Cb, te({ ref: r }, c));
    return l && v
      ? E.createElement(
          Ab,
          { fallback: f },
          E.createElement(
            m.Suspense,
            { fallback: f },
            E.createElement(
              MS,
              te({ ref: r }, c, {
                isRanking: a,
                onRankStart: o,
                onRankEnd: s,
                isRankingDisabled: u,
              }),
            ),
          ),
        )
      : f;
  });
function FS(e, t, r) {
  return (
    (t = J(t)),
    Ne(e, fh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function fh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fh = function () {
    return !!e;
  })();
}
var Eu = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = FS(this, t, [].concat(i))),
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
        var p = $_(o, c, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Be(t, e),
    ve(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var i = n.sortKey || this.state.sortKey,
            a = n.sortOrder || this.state.sortOrder,
            o = n.page || this.state.page;
          this.setState({ page: o, sortKey: i, sortOrder: a, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            i = n.page,
            a = n.sortKey,
            o = n.sortOrder,
            s = n.rows,
            u = this.props,
            c = u.caption,
            l = u.emptyView,
            d = u.head,
            p = u.highlightedRowIndex,
            v = u.loadingSpinnerSize,
            g = u.isLoading,
            f = u.loadingLabel,
            h = u.isFixedSize,
            _ = u.isRankable,
            b = u.isRankingDisabled,
            y = u.rowsPerPage,
            O = u.paginationi18n,
            w = u.onRankStart,
            S = u.onPageRowsUpdate,
            k = u.testId,
            D = u.label;
          return E.createElement(TS, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: g,
            loadingLabel: f,
            isFixedSize: h,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: i,
            rows: s,
            rowsPerPage: y,
            sortKey: a,
            sortOrder: o,
            isRankable: _,
            isRankingDisabled: b,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: k,
            label: D,
          });
        },
      },
    ])
  );
})(E.Component);
x(Eu, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const NS = (e, t, r) => {
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
  vh = (e, t, r) => ({ cells: NS(e, t, r) });
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
var BS = {};
function Ya() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : BS;
}
var ph = Object.assign,
  Ca = Object.getOwnPropertyDescriptor,
  mt = Object.defineProperty,
  Xa = Object.prototype,
  zs = [];
Object.freeze(zs);
var hh = {};
Object.freeze(hh);
var qS = typeof Proxy < "u",
  US = Object.toString();
function gh() {
  qS || H("Proxy not available");
}
function _h(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Dr = function () {};
function st(e) {
  return typeof e == "function";
}
function fr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Za(e) {
  return e !== null && typeof e == "object";
}
function Yt(e) {
  if (!Za(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === US;
}
function bh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Qa(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function yh(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function gr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Za(n) && n[r] === !0;
    }
  );
}
function Wr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function zS(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Tt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var mh = typeof Object.getOwnPropertySymbols < "u";
function $S(e) {
  var t = Object.keys(e);
  if (!mh) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Xa.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var eo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : mh
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function wh(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return Xa.hasOwnProperty.call(e, t);
}
var VS =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      eo(t).forEach(function (n) {
        r[n] = Ca(t, n);
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
function kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, WS(n.key), n));
  }
}
function Kr(e, t, r) {
  return (t && GS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Tr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = KS(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vr() {
  return (
    (vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vr.apply(null, arguments)
  );
}
function Oh(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), $s(e, t));
}
function $s(e, t) {
  return (
    ($s = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    $s(e, t)
  );
}
function HS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function WS(e) {
  var t = HS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KS(e, t) {
  if (e) {
    if (typeof e == "string") return kf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? kf(e, t)
          : void 0
    );
  }
}
var _t = Symbol("mobx-stored-annotations");
function wt(e) {
  function t(r, n) {
    if (zi(n)) return e.decorate_20223_(r, n);
    Ui(r, n, e);
  }
  return Object.assign(t, e);
}
function Ui(e, t, r) {
  (Ft(e, _t) || Qa(e, _t, vr({}, e[_t])), tE(r) || (e[_t][t] = r));
}
function JS(e) {
  return (Ft(e, _t) || Qa(e, _t, vr({}, e[_t])), e[_t]);
}
function zi(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  Qt = (function () {
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
        return Nh(this);
      }),
      (t.reportChanged = function () {
        (Ke(), Bh(this), Je());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Kr(e, [
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
Qt.isBeingObservedMask_ = 1;
Qt.isPendingUnobservationMask_ = 2;
Qt.diffValueMask_ = 4;
var ku = gr("Atom", Qt);
function Sh(e, t, r) {
  (t === void 0 && (t = Dr), r === void 0 && (r = Dr));
  var n = new Qt(e);
  return (t !== Dr && ok(n, t), r !== Dr && Vh(n, r), n);
}
function YS(e, t) {
  return rg(e, t);
}
function XS(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Pa = { structural: YS, default: XS };
function pr(e, t, r) {
  return Kh(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : Yt(e)
        ? oe.object(e, void 0, { name: r })
        : Wr(e)
          ? oe.map(e, { name: r })
          : Tt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !Vr(e) && !Mi(e)
              ? bh(e)
                ? Gr(e)
                : Ti(r, e)
              : e;
}
function ZS(e, t, r) {
  if (e == null || uo(e) || so(e) || br(e) || gt(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (Yt(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (Wr(e)) return oe.map(e, { name: r, deep: !1 });
  if (Tt(e)) return oe.set(e, { name: r, deep: !1 });
}
function to(e) {
  return e;
}
function QS(e, t) {
  return rg(e, t) ? t : e;
}
var eE = "override";
function tE(e) {
  return e.annotationType_ === eE;
}
function $i(e, t) {
  return { annotationType_: e, options_: t, make_: rE, extend_: nE, decorate_20223_: iE };
}
function rE(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Vr(r.value)) return 1;
  var a = Eh(e, this, t, r, !1);
  return (mt(n, t, a), 2);
}
function nE(e, t, r, n) {
  var i = Eh(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function iE(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return hr(
        (l = (d = a.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (p = (v = a.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (u) {
      var c,
        l = u;
      return (
        Vr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      Vr(e) || (e = o(e)),
      (s = this.options_) != null &&
        s.bound &&
        i(function () {
          var u = this,
            c = u[n].bind(u);
          ((c.isMobxAction = !0), (u[n] = c));
        }),
      e
    );
  }
  H(
    "Cannot apply '" +
      a.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        a.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function aE(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Eh(e, t, r, n, i) {
  var a, o, s, u, c, l, d;
  (i === void 0 && (i = P.safeDescriptors), aE(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: hr(
      (o = (s = t.options_) == null ? void 0 : s.name) != null ? o : r.toString(),
      p,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function kh(e, t) {
  return { annotationType_: e, options_: t, make_: oE, extend_: sE, decorate_20223_: uE };
}
function oE(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Ft(e.target_, t) || !Mi(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Mi(r.value)) return 1;
  var a = xh(e, this, t, r, !1, !1);
  return (mt(n, t, a), 2);
}
function sE(e, t, r, n) {
  var i,
    a = xh(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function uE(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Mi(e) || (e = Gr(e)),
    (r = this.options_) != null &&
      r.bound &&
      i(function () {
        var a = this,
          o = a[n].bind(a);
        ((o.isMobXFlow = !0), (a[n] = o));
      }),
    e
  );
}
function cE(e, t, r, n) {
  (t.annotationType_, n.value);
}
function xh(e, t, r, n, i, a) {
  (a === void 0 && (a = P.safeDescriptors), cE(e, t, r, n));
  var o = n.value;
  if ((Mi(o) || (o = Gr(o)), i)) {
    var s;
    ((o = o.bind((s = e.proxy_) != null ? s : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function xu(e, t) {
  return { annotationType_: e, options_: t, make_: lE, extend_: dE, decorate_20223_: fE };
}
function lE(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function dE(e, t, r, n) {
  return (
    vE(e, this, t, r),
    e.defineComputedProperty_(t, vr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function fE(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Jr(this)[F],
        o = vr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new ut(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function vE(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ro(e, t) {
  return { annotationType_: e, options_: t, make_: pE, extend_: hE, decorate_20223_: gE };
}
function pE(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function hE(e, t, r, n) {
  var i, a;
  return (
    _E(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : pr,
      n,
    )
  );
}
function gE(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(s, u) {
    var c,
      l,
      d = Jr(s)[F],
      p = new cr(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : pr,
        "ObservableObject." + i.toString(),
        !1,
      );
    (d.values_.set(i, p), a.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[F].getObservablePropValue_(i));
      },
      set: function (u) {
        return (a.has(this) || o(this, u), this[F].setObservablePropValue_(i, u));
      },
      init: function (u) {
        return (a.has(this) || o(this, u), u);
      },
    };
}
function _E(e, t, r, n) {
  t.annotationType_;
}
var bE = "true",
  yE = Rh();
function Rh(e) {
  return { annotationType_: bE, options_: e, make_: mE, extend_: wE, decorate_20223_: OE };
}
function mE(e, t, r, n) {
  var i, a;
  if (r.get) return no.make_(e, t, r, n);
  if (r.set) {
    var o = Vr(r.set) ? r.set : hr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (mt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (bh(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Gr.bound : Gr;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? Ti.bound : Ti;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function wE(e, t, r, n) {
  var i, a;
  if (r.get) return no.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: hr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  return s.extend_(e, t, r, n);
}
function OE(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var SE = "observable",
  EE = "observable.ref",
  kE = "observable.shallow",
  xE = "observable.struct",
  Ch = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Ch);
function oa(e) {
  return e || Ch;
}
var Vs = ro(SE),
  RE = ro(EE, { enhancer: to }),
  CE = ro(kE, { enhancer: ZS }),
  PE = ro(xE, { enhancer: QS }),
  Ph = wt(Vs);
function sa(e) {
  return e.deep === !0 ? pr : e.deep === !1 ? to : IE(e.defaultDecorator);
}
function AE(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Rh(e)) : void 0;
}
function IE(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : pr;
}
function Ah(e, t, r) {
  if (zi(t)) return Vs.decorate_20223_(e, t);
  if (fr(t)) {
    Ui(e, t, Vs);
    return;
  }
  return Kh(e)
    ? e
    : Yt(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : Wr(e)
          ? oe.map(e, t)
          : Tt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
ph(Ah, Ph);
var jE = {
    box: function (t, r) {
      var n = oa(r);
      return new cr(t, sa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = oa(r);
      return (P.useProxies === !1 || n.proxy === !1 ? Ak : mk)(t, sa(n), n.name);
    },
    map: function (t, r) {
      var n = oa(r);
      return new Yh(t, sa(n), n.name);
    },
    set: function (t, r) {
      var n = oa(r);
      return new Xh(t, sa(n), n.name);
    },
    object: function (t, r, n) {
      return yr(function () {
        return lk(P.useProxies === !1 || n?.proxy === !1 ? Jr({}, n) : _k({}, n), t, r);
      });
    },
    ref: wt(RE),
    shallow: wt(CE),
    deep: Ph,
    struct: wt(PE),
  },
  oe = ph(Ah, jE),
  Ih = "computed",
  DE = "computed.struct",
  Gs = xu(Ih),
  TE = xu(DE, { equals: Pa.structural }),
  no = function (t, r) {
    if (zi(r)) return Gs.decorate_20223_(t, r);
    if (fr(r)) return Ui(t, r, Gs);
    if (Yt(t)) return wt(xu(Ih, t));
    var n = Yt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ut(n));
  };
Object.assign(no, Gs);
no.struct = wt(TE);
var xf,
  Rf,
  Aa = 0,
  ME = 1,
  LE =
    (xf = (Rf = Ca(function () {}, "name")) == null ? void 0 : Rf.configurable) != null ? xf : !1,
  Cf = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function hr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return FE(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    LE && ((Cf.value = e), mt(i, "name", Cf)),
    i
  );
}
function FE(e, t, r, n, i) {
  var a = NE(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    BE(a);
  }
}
function NE(e, t, r, n) {
  var i = !1,
    a = 0,
    o = P.trackingDerivation,
    s = !t || !o;
  Ke();
  var u = P.allowStateChanges;
  s && (_r(), (u = io(!0)));
  var c = Ru(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: u,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: ME++,
      parentActionId_: Aa,
    };
  return ((Aa = l.actionId_), l);
}
function BE(e) {
  (Aa !== e.actionId_ && H(30),
    (Aa = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    ao(e.prevAllowStateChanges_),
    Si(e.prevAllowStateReads_),
    Je(),
    e.runAsAction_ && Nt(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function qE(e, t) {
  var r = io(e);
  try {
    return t();
  } finally {
    ao(r);
  }
}
function io(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function ao(e) {
  P.allowStateChanges = e;
}
var cr = (function (e) {
    function t(n, i, a, o, s) {
      var u;
      return (
        a === void 0 && (a = "ObservableValue"),
        s === void 0 && (s = Pa.default),
        (u = e.call(this, a) || this),
        (u.enhancer = void 0),
        (u.name_ = void 0),
        (u.equals = void 0),
        (u.hasUnreportedChange_ = !1),
        (u.interceptors_ = void 0),
        (u.changeListeners_ = void 0),
        (u.value_ = void 0),
        (u.dehancer = void 0),
        (u.enhancer = i),
        (u.name_ = a),
        (u.equals = s),
        (u.value_ = i(n, void 0, a)),
        u
      );
    }
    Oh(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== P.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (He(this)) {
          var a = We(this, { object: this, type: Ot, newValue: i });
          if (!a) return P.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? P.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          at(this) && ot(this, { type: Ot, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return Vi(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Ot,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Gi(this, i)
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
        return wh(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Qt),
  ut = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ja(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Ia.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = hr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Pa.structural : Pa.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        GE(this);
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
          Hs(this) &&
            (this.warnAboutUntrackedRead_(), Ke(), (this.value_ = this.computeValue_(!1)), Je());
        else if ((Nh(this), Hs(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && VE(this),
            (P.trackingContext = n));
        }
        var i = this.value_;
        if (ha(i)) throw i.cause;
        return i;
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
          i = this.dependenciesState_ === W.NOT_TRACKING_,
          a = this.computeValue_(!0),
          o = i || ha(n) || ha(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = io(!1),
          a;
        if (n) a = jh(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new ja(o);
          }
        return (ao(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ws(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          s = void 0;
        return tk(function () {
          var u = a.get();
          if (!o || i) {
            var c = _r();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: Ot,
              object: a,
              newValue: u,
              oldValue: s,
            }),
              Nt(c));
          }
          ((o = !1), (s = u));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return wh(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Kr(e, [
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
ut.isComputingMask_ = 1;
ut.isRunningSetterMask_ = 2;
ut.isBeingObservedMask_ = 4;
ut.isPendingUnobservationMask_ = 8;
ut.diffValueMask_ = 16;
var oo = gr("ComputedValue", ut),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var Ia;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Ia || (Ia = {}));
var ja = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ha(e) {
  return e instanceof ja;
}
function Hs(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Ru(!0), r = _r(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (oo(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Nt(r), Si(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Nt(r), Si(t), !0);
        }
      }
      return (Th(e), Nt(r), Si(t), !1);
    }
  }
}
function jh(e, t, r) {
  var n = Ru(!0);
  (Th(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++P.runId));
  var i = P.trackingDerivation;
  ((P.trackingDerivation = e), P.inBatch++);
  var a;
  if (P.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new ja(o);
    }
  return (P.inBatch--, (P.trackingDerivation = i), UE(e), Si(n), a);
}
function UE(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = W.UP_TO_DATE_,
      i = 0,
      a = e.unboundDepsCount_,
      o = 0;
    o < a;
    o++
  ) {
    var s = r[o];
    (s.diffValue === 0 && ((s.diffValue = 1), i !== o && (r[i] = s), i++),
      s.dependenciesState_ > n && (n = s.dependenciesState_));
  }
  for (r.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var u = t[a];
    (u.diffValue === 0 && Lh(u, e), (u.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), $E(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ws(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Lh(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function Dh(e) {
  var t = _r();
  try {
    return e();
  } finally {
    Nt(t);
  }
}
function _r() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Nt(e) {
  P.trackingDerivation = e;
}
function Ru(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function Si(e) {
  P.allowStateReads = e;
}
function Th(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ga = function () {
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
  _a = !0,
  Mh = !1,
  P = (function () {
    var e = Ya();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (_a = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ga().version && (_a = !1),
      _a
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ga()))
        : (setTimeout(function () {
            Mh || H(35);
          }, 1),
          new ga())
    );
  })();
function zE() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (Mh = !0), _a)) {
    var e = Ya();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new ga()));
  }
}
function $E(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Lh(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Fh(e));
}
function Fh(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Ke() {
  P.inBatch++;
}
function Je() {
  if (--P.inBatch === 0) {
    qh();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ut && r.suspend_()));
    }
    P.pendingUnobservations = [];
  }
}
function Nh(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && Fh(e), !1);
}
function Bh(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function VE(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function GE(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var kt = (function () {
  function e(r, n, i, a) {
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
      (this.isTracing_ = Ia.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = a));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), qh());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Ke(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), Hs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((P.trackingContext = n), Je());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Ke(), (this.isRunning = !0));
        var i = P.trackingContext;
        P.trackingContext = this;
        var a = jh(this, n, void 0);
        ((P.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ws(this),
          ha(a) && this.reportExceptionInDerivation_(a.cause),
          Je());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (P.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (P.suppressReactionErrors || console.error(a, n),
        P.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Ke(), Ws(this), Je()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        a = function o() {
          (i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", a),
        (a[F] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (a[Symbol.dispose] = a),
        a
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    Kr(e, [
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
kt.isDisposedMask_ = 1;
kt.isScheduledMask_ = 2;
kt.isTrackPendingMask_ = 4;
kt.isRunningMask_ = 8;
kt.diffValueMask_ = 16;
var HE = 100,
  Ks = function (t) {
    return t();
  };
function qh() {
  P.inBatch > 0 || P.isRunningReactions || Ks(WE);
}
function WE() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === HE && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var Da = gr("Reaction", kt);
function KE(e) {
  var t = Ks;
  Ks = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Ei() {
  return !1;
}
function JE(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Uh = "action",
  YE = "action.bound",
  zh = "autoAction",
  XE = "autoAction.bound",
  ZE = "<unnamed action>",
  Js = $i(Uh),
  QE = $i(YE, { bound: !0 }),
  Ys = $i(zh, { autoAction: !0 }),
  ek = $i(XE, { autoAction: !0, bound: !0 });
function $h(e) {
  var t = function (n, i) {
    if (st(n)) return hr(n.name || ZE, n, e);
    if (st(i)) return hr(n, i, e);
    if (zi(i)) return (e ? Ys : Js).decorate_20223_(n, i);
    if (fr(i)) return Ui(n, i, e ? Ys : Js);
    if (fr(n)) return wt($i(e ? zh : Uh, { name: n, autoAction: e }));
  };
  return t;
}
var Ye = $h(!1);
Object.assign(Ye, Js);
var Ti = $h(!0);
Object.assign(Ti, Ys);
Ye.bound = wt(QE);
Ti.bound = wt(ek);
function Vr(e) {
  return st(e) && e.isMobxAction === !0;
}
function tk(e, t) {
  var r, n, i, a;
  t === void 0 && (t = hh);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new kt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = nk(t),
      l = !1;
    u = new kt(
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
    ((i = t) != null && (i = i.signal) != null && i.aborted) || u.schedule_(),
    u.getDisposer_((a = t) == null ? void 0 : a.signal)
  );
}
var rk = function (t) {
  return t();
};
function nk(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : rk;
}
var ik = "onBO",
  ak = "onBUO";
function ok(e, t, r) {
  return Gh(ik, e, t, r);
}
function Vh(e, t, r) {
  return Gh(ak, e, t, r);
}
function Gh(e, t, r, n) {
  var i = La(t),
    a = st(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var s = i[o];
      s && (s.delete(a), s.size === 0 && delete i[o]);
    }
  );
}
var sk = "never",
  ua = "always",
  uk = "observed";
function ck(e) {
  e.isolateGlobalState === !0 && zE();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === ua ? !0 : t === sk ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ua ? ua : r === uk;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === ua)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (P[i] = !!e[i]);
  }),
    (P.allowStateReads = !P.observableRequiresReaction),
    e.reactionScheduler && KE(e.reactionScheduler));
}
function lk(e, t, r, n) {
  var i = VS(t);
  return (
    yr(function () {
      var a = Jr(e, n)[F];
      eo(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function dk(e, t) {
  return Hh(La(e, t));
}
function Hh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = fk(e.observing_).map(Hh)),
    t
  );
}
function fk(e) {
  return Array.from(new Set(e));
}
var vk = 0;
function Wh() {
  this.message = "FLOW_CANCELLED";
}
Wh.prototype = Object.create(Error.prototype);
var hs = kh("flow"),
  pk = kh("flow.bound", { bound: !0 }),
  Gr = Object.assign(function (t, r) {
    if (zi(r)) return hs.decorate_20223_(t, r);
    if (fr(r)) return Ui(t, r, hs);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var s = this,
          u = arguments,
          c = ++vk,
          l = Ye(i + " - runid: " + c + " - init", n).apply(s, u),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Ye(i + " - runid: " + c + " - yield " + h++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Ye(i + " - runid: " + c + " - yield " + h++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(O) {
              if (st(O?.then)) {
                O.then(y, f);
                return;
              }
              return O.done ? g(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Ye(i + " - runid: " + c + " - cancel", function () {
            try {
              p && Pf(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Dr, Dr), Pf(f), d(new Wh()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, hs);
Gr.bound = wt(pk);
function Pf(e) {
  st(e.cancel) && e.cancel();
}
function Mi(e) {
  return e?.isMobXFlow === !0;
}
function hk(e, t) {
  return e ? uo(e) || !!e[F] || ku(e) || Da(e) || oo(e) : !1;
}
function Kh(e) {
  return hk(e);
}
function Mt(e, t) {
  (t === void 0 && (t = void 0), Ke());
  try {
    return e.apply(t);
  } finally {
    Je();
  }
}
function jr(e) {
  return e[F];
}
var gk = {
  has: function (t, r) {
    return jr(t).has_(r);
  },
  get: function (t, r) {
    return jr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return fr(r) ? ((i = jr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return fr(r) ? ((n = jr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = jr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return jr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function _k(e, t) {
  var r, n;
  return (
    gh(),
    (e = Jr(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, gk))
  );
}
function He(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Vi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    _h(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function We(e, t) {
  var r = _r();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && H(14), !!t);
      i++
    );
    return t;
  } finally {
    Nt(r);
  }
}
function at(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Gi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    _h(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ot(e, t) {
  var r = _r(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Nt(r);
  }
}
function Cu(e, t, r) {
  return (
    yr(function () {
      var n,
        i = Jr(e, r)[F];
      ((n = t) != null || (t = JS(e)),
        eo(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Af = "splice",
  Ot = "update",
  bk = 1e4,
  yk = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(Ta, r)
              ? Ta[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[F];
      return (
        r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : i.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      H(15);
    },
  },
  Pu = (function () {
    function e(r, n, i, a) {
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
        (this.owned_ = i),
        (this.legacyMode_ = a),
        (this.atom_ = new Qt(r)),
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
        return Vi(this, n);
      }),
      (t.observe_ = function (n, i) {
        return (
          i === void 0 && (i = !1),
          i &&
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
          Gi(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && H("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var a = new Array(n - i), o = 0; o < n - i; o++) a[o] = void 0;
            this.spliceWithArray_(i, 0, a);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        (n !== this.lastKnownLength_ && H(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && tg(n + i + 1));
      }),
      (t.spliceWithArray_ = function (n, i, a) {
        var o = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > s ? (n = s) : n < 0 && (n = Math.max(0, s + n)),
          arguments.length === 1
            ? (i = s - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, s - n))),
          a === void 0 && (a = zs),
          He(this))
        ) {
          var u = We(this, { object: this.proxy_, type: Af, index: n, removedCount: i, added: a });
          if (!u) return zs;
          ((i = u.removedCount), (a = u.added));
        }
        if (
          ((a =
            a.length === 0
              ? a
              : a.map(function (d) {
                  return o.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = a.length - i;
          this.updateArrayLength_(s, c);
        }
        var l = this.spliceItemsIntoValues_(n, i, a);
        return (
          (i !== 0 || a.length !== 0) && this.notifyArraySplice_(n, a, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, a) {
        if (a.length < bk) {
          var o;
          return (o = this.values_).splice.apply(o, [n, i].concat(a));
        } else {
          var s = this.values_.slice(n, n + i),
            u = this.values_.slice(n + i);
          this.values_.length += a.length - i;
          for (var c = 0; c < a.length; c++) this.values_[n + c] = a[c];
          for (var l = 0; l < u.length; l++) this.values_[n + a.length + l] = u[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, a) {
        var o = !this.owned_ && Ei(),
          s = at(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Ot,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), s && ot(this, u));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && Ei(),
          s = at(this),
          u =
            s || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Af,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), s && ot(this, u));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, i) {
        var a = this.values_;
        if ((this.legacyMode_ && n > a.length && H(17, n, a.length), n < a.length)) {
          this.atom_;
          var o = a[n];
          if (He(this)) {
            var s = We(this, { type: Ot, object: this.proxy_, index: n, newValue: i });
            if (!s) return;
            i = s.newValue;
          }
          i = this.enhancer_(i, o);
          var u = i !== o;
          u && ((a[n] = i), this.notifyArrayChildUpdate_(n, i, o));
        } else {
          for (var c = new Array(n + 1 - a.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = i), this.spliceWithArray_(a.length, 0, c));
        }
      }),
      e
    );
  })();
function mk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    gh(),
    yr(function () {
      var i = new Pu(r, t, n, !1);
      yh(i.values_, F, i);
      var a = new Proxy(i.values_, yk);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Ta = {
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
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[F];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function (t, r, n) {
    return this[F].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[F].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
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
ie("every", dt);
ie("filter", dt);
ie("find", dt);
ie("findIndex", dt);
ie("findLast", dt);
ie("findLastIndex", dt);
ie("flatMap", dt);
ie("forEach", dt);
ie("map", dt);
ie("some", dt);
ie("toReversed", dt);
ie("reduce", Jh);
ie("reduceRight", Jh);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Ta[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function dt(e) {
  return function (t, r) {
    var n = this,
      i = this[F];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function (o, s) {
      return t.call(r, o, s, n);
    });
  };
}
function Jh(e) {
  return function () {
    var t = this,
      r = this[F];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (a, o, s) {
        return i(a, o, s, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var wk = gr("ObservableArrayAdministration", Pu);
function so(e) {
  return Za(e) && wk(e[F]);
}
var Ok = {},
  Kt = "add",
  Ma = "delete",
  Yh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = pr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = Ok),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        st(Map) || H(18),
        yr(function () {
          ((a.keysAtom_ = Sh("ObservableMap.keys()")),
            (a.data_ = new Map()),
            (a.hasMap_ = new Map()),
            r && a.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var i = this;
        if (!P.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new cr(this.has_(n), to, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Vh(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (He(this)) {
          var o = We(this, { type: a ? Ot : Kt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, He(this))) {
          var a = We(this, { type: Ma, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = Ei(),
            s = at(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ma,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Mt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            s && ot(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== P.UNCHANGED)) {
          var o = Ei(),
            s = at(this),
            u =
              s || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ot,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), s && ot(this, u));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Mt(function () {
            var c,
              l = new cr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = Ei(),
          s = at(this),
          u =
            s || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Kt,
                  object: this,
                  name: n,
                  newValue: i,
                }
              : null;
        s && ot(this, u);
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
          i = this.keys();
        return If({
          next: function () {
            var o = i.next(),
              s = o.done,
              u = o.value;
            return { done: s, value: s ? void 0 : n.get(u) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return If({
          next: function () {
            var o = i.next(),
              s = o.done,
              u = o.value;
            return { done: s, value: s ? void 0 : [u, n.get(u)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var a = Tr(this), o; !(o = a()).done; ) {
          var s = o.value,
            u = s[0],
            c = s[1];
          n.call(i, c, u, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          br(n) && (n = new Map(n)),
          Mt(function () {
            Yt(n)
              ? $S(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      s = a[1];
                    return i.set(o, s);
                  })
                : Wr(n)
                  ? (zS(n) || H(19, n),
                    n.forEach(function (a, o) {
                      return i.set(o, a);
                    }))
                  : n != null && H(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Mt(function () {
          Dh(function () {
            for (var i = Tr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Mt(function () {
            for (
              var a = Sk(n), o = new Map(), s = !1, u = Tr(i.data_.keys()), c;
              !(c = u()).done;
            ) {
              var l = c.value;
              if (!a.has(l)) {
                var d = i.delete(l);
                if (d) s = !0;
                else {
                  var p = i.data_.get(l);
                  o.set(l, p);
                }
              }
            }
            for (var v = Tr(a.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                _ = f[1],
                b = i.data_.has(h);
              if ((i.set(h, _), i.data_.has(h))) {
                var y = i.data_.get(h);
                (o.set(h, y), b || (s = !0));
              }
            }
            if (!s)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), w = o.keys(), S = O.next(), k = w.next(); !S.done; ) {
                  if (S.value !== k.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (k = w.next()));
                }
            i.data_ = o;
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
      (t.observe_ = function (n, i) {
        return Gi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Vi(this, n);
      }),
      Kr(e, [
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
  br = gr("ObservableMap", Yh);
function If(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Iu(e));
}
function Sk(e) {
  if (Wr(e) || br(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Yt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var Ek = {},
  Xh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = pr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = Ek),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        st(Set) || H(22),
        (this.enhancer_ = function (o, s) {
          return n(o, s, i);
        }),
        yr(function () {
          ((a.atom_ = Sh(a.name_)), r && a.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Mt(function () {
          Dh(function () {
            for (var i = Tr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Tr(this), o; !(o = a()).done; ) {
          var s = o.value;
          n.call(i, s, s, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, He(this))) {
          var a = We(this, { type: Kt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Mt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            s = at(this),
            u =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Kt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && ot(this, u);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (He(this)) {
          var a = We(this, { type: Ma, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            s = at(this),
            u =
              s || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Ma,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Mt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            s && ot(this, u),
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
        return jf({
          next: function () {
            var a = n.next(),
              o = a.value,
              s = a.done;
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
          i = this.data_.values();
        return jf({
          next: function () {
            var o = i.next(),
              s = o.value,
              u = o.done;
            return u ? { value: void 0, done: u } : { value: n.dehanceValue_(s), done: u };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Tt(n) && !gt(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Tt(n) && !gt(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Tt(n) && !gt(n)) return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Tt(n) && !gt(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          gt(n) && (n = new Set(n)),
          Mt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Tt(n)
                ? (i.clear(),
                  n.forEach(function (a) {
                    return i.add(a);
                  }))
                : n != null && H("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return Gi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Vi(this, n);
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
      Kr(e, [
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
  gt = gr("ObservableSet", Xh);
function jf(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Iu(e));
}
var Df = Object.create(null),
  Tf = "remove",
  Zh = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = yE),
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
        (this.name_ = i),
        (this.defaultAnnotation_ = a),
        (this.keysAtom_ = new Qt("ObservableObject.keys")),
        (this.isPlainObject_ = Yt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof ut) return (a.set(i), !0);
        if (He(this)) {
          var o = We(this, { type: Ot, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== P.UNCHANGED)) {
          var s = at(this),
            u = !1,
            c =
              s || u
                ? {
                    type: Ot,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), s && ot(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (P.trackingDerivation && !Ft(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Ft(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, i)
              : a
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
            : this.extend_(
                n,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                a,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!P.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new cr(n in this.target_, to, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[_t]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Xa; ) {
            var s = Ca(o, n);
            if (s) {
              var u = i.make_(this, n, s, o);
              if (u === 0) return;
              if (u === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Lf(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var s = a.extend_(this, n, i, o);
        return (s && Lf(this, a, n), s);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Ke();
          var o = this.delete_(n);
          if (!o) return o;
          if (He(this)) {
            var s = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: i.value,
            });
            if (!s) return null;
            var u = s.newValue;
            i.value !== u && (i = vr({}, i, { value: u }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else mt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Je();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Ke();
          var s = this.delete_(n);
          if (!s) return s;
          if (He(this)) {
            var u = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: i,
            });
            if (!u) return null;
            i = u.newValue;
          }
          var c = Mf(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else mt(this.target_, n, l);
          var d = new cr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Ke();
          var o = this.delete_(n);
          if (!o) return o;
          if (He(this)) {
            var s = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var u = Mf(n),
            c = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else mt(this.target_, n, c);
          (this.values_.set(n, new ut(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (He(this)) {
          var a = We(this, { object: this.proxy_ || this.target_, name: n, type: Tf });
          if (!a) return null;
        }
        try {
          var o;
          Ke();
          var s = at(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var d;
            l = (d = Ca(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof cr && (l = c.value_), Bh(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            s || u)
          ) {
            var p = {
              type: Tf,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && ot(this, p);
          }
        } finally {
          Je();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Gi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Vi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = at(this),
          s = !1;
        if (o || s) {
          var u =
            o || s
              ? {
                  type: Kt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          o && ot(this, u);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), eo(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Jr(e, t) {
  var r;
  if (Ft(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Zh(e, new Map(), String(n), AE(t));
  return (Qa(e, F, i), e);
}
var kk = gr("ObservableObjectAdministration", Zh);
function Mf(e) {
  return (
    Df[e] ||
    (Df[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function uo(e) {
  return Za(e) ? kk(e[F]) : !1;
}
function Lf(e, t, r) {
  var n;
  (n = e.target_[_t]) == null || delete n[r];
}
var xk = eg(0),
  Rk = (function () {
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
  gs = 0,
  Qh = function () {};
function Ck(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Ck(Qh, Array.prototype);
var Au = (function (e) {
  function t(n, i, a, o) {
    var s;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (s = e.call(this) || this),
      yr(function () {
        var u = new Pu(a, i, o, !0);
        ((u.proxy_ = s),
          yh(s, F, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          Rk && Object.defineProperty(s, "0", xk));
      }),
      s
    );
  }
  Oh(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (s) {
          return so(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return Iu({
        next: function () {
          return i < n.length ? { value: n[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Kr(t, [
      {
        key: "length",
        get: function () {
          return this[F].getArrayLength_();
        },
        set: function (i) {
          this[F].setArrayLength_(i);
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
})(Qh);
Object.entries(Ta).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Qa(Au.prototype, t, r);
});
function eg(e) {
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
function Pk(e) {
  mt(Au.prototype, "" + e, eg(e));
}
function tg(e) {
  if (e > gs) {
    for (var t = gs; t < e + 100; t++) Pk(t);
    gs = e;
  }
}
tg(1e3);
function Ak(e, t, r) {
  return new Au(e, t, r);
}
function La(e, t) {
  if (typeof e == "object" && e !== null) {
    if (so(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (gt(e)) return e.atom_;
    if (br(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Xs(e)), r);
    }
    if (uo(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, Xs(e)), n);
    }
    if (ku(e) || oo(e) || Da(e)) return e;
  } else if (st(e) && Da(e[F])) return e[F];
  H(28);
}
function Ik(e, t) {
  if ((e || H(29), ku(e) || oo(e) || Da(e) || br(e) || gt(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function Xs(e, t) {
  var r;
  if (t !== void 0) r = La(e, t);
  else {
    if (Vr(e)) return e.name;
    uo(e) || br(e) || gt(e) ? (r = Ik(e)) : (r = La(e));
  }
  return r.name_;
}
function yr(e) {
  var t = _r(),
    r = io(!0);
  Ke();
  try {
    return e();
  } finally {
    (Je(), ao(r), Nt(t));
  }
}
var Ff = Xa.toString;
function rg(e, t, r) {
  return (r === void 0 && (r = -1), Zs(e, t, r));
}
function Zs(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Ff.call(e);
  if (o !== Ff.call(t)) return !1;
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
  ((e = Nf(e)), (t = Nf(t)));
  var s = o === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(st(u) && u instanceof u && st(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (i = i || []));
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Zs(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(Ft(t, g) && Zs(e[g], t[g], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function Nf(e) {
  return so(e) ? e.slice() : Wr(e) || br(e) || Tt(e) || gt(e) ? Array.from(e.entries()) : e;
}
var Bf,
  jk = ((Bf = Ya().Iterator) == null ? void 0 : Bf.prototype) || {};
function Iu(e) {
  return ((e[Symbol.iterator] = Dk), Object.assign(Object.create(jk), e));
}
function Dk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ya();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: JE, extras: { getDebugName: Xs }, $mobx: F });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Cu) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Tk(e) {
  e();
}
function Mk(e) {
  (e || (e = Tk), ck({ reactionScheduler: e }));
}
function Lk(e) {
  return dk(e);
}
var Fk = 1e4,
  Nk = 1e4,
  Bk = (function () {
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
            (n === void 0 && (n = Fk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var i = Date.now();
            (r.registrations.forEach(function (a, o) {
              i - a.registeredAt >= n && (r.finalize(a.value), r.registrations.delete(o));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Nk));
        },
      }),
      e
    );
  })(),
  qk = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Bk,
  Li = new qk(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  _s = { exports: {} },
  bs = {};
var qf;
function Uk() {
  if (qf) return bs;
  qf = 1;
  var e = ct();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function s(d, p) {
    var v = p(),
      g = n({ inst: { value: v, getSnapshot: p } }),
      f = g[0].inst,
      h = g[1];
    return (
      a(
        function () {
          ((f.value = v), (f.getSnapshot = p), u(f) && h({ inst: f }));
        },
        [d, v, p],
      ),
      i(
        function () {
          return (
            u(f) && h({ inst: f }),
            d(function () {
              u(f) && h({ inst: f });
            })
          );
        },
        [d],
      ),
      o(v),
      v
    );
  }
  function u(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var v = p();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function c(d, p) {
    return p();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? c
      : s;
  return (
    (bs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    bs
  );
}
var Uf;
function zk() {
  return (Uf || ((Uf = 1), (_s.exports = Uk())), _s.exports);
}
var $k = zk();
function zf(e) {
  e.reaction = new kt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Vk(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          Li.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (zf(n), (n.stateVersion = Symbol())),
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
  var i = r.current;
  (i.reaction || (zf(i), Li.register(r, i, i)),
    E.useDebugValue(i.reaction, Lk),
    $k.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (s) {
        o = s;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var ys,
  ms,
  ng = typeof Symbol == "function" && Symbol.for,
  Gk =
    (ms =
      (ys = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || ys === void 0
        ? void 0
        : ys.configurable) !== null && ms !== void 0
      ? ms
      : !1,
  $f = ng
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Vf = ng
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function Hk(e, t) {
  var r;
  if (Vf && e.$$typeof === Vf)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if ($f && e.$$typeof === $f && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (s, u) {
    return Vk(function () {
      return i(s, u);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Gk && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = m.forwardRef(o)),
    (o = m.memo(o)),
    Kk(e, o),
    o
  );
}
var Wk = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Kk(e, t) {
  Object.keys(e).forEach(function (r) {
    Wk[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ws;
Mk(Fa.unstable_batchedUpdates);
ws = Li.finalizeAllImmediately;
function Jk(e, t) {
  if (Gf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !Gf(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function Gf(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Hf = Symbol("patchMixins"),
  ig = Symbol("patchedDefinition");
function Yk(e, t) {
  var r = (e[Hf] = e[Hf] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Wf(e, t) {
  for (var r = this, n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, i)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, i);
        }));
  }
}
function Kf(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    Wf.call.apply(Wf, [this, e, t].concat(a));
  };
  return r;
}
function Xk(e, t, r) {
  var n = Yk(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[ig])) {
    var a = e[t],
      o = ag(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function ag(e, t, r, n, i) {
  var a,
    o = Kf(i, n);
  return (
    (a = {}),
    (a[ig] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (u) {
      if (this === e) o = Kf(u, n);
      else {
        var c = ag(this, t, r, n, u);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var Jf = Symbol("ObserverAdministration"),
  Yf = Symbol("isMobXReactObserver");
function Qs(e) {
  var t;
  return (t = e[Jf]) != null
    ? t
    : (e[Jf] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: eu(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Zk(e) {
  var t = e.prototype;
  if (e[Yf]) {
    var r = eu(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Yf] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Xf;
    else if (t.shouldComponentUpdate !== Xf)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = eu(e);
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
        value: Qk.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        s = Qs(this);
      return (
        (s.mounted = !0),
        Li.unregister(this),
        (s.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    Xk(t, "componentWillUnmount", function () {
      var o,
        s = Qs(this);
      ((o = s.reaction) == null || o.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function eu(e) {
  return e.displayName || e.name || "<component>";
}
function Qk(e) {
  var t = e.bind(this),
    r = Qs(this);
  function n() {
    r.reaction || ((r.reaction = ex(r)), r.mounted || Li.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = qE(!1, t);
        } catch (o) {
          i = o;
        }
      }),
      i)
    )
      throw i;
    return a;
  }
  return n;
}
function ex(e) {
  return new kt(e.name + ".render()", function () {
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
function Xf(e, t) {
  return this.state !== t ? !0 : !Jk(this.props, e);
}
function co(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? Zk(e)
      : Hk(e)
  );
}
function tu() {
  return (
    (tu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    tu.apply(null, arguments)
  );
}
function tx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var rx = ["children"],
  Zf = E.createContext({});
function og(e) {
  var t = e.children,
    r = tx(e, rx),
    n = E.useContext(Zf),
    i = E.useRef(tu({}, n, r)),
    a = i.current;
  return E.createElement(Zf.Provider, { value: a }, t);
}
og.displayName = "MobXProvider";
E.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var nx = Object.defineProperty,
  ix = Object.getOwnPropertyDescriptor,
  qt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? ix(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && nx(t, r, i), i);
  };
class Rt {
  constructor() {
    ((this.isLoading = !0), Cu(this));
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
qt([oe], Rt.prototype, "isLoading", 2);
qt([oe], Rt.prototype, "users", 2);
qt([oe], Rt.prototype, "duplicates", 2);
qt([oe], Rt.prototype, "sort", 2);
qt([Ye.bound], Rt.prototype, "saveUsers", 1);
qt([Ye.bound], Rt.prototype, "saveSort", 1);
qt([Ye.bound], Rt.prototype, "saveDuplicates", 1);
qt([Ye], Rt.prototype, "loading", 1);
qt([Ye], Rt.prototype, "stopLoading", 1);
const ax = new Rt();
var ox = Object.defineProperty,
  sx = Object.getOwnPropertyDescriptor,
  sg = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? sx(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && ox(t, r, i), i);
  };
class ju {
  constructor() {
    ((this.state = "ROOT"), Cu(this));
  }
  saveState(t) {
    this.state = t;
  }
}
sg([oe], ju.prototype, "state", 2);
sg([Ye.bound], ju.prototype, "saveState", 1);
const ux = new ju();
class cx {
  constructor() {
    ((this.usersStore = ax), (this.stateStore = ux));
  }
}
const ug = new cx(),
  lx = m.createContext(ug),
  lo = () => m.useContext(lx),
  dx = co(() => {
    const { usersStore: e, stateStore: t } = lo(),
      r = vh(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? M.jsx("div", { children: "User Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(Eu, {
                head: r,
                onSort: async (i) => {
                  let a = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const o = await Lt.invoke("fetch", { sortType: a });
                    (e.saveUsers(o), e.saveSort(a));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: n.map((i, a) => {
                  const o = [
                    { key: "id", content: i.id },
                    { key: "name", content: i.name },
                    { key: "email", content: i.email },
                    {
                      key: "delete",
                      content: M.jsx("div", {
                        children: M.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Lt.invoke("delete", { id: i.id }));
                              const s = await Lt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(s);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    },
                  ];
                  return { key: `row-${a}-${i.id}`, cells: o };
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
                    const i = await Lt.invoke("duplicate", { sortType: e.sort });
                    (e.saveDuplicates(i), t.saveState("DUPLICATE"));
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
  fx = co(() => {
    const { usersStore: e, stateStore: t } = lo(),
      [r, n] = m.useState({}),
      i = (o) => {
        const { name: s, value: u, type: c } = o.target;
        n((l) => ({ ...l, [s]: c === "number" ? Number(u) : u }));
      },
      a = async (o) => {
        (o.preventDefault(), await Lt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await Lt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
        } finally {
          e.stopLoading();
        }
      };
    return M.jsx("div", {
      children: M.jsxs("form", {
        onSubmit: a,
        children: [
          M.jsxs(
            "div",
            {
              children: [
                M.jsx("label", { htmlFor: "name", children: "Name" }),
                M.jsx("br", {}),
                M.jsx("input", { type: "text", id: "name", name: "name", onChange: i }),
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
                M.jsx("input", { type: "text", id: "email", name: "email", onChange: i }),
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
  vx = co(() => {
    const { usersStore: e } = lo(),
      t = vh(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? M.jsx("div", { children: "Duplicate Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(Eu, {
                head: t,
                onSort: async (n) => {
                  let i = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const a = await Lt.invoke("duplicate", { sortType: i });
                    e.saveDuplicates(a);
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: r.map((n, i) => {
                  const a = [
                    { key: "name", content: n.name },
                    { key: "email", content: n.email },
                    { key: "count", content: n.count },
                  ];
                  return { key: `row-${i}`, cells: a };
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
function px() {
  const { usersStore: e, stateStore: t } = lo();
  if (
    (m.useEffect(() => {
      (async () => {
        try {
          const n = await Lt.invoke("fetch", { type: "USER", sortType: e.sort });
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
            M.jsx(dx, {}),
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
            M.jsx(vx, {}),
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
            M.jsx(fx, {}),
          ],
        }),
      });
    default:
      return M.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const hx = co(px),
  gx = document.getElementById("root"),
  _x = vg.createRoot(gx),
  Qf = () => {
    _x.render(M.jsx(og, { ...ug, children: M.jsx(hx, {}) }));
  };
Lt.view.theme
  .enable()
  .then(() => {
    Qf();
  })
  .catch((e) => {
    (console.error(e.message), Qf());
  });
export {
  E as R,
  Ob as T,
  Be as _,
  ve as a,
  Ps as b,
  fe as c,
  Ne as d,
  J as e,
  K as f,
  x as g,
  ne as h,
  Ga as i,
  De as j,
  te as k,
  jm as l,
  Dt as m,
  xt as n,
  R as o,
  mb as p,
  z_ as q,
  m as r,
  _b as s,
  r1 as w,
};
