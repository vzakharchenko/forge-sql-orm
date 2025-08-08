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
  var y = e.default;
  if (typeof y == "function") {
    var u = function h() {
      var f = !1;
      try {
        f = this instanceof h;
      } catch {}
      return f ? Reflect.construct(y, arguments, this.constructor) : y.apply(this, arguments);
    };
    u.prototype = y.prototype;
  } else u = {};
  return (
    Object.defineProperty(u, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (h) {
      var f = Object.getOwnPropertyDescriptor(e, h);
      Object.defineProperty(
        u,
        h,
        f.get
          ? f
          : {
              enumerable: !0,
              get: function () {
                return e[h];
              },
            },
      );
    }),
    u
  );
}
var X = {},
  Ue = {},
  Le = {},
  at;
function j() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const y = " DEBUG ",
          u = "  INFO ",
          h = "  WARN ",
          f = " ERROR ";
        function _(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class m {
          static info(...v) {
            m.level >= e.LogLevel.Info && console.info(u, ..._(v));
          }
          static debug(...v) {
            m.level >= e.LogLevel.Debug && console.debug(y, ..._(v));
          }
          static warn(...v) {
            m.level >= e.LogLevel.Warn && console.warn(h, ..._(v));
          }
          static error(...v) {
            m.level >= e.LogLevel.Error && console.error(f, ..._(v));
          }
        }
        ((e.Log = m), (m.level = e.LogLevel.Warn));
      })(Le)),
    Le
  );
}
var lt;
function H() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        var y, u, h;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const f = j(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : i;
            } catch {
              return i;
            }
          };
        e._getStatsigGlobal = _;
        const m = (o) => (0, e._getStatsigGlobal)()[o];
        e._getStatsigGlobalFlag = m;
        const b = (o) => {
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
        e._getInstance = b;
        const v = "__STATSIG__",
          l = typeof window < "u" ? window : {},
          a = typeof st < "u" ? st : {},
          r = typeof globalThis < "u" ? globalThis : {},
          i =
            (h =
              (u = (y = l[v]) !== null && y !== void 0 ? y : a[v]) !== null && u !== void 0
                ? u
                : r[v]) !== null && h !== void 0
              ? h
              : { instance: e._getInstance };
        ((l[v] = i), (a[v] = i), (r[v] = i));
      })(Ue)),
    Ue
  );
}
var Pe = {},
  ut;
function Ye() {
  return (
    ut ||
      ((ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const y = new Map(),
          u = "start",
          h = "end",
          f = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (l) => y.get(l),
          _markInitOverallStart: (l) => {
            b(l, _({}, u, "overall"));
          },
          _markInitOverallEnd: (l, a, r) => {
            b(
              l,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: r,
                },
                h,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (l, a) => {
            b(l, _(a, u, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (l, a) => {
            b(l, _(a, h, "initialize", "network_request"));
          },
          _markInitProcessStart: (l) => {
            b(l, _({}, u, "initialize", "process"));
          },
          _markInitProcessEnd: (l, a) => {
            b(l, _(a, h, "initialize", "process"));
          },
          _clearMarkers: (l) => {
            y.delete(l);
          },
          _formatError(l) {
            if (l && typeof l == "object")
              return { code: v(l, "code"), name: v(l, "name"), message: v(l, "message") };
          },
          _getDiagnosticsData(l, a, r, i) {
            var o;
            return {
              success: l?.ok === !0,
              statusCode: l?.status,
              sdkRegion:
                (o = l?.headers) === null || o === void 0 ? void 0 : o.get("x-statsig-region"),
              isDelta: r.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(i),
            };
          },
          _enqueueDiagnosticsEvent(l, a, r, i) {
            const o = e.Diagnostics._getMarkers(r);
            if (o == null || o.length <= 0) return -1;
            const n = o[o.length - 1].timestamp - o[0].timestamp;
            e.Diagnostics._clearMarkers(r);
            const t = m(l, { context: "initialize", markers: o.slice(), statsigOptions: i });
            return (a.enqueue(t), n);
          },
        };
        function _(l, a, r, i) {
          return Object.assign({ key: r, action: a, step: i, timestamp: Date.now() }, l);
        }
        function m(l, a) {
          return { eventName: f, user: l, value: null, metadata: a, time: Date.now() };
        }
        function b(l, a) {
          var r;
          const i = (r = y.get(l)) !== null && r !== void 0 ? r : [];
          (i.push(a), y.set(l, i));
        }
        function v(l, a) {
          if (a in l) return l[a];
        }
      })(Pe)),
    Pe
  );
}
var Y = {},
  Z = {},
  Ae = {},
  ee = {},
  ct;
function Ze() {
  if (ct) return ee;
  ((ct = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee._isTypeMatch = ee._typeOf = void 0));
  function e(u) {
    return Array.isArray(u) ? "array" : typeof u;
  }
  ee._typeOf = e;
  function y(u, h) {
    const f = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return f(u) === f(h);
  }
  return ((ee._isTypeMatch = y), ee);
}
var dt;
function fe() {
  return (
    dt ||
      ((dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const y = Ze(),
          u = (_) => {
            let m = 0;
            for (let b = 0; b < _.length; b++) {
              const v = _.charCodeAt(b);
              ((m = (m << 5) - m + v), (m = m & m));
            }
            return String(m >>> 0);
          };
        e._DJB2 = u;
        const h = (_, m) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, m)));
        e._DJB2Object = h;
        const f = (_, m) => {
          if (_ == null) return null;
          const b = Object.keys(_).sort(),
            v = {};
          return (
            b.forEach((l) => {
              const a = _[l];
              if (m === 0 || (0, y._typeOf)(a) !== "object") {
                v[l] = a;
                return;
              }
              v[l] = (0, e._getSortedObject)(a, m != null ? m - 1 : m);
            }),
            v
          );
        };
        e._getSortedObject = f;
      })(Ae)),
    Ae
  );
}
var _t;
function Ie() {
  if (_t) return Z;
  ((_t = 1),
    Object.defineProperty(Z, "__esModule", { value: !0 }),
    (Z._getStorageKey = Z._getUserStorageKey = void 0));
  const e = fe();
  function y(h, f, _) {
    var m;
    if (_) return _(h, f);
    const b = f && f.customIDs ? f.customIDs : {},
      v = [
        `uid:${(m = f?.userID) !== null && m !== void 0 ? m : ""}`,
        `cids:${Object.keys(b)
          .sort((l, a) => l.localeCompare(a))
          .map((l) => `${l}-${b[l]}`)
          .join(",")}`,
        `k:${h}`,
      ];
    return (0, e._DJB2)(v.join("|"));
  }
  Z._getUserStorageKey = y;
  function u(h, f, _) {
    return f ? y(h, f, _) : (0, e._DJB2)(`k:${h}`);
  }
  return ((Z._getStorageKey = u), Z);
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
        const u = () => {
          var v;
          const l = (0, e._getWindowSafe)();
          return (v = l?.document) !== null && v !== void 0 ? v : null;
        };
        e._getDocumentSafe = u;
        const h = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const v =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || v;
        };
        e._isServerEnv = h;
        const f = (v, l) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(v, l);
        };
        e._addWindowEventListenerSafe = f;
        const _ = (v, l) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(v, l);
        };
        e._addDocumentEventListenerSafe = _;
        const m = () => {
          var v;
          try {
            return (v = (0, e._getWindowSafe)()) === null || v === void 0
              ? void 0
              : v.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = m;
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
    y = "statsig::gate_exposure",
    u = "statsig::layer_exposure",
    h = (a, r, i, o, n) => (
      i.bootstrapMetadata && (o.bootstrapMetadata = i.bootstrapMetadata),
      {
        eventName: a,
        user: r,
        value: null,
        metadata: l(i, o),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    f = ({ eventName: a }) => a === y || a === e || a === u;
  q._isExposureEvent = f;
  const _ = (a, r, i) => {
    var o, n, t;
    const c = { gate: r.name, gateValue: String(r.value), ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (c.configVersion = r.__evaluation.version),
      h(
        y,
        a,
        r.details,
        c,
        m(
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
  function m(a, r) {
    return a.map((i) => (typeof i == "string" ? (r ?? {})[i] : i)).filter((i) => i != null);
  }
  q._mapExposures = m;
  const b = (a, r, i) => {
    var o, n, t, c;
    const g = { config: r.name, ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (g.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (g.rulePassed = String(r.__evaluation.passed)),
      h(
        e,
        a,
        r.details,
        g,
        m(
          (c = (t = r.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && c !== void 0
            ? c
            : [],
          i,
        ),
      )
    );
  };
  q._createConfigExposure = b;
  const v = (a, r, i, o) => {
    var n, t, c, g, s, E, w;
    const d = r.__evaluation,
      S = ((n = d?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(i)) === !0;
    let D = "",
      k = (t = d?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    S &&
      ((D = (c = d.allocated_experiment_name) !== null && c !== void 0 ? c : ""),
      (k = (g = d.secondary_exposures) !== null && g !== void 0 ? g : []));
    const C = (s = r.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      U = {
        config: r.name,
        parameterName: i,
        ruleID: (E = C?.[i]) !== null && E !== void 0 ? E : r.ruleID,
        allocatedExperiment: D,
        isExplicitParameter: String(S),
      };
    return (
      ((w = r.__evaluation) === null || w === void 0 ? void 0 : w.version) != null &&
        (U.configVersion = r.__evaluation.version),
      h(u, a, r.details, U, m(k, o))
    );
  };
  q._createLayerParameterExposure = v;
  const l = (a, r) => (
    (r.reason = a.reason),
    a.lcut && (r.lcut = String(a.lcut)),
    a.receivedAt && (r.receivedAt = String(a.receivedAt)),
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
        const y = j(),
          u = le(),
          h = {},
          f = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (r) => (h[r] ? h[r] : null),
            setItem: (r, i) => {
              h[r] = i;
            },
            removeItem: (r) => {
              delete h[r];
            },
            getAllKeys: () => Object.keys(h),
          };
        let _ = null;
        try {
          const r = (0, u._getWindowSafe)();
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
        let m = _ ?? f,
          b = m;
        function v(r) {
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
          isReady: () => b.isReady(),
          isReadyResolver: () => b.isReadyResolver(),
          getProviderName: () => b.getProviderName(),
          getItem: (r) => v(() => b.getItem(r)),
          setItem: (r, i) => v(() => b.setItem(r, i)),
          removeItem: (r) => b.removeItem(r),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (r) => {
            ((m = r), (b = r));
          },
          _setDisabled: (r) => {
            r ? (b = f) : (b = m);
          },
        };
        function l(r) {
          const i = e.Storage.getItem(r);
          return JSON.parse(i ?? "null");
        }
        e._getObjectFromStorage = l;
        function a(r, i) {
          e.Storage.setItem(r, JSON.stringify(i));
        }
        e._setObjectInStorage = a;
      })(Fe)),
    Fe
  );
}
var he = {},
  mt;
function Yt() {
  if (mt) return he;
  ((mt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.UrlConfiguration = void 0));
  const e = fe(),
    y = Ce(),
    u = {
      [y.Endpoint._initialize]: "i",
      [y.Endpoint._rgstr]: "e",
      [y.Endpoint._download_config_specs]: "d",
    };
  let h = class {
    constructor(_, m, b, v) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = u[_]),
        m && (this.customUrl = m),
        !m && b && (this.customUrl = b.endsWith("/") ? `${b}${_}` : `${b}/${_}`),
        v && (this.fallbackUrls = v));
      const l = y.NetworkDefault[_];
      this.defaultUrl = `${l}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const m = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + m);
    }
  };
  return ((he.UrlConfiguration = h), he);
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
        const y = le(),
          u = "foreground",
          h = "background",
          f = [];
        let _ = u,
          m = !1;
        const b = () => _ === u;
        e._isCurrentlyVisible = b;
        const v = () => m;
        e._isUnloading = v;
        const l = (r) => {
          f.unshift(r);
        };
        e._subscribeToVisiblityChanged = l;
        const a = (r) => {
          r !== _ && ((_ = r), f.forEach((i) => i(r)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, y._addWindowEventListenerSafe)("focus", () => {
            ((m = !1), (0, e._notifyVisibilityChanged)(u));
          }),
          (0, y._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(h)),
          (0, y._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? u : h);
          }),
          (0, y._addWindowEventListenerSafe)((0, y._getUnloadEvent)(), () => {
            ((m = !0), (0, e._notifyVisibilityChanged)(h));
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
    function (w, d, S, D) {
      function k(C) {
        return C instanceof S
          ? C
          : new S(function (U) {
              U(C);
            });
      }
      return new (S || (S = Promise))(function (C, U) {
        function L(B) {
          try {
            x(D.next(B));
          } catch (I) {
            U(I);
          }
        }
        function W(B) {
          try {
            x(D.throw(B));
          } catch (I) {
            U(I);
          }
        }
        function x(B) {
          B.done ? C(B.value) : k(B.value).then(L, W);
        }
        x((D = D.apply(w, d || [])).next());
      });
    };
  (Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.EventLogger = void 0));
  const y = Ie(),
    u = fe(),
    h = j(),
    f = Ce(),
    _ = le(),
    m = Xt(),
    b = Te(),
    v = Q(),
    l = Yt(),
    a = et(),
    r = 100,
    i = 1e4,
    o = 1e3,
    n = 6e5,
    t = 500,
    c = 200,
    g = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let E = class _e {
    static _safeFlushAndForget(d) {
      var S;
      (S = g[d]) === null || S === void 0 || S.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var S;
      (S = g[d]) === null || S === void 0 || S._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, S, D, k) {
      var C, U;
      ((this._sdkKey = d),
        (this._emitter = S),
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
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          h.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (U = k?.loggingBufferMaxSize) !== null && U !== void 0 ? U : r));
      const L = k?.networkConfig;
      this._logEventUrlConfig = new l.UrlConfiguration(
        f.Endpoint._rgstr,
        L?.logEventUrl,
        L?.api,
        L?.logEventFallbackUrls,
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
      var S;
      const D = (S = this._nonExposedChecks[d]) !== null && S !== void 0 ? S : 0;
      this._nonExposedChecks[d] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const S = (0, _._isServerEnv)();
      (S &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        S ||
          (0, a._subscribeToVisiblityChanged)((D) => {
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
        !(Date.now() - this._creationTime > c) &&
          setTimeout(() => _e._safeFlushAndForget(this._sdkKey), c));
    }
    _shouldLogEvent(d) {
      var S;
      if (
        ((S = this._options) === null || S === void 0 ? void 0 : S.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, m._isExposureEvent)(d)) return !0;
      const D = d.user ? d.user : { statsigEnvironment: void 0 },
        k = (0, y._getUserStorageKey)(this._sdkKey, D),
        C = d.metadata ? d.metadata : {},
        U = [
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
        L = this._lastExposureTimeMap[U],
        W = Date.now();
      return L && W - L < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > o && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[U] = W),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var S, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const C =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (S = this._options) === null || S === void 0 ? void 0 : S.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (C ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (h.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (h.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var S;
        const D = yield this._network.post(this._getRequestData(d)),
          k = (S = D?.code) !== null && S !== void 0 ? S : -1;
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
      const S = this._getStorageKey();
      try {
        (0, v._setObjectInStorage)(S, d);
      } catch {
        h.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const S = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const D = (0, v._getObjectFromStorage)(S);
        if (!D) return;
        (d === s.Startup && v.Storage.removeItem(S),
          (yield this._sendEvents(D)) && d === s.GainedFocus && v.Storage.removeItem(S));
      }).catch(() => {
        h.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, u._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const S = {},
        D = this._getCurrentPageUrl();
      D && (S.statsigMetadata = { currentPage: D });
      const k = Object.assign(Object.assign({}, d), S);
      (h.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      var d, S;
      const D =
          (S = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && S !== void 0
            ? S
            : i,
        k = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== k ? clearInterval(k) : _e._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = k;
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
          (e.SDK_VERSION = "3.21.1"));
        let y = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => y,
          add: (u) => {
            y = Object.assign(Object.assign({}, y), u);
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
  ye = {},
  me = {},
  wt;
function tt() {
  if (wt) return me;
  ((wt = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let y = new Date().getTime(),
      u = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (f) => {
        let _ = Math.random() * 16;
        return (
          y > 0
            ? ((_ = (y + _) % 16 | 0), (y = Math.floor(y / 16)))
            : ((_ = (u + _) % 16 | 0), (u = Math.floor(u / 16))),
          (f === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((me.getUUID = e), me);
}
var Dt;
function Re() {
  if (Dt) return ye;
  ((Dt = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.StableID = void 0));
  const e = Ie(),
    y = j(),
    u = le(),
    h = Q(),
    f = tt(),
    _ = {},
    m = {},
    b = {};
  ye.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (b[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((_[n] = t), l(t, n), t)
          : ((t = a(n)), t == null && (t = (0, f.getUUID)()), l(t, n), i(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), l(n, t), i(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      m[n] = t;
    },
    _setDisabled: (n, t) => {
      b[n] = t;
    },
  };
  function v(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function l(n, t) {
    const c = v(t);
    try {
      (0, h._setObjectInStorage)(c, n);
    } catch {
      y.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(n) {
    const t = v(n);
    return (0, h._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!m[n] || (0, u._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const c of t) {
      const [g, s] = c.trim().split("=");
      if (g === o(n)) return decodeURIComponent(s);
    }
    return null;
  }
  function i(n, t) {
    if (!m[t] || !document) return;
    const c = new Date();
    (c.setFullYear(c.getFullYear() + 1),
      (document.cookie = `${o(t)}=${encodeURIComponent(n)}; expires=${c.toUTCString()}; path=/`));
  }
  function o(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return ye;
}
var ne = {},
  kt;
function en() {
  if (kt) return ne;
  ((kt = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._getFullUserHash = ne._normalizeUser = void 0));
  const e = fe(),
    y = j();
  function u(f, _, m) {
    try {
      const b = JSON.parse(JSON.stringify(f));
      return (
        _ != null && _.environment != null
          ? (b.statsigEnvironment = _.environment)
          : m != null && (b.statsigEnvironment = { tier: m }),
        b
      );
    } catch {
      return (y.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  ne._normalizeUser = u;
  function h(f) {
    return f ? (0, e._DJB2Object)(f) : null;
  }
  return ((ne._getFullUserHash = h), ne);
}
var Se = {},
  Ot;
function tn() {
  if (Ot) return Se;
  ((Ot = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se._typedJsonParse = void 0));
  const e = j();
  function y(u, h, f) {
    try {
      const _ = JSON.parse(u);
      if (_ && typeof _ == "object" && h in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${f}`), null);
  }
  return ((Se._typedJsonParse = y), Se);
}
var It;
function un() {
  if (It) return z;
  It = 1;
  var e =
    (z && z.__awaiter) ||
    function (r, i, o, n) {
      function t(c) {
        return c instanceof o
          ? c
          : new o(function (g) {
              g(c);
            });
      }
      return new (o || (o = Promise))(function (c, g) {
        function s(d) {
          try {
            w(n.next(d));
          } catch (S) {
            g(S);
          }
        }
        function E(d) {
          try {
            w(n.throw(d));
          } catch (S) {
            g(S);
          }
        }
        function w(d) {
          d.done ? c(d.value) : t(d.value).then(s, E);
        }
        w((n = n.apply(r, i || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._makeDataAdapterResult = z.DataAdapterCore = void 0));
  const y = j(),
    u = Re(),
    h = en(),
    f = Q(),
    _ = tn(),
    m = 10;
  let b = class {
    constructor(i, o) {
      ((this._adapterName = i),
        (this._cacheSuffix = o),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${o}`),
        (this._inMemoryCache = new l()));
    }
    attach(i, o, n) {
      ((this._sdkKey = i), (this._options = o));
    }
    getDataSync(i) {
      const o = i && (0, h._normalizeUser)(i, this._options),
        n = this._getCacheKey(o),
        t = this._inMemoryCache.get(n, o);
      if (t && this._getIsCacheValueValid(t)) return t;
      const c = this._loadFromCache(n);
      return c && this._getIsCacheValueValid(c)
        ? (this._inMemoryCache.add(n, c), this._inMemoryCache.get(n, o))
        : null;
    }
    setData(i, o) {
      const n = o && (0, h._normalizeUser)(o, this._options),
        t = this._getCacheKey(n);
      this._inMemoryCache.add(t, v("Bootstrap", i, null, n));
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === u.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, o, n) {
      return e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
        const t = i ?? this.getDataSync(o),
          c = [this._fetchAndPrepFromNetwork(t, o, n)];
        return (
          n?.timeoutMs &&
            c.push(
              new Promise((g) => setTimeout(g, n.timeoutMs)).then(
                () => (y.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(c)
        );
      });
    }
    _prefetchDataImpl(i, o) {
      return e(this, void 0, void 0, function* () {
        const n = i && (0, h._normalizeUser)(i, this._options),
          t = this._getCacheKey(n),
          c = yield this._getDataAsyncImpl(null, n, o);
        c &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, c), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(i, o, n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const c = (t = i?.data) !== null && t !== void 0 ? t : null,
          g = i != null && this._isCachedResultValidFor204(i, o),
          s = yield this._fetchFromNetwork(c, o, n, g);
        if (!s) return (y.Log.debug("No response returned for latest value"), null);
        const E = (0, _._typedJsonParse)(s, "has_updates", "Response"),
          w = this._getSdkKey(),
          d = u.StableID.get(w);
        let S = null;
        if (E?.has_updates === !0) S = v("Network", s, d, o);
        else if (c && E?.has_updates === !1) S = v("NetworkNotModified", c, d, o);
        else return null;
        const D = this._getCacheKey(o);
        return (this._inMemoryCache.add(D, S), this._writeToCache(D, S), S);
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
      const t = a(n, m);
      (t && (delete n[t], f.Storage.removeItem(t)),
        (0, f._setObjectInStorage)(this._lastModifiedStoreKey, n));
    }
  };
  z.DataAdapterCore = b;
  function v(r, i, o, n) {
    return {
      source: r,
      data: i,
      receivedAt: Date.now(),
      stableID: o,
      fullUserHash: (0, h._getFullUserHash)(n),
    };
  }
  z._makeDataAdapterResult = v;
  class l {
    constructor() {
      this._data = {};
    }
    get(i, o) {
      var n;
      const t = this._data[i],
        c = t?.stableID,
        g = (n = o?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return g && c && g !== c
        ? (y.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(i, o) {
      const n = a(this._data, m - 1);
      (n && delete this._data[n], (this._data[i] = o));
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function a(r, i) {
    const o = Object.keys(r);
    return o.length <= i
      ? null
      : o.reduce((n, t) => {
          const c = r[n],
            g = r[t];
          return typeof c == "object" && typeof g == "object"
            ? g.receivedAt < c.receivedAt
              ? t
              : n
            : g < c
              ? t
              : n;
        });
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
  let y;
  return (
    (pe.SDKType = {
      _get: (u) => {
        var h;
        return ((h = e[u]) !== null && h !== void 0 ? h : "js-mono") + (y ?? "");
      },
      _setClientType(u, h) {
        e[u] = h;
      },
      _setBindingType(u) {
        (!y || y === "-react") && (y = "-" + u);
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
        var y =
          (be && be.__awaiter) ||
          function (r, i, o, n) {
            function t(c) {
              return c instanceof o
                ? c
                : new o(function (g) {
                    g(c);
                  });
            }
            return new (o || (o = Promise))(function (c, g) {
              function s(d) {
                try {
                  w(n.next(d));
                } catch (S) {
                  g(S);
                }
              }
              function E(d) {
                try {
                  w(n.throw(d));
                } catch (S) {
                  g(S);
                }
              }
              function w(d) {
                d.done ? c(d.value) : t(d.value).then(s, E);
              }
              w((n = n.apply(r, i || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const u = j(),
          h = nt(),
          f = Oe();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let m = class {
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
              l(o).forEach((n) => {
                const t = o[n];
                "$EB" in t ||
                  ((o[n] = (...c) => this._capture(n, () => t.apply(i, c))), (o[n].$EB = !0));
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
            this._lastSeenError || (this._lastSeenError = b(i));
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
              (u.Log.warn(`Caught error in ${i}`, { error: o }),
                y(this, void 0, void 0, function* () {
                  var t, c, g, s, E, w, d;
                  const S = o || Error(_),
                    D = S instanceof Error,
                    k = D ? S.name : "No Name",
                    C = b(S);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
                    !(
                      (c =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || c === void 0
                    ) && c.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: o, tag: i });
                    return;
                  }
                  const U = h.SDKType._get(this._sdkKey),
                    L = f.StatsigMetadataProvider.get(),
                    W = D ? S.stack : v(S),
                    x = Object.assign(
                      { tag: i, exception: k, info: W, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, L), { sdkType: U }),
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
                      "STATSIG-SDK-TYPE": String(U),
                      "STATSIG-SDK-VERSION": String(L.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(x),
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
        e.ErrorBoundary = m;
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
            return _;
          }
        }
        function l(r) {
          const i = new Set();
          let o = Object.getPrototypeOf(r);
          for (; o && o !== Object.prototype; )
            (Object.getOwnPropertyNames(o)
              .filter((n) => typeof o?.[n] == "function")
              .forEach((n) => i.add(n)),
              (o = Object.getPrototypeOf(o)));
          return Array.from(i);
        }
        function a(r) {
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
var Ge = {},
  Mt;
function dn() {
  return (Mt || ((Mt = 1), Object.defineProperty(Ge, "__esModule", { value: !0 })), Ge);
}
var Ve = {},
  Ut;
function _n() {
  return (Ut || ((Ut = 1), Object.defineProperty(Ve, "__esModule", { value: !0 })), Ve);
}
var ze = {},
  Lt;
function fn() {
  return (Lt || ((Lt = 1), Object.defineProperty(ze, "__esModule", { value: !0 })), ze);
}
var re = {},
  Pt;
function rn() {
  if (Pt) return re;
  ((Pt = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.createMemoKey = re.MemoPrefix = void 0),
    (re.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    y = new Set(["userPersistedValues"]);
  function u(h, f, _) {
    let m = `${h}|${f}`;
    if (!_) return m;
    for (const b of Object.keys(_)) {
      if (y.has(b)) return;
      e.has(b) ? (m += `|${b}=true`) : (m += `|${b}=${_[b]}`);
    }
    return m;
  }
  return ((re.createMemoKey = u), re);
}
var ie = {},
  J = {},
  oe = {},
  At;
function gn() {
  if (At) return oe;
  At = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (b, v, l, a) {
      function r(i) {
        return i instanceof l
          ? i
          : new l(function (o) {
              o(i);
            });
      }
      return new (l || (l = Promise))(function (i, o) {
        function n(g) {
          try {
            c(a.next(g));
          } catch (s) {
            o(s);
          }
        }
        function t(g) {
          try {
            c(a.throw(g));
          } catch (s) {
            o(s);
          }
        }
        function c(g) {
          g.done ? i(g.value) : r(g.value).then(n, t);
        }
        c((a = a.apply(b, v || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }), (oe._fetchTxtRecords = void 0));
  const y = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    u = "https://cloudflare-dns.com/dns-query",
    h = ["i", "e", "d"],
    f = 200;
  function _(b) {
    return e(this, void 0, void 0, function* () {
      const v = yield b(u, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: y,
      });
      if (!v.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const l = yield v.arrayBuffer(),
        a = new Uint8Array(l);
      return m(a);
    });
  }
  oe._fetchTxtRecords = _;
  function m(b) {
    const v = b.findIndex(
      (a, r) =>
        r < f && String.fromCharCode(a) === "=" && h.includes(String.fromCharCode(b[r - 1])),
    );
    if (v === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let l = "";
    for (let a = v - 1; a < b.length; a++) l += String.fromCharCode(b[a]);
    return l.split(",");
  }
  return oe;
}
var jt;
function vn() {
  if (jt) return J;
  jt = 1;
  var e =
    (J && J.__awaiter) ||
    function (o, n, t, c) {
      function g(s) {
        return s instanceof t
          ? s
          : new t(function (E) {
              E(s);
            });
      }
      return new (t || (t = Promise))(function (s, E) {
        function w(D) {
          try {
            S(c.next(D));
          } catch (k) {
            E(k);
          }
        }
        function d(D) {
          try {
            S(c.throw(D));
          } catch (k) {
            E(k);
          }
        }
        function S(D) {
          D.done ? s(D.value) : g(D.value).then(w, d);
        }
        S((c = c.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(J, "__esModule", { value: !0 }),
    (J._isDomainFailure = J.NetworkFallbackResolver = void 0));
  const y = gn(),
    u = fe(),
    h = j(),
    f = Q(),
    _ = 10080 * 60 * 1e3,
    m = 14400 * 1e3;
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
      var c;
      const g = (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        a(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(n, t) {
      var c, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (c = r(n)) !== null && c !== void 0 ? c : {}), (this._fallbackInfo = s));
      const E = s[t.endpoint];
      return !E ||
        Date.now() > ((g = E.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== E.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), a(n, this._fallbackInfo), null)
        : E.url
          ? E.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, c, g) {
      return e(this, void 0, void 0, function* () {
        var s, E;
        try {
          if (!v(c, g)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            S = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return S ? (this._updateFallbackInfoWithNewUrl(n, t, S), !0) : !1;
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
    _updateFallbackInfoWithNewUrl(n, t, c) {
      var g, s, E;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: c,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        S = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[d];
      (S && w.previous.push(...S.previous), w.previous.length > 10 && (w.previous = []));
      const D =
        (E = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        E === void 0
          ? void 0
          : E.url;
      (D != null && w.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: w })),
        a(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const c = this._dnsQueryCooldowns[n.endpoint];
        if (c && Date.now() < c) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + m;
        const g = [],
          s = yield (0, y._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          E = i(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const d = w.split("=");
          if (d.length > 1) {
            let S = d[1];
            (S.endsWith("/") && (S = S.slice(0, -1)), g.push(`https://${S}${E}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var c;
      if (t == null) return null;
      const g = new Set((c = n?.previous) !== null && c !== void 0 ? c : []),
        s = n?.url;
      let E = null;
      for (const w of t) {
        const d = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!g.has(w) && d !== s) {
          E = d;
          break;
        }
      }
      return E;
    }
  };
  J.NetworkFallbackResolver = b;
  function v(o, n) {
    var t;
    const c = (t = o?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      c.includes("uncaught exception") ||
      c.includes("failed to fetch") ||
      c.includes("networkerror when attempting to fetch resource")
    );
  }
  J._isDomainFailure = v;
  function l(o) {
    return `statsig.network_fallback.${(0, u._DJB2)(o)}`;
  }
  function a(o, n) {
    const t = l(o);
    if (!n || Object.keys(n).length === 0) {
      f.Storage.removeItem(t);
      return;
    }
    f.Storage.setItem(t, JSON.stringify(n));
  }
  function r(o) {
    const n = l(o),
      t = f.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (h.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function i(o) {
    try {
      return new URL(o).pathname;
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
      setFlags: (y, u) => {
        e[y] = u;
      },
      get: (y, u) => {
        var h, f;
        return (f = (h = e[y]) === null || h === void 0 ? void 0 : h[u]) !== null && f !== void 0
          ? f
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
        const y = H(),
          u = Ie(),
          h = j(),
          f = Q(),
          _ = tt(),
          m = 1800 * 1e3,
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
              v[E] = a(s, E);
            },
          }));
        function l(s) {
          let E = g(s);
          const w = Date.now();
          return (
            E || (E = { sessionID: (0, _.getUUID)(), startTime: w, lastUpdate: w }),
            { data: E, sdkKey: s }
          );
        }
        function a(s, E) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: E };
        }
        function r(s) {
          const E = Date.now(),
            w = s.data,
            d = s.sdkKey;
          if (o(w) || n(w)) {
            ((w.sessionID = (0, _.getUUID)()), (w.startTime = E));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            D && D.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = E),
            c(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const S = E - w.startTime;
          return ((s.idleTimeoutID = i(d, m)), (s.ageTimeoutID = i(d, b - S)), s);
        }
        function i(s, E) {
          return setTimeout(() => {
            var w;
            const d =
              (w = (0, y._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, E);
        }
        function o({ lastUpdate: s }) {
          return Date.now() - s > m;
        }
        function n({ startTime: s }) {
          return Date.now() - s > b;
        }
        function t(s) {
          return `statsig.session_id.${(0, u._getStorageKey)(s)}`;
        }
        function c(s, E) {
          const w = t(E);
          try {
            (0, f._setObjectInStorage)(w, s);
          } catch {
            h.Log.warn("Failed to save SessionID");
          }
        }
        function g(s) {
          const E = t(s);
          return (0, f._getObjectFromStorage)(E);
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
  if (Kt) return ie;
  Kt = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (I, p, O, T) {
      function R(M) {
        return M instanceof O
          ? M
          : new O(function (P) {
              P(M);
            });
      }
      return new (O || (O = Promise))(function (M, P) {
        function ge(N) {
          try {
            $(T.next(N));
          } catch (F) {
            P(F);
          }
        }
        function V(N) {
          try {
            $(T.throw(N));
          } catch (F) {
            P(F);
          }
        }
        function $(N) {
          N.done ? M(N.value) : R(N.value).then(ge, V);
        }
        $((T = T.apply(I, p || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.NetworkCore = void 0), H());
  const y = H(),
    u = Ye(),
    h = j(),
    f = Ce(),
    _ = vn(),
    m = on(),
    b = nt(),
    v = le(),
    l = rt(),
    a = Re(),
    r = sn(),
    i = Oe(),
    o = Te(),
    n = et(),
    t = 1e4,
    c = 500,
    g = 3e4,
    s = 1e3,
    E = 50,
    w = E / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let S = class {
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
        var O, T, R, M;
        if (!D(p) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: ge, retries: V, attempt: $ } = p,
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
          ue = setTimeout(() => {
            K?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          ve = this._getPopulatedURL(p);
        let G = null;
        const an = (0, n._isUnloading)();
        try {
          const ce = {
            method: P,
            body: ge,
            headers: Object.assign({}, p.headers),
            signal: K?.signal,
            priority: p.priority,
            keepalive: an,
          };
          W(p, F);
          const de = this._leakyBucket[N];
          if (
            (de && ((de.lastRequestTime = Date.now()), (this._leakyBucket[N] = de)),
            (G = yield (
              (O = this._netConfig.networkOverrideFunc) !== null && O !== void 0 ? O : fetch
            )(ve, ce)),
            clearTimeout(ue),
            !G.ok)
          ) {
            const ke = yield G.text().catch(() => "No Text"),
              ot = new Error(`NetworkError: ${ve} ${ke}`);
            throw ((ot.name = "NetworkError"), ot);
          }
          const Me = yield G.text();
          return (
            x(p, G, F, Me),
            this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
            { body: Me, code: G.status }
          );
        } catch (ce) {
          const de = U(K, ce),
            it = L(K);
          if (
            (x(p, G, F, "", ce),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              p.sdkKey,
              p.urlConfig,
              de,
              it,
            )) &&
              (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(p.sdkKey, p.urlConfig)),
            !V || F > V || !d.has((T = G?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: ce,
                tag: r.ErrorTag.NetworkError,
                requestArgs: p,
              });
            const ke = `A networking error occurred during ${P} request to ${ve}.`;
            return (
              h.Log.error(ke, de, ce),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(ke),
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
        !O && p?.disableCompression === !0 && (O = o.LogEventCompressionMode.Disabled),
        O || (O = o.LogEventCompressionMode.Enabled),
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
        M = T - R.lastRequestTime,
        P = Math.floor(M * w);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= E
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[p] = R), !1)
      );
    }
    _getPopulatedURL(p) {
      var O;
      const T = (O = p.fallbackUrl) !== null && O !== void 0 ? O : p.urlConfig.getUrl();
      (p.urlConfig.endpoint === f.Endpoint._initialize ||
        p.urlConfig.endpoint === f.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [f.NetworkParam.SdkKey]: p.sdkKey,
            [f.NetworkParam.SdkType]: b.SDKType._get(p.sdkKey),
            [f.NetworkParam.SdkVersion]: i.SDK_VERSION,
            [f.NetworkParam.Time]: String(Date.now()),
            [f.NetworkParam.SessionID]: l.SessionID.get(p.sdkKey),
          },
          p.params,
        ),
        M = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${M ? `?${M}` : ""}`;
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
          (0, y._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((p.body = T.btoa(R).split("").reverse().join("")),
            (p.params = Object.assign(
              Object.assign({}, (O = p.params) !== null && O !== void 0 ? O : {}),
              { [f.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          h.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(p) {
      return e(this, void 0, void 0, function* () {
        var O;
        const T = p.body;
        if (!(typeof T != "string" || !C(p, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              M = new CompressionStream("gzip"),
              P = M.writable.getWriter();
            (P.write(R).catch(h.Log.error), P.close().catch(h.Log.error));
            const ge = M.readable.getReader(),
              V = [];
            let $;
            for (; !($ = yield ge.read()).done; ) V.push($.value);
            const N = V.reduce((ue, ve) => ue + ve.length, 0),
              F = new Uint8Array(N);
            let K = 0;
            for (const ue of V) (F.set(ue, K), (K += ue.length));
            ((p.body = F),
              (p.params = Object.assign(
                Object.assign({}, (O = p.params) !== null && O !== void 0 ? O : {}),
                { [f.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            h.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(p, O) {
      const T = this._fallbackResolver.getActiveFallbackUrl(O.sdkKey, O.urlConfig),
        R = Object.assign(Object.assign({}, O), { method: p, fallbackUrl: T });
      return ("data" in O && k(R, O.data), R);
    }
  };
  ie.NetworkCore = S;
  const D = (I) => (I.sdkKey ? !0 : (h.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (I, p) => {
      const { sdkKey: O, fallbackUrl: T } = I,
        R = a.StableID.get(O),
        M = l.SessionID.get(O),
        P = b.SDKType._get(O);
      I.body = JSON.stringify(
        Object.assign(Object.assign({}, p), {
          statsigMetadata: Object.assign(Object.assign({}, i.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: M,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(I, p) {
    if (
      !I.isCompressable ||
      (0, y._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const O = I.urlConfig.customUrl != null || I.urlConfig.fallbackUrls != null,
      T = m.SDKFlags.get(I.sdkKey, "enable_log_event_compression") === !0;
    switch (p.logEventCompressionMode) {
      case o.LogEventCompressionMode.Disabled:
        return !1;
      case o.LogEventCompressionMode.Enabled:
        return !(O && !T);
      case o.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function U(I, p) {
    return I?.signal.aborted && typeof I.signal.reason == "string"
      ? I.signal.reason
      : typeof p == "string"
        ? p
        : p instanceof Error
          ? `${p.name}: ${p.message}`
          : "Unknown Error";
  }
  function L(I) {
    return (
      (I?.signal.aborted &&
        typeof I.signal.reason == "string" &&
        I.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function W(I, p) {
    I.urlConfig.endpoint === f.Endpoint._initialize &&
      u.Diagnostics._markInitNetworkReqStart(I.sdkKey, { attempt: p });
  }
  function x(I, p, O, T, R) {
    I.urlConfig.endpoint === f.Endpoint._initialize &&
      u.Diagnostics._markInitNetworkReqEnd(I.sdkKey, u.Diagnostics._getDiagnosticsData(p, O, T, R));
  }
  function B(I) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((p) => setTimeout(p, Math.min(c * (I * I), g)));
    });
  }
  return ie;
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
        const y = 2,
          u = 1,
          h = (f, _) => {
            let m = 0;
            const b = Object.keys(f);
            for (let v = 0; v < b.length; v++) {
              const l = b[v],
                a = f[l];
              if (
                ((m += l.length),
                typeof a == "object" && a !== null
                  ? (m += (0, e._fastApproxSizeOf)(a, _) + y)
                  : (m += String(a).length + u),
                m >= _)
              )
                return m;
            }
            return m;
          };
        e._fastApproxSizeOf = h;
      })(He)),
    He
  );
}
var se = {},
  Vt;
function bn() {
  if (Vt) return se;
  Vt = 1;
  var e =
    (se && se.__awaiter) ||
    function (n, t, c, g) {
      function s(E) {
        return E instanceof c
          ? E
          : new c(function (w) {
              w(E);
            });
      }
      return new (c || (c = Promise))(function (E, w) {
        function d(k) {
          try {
            D(g.next(k));
          } catch (C) {
            w(C);
          }
        }
        function S(k) {
          try {
            D(g.throw(k));
          } catch (C) {
            w(C);
          }
        }
        function D(k) {
          k.done ? E(k.value) : s(k.value).then(d, S);
        }
        D((g = g.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }), (se.StatsigClientBase = void 0), H());
  const y = H(),
    u = nn(),
    h = Zt(),
    f = j(),
    _ = rn(),
    m = le(),
    b = rt(),
    v = Re(),
    l = Te(),
    a = Q(),
    r = 3e3;
  let i = class {
    constructor(t, c, g, s) {
      var E, w, d, S;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (f.Log.level = s.logLevel),
        s?.disableStorage && a.Storage._setDisabled(!0),
        s?.initialSessionID && b.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && a.Storage._setProvider(s.storageProvider),
        s?.enableCookies && v.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && v.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (E = s?.overrideAdapter) !== null && E !== void 0 ? E : null),
        (this._logger = new h.EventLogger(t, D, g, s)),
        (this._errorBoundary = new u.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(c),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = c),
        this.dataAdapter.attach(t, s, g),
        (this.storageProvider = a.Storage),
        (S =
          (d = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(w)) === null ||
          S === void 0 ||
          S.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
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
          a.Storage._setDisabled(t.disableStorage)),
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
    on(t, c) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(c));
    }
    off(t, c) {
      if (this._listeners[t]) {
        const g = this._listeners[t].indexOf(c);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, c) {
      ((c.__isInternal = !0), this.on(t, c));
    }
    $emt(t) {
      var c;
      const g = (s) => {
        try {
          s(t);
        } catch (E) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, E);
            return;
          }
          f.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => g(s)),
        (c = this._listeners["*"]) === null || c === void 0 || c.forEach(g));
    }
    _setStatus(t, c) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: c }));
    }
    _enqueueExposure(t, c, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(c);
    }
    _memoize(t, c) {
      return (g, s) => {
        if (this._options.disableEvaluationMemoization) return c(g, s);
        const E = (0, _.createMemoKey)(t, g, s);
        return E
          ? (E in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[E] = c(g, s))),
            this._memoCache[E])
          : c(g, s);
      };
    }
  };
  se.StatsigClientBase = i;
  function o(n, t) {
    var c;
    if ((0, m._isServerEnv)()) return;
    const g = (0, y._getStatsigGlobal)(),
      s = (c = g.instances) !== null && c !== void 0 ? c : {},
      E = t;
    (s[n] != null &&
      f.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = E),
      g.firstInstance || (g.firstInstance = E),
      (g.instances = s),
      (__STATSIG__ = g));
  }
  return se;
}
var De = {},
  zt;
function pn() {
  return (
    zt ||
      ((zt = 1),
      Object.defineProperty(De, "__esModule", { value: !0 }),
      (De.DataAdapterCachePrefix = void 0),
      (De.DataAdapterCachePrefix = "statsig.cached")),
    De
  );
}
var Qe = {},
  Jt;
function En() {
  return (Jt || ((Jt = 1), Object.defineProperty(Qe, "__esModule", { value: !0 })), Qe);
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
    y = Ze();
  function u(l, a, r, i) {
    var o;
    return {
      name: l,
      details: a,
      ruleID: (o = r?.rule_id) !== null && o !== void 0 ? o : "",
      __evaluation: r,
      value: i,
    };
  }
  function h(l, a, r) {
    var i;
    return Object.assign(Object.assign({}, u(l, a, r, r?.value === !0)), {
      idType: (i = r?.id_type) !== null && i !== void 0 ? i : null,
    });
  }
  A._makeFeatureGate = h;
  function f(l, a, r) {
    var i;
    const o = (i = r?.value) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, u(l, a, r, o)), { get: v(l, r?.value) });
  }
  A._makeDynamicConfig = f;
  function _(l, a, r) {
    var i;
    const o = f(l, a, r);
    return Object.assign(Object.assign({}, o), {
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
    });
  }
  A._makeExperiment = _;
  function m(l, a, r, i) {
    var o, n;
    return Object.assign(Object.assign({}, u(l, a, r, void 0)), {
      get: v(l, r?.value, i),
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  A._makeLayer = m;
  function b(l, a, r, i) {
    return Object.assign(Object.assign(Object.assign({}, l), a), { get: v(l.name, r, i) });
  }
  A._mergeOverride = b;
  function v(l, a, r) {
    return (i, o) => {
      var n;
      const t = (n = a?.[i]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (o ?? null)
        : o != null && !(0, y._isTypeMatch)(t, o)
          ? (e.Log.warn(
              `Parameter type mismatch. '${l}.${i}' was found to be type '${typeof t}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            o ?? null)
          : (r?.(i), t);
    };
  }
  return ((A._makeTypedGet = v), A);
}
var Xe = {},
  xt;
function Dn() {
  return (xt || ((xt = 1), Object.defineProperty(Xe, "__esModule", { value: !0 })), Xe);
}
var ae = {},
  Ht;
function kn() {
  if (Ht) return ae;
  ((Ht = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.UPDATE_DETAIL_ERROR_MESSAGES = ae.createUpdateDetails = void 0));
  const e = (y, u, h, f, _, m) => ({
    duration: h,
    source: u,
    success: y,
    error: f,
    sourceUrl: _,
    warnings: m,
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
var Qt;
function On() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        var y =
            (X && X.__createBinding) ||
            (Object.create
              ? function (l, a, r, i) {
                  i === void 0 && (i = r);
                  var o = Object.getOwnPropertyDescriptor(a, r);
                  ((!o || ("get" in o ? !a.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return a[r];
                      },
                    }),
                    Object.defineProperty(l, i, o));
                }
              : function (l, a, r, i) {
                  (i === void 0 && (i = r), (l[i] = a[r]));
                }),
          u =
            (X && X.__exportStar) ||
            function (l, a) {
              for (var r in l)
                r !== "default" && !Object.prototype.hasOwnProperty.call(a, r) && y(a, l, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          H());
        const h = H(),
          f = Ye();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return f.Diagnostics;
          },
        });
        const _ = Zt();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const m = j();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return m.Log;
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
          u(H(), e),
          u(Ie(), e),
          u(ln(), e),
          u(un(), e),
          u(Ye(), e),
          u(cn(), e),
          u(nn(), e),
          u(dn(), e),
          u(_n(), e),
          u(fe(), e),
          u(fn(), e),
          u(j(), e),
          u(rn(), e),
          u(Ce(), e),
          u(hn(), e),
          u(yn(), e),
          u(mn(), e),
          u(le(), e),
          u(nt(), e),
          u(rt(), e),
          u(Sn(), e),
          u(Re(), e),
          u(bn(), e),
          u(sn(), e),
          u(pn(), e),
          u(Xt(), e),
          u(Oe(), e),
          u(Te(), e),
          u(En(), e),
          u(wn(), e),
          u(Dn(), e),
          u(en(), e),
          u(Q(), e),
          u(tn(), e),
          u(Ze(), e),
          u(Yt(), e),
          u(tt(), e),
          u(et(), e),
          u(kn(), e),
          u(on(), e),
          Object.assign((0, h._getStatsigGlobal)(), { Log: m.Log, SDK_VERSION: b.SDK_VERSION }));
      })(X)),
    X
  );
}
var An = On();
export { In as a, st as c, Cn as g, On as r, An as s };
