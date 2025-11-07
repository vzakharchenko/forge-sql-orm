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
function wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var y = e.default;
  if (typeof y == "function") {
    var c = function v() {
      var f = !1;
      try {
        f = this instanceof v;
      } catch {}
      return f ? Reflect.construct(y, arguments, this.constructor) : y.apply(this, arguments);
    };
    c.prototype = y.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (v) {
      var f = Object.getOwnPropertyDescriptor(e, v);
      Object.defineProperty(
        c,
        v,
        f.get
          ? f
          : {
              enumerable: !0,
              get: function () {
                return e[v];
              },
            },
      );
    }),
    c
  );
}
var Y = {},
  Ue = {},
  Le = {},
  st;
function N() {
  return (
    st ||
      ((st = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const y = " DEBUG ",
          c = "  INFO ",
          v = "  WARN ",
          f = " ERROR ";
        function _(E) {
          return (E.unshift("[Statsig]"), E);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class b {
          static info(...h) {
            b.level >= e.LogLevel.Info && console.info(c, ..._(h));
          }
          static debug(...h) {
            b.level >= e.LogLevel.Debug && console.debug(y, ..._(h));
          }
          static warn(...h) {
            b.level >= e.LogLevel.Warn && console.warn(v, ..._(h));
          }
          static error(...h) {
            b.level >= e.LogLevel.Error && console.error(f, ..._(h));
          }
        }
        ((e.Log = b), (b.level = e.LogLevel.Warn));
      })(Le)),
    Le
  );
}
var at;
function Q() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        var y, c, v;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const f = N(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : i;
            } catch {
              return i;
            }
          };
        e._getStatsigGlobal = _;
        const b = (o) => (0, e._getStatsigGlobal)()[o];
        e._getStatsigGlobalFlag = b;
        const E = (o) => {
          const n = (0, e._getStatsigGlobal)();
          return o
            ? n.instances && n.instances[o]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                f.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = E;
        const h = "__STATSIG__",
          a = typeof window < "u" ? window : {},
          l = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          i =
            (v =
              (c = (y = a[h]) !== null && y !== void 0 ? y : l[h]) !== null && c !== void 0
                ? c
                : r[h]) !== null && v !== void 0
              ? v
              : { instance: e._getInstance };
        ((a[h] = i), (l[h] = i), (r[h] = i));
      })(Ue)),
    Ue
  );
}
var Pe = {},
  lt;
function Ye() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const y = new Map(),
          c = "start",
          v = "end",
          f = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (a) => y.get(a),
          _markInitOverallStart: (a) => {
            E(a, _({}, c, "overall"));
          },
          _markInitOverallEnd: (a, l, r) => {
            E(
              a,
              _(
                {
                  success: l,
                  error: l ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: r,
                },
                v,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (a, l) => {
            E(a, _(l, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (a, l) => {
            E(a, _(l, v, "initialize", "network_request"));
          },
          _markInitProcessStart: (a) => {
            E(a, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (a, l) => {
            E(a, _(l, v, "initialize", "process"));
          },
          _clearMarkers: (a) => {
            y.delete(a);
          },
          _formatError(a) {
            if (a && typeof a == "object")
              return { code: h(a, "code"), name: h(a, "name"), message: h(a, "message") };
          },
          _getDiagnosticsData(a, l, r, i) {
            var o;
            return {
              success: a?.ok === !0,
              statusCode: a?.status,
              sdkRegion:
                (o = a?.headers) === null || o === void 0 ? void 0 : o.get("x-statsig-region"),
              isDelta: r.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: l,
              error: e.Diagnostics._formatError(i),
            };
          },
          _enqueueDiagnosticsEvent(a, l, r, i) {
            const o = e.Diagnostics._getMarkers(r);
            if (o == null || o.length <= 0) return -1;
            const n = o[o.length - 1].timestamp - o[0].timestamp;
            e.Diagnostics._clearMarkers(r);
            const t = b(a, { context: "initialize", markers: o.slice(), statsigOptions: i });
            return (l.enqueue(t), n);
          },
        };
        function _(a, l, r, i) {
          return Object.assign({ key: r, action: l, step: i, timestamp: Date.now() }, a);
        }
        function b(a, l) {
          return { eventName: f, user: a, value: null, metadata: l, time: Date.now() };
        }
        function E(a, l) {
          var r;
          const i = (r = y.get(a)) !== null && r !== void 0 ? r : [];
          (i.push(l), y.set(a, i));
        }
        function h(a, l) {
          if (l in a) return a[l];
        }
      })(Pe)),
    Pe
  );
}
var Z = {},
  $ = {},
  je = {},
  ee = {},
  ut;
function Ze() {
  if (ut) return ee;
  ((ut = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee._isTypeMatch = ee._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  ee._typeOf = e;
  function y(c, v) {
    const f = (_) => (Array.isArray(_) ? "array" : typeof _);
    return f(c) === f(v);
  }
  return ((ee._isTypeMatch = y), ee);
}
var ct;
function ge() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const y = Ze(),
          c = (_) => {
            let b = 0;
            for (let E = 0; E < _.length; E++) {
              const h = _.charCodeAt(E);
              ((b = (b << 5) - b + h), (b = b & b));
            }
            return String(b >>> 0);
          };
        e._DJB2 = c;
        const v = (_, b) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, b)));
        e._DJB2Object = v;
        const f = (_, b) => {
          if (_ == null) return null;
          const E = Object.keys(_).sort(),
            h = {};
          return (
            E.forEach((a) => {
              const l = _[a];
              if (b === 0 || (0, y._typeOf)(l) !== "object") {
                h[a] = l;
                return;
              }
              h[a] = (0, e._getSortedObject)(l, b != null ? b - 1 : b);
            }),
            h
          );
        };
        e._getSortedObject = f;
      })(je)),
    je
  );
}
var dt;
function Oe() {
  if (dt) return $;
  ((dt = 1),
    Object.defineProperty($, "__esModule", { value: !0 }),
    ($._getStorageKey = $._getUserStorageKey = void 0));
  const e = ge();
  function y(v, f, _) {
    var b;
    if (_) return _(v, f);
    const E = f && f.customIDs ? f.customIDs : {},
      h = [
        `uid:${(b = f?.userID) !== null && b !== void 0 ? b : ""}`,
        `cids:${Object.keys(E)
          .sort((a, l) => a.localeCompare(l))
          .map((a) => `${a}-${E[a]}`)
          .join(",")}`,
        `k:${v}`,
      ];
    return (0, e._DJB2)(h.join("|"));
  }
  $._getUserStorageKey = y;
  function c(v, f, _) {
    return f ? y(v, f, _) : (0, e._DJB2)(`k:${v}`);
  }
  return (($._getStorageKey = c), $);
}
var Ne = {},
  _t;
function Ce() {
  return (
    _t ||
      ((_t = 1),
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
var Ae = {},
  gt;
function le() {
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
        const y = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = y;
        const c = () => {
          var h;
          const a = (0, e._getWindowSafe)();
          return (h = a?.document) !== null && h !== void 0 ? h : null;
        };
        e._getDocumentSafe = c;
        const v = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const h =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || h;
        };
        e._isServerEnv = v;
        const f = (h, a) => {
          const l = (0, e._getWindowSafe)();
          typeof l?.addEventListener == "function" && l.addEventListener(h, a);
        };
        e._addWindowEventListenerSafe = f;
        const _ = (h, a) => {
          const l = (0, e._getDocumentSafe)();
          typeof l?.addEventListener == "function" && l.addEventListener(h, a);
        };
        e._addDocumentEventListenerSafe = _;
        const b = () => {
          var h;
          try {
            return (h = (0, e._getWindowSafe)()) === null || h === void 0
              ? void 0
              : h.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = b;
        const E = () => {
          const h = (0, e._getWindowSafe)();
          return h && "onpagehide" in h ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = E;
      })(Ae)),
    Ae
  );
}
var q = {},
  ft;
function Qt() {
  if (ft) return q;
  ((ft = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q._createLayerParameterExposure =
      q._createConfigExposure =
      q._mapExposures =
      q._createGateExposure =
      q._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    y = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
    v = (l, r, i, o, n) => (
      i.bootstrapMetadata && (o.bootstrapMetadata = i.bootstrapMetadata),
      {
        eventName: l,
        user: r,
        value: null,
        metadata: a(i, o),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    f = ({ eventName: l }) => l === y || l === e || l === c;
  q._isExposureEvent = f;
  const _ = (l, r, i) => {
    var o, n, t;
    const u = { gate: r.name, gateValue: String(r.value), ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (u.configVersion = r.__evaluation.version),
      v(
        y,
        l,
        r.details,
        u,
        b(
          (t = (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          i,
        ),
      )
    );
  };
  q._createGateExposure = _;
  function b(l, r) {
    return l.map((i) => (typeof i == "string" ? (r ?? {})[i] : i)).filter((i) => i != null);
  }
  q._mapExposures = b;
  const E = (l, r, i) => {
    var o, n, t, u;
    const g = { config: r.name, ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (g.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (g.rulePassed = String(r.__evaluation.passed)),
      v(
        e,
        l,
        r.details,
        g,
        b(
          (u = (t = r.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && u !== void 0
            ? u
            : [],
          i,
        ),
      )
    );
  };
  q._createConfigExposure = E;
  const h = (l, r, i, o) => {
    var n, t, u, g, s, p;
    const w = r.__evaluation,
      d = ((n = w?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(i)) === !0;
    let m = "",
      D = (t = w?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    d &&
      ((m = (u = w.allocated_experiment_name) !== null && u !== void 0 ? u : ""),
      (D = w.secondary_exposures));
    const k = (g = r.__evaluation) === null || g === void 0 ? void 0 : g.parameter_rule_ids,
      C = {
        config: r.name,
        parameterName: i,
        ruleID: (s = k?.[i]) !== null && s !== void 0 ? s : r.ruleID,
        allocatedExperiment: m,
        isExplicitParameter: String(d),
      };
    return (
      ((p = r.__evaluation) === null || p === void 0 ? void 0 : p.version) != null &&
        (C.configVersion = r.__evaluation.version),
      v(c, l, r.details, C, b(D, o))
    );
  };
  q._createLayerParameterExposure = h;
  const a = (l, r) => (
    (r.reason = l.reason),
    l.lcut && (r.lcut = String(l.lcut)),
    l.receivedAt && (r.receivedAt = String(l.receivedAt)),
    r
  );
  return q;
}
var te = {},
  vt;
function Te() {
  return (
    vt ||
      ((vt = 1),
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
  ht;
function X() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const y = N(),
          c = le(),
          v = {},
          f = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (r) => (v[r] ? v[r] : null),
            setItem: (r, i) => {
              v[r] = i;
            },
            removeItem: (r) => {
              delete v[r];
            },
            getAllKeys: () => Object.keys(v),
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
              getItem: (i) => r.localStorage.getItem(i),
              setItem: (i, o) => r.localStorage.setItem(i, o),
              removeItem: (i) => r.localStorage.removeItem(i),
              getAllKeys: () => Object.keys(r.localStorage),
            });
        } catch {
          y.Log.warn("Failed to setup localStorageProvider.");
        }
        let b = _ ?? f,
          E = b;
        function h(r) {
          try {
            return r();
          } catch (i) {
            if (i instanceof Error && i.name === "SecurityError")
              return (e.Storage._setProvider(f), null);
            if (i instanceof Error && i.name === "QuotaExceededError") {
              const n = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              i.message = `${i.message}. Statsig Keys: ${n.length}`;
            }
            throw i;
          }
        }
        e.Storage = {
          isReady: () => E.isReady(),
          isReadyResolver: () => E.isReadyResolver(),
          getProviderName: () => E.getProviderName(),
          getItem: (r) => h(() => E.getItem(r)),
          setItem: (r, i) => h(() => E.setItem(r, i)),
          removeItem: (r) => E.removeItem(r),
          getAllKeys: () => E.getAllKeys(),
          _setProvider: (r) => {
            ((b = r), (E = r));
          },
          _setDisabled: (r) => {
            r ? (E = f) : (E = b);
          },
        };
        function a(r) {
          const i = e.Storage.getItem(r);
          return JSON.parse(i ?? "null");
        }
        e._getObjectFromStorage = a;
        function l(r, i) {
          e.Storage.setItem(r, JSON.stringify(i));
        }
        e._setObjectInStorage = l;
      })(Fe)),
    Fe
  );
}
var he = {},
  yt;
function Xt() {
  if (yt) return he;
  ((yt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.UrlConfiguration = void 0));
  const e = ge(),
    y = Ce(),
    c = {
      [y.Endpoint._initialize]: "i",
      [y.Endpoint._rgstr]: "e",
      [y.Endpoint._download_config_specs]: "d",
    };
  let v = class {
    constructor(_, b, E, h) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        b && (this.customUrl = b),
        !b && E && (this.customUrl = E.endsWith("/") ? `${E}${_}` : `${E}/${_}`),
        h && (this.fallbackUrls = h));
      const a = y.NetworkDefault[_];
      this.defaultUrl = `${a}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const b = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + b);
    }
  };
  return ((he.UrlConfiguration = v), he);
}
var qe = {},
  mt;
function $e() {
  return (
    mt ||
      ((mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const y = le(),
          c = "foreground",
          v = "background",
          f = [];
        let _ = c,
          b = !1;
        const E = () => _ === c;
        e._isCurrentlyVisible = E;
        const h = () => b;
        e._isUnloading = h;
        const a = (r) => {
          f.unshift(r);
        };
        e._subscribeToVisiblityChanged = a;
        const l = (r) => {
          r !== _ && ((_ = r), f.forEach((i) => i(r)));
        };
        ((e._notifyVisibilityChanged = l),
          (0, y._addWindowEventListenerSafe)("focus", () => {
            ((b = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, y._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(v)),
          (0, y._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : v);
          }),
          (0, y._addWindowEventListenerSafe)((0, y._getUnloadEvent)(), () => {
            ((b = !0), (0, e._notifyVisibilityChanged)(v));
          }));
      })(qe)),
    qe
  );
}
var St;
function Yt() {
  if (St) return Z;
  St = 1;
  var e =
    (Z && Z.__awaiter) ||
    function (w, d, m, D) {
      function k(C) {
        return C instanceof m
          ? C
          : new m(function (L) {
              L(C);
            });
      }
      return new (m || (m = Promise))(function (C, L) {
        function U(B) {
          try {
            H(D.next(B));
          } catch (O) {
            L(O);
          }
        }
        function x(B) {
          try {
            H(D.throw(B));
          } catch (O) {
            L(O);
          }
        }
        function H(B) {
          B.done ? C(B.value) : k(B.value).then(U, x);
        }
        H((D = D.apply(w, d || [])).next());
      });
    };
  (Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.EventLogger = void 0));
  const y = Oe(),
    c = ge(),
    v = N(),
    f = Ce(),
    _ = le(),
    b = Qt(),
    E = Te(),
    h = X(),
    a = Xt(),
    l = $e(),
    r = 100,
    i = 1e4,
    o = 1e3,
    n = 6e5,
    t = 500,
    u = 200,
    g = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let p = class _e {
    static _safeFlushAndForget(d) {
      var m;
      (m = g[d]) === null || m === void 0 || m.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var m;
      (m = g[d]) === null || m === void 0 || m._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, m, D, k) {
      var C, L;
      ((this._sdkKey = d),
        (this._emitter = m),
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
          v.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = k?.loggingBufferMaxSize) !== null && L !== void 0 ? L : r));
      const U = k?.networkConfig;
      this._logEventUrlConfig = new a.UrlConfiguration(
        f.Endpoint._rgstr,
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
        this._queue.length > this._maxQueueSize && _e._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var m;
      const D = (m = this._nonExposedChecks[d]) !== null && m !== void 0 ? m : 0;
      this._nonExposedChecks[d] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const m = (0, _._isServerEnv)();
      (m &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        m ||
          (0, l._subscribeToVisiblityChanged)((D) => {
            D === "background"
              ? _e._safeFlushAndForget(this._sdkKey)
              : D === "foreground" && _e._safeRetryFailedLogs(this._sdkKey);
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
        !(Date.now() - this._creationTime > u) &&
          setTimeout(() => _e._safeFlushAndForget(this._sdkKey), u));
    }
    _shouldLogEvent(d) {
      var m;
      if (
        ((m = this._options) === null || m === void 0 ? void 0 : m.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, b._isExposureEvent)(d)) return !0;
      const D = d.user ? d.user : { statsigEnvironment: void 0 },
        k = (0, y._getUserStorageKey)(this._sdkKey, D),
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
        x = Date.now();
      return U && x - U < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > o && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = x),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var m, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const C =
            (0, l._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (m = this._options) === null || m === void 0 ? void 0 : m.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (C ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (v.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (v.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var m;
        const D = yield this._network.post(this._getRequestData(d)),
          k = (m = D?.code) !== null && m !== void 0 ? m : -1;
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
        params: { [f.NetworkParam.EventCount]: String(d.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(d) {
      for (; d.length > t; ) d.shift();
      const m = this._getStorageKey();
      try {
        (0, h._setObjectInStorage)(m, d);
      } catch {
        v.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const m = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        h.Storage.isReady() || (yield h.Storage.isReadyResolver());
        const D = (0, h._getObjectFromStorage)(m);
        if (!D) return;
        (d === s.Startup && h.Storage.removeItem(m),
          (yield this._sendEvents(D)) && d === s.GainedFocus && h.Storage.removeItem(m));
      }).catch(() => {
        v.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const m = {},
        D = this._getCurrentPageUrl();
      D && (m.statsigMetadata = { currentPage: D });
      const k = Object.assign(Object.assign({}, d), m);
      (v.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      var d, m;
      const D =
          (m = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && m !== void 0
            ? m
            : i,
        k = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== k ? clearInterval(k) : _e._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = k;
    }
  };
  return ((Z.EventLogger = p), Z);
}
var Ke = {},
  bt;
function Ie() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.18.2"));
        let y = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => y,
          add: (c) => {
            y = Object.assign(Object.assign({}, y), c);
          },
        };
      })(Ke)),
    Ke
  );
}
var Be = {},
  pt;
function sn() {
  return (pt || ((pt = 1), Object.defineProperty(Be, "__esModule", { value: !0 })), Be);
}
var z = {},
  ye = {},
  me = {},
  Et;
function et() {
  if (Et) return me;
  ((Et = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let y = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (f) => {
        let _ = Math.random() * 16;
        return (
          y > 0
            ? ((_ = (y + _) % 16 | 0), (y = Math.floor(y / 16)))
            : ((_ = (c + _) % 16 | 0), (c = Math.floor(c / 16))),
          (f === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((me.getUUID = e), me);
}
var wt;
function Re() {
  if (wt) return ye;
  ((wt = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.StableID = void 0));
  const e = Oe(),
    y = N(),
    c = le(),
    v = X(),
    f = et(),
    _ = {},
    b = {},
    E = {};
  ye.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (E[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((_[n] = t), a(t, n), t)
          : ((t = l(n)), t == null && (t = (0, f.getUUID)()), a(t, n), i(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), a(n, t), i(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      b[n] = t;
    },
    _setDisabled: (n, t) => {
      E[n] = t;
    },
  };
  function h(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function a(n, t) {
    const u = h(t);
    try {
      (0, v._setObjectInStorage)(u, n);
    } catch {
      y.Log.warn("Failed to save StableID to storage");
    }
  }
  function l(n) {
    const t = h(n);
    return (0, v._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!b[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const u of t) {
      const [g, s] = u.trim().split("=");
      if (g === o(n)) return decodeURIComponent(s);
    }
    return null;
  }
  function i(n, t) {
    if (!b[t] || !document) return;
    const u = new Date();
    (u.setFullYear(u.getFullYear() + 1),
      (document.cookie = `${o(t)}=${encodeURIComponent(n)}; expires=${u.toUTCString()}; path=/`));
  }
  function o(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return ye;
}
var ne = {},
  Dt;
function Zt() {
  if (Dt) return ne;
  ((Dt = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._getFullUserHash = ne._normalizeUser = void 0));
  const e = ge(),
    y = N();
  function c(f, _, b) {
    try {
      const E = JSON.parse(JSON.stringify(f));
      return (
        _ != null && _.environment != null
          ? (E.statsigEnvironment = _.environment)
          : b != null && (E.statsigEnvironment = { tier: b }),
        E
      );
    } catch {
      return (y.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  ne._normalizeUser = c;
  function v(f) {
    return f ? (0, e._DJB2Object)(f) : null;
  }
  return ((ne._getFullUserHash = v), ne);
}
var Se = {},
  kt;
function $t() {
  if (kt) return Se;
  ((kt = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se._typedJsonParse = void 0));
  const e = N();
  function y(c, v, f) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && v in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${f}`), null);
  }
  return ((Se._typedJsonParse = y), Se);
}
var It;
function an() {
  if (It) return z;
  It = 1;
  var e =
    (z && z.__awaiter) ||
    function (r, i, o, n) {
      function t(u) {
        return u instanceof o
          ? u
          : new o(function (g) {
              g(u);
            });
      }
      return new (o || (o = Promise))(function (u, g) {
        function s(d) {
          try {
            w(n.next(d));
          } catch (m) {
            g(m);
          }
        }
        function p(d) {
          try {
            w(n.throw(d));
          } catch (m) {
            g(m);
          }
        }
        function w(d) {
          d.done ? u(d.value) : t(d.value).then(s, p);
        }
        w((n = n.apply(r, i || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._makeDataAdapterResult = z.DataAdapterCore = void 0));
  const y = N(),
    c = Re(),
    v = Zt(),
    f = X(),
    _ = $t(),
    b = 10;
  let E = class {
    constructor(i, o) {
      ((this._adapterName = i),
        (this._cacheSuffix = o),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${o}`),
        (this._inMemoryCache = new a()));
    }
    attach(i, o, n) {
      ((this._sdkKey = i), (this._options = o));
    }
    getDataSync(i) {
      const o = i && (0, v._normalizeUser)(i, this._options),
        n = this._getCacheKey(o),
        t = this._inMemoryCache.get(n, o);
      if (t && this._getIsCacheValueValid(t)) return t;
      const u = this._loadFromCache(n);
      return u && this._getIsCacheValueValid(u)
        ? (this._inMemoryCache.add(n, u), this._inMemoryCache.get(n, o))
        : null;
    }
    setData(i, o) {
      const n = o && (0, v._normalizeUser)(o, this._options),
        t = this._getCacheKey(n);
      this._inMemoryCache.add(t, h("Bootstrap", i, null, n));
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, o, n) {
      return e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
        const t = i ?? this.getDataSync(o),
          u = [this._fetchAndPrepFromNetwork(t, o, n)];
        return (
          n?.timeoutMs &&
            u.push(
              new Promise((g) => setTimeout(g, n.timeoutMs)).then(
                () => (y.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(u)
        );
      });
    }
    _prefetchDataImpl(i, o) {
      return e(this, void 0, void 0, function* () {
        const n = i && (0, v._normalizeUser)(i, this._options),
          t = this._getCacheKey(n),
          u = yield this._getDataAsyncImpl(null, n, o);
        u &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, u), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(i, o, n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const u = (t = i?.data) !== null && t !== void 0 ? t : null,
          g = i != null && this._isCachedResultValidFor204(i, o),
          s = yield this._fetchFromNetwork(u, o, n, g);
        if (!s) return (y.Log.debug("No response returned for latest value"), null);
        const p = (0, _._typedJsonParse)(s, "has_updates", "Response"),
          w = this._getSdkKey(),
          d = c.StableID.get(w);
        let m = null;
        if (p?.has_updates === !0) m = h("Network", s, d, o);
        else if (u && p?.has_updates === !1) m = h("NetworkNotModified", u, d, o);
        else return null;
        const D = this._getCacheKey(o);
        return (this._inMemoryCache.add(D, m), this._writeToCache(D, m), m);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (y.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var o;
      const n = (o = f.Storage.getItem) === null || o === void 0 ? void 0 : o.call(f.Storage, i);
      if (n == null) return null;
      const t = (0, _._typedJsonParse)(n, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(i, o) {
      (f.Storage.setItem(i, JSON.stringify(o)), this._runLocalStorageCacheEviction(i));
    }
    _runLocalStorageCacheEviction(i) {
      var o;
      const n =
        (o = (0, f._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && o !== void 0
          ? o
          : {};
      n[i] = Date.now();
      const t = l(n, b);
      (t && (delete n[t], f.Storage.removeItem(t)),
        (0, f._setObjectInStorage)(this._lastModifiedStoreKey, n));
    }
  };
  z.DataAdapterCore = E;
  function h(r, i, o, n) {
    return {
      source: r,
      data: i,
      receivedAt: Date.now(),
      stableID: o,
      fullUserHash: (0, v._getFullUserHash)(n),
    };
  }
  z._makeDataAdapterResult = h;
  class a {
    constructor() {
      this._data = {};
    }
    get(i, o) {
      var n;
      const t = this._data[i],
        u = t?.stableID,
        g = (n = o?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return g && u && g !== u
        ? (y.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(i, o) {
      const n = l(this._data, b - 1);
      (n && delete this._data[n], (this._data[i] = o));
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function l(r, i) {
    const o = Object.keys(r);
    return o.length <= i
      ? null
      : o.reduce((n, t) => {
          const u = r[n],
            g = r[t];
          return typeof u == "object" && typeof g == "object"
            ? g.receivedAt < u.receivedAt
              ? t
              : n
            : g < u
              ? t
              : n;
        });
  }
  return z;
}
var Ge = {},
  Ot;
function ln() {
  return (Ot || ((Ot = 1), Object.defineProperty(Ge, "__esModule", { value: !0 })), Ge);
}
var be = {},
  pe = {},
  Ct;
function tt() {
  if (Ct) return pe;
  ((Ct = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.SDKType = void 0));
  const e = {};
  let y;
  return (
    (pe.SDKType = {
      _get: (c) => {
        var v;
        return ((v = e[c]) !== null && v !== void 0 ? v : "js-mono") + (y ?? "");
      },
      _setClientType(c, v) {
        e[c] = v;
      },
      _setBindingType(c) {
        (!y || y === "-react") && (y = "-" + c);
      },
    }),
    pe
  );
}
var Tt;
function en() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        var y =
          (be && be.__awaiter) ||
          function (r, i, o, n) {
            function t(u) {
              return u instanceof o
                ? u
                : new o(function (g) {
                    g(u);
                  });
            }
            return new (o || (o = Promise))(function (u, g) {
              function s(d) {
                try {
                  w(n.next(d));
                } catch (m) {
                  g(m);
                }
              }
              function p(d) {
                try {
                  w(n.throw(d));
                } catch (m) {
                  g(m);
                }
              }
              function w(d) {
                d.done ? u(d.value) : t(d.value).then(s, p);
              }
              w((n = n.apply(r, i || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = N(),
          v = tt(),
          f = Ie();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let b = class {
          constructor(i, o, n, t) {
            ((this._sdkKey = i),
              (this._options = o),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(i) {
            try {
              const o = i;
              a(o).forEach((n) => {
                const t = o[n];
                "$EB" in t ||
                  ((o[n] = (...u) => this._capture(n, () => t.apply(i, u))), (o[n].$EB = !0));
              });
            } catch (o) {
              this._onError("eb:wrap", o);
            }
          }
          logError(i, o) {
            this._onError(i, o);
          }
          getLastSeenErrorAndReset() {
            const i = this._lastSeenError;
            return ((this._lastSeenError = void 0), i ?? null);
          }
          attachErrorIfNoneExists(i) {
            this._lastSeenError || (this._lastSeenError = E(i));
          }
          _capture(i, o) {
            try {
              const n = o();
              return n && n instanceof Promise ? n.catch((t) => this._onError(i, t)) : n;
            } catch (n) {
              return (this._onError(i, n), null);
            }
          }
          _onError(i, o) {
            try {
              (c.Log.warn(`Caught error in ${i}`, { error: o }),
                y(this, void 0, void 0, function* () {
                  var t, u, g, s, p, w, d;
                  const m = o || Error(_),
                    D = m instanceof Error,
                    k = D ? m.name : "No Name",
                    C = E(m);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
                    !(
                      (u =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || u === void 0
                    ) && u.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: o, tag: i });
                    return;
                  }
                  const L = v.SDKType._get(this._sdkKey),
                    U = f.StatsigMetadataProvider.get(),
                    x = D ? m.stack : h(m),
                    H = Object.assign(
                      { tag: i, exception: k, info: x, statsigOptions: l(this._options) },
                      Object.assign(Object.assign({}, U), { sdkType: L }),
                    );
                  (yield (
                    (w =
                      (p =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || p === void 0
                        ? void 0
                        : p.networkOverrideFunc) !== null && w !== void 0
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
                    body: JSON.stringify(H),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: o, tag: i }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = b;
        function E(r) {
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
            return _;
          }
        }
        function a(r) {
          const i = new Set();
          let o = Object.getPrototypeOf(r);
          for (; o && o !== Object.prototype; )
            (Object.getOwnPropertyNames(o)
              .filter((n) => typeof o?.[n] == "function")
              .forEach((n) => i.add(n)),
              (o = Object.getPrototypeOf(o)));
          return Array.from(i);
        }
        function l(r) {
          if (!r) return {};
          const i = {};
          return (
            Object.entries(r).forEach(([o, n]) => {
              switch (typeof n) {
                case "number":
                case "bigint":
                case "boolean":
                  i[String(o)] = n;
                  break;
                case "string":
                  n.length < 50 ? (i[String(o)] = n) : (i[String(o)] = "set");
                  break;
                case "object":
                  o === "environment"
                    ? (i.environment = n)
                    : o === "networkConfig"
                      ? (i.networkConfig = n)
                      : (i[String(o)] = n != null ? "set" : "unset");
                  break;
              }
            }),
            i
          );
        }
      })(be)),
    be
  );
}
var Ve = {},
  Rt;
function un() {
  return (Rt || ((Rt = 1), Object.defineProperty(Ve, "__esModule", { value: !0 })), Ve);
}
var Je = {},
  Mt;
function cn() {
  return (Mt || ((Mt = 1), Object.defineProperty(Je, "__esModule", { value: !0 })), Je);
}
var ze = {},
  Ut;
function dn() {
  return (Ut || ((Ut = 1), Object.defineProperty(ze, "__esModule", { value: !0 })), ze);
}
var re = {},
  Lt;
function tn() {
  if (Lt) return re;
  ((Lt = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.createMemoKey = re.MemoPrefix = void 0),
    (re.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    y = new Set(["userPersistedValues"]);
  function c(v, f, _) {
    let b = `${v}|${f}`;
    if (!_) return b;
    for (const E of Object.keys(_)) {
      if (y.has(E)) return;
      e.has(E) ? (b += `|${E}=true`) : (b += `|${E}=${_[E]}`);
    }
    return b;
  }
  return ((re.createMemoKey = c), re);
}
var ie = {},
  W = {},
  oe = {},
  Pt;
function _n() {
  if (Pt) return oe;
  Pt = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (E, h, a, l) {
      function r(i) {
        return i instanceof a
          ? i
          : new a(function (o) {
              o(i);
            });
      }
      return new (a || (a = Promise))(function (i, o) {
        function n(g) {
          try {
            u(l.next(g));
          } catch (s) {
            o(s);
          }
        }
        function t(g) {
          try {
            u(l.throw(g));
          } catch (s) {
            o(s);
          }
        }
        function u(g) {
          g.done ? i(g.value) : r(g.value).then(n, t);
        }
        u((l = l.apply(E, h || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }), (oe._fetchTxtRecords = void 0));
  const y = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    v = ["i", "e", "d"],
    f = 200;
  function _(E) {
    return e(this, void 0, void 0, function* () {
      const h = yield E(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: y,
      });
      if (!h.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const a = yield h.arrayBuffer(),
        l = new Uint8Array(a);
      return b(l);
    });
  }
  oe._fetchTxtRecords = _;
  function b(E) {
    const h = E.findIndex(
      (l, r) =>
        r < f && String.fromCharCode(l) === "=" && v.includes(String.fromCharCode(E[r - 1])),
    );
    if (h === -1) {
      const l = new Error("Failed to parse TXT records from DNS");
      throw ((l.name = "DnsTxtParseError"), l);
    }
    let a = "";
    for (let l = h - 1; l < E.length; l++) a += String.fromCharCode(E[l]);
    return a.split(",");
  }
  return oe;
}
var jt;
function gn() {
  if (jt) return W;
  jt = 1;
  var e =
    (W && W.__awaiter) ||
    function (o, n, t, u) {
      function g(s) {
        return s instanceof t
          ? s
          : new t(function (p) {
              p(s);
            });
      }
      return new (t || (t = Promise))(function (s, p) {
        function w(D) {
          try {
            m(u.next(D));
          } catch (k) {
            p(k);
          }
        }
        function d(D) {
          try {
            m(u.throw(D));
          } catch (k) {
            p(k);
          }
        }
        function m(D) {
          D.done ? s(D.value) : g(D.value).then(w, d);
        }
        m((u = u.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._isDomainFailure = W.NetworkFallbackResolver = void 0));
  const y = _n(),
    c = ge(),
    v = N(),
    f = X(),
    _ = 10080 * 60 * 1e3,
    b = 14400 * 1e3;
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
      var u;
      const g = (u = this._fallbackInfo) === null || u === void 0 ? void 0 : u[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        l(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(n, t) {
      var u, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (u = r(n)) !== null && u !== void 0 ? u : {}), (this._fallbackInfo = s));
      const p = s[t.endpoint];
      return !p ||
        Date.now() > ((g = p.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== p.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), l(n, this._fallbackInfo), null)
        : p.url
          ? p.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, u, g) {
      return e(this, void 0, void 0, function* () {
        var s, p;
        try {
          if (!h(u, g)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            m = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return m ? (this._updateFallbackInfoWithNewUrl(n, t, m), !0) : !1;
        } catch (w) {
          return (
            (p = this._errorBoundary) === null ||
              p === void 0 ||
              p.logError("tryFetchUpdatedFallbackInfo", w),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, u) {
      var g, s, p;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: u,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        m = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[d];
      (m && w.previous.push(...m.previous), w.previous.length > 10 && (w.previous = []));
      const D =
        (p = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        p === void 0
          ? void 0
          : p.url;
      (D != null && w.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: w })),
        l(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const u = this._dnsQueryCooldowns[n.endpoint];
        if (u && Date.now() < u) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + b;
        const g = [],
          s = yield (0, y._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          p = i(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const d = w.split("=");
          if (d.length > 1) {
            let m = d[1];
            (m.endsWith("/") && (m = m.slice(0, -1)), g.push(`https://${m}${p}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var u;
      if (t == null) return null;
      const g = new Set((u = n?.previous) !== null && u !== void 0 ? u : []),
        s = n?.url;
      let p = null;
      for (const w of t) {
        const d = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!g.has(w) && d !== s) {
          p = d;
          break;
        }
      }
      return p;
    }
  };
  W.NetworkFallbackResolver = E;
  function h(o, n) {
    var t;
    const u = (t = o?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      u.includes("uncaught exception") ||
      u.includes("failed to fetch") ||
      u.includes("networkerror when attempting to fetch resource")
    );
  }
  W._isDomainFailure = h;
  function a(o) {
    return `statsig.network_fallback.${(0, c._DJB2)(o)}`;
  }
  function l(o, n) {
    const t = a(o);
    if (!n || Object.keys(n).length === 0) {
      f.Storage.removeItem(t);
      return;
    }
    f.Storage.setItem(t, JSON.stringify(n));
  }
  function r(o) {
    const n = a(o),
      t = f.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (v.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function i(o) {
    try {
      return new URL(o).pathname;
    } catch {
      return null;
    }
  }
  return W;
}
var Ee = {},
  Nt;
function nn() {
  if (Nt) return Ee;
  ((Nt = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.SDKFlags = void 0));
  const e = {};
  return (
    (Ee.SDKFlags = {
      setFlags: (y, c) => {
        e[y] = c;
      },
      get: (y, c) => {
        var v, f;
        return (f = (v = e[y]) === null || v === void 0 ? void 0 : v[c]) !== null && f !== void 0
          ? f
          : !1;
      },
    }),
    Ee
  );
}
var We = {},
  At;
function nt() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const y = Q(),
          c = Oe(),
          v = N(),
          f = X(),
          _ = et(),
          b = 1800 * 1e3,
          E = 14400 * 1e3,
          h = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              h[s] == null && (h[s] = a(s));
              const p = h[s];
              return r(p);
            },
            overrideInitialSessionID: (s, p) => {
              h[p] = l(s, p);
            },
          }));
        function a(s) {
          let p = g(s);
          const w = Date.now();
          return (
            p || (p = { sessionID: (0, _.getUUID)(), startTime: w, lastUpdate: w }),
            { data: p, sdkKey: s }
          );
        }
        function l(s, p) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: p };
        }
        function r(s) {
          const p = Date.now(),
            w = s.data,
            d = s.sdkKey;
          if (o(w) || n(w)) {
            ((w.sessionID = (0, _.getUUID)()), (w.startTime = p));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            D && D.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = p),
            u(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const m = p - w.startTime;
          return ((s.idleTimeoutID = i(d, b)), (s.ageTimeoutID = i(d, E - m)), s);
        }
        function i(s, p) {
          return setTimeout(() => {
            var w;
            const d =
              (w = (0, y._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, p);
        }
        function o({ lastUpdate: s }) {
          return Date.now() - s > b;
        }
        function n({ startTime: s }) {
          return Date.now() - s > E;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function u(s, p) {
          const w = t(p);
          try {
            (0, f._setObjectInStorage)(w, s);
          } catch {
            v.Log.warn("Failed to save SessionID");
          }
        }
        function g(s) {
          const p = t(s);
          return (0, f._getObjectFromStorage)(p);
        }
      })(We)),
    We
  );
}
var we = {},
  Ft;
function rn() {
  return (
    Ft ||
      ((Ft = 1),
      Object.defineProperty(we, "__esModule", { value: !0 }),
      (we.ErrorTag = void 0),
      (we.ErrorTag = { NetworkError: "NetworkError" })),
    we
  );
}
var qt;
function fn() {
  if (qt) return ie;
  qt = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (O, S, I, T) {
      function R(M) {
        return M instanceof I
          ? M
          : new I(function (P) {
              P(M);
            });
      }
      return new (I || (I = Promise))(function (M, P) {
        function fe(A) {
          try {
            G(T.next(A));
          } catch (F) {
            P(F);
          }
        }
        function J(A) {
          try {
            G(T.throw(A));
          } catch (F) {
            P(F);
          }
        }
        function G(A) {
          A.done ? M(A.value) : R(A.value).then(fe, J);
        }
        G((T = T.apply(O, S || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.NetworkCore = void 0), Q());
  const y = Q(),
    c = Ye(),
    v = N(),
    f = Ce(),
    _ = gn(),
    b = nn(),
    E = tt(),
    h = le(),
    a = nt(),
    l = Re(),
    r = rn(),
    i = Ie(),
    o = Te(),
    n = $e(),
    t = 1e4,
    u = 500,
    g = 3e4,
    s = 1e3,
    p = 50,
    w = p / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let m = class {
    constructor(S, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        S && (this._options = S),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(S)));
    }
    setLogEventCompressionMode(S) {
      this._options.logEventCompressionMode = S;
    }
    setErrorBoundary(S) {
      ((this._errorBoundary = S),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(S));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const S = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), S);
    }
    beacon(S) {
      if (!D(S)) return !1;
      const I = this._getInternalRequestArgs("POST", S),
        T = this._getPopulatedURL(I),
        R = navigator;
      return R.sendBeacon.bind(R)(T, I.body);
    }
    post(S) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", S);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(S) {
      const I = this._getInternalRequestArgs("GET", S);
      return this._sendRequest(I);
    }
    _sendRequest(S) {
      return e(this, void 0, void 0, function* () {
        var I, T, R, M;
        if (!D(S) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: fe, retries: J, attempt: G } = S,
          A = S.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            v.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const F = G ?? 1,
          K = typeof AbortController < "u" ? new AbortController() : null,
          ue = setTimeout(() => {
            K?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          ve = this._getPopulatedURL(S);
        let V = null;
        const on = (0, n._isUnloading)();
        try {
          const ce = {
            method: P,
            body: fe,
            headers: Object.assign({}, S.headers),
            signal: K?.signal,
            priority: S.priority,
            keepalive: on,
          };
          x(S, F);
          const de = this._leakyBucket[A];
          if (
            (de && ((de.lastRequestTime = Date.now()), (this._leakyBucket[A] = de)),
            (V = yield (
              (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch
            )(ve, ce)),
            clearTimeout(ue),
            !V.ok)
          ) {
            const ke = yield V.text().catch(() => "No Text"),
              it = new Error(`NetworkError: ${ve} ${ke}`);
            throw ((it.name = "NetworkError"), it);
          }
          const Me = yield V.text();
          return (
            H(S, V, F, Me),
            this._fallbackResolver.tryBumpExpiryTime(S.sdkKey, S.urlConfig),
            { body: Me, code: V.status }
          );
        } catch (ce) {
          const de = L(K, ce),
            rt = U(K);
          if (
            (H(S, V, F, "", ce),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              S.sdkKey,
              S.urlConfig,
              de,
              rt,
            )) &&
              (S.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(S.sdkKey, S.urlConfig)),
            !J || F > J || !d.has((T = V?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: ce,
                tag: r.ErrorTag.NetworkError,
                requestArgs: S,
              });
            const ke = `A networking error occurred during ${P} request to ${ve}.`;
            return (
              v.Log.error(ke, de, ce),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(ke),
              null
            );
          }
          return (
            yield B(F),
            this._sendRequest(Object.assign(Object.assign({}, S), { retries: J, attempt: F + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(S) {
      let I = S?.logEventCompressionMode;
      return (
        !I && S?.disableCompression === !0 && (I = o.LogEventCompressionMode.Disabled),
        I || (I = o.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(S) {
      var I;
      const T = Date.now(),
        R =
          (I = this._leakyBucket[S]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        M = T - R.lastRequestTime,
        P = Math.floor(M * w);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= p
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[S] = R), !1)
      );
    }
    _getPopulatedURL(S) {
      var I;
      const T = (I = S.fallbackUrl) !== null && I !== void 0 ? I : S.urlConfig.getUrl();
      (S.urlConfig.endpoint === f.Endpoint._initialize ||
        S.urlConfig.endpoint === f.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [f.NetworkParam.SdkKey]: S.sdkKey,
            [f.NetworkParam.SdkType]: E.SDKType._get(S.sdkKey),
            [f.NetworkParam.SdkVersion]: i.SDK_VERSION,
            [f.NetworkParam.Time]: String(Date.now()),
            [f.NetworkParam.SessionID]: a.SessionID.get(S.sdkKey),
          },
          S.params,
        ),
        M = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(S) {
      var I;
      const T = (0, h._getWindowSafe)(),
        R = S.body;
      if (
        !(
          !S.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof R != "string" ||
          (0, y._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((S.body = T.btoa(R).split("").reverse().join("")),
            (S.params = Object.assign(
              Object.assign({}, (I = S.params) !== null && I !== void 0 ? I : {}),
              { [f.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          v.Log.warn(`Request encoding failed for ${S.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(S) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = S.body;
        if (!(typeof T != "string" || !C(S, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              M = new CompressionStream("gzip"),
              P = M.writable.getWriter();
            (P.write(R).catch(v.Log.error), P.close().catch(v.Log.error));
            const fe = M.readable.getReader(),
              J = [];
            let G;
            for (; !(G = yield fe.read()).done; ) J.push(G.value);
            const A = J.reduce((ue, ve) => ue + ve.length, 0),
              F = new Uint8Array(A);
            let K = 0;
            for (const ue of J) (F.set(ue, K), (K += ue.length));
            ((S.body = F),
              (S.params = Object.assign(
                Object.assign({}, (I = S.params) !== null && I !== void 0 ? I : {}),
                { [f.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            v.Log.warn(`Request compression failed for ${S.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(S, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        R = Object.assign(Object.assign({}, I), { method: S, fallbackUrl: T });
      return ("data" in I && k(R, I.data), R);
    }
  };
  ie.NetworkCore = m;
  const D = (O) => (O.sdkKey ? !0 : (v.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (O, S) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        R = l.StableID.get(I),
        M = a.SessionID.get(I),
        P = E.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, S), {
          statsigMetadata: Object.assign(Object.assign({}, i.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: M,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, S) {
    if (
      !O.isCompressable ||
      (0, y._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = b.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (S.logEventCompressionMode) {
      case o.LogEventCompressionMode.Disabled:
        return !1;
      case o.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case o.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O, S) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof S == "string"
        ? S
        : S instanceof Error
          ? `${S.name}: ${S.message}`
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
  function x(O, S) {
    O.urlConfig.endpoint === f.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: S });
  }
  function H(O, S, I, T, R) {
    O.urlConfig.endpoint === f.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(S, I, T, R));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((S) => setTimeout(S, Math.min(u * (O * O), g)));
    });
  }
  return ie;
}
var xe = {},
  Kt;
function vn() {
  return (Kt || ((Kt = 1), Object.defineProperty(xe, "__esModule", { value: !0 })), xe);
}
var He = {},
  Bt;
function hn() {
  return (Bt || ((Bt = 1), Object.defineProperty(He, "__esModule", { value: !0 })), He);
}
var se = {},
  Gt;
function yn() {
  if (Gt) return se;
  Gt = 1;
  var e =
    (se && se.__awaiter) ||
    function (n, t, u, g) {
      function s(p) {
        return p instanceof u
          ? p
          : new u(function (w) {
              w(p);
            });
      }
      return new (u || (u = Promise))(function (p, w) {
        function d(k) {
          try {
            D(g.next(k));
          } catch (C) {
            w(C);
          }
        }
        function m(k) {
          try {
            D(g.throw(k));
          } catch (C) {
            w(C);
          }
        }
        function D(k) {
          k.done ? p(k.value) : s(k.value).then(d, m);
        }
        D((g = g.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }), (se.StatsigClientBase = void 0), Q());
  const y = Q(),
    c = en(),
    v = Yt(),
    f = N(),
    _ = tn(),
    b = le(),
    E = nt(),
    h = Re(),
    a = Te(),
    l = X(),
    r = 3e3;
  let i = class {
    constructor(t, u, g, s) {
      var p, w, d, m;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (f.Log.level = s.logLevel),
        s?.disableStorage && l.Storage._setDisabled(!0),
        s?.initialSessionID && E.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && l.Storage._setProvider(s.storageProvider),
        s?.enableCookies && h.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && h.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (p = s?.overrideAdapter) !== null && p !== void 0 ? p : null),
        (this._logger = new v.EventLogger(t, D, g, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(u),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = u),
        this.dataAdapter.attach(t, s, g),
        (this.storageProvider = l.Storage),
        (m =
          (d = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(w)) === null ||
          m === void 0 ||
          m.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
        this._primeReadyRipcord(),
        o(t, this));
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
          l.Storage._setDisabled(t.disableStorage)),
        t.enableCookies != null &&
          ((this._options.enableCookies = t.enableCookies),
          h.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(a.LogEventCompressionMode.Disabled));
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
    on(t, u) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(u));
    }
    off(t, u) {
      if (this._listeners[t]) {
        const g = this._listeners[t].indexOf(u);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, u) {
      ((u.__isInternal = !0), this.on(t, u));
    }
    $emt(t) {
      var u;
      const g = (s) => {
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
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => g(s)),
        (u = this._listeners["*"]) === null || u === void 0 || u.forEach(g));
    }
    _setStatus(t, u) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: u }));
    }
    _enqueueExposure(t, u, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(u);
    }
    _memoize(t, u) {
      return (g, s) => {
        if (this._options.disableEvaluationMemoization) return u(g, s);
        const p = (0, _.createMemoKey)(t, g, s);
        return p
          ? (p in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[p] = u(g, s))),
            this._memoCache[p])
          : u(g, s);
      };
    }
  };
  se.StatsigClientBase = i;
  function o(n, t) {
    var u;
    if ((0, b._isServerEnv)()) return;
    const g = (0, y._getStatsigGlobal)(),
      s = (u = g.instances) !== null && u !== void 0 ? u : {},
      p = t;
    (s[n] != null &&
      f.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = p),
      g.firstInstance || (g.firstInstance = p),
      (g.instances = s),
      (__STATSIG__ = g));
  }
  return se;
}
var De = {},
  Vt;
function mn() {
  return (
    Vt ||
      ((Vt = 1),
      Object.defineProperty(De, "__esModule", { value: !0 }),
      (De.DataAdapterCachePrefix = void 0),
      (De.DataAdapterCachePrefix = "statsig.cached")),
    De
  );
}
var Qe = {},
  Jt;
function Sn() {
  return (Jt || ((Jt = 1), Object.defineProperty(Qe, "__esModule", { value: !0 })), Qe);
}
var j = {},
  zt;
function bn() {
  if (zt) return j;
  ((zt = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j._makeTypedGet =
      j._mergeOverride =
      j._makeLayer =
      j._makeExperiment =
      j._makeDynamicConfig =
      j._makeFeatureGate =
        void 0));
  const e = N(),
    y = Ze();
  function c(a, l, r, i) {
    var o;
    return {
      name: a,
      details: l,
      ruleID: (o = r?.rule_id) !== null && o !== void 0 ? o : "",
      __evaluation: r,
      value: i,
    };
  }
  function v(a, l, r) {
    var i;
    return Object.assign(Object.assign({}, c(a, l, r, r?.value === !0)), {
      idType: (i = r?.id_type) !== null && i !== void 0 ? i : null,
    });
  }
  j._makeFeatureGate = v;
  function f(a, l, r) {
    var i;
    const o = (i = r?.value) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, c(a, l, r, o)), { get: h(a, r?.value) });
  }
  j._makeDynamicConfig = f;
  function _(a, l, r) {
    var i;
    const o = f(a, l, r);
    return Object.assign(Object.assign({}, o), {
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
    });
  }
  j._makeExperiment = _;
  function b(a, l, r, i) {
    var o, n;
    return Object.assign(Object.assign({}, c(a, l, r, void 0)), {
      get: h(a, r?.value, i),
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  j._makeLayer = b;
  function E(a, l, r, i) {
    return Object.assign(Object.assign(Object.assign({}, a), l), { get: h(a.name, r, i) });
  }
  j._mergeOverride = E;
  function h(a, l, r) {
    return (i, o) => {
      var n;
      const t = (n = l?.[i]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (o ?? null)
        : o != null && !(0, y._isTypeMatch)(t, o)
          ? (e.Log.warn(
              `Parameter type mismatch. '${a}.${i}' was found to be type '${typeof t}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            o ?? null)
          : (r?.(i), t);
    };
  }
  return ((j._makeTypedGet = h), j);
}
var Xe = {},
  Wt;
function pn() {
  return (Wt || ((Wt = 1), Object.defineProperty(Xe, "__esModule", { value: !0 })), Xe);
}
var ae = {},
  xt;
function En() {
  if (xt) return ae;
  ((xt = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.UPDATE_DETAIL_ERROR_MESSAGES = ae.createUpdateDetails = void 0));
  const e = (y, c, v, f, _, b) => ({
    duration: v,
    source: c,
    success: y,
    error: f,
    sourceUrl: _,
    warnings: b,
  });
  return (
    (ae.createUpdateDetails = e),
    (ae.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    ae
  );
}
var Ht;
function Mn() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        var y =
            (Y && Y.__createBinding) ||
            (Object.create
              ? function (a, l, r, i) {
                  i === void 0 && (i = r);
                  var o = Object.getOwnPropertyDescriptor(l, r);
                  ((!o || ("get" in o ? !l.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return l[r];
                      },
                    }),
                    Object.defineProperty(a, i, o));
                }
              : function (a, l, r, i) {
                  (i === void 0 && (i = r), (a[i] = l[r]));
                }),
          c =
            (Y && Y.__exportStar) ||
            function (a, l) {
              for (var r in a)
                r !== "default" && !Object.prototype.hasOwnProperty.call(l, r) && y(l, a, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          Q());
        const v = Q(),
          f = Ye();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return f.Diagnostics;
          },
        });
        const _ = Yt();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const b = N();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return b.Log;
          },
        });
        const E = Ie(),
          h = X();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return h.Storage;
          },
        }),
          c(Q(), e),
          c(Oe(), e),
          c(sn(), e),
          c(an(), e),
          c(Ye(), e),
          c(ln(), e),
          c(en(), e),
          c(un(), e),
          c(cn(), e),
          c(ge(), e),
          c(dn(), e),
          c(N(), e),
          c(tn(), e),
          c(Ce(), e),
          c(fn(), e),
          c(vn(), e),
          c(hn(), e),
          c(le(), e),
          c(tt(), e),
          c(nt(), e),
          c(Re(), e),
          c(yn(), e),
          c(rn(), e),
          c(mn(), e),
          c(Qt(), e),
          c(Ie(), e),
          c(Te(), e),
          c(Sn(), e),
          c(bn(), e),
          c(pn(), e),
          c(Zt(), e),
          c(X(), e),
          c($t(), e),
          c(Ze(), e),
          c(Xt(), e),
          c(et(), e),
          c($e(), e),
          c(En(), e),
          c(nn(), e),
          Object.assign((0, v._getStatsigGlobal)(), { Log: b.Log, SDK_VERSION: E.SDK_VERSION }));
      })(Y)),
    Y
  );
}
export { Dn as a, ot as c, wn as g, Mn as r };
