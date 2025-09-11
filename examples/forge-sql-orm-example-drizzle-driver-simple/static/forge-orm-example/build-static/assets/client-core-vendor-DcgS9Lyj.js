var st =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function In(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Cn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var m = e.default;
  if (typeof m == "function") {
    var c = function h() {
      var g = !1;
      try {
        g = this instanceof h;
      } catch {}
      return g ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    c.prototype = m.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (h) {
      var g = Object.getOwnPropertyDescriptor(e, h);
      Object.defineProperty(
        c,
        h,
        g.get
          ? g
          : {
              enumerable: !0,
              get: function () {
                return e[h];
              },
            },
      );
    }),
    c
  );
}
var X = {},
  Me = {},
  Ue = {},
  at;
function j() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          h = "  WARN ",
          g = " ERROR ";
        function f(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...v) {
            S.level >= e.LogLevel.Info && console.info(c, ...f(v));
          }
          static debug(...v) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...f(v));
          }
          static warn(...v) {
            S.level >= e.LogLevel.Warn && console.warn(h, ...f(v));
          }
          static error(...v) {
            S.level >= e.LogLevel.Error && console.error(g, ...f(v));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(Ue)),
    Ue
  );
}
var lt;
function H() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        var m, c, h;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const g = j(),
          f = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = f;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const b = (i) => {
          const n = (0, e._getStatsigGlobal)();
          return i
            ? n.instances && n.instances[i]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                g.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = b;
        const v = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          u = typeof st < "u" ? st : {},
          r = typeof globalThis < "u" ? globalThis : {},
          o =
            (h =
              (c = (m = l[v]) !== null && m !== void 0 ? m : u[v]) !== null && c !== void 0
                ? c
                : r[v]) !== null && h !== void 0
              ? h
              : { instance: e._getInstance };
        ((l[v] = o), (u[v] = o), (r[v] = o));
      })(Me)),
    Me
  );
}
var Ae = {},
  ut;
function Ye() {
  return (
    ut ||
      ((ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          h = "end",
          g = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (l) => m.get(l),
          _markInitOverallStart: (l) => {
            b(l, f({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            b(
              l,
              f(
                {
                  success: u,
                  error: u ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: r,
                },
                h,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (l, u) => {
            b(l, f(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            b(l, f(u, h, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            b(l, f({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            b(l, f(u, h, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            m.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: v(l, "code"), name: v(l, "name"), message: v(l, "message") };
          },
          _getDiagnosticsData(l, u, r, o) {
            var i;
            return {
              success: l?.ok === !0,
              statusCode: l?.status,
              sdkRegion:
                (i = l?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: r.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: u,
              error: e.Diagnostics._formatError(o),
            };
          },
          _enqueueDiagnosticsEvent(l, u, r, o) {
            const i = e.Diagnostics._getMarkers(r);
            if (i == null || i.length <= 0) return -1;
            const n = i[i.length - 1].timestamp - i[0].timestamp;
            e.Diagnostics._clearMarkers(r);
            const t = S(l, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (u.enqueue(t), n);
          },
        };
        function f(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: g, user: l, value: null, metadata: u, time: Date.now() };
        }
        function b(l, u) {
          var r;
          const o = (r = m.get(l)) !== null && r !== void 0 ? r : [];
          (o.push(u), m.set(l, o));
        }
        function v(l, u) {
          if (u in l) return l[u];
        }
      })(Ae)),
    Ae
  );
}
var Y = {},
  Z = {},
  Pe = {},
  ee = {},
  ct;
function Ze() {
  if (ct) return ee;
  ((ct = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee._isTypeMatch = ee._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  ee._typeOf = e;
  function m(c, h) {
    const g = (f) => (Array.isArray(f) ? "array" : f === null ? "null" : typeof f);
    return g(c) === g(h);
  }
  return ((ee._isTypeMatch = m), ee);
}
var dt;
function ge() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = Ze(),
          c = (f) => {
            let S = 0;
            for (let b = 0; b < f.length; b++) {
              const v = f.charCodeAt(b);
              ((S = (S << 5) - S + v), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const h = (f, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(f, S)));
        e._DJB2Object = h;
        const g = (f, S) => {
          if (f == null) return null;
          const b = Object.keys(f).sort(),
            v = {};
          return (
            b.forEach((l) => {
              const u = f[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                v[l] = u;
                return;
              }
              v[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            v
          );
        };
        e._getSortedObject = g;
      })(Pe)),
    Pe
  );
}
var _t;
function Ie() {
  if (_t) return Z;
  ((_t = 1),
    Object.defineProperty(Z, "__esModule", { value: !0 }),
    (Z._getStorageKey = Z._getUserStorageKey = void 0));
  const e = ge();
  function m(h, g, f) {
    var S;
    if (f) return f(h, g);
    const b = g && g.customIDs ? g.customIDs : {},
      v = [
        `uid:${(S = g?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(b)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${b[l]}`)
          .join(",")}`,
        `k:${h}`,
      ];
    return (0, e._DJB2)(v.join("|"));
  }
  Z._getUserStorageKey = m;
  function c(h, g, f) {
    return g ? m(h, g, f) : (0, e._DJB2)(`k:${h}`);
  }
  return ((Z._getStorageKey = c), Z);
}
var je = {},
  ft;
function Ce() {
  return (
    ft ||
      ((ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NetworkParam = e.NetworkDefault = e.Endpoint = void 0),
          (e.Endpoint = {
            _initialize: "initialize",
            _rgstr: "rgstr",
            _download_config_specs: "download_config_specs",
          }),
          (e.NetworkDefault = {
            [e.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
            [e.Endpoint._initialize]: "https://featureassets.org/v1",
            [e.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1",
          }),
          (e.NetworkParam = {
            EventCount: "ec",
            SdkKey: "k",
            SdkType: "st",
            SdkVersion: "sv",
            Time: "t",
            SessionID: "sid",
            StatsigEncoded: "se",
            IsGzipped: "gz",
          }));
      })(je)),
    je
  );
}
var Ne = {},
  gt;
function ue() {
  return (
    gt ||
      ((gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getUnloadEvent =
            e._getCurrentPageUrlSafe =
            e._addDocumentEventListenerSafe =
            e._addWindowEventListenerSafe =
            e._isServerEnv =
            e._getDocumentSafe =
            e._getWindowSafe =
              void 0));
        const m = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = m;
        const c = () => {
          var v;
          const l = (0, e._getWindowSafe)();
          return (v = l?.document) !== null && v !== void 0 ? v : null;
        };
        e._getDocumentSafe = c;
        const h = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const v =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || v;
        };
        e._isServerEnv = h;
        const g = (v, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(v, l);
        };
        e._addWindowEventListenerSafe = g;
        const f = (v, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(v, l);
        };
        e._addDocumentEventListenerSafe = f;
        const S = () => {
          var v;
          try {
            return (v = (0, e._getWindowSafe)()) === null || v === void 0
              ? void 0
              : v.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const b = () => {
          const v = (0, e._getWindowSafe)();
          return v && "onpagehide" in v ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = b;
      })(Ne)),
    Ne
  );
}
var q = {},
  vt;
function Xt() {
  if (vt) return q;
  ((vt = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q._createLayerParameterExposure =
      q._createConfigExposure =
      q._mapExposures =
      q._createGateExposure =
      q._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    m = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
    h = (u, r, o, i, n) => (
      o.bootstrapMetadata && (i.bootstrapMetadata = o.bootstrapMetadata),
      {
        eventName: u,
        user: r,
        value: null,
        metadata: l(o, i),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    g = ({ eventName: u }) => u === m || u === e || u === c;
  q._isExposureEvent = g;
  const f = (u, r, o) => {
    var i, n, t;
    const a = { gate: r.name, gateValue: String(r.value), ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (a.configVersion = r.__evaluation.version),
      h(
        m,
        u,
        r.details,
        a,
        S(
          (t = (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          o,
        ),
      )
    );
  };
  q._createGateExposure = f;
  function S(u, r) {
    return u.map((o) => (typeof o == "string" ? (r ?? {})[o] : o)).filter((o) => o != null);
  }
  q._mapExposures = S;
  const b = (u, r, o) => {
    var i, n, t, a;
    const d = { config: r.name, ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (d.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (d.rulePassed = String(r.__evaluation.passed)),
      h(
        e,
        u,
        r.details,
        d,
        S(
          (a = (t = r.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && a !== void 0
            ? a
            : [],
          o,
        ),
      )
    );
  };
  q._createConfigExposure = b;
  const v = (u, r, o, i) => {
    var n, t, a, d, s, E, w;
    const _ = r.__evaluation,
      y = ((n = _?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let k = "",
      D = (t = _?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    y &&
      ((k = (a = _.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (D = (d = _.secondary_exposures) !== null && d !== void 0 ? d : []));
    const C = (s = r.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      M = {
        config: r.name,
        parameterName: o,
        ruleID: (E = C?.[o]) !== null && E !== void 0 ? E : r.ruleID,
        allocatedExperiment: k,
        isExplicitParameter: String(y),
      };
    return (
      ((w = r.__evaluation) === null || w === void 0 ? void 0 : w.version) != null &&
        (M.configVersion = r.__evaluation.version),
      h(c, u, r.details, M, S(D, i))
    );
  };
  q._createLayerParameterExposure = v;
  const l = (u, r) => (
    (r.reason = u.reason),
    u.lcut && (r.lcut = String(u.lcut)),
    u.receivedAt && (r.receivedAt = String(u.receivedAt)),
    r
  );
  return q;
}
var te = {},
  ht;
function Te() {
  return (
    ht ||
      ((ht = 1),
      Object.defineProperty(te, "__esModule", { value: !0 }),
      (te.LoggingEnabledOption = te.LogEventCompressionMode = void 0),
      (te.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (te.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    te
  );
}
var Fe = {},
  yt;
function Q() {
  return (
    yt ||
      ((yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = j(),
          c = ue(),
          h = {},
          g = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (r) => (h[r] ? h[r] : null),
            setItem: (r, o) => {
              h[r] = o;
            },
            removeItem: (r) => {
              delete h[r];
            },
            getAllKeys: () => Object.keys(h),
          };
        let f = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (f = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (o) => r.localStorage.getItem(o),
              setItem: (o, i) => r.localStorage.setItem(o, i),
              removeItem: (o) => r.localStorage.removeItem(o),
              getAllKeys: () => Object.keys(r.localStorage),
            });
        } catch {
          m.Log.warn("Failed to setup localStorageProvider.");
        }
        let S = f ?? g,
          b = S;
        function v(r) {
          try {
            return r();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(g), null);
            if (o instanceof Error && o.name === "QuotaExceededError") {
              const n = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              o.message = `${o.message}. Statsig Keys: ${n.length}`;
            }
            throw o;
          }
        }
        e.Storage = {
          isReady: () => b.isReady(),
          isReadyResolver: () => b.isReadyResolver(),
          getProviderName: () => b.getProviderName(),
          getItem: (r) => v(() => b.getItem(r)),
          setItem: (r, o) => v(() => b.setItem(r, o)),
          removeItem: (r) => b.removeItem(r),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (r) => {
            ((S = r), (b = r));
          },
          _setDisabled: (r) => {
            r ? (b = g) : (b = S);
          },
        };
        function l(r) {
          const o = e.Storage.getItem(r);
          return JSON.parse(o ?? "null");
        }
        e._getObjectFromStorage = l;
        function u(r, o) {
          e.Storage.setItem(r, JSON.stringify(o));
        }
        e._setObjectInStorage = u;
      })(Fe)),
    Fe
  );
}
var ye = {},
  mt;
function Yt() {
  if (mt) return ye;
  ((mt = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye.UrlConfiguration = void 0));
  const e = ge(),
    m = Ce(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let h = class {
    constructor(f, S, b, v) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = f),
        (this.endpointDnsKey = c[f]),
        S && (this.customUrl = S),
        !S && b && (this.customUrl = b.endsWith("/") ? `${b}${f}` : `${b}/${f}`),
        v && (this.fallbackUrls = v));
      const l = m.NetworkDefault[f];
      this.defaultUrl = `${l}/${f}`;
    }
    getUrl() {
      var f;
      return (f = this.customUrl) !== null && f !== void 0 ? f : this.defaultUrl;
    }
    getChecksum() {
      var f;
      const S = ((f = this.fallbackUrls) !== null && f !== void 0 ? f : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  };
  return ((ye.UrlConfiguration = h), ye);
}
var qe = {},
  St;
function et() {
  return (
    St ||
      ((St = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = ue(),
          c = "foreground",
          h = "background",
          g = [];
        let f = c,
          S = !1;
        const b = () => f === c;
        e._isCurrentlyVisible = b;
        const v = () => S;
        e._isUnloading = v;
        const l = (r) => {
          g.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== f && ((f = r), g.forEach((o) => o(r)));
        };
        ((e._notifyVisibilityChanged = u),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((S = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(h)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : h);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((S = !0), (0, e._notifyVisibilityChanged)(h));
          }));
      })(qe)),
    qe
  );
}
var bt;
function Zt() {
  if (bt) return Y;
  bt = 1;
  var e =
    (Y && Y.__awaiter) ||
    function (w, _, y, k) {
      function D(C) {
        return C instanceof y
          ? C
          : new y(function (M) {
              M(C);
            });
      }
      return new (y || (y = Promise))(function (C, M) {
        function U(B) {
          try {
            x(k.next(B));
          } catch (I) {
            M(I);
          }
        }
        function W(B) {
          try {
            x(k.throw(B));
          } catch (I) {
            M(I);
          }
        }
        function x(B) {
          B.done ? C(B.value) : D(B.value).then(U, W);
        }
        x((k = k.apply(w, _ || [])).next());
      });
    };
  (Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.EventLogger = void 0));
  const m = Ie(),
    c = ge(),
    h = j(),
    g = Ce(),
    f = ue(),
    S = Xt(),
    b = Te(),
    v = Q(),
    l = Yt(),
    u = et(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    d = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let E = class fe {
    static _safeFlushAndForget(_) {
      var y;
      (y = d[_]) === null || y === void 0 || y.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(_) {
      var y;
      (y = d[_]) === null || y === void 0 || y._retryFailedLogs(s.GainedFocus);
    }
    constructor(_, y, k, D) {
      var C, M;
      ((this._sdkKey = _),
        (this._emitter = y),
        (this._network = k),
        (this._options = D),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = D?.loggingEnabled) !== null && C !== void 0
            ? C
            : D?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        D?.loggingEnabled &&
          D.disableLogging !== void 0 &&
          h.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (M = D?.loggingBufferMaxSize) !== null && M !== void 0 ? M : r));
      const U = D?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        g.Endpoint._rgstr,
        U?.logEventUrl,
        U?.api,
        U?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(_) {
      this._network.setLogEventCompressionMode(_);
    }
    setLoggingEnabled(_) {
      if (this._loggingEnabled === "disabled" && _ !== "disabled") {
        const y = this._getStorageKey(),
          k = (0, v._getObjectFromStorage)(y);
        (k && this._queue.push(...k), v.Storage.removeItem(y));
      }
      this._loggingEnabled = _;
    }
    enqueue(_) {
      this._shouldLogEvent(_) &&
        (this._normalizeAndAppendEvent(_),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && fe._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(_) {
      var y;
      const k = (y = this._nonExposedChecks[_]) !== null && y !== void 0 ? y : 0;
      this._nonExposedChecks[_] = k + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var _;
      const y = (0, f._isServerEnv)();
      (y &&
        ((_ = this._options) === null || _ === void 0 ? void 0 : _.loggingEnabled) !== "always") ||
        ((d[this._sdkKey] = this),
        y ||
          (0, u._subscribeToVisiblityChanged)((k) => {
            k === "background"
              ? fe._safeFlushAndForget(this._sdkKey)
              : k === "foreground" && fe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(s.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete d[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const _ = this._queue;
        ((this._queue = []), yield this._sendEvents(_));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > a) &&
          setTimeout(() => fe._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(_) {
      var y;
      if (
        ((y = this._options) === null || y === void 0 ? void 0 : y.loggingEnabled) !== "always" &&
        (0, f._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(_)) return !0;
      const k = _.user ? _.user : { statsigEnvironment: void 0 },
        D = (0, m._getUserStorageKey)(this._sdkKey, k),
        C = _.metadata ? _.metadata : {},
        M = [
          _.eventName,
          D,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        U = this._lastExposureTimeMap[M],
        W = Date.now();
      return U && W - U < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[M] = W),
          !0);
    }
    _sendEvents(_) {
      return e(this, void 0, void 0, function* () {
        var y, k;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(_), !1);
        try {
          const C =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((k = (y = this._options) === null || y === void 0 ? void 0 : y.networkConfig) ===
              null || k === void 0
              ? void 0
              : k.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: _ }),
            (C ? this._sendEventsViaBeacon(_) : yield this._sendEventsViaPost(_)).success
              ? (this._emitter({ name: "logs_flushed", events: _ }), !0)
              : (h.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(_), !1)
          );
        } catch {
          return (h.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(_) {
      return e(this, void 0, void 0, function* () {
        var y;
        const k = yield this._network.post(this._getRequestData(_)),
          D = (y = k?.code) !== null && y !== void 0 ? y : -1;
        return { success: D >= 200 && D < 300 };
      });
    }
    _sendEventsViaBeacon(_) {
      return { success: this._network.beacon(this._getRequestData(_)) };
    }
    _getRequestData(_) {
      return {
        sdkKey: this._sdkKey,
        data: { events: _ },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [g.NetworkParam.EventCount]: String(_.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(_) {
      for (; _.length > t; ) _.shift();
      const y = this._getStorageKey();
      try {
        (0, v._setObjectInStorage)(y, _);
      } catch {
        h.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(_) {
      const y = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const k = (0, v._getObjectFromStorage)(y);
        if (!k) return;
        (_ === s.Startup && v.Storage.removeItem(y),
          (yield this._sendEvents(k)) && _ === s.GainedFocus && v.Storage.removeItem(y));
      }).catch(() => {
        h.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(_) {
      _.user && ((_.user = Object.assign({}, _.user)), delete _.user.privateAttributes);
      const y = {},
        k = this._getCurrentPageUrl();
      k && (y.statsigMetadata = { currentPage: k });
      const D = Object.assign(Object.assign({}, _), y);
      (h.Log.debug("Enqueued Event:", D), this._queue.push(D));
    }
    _appendAndResetNonExposedChecks() {
      Object.keys(this._nonExposedChecks).length !== 0 &&
        (this._normalizeAndAppendEvent({
          eventName: "statsig::non_exposed_checks",
          user: null,
          time: Date.now(),
          metadata: { checks: Object.assign({}, this._nonExposedChecks) },
        }),
        (this._nonExposedChecks = {}));
    }
    _getCurrentPageUrl() {
      var _;
      if (
        ((_ = this._options) === null || _ === void 0
          ? void 0
          : _.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, f._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var _, y;
      const k =
          (y = (_ = this._options) === null || _ === void 0 ? void 0 : _.loggingIntervalMs) !==
            null && y !== void 0
            ? y
            : o,
        D = setInterval(() => {
          const C = d[this._sdkKey];
          !C || C._flushIntervalId !== D ? clearInterval(D) : fe._safeFlushAndForget(this._sdkKey);
        }, k);
      this._flushIntervalId = D;
    }
  };
  return ((Y.EventLogger = E), Y);
}
var Ke = {},
  pt;
function Oe() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.25.2"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Ke)),
    Ke
  );
}
var Be = {},
  Et;
function ln() {
  return (Et || ((Et = 1), Object.defineProperty(Be, "__esModule", { value: !0 })), Be);
}
var z = {},
  ne = {},
  me = {},
  wt;
function tt() {
  if (wt) return me;
  ((wt = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (g) => {
        let f = Math.random() * 16;
        return (
          m > 0
            ? ((f = (m + f) % 16 | 0), (m = Math.floor(m / 16)))
            : ((f = (c + f) % 16 | 0), (c = Math.floor(c / 16))),
          (g === "x" ? f : (f & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((me.getUUID = e), me);
}
var kt;
function Re() {
  if (kt) return ne;
  ((kt = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne.getCookieName = ne.StableID = void 0));
  const e = Ie(),
    m = j(),
    c = ue(),
    h = Q(),
    g = tt(),
    f = {},
    S = {},
    b = {};
  ne.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (b[n]) return null;
      if (f[n] != null) return f[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((f[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, g.getUUID)()), l(t, n), o(t, n), (f[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((f[t] = n), l(n, t), o(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      S[n] = t;
    },
    _setDisabled: (n, t) => {
      b[n] = t;
    },
  };
  function v(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const a = v(t);
    try {
      (0, h._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = v(n);
    return (0, h._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!S[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const a of t) {
      const [d, s] = a.trim().split("=");
      if (d === i(n)) return decodeURIComponent(s);
    }
    return null;
  }
  function o(n, t) {
    if (!S[t] || (0, c._getDocumentSafe)() == null) return;
    const a = new Date();
    (a.setFullYear(a.getFullYear() + 1),
      (document.cookie = `${i(t)}=${encodeURIComponent(n)}; expires=${a.toUTCString()}; path=/`));
  }
  function i(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return ((ne.getCookieName = i), ne);
}
var re = {},
  Dt;
function en() {
  if (Dt) return re;
  ((Dt = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._getFullUserHash = re._normalizeUser = void 0));
  const e = ge(),
    m = j();
  function c(g, f, S) {
    try {
      const b = JSON.parse(JSON.stringify(g));
      return (
        f != null && f.environment != null
          ? (b.statsigEnvironment = f.environment)
          : S != null && (b.statsigEnvironment = { tier: S }),
        b
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  re._normalizeUser = c;
  function h(g) {
    return g ? (0, e._DJB2Object)(g) : null;
  }
  return ((re._getFullUserHash = h), re);
}
var Se = {},
  Ot;
function tn() {
  if (Ot) return Se;
  ((Ot = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se._typedJsonParse = void 0));
  const e = j();
  function m(c, h, g) {
    try {
      const f = JSON.parse(c);
      if (f && typeof f == "object" && h in f) return f;
    } catch {}
    return (e.Log.error(`Failed to parse ${g}`), null);
  }
  return ((Se._typedJsonParse = m), Se);
}
var It;
function un() {
  if (It) return z;
  It = 1;
  var e =
    (z && z.__awaiter) ||
    function (o, i, n, t) {
      function a(d) {
        return d instanceof n
          ? d
          : new n(function (s) {
              s(d);
            });
      }
      return new (n || (n = Promise))(function (d, s) {
        function E(y) {
          try {
            _(t.next(y));
          } catch (k) {
            s(k);
          }
        }
        function w(y) {
          try {
            _(t.throw(y));
          } catch (k) {
            s(k);
          }
        }
        function _(y) {
          y.done ? d(y.value) : a(y.value).then(E, w);
        }
        _((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._makeDataAdapterResult = z.DataAdapterCore = void 0));
  const m = j(),
    c = Re(),
    h = en(),
    g = Q(),
    f = tn(),
    S = 10,
    b = 8;
  let v = class {
    constructor(i, n) {
      ((this._adapterName = i),
        (this._cacheSuffix = n),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = S),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${n}`),
        (this._inMemoryCache = new u()));
    }
    attach(i, n, t) {
      ((this._sdkKey = i), (this._options = n));
    }
    getDataSync(i) {
      const n = i && (0, h._normalizeUser)(i, this._options),
        t = this._getCacheKey(n),
        a = this._inMemoryCache.get(t, n);
      if (a && this._getIsCacheValueValid(a)) return a;
      const d = this._loadFromCache(t);
      return d && this._getIsCacheValueValid(d)
        ? (this._inMemoryCache.add(t, d, this._cacheLimit), this._inMemoryCache.get(t, n))
        : null;
    }
    setData(i, n) {
      const t = n && (0, h._normalizeUser)(n, this._options),
        a = this._getCacheKey(t);
      this._inMemoryCache.add(a, l("Bootstrap", i, null, t), this._cacheLimit);
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, n, t) {
      return e(this, void 0, void 0, function* () {
        g.Storage.isReady() || (yield g.Storage.isReadyResolver());
        const a = i ?? this.getDataSync(n),
          d = [this._fetchAndPrepFromNetwork(a, n, t)];
        return (
          t?.timeoutMs &&
            d.push(
              new Promise((s) => setTimeout(s, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(d)
        );
      });
    }
    _prefetchDataImpl(i, n) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, h._normalizeUser)(i, this._options),
          a = this._getCacheKey(t),
          d = yield this._getDataAsyncImpl(null, t, n);
        d &&
          this._inMemoryCache.add(
            a,
            Object.assign(Object.assign({}, d), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, n, t) {
      return e(this, void 0, void 0, function* () {
        var a;
        const d = (a = i?.data) !== null && a !== void 0 ? a : null,
          s = i != null && this._isCachedResultValidFor204(i, n),
          E = yield this._fetchFromNetwork(d, n, t, s);
        if (!E) return (m.Log.debug("No response returned for latest value"), null);
        const w = (0, f._typedJsonParse)(E, "has_updates", "Response"),
          _ = this._getSdkKey(),
          y = c.StableID.get(_);
        let k = null;
        if (w?.has_updates === !0) k = l("Network", E, y, n);
        else if (d && w?.has_updates === !1) k = l("NetworkNotModified", d, y, n);
        else return null;
        const D = this._getCacheKey(n);
        return (this._inMemoryCache.add(D, k, this._cacheLimit), this._writeToCache(D, k), k);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var n;
      const t = (n = g.Storage.getItem) === null || n === void 0 ? void 0 : n.call(g.Storage, i);
      if (t == null) return null;
      const a = (0, f._typedJsonParse)(t, "source", "Cached Result");
      return a ? Object.assign(Object.assign({}, a), { source: "Cache" }) : null;
    }
    _writeToCache(i, n) {
      const t = JSON.stringify(n);
      for (let a = 0; a < b; a++)
        try {
          g.Storage.setItem(i, t);
          break;
        } catch (d) {
          if (!(d instanceof Error) || d.name !== "QuotaExceededError" || this._cacheLimit <= 1)
            throw d;
          ((this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
            this._runLocalStorageCacheEviction(i, this._cacheLimit - 1));
        }
      this._runLocalStorageCacheEviction(i);
    }
    _runLocalStorageCacheEviction(i, n = this._cacheLimit) {
      var t;
      const a =
        (t = (0, g._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      a[i] = Date.now();
      const d = r(a, n);
      for (const s of d) (delete a[s], g.Storage.removeItem(s));
      (0, g._setObjectInStorage)(this._lastModifiedStoreKey, a);
    }
  };
  z.DataAdapterCore = v;
  function l(o, i, n, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: n,
      fullUserHash: (0, h._getFullUserHash)(t),
    };
  }
  z._makeDataAdapterResult = l;
  class u {
    constructor() {
      this._data = {};
    }
    get(i, n) {
      var t;
      const a = this._data[i],
        d = a?.stableID,
        s = (t = n?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return s && d && s !== d
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : a;
    }
    add(i, n, t) {
      const a = r(this._data, t - 1);
      for (const d of a) delete this._data[d];
      this._data[i] = n;
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function r(o, i) {
    const n = Object.keys(o);
    return n.length <= i
      ? []
      : i === 0
        ? n
        : n
            .sort((t, a) => {
              const d = o[t],
                s = o[a];
              return typeof d == "object" && typeof s == "object"
                ? d.receivedAt - s.receivedAt
                : d - s;
            })
            .slice(0, n.length - i);
  }
  return z;
}
var $e = {},
  Ct;
function cn() {
  return (Ct || ((Ct = 1), Object.defineProperty($e, "__esModule", { value: !0 })), $e);
}
var be = {},
  pe = {},
  Tt;
function nt() {
  if (Tt) return pe;
  ((Tt = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.SDKType = void 0));
  const e = {};
  let m;
  return (
    (pe.SDKType = {
      _get: (c) => {
        var h;
        return ((h = e[c]) !== null && h !== void 0 ? h : "js-mono") + (m ?? "");
      },
      _setClientType(c, h) {
        e[c] = h;
      },
      _setBindingType(c) {
        (!m || m === "-react") && (m = "-" + c);
      },
    }),
    pe
  );
}
var Rt;
function nn() {
  return (
    Rt ||
      ((Rt = 1),
      (function (e) {
        var m =
          (be && be.__awaiter) ||
          function (r, o, i, n) {
            function t(a) {
              return a instanceof i
                ? a
                : new i(function (d) {
                    d(a);
                  });
            }
            return new (i || (i = Promise))(function (a, d) {
              function s(_) {
                try {
                  w(n.next(_));
                } catch (y) {
                  d(y);
                }
              }
              function E(_) {
                try {
                  w(n.throw(_));
                } catch (y) {
                  d(y);
                }
              }
              function w(_) {
                _.done ? a(_.value) : t(_.value).then(s, E);
              }
              w((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = j(),
          h = nt(),
          g = Oe();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const f = "[Statsig] UnknownError";
        let S = class {
          constructor(o, i, n, t) {
            ((this._sdkKey = o),
              (this._options = i),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(o, i) {
            try {
              const n = o;
              l(n).forEach((t) => {
                const a = n[t];
                "$EB" in a ||
                  ((n[t] = (...d) => this._capture(i ? `${i}:${t}` : t, () => a.apply(o, d))),
                  (n[t].$EB = !0));
              });
            } catch (n) {
              this._onError("eb:wrap", n);
            }
          }
          logError(o, i) {
            this._onError(o, i);
          }
          getLastSeenErrorAndReset() {
            const o = this._lastSeenError;
            return ((this._lastSeenError = void 0), o ?? null);
          }
          attachErrorIfNoneExists(o) {
            this._lastSeenError || (this._lastSeenError = b(o));
          }
          _capture(o, i) {
            try {
              const n = i();
              return n && n instanceof Promise ? n.catch((t) => this._onError(o, t)) : n;
            } catch (n) {
              return (this._onError(o, n), null);
            }
          }
          _onError(o, i) {
            try {
              (c.Log.warn(`Caught error in ${o}`, { error: i }),
                m(this, void 0, void 0, function* () {
                  var t, a, d, s, E, w, _;
                  const y = i || Error(f),
                    k = y instanceof Error,
                    D = k ? y.name : "No Name",
                    C = b(y);
                  if (((this._lastSeenError = C), this._seen.has(D))) return;
                  if (
                    (this._seen.add(D),
                    !(
                      (a =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || a === void 0
                    ) && a.preventAllNetworkTraffic)
                  ) {
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const M = h.SDKType._get(this._sdkKey),
                    U = g.StatsigMetadataProvider.get(),
                    W = k ? y.stack : v(y),
                    x = Object.assign(
                      { tag: o, exception: D, info: W, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, U), { sdkType: M }),
                    );
                  (yield (
                    (w =
                      (E =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || E === void 0
                        ? void 0
                        : E.networkOverrideFunc) !== null && w !== void 0
                      ? w
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(M),
                      "STATSIG-SDK-VERSION": String(U.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(x),
                  }),
                    (_ = this._emitter) === null ||
                      _ === void 0 ||
                      _.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = S;
        function b(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function v(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return f;
          }
        }
        function l(r) {
          const o = new Set();
          let i = Object.getPrototypeOf(r);
          for (; i && i !== Object.prototype; )
            (Object.getOwnPropertyNames(i)
              .filter((n) => typeof i?.[n] == "function")
              .forEach((n) => o.add(n)),
              (i = Object.getPrototypeOf(i)));
          return Array.from(o);
        }
        function u(r) {
          if (!r) return {};
          const o = {};
          return (
            Object.keys(r).forEach((i) => {
              const n = i,
                t = r[n];
              switch (typeof t) {
                case "number":
                case "bigint":
                case "boolean":
                  o[String(n)] = t;
                  break;
                case "string":
                  t.length < 50 ? (o[String(n)] = t) : (o[String(n)] = "set");
                  break;
                case "object":
                  n === "environment"
                    ? (o.environment = t)
                    : n === "networkConfig"
                      ? (o.networkConfig = t)
                      : (o[String(n)] = t != null ? "set" : "unset");
                  break;
              }
            }),
            o
          );
        }
      })(be)),
    be
  );
}
var Ge = {},
  Lt;
function dn() {
  return (Lt || ((Lt = 1), Object.defineProperty(Ge, "__esModule", { value: !0 })), Ge);
}
var Ve = {},
  Mt;
function _n() {
  return (Mt || ((Mt = 1), Object.defineProperty(Ve, "__esModule", { value: !0 })), Ve);
}
var ze = {},
  Ut;
function fn() {
  return (Ut || ((Ut = 1), Object.defineProperty(ze, "__esModule", { value: !0 })), ze);
}
var ie = {},
  At;
function rn() {
  if (At) return ie;
  ((At = 1),
    Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie.createMemoKey = ie.MemoPrefix = void 0),
    (ie.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function c(h, g, f) {
    let S = `${h}|${g}`;
    if (!f) return S;
    for (const b of Object.keys(f)) {
      if (m.has(b)) return;
      e.has(b) ? (S += `|${b}=true`) : (S += `|${b}=${f[b]}`);
    }
    return S;
  }
  return ((ie.createMemoKey = c), ie);
}
var oe = {},
  J = {},
  se = {},
  Pt;
function gn() {
  if (Pt) return se;
  Pt = 1;
  var e =
    (se && se.__awaiter) ||
    function (b, v, l, u) {
      function r(o) {
        return o instanceof l
          ? o
          : new l(function (i) {
              i(o);
            });
      }
      return new (l || (l = Promise))(function (o, i) {
        function n(d) {
          try {
            a(u.next(d));
          } catch (s) {
            i(s);
          }
        }
        function t(d) {
          try {
            a(u.throw(d));
          } catch (s) {
            i(s);
          }
        }
        function a(d) {
          d.done ? o(d.value) : r(d.value).then(n, t);
        }
        a((u = u.apply(b, v || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }), (se._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    h = ["i", "e", "d"],
    g = 200;
  function f(b) {
    return e(this, void 0, void 0, function* () {
      const v = yield b(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!v.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield v.arrayBuffer(),
        u = new Uint8Array(l);
      return S(u);
    });
  }
  se._fetchTxtRecords = f;
  function S(b) {
    const v = b.findIndex(
      (u, r) =>
        r < g && String.fromCharCode(u) === "=" && h.includes(String.fromCharCode(b[r - 1])),
    );
    if (v === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = v - 1; u < b.length; u++) l += String.fromCharCode(b[u]);
    return l.split(",");
  }
  return se;
}
var jt;
function vn() {
  if (jt) return J;
  jt = 1;
  var e =
    (J && J.__awaiter) ||
    function (i, n, t, a) {
      function d(s) {
        return s instanceof t
          ? s
          : new t(function (E) {
              E(s);
            });
      }
      return new (t || (t = Promise))(function (s, E) {
        function w(k) {
          try {
            y(a.next(k));
          } catch (D) {
            E(D);
          }
        }
        function _(k) {
          try {
            y(a.throw(k));
          } catch (D) {
            E(D);
          }
        }
        function y(k) {
          k.done ? s(k.value) : d(k.value).then(w, _);
        }
        y((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(J, "__esModule", { value: !0 }),
    (J._isDomainFailure = J.NetworkFallbackResolver = void 0));
  const m = gn(),
    c = ge(),
    h = j(),
    g = Q(),
    f = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  let b = class {
    constructor(n) {
      var t;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (t = n.networkConfig) === null || t === void 0 ? void 0 : t.networkOverrideFunc));
    }
    setErrorBoundary(n) {
      this._errorBoundary = n;
    }
    tryBumpExpiryTime(n, t) {
      var a;
      const d = (a = this._fallbackInfo) === null || a === void 0 ? void 0 : a[t.endpoint];
      d &&
        ((d.expiryTime = Date.now() + f),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: d })));
    }
    getActiveFallbackUrl(n, t) {
      var a, d;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const E = s[t.endpoint];
      return !E ||
        Date.now() > ((d = E.expiryTime) !== null && d !== void 0 ? d : 0) ||
        t.getChecksum() !== E.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : E.url
          ? E.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, d) {
      return e(this, void 0, void 0, function* () {
        var s, E;
        try {
          if (!v(a, d)) return !1;
          const _ =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            y = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              _,
            );
          return y ? (this._updateFallbackInfoWithNewUrl(n, t, y), !0) : !1;
        } catch (w) {
          return (
            (E = this._errorBoundary) === null ||
              E === void 0 ||
              E.logError("tryFetchUpdatedFallbackInfo", w),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var d, s, E;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + f,
          previous: [],
        },
        _ = t.endpoint,
        y = (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[_];
      (y && w.previous.push(...y.previous), w.previous.length > 10 && (w.previous = []));
      const k =
        (E = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[_]) === null ||
        E === void 0
          ? void 0
          : E.url;
      (k != null && w.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [_]: w })),
        u(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = this._dnsQueryCooldowns[n.endpoint];
        if (a && Date.now() < a) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + S;
        const d = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          E = o(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const _ = w.split("=");
          if (_.length > 1) {
            let y = _[1];
            (y.endsWith("/") && (y = y.slice(0, -1)), d.push(`https://${y}${E}`));
          }
        }
        return d;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var a;
      if (t == null) return null;
      const d = new Set((a = n?.previous) !== null && a !== void 0 ? a : []),
        s = n?.url;
      let E = null;
      for (const w of t) {
        const _ = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!d.has(w) && _ !== s) {
          E = _;
          break;
        }
      }
      return E;
    }
  };
  J.NetworkFallbackResolver = b;
  function v(i, n) {
    var t;
    const a = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      a.includes("uncaught exception") ||
      a.includes("failed to fetch") ||
      a.includes("networkerror when attempting to fetch resource")
    );
  }
  J._isDomainFailure = v;
  function l(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function u(i, n) {
    const t = l(i);
    if (!n || Object.keys(n).length === 0) {
      g.Storage.removeItem(t);
      return;
    }
    g.Storage.setItem(t, JSON.stringify(n));
  }
  function r(i) {
    const n = l(i),
      t = g.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (h.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function o(i) {
    try {
      return new URL(i).pathname;
    } catch {
      return null;
    }
  }
  return J;
}
var Ee = {},
  Nt;
function on() {
  if (Nt) return Ee;
  ((Nt = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.SDKFlags = void 0));
  const e = {};
  return (
    (Ee.SDKFlags = {
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var h, g;
        return (g = (h = e[m]) === null || h === void 0 ? void 0 : h[c]) !== null && g !== void 0
          ? g
          : !1;
      },
    }),
    Ee
  );
}
var Je = {},
  Ft;
function rt() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = H(),
          c = Ie(),
          h = j(),
          g = Q(),
          f = tt(),
          S = 1800 * 1e3,
          b = 14400 * 1e3,
          v = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              v[s] == null && (v[s] = l(s));
              const E = v[s];
              return r(E);
            },
            overrideInitialSessionID: (s, E) => {
              v[E] = u(s, E);
            },
          }));
        function l(s) {
          let E = d(s);
          const w = Date.now();
          return (
            E || (E = { sessionID: (0, f.getUUID)(), startTime: w, lastUpdate: w }),
            { data: E, sdkKey: s }
          );
        }
        function u(s, E) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: E };
        }
        function r(s) {
          const E = Date.now(),
            w = s.data,
            _ = s.sdkKey;
          if (i(w) || n(w)) {
            ((w.sessionID = (0, f.getUUID)()), (w.startTime = E));
            const k = __STATSIG__ == null ? void 0 : __STATSIG__.instance(_);
            k && k.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = E),
            a(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const y = E - w.startTime;
          return ((s.idleTimeoutID = o(_, S)), (s.ageTimeoutID = o(_, b - y)), s);
        }
        function o(s, E) {
          return setTimeout(() => {
            var w;
            const _ =
              (w = (0, m._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            _ && _.$emt({ name: "session_expired" });
          }, E);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function n({ startTime: s }) {
          return Date.now() - s > b;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function a(s, E) {
          const w = t(E);
          try {
            (0, g._setObjectInStorage)(w, s);
          } catch {
            h.Log.warn("Failed to save SessionID");
          }
        }
        function d(s) {
          const E = t(s);
          return (0, g._getObjectFromStorage)(E);
        }
      })(Je)),
    Je
  );
}
var we = {},
  qt;
function sn() {
  return (
    qt ||
      ((qt = 1),
      Object.defineProperty(we, "__esModule", { value: !0 }),
      (we.ErrorTag = void 0),
      (we.ErrorTag = { NetworkError: "NetworkError" })),
    we
  );
}
var Kt;
function hn() {
  if (Kt) return oe;
  Kt = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (I, p, O, T) {
      function R(L) {
        return L instanceof O
          ? L
          : new O(function (A) {
              A(L);
            });
      }
      return new (O || (O = Promise))(function (L, A) {
        function ve(N) {
          try {
            $(T.next(N));
          } catch (F) {
            A(F);
          }
        }
        function V(N) {
          try {
            $(T.throw(N));
          } catch (F) {
            A(F);
          }
        }
        function $(N) {
          N.done ? L(N.value) : R(N.value).then(ve, V);
        }
        $((T = T.apply(I, p || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.NetworkCore = void 0), H());
  const m = H(),
    c = Ye(),
    h = j(),
    g = Ce(),
    f = vn(),
    S = on(),
    b = nt(),
    v = ue(),
    l = rt(),
    u = Re(),
    r = sn(),
    o = Oe(),
    i = Te(),
    n = et(),
    t = 1e4,
    a = 500,
    d = 3e4,
    s = 1e3,
    E = 50,
    w = E / s,
    _ = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let y = class {
    constructor(p, O) {
      ((this._emitter = O),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        p && (this._options = p),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new f.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(p)));
    }
    setLogEventCompressionMode(p) {
      this._options.logEventCompressionMode = p;
    }
    setErrorBoundary(p) {
      ((this._errorBoundary = p),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(p));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const p = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), p);
    }
    beacon(p) {
      if (!k(p)) return !1;
      const O = this._getInternalRequestArgs("POST", p),
        T = this._getPopulatedURL(O),
        R = navigator;
      return R.sendBeacon.bind(R)(T, O.body);
    }
    post(p) {
      return e(this, void 0, void 0, function* () {
        const O = this._getInternalRequestArgs("POST", p);
        return (this._tryEncodeBody(O), yield this._tryToCompressBody(O), this._sendRequest(O));
      });
    }
    get(p) {
      const O = this._getInternalRequestArgs("GET", p);
      return this._sendRequest(O);
    }
    _sendRequest(p) {
      return e(this, void 0, void 0, function* () {
        var O, T, R, L;
        if (!k(p) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: A, body: ve, retries: V, attempt: $ } = p,
          N = p.urlConfig.endpoint;
        if (this._isRateLimited(N))
          return (
            h.Log.warn(
              `Request to ${N} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const F = $ ?? 1,
          K = typeof AbortController < "u" ? new AbortController() : null,
          ce = setTimeout(() => {
            K?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          he = this._getPopulatedURL(p);
        let G = null;
        const an = (0, n._isUnloading)();
        try {
          const de = {
            method: A,
            body: ve,
            headers: Object.assign({}, p.headers),
            signal: K?.signal,
            priority: p.priority,
            keepalive: an,
          };
          W(p, F);
          const _e = this._leakyBucket[N];
          if (
            (_e && ((_e.lastRequestTime = Date.now()), (this._leakyBucket[N] = _e)),
            (G = yield (
              (O = this._netConfig.networkOverrideFunc) !== null && O !== void 0 ? O : fetch
            )(he, de)),
            clearTimeout(ce),
            !G.ok)
          ) {
            const De = yield G.text().catch(() => "No Text"),
              ot = new Error(`NetworkError: ${he} ${De}`);
            throw ((ot.name = "NetworkError"), ot);
          }
          const Le = yield G.text();
          return (
            x(p, G, F, Le),
            this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
            { body: Le, code: G.status }
          );
        } catch (de) {
          const _e = M(K, de),
            it = U(K);
          if (
            (x(p, G, F, "", de),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              p.sdkKey,
              p.urlConfig,
              _e,
              it,
            )) &&
              (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(p.sdkKey, p.urlConfig)),
            !V || F > V || !_.has((T = G?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: de,
                tag: r.ErrorTag.NetworkError,
                requestArgs: p,
              });
            const De = `A networking error occurred during ${A} request to ${he}.`;
            return (
              h.Log.error(De, _e, de),
              (L = this._errorBoundary) === null || L === void 0 || L.attachErrorIfNoneExists(De),
              null
            );
          }
          return (
            yield B(F),
            this._sendRequest(Object.assign(Object.assign({}, p), { retries: V, attempt: F + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(p) {
      let O = p?.logEventCompressionMode;
      return (
        !O && p?.disableCompression === !0 && (O = i.LogEventCompressionMode.Disabled),
        O || (O = i.LogEventCompressionMode.Enabled),
        O
      );
    }
    _isRateLimited(p) {
      var O;
      const T = Date.now(),
        R =
          (O = this._leakyBucket[p]) !== null && O !== void 0
            ? O
            : { count: 0, lastRequestTime: T },
        L = T - R.lastRequestTime,
        A = Math.floor(L * w);
      return (
        (R.count = Math.max(0, R.count - A)),
        R.count >= E
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[p] = R), !1)
      );
    }
    _getPopulatedURL(p) {
      var O;
      const T = (O = p.fallbackUrl) !== null && O !== void 0 ? O : p.urlConfig.getUrl();
      (p.urlConfig.endpoint === g.Endpoint._initialize ||
        p.urlConfig.endpoint === g.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [g.NetworkParam.SdkKey]: p.sdkKey,
            [g.NetworkParam.SdkType]: b.SDKType._get(p.sdkKey),
            [g.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [g.NetworkParam.Time]: String(Date.now()),
            [g.NetworkParam.SessionID]: l.SessionID.get(p.sdkKey),
          },
          p.params,
        ),
        L = Object.keys(R)
          .map((A) => `${encodeURIComponent(A)}=${encodeURIComponent(R[A])}`)
          .join("&");
      return `${T}${L ? `?${L}` : ""}`;
    }
    _tryEncodeBody(p) {
      var O;
      const T = (0, v._getWindowSafe)(),
        R = p.body;
      if (
        !(
          !p.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof R != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((p.body = T.btoa(R).split("").reverse().join("")),
            (p.params = Object.assign(
              Object.assign({}, (O = p.params) !== null && O !== void 0 ? O : {}),
              { [g.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (L) {
          h.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, L);
        }
    }
    _tryToCompressBody(p) {
      return e(this, void 0, void 0, function* () {
        var O;
        const T = p.body;
        if (!(typeof T != "string" || !C(p, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              L = new CompressionStream("gzip"),
              A = L.writable.getWriter();
            (A.write(R).catch(h.Log.error), A.close().catch(h.Log.error));
            const ve = L.readable.getReader(),
              V = [];
            let $;
            for (; !($ = yield ve.read()).done; ) V.push($.value);
            const N = V.reduce((ce, he) => ce + he.length, 0),
              F = new Uint8Array(N);
            let K = 0;
            for (const ce of V) (F.set(ce, K), (K += ce.length));
            ((p.body = F),
              (p.params = Object.assign(
                Object.assign({}, (O = p.params) !== null && O !== void 0 ? O : {}),
                { [g.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            h.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(p, O) {
      const T = this._fallbackResolver.getActiveFallbackUrl(O.sdkKey, O.urlConfig),
        R = Object.assign(Object.assign({}, O), { method: p, fallbackUrl: T });
      return ("data" in O && D(R, O.data), R);
    }
  };
  oe.NetworkCore = y;
  const k = (I) => (I.sdkKey ? !0 : (h.Log.warn("Unable to make request without an SDK key"), !1)),
    D = (I, p) => {
      const { sdkKey: O, fallbackUrl: T } = I,
        R = u.StableID.get(O),
        L = l.SessionID.get(O),
        A = b.SDKType._get(O);
      I.body = JSON.stringify(
        Object.assign(Object.assign({}, p), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: L,
            sdkType: A,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(I, p) {
    if (
      !I.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const O = I.urlConfig.customUrl != null || I.urlConfig.fallbackUrls != null,
      T = S.SDKFlags.get(I.sdkKey, "enable_log_event_compression") === !0;
    switch (p.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(O && !T);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function M(I, p) {
    return I?.signal.aborted && typeof I.signal.reason == "string"
      ? I.signal.reason
      : typeof p == "string"
        ? p
        : p instanceof Error
          ? `${p.name}: ${p.message}`
          : "Unknown Error";
  }
  function U(I) {
    return (
      (I?.signal.aborted &&
        typeof I.signal.reason == "string" &&
        I.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function W(I, p) {
    I.urlConfig.endpoint === g.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(I.sdkKey, { attempt: p });
  }
  function x(I, p, O, T, R) {
    I.urlConfig.endpoint === g.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(I.sdkKey, c.Diagnostics._getDiagnosticsData(p, O, T, R));
  }
  function B(I) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((p) => setTimeout(p, Math.min(a * (I * I), d)));
    });
  }
  return oe;
}
var We = {},
  Bt;
function yn() {
  return (Bt || ((Bt = 1), Object.defineProperty(We, "__esModule", { value: !0 })), We);
}
var xe = {},
  $t;
function mn() {
  return ($t || (($t = 1), Object.defineProperty(xe, "__esModule", { value: !0 })), xe);
}
var He = {},
  Gt;
function Sn() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const m = 2,
          c = 1,
          h = (g, f) => {
            let S = 0;
            const b = Object.keys(g);
            for (let v = 0; v < b.length; v++) {
              const l = b[v],
                u = g[l];
              if (
                ((S += l.length),
                typeof u == "object" && u !== null
                  ? (S += (0, e._fastApproxSizeOf)(u, f) + m)
                  : (S += String(u).length + c),
                S >= f)
              )
                return S;
            }
            return S;
          };
        e._fastApproxSizeOf = h;
      })(He)),
    He
  );
}
var ae = {},
  Vt;
function bn() {
  if (Vt) return ae;
  Vt = 1;
  var e =
    (ae && ae.__awaiter) ||
    function (n, t, a, d) {
      function s(E) {
        return E instanceof a
          ? E
          : new a(function (w) {
              w(E);
            });
      }
      return new (a || (a = Promise))(function (E, w) {
        function _(D) {
          try {
            k(d.next(D));
          } catch (C) {
            w(C);
          }
        }
        function y(D) {
          try {
            k(d.throw(D));
          } catch (C) {
            w(C);
          }
        }
        function k(D) {
          D.done ? E(D.value) : s(D.value).then(_, y);
        }
        k((d = d.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.StatsigClientBase = void 0), H());
  const m = H(),
    c = nn(),
    h = Zt(),
    g = j(),
    f = rn(),
    S = ue(),
    b = rt(),
    v = Re(),
    l = Te(),
    u = Q(),
    r = 3e3;
  let o = class {
    constructor(t, a, d, s) {
      var E, w, _, y;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (s?.logLevel != null && (g.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && b.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && v.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && v.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (E = s?.overrideAdapter) !== null && E !== void 0 ? E : null),
        (this._logger = new h.EventLogger(t, k, d, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        d.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, d),
        (this.storageProvider = u.Storage),
        (y =
          (_ = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || _ === void 0
            ? void 0
            : _.call(w)) === null ||
          y === void 0 ||
          y.catch((D) => this._errorBoundary.logError("OA::loadFromStorage", D)),
        this._primeReadyRipcord(),
        i(t, this));
    }
    updateRuntimeOptions(t) {
      (t.loggingEnabled
        ? ((this._options.loggingEnabled = t.loggingEnabled),
          this._logger.setLoggingEnabled(t.loggingEnabled))
        : t.disableLogging != null &&
          ((this._options.disableLogging = t.disableLogging),
          this._logger.setLoggingEnabled(t.disableLogging ? "disabled" : "browser-only")),
        t.disableStorage != null &&
          ((this._options.disableStorage = t.disableStorage),
          u.Storage._setDisabled(t.disableStorage)),
        t.enableCookies != null &&
          ((this._options.enableCookies = t.enableCookies),
          v.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(l.LogEventCompressionMode.Disabled));
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return e(this, void 0, void 0, function* () {
        (this.$emt({ name: "pre_shutdown" }),
          this._setStatus("Uninitialized", null),
          (this._initializePromise = null),
          yield this._logger.stop());
      });
    }
    on(t, a) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(a));
    }
    off(t, a) {
      if (this._listeners[t]) {
        const d = this._listeners[t].indexOf(a);
        d !== -1 && this._listeners[t].splice(d, 1);
      }
    }
    $on(t, a) {
      ((a.__isInternal = !0), this.on(t, a));
    }
    $emt(t) {
      var a;
      const d = (s) => {
        try {
          s(t);
        } catch (E) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, E);
            return;
          }
          g.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => d(s)),
        (a = this._listeners["*"]) === null || a === void 0 || a.forEach(d));
    }
    _setStatus(t, a) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: a }));
    }
    _enqueueExposure(t, a, d) {
      if (d?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(a);
    }
    _memoize(t, a) {
      return (d, s) => {
        if (this._options.disableEvaluationMemoization) return a(d, s);
        const E = (0, f.createMemoKey)(t, d, s);
        return E
          ? (E in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[E] = a(d, s))),
            this._memoCache[E])
          : a(d, s);
      };
    }
  };
  ae.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const d = (0, m._getStatsigGlobal)(),
      s = (a = d.instances) !== null && a !== void 0 ? a : {},
      E = t;
    (s[n] != null &&
      g.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = E),
      d.firstInstance || (d.firstInstance = E),
      (d.instances = s),
      (__STATSIG__ = d));
  }
  return ae;
}
var ke = {},
  zt;
function pn() {
  return (
    zt ||
      ((zt = 1),
      Object.defineProperty(ke, "__esModule", { value: !0 }),
      (ke.DataAdapterCachePrefix = void 0),
      (ke.DataAdapterCachePrefix = "statsig.cached")),
    ke
  );
}
var Qe = {},
  Jt;
function En() {
  return (Jt || ((Jt = 1), Object.defineProperty(Qe, "__esModule", { value: !0 })), Qe);
}
var P = {},
  Wt;
function wn() {
  if (Wt) return P;
  ((Wt = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P._makeTypedGet =
      P._mergeOverride =
      P._makeLayer =
      P._makeExperiment =
      P._makeDynamicConfig =
      P._makeFeatureGate =
        void 0));
  const e = j(),
    m = Ze();
  function c(l, u, r, o) {
    var i;
    return {
      name: l,
      details: u,
      ruleID: (i = r?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: r,
      value: o,
    };
  }
  function h(l, u, r) {
    var o;
    return Object.assign(Object.assign({}, c(l, u, r, r?.value === !0)), {
      idType: (o = r?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  P._makeFeatureGate = h;
  function g(l, u, r) {
    var o;
    const i = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, i)), { get: v(l, r?.value) });
  }
  P._makeDynamicConfig = g;
  function f(l, u, r) {
    var o;
    const i = g(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  P._makeExperiment = f;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: v(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  P._makeLayer = S;
  function b(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: v(l.name, r, o) });
  }
  P._mergeOverride = b;
  function v(l, u, r) {
    return (o, i) => {
      var n;
      const t = (n = u?.[o]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, m._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${l}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (r?.(o), t);
    };
  }
  return ((P._makeTypedGet = v), P);
}
var Xe = {},
  xt;
function kn() {
  return (xt || ((xt = 1), Object.defineProperty(Xe, "__esModule", { value: !0 })), Xe);
}
var le = {},
  Ht;
function Dn() {
  if (Ht) return le;
  ((Ht = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.UPDATE_DETAIL_ERROR_MESSAGES = le.createUpdateDetails = void 0));
  const e = (m, c, h, g, f, S) => ({
    duration: h,
    source: c,
    success: m,
    error: g,
    sourceUrl: f,
    warnings: S,
  });
  return (
    (le.createUpdateDetails = e),
    (le.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    le
  );
}
var Qt;
function On() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        var m =
            (X && X.__createBinding) ||
            (Object.create
              ? function (l, u, r, o) {
                  o === void 0 && (o = r);
                  var i = Object.getOwnPropertyDescriptor(u, r);
                  ((!i || ("get" in i ? !u.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return u[r];
                      },
                    }),
                    Object.defineProperty(l, o, i));
                }
              : function (l, u, r, o) {
                  (o === void 0 && (o = r), (l[o] = u[r]));
                }),
          c =
            (X && X.__exportStar) ||
            function (l, u) {
              for (var r in l)
                r !== "default" && !Object.prototype.hasOwnProperty.call(u, r) && m(u, l, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          H());
        const h = H(),
          g = Ye();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return g.Diagnostics;
          },
        });
        const f = Zt();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return f.EventLogger;
          },
        });
        const S = j();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const b = Oe(),
          v = Q();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return v.Storage;
          },
        }),
          c(H(), e),
          c(Ie(), e),
          c(ln(), e),
          c(un(), e),
          c(Ye(), e),
          c(cn(), e),
          c(nn(), e),
          c(dn(), e),
          c(_n(), e),
          c(ge(), e),
          c(fn(), e),
          c(j(), e),
          c(rn(), e),
          c(Ce(), e),
          c(hn(), e),
          c(yn(), e),
          c(mn(), e),
          c(ue(), e),
          c(nt(), e),
          c(rt(), e),
          c(Sn(), e),
          c(Re(), e),
          c(bn(), e),
          c(sn(), e),
          c(pn(), e),
          c(Xt(), e),
          c(Oe(), e),
          c(Te(), e),
          c(En(), e),
          c(wn(), e),
          c(kn(), e),
          c(en(), e),
          c(Q(), e),
          c(tn(), e),
          c(Ze(), e),
          c(Yt(), e),
          c(tt(), e),
          c(et(), e),
          c(Dn(), e),
          c(on(), e),
          Object.assign((0, h._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: b.SDK_VERSION }));
      })(X)),
    X
  );
}
var Pn = On();
export { Cn as a, st as c, In as g, On as r, Pn as s };
