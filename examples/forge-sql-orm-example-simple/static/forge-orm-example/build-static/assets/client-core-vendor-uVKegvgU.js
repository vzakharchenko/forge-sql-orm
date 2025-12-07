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
function xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Hi(e) {
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
function H() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function d(p) {
          return (p.unshift("[Statsig]"), p);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...h) {
            S.level >= e.LogLevel.Info && console.info(c, ...d(h));
          }
          static debug(...h) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...d(h));
          }
          static warn(...h) {
            S.level >= e.LogLevel.Warn && console.warn(y, ...d(h));
          }
          static error(...h) {
            S.level >= e.LogLevel.Error && console.error(v, ...d(h));
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
        const v = H(),
          d = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = d;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const p = (i) => {
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
        e._getInstance = p;
        const h = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          u = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = l[h]) !== null && m !== void 0 ? m : u[h]) !== null && c !== void 0
                ? c
                : r[h]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((l[h] = o), (u[h] = o), (r[h] = o));
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
            p(l, d({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            p(
              l,
              d(
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
            p(l, d(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            p(l, d(u, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            p(l, d({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            p(l, d(u, y, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            m.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: h(l, "code"), name: h(l, "name"), message: h(l, "message") };
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
        function d(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: v, user: l, value: null, metadata: u, time: Date.now() };
        }
        function p(l, u) {
          var r;
          const o = (r = m.get(l)) !== null && r !== void 0 ? r : [];
          (o.push(u), m.set(l, o));
        }
        function h(l, u) {
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
    const v = (d) => (Array.isArray(d) ? "array" : typeof d);
    return v(c) === v(y);
  }
  return ((he._isTypeMatch = m), he);
}
var mn;
function Ke() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = rn(),
          c = (d) => {
            let S = 0;
            for (let p = 0; p < d.length; p++) {
              const h = d.charCodeAt(p);
              ((S = (S << 5) - S + h), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const y = (d, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(d, S)));
        e._DJB2Object = y;
        const v = (d, S) => {
          if (d == null) return null;
          const p = Object.keys(d).sort(),
            h = {};
          return (
            p.forEach((l) => {
              const u = d[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                h[l] = u;
                return;
              }
              h[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            h
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
  const e = Ke();
  function m(y, v, d) {
    var S;
    if (d) return d(y, v);
    const p = v && v.customIDs ? v.customIDs : {},
      h = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(p)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${p[l]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(h.join("|"));
  }
  ve._getUserStorageKey = m;
  function c(y, v, d) {
    return v ? m(y, v, d) : (0, e._DJB2)(`k:${y}`);
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
          var h;
          const l = (0, e._getWindowSafe)();
          return (h = l?.document) !== null && h !== void 0 ? h : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const h =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || h;
        };
        e._isServerEnv = y;
        const v = (h, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(h, l);
        };
        e._addWindowEventListenerSafe = v;
        const d = (h, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(h, l);
        };
        e._addDocumentEventListenerSafe = d;
        const S = () => {
          var h;
          try {
            return (h = (0, e._getWindowSafe)()) === null || h === void 0
              ? void 0
              : h.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const p = () => {
          const h = (0, e._getWindowSafe)();
          return h && "onpagehide" in h ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = p;
      })(Et)),
    Et
  );
}
var X = {},
  pn;
function xr() {
  if (pn) return X;
  ((pn = 1),
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
  const d = (u, r, o) => {
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
  X._createGateExposure = d;
  function S(u, r) {
    return u.map((o) => (typeof o == "string" ? (r ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = S;
  const p = (u, r, o) => {
    var i, n, t, a;
    const _ = { config: r.name, ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (_.rulePassed = String(r.__evaluation.passed)),
      y(
        e,
        u,
        r.details,
        _,
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
  X._createConfigExposure = p;
  const h = (u, r, o, i) => {
    var n, t, a, _, s, b;
    const f = r.__evaluation,
      g = ((n = f?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let E = "",
      D = (t = f?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    g &&
      ((E = (a = f.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (D = f.secondary_exposures));
    const I = (_ = r.__evaluation) === null || _ === void 0 ? void 0 : _.parameter_rule_ids,
      R = {
        config: r.name,
        parameterName: o,
        ruleID: (s = I?.[o]) !== null && s !== void 0 ? s : r.ruleID,
        allocatedExperiment: E,
        isExplicitParameter: String(g),
      };
    return (
      ((b = r.__evaluation) === null || b === void 0 ? void 0 : b.version) != null &&
        (R.configVersion = r.__evaluation.version),
      y(c, u, r.details, R, S(D, i))
    );
  };
  X._createLayerParameterExposure = h;
  const l = (u, r) => (
    (r.reason = u.reason),
    u.lcut && (r.lcut = String(u.lcut)),
    u.receivedAt && (r.receivedAt = String(u.receivedAt)),
    r
  );
  return X;
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
        const m = H(),
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
        let d = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (d = {
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
        let S = d ?? v,
          p = S;
        function h(r) {
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
          isReady: () => p.isReady(),
          isReadyResolver: () => p.isReadyResolver(),
          getProviderName: () => p.getProviderName(),
          getItem: (r) => h(() => p.getItem(r)),
          setItem: (r, o) => h(() => p.setItem(r, o)),
          removeItem: (r) => p.removeItem(r),
          getAllKeys: () => p.getAllKeys(),
          _setProvider: (r) => {
            ((S = r), (p = r));
          },
          _setDisabled: (r) => {
            r ? (p = v) : (p = S);
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
var Ge = {},
  kn;
function Hr() {
  if (kn) return Ge;
  ((kn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.UrlConfiguration = void 0));
  const e = Ke(),
    m = ut(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  class y {
    constructor(d, S, p, h) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = d),
        (this.endpointDnsKey = c[d]),
        S && (this.customUrl = S),
        !S && p && (this.customUrl = p.endsWith("/") ? `${p}${d}` : `${p}/${d}`),
        h && (this.fallbackUrls = h));
      const l = m.NetworkDefault[d];
      this.defaultUrl = `${l}/${d}`;
    }
    getUrl() {
      var d;
      return (d = this.customUrl) !== null && d !== void 0 ? d : this.defaultUrl;
    }
    getChecksum() {
      var d;
      const S = ((d = this.fallbackUrls) !== null && d !== void 0 ? d : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  }
  return ((Ge.UrlConfiguration = y), Ge);
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
        let d = c,
          S = !1;
        const p = () => d === c;
        e._isCurrentlyVisible = p;
        const h = () => S;
        e._isUnloading = h;
        const l = (r) => {
          v.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== d && ((d = r), v.forEach((o) => o(r)));
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
function Qr() {
  if (On) return fe;
  On = 1;
  var e =
    (fe && fe.__awaiter) ||
    function (f, g, E, D) {
      function I(R) {
        return R instanceof E
          ? R
          : new E(function (U) {
              U(R);
            });
      }
      return new (E || (E = Promise))(function (R, U) {
        function P(B) {
          try {
            N(D.next(B));
          } catch (O) {
            U(O);
          }
        }
        function V(B) {
          try {
            N(D.throw(B));
          } catch (O) {
            U(O);
          }
        }
        function N(B) {
          B.done ? R(B.value) : I(B.value).then(P, V);
        }
        N((D = D.apply(f, g || [])).next());
      });
    };
  (Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.EventLogger = void 0));
  const m = lt(),
    c = Ke(),
    y = H(),
    v = ut(),
    d = je(),
    S = xr(),
    p = ct(),
    h = ue(),
    l = Hr(),
    u = on(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    _ = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  class b {
    static _safeFlushAndForget(g) {
      var E;
      (E = _[g]) === null || E === void 0 || E.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(g) {
      var E;
      (E = _[g]) === null || E === void 0 || E._retryFailedLogs(s.GainedFocus);
    }
    constructor(g, E, D, I) {
      var R, U;
      ((this._sdkKey = g),
        (this._emitter = E),
        (this._network = D),
        (this._options = I),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (R = I?.loggingEnabled) !== null && R !== void 0
            ? R
            : I?.disableLogging === !0
              ? p.LoggingEnabledOption.disabled
              : p.LoggingEnabledOption.browserOnly),
        I?.loggingEnabled &&
          I.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (U = I?.loggingBufferMaxSize) !== null && U !== void 0 ? U : r));
      const P = I?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        v.Endpoint._rgstr,
        P?.logEventUrl,
        P?.api,
        P?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(g) {
      this._network.setLogEventCompressionMode(g);
    }
    setLoggingEnabled(g) {
      this._loggingEnabled = g;
    }
    enqueue(g) {
      this._shouldLogEvent(g) &&
        (this._normalizeAndAppendEvent(g),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && b._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(g) {
      var E;
      const D = (E = this._nonExposedChecks[g]) !== null && E !== void 0 ? E : 0;
      this._nonExposedChecks[g] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var g;
      const E = (0, d._isServerEnv)();
      (E &&
        ((g = this._options) === null || g === void 0 ? void 0 : g.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        E ||
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
          delete _[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const g = this._queue;
        ((this._queue = []), yield this._sendEvents(g));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > a) &&
          setTimeout(() => b._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(g) {
      var E;
      if (
        ((E = this._options) === null || E === void 0 ? void 0 : E.loggingEnabled) !== "always" &&
        (0, d._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(g)) return !0;
      const D = g.user ? g.user : { statsigEnvironment: void 0 },
        I = (0, m._getUserStorageKey)(this._sdkKey, D),
        R = g.metadata ? g.metadata : {},
        U = [
          g.eventName,
          I,
          R.gate,
          R.config,
          R.ruleID,
          R.allocatedExperiment,
          R.parameterName,
          String(R.isExplicitParameter),
          R.reason,
        ].join("|"),
        P = this._lastExposureTimeMap[U],
        V = Date.now();
      return P && V - P < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[U] = V),
          !0);
    }
    _sendEvents(g) {
      return e(this, void 0, void 0, function* () {
        var E, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(g), !1);
        try {
          const R =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (E = this._options) === null || E === void 0 ? void 0 : E.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: g }),
            (R ? this._sendEventsViaBeacon(g) : yield this._sendEventsViaPost(g)).success
              ? (this._emitter({ name: "logs_flushed", events: g }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(g), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(g) {
      return e(this, void 0, void 0, function* () {
        var E;
        const D = yield this._network.post(this._getRequestData(g)),
          I = (E = D?.code) !== null && E !== void 0 ? E : -1;
        return { success: I >= 200 && I < 300 };
      });
    }
    _sendEventsViaBeacon(g) {
      return { success: this._network.beacon(this._getRequestData(g)) };
    }
    _getRequestData(g) {
      return {
        sdkKey: this._sdkKey,
        data: { events: g },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(g.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(g) {
      for (; g.length > t; ) g.shift();
      const E = this._getStorageKey();
      try {
        (0, h._setObjectInStorage)(E, g);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(g) {
      const E = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        h.Storage.isReady() || (yield h.Storage.isReadyResolver());
        const D = (0, h._getObjectFromStorage)(E);
        if (!D) return;
        (g === s.Startup && h.Storage.removeItem(E),
          (yield this._sendEvents(D)) && g === s.GainedFocus && h.Storage.removeItem(E));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(g) {
      g.user && ((g.user = Object.assign({}, g.user)), delete g.user.privateAttributes);
      const E = {},
        D = this._getCurrentPageUrl();
      D && (E.statsigMetadata = { currentPage: D });
      const I = Object.assign(Object.assign({}, g), E);
      (y.Log.debug("Enqueued Event:", I), this._queue.push(I));
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
      var g;
      if (
        ((g = this._options) === null || g === void 0
          ? void 0
          : g.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, d._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var g, E;
      const D =
          (E = (g = this._options) === null || g === void 0 ? void 0 : g.loggingIntervalMs) !==
            null && E !== void 0
            ? E
            : o,
        I = setInterval(() => {
          const R = _[this._sdkKey];
          !R || R._flushIntervalId !== I ? clearInterval(I) : b._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = I;
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
  Ve = {},
  ze = {},
  Rn;
function sn() {
  if (Rn) return ze;
  ((Rn = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let d = Math.random() * 16;
        return (
          m > 0
            ? ((d = ((m + d) % 16) | 0), (m = Math.floor(m / 16)))
            : ((d = ((c + d) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? d : (d & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((ze.getUUID = e), ze);
}
var Mn;
function dt() {
  if (Mn) return Ve;
  ((Mn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.StableID = void 0));
  const e = lt(),
    m = H(),
    c = je(),
    y = ue(),
    v = sn(),
    d = {},
    S = {},
    p = {};
  Ve.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (p[n]) return null;
      if (d[n] != null) return d[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((d[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, v.getUUID)()), l(t, n), o(t, n), (d[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((d[t] = n), l(n, t), o(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      S[n] = t;
    },
    _setDisabled: (n, t) => {
      p[n] = t;
    },
  };
  function h(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const a = h(t);
    try {
      (0, y._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = h(n);
    return (0, y._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!S[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const a of t) {
      const [_, s] = a.trim().split("=");
      if (_ === i(n)) return decodeURIComponent(s);
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
  return Ve;
}
var me = {},
  Un;
function Xr() {
  if (Un) return me;
  ((Un = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me._getFullUserHash = me._normalizeUser = void 0));
  const e = Ke(),
    m = H();
  function c(v, d, S) {
    try {
      const p = JSON.parse(JSON.stringify(v));
      return (
        d != null && d.environment != null
          ? (p.statsigEnvironment = d.environment)
          : S != null && (p.statsigEnvironment = { tier: S }),
        p
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
var Je = {},
  Ln;
function Yr() {
  if (Ln) return Je;
  ((Ln = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je._typedJsonParse = void 0));
  const e = H();
  function m(c, y, v) {
    try {
      const d = JSON.parse(c);
      if (d && typeof d == "object" && y in d) return d;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((Je._typedJsonParse = m), Je);
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
          : new i(function (_) {
              _(a);
            });
      }
      return new (i || (i = Promise))(function (a, _) {
        function s(g) {
          try {
            f(n.next(g));
          } catch (E) {
            _(E);
          }
        }
        function b(g) {
          try {
            f(n.throw(g));
          } catch (E) {
            _(E);
          }
        }
        function f(g) {
          g.done ? a(g.value) : t(g.value).then(s, b);
        }
        f((n = n.apply(r, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const m = H(),
    c = dt(),
    y = Xr(),
    v = ue(),
    d = Yr(),
    S = 10;
  class p {
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
      this._inMemoryCache.add(t, h("Bootstrap", o, null, n));
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
              new Promise((_) => setTimeout(_, n.timeoutMs)).then(
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
          _ = o != null && this._isCachedResultValidFor204(o, i),
          s = yield this._fetchFromNetwork(a, i, n, _);
        if (!s) return (m.Log.debug("No response returned for latest value"), null);
        const b = (0, d._typedJsonParse)(s, "has_updates", "Response"),
          f = this._getSdkKey(),
          g = c.StableID.get(f);
        let E = null;
        if (b?.has_updates === !0) E = h("Network", s, g, i);
        else if (a && b?.has_updates === !1) E = h("NetworkNotModified", a, g, i);
        else return null;
        const D = this._getCacheKey(i);
        return (this._inMemoryCache.add(D, E), this._writeToCache(D, E), E);
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
      const t = (0, d._typedJsonParse)(n, "source", "Cached Result");
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
  ne.DataAdapterCore = p;
  function h(r, o, i, n) {
    return {
      source: r,
      data: o,
      receivedAt: Date.now(),
      stableID: i,
      fullUserHash: (0, y._getFullUserHash)(n),
    };
  }
  ne._makeDataAdapterResult = h;
  class l {
    constructor() {
      this._data = {};
    }
    get(o, i) {
      var n;
      const t = this._data[o],
        a = t?.stableID,
        _ = (n = i?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return _ && a && _ !== a
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
            _ = r[t];
          return typeof a == "object" && typeof _ == "object"
            ? _.receivedAt < a.receivedAt
              ? t
              : n
            : _ < a
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
var We = {},
  xe = {},
  jn;
function an() {
  if (jn) return xe;
  ((jn = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.SDKType = void 0));
  const e = {};
  let m;
  return (
    (xe.SDKType = {
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
    xe
  );
}
var Nn;
function Zr() {
  return (
    Nn ||
      ((Nn = 1),
      (function (e) {
        var m =
          (We && We.__awaiter) ||
          function (r, o, i, n) {
            function t(a) {
              return a instanceof i
                ? a
                : new i(function (_) {
                    _(a);
                  });
            }
            return new (i || (i = Promise))(function (a, _) {
              function s(g) {
                try {
                  f(n.next(g));
                } catch (E) {
                  _(E);
                }
              }
              function b(g) {
                try {
                  f(n.throw(g));
                } catch (E) {
                  _(E);
                }
              }
              function f(g) {
                g.done ? a(g.value) : t(g.value).then(s, b);
              }
              f((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = H(),
          y = an(),
          v = st();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const d = "[Statsig] UnknownError";
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
            this._lastSeenError || (this._lastSeenError = p(o));
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
                  var t, a, _, s, b, f, g;
                  const E = i || Error(d),
                    D = E instanceof Error,
                    I = D ? E.name : "No Name",
                    R = p(E);
                  if (((this._lastSeenError = R), this._seen.has(I))) return;
                  if (
                    (this._seen.add(I),
                    !(
                      (a =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || a === void 0
                    ) && a.preventAllNetworkTraffic)
                  ) {
                    (_ = this._emitter) === null ||
                      _ === void 0 ||
                      _.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const U = y.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    V = D ? E.stack : h(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: V, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: U }),
                    );
                  (yield (
                    (f =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(U),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        }
        e.ErrorBoundary = S;
        function p(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function h(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return d;
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
      })(We)),
    We
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
  Kn;
function hi() {
  return (Kn || ((Kn = 1), Object.defineProperty(Tt, "__esModule", { value: !0 })), Tt);
}
var Se = {},
  Bn;
function $r() {
  if (Bn) return Se;
  ((Bn = 1),
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
  function c(y, v, d) {
    let S = `${y}|${v}`;
    if (!d) return S;
    for (const p of Object.keys(d)) {
      if (m.has(p)) return;
      e.has(p) ? (S += `|${p}=true`) : (S += `|${p}=${d[p]}`);
    }
    return S;
  }
  return ((Se.createMemoKey = c), Se);
}
var be = {},
  re = {},
  Ee = {},
  Gn;
function yi() {
  if (Gn) return Ee;
  Gn = 1;
  var e =
    (Ee && Ee.__awaiter) ||
    function (p, h, l, u) {
      function r(o) {
        return o instanceof l
          ? o
          : new l(function (i) {
              i(o);
            });
      }
      return new (l || (l = Promise))(function (o, i) {
        function n(_) {
          try {
            a(u.next(_));
          } catch (s) {
            i(s);
          }
        }
        function t(_) {
          try {
            a(u.throw(_));
          } catch (s) {
            i(s);
          }
        }
        function a(_) {
          _.done ? o(_.value) : r(_.value).then(n, t);
        }
        a((u = u.apply(p, h || [])).next());
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
  function d(p) {
    return e(this, void 0, void 0, function* () {
      const h = yield p(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!h.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield h.arrayBuffer(),
        u = new Uint8Array(l);
      return S(u);
    });
  }
  Ee._fetchTxtRecords = d;
  function S(p) {
    const h = p.findIndex(
      (u, r) =>
        r < v && String.fromCharCode(u) === "=" && y.includes(String.fromCharCode(p[r - 1])),
    );
    if (h === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = h - 1; u < p.length; u++) l += String.fromCharCode(p[u]);
    return l.split(",");
  }
  return Ee;
}
var Vn;
function mi() {
  if (Vn) return re;
  Vn = 1;
  var e =
    (re && re.__awaiter) ||
    function (i, n, t, a) {
      function _(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function f(D) {
          try {
            E(a.next(D));
          } catch (I) {
            b(I);
          }
        }
        function g(D) {
          try {
            E(a.throw(D));
          } catch (I) {
            b(I);
          }
        }
        function E(D) {
          D.done ? s(D.value) : _(D.value).then(f, g);
        }
        E((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const m = yi(),
    c = Ke(),
    y = H(),
    v = ue(),
    d = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  class p {
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
      const _ = (a = this._fallbackInfo) === null || a === void 0 ? void 0 : a[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + d),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(n, t) {
      var a, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((_ = b.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, _) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!h(a, _)) return !1;
          const g =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              g,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(n, t, E), !0) : !1;
        } catch (f) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var _, s, b;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + d,
          previous: [],
        },
        g = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[g];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[g]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && f.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [g]: f })),
        u(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = this._dnsQueryCooldowns[n.endpoint];
        if (a && Date.now() < a) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + S;
        const _ = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(n.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(n.endpointDnsKey + "=")) continue;
          const g = f.split("=");
          if (g.length > 1) {
            let E = g[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${b}`));
          }
        }
        return _;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var a;
      if (t == null) return null;
      const _ = new Set((a = n?.previous) !== null && a !== void 0 ? a : []),
        s = n?.url;
      let b = null;
      for (const f of t) {
        const g = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && g !== s) {
          b = g;
          break;
        }
      }
      return b;
    }
  }
  re.NetworkFallbackResolver = p;
  function h(i, n) {
    var t;
    const a = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      a.includes("uncaught exception") ||
      a.includes("failed to fetch") ||
      a.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = h;
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
var He = {},
  zn;
function ei() {
  if (zn) return He;
  ((zn = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.SDKFlags = void 0));
  const e = {};
  return (
    (He.SDKFlags = {
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
    He
  );
}
var Rt = {},
  Jn;
function ln() {
  return (
    Jn ||
      ((Jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = ae(),
          c = lt(),
          y = H(),
          v = ue(),
          d = sn(),
          S = 1800 * 1e3,
          p = 14400 * 1e3,
          h = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              h[s] == null && (h[s] = l(s));
              const b = h[s];
              return r(b);
            },
            overrideInitialSessionID: (s, b) => {
              h[b] = u(s, b);
            },
          }));
        function l(s) {
          let b = _(s);
          const f = Date.now();
          return (
            b || (b = { sessionID: (0, d.getUUID)(), startTime: f, lastUpdate: f }),
            { data: b, sdkKey: s }
          );
        }
        function u(s, b) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: b };
        }
        function r(s) {
          const b = Date.now(),
            f = s.data,
            g = s.sdkKey;
          if (i(f) || n(f)) {
            ((f.sessionID = (0, d.getUUID)()), (f.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(g);
            D && D.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = b),
            a(f, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const E = b - f.startTime;
          return ((s.idleTimeoutID = o(g, S)), (s.ageTimeoutID = o(g, p - E)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var f;
            const g =
              (f = (0, m._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            g && g.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function n({ startTime: s }) {
          return Date.now() - s > p;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function a(s, b) {
          const f = t(b);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Rt)),
    Rt
  );
}
var Qe = {},
  Wn;
function ti() {
  return (
    Wn ||
      ((Wn = 1),
      Object.defineProperty(Qe, "__esModule", { value: !0 }),
      (Qe.ErrorTag = void 0),
      (Qe.ErrorTag = { NetworkError: "NetworkError" })),
    Qe
  );
}
var xn;
function Si() {
  if (xn) return be;
  xn = 1;
  var e =
    (be && be.__awaiter) ||
    function (O, w, k, C) {
      function T(M) {
        return M instanceof k
          ? M
          : new k(function (L) {
              L(M);
            });
      }
      return new (k || (k = Promise))(function (M, L) {
        function $(A) {
          try {
            F(C.next(A));
          } catch (j) {
            L(j);
          }
        }
        function q(A) {
          try {
            F(C.throw(A));
          } catch (j) {
            L(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : T(A.value).then($, q);
        }
        F((C = C.apply(O, w || [])).next());
      });
    };
  (Object.defineProperty(be, "__esModule", { value: !0 }), (be.NetworkCore = void 0), ae());
  const m = ae(),
    c = tn(),
    y = H(),
    v = ut(),
    d = mi(),
    S = ei(),
    p = an(),
    h = je(),
    l = ln(),
    u = dt(),
    r = ti(),
    o = st(),
    i = ct(),
    n = on(),
    t = 1e4,
    a = 500,
    _ = 3e4,
    s = 1e3,
    b = 50,
    f = b / s,
    g = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class E {
    constructor(w, k) {
      ((this._emitter = k),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        w && (this._options = w),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new d.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(w)));
    }
    setLogEventCompressionMode(w) {
      this._options.logEventCompressionMode = w;
    }
    setErrorBoundary(w) {
      ((this._errorBoundary = w),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(w));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const w = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), w);
    }
    beacon(w) {
      if (!D(w)) return !1;
      const k = this._getInternalRequestArgs("POST", w),
        C = this._getPopulatedURL(k),
        T = navigator;
      return T.sendBeacon.bind(T)(C, k.body);
    }
    post(w) {
      return e(this, void 0, void 0, function* () {
        const k = this._getInternalRequestArgs("POST", w);
        return (this._tryEncodeBody(k), yield this._tryToCompressBody(k), this._sendRequest(k));
      });
    }
    get(w) {
      const k = this._getInternalRequestArgs("GET", w);
      return this._sendRequest(k);
    }
    _sendRequest(w) {
      return e(this, void 0, void 0, function* () {
        var k, C, T, M;
        if (!D(w) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = w,
          A = w.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1,
          G = typeof AbortController < "u" ? new AbortController() : null,
          J = setTimeout(() => {
            G?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          K = this._getPopulatedURL(w);
        let Z = null;
        const se = (0, n._isUnloading)();
        try {
          const z = {
            method: L,
            body: $,
            headers: Object.assign({}, w.headers),
            signal: G?.signal,
            priority: w.priority,
            keepalive: se,
          };
          V(w, j);
          const ee = this._leakyBucket[A];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[A] = ee)),
            (Z = yield (
              (k = this._netConfig.networkOverrideFunc) !== null && k !== void 0 ? k : fetch
            )(K, z)),
            clearTimeout(J),
            !Z.ok)
          ) {
            const de = yield Z.text().catch(() => "No Text"),
              _e = new Error(`NetworkError: ${K} ${de}`);
            throw ((_e.name = "NetworkError"), _e);
          }
          const te = yield Z.text();
          return (
            N(w, Z, j, te),
            this._fallbackResolver.tryBumpExpiryTime(w.sdkKey, w.urlConfig),
            { body: te, code: Z.status }
          );
        } catch (z) {
          const ee = U(G, z),
            Fe = P(G);
          if (
            (N(w, Z, j, "", z),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              w.sdkKey,
              w.urlConfig,
              ee,
              Fe,
            )) &&
              (w.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig)),
            !q || j > q || !g.has((C = Z?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: z,
                tag: r.ErrorTag.NetworkError,
                requestArgs: w,
              });
            const de = `A networking error occurred during ${L} request to ${K}.`;
            return (
              y.Log.error(de, ee, z),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(de),
              null
            );
          }
          return (
            yield B(j),
            this._sendRequest(Object.assign(Object.assign({}, w), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(w) {
      let k = w?.logEventCompressionMode;
      return (
        !k && w?.disableCompression === !0 && (k = i.LogEventCompressionMode.Disabled),
        k || (k = i.LogEventCompressionMode.Enabled),
        k
      );
    }
    _isRateLimited(w) {
      var k;
      const C = Date.now(),
        T =
          (k = this._leakyBucket[w]) !== null && k !== void 0
            ? k
            : { count: 0, lastRequestTime: C },
        M = C - T.lastRequestTime,
        L = Math.floor(M * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= b
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[w] = T), !1)
      );
    }
    _getPopulatedURL(w) {
      var k;
      const C = (k = w.fallbackUrl) !== null && k !== void 0 ? k : w.urlConfig.getUrl();
      (w.urlConfig.endpoint === v.Endpoint._initialize ||
        w.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: w.sdkKey,
            [v.NetworkParam.SdkType]: p.SDKType._get(w.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: l.SessionID.get(w.sdkKey),
          },
          w.params,
        ),
        M = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(w) {
      var k;
      const C = (0, h._getWindowSafe)(),
        T = w.body;
      if (
        !(
          !w.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((w.body = C.btoa(T).split("").reverse().join("")),
            (w.params = Object.assign(
              Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          y.Log.warn(`Request encoding failed for ${w.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(w) {
      return e(this, void 0, void 0, function* () {
        var k;
        const C = w.body;
        if (!(typeof C != "string" || !R(w, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              M = new CompressionStream("gzip"),
              L = M.writable.getWriter();
            (L.write(T).catch(y.Log.error), L.close().catch(y.Log.error));
            const $ = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((J, K) => J + K.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const J of q) (j.set(J, G), (G += J.length));
            ((w.body = j),
              (w.params = Object.assign(
                Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            y.Log.warn(`Request compression failed for ${w.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(w, k) {
      const C = this._fallbackResolver.getActiveFallbackUrl(k.sdkKey, k.urlConfig),
        T = Object.assign(Object.assign({}, k), { method: w, fallbackUrl: C });
      return ("data" in k && I(T, k.data), T);
    }
  }
  be.NetworkCore = E;
  const D = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, w) => {
      const { sdkKey: k, fallbackUrl: C } = O,
        T = u.StableID.get(k),
        M = l.SessionID.get(k),
        L = p.SDKType._get(k);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, w), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: M,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function R(O, w) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const k = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (w.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(k && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function U(O, w) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof w == "string"
        ? w
        : w instanceof Error
          ? `${w.name}: ${w.message}`
          : "Unknown Error";
  }
  function P(O) {
    return (
      (O?.signal.aborted &&
        typeof O.signal.reason == "string" &&
        O.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function V(O, w) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: w });
  }
  function N(O, w, k, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(w, k, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((w) => setTimeout(w, Math.min(a * (O * O), _)));
    });
  }
  return be;
}
var Mt = {},
  Hn;
function bi() {
  return (Hn || ((Hn = 1), Object.defineProperty(Mt, "__esModule", { value: !0 })), Mt);
}
var Ut = {},
  Qn;
function Ei() {
  return (Qn || ((Qn = 1), Object.defineProperty(Ut, "__esModule", { value: !0 })), Ut);
}
var pe = {},
  Xn;
function pi() {
  if (Xn) return pe;
  Xn = 1;
  var e =
    (pe && pe.__awaiter) ||
    function (n, t, a, _) {
      function s(b) {
        return b instanceof a
          ? b
          : new a(function (f) {
              f(b);
            });
      }
      return new (a || (a = Promise))(function (b, f) {
        function g(I) {
          try {
            D(_.next(I));
          } catch (R) {
            f(R);
          }
        }
        function E(I) {
          try {
            D(_.throw(I));
          } catch (R) {
            f(R);
          }
        }
        function D(I) {
          I.done ? b(I.value) : s(I.value).then(g, E);
        }
        D((_ = _.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.StatsigClientBase = void 0), ae());
  const m = ae(),
    c = Zr(),
    y = Qr(),
    v = H(),
    d = $r(),
    S = je(),
    p = ln(),
    h = dt(),
    l = ct(),
    u = ue(),
    r = 3e3;
  class o {
    constructor(t, a, _, s) {
      var b, f, g, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && p.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && h.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && h.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new y.EventLogger(t, D, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = u.Storage),
        (E =
          (g = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || g === void 0
            ? void 0
            : g.call(f)) === null ||
          E === void 0 ||
          E.catch((I) => this._errorBoundary.logError("OA::loadFromStorage", I)),
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
          h.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const _ = this._listeners[t].indexOf(a);
        _ !== -1 && this._listeners[t].splice(_, 1);
      }
    }
    $on(t, a) {
      ((a.__isInternal = !0), this.on(t, a));
    }
    $emt(t) {
      var a;
      const _ = (s) => {
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
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => _(s)),
        (a = this._listeners["*"]) === null || a === void 0 || a.forEach(_));
    }
    _setStatus(t, a) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: a }));
    }
    _enqueueExposure(t, a, _) {
      if (_?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(a);
    }
    _memoize(t, a) {
      return (_, s) => {
        if (this._options.disableEvaluationMemoization) return a(_, s);
        const b = (0, d.createMemoKey)(t, _, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[b] = a(_, s))),
            this._memoCache[b])
          : a(_, s);
      };
    }
  }
  pe.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const _ = (0, m._getStatsigGlobal)(),
      s = (a = _.instances) !== null && a !== void 0 ? a : {},
      b = t;
    (s[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = b),
      _.firstInstance || (_.firstInstance = b),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return pe;
}
var Xe = {},
  Yn;
function wi() {
  return (
    Yn ||
      ((Yn = 1),
      Object.defineProperty(Xe, "__esModule", { value: !0 }),
      (Xe.DataAdapterCachePrefix = void 0),
      (Xe.DataAdapterCachePrefix = "statsig.cached")),
    Xe
  );
}
var Lt = {},
  Zn;
function Di() {
  return (Zn || ((Zn = 1), Object.defineProperty(Lt, "__esModule", { value: !0 })), Lt);
}
var W = {},
  $n;
function ki() {
  if ($n) return W;
  (($n = 1),
    Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._makeTypedGet =
      W._mergeOverride =
      W._makeLayer =
      W._makeExperiment =
      W._makeDynamicConfig =
      W._makeFeatureGate =
        void 0));
  const e = H(),
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
  W._makeFeatureGate = y;
  function v(l, u, r) {
    var o;
    const i = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, i)), { get: h(l, r?.value) });
  }
  W._makeDynamicConfig = v;
  function d(l, u, r) {
    var o;
    const i = v(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  W._makeExperiment = d;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: h(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  W._makeLayer = S;
  function p(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: h(l.name, r, o) });
  }
  W._mergeOverride = p;
  function h(l, u, r) {
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
  return ((W._makeTypedGet = h), W);
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
  const e = (m, c, y, v, d, S) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: d,
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
function Qi() {
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
        const d = Qr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return d.EventLogger;
          },
        });
        const S = H();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const p = st(),
          h = ue();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return h.Storage;
          },
        }),
          c(ae(), e),
          c(lt(), e),
          c(di(), e),
          c(_i(), e),
          c(tn(), e),
          c(gi(), e),
          c(Zr(), e),
          c(fi(), e),
          c(vi(), e),
          c(Ke(), e),
          c(hi(), e),
          c(H(), e),
          c($r(), e),
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
          c(xr(), e),
          c(st(), e),
          c(ct(), e),
          c(Di(), e),
          c(ki(), e),
          c(Ii(), e),
          c(Xr(), e),
          c(ue(), e),
          c(Yr(), e),
          c(rn(), e),
          c(Hr(), e),
          c(sn(), e),
          c(on(), e),
          c(Oi(), e),
          c(ei(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: p.SDK_VERSION }));
      })(ge)),
    ge
  );
}
var De = {},
  At = {},
  jt = {},
  rr;
function Q() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function d(p) {
          return (p.unshift("[Statsig]"), p);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...h) {
            S.level >= e.LogLevel.Info && console.info(c, ...d(h));
          }
          static debug(...h) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...d(h));
          }
          static warn(...h) {
            S.level >= e.LogLevel.Warn && console.warn(y, ...d(h));
          }
          static error(...h) {
            S.level >= e.LogLevel.Error && console.error(v, ...d(h));
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
        const v = Q(),
          d = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = d;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const p = (i) => {
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
        e._getInstance = p;
        const h = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          u = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = l[h]) !== null && m !== void 0 ? m : u[h]) !== null && c !== void 0
                ? c
                : r[h]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((l[h] = o), (u[h] = o), (r[h] = o));
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
            p(l, d({}, c, "overall"));
          },
          _markInitOverallEnd: (l, u, r) => {
            p(
              l,
              d(
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
            p(l, d(u, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, u) => {
            p(l, d(u, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            p(l, d({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (l, u) => {
            p(l, d(u, y, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            m.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: h(l, "code"), name: h(l, "name"), message: h(l, "message") };
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
        function d(l, u, r, o) {
          return Object.assign({ key: r, action: u, step: o, timestamp: Date.now() }, l);
        }
        function S(l, u) {
          return { eventName: v, user: l, value: null, metadata: u, time: Date.now() };
        }
        function p(l, u) {
          var r;
          const o = (r = m.get(l)) !== null && r !== void 0 ? r : [];
          (o.push(u), m.set(l, o));
        }
        function h(l, u) {
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
    const v = (d) => (Array.isArray(d) ? "array" : d === null ? "null" : typeof d);
    return v(c) === v(y);
  }
  return ((Oe._isTypeMatch = m), Oe);
}
var ar;
function Be() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = un(),
          c = (d) => {
            let S = 0;
            for (let p = 0; p < d.length; p++) {
              const h = d.charCodeAt(p);
              ((S = (S << 5) - S + h), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const y = (d, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(d, S)));
        e._DJB2Object = y;
        const v = (d, S) => {
          if (d == null) return null;
          const p = Object.keys(d).sort(),
            h = {};
          return (
            p.forEach((l) => {
              const u = d[l];
              if (S === 0 || (0, m._typeOf)(u) !== "object") {
                h[l] = u;
                return;
              }
              h[l] = (0, e._getSortedObject)(u, S != null ? S - 1 : S);
            }),
            h
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
  const e = Be();
  function m(y, v, d) {
    var S;
    if (d) return d(y, v);
    const p = v && v.customIDs ? v.customIDs : {},
      h = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(p)
          .sort((l, u) => l.localeCompare(u))
          .map((l) => `${l}-${p[l]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(h.join("|"));
  }
  Ie._getUserStorageKey = m;
  function c(y, v, d) {
    return v ? m(y, v, d) : (0, e._DJB2)(`k:${y}`);
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
var Kt = {},
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
          var h;
          const l = (0, e._getWindowSafe)();
          return (h = l?.document) !== null && h !== void 0 ? h : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const h =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || h;
        };
        e._isServerEnv = y;
        const v = (h, l) => {
          const u = (0, e._getWindowSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(h, l);
        };
        e._addWindowEventListenerSafe = v;
        const d = (h, l) => {
          const u = (0, e._getDocumentSafe)();
          typeof u?.addEventListener == "function" && u.addEventListener(h, l);
        };
        e._addDocumentEventListenerSafe = d;
        const S = () => {
          var h;
          try {
            return (h = (0, e._getWindowSafe)()) === null || h === void 0
              ? void 0
              : h.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const p = () => {
          const h = (0, e._getWindowSafe)();
          return h && "onpagehide" in h ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = p;
      })(Kt)),
    Kt
  );
}
var Y = {},
  dr;
function ni() {
  if (dr) return Y;
  ((dr = 1),
    Object.defineProperty(Y, "__esModule", { value: !0 }),
    (Y._createLayerParameterExposure =
      Y._createConfigExposure =
      Y._mapExposures =
      Y._createGateExposure =
      Y._isExposureEvent =
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
  Y._isExposureEvent = v;
  const d = (u, r, o) => {
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
  Y._createGateExposure = d;
  function S(u, r) {
    return u.map((o) => (typeof o == "string" ? (r ?? {})[o] : o)).filter((o) => o != null);
  }
  Y._mapExposures = S;
  const p = (u, r, o) => {
    var i, n, t, a;
    const _ = { config: r.name, ruleID: r.ruleID };
    return (
      ((i = r.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (_.rulePassed = String(r.__evaluation.passed)),
      y(
        e,
        u,
        r.details,
        _,
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
  Y._createConfigExposure = p;
  const h = (u, r, o, i) => {
    var n, t, a, _, s, b, f;
    const g = r.__evaluation,
      E = ((n = g?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(o)) === !0;
    let D = "",
      I = (t = g?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    E &&
      ((D = (a = g.allocated_experiment_name) !== null && a !== void 0 ? a : ""),
      (I = (_ = g.secondary_exposures) !== null && _ !== void 0 ? _ : []));
    const R = (s = r.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      U = {
        config: r.name,
        parameterName: o,
        ruleID: (b = R?.[o]) !== null && b !== void 0 ? b : r.ruleID,
        allocatedExperiment: D,
        isExplicitParameter: String(E),
      };
    return (
      ((f = r.__evaluation) === null || f === void 0 ? void 0 : f.version) != null &&
        (U.configVersion = r.__evaluation.version),
      y(c, u, r.details, U, S(I, i))
    );
  };
  Y._createLayerParameterExposure = h;
  const l = (u, r) => (
    (r.reason = u.reason),
    u.lcut && (r.lcut = String(u.lcut)),
    u.receivedAt && (r.receivedAt = String(u.receivedAt)),
    r
  );
  return Y;
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
var Bt = {},
  gr;
function ce() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = Q(),
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
        let d = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (d = {
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
        let S = d ?? v,
          p = S;
        function h(r) {
          try {
            return r();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            throw o;
          }
        }
        e.Storage = {
          isReady: () => p.isReady(),
          isReadyResolver: () => p.isReadyResolver(),
          getProviderName: () => p.getProviderName(),
          getItem: (r) => h(() => p.getItem(r)),
          setItem: (r, o) => h(() => p.setItem(r, o)),
          removeItem: (r) => p.removeItem(r),
          getAllKeys: () => p.getAllKeys(),
          _setProvider: (r) => {
            ((S = r), (p = r));
          },
          _setDisabled: (r) => {
            r ? (p = v) : (p = S);
          },
        };
        function l(r) {
          const o = e.Storage.getItem(r);
          try {
            return JSON.parse(o ?? "null");
          } catch {
            return (m.Log.error(`Failed to parse value for key "${r}"`), null);
          }
        }
        e._getObjectFromStorage = l;
        function u(r, o) {
          e.Storage.setItem(r, JSON.stringify(o));
        }
        e._setObjectInStorage = u;
      })(Bt)),
    Bt
  );
}
var Ye = {},
  fr;
function ri() {
  if (fr) return Ye;
  ((fr = 1),
    Object.defineProperty(Ye, "__esModule", { value: !0 }),
    (Ye.UrlConfiguration = void 0));
  const e = Be(),
    m = gt(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(d, S, p, h) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = d),
        (this.endpointDnsKey = c[d]),
        S && (this.customUrl = S),
        !S && p && (this.customUrl = p.endsWith("/") ? `${p}${d}` : `${p}/${d}`),
        h && (this.fallbackUrls = h));
      const l = m.NetworkDefault[d];
      this.defaultUrl = `${l}/${d}`;
    }
    getUrl() {
      var d;
      return (d = this.customUrl) !== null && d !== void 0 ? d : this.defaultUrl;
    }
    getChecksum() {
      var d;
      const S = ((d = this.fallbackUrls) !== null && d !== void 0 ? d : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  };
  return ((Ye.UrlConfiguration = y), Ye);
}
var Gt = {},
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
        let d = c,
          S = !1;
        const p = () => d === c;
        e._isCurrentlyVisible = p;
        const h = () => S;
        e._isUnloading = h;
        const l = (r) => {
          v.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const u = (r) => {
          r !== d && ((d = r), v.forEach((o) => o(r)));
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
      })(Gt)),
    Gt
  );
}
var hr;
function ii() {
  if (hr) return ke;
  hr = 1;
  var e =
    (ke && ke.__awaiter) ||
    function (b, f, g, E) {
      function D(I) {
        return I instanceof g
          ? I
          : new g(function (R) {
              R(I);
            });
      }
      return new (g || (g = Promise))(function (I, R) {
        function U(N) {
          try {
            V(E.next(N));
          } catch (B) {
            R(B);
          }
        }
        function P(N) {
          try {
            V(E.throw(N));
          } catch (B) {
            R(B);
          }
        }
        function V(N) {
          N.done ? I(N.value) : D(N.value).then(U, P);
        }
        V((E = E.apply(b, f || [])).next());
      });
    };
  (Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.EventLogger = void 0));
  const m = _t(),
    c = Be(),
    y = Q(),
    v = gt(),
    d = Ne(),
    S = ni(),
    p = ft(),
    h = ce(),
    l = ri(),
    u = cn(),
    r = 100,
    o = 1e4,
    i = 1e3,
    n = 6e5,
    t = 500,
    a = 200,
    _ = {};
  let s = class qe {
    static _safeFlushAndForget(f) {
      var g;
      (g = _[f]) === null || g === void 0 || g.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(f) {
      var g;
      (g = _[f]) === null || g === void 0 || g._retryFailedLogs();
    }
    constructor(f, g, E, D) {
      var I, R;
      ((this._sdkKey = f),
        (this._emitter = g),
        (this._network = E),
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
              ? p.LoggingEnabledOption.disabled
              : p.LoggingEnabledOption.browserOnly),
        D?.loggingEnabled &&
          D.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (R = D?.loggingBufferMaxSize) !== null && R !== void 0 ? R : r));
      const U = D?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        v.Endpoint._rgstr,
        U?.logEventUrl,
        U?.api,
        U?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(f) {
      this._network.setLogEventCompressionMode(f);
    }
    setLoggingEnabled(f) {
      if (this._loggingEnabled === "disabled" && f !== "disabled") {
        const g = this._getStorageKey(),
          E = (0, h._getObjectFromStorage)(g);
        (E && this._queue.push(...E), h.Storage.removeItem(g));
      }
      this._loggingEnabled = f;
    }
    enqueue(f) {
      this._shouldLogEvent(f) &&
        (this._normalizeAndAppendEvent(f),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && qe._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(f) {
      var g;
      const E = (g = this._nonExposedChecks[f]) !== null && g !== void 0 ? g : 0;
      this._nonExposedChecks[f] = E + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var f;
      const g = (0, d._isServerEnv)();
      (g &&
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        g ||
          (0, u._subscribeToVisiblityChanged)((E) => {
            E === "background"
              ? qe._safeFlushAndForget(this._sdkKey)
              : E === "foreground" && qe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete _[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const f = this._queue;
        ((this._queue = []), yield this._sendEvents(f));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > a) &&
          setTimeout(() => qe._safeFlushAndForget(this._sdkKey), a));
    }
    _shouldLogEvent(f) {
      var g;
      if (
        ((g = this._options) === null || g === void 0 ? void 0 : g.loggingEnabled) !== "always" &&
        (0, d._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(f)) return !0;
      const E = f.user ? f.user : { statsigEnvironment: void 0 },
        D = (0, m._getUserStorageKey)(this._sdkKey, E),
        I = f.metadata ? f.metadata : {},
        R = [
          f.eventName,
          D,
          I.gate,
          I.config,
          I.ruleID,
          I.allocatedExperiment,
          I.parameterName,
          String(I.isExplicitParameter),
          I.reason,
        ].join("|"),
        U = this._lastExposureTimeMap[R],
        P = Date.now();
      return U && P - U < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[R] = P),
          !0);
    }
    _sendEvents(f) {
      return e(this, void 0, void 0, function* () {
        var g, E;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(f), !1);
        try {
          const I =
            (0, u._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((E = (g = this._options) === null || g === void 0 ? void 0 : g.networkConfig) ===
              null || E === void 0
              ? void 0
              : E.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: f }),
            (I ? this._sendEventsViaBeacon(f) : yield this._sendEventsViaPost(f)).success
              ? (this._emitter({ name: "logs_flushed", events: f }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(f), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(f) {
      return e(this, void 0, void 0, function* () {
        var g;
        const E = yield this._network.post(this._getRequestData(f)),
          D = (g = E?.code) !== null && g !== void 0 ? g : -1;
        return { success: D >= 200 && D < 300 };
      });
    }
    _sendEventsViaBeacon(f) {
      return { success: this._network.beacon(this._getRequestData(f)) };
    }
    _getRequestData(f) {
      return {
        sdkKey: this._sdkKey,
        data: { events: f },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(f.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(f) {
      for (; f.length > t; ) f.shift();
      const g = this._getStorageKey();
      try {
        const E = this._getFailedLogsFromStorage(g);
        (0, h._setObjectInStorage)(g, [...E, ...f]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(f) {
      let g = [];
      try {
        const E = (0, h._getObjectFromStorage)(f);
        return (Array.isArray(E) && (g = E), g);
      } catch {
        return [];
      }
    }
    _retryFailedLogs() {
      const f = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        h.Storage.isReady() || (yield h.Storage.isReadyResolver());
        const g = (0, h._getObjectFromStorage)(f);
        g && (h.Storage.removeItem(f), yield this._sendEvents(g));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(f) {
      f.user && ((f.user = Object.assign({}, f.user)), delete f.user.privateAttributes);
      const g = {},
        E = this._getCurrentPageUrl();
      E && (g.statsigMetadata = { currentPage: E });
      const D = Object.assign(Object.assign({}, f), g);
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
      var f;
      if (
        ((f = this._options) === null || f === void 0
          ? void 0
          : f.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, d._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var f, g;
      const E =
          (g = (f = this._options) === null || f === void 0 ? void 0 : f.loggingIntervalMs) !==
            null && g !== void 0
            ? g
            : o,
        D = setInterval(() => {
          const I = _[this._sdkKey];
          !I || I._flushIntervalId !== D ? clearInterval(D) : qe._safeFlushAndForget(this._sdkKey);
        }, E);
      this._flushIntervalId = D;
    }
  };
  return ((ke.EventLogger = s), ke);
}
var Vt = {},
  yr;
function at() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.30.2"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Vt)),
    Vt
  );
}
var zt = {},
  mr;
function Ci() {
  return (mr || ((mr = 1), Object.defineProperty(zt, "__esModule", { value: !0 })), zt);
}
var ie = {},
  Te = {},
  Ze = {},
  Sr;
function dn() {
  if (Sr) return Ze;
  ((Sr = 1), Object.defineProperty(Ze, "__esModule", { value: !0 }), (Ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let d = Math.random() * 16;
        return (
          m > 0
            ? ((d = ((m + d) % 16) | 0), (m = Math.floor(m / 16)))
            : ((d = ((c + d) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? d : (d & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ze.getUUID = e), Ze);
}
var br;
function vt() {
  if (br) return Te;
  ((br = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.getCookieName = Te.StableID = void 0));
  const e = _t(),
    m = Q(),
    c = Ne(),
    y = ce(),
    v = dn(),
    d = {},
    S = {},
    p = {};
  Te.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (p[n]) return null;
      if (d[n] != null) return d[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((d[n] = t), l(t, n), t)
          : ((t = u(n)), t == null && (t = (0, v.getUUID)()), l(t, n), o(t, n), (d[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((d[t] = n), l(n, t), o(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      S[n] = t;
    },
    _setDisabled: (n, t) => {
      p[n] = t;
    },
  };
  function h(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const a = h(t);
    try {
      (0, y._setObjectInStorage)(a, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function u(n) {
    const t = h(n);
    return (0, y._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!S[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const a of t) {
      const [_, s] = a.trim().split("=");
      if (_ === i(n)) return decodeURIComponent(s);
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
  const e = Be(),
    m = Q();
  function c(v, d, S) {
    try {
      const p = JSON.parse(JSON.stringify(v));
      return (
        d != null && d.environment != null
          ? (p.statsigEnvironment = d.environment)
          : S != null && (p.statsigEnvironment = { tier: S }),
        p
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
var $e = {},
  pr;
function si() {
  if (pr) return $e;
  ((pr = 1), Object.defineProperty($e, "__esModule", { value: !0 }), ($e._typedJsonParse = void 0));
  const e = Q();
  function m(c, y, v) {
    try {
      const d = JSON.parse(c);
      if (d && typeof d == "object" && y in d) return d;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return (($e._typedJsonParse = m), $e);
}
var wr;
function Ti() {
  if (wr) return ie;
  wr = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, i, n, t) {
      function a(_) {
        return _ instanceof n
          ? _
          : new n(function (s) {
              s(_);
            });
      }
      return new (n || (n = Promise))(function (_, s) {
        function b(E) {
          try {
            g(t.next(E));
          } catch (D) {
            s(D);
          }
        }
        function f(E) {
          try {
            g(t.throw(E));
          } catch (D) {
            s(D);
          }
        }
        function g(E) {
          E.done ? _(E.value) : a(E.value).then(b, f);
        }
        g((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._makeDataAdapterResult = ie.DataAdapterCore = void 0));
  const m = Q(),
    c = vt(),
    y = oi(),
    v = ce(),
    d = si(),
    S = 10,
    p = 8;
  let h = class {
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
      const _ = this._loadFromCache(t);
      return _ && this._getIsCacheValueValid(_)
        ? (this._inMemoryCache.add(t, _, this._cacheLimit), this._inMemoryCache.get(t, n))
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
          _ = [this._fetchAndPrepFromNetwork(a, n, t)];
        return (
          t?.timeoutMs &&
            _.push(
              new Promise((s) => setTimeout(s, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(_)
        );
      });
    }
    _prefetchDataImpl(i, n) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, y._normalizeUser)(i, this._options),
          a = this._getCacheKey(t),
          _ = yield this._getDataAsyncImpl(null, t, n);
        _ &&
          this._inMemoryCache.add(
            a,
            Object.assign(Object.assign({}, _), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, n, t) {
      return e(this, void 0, void 0, function* () {
        var a;
        const _ = (a = i?.data) !== null && a !== void 0 ? a : null,
          s = i != null && this._isCachedResultValidFor204(i, n),
          b = yield this._fetchFromNetwork(_, n, t, s);
        if (!b) return (m.Log.debug("No response returned for latest value"), null);
        const f = (0, d._typedJsonParse)(b, "has_updates", "Response"),
          g = this._getSdkKey(),
          E = c.StableID.get(g);
        let D = null;
        if (f?.has_updates === !0) D = l("Network", b, E, n);
        else if (_ && f?.has_updates === !1) D = l("NetworkNotModified", _, E, n);
        else return null;
        const I = this._getCacheKey(n);
        return (this._inMemoryCache.add(I, D, this._cacheLimit), this._writeToCache(I, D), D);
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
      const a = (0, d._typedJsonParse)(t, "source", "Cached Result");
      return a ? Object.assign(Object.assign({}, a), { source: "Cache" }) : null;
    }
    _writeToCache(i, n) {
      const t = JSON.stringify(n);
      for (let a = 0; a < p; a++)
        try {
          v.Storage.setItem(i, t);
          break;
        } catch (_) {
          if (
            !(_ instanceof Error) ||
            !(
              _.toString().includes("QuotaExceededError") ||
              _.toString().includes("QUOTA_EXCEEDED_ERR")
            ) ||
            this._cacheLimit <= 1
          )
            throw _;
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
      const _ = r(a, n);
      for (const s of _) (delete a[s], v.Storage.removeItem(s));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, a);
    }
  };
  ie.DataAdapterCore = h;
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
        _ = a?.stableID,
        s = (t = n?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return s && _ && s !== _
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : a;
    }
    add(i, n, t) {
      const a = r(this._data, t - 1);
      for (const _ of a) delete this._data[_];
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
              const _ = o[t],
                s = o[a];
              return typeof _ == "object" && typeof s == "object"
                ? _.receivedAt - s.receivedAt
                : _ - s;
            })
            .slice(0, n.length - i);
  }
  return ie;
}
var Jt = {},
  Dr;
function Ri() {
  return (Dr || ((Dr = 1), Object.defineProperty(Jt, "__esModule", { value: !0 })), Jt);
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
                : new i(function (_) {
                    _(a);
                  });
            }
            return new (i || (i = Promise))(function (a, _) {
              function s(g) {
                try {
                  f(n.next(g));
                } catch (E) {
                  _(E);
                }
              }
              function b(g) {
                try {
                  f(n.throw(g));
                } catch (E) {
                  _(E);
                }
              }
              function f(g) {
                g.done ? a(g.value) : t(g.value).then(s, b);
              }
              f((n = n.apply(r, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = Q(),
          y = _n(),
          v = at();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const d = "[Statsig] UnknownError";
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
                  ((n[t] = (..._) => this._capture(i ? `${i}:${t}` : t, () => a.apply(o, _))),
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
            this._lastSeenError || (this._lastSeenError = p(o));
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
                  var t, a, _, s, b, f, g;
                  const E = i || Error(d),
                    D = E instanceof Error,
                    I = D ? E.name : "No Name",
                    R = p(E);
                  if (((this._lastSeenError = R), this._seen.has(I))) return;
                  if (
                    (this._seen.add(I),
                    !(
                      (a =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || a === void 0
                    ) && a.preventAllNetworkTraffic)
                  ) {
                    (_ = this._emitter) === null ||
                      _ === void 0 ||
                      _.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const U = y.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    V = D ? E.stack : h(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: V, statsigOptions: u(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: U }),
                    );
                  (yield (
                    (f =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(U),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = S;
        function p(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function h(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return d;
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
var Wt = {},
  Or;
function Mi() {
  return (Or || ((Or = 1), Object.defineProperty(Wt, "__esModule", { value: !0 })), Wt);
}
var xt = {},
  Cr;
function Ui() {
  return (Cr || ((Cr = 1), Object.defineProperty(xt, "__esModule", { value: !0 })), xt);
}
var Ht = {},
  Tr;
function Li() {
  return (Tr || ((Tr = 1), Object.defineProperty(Ht, "__esModule", { value: !0 })), Ht);
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
  function c(y, v, d) {
    let S = `${y}|${v}`;
    if (!d) return S;
    for (const p of Object.keys(d)) {
      if (m.has(p)) return;
      e.has(p) ? (S += `|${p}=true`) : (S += `|${p}=${d[p]}`);
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
    function (p, h, l, u) {
      function r(o) {
        return o instanceof l
          ? o
          : new l(function (i) {
              i(o);
            });
      }
      return new (l || (l = Promise))(function (o, i) {
        function n(_) {
          try {
            a(u.next(_));
          } catch (s) {
            i(s);
          }
        }
        function t(_) {
          try {
            a(u.throw(_));
          } catch (s) {
            i(s);
          }
        }
        function a(_) {
          _.done ? o(_.value) : r(_.value).then(n, t);
        }
        a((u = u.apply(p, h || [])).next());
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
  function d(p) {
    return e(this, void 0, void 0, function* () {
      const h = yield p(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!h.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield h.arrayBuffer(),
        u = new Uint8Array(l);
      return S(u);
    });
  }
  Le._fetchTxtRecords = d;
  function S(p) {
    const h = p.findIndex(
      (u, r) =>
        r < v && String.fromCharCode(u) === "=" && y.includes(String.fromCharCode(p[r - 1])),
    );
    if (h === -1) {
      const u = new Error("Failed to parse TXT records from DNS");
      throw ((u.name = "DnsTxtParseError"), u);
    }
    let l = "";
    for (let u = h - 1; u < p.length; u++) l += String.fromCharCode(p[u]);
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
      function _(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function f(D) {
          try {
            E(a.next(D));
          } catch (I) {
            b(I);
          }
        }
        function g(D) {
          try {
            E(a.throw(D));
          } catch (I) {
            b(I);
          }
        }
        function E(D) {
          D.done ? s(D.value) : _(D.value).then(f, g);
        }
        E((a = a.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe._isDomainFailure = oe.NetworkFallbackResolver = void 0));
  const m = Pi(),
    c = Be(),
    y = Q(),
    v = ce(),
    d = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  let p = class {
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
      const _ = (a = this._fallbackInfo) === null || a === void 0 ? void 0 : a[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + d),
        u(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(n, t) {
      var a, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (a = r(n)) !== null && a !== void 0 ? a : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((_ = b.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), u(n, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, a, _) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!h(a, _)) return !1;
          const g =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              g,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(n, t, E), !0) : !1;
        } catch (f) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, a) {
      var _, s, b;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: a,
          expiryTime: Date.now() + d,
          previous: [],
        },
        g = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[g];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[g]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && f.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [g]: f })),
        u(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const a = this._dnsQueryCooldowns[n.endpoint];
        if (a && Date.now() < a) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + S;
        const _ = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(n.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(n.endpointDnsKey + "=")) continue;
          const g = f.split("=");
          if (g.length > 1) {
            let E = g[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${b}`));
          }
        }
        return _;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var a;
      if (t == null) return null;
      const _ = new Set((a = n?.previous) !== null && a !== void 0 ? a : []),
        s = n?.url;
      let b = null;
      for (const f of t) {
        const g = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && g !== s) {
          b = g;
          break;
        }
      }
      return b;
    }
  };
  oe.NetworkFallbackResolver = p;
  function h(i, n) {
    var t;
    const a = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      a.includes("uncaught exception") ||
      a.includes("failed to fetch") ||
      a.includes("networkerror when attempting to fetch resource")
    );
  }
  oe._isDomainFailure = h;
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
var Qt = {},
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
          y = Q(),
          v = ce(),
          d = dn(),
          S = 1800 * 1e3,
          p = 14400 * 1e3,
          h = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              h[s] == null && (h[s] = l(s));
              const b = h[s];
              return r(b);
            },
            overrideInitialSessionID: (s, b) => {
              h[b] = u(s, b);
            },
          }));
        function l(s) {
          let b = _(s);
          const f = Date.now();
          return (
            b || (b = { sessionID: (0, d.getUUID)(), startTime: f, lastUpdate: f }),
            { data: b, sdkKey: s }
          );
        }
        function u(s, b) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: b };
        }
        function r(s) {
          const b = Date.now(),
            f = s.data,
            g = s.sdkKey;
          if (i(f) || n(f)) {
            ((f.sessionID = (0, d.getUUID)()), (f.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(g);
            D && D.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = b),
            a(f, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const E = b - f.startTime;
          return ((s.idleTimeoutID = o(g, S)), (s.ageTimeoutID = o(g, p - E)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var f;
            const g =
              (f = (0, m._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            g && g.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function n({ startTime: s }) {
          return Date.now() - s > p;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function a(s, b) {
          const f = t(b);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Qt)),
    Qt
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
    function (O, w, k, C) {
      function T(M) {
        return M instanceof k
          ? M
          : new k(function (L) {
              L(M);
            });
      }
      return new (k || (k = Promise))(function (M, L) {
        function $(A) {
          try {
            F(C.next(A));
          } catch (j) {
            L(j);
          }
        }
        function q(A) {
          try {
            F(C.throw(A));
          } catch (j) {
            L(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : T(A.value).then($, q);
        }
        F((C = C.apply(O, w || [])).next());
      });
    };
  (Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.NetworkCore = void 0), le());
  const m = le(),
    c = nn(),
    y = Q(),
    v = gt(),
    d = Ai(),
    S = ui(),
    p = _n(),
    h = Ne(),
    l = gn(),
    u = vt(),
    r = ci(),
    o = at(),
    i = ft(),
    n = cn(),
    t = 1e4,
    a = 500,
    _ = 3e4,
    s = 1e3,
    b = 50,
    f = b / s,
    g = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let E = class {
    constructor(w, k) {
      ((this._emitter = k),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        w && (this._options = w),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new d.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(w)));
    }
    setLogEventCompressionMode(w) {
      this._options.logEventCompressionMode = w;
    }
    setErrorBoundary(w) {
      ((this._errorBoundary = w),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(w));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const w = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), w);
    }
    beacon(w) {
      if (!D(w)) return !1;
      const k = this._getInternalRequestArgs("POST", w),
        C = this._getPopulatedURL(k),
        T = navigator;
      return T.sendBeacon.bind(T)(C, k.body);
    }
    post(w) {
      return e(this, void 0, void 0, function* () {
        const k = this._getInternalRequestArgs("POST", w);
        return (this._tryEncodeBody(k), yield this._tryToCompressBody(k), this._sendRequest(k));
      });
    }
    get(w) {
      const k = this._getInternalRequestArgs("GET", w);
      return this._sendRequest(k);
    }
    _sendRequest(w) {
      return e(this, void 0, void 0, function* () {
        var k, C, T, M;
        if (!D(w) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = w,
          A = w.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1;
        let G = !1;
        const J = this._getPopulatedURL(w);
        let K = null;
        const Z = (0, n._isUnloading)();
        try {
          const se = {
            method: L,
            body: $,
            headers: Object.assign({}, w.headers),
            priority: w.priority,
            keepalive: Z,
          };
          V(w, j);
          const z = this._leakyBucket[A];
          z && ((z.lastRequestTime = Date.now()), (this._leakyBucket[A] = z));
          const ee = (k = this._netConfig.networkOverrideFunc) !== null && k !== void 0 ? k : fetch;
          let Fe;
          if (
            ((K = yield Promise.race([
              ee(J, se).finally(() => clearTimeout(Fe)),
              new Promise((de, _e) => {
                Fe = setTimeout(() => {
                  ((G = !0), _e(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !K.ok)
          ) {
            const de = yield K.text().catch(() => "No Text"),
              _e = new Error(`NetworkError: ${J} ${de}`);
            throw ((_e.name = "NetworkError"), _e);
          }
          const te = yield K.text();
          return (
            N(w, K, j, te),
            this._fallbackResolver.tryBumpExpiryTime(w.sdkKey, w.urlConfig),
            { body: te, code: K.status }
          );
        } catch (se) {
          const z = U(se),
            ee = P(z ?? "", G);
          if (
            (N(w, K, j, "", se),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              w.sdkKey,
              w.urlConfig,
              z,
              ee,
            )) &&
              (w.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig)),
            !q || j > q || !g.has((C = K?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: se,
                tag: r.ErrorTag.NetworkError,
                requestArgs: w,
              });
            const te = `A networking error occurred during ${L} request to ${J}.`;
            return (
              y.Log.error(te, z, se),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(te),
              null
            );
          }
          return (
            yield B(j),
            this._sendRequest(Object.assign(Object.assign({}, w), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(w) {
      let k = w?.logEventCompressionMode;
      return (
        !k && w?.disableCompression === !0 && (k = i.LogEventCompressionMode.Disabled),
        k || (k = i.LogEventCompressionMode.Enabled),
        k
      );
    }
    _isRateLimited(w) {
      var k;
      const C = Date.now(),
        T =
          (k = this._leakyBucket[w]) !== null && k !== void 0
            ? k
            : { count: 0, lastRequestTime: C },
        M = C - T.lastRequestTime,
        L = Math.floor(M * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= b
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[w] = T), !1)
      );
    }
    _getPopulatedURL(w) {
      var k;
      const C = (k = w.fallbackUrl) !== null && k !== void 0 ? k : w.urlConfig.getUrl();
      (w.urlConfig.endpoint === v.Endpoint._initialize ||
        w.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: w.sdkKey,
            [v.NetworkParam.SdkType]: p.SDKType._get(w.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: l.SessionID.get(w.sdkKey),
          },
          w.params,
        ),
        M = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(w) {
      var k;
      const C = (0, h._getWindowSafe)(),
        T = w.body;
      if (
        !(
          !w.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((w.body = C.btoa(T).split("").reverse().join("")),
            (w.params = Object.assign(
              Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          y.Log.warn(`Request encoding failed for ${w.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(w) {
      return e(this, void 0, void 0, function* () {
        var k;
        const C = w.body;
        if (!(typeof C != "string" || !R(w, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              M = new CompressionStream("gzip"),
              L = M.writable.getWriter();
            (L.write(T).catch(y.Log.error), L.close().catch(y.Log.error));
            const $ = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((J, K) => J + K.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const J of q) (j.set(J, G), (G += J.length));
            ((w.body = j),
              (w.params = Object.assign(
                Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            y.Log.warn(`Request compression failed for ${w.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(w, k) {
      const C = this._fallbackResolver.getActiveFallbackUrl(k.sdkKey, k.urlConfig),
        T = Object.assign(Object.assign({}, k), { method: w, fallbackUrl: C });
      return ("data" in k && I(T, k.data), T);
    }
  };
  Ue.NetworkCore = E;
  const D = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, w) => {
      const { sdkKey: k, fallbackUrl: C } = O,
        T = u.StableID.get(k),
        M = l.SessionID.get(k),
        L = p.SDKType._get(k);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, w), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: M,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function R(O, w) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const k = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (w.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(k && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function U(O) {
    return typeof O == "string"
      ? O
      : O instanceof Error
        ? `${O.name}: ${O.message}`
        : "Unknown Error";
  }
  function P(O, w) {
    return O.includes("Timeout") || w;
  }
  function V(O, w) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: w });
  }
  function N(O, w, k, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(w, k, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((w) => setTimeout(w, Math.min(a * (O * O), _)));
    });
  }
  return Ue;
}
var Xt = {},
  Nr;
function Ni() {
  return (Nr || ((Nr = 1), Object.defineProperty(Xt, "__esModule", { value: !0 })), Xt);
}
var Yt = {},
  Fr;
function Fi() {
  return (Fr || ((Fr = 1), Object.defineProperty(Yt, "__esModule", { value: !0 })), Yt);
}
var Zt = {},
  qr;
function qi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const m = 2,
          c = 1,
          y = (v, d) => {
            let S = 0;
            const p = Object.keys(v);
            for (let h = 0; h < p.length; h++) {
              const l = p[h],
                u = v[l];
              if (
                ((S += l.length),
                typeof u == "object" && u !== null
                  ? (S += (0, e._fastApproxSizeOf)(u, d) + m)
                  : (S += String(u).length + c),
                S >= d)
              )
                return S;
            }
            return S;
          };
        e._fastApproxSizeOf = y;
      })(Zt)),
    Zt
  );
}
var Pe = {},
  Kr;
function Ki() {
  if (Kr) return Pe;
  Kr = 1;
  var e =
    (Pe && Pe.__awaiter) ||
    function (n, t, a, _) {
      function s(b) {
        return b instanceof a
          ? b
          : new a(function (f) {
              f(b);
            });
      }
      return new (a || (a = Promise))(function (b, f) {
        function g(I) {
          try {
            D(_.next(I));
          } catch (R) {
            f(R);
          }
        }
        function E(I) {
          try {
            D(_.throw(I));
          } catch (R) {
            f(R);
          }
        }
        function D(I) {
          I.done ? b(I.value) : s(I.value).then(g, E);
        }
        D((_ = _.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.StatsigClientBase = void 0), le());
  const m = le(),
    c = ai(),
    y = ii(),
    v = Q(),
    d = li(),
    S = Ne(),
    p = gn(),
    h = vt(),
    l = ft(),
    u = ce(),
    r = 3e3;
  let o = class {
    constructor(t, a, _, s) {
      var b, f, g, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && u.Storage._setDisabled(!0),
        s?.initialSessionID && p.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && u.Storage._setProvider(s.storageProvider),
        s?.enableCookies && h.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && h.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new y.EventLogger(t, D, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(a),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = a),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = u.Storage),
        (E =
          (g = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || g === void 0
            ? void 0
            : g.call(f)) === null ||
          E === void 0 ||
          E.catch((I) => this._errorBoundary.logError("OA::loadFromStorage", I)),
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
          h.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const _ = this._listeners[t].indexOf(a);
        _ !== -1 && this._listeners[t].splice(_, 1);
      }
    }
    $on(t, a) {
      ((a.__isInternal = !0), this.on(t, a));
    }
    $emt(t) {
      var a;
      const _ = (s) => {
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
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => _(s)),
        (a = this._listeners["*"]) === null || a === void 0 || a.forEach(_));
    }
    _setStatus(t, a) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: a }));
    }
    _enqueueExposure(t, a, _) {
      if (_?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(a);
    }
    _memoize(t, a) {
      return (_, s) => {
        if (this._options.disableEvaluationMemoization) return a(_, s);
        const b = (0, d.createMemoKey)(t, _, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[b] = a(_, s))),
            this._memoCache[b])
          : a(_, s);
      };
    }
  };
  Pe.StatsigClientBase = o;
  function i(n, t) {
    var a;
    if ((0, S._isServerEnv)()) return;
    const _ = (0, m._getStatsigGlobal)(),
      s = (a = _.instances) !== null && a !== void 0 ? a : {},
      b = t;
    (s[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = b),
      _.firstInstance || (_.firstInstance = b),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return Pe;
}
var it = {},
  Br;
function Bi() {
  return (
    Br ||
      ((Br = 1),
      Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.DataAdapterCachePrefix = void 0),
      (it.DataAdapterCachePrefix = "statsig.cached")),
    it
  );
}
var $t = {},
  Gr;
function Gi() {
  return (Gr || ((Gr = 1), Object.defineProperty($t, "__esModule", { value: !0 })), $t);
}
var x = {},
  Vr;
function Vi() {
  if (Vr) return x;
  ((Vr = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x._makeTypedGet =
      x._mergeOverride =
      x._makeLayer =
      x._makeExperiment =
      x._makeDynamicConfig =
      x._makeFeatureGate =
        void 0));
  const e = Q(),
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
  x._makeFeatureGate = y;
  function v(l, u, r) {
    var o, i;
    const n = (o = r?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(l, u, r, n)), {
      idType: (i = r?.id_type) !== null && i !== void 0 ? i : null,
      get: h(l, r?.value),
    });
  }
  x._makeDynamicConfig = v;
  function d(l, u, r) {
    var o;
    const i = v(l, u, r);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeExperiment = d;
  function S(l, u, r, o) {
    var i, n;
    return Object.assign(Object.assign({}, c(l, u, r, void 0)), {
      get: h(l, r?.value, o),
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  x._makeLayer = S;
  function p(l, u, r, o) {
    return Object.assign(Object.assign(Object.assign({}, l), u), { get: h(l.name, r, o) });
  }
  x._mergeOverride = p;
  function h(l, u, r) {
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
  return ((x._makeTypedGet = h), x);
}
var en = {},
  zr;
function zi() {
  return (zr || ((zr = 1), Object.defineProperty(en, "__esModule", { value: !0 })), en);
}
var Ae = {},
  Jr;
function Ji() {
  if (Jr) return Ae;
  ((Jr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = Ae.createUpdateDetails = void 0));
  const e = (m, c, y, v, d, S) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: d,
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
var Wr;
function Wi() {
  return (
    Wr ||
      ((Wr = 1),
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
        const d = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return d.EventLogger;
          },
        });
        const S = Q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const p = at(),
          h = ce();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return h.Storage;
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
          c(Be(), e),
          c(Li(), e),
          c(Q(), e),
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
          c(Ki(), e),
          c(ci(), e),
          c(Bi(), e),
          c(ni(), e),
          c(at(), e),
          c(ft(), e),
          c(Gi(), e),
          c(Vi(), e),
          c(zi(), e),
          c(oi(), e),
          c(ce(), e),
          c(si(), e),
          c(un(), e),
          c(ri(), e),
          c(dn(), e),
          c(cn(), e),
          c(Ji(), e),
          c(ui(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: p.SDK_VERSION }));
      })(De)),
    De
  );
}
var no = Wi();
export { Hi as a, Wi as b, ot as c, xi as g, Qi as r, no as s };
