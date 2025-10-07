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
    var c = function y() {
      var f = !1;
      try {
        f = this instanceof y;
      } catch {}
      return f ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    c.prototype = m.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (y) {
      var f = Object.getOwnPropertyDescriptor(e, y);
      Object.defineProperty(
        c,
        y,
        f.get
          ? f
          : {
              enumerable: !0,
              get: function () {
                return e[y];
              },
            },
      );
    }),
    c
  );
}
var Y = {},
  Ue = {},
  Pe = {},
  at;
function j() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          f = " ERROR ";
        function g(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...v) {
            S.level >= e.LogLevel.Info && console.info(c, ...g(v));
          }
          static debug(...v) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...g(v));
          }
          static warn(...v) {
            S.level >= e.LogLevel.Warn && console.warn(y, ...g(v));
          }
          static error(...v) {
            S.level >= e.LogLevel.Error && console.error(f, ...g(v));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(Pe)),
    Pe
  );
}
var lt;
function H() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        var m, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const f = j(),
          g = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = g;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const b = (i) => {
          const n = (0, e._getStatsigGlobal)();
          return i
            ? n.instances && n.instances[i]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                f.Log.warn(
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
            (y =
              (c = (m = l[v]) !== null && m !== void 0 ? m : u[v]) !== null && c !== void 0
                ? c
                : r[v]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((l[v] = o), (u[v] = o), (r[v] = o));
      })(Ue)),
    Ue
  );
}
var Ae = {},
  ut;
function Ze() {
  return (
    ut ||
      ((ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          y = "end",
          f = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (l) => m.get(l),
          _markInitOverallStart: (l) => {
            b(l, g({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            b(
              l,
              g(
                {
                  success: u,
                  error: u ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: r,
                },
                y,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (l, u) => {
            b(l, g(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            b(l, g(u, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            b(l, g({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            b(l, g(u, y, "initialize", "process"));
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
        function g(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: f, user: l, value: null, metadata: u, time: Date.now() };
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
var Z = {},
  ee = {},
  je = {},
  te = {},
  ct;
function et() {
  if (ct) return te;
  ((ct = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te._isTypeMatch = te._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  te._typeOf = e;
  function m(c, y) {
    const f = (g) => (Array.isArray(g) ? "array" : g === null ? "null" : typeof g);
    return f(c) === f(y);
  }
  return ((te._isTypeMatch = m), te);
}
var dt;
function ge() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = et(),
          c = (g) => {
            let S = 0;
            for (let b = 0; b < g.length; b++) {
              const v = g.charCodeAt(b);
              ((S = (S << 5) - S + v), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const y = (g, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(g, S)));
        e._DJB2Object = y;
        const f = (g, S) => {
          if (g == null) return null;
          const b = Object.keys(g).sort(),
            v = {};
          return (
            b.forEach((l) => {
              const u = g[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                v[l] = u;
                return;
              }
              v[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            v
          );
        };
        e._getSortedObject = f;
      })(je)),
    je
  );
}
var _t;
function Ie() {
  if (_t) return ee;
  ((_t = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee._getStorageKey = ee._getUserStorageKey = void 0));
  const e = ge();
  function m(y, f, g) {
    var S;
    if (g) return g(y, f);
    const b = f && f.customIDs ? f.customIDs : {},
      v = [
        `uid:${(S = f?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(b)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${b[l]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(v.join("|"));
  }
  ee._getUserStorageKey = m;
  function c(y, f, g) {
    return f ? m(y, f, g) : (0, e._DJB2)(`k:${y}`);
  }
  return ((ee._getStorageKey = c), ee);
}
var Ne = {},
  gt;
function Ce() {
  return (
    gt ||
      ((gt = 1),
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
      })(Ne)),
    Ne
  );
}
var Fe = {},
  ft;
function ce() {
  return (
    ft ||
      ((ft = 1),
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
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const v =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || v;
        };
        e._isServerEnv = y;
        const f = (v, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(v, l);
        };
        e._addWindowEventListenerSafe = f;
        const g = (v, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(v, l);
        };
        e._addDocumentEventListenerSafe = g;
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
      })(Fe)),
    Fe
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
    y = (u, r, o, i, n) => (
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
    f = ({ eventName: u }) => u === m || u === e || u === c;
  q._isExposureEvent = f;
  const g = (u, r, o) => {
    var i, n, t;
    const a = { gate: r.name, gateValue: String(r.value), ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (a.configVersion = r.__evaluation.version),
      y(
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
  q._createGateExposure = g;
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
      y(
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
    var n, t, a, d, s, p, k;
    const _ = r.__evaluation,
      h = ((n = _?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let w = "",
      D = (t = _?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    h &&
      ((w = (a = _.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (D = (d = _.secondary_exposures) !== null && d !== void 0 ? d : []));
    const I = (s = r.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      M = {
        config: r.name,
        parameterName: o,
        ruleID: (p = I?.[o]) !== null && p !== void 0 ? p : r.ruleID,
        allocatedExperiment: w,
        isExplicitParameter: String(h),
      };
    return (
      ((k = r.__evaluation) === null || k === void 0 ? void 0 : k.version) != null &&
        (M.configVersion = r.__evaluation.version),
      y(c, u, r.details, M, S(D, i))
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
var ne = {},
  ht;
function Te() {
  return (
    ht ||
      ((ht = 1),
      Object.defineProperty(ne, "__esModule", { value: !0 }),
      (ne.LoggingEnabledOption = ne.LogEventCompressionMode = void 0),
      (ne.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (ne.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    ne
  );
}
var qe = {},
  yt;
function X() {
  return (
    yt ||
      ((yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = j(),
          c = ce(),
          y = {},
          f = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (r) => (y[r] ? y[r] : null),
            setItem: (r, o) => {
              y[r] = o;
            },
            removeItem: (r) => {
              delete y[r];
            },
            getAllKeys: () => Object.keys(y),
          };
        let g = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (g = {
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
        let S = g ?? f,
          b = S;
        function v(r) {
          try {
            return r();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(f), null);
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
            r ? (b = f) : (b = S);
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
      })(qe)),
    qe
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
  let y = class {
    constructor(g, S, b, v) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = g),
        (this.endpointDnsKey = c[g]),
        S && (this.customUrl = S),
        !S && b && (this.customUrl = b.endsWith("/") ? `${b}${g}` : `${b}/${g}`),
        v && (this.fallbackUrls = v));
      const l = m.NetworkDefault[g];
      this.defaultUrl = `${l}/${g}`;
    }
    getUrl() {
      var g;
      return (g = this.customUrl) !== null && g !== void 0 ? g : this.defaultUrl;
    }
    getChecksum() {
      var g;
      const S = ((g = this.fallbackUrls) !== null && g !== void 0 ? g : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  };
  return ((ye.UrlConfiguration = y), ye);
}
var Ke = {},
  St;
function tt() {
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
        const m = ce(),
          c = "foreground",
          y = "background",
          f = [];
        let g = c,
          S = !1;
        const b = () => g === c;
        e._isCurrentlyVisible = b;
        const v = () => S;
        e._isUnloading = v;
        const l = (r) => {
          f.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== g && ((g = r), f.forEach((o) => o(r)));
        };
        ((e._notifyVisibilityChanged = u),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((S = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((S = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(Ke)),
    Ke
  );
}
var bt;
function Zt() {
  if (bt) return Z;
  bt = 1;
  var e =
    (Z && Z.__awaiter) ||
    function (k, _, h, w) {
      function D(I) {
        return I instanceof h
          ? I
          : new h(function (M) {
              M(I);
            });
      }
      return new (h || (h = Promise))(function (I, M) {
        function U(B) {
          try {
            x(w.next(B));
          } catch (C) {
            M(C);
          }
        }
        function W(B) {
          try {
            x(w.throw(B));
          } catch (C) {
            M(C);
          }
        }
        function x(B) {
          B.done ? I(B.value) : D(B.value).then(U, W);
        }
        x((w = w.apply(k, _ || [])).next());
      });
    };
  (Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.EventLogger = void 0));
  const m = Ie(),
    c = ge(),
    y = j(),
    f = Ce(),
    g = ce(),
    S = Xt(),
    b = Te(),
    v = X(),
    l = Yt(),
    u = tt(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    d = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let p = class _e {
    static _safeFlushAndForget(_) {
      var h;
      (h = d[_]) === null || h === void 0 || h.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(_) {
      var h;
      (h = d[_]) === null || h === void 0 || h._retryFailedLogs(s.GainedFocus);
    }
    constructor(_, h, w, D) {
      var I, M;
      ((this._sdkKey = _),
        (this._emitter = h),
        (this._network = w),
        (this._options = D),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (I = D?.loggingEnabled) !== null && I !== void 0
            ? I
            : D?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        D?.loggingEnabled &&
          D.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (M = D?.loggingBufferMaxSize) !== null && M !== void 0 ? M : r));
      const U = D?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        f.Endpoint._rgstr,
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
        const h = this._getStorageKey(),
          w = (0, v._getObjectFromStorage)(h);
        (w && this._queue.push(...w), v.Storage.removeItem(h));
      }
      this._loggingEnabled = _;
    }
    enqueue(_) {
      this._shouldLogEvent(_) &&
        (this._normalizeAndAppendEvent(_),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && _e._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(_) {
      var h;
      const w = (h = this._nonExposedChecks[_]) !== null && h !== void 0 ? h : 0;
      this._nonExposedChecks[_] = w + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var _;
      const h = (0, g._isServerEnv)();
      (h &&
        ((_ = this._options) === null || _ === void 0 ? void 0 : _.loggingEnabled) !== "always") ||
        ((d[this._sdkKey] = this),
        h ||
          (0, u._subscribeToVisiblityChanged)((w) => {
            w === "background"
              ? _e._safeFlushAndForget(this._sdkKey)
              : w === "foreground" && _e._safeRetryFailedLogs(this._sdkKey);
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
          setTimeout(() => _e._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(_) {
      var h;
      if (
        ((h = this._options) === null || h === void 0 ? void 0 : h.loggingEnabled) !== "always" &&
        (0, g._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(_)) return !0;
      const w = _.user ? _.user : { statsigEnvironment: void 0 },
        D = (0, m._getUserStorageKey)(this._sdkKey, w),
        I = _.metadata ? _.metadata : {},
        M = [
          _.eventName,
          D,
          I.gate,
          I.config,
          I.ruleID,
          I.allocatedExperiment,
          I.parameterName,
          String(I.isExplicitParameter),
          I.reason,
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
        var h, w;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(_), !1);
        try {
          const I =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((w = (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
              null || w === void 0
              ? void 0
              : w.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: _ }),
            (I ? this._sendEventsViaBeacon(_) : yield this._sendEventsViaPost(_)).success
              ? (this._emitter({ name: "logs_flushed", events: _ }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(_), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(_) {
      return e(this, void 0, void 0, function* () {
        var h;
        const w = yield this._network.post(this._getRequestData(_)),
          D = (h = w?.code) !== null && h !== void 0 ? h : -1;
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
        params: { [f.NetworkParam.EventCount]: String(_.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(_) {
      for (; _.length > t; ) _.shift();
      const h = this._getStorageKey();
      try {
        const w = this._getFailedLogsFromStorage(h);
        (0, v._setObjectInStorage)(h, [...w, ..._]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(_) {
      let h = [];
      try {
        const w = (0, v._getObjectFromStorage)(_);
        return (Array.isArray(w) && (h = w), h);
      } catch {
        return [];
      }
    }
    _retryFailedLogs(_) {
      const h = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const w = (0, v._getObjectFromStorage)(h);
        if (!w) return;
        (_ === s.Startup && v.Storage.removeItem(h),
          (yield this._sendEvents(w)) && _ === s.GainedFocus && v.Storage.removeItem(h));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(_) {
      _.user && ((_.user = Object.assign({}, _.user)), delete _.user.privateAttributes);
      const h = {},
        w = this._getCurrentPageUrl();
      w && (h.statsigMetadata = { currentPage: w });
      const D = Object.assign(Object.assign({}, _), h);
      (y.Log.debug("Enqueued Event:", D), this._queue.push(D));
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
        return (0, g._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var _, h;
      const w =
          (h = (_ = this._options) === null || _ === void 0 ? void 0 : _.loggingIntervalMs) !==
            null && h !== void 0
            ? h
            : o,
        D = setInterval(() => {
          const I = d[this._sdkKey];
          !I || I._flushIntervalId !== D ? clearInterval(D) : _e._safeFlushAndForget(this._sdkKey);
        }, w);
      this._flushIntervalId = D;
    }
  };
  return ((Z.EventLogger = p), Z);
}
var Be = {},
  pt;
function Oe() {
  return (
    pt ||
      ((pt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.26.0"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Be)),
    Be
  );
}
var $e = {},
  Et;
function ln() {
  return (Et || ((Et = 1), Object.defineProperty($e, "__esModule", { value: !0 })), $e);
}
var z = {},
  re = {},
  me = {},
  wt;
function nt() {
  if (wt) return me;
  ((wt = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (f) => {
        let g = Math.random() * 16;
        return (
          m > 0
            ? ((g = (m + g) % 16 | 0), (m = Math.floor(m / 16)))
            : ((g = (c + g) % 16 | 0), (c = Math.floor(c / 16))),
          (f === "x" ? g : (g & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((me.getUUID = e), me);
}
var kt;
function Re() {
  if (kt) return re;
  ((kt = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.getCookieName = re.StableID = void 0));
  const e = Ie(),
    m = j(),
    c = ce(),
    y = X(),
    f = nt(),
    g = {},
    S = {},
    b = {};
  re.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (b[n]) return null;
      if (g[n] != null) return g[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((g[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, f.getUUID)()), l(t, n), o(t, n), (g[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((g[t] = n), l(n, t), o(n, t));
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
      (0, y._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = v(n);
    return (0, y._getObjectFromStorage)(t);
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
  return ((re.getCookieName = i), re);
}
var ie = {},
  Dt;
function en() {
  if (Dt) return ie;
  ((Dt = 1),
    Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._getFullUserHash = ie._normalizeUser = void 0));
  const e = ge(),
    m = j();
  function c(f, g, S) {
    try {
      const b = JSON.parse(JSON.stringify(f));
      return (
        g != null && g.environment != null
          ? (b.statsigEnvironment = g.environment)
          : S != null && (b.statsigEnvironment = { tier: S }),
        b
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  ie._normalizeUser = c;
  function y(f) {
    return f ? (0, e._DJB2Object)(f) : null;
  }
  return ((ie._getFullUserHash = y), ie);
}
var Se = {},
  Ot;
function tn() {
  if (Ot) return Se;
  ((Ot = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se._typedJsonParse = void 0));
  const e = j();
  function m(c, y, f) {
    try {
      const g = JSON.parse(c);
      if (g && typeof g == "object" && y in g) return g;
    } catch {}
    return (e.Log.error(`Failed to parse ${f}`), null);
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
        function p(h) {
          try {
            _(t.next(h));
          } catch (w) {
            s(w);
          }
        }
        function k(h) {
          try {
            _(t.throw(h));
          } catch (w) {
            s(w);
          }
        }
        function _(h) {
          h.done ? d(h.value) : a(h.value).then(p, k);
        }
        _((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._makeDataAdapterResult = z.DataAdapterCore = void 0));
  const m = j(),
    c = Re(),
    y = en(),
    f = X(),
    g = tn(),
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
      const n = i && (0, y._normalizeUser)(i, this._options),
        t = this._getCacheKey(n),
        a = this._inMemoryCache.get(t, n);
      if (a && this._getIsCacheValueValid(a)) return a;
      const d = this._loadFromCache(t);
      return d && this._getIsCacheValueValid(d)
        ? (this._inMemoryCache.add(t, d, this._cacheLimit), this._inMemoryCache.get(t, n))
        : null;
    }
    setData(i, n) {
      const t = n && (0, y._normalizeUser)(n, this._options),
        a = this._getCacheKey(t);
      this._inMemoryCache.add(a, l("Bootstrap", i, null, t), this._cacheLimit);
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, n, t) {
      return e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
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
        const t = i && (0, y._normalizeUser)(i, this._options),
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
          p = yield this._fetchFromNetwork(d, n, t, s);
        if (!p) return (m.Log.debug("No response returned for latest value"), null);
        const k = (0, g._typedJsonParse)(p, "has_updates", "Response"),
          _ = this._getSdkKey(),
          h = c.StableID.get(_);
        let w = null;
        if (k?.has_updates === !0) w = l("Network", p, h, n);
        else if (d && k?.has_updates === !1) w = l("NetworkNotModified", d, h, n);
        else return null;
        const D = this._getCacheKey(n);
        return (this._inMemoryCache.add(D, w, this._cacheLimit), this._writeToCache(D, w), w);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var n;
      const t = (n = f.Storage.getItem) === null || n === void 0 ? void 0 : n.call(f.Storage, i);
      if (t == null) return null;
      const a = (0, g._typedJsonParse)(t, "source", "Cached Result");
      return a ? Object.assign(Object.assign({}, a), { source: "Cache" }) : null;
    }
    _writeToCache(i, n) {
      const t = JSON.stringify(n);
      for (let a = 0; a < b; a++)
        try {
          f.Storage.setItem(i, t);
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
        (t = (0, f._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      a[i] = Date.now();
      const d = r(a, n);
      for (const s of d) (delete a[s], f.Storage.removeItem(s));
      (0, f._setObjectInStorage)(this._lastModifiedStoreKey, a);
    }
  };
  z.DataAdapterCore = v;
  function l(o, i, n, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: n,
      fullUserHash: (0, y._getFullUserHash)(t),
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
var Ge = {},
  Ct;
function cn() {
  return (Ct || ((Ct = 1), Object.defineProperty(Ge, "__esModule", { value: !0 })), Ge);
}
var be = {},
  pe = {},
  Tt;
function rt() {
  if (Tt) return pe;
  ((Tt = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.SDKType = void 0));
  const e = {};
  let m;
  return (
    (pe.SDKType = {
      _get: (c) => {
        var y;
        return ((y = e[c]) !== null && y !== void 0 ? y : "js-mono") + (m ?? "");
      },
      _setClientType(c, y) {
        e[c] = y;
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
                  k(n.next(_));
                } catch (h) {
                  d(h);
                }
              }
              function p(_) {
                try {
                  k(n.throw(_));
                } catch (h) {
                  d(h);
                }
              }
              function k(_) {
                _.done ? a(_.value) : t(_.value).then(s, p);
              }
              k((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = j(),
          y = rt(),
          f = Oe();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const g = "[Statsig] UnknownError";
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
                  var t, a, d, s, p, k, _;
                  const h = i || Error(g),
                    w = h instanceof Error,
                    D = w ? h.name : "No Name",
                    I = b(h);
                  if (((this._lastSeenError = I), this._seen.has(D))) return;
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
                  const M = y.SDKType._get(this._sdkKey),
                    U = f.StatsigMetadataProvider.get(),
                    W = w ? h.stack : v(h),
                    x = Object.assign(
                      { tag: o, exception: D, info: W, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, U), { sdkType: M }),
                    );
                  (yield (
                    (k =
                      (p =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || p === void 0
                        ? void 0
                        : p.networkOverrideFunc) !== null && k !== void 0
                      ? k
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
            return g;
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
var Ve = {},
  Lt;
function dn() {
  return (Lt || ((Lt = 1), Object.defineProperty(Ve, "__esModule", { value: !0 })), Ve);
}
var ze = {},
  Mt;
function _n() {
  return (Mt || ((Mt = 1), Object.defineProperty(ze, "__esModule", { value: !0 })), ze);
}
var Je = {},
  Ut;
function gn() {
  return (Ut || ((Ut = 1), Object.defineProperty(Je, "__esModule", { value: !0 })), Je);
}
var oe = {},
  Pt;
function rn() {
  if (Pt) return oe;
  ((Pt = 1),
    Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe.createMemoKey = oe.MemoPrefix = void 0),
    (oe.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function c(y, f, g) {
    let S = `${y}|${f}`;
    if (!g) return S;
    for (const b of Object.keys(g)) {
      if (m.has(b)) return;
      e.has(b) ? (S += `|${b}=true`) : (S += `|${b}=${g[b]}`);
    }
    return S;
  }
  return ((oe.createMemoKey = c), oe);
}
var se = {},
  J = {},
  ae = {},
  At;
function fn() {
  if (At) return ae;
  At = 1;
  var e =
    (ae && ae.__awaiter) ||
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
  (Object.defineProperty(ae, "__esModule", { value: !0 }), (ae._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    f = 200;
  function g(b) {
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
  ae._fetchTxtRecords = g;
  function S(b) {
    const v = b.findIndex(
      (u, r) =>
        r < f && String.fromCharCode(u) === "=" && y.includes(String.fromCharCode(b[r - 1])),
    );
    if (v === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = v - 1; u < b.length; u++) l += String.fromCharCode(b[u]);
    return l.split(",");
  }
  return ae;
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
          : new t(function (p) {
              p(s);
            });
      }
      return new (t || (t = Promise))(function (s, p) {
        function k(w) {
          try {
            h(a.next(w));
          } catch (D) {
            p(D);
          }
        }
        function _(w) {
          try {
            h(a.throw(w));
          } catch (D) {
            p(D);
          }
        }
        function h(w) {
          w.done ? s(w.value) : d(w.value).then(k, _);
        }
        h((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(J, "__esModule", { value: !0 }),
    (J._isDomainFailure = J.NetworkFallbackResolver = void 0));
  const m = fn(),
    c = ge(),
    y = j(),
    f = X(),
    g = 10080 * 60 * 1e3,
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
        ((d.expiryTime = Date.now() + g),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: d })));
    }
    getActiveFallbackUrl(n, t) {
      var a, d;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const p = s[t.endpoint];
      return !p ||
        Date.now() > ((d = p.expiryTime) !== null && d !== void 0 ? d : 0) ||
        t.getChecksum() !== p.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : p.url
          ? p.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, d) {
      return e(this, void 0, void 0, function* () {
        var s, p;
        try {
          if (!v(a, d)) return !1;
          const _ =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            h = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              _,
            );
          return h ? (this._updateFallbackInfoWithNewUrl(n, t, h), !0) : !1;
        } catch (k) {
          return (
            (p = this._errorBoundary) === null ||
              p === void 0 ||
              p.logError("tryFetchUpdatedFallbackInfo", k),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var d, s, p;
      const k = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + g,
          previous: [],
        },
        _ = t.endpoint,
        h = (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[_];
      (h && k.previous.push(...h.previous), k.previous.length > 10 && (k.previous = []));
      const w =
        (p = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[_]) === null ||
        p === void 0
          ? void 0
          : p.url;
      (w != null && k.previous.push(w),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [_]: k })),
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
          p = o(n.defaultUrl);
        for (const k of s) {
          if (!k.startsWith(n.endpointDnsKey + "=")) continue;
          const _ = k.split("=");
          if (_.length > 1) {
            let h = _[1];
            (h.endsWith("/") && (h = h.slice(0, -1)), d.push(`https://${h}${p}`));
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
      let p = null;
      for (const k of t) {
        const _ = k.endsWith("/") ? k.slice(0, -1) : k;
        if (!d.has(k) && _ !== s) {
          p = _;
          break;
        }
      }
      return p;
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
      f.Storage.removeItem(t);
      return;
    }
    f.Storage.setItem(t, JSON.stringify(n));
  }
  function r(i) {
    const n = l(i),
      t = f.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (y.Log.error("Failed to parse FallbackInfo"), null);
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
        var y, f;
        return (f = (y = e[m]) === null || y === void 0 ? void 0 : y[c]) !== null && f !== void 0
          ? f
          : !1;
      },
    }),
    Ee
  );
}
var We = {},
  Ft;
function it() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = H(),
          c = Ie(),
          y = j(),
          f = X(),
          g = nt(),
          S = 1800 * 1e3,
          b = 14400 * 1e3,
          v = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              v[s] == null && (v[s] = l(s));
              const p = v[s];
              return r(p);
            },
            overrideInitialSessionID: (s, p) => {
              v[p] = u(s, p);
            },
          }));
        function l(s) {
          let p = d(s);
          const k = Date.now();
          return (
            p || (p = { sessionID: (0, g.getUUID)(), startTime: k, lastUpdate: k }),
            { data: p, sdkKey: s }
          );
        }
        function u(s, p) {
          const k = Date.now();
          return { data: { sessionID: s, startTime: k, lastUpdate: k }, sdkKey: p };
        }
        function r(s) {
          const p = Date.now(),
            k = s.data,
            _ = s.sdkKey;
          if (i(k) || n(k)) {
            ((k.sessionID = (0, g.getUUID)()), (k.startTime = p));
            const w = __STATSIG__ == null ? void 0 : __STATSIG__.instance(_);
            w && w.$emt({ name: "session_expired" });
          }
          ((k.lastUpdate = p),
            a(k, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const h = p - k.startTime;
          return ((s.idleTimeoutID = o(_, S)), (s.ageTimeoutID = o(_, b - h)), s);
        }
        function o(s, p) {
          return setTimeout(() => {
            var k;
            const _ =
              (k = (0, m._getStatsigGlobal)()) === null || k === void 0 ? void 0 : k.instance(s);
            _ && _.$emt({ name: "session_expired" });
          }, p);
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
        function a(s, p) {
          const k = t(p);
          try {
            (0, f._setObjectInStorage)(k, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function d(s) {
          const p = t(s);
          return (0, f._getObjectFromStorage)(p);
        }
      })(We)),
    We
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
  if (Kt) return se;
  Kt = 1;
  var e =
    (se && se.__awaiter) ||
    function (C, E, O, T) {
      function R(L) {
        return L instanceof O
          ? L
          : new O(function (P) {
              P(L);
            });
      }
      return new (O || (O = Promise))(function (L, P) {
        function fe(N) {
          try {
            $(T.next(N));
          } catch (F) {
            P(F);
          }
        }
        function G(N) {
          try {
            $(T.throw(N));
          } catch (F) {
            P(F);
          }
        }
        function $(N) {
          N.done ? L(N.value) : R(N.value).then(fe, G);
        }
        $((T = T.apply(C, E || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }), (se.NetworkCore = void 0), H());
  const m = H(),
    c = Ze(),
    y = j(),
    f = Ce(),
    g = vn(),
    S = on(),
    b = rt(),
    v = ce(),
    l = it(),
    u = Re(),
    r = sn(),
    o = Oe(),
    i = Te(),
    n = tt(),
    t = 1e4,
    a = 500,
    d = 3e4,
    s = 1e3,
    p = 50,
    k = p / s,
    _ = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let h = class {
    constructor(E, O) {
      ((this._emitter = O),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        E && (this._options = E),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new g.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(E)));
    }
    setLogEventCompressionMode(E) {
      this._options.logEventCompressionMode = E;
    }
    setErrorBoundary(E) {
      ((this._errorBoundary = E),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(E));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const E = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), E);
    }
    beacon(E) {
      if (!w(E)) return !1;
      const O = this._getInternalRequestArgs("POST", E),
        T = this._getPopulatedURL(O),
        R = navigator;
      return R.sendBeacon.bind(R)(T, O.body);
    }
    post(E) {
      return e(this, void 0, void 0, function* () {
        const O = this._getInternalRequestArgs("POST", E);
        return (this._tryEncodeBody(O), yield this._tryToCompressBody(O), this._sendRequest(O));
      });
    }
    get(E) {
      const O = this._getInternalRequestArgs("GET", E);
      return this._sendRequest(O);
    }
    _sendRequest(E) {
      return e(this, void 0, void 0, function* () {
        var O, T, R, L;
        if (!w(E) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: fe, retries: G, attempt: $ } = E,
          N = E.urlConfig.endpoint;
        if (this._isRateLimited(N))
          return (
            y.Log.warn(
              `Request to ${N} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const F = $ ?? 1;
        let ve = !1;
        const Q = this._getPopulatedURL(E);
        let K = null;
        const an = (0, n._isUnloading)();
        try {
          const de = {
            method: P,
            body: fe,
            headers: Object.assign({}, E.headers),
            priority: E.priority,
            keepalive: an,
          };
          W(E, F);
          const V = this._leakyBucket[N];
          V && ((V.lastRequestTime = Date.now()), (this._leakyBucket[N] = V));
          const Le = (O = this._netConfig.networkOverrideFunc) !== null && O !== void 0 ? O : fetch;
          let Me;
          if (
            ((K = yield Promise.race([
              Le(Q, de).finally(() => clearTimeout(Me)),
              new Promise((ot, De) => {
                Me = setTimeout(() => {
                  ((ve = !0), De(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !K.ok)
          ) {
            const ot = yield K.text().catch(() => "No Text"),
              De = new Error(`NetworkError: ${Q} ${ot}`);
            throw ((De.name = "NetworkError"), De);
          }
          const he = yield K.text();
          return (
            x(E, K, F, he),
            this._fallbackResolver.tryBumpExpiryTime(E.sdkKey, E.urlConfig),
            { body: he, code: K.status }
          );
        } catch (de) {
          const V = M(de),
            Le = U(V ?? "", ve);
          if (
            (x(E, K, F, "", de),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              E.sdkKey,
              E.urlConfig,
              V,
              Le,
            )) &&
              (E.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(E.sdkKey, E.urlConfig)),
            !G || F > G || !_.has((T = K?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: de,
                tag: r.ErrorTag.NetworkError,
                requestArgs: E,
              });
            const he = `A networking error occurred during ${P} request to ${Q}.`;
            return (
              y.Log.error(he, V, de),
              (L = this._errorBoundary) === null || L === void 0 || L.attachErrorIfNoneExists(he),
              null
            );
          }
          return (
            yield B(F),
            this._sendRequest(Object.assign(Object.assign({}, E), { retries: G, attempt: F + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(E) {
      let O = E?.logEventCompressionMode;
      return (
        !O && E?.disableCompression === !0 && (O = i.LogEventCompressionMode.Disabled),
        O || (O = i.LogEventCompressionMode.Enabled),
        O
      );
    }
    _isRateLimited(E) {
      var O;
      const T = Date.now(),
        R =
          (O = this._leakyBucket[E]) !== null && O !== void 0
            ? O
            : { count: 0, lastRequestTime: T },
        L = T - R.lastRequestTime,
        P = Math.floor(L * k);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= p
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[E] = R), !1)
      );
    }
    _getPopulatedURL(E) {
      var O;
      const T = (O = E.fallbackUrl) !== null && O !== void 0 ? O : E.urlConfig.getUrl();
      (E.urlConfig.endpoint === f.Endpoint._initialize ||
        E.urlConfig.endpoint === f.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [f.NetworkParam.SdkKey]: E.sdkKey,
            [f.NetworkParam.SdkType]: b.SDKType._get(E.sdkKey),
            [f.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [f.NetworkParam.Time]: String(Date.now()),
            [f.NetworkParam.SessionID]: l.SessionID.get(E.sdkKey),
          },
          E.params,
        ),
        L = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${L ? `?${L}` : ""}`;
    }
    _tryEncodeBody(E) {
      var O;
      const T = (0, v._getWindowSafe)(),
        R = E.body;
      if (
        !(
          !E.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof R != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((E.body = T.btoa(R).split("").reverse().join("")),
            (E.params = Object.assign(
              Object.assign({}, (O = E.params) !== null && O !== void 0 ? O : {}),
              { [f.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (L) {
          y.Log.warn(`Request encoding failed for ${E.urlConfig.getUrl()}`, L);
        }
    }
    _tryToCompressBody(E) {
      return e(this, void 0, void 0, function* () {
        var O;
        const T = E.body;
        if (!(typeof T != "string" || !I(E, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              L = new CompressionStream("gzip"),
              P = L.writable.getWriter();
            (P.write(R).catch(y.Log.error), P.close().catch(y.Log.error));
            const fe = L.readable.getReader(),
              G = [];
            let $;
            for (; !($ = yield fe.read()).done; ) G.push($.value);
            const N = G.reduce((Q, K) => Q + K.length, 0),
              F = new Uint8Array(N);
            let ve = 0;
            for (const Q of G) (F.set(Q, ve), (ve += Q.length));
            ((E.body = F),
              (E.params = Object.assign(
                Object.assign({}, (O = E.params) !== null && O !== void 0 ? O : {}),
                { [f.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            y.Log.warn(`Request compression failed for ${E.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(E, O) {
      const T = this._fallbackResolver.getActiveFallbackUrl(O.sdkKey, O.urlConfig),
        R = Object.assign(Object.assign({}, O), { method: E, fallbackUrl: T });
      return ("data" in O && D(R, O.data), R);
    }
  };
  se.NetworkCore = h;
  const w = (C) => (C.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    D = (C, E) => {
      const { sdkKey: O, fallbackUrl: T } = C,
        R = u.StableID.get(O),
        L = l.SessionID.get(O),
        P = b.SDKType._get(O);
      C.body = JSON.stringify(
        Object.assign(Object.assign({}, E), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: L,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function I(C, E) {
    if (
      !C.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const O = C.urlConfig.customUrl != null || C.urlConfig.fallbackUrls != null,
      T = S.SDKFlags.get(C.sdkKey, "enable_log_event_compression") === !0;
    switch (E.logEventCompressionMode) {
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
  function M(C) {
    return typeof C == "string"
      ? C
      : C instanceof Error
        ? `${C.name}: ${C.message}`
        : "Unknown Error";
  }
  function U(C, E) {
    return C.includes("Timeout") || E;
  }
  function W(C, E) {
    C.urlConfig.endpoint === f.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(C.sdkKey, { attempt: E });
  }
  function x(C, E, O, T, R) {
    C.urlConfig.endpoint === f.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(C.sdkKey, c.Diagnostics._getDiagnosticsData(E, O, T, R));
  }
  function B(C) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((E) => setTimeout(E, Math.min(a * (C * C), d)));
    });
  }
  return se;
}
var xe = {},
  Bt;
function yn() {
  return (Bt || ((Bt = 1), Object.defineProperty(xe, "__esModule", { value: !0 })), xe);
}
var Qe = {},
  $t;
function mn() {
  return ($t || (($t = 1), Object.defineProperty(Qe, "__esModule", { value: !0 })), Qe);
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
          y = (f, g) => {
            let S = 0;
            const b = Object.keys(f);
            for (let v = 0; v < b.length; v++) {
              const l = b[v],
                u = f[l];
              if (
                ((S += l.length),
                typeof u == "object" && u !== null
                  ? (S += (0, e._fastApproxSizeOf)(u, g) + m)
                  : (S += String(u).length + c),
                S >= g)
              )
                return S;
            }
            return S;
          };
        e._fastApproxSizeOf = y;
      })(He)),
    He
  );
}
var le = {},
  Vt;
function bn() {
  if (Vt) return le;
  Vt = 1;
  var e =
    (le && le.__awaiter) ||
    function (n, t, a, d) {
      function s(p) {
        return p instanceof a
          ? p
          : new a(function (k) {
              k(p);
            });
      }
      return new (a || (a = Promise))(function (p, k) {
        function _(D) {
          try {
            w(d.next(D));
          } catch (I) {
            k(I);
          }
        }
        function h(D) {
          try {
            w(d.throw(D));
          } catch (I) {
            k(I);
          }
        }
        function w(D) {
          D.done ? p(D.value) : s(D.value).then(_, h);
        }
        w((d = d.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(le, "__esModule", { value: !0 }), (le.StatsigClientBase = void 0), H());
  const m = H(),
    c = nn(),
    y = Zt(),
    f = j(),
    g = rn(),
    S = ce(),
    b = it(),
    v = Re(),
    l = Te(),
    u = X(),
    r = 3e3;
  let o = class {
    constructor(t, a, d, s) {
      var p, k, _, h;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const w = this.$emt.bind(this);
      (s?.logLevel != null && (f.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && b.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && v.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && v.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (p = s?.overrideAdapter) !== null && p !== void 0 ? p : null),
        (this._logger = new y.EventLogger(t, w, d, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, w)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        d.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, d),
        (this.storageProvider = u.Storage),
        (h =
          (_ = (k = this.overrideAdapter) === null || k === void 0 ? void 0 : k.loadFromStorage) ===
            null || _ === void 0
            ? void 0
            : _.call(k)) === null ||
          h === void 0 ||
          h.catch((D) => this._errorBoundary.logError("OA::loadFromStorage", D)),
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
        } catch (p) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, p);
            return;
          }
          f.Log.error(
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
        const p = (0, g.createMemoKey)(t, d, s);
        return p
          ? (p in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[p] = a(d, s))),
            this._memoCache[p])
          : a(d, s);
      };
    }
  };
  le.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const d = (0, m._getStatsigGlobal)(),
      s = (a = d.instances) !== null && a !== void 0 ? a : {},
      p = t;
    (s[n] != null &&
      f.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = p),
      d.firstInstance || (d.firstInstance = p),
      (d.instances = s),
      (__STATSIG__ = d));
  }
  return le;
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
var Xe = {},
  Jt;
function En() {
  return (Jt || ((Jt = 1), Object.defineProperty(Xe, "__esModule", { value: !0 })), Xe);
}
var A = {},
  Wt;
function wn() {
  if (Wt) return A;
  ((Wt = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A._makeTypedGet =
      A._mergeOverride =
      A._makeLayer =
      A._makeExperiment =
      A._makeDynamicConfig =
      A._makeFeatureGate =
        void 0));
  const e = j(),
    m = et();
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
  function y(l, u, r) {
    var o;
    return Object.assign(Object.assign({}, c(l, u, r, r?.value === !0)), {
      idType: (o = r?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  A._makeFeatureGate = y;
  function f(l, u, r) {
    var o;
    const i = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, i)), { get: v(l, r?.value) });
  }
  A._makeDynamicConfig = f;
  function g(l, u, r) {
    var o;
    const i = f(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  A._makeExperiment = g;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: v(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  A._makeLayer = S;
  function b(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: v(l.name, r, o) });
  }
  A._mergeOverride = b;
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
  return ((A._makeTypedGet = v), A);
}
var Ye = {},
  xt;
function kn() {
  return (xt || ((xt = 1), Object.defineProperty(Ye, "__esModule", { value: !0 })), Ye);
}
var ue = {},
  Qt;
function Dn() {
  if (Qt) return ue;
  ((Qt = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.UPDATE_DETAIL_ERROR_MESSAGES = ue.createUpdateDetails = void 0));
  const e = (m, c, y, f, g, S) => ({
    duration: y,
    source: c,
    success: m,
    error: f,
    sourceUrl: g,
    warnings: S,
  });
  return (
    (ue.createUpdateDetails = e),
    (ue.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    ue
  );
}
var Ht;
function On() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        var m =
            (Y && Y.__createBinding) ||
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
            (Y && Y.__exportStar) ||
            function (l, u) {
              for (var r in l)
                r !== "default" && !Object.prototype.hasOwnProperty.call(u, r) && m(u, l, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          H());
        const y = H(),
          f = Ze();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return f.Diagnostics;
          },
        });
        const g = Zt();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return g.EventLogger;
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
          v = X();
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
          c(Ze(), e),
          c(cn(), e),
          c(nn(), e),
          c(dn(), e),
          c(_n(), e),
          c(ge(), e),
          c(gn(), e),
          c(j(), e),
          c(rn(), e),
          c(Ce(), e),
          c(hn(), e),
          c(yn(), e),
          c(mn(), e),
          c(ce(), e),
          c(rt(), e),
          c(it(), e),
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
          c(X(), e),
          c(tn(), e),
          c(et(), e),
          c(Yt(), e),
          c(nt(), e),
          c(tt(), e),
          c(Dn(), e),
          c(on(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: b.SDK_VERSION }));
      })(Y)),
    Y
  );
}
var An = On();
export { In as a, st as c, Cn as g, On as r, An as s };
