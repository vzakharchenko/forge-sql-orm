const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./body-S9RKfdBy.js",
      "./react-dom-vendor-B_rzBOmK.js",
      "./client-core-vendor-BsnvkX1x.js",
      "./lodash-vendor-BISPxPhj.js",
      "./body-C3aXNd8H.css",
    ]),
) => i.map((i) => d[i]);
import { r as dt, a as Ii, c as Th } from "./react-dom-vendor-B_rzBOmK.js";
import { g as tr, a as qs, r as Qt, b as St, s as He } from "./client-core-vendor-BsnvkX1x.js";
import { r as Mh } from "./lodash-vendor-BISPxPhj.js";
function Fh(e, t) {
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
var uo = { exports: {} },
  un = {};
var Ou;
function Lh() {
  if (Ou) return un;
  Ou = 1;
  var e = dt(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      f = null,
      p = null;
    (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (l in s) n.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: f, ref: p, props: d, _owner: a.current };
  }
  return ((un.Fragment = r), (un.jsx = o), (un.jsxs = o), un);
}
var ku;
function Nh() {
  return (ku || ((ku = 1), (uo.exports = Lh())), uo.exports);
}
var F = Nh(),
  _ = dt();
const k = tr(_),
  Su = Fh({ __proto__: null, default: k }, [_]);
var co = {},
  cs = function (e, t) {
    return (
      (cs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      cs(e, t)
    );
  };
function Ef(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  cs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var vi = function () {
  return (
    (vi =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    vi.apply(this, arguments)
  );
};
function xf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Cf(e, t, r, n) {
  var a = arguments.length,
    i = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
  return (a > 3 && i && Object.defineProperty(t, r, i), i);
}
function Rf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Pf(e, t, r, n, a, i) {
  function o(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var u = n.kind,
      s = u === "getter" ? "get" : u === "setter" ? "set" : "value",
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
    h.addInitializer = function (b) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(b || null));
    };
    var g = (0, r[p])(u === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && a.unshift(d));
    } else (d = o(g)) && (u === "field" ? a.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (f = !0));
}
function Af(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function jf(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function If(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Df(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Tf(e, t, r, n) {
  function a(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
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
      l.done ? i(l.value) : a(l.value).then(u, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Mf(e, t) {
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
var Di = Object.create
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
function Ff(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Di(t, e, r);
}
function pi(e) {
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
function $s(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Lf() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat($s(arguments[t]));
  return e;
}
function Nf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, u = i.length; o < u; o++, a++) n[a] = i[o];
  return n;
}
function zf(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Hr(e) {
  return this instanceof Hr ? ((this.v = e), this) : new Hr(e);
}
function Bf(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    i = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", o),
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
  function u(p, h) {
    n[p] &&
      ((a[p] = function (v) {
        return new Promise(function (g, b) {
          i.push([p, v, g, b]) > 1 || s(p, v);
        });
      }),
      h && (a[p] = h(a[p])));
  }
  function s(p, h) {
    try {
      c(n[p](h));
    } catch (v) {
      f(i[0][3], v);
    }
  }
  function c(p) {
    p.value instanceof Hr ? Promise.resolve(p.value.v).then(l, d) : f(i[0][2], p);
  }
  function l(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function f(p, h) {
    (p(h), i.shift(), i.length && s(i[0][0], i[0][1]));
  }
}
function Uf(e) {
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
          return (r = !r) ? { value: Hr(e[a](o)), done: !1 } : i ? i(o) : o;
        }
      : i;
  }
}
function qf(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof pi == "function" ? pi(e) : e[Symbol.iterator]()),
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
        return new Promise(function (u, s) {
          ((o = e[i](o)), a(u, s, o.done, o.value));
        });
      };
  }
  function a(i, o, u, s) {
    Promise.resolve(s).then(function (c) {
      i({ value: c, done: u });
    }, o);
  }
}
function $f(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var zh = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ls = function (e) {
    return (
      (ls =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      ls(e)
    );
  };
function Vf(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ls(e), n = 0; n < r.length; n++) r[n] !== "default" && Di(t, e, r[n]);
  return (zh(t, e), t);
}
function Gf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hf(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Wf(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Kf(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Yf(e, t, r) {
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
var Bh =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Jf(e) {
  function t(i) {
    ((e.error = e.hasError ? new Bh(i, e.error, "An error was suppressed during disposal.") : i),
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
function Xf(e, t) {
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
const Uh = {
    __extends: Ef,
    __assign: vi,
    __rest: xf,
    __decorate: Cf,
    __param: Rf,
    __esDecorate: Pf,
    __runInitializers: Af,
    __propKey: jf,
    __setFunctionName: If,
    __metadata: Df,
    __awaiter: Tf,
    __generator: Mf,
    __createBinding: Di,
    __exportStar: Ff,
    __values: pi,
    __read: $s,
    __spread: Lf,
    __spreadArrays: Nf,
    __spreadArray: zf,
    __await: Hr,
    __asyncGenerator: Bf,
    __asyncDelegator: Uf,
    __asyncValues: qf,
    __makeTemplateObject: $f,
    __importStar: Vf,
    __importDefault: Gf,
    __classPrivateFieldGet: Hf,
    __classPrivateFieldSet: Wf,
    __classPrivateFieldIn: Kf,
    __addDisposableResource: Yf,
    __disposeResources: Jf,
    __rewriteRelativeImportExtension: Xf,
  },
  qh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Yf,
        get __assign() {
          return vi;
        },
        __asyncDelegator: Uf,
        __asyncGenerator: Bf,
        __asyncValues: qf,
        __await: Hr,
        __awaiter: Tf,
        __classPrivateFieldGet: Hf,
        __classPrivateFieldIn: Kf,
        __classPrivateFieldSet: Wf,
        __createBinding: Di,
        __decorate: Cf,
        __disposeResources: Jf,
        __esDecorate: Pf,
        __exportStar: Ff,
        __extends: Ef,
        __generator: Mf,
        __importDefault: Gf,
        __importStar: Vf,
        __makeTemplateObject: $f,
        __metadata: Df,
        __param: Rf,
        __propKey: jf,
        __read: $s,
        __rest: xf,
        __rewriteRelativeImportExtension: Xf,
        __runInitializers: Af,
        __setFunctionName: If,
        __spread: Lf,
        __spreadArray: zf,
        __spreadArrays: Nf,
        __values: pi,
        default: Uh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $t = qs(qh);
var cn = {},
  Eu;
function $h() {
  return (
    Eu ||
      ((Eu = 1),
      Object.defineProperty(cn, "__esModule", { value: !0 }),
      (cn.NavigationTarget = void 0),
      (cn.NavigationTarget = {
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
    cn
  );
}
var lo = {},
  fo = {},
  ln = {},
  dn = {},
  xu;
function ze() {
  if (xu) return dn;
  ((xu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((dn.BridgeAPIError = e), dn);
}
var Cu;
function _e() {
  if (Cu) return ln;
  ((Cu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.getCallBridge = void 0));
  const e = ze();
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
  return ((ln.getCallBridge = r), ln);
}
var fn = {},
  Ru;
function Ti() {
  if (Ru) return fn;
  ((Ru = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.withRateLimiter = void 0));
  const e = ze(),
    t = (r, n, a, i) => {
      let o = Date.now(),
        u = 0;
      return async (...s) => {
        const c = Date.now();
        if ((c - o > a && ((o = c), (u = 0)), u >= n))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), r(...s));
      };
    };
  return ((fn.withRateLimiter = t), fn);
}
var Pu;
function Vh() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = _e(),
          r = ze(),
          n = Ti(),
          a = (0, t.getCallBridge)(),
          i = (s) => {
            if (s && Object.values(s).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (s, c) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (i(c), a("invoke", { functionKey: s, payload: c }));
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
      })(fo)),
    fo
  );
}
var Au;
function Gh() {
  return (
    Au ||
      ((Au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), $t.__exportStar(Vh(), e));
      })(lo)),
    lo
  );
}
var vo = {},
  vn = {},
  po = {},
  ju;
function Zf() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = _e(),
          r = ze(),
          n = Ti(),
          a = 500,
          i = 25,
          o = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((f) => typeof f == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (f) => {
            s(f);
            const p = { ...f, invokeType: `ui-${d.toLowerCase()}-fetch` },
              h = await u("invoke", p),
              { success: v, payload: g, error: b } = h ?? {},
              m = { ...(v ? g : b) };
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
      })(po)),
    po
  );
}
var Iu;
function Hh() {
  if (Iu) return vn;
  ((Iu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeRemote = void 0));
  const e = Zf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((vn.invokeRemote = t), vn);
}
var pn = {},
  Du;
function Wh() {
  if (Du) return pn;
  ((Du = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.invokeService = void 0));
  const e = Zf(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((pn.invokeService = t), pn);
}
var Tu;
function Kh() {
  return (
    Tu ||
      ((Tu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = $t;
        (t.__exportStar(Hh(), e), t.__exportStar(Wh(), e));
      })(vo)),
    vo
  );
}
var ho = {},
  hn = {},
  gn = {},
  Mu;
function Yh() {
  if (Mu) return gn;
  ((Mu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.submit = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((gn.submit = n), gn);
}
var bn = {},
  Fu;
function Jh() {
  if (Fu) return bn;
  ((Fu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.close = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((bn.close = n), bn);
}
var _n = {},
  Lu;
function Xh() {
  if (Lu) return _n;
  ((Lu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.open = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((_n.open = n), _n);
}
var yn = {},
  Nu;
function Zh() {
  if (Nu) return yn;
  ((Nu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.refresh = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((yn.refresh = n), yn);
}
var mn = {},
  zu;
function Qh() {
  if (zu) return mn;
  ((zu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.createHistory = void 0));
  const t = (0, _e().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((mn.createHistory = r), mn);
}
var wn = {},
  go = {},
  jt = {},
  Bu;
function Qf() {
  return (
    Bu ||
      ((Bu = 1),
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
  Uu;
function eg() {
  if (Uu) return ar;
  ((Uu = 1),
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
        { fallback: u } = i;
      if (!u) {
        let s;
        return (
          o.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, o)) {
        const c = await this.getTranslationResource(s);
        if (c) return { translations: c, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const i = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(a, i);
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
      const { locales: o, fallback: u } = i,
        s = [a],
        c = u[a];
      return (
        c && Array.isArray(c) && c.length > 0 && s.push(...c),
        e(s, i.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return ((ar.TranslationsGetter = r), ar);
}
var On = {},
  bo = {},
  qu;
function ev() {
  return (
    qu ||
      ((qu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = $t.__importDefault(Mh()),
          n = (i, o, u) => {
            const s = i[u];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const a = (i, o) => {
          let u = i[o];
          if (!u) {
            const s = o.split(".");
            s.length > 1 && (u = (0, r.default)(i, s, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = a;
      })(bo)),
    bo
  );
}
var $u;
function tg() {
  if ($u) return On;
  (($u = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.Translator = void 0));
  const e = ev();
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
  return ((On.Translator = t), On);
}
var kn = {},
  Vu;
function rg() {
  if (Vu) return kn;
  ((Vu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.ensureLocale = void 0));
  const e = Qf(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, o) => {
        const [u] = o.split("-");
        return (i[u] || (i[u] = o), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (i) => {
      const o = i.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((kn.ensureLocale = a), kn);
}
var _o = {},
  Gu;
function ng() {
  return (
    Gu ||
      ((Gu = 1),
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
                          ? v.flatMap((b) => d(b, g))
                          : d(v, g);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((f) => [f, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const { key: p } of f) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const f = i(d[0]);
            for (const p of f) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(_o)),
    _o
  );
}
var yo = {},
  Hu;
function ag() {
  return (Hu || ((Hu = 1), Object.defineProperty(yo, "__esModule", { value: !0 })), yo);
}
var Wu;
function tv() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = $t;
        (t.__exportStar(Qf(), e),
          t.__exportStar(eg(), e),
          t.__exportStar(tg(), e),
          t.__exportStar(rg(), e));
        var r = ev();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = ng();
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
          t.__exportStar(ag(), e));
      })(go)),
    go
  );
}
var Ku;
function ig() {
  if (Ku) return wn;
  ((Ku = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.getContext = void 0));
  const e = _e(),
    t = tv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const i = await r("getContext"),
        o = i?.locale;
      return (o && (i.locale = (a = (0, t.ensureLocale)(o)) !== null && a !== void 0 ? a : o), i);
    };
  return ((wn.getContext = n), wn);
}
var Sn = {},
  Yu;
function og() {
  if (Yu) return Sn;
  ((Yu = 1),
    Object.defineProperty(Sn, "__esModule", { value: !0 }),
    (Sn.changeWindowTitle = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Sn.changeWindowTitle = n), Sn);
}
var En = {},
  Ju;
function sg() {
  if (Ju) return En;
  ((Ju = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.theme = void 0));
  const t = (0, _e().getCallBridge)();
  return ((En.theme = { enable: () => t("enableTheming") }), En);
}
var xn = {},
  Cn = {},
  mo = {},
  ir = {},
  Xu;
function rv() {
  if (Xu) return ir;
  ((Xu = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      i = atob(a),
      o = new Array(i.length);
    for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
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
var Zu;
function ug() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = rv(),
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
      })(mo)),
    mo
  );
}
var Qu;
function nv() {
  if (Qu) return Cn;
  ((Qu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.events = void 0));
  const e = _e(),
    t = ug(),
    r = (0, e.getCallBridge)(),
    n = async (i, o) => {
      let u = o;
      return (
        (0, t.containsBlobs)(o) && (u = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: i, payload: u })
      );
    },
    a = (i, o) =>
      r("on", {
        event: i,
        callback: (s) => {
          let c = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (c = (0, t.deserialiseBlobsInPayload)(s)),
            o(c)
          );
        },
      });
  return ((Cn.events = { emit: n, on: a }), Cn);
}
var ec;
function cg() {
  if (ec) return xn;
  ((ec = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.emitReadyEvent = void 0));
  const e = nv(),
    t = av(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((xn.emitReadyEvent = n), xn);
}
var tc;
function av() {
  if (tc) return hn;
  ((tc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.view = void 0));
  const e = Yh(),
    t = Jh(),
    r = Xh(),
    n = Zh(),
    a = Qh(),
    i = ig(),
    o = og(),
    u = sg(),
    s = cg();
  return (
    (hn.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
    }),
    hn
  );
}
var rc;
function iv() {
  return (
    rc ||
      ((rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), $t.__exportStar(av(), e));
      })(ho)),
    ho
  );
}
var wo = {},
  Rn = {},
  nc;
function lg() {
  if (nc) return Rn;
  ((nc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.router = void 0));
  const t = (0, _e().getCallBridge)(),
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
    a = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    i = async () => t("reload");
  return ((Rn.router = { getUrl: r, navigate: n, open: a, reload: i }), Rn);
}
var ac;
function dg() {
  return (
    ac ||
      ((ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), $t.__exportStar(lg(), e));
      })(wo)),
    wo
  );
}
var Oo = {},
  Pn = {},
  ic;
function fg() {
  if (ic) return Pn;
  ((ic = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.Modal = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
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
  return ((Pn.Modal = a), Pn);
}
var oc;
function vg() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), $t.__exportStar(fg(), e));
      })(Oo)),
    Oo
  );
}
var It = {},
  An = {},
  sc;
function pg() {
  if (sc) return An;
  ((sc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.productFetchApi = void 0));
  const e = rv(),
    t = async (i) => {
      const o = {};
      for (const [u, s] of i.entries())
        if (u === "file") {
          const c = s.name,
            l = s.type;
          ((o.file = await (0, e.blobToBase64)(s)), (o.__fileName = c), (o.__fileType = l));
        } else o[u] = s;
      return JSON.stringify(o);
    },
    r = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: o, ...u } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return i;
    },
    n = async (i) => {
      const o = i?.body instanceof FormData,
        u = o ? await t(i?.body) : i?.body,
        s = new Request("", { body: u, method: i?.method, headers: i?.headers }),
        c = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(c),
        isMultipartFormData: o,
      };
    },
    a = (i) => {
      const o = async (u, s, c) => {
        const l = r(c),
          { body: d, headers: f, isMultipartFormData: p } = await n(l);
        f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
        const h = {
            product: u,
            restPath: s,
            fetchRequestInit: { ...l, body: d, headers: [...f.entries()] },
            isMultipartFormData: p,
          },
          {
            body: v,
            headers: g,
            statusText: b,
            status: m,
            isAttachment: w,
          } = await i("fetchProduct", h),
          O = w ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
        return new Response(O || null, { headers: g, status: m, statusText: b });
      };
      return {
        requestConfluence: (u, s) => o("confluence", u, s),
        requestJira: (u, s) => o("jira", u, s),
        requestBitbucket: (u, s) => o("bitbucket", u, s),
      };
    };
  return ((An.productFetchApi = a), An);
}
var uc;
function hg() {
  if (uc) return It;
  uc = 1;
  var e;
  (Object.defineProperty(It, "__esModule", { value: !0 }),
    (It.requestBitbucket = It.requestJira = It.requestConfluence = void 0));
  const t = _e();
  return (
    (e = (0, pg().productFetchApi)((0, t.getCallBridge)())),
    (It.requestConfluence = e.requestConfluence),
    (It.requestJira = e.requestJira),
    (It.requestBitbucket = e.requestBitbucket),
    It
  );
}
var ko = {},
  jn = {},
  cc;
function gg() {
  if (cc) return jn;
  ((cc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.showFlag = void 0));
  const e = _e(),
    t = ze(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var i;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...a, type: (i = a.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await o, r("closeFlag", { id: a.id })) };
    };
  return ((jn.showFlag = n), jn);
}
var lc;
function bg() {
  return (
    lc ||
      ((lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = gg();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(ko)),
    ko
  );
}
var So = {},
  dc;
function _g() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), $t.__exportStar(nv(), e));
      })(So)),
    So
  );
}
var Eo = {},
  In = {},
  fc;
function yg() {
  if (fc) return In;
  ((fc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.realtime = void 0));
  const t = (0, _e().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    a = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    i = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((In.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: i }), In);
}
var xo = {},
  vc;
function mg() {
  return (
    vc ||
      ((vc = 1),
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
      })(xo)),
    xo
  );
}
var pc;
function wg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = yg();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = mg();
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
      })(Eo)),
    Eo
  );
}
var Dt = {},
  hc;
function Og() {
  if (hc) return Dt;
  ((hc = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.createTranslationFunction = Dt.getTranslations = Dt.resetTranslationsCache = void 0));
  const e = tv(),
    t = iv(),
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
    a = () => {
      n.reset();
    };
  Dt.resetTranslationsCache = a;
  const i = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Dt.getTranslations = i;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
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
var Co = {},
  Dn = {},
  or = {},
  xr = {},
  Ga = {},
  gc;
function kg() {
  if (gc) return Ga;
  ((gc = 1), Object.defineProperty(Ga, "__esModule", { value: !0 }));
  const e = Qt();
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
      const u = e.StableID.get(this._sdkKey);
      if (
        ((i = n.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
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
      return (this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n);
    }
    _getDetails(n) {
      var a, i;
      const o = this.getCurrentSourceDetails();
      let u = o.reason;
      const s = (a = o.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && s.length > 0 && (u = u + s[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: u }));
    }
  }
  return ((Ga.default = t), Ga);
}
var Cr = {},
  Tn = {},
  bc;
function Sg() {
  if (bc) return Tn;
  ((bc = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn._resolveDeltasResponse = void 0));
  const e = Qt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = a(c),
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
  Tn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function a(o) {
    const u = o;
    return (
      i(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      i(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      i(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function i(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Tn;
}
var _c;
function ov() {
  if (_c) return Cr;
  _c = 1;
  var e =
    (Cr && Cr.__awaiter) ||
    function (a, i, o, u) {
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
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Sg();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const u = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
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
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, u);
      });
    }
    _fetchEvaluations(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: i,
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
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Cr.default = n), Cr);
}
var Mn = {},
  yc;
function Eg() {
  if (yc) return Mn;
  ((yc = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn._makeParamStoreGetter = void 0));
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
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
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
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Mn._makeParamStoreGetter = c), Mn);
}
var sr = {},
  mc;
function xg() {
  if (mc) return sr;
  mc = 1;
  var e =
    (sr && sr.__awaiter) ||
    function (a, i, o, u) {
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
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0));
  const t = Qt(),
    r = ov();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, o, u) {
      (super.attach(i, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(i, o, u) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), i, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var wc;
function Cg() {
  if (wc) return xr;
  wc = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (p) {
              p(f);
            });
      }
      return new (c || (c = Promise))(function (f, p) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            p(m);
          }
        }
        function v(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            p(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Qt(),
    r = kg(),
    n = ov(),
    a = Eg(),
    i = xg();
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
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        p,
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
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
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
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
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
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (f && t.StableID.setOverride(f, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
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
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
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
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
      var l, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(s, c) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
  }
  return ((xr.default = o), xr);
}
var Oc;
function Rg() {
  return (
    Oc ||
      ((Oc = 1),
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
        const n = Qt(),
          a = Cg();
        ((e.StatsigClient = a.default), r(Qt(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(or)),
    or
  );
}
var Fn = {},
  Ln = {},
  kc;
function Pg() {
  if (kc) return Ln;
  ((kc = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.initFeatureFlags = void 0));
  const e = _e(),
    t = ze(),
    r = Ti(),
    n = 500,
    a = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    o = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (s) => (o(s), i("initFeatureFlags", { user: s.user }));
  return (
    (Ln.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    Ln
  );
}
var Sc;
function Ag() {
  if (Sc) return Fn;
  ((Sc = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn.ForgeDataAdapter = void 0));
  const e = Pg();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, a, i) {
      var o;
      if (n) return n;
      this.environment = ((o = this.options) === null || o === void 0 ? void 0 : o.environment) || {
        tier: "development",
      };
      const u = { ...a, statsigEnvironment: this.environment },
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
    async attach(n, a, i) {
      this.options = a;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Fn.ForgeDataAdapter = t), Fn);
}
var Ro = {},
  Ec;
function sv() {
  return (
    Ec ||
      ((Ec = 1),
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
      })(Ro)),
    Ro
  );
}
var Nn = {},
  xc;
function jg() {
  if (xc) return Nn;
  ((xc = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.trackFeatureFlagEvent = void 0));
  const e = _e(),
    t = ze(),
    r = sv(),
    n = Ti(),
    a = 500,
    i = 1e3 * 25,
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
    (Nn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      i,
      `Feature flags calls are rate limited at ${a}req/${i / 1e3}s`,
    )),
    Nn
  );
}
var Cc;
function Ig() {
  if (Cc) return Dn;
  ((Cc = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.ForgeFeatureFlags = void 0));
  const e = Rg(),
    t = Ag(),
    r = sv(),
    n = jg();
  class a {
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
  return ((Dn.ForgeFeatureFlags = a), Dn);
}
var Rc;
function Dg() {
  return (
    Rc ||
      ((Rc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = Ig();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Co)),
    Co
  );
}
var Pc;
function Tg() {
  return (
    Pc ||
      ((Pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = $t;
        var r = $h();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Gh(), e),
          t.__exportStar(Kh(), e),
          t.__exportStar(iv(), e),
          t.__exportStar(dg(), e),
          t.__exportStar(vg(), e),
          t.__exportStar(hg(), e),
          t.__exportStar(bg(), e),
          t.__exportStar(_g(), e),
          t.__exportStar(wg(), e),
          (e.i18n = t.__importStar(Og())),
          t.__exportStar(Dg(), e));
      })(co)),
    co
  );
}
var Nt = Tg();
function fe(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function je(e) {
  "@babel/helpers - typeof";
  return (
    (je =
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
    je(e)
  );
}
function Mg(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function uv(e) {
  var t = Mg(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function Ac(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, uv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && Ac(e.prototype, t),
    r && Ac(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Fg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Fg(e);
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
function ya(e, t) {
  return (
    (ya = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ya(e, t)
  );
}
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ya(e, t));
}
function E(e, t, r) {
  return (
    (t = uv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function Lg(e) {
  if (Array.isArray(e)) return e;
}
function Ng(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (l) {
      ((c = !0), (a = l));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function ds(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cv(e, t) {
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
function zg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Lg(e) || Ng(e, t) || cv(e, t) || zg();
}
var lv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Bg = function (t) {
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
  hi = function (t, r) {
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
  Ug = function (t, r, n) {
    return t ? { width: r } : {};
  },
  jc = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  qg = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = t.destination,
      o = t.sourceIndex;
    if (!i) return r;
    var u = jc(o, n, a),
      s = jc(i.index, n, a),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      f = d[0];
    return (c.splice(s, 0, f), c);
  };
const $g = "modulepreload",
  Vg = function (e, t) {
    return new URL(e, t).href;
  },
  Ic = {},
  Gg = function (t, r, n) {
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
        u = document.querySelector("meta[property=csp-nonce]"),
        s = u?.nonce || u?.getAttribute("nonce");
      a = c(
        r.map((l) => {
          if (((l = Vg(l, n)), l in Ic)) return;
          Ic[l] = !0;
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
            ((p.rel = d ? "stylesheet" : $g),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = l),
            s && p.setAttribute("nonce", s),
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
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = o), window.dispatchEvent(u), !u.defaultPrevented)) throw o;
    }
    return a.then((o) => {
      for (const u of o || []) u.status === "rejected" && i(u.reason);
      return t().catch(i);
    });
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
function Hg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ae(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = Hg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Dc(e, t) {
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
function Po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Wg = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = Po({}, r.payload);
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
          je(r) === "object" && (this.payload = Po(Po({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function Kg(e) {
  if (Array.isArray(e)) return ds(e);
}
function Yg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Jg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return Kg(e) || Yg(e) || cv(e) || Jg();
}
function Xg(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function gi() {
  return (
    (gi =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Xg(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    gi.apply(null, arguments)
  );
}
function Zg(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, dv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function dv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dv = function () {
    return !!e;
  })();
}
function Qg(e, t, r, n) {
  var a = gi(Y(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var eb = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = Zg(this, t, [r])),
        E(n, "_isUIAnalyticsEvent", !0),
        E(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Te(n.context),
            i = Te(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: a, handlers: i, payload: o });
        }),
        E(n, "fire", function (a) {
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
      Ue(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Qg(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(Wg),
  tb = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  rb = function () {
    return _.useContext(tb);
  },
  bi = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function nb(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function ab(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    i = n.current || !!(t && a.current.inputs && nb(t, a.current.inputs)),
    o = i ? a.current : { inputs: t, result: e() };
  return (
    _.useEffect(
      function () {
        ((n.current = !1), (a.current = o));
      },
      [o],
    ),
    o.result
  );
}
function ib(e, t) {
  return ab(function () {
    return e;
  }, t);
}
function fv() {
  var e = rb(),
    t = ib(
      function (r) {
        return new eb({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Tc(e, t) {
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
function ob(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ma(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    i = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = fv(),
    c = s.createAnalyticsEvent,
    l = bi(u),
    d = bi(t),
    f = _.useCallback(
      function (p) {
        var h = c({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: i, packageVersion: o },
          }),
          v = ob({ componentName: n, packageName: i, packageVersion: o }, l.current);
        h.context.push(v);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(p, h));
      },
      [r, n, a, i, o, c, l, d],
    );
  return f;
}
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
function sb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Fc(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    i = e.packageVersion,
    o = e.analyticsData,
    u = fv(),
    s = u.createAnalyticsEvent,
    c = bi(o),
    l = bi(t),
    d = _.useCallback(
      function () {
        var f = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: i },
          }),
          p = sb({ componentName: n, packageName: a, packageVersion: i }, c.current);
        f.context.push(p);
        var h = f.clone();
        (h && h.fire("atlaskit"), l.current(f));
      },
      [r, n, a, i, s, c, l],
    );
  return d;
}
var pr = "ASC",
  _i = "DESC",
  ub = "small",
  yi = "large",
  vv = 0.22;
const cb = 5;
function C(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const i of a) {
      const o = i.startsWith("_") ? i.slice(0, cb) : i;
      t[o] = i;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function pv(e, t, r) {
  return e ?? "var(--c-, )";
}
var lb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  db = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      i = e.testId,
      o = e.isLoading,
      u = ae(e, lb);
    return _.createElement(
      "table",
      te(
        {
          inert: o ? "" : void 0,
          style: {
            "--local-dynamic-table-hover-bg":
              "var(--ds-background-neutral-subtle-hovered, #091E420F)",
            "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, #E9F2FF)",
            "--local-dynamic-table-hover-highlighted-bg":
              "var(--ds-background-selected-hovered, #CCE0FF)",
            "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, #388BFF)",
          },
          ref: t,
        },
        u,
        {
          "data-testid": i && "".concat(i, "--table"),
          className: C([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r187z",
          ]),
        },
      ),
      a,
    );
  }),
  fb = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: C(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  vb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: C(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  pb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: C(["_4t3i1jdh"]),
      },
      r,
    );
  },
  hb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
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
  gb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function Nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, hv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function hv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hv = function () {
    return !!e;
  })();
}
var zc = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var i;
      if (r.cells[a] && ((i = r.cells[a]) === null || i === void 0 ? void 0 : i.key) === n) {
        var o;
        return (o = t[a]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  _b = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var i = a === pr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = zc(s.cells, t, n),
        d = zc(c.cells, t, n);
      if (l === void 0 || d === void 0) return i;
      if (je(l) !== je(d)) {
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
function yb(e) {
  var t = (function (r) {
    function n() {
      var a;
      fe(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      return ((a = bb(this, n, [].concat(o))), E(a, "state", { pageRows: [] }), a);
    }
    return (
      Ue(n, r),
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
              var u = i.forwardedRef,
                s = ae(i, gb);
              return k.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var u = i.rows,
                s = i.head,
                c = i.sortKey,
                l = i.sortOrder,
                d = i.page,
                f = i.rowsPerPage,
                p = i.isTotalPagesControlledExternally;
              hi(c, s);
              var h, v;
              return (
                p ? ((h = u), (v = u)) : ((h = _b(s, u, c, l) || []), (v = lv(h, d, f))),
                Nc(Nc({}, o), {}, { pageRows: v })
              );
            },
          },
        ],
      )
    );
  })(k.Component);
  return k.forwardRef(function (r, n) {
    return k.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var mb = "--local-dynamic-table-width",
  gv = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, mb, "".concat(r, "%")) : void 0;
  },
  wb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Ob = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      i = t.innerRef,
      o = ae(t, wb);
    return _.createElement(
      "td",
      te(
        {
          style: gv({ width: r }),
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
  kb = ["isHighlighted", "children", "style", "testId", "className"],
  Sb = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      i = e.testId,
      o = e.className,
      u = ae(e, kb);
    return _.createElement(
      "tr",
      te(
        {
          style: a,
          className: C([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        u,
        { ref: t, "data-testid": i },
      ),
      n,
    );
  }),
  Eb = ["cells"],
  xb = ["content", "testId"],
  Cb = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      i = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ae(r, Eb);
    return k.createElement(
      Sb,
      te(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          f = c.testId,
          p = ae(c, xb),
          h = (n || { cells: [] }).cells[l] || {},
          v = h.shouldTruncate,
          g = h.width;
        return k.createElement(
          Ob,
          te({ "data-testid": f || (a && "".concat(a, "--cell-").concat(l)) }, p, {
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
function Rb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, bv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bv = function () {
    return !!e;
  })();
}
var Pb = (function (e) {
    function t() {
      return (fe(this, t), Rb(this, t, arguments));
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              i = n.head,
              o = n.isFixedSize,
              u = n.highlightedRowIndex,
              s = n.testId,
              c = n.forwardedRef;
            return k.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              a.map(function (l, d) {
                return k.createElement(Cb, {
                  head: i,
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
  })(k.Component),
  Ab = yb(
    k.forwardRef(function (e, t) {
      return k.createElement(Pb, te({}, e, { forwardedRef: t }));
    }),
  );
function jb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, _v() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function _v() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_v = function () {
    return !!e;
  })();
}
var Ib = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = jb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ue(t, e),
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
})(k.Component);
const Vs = _.createContext(null);
var Bc = "#FF5630",
  Uc = "#DE350B",
  Rr = "#BF2600",
  qc = "#FFC400",
  $c = "#FFAB00",
  Pr = "#FF991F",
  Db = "#DEEBFF",
  Ha = "#B3D4FF",
  Vc = "#4C9AFF",
  Gc = "#2684FF",
  Hc = "#0065FF",
  Ar = "#0052CC",
  Wc = "#0747A6",
  Jt = "#FFFFFF",
  Ce = "#F4F5F7",
  ur = "#A5ADBA",
  Tb = "#8993A4",
  Mb = "#6B778C",
  Fb = "#505F79",
  wa = "#42526E",
  We = "#253858",
  jr = "#172B4D",
  zn = "rgba(9, 30, 66, 0.04)",
  Kc = "rgba(9, 30, 66, 0.08)",
  it = "#9FB0CC",
  Lb = "#8C9CB8",
  Ao = "#67758F",
  Bn = "#3B475C",
  Yc = "#313D52",
  Un = "#1B2638",
  Ir = "#0D1424",
  Nb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function zb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(wa, ")")
    : "var(--ds-icon-inverse, ".concat(Jt, ")");
}
var Wa = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Bb = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  yv = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        i = t.delay,
        o = i === void 0 ? 0 : i,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        f = typeof l == "number" ? l : Nb[l],
        p = "".concat(o, "ms"),
        h = zb(a),
        v = _.useContext(Vs);
      return (
        Bb(
          function () {
            if (v != null) return v.hold(u);
          },
          [v, u],
        ),
        k.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: f, height: f },
            className: C([Wa.wrapperStyles, Wa.rotateStyles]),
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
              "aria-label": s || void 0,
              style: { animationDelay: p },
              role: s ? "img" : "none",
              className: C([Wa.loadInStyles]),
            },
            k.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: C([Wa.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Jc(e, t) {
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
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jc(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zc = "--contents-opacity",
  Ub = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: C(["_kqswh2mm"]) },
      r,
    );
  },
  qb = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: C(["_tzy47hfw _lcxvglyw"]),
        style: Xc(Xc({}, E({}, Zc, n)), {}, { "--_cnddr8": pv("var(".concat(Zc, ")")) }),
      },
      r,
    );
  },
  $b = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Vb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, mv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mv = function () {
    return !!e;
  })();
}
var wv = (function (e) {
  function t() {
    return (fe(this, t), Vb(this, t, arguments));
  }
  return (
    Ue(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            i = n.isLoading,
            o = n.spinnerSize,
            u = n.contentsOpacity,
            s = n.testId,
            c = n.loadingLabel;
          return k.createElement(
            Ub,
            { testId: s },
            i ? k.createElement(qb, { contentsOpacity: u, testId: s }, a) : a,
            i &&
              k.createElement(
                $b,
                { testId: s },
                k.createElement(yv, {
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
})(k.Component);
E(wv, "defaultProps", {
  isLoading: !0,
  spinnerSize: yi,
  contentsOpacity: vv,
  loadingLabel: "Loading table",
});
var Gb = ["children", "testId"],
  Hb = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ae(e, Gb);
    return _.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: C(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Wb = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: C(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Kb = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: C(["_kqswh2mm _152tidpf"]) }, r);
  });
function Yb(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Ov() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ov = function () {
    return !!e;
  })();
}
var kv = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = Yb(this, t, [].concat(a))),
      E(r, "spinnerRef", k.createRef()),
      E(r, "containerRef", k.createRef()),
      E(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      E(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      E(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      E(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      E(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      E(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      E(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      E(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      E(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      E(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          u = r.props,
          s = u.isLoading,
          c = u.contentsOpacity;
        o &&
          o.style &&
          je(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    Ue(t, e),
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
            a,
            i = window.innerHeight,
            o = this.getTargetNode(),
            u = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !u)) {
            var s = o.getBoundingClientRect(),
              c = u.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(s, i),
              f = s.top,
              p = s.bottom,
              h = s.height;
            if (d) {
              var v = h >= l * 3;
              if (v && !this.isFullyVerticallyVisible(s, i)) {
                if (f >= 0) {
                  var g = i - f,
                    b = g / 2 + f - l / 2,
                    m = g < l * 3 ? f + l : b;
                  this.translateSpinner(u, m, !0);
                } else if (f < 0 && p > i) {
                  var w = i / 2 - l / 2;
                  this.translateSpinner(u, w, !0);
                } else {
                  var O = p / 2 - l / 2,
                    y = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, y, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, i)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                j = (f - x) / 2;
              this.translateSpinner(u, j, !1);
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
            u = n.testId,
            s = n.loadingLabel;
          return k.createElement(
            Hb,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            a,
            i &&
              k.createElement(
                Wb,
                { testId: u },
                k.createElement(
                  Kb,
                  { ref: this.spinnerRef },
                  k.createElement(yv, {
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
})(k.Component);
E(kv, "defaultProps", {
  isLoading: !0,
  spinnerSize: yi,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(vv), ")"),
  loadingLabel: "Loading table",
});
function Jb(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = _.useState(t),
    a = K(n, 2),
    i = a[0],
    o = a[1],
    u = _.useRef(r);
  _.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : i,
    c = _.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var qn = {},
  $n = {};
function Qc(e, t, r, n, a, i, o) {
  try {
    var u = e[i](o),
      s = u.value;
  } catch (c) {
    return void r(c);
  }
  u.done ? t(s) : Promise.resolve(s).then(n, a);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var i = e.apply(t, r);
      function o(s) {
        Qc(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Qc(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var jo = { exports: {} },
  Io = { exports: {} },
  el;
function Sv() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Io)),
    Io.exports
  );
}
var Do = { exports: {} },
  To = { exports: {} },
  tl;
function Ev() {
  return (
    tl ||
      ((tl = 1),
      (function (e) {
        function t(r, n, a, i) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (s, c, l, d) {
              function f(p, h) {
                t(s, p, function (v) {
                  return this._invoke(p, h, v);
                });
              }
              c
                ? o
                  ? o(s, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[c] = l)
                : (f("next", 0), f("throw", 1), f("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, i));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(To)),
    To.exports
  );
}
var rl;
function xv() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        var t = Ev();
        function r() {
          var n,
            a,
            i = typeof Symbol == "function" ? Symbol : {},
            o = i.iterator || "@@iterator",
            u = i.toStringTag || "@@toStringTag";
          function s(g, b, m, w) {
            var O = b && b.prototype instanceof l ? b : l,
              y = Object.create(O.prototype);
            return (
              t(
                y,
                "_invoke",
                (function (S, x, j) {
                  var D,
                    R,
                    T,
                    U = 0,
                    B = j || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((D = X), (R = 0), (T = n), (J.n = N), c);
                      },
                    };
                  function G($, X) {
                    for (R = $, T = X, a = 0; !V && U && !N && a < B.length; a++) {
                      var N,
                        A = B[a],
                        be = J.p,
                        oe = A[2];
                      $ > 3
                        ? (N = oe === X) &&
                          ((T = A[(R = A[4]) ? 5 : ((R = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          ((N = $ < 2 && be < A[1])
                            ? ((R = 0), (J.v = X), (J.n = A[1]))
                            : be < oe &&
                              (N = $ < 3 || A[0] > X || X > oe) &&
                              ((A[4] = $), (A[5] = X), (J.n = oe), (R = 0)));
                    }
                    if (N || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, N) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), R = X, T = N; (a = R < 2 ? n : T) || !V; ) {
                      D || (R ? (R < 3 ? (R > 1 && (J.n = -1), G(R, T)) : (J.n = T)) : (J.v = T));
                      try {
                        if (((U = 2), D)) {
                          if ((R || ($ = "next"), (a = D[$]))) {
                            if (!(a = a.call(D, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), R < 2 && (R = 0));
                          } else
                            (R === 1 && (a = D.return) && a.call(D),
                              R < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (R = 1)));
                          D = n;
                        } else if ((a = (V = J.n < 0) ? T : S.call(x, J)) !== c) break;
                      } catch (A) {
                        ((D = n), (R = 1), (T = A));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: V };
                  };
                })(g, m, w),
                !0,
              ),
              y
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
                : ((g.__proto__ = f), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = f),
            t(h, "constructor", f),
            t(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(f, u, "GeneratorFunction"),
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
                return { w: s, m: v };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Do)),
    Do.exports
  );
}
var Mo = { exports: {} },
  Fo = { exports: {} },
  Lo = { exports: {} },
  nl;
function Cv() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        var t = Sv(),
          r = Ev();
        function n(a, i) {
          function o(s, c, l, d) {
            try {
              var f = a[s](c),
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
                  return new i(function (f, p) {
                    o(s, l, f, p);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Lo)),
    Lo.exports
  );
}
var al;
function Rv() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        var t = xv(),
          r = Cv();
        function n(a, i, o, u, s) {
          return new r(t().w(a, i, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Fo)),
    Fo.exports
  );
}
var il;
function Xb() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        var t = Rv();
        function r(n, a, i, o, u) {
          var s = t(n, a, i, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Mo)),
    Mo.exports
  );
}
var No = { exports: {} },
  ol;
function Zb() {
  return (
    ol ||
      ((ol = 1),
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
      })(No)),
    No.exports
  );
}
var zo = { exports: {} },
  Bo = { exports: {} },
  sl;
function Qb() {
  return (
    sl ||
      ((sl = 1),
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
      })(Bo)),
    Bo.exports
  );
}
var ul;
function e_() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        var t = Qb().default;
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
      })(zo)),
    zo.exports
  );
}
var cl;
function t_() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        var t = Sv(),
          r = xv(),
          n = Xb(),
          a = Rv(),
          i = Cv(),
          o = Zb(),
          u = e_();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function f(v) {
            var g = typeof v == "function" && v.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(v) {
            var g, b;
            return function (m) {
              (g ||
                ((g = {
                  stop: function () {
                    return b(m.a, 2);
                  },
                  catch: function () {
                    return m.v;
                  },
                  abrupt: function (O, y) {
                    return b(m.a, p[O], y);
                  },
                  delegateYield: function (O, y, S) {
                    return ((g.resultName = y), b(m.d, u(O), S));
                  },
                  finish: function (O) {
                    return b(m.f, O);
                  },
                }),
                (b = function (O, y, S) {
                  ((m.p = g.prev), (m.n = g.next));
                  try {
                    return O(y, S);
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
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, m, w, O) {
                  return c.w(h(b), m, w, O && O.reverse());
                },
                isGeneratorFunction: f,
                mark: c.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: i,
                async: function (b, m, w, O, y) {
                  return (f(m) ? a : n)(h(b), m, w, O, y);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(jo)),
    jo.exports
  );
}
var Uo, ll;
function r_() {
  if (ll) return Uo;
  ll = 1;
  var e = t_()();
  Uo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Uo;
}
var n_ = r_();
const z = tr(n_);
var cr = {},
  Dr = {},
  Ka = {},
  Vn = {},
  dl;
function a_() {
  if (dl) return Vn;
  ((dl = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn.V1InitializeContainer = void 0));
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
    _getResultFromLookup(n, a) {
      var i, o;
      return n &&
        (o = (i = n[a]) !== null && i !== void 0 ? i : n[(0, e._DJB2)(a)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Vn.V1InitializeContainer = t), Vn);
}
var Gn = {},
  fl;
function i_() {
  if (fl) return Gn;
  ((fl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn.V2InitializeContainer = void 0));
  const e = St();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var a, i, o;
      const u = this._getResultFromLookup(this._values.feature_gates, n);
      return u
        ? {
            name: n,
            value: u.v === !0,
            rule_id: (a = u.r) !== null && a !== void 0 ? a : "default",
            secondary_exposures: (i = u.s) !== null && i !== void 0 ? i : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var a, i, o, u;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (a = this._values.values[s.v]) !== null && a !== void 0 ? a : {},
            rule_id: s.r,
            secondary_exposures: (i = s.s) !== null && i !== void 0 ? i : [],
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
      var a, i, o, u, s, c;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (a = this._values.values[l.v]) !== null && a !== void 0 ? a : {},
            rule_id: l.r,
            secondary_exposures: (i = l.s) !== null && i !== void 0 ? i : [],
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
    _getResultFromLookup(n, a) {
      var i, o;
      return n &&
        (o = (i = n[a]) !== null && i !== void 0 ? i : n[(0, e._DJB2)(a)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Gn.V2InitializeContainer = t), Gn);
}
var vl;
function o_() {
  if (vl) return Ka;
  ((vl = 1), Object.defineProperty(Ka, "__esModule", { value: !0 }));
  const e = St(),
    t = a_(),
    r = i_();
  let n = class {
    constructor(i) {
      ((this._sdkKey = i),
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
    setValues(i, o) {
      var u, s;
      if (!i) return !1;
      const c = (0, e._typedJsonParse)(i.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = i.source),
          c?.has_updates !== !0 ||
            ((u = c.time) !== null && u !== void 0 ? u : 0) < this._lcut ||
            ((this._rawValues = i.data),
            (this._lcut = c.time),
            (this._receivedAt = i.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(i.source, c)),
            i.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (s = c.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(i) {
      const o = this._values ? this._values.getGate(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfig(i) {
      const o = this._values ? this._values.getConfig(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(i) {
      const o = this._values ? this._values.getLayer(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getParamStore(i) {
      const o = this._values ? this._values.getParamStore(i) : null;
      return this._getDetailedStoreResult(o);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var i;
      return (i = this._values) === null || i === void 0 ? void 0 : i.getExposureMapping();
    }
    _extractBootstrapMetadata(i, o) {
      if (i !== "Bootstrap") return null;
      const u = {};
      return (
        o.user && (u.user = o.user),
        o.sdkInfo && (u.generatorSDKInfo = o.sdkInfo),
        (u.lcut = o.time),
        u
      );
    }
    _getDetailedStoreResult(i) {
      return { result: i, details: this._getDetails(i == null) };
    }
    _setWarningState(i, o) {
      var u, s;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((u = i.customIDs) === null || u === void 0 ? void 0 : u.stableID) !== c &&
        ((!((s = i.customIDs) === null || s === void 0) && s.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const l = o.user,
          d = Object.assign(Object.assign({}, i), {
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
      const i = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (i.warnings = Array.from(this._warnings)), i);
    }
    _getDetails(i) {
      var o, u;
      const s = this.getCurrentSourceDetails();
      let c = s.reason;
      const l = (o = s.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${i ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (u = this._bootstrapMetadata) !== null && u !== void 0
          ? u
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: c }));
    }
  };
  return ((Ka.default = n), Ka);
}
var Tr = {},
  Hn = {},
  pl;
function s_() {
  if (pl) return Hn;
  ((pl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._resolveDeltasResponse = void 0));
  const e = St(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = a(c),
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
  Hn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function a(o) {
    const u = o;
    return (
      i(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      i(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      i(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function i(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Hn;
}
var hl;
function Pv() {
  if (hl) return Tr;
  hl = 1;
  var e =
    (Tr && Tr.__awaiter) ||
    function (a, i, o, u) {
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
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = St(),
    r = s_();
  class n extends t.NetworkCore {
    constructor(i, o) {
      super(i, o);
      const u = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, f, p, h, v;
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
          b = Object.assign(Object.assign({}, b), {
            sinceTime: c && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, b, u);
      });
    }
    _fetchEvaluations(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: i,
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
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              i,
              o,
              Object.assign(Object.assign(Object.assign({}, u), f), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Tr.default = n), Tr);
}
var Wn = {},
  gl;
function u_() {
  if (gl) return Wn;
  ((gl = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._makeParamStoreGetter = void 0));
  const e = St(),
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
  function u(l, d, f, p) {
    const v = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(v, f) ? f : v;
  }
  function s(l, d, f, p) {
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
          return u(l, v, h, f);
        case "layer":
          return s(l, v, h, f);
        default:
          return h;
      }
    };
  }
  return ((Wn._makeParamStoreGetter = c), Wn);
}
var lr = {},
  bl;
function c_() {
  if (bl) return lr;
  bl = 1;
  var e =
    (lr && lr.__awaiter) ||
    function (a, i, o, u) {
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
            p(u.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(u.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? c(h.value) : s(h.value).then(d, f);
        }
        p((u = u.apply(a, i || [])).next());
      });
    };
  (Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.StatsigEvaluationsDataAdapter = void 0));
  const t = St(),
    r = Pv();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, o, u) {
      (super.attach(i, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(i, o, u) {
      return this._getDataAsyncImpl(i, (0, t._normalizeUser)(o, this._options), u);
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
    _fetchFromNetwork(i, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), i, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(i) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        i,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(i, o) {
      return i.fullUserHash != null && i.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((lr.StatsigEvaluationsDataAdapter = n), lr);
}
var _l;
function l_() {
  if (_l) return Dr;
  _l = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (u, s, c, l) {
      function d(f) {
        return f instanceof c
          ? f
          : new c(function (p) {
              p(f);
            });
      }
      return new (c || (c = Promise))(function (f, p) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            p(m);
          }
        }
        function v(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            p(m);
          }
        }
        function g(b) {
          b.done ? f(b.value) : d(b.value).then(h, v);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = St(),
    r = o_(),
    n = Pv(),
    a = u_(),
    i = c_();
  let o = class fs extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof fs
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new fs(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, f;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (v) => {
        this.$emt(v);
      });
      (super(
        s,
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
        (this._store = new r.default(s)),
        (this._network = p),
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const h = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const v of h) v.bind(this);
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
        const f = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(f, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const f = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const f = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(f, l);
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
      var l, d, f;
      const p = (0, t._normalizeUser)(s, c),
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
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, p, f),
        v =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = v ?? h;
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
      const { result: f, details: p } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, p, f),
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
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
      var l, d, f, p;
      const { result: h, details: v } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, v, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (p =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(f, g, this._user, c),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
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
    _getLayerImpl(s, c) {
      var l, d, f;
      const { result: p, details: h } = this._store.getLayer(s),
        v = (0, t._makeLayer)(s, h, p),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, v, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        v,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : v.__value,
        (m) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: f, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const h = {
          name: s,
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
  return ((Dr.default = o), Dr);
}
var yl;
function d_() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        var t =
            (cr && cr.__createBinding) ||
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
            (cr && cr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = St(),
          a = l_();
        ((e.StatsigClient = a.default), r(St(), e));
        const i = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = i;
      })(cr)),
    cr
  );
}
var ot = d_(),
  qo = { exports: {} },
  ml;
function f_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, c, l) {
          ((this.fn = s), (this.context = c), (this.once = l || !1));
        }
        function i(s, c, l, d, f) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new a(l, d || s, f),
            h = r ? r + c : c;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], p])
                : s._events[h].push(p)
              : ((s._events[h] = p), s._eventsCount++),
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
            for (var f = 0, p = d.length, h = new Array(p); f < p; f++) h[f] = d[f].fn;
            return h;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, f, p, h) {
            var v = r ? r + c : c;
            if (!this._events[v]) return !1;
            var g = this._events[v],
              b = arguments.length,
              m,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), b)) {
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
              for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
              g.fn.apply(g.context, m);
            } else {
              var O = g.length,
                y;
              for (w = 0; w < O; w++)
                switch ((g[w].once && this.removeListener(c, g[w].fn, void 0, !0), b)) {
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
                    if (!m) for (y = 1, m = new Array(b - 1); y < b; y++) m[y - 1] = arguments[y];
                    g[w].fn.apply(g[w].context, m);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, l, d) {
            return i(this, c, l, d, !1);
          }),
          (u.prototype.once = function (c, l, d) {
            return i(this, c, l, d, !0);
          }),
          (u.prototype.removeListener = function (c, l, d, f) {
            var p = r ? r + c : c;
            if (!this._events[p]) return this;
            if (!l) return (o(this, p), this);
            var h = this._events[p];
            if (h.fn) h.fn === l && (!f || h.once) && (!d || h.context === d) && o(this, p);
            else {
              for (var v = 0, g = [], b = h.length; v < b; v++)
                (h[v].fn !== l || (f && !h[v].once) || (d && h[v].context !== d)) && g.push(h[v]);
              g.length ? (this._events[p] = g.length === 1 ? g[0] : g) : o(this, p);
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
      })(qo)),
    qo.exports
  );
}
var v_ = f_();
const p_ = tr(v_);
function wl(e, t) {
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
      ? wl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ya = "@all-features",
  h_ = (function () {
    function e() {
      (fe(this, e), E(this, "eventToValue", new Map()), (this.emitter = new p_()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, i) {
          var o = this,
            u = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = a(r, Kt(Kt({}, i), {}, { fireGateExposure: !1 })),
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
        value: function (r, n, a, i, o, u) {
          var s = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, a, Kt(Kt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(i) === void 0 && this.eventToValue.set(i, l);
          var d = function () {
            var p = o(r, n, a, Kt(Kt({}, u), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(i);
            h !== p && (s.eventToValue.set(i, p), i(p));
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
            this.emitter.on(Ya, r),
            function () {
              n.emitter.off(Ya, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Ya),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Ya;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  g_ = "fedramp-moderate";
function b_() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === g_;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Gs = (function (e) {
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
  ua = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Oa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  __ = [
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
function Ol(e, t) {
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
      ? Ol(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ja = function (t) {
    return vs({ perimeter: b_() ? Oa.FEDRAMP_MODERATE : Oa.COMMERCIAL }, t);
  },
  Kn = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var i = function (f, p) {
      var h = K(f, 1),
        v = h[0],
        g = K(p, 1),
        b = g[0];
      return v.localeCompare(b);
    };
    (n.sort(i), a.sort(i));
    for (var o = 0; o < n.length; o++) {
      var u = K(n[o], 2),
        s = u[1],
        c = K(a[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  kl = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  y_ = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      i = t.loggingBufferMaxSize,
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
    var f = ae(t, __);
    return vs(
      vs({}, f),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: u ? u + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
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
  m_ = Object.entries(Gs).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Av = function (t) {
    var r,
      n,
      a,
      i = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = m_.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return i.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Gs.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  ps = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Sl = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = i),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = u));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var i,
              o = this.getValue(r, n);
            if (o == null) return n;
            var u = Array.isArray(n) ? "array" : je(n),
              s = Array.isArray(o) ? "array" : je(o);
            if (a) {
              var c;
              return a(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, u, s),
                  n);
            }
            return n == null || u === s
              ? (this.fireExposure(r), o)
              : ((i = this._onDefaultValueFallback) === null ||
                  i === void 0 ||
                  i.call(this, this, r, u, s),
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
                Av(r.details),
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
  El = (function () {
    function e(t, r, n, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = i),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
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
          value: function (r, n, a) {
            var i = this,
              o = this._value[r];
            if (o == null) return n;
            var u = function () {
              return (i._logLayerParameterExposure(r), o);
            };
            return a
              ? a(o)
                ? u()
                : n
              : n == null || (je(o) === je(n) && Array.isArray(n) === Array.isArray(o))
                ? u()
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
              u,
              s,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                Av(r.details),
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
  Vr = "0.0.0-development";
function w_(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function jv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jv = function () {
    return !!e;
  })();
}
function O_(e, t, r) {
  if (jv()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && ya(a, r.prototype), a);
}
function hs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (hs = function (n) {
      if (n === null || !w_(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return O_(n, arguments, Y(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        ya(a, n)
      );
    }),
    hs(e)
  );
}
function k_(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Iv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Iv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Iv = function () {
    return !!e;
  })();
}
var xl = (function (e) {
  function t(r) {
    return (fe(this, t), k_(this, t, [r]));
  }
  return (Ue(t, e), ve(t));
})(hs(Error));
function Cl(e, t) {
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
function S_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var E_ = 5e3,
  x_ = "https://api.atlassian.com/flags",
  C_ = "https://api.stg.atlassian.com/flags",
  R_ = "https://api.dev.atlassian.com/flags",
  P_ = "https://api.stg.atlassian-us-gov-mod.com/flags",
  A_ = "https://api.atlassian-us-gov-mod.com/flags",
  j_ = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  I_ = "oasis-stg.com/flags",
  D_ = "atlassian-isolated.net/flags",
  T_ = "/gateway/api/flags",
  $o = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            z.mark(function n(a) {
              var i, o;
              return z.wrap(
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
          var t = de(
            z.mark(function n(a, i, o) {
              var u;
              return z.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (u = { identifiers: i, customAttributes: o, targetApp: a.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, u)
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
          var t = de(
            z.mark(function n(a) {
              var i;
              return z.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (a.ok) {
                        u.next = 5;
                        break;
                      }
                      return ((u.next = 3), a.text());
                    case 3:
                      throw (
                        (i = u.sent),
                        new xl(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(i)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        u.next = 7;
                        break;
                      }
                      throw new xl("Unexpected 204 response");
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
            z.mark(function n(a) {
              var i;
              return z.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return ((u.next = 2), a.text());
                    case 2:
                      return ((i = u.sent), u.abrupt("return", JSON.parse(i)));
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
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return T_;
          if (a === Oa.FEDRAMP_MODERATE)
            switch (r) {
              case ua.Production:
                return A_;
              case ua.Staging:
                return P_;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Oa.COMMERCIAL)
            switch (r) {
              case ua.Development:
                return R_;
              case ua.Staging:
                var o = this.getApiUrl(i);
                return o !== null ? o : C_;
              default:
                var u = this.getApiUrl(i);
                return u !== null ? u : x_;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            z.mark(function n(a, i, o, u) {
              var s, c, l, d, f;
              return z.wrap(
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
                          (c = o.fetchTimeoutMs || E_),
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
                            "".concat(s).concat(a),
                            S_(
                              {
                                method: i,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Vr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
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
          if (n === void 0) return r ? j_.replace("%s", r) : null;
          var a = n.protocol,
            i = n.hostname,
            o = i.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(a, "//api.").concat(o[1], ".").concat(I_);
          var u = i.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(a, "//api.").concat(u[1], ".").concat(D_) : null;
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
function Rl(e, t) {
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
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M_(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Dv() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Dv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dv = function () {
    return !!e;
  })();
}
function F_(e, t, r, n) {
  var a = gi(Y(e.prototype), t, r);
  return typeof a == "function"
    ? function (i) {
        return a.apply(r, i);
      }
    : a;
}
var L_ = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = M_(this, t, ["NoFetchDataAdapter", "nofetch"])),
      E(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ue(t, e),
    ve(t, [
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
          var r = de(
            z.mark(function a(i, o) {
              return z.wrap(function (s) {
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
          var r = de(
            z.mark(function a(i, o, u) {
              return z.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Yn(
                              Yn({}, this.bootstrapResult),
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
            Yn(Yn({}, this.bootstrapResult), {}, { fullUserHash: ot._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            z.mark(function a(i, o, u) {
              return z.wrap(function (c) {
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
          F_(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Yn({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ot.DataAdapterCore);
function Pl(e, t) {
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
      ? Pl(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function N_(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = z_(e)) || t) {
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
      ((u = !0), (i = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (u) throw i;
      }
    },
  };
}
function z_(e, t) {
  if (e) {
    if (typeof e == "string") return Al(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Al(e, t)
          : void 0
    );
  }
}
function Al(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Vo = "LocalOverride:Recognized",
  B_ = "STATSIG_OVERRIDES",
  jl = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Mr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ke = function (t, r) {
    return r + ":" + t;
  },
  U_ = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Mr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Mr();
          } catch {
            return Mr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Mr(), n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          for (var o = 0, u = a; o < u.length; o++) {
            for (
              var s = u[o],
                c = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              c < l.length;
              c++
            ) {
              var d,
                f = K(l[c], 2),
                p = f[0],
                h = f[1];
              r.gates[p] = h;
            }
            for (
              var v = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              v < g.length;
              v++
            ) {
              var b,
                m = K(g[v], 2),
                w = m[0],
                O = m[1];
              r.configs[w] = O;
            }
            for (
              var y = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              y < S.length;
              y++
            ) {
              var x,
                j = K(S[y], 2),
                D = j[0],
                R = j[1];
              r.layers[D] = R;
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
            this.parseStoredOverrides(jl),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(jl);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var i = a[n],
              o = new Set(Object.keys(i)),
              u = N_(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = He._DJB2(c);
                o.has(l) && delete i[l];
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
          var n = Re(Re({}, Mr()), r);
          this._djb2Map.clear();
          for (var a = 0, i = Object.entries(n); a < i.length; a++)
            for (
              var o = K(i[a], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                f = d[0],
                p = d[1];
              this._djb2Map.set(Ke(He._DJB2(f), u), p);
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
            this._djb2Map.set(Ke(He._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ke(r.name, "gates"));
          return i == null
            ? null
            : Re(Re({}, r), {}, { value: i, details: Re(Re({}, r.details), {}, { reason: Vo }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ke(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "configs")),
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
            this._djb2Map.set(Ke(He._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "configs")),
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
            this._djb2Map.set(Ke(He._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ke(He._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Mr();
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
                : this._djb2Map.get(Ke(r.name, "layers"));
          return i == null
            ? null
            : Re(
                Re({}, r),
                {},
                {
                  __value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Re(Re({}, r.details), {}, { reason: Vo }),
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
                : this._djb2Map.get(Ke(r.name, "configs"));
          return i == null
            ? null
            : Re(
                Re({}, r),
                {},
                {
                  value: i,
                  get: He._makeTypedGet(r.name, i),
                  details: Re(Re({}, r.details), {}, { reason: Vo }),
                },
              );
        },
      },
    ]);
  })(),
  q_ = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Il(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Il(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Dl = "client-default-key",
  $_ = "https://xp.atlassian.com/v1/rgstr",
  V_ = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? B_ : n,
        i = r.overrideAdapter;
      (fe(this, e),
        E(this, "initPromise", null),
        E(this, "initCompleted", !1),
        E(this, "initWithDefaults", !1),
        E(this, "hasCheckGateErrorOccurred", !1),
        E(this, "hasGetExperimentErrorOccurred", !1),
        E(this, "hasGetExperimentValueErrorOccurred", !1),
        E(this, "hasGetLayerErrorOccurred", !1),
        E(this, "hasGetLayerValueErrorOccurred", !1),
        E(this, "subscriptions", new h_()),
        E(this, "dataAdapter", new L_()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = i || new U_(a)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            z.mark(function n(a, i, o) {
              var u = this,
                s,
                c;
              return z.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Ja(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Kn(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, i, o)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var f = performance.now(),
                                p = f - c;
                              u.fireClientEvent(c, p, "initialize", u.initCompleted, s.apiKey);
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
          var t = de(
            z.mark(function n(a, i, o, u) {
              var s = this,
                c,
                l;
              return z.wrap(
                function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        if (((c = Ja(a)), !this.initPromise)) {
                          f.next = 4;
                          break;
                        }
                        return (
                          Kn(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Vr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, i, o, u)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                h = p - l;
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
            u = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Yt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Vr,
                    success: i,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
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
                u.initOptions.environment !== ua.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            z.mark(function n(a, i, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return z.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Ja(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Kn(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, i, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var h = performance.now(),
                                v = h - l;
                              u.fireClientEvent(l, v, "initializeFromValues", u.initCompleted);
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
          var t = de(
            z.mark(function n(a, i, o) {
              var u, s;
              return z.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = Ja(a)),
                          (s = function () {
                            return $o.fetchExperimentValues(u, i, o).then(function (f) {
                              var p = f.experimentValues,
                                h = f.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: h };
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
          var t = de(
            z.mark(function n(a, i) {
              var o = this;
              return z.wrap(
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
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, a, i));
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
          var t = de(
            z.mark(function n(a, i) {
              var o,
                u,
                s = arguments;
              return z.wrap(
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
                              customAttributesFromFetch: i,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, a, i)
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
        key: "waitUntilInitializeCompleted",
        value: (function () {
          var t = de(
            z.mark(function n() {
              return z.wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (this.initPromise) {
                          i.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          i.next = 4;
                          break;
                        }
                        return i.abrupt("return");
                      case 4:
                        return ((i.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return i.stop();
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
            return Sl.fromExperiment(
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
              new Sl(r, {}, "", { time: Date.now(), reason: Gs.Error })
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
            var u = i.typeGuard;
            return o.get(n, a, u);
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
          return Kn(this.currentIdentifiers, r) && Kn(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var c = i.fireGateExposure,
                l = c === void 0 ? !0 : c;
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
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = u.fireExperimentExposure,
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
            z.mark(function n(a, i, o) {
              var u, s, c, l, d, f, p, h;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Yt({}, a)),
                          (g.prev = 1),
                          (l = $o.fetchClientSdk(a).then(function (b) {
                            return (u.sdkKey = b.clientSdkKey);
                          })),
                          (d = $o.fetchExperimentValues(a, i, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((f = g.sent),
                          (p = K(f, 2)),
                          (h = p[1]),
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
                          this.initFromValues(u, i, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(u, i, c, s));
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
          var t = de(
            z.mark(function n(a, i, o, u) {
              var s, c, l, d, f, p, h, v;
              return z.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Yt(Yt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          i.setProfile(a, o, u)
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
                        ((p = b.sent),
                          (h = K(p, 2)),
                          (v = h[1]),
                          (c = v.experimentValues),
                          (l = v.customAttributesFromFetch),
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
                          this.initFromValues(s, o, u)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, o, l, c));
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
          var t = de(
            z.mark(function n(a, i, o) {
              var u,
                s,
                c,
                l,
                d,
                f,
                p,
                h = arguments;
              return z.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = i),
                          (this.currentAttributes = o),
                          (c = y_(a)),
                          c.sdkKey || (c.sdkKey = Dl),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Yt(
                              Yt({}, c.networkConfig),
                              {},
                              { logEventUrl: $_ },
                            )),
                          c.perimeter === Oa.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (f = ae(c, q_)),
                          (this.user = kl(i, o)),
                          (p = Yt(
                            Yt({}, f),
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
                          (this.statsigClient = new ot.StatsigClient(Dl, this.user, p)),
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
          var t = de(
            z.mark(function n(a, i, o) {
              var u = this,
                s,
                c,
                l;
              return z.wrap(
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
                          (s = this.initPromise),
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
                            de(
                              z.mark(function p() {
                                return z.wrap(function (v) {
                                  for (;;)
                                    switch ((v.prev = v.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          v.next = 4;
                                          break;
                                        }
                                        return (
                                          (v.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
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
          var t = de(
            z.mark(function n(a, i, o) {
              var u, s, c, l, d, f, p, h, v;
              return z.wrap(
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
                        ((c = b.sent), (l = kl(i, c.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (p = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (f = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(f, !1, p),
                          b.t0
                        );
                      case 13:
                        if (
                          ((h = !0),
                          (v = null),
                          (b.prev = 15),
                          this.dataAdapter.setBootstrapData(c.experimentValues),
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
                        ((b.prev = 23), (b.t1 = b.catch(15)), (h = !1), (v = String(b.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, h, v),
                          !h)
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
          return Vr;
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
            return El.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !i }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              El.fromLayer(ot._makeLayer(r, { reason: "Error" }, null))
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
            var u = i.typeGuard;
            return o.get(n, a, u);
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
  I,
  q = (function () {
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
I = q;
E(q, "client", new V_());
E(q, "hasCheckGateErrorOccurred", !1);
E(q, "hasGetExperimentValueErrorOccurred", !1);
E(q, "checkGate", function (e, t) {
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
E(q, "getExperimentValue", function (e, t, r, n) {
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
E(q, "initializeCalled", I.client.initializeCalled.bind(I.client));
E(q, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
E(q, "waitUntilInitializeCompleted", I.client.waitUntilInitializeCompleted.bind(I.client));
E(q, "initialize", I.client.initialize.bind(I.client));
E(q, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
E(q, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
E(q, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
E(q, "getExperiment", I.client.getExperiment.bind(I.client));
E(q, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
E(q, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
E(q, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
E(q, "overrideGate", I.client.overrideGate.bind(I.client));
E(q, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
E(q, "overrideConfig", I.client.overrideConfig.bind(I.client));
E(q, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
E(q, "setOverrides", I.client.setOverrides.bind(I.client));
E(q, "getOverrides", I.client.getOverrides.bind(I.client));
E(q, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
E(q, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
E(q, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
E(q, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
E(q, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
E(q, "updateUser", I.client.updateUser.bind(I.client));
E(q, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
E(q, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
E(q, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
E(q, "getLayer", I.client.getLayer.bind(I.client));
E(q, "getLayerValue", I.client.getLayerValue.bind(I.client));
var gs = q;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var Xa, Go;
    gs = window.__FEATUREGATES_JS__;
    var Tl =
      ((Xa = gs) === null || Xa === void 0 || (Go = Xa.getPackageVersion) === null || Go === void 0
        ? void 0
        : Go.call(Xa)) || "4.10.0 or earlier";
    if (Tl !== Vr) {
      var G_ = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Tl, " when module version ")
        .concat(Vr, " was loading.");
      console.warn(G_);
    }
  }
var Fr,
  Lr,
  H_ =
    (globalThis == null ||
    (Fr = globalThis.process) === null ||
    Fr === void 0 ||
    (Fr = Fr.env) === null ||
    Fr === void 0
      ? void 0
      : Fr.JEST_WORKER_ID) !== void 0,
  W_ =
    !H_ &&
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.NODE_ENV) !== "production",
  K_ = function () {
    var t;
    W_ && (t = console).debug.apply(t, arguments);
  },
  Hs = {},
  Y_ = "@atlaskit/platform-feature-flags",
  da = "__PLATFORM_FEATURE_FLAGS__",
  Tv = typeof process < "u" && typeof Hs < "u",
  J_ = Tv ? Hs.ENABLE_PLATFORM_FF === "true" : !1,
  X_ = Tv ? Hs.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Z_ = J_ || X_,
  Q_ = { booleanResolver: void 0 },
  fa = typeof window < "u" ? window : globalThis;
fa[da] = fa[da] || Q_;
function ey(e) {
  if (Z_)
    return (
      K_(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Y_,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = fa[da]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = fa[da]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return gs.checkGate(e);
    var a = (n = fa[da]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function zt(e) {
  return ey(e);
}
var ty = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ry = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ny = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ay = { core: 16, utility: 12 },
  iy = {
    core: {
      medium: { none: 0, compact: 4, spacious: 4 },
      small: { none: 0, compact: 2.66, spacious: 8 },
    },
    utility: {
      medium: { none: 0, compact: 2, spacious: 6 },
      small: { none: 0, compact: 2, spacious: 6 },
    },
  },
  Ml = _.memo(function (t) {
    var r,
      n = t,
      a = n.color,
      i = a === void 0 ? "currentColor" : a,
      o = n.testId,
      u = n.label,
      s = n.LEGACY_primaryColor,
      c = n.LEGACY_secondaryColor,
      l = n.LEGACY_size,
      d = n.LEGACY_fallbackIcon,
      f = n.dangerouslySetGlyph,
      p = n.shouldScale,
      h = n.LEGACY_margin,
      v = n.spacing,
      g = v === void 0 ? "none" : v,
      b = n.name,
      m = f ? { __html: f } : void 0;
    if (d && !zt("platform-visual-refresh-icons"))
      return _.createElement(d, {
        primaryColor: s ?? i,
        secondaryColor: c,
        size: l,
        label: u,
        testId: o,
        UNSAFE_margin: h,
      });
    var w = (r = t.type) !== null && r !== void 0 ? r : "core",
      O = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") O = t.size === "small" || t.size === "medium" ? t.size : O;
      else if (b) {
        var y = t.size(b);
        O = y === "small" || y === "medium" ? y : O;
      }
    }
    var S = ay[w],
      x = iy[w][O][g],
      j = S + 2 * x;
    return _.createElement(
      "span",
      {
        "data-testid": o,
        role: u ? "img" : void 0,
        "aria-label": u || void 0,
        "aria-hidden": u ? void 0 : !0,
        style: { color: i },
        className: C([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          (w === "utility" || O === "small") && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - x, " ")
          .concat(0 - x, " ")
          .concat(j, " ")
          .concat(j),
        role: "presentation",
        dangerouslySetInnerHTML: m,
        className: C([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : w === "utility" ? ny[g] : O === "small" ? ry[g] : ty[g],
        ]),
      }),
    );
  });
const oy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ml, default: Ml }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Mi = qs(oy);
var Fl;
function sy() {
  if (Fl) return $n;
  ((Fl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(dt()),
    t = r(Mi);
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
var Jn = {};
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
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var uy = {
    small: "_1bsb7vkz _4t3i7vkz _5fdi7vkz _zbji7vkz",
    medium: "_1bsb1tcg _4t3i1tcg _5fdi1tcg _zbji1tcg",
    large: "_1bsbzwfg _4t3izwfg _5fdizwfg _zbjizwfg",
    xlarge: "_1bsbckbl _4t3ickbl _5fdickbl _zbjickbl",
  },
  zl = _.memo(function (t) {
    var r = t,
      n = r.glyph,
      a = r.dangerouslySetGlyph,
      i = r.primaryColor,
      o = i === void 0 ? "currentColor" : i,
      u = r.secondaryColor,
      s = r.size,
      c = r.testId,
      l = r.label,
      d = r.width,
      f = r.height,
      p = r.UNSAFE_margin,
      h = a
        ? { dangerouslySetInnerHTML: { __html: a } }
        : { children: n ? _.createElement(n, { role: "presentation" }) : null },
      v = d && f ? { width: d + "px", height: f + "px" } : null;
    return _.createElement(
      "span",
      te(
        {
          "data-testid": c,
          "data-vc": "icon-".concat(c),
          role: l ? "img" : void 0,
          "aria-label": l || void 0,
          "aria-hidden": l ? void 0 : !0,
          style: Nl(
            Nl({}, v),
            {},
            { "--icon-primary-color": o, "--icon-secondary-color": u, margin: p },
          ),
        },
        h,
        {
          className: C([
            "_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31",
            "_jcxd1r8n _gq0g1onz _1trkwc43",
            o === u && "_18hbwc43",
            u === "transparent" && "_4fyi1j28",
            s && uy[s],
          ]),
        },
      ),
    );
  });
const cy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: zl, default: zl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Mv = qs(cy);
var Bl;
function ly() {
  if (Bl) return Jn;
  ((Bl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(dt()),
    t = Mv;
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
  return ((n.displayName = "ChevronLeftLargeIcon"), (Jn.default = n), Jn);
}
var Ul;
function dy() {
  if (Ul) return qn;
  ((Ul = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = n(dt()),
    t = n(sy()),
    r = n(ly());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronLeftIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronLeftIconMigration"), (qn.default = a), qn);
}
var fy = dy();
const vy = tr(fy);
var Xn = {},
  Zn = {},
  ql;
function py() {
  if (ql) return Zn;
  ((ql = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = r(dt()),
    t = r(Mi);
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
  return ((n.displayName = "ChevronRightIcon"), (Zn.default = n), Zn);
}
var Qn = {},
  $l;
function hy() {
  if ($l) return Qn;
  (($l = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(dt()),
    t = Mv;
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
  return ((n.displayName = "ChevronRightLargeIcon"), (Qn.default = n), Qn);
}
var Vl;
function gy() {
  if (Vl) return Xn;
  ((Vl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = n(dt()),
    t = n(py()),
    r = n(hy());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const a = (i) =>
    e.default.createElement(
      t.default,
      Object.assign({ name: "ChevronRightIcon", LEGACY_fallbackIcon: r.default }, i),
    );
  return ((a.displayName = "ChevronRightIconMigration"), (Xn.default = a), Xn);
}
var by = gy();
const _y = tr(by);
var Ws = _.createContext("elevation.surface"),
  yy = function () {
    return _.useContext(Ws);
  };
Ws.displayName = "SurfaceProvider";
var my = [
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
  wy = ["className"],
  Oy = {
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
  Fv = {
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
  ky = {
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
  Sy = {
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
  Ey = {
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
  xy = {
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
  Fi = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      i = e.backgroundColor,
      o = e.padding,
      u = e.paddingBlock,
      s = u === void 0 ? o : u,
      c = e.paddingBlockStart,
      l = c === void 0 ? s : c,
      d = e.paddingBlockEnd,
      f = d === void 0 ? s : d,
      p = e.paddingInline,
      h = p === void 0 ? o : p,
      v = e.paddingInlineStart,
      g = v === void 0 ? h : v,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      w = e.style,
      O = e.testId,
      y = e.xcss,
      S = ae(e, my);
    S.className;
    var x = ae(S, wy),
      j = _.createElement(
        n,
        te(
          {
            style: w,
            ref: t,
            className: C([
              "_19itglyw _vchhusvi _r06hglyw",
              i && Oy[i],
              i && Cy(i) && Fv[i],
              l && ky[l],
              f && Sy[f],
              g && Ey[g],
              m && xy[m],
              y,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        a,
      );
    return i ? _.createElement(Ws.Provider, { value: i }, j) : j;
  });
function Cy(e) {
  return e in Fv;
}
const Ho = () =>
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
  Lv = (...e) => C(e);
function Ry() {
  return {
    css() {
      throw Ho();
    },
    cssMap() {
      throw Ho();
    },
    cx: Lv,
    XCSSProp() {
      throw Ho();
    },
  };
}
var Py = Ry(),
  Ay = Py.cx,
  jy = [
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
  Gl = {
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
  Hl = {
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
  Iy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Dy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Ty = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  My = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Fy = { root: "_1e0c1txw _vchhusvi" },
  mi = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        i = e.alignItems,
        o = e.justifyContent,
        u = e.gap,
        s = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        h = e.xcss,
        v = ae(e, jy);
      return _.createElement(
        n,
        te({}, v, {
          role: a,
          className: C([
            Fy.root,
            u && Hl[u],
            s && Hl[s],
            u && Gl[u],
            c && Gl[c],
            i && My[i],
            f && Dy[f],
            o && Iy[o],
            p && Ty[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
mi.displayName = "Flex";
var Ly = [
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
  bs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Ny = function (t) {
    var r = t.children;
    return _.createElement("span", { className: C([bs.separator]) }, r);
  },
  ai = _.memo(
    _.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        i = a === void 0 ? "start" : a,
        o = e.shouldWrap,
        u = o === void 0 ? !1 : o,
        s = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        h = e.testId,
        v = e.role,
        g = e.children,
        b = ae(e, Ly),
        m = typeof f == "string" ? _.createElement(Ny, null, f) : f,
        w = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, y) {
                return _.createElement(_.Fragment, { key: y }, f && y > 0 ? m : null, O);
              })
          : g;
      return _.createElement(
        mi,
        te({}, b, {
          as: r,
          role: v,
          alignItems: i,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: Ay(c === "hug" && bs.hug, c === "fill" && bs.fill, p),
          testId: h,
          ref: t,
        }),
        w,
      );
    }),
  );
ai.displayName = "Inline";
var zy = "Invariant failed";
function By(e, t) {
  if (!e) throw new Error(zy);
}
var Nv = _.createContext(!1),
  Uy = function () {
    return _.useContext(Nv);
  },
  qy = Nv.Provider,
  $y = ["span", "p", "strong", "em"],
  Vy = function (t, r) {
    var n = yy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Wl.hasOwnProperty(n) ? Wl[n] : "color.text";
    }
  },
  Nr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Gy = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Hy = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Wy = {
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
  Wl = {
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
  Ky = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      i = e.align,
      o = e.testId,
      u = e.id,
      s = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      f = e.children;
    By($y.includes(n));
    var p = Uy(),
      h = Vy(a, p);
    !s && !p && (s = "medium");
    var v = _.createElement(
      n,
      {
        id: u,
        className: C([
          Nr.root,
          s && Gy[s],
          h && Wy[h],
          l && Nr.truncation,
          l === 1 && Nr.breakAll,
          i && Nr["textAlign.".concat(i)],
          c && Hy[c],
          n === "em" && Nr["as.em"],
          n === "strong" && Nr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? v : _.createElement(qy, { value: !0 }, v);
  });
function Yy() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Jy = ["as", "children", "isInset", "testId", "style", "xcss"],
  Xy = ["className"],
  Zy = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      i = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ae(e, Jy);
    c.className;
    var l = ae(c, Xy);
    return _.createElement(
      n,
      te({}, l, {
        ref: t,
        className: C([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          i && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      a,
    );
  }),
  Qy = [
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
  em = ["className"],
  Kl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  tm = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      i = a === void 0 ? "button" : a,
      o = e.onClick,
      u = o === void 0 ? we : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      v = ae(e, Qy),
      g = _.useContext(Vs),
      b = _.useCallback(
        function (O, y) {
          (g && g.tracePress(s, O.timeStamp), u(O, y));
        },
        [u, g, s],
      ),
      m = ma({
        fn: b,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "16.0.2",
        analyticsData: l,
        actionSubject: "button",
      });
    v.className;
    var w = ae(v, em);
    return _.createElement(
      Zy,
      te({ as: "button", tabIndex: h ?? (Yy() && !n ? 0 : void 0), style: d }, w, {
        type: i,
        onClick: m,
        disabled: n,
        xcss: Lv(Kl.root, n && Kl.disabled, p),
        testId: f,
        ref: t,
      }),
      r,
    );
  }),
  Wo = {},
  ea = {},
  Yl;
function zv() {
  if (Yl) return ea;
  ((Yl = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.bind = void 0));
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
  return ((ea.bind = e), ea);
}
var dr = {},
  Jl;
function rm() {
  if (Jl) return dr;
  Jl = 1;
  var e =
    (dr && dr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (i) {
            for (var o, u = 1, s = arguments.length; u < s; u++) {
              o = arguments[u];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
            }
            return i;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(dr, "__esModule", { value: !0 }), (dr.bindAll = void 0));
  var t = zv();
  function r(i) {
    if (!(typeof i > "u")) return typeof i == "boolean" ? { capture: i } : i;
  }
  function n(i, o) {
    if (o == null) return i;
    var u = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return u;
  }
  function a(i, o, u) {
    var s = o.map(function (c) {
      var l = n(c, u);
      return (0, t.bind)(i, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((dr.bindAll = a), dr);
}
var Xl;
function nm() {
  return (
    Xl ||
      ((Xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = zv();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = rm();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Wo)),
    Wo
  );
}
var Li = nm(),
  am = function () {
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
  Bv = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: am() });
  },
  im = Bv(),
  om = _.createContext(Bv()),
  sm = function (e) {
    return e.value++;
  },
  um = function (e) {
    return e ? e.prefix : "";
  },
  cm = function (e) {
    var t = e || im,
      r = um(t),
      n = sm(t),
      a = r + n,
      i = function (o) {
        return a + t.uid(o);
      };
    return { uid: a, gen: i };
  },
  Uv = function () {
    var e = _.useContext(om),
      t = _.useState(function () {
        return cm(e);
      })[0];
    return t;
  },
  lm = function () {
    var e = Uv().uid;
    return e;
  },
  dm = function () {
    var e = Uv().gen;
    return e;
  },
  Ko,
  ii = (Ko = k.useId) !== null && Ko !== void 0 ? Ko : void 0;
function fm() {
  return ii && zt("platform-dst-react-18-use-id")
    ? zt("platform-dst-react-18-use-id-selector-safe")
      ? ii().replace(/[:«»]/g, "_")
      : ii()
    : "uid".concat(lm());
}
function vm() {
  if (ii && zt("platform-dst-react-18-use-id")) {
    var e = fm();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return dm();
}
var qv = function (t) {
    var r = t.children,
      n = t.testId,
      a = t.role,
      i = t.id;
    return _.createElement(
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
  pm = {
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
  hm = ["children"];
function gm(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = _.createContext(e);
  function n(o) {
    var u = _.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function a(o) {
    var u = o.children,
      s = ae(o, hm),
      c = n(s);
    return k.createElement(k.Fragment, null, u(c));
  }
  function i(o) {
    var u = _.useContext(r),
      s = o.value || t,
      c = _.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return k.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: a, Provider: i, useTheme: n };
}
var bm = gm(function () {
    return { mode: "light" };
  }),
  _m = bm.useTheme;
function ym(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function mm(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var wm = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mm(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = ym(a);
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
  wi = "-moz-",
  Z = "-webkit-",
  $v = "comm",
  Ks = "rule",
  Ys = "decl",
  Om = "@import",
  Vv = "@keyframes",
  km = "@layer",
  Sm = Math.abs,
  Ni = String.fromCharCode,
  Em = Object.assign;
function xm(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function Gv(e) {
  return e.trim();
}
function Cm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function _s(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function ka(e, t, r) {
  return e.slice(t, r);
}
function ht(e) {
  return e.length;
}
function Js(e) {
  return e.length;
}
function Za(e, t) {
  return (t.push(e), e);
}
function Rm(e, t) {
  return e.map(t).join("");
}
var zi = 1,
  Wr = 1,
  Hv = 0,
  Ie = 0,
  he = 0,
  en = "";
function Bi(e, t, r, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: zi,
    column: Wr,
    length: o,
    return: "",
  };
}
function ta(e, t) {
  return Em(Bi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Pm() {
  return he;
}
function Am() {
  return ((he = Ie > 0 ? ye(en, --Ie) : 0), Wr--, he === 10 && ((Wr = 1), zi--), he);
}
function Le() {
  return ((he = Ie < Hv ? ye(en, Ie++) : 0), Wr++, he === 10 && ((Wr = 1), zi++), he);
}
function yt() {
  return ye(en, Ie);
}
function oi() {
  return Ie;
}
function Ia(e, t) {
  return ka(en, e, t);
}
function Sa(e) {
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
function Wv(e) {
  return ((zi = Wr = 1), (Hv = ht((en = e))), (Ie = 0), []);
}
function Kv(e) {
  return ((en = ""), e);
}
function si(e) {
  return Gv(Ia(Ie - 1, ys(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function jm(e) {
  for (; (he = yt()) && he < 33; ) Le();
  return Sa(e) > 2 || Sa(he) > 3 ? "" : " ";
}
function Im(e, t) {
  for (; --t && Le() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Ia(e, oi() + (t < 6 && yt() == 32 && Le() == 32));
}
function ys(e) {
  for (; Le(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ys(he);
        break;
      case 40:
        e === 41 && ys(e);
        break;
      case 92:
        Le();
        break;
    }
  return Ie;
}
function Dm(e, t) {
  for (; Le() && e + he !== 57; ) if (e + he === 84 && yt() === 47) break;
  return "/*" + Ia(t, Ie - 1) + "*" + Ni(e === 47 ? e : Le());
}
function Tm(e) {
  for (; !Sa(yt()); ) Le();
  return Ia(e, Ie);
}
function Mm(e) {
  return Kv(ui("", null, null, null, [""], (e = Wv(e)), 0, [0], e));
}
function ui(e, t, r, n, a, i, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      f = 0,
      p = 0,
      h = 0,
      v = 1,
      g = 1,
      b = 1,
      m = 0,
      w = "",
      O = a,
      y = i,
      S = n,
      x = w;
    g;

  )
    switch (((h = m), (m = Le()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          _s((x += Q(si(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += si(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += jm(h);
        break;
      case 92:
        x += Im(oi() - 1, 7);
        continue;
      case 47:
        switch (yt()) {
          case 42:
          case 47:
            Za(Fm(Dm(Le(), oi()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        u[c++] = ht(x) * b;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (x = Q(x, /\f/g, "")),
              p > 0 &&
                ht(x) - d &&
                Za(p > 32 ? Ql(x + ";", n, r, d - 1) : Ql(Q(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((Za((S = Zl(x, t, r, c, l, a, u, w, (O = []), (y = []), d)), i), m === 123))
              if (l === 0) ui(x, t, S, S, O, i, d, u, y);
              else
                switch (f === 99 && ye(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ui(
                      e,
                      S,
                      S,
                      n && Za(Zl(e, S, S, 0, 0, a, u, w, a, (O = []), d), y),
                      a,
                      y,
                      d,
                      u,
                      n ? O : y,
                    );
                    break;
                  default:
                    ui(x, S, S, S, [""], y, 0, u, y);
                }
        }
        ((c = l = p = 0), (v = b = 1), (w = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + ht(x)), (p = h));
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && Am() == 125) continue;
        }
        switch (((x += Ni(m)), m * v)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (ht(x) - 1) * b), (b = 1));
            break;
          case 64:
            (yt() === 45 && (x += si(Le())), (f = yt()), (l = d = ht((w = x += Tm(oi())))), m++);
            break;
          case 45:
            h === 45 && ht(x) == 2 && (v = 0);
        }
    }
  return i;
}
function Zl(e, t, r, n, a, i, o, u, s, c, l) {
  for (var d = a - 1, f = a === 0 ? i : [""], p = Js(f), h = 0, v = 0, g = 0; h < n; ++h)
    for (var b = 0, m = ka(e, d + 1, (d = Sm((v = o[h])))), w = e; b < p; ++b)
      (w = Gv(v > 0 ? f[b] + " " + m : Q(m, /&\f/g, f[b]))) && (s[g++] = w);
  return Bi(e, t, r, a === 0 ? Ks : u, s, c, l);
}
function Fm(e, t, r) {
  return Bi(e, t, r, $v, Ni(Pm()), ka(e, 2, -2), 0);
}
function Ql(e, t, r, n) {
  return Bi(e, t, r, Ys, ka(e, 0, n), ka(e, n + 1, -1), n);
}
function Gr(e, t) {
  for (var r = "", n = Js(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Lm(e, t, r, n) {
  switch (e.type) {
    case km:
      if (e.children.length) break;
    case Om:
    case Ys:
      return (e.return = e.return || e.value);
    case $v:
      return "";
    case Vv:
      return (e.return = e.value + "{" + Gr(e.children, n) + "}");
    case Ks:
      e.value = e.props.join(",");
  }
  return ht((r = Gr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Nm(e) {
  var t = Js(e);
  return function (r, n, a, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, a, i) || "";
    return o;
  };
}
function zm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Bm(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Um = function (t, r, n) {
    for (var a = 0, i = 0; (a = i), (i = yt()), a === 38 && i === 12 && (r[n] = 1), !Sa(i); ) Le();
    return Ia(t, Ie);
  },
  qm = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Sa(a)) {
        case 0:
          (a === 38 && yt() === 12 && (r[n] = 1), (t[n] += Um(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += si(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = yt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ni(a);
      }
    while ((a = Le()));
    return t;
  },
  $m = function (t, r) {
    return Kv(qm(Wv(t), r));
  },
  ed = new WeakMap(),
  Vm = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ed.get(n)) && !a) {
        ed.set(t, !0);
        for (var i = [], o = $m(r, i), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = i[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  Gm = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Yv(e, t) {
  switch (xm(e, t)) {
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
      return Z + e + wi + e + me + e + e;
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
      if (ht(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + wi + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~_s(e, "stretch") ? Yv(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, ht(e) - 3 - (~_s(e, "!important") && 10))) {
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
var Hm = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ys:
          t.return = Yv(t.value, t.length);
          break;
        case Vv:
          return Gr([ta(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Ks:
          if (t.length)
            return Rm(t.props, function (i) {
              switch (Cm(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Gr([ta(t, { props: [Q(i, /:(read-\w+)/, ":" + wi + "$1")] })], a);
                case "::placeholder":
                  return Gr(
                    [
                      ta(t, { props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      ta(t, { props: [Q(i, /:(plac\w+)/, ":" + wi + "$1")] }),
                      ta(t, { props: [Q(i, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Wm = [Hm],
  Km = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Wm,
      i = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (var g = v.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            i[g[b]] = !0;
          u.push(v);
        },
      ));
    var s,
      c = [Vm, Gm];
    {
      var l,
        d = [
          Lm,
          zm(function (v) {
            l.insert(v);
          }),
        ],
        f = Nm(c.concat(a, d)),
        p = function (g) {
          return Gr(Mm(g), f);
        };
      s = function (g, b, m, w) {
        ((l = m), p(g ? g + "{" + b.styles + "}" : b.styles), w && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new wm({
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
    return (h.sheet.hydrate(u), h);
  },
  Yo = { exports: {} },
  ee = {};
var td;
function Ym() {
  if (td) return ee;
  td = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    u = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    f = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
    h = e ? Symbol.for("react.lazy") : 60116,
    v = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (((y = y.type), y)) {
            case s:
            case c:
            case n:
            case i:
            case a:
            case d:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case u:
                case l:
                case h:
                case p:
                case o:
                  return y;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function O(y) {
    return w(y) === c;
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
    (ee.Memo = p),
    (ee.Portal = r),
    (ee.Profiler = i),
    (ee.StrictMode = a),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (y) {
      return O(y) || w(y) === s;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (y) {
      return w(y) === u;
    }),
    (ee.isContextProvider = function (y) {
      return w(y) === o;
    }),
    (ee.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }),
    (ee.isForwardRef = function (y) {
      return w(y) === l;
    }),
    (ee.isFragment = function (y) {
      return w(y) === n;
    }),
    (ee.isLazy = function (y) {
      return w(y) === h;
    }),
    (ee.isMemo = function (y) {
      return w(y) === p;
    }),
    (ee.isPortal = function (y) {
      return w(y) === r;
    }),
    (ee.isProfiler = function (y) {
      return w(y) === i;
    }),
    (ee.isStrictMode = function (y) {
      return w(y) === a;
    }),
    (ee.isSuspense = function (y) {
      return w(y) === d;
    }),
    (ee.isValidElementType = function (y) {
      return (
        typeof y == "string" ||
        typeof y == "function" ||
        y === n ||
        y === c ||
        y === i ||
        y === a ||
        y === d ||
        y === f ||
        (typeof y == "object" &&
          y !== null &&
          (y.$$typeof === h ||
            y.$$typeof === p ||
            y.$$typeof === o ||
            y.$$typeof === u ||
            y.$$typeof === l ||
            y.$$typeof === g ||
            y.$$typeof === b ||
            y.$$typeof === m ||
            y.$$typeof === v))
      );
    }),
    (ee.typeOf = w),
    ee
  );
}
var rd;
function Jm() {
  return (rd || ((rd = 1), (Yo.exports = Ym())), Yo.exports);
}
var Jo, nd;
function Xm() {
  if (nd) return Jo;
  nd = 1;
  var e = Jm(),
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
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(h, v, g) {
    if (typeof v != "string") {
      if (f) {
        var b = d(v);
        b && b !== f && p(h, b, g);
      }
      var m = s(v);
      c && (m = m.concat(c(v)));
      for (var w = o(h), O = o(v), y = 0; y < m.length; ++y) {
        var S = m[y];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(w && w[S])) {
          var x = l(v, S);
          try {
            u(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((Jo = p), Jo);
}
Xm();
var Zm = !0;
function Jv(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Xs = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Zm === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Xv = function (t, r, n) {
    Xs(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? "." + a : "", i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Qm(e) {
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
var e0 = {
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
  t0 = /[A-Z]|^ms/g,
  r0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Zv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ad = function (t) {
    return t != null && typeof t != "boolean";
  },
  Xo = Bm(function (e) {
    return Zv(e) ? e : e.replace(t0, "-$&").toLowerCase();
  }),
  id = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(r0, function (n, a, i) {
            return ((gt = { name: a, styles: i, next: gt }), a);
          });
    }
    return e0[t] !== 1 && !Zv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ea(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((gt = { name: a.name, styles: a.styles, next: gt }), a.name);
      var i = r;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((gt = { name: o.name, styles: o.styles, next: gt }), (o = o.next));
        var u = i.styles + ";";
        return u;
      }
      return n0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = gt,
          c = r(e);
        return ((gt = s), Ea(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function n0(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ea(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var o = r[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += i + "{" + t[u] + "}")
          : ad(u) && (n += Xo(i) + ":" + id(i, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) ad(o[s]) && (n += Xo(i) + ":" + id(i, o[s]) + ";");
      else {
        var c = Ea(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Xo(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var od = /label:\s*([^\s;{]+)\s*(;|$)/g,
  gt;
function Zs(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  gt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (a += Ea(r, t, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((a += Ea(r, t, e[u])), n)) {
      var s = i;
      a += s[u];
    }
  od.lastIndex = 0;
  for (var c = "", l; (l = od.exec(a)) !== null; ) c += "-" + l[1];
  var d = Qm(a) + c;
  return { name: d, styles: a, next: gt };
}
var a0 = function (t) {
    return t();
  },
  i0 = Su.useInsertionEffect ? Su.useInsertionEffect : !1,
  Qv = i0 || a0,
  ep = _.createContext(typeof HTMLElement < "u" ? Km({ key: "css" }) : null);
ep.Provider;
var tp = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(ep);
      return t(r, a, n);
    });
  },
  rp = _.createContext({}),
  Qs = {}.hasOwnProperty,
  ms = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  o0 = function (t, r) {
    var n = {};
    for (var a in r) Qs.call(r, a) && (n[a] = r[a]);
    return ((n[ms] = t), n);
  },
  s0 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Xs(r, n, a),
      Qv(function () {
        return Xv(r, n, a);
      }),
      null
    );
  },
  u0 = tp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ms],
      i = [n],
      o = "";
    typeof e.className == "string"
      ? (o = Jv(t.registered, i, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Zs(i, void 0, _.useContext(rp));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Qs.call(e, c) && c !== "css" && c !== ms && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(s0, { cache: t, serialized: u, isStringTag: typeof a == "string" }),
        _.createElement(a, s),
      )
    );
  }),
  c0 = u0,
  Mt = function (t, r) {
    var n = arguments;
    if (r == null || !Qs.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      i = new Array(a);
    ((i[0] = c0), (i[1] = o0(t, r)));
    for (var o = 2; o < a; o++) i[o] = n[o];
    return _.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Mt || (Mt = {}));
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Zs(t);
}
var l0 = function e(t) {
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
            for (var u in i) i[u] && u && (o && (o += " "), (o += u));
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
function d0(e, t, r) {
  var n = [],
    a = Jv(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var f0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Qv(function () {
        for (var a = 0; a < n.length; a++) Xv(r, n[a], !1);
      }),
      null
    );
  },
  v0 = tp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Zs(c, t.registered);
        return (r.push(d), Xs(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return d0(t.registered, n, l0(c));
      },
      i = { css: n, cx: a, theme: _.useContext(rp) },
      o = e.children(i);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(f0, { cache: t, serializedArr: r }),
      o,
    );
  });
function p0(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var np = 2,
  ws = Ct({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: np,
  }),
  Os = Ct({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -np,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  h0 = Ct({
    "&:focus": ws,
    "&:focus-visible": ws,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  g0 = Ct({
    "&:focus": Os,
    "&:focus-visible": Os,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  ap = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Os : ws,
      i = r ? g0 : h0,
      o = typeof n > "u" ? i : n === "on" && a;
    return Mt(v0, null, function (u) {
      var s = u.css,
        c = u.cx;
      return _.Children.only(
        o ? _.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
ap.displayName = "FocusRing";
function Tt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var b0 = 9;
function sd(e) {
  e.keyCode !== b0 && Tt(e);
}
var _0 = {
    onMouseDownCapture: Tt,
    onMouseUpCapture: Tt,
    onKeyDownCapture: sd,
    onKeyUpCapture: sd,
    onTouchStartCapture: Tt,
    onTouchEndCapture: Tt,
    onPointerDownCapture: Tt,
    onPointerUpCapture: Tt,
    onClickCapture: Tt,
    onClick: Tt,
  },
  y0 = {};
function m0(e) {
  var t = e.isInteractive;
  return t ? y0 : _0;
}
var ud = "rgba(179, 212, 255, 0.6)",
  cd = {
    background: {
      default: {
        default: {
          light: "var(--ds-background-neutral, ".concat(zn, ")"),
          dark: "var(--ds-background-neutral, ".concat(Bn, ")"),
        },
        hover: {
          light: "var(--ds-background-neutral-hovered, ".concat(Kc, ")"),
          dark: "var(--ds-background-neutral-hovered, ".concat(Yc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-pressed, ".concat(ud, ")"),
          dark: "var(--ds-background-neutral-pressed, ".concat(Ha, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Bn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      primary: {
        default: {
          light: "var(--ds-background-brand-bold, ".concat(Ar, ")"),
          dark: "var(--ds-background-brand-bold, ".concat(Vc, ")"),
        },
        hover: {
          light: "var(--ds-background-brand-bold-hovered, ".concat(Hc, ")"),
          dark: "var(--ds-background-brand-bold-hovered, ".concat(Ha, ")"),
        },
        active: {
          light: "var(--ds-background-brand-bold-pressed, ".concat(Wc, ")"),
          dark: "var(--ds-background-brand-bold-pressed, ".concat(Gc, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Bn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      warning: {
        default: {
          light: "var(--ds-background-warning-bold, ".concat($c, ")"),
          dark: "var(--ds-background-warning-bold, ".concat($c, ")"),
        },
        hover: {
          light: "var(--ds-background-warning-bold-hovered, ".concat(qc, ")"),
          dark: "var(--ds-background-warning-bold-hovered, ".concat(qc, ")"),
        },
        active: {
          light: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
          dark: "var(--ds-background-warning-bold-pressed, ".concat(Pr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Bn, ")"),
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
      danger: {
        default: {
          light: "var(--ds-background-danger-bold, ".concat(Uc, ")"),
          dark: "var(--ds-background-danger-bold, ".concat(Uc, ")"),
        },
        hover: {
          light: "var(--ds-background-danger-bold-hovered, ".concat(Bc, ")"),
          dark: "var(--ds-background-danger-bold-hovered, ".concat(Bc, ")"),
        },
        active: {
          light: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
          dark: "var(--ds-background-danger-bold-pressed, ".concat(Rr, ")"),
        },
        disabled: {
          light: "var(--ds-background-disabled, ".concat(zn, ")"),
          dark: "var(--ds-background-disabled, ".concat(Bn, ")"),
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(Rr, ")"),
          dark: "var(--ds-background-selected, ".concat(Rr, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(Rr, ")"),
          dark: "var(--ds-background-selected, ".concat(Rr, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        hover: {
          light: "var(--ds-background-neutral-subtle-hovered, ".concat(Kc, ")"),
          dark: "var(--ds-background-neutral-subtle-hovered, ".concat(Yc, ")"),
        },
        active: {
          light: "var(--ds-background-neutral-subtle-pressed, ".concat(ud, ")"),
          dark: "var(--ds-background-neutral-subtle-pressed, ".concat(Ha, ")"),
        },
        disabled: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ir, ")"),
        },
      },
      "subtle-link": {
        default: {
          light: "var(--ds-background-neutral-subtle, none)",
          dark: "var(--ds-background-neutral-subtle, none)",
        },
        selected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
        focusSelected: {
          light: "var(--ds-background-selected, ".concat(We, ")"),
          dark: "var(--ds-background-selected, ".concat(Ce, ")"),
        },
      },
    },
    color: {
      default: {
        default: {
          light: "var(--ds-text, ".concat(wa, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Un, ")"),
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
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Un, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Un, ")"),
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
          light: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
          dark: "var(--ds-text-warning-inverse, ".concat(jr, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(jr, ")"),
          dark: "var(--ds-text-selected, ".concat(jr, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(jr, ")"),
          dark: "var(--ds-text-selected, ".concat(jr, ")"),
        },
      },
      danger: {
        default: {
          light: "var(--ds-text-inverse, ".concat(Jt, ")"),
          dark: "var(--ds-text-inverse, ".concat(Jt, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Un, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Jt, ")"),
          dark: "var(--ds-text-selected, ".concat(Jt, ")"),
        },
      },
      link: {
        default: {
          light: "var(--ds-link, ".concat(Ar, ")"),
          dark: "var(--ds-link, ".concat(Vc, ")"),
        },
        hover: {
          light: "var(--ds-link, ".concat(Hc, ")"),
          dark: "var(--ds-link, ".concat(Ha, ")"),
        },
        active: {
          light: "var(--ds-link-pressed, ".concat(Wc, ")"),
          dark: "var(--ds-link-pressed, ".concat(Gc, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
        },
        selected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
        focusSelected: {
          light: "var(--ds-text-selected, ".concat(Ce, ")"),
          dark: "var(--ds-text-selected, ".concat(We, ")"),
        },
      },
      subtle: {
        default: {
          light: "var(--ds-text, ".concat(wa, ")"),
          dark: "var(--ds-text, ".concat(it, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Ar, ")"),
          dark: "var(--ds-text, ".concat(Ar, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
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
          light: "var(--ds-text-subtle, ".concat(Mb, ")"),
          dark: "var(--ds-text-subtle, ".concat(it, ")"),
        },
        hover: {
          light: "var(--ds-text-subtle, ".concat(Tb, ")"),
          dark: "var(--ds-text-subtle, ".concat(Db, ")"),
        },
        active: {
          light: "var(--ds-text, ".concat(Fb, ")"),
          dark: "var(--ds-text, ".concat(Lb, ")"),
        },
        disabled: {
          light: "var(--ds-text-disabled, ".concat(ur, ")"),
          dark: "var(--ds-text-disabled, ".concat(Ao, ")"),
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
function ld(e, t) {
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
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ld(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xt = 8,
  Zo = ["default", "primary", "danger", "warning"],
  ks = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  w0 = { default: ks.default, compact: ks.compact, none: "inherit" },
  O0 = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  k0 = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  S0 = { default: "middle", compact: "middle", none: "baseline" },
  ip = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  op = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  E0 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #172B4D)",
    "&::after": ne(ne({}, op), {}, { content: '""', borderColor: "var(--ds-border, #091E4224)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #091E4224)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #091E424F)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  x0 = {
    background: "var(--ds-background-brand-bold, #0C66E4)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #0055CC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #09326C)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #0C66E4)",
    },
  },
  C0 = {
    background: "transparent",
    color: "var(--ds-link, #0C66E4)",
    "&:hover": { color: "var(--ds-link, #0C66E4)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #0055CC)", textDecoration: "underline" },
  },
  R0 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #44546F)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #091E420F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #091E4224)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  P0 = {
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
  A0 = {
    background: "var(--ds-background-warning-bold, #F5CD47)",
    color: "var(--ds-text-warning-inverse, #172B4D)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #E2B203)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #CF9F02)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #F5CD47)",
    },
  },
  j0 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #5D1F1A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  I0 = {
    background: "var(--ds-background-selected, #E9F2FF)",
    color: "var(--ds-text-selected, #0C66E4)",
    "&:not([disabled])::after": ne(
      ne({}, op),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #0C66E4)" },
    ),
  },
  dd = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function fd(e) {
  var t = e.group,
    r = e.key,
    n = e.mode,
    a = t[r] || t.default;
  return a[n];
}
function zr(e) {
  var t = e.appearance,
    r = e.key,
    n = e.mode;
  return {
    background: fd({ group: cd.background[t], key: r, mode: n }),
    color: "".concat(fd({ group: cd.color[t], key: r, mode: n }), " !important"),
  };
}
function D0(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.mode,
    a = e.isSelected,
    i = e.shouldFitContainer,
    o = e.isOnlySingleIcon,
    u = zr({ appearance: t, key: a ? "selected" : "default", mode: n });
  return ne(
    ne(
      ne(
        ne(
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
          !zt("platform-component-visual-refresh") && u,
        ),
        {},
        {
          cursor: "pointer",
          height: ks[r],
          lineHeight: w0[r],
          padding: o ? k0[r] : O0[r],
          verticalAlign: S0[r],
          width: i ? "100%" : "auto",
          justifyContent: "center",
        },
        !zt("platform-component-visual-refresh") &&
          ne(
            ne(
              {
                "&:visited": ne({}, u),
                "&:hover": ne(
                  ne({}, zr({ appearance: t, key: a ? "selected" : "hover", mode: n })),
                  {},
                  {
                    textDecoration:
                      !a && (t === "link" || t === "subtle-link") ? "underline" : "inherit",
                    transitionDuration: "0s, 0.15s",
                  },
                ),
                "&:active": ne(
                  ne({}, zr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                '&[data-firefox-is-active="true"]': ne(
                  ne({}, zr({ appearance: t, key: a ? "selected" : "active", mode: n })),
                  {},
                  { transitionDuration: "0s, 0s" },
                ),
                "&[disabled]": ne(
                  ne({}, zr({ appearance: t, key: "disabled", mode: n })),
                  {},
                  { cursor: "not-allowed", textDecoration: "none" },
                ),
              },
              dd,
            ),
            {},
            {
              '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':
                ne({}, zr({ appearance: t, key: a ? "selected" : "default", mode: n })),
            },
          ),
      ),
      zt("platform-component-visual-refresh") &&
        (a
          ? I0
          : ne(
              ne(
                ne(
                  ne(
                    ne(
                      ne(
                        ne(ne({}, t === "default" && E0), t === "primary" && x0),
                        t === "link" && C0,
                      ),
                      t === "subtle" && R0,
                    ),
                    t === "subtle-link" && P0,
                  ),
                  t === "warning" && A0,
                ),
                t === "danger" && j0,
              ),
              {},
              {
                "&[disabled]": {
                  color: "var(--ds-text-disabled, #091E424F)",
                  backgroundColor: Zo.includes(t)
                    ? "var(--ds-background-disabled, #091E4208)"
                    : "transparent",
                  cursor: "not-allowed",
                  textDecoration: "none",
                  "&:hovered": {
                    backgroundColor: Zo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                  "&:active": {
                    backgroundColor: Zo.includes(t)
                      ? "var(--ds-background-disabled, #091E4208)"
                      : "transparent",
                  },
                },
              },
              dd,
            )),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function vd(e) {
  var t = e.spacing;
  return Ct({
    display: "flex",
    margin: t === "none" ? 0 : ip.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function T0(e) {
  var t = e.spacing;
  return Ct({
    margin: t === "none" ? 0 : ip.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function M0(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var F0 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  eu = function (t) {
    return t && _.isValidElement(t) && t.type === qv;
  },
  L0 = [
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
  N0 = { "> *": { pointerEvents: "none" } },
  z0 = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  B0 = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  pd = function (t, r) {
    return !t || eu(t) ? null : r;
  },
  U0 = function (t, r) {
    return eu(t) ? t : t ? Mt("span", { css: r }, t) : null;
  },
  q0 = k.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      i = a === void 0 ? "default" : a,
      o = t.autoFocus,
      u = o === void 0 ? !1 : o,
      s = t.buttonCss,
      c = t.children,
      l = t.className,
      d = t.href,
      f = t.component,
      p = f === void 0 ? (d ? "a" : "button") : f,
      h = t.iconAfter,
      v = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      w = t.isSelected,
      O = w === void 0 ? !1 : w,
      y = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? we : S,
      j = t.onFocus,
      D = t.onMouseDown,
      R = D === void 0 ? we : D,
      T = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      B = U === void 0 ? "default" : U,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ae(t, L0),
      A = _.useRef(),
      be = _.useCallback(
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
    p0(A, u);
    var oe = _.useContext(Vs),
      ue = _.useCallback(
        function (pe, Ve) {
          (oe && oe.tracePress(g, pe.timeStamp), x(pe, Ve));
        },
        [x, oe, g],
      ),
      le = ma({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = _.useCallback(
        function (pe) {
          (pe.preventDefault(), R(pe));
        },
        [R],
      );
    _.useEffect(
      function () {
        var pe = A.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var ce = !!T,
      $e = Ct(M0({ hasOverlay: ce })),
      Oe = !m && !ce,
      rt = {};
    return (
      (O || m || i === "warning") &&
        (rt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || m
                ? "var(--ds-icon-subtle, ".concat(wa, ")")
                : "var(--ds-icon-warning-inverse, ".concat(wa, ")"),
              " !important",
            ),
          },
        }),
      Mt(
        ap,
        null,
        Mt(
          p,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : N0],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: m,
              href: Oe ? d : void 0,
              onBlur: y,
              onClick: le,
              onFocus: j,
              onMouseDown: ge,
              tabIndex: m ? -1 : J,
              type: $,
            },
            m0({ isInteractive: Oe }),
          ),
          v ? Mt("span", { css: [$e, vd({ spacing: B }), pd(c, z0)] }, v) : null,
          U0(c, [$e, T0({ spacing: B })]),
          h ? Mt("span", { css: [$e, vd({ spacing: B }), pd(c, B0)] }, h) : null,
          T ? Mt("span", { css: [F0, rt] }, T) : null,
        ),
      )
    );
  });
function $0(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return eu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var V0 = [
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
  hd = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  tu = k.memo(
    k.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        i = t.children,
        o = t.iconBefore,
        u = t.iconAfter,
        s = t.isSelected,
        c = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        f = t.onMouseUp,
        p = f === void 0 ? we : f,
        h = t.shouldFitContainer,
        v = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = ae(t, V0),
        w = _m(),
        O = w.mode,
        y = $0({ children: i, iconBefore: o, iconAfter: u }),
        S = _.useState(!1),
        x = K(S, 2),
        j = x[0],
        D = x[1],
        R = _.useCallback(
          function (B) {
            (d(B), hd && D(!0));
          },
          [d, D],
        ),
        T = _.useCallback(
          function (B) {
            (p(B), hd && D(!1));
          },
          [p, D],
        ),
        U = _.useMemo(
          function () {
            return D0({
              appearance: a,
              spacing: b,
              mode: O,
              isSelected: c,
              shouldFitContainer: v,
              isOnlySingleIcon: y,
            });
          },
          [a, b, O, c, v, y],
        );
      return k.createElement(
        q0,
        te({}, m, {
          ref: r,
          appearance: a,
          buttonCss: U,
          children: i,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: R,
          onMouseUp: T,
          spacing: b,
        }),
      );
    }),
  );
tu.displayName = "Button";
function gd(e) {
  return k.createElement(tu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function G0(e) {
  return k.createElement(tu, te({}, e, { appearance: "subtle" }));
}
var H0 = { container: "_1e0c1txw _kqswh2mm" };
function W0(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return k.createElement(
    Fi,
    { as: "li", testId: r, key: t, xcss: H0.container, paddingInline: "space.100" },
    k.createElement(
      Ky,
      { testId: r && "".concat(r, "-text") },
      k.createElement(qv, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var bd = {},
  _d =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function K0(e, t) {
  return !!(e === t || (_d(e) && _d(t)));
}
function Y0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!K0(e[r], t[r])) return !1;
  return !0;
}
function J0(e, t) {
  t === void 0 && (t = Y0);
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
var X0 = function (t, r, n, a) {
  var i = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > i,
    l = c && i - 4 < r,
    d = c && r < s - i + 3,
    f = J0(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, w) {
        return u(m, g + w, a);
      });
    });
  if (!c) return f(0, s);
  if (l && !d) {
    var p = i - 2;
    return [].concat(
      Te(f(0, 1)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - p })],
      Te(f(s - p)),
    );
  }
  if (!l && d) {
    var h = i - 2;
    return [].concat(
      Te(f(0, h)),
      [o({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      Te(f(s - 1)),
    );
  }
  var v = i - 4;
  return [].concat(
    Te(f(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(v / 2),
      }),
    ],
    Te(f(r - Math.floor(v / 2), r + v - 1)),
    [o({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(f(s - 1)),
  );
};
function yd(e, t) {
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
function Z0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ss = {
    paginationMenu:
      "_ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _19pkze3t _2hwxze3t _otyrze3t _18u0ze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  Q0 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.1.14",
  };
function md(e) {
  var t = e.chevronDirection,
    r = t === "left" ? vy : _y;
  return k.createElement(
    Fi,
    { as: "span", xcss: Ss.navigatorIconWrapper },
    k.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function ew(e, t) {
  var r = e.components,
    n = r === void 0 ? bd : r,
    a = e.defaultSelectedIndex,
    i = a === void 0 ? 0 : a,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    f = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    h = p === void 0 ? "next" : p,
    v = e.style,
    g = v === void 0 ? bd : v,
    b = e.max,
    m = b === void 0 ? 7 : b,
    w = e.onChange,
    O = w === void 0 ? we : w,
    y = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    j = x === void 0 ? W0 : x,
    D = e.analyticsContext,
    R = e.testId,
    T = e.isDisabled,
    U = Jb(o, function () {
      return i || 0;
    }),
    B = K(U, 2),
    V = B[0],
    J = B[1],
    G = ma(
      Z0(
        {
          fn: function (N, A) {
            var be = N.event,
              oe = N.selectedPageIndex;
            (o === void 0 && J(oe), O && O(be, y[oe], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        Q0,
      ),
    ),
    $ = function (N, A, be) {
      var oe = y[V],
        ue = "".concat(l, " ").concat(S ? S(N, A) : N),
        le = N === oe;
      return k.createElement(
        ai,
        { as: "li", xcss: Ss.paginationMenuItem, key: "page-".concat(S ? S(N, A) : A) },
        k.createElement(
          G0,
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
  return k.createElement(
    Fi,
    { testId: R, style: g, ref: t, "aria-label": s, as: "nav" },
    k.createElement(
      ai,
      { space: "space.0", alignBlock: "center" },
      k.createElement(gd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: k.createElement(md, { chevronDirection: "left" }),
        "aria-label": f,
        testId: R && "".concat(R, "--left-navigator"),
      }),
      k.createElement(
        ai,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ss.paginationMenu },
        X0(y, V, { max: m, ellipsis: j, transform: $ }, R),
      ),
      k.createElement(gd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === y.length - 1,
        iconBefore: k.createElement(md, { chevronDirection: "right" }),
        "aria-label": h,
        testId: R && "".concat(R, "--right-navigator"),
      }),
    ),
  );
}
var tw = _.memo(_.forwardRef(ew));
function rw(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, sp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function sp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sp = function () {
    return !!e;
  })();
}
var nw = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return (
        (r = rw(this, t, [].concat(a))),
        E(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              i = n.value,
              o = i === void 0 ? 1 : i,
              u = n.i18n,
              s = n.testId,
              c = n.isDisabled,
              l = Te(Array(a)).map(function (f, p) {
                return p + 1;
              }),
              d = o - 1;
            return k.createElement(tw, {
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
  })(k.Component),
  aw = ["isRanking", "testId"],
  iw = [
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
function wd(e, t) {
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
function ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Od = "--local-dynamic-table-text-color",
  ow = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ae(t, aw);
    return _.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: C(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  sw = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      i = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ae(e, iw),
      l = ra(
        ra(ra({}, u), r && gv({ width: r })),
        {},
        E({}, Od, "var(--ds-text-subtlest, #626F86)"),
      ),
      d = a === pr,
      f = a === _i,
      p = function () {
        if (d) return "ascending";
        if (f) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      te({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: C([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r187z _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbi3bv",
          "_1bsb8a2a",
          i && o && "_1bto1l2s _o5721q9c",
          i && "_1reo15vq _18m915vq",
        ]),
        style: ra(
          ra({}, l),
          {},
          { "--_17ckjys": pv("var(--ds-text-subtle, ".concat("var(".concat(Od, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function uw(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, up() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function cw(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return (
        (n = uw(this, r, [].concat(i))),
        E(n, "state", { refWidth: 0, refHeight: 0 }),
        E(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        E(n, "updateDimensions", function () {
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
      Ue(r, t),
      ve(r, [
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
              te({ refWidth: i, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(k.Component);
}
var na = {},
  kd;
function lw() {
  if (kd) return na;
  ((kd = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.default = void 0));
  var e = r(dt()),
    t = r(Mi);
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
  return ((n.displayName = "ArrowDownIcon"), (na.default = n), na);
}
var dw = lw();
const fw = tr(dw);
var aa = {},
  Sd;
function vw() {
  if (Sd) return aa;
  ((Sd = 1), Object.defineProperty(aa, "__esModule", { value: !0 }), (aa.default = void 0));
  var e = r(dt()),
    t = r(Mi);
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
  return ((n.displayName = "ArrowUpIcon"), (aa.default = n), aa);
}
var pw = vw();
const hw = tr(pw);
var gw = "Escape";
function bw(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (o) {
        r || n.current || o.key !== gw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    i = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!r)
        return Li.bindAll(
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
function ia(e) {
  var t = _.useRef(e);
  return (
    _.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var _w = _.createContext(null),
  yw = _.createContext(null);
function mw() {
  var e = _.useContext(yw);
  return e;
}
function ww(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(_w),
    i = mw();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: i, type: r });
    },
    [a, t, i, n, r],
  );
}
var ca = { none: 0, small: 100, medium: 350, large: 700 },
  Qo = 0.5,
  Ow = { none: ca.none, small: ca.small * Qo, medium: ca.medium * Qo, large: ca.large * Qo },
  kw = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  Sw = function () {
    if (!kw()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  Ew = function (t) {
    switch (t.cleanup) {
      case "next-effect":
        return;
      case "unmount":
      default:
        return [];
    }
  },
  xw = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = _.useRef([]);
    return (
      _.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, Ew(t)),
      _.useCallback(function (n, a) {
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++)
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
            a,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  cp = { appear: !0, isExiting: !1 },
  lp = _.createContext(cp),
  Ed = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cp;
    return k.createElement(lp.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  xd = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Cw = function (t, r) {
    for (var n = r.concat([]), a = Rw(r), i = 0; i < t.length; i++) {
      var o = t[i],
        u = !a[o.key];
      u && n.splice(i + 1, 0, o);
    }
    return n;
  },
  Rw = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  Pw = function (t, r) {
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
        u = o.key;
      n.has(u) || a.add(u);
    }
    return a;
  },
  dp = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      i = _.useState([null, n]),
      o = K(i, 2),
      u = o[0],
      s = o[1],
      c = _.useState([]),
      l = K(c, 2),
      d = l[0],
      f = l[1],
      p = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(p, 2),
      v = h[0],
      g = h[1];
    if (
      (_.useEffect(function () {
        v.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var b = K(u, 2),
      m = b[0],
      w = b[1],
      O = xd(m),
      y = xd(w);
    w !== n && s([w, n]);
    var S = Pw(y, O),
      x = !!S.size,
      j = y;
    if ((x && (j = Cw(y, O)), a))
      if (d.length) j = d;
      else {
        var D = j.filter(function (R) {
          return S.has(R.key);
        });
        D.length && f(D);
      }
    return (
      S.size
        ? (j = j.map(function (R) {
            var T = S.has(R.key);
            return Ed(R, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(R.key), S.size === 0 && (s([null, n]), f([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (R) {
            return Ed(R, v);
          })),
      j
    );
  }),
  Aw = function () {
    return _.useContext(lp);
  };
dp.displayName = "ExitingPersistence";
function jw() {
  var e = _.useRef("");
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
var Iw = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  Dw = function () {
    var t = jw(),
      r = _.useContext(Iw);
    return r(t);
  },
  Tw = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      i = a === void 0 ? n : a,
      o = t.enteringAnimation,
      u = t.exitingAnimation,
      s = u === void 0 ? o : u,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      f = d === void 0 ? "large" : d,
      p = Dw(),
      h = Aw(),
      v = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = xw(),
      w = c || !p.isReady,
      O = v ? 0 : p.delay,
      y = v ? "exiting" : "entering",
      S = _.useState(b),
      x = K(S, 2),
      j = x[0],
      D = x[1];
    return (
      _.useEffect(
        function () {
          var R = !1;
          if (!w) {
            if (!b) {
              l && l(y);
              return;
            }
            var T = function () {
              (y === "exiting" && g?.(), R || D(!1), l?.(y));
            };
            if (Sw()) {
              T();
              return;
            }
            return (
              D(!0),
              m(T, v ? Ow[f] : ca[f] + O),
              function () {
                R = !0;
              }
            );
          }
        },
        [g, y, v, f, O, w, m],
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
                ((!v && o === "fade-in") || (v && s === "fade-in")) && C(["_j7hq1cgr"]),
                ((!v && o === "fade-out") || (v && s === "fade-out")) && C(["_j7hq1lln"]),
                ((!v && o === "zoom-in") || (v && s === "zoom-in")) && C(["_j7hqe8p0"]),
                ((!v && o === "zoom-out") || (v && s === "zoom-out")) && C(["_j7hqy6ql"]),
                ((!v && o === "slide-in-from-top") || (v && s === "slide-in-from-top")) &&
                  C(["_j7hqqshu"]),
                ((!v && o === "slide-out-from-top") || (v && s === "slide-out-from-top")) &&
                  C(["_j7hq7ri4"]),
                ((!v && o === "slide-in-from-right") || (v && s === "slide-in-from-right")) &&
                  C(["_j7hqdfjr"]),
                ((!v && o === "slide-out-from-right") || (v && s === "slide-out-from-right")) &&
                  C(["_j7hqonfj"]),
                ((!v && o === "slide-in-from-bottom") || (v && s === "slide-in-from-bottom")) &&
                  C(["_j7hq1liq"]),
                ((!v && o === "slide-out-from-bottom") || (v && s === "slide-out-from-bottom")) &&
                  C(["_j7hqhnf1"]),
                ((!v && o === "slide-in-from-left") || (v && s === "slide-in-from-left")) &&
                  C(["_j7hq1bh1"]),
                ((!v && o === "slide-out-from-left") || (v && s === "slide-out-from-left")) &&
                  C(["_j7hqj08w"]),
                ((!v && o === "fade-in-from-top") || (v && s === "fade-in-from-top")) &&
                  C(["_j7hq2iua"]),
                ((!v && o === "fade-out-from-top") || (v && s === "fade-out-from-top")) &&
                  C(["_j7hq39va"]),
                ((!v && o === "fade-in-from-left") || (v && s === "fade-in-from-left")) &&
                  C(["_j7hq15m2"]),
                ((!v && o === "fade-out-from-left") || (v && s === "fade-out-from-left")) &&
                  C(["_j7hq1yiv"]),
                ((!v && o === "fade-in-from-bottom") || (v && s === "fade-in-from-bottom")) &&
                  C(["_j7hq1w00"]),
                ((!v && o === "fade-out-from-bottom") || (v && s === "fade-out-from-bottom")) &&
                  C(["_j7hqzy3z"]),
                ((!v && o === "fade-in-from-right") || (v && s === "fade-in-from-right")) &&
                  C(["_j7hqpqak"]),
                ((!v && o === "fade-out-from-right") || (v && s === "fade-out-from-right")) &&
                  C(["_j7hq1ebg"]),
                ((!v && o === "fade-in-from-top-constant") ||
                  (v && s === "fade-in-from-top-constant")) &&
                  C(["_j7hqm2e2"]),
                ((!v && o === "fade-out-from-top-constant") ||
                  (v && s === "fade-out-from-top-constant")) &&
                  C(["_j7hq97jn"]),
                ((!v && o === "fade-in-from-left-constant") ||
                  (v && s === "fade-in-from-left-constant")) &&
                  C(["_j7hqovgq"]),
                ((!v && o === "fade-out-from-left-constant") ||
                  (v && s === "fade-out-from-left-constant")) &&
                  C(["_j7hq15do"]),
                ((!v && o === "fade-in-from-bottom-constant") ||
                  (v && s === "fade-in-from-bottom-constant")) &&
                  C(["_j7hq797a"]),
                ((!v && o === "fade-out-from-bottom-constant") ||
                  (v && s === "fade-out-from-bottom-constant")) &&
                  C(["_j7hqwo7r"]),
                ((!v && o === "fade-in-from-right-constant") ||
                  (v && s === "fade-in-from-right-constant")) &&
                  C(["_j7hqt8u5"]),
                ((!v && o === "fade-out-from-right-constant") ||
                  (v && s === "fade-out-from-right-constant")) &&
                  C(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        y,
      )
    );
  },
  Mw = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Fw = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      i = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = i !== void 0 ? Mw[i] : void 0,
      f =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return k.createElement(
      Tw,
      {
        duration: a,
        enteringAnimation: i
          ? "fade-in-from-".concat(i).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: f,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  Lw = _.createContext();
_.createContext();
var Nw = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  zw = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  Bw = function (t, r) {
    if (typeof t == "function") return zw(t, r);
    t != null && (t.current = r);
  },
  Cd = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        i = n[1];
      return ((r[a] = i), r);
    }, {});
  },
  Rd =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Pe = "top",
  et = "bottom",
  tt = "right",
  Ae = "left",
  ru = "auto",
  Da = [Pe, et, tt, Ae],
  Kr = "start",
  xa = "end",
  Uw = "clippingParents",
  fp = "viewport",
  oa = "popper",
  qw = "reference",
  Pd = Da.reduce(function (e, t) {
    return e.concat([t + "-" + Kr, t + "-" + xa]);
  }, []),
  vp = [].concat(Da, [ru]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Kr, t + "-" + xa]);
  }, []),
  $w = "beforeRead",
  Vw = "read",
  Gw = "afterRead",
  Hw = "beforeMain",
  Ww = "main",
  Kw = "afterMain",
  Yw = "beforeWrite",
  Jw = "write",
  Xw = "afterWrite",
  Zw = [$w, Vw, Gw, Hw, Ww, Kw, Yw, Jw, Xw];
function Et(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function hr(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Qw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Qe(i) ||
      !Et(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var u = a[o];
        u === !1 ? i.removeAttribute(o) : i.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function eO(e) {
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
          u = o.reduce(function (s, c) {
            return ((s[c] = ""), s);
          }, {});
        !Qe(a) ||
          !Et(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const tO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qw,
  effect: eO,
  requires: ["computeStyles"],
};
function mt(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  Oi = Math.min,
  Yr = Math.round;
function Es() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function pp() {
  return !/^((?!chrome|android).)*safari/i.test(Es());
}
function Jr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Qe(e) &&
    ((a = (e.offsetWidth > 0 && Yr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Yr(n.height) / e.offsetHeight) || 1));
  var o = hr(e) ? Ne(e) : window,
    u = o.visualViewport,
    s = !pp() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    l = (n.top + (s && u ? u.offsetTop : 0)) / i,
    d = n.width / a,
    f = n.height / i;
  return { width: d, height: f, top: l, right: c + d, bottom: l + f, left: c, x: c, y: l };
}
function au(e) {
  var t = Jr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function hp(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && nu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qt(e) {
  return Ne(e).getComputedStyle(e);
}
function rO(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function rr(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ui(e) {
  return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (nu(e) ? e.host : null) || rr(e);
}
function Ad(e) {
  return !Qe(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function nO(e) {
  var t = /firefox/i.test(Es()),
    r = /Trident/i.test(Es());
  if (r && Qe(e)) {
    var n = qt(e);
    if (n.position === "fixed") return null;
  }
  var a = Ui(e);
  for (nu(a) && (a = a.host); Qe(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
    var i = qt(a);
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
function Ta(e) {
  for (var t = Ne(e), r = Ad(e); r && rO(r) && qt(r).position === "static"; ) r = Ad(r);
  return r && (Et(r) === "html" || (Et(r) === "body" && qt(r).position === "static"))
    ? t
    : r || nO(e) || t;
}
function iu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function va(e, t, r) {
  return fr(e, Oi(t, r));
}
function aO(e, t, r) {
  var n = va(e, t, r);
  return n > r ? r : n;
}
function gp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bp(e) {
  return Object.assign({}, gp(), e);
}
function _p(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var iO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    bp(typeof t != "number" ? t : _p(t, Da))
  );
};
function oO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = mt(r.placement),
    s = iu(u),
    c = [Ae, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = iO(a.padding, r),
      f = au(i),
      p = s === "y" ? Pe : Ae,
      h = s === "y" ? et : tt,
      v = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      b = Ta(i),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      w = v / 2 - g / 2,
      O = d[p],
      y = m - f[l] - d[h],
      S = m / 2 - f[l] / 2 + w,
      x = va(O, S, y),
      j = s;
    r.modifiersData[n] = ((t = {}), (t[j] = x), (t.centerOffset = x - S), t);
  }
}
function sO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (hp(t.elements.popper, a) && (t.elements.arrow = a)));
}
const uO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oO,
  effect: sO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xr(e) {
  return e.split("-")[1];
}
var cO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function lO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Yr(r * a) / a || 0, y: Yr(n * a) / a || 0 };
}
function jd(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    p = f === void 0 ? 0 : f,
    h = o.y,
    v = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: p, y: v }) : { x: p, y: v };
  ((p = g.x), (v = g.y));
  var b = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    w = Ae,
    O = Pe,
    y = window;
  if (c) {
    var S = Ta(r),
      x = "clientHeight",
      j = "clientWidth";
    if (
      (S === Ne(r) &&
        ((S = rr(r)),
        qt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      a === Pe || ((a === Ae || a === tt) && i === xa))
    ) {
      O = et;
      var D = d && S === y && y.visualViewport ? y.visualViewport.height : S[x];
      ((v -= D - n.height), (v *= s ? 1 : -1));
    }
    if (a === Ae || ((a === Pe || a === et) && i === xa)) {
      w = tt;
      var R = d && S === y && y.visualViewport ? y.visualViewport.width : S[j];
      ((p -= R - n.width), (p *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && cO),
    U = l === !0 ? lO({ x: p, y: v }, Ne(r)) : { x: p, y: v };
  if (((p = U.x), (v = U.y), s)) {
    var B;
    return Object.assign(
      {},
      T,
      ((B = {}),
      (B[O] = m ? "0" : ""),
      (B[w] = b ? "0" : ""),
      (B.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + v + "px)"
          : "translate3d(" + p + "px, " + v + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = m ? v + "px" : ""), (t[w] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function dO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: mt(t.placement),
      variation: Xr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      jd(
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
        jd(
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
const fO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: dO, data: {} };
var Qa = { passive: !0 };
function vO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Ne(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, Qa);
      }),
    u && s.addEventListener("resize", r.update, Qa),
    function () {
      (i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Qa);
        }),
        u && s.removeEventListener("resize", r.update, Qa));
    }
  );
}
const pO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: vO,
  data: {},
};
var hO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ci(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return hO[t];
  });
}
var gO = { start: "end", end: "start" };
function Id(e) {
  return e.replace(/start|end/g, function (t) {
    return gO[t];
  });
}
function ou(e) {
  var t = Ne(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function su(e) {
  return Jr(rr(e)).left + ou(e).scrollLeft;
}
function bO(e, t) {
  var r = Ne(e),
    n = rr(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var c = pp();
    (c || (!c && t === "fixed")) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: u + su(e), y: s };
}
function _O(e) {
  var t,
    r = rr(e),
    n = ou(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = fr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = fr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + su(e),
    s = -n.scrollTop;
  return (
    qt(a || r).direction === "rtl" && (u += fr(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: u, y: s }
  );
}
function uu(e) {
  var t = qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function yp(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && uu(e)
      ? e
      : yp(Ui(e));
}
function pa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = yp(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ne(n),
    o = a ? [i].concat(i.visualViewport || [], uu(n) ? n : []) : n,
    u = t.concat(o);
  return a ? u : u.concat(pa(Ui(o)));
}
function xs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function yO(e, t) {
  var r = Jr(e, !1, t === "fixed");
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
function Dd(e, t, r) {
  return t === fp ? xs(bO(e, r)) : hr(t) ? yO(t, r) : xs(_O(rr(e)));
}
function mO(e) {
  var t = pa(Ui(e)),
    r = ["absolute", "fixed"].indexOf(qt(e).position) >= 0,
    n = r && Qe(e) ? Ta(e) : e;
  return hr(n)
    ? t.filter(function (a) {
        return hr(a) && hp(a, n) && Et(a) !== "body";
      })
    : [];
}
function wO(e, t, r, n) {
  var a = t === "clippingParents" ? mO(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    u = i.reduce(
      function (s, c) {
        var l = Dd(e, c, n);
        return (
          (s.top = fr(l.top, s.top)),
          (s.right = Oi(l.right, s.right)),
          (s.bottom = Oi(l.bottom, s.bottom)),
          (s.left = fr(l.left, s.left)),
          s
        );
      },
      Dd(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function mp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? mt(n) : null,
    i = n ? Xr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
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
  var c = a ? iu(a) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Kr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case xa:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ca(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? Uw : u,
    c = r.rootBoundary,
    l = c === void 0 ? fp : c,
    d = r.elementContext,
    f = d === void 0 ? oa : d,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    v = r.padding,
    g = v === void 0 ? 0 : v,
    b = bp(typeof g != "number" ? g : _p(g, Da)),
    m = f === oa ? qw : oa,
    w = e.rects.popper,
    O = e.elements[h ? m : f],
    y = wO(hr(O) ? O : O.contextElement || rr(e.elements.popper), s, l, o),
    S = Jr(e.elements.reference),
    x = mp({ reference: S, element: w, placement: a }),
    j = xs(Object.assign({}, w, x)),
    D = f === oa ? j : S,
    R = {
      top: y.top - D.top + b.top,
      bottom: D.bottom - y.bottom + b.bottom,
      left: y.left - D.left + b.left,
      right: D.right - y.right + b.right,
    },
    T = e.modifiersData.offset;
  if (f === oa && T) {
    var U = T[a];
    Object.keys(R).forEach(function (B) {
      var V = [tt, et].indexOf(B) >= 0 ? 1 : -1,
        J = [Pe, et].indexOf(B) >= 0 ? "y" : "x";
      R[B] += U[J] * V;
    });
  }
  return R;
}
function OO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? vp : s,
    l = Xr(n),
    d = l
      ? u
        ? Pd
        : Pd.filter(function (h) {
            return Xr(h) === l;
          })
      : Da,
    f = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, v) {
    return ((h[v] = Ca(e, { placement: v, boundary: a, rootBoundary: i, padding: o })[mt(v)]), h);
  }, {});
  return Object.keys(p).sort(function (h, v) {
    return p[h] - p[v];
  });
}
function kO(e) {
  if (mt(e) === ru) return [];
  var t = ci(e);
  return [Id(e), t, Id(t)];
}
function SO(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        o = r.altAxis,
        u = o === void 0 ? !0 : o,
        s = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        f = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        v = r.allowedAutoPlacements,
        g = t.options.placement,
        b = mt(g),
        m = b === g,
        w = s || (m || !h ? [ci(g)] : kO(g)),
        O = [g].concat(w).reduce(function (le, ge) {
          return le.concat(
            mt(ge) === ru
              ? OO(t, {
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
        y = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        j = !0,
        D = O[0],
        R = 0;
      R < O.length;
      R++
    ) {
      var T = O[R],
        U = mt(T),
        B = Xr(T) === Kr,
        V = [Pe, et].indexOf(U) >= 0,
        J = V ? "width" : "height",
        G = Ca(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: f, padding: c }),
        $ = V ? (B ? tt : Ae) : B ? et : Pe;
      y[J] > S[J] && ($ = ci($));
      var X = ci($),
        N = [];
      if (
        (i && N.push(G[U] <= 0),
        u && N.push(G[$] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((D = T), (j = !1));
        break;
      }
      x.set(T, N);
    }
    if (j)
      for (
        var A = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function ($e) {
              var Oe = x.get($e);
              if (Oe)
                return Oe.slice(0, ge).every(function (rt) {
                  return rt;
                });
            });
            if (ce) return ((D = ce), "break");
          },
          oe = A;
        oe > 0;
        oe--
      ) {
        var ue = be(oe);
        if (ue === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const EO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: SO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Td(e, t, r) {
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
function Md(e) {
  return [Pe, tt, et, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function xO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Ca(t, { elementContext: "reference" }),
    u = Ca(t, { altBoundary: !0 }),
    s = Td(o, n),
    c = Td(u, a, i),
    l = Md(s),
    d = Md(c);
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
const CO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: xO,
};
function RO(e, t, r) {
  var n = mt(e),
    a = [Ae, Pe].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    u = i[1];
  return (
    (o = o || 0),
    (u = (u || 0) * a),
    [Ae, tt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function PO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = vp.reduce(function (l, d) {
      return ((l[d] = RO(d, t.rects, i)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const AO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: PO };
function jO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = mp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const IO = { name: "popperOffsets", enabled: !0, phase: "read", fn: jO, data: {} };
function DO(e) {
  return e === "x" ? "y" : "x";
}
function TO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    o = r.altAxis,
    u = o === void 0 ? !1 : o,
    s = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    f = r.tether,
    p = f === void 0 ? !0 : f,
    h = r.tetherOffset,
    v = h === void 0 ? 0 : h,
    g = Ca(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    b = mt(t.placement),
    m = Xr(t.placement),
    w = !m,
    O = iu(b),
    y = DO(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    j = t.rects.popper,
    D = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var B,
        V = O === "y" ? Pe : Ae,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + g[V],
        N = $ - g[J],
        A = p ? -j[G] / 2 : 0,
        be = m === Kr ? x[G] : j[G],
        oe = m === Kr ? -j[G] : -x[G],
        ue = t.elements.arrow,
        le = p && ue ? au(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : gp(),
        ce = ge[V],
        $e = ge[J],
        Oe = va(0, x[G], le[G]),
        rt = w ? x[G] / 2 - A - Oe - ce - R.mainAxis : be - Oe - ce - R.mainAxis,
        pe = w ? -x[G] / 2 + A + Oe + $e + R.mainAxis : oe + Oe + $e + R.mainAxis,
        Ve = t.elements.arrow && Ta(t.elements.arrow),
        Sr = Ve ? (O === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0) : 0,
        Pt = (B = T?.[O]) != null ? B : 0,
        Se = $ + rt - Pt - Sr,
        Ee = $ + pe - Pt,
        Gt = va(p ? Oi(X, Se) : X, $, p ? fr(N, Ee) : N);
      ((S[O] = Gt), (U[O] = Gt - $));
    }
    if (u) {
      var vt,
        nt = O === "x" ? Pe : Ae,
        Ht = O === "x" ? et : tt,
        Ge = S[y],
        De = y === "y" ? "height" : "width",
        xe = Ge + g[nt],
        at = Ge - g[Ht],
        Wt = [Pe, Ae].indexOf(b) !== -1,
        Ua = (vt = T?.[y]) != null ? vt : 0,
        qa = Wt ? xe : Ge - x[De] - j[De] - Ua + R.altAxis,
        $a = Wt ? Ge + x[De] + j[De] - Ua - R.altAxis : at,
        Va = p && Wt ? aO(qa, Ge, $a) : va(p ? qa : xe, Ge, p ? $a : at);
      ((S[y] = Va), (U[y] = Va - Ge));
    }
    t.modifiersData[n] = U;
  }
}
const MO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: TO,
  requiresIfExists: ["offset"],
};
function FO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function LO(e) {
  return e === Ne(e) || !Qe(e) ? ou(e) : FO(e);
}
function NO(e) {
  var t = e.getBoundingClientRect(),
    r = Yr(t.width) / e.offsetWidth || 1,
    n = Yr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function zO(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    a = Qe(t) && NO(t),
    i = rr(t),
    o = Jr(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || uu(i)) && (u = LO(t)),
      Qe(t) ? ((s = Jr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = su(i))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function BO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    (o.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && a(s);
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
function UO(e) {
  var t = BO(e);
  return Zw.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function qO(e) {
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
function $O(e) {
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
var Fd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ld() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function VO(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? Fd : a;
  return function (u, s, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Fd, i),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: l,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(l.options) : b;
          (v(),
            (l.options = Object.assign({}, i, l.options, m)),
            (l.scrollParents = {
              reference: hr(u) ? pa(u) : u.contextElement ? pa(u.contextElement) : [],
              popper: pa(s),
            }));
          var w = UO($O([].concat(n, l.options.modifiers)));
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
            var b = l.elements,
              m = b.reference,
              w = b.popper;
            if (Ld(m, w)) {
              ((l.rects = {
                reference: zO(m, Ta(w), l.options.strategy === "fixed"),
                popper: au(w),
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
                var y = l.orderedModifiers[O],
                  S = y.fn,
                  x = y.options,
                  j = x === void 0 ? {} : x,
                  D = y.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: D, instance: p }) || l);
              }
            }
          }
        },
        update: qO(function () {
          return new Promise(function (g) {
            (p.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (v(), (f = !0));
        },
      };
    if (!Ld(u, s)) return p;
    p.setOptions(c).then(function (g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          w = m === void 0 ? {} : m,
          O = g.effect;
        if (typeof O == "function") {
          var y = O({ state: l, name: b, instance: p, options: w }),
            S = function () {};
          d.push(y || S);
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
var GO = [pO, IO, fO, tO, AO, EO, MO, uO, CO],
  HO = VO({ defaultModifiers: GO }),
  es,
  Nd;
function WO() {
  if (Nd) return es;
  Nd = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(i, o) {
    if (i === o) return !0;
    if (i && o && typeof i == "object" && typeof o == "object") {
      if (i.constructor !== o.constructor) return !1;
      var u, s, c;
      if (Array.isArray(i)) {
        if (((u = i.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (!a(i[s], o[s])) return !1;
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
        if (((u = i.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (i[s] !== o[s]) return !1;
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
      if (((c = Object.keys(i)), (u = c.length), u !== Object.keys(o).length)) return !1;
      for (s = u; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
      if (e && i instanceof Element) return !1;
      for (s = u; s-- !== 0; )
        if (
          !((c[s] === "_owner" || c[s] === "__v" || c[s] === "__o") && i.$$typeof) &&
          !a(i[c[s]], o[c[s]])
        )
          return !1;
      return !0;
    }
    return i !== i && o !== o;
  }
  return (
    (es = function (o, u) {
      try {
        return a(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    es
  );
}
var KO = WO();
const YO = tr(KO);
var JO = [],
  XO = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || JO,
      },
      o = _.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = _.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (p) {
            var h = p.state,
              v = Object.keys(h.elements);
            Ii.flushSync(function () {
              s({
                styles: Cd(
                  v.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Cd(
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
      l = _.useMemo(
        function () {
          var f = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return YO(a.current, f) ? a.current || f : ((a.current = f), f);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = _.useRef();
    return (
      Rd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Rd(
        function () {
          if (!(t == null || r == null)) {
            var f = n.createPopper || HO,
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
        styles: u.styles,
        attributes: u.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  ZO = function () {},
  QO = function () {
    return Promise.resolve(null);
  },
  e1 = [];
function t1(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    i = e.modifiers,
    o = i === void 0 ? e1 : i,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = _.useContext(Lw),
    f = _.useState(null),
    p = f[0],
    h = f[1],
    v = _.useState(null),
    g = v[0],
    b = v[1];
  _.useEffect(
    function () {
      Bw(c, p);
    },
    [c, p],
  );
  var m = _.useMemo(
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
    w = XO(u || d, p, m),
    O = w.state,
    y = w.styles,
    S = w.forceUpdate,
    x = w.update,
    j = _.useMemo(
      function () {
        return {
          ref: h,
          style: y.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: y.arrow, ref: b },
          forceUpdate: S || ZO,
          update: x || QO,
        };
      },
      [h, b, r, O, y, x, S],
    );
  return Nw(l)(j);
}
function r1(e) {
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
          u,
          s = n.state,
          c = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = s.modifiersData.popperOffsets,
            f = d === void 0 ? { x: 0, y: 0 } : d,
            p = s.placement.split("-"),
            h = K(p, 1),
            v = h[0],
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
            b = l.width - 2 * t,
            m = l.height - 2 * t;
          (v === "top" && (m = s.rects.reference.y + g.y - t),
            v === "bottom" && (m = l.height - f.y - t),
            v === "left" && (b = s.rects.reference.x + g.x - t),
            v === "right" && (b = l.width - f.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var Cs = 5,
  n1 = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Cs,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function a1() {
  return null;
}
var i1 = [0, 8];
function o1(e) {
  var t = e.children,
    r = t === void 0 ? a1 : t,
    n = e.offset,
    a = n === void 0 ? i1 : n,
    i = e.placement,
    o = i === void 0 ? "bottom-start" : i,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    h = K(a, 2),
    v = h[0],
    g = h[1],
    b = _.useMemo(
      function () {
        var w = {
            name: "preventOverflow",
            options: { padding: Cs, rootBoundary: p ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [v, g] } },
          y = p ? r1({ viewportPadding: Cs }) : [];
        return [].concat(n1, [w, O], Te(y));
      },
      [v, g, p],
    ),
    m = _.useMemo(
      function () {
        return c == null ? b : [].concat(Te(b), Te(c));
      },
      [b, c],
    );
  return k.createElement(t1, { modifiers: m, placement: o, strategy: d, referenceElement: s }, r);
}
var wp = "atlaskit-portal-container",
  Op = "body > .atlaskit-portal-container",
  kp = "atlaskit-portal",
  s1 = function (t) {
    var r = document.createElement("div");
    return ((r.className = kp), (r.style.zIndex = "".concat(t)), r);
  },
  Sp = function () {
    return document.body;
  },
  Ep = function () {
    var t = document.querySelector(Op);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = wp),
        (n.style.display = "flex"),
        (r = Sp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  u1 = function (t) {
    Ep().removeChild(t);
  },
  c1 = function (t) {
    t.parentElement || Ep().appendChild(t);
  },
  xp = function () {
    return document !== void 0;
  },
  l1 = function (t) {
    if (xp()) {
      var r = document.createElement("div");
      return ((r.className = kp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  d1 = function () {
    if (xp()) {
      var t = document.querySelector(Op);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = wp),
          (n.style.display = "flex"),
          (r = Sp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function f1(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return s1(t);
      },
      [t],
    );
  return (
    c1(n),
    _.useEffect(
      function () {
        return function () {
          u1(n);
        };
      },
      [n],
    ),
    Ii.createPortal(r, n)
  );
}
var Cp = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function v1(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = K(n, 2),
    i = a[0],
    o = a[1];
  Cp(
    function () {
      var s = l1(t);
      o(s);
      var c = d1();
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
  var u = k.createElement(_.Suspense, { fallback: null }, r);
  return i ? Ii.createPortal(u, i) : null;
}
var p1 = function (t) {
    var r = _.useState(!1),
      n = K(r, 2),
      a = n[0],
      i = n[1],
      o = _.useState(function () {
        return t === "layoutEffect" ? Cp : _.useEffect;
      }),
      u = K(o, 1),
      s = u[0];
    return (
      s(function () {
        i(!0);
      }, []),
      a
    );
  },
  h1 = "akPortalMount",
  g1 = "akPortalUnmount",
  zd = {
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
  b1 = function (t) {
    return zd.hasOwnProperty(t) ? zd[t] : null;
  },
  _1 = function (t, r) {
    var n = { layer: b1(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Bd(e, t) {
  var r = _1(e, t);
  window.dispatchEvent(r);
}
var y1 = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        Bd(h1, r),
        function () {
          Bd(g1, r);
        }
      );
    },
    [r],
  );
};
function m1(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    i = a === void 0 ? "effect" : a,
    o = p1(i);
  return (
    y1(r),
    zt("platform_design_system_team_portal_logic_r18_fix")
      ? k.createElement(v1, { zIndex: r }, n)
      : o
        ? k.createElement(f1, { zIndex: r }, n)
        : null
  );
}
var ha = new Set(),
  Ra = null;
function Ud() {
  if (!Ra) {
    Ra = Li.bindAll(window, [
      { type: "dragend", listener: ts },
      { type: "pointerdown", listener: ts },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ts();
          };
        })(),
      },
    ]);
    var e = Array.from(ha);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ts() {
  var e;
  ((e = Ra) === null || e === void 0 || e(), (Ra = null));
  var t = Array.from(ha);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function w1() {
  return Li.bindAll(window, [
    { type: "dragstart", listener: Ud },
    { type: "dragenter", listener: Ud },
  ]);
}
var ei = null;
function O1(e) {
  return (
    ei || (ei = w1()),
    ha.add(e),
    e.onRegister({ isDragging: Ra !== null }),
    function () {
      if ((ha.delete(e), ha.size === 0)) {
        var r;
        ((r = ei) === null || r === void 0 || r(), (ei = null));
      }
    }
  );
}
var ga = null;
function la() {
  ga != null && (window.clearTimeout(ga), (ga = null));
}
function qd(e, t) {
  (la(),
    (ga = window.setTimeout(function () {
      ((ga = null), e());
    }, t)));
}
var pt = null;
function k1(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(pt && pt.entry === e);
  }
  function n() {
    r() && (la(), (pt = null));
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
        ((t = "shown"), la());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), la(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(p) {
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
          qd(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var p = !!(pt && pt.isVisible());
    (pt && (la(), pt.entry.hide({ isImmediate: !0 }), pt.entry.done(), (pt = null)),
      (pt = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: p }));
    }
    if (p) {
      h();
      return;
    }
    ((t = "waiting-to-show"), qd(h, e.delay));
  }
  d();
  var f = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: u,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return f;
}
function S1(e, t) {
  var r = vm();
  return t ? "".concat(r(e)) : void 0;
}
var $d = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81u0j _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d7jlr _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  E1 = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: C([$d.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: C([$d.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Rp = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return _.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      _.createElement(
        "div",
        {
          role: "tooltip",
          className: C(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        i,
        d && _.createElement(E1, { shortcut: d }),
      ),
    );
  });
Rp.displayName = "TooltipPrimitive";
var Vd = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Pp = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      i = t.children,
      o = t.truncate,
      u = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      f = t.shortcut;
    return _.createElement(
      Rp,
      {
        ref: r,
        style: n,
        className: C([Vd.base, o && Vd.truncate, a]),
        placement: u,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: f,
      },
      i,
    );
  });
Pp.displayName = "TooltipContainer";
function Gd(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Hd(e, t) {
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
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var x1 = pm.tooltip(),
  Wd = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  C1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  R1 = function (t) {
    return t.split("-")[0];
  };
function P1(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    i = a === void 0 ? "bottom" : a,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? Pp : c,
    d = e.tag,
    f = d === void 0 ? "div" : d,
    p = e.testId,
    h = e.delay,
    v = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? we : g,
    m = e.onHide,
    w = m === void 0 ? we : m,
    O = e.canAppear,
    y = e.hideTooltipOnClick,
    S = y === void 0 ? !1 : y,
    x = e.hideTooltipOnMouseDown,
    j = x === void 0 ? !1 : x,
    D = e.analyticsContext,
    R = e.strategy,
    T = R === void 0 ? "fixed" : R,
    U = e.ignoreTooltipPointerEvents,
    B = U === void 0 ? !1 : U,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? i : n,
    X = Fc(Br({ fn: b, action: "displayed", analyticsData: D }, Wd)),
    N = Fc(Br({ fn: w, action: "hidden", analyticsData: D }, Wd)),
    A = _.useRef(null),
    be = _.useState("hide"),
    oe = K(be, 2),
    ue = oe[0],
    le = oe[1],
    ge = _.useRef(null),
    ce = _.useRef(null),
    $e = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = _.useCallback(function (M) {
      ge.current = M;
    }, []),
    rt = ia(ue),
    pe = ia(X),
    Ve = ia(N),
    Sr = ia(v),
    Pt = ia(O),
    Se = _.useRef(!1),
    Ee = _.useCallback(function (M) {
      ((A.current = M), (Se.current = !1));
    }, []),
    Gt = _.useCallback(
      function () {
        A.current &&
          (Se.current && Ve.current(), (A.current = null), (Se.current = !1), le("hide"));
      },
      [Ve],
    ),
    vt = _.useCallback(
      function () {
        A.current && (A.current.abort(), Se.current && Ve.current(), (A.current = null));
      },
      [Ve],
    );
  _.useEffect(
    function () {
      return function () {
        A.current && vt();
      };
    },
    [vt],
  );
  var nt = _.useRef(!1);
  _.useEffect(function () {
    return O1({
      onRegister: function (re) {
        var At = re.isDragging;
        nt.current = At;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (nt.current = !0));
      },
      onDragEnd: function () {
        nt.current = !1;
      },
    });
  }, []);
  var Ht = _.useCallback(
      function (M) {
        var re;
        if (!nt.current) {
          if ((A.current && !A.current.isActive() && vt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Pt.current && !((re = Pt.current) !== null && re !== void 0 && re.call(Pt)))) {
            var At = {
                source: M,
                delay: Sr.current,
                show: function (Er) {
                  var sn = Er.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(sn ? "show-immediate" : "fade-in"));
                },
                hide: function (Er) {
                  var sn = Er.isImmediate;
                  le(sn ? "hide" : "before-fade-out");
                },
                done: Gt,
              },
              oo = k1(At);
            Ee(oo);
          }
        }
      },
      [Pt, Sr, Gt, Ee, vt, pe],
    ),
    Ge = _.useCallback(
      function () {
        var M;
        (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (bw({ onClose: Ge, isDisabled: ue === "hide" || ue === "fade-out" }),
    _.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var M = Li.bind(window, {
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
  var De = _.useCallback(
      function () {
        j && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    xe = _.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = _.useCallback(
      function (M) {
        if (!(ce.current && M.target === ce.current) && !M.defaultPrevented) {
          M.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: Gd({ left: M.clientX, top: M.clientY }) }
              : { type: "keyboard" };
          Ht(re);
        }
      },
      [n, Ht],
    ),
    Wt = _.useCallback(function (M) {
      (ce.current && M.target === ce.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ua =
      n === "mouse"
        ? function (M) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = Gd({ left: M.clientX, top: M.clientY }));
          }
        : void 0,
    qa = _.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    $a = _.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible") && zt("platform-tooltip-focus-visible-new"))
            return;
        } catch {}
        Ht({ type: "keyboard" });
      },
      [Ht],
    ),
    Va = _.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Ah = _.useCallback(
      function (M) {
        M === "exiting" &&
          rt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [rt],
    ),
    jh = f,
    ao = ue !== "hide" && !!o,
    bu = !J && ao,
    _u = ue !== "hide" && ue !== "fade-out",
    Ih = _.useCallback(function () {
      var M;
      (M = A.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  ww({ isOpen: ao && _u, onClose: Ih });
  var yu = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var At;
        return (At = A.current) === null || At === void 0 ? void 0 : At.mousePosition;
      }
      return ge.current || void 0;
    },
    on = S1("tooltip", bu),
    io = {
      onMouseOver: at,
      onMouseOut: Wt,
      onMouseMove: Ua,
      onMouseDown: De,
      onClick: xe,
      onFocus: $a,
      onBlur: Va,
    };
  p && (io["data-testid"] = "".concat(p, "--container"));
  var mu = typeof t == "function";
  _.useEffect(
    function () {
      if (!mu) {
        var M = ge.current;
        if (!(!M || !on))
          return (
            M.setAttribute("aria-describedby", on),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [mu, on],
  );
  var wu = bu
    ? k.createElement(
        "span",
        { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: on },
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
          t(Br(Br({}, io), {}, { "aria-describedby": on, ref: Oe })),
          wu,
        )
      : k.createElement(jh, te({}, io, { ref: $e, role: "presentation" }), t, wu),
    ao
      ? k.createElement(
          m1,
          { zIndex: x1 },
          k.createElement(o1, { placement: $, referenceElement: yu(), strategy: T }, function (M) {
            var re = M.ref,
              At = M.style,
              oo = M.update,
              so = M.placement,
              Er = n === "mouse" ? void 0 : C1[R1(so)];
            return k.createElement(
              dp,
              { appear: !0 },
              _u &&
                k.createElement(
                  Fw,
                  {
                    distance: "constant",
                    entranceDirection: Er,
                    exitDirection: Er,
                    onFinish: Ah,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (sn) {
                    var Dh = sn.className;
                    return k.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(Dh),
                        style: Br(Br({}, At), B && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: yu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: Wt,
                        onMouseOver: qa,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: oo }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var A1 = [
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
  sa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Kd = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syaz1gjq _k48pmoej" },
  Ap = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var i = t.innerRef,
      o = t.isSortable,
      u = t.sortOrder,
      s = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      f = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      h = p === void 0 ? "Sort descending" : p,
      v = t.buttonAriaRoleDescription,
      g = v === void 0 ? "Sort button" : v,
      b = t.isIconOnlyHeader,
      m = ae(t, A1),
      w = _.useState(!1),
      O = K(w, 2),
      y = O[0],
      S = O[1],
      x = _.useState(!1),
      j = K(x, 2),
      D = j[0],
      R = j[1],
      T = c === l || u !== void 0,
      U = y || T || D,
      B = U && b,
      V = !b || U || (b && !D),
      J = _.useCallback(
        function () {
          R?.(!0);
        },
        [R],
      ),
      G = _.useCallback(
        function () {
          R?.(!1);
        },
        [R],
      ),
      $ = _.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = _.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = k.createElement(
        Fi,
        { xcss: Kd.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: J, onBlur: G },
        k.createElement(
          P1,
          { content: u === pr ? f : h },
          k.createElement(
            tm,
            { onClick: s, xcss: sa.buttonWrapper, "aria-roledescription": g },
            k.createElement(
              mi,
              { xcss: B ? sa.hideIconHeaderWrapper : sa.visibleHeaderWrapper },
              k.createElement("span", { className: C([Kd.text]) }, r),
            ),
            V &&
              k.createElement(
                mi,
                { xcss: U ? sa.sortIconVisibleWrapper : sa.sortIconHiddenWrapper },
                u === pr
                  ? k.createElement(hw, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : k.createElement(fw, {
                      label: "",
                      color: "var(--ds-text-subtle, #44546F)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return k.createElement(
      sw,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof i != "string" ? i : null,
        },
        m,
        { isSortable: o, sortOrder: u },
      ),
      o ? N : r,
    );
  },
  j1 = ["isRanking", "refHeight", "refWidth"];
function I1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, jp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function jp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jp = function () {
    return !!e;
  })();
}
var D1 = (function (e) {
    function t() {
      return (fe(this, t), I1(this, t, arguments));
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var i = n.refWidth,
              o = ae(n, j1),
              u = Ug(a, i);
            return k.createElement(Ap, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(k.Component),
  T1 = cw(D1),
  M1 = ["cells"],
  F1 = [
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
function L1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Ip() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var N1 = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = L1(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            hi(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              hi(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.head,
              o = a.sortKey,
              u = a.sortOrder,
              s = a.isFixedSize,
              c = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              f = a.testId,
              p = this.state.activeSortButtonId;
            if (!i) return null;
            var h = d ? T1 : Ap,
              v = i.cells,
              g = ae(i, M1);
            return k.createElement(
              ow,
              te({}, g, { isRanking: l, testId: f && "".concat(f, "--head") }),
              k.createElement(
                "tr",
                null,
                v.map(function (b, m) {
                  var w = b.ascendingSortTooltip,
                    O = b.buttonAriaRoleDescription,
                    y = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    D = b.isSortable,
                    R = b.key,
                    T = b.shouldTruncate,
                    U = b.testId,
                    B = b.width,
                    V = ae(b, F1),
                    J = "head-cell-".concat(m),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), D && c(b)());
                    };
                  return k.createElement(
                    h,
                    te(
                      {
                        colSpan: y,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: j,
                        isSortable: !!D,
                        isRanking: l,
                        key: R || m,
                        headCellId: J,
                        activeSortButtonId: p,
                        onClick: G,
                        testId: U || f,
                        shouldTruncate: T,
                        sortOrder: R === o ? u : void 0,
                        width: B,
                        ascendingSortTooltip: w,
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
  })(k.Component),
  z1 = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function B1(e) {
  switch (e) {
    case _i:
      return pr;
    case pr:
      return _i;
    default:
      return e;
  }
}
var U1 = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      i = t.rows,
      o = t.sortKey,
      u = t.sortOrder,
      s = t.loadingLabel,
      c = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      f = t.label,
      p = t.isLoading,
      h = p === void 0 ? !1 : p,
      v = t.isFixedSize,
      g = v === void 0 ? !1 : v,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      w = t.onSetPage,
      O = w === void 0 ? we : w,
      y = t.onSort,
      S = y === void 0 ? we : y,
      x = t.page,
      j = x === void 0 ? 1 : x,
      D = t.emptyView,
      R = t.isRankable,
      T = R === void 0 ? !1 : R,
      U = t.isRankingDisabled,
      B = U === void 0 ? !1 : U,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      A =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = _.useState(!1),
      oe = K(be, 2),
      ue = oe[0],
      le = oe[1],
      ge = _.useRef(null),
      ce = ma({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      $e = ma({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    _.useEffect(
      function () {
        (hi(o, n), Bg(n));
      },
      [o, n],
    );
    var Oe = function (xe) {
        return function () {
          var at = xe.key;
          if (at) {
            if (ce && T && at === o && u === _i) {
              ce({ key: null, sortOrder: null, item: xe });
              return;
            }
            var Wt = at !== o ? pr : B1(u);
            ce && ce({ key: at, item: xe, sortOrder: Wt });
          }
        };
      },
      rt = function (xe, at) {
        O(xe, at);
      },
      pe = function (xe) {
        (le(!0), J(xe));
      },
      Ve = function (xe) {
        (le(!1), $e(xe));
      },
      Sr = function () {
        return X || (lv(i || [], j, m).length > 2 ? yi : ub);
      },
      Pt = function () {
        return h ? k.createElement(pb, { testId: l }) : D && k.createElement(hb, { testId: l }, D);
      },
      Se = i && i.length,
      Ee,
      Gt = !1;
    (d && Number.isInteger(d) && m && Se && Se <= d
      ? ((Ee = Math.ceil(d / m)), (Gt = !0))
      : (Ee = Se && m ? Math.ceil(Se / m) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var vt = j > Ee ? Ee : j,
      nt = !!Se,
      Ht = Sr(),
      Ge = Pt();
    return k.createElement(
      k.Fragment,
      null,
      k.createElement(
        kv,
        {
          isLoading: h && nt,
          spinnerSize: Ht,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        k.createElement(
          db,
          { isFixedSize: g, "aria-label": f, hasDataRow: nt, testId: l, isLoading: h },
          !!r && k.createElement(fb, null, r),
          n &&
            k.createElement(N1, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          nt &&
            k.createElement($1, {
              ref: ge,
              highlightedRowIndex: a,
              rows: i,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: m,
              page: vt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Gt,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: Ve,
              isRankingDisabled: B || h || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : k.createElement(
            vb,
            { testId: l },
            k.createElement(nw, {
              value: vt,
              onChange: rt,
              total: Ee,
              i18n: A,
              isDisabled: h,
              testId: l,
            }),
          ),
      !nt &&
        Ge &&
        k.createElement(wv, { isLoading: h, spinnerSize: yi, testId: l, loadingLabel: s }, Ge),
    );
  },
  q1 = _.lazy(function () {
    return Gg(
      () => import("./body-S9RKfdBy.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
  }),
  $1 = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      i = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ae(t, z1),
      l = a && !c.sortKey,
      d = _.useState(!1),
      f = K(d, 2),
      p = f[0],
      h = f[1];
    _.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var v = k.createElement(Ab, te({ ref: r }, c));
    return l && p
      ? k.createElement(
          Ib,
          { fallback: v },
          k.createElement(
            _.Suspense,
            { fallback: v },
            k.createElement(
              q1,
              te({ ref: r }, c, {
                isRanking: i,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : v;
  });
function V1(e, t, r) {
  return (
    (t = Y(t)),
    Be(e, Dp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Dp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dp = function () {
    return !!e;
  })();
}
var cu = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return (
      (r = V1(this, t, [].concat(a))),
      E(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      E(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      E(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      E(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      E(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var f = qg(o, c, l, d);
        (r.setState({ rows: f }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Ue(t, e),
    ve(t, [
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
            u = n.rows,
            s = this.props,
            c = s.caption,
            l = s.emptyView,
            d = s.head,
            f = s.highlightedRowIndex,
            p = s.loadingSpinnerSize,
            h = s.isLoading,
            v = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            m = s.isRankingDisabled,
            w = s.rowsPerPage,
            O = s.paginationi18n,
            y = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            j = s.label;
          return k.createElement(U1, {
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
            rows: u,
            rowsPerPage: w,
            sortKey: i,
            sortOrder: o,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: S,
            testId: x,
            label: j,
          });
        },
      },
    ])
  );
})(k.Component);
E(cu, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const G1 = (e, t, r, n) => {
    const a = Object.keys(n).map((i) => ({ key: i, content: i, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  Tp = (e, t, r, n) => ({ cells: G1(e, t, r, n) });
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
var H1 = {};
function qi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : H1;
}
var Mp = Object.assign,
  ki = Object.getOwnPropertyDescriptor,
  wt = Object.defineProperty,
  $i = Object.prototype,
  Rs = [];
Object.freeze(Rs);
var Fp = {};
Object.freeze(Fp);
var W1 = typeof Proxy < "u",
  K1 = Object.toString();
function Lp() {
  W1 || H("Proxy not available");
}
function Np(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var qr = function () {};
function ct(e) {
  return typeof e == "function";
}
function gr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Vi(e) {
  return e !== null && typeof e == "object";
}
function er(e) {
  if (!Vi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === K1;
}
function zp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Gi(e, t, r) {
  wt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Bp(e, t, r) {
  wt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Vi(n) && n[r] === !0;
    }
  );
}
function tn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Y1(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ft(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Up = typeof Object.getOwnPropertySymbols < "u";
function J1(e) {
  var t = Object.keys(e);
  if (!Up) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return $i.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Hi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Up
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function qp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Bt(e, t) {
  return $i.hasOwnProperty.call(e, t);
}
var X1 =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Hi(t).forEach(function (n) {
        r[n] = ki(t, n);
      }),
      r
    );
  };
function Me(e, t) {
  return !!(e & t);
}
function Fe(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Yd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Z1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ek(n.key), n));
  }
}
function rn(e, t, r) {
  return (t && Z1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function $r(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = tk(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    br.apply(null, arguments)
  );
}
function $p(e, t) {
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
function Q1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ek(e) {
  var t = Q1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tk(e, t) {
  if (e) {
    if (typeof e == "string") return Yd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Yd(e, t)
          : void 0
    );
  }
}
var _t = Symbol("mobx-stored-annotations");
function Ot(e) {
  function t(r, n) {
    if (Fa(n)) return e.decorate_20223_(r, n);
    Ma(r, n, e);
  }
  return Object.assign(t, e);
}
function Ma(e, t, r) {
  (Bt(e, _t) || Gi(e, _t, br({}, e[_t])), uk(r) || (e[_t][t] = r));
}
function rk(e) {
  return (Bt(e, _t) || Gi(e, _t, br({}, e[_t])), e[_t]);
}
function Fa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
  nr = (function () {
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
        return ih(this);
      }),
      (t.reportChanged = function () {
        (Xe(), oh(this), Ze());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      rn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var lu = mr("Atom", nr);
function Vp(e, t, r) {
  (t === void 0 && (t = qr), r === void 0 && (r = qr));
  var n = new nr(e);
  return (t !== qr && vS(n, t), r !== qr && dh(n, r), n);
}
function nk(e, t) {
  return kh(e, t);
}
function ak(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Si = { structural: nk, default: ak };
function _r(e, t, r) {
  return hh(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : er(e)
        ? se.object(e, void 0, { name: r })
        : tn(e)
          ? se.map(e, { name: r })
          : Ft(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Zr(e) && !Aa(e)
              ? zp(e)
                ? Qr(e)
                : Pa(r, e)
              : e;
}
function ik(e, t, r) {
  if (e == null || to(e) || eo(e) || Or(e) || bt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (er(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (tn(e)) return se.map(e, { name: r, deep: !1 });
  if (Ft(e)) return se.set(e, { name: r, deep: !1 });
}
function Wi(e) {
  return e;
}
function ok(e, t) {
  return kh(e, t) ? t : e;
}
var sk = "override";
function uk(e) {
  return e.annotationType_ === sk;
}
function La(e, t) {
  return { annotationType_: e, options_: t, make_: ck, extend_: lk, decorate_20223_: dk };
}
function ck(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Zr(r.value)) return 1;
  var i = Gp(e, this, t, r, !1);
  return (wt(n, t, i), 2);
}
function lk(e, t, r, n) {
  var a = Gp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function dk(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    i = this,
    o = function (c) {
      var l, d, f, p;
      return yr(
        (l = (d = i.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (f = (p = i.options_) == null ? void 0 : p.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        Zr(l) || (l = o(l)),
        (c = i.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Zr(e) || (e = o(e)),
      (u = this.options_) != null &&
        u.bound &&
        a(function () {
          var s = this,
            c = s[n].bind(s);
          ((c.isMobxAction = !0), (s[n] = c));
        }),
      e
    );
  }
  H(
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
function fk(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Gp(e, t, r, n, a) {
  var i, o, u, s, c, l, d;
  (a === void 0 && (a = P.safeDescriptors), fk(e, t, r, n));
  var f = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    f = f.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: yr(
      (o = (u = t.options_) == null ? void 0 : u.name) != null ? o : r.toString(),
      f,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Hp(e, t) {
  return { annotationType_: e, options_: t, make_: vk, extend_: pk, decorate_20223_: hk };
}
function vk(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Bt(e.target_, t) || !Aa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Aa(r.value)) return 1;
  var i = Wp(e, this, t, r, !1, !1);
  return (wt(n, t, i), 2);
}
function pk(e, t, r, n) {
  var a,
    i = Wp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function hk(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Aa(e) || (e = Qr(e)),
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
function gk(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Wp(e, t, r, n, a, i) {
  (i === void 0 && (i = P.safeDescriptors), gk(e, t, r, n));
  var o = n.value;
  if ((Aa(o) || (o = Qr(o)), a)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: i ? e.isPlainObject_ : !0, enumerable: !1, writable: !i };
}
function du(e, t) {
  return { annotationType_: e, options_: t, make_: bk, extend_: _k, decorate_20223_: yk };
}
function bk(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function _k(e, t, r, n) {
  return (
    mk(e, this, t, r),
    e.defineComputedProperty_(t, br({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function yk(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var i = nn(this)[L],
        o = br({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), i.values_.set(n, new lt(o)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function mk(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ki(e, t) {
  return { annotationType_: e, options_: t, make_: wk, extend_: Ok, decorate_20223_: kk };
}
function wk(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ok(e, t, r, n) {
  var a, i;
  return (
    Sk(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : _r,
      n,
    )
  );
}
function kk(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    i = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = nn(u)[L],
      f = new vr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : _r,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, f), i.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (i.has(this) || o(this, e.get.call(this)), this[L].getObservablePropValue_(a));
      },
      set: function (s) {
        return (i.has(this) || o(this, s), this[L].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (i.has(this) || o(this, s), s);
      },
    };
}
function Sk(e, t, r, n) {
  t.annotationType_;
}
var Ek = "true",
  xk = Kp();
function Kp(e) {
  return { annotationType_: Ek, options_: e, make_: Ck, extend_: Rk, decorate_20223_: Pk };
}
function Ck(e, t, r, n) {
  var a, i;
  if (r.get) return Yi.make_(e, t, r, n);
  if (r.set) {
    var o = Zr(r.set) ? r.set : yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (wt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (zp(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Qr.bound : Qr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Pa.bound : Pa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Rk(e, t, r, n) {
  var a, i;
  if (r.get) return Yi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: P.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  return u.extend_(e, t, r, n);
}
function Pk(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Ak = "observable",
  jk = "observable.ref",
  Ik = "observable.shallow",
  Dk = "observable.struct",
  Yp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Yp);
function ti(e) {
  return e || Yp;
}
var As = Ki(Ak),
  Tk = Ki(jk, { enhancer: Wi }),
  Mk = Ki(Ik, { enhancer: ik }),
  Fk = Ki(Dk, { enhancer: ok }),
  Jp = Ot(As);
function ri(e) {
  return e.deep === !0 ? _r : e.deep === !1 ? Wi : Nk(e.defaultDecorator);
}
function Lk(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Kp(e)) : void 0;
}
function Nk(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : _r;
}
function Xp(e, t, r) {
  if (Fa(t)) return As.decorate_20223_(e, t);
  if (gr(t)) {
    Ma(e, t, As);
    return;
  }
  return hh(e)
    ? e
    : er(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : tn(e)
          ? se.map(e, t)
          : Ft(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
Mp(Xp, Jp);
var zk = {
    box: function (t, r) {
      var n = ti(r);
      return new vr(t, ri(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ti(r);
      return (P.useProxies === !1 || n.proxy === !1 ? LS : CS)(t, ri(n), n.name);
    },
    map: function (t, r) {
      var n = ti(r);
      return new bh(t, ri(n), n.name);
    },
    set: function (t, r) {
      var n = ti(r);
      return new _h(t, ri(n), n.name);
    },
    object: function (t, r, n) {
      return kr(function () {
        return bS(P.useProxies === !1 || n?.proxy === !1 ? nn({}, n) : SS({}, n), t, r);
      });
    },
    ref: Ot(Tk),
    shallow: Ot(Mk),
    deep: Jp,
    struct: Ot(Fk),
  },
  se = Mp(Xp, zk),
  Zp = "computed",
  Bk = "computed.struct",
  js = du(Zp),
  Uk = du(Bk, { equals: Si.structural }),
  Yi = function (t, r) {
    if (Fa(r)) return js.decorate_20223_(t, r);
    if (gr(r)) return Ma(t, r, js);
    if (er(t)) return Ot(du(Zp, t));
    var n = er(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new lt(n));
  };
Object.assign(Yi, js);
Yi.struct = Ot(Uk);
var Jd,
  Xd,
  Ei = 0,
  qk = 1,
  $k =
    (Jd = (Xd = ki(function () {}, "name")) == null ? void 0 : Xd.configurable) != null ? Jd : !1,
  Zd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Vk(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    $k && ((Zd.value = e), wt(a, "name", Zd)),
    a
  );
}
function Vk(e, t, r, n, a) {
  var i = Gk(e, t);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw ((i.error_ = o), o);
  } finally {
    Hk(i);
  }
}
function Gk(e, t, r, n) {
  var a = !1,
    i = 0,
    o = P.trackingDerivation,
    u = !t || !o;
  Xe();
  var s = P.allowStateChanges;
  u && (wr(), (s = Ji(!0)));
  var c = fu(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: a,
      startTime_: i,
      actionId_: qk++,
      parentActionId_: Ei,
    };
  return ((Ei = l.actionId_), l);
}
function Hk(e) {
  (Ei !== e.actionId_ && H(30),
    (Ei = e.parentActionId_),
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    Xi(e.prevAllowStateChanges_),
    ba(e.prevAllowStateReads_),
    Ze(),
    e.runAsAction_ && Ut(e.prevDerivation_),
    (P.suppressReactionErrors = !1));
}
function Wk(e, t) {
  var r = Ji(e);
  try {
    return t();
  } finally {
    Xi(r);
  }
}
function Ji(e) {
  var t = P.allowStateChanges;
  return ((P.allowStateChanges = e), t);
}
function Xi(e) {
  P.allowStateChanges = e;
}
var vr = (function (e) {
    function t(n, a, i, o, u) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        u === void 0 && (u = Si.default),
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
        (s.equals = u),
        (s.value_ = a(n, void 0, i)),
        s
      );
    }
    $p(t, e);
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
          var i = Je(this, { object: this, type: kt, newValue: a });
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
          st(this) && ut(this, { type: kt, object: this, newValue: a, oldValue: i }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Na(this, a);
      }),
      (r.observe_ = function (a, i) {
        return (
          i &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: kt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          za(this, a)
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
        return qp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(nr),
  lt = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Ci(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = xi.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Si.structural : Si.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Zk(this);
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
          Is(this) &&
            (this.warnAboutUntrackedRead_(), Xe(), (this.value_ = this.computeValue_(!1)), Ze());
        else if ((ih(this), Is(this))) {
          var n = P.trackingContext;
          (this.keepAlive_ && !n && (P.trackingContext = this),
            this.trackAndCompute() && Xk(this),
            (P.trackingContext = n));
        }
        var a = this.value_;
        if (li(a)) throw a.cause;
        return a;
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
          a = this.dependenciesState_ === W.NOT_TRACKING_,
          i = this.computeValue_(!0),
          o = a || li(n) || li(i) || !this.equals_(n, i);
        return (o && (this.value_ = i), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Ji(!1),
          i;
        if (n) i = Qp(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0) i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (o) {
            i = new Ci(o);
          }
        return (Xi(a), (this.isComputing = !1), i);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ds(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var i = this,
          o = !0,
          u = void 0;
        return uS(function () {
          var s = i.get();
          if (!o || a) {
            var c = wr();
            (n({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: kt,
              object: i,
              newValue: s,
              oldValue: u,
            }),
              Ut(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return qp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      rn(e, [
        {
          key: "isComputing",
          get: function () {
            return Me(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Me(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Zi = mr("ComputedValue", lt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var xi;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(xi || (xi = {}));
var Ci = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function li(e) {
  return e instanceof Ci;
}
function Is(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = fu(!0), r = wr(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Zi(o)) {
          if (P.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Ut(r), ba(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Ut(r), ba(t), !0);
        }
      }
      return (th(e), Ut(r), ba(t), !1);
    }
  }
}
function Qp(e, t, r) {
  var n = fu(!0);
  (th(e),
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
      i = new Ci(o);
    }
  return (P.inBatch--, (P.trackingDerivation = a), Kk(e), ba(n), i);
}
function Kk(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = W.UP_TO_DATE_,
      a = 0,
      i = e.unboundDepsCount_,
      o = 0;
    o < i;
    o++
  ) {
    var u = r[o];
    (u.diffValue === 0 && ((u.diffValue = 1), a !== o && (r[a] = u), a++),
      u.dependenciesState_ > n && (n = u.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, i = t.length; i--; ) {
    var s = t[i];
    (s.diffValue === 0 && nh(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var c = r[a];
    c.diffValue === 1 && ((c.diffValue = 0), Jk(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ds(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) nh(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function eh(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Ut(t);
  }
}
function wr() {
  var e = P.trackingDerivation;
  return ((P.trackingDerivation = null), e);
}
function Ut(e) {
  P.trackingDerivation = e;
}
function fu(e) {
  var t = P.allowStateReads;
  return ((P.allowStateReads = e), t);
}
function ba(e) {
  P.allowStateReads = e;
}
function th(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var di = function () {
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
  fi = !0,
  rh = !1,
  P = (function () {
    var e = qi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (fi = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new di().version && (fi = !1),
      fi
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new di()))
        : (setTimeout(function () {
            rh || H(35);
          }, 1),
          new di())
    );
  })();
function Yk() {
  if (((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36), (rh = !0), fi)) {
    var e = qi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (P = new di()));
  }
}
function Jk(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function nh(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && ah(e));
}
function ah(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), P.pendingUnobservations.push(e));
}
function Xe() {
  P.inBatch++;
}
function Ze() {
  if (--P.inBatch === 0) {
    sh();
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
function ih(e) {
  var t = P.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && P.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && P.inBatch > 0 && ah(e), !1);
}
function oh(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Xk(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function Zk(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = W.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = xi.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), P.pendingReactions.push(this), sh());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Xe(), (this.isScheduled = !1));
        var n = P.trackingContext;
        if (((P.trackingContext = this), Is(this))) {
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
        var i = Qp(this, n, void 0);
        ((P.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ds(this),
          li(i) && this.reportExceptionInDerivation_(i.cause),
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Xe(), Ds(this), Ze()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        i = function o() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", i),
        (i[L] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (i[Symbol.dispose] = i),
        i
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    rn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Me(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Me(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Me(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Me(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Qk = 100,
  Ts = function (t) {
    return t();
  };
function sh() {
  P.inBatch > 0 || P.isRunningReactions || Ts(eS);
}
function eS() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Qk && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var Ri = mr("Reaction", xt);
function tS(e) {
  var t = Ts;
  Ts = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function _a() {
  return !1;
}
function rS(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var uh = "action",
  nS = "action.bound",
  ch = "autoAction",
  aS = "autoAction.bound",
  iS = "<unnamed action>",
  Ms = La(uh),
  oS = La(nS, { bound: !0 }),
  Fs = La(ch, { autoAction: !0 }),
  sS = La(aS, { autoAction: !0, bound: !0 });
function lh(e) {
  var t = function (n, a) {
    if (ct(n)) return yr(n.name || iS, n, e);
    if (ct(a)) return yr(n, a, e);
    if (Fa(a)) return (e ? Fs : Ms).decorate_20223_(n, a);
    if (gr(a)) return Ma(n, a, e ? Fs : Ms);
    if (gr(n)) return Ot(La(e ? ch : uh, { name: n, autoAction: e }));
  };
  return t;
}
var ke = lh(!1);
Object.assign(ke, Ms);
var Pa = lh(!0);
Object.assign(Pa, Fs);
ke.bound = Ot(oS);
Pa.bound = Ot(sS);
function Zr(e) {
  return ct(e) && e.isMobxAction === !0;
}
function uS(e, t) {
  var r, n, a, i;
  t === void 0 && (t = Fp);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new xt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = lS(t),
      l = !1;
    s = new xt(
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
    ((a = t) != null && (a = a.signal) != null && a.aborted) || s.schedule_(),
    s.getDisposer_((i = t) == null ? void 0 : i.signal)
  );
}
var cS = function (t) {
  return t();
};
function lS(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : cS;
}
var dS = "onBO",
  fS = "onBUO";
function vS(e, t, r) {
  return fh(dS, e, t, r);
}
function dh(e, t, r) {
  return fh(fS, e, t, r);
}
function fh(e, t, r, n) {
  var a = ji(t),
    i = ct(n) ? n : r,
    o = e + "L";
  return (
    a[o] ? a[o].add(i) : (a[o] = new Set([i])),
    function () {
      var u = a[o];
      u && (u.delete(i), u.size === 0 && delete a[o]);
    }
  );
}
var pS = "never",
  ni = "always",
  hS = "observed";
function gS(e) {
  e.isolateGlobalState === !0 && Yk();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (P.useProxies = t === ni ? !0 : t === pS ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ni ? ni : r === hS;
    ((P.enforceActions = n), (P.allowStateChanges = !(n === !0 || n === ni)));
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
    e.reactionScheduler && tS(e.reactionScheduler));
}
function bS(e, t, r, n) {
  var a = X1(t);
  return (
    kr(function () {
      var i = nn(e, n)[L];
      Hi(a).forEach(function (o) {
        i.extend_(o, a[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function _S(e, t) {
  return vh(ji(e, t));
}
function vh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = yS(e.observing_).map(vh)),
    t
  );
}
function yS(e) {
  return Array.from(new Set(e));
}
var mS = 0;
function ph() {
  this.message = "FLOW_CANCELLED";
}
ph.prototype = Object.create(Error.prototype);
var rs = Hp("flow"),
  wS = Hp("flow.bound", { bound: !0 }),
  Qr = Object.assign(function (t, r) {
    if (Fa(r)) return rs.decorate_20223_(t, r);
    if (gr(r)) return Ma(t, r, rs);
    var n = t,
      a = n.name || "<unnamed flow>",
      i = function () {
        var u = this,
          s = arguments,
          c = ++mS,
          l = ke(a + " - runid: " + c + " - init", n).apply(u, s),
          d,
          f = void 0,
          p = new Promise(function (h, v) {
            var g = 0;
            d = v;
            function b(O) {
              f = void 0;
              var y;
              try {
                y = ke(a + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function m(O) {
              f = void 0;
              var y;
              try {
                y = ke(a + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return v(S);
              }
              w(y);
            }
            function w(O) {
              if (ct(O?.then)) {
                O.then(w, v);
                return;
              }
              return O.done ? h(O.value) : ((f = Promise.resolve(O.value)), f.then(b, m));
            }
            b(void 0);
          });
        return (
          (p.cancel = ke(a + " - runid: " + c + " - cancel", function () {
            try {
              f && Qd(f);
              var h = l.return(void 0),
                v = Promise.resolve(h.value);
              (v.then(qr, qr), Qd(v), d(new ph()));
            } catch (g) {
              d(g);
            }
          })),
          p
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, rs);
Qr.bound = Ot(wS);
function Qd(e) {
  ct(e.cancel) && e.cancel();
}
function Aa(e) {
  return e?.isMobXFlow === !0;
}
function OS(e, t) {
  return e ? to(e) || !!e[L] || lu(e) || Ri(e) || Zi(e) : !1;
}
function hh(e) {
  return OS(e);
}
function Lt(e, t) {
  (t === void 0 && (t = void 0), Xe());
  try {
    return e.apply(t);
  } finally {
    Ze();
  }
}
function Ur(e) {
  return e[L];
}
var kS = {
  has: function (t, r) {
    return Ur(t).has_(r);
  },
  get: function (t, r) {
    return Ur(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return gr(r) ? ((a = Ur(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return gr(r) ? ((n = Ur(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Ur(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Ur(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function SS(e, t) {
  var r, n;
  return (
    Lp(),
    (e = nn(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, kS))
  );
}
function Ye(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Na(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Np(function () {
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
      a < i && ((t = n[a](t)), t && !t.type && H(14), !!t);
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
function za(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Np(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = wr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++) n[a](t);
    Ut(r);
  }
}
function Qi(e, t, r) {
  return (
    kr(function () {
      var n,
        a = nn(e, r)[L];
      ((n = t) != null || (t = rk(e)),
        Hi(t).forEach(function (i) {
          return a.make_(i, t[i]);
        }));
    }),
    e
  );
}
var ef = "splice",
  kt = "update",
  ES = 1e4,
  xS = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Bt(Pi, r)
              ? Pi[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[L];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      H(15);
    },
  },
  vu = (function () {
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
        return Na(this, n);
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
          za(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && H("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var i = new Array(n - a), o = 0; o < n - a; o++) i[o] = void 0;
            this.spliceWithArray_(a, 0, i);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && H(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Oh(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, i) {
        var o = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > u ? (n = u) : n < 0 && (n = Math.max(0, u + n)),
          arguments.length === 1
            ? (a = u - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, u - n))),
          i === void 0 && (i = Rs),
          Ye(this))
        ) {
          var s = Je(this, { object: this.proxy_, type: ef, index: n, removedCount: a, added: i });
          if (!s) return Rs;
          ((a = s.removedCount), (i = s.added));
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
          this.updateArrayLength_(u, c);
        }
        var l = this.spliceItemsIntoValues_(n, a, i);
        return (
          (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, i) {
        if (i.length < ES) {
          var o;
          return (o = this.values_).splice.apply(o, [n, a].concat(i));
        } else {
          var u = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += i.length - a;
          for (var c = 0; c < i.length; c++) this.values_[n + c] = i[c];
          for (var l = 0; l < s.length; l++) this.values_[n + i.length + l] = s[l];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, i) {
        var o = !this.owned_ && _a(),
          u = st(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: kt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: i,
                }
              : null;
        (this.atom_.reportChanged(), u && ut(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, i) {
        var o = !this.owned_ && _a(),
          u = st(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: ef,
                  index: n,
                  removed: i,
                  added: a,
                  removedCount: i.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), u && ut(this, s));
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
        if ((this.legacyMode_ && n > i.length && H(17, n, i.length), n < i.length)) {
          this.atom_;
          var o = i[n];
          if (Ye(this)) {
            var u = Je(this, { type: kt, object: this.proxy_, index: n, newValue: a });
            if (!u) return;
            a = u.newValue;
          }
          a = this.enhancer_(a, o);
          var s = a !== o;
          s && ((i[n] = a), this.notifyArrayChildUpdate_(n, a, o));
        } else {
          for (var c = new Array(n + 1 - i.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = a), this.spliceWithArray_(i.length, 0, c));
        }
      }),
      e
    );
  })();
function CS(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Lp(),
    kr(function () {
      var a = new vu(r, t, n, !1);
      Bp(a.values_, L, a);
      var i = new Proxy(a.values_, xS);
      return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
    })
  );
}
var Pi = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[L];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[L];
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
    return this[L].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[L].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
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
    var r = this[L],
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
ie("every", ft);
ie("filter", ft);
ie("find", ft);
ie("findIndex", ft);
ie("findLast", ft);
ie("findLastIndex", ft);
ie("flatMap", ft);
ie("forEach", ft);
ie("map", ft);
ie("some", ft);
ie("toReversed", ft);
ie("reduce", gh);
ie("reduceRight", gh);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Pi[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ft(e) {
  return function (t, r) {
    var n = this,
      a = this[L];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function gh(e) {
  return function () {
    var t = this,
      r = this[L];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (i, o, u) {
        return a(i, o, u, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var RS = mr("ObservableArrayAdministration", vu);
function eo(e) {
  return Vi(e) && RS(e[L]);
}
var PS = {},
  Zt = "add",
  Ai = "delete",
  bh = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = PS),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ct(Map) || H(18),
        kr(function () {
          ((i.keysAtom_ = Vp("ObservableMap.keys()")),
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
          var o = (i = new vr(this.has_(n), Wi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            dh(o, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return i.get();
      }),
      (t.set = function (n, a) {
        var i = this.has_(n);
        if (Ye(this)) {
          var o = Je(this, { type: i ? kt : Zt, object: this, newValue: a, name: n });
          if (!o) return this;
          a = o.newValue;
        }
        return (i ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ye(this))) {
          var i = Je(this, { type: Ai, object: this, name: n });
          if (!i) return !1;
        }
        if (this.has_(n)) {
          var o = _a(),
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ai,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Lt(function () {
              var c;
              (a.keysAtom_.reportChanged(), (c = a.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            u && ut(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var i = this.data_.get(n);
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var o = _a(),
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: kt,
                    object: this,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), u && ut(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var i = this;
        (this.keysAtom_,
          Lt(function () {
            var c,
              l = new vr(a, i.enhancer_, "ObservableMap.key", !1);
            (i.data_.set(n, l),
              (a = l.value_),
              (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0),
              i.keysAtom_.reportChanged());
          }));
        var o = _a(),
          u = st(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Zt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        u && ut(this, s);
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
        return tf({
          next: function () {
            var o = a.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return tf({
          next: function () {
            var o = a.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var i = $r(this), o; !(o = i()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(a, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Or(n) && (n = new Map(n)),
          Lt(function () {
            er(n)
              ? J1(n).forEach(function (i) {
                  return a.set(i, n[i]);
                })
              : Array.isArray(n)
                ? n.forEach(function (i) {
                    var o = i[0],
                      u = i[1];
                    return a.set(o, u);
                  })
                : tn(n)
                  ? (Y1(n) || H(19, n),
                    n.forEach(function (i, o) {
                      return a.set(o, i);
                    }))
                  : n != null && H(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Lt(function () {
          eh(function () {
            for (var a = $r(n.keys()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Lt(function () {
            for (
              var i = AS(n), o = new Map(), u = !1, s = $r(a.data_.keys()), c;
              !(c = s()).done;

            ) {
              var l = c.value;
              if (!i.has(l)) {
                var d = a.delete(l);
                if (d) u = !0;
                else {
                  var f = a.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var p = $r(i.entries()), h; !(h = p()).done; ) {
              var v = h.value,
                g = v[0],
                b = v[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var w = a.data_.get(g);
                (o.set(g, w), m || (u = !0));
              }
            }
            if (!u)
              if (a.data_.size !== o.size) a.keysAtom_.reportChanged();
              else
                for (var O = a.data_.keys(), y = o.keys(), S = O.next(), x = y.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = y.next()));
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
        return za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
      }),
      rn(e, [
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
  Or = mr("ObservableMap", bh);
function tf(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), hu(e));
}
function AS(e) {
  if (tn(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (er(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var jS = {},
  _h = (function () {
    function e(r, n, a) {
      var i = this;
      (n === void 0 && (n = _r),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = jS),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ct(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, a);
        }),
        kr(function () {
          ((i.atom_ = Vp(i.name_)), r && i.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Lt(function () {
          eh(function () {
            for (var a = $r(n.data_.values()), i; !(i = a()).done; ) {
              var o = i.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var i = $r(this), o; !(o = i()).done; ) {
          var u = o.value;
          n.call(a, u, u, this);
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
          Lt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var o = !1,
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Zt,
                    object: this,
                    newValue: n,
                  }
                : null;
          u && ut(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ye(this)) {
          var i = Je(this, { type: Ai, object: this, oldValue: n });
          if (!i) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Ai,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Lt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            u && ut(this, s),
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
        return rf({
          next: function () {
            var i = n.next(),
              o = i.value,
              u = i.done;
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
          a = this.data_.values();
        return rf({
          next: function () {
            var o = a.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ft(n) && !bt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ft(n) && !bt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ft(n) && !bt(n)) return n.symmetricDifference(this);
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
        if (Ft(n) && !bt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          bt(n) && (n = new Set(n)),
          Lt(function () {
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
                : n != null && H("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
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
      rn(e, [
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
  bt = mr("ObservableSet", _h);
function rf(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), hu(e));
}
var nf = Object.create(null),
  af = "remove",
  yh = (function () {
    function e(r, n, a, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = xk),
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
          var o = Je(this, { type: kt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!o) return null;
          a = o.newValue;
        }
        if (((a = i.prepareNewValue_(a)), a !== P.UNCHANGED)) {
          var u = st(this),
            s = !1,
            c =
              u || s
                ? {
                    type: kt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (i.setNewValue_(a), u && ut(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (P.trackingDerivation && !Bt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, i) {
        return (
          i === void 0 && (i = !1),
          Bt(this.target_, n)
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
            ((a = new vr(n in this.target_, Wi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var i;
            if ((i = this.target_[_t]) != null && i[n]) return;
            H(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== $i; ) {
            var u = ki(o, n);
            if (u) {
              var s = a.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          sf(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, i, o) {
        if ((o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1))
          return this.defineProperty_(n, a, o);
        var u = i.extend_(this, n, a, o);
        return (u && sf(this, i, n), u);
      }),
      (t.defineProperty_ = function (n, a, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Xe();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ye(this)) {
            var u = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: a.value,
            });
            if (!u) return null;
            var s = u.newValue;
            a.value !== s && (a = br({}, a, { value: s }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else wt(this.target_, n, a);
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
          var u = this.delete_(n);
          if (!u) return u;
          if (Ye(this)) {
            var s = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var c = of(n),
            l = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else wt(this.target_, n, l);
          var d = new vr(a, i, "ObservableObject.key", !1);
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
            var u = Je(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Zt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = of(n),
            c = {
              configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else wt(this.target_, n, c);
          (this.values_.set(n, new lt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Bt(this.target_, n))) return !0;
        if (Ye(this)) {
          var i = Je(this, { object: this.proxy_ || this.target_, name: n, type: af });
          if (!i) return null;
        }
        try {
          var o;
          Xe();
          var u = st(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = ki(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof vr && (l = c.value_), oh(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var f = {
              type: af,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && ut(this, f);
          }
        } finally {
          Ze();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Na(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var i,
          o = st(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Zt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          o && ut(this, s);
        }
        ((i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Hi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function nn(e, t) {
  var r;
  if (Bt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new yh(e, new Map(), String(n), Lk(t));
  return (Gi(e, L, a), e);
}
var IS = mr("ObservableObjectAdministration", yh);
function of(e) {
  return (
    nf[e] ||
    (nf[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function to(e) {
  return Vi(e) ? IS(e[L]) : !1;
}
function sf(e, t, r) {
  var n;
  (n = e.target_[_t]) == null || delete n[r];
}
var DS = wh(0),
  TS = (function () {
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
  ns = 0,
  mh = function () {};
function MS(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
MS(mh, Array.prototype);
var pu = (function (e) {
  function t(n, a, i, o) {
    var u;
    return (
      i === void 0 && (i = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      kr(function () {
        var s = new vu(i, a, o, !0);
        ((s.proxy_ = u),
          Bp(u, L, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          TS && Object.defineProperty(u, "0", DS));
      }),
      u
    );
  }
  $p(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        i.map(function (u) {
          return eo(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return hu({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    rn(t, [
      {
        key: "length",
        get: function () {
          return this[L].getArrayLength_();
        },
        set: function (a) {
          this[L].setArrayLength_(a);
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
})(mh);
Object.entries(Pi).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Gi(pu.prototype, t, r);
});
function wh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[L].get_(e);
    },
    set: function (r) {
      this[L].set_(e, r);
    },
  };
}
function FS(e) {
  wt(pu.prototype, "" + e, wh(e));
}
function Oh(e) {
  if (e > ns) {
    for (var t = ns; t < e + 100; t++) FS(t);
    ns = e;
  }
}
Oh(1e3);
function LS(e, t, r) {
  return new pu(e, t, r);
}
function ji(e, t) {
  if (typeof e == "object" && e !== null) {
    if (eo(e)) return (t !== void 0 && H(23), e[L].atom_);
    if (bt(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Ls(e)), r);
    }
    if (to(e)) {
      if (!t) return H(26);
      var n = e[L].values_.get(t);
      return (n || H(27, t, Ls(e)), n);
    }
    if (lu(e) || Zi(e) || Ri(e)) return e;
  } else if (ct(e) && Ri(e[L])) return e[L];
  H(28);
}
function NS(e, t) {
  if ((e || H(29), lu(e) || Zi(e) || Ri(e) || Or(e) || bt(e))) return e;
  if (e[L]) return e[L];
  H(24, e);
}
function Ls(e, t) {
  var r;
  if (t !== void 0) r = ji(e, t);
  else {
    if (Zr(e)) return e.name;
    to(e) || Or(e) || bt(e) ? (r = NS(e)) : (r = ji(e));
  }
  return r.name_;
}
function kr(e) {
  var t = wr(),
    r = Ji(!0);
  Xe();
  try {
    return e();
  } finally {
    (Ze(), Xi(r), Ut(t));
  }
}
var uf = $i.toString;
function kh(e, t, r) {
  return (r === void 0 && (r = -1), Ns(e, t, r));
}
function Ns(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var o = uf.call(e);
  if (o !== uf.call(t)) return !1;
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
  ((e = cf(e)), (t = cf(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ct(s) && s instanceof s && ct(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), u)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Ns(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(Bt(t, h) && Ns(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function cf(e) {
  return eo(e) ? e.slice() : tn(e) || Or(e) || Ft(e) || bt(e) ? Array.from(e.entries()) : e;
}
var lf,
  zS = ((lf = qi().Iterator) == null ? void 0 : lf.prototype) || {};
function hu(e) {
  return ((e[Symbol.iterator] = BS), Object.assign(Object.create(zS), e));
}
function BS() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = qi();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: rS, extras: { getDebugName: Ls }, $mobx: L });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Qi) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function US(e) {
  e();
}
function qS(e) {
  (e || (e = US), gS({ reactionScheduler: e }));
}
function $S(e) {
  return _S(e);
}
var VS = 1e4,
  GS = 1e4,
  HS = (function () {
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
            (n === void 0 && (n = VS), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, GS));
        },
      }),
      e
    );
  })(),
  WS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : HS,
  ja = new WS(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  as = { exports: {} },
  is = {};
var df;
function KS() {
  if (df) return is;
  df = 1;
  var e = dt();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    i = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, f) {
    var p = f(),
      h = n({ inst: { value: p, getSnapshot: f } }),
      v = h[0].inst,
      g = h[1];
    return (
      i(
        function () {
          ((v.value = p), (v.getSnapshot = f), s(v) && g({ inst: v }));
        },
        [d, p, f],
      ),
      a(
        function () {
          return (
            s(v) && g({ inst: v }),
            d(function () {
              s(v) && g({ inst: v });
            })
          );
        },
        [d],
      ),
      o(p),
      p
    );
  }
  function s(d) {
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
      : u;
  return (
    (is.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    is
  );
}
var ff;
function YS() {
  return (ff || ((ff = 1), (as.exports = KS())), as.exports);
}
var JS = YS();
function vf(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function XS(e, t) {
  t === void 0 && (t = "observed");
  var r = k.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          ja.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (vf(n), (n.stateVersion = Symbol())),
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
  var a = r.current;
  (a.reaction || (vf(a), ja.register(r, a, a)),
    k.useDebugValue(a.reaction, $S),
    JS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var i, o;
  if (
    (a.reaction.track(function () {
      try {
        i = e();
      } catch (u) {
        o = u;
      }
    }),
    o)
  )
    throw o;
  return i;
}
var os,
  ss,
  Sh = typeof Symbol == "function" && Symbol.for,
  ZS =
    (ss =
      (os = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || os === void 0
        ? void 0
        : os.configurable) !== null && ss !== void 0
      ? ss
      : !1,
  pf = Sh
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  hf = Sh
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function QS(e, t) {
  var r;
  if (hf && e.$$typeof === hf)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    i = e.displayName || e.name;
  if (pf && e.$$typeof === pf && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return XS(function () {
      return a(u, s);
    }, i);
  };
  return (
    (o.displayName = e.displayName),
    ZS && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = _.forwardRef(o)),
    (o = _.memo(o)),
    tE(e, o),
    o
  );
}
var eE = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function tE(e, t) {
  Object.keys(e).forEach(function (r) {
    eE[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var us;
qS(Ii.unstable_batchedUpdates);
us = ja.finalizeAllImmediately;
function rE(e, t) {
  if (gf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !gf(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function gf(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var bf = Symbol("patchMixins"),
  Eh = Symbol("patchedDefinition");
function nE(e, t) {
  var r = (e[bf] = e[bf] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function _f(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, a)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (u) {
          u.apply(r, a);
        }));
  }
}
function yf(e, t) {
  var r = function () {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    _f.call.apply(_f, [this, e, t].concat(i));
  };
  return r;
}
function aE(e, t, r) {
  var n = nE(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Eh])) {
    var i = e[t],
      o = xh(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function xh(e, t, r, n, a) {
  var i,
    o = yf(a, n);
  return (
    (i = {}),
    (i[Eh] = !0),
    (i.get = function () {
      return o;
    }),
    (i.set = function (s) {
      if (this === e) o = yf(s, n);
      else {
        var c = xh(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var mf = Symbol("ObserverAdministration"),
  wf = Symbol("isMobXReactObserver");
function zs(e) {
  var t;
  return (t = e[mf]) != null
    ? t
    : (e[mf] = {
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
function iE(e) {
  var t = e.prototype;
  if (e[wf]) {
    var r = Bs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[wf] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Of;
    else if (t.shouldComponentUpdate !== Of)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Bs(e);
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
        value: oE.call(this, n),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = zs(this);
      return (
        (u.mounted = !0),
        ja.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    aE(t, "componentWillUnmount", function () {
      var o,
        u = zs(this);
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
function oE(e) {
  var t = e.bind(this),
    r = zs(this);
  function n() {
    r.reaction || ((r.reaction = sE(r)), r.mounted || ja.register(this, r, this));
    var a = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = Wk(!1, t);
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
function sE(e) {
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
function Of(e, t) {
  return this.state !== t ? !0 : !rE(this.props, e);
}
function ro(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? iE(e)
      : QS(e)
  );
}
function Us() {
  return (
    (Us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Us.apply(null, arguments)
  );
}
function uE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var cE = ["children"],
  kf = k.createContext({});
function Ch(e) {
  var t = e.children,
    r = uE(e, cE),
    n = k.useContext(kf),
    a = k.useRef(Us({}, n, r)),
    i = a.current;
  return k.createElement(kf.Provider, { value: i }, t);
}
Ch.displayName = "MobXProvider";
k.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var lE = Object.defineProperty,
  dE = Object.getOwnPropertyDescriptor,
  Vt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? dE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && lE(t, r, a), a);
  };
let Rt = class {
  constructor() {
    ((this.isLoading = !0), Qi(this));
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
Vt([se], Rt.prototype, "isLoading", 2);
Vt([se], Rt.prototype, "users", 2);
Vt([se], Rt.prototype, "duplicates", 2);
Vt([se], Rt.prototype, "sort", 2);
Vt([ke.bound], Rt.prototype, "saveUsers", 1);
Vt([ke.bound], Rt.prototype, "saveSort", 1);
Vt([ke.bound], Rt.prototype, "saveDuplicates", 1);
Vt([ke], Rt.prototype, "loading", 1);
Vt([ke], Rt.prototype, "stopLoading", 1);
const fE = new Rt();
var vE = Object.defineProperty,
  pE = Object.getOwnPropertyDescriptor,
  Ba = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? pE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && vE(t, r, a), a);
  };
class an {
  constructor() {
    ((this.isLoading = !0), Qi(this));
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
Ba([se], an.prototype, "isLoading", 2);
Ba([se], an.prototype, "metadata", 2);
Ba([ke.bound], an.prototype, "saveMetadata", 1);
Ba([ke], an.prototype, "loading", 1);
Ba([ke], an.prototype, "stopLoading", 1);
const hE = new an();
var gE = Object.defineProperty,
  bE = Object.getOwnPropertyDescriptor,
  Rh = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? bE(t, r) : t, i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = (n ? o(t, r, a) : o(a)) || a);
    return (n && a && gE(t, r, a), a);
  };
class gu {
  constructor() {
    ((this.state = "ROOT"), Qi(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Rh([se], gu.prototype, "state", 2);
Rh([ke.bound], gu.prototype, "saveState", 1);
const _E = new gu();
class yE {
  constructor() {
    ((this.usersStore = fE), (this.usersMetadata = hE), (this.stateStore = _E));
  }
}
const Ph = new yE(),
  mE = _.createContext(Ph),
  no = () => _.useContext(mE),
  wE = ro(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = no(),
      n = Tp(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? F.jsx("div", { children: "User Table is EMPTY" })
      : F.jsx("div", {
          children: F.jsxs("div", {
            children: [
              F.jsx(cu, {
                head: n,
                onSort: async (i) => {
                  let o = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const u = await Nt.invoke("fetch", { sortType: o });
                    (e.saveUsers(u), e.saveSort(o));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: a.map((i, o) => {
                  const u = Object.keys(i.fields).map((s) => ({ key: s, content: i.fields[s] }));
                  return (
                    u.push({
                      key: "delete",
                      content: F.jsx("div", {
                        children: F.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Nt.invoke("delete", { id: i.id }));
                              const s = await Nt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(s);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    }),
                    { key: `row-${o}-${i.id}`, cells: u }
                  );
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: F.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              F.jsx("br", {}),
              F.jsx("br", {}),
              F.jsx("button", {
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
  OE = ro(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = no(),
      [n, a] = _.useState({}),
      i = (u) => {
        const { name: s, value: c, type: l } = u.target;
        a((d) => ({ ...d, [s]: l === "number" ? Number(c) : c }));
      },
      o = async (u) => {
        (u.preventDefault(),
          console.log("Form Data:", n),
          await Nt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await Nt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
        } finally {
          t.stopLoading();
        }
      };
    return F.jsx("div", {
      children: F.jsxs("form", {
        onSubmit: o,
        children: [
          Object.keys(e.metadata.user.properties).map((u) => {
            let s = e.metadata.user.properties[u];
            return F.jsxs(
              "div",
              {
                children: [
                  F.jsx("label", { htmlFor: u, children: u }),
                  F.jsx("br", {}),
                  F.jsx("input", {
                    type: s.type === "integer" || s.type === "smallint" ? "number" : "text",
                    id: u,
                    name: u,
                    onChange: i,
                  }),
                  F.jsx("br", {}),
                ],
              },
              u,
            );
          }),
          F.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  kE = ro(() => {
    const { usersStore: e, usersMetadata: t } = no(),
      r = Tp(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? F.jsx("div", { children: "Duplicate Table is EMPTY" })
      : F.jsx("div", {
          children: F.jsxs("div", {
            children: [
              F.jsx(cu, {
                head: r,
                rows: n.map((a, i) => {
                  const o = Object.keys(a.fields).map((u) => ({ key: u, content: a.fields[u] }));
                  return { key: `row-${i}-1`, cells: o };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: F.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              F.jsx("br", {}),
              F.jsx("br", {}),
            ],
          }),
        });
  });
function SE() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = no();
  if (
    (_.useEffect(() => {
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
  if (!t.metadata) return F.jsx("div", { children: "Loading Error" });
  switch (r.state) {
    case "ROOT":
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => r.saveState("ADD_USER"), children: "Add a new User" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(wE, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(kE, {}),
          ],
        }),
      });
    case "ADD_USER":
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(OE, {}),
          ],
        }),
      });
    default:
      return F.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const EE = ro(SE),
  xE = document.getElementById("root"),
  CE = Th.createRoot(xE),
  Sf = () => {
    CE.render(F.jsx(Ch, { ...Ph, children: F.jsx(EE, {}) }));
  };
Nt.view.theme
  .enable()
  .then(() => {
    Sf();
  })
  .catch((e) => {
    (console.error(e.message), Sf());
  });
export {
  k as R,
  Sb as T,
  Ue as _,
  ve as a,
  hs as b,
  fe as c,
  Be as d,
  Y as e,
  K as f,
  E as g,
  ae as h,
  Li as i,
  Te as j,
  te as k,
  By as l,
  Mt as m,
  Ct as n,
  C as o,
  Ob as p,
  Ug as q,
  _ as r,
  yb as s,
  cw as w,
};
