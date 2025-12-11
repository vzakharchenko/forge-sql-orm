const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-rttqV1lv.js",
      "./client-core-vendor-B82q9aJI.js",
      "./body-Bdbk42PN.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./lodash-vendor--Z7471Vs.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as ft, a as qa, c as yg } from "./react-dom-vendor-B_rzBOmK.js";
import { g as ou, r as Jt, a as Qt, b as xt, s as Ge } from "./client-core-vendor-B82q9aJI.js";
import { r as mg } from "./lodash-vendor--Z7471Vs.js";
function wg(e, t) {
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
var mo = { exports: {} },
  Zr = {};
var Vu;
function Og() {
  if (Vu) return Zr;
  Vu = 1;
  var e = ft(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      p = null,
      v = null;
    (c !== void 0 && (p = "" + c),
      s.key !== void 0 && (p = "" + s.key),
      s.ref !== void 0 && (v = s.ref));
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: p, ref: v, props: d, _owner: i.current };
  }
  return ((Zr.Fragment = r), (Zr.jsx = o), (Zr.jsxs = o), Zr);
}
var Gu;
function Sg() {
  return (Gu || ((Gu = 1), (mo.exports = Og())), mo.exports);
}
var k = Sg(),
  wo = {},
  xs = function (e, t) {
    return (
      (xs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      xs(e, t)
    );
  };
function cv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  xs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ma = function () {
  return (
    (ma =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    ma.apply(this, arguments)
  );
};
function lv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function dv(e, t, r, n) {
  var i = arguments.length,
    a = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, t, r, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return (i > 3 && a && Object.defineProperty(t, r, a), a);
}
function fv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function vv(e, t, r, n, i, a) {
  function o(_) {
    if (_ !== void 0 && typeof _ != "function") throw new TypeError("Function expected");
    return _;
  }
  for (
    var u = n.kind,
      s = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      c = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
      d,
      p = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var h = {};
    for (var f in n) h[f] = f === "access" ? {} : n[f];
    for (var f in n.access) h.access[f] = n.access[f];
    h.addInitializer = function (_) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var g = (0, r[v])(u === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && i.unshift(d));
    } else (d = o(g)) && (u === "field" ? i.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (p = !0));
}
function pv(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function hv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function gv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function _v(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function bv(e, t, r, n) {
  function i(a) {
    return a instanceof r
      ? a
      : new r(function (o) {
          o(a);
        });
  }
  return new (r || (r = Promise))(function (a, o) {
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
      l.done ? a(l.value) : i(l.value).then(u, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function yv(e, t) {
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
var Ba = Object.create
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
function mv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ba(t, e, r);
}
function wa(e) {
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
function su(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function wv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(su(arguments[t]));
  return e;
}
function Ov() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, u = a.length; o < u; o++, i++) n[i] = a[o];
  return n;
}
function Sv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Fr(e) {
  return this instanceof Fr ? ((this.v = e), this) : new Fr(e);
}
function Ev(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    i,
    a = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(v) {
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function u(v, h) {
    n[v] &&
      ((i[v] = function (f) {
        return new Promise(function (g, _) {
          a.push([v, f, g, _]) > 1 || s(v, f);
        });
      }),
      h && (i[v] = h(i[v])));
  }
  function s(v, h) {
    try {
      c(n[v](h));
    } catch (f) {
      p(a[0][3], f);
    }
  }
  function c(v) {
    v.value instanceof Fr ? Promise.resolve(v.value.v).then(l, d) : p(a[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, h) {
    (v(h), a.shift(), a.length && s(a[0][0], a[0][1]));
  }
}
function kv(e) {
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
function xv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof wa == "function" ? wa(e) : e[Symbol.iterator]()),
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
        return new Promise(function (u, s) {
          ((o = e[a](o)), i(u, s, o.done, o.value));
        });
      };
  }
  function i(a, o, u, s) {
    Promise.resolve(s).then(function (c) {
      a({ value: c, done: u });
    }, o);
  }
}
function Rv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Eg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Rs = function (e) {
    return (
      (Rs =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Rs(e)
    );
  };
function Cv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Rs(e), n = 0; n < r.length; n++) r[n] !== "default" && Ba(t, e, r[n]);
  return (Eg(t, e), t);
}
function Pv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Av(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Iv(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function jv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Dv(e, t, r) {
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
var kg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Tv(e) {
  function t(a) {
    ((e.error = e.hasError ? new kg(a, e.error, "An error was suppressed during disposal.") : a),
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
function Mv(e, t) {
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
const xg = {
    __extends: cv,
    __assign: ma,
    __rest: lv,
    __decorate: dv,
    __param: fv,
    __esDecorate: vv,
    __runInitializers: pv,
    __propKey: hv,
    __setFunctionName: gv,
    __metadata: _v,
    __awaiter: bv,
    __generator: yv,
    __createBinding: Ba,
    __exportStar: mv,
    __values: wa,
    __read: su,
    __spread: wv,
    __spreadArrays: Ov,
    __spreadArray: Sv,
    __await: Fr,
    __asyncGenerator: Ev,
    __asyncDelegator: kv,
    __asyncValues: xv,
    __makeTemplateObject: Rv,
    __importStar: Cv,
    __importDefault: Pv,
    __classPrivateFieldGet: Av,
    __classPrivateFieldSet: Iv,
    __classPrivateFieldIn: jv,
    __addDisposableResource: Dv,
    __disposeResources: Tv,
    __rewriteRelativeImportExtension: Mv,
  },
  Rg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Dv,
        get __assign() {
          return ma;
        },
        __asyncDelegator: kv,
        __asyncGenerator: Ev,
        __asyncValues: xv,
        __await: Fr,
        __awaiter: bv,
        __classPrivateFieldGet: Av,
        __classPrivateFieldIn: jv,
        __classPrivateFieldSet: Iv,
        __createBinding: Ba,
        __decorate: dv,
        __disposeResources: Tv,
        __esDecorate: vv,
        __exportStar: mv,
        __extends: cv,
        __generator: yv,
        __importDefault: Pv,
        __importStar: Cv,
        __makeTemplateObject: Rv,
        __metadata: _v,
        __param: fv,
        __propKey: hv,
        __read: su,
        __rest: lv,
        __rewriteRelativeImportExtension: Mv,
        __runInitializers: pv,
        __setFunctionName: gv,
        __spread: wv,
        __spreadArray: Sv,
        __spreadArrays: Ov,
        __values: wa,
        default: xg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rt = ou(Rg);
var en = {},
  Hu;
function Cg() {
  return (
    Hu ||
      ((Hu = 1),
      Object.defineProperty(en, "__esModule", { value: !0 }),
      (en.NavigationTarget = void 0),
      (en.NavigationTarget = {
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
    en
  );
}
var Oo = {},
  So = {},
  tn = {},
  rn = {},
  Wu;
function _e() {
  if (Wu) return rn;
  ((Wu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((rn.BridgeAPIError = e), rn);
}
var Ku;
function se() {
  if (Ku) return tn;
  ((Ku = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.getCallBridge = void 0));
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
  return ((tn.getCallBridge = r), tn);
}
var nn = {},
  Yu;
function za() {
  if (Yu) return nn;
  ((Yu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.withRateLimiter = void 0));
  const e = _e(),
    t = (r, n, i, a) => {
      let o = Date.now(),
        u = 0;
      return async (...s) => {
        const c = Date.now();
        if ((c - o > i && ((o = c), (u = 0)), u >= n))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((u = u + 1), r(...s));
      };
    };
  return ((nn.withRateLimiter = t), nn);
}
var Ju;
function Pg() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = se(),
          r = _e(),
          n = za(),
          i = (0, t.getCallBridge)(),
          a = (s) => {
            if (s && Object.values(s).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (s, c) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (a(c), i("invoke", { functionKey: s, payload: c }));
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
      })(So)),
    So
  );
}
var Xu;
function qi() {
  return (
    Xu ||
      ((Xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Pg(), e));
      })(Oo)),
    Oo
  );
}
var Eo = {},
  an = {},
  ko = {},
  Qu;
function Lv() {
  return (
    Qu ||
      ((Qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = se(),
          r = _e(),
          n = za(),
          i = 500,
          a = 25,
          o = 1e3 * a;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (p) => {
            s(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await u("invoke", v),
              { success: f, payload: g, error: _ } = h ?? {},
              b = { ...(f ? g : _) };
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
      })(ko)),
    ko
  );
}
var Zu;
function Ag() {
  if (Zu) return an;
  ((Zu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.invokeRemote = void 0));
  const e = Lv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((an.invokeRemote = t), an);
}
var on = {},
  ec;
function Ig() {
  if (ec) return on;
  ((ec = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.invokeService = void 0));
  const e = Lv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((on.invokeService = t), on);
}
var tc;
function jg() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = rt;
        (t.__exportStar(Ag(), e), t.__exportStar(Ig(), e));
      })(Eo)),
    Eo
  );
}
var xo = {},
  sn = {},
  un = {},
  rc;
function Dg() {
  if (rc) return un;
  ((rc = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.submit = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((un.submit = n), un);
}
var cn = {},
  nc;
function Tg() {
  if (nc) return cn;
  ((nc = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.close = void 0));
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
  return ((cn.close = n), cn);
}
var ln = {},
  ic;
function Mg() {
  if (ic) return ln;
  ((ic = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.open = void 0));
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
  return ((ln.open = n), ln);
}
var dn = {},
  ac;
function Lg() {
  if (ac) return dn;
  ((ac = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.refresh = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((dn.refresh = n), dn);
}
var fn = {},
  oc;
function Ng() {
  if (oc) return fn;
  ((oc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.createHistory = void 0));
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
  return ((fn.createHistory = r), fn);
}
var vn = {},
  Ro = {},
  Dt = {},
  sc;
function Nv() {
  return (
    sc ||
      ((sc = 1),
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
var tr = {},
  uc;
function Fg() {
  if (uc) return tr;
  ((uc = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.TranslationsGetter = tr.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  tr.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, a = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: u } = a;
      if (!u) {
        let s;
        return (
          o.locales.includes(i) && (s = await this.getTranslationResource(i)),
          { translations: s ?? null, locale: i }
        );
      }
      for (const s of this.getLocaleLookupOrder(i, o)) {
        const c = await this.getTranslationResource(s);
        if (c) return { translations: c, locale: s };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const a = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(i, a);
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
      const { locales: o, fallback: u } = a,
        s = [i],
        c = u[i];
      return (
        c && Array.isArray(c) && c.length > 0 && s.push(...c),
        e(s, a.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return ((tr.TranslationsGetter = r), tr);
}
var pn = {},
  Co = {},
  cc;
function Fv() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = rt.__importDefault(mg()),
          n = (a, o, u) => {
            const s = a[u];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const i = (a, o) => {
          let u = a[o];
          if (!u) {
            const s = o.split(".");
            s.length > 1 && (u = (0, r.default)(a, s, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = i;
      })(Co)),
    Co
  );
}
var lc;
function qg() {
  if (lc) return pn;
  ((lc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.Translator = void 0));
  const e = Fv();
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
  return ((pn.Translator = t), pn);
}
var hn = {},
  dc;
function Bg() {
  if (dc) return hn;
  ((dc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.ensureLocale = void 0));
  const e = Nv(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, o) => {
        const [u] = o.split("-");
        return (a[u] || (a[u] = o), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (a) => {
      const o = a.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((hn.ensureLocale = i), hn);
}
var Po = {},
  fc;
function zg() {
  return (
    fc ||
      ((fc = 1),
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
                    Object.entries(p).flatMap(([h, f]) => {
                      const g = [...v, h];
                      return r(f)
                        ? [{ propertyPath: g, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((_) => d(_, g))
                          : d(f, g);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !i(l) && d && Array.isArray(d) && d.length > 0 ? d.map((p) => [p, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Po)),
    Po
  );
}
var Ao = {},
  vc;
function Ug() {
  return (vc || ((vc = 1), Object.defineProperty(Ao, "__esModule", { value: !0 })), Ao);
}
var pc;
function qv() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = rt;
        (t.__exportStar(Nv(), e),
          t.__exportStar(Fg(), e),
          t.__exportStar(qg(), e),
          t.__exportStar(Bg(), e));
        var r = Fv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = zg();
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
          t.__exportStar(Ug(), e));
      })(Ro)),
    Ro
  );
}
var hc;
function $g() {
  if (hc) return vn;
  ((hc = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getContext = void 0));
  const e = se(),
    t = qv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((vn.getContext = n), vn);
}
var gn = {},
  gc;
function Vg() {
  if (gc) return gn;
  ((gc = 1),
    Object.defineProperty(gn, "__esModule", { value: !0 }),
    (gn.changeWindowTitle = void 0));
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
  return ((gn.changeWindowTitle = n), gn);
}
var _n = {},
  _c;
function Gg() {
  if (_c) return _n;
  ((_c = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.theme = void 0));
  const t = (0, se().getCallBridge)();
  return ((_n.theme = { enable: () => t("enableTheming") }), _n);
}
var bn = {},
  yn = {},
  Io = {},
  rr = {},
  bc;
function Bv() {
  if (bc) return rr;
  ((bc = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.blobToBase64 = rr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  rr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((rr.blobToBase64 = t), rr);
}
var yc;
function Hg() {
  return (
    yc ||
      ((yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Bv(),
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
      })(Io)),
    Io
  );
}
var mc;
function zv() {
  if (mc) return yn;
  ((mc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.events = void 0));
  const e = se(),
    t = Hg(),
    r = (0, e.getCallBridge)(),
    n = async (a, o) => {
      let u = o;
      return (
        (0, t.containsBlobs)(o) && (u = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: a, payload: u })
      );
    },
    i = (a, o) =>
      r("on", {
        event: a,
        callback: (s) => {
          let c = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (c = (0, t.deserialiseBlobsInPayload)(s)),
            o(c)
          );
        },
      });
  return ((yn.events = { emit: n, on: i }), yn);
}
var wc;
function Wg() {
  if (wc) return bn;
  ((wc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.emitReadyEvent = void 0));
  const e = zv(),
    t = Hv(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((bn.emitReadyEvent = n), bn);
}
const Kg = "modulepreload",
  Yg = function (e, t) {
    return new URL(e, t).href;
  },
  Oc = {},
  Uv = function (t, r, n) {
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
        u = document.querySelector("meta[property=csp-nonce]"),
        s = u?.nonce || u?.getAttribute("nonce");
      i = c(
        r.map((l) => {
          if (((l = Yg(l, n)), l in Oc)) return;
          Oc[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = o.length - 1; h >= 0; h--) {
              const f = o[h];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Kg),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            s && v.setAttribute("nonce", s),
            document.head.appendChild(v),
            d)
          )
            return new Promise((h, f) => {
              (v.addEventListener("load", h),
                v.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function a(o) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = o), window.dispatchEvent(u), !u.defaultPrevented)) throw o;
    }
    return i.then((o) => {
      for (const u of o || []) u.status === "rejected" && a(u.reason);
      return t().catch(a);
    });
  };
var mn = {},
  jo = {},
  wn = {},
  Qi = {},
  Sc;
function $v() {
  if (Sc) return Qi;
  ((Sc = 1), Object.defineProperty(Qi, "__esModule", { value: !0 }), (Qi.default = r));
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
  return Qi;
}
var Sr = {},
  On = {},
  Sn = {},
  Ec;
function Jg() {
  if (Ec) return Sn;
  ((Ec = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Sn.default = e), Sn);
}
var kc;
function Ua() {
  if (kc) return On;
  ((kc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.default = void 0));
  var e = t(Jg());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((On.default = n), On);
}
var xc;
function $a() {
  if (xc) return Sr;
  ((xc = 1),
    Object.defineProperty(Sr, "__esModule", { value: !0 }),
    (Sr.default = void 0),
    (Sr.unsafeStringify = n));
  var e = t(Ua());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const r = [];
  for (let o = 0; o < 256; ++o) r.push((o + 256).toString(16).slice(1));
  function n(o, u = 0) {
    return (
      r[o[u + 0]] +
      r[o[u + 1]] +
      r[o[u + 2]] +
      r[o[u + 3]] +
      "-" +
      r[o[u + 4]] +
      r[o[u + 5]] +
      "-" +
      r[o[u + 6]] +
      r[o[u + 7]] +
      "-" +
      r[o[u + 8]] +
      r[o[u + 9]] +
      "-" +
      r[o[u + 10]] +
      r[o[u + 11]] +
      r[o[u + 12]] +
      r[o[u + 13]] +
      r[o[u + 14]] +
      r[o[u + 15]]
    );
  }
  function i(o, u = 0) {
    const s = n(o, u);
    if (!(0, e.default)(s)) throw TypeError("Stringified UUID is invalid");
    return s;
  }
  var a = i;
  return ((Sr.default = a), Sr);
}
var Rc;
function Xg() {
  if (Rc) return wn;
  ((Rc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.default = void 0));
  var e = r($v()),
    t = $a();
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  let n,
    i,
    a = 0,
    o = 0;
  function u(c, l, d) {
    let p = (l && d) || 0;
    const v = l || new Array(16);
    c = c || {};
    let h = c.node || n,
      f = c.clockseq !== void 0 ? c.clockseq : i;
    if (h == null || f == null) {
      const w = c.random || (c.rng || e.default)();
      (h == null && (h = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = i = ((w[6] << 8) | w[7]) & 16383));
    }
    let g = c.msecs !== void 0 ? c.msecs : Date.now(),
      _ = c.nsecs !== void 0 ? c.nsecs : o + 1;
    const b = g - a + (_ - o) / 1e4;
    if (
      (b < 0 && c.clockseq === void 0 && (f = (f + 1) & 16383),
      (b < 0 || g > a) && c.nsecs === void 0 && (_ = 0),
      _ >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = g), (o = _), (i = f), (g += 122192928e5));
    const y = ((g & 268435455) * 1e4 + _) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
    const O = ((g / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (O >>> 8) & 255),
      (v[p++] = O & 255),
      (v[p++] = ((O >>> 24) & 15) | 16),
      (v[p++] = (O >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = h[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = u;
  return ((wn.default = s), wn);
}
var En = {},
  Gt = {},
  kn = {},
  Cc;
function Vv() {
  if (Cc) return kn;
  ((Cc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  var e = t(Ua());
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
  return ((kn.default = n), kn);
}
var Pc;
function Gv() {
  if (Pc) return Gt;
  ((Pc = 1),
    Object.defineProperty(Gt, "__esModule", { value: !0 }),
    (Gt.URL = Gt.DNS = void 0),
    (Gt.default = o));
  var e = $a(),
    t = r(Vv());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function n(u) {
    u = unescape(encodeURIComponent(u));
    const s = [];
    for (let c = 0; c < u.length; ++c) s.push(u.charCodeAt(c));
    return s;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  Gt.DNS = i;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Gt.URL = a;
  function o(u, s, c) {
    function l(d, p, v, h) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof p == "string" && (p = (0, t.default)(p)),
        ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(p),
        g.set(d, p.length),
        (g = c(g)),
        (g[6] = (g[6] & 15) | s),
        (g[8] = (g[8] & 63) | 128),
        v)
      ) {
        h = h || 0;
        for (let _ = 0; _ < 16; ++_) v[h + _] = g[_];
        return v;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      l.name = u;
    } catch {}
    return ((l.DNS = i), (l.URL = a), l);
  }
  return Gt;
}
var xn = {},
  Ac;
function Qg() {
  if (Ac) return xn;
  ((Ac = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const h = unescape(encodeURIComponent(v));
      v = new Uint8Array(h.length);
      for (let f = 0; f < h.length; ++f) v[f] = h.charCodeAt(f);
    }
    return t(n(i(v), v.length * 8));
  }
  function t(v) {
    const h = [],
      f = v.length * 32,
      g = "0123456789abcdef";
    for (let _ = 0; _ < f; _ += 8) {
      const b = (v[_ >> 5] >>> (_ % 32)) & 255,
        y = parseInt(g.charAt((b >>> 4) & 15) + g.charAt(b & 15), 16);
      h.push(y);
    }
    return h;
  }
  function r(v) {
    return (((v + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(v, h) {
    ((v[h >> 5] |= 128 << (h % 32)), (v[r(h) - 1] = h));
    let f = 1732584193,
      g = -271733879,
      _ = -1732584194,
      b = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const O = f,
        w = g,
        S = _,
        x = b;
      ((f = s(f, g, _, b, v[y], 7, -680876936)),
        (b = s(b, f, g, _, v[y + 1], 12, -389564586)),
        (_ = s(_, b, f, g, v[y + 2], 17, 606105819)),
        (g = s(g, _, b, f, v[y + 3], 22, -1044525330)),
        (f = s(f, g, _, b, v[y + 4], 7, -176418897)),
        (b = s(b, f, g, _, v[y + 5], 12, 1200080426)),
        (_ = s(_, b, f, g, v[y + 6], 17, -1473231341)),
        (g = s(g, _, b, f, v[y + 7], 22, -45705983)),
        (f = s(f, g, _, b, v[y + 8], 7, 1770035416)),
        (b = s(b, f, g, _, v[y + 9], 12, -1958414417)),
        (_ = s(_, b, f, g, v[y + 10], 17, -42063)),
        (g = s(g, _, b, f, v[y + 11], 22, -1990404162)),
        (f = s(f, g, _, b, v[y + 12], 7, 1804603682)),
        (b = s(b, f, g, _, v[y + 13], 12, -40341101)),
        (_ = s(_, b, f, g, v[y + 14], 17, -1502002290)),
        (g = s(g, _, b, f, v[y + 15], 22, 1236535329)),
        (f = c(f, g, _, b, v[y + 1], 5, -165796510)),
        (b = c(b, f, g, _, v[y + 6], 9, -1069501632)),
        (_ = c(_, b, f, g, v[y + 11], 14, 643717713)),
        (g = c(g, _, b, f, v[y], 20, -373897302)),
        (f = c(f, g, _, b, v[y + 5], 5, -701558691)),
        (b = c(b, f, g, _, v[y + 10], 9, 38016083)),
        (_ = c(_, b, f, g, v[y + 15], 14, -660478335)),
        (g = c(g, _, b, f, v[y + 4], 20, -405537848)),
        (f = c(f, g, _, b, v[y + 9], 5, 568446438)),
        (b = c(b, f, g, _, v[y + 14], 9, -1019803690)),
        (_ = c(_, b, f, g, v[y + 3], 14, -187363961)),
        (g = c(g, _, b, f, v[y + 8], 20, 1163531501)),
        (f = c(f, g, _, b, v[y + 13], 5, -1444681467)),
        (b = c(b, f, g, _, v[y + 2], 9, -51403784)),
        (_ = c(_, b, f, g, v[y + 7], 14, 1735328473)),
        (g = c(g, _, b, f, v[y + 12], 20, -1926607734)),
        (f = l(f, g, _, b, v[y + 5], 4, -378558)),
        (b = l(b, f, g, _, v[y + 8], 11, -2022574463)),
        (_ = l(_, b, f, g, v[y + 11], 16, 1839030562)),
        (g = l(g, _, b, f, v[y + 14], 23, -35309556)),
        (f = l(f, g, _, b, v[y + 1], 4, -1530992060)),
        (b = l(b, f, g, _, v[y + 4], 11, 1272893353)),
        (_ = l(_, b, f, g, v[y + 7], 16, -155497632)),
        (g = l(g, _, b, f, v[y + 10], 23, -1094730640)),
        (f = l(f, g, _, b, v[y + 13], 4, 681279174)),
        (b = l(b, f, g, _, v[y], 11, -358537222)),
        (_ = l(_, b, f, g, v[y + 3], 16, -722521979)),
        (g = l(g, _, b, f, v[y + 6], 23, 76029189)),
        (f = l(f, g, _, b, v[y + 9], 4, -640364487)),
        (b = l(b, f, g, _, v[y + 12], 11, -421815835)),
        (_ = l(_, b, f, g, v[y + 15], 16, 530742520)),
        (g = l(g, _, b, f, v[y + 2], 23, -995338651)),
        (f = d(f, g, _, b, v[y], 6, -198630844)),
        (b = d(b, f, g, _, v[y + 7], 10, 1126891415)),
        (_ = d(_, b, f, g, v[y + 14], 15, -1416354905)),
        (g = d(g, _, b, f, v[y + 5], 21, -57434055)),
        (f = d(f, g, _, b, v[y + 12], 6, 1700485571)),
        (b = d(b, f, g, _, v[y + 3], 10, -1894986606)),
        (_ = d(_, b, f, g, v[y + 10], 15, -1051523)),
        (g = d(g, _, b, f, v[y + 1], 21, -2054922799)),
        (f = d(f, g, _, b, v[y + 8], 6, 1873313359)),
        (b = d(b, f, g, _, v[y + 15], 10, -30611744)),
        (_ = d(_, b, f, g, v[y + 6], 15, -1560198380)),
        (g = d(g, _, b, f, v[y + 13], 21, 1309151649)),
        (f = d(f, g, _, b, v[y + 4], 6, -145523070)),
        (b = d(b, f, g, _, v[y + 11], 10, -1120210379)),
        (_ = d(_, b, f, g, v[y + 2], 15, 718787259)),
        (g = d(g, _, b, f, v[y + 9], 21, -343485551)),
        (f = a(f, O)),
        (g = a(g, w)),
        (_ = a(_, S)),
        (b = a(b, x)));
    }
    return [f, g, _, b];
  }
  function i(v) {
    if (v.length === 0) return [];
    const h = v.length * 8,
      f = new Uint32Array(r(h));
    for (let g = 0; g < h; g += 8) f[g >> 5] |= (v[g / 8] & 255) << (g % 32);
    return f;
  }
  function a(v, h) {
    const f = (v & 65535) + (h & 65535);
    return (((v >> 16) + (h >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function o(v, h) {
    return (v << h) | (v >>> (32 - h));
  }
  function u(v, h, f, g, _, b) {
    return a(o(a(a(h, v), a(g, b)), _), f);
  }
  function s(v, h, f, g, _, b, y) {
    return u((h & f) | (~h & g), v, h, _, b, y);
  }
  function c(v, h, f, g, _, b, y) {
    return u((h & g) | (f & ~g), v, h, _, b, y);
  }
  function l(v, h, f, g, _, b, y) {
    return u(h ^ f ^ g, v, h, _, b, y);
  }
  function d(v, h, f, g, _, b, y) {
    return u(f ^ (h | ~g), v, h, _, b, y);
  }
  var p = e;
  return ((xn.default = p), xn);
}
var Ic;
function Zg() {
  if (Ic) return En;
  ((Ic = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e = r(Gv()),
    t = r(Qg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((En.default = i), En);
}
var Rn = {},
  Cn = {},
  jc;
function e_() {
  if (jc) return Cn;
  ((jc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Cn.default = t), Cn);
}
var Dc;
function t_() {
  if (Dc) return Rn;
  ((Dc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var e = n(e_()),
    t = n($v()),
    r = $a();
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, u, s) {
    if (e.default.randomUUID && !u && !o) return e.default.randomUUID();
    o = o || {};
    const c = o.random || (o.rng || t.default)();
    if (((c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), u)) {
      s = s || 0;
      for (let l = 0; l < 16; ++l) u[s + l] = c[l];
      return u;
    }
    return (0, r.unsafeStringify)(c);
  }
  var a = i;
  return ((Rn.default = a), Rn);
}
var Pn = {},
  An = {},
  Tc;
function r_() {
  if (Tc) return An;
  ((Tc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  function e(i, a, o, u) {
    switch (i) {
      case 0:
        return (a & o) ^ (~a & u);
      case 1:
        return a ^ o ^ u;
      case 2:
        return (a & o) ^ (a & u) ^ (o & u);
      case 3:
        return a ^ o ^ u;
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
    const u = i.length / 4 + 2,
      s = Math.ceil(u / 16),
      c = new Array(s);
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (i[l * 64 + p * 4] << 24) |
          (i[l * 64 + p * 4 + 1] << 16) |
          (i[l * 64 + p * 4 + 2] << 8) |
          i[l * 64 + p * 4 + 3];
      c[l] = d;
    }
    ((c[s - 1][14] = ((i.length - 1) * 8) / Math.pow(2, 32)),
      (c[s - 1][14] = Math.floor(c[s - 1][14])),
      (c[s - 1][15] = ((i.length - 1) * 8) & 4294967295));
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(80);
      for (let _ = 0; _ < 16; ++_) d[_] = c[l][_];
      for (let _ = 16; _ < 80; ++_) d[_] = t(d[_ - 3] ^ d[_ - 8] ^ d[_ - 14] ^ d[_ - 16], 1);
      let p = o[0],
        v = o[1],
        h = o[2],
        f = o[3],
        g = o[4];
      for (let _ = 0; _ < 80; ++_) {
        const b = Math.floor(_ / 20),
          y = (t(p, 5) + e(b, v, h, f) + g + a[b] + d[_]) >>> 0;
        ((g = f), (f = h), (h = t(v, 30) >>> 0), (v = p), (p = y));
      }
      ((o[0] = (o[0] + p) >>> 0),
        (o[1] = (o[1] + v) >>> 0),
        (o[2] = (o[2] + h) >>> 0),
        (o[3] = (o[3] + f) >>> 0),
        (o[4] = (o[4] + g) >>> 0));
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
  return ((An.default = n), An);
}
var Mc;
function n_() {
  if (Mc) return Pn;
  ((Mc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  var e = r(Gv()),
    t = r(r_());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((Pn.default = i), Pn);
}
var In = {},
  Lc;
function i_() {
  if (Lc) return In;
  ((Lc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((In.default = e), In);
}
var jn = {},
  Nc;
function a_() {
  if (Nc) return jn;
  ((Nc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(Ua());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((jn.default = n), jn);
}
var Fc;
function o_() {
  return (
    Fc ||
      ((Fc = 1),
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
              return s.default;
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
              return u.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }));
        var t = l(Xg()),
          r = l(Zg()),
          n = l(t_()),
          i = l(n_()),
          a = l(i_()),
          o = l(a_()),
          u = l(Ua()),
          s = l($a()),
          c = l(Vv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(jo)),
    jo
  );
}
var qc;
function s_() {
  if (qc) return mn;
  ((qc = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.createAdfRendererIframeProps = void 0));
  const e = o_(),
    t = async (r, n) => {
      const i = await Uv(
          () => import("./index-rttqV1lv.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        a = i.default || i,
        o = new URL(document.referrer).origin,
        u = `${o}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        c = () => {
          var l, d;
          const p = document.getElementById(s),
            v = {
              type: "adf-document",
              document: (l = r.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
            };
          (a.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (h) => {
                var f;
                (f = h?.iFrameResizer) === null || f === void 0 || f.resize();
              },
            },
            p || "",
          ),
            (d = p?.contentWindow) === null || d === void 0 || d.postMessage(v, o));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: u, onLoad: c }
      );
    };
  return ((mn.createAdfRendererIframeProps = t), mn);
}
var Bc;
function Hv() {
  if (Bc) return sn;
  ((Bc = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.view = void 0));
  const e = Dg(),
    t = Tg(),
    r = Mg(),
    n = Lg(),
    i = Ng(),
    a = $g(),
    o = Vg(),
    u = Gg(),
    s = Wg(),
    c = s_();
  return (
    (sn.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: i.createHistory,
      getContext: a.getContext,
      theme: u.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
      createAdfRendererIframeProps: c.createAdfRendererIframeProps,
    }),
    sn
  );
}
var zc;
function uu() {
  return (
    zc ||
      ((zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Hv(), e));
      })(xo)),
    xo
  );
}
var Do = {},
  Dn = {},
  Uc;
function u_() {
  if (Uc) return Dn;
  ((Uc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.router = void 0));
  const t = (0, se().getCallBridge)(),
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
    i = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    a = async () => t("reload");
  return ((Dn.router = { getUrl: r, navigate: n, open: i, reload: a }), Dn);
}
var $c;
function c_() {
  return (
    $c ||
      (($c = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(u_(), e));
      })(Do)),
    Do
  );
}
var To = {},
  Tn = {},
  Vc;
function l_() {
  if (Vc) return Tn;
  ((Vc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.Modal = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class i {
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
  return ((Tn.Modal = i), Tn);
}
var Gc;
function d_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(l_(), e));
      })(To)),
    To
  );
}
var ot = {},
  nr = {},
  Hc;
function f_() {
  if (Hc) return nr;
  ((Hc = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.productFetchApi = nr.remoteFetchApi = void 0));
  const e = Bv(),
    t = async (o) => {
      const u = {};
      for (const [s, c] of o.entries())
        if (s === "file") {
          const l = c.name,
            d = c.type;
          ((u.file = await (0, e.blobToBase64)(c)), (u.__fileName = l), (u.__fileType = d));
        } else u[s] = c;
      return JSON.stringify(u);
    },
    r = (o) => {
      if (!o) return o;
      if ("signal" in o) {
        const { signal: u, ...s } = o;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          s
        );
      }
      return o;
    },
    n = async (o) => {
      const u = o?.body instanceof FormData,
        s = u ? await t(o?.body) : o?.body,
        c = new Request("", { body: s, method: o?.method, headers: o?.headers }),
        l = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(l),
        isMultipartFormData: u,
      };
    },
    i = (o) => {
      const u = async (s, c) => {
        const l = r(c),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          h = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: g,
            statusText: _,
            status: b,
            isAttachment: y,
          } = await o("fetchRemote", h),
          O = y ? (0, e.base64ToBlob)(f, g["content-type"]) : f;
        return new Response(O || null, { headers: g, status: b, statusText: _ });
      };
      return { requestRemote: (s, c) => u(s, c) };
    };
  nr.remoteFetchApi = i;
  const a = (o) => {
    const u = async (s, c, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: h } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: c,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: h,
        },
        {
          body: g,
          headers: _,
          statusText: b,
          status: y,
          isAttachment: O,
        } = await o("fetchProduct", f),
        w = O ? (0, e.base64ToBlob)(g, _["content-type"]) : g;
      return new Response(w || null, { headers: _, status: y, statusText: b });
    };
    return {
      requestConfluence: (s, c) => u("confluence", s, c),
      requestJira: (s, c) => u("jira", s, c),
      requestBitbucket: (s, c) => u("bitbucket", s, c),
    };
  };
  return ((nr.productFetchApi = a), nr);
}
var Wc;
function v_() {
  if (Wc) return ot;
  Wc = 1;
  var e;
  (Object.defineProperty(ot, "__esModule", { value: !0 }),
    (ot.requestRemote = ot.requestBitbucket = ot.requestJira = ot.requestConfluence = void 0));
  const t = se(),
    r = f_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ot.requestConfluence = e.requestConfluence),
    (ot.requestJira = e.requestJira),
    (ot.requestBitbucket = e.requestBitbucket),
    (ot.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ot
  );
}
var Mo = {},
  Mn = {},
  Kc;
function p_() {
  if (Kc) return Mn;
  ((Kc = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.showFlag = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Mn.showFlag = n), Mn);
}
var Yc;
function h_() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = p_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Mo)),
    Mo
  );
}
var Lo = {},
  Jc;
function g_() {
  return (
    Jc ||
      ((Jc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(zv(), e));
      })(Lo)),
    Lo
  );
}
var No = {},
  Ln = {},
  Xc;
function __() {
  if (Xc) return Ln;
  ((Xc = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.realtime = void 0));
  const t = (0, se().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((Ln.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Ln);
}
var Fo = {},
  Qc;
function b_() {
  return (
    Qc ||
      ((Qc = 1),
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
      })(Fo)),
    Fo
  );
}
var Zc;
function y_() {
  return (
    Zc ||
      ((Zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = __();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = b_();
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
      })(No)),
    No
  );
}
var qo = {},
  Nn = {},
  Bo = {},
  el;
function m_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = se(),
          r = _e(),
          n = 30,
          i = (0, t.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const a = (u) => {
            switch (u.type) {
              case "forge":
                return { agentName: u.agentName, agentKey: u.agentKey, prompt: u.prompt };
              case "atlassian":
                return { agentName: u.agentName, prompt: u.prompt };
              default:
                return { prompt: u.prompt };
            }
          },
          o = async (u) => {
            if (u.type === "forge") {
              if (u.agentName.length > n) throw new Error("rovo agent name too long");
              if (u.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const s = a(u);
            if ((await i("openRovo", s)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = o;
      })(Bo)),
    Bo
  );
}
var tl;
function w_() {
  if (tl) return Nn;
  ((tl = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.rovo = void 0));
  const e = m_();
  return ((Nn.rovo = { open: e.open }), Nn);
}
var rl;
function O_() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(w_(), e));
      })(qo)),
    qo
  );
}
var Tt = {},
  nl;
function S_() {
  if (nl) return Tt;
  ((nl = 1),
    Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.createTranslationFunction = Tt.getTranslations = Tt.resetTranslationsCache = void 0));
  const e = qv(),
    t = uu(),
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
    i = () => {
      n.reset();
    };
  Tt.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Tt.getTranslations = a;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
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
  return ((Tt.createTranslationFunction = o), Tt);
}
var zo = {},
  Fn = {},
  il;
function E_() {
  if (il) return Fn;
  ((il = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.permissions = void 0));
  const t = (0, se().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    i = async (s) => t("__permission__egressDeleteDomain", s),
    a = async (s) => t("__permission__egressDeleteGroup", s),
    o = async (s) => t("__permission__remoteGet", s),
    u = async (s) => t("__permission__remoteSet", s);
  return (
    (Fn.permissions = {
      egress: { get: r, set: n, deleteDomain: i, deleteGroup: a },
      remote: { get: o, set: u },
    }),
    Fn
  );
}
var al;
function k_() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(E_(), e));
      })(zo)),
    zo
  );
}
var Uo = {},
  $o = {},
  Vo = {},
  qn = {},
  Bn = {},
  ol;
function Wv() {
  return (
    ol ||
      ((ol = 1),
      Object.defineProperty(Bn, "__esModule", { value: !0 }),
      (Bn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Bn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Bn
  );
}
var sl;
function Va() {
  if (sl) return qn;
  ((sl = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = uu(),
    r = Wv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((qn.checkRestrictedEnvironment = n), qn);
}
var ul;
function x_() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = qi(),
          r = _e(),
          n = Va(),
          a = (0, se().getCallBridge)(),
          o = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const h = new Uint8Array(v);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          u = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              h = new Uint8Array(v),
              f = btoa(String.fromCharCode(...h));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          s = async ({ functionKey: l, objects: d }) => {
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
              v = await Promise.all(p.map((b) => u(b))),
              h = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              g = new Map();
            return (
              p.forEach((b, y) => {
                const O = v[y];
                (f.set(O.checksum, b), g.set(O.checksum, y));
              }),
              Object.entries(h).map(([b, y]) => {
                const { key: O, checksum: w } = y,
                  S = f.get(w),
                  x = g.get(w);
                return x === void 0
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
                            const j = await fetch(b, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: O,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
                            };
                          }
                        })(),
                        index: x,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((h) => h.promise));
        };
        e.upload = c;
      })(Vo)),
    Vo
  );
}
var zn = {},
  cl;
function R_() {
  if (cl) return zn;
  ((cl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.deleteObjects = void 0));
  const e = qi(),
    t = _e(),
    r = Va(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "delete" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        u.map(async (s) => {
          await (0, e.invoke)(o, { key: s });
        }),
      );
    };
  return ((zn.deleteObjects = a), zn);
}
var Un = {},
  ll;
function C_() {
  if (ll) return Un;
  ((ll = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.download = void 0));
  const e = qi(),
    t = _e(),
    r = Va(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "download" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const s = await (0, e.invoke)(o, { keys: u });
      if (!s || typeof s != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const c = Object.entries(s).map(async ([d, p]) => {
        try {
          const v = await fetch(d, { method: "GET" });
          if (!v.ok)
            return {
              success: !1,
              key: p,
              status: v.status,
              error: `Download failed with status ${v.status}`,
            };
          const h = await v.blob();
          return { success: !0, key: p, blob: h, status: v.status };
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
  return ((Un.download = a), Un);
}
var $n = {},
  dl;
function P_() {
  if (dl) return $n;
  ((dl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.getMetadata = void 0));
  const e = qi(),
    t = _e(),
    r = Va(),
    i = (0, se().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "getMetadata" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        u.map(async (c) => {
          const l = await (0, e.invoke)(o, { key: c });
          return !l || typeof l != "object"
            ? { key: c, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return (($n.getMetadata = a), $n);
}
var fl;
function A_() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = x_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = R_(),
          n = C_(),
          i = P_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: i.getMetadata,
          delete: r.deleteObjects,
        };
      })($o)),
    $o
  );
}
var vl;
function I_() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = rt;
        (t.__exportStar(A_(), e), t.__exportStar(Wv(), e));
      })(Uo)),
    Uo
  );
}
var Go = {},
  Vn = {},
  ir = {},
  Er = {},
  Zi = {},
  pl;
function j_() {
  if (pl) return Zi;
  ((pl = 1), Object.defineProperty(Zi, "__esModule", { value: !0 }));
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
      const u = e.StableID.get(this._sdkKey);
      if (
        ((a = n.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const s = i.user;
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
      var i, a;
      const o = this.getCurrentSourceDetails();
      let u = o.reason;
      const s = (i = o.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && s.length > 0 && (u = u + s[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: u }));
    }
  }
  return ((Zi.default = t), Zi);
}
var kr = {},
  Gn = {},
  hl;
function D_() {
  if (hl) return Gn;
  ((hl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn._resolveDeltasResponse = void 0));
  const e = Jt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
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
  Gn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Gn;
}
var gl;
function Kv() {
  if (gl) return kr;
  gl = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (i, a, o, u) {
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
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = Jt(),
    r = D_();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, h, f;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: s,
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
        if (g?.has_updates) {
          const b =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: b ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
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
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((kr.default = n), kr);
}
var Hn = {},
  _l;
function T_() {
  if (_l) return Hn;
  ((_l = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._makeParamStoreGetter = void 0));
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
  function u(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, h, p);
        case "experiment":
          return u(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((Hn._makeParamStoreGetter = c), Hn);
}
var ar = {},
  bl;
function M_() {
  if (bl) return ar;
  bl = 1;
  var e =
    (ar && ar.__awaiter) ||
    function (i, a, o, u) {
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
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.StatsigEvaluationsDataAdapter = void 0));
  const t = Jt(),
    r = Kv();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((ar.StatsigEvaluationsDataAdapter = n), ar);
}
var yl;
function L_() {
  if (yl) return Er;
  yl = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            g(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function g(_) {
          _.done ? p(_.value) : d(_.value).then(h, f);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Jt(),
    r = j_(),
    n = Kv(),
    i = T_(),
    a = M_();
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
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
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
        (this._store = new r.default(s)),
        (this._network = v),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const h = c?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && v?.source === "Bootstrap")
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
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
      const { result: p, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
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
      var l, d, p, v;
      const { result: h, details: f } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, f, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
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
            : v.call(p, g, this._user, c),
        b = _ ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getLayerImpl(s, c) {
      var l, d, p;
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
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
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
            : d.call(l, h, c);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        h
      );
    }
  }
  return ((Er.default = o), Er);
}
var ml;
function N_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        var t =
            (ir && ir.__createBinding) ||
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
            (ir && ir.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Jt(),
          i = L_();
        ((e.StatsigClient = i.default), r(Jt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ir)),
    ir
  );
}
var Wn = {},
  Kn = {},
  wl;
function F_() {
  if (wl) return Kn;
  ((wl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.initFeatureFlags = void 0));
  const e = se(),
    t = _e(),
    r = za(),
    n = 500,
    i = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    o = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (s) => (o(s), a("initFeatureFlags", { user: s.user }));
  return (
    (Kn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Kn
  );
}
var Ol;
function q_() {
  if (Ol) return Wn;
  ((Ol = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn.ForgeDataAdapter = void 0));
  const e = F_();
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
      const u = { ...i, statsigEnvironment: this.environment },
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
  return ((Wn.ForgeDataAdapter = t), Wn);
}
var Ho = {},
  Sl;
function Yv() {
  return (
    Sl ||
      ((Sl = 1),
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
      })(Ho)),
    Ho
  );
}
var Yn = {},
  El;
function B_() {
  if (El) return Yn;
  ((El = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.trackFeatureFlagEvent = void 0));
  const e = se(),
    t = _e(),
    r = Yv(),
    n = za(),
    i = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    u = (c) => {
      if (!c || !c.type || !c.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(c.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(c).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (c) => (u(c), o("trackFeatureFlagEvent", c));
  return (
    (Yn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Yn
  );
}
var kl;
function z_() {
  if (kl) return Vn;
  ((kl = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn.ForgeFeatureFlags = void 0));
  const e = N_(),
    t = q_(),
    r = Yv(),
    n = B_();
  class i {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(o, u = {}) {
      var s;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const c = {
        environment: { tier: u.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = c.environment) === null || s === void 0 ? void 0 : s.tier),
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
    sendCheckFlagEvent(o, u) {
      const s = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: o,
          success: u,
        },
      };
      (0, n.trackFeatureFlagEvent)(s);
    }
  }
  return ((Vn.ForgeFeatureFlags = i), Vn);
}
var xl;
function U_() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = z_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Go)),
    Go
  );
}
var Rl;
function $_() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = rt;
        var r = Cg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(qi(), e),
          t.__exportStar(jg(), e),
          t.__exportStar(uu(), e),
          t.__exportStar(c_(), e),
          t.__exportStar(d_(), e),
          t.__exportStar(v_(), e),
          t.__exportStar(h_(), e),
          t.__exportStar(g_(), e),
          t.__exportStar(y_(), e),
          t.__exportStar(O_(), e),
          (e.i18n = t.__importStar(S_())),
          t.__exportStar(k_(), e),
          t.__exportStar(I_(), e),
          t.__exportStar(U_(), e));
      })(wo)),
    wo
  );
}
var Re = $_();
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
var V_ = {};
function Ga() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : V_;
}
var Jv = Object.assign,
  Oa = Object.getOwnPropertyDescriptor,
  wt = Object.defineProperty,
  Ha = Object.prototype,
  Cs = [];
Object.freeze(Cs);
var Xv = {};
Object.freeze(Xv);
var G_ = typeof Proxy < "u",
  H_ = Object.toString();
function Qv() {
  G_ || H("Proxy not available");
}
function Zv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Tr = function () {};
function lt(e) {
  return typeof e == "function";
}
function dr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Wa(e) {
  return e !== null && typeof e == "object";
}
function Xt(e) {
  if (!Wa(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === H_;
}
function ep(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ka(e, t, r) {
  wt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function tp(e, t, r) {
  wt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Wa(n) && n[r] === !0;
    }
  );
}
function Wr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function W_(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Lt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var rp = typeof Object.getOwnPropertySymbols < "u";
function K_(e) {
  var t = Object.keys(e);
  if (!rp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ha.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ya =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : rp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function np(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return Ha.hasOwnProperty.call(e, t);
}
var Y_ =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ya(t).forEach(function (n) {
        r[n] = Oa(t, n);
      }),
      r
    );
  };
function Me(e, t) {
  return !!(e & t);
}
function Le(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Cl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function J_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Q_(n.key), n));
  }
}
function Kr(e, t, r) {
  return (t && J_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Mr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Z_(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fr.apply(null, arguments)
  );
}
function ip(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ps(e, t));
}
function Ps(e, t) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ps(e, t)
  );
}
function X_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Q_(e) {
  var t = X_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z_(e, t) {
  if (e) {
    if (typeof e == "string") return Cl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Cl(e, t)
          : void 0
    );
  }
}
var mt = Symbol("mobx-stored-annotations");
function Ot(e) {
  function t(r, n) {
    if (zi(n)) return e.decorate_20223_(r, n);
    Bi(r, n, e);
  }
  return Object.assign(t, e);
}
function Bi(e, t, r) {
  (qt(e, mt) || Ka(e, mt, fr({}, e[mt])), ob(r) || (e[mt][t] = r));
}
function eb(e) {
  return (qt(e, mt) || Ka(e, mt, fr({}, e[mt])), e[mt]);
}
function zi(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var N = Symbol("mobx administration"),
  Zt = (function () {
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
        return mp(this);
      }),
      (t.reportChanged = function () {
        (Je(), wp(this), Xe());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Kr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Zt.isBeingObservedMask_ = 1;
Zt.isPendingUnobservationMask_ = 2;
Zt.diffValueMask_ = 4;
var cu = _r("Atom", Zt);
function ap(e, t, r) {
  (t === void 0 && (t = Tr), r === void 0 && (r = Tr));
  var n = new Zt(e);
  return (t !== Tr && dy(n, t), r !== Tr && xp(n, r), n);
}
function tb(e, t) {
  return Fp(e, t);
}
function rb(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Sa = { structural: tb, default: rb };
function vr(e, t, r) {
  return Ap(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : Xt(e)
        ? oe.object(e, void 0, { name: r })
        : Wr(e)
          ? oe.map(e, { name: r })
          : Lt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !qr(e) && !Ci(e)
              ? ep(e)
                ? Br(e)
                : Ri(r, e)
              : e;
}
function nb(e, t, r) {
  if (e == null || no(e) || ro(e) || yr(e) || yt(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (Xt(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (Wr(e)) return oe.map(e, { name: r, deep: !1 });
  if (Lt(e)) return oe.set(e, { name: r, deep: !1 });
}
function Ja(e) {
  return e;
}
function ib(e, t) {
  return Fp(e, t) ? t : e;
}
var ab = "override";
function ob(e) {
  return e.annotationType_ === ab;
}
function Ui(e, t) {
  return { annotationType_: e, options_: t, make_: sb, extend_: ub, decorate_20223_: cb };
}
function sb(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (qr(r.value)) return 1;
  var a = op(e, this, t, r, !1);
  return (wt(n, t, a), 2);
}
function ub(e, t, r, n) {
  var i = op(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function cb(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return pr(
        (l = (d = a.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (p = (v = a.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        qr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      qr(e) || (e = o(e)),
      (u = this.options_) != null &&
        u.bound &&
        i(function () {
          var s = this,
            c = s[n].bind(s);
          ((c.isMobxAction = !0), (s[n] = c));
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
function lb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function op(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = A.safeDescriptors), lb(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: pr(
      (o = (u = t.options_) == null ? void 0 : u.name) != null ? o : r.toString(),
      p,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function sp(e, t) {
  return { annotationType_: e, options_: t, make_: db, extend_: fb, decorate_20223_: vb };
}
function db(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!qt(e.target_, t) || !Ci(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ci(r.value)) return 1;
  var a = up(e, this, t, r, !1, !1);
  return (wt(n, t, a), 2);
}
function fb(e, t, r, n) {
  var i,
    a = up(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function vb(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Ci(e) || (e = Br(e)),
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
function pb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function up(e, t, r, n, i, a) {
  (a === void 0 && (a = A.safeDescriptors), pb(e, t, r, n));
  var o = n.value;
  if ((Ci(o) || (o = Br(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function lu(e, t) {
  return { annotationType_: e, options_: t, make_: hb, extend_: gb, decorate_20223_: _b };
}
function hb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function gb(e, t, r, n) {
  return (
    bb(e, this, t, r),
    e.defineComputedProperty_(t, fr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function _b(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Yr(this)[N],
        o = fr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new dt(o)));
    }),
    function () {
      return this[N].getObservablePropValue_(n);
    }
  );
}
function bb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Xa(e, t) {
  return { annotationType_: e, options_: t, make_: yb, extend_: mb, decorate_20223_: wb };
}
function yb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function mb(e, t, r, n) {
  var i, a;
  return (
    Ob(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : vr,
      n,
    )
  );
}
function wb(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Yr(u)[N],
      p = new cr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : vr,
        "ObservableObject." + i.toString(),
        !1,
      );
    (d.values_.set(i, p), a.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[N].getObservablePropValue_(i));
      },
      set: function (s) {
        return (a.has(this) || o(this, s), this[N].setObservablePropValue_(i, s));
      },
      init: function (s) {
        return (a.has(this) || o(this, s), s);
      },
    };
}
function Ob(e, t, r, n) {
  t.annotationType_;
}
var Sb = "true",
  Eb = cp();
function cp(e) {
  return { annotationType_: Sb, options_: e, make_: kb, extend_: xb, decorate_20223_: Rb };
}
function kb(e, t, r, n) {
  var i, a;
  if (r.get) return Qa.make_(e, t, r, n);
  if (r.set) {
    var o = qr(r.set) ? r.set : pr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (wt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (ep(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Br.bound : Br;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Ri.bound : Ri;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function xb(e, t, r, n) {
  var i, a;
  if (r.get) return Qa.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: pr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  return u.extend_(e, t, r, n);
}
function Rb(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Cb = "observable",
  Pb = "observable.ref",
  Ab = "observable.shallow",
  Ib = "observable.struct",
  lp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(lp);
function ea(e) {
  return e || lp;
}
var As = Xa(Cb),
  jb = Xa(Pb, { enhancer: Ja }),
  Db = Xa(Ab, { enhancer: nb }),
  Tb = Xa(Ib, { enhancer: ib }),
  dp = Ot(As);
function ta(e) {
  return e.deep === !0 ? vr : e.deep === !1 ? Ja : Lb(e.defaultDecorator);
}
function Mb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : cp(e)) : void 0;
}
function Lb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : vr;
}
function fp(e, t, r) {
  if (zi(t)) return As.decorate_20223_(e, t);
  if (dr(t)) {
    Bi(e, t, As);
    return;
  }
  return Ap(e)
    ? e
    : Xt(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : Wr(e)
          ? oe.map(e, t)
          : Lt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
Jv(fp, dp);
var Nb = {
    box: function (t, r) {
      var n = ea(r);
      return new cr(t, ta(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ea(r);
      return (A.useProxies === !1 || n.proxy === !1 ? My : ky)(t, ta(n), n.name);
    },
    map: function (t, r) {
      var n = ea(r);
      return new jp(t, ta(n), n.name);
    },
    set: function (t, r) {
      var n = ea(r);
      return new Dp(t, ta(n), n.name);
    },
    object: function (t, r, n) {
      return mr(function () {
        return hy(A.useProxies === !1 || n?.proxy === !1 ? Yr({}, n) : Oy({}, n), t, r);
      });
    },
    ref: Ot(jb),
    shallow: Ot(Db),
    deep: dp,
    struct: Ot(Tb),
  },
  oe = Jv(fp, Nb),
  vp = "computed",
  Fb = "computed.struct",
  Is = lu(vp),
  qb = lu(Fb, { equals: Sa.structural }),
  Qa = function (t, r) {
    if (zi(r)) return Is.decorate_20223_(t, r);
    if (dr(r)) return Bi(t, r, Is);
    if (Xt(t)) return Ot(lu(vp, t));
    var n = Xt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(Qa, Is);
Qa.struct = Ot(qb);
var Pl,
  Al,
  Ea = 0,
  Bb = 1,
  zb =
    (Pl = (Al = Oa(function () {}, "name")) == null ? void 0 : Al.configurable) != null ? Pl : !1,
  Il = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function pr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return Ub(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    zb && ((Il.value = e), wt(i, "name", Il)),
    i
  );
}
function Ub(e, t, r, n, i) {
  var a = $b(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    Vb(a);
  }
}
function $b(e, t, r, n) {
  var i = !1,
    a = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Je();
  var s = A.allowStateChanges;
  u && (br(), (s = Za(!0)));
  var c = du(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: Bb++,
      parentActionId_: Ea,
    };
  return ((Ea = l.actionId_), l);
}
function Vb(e) {
  (Ea !== e.actionId_ && H(30),
    (Ea = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    eo(e.prevAllowStateChanges_),
    yi(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function Gb(e, t) {
  var r = Za(e);
  try {
    return t();
  } finally {
    eo(r);
  }
}
function Za(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function eo(e) {
  A.allowStateChanges = e;
}
var cr = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = Sa.default),
        (s = e.call(this, a) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = i),
        (s.name_ = a),
        (s.equals = u),
        (s.value_ = i(n, void 0, a)),
        s
      );
    }
    ip(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== A.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (Ke(this)) {
          var a = Ye(this, { object: this, type: St, newValue: i });
          if (!a) return A.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? A.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          ut(this) && ct(this, { type: St, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return $i(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: St,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Vi(this, i)
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
        return np(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Zt),
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
        (this.value_ = new xa(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = ka.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = pr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Sa.structural : Sa.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Jb(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          js(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((mp(this), js(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Yb(this),
            (A.trackingContext = n));
        }
        var i = this.value_;
        if (da(i)) throw i.cause;
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
          o = i || da(n) || da(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Za(!1),
          a;
        if (n) a = pp(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new xa(o);
          }
        return (eo(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ds(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return oy(function () {
          var s = a.get();
          if (!o || i) {
            var c = br();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: St,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Bt(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return np(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Kr(e, [
        {
          key: "isComputing",
          get: function () {
            return Me(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Me(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
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
var to = _r("ComputedValue", dt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var ka;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(ka || (ka = {}));
var xa = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function da(e) {
  return e instanceof xa;
}
function js(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = du(!0), r = br(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (to(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), yi(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), yi(t), !0);
        }
      }
      return (gp(e), Bt(r), yi(t), !1);
    }
  }
}
function pp(e, t, r) {
  var n = du(!0);
  (gp(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId));
  var i = A.trackingDerivation;
  ((A.trackingDerivation = e), A.inBatch++);
  var a;
  if (A.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new xa(o);
    }
  return (A.inBatch--, (A.trackingDerivation = i), Hb(e), yi(n), a);
}
function Hb(e) {
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
    var u = r[o];
    (u.diffValue === 0 && ((u.diffValue = 1), i !== o && (r[i] = u), i++),
      u.dependenciesState_ > n && (n = u.dependenciesState_));
  }
  for (r.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var s = t[a];
    (s.diffValue === 0 && bp(s, e), (s.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), Kb(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ds(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) bp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function hp(e) {
  var t = br();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function br() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Bt(e) {
  A.trackingDerivation = e;
}
function du(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function yi(e) {
  A.allowStateReads = e;
}
function gp(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var fa = function () {
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
  va = !0,
  _p = !1,
  A = (function () {
    var e = Ga();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (va = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new fa().version && (va = !1),
      va
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new fa()))
        : (setTimeout(function () {
            _p || H(35);
          }, 1),
          new fa())
    );
  })();
function Wb() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && H(36), (_p = !0), va)) {
    var e = Ga();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new fa()));
  }
}
function Kb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function bp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && yp(e));
}
function yp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Je() {
  A.inBatch++;
}
function Xe() {
  if (--A.inBatch === 0) {
    Op();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof dt && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function mp(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && yp(e), !1);
}
function wp(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Yb(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function Jb(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Rt = (function () {
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
      (this.isTracing_ = ka.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), Op());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), js(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((A.trackingContext = n), Xe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var i = A.trackingContext;
        A.trackingContext = this;
        var a = pp(this, n, void 0);
        ((A.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ds(this),
          da(a) && this.reportExceptionInDerivation_(a.cause),
          Xe());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (A.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (A.suppressReactionErrors || console.error(a, n),
        A.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), Ds(this), Xe()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        a = function o() {
          (i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", a),
        (a[N] = this),
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
          return Me(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Me(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Me(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Me(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
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
var Xb = 100,
  Ts = function (t) {
    return t();
  };
function Op() {
  A.inBatch > 0 || A.isRunningReactions || Ts(Qb);
}
function Qb() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Xb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Ra = _r("Reaction", Rt);
function Zb(e) {
  var t = Ts;
  Ts = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function mi() {
  return !1;
}
function ey(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Sp = "action",
  ty = "action.bound",
  Ep = "autoAction",
  ry = "autoAction.bound",
  ny = "<unnamed action>",
  Ms = Ui(Sp),
  iy = Ui(ty, { bound: !0 }),
  Ls = Ui(Ep, { autoAction: !0 }),
  ay = Ui(ry, { autoAction: !0, bound: !0 });
function kp(e) {
  var t = function (n, i) {
    if (lt(n)) return pr(n.name || ny, n, e);
    if (lt(i)) return pr(n, i, e);
    if (zi(i)) return (e ? Ls : Ms).decorate_20223_(n, i);
    if (dr(i)) return Bi(n, i, e ? Ls : Ms);
    if (dr(n)) return Ot(Ui(e ? Ep : Sp, { name: n, autoAction: e }));
  };
  return t;
}
var Qe = kp(!1);
Object.assign(Qe, Ms);
var Ri = kp(!0);
Object.assign(Ri, Ls);
Qe.bound = Ot(iy);
Ri.bound = Ot(ay);
function qr(e) {
  return lt(e) && e.isMobxAction === !0;
}
function oy(e, t) {
  var r, n, i, a;
  t === void 0 && (t = Xv);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new Rt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = uy(t),
      l = !1;
    s = new Rt(
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
    ((i = t) != null && (i = i.signal) != null && i.aborted) || s.schedule_(),
    s.getDisposer_((a = t) == null ? void 0 : a.signal)
  );
}
var sy = function (t) {
  return t();
};
function uy(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : sy;
}
var cy = "onBO",
  ly = "onBUO";
function dy(e, t, r) {
  return Rp(cy, e, t, r);
}
function xp(e, t, r) {
  return Rp(ly, e, t, r);
}
function Rp(e, t, r, n) {
  var i = Aa(t),
    a = lt(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var fy = "never",
  ra = "always",
  vy = "observed";
function py(e) {
  e.isolateGlobalState === !0 && Wb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === ra ? !0 : t === fy ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ra ? ra : r === vy;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === ra)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (A[i] = !!e[i]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && Zb(e.reactionScheduler));
}
function hy(e, t, r, n) {
  var i = Y_(t);
  return (
    mr(function () {
      var a = Yr(e, n)[N];
      Ya(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function gy(e, t) {
  return Cp(Aa(e, t));
}
function Cp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = _y(e.observing_).map(Cp)),
    t
  );
}
function _y(e) {
  return Array.from(new Set(e));
}
var by = 0;
function Pp() {
  this.message = "FLOW_CANCELLED";
}
Pp.prototype = Object.create(Error.prototype);
var Wo = sp("flow"),
  yy = sp("flow.bound", { bound: !0 }),
  Br = Object.assign(function (t, r) {
    if (zi(r)) return Wo.decorate_20223_(t, r);
    if (dr(r)) return Bi(t, r, Wo);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++by,
          l = Qe(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          p = void 0,
          v = new Promise(function (h, f) {
            var g = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Qe(i + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Qe(i + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(O) {
              if (lt(O?.then)) {
                O.then(y, f);
                return;
              }
              return O.done ? h(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Qe(i + " - runid: " + c + " - cancel", function () {
            try {
              p && jl(p);
              var h = l.return(void 0),
                f = Promise.resolve(h.value);
              (f.then(Tr, Tr), jl(f), d(new Pp()));
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, Wo);
Br.bound = Ot(yy);
function jl(e) {
  lt(e.cancel) && e.cancel();
}
function Ci(e) {
  return e?.isMobXFlow === !0;
}
function my(e, t) {
  return e ? no(e) || !!e[N] || cu(e) || Ra(e) || to(e) : !1;
}
function Ap(e) {
  return my(e);
}
function Nt(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function xr(e) {
  return e[N];
}
var wy = {
  has: function (t, r) {
    return xr(t).has_(r);
  },
  get: function (t, r) {
    return xr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return dr(r) ? ((i = xr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return dr(r) ? ((n = xr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = xr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return xr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function Oy(e, t) {
  var r, n;
  return (
    Qv(),
    (e = Yr(e, t)),
    (n = (r = e[N]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, wy))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function $i(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Zv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
  var r = br();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && H(14), !!t);
      i++
    );
    return t;
  } finally {
    Bt(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Vi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Zv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ct(e, t) {
  var r = br(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Bt(r);
  }
}
function fu(e, t, r) {
  return (
    mr(function () {
      var n,
        i = Yr(e, r)[N];
      ((n = t) != null || (t = eb(e)),
        Ya(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Dl = "splice",
  St = "update",
  Sy = 1e4,
  Ey = {
    get: function (t, r) {
      var n = t[N];
      return r === N
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(Ca, r)
              ? Ca[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[N];
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
  vu = (function () {
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
        (this.atom_ = new Zt(r)),
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
        return $i(this, n);
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
          Vi(this, n)
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
          this.legacyMode_ && i > 0 && Np(n + i + 1));
      }),
      (t.spliceWithArray_ = function (n, i, a) {
        var o = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > u ? (n = u) : n < 0 && (n = Math.max(0, u + n)),
          arguments.length === 1
            ? (i = u - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, u - n))),
          a === void 0 && (a = Cs),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: Dl, index: n, removedCount: i, added: a });
          if (!s) return Cs;
          ((i = s.removedCount), (a = s.added));
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
          this.updateArrayLength_(u, c);
        }
        var l = this.spliceItemsIntoValues_(n, i, a);
        return (
          (i !== 0 || a.length !== 0) && this.notifyArraySplice_(n, a, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, a) {
        if (a.length < Sy) {
          var o;
          return (o = this.values_).splice.apply(o, [n, i].concat(a));
        } else {
          var u = this.values_.slice(n, n + i),
            s = this.values_.slice(n + i);
          this.values_.length += a.length - i;
          for (var c = 0; c < a.length; c++) this.values_[n + c] = a[c];
          for (var l = 0; l < s.length; l++) this.values_[n + a.length + l] = s[l];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, a) {
        var o = !this.owned_ && mi(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: St,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), u && ct(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && mi(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Dl,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
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
      (t.set_ = function (n, i) {
        var a = this.values_;
        if ((this.legacyMode_ && n > a.length && H(17, n, a.length), n < a.length)) {
          this.atom_;
          var o = a[n];
          if (Ke(this)) {
            var u = Ye(this, { type: St, object: this.proxy_, index: n, newValue: i });
            if (!u) return;
            i = u.newValue;
          }
          i = this.enhancer_(i, o);
          var s = i !== o;
          s && ((a[n] = i), this.notifyArrayChildUpdate_(n, i, o));
        } else {
          for (var c = new Array(n + 1 - a.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = i), this.spliceWithArray_(a.length, 0, c));
        }
      }),
      e
    );
  })();
function ky(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Qv(),
    mr(function () {
      var i = new vu(r, t, n, !1);
      tp(i.values_, N, i);
      var a = new Proxy(i.values_, Ey);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Ca = {
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
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[N];
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
    return this[N].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[N], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[N].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[N], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (A.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && H(37, "sort");
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
ie("reduce", Ip);
ie("reduceRight", Ip);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Ca[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[N];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function vt(e) {
  return function (t, r) {
    var n = this,
      i = this[N];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function Ip(e) {
  return function () {
    var t = this,
      r = this[N];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (a, o, u) {
        return i(a, o, u, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var xy = _r("ObservableArrayAdministration", vu);
function ro(e) {
  return Wa(e) && xy(e[N]);
}
var Ry = {},
  Kt = "add",
  Pa = "delete",
  jp = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = vr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[N] = Ry),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        lt(Map) || H(18),
        mr(function () {
          ((a.keysAtom_ = ap("ObservableMap.keys()")),
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
        if (!A.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new cr(this.has_(n), Ja, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            xp(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: a ? St : Kt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, Ke(this))) {
          var a = Ye(this, { type: Pa, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = mi(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Pa,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Nt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && ct(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var o = mi(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: St,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && ct(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Nt(function () {
            var c,
              l = new cr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = mi(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Kt,
                  object: this,
                  name: n,
                  newValue: i,
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
          i = this.keys();
        return Tl({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return Tl({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var a = Mr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          yr(n) && (n = new Map(n)),
          Nt(function () {
            Xt(n)
              ? K_(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Wr(n)
                  ? (W_(n) || H(19, n),
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
        Nt(function () {
          hp(function () {
            for (var i = Mr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Nt(function () {
            for (
              var a = Cy(n), o = new Map(), u = !1, s = Mr(i.data_.keys()), c;
              !(c = s()).done;
            ) {
              var l = c.value;
              if (!a.has(l)) {
                var d = i.delete(l);
                if (d) u = !0;
                else {
                  var p = i.data_.get(l);
                  o.set(l, p);
                }
              }
            }
            for (var v = Mr(a.entries()), h; !(h = v()).done; ) {
              var f = h.value,
                g = f[0],
                _ = f[1],
                b = i.data_.has(g);
              if ((i.set(g, _), i.data_.has(g))) {
                var y = i.data_.get(g);
                (o.set(g, y), b || (u = !0));
              }
            }
            if (!u)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), w = o.keys(), S = O.next(), x = w.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = w.next()));
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
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
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
  yr = _r("ObservableMap", jp);
function Tl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), hu(e));
}
function Cy(e) {
  if (Wr(e) || yr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Xt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var Py = {},
  Dp = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = vr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[N] = Py),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        lt(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        mr(function () {
          ((a.atom_ = ap(a.name_)), r && a.replace(r));
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
          hp(function () {
            for (var i = Mr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Mr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, Ke(this))) {
          var a = Ye(this, { type: Kt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Nt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Kt,
                    object: this,
                    newValue: n,
                  }
                : null;
          u && ct(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (Ke(this)) {
          var a = Ye(this, { type: Pa, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Pa,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Nt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
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
        return Ml({
          next: function () {
            var a = n.next(),
              o = a.value,
              u = a.done;
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
          i = this.data_.values();
        return Ml({
          next: function () {
            var o = i.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Lt(n) && !yt(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Lt(n) && !yt(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Lt(n) && !yt(n)) return n.symmetricDifference(this);
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
        if (Lt(n) && !yt(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          yt(n) && (n = new Set(n)),
          Nt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Lt(n)
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
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
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
  yt = _r("ObservableSet", Dp);
function Ml(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), hu(e));
}
var Ll = Object.create(null),
  Nl = "remove",
  Tp = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = Eb),
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
        (this.keysAtom_ = new Zt("ObservableObject.keys")),
        (this.isPlainObject_ = Xt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof dt) return (a.set(i), !0);
        if (Ke(this)) {
          var o = Ye(this, { type: St, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var u = ut(this),
            s = !1,
            c =
              u || s
                ? {
                    type: St,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && ct(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !qt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          qt(this.target_, n)
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new cr(n in this.target_, Ja, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[mt]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ha; ) {
            var u = Oa(o, n);
            if (u) {
              var s = i.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          ql(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var u = a.extend_(this, n, i, o);
        return (u && ql(this, a, n), u);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = fr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else wt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Je();
          var u = this.delete_(n);
          if (!u) return u;
          if (Ke(this)) {
            var s = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var c = Fl(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else wt(this.target_, n, l);
          var d = new cr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Kt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var s = Fl(n),
            c = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else wt(this.target_, n, c);
          (this.values_.set(n, new dt(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Ke(this)) {
          var a = Ye(this, { object: this.proxy_ || this.target_, name: n, type: Nl });
          if (!a) return null;
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
            l = (d = Oa(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof cr && (l = c.value_), wp(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var p = {
              type: Nl,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && ct(this, p);
          }
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = ut(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Kt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          o && ct(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ya(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Yr(e, t) {
  var r;
  if (qt(e, N)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Tp(e, new Map(), String(n), Mb(t));
  return (Ka(e, N, i), e);
}
var Ay = _r("ObservableObjectAdministration", Tp);
function Fl(e) {
  return (
    Ll[e] ||
    (Ll[e] = {
      get: function () {
        return this[N].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[N].setObservablePropValue_(e, r);
      },
    })
  );
}
function no(e) {
  return Wa(e) ? Ay(e[N]) : !1;
}
function ql(e, t, r) {
  var n;
  (n = e.target_[mt]) == null || delete n[r];
}
var Iy = Lp(0),
  jy = (function () {
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
  Ko = 0,
  Mp = function () {};
function Dy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Dy(Mp, Array.prototype);
var pu = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      mr(function () {
        var s = new vu(a, i, o, !0);
        ((s.proxy_ = u),
          tp(u, N, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          jy && Object.defineProperty(u, "0", Iy));
      }),
      u
    );
  }
  ip(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[N].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return ro(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return hu({
        next: function () {
          return i < n.length ? { value: n[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Kr(t, [
      {
        key: "length",
        get: function () {
          return this[N].getArrayLength_();
        },
        set: function (i) {
          this[N].setArrayLength_(i);
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
})(Mp);
Object.entries(Ca).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ka(pu.prototype, t, r);
});
function Lp(e) {
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
function Ty(e) {
  wt(pu.prototype, "" + e, Lp(e));
}
function Np(e) {
  if (e > Ko) {
    for (var t = Ko; t < e + 100; t++) Ty(t);
    Ko = e;
  }
}
Np(1e3);
function My(e, t, r) {
  return new pu(e, t, r);
}
function Aa(e, t) {
  if (typeof e == "object" && e !== null) {
    if (ro(e)) return (t !== void 0 && H(23), e[N].atom_);
    if (yt(e)) return e.atom_;
    if (yr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Ns(e)), r);
    }
    if (no(e)) {
      if (!t) return H(26);
      var n = e[N].values_.get(t);
      return (n || H(27, t, Ns(e)), n);
    }
    if (cu(e) || to(e) || Ra(e)) return e;
  } else if (lt(e) && Ra(e[N])) return e[N];
  H(28);
}
function Ly(e, t) {
  if ((e || H(29), cu(e) || to(e) || Ra(e) || yr(e) || yt(e))) return e;
  if (e[N]) return e[N];
  H(24, e);
}
function Ns(e, t) {
  var r;
  if (t !== void 0) r = Aa(e, t);
  else {
    if (qr(e)) return e.name;
    no(e) || yr(e) || yt(e) ? (r = Ly(e)) : (r = Aa(e));
  }
  return r.name_;
}
function mr(e) {
  var t = br(),
    r = Za(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), eo(r), Bt(t));
  }
}
var Bl = Ha.toString;
function Fp(e, t, r) {
  return (r === void 0 && (r = -1), Fs(e, t, r));
}
function Fs(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Bl.call(e);
  if (o !== Bl.call(t)) return !1;
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
  ((e = zl(e)), (t = zl(t)));
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
  (r < 0 && (r = -1), (n = n || []), (i = i || []));
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), u)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Fs(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var h = d[v];
      if (!(qt(t, h) && Fs(e[h], t[h], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function zl(e) {
  return ro(e) ? e.slice() : Wr(e) || yr(e) || Lt(e) || yt(e) ? Array.from(e.entries()) : e;
}
var Ul,
  Ny = ((Ul = Ga().Iterator) == null ? void 0 : Ul.prototype) || {};
function hu(e) {
  return ((e[Symbol.iterator] = Fy), Object.assign(Object.create(Ny), e));
}
function Fy() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ga();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: ey, extras: { getDebugName: Ns }, $mobx: N });
var m = ft();
const E = Qt(m),
  $l = wg({ __proto__: null, default: E }, [m]);
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!fu) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function qy(e) {
  e();
}
function By(e) {
  (e || (e = qy), py({ reactionScheduler: e }));
}
function zy(e) {
  return gy(e);
}
var Uy = 1e4,
  $y = 1e4,
  Vy = (function () {
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
            (n === void 0 && (n = Uy), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, $y));
        },
      }),
      e
    );
  })(),
  Gy = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Vy,
  Pi = new Gy(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Yo = { exports: {} },
  Jo = {};
var Vl;
function Hy() {
  if (Vl) return Jo;
  Vl = 1;
  var e = ft();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, p) {
    var v = p(),
      h = n({ inst: { value: v, getSnapshot: p } }),
      f = h[0].inst,
      g = h[1];
    return (
      a(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && g({ inst: f }));
        },
        [d, v, p],
      ),
      i(
        function () {
          return (
            s(f) && g({ inst: f }),
            d(function () {
              s(f) && g({ inst: f });
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
      : u;
  return (
    (Jo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Jo
  );
}
var Gl;
function Wy() {
  return (Gl || ((Gl = 1), (Yo.exports = Hy())), Yo.exports);
}
var Ky = Wy();
function Hl(e) {
  e.reaction = new Rt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Yy(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          Pi.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (Hl(n), (n.stateVersion = Symbol())),
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
  var i = r.current;
  (i.reaction || (Hl(i), Pi.register(r, i, i)),
    E.useDebugValue(i.reaction, zy),
    Ky.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (u) {
        o = u;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var Xo,
  Qo,
  qp = typeof Symbol == "function" && Symbol.for,
  Jy =
    (Qo =
      (Xo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Xo === void 0
        ? void 0
        : Xo.configurable) !== null && Qo !== void 0
      ? Qo
      : !1,
  Wl = qp
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Kl = qp
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function Xy(e, t) {
  var r;
  if (Kl && e.$$typeof === Kl)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if (Wl && e.$$typeof === Wl && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return Yy(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Jy && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = m.forwardRef(o)),
    (o = m.memo(o)),
    Zy(e, o),
    o
  );
}
var Qy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Zy(e, t) {
  Object.keys(e).forEach(function (r) {
    Qy[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Zo;
By(qa.unstable_batchedUpdates);
Zo = Pi.finalizeAllImmediately;
function em(e, t) {
  if (Yl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !Yl(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function Yl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Jl = Symbol("patchMixins"),
  Bp = Symbol("patchedDefinition");
function tm(e, t) {
  var r = (e[Jl] = e[Jl] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Xl(e, t) {
  for (var r = this, n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, i)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (u) {
          u.apply(r, i);
        }));
  }
}
function Ql(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    Xl.call.apply(Xl, [this, e, t].concat(a));
  };
  return r;
}
function rm(e, t, r) {
  var n = tm(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[Bp])) {
    var a = e[t],
      o = zp(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function zp(e, t, r, n, i) {
  var a,
    o = Ql(i, n);
  return (
    (a = {}),
    (a[Bp] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (s) {
      if (this === e) o = Ql(s, n);
      else {
        var c = zp(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var Zl = Symbol("ObserverAdministration"),
  ed = Symbol("isMobXReactObserver");
function qs(e) {
  var t;
  return (t = e[Zl]) != null
    ? t
    : (e[Zl] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Bs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function nm(e) {
  var t = e.prototype;
  if (e[ed]) {
    var r = Bs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[ed] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = td;
    else if (t.shouldComponentUpdate !== td)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = Bs(e);
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
        value: im.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = qs(this);
      return (
        (u.mounted = !0),
        Pi.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    rm(t, "componentWillUnmount", function () {
      var o,
        u = qs(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Bs(e) {
  return e.displayName || e.name || "<component>";
}
function im(e) {
  var t = e.bind(this),
    r = qs(this);
  function n() {
    r.reaction || ((r.reaction = am(r)), r.mounted || Pi.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = Gb(!1, t);
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
function am(e) {
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
function td(e, t) {
  return this.state !== t ? !0 : !em(this.props, e);
}
function io(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? nm(e)
      : Xy(e)
  );
}
function zs() {
  return (
    (zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zs.apply(null, arguments)
  );
}
function om(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var sm = ["children"],
  rd = E.createContext({});
function Up(e) {
  var t = e.children,
    r = om(e, sm),
    n = E.useContext(rd),
    i = E.useRef(zs({}, n, r)),
    a = i.current;
  return E.createElement(rd.Provider, { value: a }, t);
}
Up.displayName = "MobXProvider";
E.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var um = Object.defineProperty,
  cm = Object.getOwnPropertyDescriptor,
  Pt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? cm(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && um(t, r, i), i);
  };
class pt {
  constructor() {
    ((this.isLoading = !1), fu(this));
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
Pt([oe], pt.prototype, "isLoading", 2);
Pt([oe], pt.prototype, "plan", 2);
Pt([oe], pt.prototype, "planString", 2);
Pt([oe], pt.prototype, "slowQueries", 2);
Pt([oe], pt.prototype, "history", 2);
Pt([Qe.bound], pt.prototype, "showPlan", 1);
Pt([Qe.bound], pt.prototype, "saveSlowQuery", 1);
Pt([Qe.bound], pt.prototype, "saveHistory", 1);
Pt([Qe], pt.prototype, "loading", 1);
Pt([Qe], pt.prototype, "stopLoading", 1);
const lm = new pt();
var dm = Object.defineProperty,
  fm = Object.getOwnPropertyDescriptor,
  gu = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? fm(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && dm(t, r, i), i);
  };
class ao {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), fu(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
gu([oe], ao.prototype, "state", 2);
gu([oe], ao.prototype, "lastState", 2);
gu([Qe.bound], ao.prototype, "saveState", 1);
const _u = new ao();
class vm {
  constructor() {
    ((this.usersStore = lm), (this.stateStore = _u));
  }
}
const $p = new vm(),
  pm = m.createContext($p),
  oo = () => m.useContext(pm);
function fe(e, t) {
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
function hm(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Vp(e) {
  var t = hm(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function nd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Vp(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && nd(e.prototype, t),
    r && nd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return gm(e);
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
function Ai(e, t) {
  return (
    (Ai = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ai(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ai(e, t));
}
function R(e, t, r) {
  return (
    (t = Vp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function _m(e) {
  if (Array.isArray(e)) return e;
}
function bm(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (l) {
      ((c = !0), (i = l));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gp(e, t) {
  if (e) {
    if (typeof e == "string") return Us(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Us(e, t)
          : void 0
    );
  }
}
function ym() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return _m(e) || bm(e, t) || Gp(e, t) || ym();
}
var Hp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  mm = function (t) {
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
  Ia = function (t, r) {
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
  wm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  id = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  Om = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = id(o, n, i),
      s = id(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      p = d[0];
    return (c.splice(s, 0, p), c);
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
function Sm(e, t) {
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
    i = Sm(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
function ad(e, t) {
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
function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ad(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ad(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Em = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      R(this, "_isAnalyticsEvent", !0),
      R(this, "clone", function () {
        var n = es({}, r.payload);
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
          Ie(r) === "object" && (this.payload = es(es({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function km(e) {
  if (Array.isArray(e)) return Us(e);
}
function xm(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Rm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return km(e) || xm(e) || Gp(e) || Rm();
}
function Cm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function ja() {
  return (
    (ja =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Cm(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    ja.apply(null, arguments)
  );
}
function Pm(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Wp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Wp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wp = function () {
    return !!e;
  })();
}
function Am(e, t, r, n) {
  var i = ja(Y(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Im = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = Pm(this, t, [r])),
        R(n, "_isUIAnalyticsEvent", !0),
        R(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Te(n.context),
            a = Te(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        R(n, "fire", function (i) {
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
      ze(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Am(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Em),
  jm = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Dm = function () {
    return m.useContext(jm);
  },
  Da = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function Tm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Mm(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    i = m.useRef(r),
    a = n.current || !!(t && i.current.inputs && Tm(t, i.current.inputs)),
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
function Lm(e, t) {
  return Mm(function () {
    return e;
  }, t);
}
function Kp() {
  var e = Dm(),
    t = Lm(
      function (r) {
        return new Im({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function od(e, t) {
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
function Nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? od(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ii(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Kp(),
    c = s.createAnalyticsEvent,
    l = Da(u),
    d = Da(t),
    p = m.useCallback(
      function (v) {
        var h = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = Nm({ componentName: n, packageName: a, packageVersion: o }, l.current);
        h.context.push(f);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(v, h));
      },
      [r, n, i, a, o, c, l, d],
    );
  return p;
}
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
function Fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ud(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    u = Kp(),
    s = u.createAnalyticsEvent,
    c = Da(o),
    l = Da(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = Fm({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var h = p.clone();
        (h && h.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var hr = "ASC",
  Ta = "DESC",
  qm = "small",
  Ma = "large",
  Yp = 0.22;
const Bm = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, Bm) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Jp(e, t, r) {
  return e ?? "var(--c-, )";
}
var zm = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Um = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ne(e, zm);
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
        u,
        {
          "data-testid": a && "".concat(a, "--table"),
          className: C([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  $m = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Vm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Gm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Hm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
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
  Wm = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function ld(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Km(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Xp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Xp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xp = function () {
    return !!e;
  })();
}
var dd = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Ym = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === hr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = dd(s.cells, t, n),
        d = dd(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (Ie(l) !== Ie(d)) {
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
function Jm(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = Km(this, n, [].concat(o))), R(i, "state", { pageRows: [] }), i);
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
              var u = a.forwardedRef,
                s = ne(a, Wm);
              return E.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (a, o) {
              var u = a.rows,
                s = a.head,
                c = a.sortKey,
                l = a.sortOrder,
                d = a.page,
                p = a.rowsPerPage,
                v = a.isTotalPagesControlledExternally;
              Ia(c, s);
              var h, f;
              return (
                v ? ((h = u), (f = u)) : ((h = Ym(s, u, c, l) || []), (f = Hp(h, d, p))),
                ld(ld({}, o), {}, { pageRows: f })
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
var Xm = "--local-dynamic-table-width",
  Qp = function (t) {
    var r = t.width;
    return typeof r < "u" ? R({}, Xm, "".concat(r, "%")) : void 0;
  },
  Qm = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Zm = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, Qm);
    return m.createElement(
      "td",
      te(
        {
          style: Qp({ width: r }),
          ref: a,
          className: C([
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
  e0 = ["isHighlighted", "children", "style", "testId", "className"],
  t0 = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ne(e, e0);
    return m.createElement(
      "tr",
      te(
        {
          style: i,
          className: C([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        u,
        { ref: t, "data-testid": a },
      ),
      n,
    );
  }),
  r0 = ["cells"],
  n0 = ["content", "testId"],
  i0 = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ne(r, r0);
    return E.createElement(
      t0,
      te(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (i && "".concat(i, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          p = c.testId,
          v = ne(c, n0),
          h = (n || { cells: [] }).cells[l] || {},
          f = h.shouldTruncate,
          g = h.width;
        return E.createElement(
          Zm,
          te({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
            isFixedSize: a,
            key: l,
            shouldTruncate: f,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function a0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Zp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Zp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zp = function () {
    return !!e;
  })();
}
var o0 = (function (e) {
    function t() {
      return (fe(this, t), a0(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.pageRows,
              a = n.head,
              o = n.isFixedSize,
              u = n.highlightedRowIndex,
              s = n.testId,
              c = n.forwardedRef;
            return E.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              i.map(function (l, d) {
                return E.createElement(i0, {
                  head: a,
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
  })(E.Component),
  s0 = Jm(
    E.forwardRef(function (e, t) {
      return E.createElement(o0, te({}, e, { forwardedRef: t }));
    }),
  );
function u0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, eh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eh = function () {
    return !!e;
  })();
}
var c0 = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = u0(this, t, [r])), (n.state = { hasError: !1 }), n);
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
})(E.Component);
const bu = m.createContext(null);
var l0 = "#FFFFFF",
  $s = "#42526E",
  d0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function f0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat($s, ")")
    : "var(--ds-icon-inverse, ".concat(l0, ")");
}
var na = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  v0 = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  th = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "inherit" : n,
        a = t.delay,
        o = a === void 0 ? 0 : a,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        p = typeof l == "number" ? l : d0[l],
        v = "".concat(o, "ms"),
        h = f0(i),
        f = m.useContext(bu);
      return (
        v0(
          function () {
            if (f != null) return f.hold(u);
          },
          [f, u],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: C([na.wrapperStyles, na.rotateStyles]),
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
              "aria-label": s || void 0,
              style: { animationDelay: v },
              role: s ? "img" : "none",
              className: C([na.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([na.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var pd = "--contents-opacity",
  p0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  h0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: vd(vd({}, R({}, pd, n)), {}, { "--_cnddr8": Jp("var(".concat(pd, ")")) }),
      },
      r,
    );
  },
  g0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function _0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, rh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rh = function () {
    return !!e;
  })();
}
var nh = (function (e) {
  function t() {
    return (fe(this, t), _0(this, t, arguments));
  }
  return (
    ze(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            u = n.contentsOpacity,
            s = n.testId,
            c = n.loadingLabel;
          return E.createElement(
            p0,
            { testId: s },
            a ? E.createElement(h0, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                g0,
                { testId: s },
                E.createElement(th, {
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
})(E.Component);
R(nh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ma,
  contentsOpacity: Yp,
  loadingLabel: "Loading table",
});
var b0 = ["children", "testId"],
  y0 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, b0);
    return m.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  m0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  w0 = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function O0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ih() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ih = function () {
    return !!e;
  })();
}
var ah = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = O0(this, t, [].concat(i))),
      R(r, "spinnerRef", E.createRef()),
      R(r, "containerRef", E.createRef()),
      R(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      R(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      R(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      R(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      R(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      R(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      R(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      R(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      R(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      R(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      R(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      R(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          u = r.props,
          s = u.isLoading,
          c = u.contentsOpacity;
        o &&
          o.style &&
          Ie(o.style) === "object" &&
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
            i,
            a = window.innerHeight,
            o = this.getTargetNode(),
            u = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !u)) {
            var s = o.getBoundingClientRect(),
              c = u.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(s, a),
              p = s.top,
              v = s.bottom,
              h = s.height;
            if (d) {
              var f = h >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, a)) {
                if (p >= 0) {
                  var g = a - p,
                    _ = g / 2 + p - l / 2,
                    b = g < l * 3 ? p + l : _;
                  this.translateSpinner(u, b, !0);
                } else if (p < 0 && v > a) {
                  var y = a / 2 - l / 2;
                  this.translateSpinner(u, y, !0);
                } else {
                  var O = v / 2 - l / 2,
                    w = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, a)) return;
            var S = (i = this.containerRef) === null || i === void 0 ? void 0 : i.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                T = (p - x) / 2;
              this.translateSpinner(u, T, !1);
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
            u = n.testId,
            s = n.loadingLabel;
          return E.createElement(
            y0,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                m0,
                { testId: u },
                E.createElement(
                  w0,
                  { ref: this.spinnerRef },
                  E.createElement(th, {
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
})(E.Component);
R(ah, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ma,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Yp), ")"),
  loadingLabel: "Loading table",
});
function S0(e) {
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
    u = m.useRef(r);
  m.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : a,
    c = m.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var Jn = {},
  Xn = {};
function hd(e, t, r, n, i, a, o) {
  try {
    var u = e[a](o),
      s = u.value;
  } catch (c) {
    return void r(c);
  }
  u.done ? t(s) : Promise.resolve(s).then(n, i);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, i) {
      var a = e.apply(t, r);
      function o(s) {
        hd(a, n, i, o, u, "next", s);
      }
      function u(s) {
        hd(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var ts = { exports: {} },
  rs = { exports: {} },
  gd;
function oh() {
  return (
    gd ||
      ((gd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(rs)),
    rs.exports
  );
}
var ns = { exports: {} },
  is = { exports: {} },
  _d;
function sh() {
  return (
    _d ||
      ((_d = 1),
      (function (e) {
        function t(r, n, i, a) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (s, c, l, d) {
              function p(v, h) {
                t(s, v, function (f) {
                  return this._invoke(v, h, f);
                });
              }
              c
                ? o
                  ? o(s, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[c] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, i, a));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(is)),
    is.exports
  );
}
var bd;
function uh() {
  return (
    bd ||
      ((bd = 1),
      (function (e) {
        var t = sh();
        function r() {
          var n,
            i,
            a = typeof Symbol == "function" ? Symbol : {},
            o = a.iterator || "@@iterator",
            u = a.toStringTag || "@@toStringTag";
          function s(g, _, b, y) {
            var O = _ && _.prototype instanceof l ? _ : l,
              w = Object.create(O.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, x, T) {
                  var j,
                    P,
                    M,
                    z = 0,
                    B = T || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, F) {
                        return ((j = X), (P = 0), (M = n), (J.n = F), c);
                      },
                    };
                  function G($, X) {
                    for (P = $, M = X, i = 0; !V && z && !F && i < B.length; i++) {
                      var F,
                        I = B[i],
                        be = J.p,
                        ae = I[2];
                      $ > 3
                        ? (F = ae === X) &&
                          ((M = I[(P = I[4]) ? 5 : ((P = 3), 3)]), (I[4] = I[5] = n))
                        : I[0] <= be &&
                          ((F = $ < 2 && be < I[1])
                            ? ((P = 0), (J.v = X), (J.n = I[1]))
                            : be < ae &&
                              (F = $ < 3 || I[0] > X || X > ae) &&
                              ((I[4] = $), (I[5] = X), (J.n = ae), (P = 0)));
                    }
                    if (F || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, F) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, F), P = X, M = F; (i = P < 2 ? n : M) || !V; ) {
                      j || (P ? (P < 3 ? (P > 1 && (J.n = -1), G(P, M)) : (J.n = M)) : (J.v = M));
                      try {
                        if (((z = 2), j)) {
                          if ((P || ($ = "next"), (i = j[$]))) {
                            if (!(i = i.call(j, M)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((M = i.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (i = j.return) && i.call(j),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (P = 1)));
                          j = n;
                        } else if ((i = (V = J.n < 0) ? M : S.call(x, J)) !== c) break;
                      } catch (I) {
                        ((j = n), (P = 1), (M = I));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: i, done: V };
                  };
                })(g, b, y),
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
            h = (p.prototype = l.prototype = Object.create(v));
          function f(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, p)
                : ((g.__proto__ = p), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = p),
            t(h, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, u, "GeneratorFunction"),
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
                return { w: s, m: f };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ns)),
    ns.exports
  );
}
var as = { exports: {} },
  os = { exports: {} },
  ss = { exports: {} },
  yd;
function ch() {
  return (
    yd ||
      ((yd = 1),
      (function (e) {
        var t = oh(),
          r = sh();
        function n(i, a) {
          function o(s, c, l, d) {
            try {
              var p = i[s](c),
                v = p.value;
              return v instanceof t
                ? a.resolve(v.v).then(
                    function (h) {
                      o("next", h, l, d);
                    },
                    function (h) {
                      o("throw", h, l, d);
                    },
                  )
                : a.resolve(v).then(
                    function (h) {
                      ((p.value = h), l(p));
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
                  return new a(function (p, v) {
                    o(s, l, p, v);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ss)),
    ss.exports
  );
}
var md;
function lh() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        var t = uh(),
          r = ch();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(os)),
    os.exports
  );
}
var wd;
function E0() {
  return (
    wd ||
      ((wd = 1),
      (function (e) {
        var t = lh();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(as)),
    as.exports
  );
}
var us = { exports: {} },
  Od;
function k0() {
  return (
    Od ||
      ((Od = 1),
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
      })(us)),
    us.exports
  );
}
var cs = { exports: {} },
  ls = { exports: {} },
  Sd;
function x0() {
  return (
    Sd ||
      ((Sd = 1),
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
      })(ls)),
    ls.exports
  );
}
var Ed;
function R0() {
  return (
    Ed ||
      ((Ed = 1),
      (function (e) {
        var t = x0().default;
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
      })(cs)),
    cs.exports
  );
}
var kd;
function C0() {
  return (
    kd ||
      ((kd = 1),
      (function (e) {
        var t = oh(),
          r = uh(),
          n = E0(),
          i = lh(),
          a = ch(),
          o = k0(),
          u = R0();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var g = typeof f == "function" && f.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(f) {
            var g, _;
            return function (b) {
              (g ||
                ((g = {
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
                    return ((g.resultName = w), _(b.d, u(O), S));
                  },
                  finish: function (O) {
                    return _(b.f, O);
                  },
                }),
                (_ = function (O, w, S) {
                  ((b.p = g.prev), (b.n = g.next));
                  try {
                    return O(w, S);
                  } finally {
                    g.next = b.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = b.v), (g.resultName = void 0)),
                (g.sent = b.v),
                (g.next = b.n));
              try {
                return f.call(this, g);
              } finally {
                ((b.p = g.prev), (b.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (_, b, y, O) {
                  return c.w(h(_), b, y, O && O.reverse());
                },
                isGeneratorFunction: p,
                mark: c.m,
                awrap: function (_, b) {
                  return new t(_, b);
                },
                AsyncIterator: a,
                async: function (_, b, y, O, w) {
                  return (p(b) ? i : n)(h(_), b, y, O, w);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ts)),
    ts.exports
  );
}
var ds, xd;
function P0() {
  if (xd) return ds;
  xd = 1;
  var e = C0()();
  ds = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ds;
}
var A0 = P0();
const q = Qt(A0);
var or = {},
  Rr = {},
  ia = {},
  Qn = {},
  Rd;
function I0() {
  if (Rd) return Qn;
  ((Rd = 1),
    Object.defineProperty(Qn, "__esModule", { value: !0 }),
    (Qn.V1InitializeContainer = void 0));
  const e = xt();
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
  return ((Qn.V1InitializeContainer = t), Qn);
}
var Zn = {},
  Cd;
function j0() {
  if (Cd) return Zn;
  ((Cd = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn.V2InitializeContainer = void 0));
  const e = xt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var i, a, o;
      const u = this._getResultFromLookup(this._values.feature_gates, n);
      return u
        ? {
            name: n,
            value: u.v === !0,
            rule_id: (i = u.r) !== null && i !== void 0 ? i : "default",
            secondary_exposures: (a = u.s) !== null && a !== void 0 ? a : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var i, a, o, u;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (i = this._values.values[s.v]) !== null && i !== void 0 ? i : {},
            rule_id: s.r,
            secondary_exposures: (a = s.s) !== null && a !== void 0 ? a : [],
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
      var i, a, o, u, s, c;
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
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Zn.V2InitializeContainer = t), Zn);
}
var Pd;
function D0() {
  if (Pd) return ia;
  ((Pd = 1), Object.defineProperty(ia, "__esModule", { value: !0 }));
  const e = xt(),
    t = I0(),
    r = j0();
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
      var u, s;
      if (!a) return !1;
      const c = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = a.source),
          c?.has_updates !== !0 ||
            ((u = c.time) !== null && u !== void 0 ? u : 0) < this._lcut ||
            ((this._rawValues = a.data),
            (this._lcut = c.time),
            (this._receivedAt = a.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, c)),
            a.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (s = c.sdk_flags) !== null && s !== void 0 ? s : {})),
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
      const u = {};
      return (
        o.user && (u.user = o.user),
        o.sdkInfo && (u.generatorSDKInfo = o.sdkInfo),
        (u.lcut = o.time),
        u
      );
    }
    _getDetailedStoreResult(a) {
      return { result: a, details: this._getDetails(a == null) };
    }
    _setWarningState(a, o) {
      var u, s;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((u = a.customIDs) === null || u === void 0 ? void 0 : u.stableID) !== c &&
        ((!((s = a.customIDs) === null || s === void 0) && s.stableID) || c)
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
      var o, u;
      const s = this.getCurrentSourceDetails();
      let c = s.reason;
      const l = (o = s.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (u = this._bootstrapMetadata) !== null && u !== void 0
          ? u
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: c }));
    }
  };
  return ((ia.default = n), ia);
}
var Cr = {},
  ei = {},
  Ad;
function T0() {
  if (Ad) return ei;
  ((Ad = 1),
    Object.defineProperty(ei, "__esModule", { value: !0 }),
    (ei._resolveDeltasResponse = void 0));
  const e = xt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
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
  ei._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return ei;
}
var Id;
function dh() {
  if (Id) return Cr;
  Id = 1;
  var e =
    (Cr && Cr.__awaiter) ||
    function (i, a, o, u) {
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
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = xt(),
    r = T0();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, h, f;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
          user: s,
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
        if (g?.has_updates) {
          const b =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: b ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
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
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Cr.default = n), Cr);
}
var ti = {},
  jd;
function M0() {
  if (jd) return ti;
  ((jd = 1),
    Object.defineProperty(ti, "__esModule", { value: !0 }),
    (ti._makeParamStoreGetter = void 0));
  const e = xt(),
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
  function u(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, h, p);
        case "experiment":
          return u(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((ti._makeParamStoreGetter = c), ti);
}
var sr = {},
  Dd;
function L0() {
  if (Dd) return sr;
  Dd = 1;
  var e =
    (sr && sr.__awaiter) ||
    function (i, a, o, u) {
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
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0));
  const t = xt(),
    r = dh();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var Td;
function N0() {
  if (Td) return Rr;
  Td = 1;
  var e =
    (Rr && Rr.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            g(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function g(_) {
          _.done ? p(_.value) : d(_.value).then(h, f);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  const t = xt(),
    r = D0(),
    n = dh(),
    i = M0(),
    a = L0();
  let o = class Vs extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof Vs
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Vs(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
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
        (this._store = new r.default(s)),
        (this._network = v),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const h = c?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && v?.source === "Bootstrap")
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
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
      let s = {};
      try {
        s = JSON.parse(JSON.stringify(this._user));
      } catch {
        t.Log.error("Failed to parse user");
      }
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: s,
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
      var l, d, p;
      const v = (0, t._normalizeUser)(s, c),
        h = (l = v.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (h) {
        const f =
          (p = (d = this.storageProvider).isReadyResolver) === null || p === void 0
            ? void 0
            : p.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(h, this._sdkKey),
              () => t.StableID.setOverride(h, this._sdkKey),
            )
          : t.StableID.setOverride(h, this._sdkKey);
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
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
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
      const { result: p, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
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
      var l, d, p, v;
      const { result: h, details: f } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, f, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
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
            : v.call(p, g, this._user, c),
        b = _ ?? g;
      return (
        this._enqueueExposure(
          s,
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
    _getLayerImpl(s, c) {
      var l, d, p;
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
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
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
            : d.call(l, h, c);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        h
      );
    }
  };
  return ((Rr.default = o), Rr);
}
var Md;
function F0() {
  return (
    Md ||
      ((Md = 1),
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
        const n = xt(),
          i = N0();
        ((e.StatsigClient = i.default), r(xt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(or)),
    or
  );
}
var st = F0(),
  fs = { exports: {} },
  Ld;
function q0() {
  return (
    Ld ||
      ((Ld = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, c, l) {
          ((this.fn = s), (this.context = c), (this.once = l || !1));
        }
        function a(s, c, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new i(l, d || s, p),
            h = r ? r + c : c;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], v])
                : s._events[h].push(v)
              : ((s._events[h] = v), s._eventsCount++),
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
            for (var p = 0, v = d.length, h = new Array(v); p < v; p++) h[p] = d[p].fn;
            return h;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, p, v, h) {
            var f = r ? r + c : c;
            if (!this._events[f]) return !1;
            var g = this._events[f],
              _ = arguments.length,
              b,
              y;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), _)) {
                case 1:
                  return (g.fn.call(g.context), !0);
                case 2:
                  return (g.fn.call(g.context, l), !0);
                case 3:
                  return (g.fn.call(g.context, l, d), !0);
                case 4:
                  return (g.fn.call(g.context, l, d, p), !0);
                case 5:
                  return (g.fn.call(g.context, l, d, p, v), !0);
                case 6:
                  return (g.fn.call(g.context, l, d, p, v, h), !0);
              }
              for (y = 1, b = new Array(_ - 1); y < _; y++) b[y - 1] = arguments[y];
              g.fn.apply(g.context, b);
            } else {
              var O = g.length,
                w;
              for (y = 0; y < O; y++)
                switch ((g[y].once && this.removeListener(c, g[y].fn, void 0, !0), _)) {
                  case 1:
                    g[y].fn.call(g[y].context);
                    break;
                  case 2:
                    g[y].fn.call(g[y].context, l);
                    break;
                  case 3:
                    g[y].fn.call(g[y].context, l, d);
                    break;
                  case 4:
                    g[y].fn.call(g[y].context, l, d, p);
                    break;
                  default:
                    if (!b) for (w = 1, b = new Array(_ - 1); w < _; w++) b[w - 1] = arguments[w];
                    g[y].fn.apply(g[y].context, b);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, l, d) {
            return a(this, c, l, d, !1);
          }),
          (u.prototype.once = function (c, l, d) {
            return a(this, c, l, d, !0);
          }),
          (u.prototype.removeListener = function (c, l, d, p) {
            var v = r ? r + c : c;
            if (!this._events[v]) return this;
            if (!l) return (o(this, v), this);
            var h = this._events[v];
            if (h.fn) h.fn === l && (!p || h.once) && (!d || h.context === d) && o(this, v);
            else {
              for (var f = 0, g = [], _ = h.length; f < _; f++)
                (h[f].fn !== l || (p && !h[f].once) || (d && h[f].context !== d)) && g.push(h[f]);
              g.length ? (this._events[v] = g.length === 1 ? g[0] : g) : o(this, v);
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
      })(fs)),
    fs.exports
  );
}
var B0 = q0();
const z0 = Qt(B0);
function Nd(e, t) {
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
      ? Nd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var aa = "@all-features",
  U0 = (function () {
    function e() {
      (fe(this, e), R(this, "eventToValue", new Map()), (this.emitter = new z0()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = i(r, Ht(Ht({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = i(r, Ht(Ht({}, a), {}, { fireGateExposure: !1 })),
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
        value: function (r, n, i, a, o, u) {
          var s = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, i, Ht(Ht({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var v = o(r, n, i, Ht(Ht({}, u), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(a);
            h !== v && (s.eventToValue.set(a, v), a(v));
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
            this.emitter.on(aa, r),
            function () {
              n.emitter.off(aa, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(aa),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== aa;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  $0 = "fedramp-moderate";
function V0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === $0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var yu = (function (e) {
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
  gi = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  ji = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  G0 = [
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
function Fd(e, t) {
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
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var oa = function (t) {
    return Gs({ perimeter: V0() ? ji.FEDRAMP_MODERATE : ji.COMMERCIAL }, t);
  },
  ri = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var h = K(p, 1),
        f = h[0],
        g = K(v, 1),
        _ = g[0];
      return f.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var u = K(n[o], 2),
        s = u[1],
        c = K(i[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  qd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  H0 = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      i = t.loggingIntervalMillis,
      a = t.loggingBufferMaxSize,
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
    var p = ne(t, G0);
    return Gs(
      Gs({}, p),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: u ? u + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
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
  W0 = Object.entries(yu).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  fh = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = W0.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : yu.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  Hs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Bd = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = u));
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
            var u = Array.isArray(n) ? "array" : Ie(n),
              s = Array.isArray(o) ? "array" : Ie(o);
            if (i) {
              var c;
              return i(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, u, s),
                  n);
            }
            return n == null || u === s
              ? (this.fireExposure(r), o)
              : ((a = this._onDefaultValueFallback) === null ||
                  a === void 0 ||
                  a.call(this, this, r, u, s),
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
                fh(r.details),
                Hs(
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
  zd = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = a),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = i),
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
          value: function (r, n, i) {
            var a = this,
              o = this._value[r];
            if (o == null) return n;
            var u = function () {
              return (a._logLayerParameterExposure(r), o);
            };
            return i
              ? i(o)
                ? u()
                : n
              : n == null || (Ie(o) === Ie(n) && Array.isArray(n) === Array.isArray(o))
                ? u()
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
              u,
              s,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                fh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Hs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Hs(
                  (a =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && a !== void 0
                    ? a
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
  Lr = "0.0.0-development";
function K0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function vh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vh = function () {
    return !!e;
  })();
}
function Y0(e, t, r) {
  if (vh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && Ai(i, r.prototype), i);
}
function Ws(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ws = function (n) {
      if (n === null || !K0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return Y0(n, arguments, Y(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ai(i, n)
      );
    }),
    Ws(e)
  );
}
function J0(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, ph() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function ph() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ph = function () {
    return !!e;
  })();
}
var Ud = (function (e) {
  function t(r) {
    return (fe(this, t), J0(this, t, [r]));
  }
  return (ze(t, e), ve(t));
})(Ws(Error));
function $d(e, t) {
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
function X0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Q0 = 5e3,
  Z0 = "https://api.atlassian.com/flags",
  ew = "https://api.stg.atlassian.com/flags",
  tw = "https://api.dev.atlassian.com/flags",
  rw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  nw = "https://api.atlassian-us-gov-mod.com/flags",
  iw = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  aw = "oasis-stg.com/flags",
  ow = "atlassian-isolated.net/flags",
  sw = "/gateway/api/flags",
  vs = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            q.mark(function n(i) {
              var a, o;
              return q.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (a = i.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(a)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(o, "GET", i)
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
            q.mark(function n(i, a, o) {
              var u;
              return q.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (u = { identifiers: a, customAttributes: o, targetApp: i.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", i, u)
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
            q.mark(function n(i) {
              var a;
              return q.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (i.ok) {
                        u.next = 5;
                        break;
                      }
                      return ((u.next = 3), i.text());
                    case 3:
                      throw (
                        (a = u.sent),
                        new Ud(
                          "Non 2xx response status received, status: "
                            .concat(i.status, ", body: ")
                            .concat(JSON.stringify(a)),
                        )
                      );
                    case 5:
                      if (i.status !== 204) {
                        u.next = 7;
                        break;
                      }
                      throw new Ud("Unexpected 204 response");
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
            q.mark(function n(i) {
              var a;
              return q.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return ((u.next = 2), i.text());
                    case 2:
                      return ((a = u.sent), u.abrupt("return", JSON.parse(a)));
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
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return sw;
          if (i === ji.FEDRAMP_MODERATE)
            switch (r) {
              case gi.Production:
                return nw;
              case gi.Staging:
                return rw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === ji.COMMERCIAL)
            switch (r) {
              case gi.Development:
                return tw;
              case gi.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : ew;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : Z0;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            q.mark(function n(i, a, o, u) {
              var s, c, l, d, p;
              return q.wrap(
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
                          (c = o.fetchTimeoutMs || Q0),
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
                            "".concat(s).concat(i),
                            X0(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Lr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
                            ),
                          )
                        );
                      case 5:
                        return ((p = h.sent), (h.next = 8), this.handleResponseError(p));
                      case 8:
                        return ((h.next = 10), this.extractResponseBody(p));
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
          if (n === void 0) return r ? iw.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(aw);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(ow) : null;
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
function Vd(e, t) {
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
function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uw(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, hh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function hh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hh = function () {
    return !!e;
  })();
}
function cw(e, t, r, n) {
  var i = ja(Y(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var lw = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = uw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      R(r, "bootstrapResult", null),
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
            q.mark(function i(a, o) {
              return q.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
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
            q.mark(function i(a, o, u) {
              return q.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ni(
                              ni({}, this.bootstrapResult),
                              {},
                              { fullUserHash: st._getFullUserHash(o) },
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
            ni(ni({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            q.mark(function i(a, o, u) {
              return q.wrap(function (c) {
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
          var i = st._getStorageKey(this._getSdkKey(), n);
          return "".concat(st.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
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
          cw(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ni({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
function Gd(e, t) {
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
      ? Gd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function dw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = fw(e)) || t) {
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
      ((u = !0), (a = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (u) throw a;
      }
    },
  };
}
function fw(e, t) {
  if (e) {
    if (typeof e == "string") return Hd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Hd(e, t)
          : void 0
    );
  }
}
function Hd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ps = "LocalOverride:Recognized",
  vw = "STATSIG_OVERRIDES",
  Wd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Pr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  He = function (t, r) {
    return r + ":" + t;
  },
  pw = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Pr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
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
          for (var r = Pr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          for (var o = 0, u = i; o < u.length; o++) {
            for (
              var s = u[o],
                c = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              c < l.length;
              c++
            ) {
              var d,
                p = K(l[c], 2),
                v = p[0],
                h = p[1];
              r.gates[v] = h;
            }
            for (
              var f = 0, g = Object.entries((_ = s.configs) !== null && _ !== void 0 ? _ : {});
              f < g.length;
              f++
            ) {
              var _,
                b = K(g[f], 2),
                y = b[0],
                O = b[1];
              r.configs[y] = O;
            }
            for (
              var w = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < S.length;
              w++
            ) {
              var x,
                T = K(S[w], 2),
                j = T[0],
                P = T[1];
              r.layers[j] = P;
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
            this.parseStoredOverrides(Wd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Wd);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = dw(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = Ge._DJB2(c);
                o.has(l) && delete a[l];
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
          var n = xe(xe({}, Pr()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = K(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(He(Ge._DJB2(p), u), v);
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
            this._djb2Map.set(He(Ge._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "gates")),
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
                : this._djb2Map.get(He(r.name, "gates"));
          return a == null
            ? null
            : xe(xe({}, r), {}, { value: a, details: xe(xe({}, r.details), {}, { reason: ps }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(He(Ge._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "layers")),
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
          var i,
            a =
              (i = this._overrides.layers[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(He(r.name, "layers"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: ps }),
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
                : this._djb2Map.get(He(r.name, "configs"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: ps }),
                },
              );
        },
      },
    ]);
  })(),
  hw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Kd(e, t) {
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
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Yd = "client-default-key",
  gw = "https://xp.atlassian.com/v1/rgstr",
  _w = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? vw : n,
        a = r.overrideAdapter;
      (fe(this, e),
        R(this, "initPromise", null),
        R(this, "initCompleted", !1),
        R(this, "initWithDefaults", !1),
        R(this, "hasCheckGateErrorOccurred", !1),
        R(this, "hasGetExperimentErrorOccurred", !1),
        R(this, "hasGetExperimentValueErrorOccurred", !1),
        R(this, "hasGetLayerErrorOccurred", !1),
        R(this, "hasGetLayerValueErrorOccurred", !1),
        R(this, "subscriptions", new U0()),
        R(this, "dataAdapter", new lw()),
        R(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new pw(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            q.mark(function n(i, a, o) {
              var u = this,
                s,
                c;
              return q.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = oa(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ri(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, a, o)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                v = p - c;
                              u.fireClientEvent(c, v, "initialize", u.initCompleted, s.apiKey);
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
            q.mark(function n(i, a, o, u) {
              var s = this,
                c,
                l;
              return q.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((c = oa(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ri(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Lr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, a, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                h = v - l;
                              s.fireClientEvent(
                                l,
                                h,
                                "initializeWithProvider",
                                s.initCompleted,
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
            u = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Wt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Lr,
                    success: a,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
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
                u.initOptions.environment !== gi.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            q.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return q.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = oa(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ri(c, this.initOptions) ||
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
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, a, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                f = h - l;
                              u.fireClientEvent(l, f, "initializeFromValues", u.initCompleted);
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
            q.mark(function n(i, a, o) {
              var u, s;
              return q.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = oa(i)),
                          (s = function () {
                            return vs.fetchExperimentValues(u, a, o).then(function (p) {
                              var v = p.experimentValues,
                                h = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, a, o)
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
            q.mark(function n(i, a) {
              var o = this;
              return q.wrap(
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
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, i, a));
                      case 5:
                        return (
                          (s.next = 7),
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
                        return s.stop();
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
            q.mark(function n(i, a) {
              var o,
                u,
                s = arguments;
              return q.wrap(
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
                              customAttributesFromFetch: a,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, i, a)
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
            q.mark(function n() {
              return q.wrap(
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
            return Bd.fromExperiment(
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
              new Bd(r, {}, "", { time: Date.now(), reason: yu.Error })
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
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
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
          return ri(this.currentIdentifiers, r) && ri(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var i = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var c = a.fireGateExposure,
                l = c === void 0 ? !0 : c;
              l && i.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
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
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = u.fireExperimentExposure,
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
            q.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, h;
              return q.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Wt({}, i)),
                          (g.prev = 1),
                          (l = vs.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = vs.fetchExperimentValues(i, a, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = g.sent),
                          (v = K(p, 2)),
                          (h = v[1]),
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
                          this.initFromValues(u, a, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(u, a, c, s));
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
            q.mark(function n(i, a, o, u) {
              var s, c, l, d, p, v, h, f;
              return q.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (s = Wt(Wt({}, i), {}, { disableCurrentPageLogging: !0 })),
                          (_.prev = 1),
                          (_.next = 4),
                          a.setProfile(i, o, u)
                        );
                      case 4:
                        return (
                          (d = a.getClientSdkKey().then(function (b) {
                            return (s.sdkKey = b);
                          })),
                          (p = a.getExperimentValues()),
                          (_.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = _.sent),
                          (h = K(v, 2)),
                          (f = h[1]),
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
                          this.initFromValues(s, o, u)
                        );
                      case 21:
                        throw _.t0;
                      case 22:
                        return _.abrupt("return", this.initFromValues(s, o, l, c));
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
            q.mark(function n(i, a, o) {
              var u,
                s,
                c,
                l,
                d,
                p,
                v,
                h = arguments;
              return q.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = H0(i)),
                          c.sdkKey || (c.sdkKey = Yd),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Wt(
                              Wt({}, c.networkConfig),
                              {},
                              { logEventUrl: gw },
                            )),
                          c.perimeter === ji.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ne(c, hw)),
                          (this.user = qd(a, o)),
                          (v = Wt(
                            Wt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: st.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? st.StableID.setOverride(a.stableId, l)
                            : (v.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new st.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new st.StatsigClient(Yd, this.user, v)),
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
            q.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l;
              return q.wrap(
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
                          (s = this.initPromise),
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
                              q.mark(function v() {
                                return q.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
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
            q.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, h, f;
              return q.wrap(
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
                        ((c = _.sent), (l = qd(a, c.customAttributesFromFetch)), (_.next = 13));
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
                          ((h = !0),
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
                        ((_.prev = 23), (_.t1 = _.catch(15)), (h = !1), (f = String(_.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, h, f),
                          !h)
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
          return Lr;
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
            return zd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              zd.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              i
            );
          }
        },
      },
    ]);
  })(),
  D,
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
D = U;
R(U, "client", new _w());
R(U, "hasCheckGateErrorOccurred", !1);
R(U, "hasGetExperimentValueErrorOccurred", !1);
R(U, "checkGate", function (e, t) {
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
R(U, "getExperimentValue", function (e, t, r, n) {
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
      D.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (D.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return D.client.getExperimentValue(e, t, r, n);
});
R(U, "initializeCalled", D.client.initializeCalled.bind(D.client));
R(U, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
R(U, "waitUntilInitializeCompleted", D.client.waitUntilInitializeCompleted.bind(D.client));
R(U, "initialize", D.client.initialize.bind(D.client));
R(U, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
R(U, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
R(U, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
R(U, "getExperiment", D.client.getExperiment.bind(D.client));
R(U, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
R(U, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
R(U, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
R(U, "overrideGate", D.client.overrideGate.bind(D.client));
R(U, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
R(U, "overrideConfig", D.client.overrideConfig.bind(D.client));
R(U, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
R(U, "setOverrides", D.client.setOverrides.bind(D.client));
R(U, "getOverrides", D.client.getOverrides.bind(D.client));
R(U, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
R(U, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
R(U, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
R(U, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
R(U, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
R(U, "updateUser", D.client.updateUser.bind(D.client));
R(U, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
R(U, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
R(U, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
R(U, "getLayer", D.client.getLayer.bind(D.client));
R(U, "getLayerValue", D.client.getLayerValue.bind(D.client));
var Ks = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var sa, hs;
    Ks = window.__FEATUREGATES_JS__;
    var Jd =
      ((sa = Ks) === null || sa === void 0 || (hs = sa.getPackageVersion) === null || hs === void 0
        ? void 0
        : hs.call(sa)) || "4.10.0 or earlier";
    if (Jd !== Lr) {
      var bw = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Jd, " when module version ")
        .concat(Lr, " was loading.");
      console.warn(bw);
    }
  }
var Ar,
  Ir,
  yw =
    (globalThis == null ||
    (Ar = globalThis.process) === null ||
    Ar === void 0 ||
    (Ar = Ar.env) === null ||
    Ar === void 0
      ? void 0
      : Ar.JEST_WORKER_ID) !== void 0,
  mw =
    !yw &&
    (globalThis == null ||
    (Ir = globalThis.process) === null ||
    Ir === void 0 ||
    (Ir = Ir.env) === null ||
    Ir === void 0
      ? void 0
      : Ir.NODE_ENV) !== "production",
  ww = function () {
    var t;
    mw && (t = console).debug.apply(t, arguments);
  },
  mu = {},
  Ow = "@atlaskit/platform-feature-flags",
  wi = "__PLATFORM_FEATURE_FLAGS__",
  gh = typeof process < "u" && typeof mu < "u",
  Sw = gh ? mu.ENABLE_PLATFORM_FF === "true" : !1,
  Ew = gh ? mu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  kw = Sw || Ew,
  xw = { booleanResolver: void 0 },
  Oi = typeof window < "u" ? window : globalThis;
Oi[wi] = Oi[wi] || xw;
function Rw(e) {
  if (kw)
    return (
      ww(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Ow,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Oi[wi]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Oi[wi]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Ks.checkGate(e);
    var i = (n = Oi[wi]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function zr(e) {
  return Rw(e);
}
var Cw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Pw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Aw = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Xd = m.memo(function (t) {
    var r = t,
      n = r.color,
      i = n === void 0 ? "currentColor" : n,
      a = r.testId,
      o = r.label,
      u = r.LEGACY_primaryColor,
      s = r.LEGACY_secondaryColor,
      c = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      p = r.shouldScale,
      v = r.LEGACY_margin,
      h = r.spacing,
      f = h === void 0 ? "none" : h,
      g = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !zr("platform-visual-refresh-icons"))
      return m.createElement(l, {
        primaryColor: u ?? i,
        secondaryColor: s,
        size: c,
        label: o,
        testId: a,
        UNSAFE_margin: v,
      });
    var b = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") b = t.size === "small" || t.size === "medium" ? t.size : b;
      else if (g) {
        var y = t.size(g);
        b = y === "small" || y === "medium" ? y : b;
      }
    }
    var O = 16,
      w = Aw[b][f],
      S = O + 2 * w;
    return m.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: C([
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
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : b === "small" ? Pw[f] : Cw[f],
        ]),
      }),
    );
  });
const Iw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Xd, default: Xd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  so = ou(Iw);
var Qd;
function jw() {
  if (Qd) return Xn;
  ((Qd = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(ft()),
    t = r(so);
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
  return ((n.displayName = "ChevronLeftIcon"), (Xn.default = n), Xn);
}
var ii = {};
function Zd(e, t) {
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
function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Dw = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  tf = m.memo(function (t) {
    var r = t,
      n = r.glyph,
      i = r.dangerouslySetGlyph,
      a = r.primaryColor,
      o = a === void 0 ? "currentColor" : a,
      u = r.secondaryColor,
      s = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      p = r.height,
      v = r.UNSAFE_margin,
      h = i
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
          style: ef(
            ef({}, f),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": u, margin: v },
          ),
        },
        h,
        {
          className: C([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === u && "_18hbwc43",
            u === "transparent" && "_4fyi1j28",
            s && Dw[s],
          ]),
        },
      ),
    );
  });
const Tw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: tf, default: tf }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  _h = ou(Tw);
var rf;
function Mw() {
  if (rf) return ii;
  ((rf = 1), Object.defineProperty(ii, "__esModule", { value: !0 }), (ii.default = void 0));
  var e = r(ft()),
    t = _h;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (ii.default = n), ii);
}
var nf;
function Lw() {
  if (nf) return Jn;
  ((nf = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = n(ft()),
    t = n(jw()),
    r = n(Mw());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronLeftIconMigration"), (Jn.default = i), Jn);
}
var Nw = Lw();
const Fw = Qt(Nw);
var ai = {},
  oi = {},
  af;
function qw() {
  if (af) return oi;
  ((af = 1), Object.defineProperty(oi, "__esModule", { value: !0 }), (oi.default = void 0));
  var e = r(ft()),
    t = r(so);
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
  return ((n.displayName = "ChevronRightIcon"), (oi.default = n), oi);
}
var si = {},
  of;
function Bw() {
  if (of) return si;
  ((of = 1), Object.defineProperty(si, "__esModule", { value: !0 }), (si.default = void 0));
  var e = r(ft()),
    t = _h;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (si.default = n), si);
}
var sf;
function zw() {
  if (sf) return ai;
  ((sf = 1), Object.defineProperty(ai, "__esModule", { value: !0 }), (ai.default = void 0));
  var e = n(ft()),
    t = n(qw()),
    r = n(Bw());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const i = (a) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, a),
    );
  return ((i.displayName = "ChevronRightIconMigration"), (ai.default = i), ai);
}
var Uw = zw();
const $w = Qt(Uw);
var wu = m.createContext("elevation.surface"),
  Vw = function () {
    return m.useContext(wu);
  };
wu.displayName = "SurfaceProvider";
var Gw = [
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
  Hw = ["className"],
  Ww = {
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
  bh = {
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
  Kw = {
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
  Yw = {
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
  Jw = {
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
  Xw = {
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
  uo = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      u = e.paddingBlock,
      s = u === void 0 ? o : u,
      c = e.paddingBlockStart,
      l = c === void 0 ? s : c,
      d = e.paddingBlockEnd,
      p = d === void 0 ? s : d,
      v = e.paddingInline,
      h = v === void 0 ? o : v,
      f = e.paddingInlineStart,
      g = f === void 0 ? h : f,
      _ = e.paddingInlineEnd,
      b = _ === void 0 ? h : _,
      y = e.style,
      O = e.testId,
      w = e.xcss,
      S = ne(e, Gw);
    S.className;
    var x = ne(S, Hw),
      T = m.createElement(
        n,
        te(
          {
            style: y,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              a && Ww[a],
              a && Qw(a) && bh[a],
              l && Kw[l],
              p && Yw[p],
              g && Jw[g],
              b && Xw[b],
              w,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        i,
      );
    return a ? m.createElement(wu.Provider, { value: a }, T) : T;
  });
function Qw(e) {
  return e in bh;
}
const gs = () =>
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
  yh = (...e) => C(e);
function Zw() {
  return {
    css() {
      throw gs();
    },
    cssMap() {
      throw gs();
    },
    cx: yh,
    XCSSProp() {
      throw gs();
    },
  };
}
var e1 = Zw(),
  t1 = e1.cx,
  r1 = [
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
  uf = {
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
  cf = {
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
  n1 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  i1 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  a1 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  o1 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  s1 = { root: "_1e0c1txw _vchhusvi" },
  La = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        u = e.gap,
        s = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        p = e.direction,
        v = e.wrap,
        h = e.xcss,
        f = ne(e, r1);
      return m.createElement(
        n,
        te({}, f, {
          role: i,
          className: C([
            s1.root,
            u && cf[u],
            s && cf[s],
            u && uf[u],
            c && uf[c],
            a && o1[a],
            p && i1[p],
            o && n1[o],
            v && a1[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
La.displayName = "Flex";
var u1 = [
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
  Ys = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  c1 = function (t) {
    var r = t.children;
    return m.createElement("span", { className: C([Ys.separator]) }, r);
  },
  pa = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? "start" : i,
        o = e.shouldWrap,
        u = o === void 0 ? !1 : o,
        s = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        p = e.separator,
        v = e.xcss,
        h = e.testId,
        f = e.role,
        g = e.children,
        _ = ne(e, u1),
        b = typeof p == "string" ? m.createElement(c1, null, p) : p,
        y = b
          ? m.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : g;
      return m.createElement(
        La,
        te({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: t1(c === "hug" && Ys.hug, c === "fill" && Ys.fill, v),
          testId: h,
          ref: t,
        }),
        y,
      );
    }),
  );
pa.displayName = "Inline";
var l1 = "Invariant failed";
function d1(e, t) {
  if (!e) throw new Error(l1);
}
var mh = m.createContext(!1),
  f1 = function () {
    return m.useContext(mh);
  },
  v1 = mh.Provider,
  p1 = ["span", "p", "strong", "em"],
  h1 = function (t, r) {
    var n = Vw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return lf.hasOwnProperty(n) ? lf[n] : "color.text";
    }
  },
  jr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  g1 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  _1 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  b1 = {
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
  lf = {
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
  y1 = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      i = e.color,
      a = e.align,
      o = e.testId,
      u = e.id,
      s = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      p = e.children;
    d1(p1.includes(n));
    var v = f1(),
      h = h1(i, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: u,
        className: C([
          jr.root,
          s && g1[s],
          h && b1[h],
          l && jr.truncation,
          l === 1 && jr.breakAll,
          a && jr["textAlign.".concat(a)],
          c && _1[c],
          n === "em" && jr["as.em"],
          n === "strong" && jr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(v1, { value: !0 }, f);
  });
function m1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var w1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  O1 = ["className"],
  S1 = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ne(e, w1);
    c.className;
    var l = ne(c, O1);
    return m.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          a && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      i,
    );
  }),
  E1 = [
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
  k1 = ["className"],
  df = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  x1 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      i = e.type,
      a = i === void 0 ? "button" : i,
      o = e.onClick,
      u = o === void 0 ? we : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      h = e.tabIndex,
      f = ne(e, E1),
      g = m.useContext(bu),
      _ = m.useCallback(
        function (O, w) {
          (g && g.tracePress(s, O.timeStamp), u(O, w));
        },
        [u, g, s],
      ),
      b = Ii({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "16.4.1",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ne(f, k1);
    return m.createElement(
      S1,
      te({ as: "button", tabIndex: h ?? (m1() && !n ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: yh(df.root, n && df.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  _s = {},
  ui = {},
  ff;
function wh() {
  if (ff) return ui;
  ((ff = 1), Object.defineProperty(ui, "__esModule", { value: !0 }), (ui.bind = void 0));
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
  return ((ui.bind = e), ui);
}
var ur = {},
  vf;
function R1() {
  if (vf) return ur;
  vf = 1;
  var e =
    (ur && ur.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (a) {
            for (var o, u = 1, s = arguments.length; u < s; u++) {
              o = arguments[u];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c]);
            }
            return a;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(ur, "__esModule", { value: !0 }), (ur.bindAll = void 0));
  var t = wh();
  function r(a) {
    if (!(typeof a > "u")) return typeof a == "boolean" ? { capture: a } : a;
  }
  function n(a, o) {
    if (o == null) return a;
    var u = e(e({}, a), { options: e(e({}, r(o)), r(a.options)) });
    return u;
  }
  function i(a, o, u) {
    var s = o.map(function (c) {
      var l = n(c, u);
      return (0, t.bind)(a, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((ur.bindAll = i), ur);
}
var pf;
function C1() {
  return (
    pf ||
      ((pf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = wh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = R1();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(_s)),
    _s
  );
}
var co = C1(),
  P1 = function () {
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
  Oh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: P1() });
  },
  A1 = Oh(),
  I1 = m.createContext(Oh()),
  j1 = function (e) {
    return e.value++;
  },
  D1 = function (e) {
    return e ? e.prefix : "";
  },
  T1 = function (e) {
    var t = e || A1,
      r = D1(t),
      n = j1(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  Sh = function () {
    var e = m.useContext(I1),
      t = m.useState(function () {
        return T1(e);
      })[0];
    return t;
  },
  M1 = function () {
    var e = Sh().uid;
    return e;
  },
  L1 = function () {
    var e = Sh().gen;
    return e;
  },
  bs,
  ha = (bs = E.useId) !== null && bs !== void 0 ? bs : void 0;
function N1() {
  return ha && zr("platform-dst-react-18-use-id")
    ? zr("platform-dst-react-18-use-id-selector-safe")
      ? ha().replace(/[:«»]/g, "_")
      : ha()
    : "uid".concat(M1());
}
function F1() {
  if (ha && zr("platform-dst-react-18-use-id")) {
    var e = N1();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return L1();
}
var Ou = function (t) {
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
      className: C([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
Ou.displayName = "VisuallyHidden";
var q1 = {
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
  B1 = ["children"];
function z1(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = m.createContext(e);
  function n(o) {
    var u = m.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function i(o) {
    var u = o.children,
      s = ne(o, B1),
      c = n(s);
    return E.createElement(E.Fragment, null, u(c));
  }
  function a(o) {
    var u = m.useContext(r),
      s = o.value || t,
      c = m.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return E.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: i, Provider: a, useTheme: n };
}
var U1 = z1(function () {
    return { mode: "light" };
  }),
  $1 = U1.useTheme;
function V1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function G1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var H1 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(G1(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = V1(i);
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
  Na = "-moz-",
  Q = "-webkit-",
  Eh = "comm",
  Su = "rule",
  Eu = "decl",
  W1 = "@import",
  kh = "@keyframes",
  K1 = "@layer",
  Y1 = Math.abs,
  lo = String.fromCharCode,
  J1 = Object.assign;
function X1(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function xh(e) {
  return e.trim();
}
function Q1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function Js(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Di(e, t, r) {
  return e.slice(t, r);
}
function _t(e) {
  return e.length;
}
function ku(e) {
  return e.length;
}
function ua(e, t) {
  return (t.push(e), e);
}
function Z1(e, t) {
  return e.map(t).join("");
}
var fo = 1,
  Ur = 1,
  Rh = 0,
  je = 0,
  he = 0,
  Jr = "";
function vo(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: fo,
    column: Ur,
    length: o,
    return: "",
  };
}
function ci(e, t) {
  return J1(vo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function eO() {
  return he;
}
function tO() {
  return ((he = je > 0 ? ye(Jr, --je) : 0), Ur--, he === 10 && ((Ur = 1), fo--), he);
}
function Ne() {
  return ((he = je < Rh ? ye(Jr, je++) : 0), Ur++, he === 10 && ((Ur = 1), fo++), he);
}
function Et() {
  return ye(Jr, je);
}
function ga() {
  return je;
}
function Gi(e, t) {
  return Di(Jr, e, t);
}
function Ti(e) {
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
function Ch(e) {
  return ((fo = Ur = 1), (Rh = _t((Jr = e))), (je = 0), []);
}
function Ph(e) {
  return ((Jr = ""), e);
}
function _a(e) {
  return xh(Gi(je - 1, Xs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rO(e) {
  for (; (he = Et()) && he < 33; ) Ne();
  return Ti(e) > 2 || Ti(he) > 3 ? "" : " ";
}
function nO(e, t) {
  for (; --t && Ne() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Gi(e, ga() + (t < 6 && Et() == 32 && Ne() == 32));
}
function Xs(e) {
  for (; Ne(); )
    switch (he) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xs(he);
        break;
      case 40:
        e === 41 && Xs(e);
        break;
      case 92:
        Ne();
        break;
    }
  return je;
}
function iO(e, t) {
  for (; Ne() && e + he !== 57; ) if (e + he === 84 && Et() === 47) break;
  return "/*" + Gi(t, je - 1) + "*" + lo(e === 47 ? e : Ne());
}
function aO(e) {
  for (; !Ti(Et()); ) Ne();
  return Gi(e, je);
}
function oO(e) {
  return Ph(ba("", null, null, null, [""], (e = Ch(e)), 0, [0], e));
}
function ba(e, t, r, n, i, a, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      p = 0,
      v = 0,
      h = 0,
      f = 1,
      g = 1,
      _ = 1,
      b = 0,
      y = "",
      O = i,
      w = a,
      S = n,
      x = y;
    g;
  )
    switch (((h = b), (b = Ne()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          Js((x += Z(_a(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += _a(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += rO(h);
        break;
      case 92:
        x += nO(ga() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            ua(sO(iO(Ne(), ga()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        u[c++] = _t(x) * _;
      case 125 * f:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (_ == -1 && (x = Z(x, /\f/g, "")),
              v > 0 &&
                _t(x) - d &&
                ua(v > 32 ? gf(x + ";", n, r, d - 1) : gf(Z(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((ua((S = hf(x, t, r, c, l, i, u, y, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) ba(x, t, S, S, O, a, d, u, w);
              else
                switch (p === 99 && ye(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ba(
                      e,
                      S,
                      S,
                      n && ua(hf(e, S, S, 0, 0, i, u, y, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      u,
                      n ? O : w,
                    );
                    break;
                  default:
                    ba(x, S, S, S, [""], w, 0, u, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (y = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + _t(x)), (v = h));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && tO() == 125) continue;
        }
        switch (((x += lo(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (_t(x) - 1) * _), (_ = 1));
            break;
          case 64:
            (Et() === 45 && (x += _a(Ne())), (p = Et()), (l = d = _t((y = x += aO(ga())))), b++);
            break;
          case 45:
            h === 45 && _t(x) == 2 && (f = 0);
        }
    }
  return a;
}
function hf(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = ku(p), h = 0, f = 0, g = 0; h < n; ++h)
    for (var _ = 0, b = Di(e, d + 1, (d = Y1((f = o[h])))), y = e; _ < v; ++_)
      (y = xh(f > 0 ? p[_] + " " + b : Z(b, /&\f/g, p[_]))) && (s[g++] = y);
  return vo(e, t, r, i === 0 ? Su : u, s, c, l);
}
function sO(e, t, r) {
  return vo(e, t, r, Eh, lo(eO()), Di(e, 2, -2), 0);
}
function gf(e, t, r, n) {
  return vo(e, t, r, Eu, Di(e, 0, n), Di(e, n + 1, -1), n);
}
function Nr(e, t) {
  for (var r = "", n = ku(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function uO(e, t, r, n) {
  switch (e.type) {
    case K1:
      if (e.children.length) break;
    case W1:
    case Eu:
      return (e.return = e.return || e.value);
    case Eh:
      return "";
    case kh:
      return (e.return = e.value + "{" + Nr(e.children, n) + "}");
    case Su:
      e.value = e.props.join(",");
  }
  return _t((r = Nr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function cO(e) {
  var t = ku(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function lO(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function dO(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var fO = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = Et()), i === 38 && a === 12 && (r[n] = 1), !Ti(a); ) Ne();
    return Gi(t, je);
  },
  vO = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (Ti(i)) {
        case 0:
          (i === 38 && Et() === 12 && (r[n] = 1), (t[n] += fO(je - 1, r, n)));
          break;
        case 2:
          t[n] += _a(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = Et() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += lo(i);
      }
    while ((i = Ne()));
    return t;
  },
  pO = function (t, r) {
    return Ph(vO(Ch(t), r));
  },
  _f = new WeakMap(),
  hO = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_f.get(n)) && !i) {
        _f.set(t, !0);
        for (var a = [], o = pO(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  gO = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Ah(e, t) {
  switch (X1(e, t)) {
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
      return Q + e + Na + e + me + e + e;
    case 6828:
    case 4268:
      return Q + e + me + e + e;
    case 6165:
      return Q + e + me + "flex-" + e + e;
    case 5187:
      return Q + e + Z(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return Q + e + me + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + me + "flex-line-pack" + Z(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + me + Z(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + me + Z(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + Z(e, "-grow", "") + Q + e + me + Z(e, "grow", "positive") + e;
    case 4554:
      return Q + Z(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + me + "flex-pack:$3"),
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
      return Z(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Na + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Js(e, "stretch") ? Ah(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, _t(e) - 3 - (~Js(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + Q) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
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
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + me + e + e;
  }
  return e;
}
var _O = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Eu:
          t.return = Ah(t.value, t.length);
          break;
        case kh:
          return Nr([ci(t, { value: Z(t.value, "@", "@" + Q) })], i);
        case Su:
          if (t.length)
            return Z1(t.props, function (a) {
              switch (Q1(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Nr([ci(t, { props: [Z(a, /:(read-\w+)/, ":" + Na + "$1")] })], i);
                case "::placeholder":
                  return Nr(
                    [
                      ci(t, { props: [Z(a, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      ci(t, { props: [Z(a, /:(plac\w+)/, ":" + Na + "$1")] }),
                      ci(t, { props: [Z(a, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  bO = [_O],
  yO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var g = f.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || bO,
      a = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var g = f.getAttribute("data-emotion").split(" "), _ = 1; _ < g.length; _++)
            a[g[_]] = !0;
          u.push(f);
        },
      ));
    var s,
      c = [hO, gO];
    {
      var l,
        d = [
          uO,
          lO(function (f) {
            l.insert(f);
          }),
        ],
        p = cO(c.concat(i, d)),
        v = function (g) {
          return Nr(oO(g), p);
        };
      s = function (g, _, b, y) {
        ((l = b), v(g ? g + "{" + _.styles + "}" : _.styles), y && (h.inserted[_.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new H1({
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
      insert: s,
    };
    return (h.sheet.hydrate(u), h);
  },
  ys = { exports: {} },
  ee = {};
var bf;
function mO() {
  if (bf) return ee;
  bf = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    i = e ? Symbol.for("react.strict_mode") : 60108,
    a = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    u = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    p = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    b = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case t:
          switch (((w = w.type), w)) {
            case s:
            case c:
            case n:
            case a:
            case i:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case u:
                case l:
                case h:
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
    (ee.AsyncMode = s),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = u),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = h),
    (ee.Memo = v),
    (ee.Portal = r),
    (ee.Profiler = a),
    (ee.StrictMode = i),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (w) {
      return O(w) || y(w) === s;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (w) {
      return y(w) === u;
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
      return y(w) === h;
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
          (w.$$typeof === h ||
            w.$$typeof === v ||
            w.$$typeof === o ||
            w.$$typeof === u ||
            w.$$typeof === l ||
            w.$$typeof === g ||
            w.$$typeof === _ ||
            w.$$typeof === b ||
            w.$$typeof === f))
      );
    }),
    (ee.typeOf = y),
    ee
  );
}
var yf;
function wO() {
  return (yf || ((yf = 1), (ys.exports = mO())), ys.exports);
}
var ms, mf;
function OO() {
  if (mf) return ms;
  mf = 1;
  var e = wO(),
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
  function o(h) {
    return e.isMemo(h) ? i : a[h.$$typeof] || t;
  }
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(h, f, g) {
    if (typeof f != "string") {
      if (p) {
        var _ = d(f);
        _ && _ !== p && v(h, _, g);
      }
      var b = s(f);
      c && (b = b.concat(c(f)));
      for (var y = o(h), O = o(f), w = 0; w < b.length; ++w) {
        var S = b[w];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(y && y[S])) {
          var x = l(f, S);
          try {
            u(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((ms = v), ms);
}
OO();
var SO = !0;
function Ih(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var xu = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || SO === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  jh = function (t, r, n) {
    xu(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function EO(e) {
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
var kO = {
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
  xO = /[A-Z]|^ms/g,
  RO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Dh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  wf = function (t) {
    return t != null && typeof t != "boolean";
  },
  ws = dO(function (e) {
    return Dh(e) ? e : e.replace(xO, "-$&").toLowerCase();
  }),
  Of = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(RO, function (n, i, a) {
            return ((bt = { name: i, styles: a, next: bt }), i);
          });
    }
    return kO[t] !== 1 && !Dh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Mi(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((bt = { name: i.name, styles: i.styles, next: bt }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((bt = { name: o.name, styles: o.styles, next: bt }), (o = o.next));
        var u = a.styles + ";";
        return u;
      }
      return CO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = bt,
          c = r(e);
        return ((bt = s), Mi(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function CO(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Mi(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += a + "{" + t[u] + "}")
          : wf(u) && (n += ws(a) + ":" + Of(a, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) wf(o[s]) && (n += ws(a) + ":" + Of(a, o[s]) + ";");
      else {
        var c = Mi(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += ws(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var Sf = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Ru(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  bt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += Mi(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += Mi(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  Sf.lastIndex = 0;
  for (var c = "", l; (l = Sf.exec(i)) !== null; ) c += "-" + l[1];
  var d = EO(i) + c;
  return { name: d, styles: i, next: bt };
}
var PO = function (t) {
    return t();
  },
  AO = $l.useInsertionEffect ? $l.useInsertionEffect : !1,
  Th = AO || PO,
  Mh = m.createContext(typeof HTMLElement < "u" ? yO({ key: "css" }) : null);
Mh.Provider;
var Lh = function (t) {
    return m.forwardRef(function (r, n) {
      var i = m.useContext(Mh);
      return t(r, i, n);
    });
  },
  Nh = m.createContext({}),
  Cu = {}.hasOwnProperty,
  Qs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  IO = function (t, r) {
    var n = {};
    for (var i in r) Cu.call(r, i) && (n[i] = r[i]);
    return ((n[Qs] = t), n);
  },
  jO = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      xu(r, n, i),
      Th(function () {
        return jh(r, n, i);
      }),
      null
    );
  },
  DO = Lh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Qs],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Ih(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Ru(a, void 0, m.useContext(Nh));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Cu.call(e, c) && c !== "css" && c !== Qs && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(jO, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        m.createElement(i, s),
      )
    );
  }),
  TO = DO,
  Ft = function (t, r) {
    var n = arguments;
    if (r == null || !Cu.call(r, "css")) return m.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = TO), (a[1] = IO(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return m.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ft || (Ft = {}));
function At() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ru(t);
}
var MO = function e(t) {
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
            for (var u in a) a[u] && u && (o && (o += " "), (o += u));
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
function LO(e, t, r) {
  var n = [],
    i = Ih(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var NO = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Th(function () {
        for (var i = 0; i < n.length; i++) jh(r, n[i], !1);
      }),
      null
    );
  },
  FO = Lh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Ru(c, t.registered);
        return (r.push(d), xu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return LO(t.registered, n, MO(c));
      },
      a = { css: n, cx: i, theme: m.useContext(Nh) },
      o = e.children(a);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(NO, { cache: t, serializedArr: r }),
      o,
    );
  });
function qO(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Fh = 2,
  Zs = At({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Fh,
  }),
  eu = At({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Fh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  BO = At({
    "&:focus": Zs,
    "&:focus-visible": Zs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  zO = At({
    "&:focus": eu,
    "&:focus-visible": eu,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  qh = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? eu : Zs,
      a = r ? zO : BO,
      o = typeof n > "u" ? a : n === "on" && i;
    return Ft(FO, null, function (u) {
      var s = u.css,
        c = u.cx;
      return m.Children.only(
        o ? m.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
qh.displayName = "FocusRing";
function Mt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var UO = 9;
function Ef(e) {
  e.keyCode !== UO && Mt(e);
}
var $O = {
    onMouseDownCapture: Mt,
    onMouseUpCapture: Mt,
    onKeyDownCapture: Ef,
    onKeyUpCapture: Ef,
    onTouchStartCapture: Mt,
    onTouchEndCapture: Mt,
    onPointerDownCapture: Mt,
    onPointerUpCapture: Mt,
    onClickCapture: Mt,
    onClick: Mt,
  },
  VO = {};
function GO(e) {
  var t = e.isInteractive;
  return t ? VO : $O;
}
function kf(e, t) {
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
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Yt = 8,
  Os = ["default", "primary", "danger", "warning"],
  tu = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  HO = { default: tu.default, compact: tu.compact, none: "inherit" },
  WO = {
    default: "0 ".concat(Yt + Yt / 4, "px"),
    compact: "0 ".concat(Yt + Yt / 4, "px"),
    none: "0",
  },
  KO = { compact: "0 ".concat(Yt / 4, "px"), default: "0 ".concat(Yt / 4, "px"), none: "0" },
  YO = { default: "middle", compact: "middle", none: "baseline" },
  Bh = { content: "0 ".concat(Yt / 4, "px"), icon: "0 ".concat(Yt / 4, "px") },
  zh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  JO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Ce(Ce({}, zh), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  XO = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  QO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  ZO = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  eS = {
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
  tS = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  rS = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  nS = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Ce(
      Ce({}, zh),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  iS = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function aS(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Ce(
    Ce(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: zr("platform-dst-shape-theme-default")
          ? "var(--ds-radius-medium, 6px)"
          : "var(--ds-radius-small, 3px)",
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
        height: tu[r],
        lineHeight: HO[r],
        padding: a ? KO[r] : WO[r],
        verticalAlign: YO[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? nS
        : Ce(
            Ce(
              Ce(
                Ce(
                  Ce(
                    Ce(
                      Ce(Ce({}, t === "default" && JO), t === "primary" && XO),
                      t === "link" && QO,
                    ),
                    t === "subtle" && ZO,
                  ),
                  t === "subtle-link" && eS,
                ),
                t === "warning" && tS,
              ),
              t === "danger" && rS,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Os.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Os.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Os.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            iS,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function xf(e) {
  var t = e.spacing;
  return At({
    display: "flex",
    margin: t === "none" ? 0 : Bh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function oS(e) {
  var t = e.spacing;
  return At({
    margin: t === "none" ? 0 : Bh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function sS(e) {
  var t = e.hasOverlay;
  return At({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var uS = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Pu = function (t) {
    return t && m.isValidElement(t) && t.type === Ou;
  },
  cS = [
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
  lS = { "> *": { pointerEvents: "none" } },
  dS = At({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  fS = At({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Rf = function (t, r) {
    return !t || Pu(t) ? null : r;
  },
  vS = function (t, r) {
    return Pu(t) ? t : t ? Ft("span", { css: r }, t) : null;
  },
  pS = E.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      i = t.appearance,
      a = i === void 0 ? "default" : i,
      o = t.autoFocus,
      u = o === void 0 ? !1 : o,
      s = t.buttonCss,
      c = t.children,
      l = t.className,
      d = t.href,
      p = t.component,
      v = p === void 0 ? (d ? "a" : "button") : p,
      h = t.iconAfter,
      f = t.iconBefore,
      g = t.interactionName,
      _ = t.isDisabled,
      b = _ === void 0 ? !1 : _,
      y = t.isSelected,
      O = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? we : S,
      T = t.onFocus,
      j = t.onMouseDown,
      P = j === void 0 ? we : j,
      M = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      B = z === void 0 ? "default" : z,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      F = ne(t, cS),
      I = m.useRef(),
      be = m.useCallback(
        function (pe) {
          if (((I.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [I, r],
      );
    qO(I, u);
    var ae = m.useContext(bu),
      ue = m.useCallback(
        function (pe, $e) {
          (ae && ae.tracePress(g, pe.timeStamp), x(pe, $e));
        },
        [x, ae, g],
      ),
      le = Ii({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = m.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    m.useEffect(
      function () {
        var pe = I.current;
        b && pe && pe === document.activeElement && pe.blur();
      },
      [b],
    );
    var ce = !!M,
      Ue = At(sS({ hasOverlay: ce })),
      Oe = !b && !ce,
      nt = {};
    return (
      (O || b || a === "warning") &&
        (nt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || b
                ? "var(--ds-icon-subtle, ".concat($s, ")")
                : "var(--ds-icon-warning-inverse, ".concat($s, ")"),
              " !important",
            ),
          },
        }),
      Ft(
        qh,
        null,
        Ft(
          v,
          te(
            {},
            F,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : lS],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: b,
              href: Oe ? d : void 0,
              onBlur: w,
              onClick: le,
              onFocus: T,
              onMouseDown: ge,
              tabIndex: b ? -1 : J,
              type: $,
            },
            GO({ isInteractive: Oe }),
          ),
          f ? Ft("span", { css: [Ue, xf({ spacing: B }), Rf(c, dS)] }, f) : null,
          vS(c, [Ue, oS({ spacing: B })]),
          h ? Ft("span", { css: [Ue, xf({ spacing: B }), Rf(c, fS)] }, h) : null,
          M ? Ft("span", { css: [uS, nt] }, M) : null,
        ),
      )
    );
  });
function hS(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Pu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var gS = [
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
  Cf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Au = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "default" : n,
        a = t.children,
        o = t.iconBefore,
        u = t.iconAfter,
        s = t.isSelected,
        c = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        p = t.onMouseUp,
        v = p === void 0 ? we : p,
        h = t.shouldFitContainer,
        f = h === void 0 ? !1 : h,
        g = t.spacing,
        _ = g === void 0 ? "default" : g,
        b = ne(t, gS),
        y = $1(),
        O = y.mode,
        w = hS({ children: a, iconBefore: o, iconAfter: u }),
        S = m.useState(!1),
        x = K(S, 2),
        T = x[0],
        j = x[1],
        P = m.useCallback(
          function (B) {
            (d(B), Cf && j(!0));
          },
          [d, j],
        ),
        M = m.useCallback(
          function (B) {
            (v(B), Cf && j(!1));
          },
          [v, j],
        ),
        z = m.useMemo(
          function () {
            return aS({
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
        pS,
        te({}, b, {
          ref: r,
          appearance: i,
          buttonCss: z,
          children: a,
          "data-firefox-is-active": T ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: P,
          onMouseUp: M,
          spacing: _,
        }),
      );
    }),
  );
Au.displayName = "Button";
function Pf(e) {
  return E.createElement(Au, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function _S(e) {
  return E.createElement(Au, te({}, e, { appearance: "subtle" }));
}
var bS = { container: "_1e0c1txw _kqswh2mm" };
function yS(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    uo,
    { as: "li", testId: r, key: t, xcss: bS.container, paddingInline: "space.100" },
    E.createElement(
      y1,
      { testId: r && "".concat(r, "-text") },
      E.createElement(Ou, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var Af = {},
  If =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function mS(e, t) {
  return !!(e === t || (If(e) && If(t)));
}
function wS(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!mS(e[r], t[r])) return !1;
  return !0;
}
function OS(e, t) {
  t === void 0 && (t = wS);
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
var SS = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    p = OS(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, _).map(function (b, y) {
        return u(b, g + y, i);
      });
    });
  if (!c) return p(0, s);
  if (l && !d) {
    var v = a - 2;
    return [].concat(
      Te(p(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - v })],
      Te(p(s - v)),
    );
  }
  if (!l && d) {
    var h = a - 2;
    return [].concat(
      Te(p(0, h)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: h + 1, to: s - 1 })],
      Te(p(s - 1)),
    );
  }
  var f = a - 4;
  return [].concat(
    Te(p(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Te(p(r - Math.floor(f / 2), r + f - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(p(s - 1)),
  );
};
function jf(e, t) {
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
function ES(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ru = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  kS = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.19",
  };
function Df(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Fw : $w;
  return E.createElement(
    uo,
    { as: "span", xcss: ru.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function xS(e, t) {
  var r = e.components,
    n = r === void 0 ? Af : r,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    h = v === void 0 ? "next" : v,
    f = e.style,
    g = f === void 0 ? Af : f,
    _ = e.max,
    b = _ === void 0 ? 7 : _,
    y = e.onChange,
    O = y === void 0 ? we : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    T = x === void 0 ? yS : x,
    j = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    z = S0(o, function () {
      return a || 0;
    }),
    B = K(z, 2),
    V = B[0],
    J = B[1],
    G = Ii(
      ES(
        {
          fn: function (F, I) {
            var be = F.event,
              ae = F.selectedPageIndex;
            (o === void 0 && J(ae), O && O(be, w[ae], I));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        kS,
      ),
    ),
    $ = function (F, I, be) {
      var ae = w[V],
        ue = "".concat(l, " ").concat(S ? S(F, I) : F),
        le = F === ae;
      return E.createElement(
        pa,
        { as: "li", xcss: ru.paginationMenuItem, key: "page-".concat(S ? S(F, I) : I) },
        E.createElement(
          _S,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: I });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: M,
            page: F,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(I),
          },
          S ? S(F, I) : F,
        ),
      );
    };
  return E.createElement(
    uo,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      pa,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Pf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (F) {
          return G({ event: F, selectedPageIndex: V - 1 });
        },
        isDisabled: M || V === 0,
        iconBefore: E.createElement(Df, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      E.createElement(
        pa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: ru.paginationMenu },
        SS(w, V, { max: b, ellipsis: T, transform: $ }, P),
      ),
      E.createElement(Pf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (F) {
          return G({ event: F, selectedPageIndex: V + 1 });
        },
        isDisabled: M || V === w.length - 1,
        iconBefore: E.createElement(Df, { chevronDirection: "right" }),
        "aria-label": h,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var RS = m.memo(m.forwardRef(xS));
function CS(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Uh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Uh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Uh = function () {
    return !!e;
  })();
}
var PS = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = CS(this, t, [].concat(i))),
        R(r, "onChange", function (o, u, s) {
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
              i = n.total,
              a = n.value,
              o = a === void 0 ? 1 : a,
              u = n.i18n,
              s = n.testId,
              c = n.isDisabled,
              l = Te(Array(i)).map(function (p, v) {
                return v + 1;
              }),
              d = o - 1;
            return E.createElement(RS, {
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
  })(E.Component),
  AS = ["isRanking", "testId"],
  IS = [
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
function Tf(e, t) {
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
function li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Mf = "--local-dynamic-table-text-color",
  jS = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, AS);
    return m.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  DS = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ne(e, IS),
      l = li(
        li(li({}, u), r && Qp({ width: r })),
        {},
        R({}, Mf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === hr,
      p = i === Ta,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      h = n ? "th" : "td";
    return m.createElement(
      h,
      te({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: li(
          li({}, l),
          {},
          { "--_17ckjys": Jp("var(--ds-text-subtle, ".concat("var(".concat(Mf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function TS(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, $h() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function $h() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($h = function () {
    return !!e;
  })();
}
function MS(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = TS(this, r, [].concat(a))),
        R(n, "state", { refWidth: 0, refHeight: 0 }),
        R(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        R(n, "updateDimensions", function () {
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
var di = {},
  Lf;
function LS() {
  if (Lf) return di;
  ((Lf = 1), Object.defineProperty(di, "__esModule", { value: !0 }), (di.default = void 0));
  var e = r(ft()),
    t = r(so);
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
  return ((n.displayName = "ArrowDownIcon"), (di.default = n), di);
}
var NS = LS();
const FS = Qt(NS);
var fi = {},
  Nf;
function qS() {
  if (Nf) return fi;
  ((Nf = 1), Object.defineProperty(fi, "__esModule", { value: !0 }), (fi.default = void 0));
  var e = r(ft()),
    t = r(so);
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
  return ((n.displayName = "ArrowUpIcon"), (fi.default = n), fi);
}
var BS = qS();
const zS = Qt(BS);
var US = "Escape";
function $S(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    i = m.useCallback(
      function (o) {
        r || n.current || o.key !== US || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return co.bindAll(
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
function vi(e) {
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
var VS = m.createContext(null),
  GS = m.createContext(null);
function HS() {
  var e = m.useContext(GS);
  return e;
}
function WS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = m.useContext(VS),
    a = HS();
  m.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var _i = { none: 0, small: 100, medium: 350, large: 700 },
  Ss = 0.5,
  KS = { none: _i.none, small: _i.small * Ss, medium: _i.medium * Ss, large: _i.large * Ss },
  YS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  JS = function () {
    if (!YS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  XS = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  QS = function () {
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
      }, XS(t)),
      m.useCallback(function (n, i) {
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
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
            i,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  Vh = { appear: !0, isExiting: !1 },
  Gh = m.createContext(Vh),
  Ff = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vh;
    return E.createElement(Gh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  qf = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  ZS = function (t, r) {
    for (var n = r.concat([]), i = eE(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  eE = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  tE = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        i = new Set(),
        a = 0;
      a < r.length;
      a++
    ) {
      var o = r[a],
        u = o.key;
      n.has(u) || i.add(u);
    }
    return i;
  },
  Hh = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      i = e.exitThenEnter,
      a = m.useState([null, n]),
      o = K(a, 2),
      u = o[0],
      s = o[1],
      c = m.useState([]),
      l = K(c, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(v, 2),
      f = h[0],
      g = h[1];
    if (
      (m.useEffect(function () {
        f.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = K(u, 2),
      b = _[0],
      y = _[1],
      O = qf(b),
      w = qf(y);
    y !== n && s([y, n]);
    var S = tE(w, O),
      x = !!S.size,
      T = w;
    if ((x && (T = ZS(w, O)), i))
      if (d.length) T = d;
      else {
        var j = T.filter(function (P) {
          return S.has(P.key);
        });
        j.length && p(j);
      }
    return (
      S.size
        ? (T = T.map(function (P) {
            var M = S.has(P.key);
            return Ff(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (T = T.map(function (P) {
            return Ff(P, f);
          })),
      T
    );
  }),
  rE = function () {
    return m.useContext(Gh);
  };
Hh.displayName = "ExitingPersistence";
function nE() {
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
var iE = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  aE = function () {
    var t = nE(),
      r = m.useContext(iE);
    return r(t);
  },
  oE = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      i = t.animationTimingFunctionExiting,
      a = i === void 0 ? n : i,
      o = t.enteringAnimation,
      u = t.exitingAnimation,
      s = u === void 0 ? o : u,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      p = d === void 0 ? "large" : d,
      v = aE(),
      h = rE(),
      f = h.isExiting,
      g = h.onFinish,
      _ = h.appear,
      b = QS(),
      y = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(_),
      x = K(S, 2),
      T = x[0],
      j = x[1];
    return (
      m.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!_) {
              l && l(w);
              return;
            }
            var M = function () {
              (w === "exiting" && g?.(), P || j(!1), l?.(w));
            };
            if (JS()) {
              M();
              return;
            }
            return (
              j(!0),
              b(M, f ? KS[p] : _i[p] + O),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, w, f, p, O, y, b],
      ),
      r(
        {
          ref: v.ref,
          className: T
            ? C([
                C(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && C(["_1y0ctrqk"]),
                p === "small" && C(["_5sag1yx9"]),
                p === "medium" && C(["_5sag1ttt"]),
                p === "large" && C(["_5sagpwmj"]),
                f && p === "small" && C(["_5sag14ed"]),
                f && p === "medium" && C(["_5sagluct"]),
                f && p === "large" && C(["_5sag1ttt"]),
                f && C(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && C(["_1pglp3kn"]),
                !f && n === "ease-out" && C(["_1pgldkwg"]),
                !f && n === "ease-in" && C(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && C(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && C(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && C(["_1pglannl"]),
                !f && n === "ease-in-out" && C(["_1pgl1fu8"]),
                f && n === "linear" && C(["_1pglp3kn"]),
                f && a === "ease-out" && C(["_1pgldkwg"]),
                f && a === "ease-in" && C(["_1pgl1nzg"]),
                f && a === "ease-in-40-out" && C(["_1pgl5y64"]),
                f && a === "ease-in-60-out" && C(["_1pgl1ddy"]),
                f && a === "ease-in-80-out" && C(["_1pglannl"]),
                f && a === "ease-in-out" && C(["_1pgl1fu8"]),
                ((!f && o === "fade-in") || (f && s === "fade-in")) && C(["_j7hq1cgr"]),
                ((!f && o === "fade-out") || (f && s === "fade-out")) && C(["_j7hq1lln"]),
                ((!f && o === "zoom-in") || (f && s === "zoom-in")) && C(["_j7hqe8p0"]),
                ((!f && o === "zoom-out") || (f && s === "zoom-out")) && C(["_j7hqy6ql"]),
                ((!f && o === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  C(["_j7hqqshu"]),
                ((!f && o === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  C(["_j7hq7ri4"]),
                ((!f && o === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  C(["_j7hqdfjr"]),
                ((!f && o === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  C(["_j7hqonfj"]),
                ((!f && o === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  C(["_j7hq1liq"]),
                ((!f && o === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  C(["_j7hqhnf1"]),
                ((!f && o === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  C(["_j7hq1bh1"]),
                ((!f && o === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  C(["_j7hqj08w"]),
                ((!f && o === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  C(["_j7hq2iua"]),
                ((!f && o === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  C(["_j7hq39va"]),
                ((!f && o === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  C(["_j7hq15m2"]),
                ((!f && o === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  C(["_j7hq1yiv"]),
                ((!f && o === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  C(["_j7hq1w00"]),
                ((!f && o === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  C(["_j7hqzy3z"]),
                ((!f && o === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  C(["_j7hqpqak"]),
                ((!f && o === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  C(["_j7hq1ebg"]),
                ((!f && o === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  C(["_j7hqm2e2"]),
                ((!f && o === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  C(["_j7hq97jn"]),
                ((!f && o === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  C(["_j7hqovgq"]),
                ((!f && o === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  C(["_j7hq15do"]),
                ((!f && o === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  C(["_j7hq797a"]),
                ((!f && o === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  C(["_j7hqwo7r"]),
                ((!f && o === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  C(["_j7hqt8u5"]),
                ((!f && o === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  C(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        w,
      )
    );
  },
  sE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  uE = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? sE[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      oE,
      {
        duration: i,
        enteringAnimation: a
          ? "fade-in-from-".concat(a).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  cE = m.createContext();
m.createContext();
var lE = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  dE = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  fE = function (t, r) {
    if (typeof t == "function") return dE(t, r);
    t != null && (t.current = r);
  },
  Bf = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  zf =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Pe = "top",
  et = "bottom",
  tt = "right",
  Ae = "left",
  Iu = "auto",
  Hi = [Pe, et, tt, Ae],
  $r = "start",
  Li = "end",
  vE = "clippingParents",
  Wh = "viewport",
  pi = "popper",
  pE = "reference",
  Uf = Hi.reduce(function (e, t) {
    return e.concat([t + "-" + $r, t + "-" + Li]);
  }, []),
  Kh = [].concat(Hi, [Iu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + $r, t + "-" + Li]);
  }, []),
  hE = "beforeRead",
  gE = "read",
  _E = "afterRead",
  bE = "beforeMain",
  yE = "main",
  mE = "afterMain",
  wE = "beforeWrite",
  OE = "write",
  SE = "afterWrite",
  EE = [hE, gE, _E, bE, yE, mE, wE, OE, SE];
function Ct(e) {
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
function gr(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ju(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Ze(a) ||
      !Ct(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function xE(e) {
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
          u = o.reduce(function (s, c) {
            return ((s[c] = ""), s);
          }, {});
        !Ze(i) ||
          !Ct(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const RE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: kE,
  effect: xE,
  requires: ["computeStyles"],
};
function kt(e) {
  return e.split("-")[0];
}
var lr = Math.max,
  Fa = Math.min,
  Vr = Math.round;
function nu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Yh() {
  return !/^((?!chrome|android).)*safari/i.test(nu());
}
function Gr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Ze(e) &&
    ((i = (e.offsetWidth > 0 && Vr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Vr(n.height) / e.offsetHeight) || 1));
  var o = gr(e) ? Fe(e) : window,
    u = o.visualViewport,
    s = !Yh() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function Du(e) {
  var t = Gr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Jh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ju(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return Fe(e).getComputedStyle(e);
}
function CE(e) {
  return ["table", "td", "th"].indexOf(Ct(e)) >= 0;
}
function er(e) {
  return ((gr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function po(e) {
  return Ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (ju(e) ? e.host : null) || er(e);
}
function $f(e) {
  return !Ze(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function PE(e) {
  var t = /firefox/i.test(nu()),
    r = /Trident/i.test(nu());
  if (r && Ze(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var i = po(e);
  for (ju(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(Ct(i)) < 0; ) {
    var a = zt(i);
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
function Wi(e) {
  for (var t = Fe(e), r = $f(e); r && CE(r) && zt(r).position === "static"; ) r = $f(r);
  return r && (Ct(r) === "html" || (Ct(r) === "body" && zt(r).position === "static"))
    ? t
    : r || PE(e) || t;
}
function Tu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Si(e, t, r) {
  return lr(e, Fa(t, r));
}
function AE(e, t, r) {
  var n = Si(e, t, r);
  return n > r ? r : n;
}
function Xh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Qh(e) {
  return Object.assign({}, Xh(), e);
}
function Zh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var IE = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Qh(typeof t != "number" ? t : Zh(t, Hi))
  );
};
function jE(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = kt(r.placement),
    s = Tu(u),
    c = [Ae, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = IE(i.padding, r),
      p = Du(a),
      v = s === "y" ? Pe : Ae,
      h = s === "y" ? et : tt,
      f = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      _ = Wi(a),
      b = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      y = f / 2 - g / 2,
      O = d[v],
      w = b - p[l] - d[h],
      S = b / 2 - p[l] / 2 + y,
      x = Si(O, S, w),
      T = s;
    r.modifiersData[n] = ((t = {}), (t[T] = x), (t.centerOffset = x - S), t);
  }
}
function DE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Jh(t.elements.popper, i) && (t.elements.arrow = i)));
}
const TE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: jE,
  effect: DE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hr(e) {
  return e.split("-")[1];
}
var ME = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function LE(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Vr(r * i) / i || 0, y: Vr(n * i) / i || 0 };
}
function Vf(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    i = e.placement,
    a = e.variation,
    o = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    p = o.x,
    v = p === void 0 ? 0 : p,
    h = o.y,
    f = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = g.x), (f = g.y));
  var _ = o.hasOwnProperty("x"),
    b = o.hasOwnProperty("y"),
    y = Ae,
    O = Pe,
    w = window;
  if (c) {
    var S = Wi(r),
      x = "clientHeight",
      T = "clientWidth";
    if (
      (S === Fe(r) &&
        ((S = er(r)),
        zt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (T = "scrollWidth"))),
      (S = S),
      i === Pe || ((i === Ae || i === tt) && a === Li))
    ) {
      O = et;
      var j = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= j - n.height), (f *= s ? 1 : -1));
    }
    if (i === Ae || ((i === Pe || i === et) && a === Li)) {
      y = tt;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[T];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: u }, c && ME),
    z = l === !0 ? LE({ x: v, y: f }, Fe(r)) : { x: v, y: f };
  if (((v = z.x), (f = z.y), s)) {
    var B;
    return Object.assign(
      {},
      M,
      ((B = {}),
      (B[O] = b ? "0" : ""),
      (B[y] = _ ? "0" : ""),
      (B.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[y] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function NE(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: kt(t.placement),
      variation: Hr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Vf(
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
        Vf(
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
const FE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: NE, data: {} };
var ca = { passive: !0 };
function qE(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Fe(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ca);
      }),
    u && s.addEventListener("resize", r.update, ca),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ca);
        }),
        u && s.removeEventListener("resize", r.update, ca));
    }
  );
}
const BE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: qE,
  data: {},
};
var zE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ya(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return zE[t];
  });
}
var UE = { start: "end", end: "start" };
function Gf(e) {
  return e.replace(/start|end/g, function (t) {
    return UE[t];
  });
}
function Mu(e) {
  var t = Fe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Lu(e) {
  return Gr(er(e)).left + Mu(e).scrollLeft;
}
function $E(e, t) {
  var r = Fe(e),
    n = er(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Yh();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + Lu(e), y: s };
}
function VE(e) {
  var t,
    r = er(e),
    n = Mu(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = lr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = lr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + Lu(e),
    s = -n.scrollTop;
  return (
    zt(i || r).direction === "rtl" && (u += lr(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function Nu(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function eg(e) {
  return ["html", "body", "#document"].indexOf(Ct(e)) >= 0
    ? e.ownerDocument.body
    : Ze(e) && Nu(e)
      ? e
      : eg(po(e));
}
function Ei(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = eg(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Fe(n),
    o = i ? [a].concat(a.visualViewport || [], Nu(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(Ei(po(o)));
}
function iu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function GE(e, t) {
  var r = Gr(e, !1, t === "fixed");
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
function Hf(e, t, r) {
  return t === Wh ? iu($E(e, r)) : gr(t) ? GE(t, r) : iu(VE(er(e)));
}
function HE(e) {
  var t = Ei(po(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && Ze(e) ? Wi(e) : e;
  return gr(n)
    ? t.filter(function (i) {
        return gr(i) && Jh(i, n) && Ct(i) !== "body";
      })
    : [];
}
function WE(e, t, r, n) {
  var i = t === "clippingParents" ? HE(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = Hf(e, c, n);
        return (
          (s.top = lr(l.top, s.top)),
          (s.right = Fa(l.right, s.right)),
          (s.bottom = Fa(l.bottom, s.bottom)),
          (s.left = lr(l.left, s.left)),
          s
        );
      },
      Hf(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function tg(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? kt(n) : null,
    a = n ? Hr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case et:
      s = { x: o, y: t.y + t.height };
      break;
    case tt:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? Tu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case $r:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Li:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ni(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? vE : u,
    c = r.rootBoundary,
    l = c === void 0 ? Wh : c,
    d = r.elementContext,
    p = d === void 0 ? pi : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    f = r.padding,
    g = f === void 0 ? 0 : f,
    _ = Qh(typeof g != "number" ? g : Zh(g, Hi)),
    b = p === pi ? pE : pi,
    y = e.rects.popper,
    O = e.elements[h ? b : p],
    w = WE(gr(O) ? O : O.contextElement || er(e.elements.popper), s, l, o),
    S = Gr(e.elements.reference),
    x = tg({ reference: S, element: y, placement: i }),
    T = iu(Object.assign({}, y, x)),
    j = p === pi ? T : S,
    P = {
      top: w.top - j.top + _.top,
      bottom: j.bottom - w.bottom + _.bottom,
      left: w.left - j.left + _.left,
      right: j.right - w.right + _.right,
    },
    M = e.modifiersData.offset;
  if (p === pi && M) {
    var z = M[i];
    Object.keys(P).forEach(function (B) {
      var V = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        J = [Pe, et].indexOf(B) >= 0 ? "y" : "x";
      P[B] += z[J] * V;
    });
  }
  return P;
}
function KE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Kh : s,
    l = Hr(n),
    d = l
      ? u
        ? Uf
        : Uf.filter(function (h) {
            return Hr(h) === l;
          })
      : Hi,
    p = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (h, f) {
    return ((h[f] = Ni(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[kt(f)]), h);
  }, {});
  return Object.keys(v).sort(function (h, f) {
    return v[h] - v[f];
  });
}
function YE(e) {
  if (kt(e) === Iu) return [];
  var t = ya(e);
  return [Gf(e), t, Gf(t)];
}
function JE(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var i = r.mainAxis,
        a = i === void 0 ? !0 : i,
        o = r.altAxis,
        u = o === void 0 ? !0 : o,
        s = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        v = r.flipVariations,
        h = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        g = t.options.placement,
        _ = kt(g),
        b = _ === g,
        y = s || (b || !h ? [ya(g)] : YE(g)),
        O = [g].concat(y).reduce(function (le, ge) {
          return le.concat(
            kt(ge) === Iu
              ? KE(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: f,
                })
              : ge,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        T = !0,
        j = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var M = O[P],
        z = kt(M),
        B = Hr(M) === $r,
        V = [Pe, et].indexOf(z) >= 0,
        J = V ? "width" : "height",
        G = Ni(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        $ = V ? (B ? tt : Ae) : B ? et : Pe;
      w[J] > S[J] && ($ = ya($));
      var X = ya($),
        F = [];
      if (
        (a && F.push(G[z] <= 0),
        u && F.push(G[$] <= 0, G[X] <= 0),
        F.every(function (le) {
          return le;
        }))
      ) {
        ((j = M), (T = !1));
        break;
      }
      x.set(M, F);
    }
    if (T)
      for (
        var I = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = x.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (nt) {
                  return nt;
                });
            });
            if (ce) return ((j = ce), "break");
          },
          ae = I;
        ae > 0;
        ae--
      ) {
        var ue = be(ae);
        if (ue === "break") break;
      }
    t.placement !== j && ((t.modifiersData[n]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const XE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: JE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Wf(e, t, r) {
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
function Kf(e) {
  return [Pe, tt, et, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function QE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Ni(t, { elementContext: "reference" }),
    u = Ni(t, { altBoundary: !0 }),
    s = Wf(o, n),
    c = Wf(u, i, a),
    l = Kf(s),
    d = Kf(c);
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
const ZE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: QE,
};
function ek(e, t, r) {
  var n = kt(e),
    i = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ae, tt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function tk(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Kh.reduce(function (l, d) {
      return ((l[d] = ek(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const rk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: tk };
function nk(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = tg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const ik = { name: "popperOffsets", enabled: !0, phase: "read", fn: nk, data: {} };
function ak(e) {
  return e === "x" ? "y" : "x";
}
function ok(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.mainAxis,
    a = i === void 0 ? !0 : i,
    o = r.altAxis,
    u = o === void 0 ? !1 : o,
    s = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    p = r.tether,
    v = p === void 0 ? !0 : p,
    h = r.tetherOffset,
    f = h === void 0 ? 0 : h,
    g = Ni(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = kt(t.placement),
    b = Hr(t.placement),
    y = !b,
    O = Tu(_),
    w = ak(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    T = t.rects.popper,
    j = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var B,
        V = O === "y" ? Pe : Ae,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + g[V],
        F = $ - g[J],
        I = v ? -T[G] / 2 : 0,
        be = b === $r ? x[G] : T[G],
        ae = b === $r ? -T[G] : -x[G],
        ue = t.elements.arrow,
        le = v && ue ? Du(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Xh(),
        ce = ge[V],
        Ue = ge[J],
        Oe = Si(0, x[G], le[G]),
        nt = y ? x[G] / 2 - I - Oe - ce - P.mainAxis : be - Oe - ce - P.mainAxis,
        pe = y ? -x[G] / 2 + I + Oe + Ue + P.mainAxis : ae + Oe + Ue + P.mainAxis,
        $e = t.elements.arrow && Wi(t.elements.arrow),
        wr = $e ? (O === "y" ? $e.clientTop || 0 : $e.clientLeft || 0) : 0,
        It = (B = M?.[O]) != null ? B : 0,
        Se = $ + nt - It - wr,
        Ee = $ + pe - It,
        Ut = Si(v ? Fa(X, Se) : X, $, v ? lr(F, Ee) : F);
      ((S[O] = Ut), (z[O] = Ut - $));
    }
    if (u) {
      var ht,
        it = O === "x" ? Pe : Ae,
        $t = O === "x" ? et : tt,
        Ve = S[w],
        De = w === "y" ? "height" : "width",
        ke = Ve + g[it],
        at = Ve - g[$t],
        Vt = [Pe, Ae].indexOf(_) !== -1,
        Ki = (ht = M?.[w]) != null ? ht : 0,
        Yi = Vt ? ke : Ve - x[De] - T[De] - Ki + P.altAxis,
        Ji = Vt ? Ve + x[De] + T[De] - Ki - P.altAxis : at,
        Xi = v && Vt ? AE(Yi, Ve, Ji) : Si(v ? Yi : ke, Ve, v ? Ji : at);
      ((S[w] = Xi), (z[w] = Xi - Ve));
    }
    t.modifiersData[n] = z;
  }
}
const sk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ok,
  requiresIfExists: ["offset"],
};
function uk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ck(e) {
  return e === Fe(e) || !Ze(e) ? Mu(e) : uk(e);
}
function lk(e) {
  var t = e.getBoundingClientRect(),
    r = Vr(t.width) / e.offsetWidth || 1,
    n = Vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function dk(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ze(t),
    i = Ze(t) && lk(t),
    a = er(t),
    o = Gr(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Ct(t) !== "body" || Nu(a)) && (u = ck(t)),
      Ze(t) ? ((s = Gr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = Lu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function fk(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    (o.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && i(s);
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
function vk(e) {
  var t = fk(e);
  return EE.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function pk(e) {
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
function hk(e) {
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
var Yf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Jf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function gk(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? Yf : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Yf, a),
        modifiersData: {},
        elements: { reference: u, popper: s },
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
              reference: gr(u) ? Ei(u) : u.contextElement ? Ei(u.contextElement) : [],
              popper: Ei(s),
            }));
          var y = vk(hk([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (O) {
              return O.enabled;
            })),
            h(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var _ = l.elements,
              b = _.reference,
              y = _.popper;
            if (Jf(b, y)) {
              ((l.rects = {
                reference: dk(b, Wi(y), l.options.strategy === "fixed"),
                popper: Du(y),
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
                var w = l.orderedModifiers[O],
                  S = w.fn,
                  x = w.options,
                  T = x === void 0 ? {} : x,
                  j = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: T, name: j, instance: v }) || l);
              }
            }
          }
        },
        update: pk(function () {
          return new Promise(function (g) {
            (v.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Jf(u, s)) return v;
    v.setOptions(c).then(function (g) {
      !p && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var _ = g.name,
          b = g.options,
          y = b === void 0 ? {} : b,
          O = g.effect;
        if (typeof O == "function") {
          var w = O({ state: l, name: _, instance: v, options: y }),
            S = function () {};
          d.push(w || S);
        }
      });
    }
    function f() {
      (d.forEach(function (g) {
        return g();
      }),
        (d = []));
    }
    return v;
  };
}
var _k = [BE, ik, FE, RE, rk, XE, sk, TE, ZE],
  bk = gk({ defaultModifiers: _k }),
  Es,
  Xf;
function yk() {
  if (Xf) return Es;
  Xf = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(a, o) {
    if (a === o) return !0;
    if (a && o && typeof a == "object" && typeof o == "object") {
      if (a.constructor !== o.constructor) return !1;
      var u, s, c;
      if (Array.isArray(a)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (!i(a[s], o[s])) return !1;
        return !0;
      }
      var l;
      if (t && a instanceof Map && o instanceof Map) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        for (l = a.entries(); !(s = l.next()).done; )
          if (!i(s.value[1], o.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && a instanceof Set && o instanceof Set) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (a[s] !== o[s]) return !1;
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
      if (((c = Object.keys(a)), (u = c.length), u !== Object.keys(o).length)) return !1;
      for (s = u; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
      if (e && a instanceof Element) return !1;
      for (s = u; s-- !== 0; )
        if (
          !((c[s] === "_owner" || c[s] === "__v" || c[s] === "__o") && a.$$typeof) &&
          !i(a[c[s]], o[c[s]])
        )
          return !1;
      return !0;
    }
    return a !== a && o !== o;
  }
  return (
    (Es = function (o, u) {
      try {
        return i(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Es
  );
}
var mk = yk();
const wk = Qt(mk);
var Ok = [],
  Sk = function (t, r, n) {
    n === void 0 && (n = {});
    var i = m.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || Ok,
      },
      o = m.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              f = Object.keys(h.elements);
            qa.flushSync(function () {
              s({
                styles: Bf(
                  f.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Bf(
                  f.map(function (g) {
                    return [g, h.attributes[g]];
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
          return wk(i.current, p) ? i.current || p : ((i.current = p), p);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = m.useRef();
    return (
      zf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      zf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || bk,
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
        styles: u.styles,
        attributes: u.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  Ek = function () {},
  kk = function () {
    return Promise.resolve(null);
  },
  xk = [];
function Rk(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? xk : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = m.useContext(cE),
    p = m.useState(null),
    v = p[0],
    h = p[1],
    f = m.useState(null),
    g = f[0],
    _ = f[1];
  m.useEffect(
    function () {
      fE(c, v);
    },
    [c, v],
  );
  var b = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: i,
          onFirstUpdate: s,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, i, s, o, g],
    ),
    y = Sk(u || d, v, b),
    O = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
    T = m.useMemo(
      function () {
        return {
          ref: h,
          style: w.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: _ },
          forceUpdate: S || Ek,
          update: x || kk,
        };
      },
      [h, _, r, O, w, x, S],
    );
  return lE(l)(T);
}
function Ck(e) {
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
          u,
          s = n.state,
          c = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.width) !=
              "number" ||
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = s.modifiersData.popperOffsets,
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            h = K(v, 1),
            f = h[0],
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
            _ = l.width - 2 * t,
            b = l.height - 2 * t;
          (f === "top" && (b = s.rects.reference.y + g.y - t),
            f === "bottom" && (b = l.height - p.y - t),
            f === "left" && (_ = s.rects.reference.x + g.x - t),
            f === "right" && (_ = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(_, "px")),
            (s.styles.popper.maxHeight = "".concat(b, "px")));
        }
      },
    },
  ];
}
var au = 5,
  Pk = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: au,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function Ak() {
  return null;
}
var Ik = [0, 8];
function jk(e) {
  var t = e.children,
    r = t === void 0 ? Ak : t,
    n = e.offset,
    i = n === void 0 ? Ik : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    h = K(i, 2),
    f = h[0],
    g = h[1],
    _ = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: au, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, g] } },
          w = v ? Ck({ viewportPadding: au }) : [];
        return [].concat(Pk, [y, O], Te(w));
      },
      [f, g, v],
    ),
    b = m.useMemo(
      function () {
        return c == null ? _ : [].concat(Te(_), Te(c));
      },
      [_, c],
    );
  return E.createElement(Rk, { modifiers: b, placement: o, strategy: d, referenceElement: s }, r);
}
var rg = "atlaskit-portal-container",
  ng = "body > .atlaskit-portal-container",
  ig = "atlaskit-portal",
  Dk = function (t) {
    var r = document.createElement("div");
    return ((r.className = ig), (r.style.zIndex = "".concat(t)), r);
  },
  ag = function () {
    return document.body;
  },
  og = function () {
    var t = document.querySelector(ng);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = rg),
        (n.style.display = "flex"),
        (r = ag()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  Tk = function (t) {
    og().removeChild(t);
  },
  Mk = function (t) {
    t.parentElement || og().appendChild(t);
  },
  sg = function () {
    return document !== void 0;
  },
  Lk = function (t) {
    if (sg()) {
      var r = document.createElement("div");
      return ((r.className = ig), (r.style.zIndex = "".concat(t)), r);
    }
  },
  Nk = function () {
    if (sg()) {
      var t = document.querySelector(ng);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = rg),
          (n.style.display = "flex"),
          (r = ag()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function Fk(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return Dk(t);
      },
      [t],
    );
  return (
    Mk(n),
    m.useEffect(
      function () {
        return function () {
          Tk(n);
        };
      },
      [n],
    ),
    qa.createPortal(r, n)
  );
}
var ug = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function qk(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  ug(
    function () {
      var s = Lk(t);
      o(s);
      var c = Nk();
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
  var u = E.createElement(m.Suspense, { fallback: null }, r);
  return a ? qa.createPortal(u, a) : null;
}
var Bk = function (t) {
    var r = m.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = m.useState(function () {
        return t === "layoutEffect" ? ug : m.useEffect;
      }),
      u = K(o, 1),
      s = u[0];
    return (
      s(function () {
        a(!0);
      }, []),
      i
    );
  },
  zk = "akPortalMount",
  Uk = "akPortalUnmount",
  Qf = {
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
  $k = function (t) {
    return Qf.hasOwnProperty(t) ? Qf[t] : null;
  },
  Vk = function (t, r) {
    var n = { layer: $k(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Zf(e, t) {
  var r = Vk(e, t);
  window.dispatchEvent(r);
}
var Gk = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        Zf(zk, r),
        function () {
          Zf(Uk, r);
        }
      );
    },
    [r],
  );
};
function Hk(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = Bk(a);
  return (
    Gk(r),
    zr("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(qk, { zIndex: r }, n)
      : o
        ? E.createElement(Fk, { zIndex: r }, n)
        : null
  );
}
var ki = new Set(),
  Fi = null;
function ev() {
  if (!Fi) {
    Fi = co.bindAll(window, [
      { type: "dragend", listener: ks },
      { type: "pointerdown", listener: ks },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ks();
          };
        })(),
      },
    ]);
    var e = Array.from(ki);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ks() {
  var e;
  ((e = Fi) === null || e === void 0 || e(), (Fi = null));
  var t = Array.from(ki);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function Wk() {
  return co.bindAll(window, [
    { type: "dragstart", listener: ev },
    { type: "dragenter", listener: ev },
  ]);
}
var la = null;
function Kk(e) {
  return (
    la || (la = Wk()),
    ki.add(e),
    e.onRegister({ isDragging: Fi !== null }),
    function () {
      if ((ki.delete(e), ki.size === 0)) {
        var r;
        ((r = la) === null || r === void 0 || r(), (la = null));
      }
    }
  );
}
var xi = null;
function bi() {
  xi != null && (window.clearTimeout(xi), (xi = null));
}
function tv(e, t) {
  (bi(),
    (xi = window.setTimeout(function () {
      ((xi = null), e());
    }, t)));
}
var gt = null;
function Yk(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(gt && gt.entry === e);
  }
  function n() {
    r() && (bi(), (gt = null));
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
        ((t = "shown"), bi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), bi(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(v) {
    var h = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          tv(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && i();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = !!(gt && gt.isVisible());
    (gt && (bi(), gt.entry.hide({ isImmediate: !0 }), gt.entry.done(), (gt = null)),
      (gt = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      h();
      return;
    }
    ((t = "waiting-to-show"), tv(h, e.delay));
  }
  d();
  var p = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: u,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return p;
}
function Jk(e, t) {
  var r = F1();
  return t ? "".concat(r(e)) : void 0;
}
var rv = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  Xk = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: C([rv.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return m.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(i), className: C([rv.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  cg = m.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return m.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      m.createElement(
        "div",
        {
          role: "tooltip",
          className: C(["_80om73ad", i]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        a,
        d && m.createElement(Xk, { shortcut: d }),
      ),
    );
  });
cg.displayName = "TooltipPrimitive";
var nv = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  lg = m.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.truncate,
      u = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return m.createElement(
      cg,
      {
        ref: r,
        style: n,
        className: C([nv.base, o && nv.truncate, i]),
        placement: u,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: p,
      },
      a,
    );
  });
lg.displayName = "TooltipContainer";
function iv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function av(e, t) {
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
function Dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? av(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : av(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qk = q1.tooltip(),
  ov = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.10.0" },
  Zk = { top: "bottom", bottom: "top", left: "right", right: "left" },
  ex = function (t) {
    return t.split("-")[0];
  };
function tx(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? lg : c,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    f = h === void 0 ? 300 : h,
    g = e.onShow,
    _ = g === void 0 ? we : g,
    b = e.onHide,
    y = b === void 0 ? we : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    T = x === void 0 ? !1 : x,
    j = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    z = e.ignoreTooltipPointerEvents,
    B = z === void 0 ? !1 : z,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = ud(Dr({ fn: _, action: "displayed", analyticsData: j }, ov)),
    F = ud(Dr({ fn: y, action: "hidden", analyticsData: j }, ov)),
    I = m.useRef(null),
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
    nt = vi(ue),
    pe = vi(X),
    $e = vi(F),
    wr = vi(f),
    It = vi(O),
    Se = m.useRef(!1),
    Ee = m.useCallback(function (L) {
      ((I.current = L), (Se.current = !1));
    }, []),
    Ut = m.useCallback(
      function () {
        I.current &&
          (Se.current && $e.current(), (I.current = null), (Se.current = !1), le("hide"));
      },
      [$e],
    ),
    ht = m.useCallback(
      function () {
        I.current && (I.current.abort(), Se.current && $e.current(), (I.current = null));
      },
      [$e],
    );
  m.useEffect(
    function () {
      return function () {
        I.current && ht();
      };
    },
    [ht],
  );
  var it = m.useRef(!1);
  m.useEffect(function () {
    return Kk({
      onRegister: function (re) {
        var jt = re.isDragging;
        it.current = jt;
      },
      onDragStart: function () {
        var re;
        ((re = I.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (it.current = !0));
      },
      onDragEnd: function () {
        it.current = !1;
      },
    });
  }, []);
  var $t = m.useCallback(
      function (L) {
        var re;
        if (!it.current) {
          if ((I.current && !I.current.isActive() && ht(), I.current && I.current.isActive())) {
            I.current.keep();
            return;
          }
          if (!(It.current && !((re = It.current) !== null && re !== void 0 && re.call(It)))) {
            var jt = {
                source: L,
                delay: wr.current,
                show: function (Or) {
                  var Qr = Or.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(Qr ? "show-immediate" : "fade-in"));
                },
                hide: function (Or) {
                  var Qr = Or.isImmediate;
                  le(Qr ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              bo = Yk(jt);
            Ee(bo);
          }
        }
      },
      [It, wr, Ut, Ee, ht, pe],
    ),
    Ve = m.useCallback(
      function () {
        var L;
        (L = I.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [I],
    );
  ($S({ onClose: Ve, isDisabled: ue === "hide" || ue === "fade-out" }),
    m.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = co.bind(window, {
          type: "scroll",
          listener: function () {
            I.current && I.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ue],
    ));
  var De = m.useCallback(
      function () {
        T && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    ke = m.useCallback(
      function () {
        S && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = m.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: iv({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          $t(re);
        }
      },
      [n, $t],
    ),
    Vt = m.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), I.current && I.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ki =
      n === "mouse"
        ? function (L) {
            var re;
            (re = I.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (I.current.mousePosition = iv({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Yi = m.useCallback(function () {
      if (I.current && I.current.isActive()) {
        I.current.keep();
        return;
      }
    }, []),
    Ji = m.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        $t({ type: "keyboard" });
      },
      [$t],
    ),
    Xi = m.useCallback(function () {
      I.current && I.current.requestHide({ isImmediate: !1 });
    }, []),
    hg = m.useCallback(
      function (L) {
        L === "exiting" &&
          nt.current === "fade-out" &&
          I.current &&
          I.current.finishHideAnimation();
      },
      [nt],
    ),
    gg = p,
    go = ue !== "hide" && !!o,
    qu = !J && go,
    Bu = ue !== "hide" && ue !== "fade-out",
    _g = m.useCallback(function () {
      var L;
      (L = I.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  WS({ isOpen: go && Bu, onClose: _g });
  var zu = function () {
      var re;
      if (n === "mouse" && (re = I.current) !== null && re !== void 0 && re.mousePosition) {
        var jt;
        return (jt = I.current) === null || jt === void 0 ? void 0 : jt.mousePosition;
      }
      return ge.current || void 0;
    },
    Xr = Jk("tooltip", qu),
    _o = {
      onMouseOver: at,
      onMouseOut: Vt,
      onMouseMove: Ki,
      onMouseDown: De,
      onClick: ke,
      onFocus: Ji,
      onBlur: Xi,
    };
  v && (_o["data-testid"] = "".concat(v, "--container"));
  var Uu = typeof t == "function";
  m.useEffect(
    function () {
      if (!Uu) {
        var L = ge.current;
        if (!(!L || !Xr))
          return (
            L.setAttribute("aria-describedby", Xr),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Uu, Xr],
  );
  var $u = qu
    ? E.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: Xr },
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
          t(Dr(Dr({}, _o), {}, { "aria-describedby": Xr, ref: Oe })),
          $u,
        )
      : E.createElement(gg, te({}, _o, { ref: Ue, role: "presentation" }), t, $u),
    go
      ? E.createElement(
          Hk,
          { zIndex: Qk },
          E.createElement(jk, { placement: $, referenceElement: zu(), strategy: M }, function (L) {
            var re = L.ref,
              jt = L.style,
              bo = L.update,
              yo = L.placement,
              Or = n === "mouse" ? void 0 : Zk[ex(yo)];
            return E.createElement(
              Hh,
              { appear: !0 },
              Bu &&
                E.createElement(
                  uE,
                  {
                    distance: "constant",
                    entranceDirection: Or,
                    exitDirection: Or,
                    onFinish: hg,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (Qr) {
                    var bg = Qr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(bg),
                        style: Dr(Dr({}, jt), B && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: zu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Vt,
                        onMouseOver: Yi,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: bo }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var rx = [
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
  hi = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  sv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  dg = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      i = t.testId;
    t.isRanking;
    var a = t.innerRef,
      o = t.isSortable,
      u = t.sortOrder,
      s = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      h = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      g = f === void 0 ? "Sort button" : f,
      _ = t.isIconOnlyHeader,
      b = ne(t, rx),
      y = m.useState(!1),
      O = K(y, 2),
      w = O[0],
      S = O[1],
      x = m.useState(!1),
      T = K(x, 2),
      j = T[0],
      P = T[1],
      M = c === l || u !== void 0,
      z = w || M || j,
      B = z && _,
      V = !_ || z || (_ && !j),
      J = m.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      G = m.useCallback(
        function () {
          P?.(!1);
        },
        [P],
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
      F = E.createElement(
        uo,
        { xcss: sv.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: J, onBlur: G },
        E.createElement(
          tx,
          { content: u === hr ? p : h },
          E.createElement(
            x1,
            { onClick: s, xcss: hi.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              La,
              { xcss: B ? hi.hideIconHeaderWrapper : hi.visibleHeaderWrapper },
              E.createElement("span", { className: C([sv.text]) }, r),
            ),
            V &&
              E.createElement(
                La,
                { xcss: z ? hi.sortIconVisibleWrapper : hi.sortIconHiddenWrapper },
                u === hr
                  ? E.createElement(zS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(FS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      DS,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        b,
        { isSortable: o, sortOrder: u },
      ),
      o ? F : r,
    );
  },
  nx = ["isRanking", "refHeight", "refWidth"];
function ix(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, fg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function fg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fg = function () {
    return !!e;
  })();
}
var ax = (function (e) {
    function t() {
      return (fe(this, t), ix(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, nx),
              u = wm(i, a);
            return E.createElement(dg, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  ox = MS(ax),
  sx = ["cells"],
  ux = [
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
function cx(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, vg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function vg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vg = function () {
    return !!e;
  })();
}
var lx = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = cx(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Ia(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Ia(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.head,
              o = i.sortKey,
              u = i.sortOrder,
              s = i.isFixedSize,
              c = i.onSort,
              l = i.isRanking,
              d = i.isRankable,
              p = i.testId,
              v = this.state.activeSortButtonId;
            if (!a) return null;
            var h = d ? ox : dg,
              f = a.cells,
              g = ne(a, sx);
            return E.createElement(
              jS,
              te({}, g, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var y = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    x = _.descendingSortTooltip,
                    T = _.isIconOnlyHeader,
                    j = _.isSortable,
                    P = _.key,
                    M = _.shouldTruncate,
                    z = _.testId,
                    B = _.width,
                    V = ne(_, ux),
                    J = "head-cell-".concat(b),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), j && c(_)());
                    };
                  return E.createElement(
                    h,
                    te(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: T,
                        isSortable: !!j,
                        isRanking: l,
                        key: P || b,
                        headCellId: J,
                        activeSortButtonId: v,
                        onClick: G,
                        testId: z || p,
                        shouldTruncate: M,
                        sortOrder: P === o ? u : void 0,
                        width: B,
                        ascendingSortTooltip: y,
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
  })(E.Component),
  dx = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function fx(e) {
  switch (e) {
    case Ta:
      return hr;
    case hr:
      return Ta;
    default:
      return e;
  }
}
var vx = function (t) {
    var r = t.caption,
      n = t.head,
      i = t.highlightedRowIndex,
      a = t.rows,
      o = t.sortKey,
      u = t.sortOrder,
      s = t.loadingLabel,
      c = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      p = t.label,
      v = t.isLoading,
      h = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      g = f === void 0 ? !1 : f,
      _ = t.rowsPerPage,
      b = _ === void 0 ? 1 / 0 : _,
      y = t.onSetPage,
      O = y === void 0 ? we : y,
      w = t.onSort,
      S = w === void 0 ? we : w,
      x = t.page,
      T = x === void 0 ? 1 : x,
      j = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      z = t.isRankingDisabled,
      B = z === void 0 ? !1 : z,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      F = t.paginationi18n,
      I =
        F === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : F,
      be = m.useState(!1),
      ae = K(be, 2),
      ue = ae[0],
      le = ae[1],
      ge = m.useRef(null),
      ce = Ii({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.9",
      }),
      Ue = Ii({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.9",
      });
    m.useEffect(
      function () {
        (Ia(o, n), mm(n));
      },
      [o, n],
    );
    var Oe = function (ke) {
        return function () {
          var at = ke.key;
          if (at) {
            if (ce && M && at === o && u === Ta) {
              ce({ key: null, sortOrder: null, item: ke });
              return;
            }
            var Vt = at !== o ? hr : fx(u);
            ce && ce({ key: at, item: ke, sortOrder: Vt });
          }
        };
      },
      nt = function (ke, at) {
        O(ke, at);
      },
      pe = function (ke) {
        (le(!0), J(ke));
      },
      $e = function (ke) {
        (le(!1), Ue(ke));
      },
      wr = function () {
        return X || (Hp(a || [], T, b).length > 2 ? Ma : qm);
      },
      It = function () {
        return h ? E.createElement(Gm, { testId: l }) : j && E.createElement(Hm, { testId: l }, j);
      },
      Se = a && a.length,
      Ee,
      Ut = !1;
    (d && Number.isInteger(d) && b && Se && Se <= d
      ? ((Ee = Math.ceil(d / b)), (Ut = !0))
      : (Ee = Se && b ? Math.ceil(Se / b) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var ht = T > Ee ? Ee : T,
      it = !!Se,
      $t = wr(),
      Ve = It();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        ah,
        {
          isLoading: h && it,
          spinnerSize: $t,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          Um,
          { isFixedSize: g, "aria-label": p, hasDataRow: it, testId: l, isLoading: h },
          !!r && E.createElement($m, null, r),
          n &&
            E.createElement(lx, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: M,
              testId: l,
            }),
          it &&
            E.createElement(hx, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: b,
              page: ht,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: M,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: $e,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : E.createElement(
            Vm,
            { testId: l },
            E.createElement(PS, {
              value: ht,
              onChange: nt,
              total: Ee,
              i18n: I,
              isDisabled: h,
              testId: l,
            }),
          ),
      !it &&
        Ve &&
        E.createElement(nh, { isLoading: h, spinnerSize: Ma, testId: l, loadingLabel: s }, Ve),
    );
  },
  px = m.lazy(function () {
    return Uv(
      () => import("./body-Bdbk42PN.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  hx = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ne(t, dx),
      l = i && !c.sortKey,
      d = m.useState(!1),
      p = K(d, 2),
      v = p[0],
      h = p[1];
    m.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var f = E.createElement(s0, te({ ref: r }, c));
    return l && v
      ? E.createElement(
          c0,
          { fallback: f },
          E.createElement(
            m.Suspense,
            { fallback: f },
            E.createElement(
              px,
              te({ ref: r }, c, {
                isRanking: a,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : f;
  });
function gx(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, pg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pg = function () {
    return !!e;
  })();
}
var ho = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = gx(this, t, [].concat(i))),
      R(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      R(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      R(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      R(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      R(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var p = Om(o, c, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(o));
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
            u = n.rows,
            s = this.props,
            c = s.caption,
            l = s.emptyView,
            d = s.head,
            p = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            h = s.isLoading,
            f = s.loadingLabel,
            g = s.isFixedSize,
            _ = s.isRankable,
            b = s.isRankingDisabled,
            y = s.rowsPerPage,
            O = s.paginationi18n,
            w = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            T = s.label;
          return E.createElement(vx, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: h,
            loadingLabel: f,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: i,
            rows: u,
            rowsPerPage: y,
            sortKey: a,
            sortOrder: o,
            isRankable: _,
            isRankingDisabled: b,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: x,
            label: T,
          });
        },
      },
    ])
  );
})(E.Component);
R(ho, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const _x = (e, t) => {
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
  Fu = (e, t) => ({ cells: _x(e, t) }),
  bx = io(() => {
    const { usersStore: e } = oo(),
      t = Fu(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? k.jsx("div", { children: "SlowQuery is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(ho, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "time", content: n.time },
                    { key: "query", content: n.query },
                    { key: "queryTime", content: n.queryTime },
                    { key: "resultRows", content: n.resultRows },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), _u.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  yx = io(() => {
    const { usersStore: e } = oo(),
      t = Fu(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? k.jsxs("div", { children: ["$", e.planString] })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(ho, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
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
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  mx = io(() => {
    const { usersStore: e } = oo(),
      t = Fu(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? k.jsx("div", { children: "Query history is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(ho, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "summaryBeginTime", content: n.summaryBeginTime },
                    { key: "summaryEndTime", content: n.summaryEndTime },
                    { key: "digestText", content: n.digestText },
                    { key: "stmtType", content: n.stmtType },
                    { key: "tableNames", content: n.tableNames },
                    { key: "planHint", content: n.planHint },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), _u.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  We = (e, t) => {
    Re.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function wx() {
  const { usersStore: e, stateStore: t } = oo();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explain");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainAnalyze");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainAnalyzeWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Re.invoke("executeQuery");
      } catch (h) {
        (console.error(h), We("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Re.invoke("executeQueryWith");
      } catch (h) {
        (console.error(h), We("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQuery");
      } catch (h) {
        (console.error(h), We("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQueryCTE");
      } catch (h) {
        (console.error(h), We("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Re.invoke("dropStats");
      } catch (h) {
        (console.error(h), We("dropStats error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Re.invoke("deOptimizeQuery");
      } catch (h) {
        (console.error(h), We("deoptimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        const h = await Re.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(h), t.saveState("HISTORY"));
      } catch (h) {
        (console.error(h), We("History error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    v = async () => {
      e.loading();
      try {
        const h = await Re.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(h), t.saveState("SLOW_QUERY"));
      } catch (h) {
        (console.error(h), We("Slowquery error", h.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return k.jsxs("div", {
        className: "query-analysis-container",
        children: [
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: o, children: "1. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: s, children: "4. Add optimization indexes" }),
                    k.jsx("button", { onClick: o, children: "5. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: u, children: "8. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", {
                      onClick: c,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    k.jsx("button", { onClick: u, children: "10. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Additional action" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    k.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Query History Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: p, children: "Show Query History" }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Slow Query Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: v, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(bx, {}),
        ],
      });
    case "HISTORY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(mx, {}),
        ],
      });
    case "PLAN":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(yx, {}),
        ],
      });
    default:
      return k.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const Ox = io(wx),
  Sx = document.getElementById("root"),
  Ex = yg.createRoot(Sx),
  uv = () => {
    Ex.render(k.jsx(Up, { ...$p, children: k.jsx(Ox, {}) }));
  };
Re.view.theme
  .enable()
  .then(() => {
    uv();
  })
  .catch((e) => {
    (console.error(e.message), uv());
  });
export {
  E as R,
  t0 as T,
  ze as _,
  ve as a,
  Ws as b,
  fe as c,
  Be as d,
  Y as e,
  K as f,
  R as g,
  ne as h,
  co as i,
  Te as j,
  te as k,
  d1 as l,
  Ft as m,
  At as n,
  C as o,
  Zm as p,
  wm as q,
  m as r,
  Jm as s,
  MS as w,
};
