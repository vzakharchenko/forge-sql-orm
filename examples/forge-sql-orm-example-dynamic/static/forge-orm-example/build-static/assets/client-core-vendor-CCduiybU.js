var ot =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xi(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var m = e.default;
  if (typeof m == "function") {
    var c = function y() {
      var v = !1;
      try {
        v = this instanceof y;
      } catch {}
      return v ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    c.prototype = m.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (y) {
      var v = Object.getOwnPropertyDescriptor(e, y);
      Object.defineProperty(
        c,
        y,
        v.get
          ? v
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
var ge = {},
  ht = {},
  yt = {},
  fn;
function x() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function _(E) {
          return (E.unshift("[Statsig]"), E);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...f) {
            S.level >= e.LogLevel.Info && console.info(c, ..._(f));
          }
          static debug(...f) {
            S.level >= e.LogLevel.Debug && console.debug(m, ..._(f));
          }
          static warn(...f) {
            S.level >= e.LogLevel.Warn && console.warn(y, ..._(f));
          }
          static error(...f) {
            S.level >= e.LogLevel.Error && console.error(v, ..._(f));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(yt)),
    yt
  );
}
var vn;
function ae() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        var m, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = x(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const E = (i) => {
          const n = (0, e._getStatsigGlobal)();
          return i
            ? n.instances && n.instances[i]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = E;
        const f = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          u = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = l[f]) !== null && m !== void 0 ? m : u[f]) !== null && c !== void 0
                ? c
                : r[f]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((l[f] = o), (u[f] = o), (r[f] = o));
      })(ht)),
    ht
  );
}
var mt = {},
  hn;
function tn() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (l) => m.get(l),
          _markInitOverallStart: (l) => {
            E(l, _({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            E(
              l,
              _(
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
            E(l, _(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            E(l, _(u, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            E(l, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            E(l, _(u, y, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            m.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: f(l, "code"), name: f(l, "name"), message: f(l, "message") };
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
        function _(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: v, user: l, value: null, metadata: u, time: Date.now() };
        }
        function E(l, u) {
          var r;
          const o = (r = m.get(l)) !== null && r !== void 0 ? r : [];
          (o.push(u), m.set(l, o));
        }
        function f(l, u) {
          if (u in l) return l[u];
        }
      })(mt)),
    mt
  );
}
var fe = {},
  ve = {},
  St = {},
  he = {},
  yn;
function rn() {
  if (yn) return he;
  ((yn = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he._isTypeMatch = he._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  he._typeOf = e;
  function m(c, y) {
    const v = (_) => (Array.isArray(_) ? "array" : typeof _);
    return v(c) === v(y);
  }
  return ((he._isTypeMatch = m), he);
}
var mn;
function $e() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = rn(),
          c = (_) => {
            let S = 0;
            for (let E = 0; E < _.length; E++) {
              const f = _.charCodeAt(E);
              ((S = (S << 5) - S + f), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const y = (_, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, S)));
        e._DJB2Object = y;
        const v = (_, S) => {
          if (_ == null) return null;
          const E = Object.keys(_).sort(),
            f = {};
          return (
            E.forEach((l) => {
              const u = _[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                f[l] = u;
                return;
              }
              f[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            f
          );
        };
        e._getSortedObject = v;
      })(St)),
    St
  );
}
var Sn;
function lt() {
  if (Sn) return ve;
  ((Sn = 1),
    Object.defineProperty(ve, "__esModule", { value: !0 }),
    (ve._getStorageKey = ve._getUserStorageKey = void 0));
  const e = $e();
  function m(y, v, _) {
    var S;
    if (_) return _(y, v);
    const E = v && v.customIDs ? v.customIDs : {},
      f = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(E)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${E[l]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(f.join("|"));
  }
  ve._getUserStorageKey = m;
  function c(y, v, _) {
    return v ? m(y, v, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((ve._getStorageKey = c), ve);
}
var bt = {},
  bn;
function ut() {
  return (
    bn ||
      ((bn = 1),
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
      })(bt)),
    bt
  );
}
var Et = {},
  En;
function je() {
  return (
    En ||
      ((En = 1),
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
          var f;
          const l = (0, e._getWindowSafe)();
          return (f = l?.document) !== null && f !== void 0 ? f : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const f =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || f;
        };
        e._isServerEnv = y;
        const v = (f, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(f, l);
        };
        e._addWindowEventListenerSafe = v;
        const _ = (f, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(f, l);
        };
        e._addDocumentEventListenerSafe = _;
        const S = () => {
          var f;
          try {
            return (f = (0, e._getWindowSafe)()) === null || f === void 0
              ? void 0
              : f.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const E = () => {
          const f = (0, e._getWindowSafe)();
          return f && "onpagehide" in f ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = E;
      })(Et)),
    Et
  );
}
var Q = {},
  pn;
function Wr() {
  if (pn) return Q;
  ((pn = 1),
    Object.defineProperty(Q, "__esModule", { value: !0 }),
    (Q._createLayerParameterExposure =
      Q._createConfigExposure =
      Q._mapExposures =
      Q._createGateExposure =
      Q._isExposureEvent =
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
    v = ({ eventName: u }) => u === m || u === e || u === c;
  Q._isExposureEvent = v;
  const _ = (u, r, o) => {
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
  Q._createGateExposure = _;
  function S(u, r) {
    return u.map((o) => (typeof o == "string" ? (r ?? {})[o] : o)).filter((o) => o != null);
  }
  Q._mapExposures = S;
  const E = (u, r, o) => {
    var i, n, t, a;
    const g = { config: r.name, ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (g.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (g.rulePassed = String(r.__evaluation.passed)),
      y(
        e,
        u,
        r.details,
        g,
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
  Q._createConfigExposure = E;
  const f = (u, r, o, i) => {
    var n, t, a, g, s, b;
    const w = r.__evaluation,
      d = ((n = w?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let h = "",
      D = (t = w?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    d &&
      ((h = (a = w.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (D = w.secondary_exposures));
    const k = (g = r.__evaluation) === null || g === void 0 ? void 0 : g.parameter_rule_ids,
      C = {
        config: r.name,
        parameterName: o,
        ruleID: (s = k?.[o]) !== null && s !== void 0 ? s : r.ruleID,
        allocatedExperiment: h,
        isExplicitParameter: String(d),
      };
    return (
      ((b = r.__evaluation) === null || b === void 0 ? void 0 : b.version) != null &&
        (C.configVersion = r.__evaluation.version),
      y(c, u, r.details, C, S(D, i))
    );
  };
  Q._createLayerParameterExposure = f;
  const l = (u, r) => (
    (r.reason = u.reason),
    u.lcut && (r.lcut = String(u.lcut)),
    u.receivedAt && (r.receivedAt = String(u.receivedAt)),
    r
  );
  return Q;
}
var ye = {},
  wn;
function ct() {
  return (
    wn ||
      ((wn = 1),
      Object.defineProperty(ye, "__esModule", { value: !0 }),
      (ye.LoggingEnabledOption = ye.LogEventCompressionMode = void 0),
      (ye.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (ye.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    ye
  );
}
var pt = {},
  Dn;
function ue() {
  return (
    Dn ||
      ((Dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = x(),
          c = je(),
          y = {},
          v = {
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
        let _ = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (_ = {
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
        let S = _ ?? v,
          E = S;
        function f(r) {
          try {
            return r();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            if (o instanceof Error && o.name === "QuotaExceededError") {
              const n = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              o.message = `${o.message}. Statsig Keys: ${n.length}`;
            }
            throw o;
          }
        }
        e.Storage = {
          isReady: () => E.isReady(),
          isReadyResolver: () => E.isReadyResolver(),
          getProviderName: () => E.getProviderName(),
          getItem: (r) => f(() => E.getItem(r)),
          setItem: (r, o) => f(() => E.setItem(r, o)),
          removeItem: (r) => E.removeItem(r),
          getAllKeys: () => E.getAllKeys(),
          _setProvider: (r) => {
            ((S = r), (E = r));
          },
          _setDisabled: (r) => {
            r ? (E = v) : (E = S);
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
      })(pt)),
    pt
  );
}
var Be = {},
  kn;
function xr() {
  if (kn) return Be;
  ((kn = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.UrlConfiguration = void 0));
  const e = $e(),
    m = ut(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  class y {
    constructor(_, S, E, f) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        S && (this.customUrl = S),
        !S && E && (this.customUrl = E.endsWith("/") ? `${E}${_}` : `${E}/${_}`),
        f && (this.fallbackUrls = f));
      const l = m.NetworkDefault[_];
      this.defaultUrl = `${l}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const S = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  }
  return ((Be.UrlConfiguration = y), Be);
}
var wt = {},
  In;
function on() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = je(),
          c = "foreground",
          y = "background",
          v = [];
        let _ = c,
          S = !1;
        const E = () => _ === c;
        e._isCurrentlyVisible = E;
        const f = () => S;
        e._isUnloading = f;
        const l = (r) => {
          v.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== _ && ((_ = r), v.forEach((o) => o(r)));
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
      })(wt)),
    wt
  );
}
var On;
function Hr() {
  if (On) return fe;
  On = 1;
  var e =
    (fe && fe.__awaiter) ||
    function (w, d, h, D) {
      function k(C) {
        return C instanceof h
          ? C
          : new h(function (L) {
              L(C);
            });
      }
      return new (h || (h = Promise))(function (C, L) {
        function U(N) {
          try {
            B(D.next(N));
          } catch (O) {
            L(O);
          }
        }
        function K(N) {
          try {
            B(D.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          N.done ? C(N.value) : k(N.value).then(U, K);
        }
        B((D = D.apply(w, d || [])).next());
      });
    };
  (Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.EventLogger = void 0));
  const m = lt(),
    c = $e(),
    y = x(),
    v = ut(),
    _ = je(),
    S = Wr(),
    E = ct(),
    f = ue(),
    l = xr(),
    u = on(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    g = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  class b {
    static _safeFlushAndForget(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, h, D, k) {
      var C, L;
      ((this._sdkKey = d),
        (this._emitter = h),
        (this._network = D),
        (this._options = k),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = k?.loggingEnabled) !== null && C !== void 0
            ? C
            : k?.disableLogging === !0
              ? E.LoggingEnabledOption.disabled
              : E.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = k?.loggingBufferMaxSize) !== null && L !== void 0 ? L : r));
      const U = k?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        v.Endpoint._rgstr,
        U?.logEventUrl,
        U?.api,
        U?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(d) {
      this._network.setLogEventCompressionMode(d);
    }
    setLoggingEnabled(d) {
      this._loggingEnabled = d;
    }
    enqueue(d) {
      this._shouldLogEvent(d) &&
        (this._normalizeAndAppendEvent(d),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && b._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var h;
      const D = (h = this._nonExposedChecks[d]) !== null && h !== void 0 ? h : 0;
      this._nonExposedChecks[d] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const h = (0, _._isServerEnv)();
      (h &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        h ||
          (0, u._subscribeToVisiblityChanged)((D) => {
            D === "background"
              ? b._safeFlushAndForget(this._sdkKey)
              : D === "foreground" && b._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(s.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete g[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const d = this._queue;
        ((this._queue = []), yield this._sendEvents(d));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > a) &&
          setTimeout(() => b._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(d) {
      var h;
      if (
        ((h = this._options) === null || h === void 0 ? void 0 : h.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(d)) return !0;
      const D = d.user ? d.user : { statsigEnvironment: void 0 },
        k = (0, m._getUserStorageKey)(this._sdkKey, D),
        C = d.metadata ? d.metadata : {},
        L = [
          d.eventName,
          k,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        U = this._lastExposureTimeMap[L],
        K = Date.now();
      return U && K - U < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = K),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var h, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const C =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (C ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var h;
        const D = yield this._network.post(this._getRequestData(d)),
          k = (h = D?.code) !== null && h !== void 0 ? h : -1;
        return { success: k >= 200 && k < 300 };
      });
    }
    _sendEventsViaBeacon(d) {
      return { success: this._network.beacon(this._getRequestData(d)) };
    }
    _getRequestData(d) {
      return {
        sdkKey: this._sdkKey,
        data: { events: d },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(d.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(d) {
      for (; d.length > t; ) d.shift();
      const h = this._getStorageKey();
      try {
        (0, f._setObjectInStorage)(h, d);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const h = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
        const D = (0, f._getObjectFromStorage)(h);
        if (!D) return;
        (d === s.Startup && f.Storage.removeItem(h),
          (yield this._sendEvents(D)) && d === s.GainedFocus && f.Storage.removeItem(h));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const h = {},
        D = this._getCurrentPageUrl();
      D && (h.statsigMetadata = { currentPage: D });
      const k = Object.assign(Object.assign({}, d), h);
      (y.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      var d;
      if (
        ((d = this._options) === null || d === void 0
          ? void 0
          : d.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, _._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var d, h;
      const D =
          (h = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && h !== void 0
            ? h
            : o,
        k = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== k ? clearInterval(k) : b._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = k;
    }
  }
  return ((fe.EventLogger = b), fe);
}
var Dt = {},
  Cn;
function st() {
  return (
    Cn ||
      ((Cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.18.2"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Dt)),
    Dt
  );
}
var kt = {},
  Tn;
function di() {
  return (Tn || ((Tn = 1), Object.defineProperty(kt, "__esModule", { value: !0 })), kt);
}
var ne = {},
  Ge = {},
  Ve = {},
  Rn;
function sn() {
  if (Rn) return Ve;
  ((Rn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = (m + _) % 16 | 0), (m = Math.floor(m / 16)))
            : ((_ = (c + _) % 16 | 0), (c = Math.floor(c / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ve.getUUID = e), Ve);
}
var Mn;
function dt() {
  if (Mn) return Ge;
  ((Mn = 1), Object.defineProperty(Ge, "__esModule", { value: !0 }), (Ge.StableID = void 0));
  const e = lt(),
    m = x(),
    c = je(),
    y = ue(),
    v = sn(),
    _ = {},
    S = {},
    E = {};
  Ge.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (E[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((_[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, v.getUUID)()), l(t, n), o(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), l(n, t), o(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      S[n] = t;
    },
    _setDisabled: (n, t) => {
      E[n] = t;
    },
  };
  function f(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const a = f(t);
    try {
      (0, y._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = f(n);
    return (0, y._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!S[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const a of t) {
      const [g, s] = a.trim().split("=");
      if (g === i(n)) return decodeURIComponent(s);
    }
    return null;
  }
  function o(n, t) {
    if (!S[t] || !document) return;
    const a = new Date();
    (a.setFullYear(a.getFullYear() + 1),
      (document.cookie = `${i(t)}=${encodeURIComponent(n)}; expires=${a.toUTCString()}; path=/`));
  }
  function i(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return Ge;
}
var me = {},
  Un;
function Qr() {
  if (Un) return me;
  ((Un = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me._getFullUserHash = me._normalizeUser = void 0));
  const e = $e(),
    m = x();
  function c(v, _, S) {
    try {
      const E = JSON.parse(JSON.stringify(v));
      return (
        _ != null && _.environment != null
          ? (E.statsigEnvironment = _.environment)
          : S != null && (E.statsigEnvironment = { tier: S }),
        E
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  me._normalizeUser = c;
  function y(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((me._getFullUserHash = y), me);
}
var ze = {},
  Ln;
function Xr() {
  if (Ln) return ze;
  ((Ln = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze._typedJsonParse = void 0));
  const e = x();
  function m(c, y, v) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((ze._typedJsonParse = m), ze);
}
var Pn;
function _i() {
  if (Pn) return ne;
  Pn = 1;
  var e =
    (ne && ne.__awaiter) ||
    function (r, o, i, n) {
      function t(a) {
        return a instanceof i
          ? a
          : new i(function (g) {
              g(a);
            });
      }
      return new (i || (i = Promise))(function (a, g) {
        function s(d) {
          try {
            w(n.next(d));
          } catch (h) {
            g(h);
          }
        }
        function b(d) {
          try {
            w(n.throw(d));
          } catch (h) {
            g(h);
          }
        }
        function w(d) {
          d.done ? a(d.value) : t(d.value).then(s, b);
        }
        w((n = n.apply(r, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const m = x(),
    c = dt(),
    y = Qr(),
    v = ue(),
    _ = Xr(),
    S = 10;
  class E {
    constructor(o, i) {
      ((this._adapterName = o),
        (this._cacheSuffix = i),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${i}`),
        (this._inMemoryCache = new l()));
    }
    attach(o, i, n) {
      ((this._sdkKey = o), (this._options = i));
    }
    getDataSync(o) {
      const i = o && (0, y._normalizeUser)(o, this._options),
        n = this._getCacheKey(i),
        t = this._inMemoryCache.get(n, i);
      if (t && this._getIsCacheValueValid(t)) return t;
      const a = this._loadFromCache(n);
      return a && this._getIsCacheValueValid(a)
        ? (this._inMemoryCache.add(n, a), this._inMemoryCache.get(n, i))
        : null;
    }
    setData(o, i) {
      const n = i && (0, y._normalizeUser)(i, this._options),
        t = this._getCacheKey(n);
      this._inMemoryCache.add(t, f("Bootstrap", o, null, n));
    }
    _getIsCacheValueValid(o) {
      return o.stableID == null || o.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(o, i, n) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const t = o ?? this.getDataSync(i),
          a = [this._fetchAndPrepFromNetwork(t, i, n)];
        return (
          n?.timeoutMs &&
            a.push(
              new Promise((g) => setTimeout(g, n.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(a)
        );
      });
    }
    _prefetchDataImpl(o, i) {
      return e(this, void 0, void 0, function* () {
        const n = o && (0, y._normalizeUser)(o, this._options),
          t = this._getCacheKey(n),
          a = yield this._getDataAsyncImpl(null, n, i);
        a &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, a), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(o, i, n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = (t = o?.data) !== null && t !== void 0 ? t : null,
          g = o != null && this._isCachedResultValidFor204(o, i),
          s = yield this._fetchFromNetwork(a, i, n, g);
        if (!s) return (m.Log.debug("No response returned for latest value"), null);
        const b = (0, _._typedJsonParse)(s, "has_updates", "Response"),
          w = this._getSdkKey(),
          d = c.StableID.get(w);
        let h = null;
        if (b?.has_updates === !0) h = f("Network", s, d, i);
        else if (a && b?.has_updates === !1) h = f("NetworkNotModified", a, d, i);
        else return null;
        const D = this._getCacheKey(i);
        return (this._inMemoryCache.add(D, h), this._writeToCache(D, h), h);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(o) {
      var i;
      const n = (i = v.Storage.getItem) === null || i === void 0 ? void 0 : i.call(v.Storage, o);
      if (n == null) return null;
      const t = (0, _._typedJsonParse)(n, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(o, i) {
      (v.Storage.setItem(o, JSON.stringify(i)), this._runLocalStorageCacheEviction(o));
    }
    _runLocalStorageCacheEviction(o) {
      var i;
      const n =
        (i = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && i !== void 0
          ? i
          : {};
      n[o] = Date.now();
      const t = u(n, S);
      (t && (delete n[t], v.Storage.removeItem(t)),
        (0, v._setObjectInStorage)(this._lastModifiedStoreKey, n));
    }
  }
  ne.DataAdapterCore = E;
  function f(r, o, i, n) {
    return {
      source: r,
      data: o,
      receivedAt: Date.now(),
      stableID: i,
      fullUserHash: (0, y._getFullUserHash)(n),
    };
  }
  ne._makeDataAdapterResult = f;
  class l {
    constructor() {
      this._data = {};
    }
    get(o, i) {
      var n;
      const t = this._data[o],
        a = t?.stableID,
        g = (n = i?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return g && a && g !== a
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(o, i) {
      const n = u(this._data, S - 1);
      (n && delete this._data[n], (this._data[o] = i));
    }
    merge(o) {
      this._data = Object.assign(Object.assign({}, this._data), o);
    }
  }
  function u(r, o) {
    const i = Object.keys(r);
    return i.length <= o
      ? null
      : i.reduce((n, t) => {
          const a = r[n],
            g = r[t];
          return typeof a == "object" && typeof g == "object"
            ? g.receivedAt < a.receivedAt
              ? t
              : n
            : g < a
              ? t
              : n;
        });
  }
  return ne;
}
var It = {},
  An;
function gi() {
  return (An || ((An = 1), Object.defineProperty(It, "__esModule", { value: !0 })), It);
}
var Je = {},
  We = {},
  jn;
function an() {
  if (jn) return We;
  ((jn = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.SDKType = void 0));
  const e = {};
  let m;
  return (
    (We.SDKType = {
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
    We
  );
}
var Nn;
function Yr() {
  return (
    Nn ||
      ((Nn = 1),
      (function (e) {
        var m =
          (Je && Je.__awaiter) ||
          function (r, o, i, n) {
            function t(a) {
              return a instanceof i
                ? a
                : new i(function (g) {
                    g(a);
                  });
            }
            return new (i || (i = Promise))(function (a, g) {
              function s(d) {
                try {
                  w(n.next(d));
                } catch (h) {
                  g(h);
                }
              }
              function b(d) {
                try {
                  w(n.throw(d));
                } catch (h) {
                  g(h);
                }
              }
              function w(d) {
                d.done ? a(d.value) : t(d.value).then(s, b);
              }
              w((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = x(),
          y = an(),
          v = st();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        class S {
          constructor(o, i, n, t) {
            ((this._sdkKey = o),
              (this._options = i),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(o) {
            try {
              const i = o;
              l(i).forEach((n) => {
                const t = i[n];
                "$EB" in t ||
                  ((i[n] = (...a) => this._capture(n, () => t.apply(o, a))), (i[n].$EB = !0));
              });
            } catch (i) {
              this._onError("eb:wrap", i);
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
            this._lastSeenError || (this._lastSeenError = E(o));
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
                  var t, a, g, s, b, w, d;
                  const h = i || Error(_),
                    D = h instanceof Error,
                    k = D ? h.name : "No Name",
                    C = E(h);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
                    !(
                      (a =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || a === void 0
                    ) && a.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const L = y.SDKType._get(this._sdkKey),
                    U = v.StatsigMetadataProvider.get(),
                    K = D ? h.stack : f(h),
                    B = Object.assign(
                      { tag: o, exception: k, info: K, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, U), { sdkType: L }),
                    );
                  (yield (
                    (w =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && w !== void 0
                      ? w
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(U.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(B),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        }
        e.ErrorBoundary = S;
        function E(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function f(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return _;
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
            Object.entries(r).forEach(([i, n]) => {
              switch (typeof n) {
                case "number":
                case "bigint":
                case "boolean":
                  o[String(i)] = n;
                  break;
                case "string":
                  n.length < 50 ? (o[String(i)] = n) : (o[String(i)] = "set");
                  break;
                case "object":
                  i === "environment"
                    ? (o.environment = n)
                    : i === "networkConfig"
                      ? (o.networkConfig = n)
                      : (o[String(i)] = n != null ? "set" : "unset");
                  break;
              }
            }),
            o
          );
        }
      })(Je)),
    Je
  );
}
var Ot = {},
  Fn;
function fi() {
  return (Fn || ((Fn = 1), Object.defineProperty(Ot, "__esModule", { value: !0 })), Ot);
}
var Ct = {},
  qn;
function vi() {
  return (qn || ((qn = 1), Object.defineProperty(Ct, "__esModule", { value: !0 })), Ct);
}
var Tt = {},
  $n;
function hi() {
  return ($n || (($n = 1), Object.defineProperty(Tt, "__esModule", { value: !0 })), Tt);
}
var Se = {},
  Kn;
function Zr() {
  if (Kn) return Se;
  ((Kn = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se.createMemoKey = Se.MemoPrefix = void 0),
    (Se.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function c(y, v, _) {
    let S = `${y}|${v}`;
    if (!_) return S;
    for (const E of Object.keys(_)) {
      if (m.has(E)) return;
      e.has(E) ? (S += `|${E}=true`) : (S += `|${E}=${_[E]}`);
    }
    return S;
  }
  return ((Se.createMemoKey = c), Se);
}
var be = {},
  re = {},
  Ee = {},
  Bn;
function yi() {
  if (Bn) return Ee;
  Bn = 1;
  var e =
    (Ee && Ee.__awaiter) ||
    function (E, f, l, u) {
      function r(o) {
        return o instanceof l
          ? o
          : new l(function (i) {
              i(o);
            });
      }
      return new (l || (l = Promise))(function (o, i) {
        function n(g) {
          try {
            a(u.next(g));
          } catch (s) {
            i(s);
          }
        }
        function t(g) {
          try {
            a(u.throw(g));
          } catch (s) {
            i(s);
          }
        }
        function a(g) {
          g.done ? o(g.value) : r(g.value).then(n, t);
        }
        a((u = u.apply(E, f || [])).next());
      });
    };
  (Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function _(E) {
    return e(this, void 0, void 0, function* () {
      const f = yield E(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!f.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield f.arrayBuffer(),
        u = new Uint8Array(l);
      return S(u);
    });
  }
  Ee._fetchTxtRecords = _;
  function S(E) {
    const f = E.findIndex(
      (u, r) =>
        r < v && String.fromCharCode(u) === "=" && y.includes(String.fromCharCode(E[r - 1])),
    );
    if (f === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = f - 1; u < E.length; u++) l += String.fromCharCode(E[u]);
    return l.split(",");
  }
  return Ee;
}
var Gn;
function mi() {
  if (Gn) return re;
  Gn = 1;
  var e =
    (re && re.__awaiter) ||
    function (i, n, t, a) {
      function g(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function w(D) {
          try {
            h(a.next(D));
          } catch (k) {
            b(k);
          }
        }
        function d(D) {
          try {
            h(a.throw(D));
          } catch (k) {
            b(k);
          }
        }
        function h(D) {
          D.done ? s(D.value) : g(D.value).then(w, d);
        }
        h((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const m = yi(),
    c = $e(),
    y = x(),
    v = ue(),
    _ = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  class E {
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
      const g = (a = this._fallbackInfo) === null || a === void 0 ? void 0 : a[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(n, t) {
      var a, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((g = b.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, g) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!f(a, g)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            h = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return h ? (this._updateFallbackInfoWithNewUrl(n, t, h), !0) : !1;
        } catch (w) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", w),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var g, s, b;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        h = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[d];
      (h && w.previous.push(...h.previous), w.previous.length > 10 && (w.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && w.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: w })),
        u(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = this._dnsQueryCooldowns[n.endpoint];
        if (a && Date.now() < a) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + S;
        const g = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const d = w.split("=");
          if (d.length > 1) {
            let h = d[1];
            (h.endsWith("/") && (h = h.slice(0, -1)), g.push(`https://${h}${b}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var a;
      if (t == null) return null;
      const g = new Set((a = n?.previous) !== null && a !== void 0 ? a : []),
        s = n?.url;
      let b = null;
      for (const w of t) {
        const d = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!g.has(w) && d !== s) {
          b = d;
          break;
        }
      }
      return b;
    }
  }
  re.NetworkFallbackResolver = E;
  function f(i, n) {
    var t;
    const a = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      a.includes("uncaught exception") ||
      a.includes("failed to fetch") ||
      a.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = f;
  function l(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function u(i, n) {
    const t = l(i);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(n));
  }
  function r(i) {
    const n = l(i),
      t = v.Storage.getItem(n);
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
  return re;
}
var xe = {},
  Vn;
function ei() {
  if (Vn) return xe;
  ((Vn = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.SDKFlags = void 0));
  const e = {};
  return (
    (xe.SDKFlags = {
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var y, v;
        return (v = (y = e[m]) === null || y === void 0 ? void 0 : y[c]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    xe
  );
}
var Rt = {},
  zn;
function ln() {
  return (
    zn ||
      ((zn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = ae(),
          c = lt(),
          y = x(),
          v = ue(),
          _ = sn(),
          S = 1800 * 1e3,
          E = 14400 * 1e3,
          f = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              f[s] == null && (f[s] = l(s));
              const b = f[s];
              return r(b);
            },
            overrideInitialSessionID: (s, b) => {
              f[b] = u(s, b);
            },
          }));
        function l(s) {
          let b = g(s);
          const w = Date.now();
          return (
            b || (b = { sessionID: (0, _.getUUID)(), startTime: w, lastUpdate: w }),
            { data: b, sdkKey: s }
          );
        }
        function u(s, b) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: b };
        }
        function r(s) {
          const b = Date.now(),
            w = s.data,
            d = s.sdkKey;
          if (i(w) || n(w)) {
            ((w.sessionID = (0, _.getUUID)()), (w.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            D && D.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = b),
            a(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const h = b - w.startTime;
          return ((s.idleTimeoutID = o(d, S)), (s.ageTimeoutID = o(d, E - h)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var w;
            const d =
              (w = (0, m._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function n({ startTime: s }) {
          return Date.now() - s > E;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function a(s, b) {
          const w = t(b);
          try {
            (0, v._setObjectInStorage)(w, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function g(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Rt)),
    Rt
  );
}
var He = {},
  Jn;
function ti() {
  return (
    Jn ||
      ((Jn = 1),
      Object.defineProperty(He, "__esModule", { value: !0 }),
      (He.ErrorTag = void 0),
      (He.ErrorTag = { NetworkError: "NetworkError" })),
    He
  );
}
var Wn;
function Si() {
  if (Wn) return be;
  Wn = 1;
  var e =
    (be && be.__awaiter) ||
    function (O, p, I, T) {
      function R(M) {
        return M instanceof I
          ? M
          : new I(function (P) {
              P(M);
            });
      }
      return new (I || (I = Promise))(function (M, P) {
        function Z(A) {
          try {
            F(T.next(A));
          } catch (j) {
            P(j);
          }
        }
        function q(A) {
          try {
            F(T.throw(A));
          } catch (j) {
            P(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : R(A.value).then(Z, q);
        }
        F((T = T.apply(O, p || [])).next());
      });
    };
  (Object.defineProperty(be, "__esModule", { value: !0 }), (be.NetworkCore = void 0), ae());
  const m = ae(),
    c = tn(),
    y = x(),
    v = ut(),
    _ = mi(),
    S = ei(),
    E = an(),
    f = je(),
    l = ln(),
    u = dt(),
    r = ti(),
    o = st(),
    i = ct(),
    n = on(),
    t = 1e4,
    a = 500,
    g = 3e4,
    s = 1e3,
    b = 50,
    w = b / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class h {
    constructor(p, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        p && (this._options = p),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
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
      if (!D(p)) return !1;
      const I = this._getInternalRequestArgs("POST", p),
        T = this._getPopulatedURL(I),
        R = navigator;
      return R.sendBeacon.bind(R)(T, I.body);
    }
    post(p) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", p);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(p) {
      const I = this._getInternalRequestArgs("GET", p);
      return this._sendRequest(I);
    }
    _sendRequest(p) {
      return e(this, void 0, void 0, function* () {
        var I, T, R, M;
        if (!D(p) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: Z, retries: q, attempt: F } = p,
          A = p.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1,
          G = typeof AbortController < "u" ? new AbortController() : null,
          z = setTimeout(() => {
            G?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          $ = this._getPopulatedURL(p);
        let Y = null;
        const se = (0, n._isUnloading)();
        try {
          const V = {
            method: P,
            body: Z,
            headers: Object.assign({}, p.headers),
            signal: G?.signal,
            priority: p.priority,
            keepalive: se,
          };
          K(p, j);
          const ee = this._leakyBucket[A];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[A] = ee)),
            (Y = yield (
              (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch
            )($, V)),
            clearTimeout(z),
            !Y.ok)
          ) {
            const de = yield Y.text().catch(() => "No Text"),
              _e = new Error(`NetworkError: ${$} ${de}`);
            throw ((_e.name = "NetworkError"), _e);
          }
          const te = yield Y.text();
          return (
            B(p, Y, j, te),
            this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
            { body: te, code: Y.status }
          );
        } catch (V) {
          const ee = L(G, V),
            Fe = U(G);
          if (
            (B(p, Y, j, "", V),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              p.sdkKey,
              p.urlConfig,
              ee,
              Fe,
            )) &&
              (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(p.sdkKey, p.urlConfig)),
            !q || j > q || !d.has((T = Y?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: V,
                tag: r.ErrorTag.NetworkError,
                requestArgs: p,
              });
            const de = `A networking error occurred during ${P} request to ${$}.`;
            return (
              y.Log.error(de, ee, V),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(de),
              null
            );
          }
          return (
            yield N(j),
            this._sendRequest(Object.assign(Object.assign({}, p), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(p) {
      let I = p?.logEventCompressionMode;
      return (
        !I && p?.disableCompression === !0 && (I = i.LogEventCompressionMode.Disabled),
        I || (I = i.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(p) {
      var I;
      const T = Date.now(),
        R =
          (I = this._leakyBucket[p]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        M = T - R.lastRequestTime,
        P = Math.floor(M * w);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= b
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[p] = R), !1)
      );
    }
    _getPopulatedURL(p) {
      var I;
      const T = (I = p.fallbackUrl) !== null && I !== void 0 ? I : p.urlConfig.getUrl();
      (p.urlConfig.endpoint === v.Endpoint._initialize ||
        p.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [v.NetworkParam.SdkKey]: p.sdkKey,
            [v.NetworkParam.SdkType]: E.SDKType._get(p.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: l.SessionID.get(p.sdkKey),
          },
          p.params,
        ),
        M = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(p) {
      var I;
      const T = (0, f._getWindowSafe)(),
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
              Object.assign({}, (I = p.params) !== null && I !== void 0 ? I : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          y.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(p) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = p.body;
        if (!(typeof T != "string" || !C(p, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              M = new CompressionStream("gzip"),
              P = M.writable.getWriter();
            (P.write(R).catch(y.Log.error), P.close().catch(y.Log.error));
            const Z = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield Z.read()).done; ) q.push(F.value);
            const A = q.reduce((z, $) => z + $.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const z of q) (j.set(z, G), (G += z.length));
            ((p.body = j),
              (p.params = Object.assign(
                Object.assign({}, (I = p.params) !== null && I !== void 0 ? I : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            y.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(p, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        R = Object.assign(Object.assign({}, I), { method: p, fallbackUrl: T });
      return ("data" in I && k(R, I.data), R);
    }
  }
  be.NetworkCore = h;
  const D = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (O, p) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        R = u.StableID.get(I),
        M = l.SessionID.get(I),
        P = E.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, p), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: M,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, p) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (p.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O, p) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof p == "string"
        ? p
        : p instanceof Error
          ? `${p.name}: ${p.message}`
          : "Unknown Error";
  }
  function U(O) {
    return (
      (O?.signal.aborted &&
        typeof O.signal.reason == "string" &&
        O.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function K(O, p) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: p });
  }
  function B(O, p, I, T, R) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(p, I, T, R));
  }
  function N(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((p) => setTimeout(p, Math.min(a * (O * O), g)));
    });
  }
  return be;
}
var Mt = {},
  xn;
function bi() {
  return (xn || ((xn = 1), Object.defineProperty(Mt, "__esModule", { value: !0 })), Mt);
}
var Ut = {},
  Hn;
function Ei() {
  return (Hn || ((Hn = 1), Object.defineProperty(Ut, "__esModule", { value: !0 })), Ut);
}
var pe = {},
  Qn;
function pi() {
  if (Qn) return pe;
  Qn = 1;
  var e =
    (pe && pe.__awaiter) ||
    function (n, t, a, g) {
      function s(b) {
        return b instanceof a
          ? b
          : new a(function (w) {
              w(b);
            });
      }
      return new (a || (a = Promise))(function (b, w) {
        function d(k) {
          try {
            D(g.next(k));
          } catch (C) {
            w(C);
          }
        }
        function h(k) {
          try {
            D(g.throw(k));
          } catch (C) {
            w(C);
          }
        }
        function D(k) {
          k.done ? b(k.value) : s(k.value).then(d, h);
        }
        D((g = g.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.StatsigClientBase = void 0), ae());
  const m = ae(),
    c = Yr(),
    y = Hr(),
    v = x(),
    _ = Zr(),
    S = je(),
    E = ln(),
    f = dt(),
    l = ct(),
    u = ue(),
    r = 3e3;
  class o {
    constructor(t, a, g, s) {
      var b, w, d, h;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && E.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && f.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && f.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new y.EventLogger(t, D, g, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, g),
        (this.storageProvider = u.Storage),
        (h =
          (d = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(w)) === null ||
          h === void 0 ||
          h.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
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
          f.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const g = this._listeners[t].indexOf(a);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, a) {
      ((a.__isInternal = !0), this.on(t, a));
    }
    $emt(t) {
      var a;
      const g = (s) => {
        try {
          s(t);
        } catch (b) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, b);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => g(s)),
        (a = this._listeners["*"]) === null || a === void 0 || a.forEach(g));
    }
    _setStatus(t, a) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: a }));
    }
    _enqueueExposure(t, a, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(a);
    }
    _memoize(t, a) {
      return (g, s) => {
        if (this._options.disableEvaluationMemoization) return a(g, s);
        const b = (0, _.createMemoKey)(t, g, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[b] = a(g, s))),
            this._memoCache[b])
          : a(g, s);
      };
    }
  }
  pe.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const g = (0, m._getStatsigGlobal)(),
      s = (a = g.instances) !== null && a !== void 0 ? a : {},
      b = t;
    (s[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = b),
      g.firstInstance || (g.firstInstance = b),
      (g.instances = s),
      (__STATSIG__ = g));
  }
  return pe;
}
var Qe = {},
  Xn;
function wi() {
  return (
    Xn ||
      ((Xn = 1),
      Object.defineProperty(Qe, "__esModule", { value: !0 }),
      (Qe.DataAdapterCachePrefix = void 0),
      (Qe.DataAdapterCachePrefix = "statsig.cached")),
    Qe
  );
}
var Lt = {},
  Yn;
function Di() {
  return (Yn || ((Yn = 1), Object.defineProperty(Lt, "__esModule", { value: !0 })), Lt);
}
var J = {},
  Zn;
function ki() {
  if (Zn) return J;
  ((Zn = 1),
    Object.defineProperty(J, "__esModule", { value: !0 }),
    (J._makeTypedGet =
      J._mergeOverride =
      J._makeLayer =
      J._makeExperiment =
      J._makeDynamicConfig =
      J._makeFeatureGate =
        void 0));
  const e = x(),
    m = rn();
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
  J._makeFeatureGate = y;
  function v(l, u, r) {
    var o;
    const i = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, i)), { get: f(l, r?.value) });
  }
  J._makeDynamicConfig = v;
  function _(l, u, r) {
    var o;
    const i = v(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  J._makeExperiment = _;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: f(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  J._makeLayer = S;
  function E(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: f(l.name, r, o) });
  }
  J._mergeOverride = E;
  function f(l, u, r) {
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
  return ((J._makeTypedGet = f), J);
}
var Pt = {},
  er;
function Ii() {
  return (er || ((er = 1), Object.defineProperty(Pt, "__esModule", { value: !0 })), Pt);
}
var we = {},
  tr;
function Oi() {
  if (tr) return we;
  ((tr = 1),
    Object.defineProperty(we, "__esModule", { value: !0 }),
    (we.UPDATE_DETAIL_ERROR_MESSAGES = we.createUpdateDetails = void 0));
  const e = (m, c, y, v, _, S) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: S,
  });
  return (
    (we.createUpdateDetails = e),
    (we.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    we
  );
}
var nr;
function Hi() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        var m =
            (ge && ge.__createBinding) ||
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
            (ge && ge.__exportStar) ||
            function (l, u) {
              for (var r in l)
                r !== "default" && !Object.prototype.hasOwnProperty.call(u, r) && m(u, l, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ae());
        const y = ae(),
          v = tn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = Hr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const S = x();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const E = st(),
          f = ue();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return f.Storage;
          },
        }),
          c(ae(), e),
          c(lt(), e),
          c(di(), e),
          c(_i(), e),
          c(tn(), e),
          c(gi(), e),
          c(Yr(), e),
          c(fi(), e),
          c(vi(), e),
          c($e(), e),
          c(hi(), e),
          c(x(), e),
          c(Zr(), e),
          c(ut(), e),
          c(Si(), e),
          c(bi(), e),
          c(Ei(), e),
          c(je(), e),
          c(an(), e),
          c(ln(), e),
          c(dt(), e),
          c(pi(), e),
          c(ti(), e),
          c(wi(), e),
          c(Wr(), e),
          c(st(), e),
          c(ct(), e),
          c(Di(), e),
          c(ki(), e),
          c(Ii(), e),
          c(Qr(), e),
          c(ue(), e),
          c(Xr(), e),
          c(rn(), e),
          c(xr(), e),
          c(sn(), e),
          c(on(), e),
          c(Oi(), e),
          c(ei(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: E.SDK_VERSION }));
      })(ge)),
    ge
  );
}
var De = {},
  At = {},
  jt = {},
  rr;
function H() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function _(E) {
          return (E.unshift("[Statsig]"), E);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...f) {
            S.level >= e.LogLevel.Info && console.info(c, ..._(f));
          }
          static debug(...f) {
            S.level >= e.LogLevel.Debug && console.debug(m, ..._(f));
          }
          static warn(...f) {
            S.level >= e.LogLevel.Warn && console.warn(y, ..._(f));
          }
          static error(...f) {
            S.level >= e.LogLevel.Error && console.error(v, ..._(f));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(jt)),
    jt
  );
}
var ir;
function le() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        var m, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = H(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const E = (i) => {
          const n = (0, e._getStatsigGlobal)();
          return i
            ? n.instances && n.instances[i]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = E;
        const f = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          u = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = l[f]) !== null && m !== void 0 ? m : u[f]) !== null && c !== void 0
                ? c
                : r[f]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((l[f] = o), (u[f] = o), (r[f] = o));
      })(At)),
    At
  );
}
var Nt = {},
  or;
function nn() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (l) => m.get(l),
          _markInitOverallStart: (l) => {
            E(l, _({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            E(
              l,
              _(
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
            E(l, _(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            E(l, _(u, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            E(l, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            E(l, _(u, y, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            m.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: f(l, "code"), name: f(l, "name"), message: f(l, "message") };
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
        function _(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: v, user: l, value: null, metadata: u, time: Date.now() };
        }
        function E(l, u) {
          var r;
          const o = (r = m.get(l)) !== null && r !== void 0 ? r : [];
          (o.push(u), m.set(l, o));
        }
        function f(l, u) {
          if (u in l) return l[u];
        }
      })(Nt)),
    Nt
  );
}
var ke = {},
  Ie = {},
  Ft = {},
  Oe = {},
  sr;
function un() {
  if (sr) return Oe;
  ((sr = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe._isTypeMatch = Oe._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  Oe._typeOf = e;
  function m(c, y) {
    const v = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return v(c) === v(y);
  }
  return ((Oe._isTypeMatch = m), Oe);
}
var ar;
function Ke() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = un(),
          c = (_) => {
            let S = 0;
            for (let E = 0; E < _.length; E++) {
              const f = _.charCodeAt(E);
              ((S = (S << 5) - S + f), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const y = (_, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, S)));
        e._DJB2Object = y;
        const v = (_, S) => {
          if (_ == null) return null;
          const E = Object.keys(_).sort(),
            f = {};
          return (
            E.forEach((l) => {
              const u = _[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                f[l] = u;
                return;
              }
              f[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            f
          );
        };
        e._getSortedObject = v;
      })(Ft)),
    Ft
  );
}
var lr;
function _t() {
  if (lr) return Ie;
  ((lr = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie._getStorageKey = Ie._getUserStorageKey = void 0));
  const e = Ke();
  function m(y, v, _) {
    var S;
    if (_) return _(y, v);
    const E = v && v.customIDs ? v.customIDs : {},
      f = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(E)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${E[l]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(f.join("|"));
  }
  Ie._getUserStorageKey = m;
  function c(y, v, _) {
    return v ? m(y, v, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((Ie._getStorageKey = c), Ie);
}
var qt = {},
  ur;
function gt() {
  return (
    ur ||
      ((ur = 1),
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
      })(qt)),
    qt
  );
}
var $t = {},
  cr;
function Ne() {
  return (
    cr ||
      ((cr = 1),
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
          var f;
          const l = (0, e._getWindowSafe)();
          return (f = l?.document) !== null && f !== void 0 ? f : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const f =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || f;
        };
        e._isServerEnv = y;
        const v = (f, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(f, l);
        };
        e._addWindowEventListenerSafe = v;
        const _ = (f, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(f, l);
        };
        e._addDocumentEventListenerSafe = _;
        const S = () => {
          var f;
          try {
            return (f = (0, e._getWindowSafe)()) === null || f === void 0
              ? void 0
              : f.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const E = () => {
          const f = (0, e._getWindowSafe)();
          return f && "onpagehide" in f ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = E;
      })($t)),
    $t
  );
}
var X = {},
  dr;
function ni() {
  if (dr) return X;
  ((dr = 1),
    Object.defineProperty(X, "__esModule", { value: !0 }),
    (X._createLayerParameterExposure =
      X._createConfigExposure =
      X._mapExposures =
      X._createGateExposure =
      X._isExposureEvent =
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
    v = ({ eventName: u }) => u === m || u === e || u === c;
  X._isExposureEvent = v;
  const _ = (u, r, o) => {
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
  X._createGateExposure = _;
  function S(u, r) {
    return u.map((o) => (typeof o == "string" ? (r ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = S;
  const E = (u, r, o) => {
    var i, n, t, a;
    const g = { config: r.name, ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (g.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (g.rulePassed = String(r.__evaluation.passed)),
      y(
        e,
        u,
        r.details,
        g,
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
  X._createConfigExposure = E;
  const f = (u, r, o, i) => {
    var n, t, a, g, s, b, w;
    const d = r.__evaluation,
      h = ((n = d?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let D = "",
      k = (t = d?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    h &&
      ((D = (a = d.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (k = (g = d.secondary_exposures) !== null && g !== void 0 ? g : []));
    const C = (s = r.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      L = {
        config: r.name,
        parameterName: o,
        ruleID: (b = C?.[o]) !== null && b !== void 0 ? b : r.ruleID,
        allocatedExperiment: D,
        isExplicitParameter: String(h),
      };
    return (
      ((w = r.__evaluation) === null || w === void 0 ? void 0 : w.version) != null &&
        (L.configVersion = r.__evaluation.version),
      y(c, u, r.details, L, S(k, i))
    );
  };
  X._createLayerParameterExposure = f;
  const l = (u, r) => (
    (r.reason = u.reason),
    u.lcut && (r.lcut = String(u.lcut)),
    u.receivedAt && (r.receivedAt = String(u.receivedAt)),
    r
  );
  return X;
}
var Ce = {},
  _r;
function ft() {
  return (
    _r ||
      ((_r = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.LoggingEnabledOption = Ce.LogEventCompressionMode = void 0),
      (Ce.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (Ce.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    Ce
  );
}
var Kt = {},
  gr;
function ce() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = H(),
          c = Ne(),
          y = {},
          v = {
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
        let _ = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (_ = {
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
        let S = _ ?? v,
          E = S;
        function f(r) {
          try {
            return r();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            throw o;
          }
        }
        e.Storage = {
          isReady: () => E.isReady(),
          isReadyResolver: () => E.isReadyResolver(),
          getProviderName: () => E.getProviderName(),
          getItem: (r) => f(() => E.getItem(r)),
          setItem: (r, o) => f(() => E.setItem(r, o)),
          removeItem: (r) => E.removeItem(r),
          getAllKeys: () => E.getAllKeys(),
          _setProvider: (r) => {
            ((S = r), (E = r));
          },
          _setDisabled: (r) => {
            r ? (E = v) : (E = S);
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
      })(Kt)),
    Kt
  );
}
var Xe = {},
  fr;
function ri() {
  if (fr) return Xe;
  ((fr = 1),
    Object.defineProperty(Xe, "__esModule", { value: !0 }),
    (Xe.UrlConfiguration = void 0));
  const e = Ke(),
    m = gt(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(_, S, E, f) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        S && (this.customUrl = S),
        !S && E && (this.customUrl = E.endsWith("/") ? `${E}${_}` : `${E}/${_}`),
        f && (this.fallbackUrls = f));
      const l = m.NetworkDefault[_];
      this.defaultUrl = `${l}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const S = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  };
  return ((Xe.UrlConfiguration = y), Xe);
}
var Bt = {},
  vr;
function cn() {
  return (
    vr ||
      ((vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = Ne(),
          c = "foreground",
          y = "background",
          v = [];
        let _ = c,
          S = !1;
        const E = () => _ === c;
        e._isCurrentlyVisible = E;
        const f = () => S;
        e._isUnloading = f;
        const l = (r) => {
          v.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== _ && ((_ = r), v.forEach((o) => o(r)));
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
      })(Bt)),
    Bt
  );
}
var hr;
function ii() {
  if (hr) return ke;
  hr = 1;
  var e =
    (ke && ke.__awaiter) ||
    function (w, d, h, D) {
      function k(C) {
        return C instanceof h
          ? C
          : new h(function (L) {
              L(C);
            });
      }
      return new (h || (h = Promise))(function (C, L) {
        function U(N) {
          try {
            B(D.next(N));
          } catch (O) {
            L(O);
          }
        }
        function K(N) {
          try {
            B(D.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          N.done ? C(N.value) : k(N.value).then(U, K);
        }
        B((D = D.apply(w, d || [])).next());
      });
    };
  (Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.EventLogger = void 0));
  const m = _t(),
    c = Ke(),
    y = H(),
    v = gt(),
    _ = Ne(),
    S = ni(),
    E = ft(),
    f = ce(),
    l = ri(),
    u = cn(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    g = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let b = class qe {
    static _safeFlushAndForget(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, h, D, k) {
      var C, L;
      ((this._sdkKey = d),
        (this._emitter = h),
        (this._network = D),
        (this._options = k),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = k?.loggingEnabled) !== null && C !== void 0
            ? C
            : k?.disableLogging === !0
              ? E.LoggingEnabledOption.disabled
              : E.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = k?.loggingBufferMaxSize) !== null && L !== void 0 ? L : r));
      const U = k?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        v.Endpoint._rgstr,
        U?.logEventUrl,
        U?.api,
        U?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(d) {
      this._network.setLogEventCompressionMode(d);
    }
    setLoggingEnabled(d) {
      if (this._loggingEnabled === "disabled" && d !== "disabled") {
        const h = this._getStorageKey(),
          D = (0, f._getObjectFromStorage)(h);
        (D && this._queue.push(...D), f.Storage.removeItem(h));
      }
      this._loggingEnabled = d;
    }
    enqueue(d) {
      this._shouldLogEvent(d) &&
        (this._normalizeAndAppendEvent(d),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && qe._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var h;
      const D = (h = this._nonExposedChecks[d]) !== null && h !== void 0 ? h : 0;
      this._nonExposedChecks[d] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const h = (0, _._isServerEnv)();
      (h &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        h ||
          (0, u._subscribeToVisiblityChanged)((D) => {
            D === "background"
              ? qe._safeFlushAndForget(this._sdkKey)
              : D === "foreground" && qe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(s.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete g[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const d = this._queue;
        ((this._queue = []), yield this._sendEvents(d));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > a) &&
          setTimeout(() => qe._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(d) {
      var h;
      if (
        ((h = this._options) === null || h === void 0 ? void 0 : h.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(d)) return !0;
      const D = d.user ? d.user : { statsigEnvironment: void 0 },
        k = (0, m._getUserStorageKey)(this._sdkKey, D),
        C = d.metadata ? d.metadata : {},
        L = [
          d.eventName,
          k,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        U = this._lastExposureTimeMap[L],
        K = Date.now();
      return U && K - U < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = K),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var h, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const C =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (C ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var h;
        const D = yield this._network.post(this._getRequestData(d)),
          k = (h = D?.code) !== null && h !== void 0 ? h : -1;
        return { success: k >= 200 && k < 300 };
      });
    }
    _sendEventsViaBeacon(d) {
      return { success: this._network.beacon(this._getRequestData(d)) };
    }
    _getRequestData(d) {
      return {
        sdkKey: this._sdkKey,
        data: { events: d },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(d.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(d) {
      for (; d.length > t; ) d.shift();
      const h = this._getStorageKey();
      try {
        const D = this._getFailedLogsFromStorage(h);
        (0, f._setObjectInStorage)(h, [...D, ...d]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(d) {
      let h = [];
      try {
        const D = (0, f._getObjectFromStorage)(d);
        return (Array.isArray(D) && (h = D), h);
      } catch {
        return [];
      }
    }
    _retryFailedLogs(d) {
      const h = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
        const D = (0, f._getObjectFromStorage)(h);
        if (!D) return;
        (d === s.Startup && f.Storage.removeItem(h),
          (yield this._sendEvents(D)) && d === s.GainedFocus && f.Storage.removeItem(h));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const h = {},
        D = this._getCurrentPageUrl();
      D && (h.statsigMetadata = { currentPage: D });
      const k = Object.assign(Object.assign({}, d), h);
      (y.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      var d;
      if (
        ((d = this._options) === null || d === void 0
          ? void 0
          : d.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, _._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var d, h;
      const D =
          (h = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && h !== void 0
            ? h
            : o,
        k = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== k ? clearInterval(k) : qe._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = k;
    }
  };
  return ((ke.EventLogger = b), ke);
}
var Gt = {},
  yr;
function at() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.29.0"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Gt)),
    Gt
  );
}
var Vt = {},
  mr;
function Ci() {
  return (mr || ((mr = 1), Object.defineProperty(Vt, "__esModule", { value: !0 })), Vt);
}
var ie = {},
  Te = {},
  Ye = {},
  Sr;
function dn() {
  if (Sr) return Ye;
  ((Sr = 1), Object.defineProperty(Ye, "__esModule", { value: !0 }), (Ye.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = (m + _) % 16 | 0), (m = Math.floor(m / 16)))
            : ((_ = (c + _) % 16 | 0), (c = Math.floor(c / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ye.getUUID = e), Ye);
}
var br;
function vt() {
  if (br) return Te;
  ((br = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.getCookieName = Te.StableID = void 0));
  const e = _t(),
    m = H(),
    c = Ne(),
    y = ce(),
    v = dn(),
    _ = {},
    S = {},
    E = {};
  Te.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (E[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((_[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, v.getUUID)()), l(t, n), o(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), l(n, t), o(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      S[n] = t;
    },
    _setDisabled: (n, t) => {
      E[n] = t;
    },
  };
  function f(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const a = f(t);
    try {
      (0, y._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = f(n);
    return (0, y._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!S[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const a of t) {
      const [g, s] = a.trim().split("=");
      if (g === i(n)) return decodeURIComponent(s);
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
  return ((Te.getCookieName = i), Te);
}
var Re = {},
  Er;
function oi() {
  if (Er) return Re;
  ((Er = 1),
    Object.defineProperty(Re, "__esModule", { value: !0 }),
    (Re._getFullUserHash = Re._normalizeUser = void 0));
  const e = Ke(),
    m = H();
  function c(v, _, S) {
    try {
      const E = JSON.parse(JSON.stringify(v));
      return (
        _ != null && _.environment != null
          ? (E.statsigEnvironment = _.environment)
          : S != null && (E.statsigEnvironment = { tier: S }),
        E
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Re._normalizeUser = c;
  function y(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((Re._getFullUserHash = y), Re);
}
var Ze = {},
  pr;
function si() {
  if (pr) return Ze;
  ((pr = 1), Object.defineProperty(Ze, "__esModule", { value: !0 }), (Ze._typedJsonParse = void 0));
  const e = H();
  function m(c, y, v) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((Ze._typedJsonParse = m), Ze);
}
var wr;
function Ti() {
  if (wr) return ie;
  wr = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, i, n, t) {
      function a(g) {
        return g instanceof n
          ? g
          : new n(function (s) {
              s(g);
            });
      }
      return new (n || (n = Promise))(function (g, s) {
        function b(h) {
          try {
            d(t.next(h));
          } catch (D) {
            s(D);
          }
        }
        function w(h) {
          try {
            d(t.throw(h));
          } catch (D) {
            s(D);
          }
        }
        function d(h) {
          h.done ? g(h.value) : a(h.value).then(b, w);
        }
        d((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._makeDataAdapterResult = ie.DataAdapterCore = void 0));
  const m = H(),
    c = vt(),
    y = oi(),
    v = ce(),
    _ = si(),
    S = 10,
    E = 8;
  let f = class {
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
      const g = this._loadFromCache(t);
      return g && this._getIsCacheValueValid(g)
        ? (this._inMemoryCache.add(t, g, this._cacheLimit), this._inMemoryCache.get(t, n))
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
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const a = i ?? this.getDataSync(n),
          g = [this._fetchAndPrepFromNetwork(a, n, t)];
        return (
          t?.timeoutMs &&
            g.push(
              new Promise((s) => setTimeout(s, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(g)
        );
      });
    }
    _prefetchDataImpl(i, n) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, y._normalizeUser)(i, this._options),
          a = this._getCacheKey(t),
          g = yield this._getDataAsyncImpl(null, t, n);
        g &&
          this._inMemoryCache.add(
            a,
            Object.assign(Object.assign({}, g), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, n, t) {
      return e(this, void 0, void 0, function* () {
        var a;
        const g = (a = i?.data) !== null && a !== void 0 ? a : null,
          s = i != null && this._isCachedResultValidFor204(i, n),
          b = yield this._fetchFromNetwork(g, n, t, s);
        if (!b) return (m.Log.debug("No response returned for latest value"), null);
        const w = (0, _._typedJsonParse)(b, "has_updates", "Response"),
          d = this._getSdkKey(),
          h = c.StableID.get(d);
        let D = null;
        if (w?.has_updates === !0) D = l("Network", b, h, n);
        else if (g && w?.has_updates === !1) D = l("NetworkNotModified", g, h, n);
        else return null;
        const k = this._getCacheKey(n);
        return (this._inMemoryCache.add(k, D, this._cacheLimit), this._writeToCache(k, D), D);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var n;
      const t = (n = v.Storage.getItem) === null || n === void 0 ? void 0 : n.call(v.Storage, i);
      if (t == null) return null;
      const a = (0, _._typedJsonParse)(t, "source", "Cached Result");
      return a ? Object.assign(Object.assign({}, a), { source: "Cache" }) : null;
    }
    _writeToCache(i, n) {
      const t = JSON.stringify(n);
      for (let a = 0; a < E; a++)
        try {
          v.Storage.setItem(i, t);
          break;
        } catch (g) {
          if (
            !(g instanceof Error) ||
            !(
              g.toString().includes("QuotaExceededError") ||
              g.toString().includes("QUOTA_EXCEEDED_ERR")
            ) ||
            this._cacheLimit <= 1
          )
            throw g;
          ((this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
            this._runLocalStorageCacheEviction(i, this._cacheLimit - 1));
        }
      this._runLocalStorageCacheEviction(i);
    }
    _runLocalStorageCacheEviction(i, n = this._cacheLimit) {
      var t;
      const a =
        (t = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      a[i] = Date.now();
      const g = r(a, n);
      for (const s of g) (delete a[s], v.Storage.removeItem(s));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, a);
    }
  };
  ie.DataAdapterCore = f;
  function l(o, i, n, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: n,
      fullUserHash: (0, y._getFullUserHash)(t),
    };
  }
  ie._makeDataAdapterResult = l;
  class u {
    constructor() {
      this._data = {};
    }
    get(i, n) {
      var t;
      const a = this._data[i],
        g = a?.stableID,
        s = (t = n?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return s && g && s !== g
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : a;
    }
    add(i, n, t) {
      const a = r(this._data, t - 1);
      for (const g of a) delete this._data[g];
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
              const g = o[t],
                s = o[a];
              return typeof g == "object" && typeof s == "object"
                ? g.receivedAt - s.receivedAt
                : g - s;
            })
            .slice(0, n.length - i);
  }
  return ie;
}
var zt = {},
  Dr;
function Ri() {
  return (Dr || ((Dr = 1), Object.defineProperty(zt, "__esModule", { value: !0 })), zt);
}
var et = {},
  tt = {},
  kr;
function _n() {
  if (kr) return tt;
  ((kr = 1), Object.defineProperty(tt, "__esModule", { value: !0 }), (tt.SDKType = void 0));
  const e = {};
  let m;
  return (
    (tt.SDKType = {
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
    tt
  );
}
var Ir;
function ai() {
  return (
    Ir ||
      ((Ir = 1),
      (function (e) {
        var m =
          (et && et.__awaiter) ||
          function (r, o, i, n) {
            function t(a) {
              return a instanceof i
                ? a
                : new i(function (g) {
                    g(a);
                  });
            }
            return new (i || (i = Promise))(function (a, g) {
              function s(d) {
                try {
                  w(n.next(d));
                } catch (h) {
                  g(h);
                }
              }
              function b(d) {
                try {
                  w(n.throw(d));
                } catch (h) {
                  g(h);
                }
              }
              function w(d) {
                d.done ? a(d.value) : t(d.value).then(s, b);
              }
              w((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = H(),
          y = _n(),
          v = at();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
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
                  ((n[t] = (...g) => this._capture(i ? `${i}:${t}` : t, () => a.apply(o, g))),
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
            this._lastSeenError || (this._lastSeenError = E(o));
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
                  var t, a, g, s, b, w, d;
                  const h = i || Error(_),
                    D = h instanceof Error,
                    k = D ? h.name : "No Name",
                    C = E(h);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
                    !(
                      (a =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || a === void 0
                    ) && a.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const L = y.SDKType._get(this._sdkKey),
                    U = v.StatsigMetadataProvider.get(),
                    K = D ? h.stack : f(h),
                    B = Object.assign(
                      { tag: o, exception: k, info: K, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, U), { sdkType: L }),
                    );
                  (yield (
                    (w =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && w !== void 0
                      ? w
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(U.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(B),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = S;
        function E(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function f(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return _;
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
      })(et)),
    et
  );
}
var Jt = {},
  Or;
function Mi() {
  return (Or || ((Or = 1), Object.defineProperty(Jt, "__esModule", { value: !0 })), Jt);
}
var Wt = {},
  Cr;
function Ui() {
  return (Cr || ((Cr = 1), Object.defineProperty(Wt, "__esModule", { value: !0 })), Wt);
}
var xt = {},
  Tr;
function Li() {
  return (Tr || ((Tr = 1), Object.defineProperty(xt, "__esModule", { value: !0 })), xt);
}
var Me = {},
  Rr;
function li() {
  if (Rr) return Me;
  ((Rr = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.createMemoKey = Me.MemoPrefix = void 0),
    (Me.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function c(y, v, _) {
    let S = `${y}|${v}`;
    if (!_) return S;
    for (const E of Object.keys(_)) {
      if (m.has(E)) return;
      e.has(E) ? (S += `|${E}=true`) : (S += `|${E}=${_[E]}`);
    }
    return S;
  }
  return ((Me.createMemoKey = c), Me);
}
var Ue = {},
  oe = {},
  Le = {},
  Mr;
function Pi() {
  if (Mr) return Le;
  Mr = 1;
  var e =
    (Le && Le.__awaiter) ||
    function (E, f, l, u) {
      function r(o) {
        return o instanceof l
          ? o
          : new l(function (i) {
              i(o);
            });
      }
      return new (l || (l = Promise))(function (o, i) {
        function n(g) {
          try {
            a(u.next(g));
          } catch (s) {
            i(s);
          }
        }
        function t(g) {
          try {
            a(u.throw(g));
          } catch (s) {
            i(s);
          }
        }
        function a(g) {
          g.done ? o(g.value) : r(g.value).then(n, t);
        }
        a((u = u.apply(E, f || [])).next());
      });
    };
  (Object.defineProperty(Le, "__esModule", { value: !0 }), (Le._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function _(E) {
    return e(this, void 0, void 0, function* () {
      const f = yield E(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!f.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield f.arrayBuffer(),
        u = new Uint8Array(l);
      return S(u);
    });
  }
  Le._fetchTxtRecords = _;
  function S(E) {
    const f = E.findIndex(
      (u, r) =>
        r < v && String.fromCharCode(u) === "=" && y.includes(String.fromCharCode(E[r - 1])),
    );
    if (f === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = f - 1; u < E.length; u++) l += String.fromCharCode(E[u]);
    return l.split(",");
  }
  return Le;
}
var Ur;
function Ai() {
  if (Ur) return oe;
  Ur = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (i, n, t, a) {
      function g(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function w(D) {
          try {
            h(a.next(D));
          } catch (k) {
            b(k);
          }
        }
        function d(D) {
          try {
            h(a.throw(D));
          } catch (k) {
            b(k);
          }
        }
        function h(D) {
          D.done ? s(D.value) : g(D.value).then(w, d);
        }
        h((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe._isDomainFailure = oe.NetworkFallbackResolver = void 0));
  const m = Pi(),
    c = Ke(),
    y = H(),
    v = ce(),
    _ = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  let E = class {
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
      const g = (a = this._fallbackInfo) === null || a === void 0 ? void 0 : a[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(n, t) {
      var a, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((g = b.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, g) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!f(a, g)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            h = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return h ? (this._updateFallbackInfoWithNewUrl(n, t, h), !0) : !1;
        } catch (w) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", w),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var g, s, b;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        h = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[d];
      (h && w.previous.push(...h.previous), w.previous.length > 10 && (w.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && w.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: w })),
        u(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = this._dnsQueryCooldowns[n.endpoint];
        if (a && Date.now() < a) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + S;
        const g = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const d = w.split("=");
          if (d.length > 1) {
            let h = d[1];
            (h.endsWith("/") && (h = h.slice(0, -1)), g.push(`https://${h}${b}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var a;
      if (t == null) return null;
      const g = new Set((a = n?.previous) !== null && a !== void 0 ? a : []),
        s = n?.url;
      let b = null;
      for (const w of t) {
        const d = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!g.has(w) && d !== s) {
          b = d;
          break;
        }
      }
      return b;
    }
  };
  oe.NetworkFallbackResolver = E;
  function f(i, n) {
    var t;
    const a = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      a.includes("uncaught exception") ||
      a.includes("failed to fetch") ||
      a.includes("networkerror when attempting to fetch resource")
    );
  }
  oe._isDomainFailure = f;
  function l(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function u(i, n) {
    const t = l(i);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(n));
  }
  function r(i) {
    const n = l(i),
      t = v.Storage.getItem(n);
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
  return oe;
}
var nt = {},
  Lr;
function ui() {
  if (Lr) return nt;
  ((Lr = 1), Object.defineProperty(nt, "__esModule", { value: !0 }), (nt.SDKFlags = void 0));
  const e = {};
  return (
    (nt.SDKFlags = {
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var y, v;
        return (v = (y = e[m]) === null || y === void 0 ? void 0 : y[c]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    nt
  );
}
var Ht = {},
  Pr;
function gn() {
  return (
    Pr ||
      ((Pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = le(),
          c = _t(),
          y = H(),
          v = ce(),
          _ = dn(),
          S = 1800 * 1e3,
          E = 14400 * 1e3,
          f = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              f[s] == null && (f[s] = l(s));
              const b = f[s];
              return r(b);
            },
            overrideInitialSessionID: (s, b) => {
              f[b] = u(s, b);
            },
          }));
        function l(s) {
          let b = g(s);
          const w = Date.now();
          return (
            b || (b = { sessionID: (0, _.getUUID)(), startTime: w, lastUpdate: w }),
            { data: b, sdkKey: s }
          );
        }
        function u(s, b) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: b };
        }
        function r(s) {
          const b = Date.now(),
            w = s.data,
            d = s.sdkKey;
          if (i(w) || n(w)) {
            ((w.sessionID = (0, _.getUUID)()), (w.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            D && D.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = b),
            a(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const h = b - w.startTime;
          return ((s.idleTimeoutID = o(d, S)), (s.ageTimeoutID = o(d, E - h)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var w;
            const d =
              (w = (0, m._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function n({ startTime: s }) {
          return Date.now() - s > E;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function a(s, b) {
          const w = t(b);
          try {
            (0, v._setObjectInStorage)(w, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function g(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Ht)),
    Ht
  );
}
var rt = {},
  Ar;
function ci() {
  return (
    Ar ||
      ((Ar = 1),
      Object.defineProperty(rt, "__esModule", { value: !0 }),
      (rt.ErrorTag = void 0),
      (rt.ErrorTag = { NetworkError: "NetworkError" })),
    rt
  );
}
var jr;
function ji() {
  if (jr) return Ue;
  jr = 1;
  var e =
    (Ue && Ue.__awaiter) ||
    function (O, p, I, T) {
      function R(M) {
        return M instanceof I
          ? M
          : new I(function (P) {
              P(M);
            });
      }
      return new (I || (I = Promise))(function (M, P) {
        function Z(A) {
          try {
            F(T.next(A));
          } catch (j) {
            P(j);
          }
        }
        function q(A) {
          try {
            F(T.throw(A));
          } catch (j) {
            P(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : R(A.value).then(Z, q);
        }
        F((T = T.apply(O, p || [])).next());
      });
    };
  (Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.NetworkCore = void 0), le());
  const m = le(),
    c = nn(),
    y = H(),
    v = gt(),
    _ = Ai(),
    S = ui(),
    E = _n(),
    f = Ne(),
    l = gn(),
    u = vt(),
    r = ci(),
    o = at(),
    i = ft(),
    n = cn(),
    t = 1e4,
    a = 500,
    g = 3e4,
    s = 1e3,
    b = 50,
    w = b / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let h = class {
    constructor(p, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        p && (this._options = p),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
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
      if (!D(p)) return !1;
      const I = this._getInternalRequestArgs("POST", p),
        T = this._getPopulatedURL(I),
        R = navigator;
      return R.sendBeacon.bind(R)(T, I.body);
    }
    post(p) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", p);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(p) {
      const I = this._getInternalRequestArgs("GET", p);
      return this._sendRequest(I);
    }
    _sendRequest(p) {
      return e(this, void 0, void 0, function* () {
        var I, T, R, M;
        if (!D(p) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: Z, retries: q, attempt: F } = p,
          A = p.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1;
        let G = !1;
        const z = this._getPopulatedURL(p);
        let $ = null;
        const Y = (0, n._isUnloading)();
        try {
          const se = {
            method: P,
            body: Z,
            headers: Object.assign({}, p.headers),
            priority: p.priority,
            keepalive: Y,
          };
          K(p, j);
          const V = this._leakyBucket[A];
          V && ((V.lastRequestTime = Date.now()), (this._leakyBucket[A] = V));
          const ee = (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch;
          let Fe;
          if (
            (($ = yield Promise.race([
              ee(z, se).finally(() => clearTimeout(Fe)),
              new Promise((de, _e) => {
                Fe = setTimeout(() => {
                  ((G = !0), _e(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !$.ok)
          ) {
            const de = yield $.text().catch(() => "No Text"),
              _e = new Error(`NetworkError: ${z} ${de}`);
            throw ((_e.name = "NetworkError"), _e);
          }
          const te = yield $.text();
          return (
            B(p, $, j, te),
            this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
            { body: te, code: $.status }
          );
        } catch (se) {
          const V = L(se),
            ee = U(V ?? "", G);
          if (
            (B(p, $, j, "", se),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              p.sdkKey,
              p.urlConfig,
              V,
              ee,
            )) &&
              (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(p.sdkKey, p.urlConfig)),
            !q || j > q || !d.has((T = $?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: se,
                tag: r.ErrorTag.NetworkError,
                requestArgs: p,
              });
            const te = `A networking error occurred during ${P} request to ${z}.`;
            return (
              y.Log.error(te, V, se),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(te),
              null
            );
          }
          return (
            yield N(j),
            this._sendRequest(Object.assign(Object.assign({}, p), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(p) {
      let I = p?.logEventCompressionMode;
      return (
        !I && p?.disableCompression === !0 && (I = i.LogEventCompressionMode.Disabled),
        I || (I = i.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(p) {
      var I;
      const T = Date.now(),
        R =
          (I = this._leakyBucket[p]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        M = T - R.lastRequestTime,
        P = Math.floor(M * w);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= b
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[p] = R), !1)
      );
    }
    _getPopulatedURL(p) {
      var I;
      const T = (I = p.fallbackUrl) !== null && I !== void 0 ? I : p.urlConfig.getUrl();
      (p.urlConfig.endpoint === v.Endpoint._initialize ||
        p.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [v.NetworkParam.SdkKey]: p.sdkKey,
            [v.NetworkParam.SdkType]: E.SDKType._get(p.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: l.SessionID.get(p.sdkKey),
          },
          p.params,
        ),
        M = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(p) {
      var I;
      const T = (0, f._getWindowSafe)(),
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
              Object.assign({}, (I = p.params) !== null && I !== void 0 ? I : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          y.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(p) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = p.body;
        if (!(typeof T != "string" || !C(p, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              M = new CompressionStream("gzip"),
              P = M.writable.getWriter();
            (P.write(R).catch(y.Log.error), P.close().catch(y.Log.error));
            const Z = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield Z.read()).done; ) q.push(F.value);
            const A = q.reduce((z, $) => z + $.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const z of q) (j.set(z, G), (G += z.length));
            ((p.body = j),
              (p.params = Object.assign(
                Object.assign({}, (I = p.params) !== null && I !== void 0 ? I : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            y.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(p, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        R = Object.assign(Object.assign({}, I), { method: p, fallbackUrl: T });
      return ("data" in I && k(R, I.data), R);
    }
  };
  Ue.NetworkCore = h;
  const D = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (O, p) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        R = u.StableID.get(I),
        M = l.SessionID.get(I),
        P = E.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, p), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: M,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, p) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (p.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O) {
    return typeof O == "string"
      ? O
      : O instanceof Error
        ? `${O.name}: ${O.message}`
        : "Unknown Error";
  }
  function U(O, p) {
    return O.includes("Timeout") || p;
  }
  function K(O, p) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: p });
  }
  function B(O, p, I, T, R) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(p, I, T, R));
  }
  function N(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((p) => setTimeout(p, Math.min(a * (O * O), g)));
    });
  }
  return Ue;
}
var Qt = {},
  Nr;
function Ni() {
  return (Nr || ((Nr = 1), Object.defineProperty(Qt, "__esModule", { value: !0 })), Qt);
}
var Xt = {},
  Fr;
function Fi() {
  return (Fr || ((Fr = 1), Object.defineProperty(Xt, "__esModule", { value: !0 })), Xt);
}
var Yt = {},
  qr;
function qi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const m = 2,
          c = 1,
          y = (v, _) => {
            let S = 0;
            const E = Object.keys(v);
            for (let f = 0; f < E.length; f++) {
              const l = E[f],
                u = v[l];
              if (
                ((S += l.length),
                typeof u == "object" && u !== null
                  ? (S += (0, e._fastApproxSizeOf)(u, _) + m)
                  : (S += String(u).length + c),
                S >= _)
              )
                return S;
            }
            return S;
          };
        e._fastApproxSizeOf = y;
      })(Yt)),
    Yt
  );
}
var Pe = {},
  $r;
function $i() {
  if ($r) return Pe;
  $r = 1;
  var e =
    (Pe && Pe.__awaiter) ||
    function (n, t, a, g) {
      function s(b) {
        return b instanceof a
          ? b
          : new a(function (w) {
              w(b);
            });
      }
      return new (a || (a = Promise))(function (b, w) {
        function d(k) {
          try {
            D(g.next(k));
          } catch (C) {
            w(C);
          }
        }
        function h(k) {
          try {
            D(g.throw(k));
          } catch (C) {
            w(C);
          }
        }
        function D(k) {
          k.done ? b(k.value) : s(k.value).then(d, h);
        }
        D((g = g.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.StatsigClientBase = void 0), le());
  const m = le(),
    c = ai(),
    y = ii(),
    v = H(),
    _ = li(),
    S = Ne(),
    E = gn(),
    f = vt(),
    l = ft(),
    u = ce(),
    r = 3e3;
  let o = class {
    constructor(t, a, g, s) {
      var b, w, d, h;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && E.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && f.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && f.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new y.EventLogger(t, D, g, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, g),
        (this.storageProvider = u.Storage),
        (h =
          (d = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(w)) === null ||
          h === void 0 ||
          h.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
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
          f.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const g = this._listeners[t].indexOf(a);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, a) {
      ((a.__isInternal = !0), this.on(t, a));
    }
    $emt(t) {
      var a;
      const g = (s) => {
        try {
          s(t);
        } catch (b) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, b);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => g(s)),
        (a = this._listeners["*"]) === null || a === void 0 || a.forEach(g));
    }
    _setStatus(t, a) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: a }));
    }
    _enqueueExposure(t, a, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(a);
    }
    _memoize(t, a) {
      return (g, s) => {
        if (this._options.disableEvaluationMemoization) return a(g, s);
        const b = (0, _.createMemoKey)(t, g, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[b] = a(g, s))),
            this._memoCache[b])
          : a(g, s);
      };
    }
  };
  Pe.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const g = (0, m._getStatsigGlobal)(),
      s = (a = g.instances) !== null && a !== void 0 ? a : {},
      b = t;
    (s[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = b),
      g.firstInstance || (g.firstInstance = b),
      (g.instances = s),
      (__STATSIG__ = g));
  }
  return Pe;
}
var it = {},
  Kr;
function Ki() {
  return (
    Kr ||
      ((Kr = 1),
      Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.DataAdapterCachePrefix = void 0),
      (it.DataAdapterCachePrefix = "statsig.cached")),
    it
  );
}
var Zt = {},
  Br;
function Bi() {
  return (Br || ((Br = 1), Object.defineProperty(Zt, "__esModule", { value: !0 })), Zt);
}
var W = {},
  Gr;
function Gi() {
  if (Gr) return W;
  ((Gr = 1),
    Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._makeTypedGet =
      W._mergeOverride =
      W._makeLayer =
      W._makeExperiment =
      W._makeDynamicConfig =
      W._makeFeatureGate =
        void 0));
  const e = H(),
    m = un();
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
  W._makeFeatureGate = y;
  function v(l, u, r) {
    var o, i;
    const n = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, n)), {
      idType: (i = r?.id_type) !== null && i !== void 0 ? i : null,
      get: f(l, r?.value),
    });
  }
  W._makeDynamicConfig = v;
  function _(l, u, r) {
    var o;
    const i = v(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  W._makeExperiment = _;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: f(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  W._makeLayer = S;
  function E(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: f(l.name, r, o) });
  }
  W._mergeOverride = E;
  function f(l, u, r) {
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
  return ((W._makeTypedGet = f), W);
}
var en = {},
  Vr;
function Vi() {
  return (Vr || ((Vr = 1), Object.defineProperty(en, "__esModule", { value: !0 })), en);
}
var Ae = {},
  zr;
function zi() {
  if (zr) return Ae;
  ((zr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = Ae.createUpdateDetails = void 0));
  const e = (m, c, y, v, _, S) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: S,
  });
  return (
    (Ae.createUpdateDetails = e),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    Ae
  );
}
var Jr;
function Ji() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        var m =
            (De && De.__createBinding) ||
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
            (De && De.__exportStar) ||
            function (l, u) {
              for (var r in l)
                r !== "default" && !Object.prototype.hasOwnProperty.call(u, r) && m(u, l, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          le());
        const y = le(),
          v = nn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const S = H();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const E = at(),
          f = ce();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return f.Storage;
          },
        }),
          c(le(), e),
          c(_t(), e),
          c(Ci(), e),
          c(Ti(), e),
          c(nn(), e),
          c(Ri(), e),
          c(ai(), e),
          c(Mi(), e),
          c(Ui(), e),
          c(Ke(), e),
          c(Li(), e),
          c(H(), e),
          c(li(), e),
          c(gt(), e),
          c(ji(), e),
          c(Ni(), e),
          c(Fi(), e),
          c(Ne(), e),
          c(_n(), e),
          c(gn(), e),
          c(qi(), e),
          c(vt(), e),
          c($i(), e),
          c(ci(), e),
          c(Ki(), e),
          c(ni(), e),
          c(at(), e),
          c(ft(), e),
          c(Bi(), e),
          c(Gi(), e),
          c(Vi(), e),
          c(oi(), e),
          c(ce(), e),
          c(si(), e),
          c(un(), e),
          c(ri(), e),
          c(dn(), e),
          c(cn(), e),
          c(zi(), e),
          c(ui(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: E.SDK_VERSION }));
      })(De)),
    De
  );
}
var no = Ji();
export { xi as a, Ji as b, ot as c, Wi as g, Hi as r, no as s };
