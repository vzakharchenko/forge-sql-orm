import {
  _ as Ae,
  a as Te,
  b as an,
  c as Pe,
  d as Ce,
  e as re,
  r as v,
  R as H,
  f as X,
  g as D,
  h as he,
  i as ne,
  j as Ue,
  k as se,
  l as _e,
  m as on,
  n as Oe,
  T as ln,
  o as or,
  p as dn,
  w as ir,
  q as lr,
  s as un,
} from "./index-DFvn4NKY.js";
import { a as fe } from "./react-dom-vendor-CLnqZT57.js";
import "./client-core-vendor-CJaY3VOv.js";
import "./lodash-vendor-C90NrQdG.js";
function cn(e, t, r) {
  return ((t = re(t)), Ce(e, dr() ? Reflect.construct(t, [], re(e).constructor) : t.apply(e, r)));
}
function dr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dr = function () {
    return !!e;
  })();
}
var sn = "Invariant failed",
  ot = (function (e) {
    function t(r) {
      var n;
      return (Pe(this, t), (n = cn(this, t)), (n.message = r), n);
    }
    return (
      Ae(t, e),
      Te(t, [
        {
          key: "toString",
          value: function () {
            return this.message;
          },
        },
      ])
    );
  })(an(Error));
function M(e, t) {
  if (!e) throw new ot(sn);
}
var ur = v.createContext(null);
function oe() {
  var e = v.useContext(ur);
  return (M(e !== null), e);
}
function gn(e) {
  var t = e.children,
    r = e.contextId,
    n = e.getDragState,
    a = e.startKeyboardDrag,
    o = e.droppableRegistry,
    i = v.useMemo(
      function () {
        return { contextId: r, getDragState: n, startKeyboardDrag: a, droppableRegistry: o };
      },
      [r, n, a, o],
    );
  return H.createElement(ur.Provider, { value: i }, t);
}
function pn(e) {
  var t = window.getComputedStyle(e),
    r = t.margin,
    n = e.getBoundingClientRect();
  return { margin: r, rect: n };
}
function it() {
  var e = oe(),
    t = e.getDragState,
    r = t();
  return r.isDragging ? r.draggableDimensions : null;
}
var yt = function () {};
function fn() {
  var e = yt,
    t = function (a) {
      e = a;
    },
    r = function () {
      (e(), (e = yt));
    };
  return { setCleanupFn: t, runCleanupFn: r };
}
function cr() {
  var e = v.useState(fn),
    t = X(e, 1),
    r = t[0];
  return (
    v.useEffect(
      function () {
        return r.runCleanupFn;
      },
      [r.runCleanupFn],
    ),
    r
  );
}
var B = {
    draggable: { contextId: "data-rbd-draggable-context-id", id: "data-rbd-draggable-id" },
    dragHandle: {
      contextId: "data-rbd-drag-handle-context-id",
      draggableId: "data-rbd-drag-handle-draggable-id",
    },
    droppable: { contextId: "data-rbd-droppable-context-id", id: "data-rbd-droppable-id" },
    placeholder: { contextId: "data-rbd-placeholder-context-id" },
  },
  Z = {
    draggable: {
      droppableId: "data-rbd-draggable-droppable-id",
      index: "data-rbd-draggable-index",
    },
    dropIndicator: "data-rbd-drop-indicator",
    droppable: { direction: "data-rbd-droppable-direction", type: "data-rbd-droppable-type" },
  };
function ae(e, t) {
  var r = e.getAttribute(t);
  return (M(r !== null), r);
}
function sr(e, t) {
  for (var r = 0, n = Object.entries(t); r < n.length; r++) {
    var a = X(n[r], 2),
      o = a[0],
      i = a[1];
    e.setAttribute(o, i);
  }
  return function () {
    for (var l = 0, d = Object.keys(t); l < d.length; l++) {
      var u = d[l];
      e.removeAttribute(u);
    }
  };
}
function lt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  var n = t.map(function (a) {
    var o = a.attribute,
      i = a.value;
    return i ? "[".concat(o, '="').concat(CSS.escape(i), '"]') : "[".concat(o, "]");
  });
  return n.join("");
}
function Le() {
  var e = lt.apply(void 0, arguments);
  return document.querySelector(e);
}
function gr() {
  var e = lt.apply(void 0, arguments);
  return Array.from(document.querySelectorAll(e));
}
function pr() {
  var e = Le.apply(void 0, arguments);
  return (M(e, "There is a matching HTMLElement for selector " + lt.apply(void 0, arguments)), e);
}
function dt(e) {
  var t = e.contextId,
    r = e.draggableId;
  return Le(
    { attribute: B.dragHandle.contextId, value: t },
    { attribute: B.dragHandle.draggableId, value: r },
  );
}
function fr(e) {
  var t = getComputedStyle(e),
    r = t.position;
  if (r === "absolute") return e;
  var n = e.parentElement;
  return n instanceof HTMLElement ? fr(n) : null;
}
function vr(e) {
  var t,
    r = e.element,
    n = e.mode;
  return n === "standard" ? r : (t = fr(r)) !== null && t !== void 0 ? t : r;
}
function br() {
  window.dispatchEvent(new DragEvent("dragend"));
}
function Dt(e, t) {
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
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vn = {
    top: function (t, r) {
      return Math.abs(r.y - t.top);
    },
    right: function (t, r) {
      return Math.abs(t.right - r.x);
    },
    bottom: function (t, r) {
      return Math.abs(t.bottom - r.y);
    },
    left: function (t, r) {
      return Math.abs(r.x - t.left);
    },
  },
  mr = Symbol("closestEdge");
function yr(e, t) {
  var r,
    n,
    a = t.element,
    o = t.input,
    i = t.allowedEdges,
    l = { x: o.clientX, y: o.clientY },
    d = a.getBoundingClientRect(),
    u = i.map(function (s) {
      return { edge: s, value: vn[s](d, l) };
    }),
    c =
      (r =
        (n = u.sort(function (s, p) {
          return s.value - p.value;
        })[0]) === null || n === void 0
          ? void 0
          : n.edge) !== null && r !== void 0
        ? r
        : null;
  return ht(ht({}, e), {}, D({}, mr, c));
}
function Dr(e) {
  var t;
  return (t = e[mr]) !== null && t !== void 0 ? t : null;
}
var hr = Symbol("DraggableData");
function ve(e) {
  return e[hr] === !0;
}
function Ir(e) {
  var t = e.draggableId,
    r = e.droppableId,
    n = e.getIndex,
    a = e.contextId,
    o = e.type;
  return v.useMemo(
    function () {
      return D(
        D(
          D(D(D(D({}, hr, !0), "draggableId", t), "droppableId", r), "getIndex", n),
          "contextId",
          a,
        ),
        "type",
        o,
      );
    },
    [t, r, n, a, o],
  );
}
var xr = Symbol("DroppableData");
function Sr(e) {
  return e[xr] === !0;
}
function bn(e) {
  var t = e.contextId,
    r = e.droppableId,
    n = e.getIsDropDisabled;
  return v.useMemo(
    function () {
      return D(D(D(D({}, xr, !0), "contextId", t), "droppableId", r), "getIsDropDisabled", n);
    },
    [t, r, n],
  );
}
function mn(e) {
  var t = e.droppableId,
    r = e.contextId;
  return gr(
    { attribute: B.draggable.contextId, value: r },
    { attribute: Z.draggable.droppableId, value: t },
  );
}
var yn = ["droppableId", "getIndex"],
  Dn = ["contextId", "droppableId"];
function hn(e) {
  var t = e.droppableId,
    r = e.getIndex,
    n = he(e, yn),
    a = r(),
    o = Dr(n),
    i = o === "bottom" || o === "right";
  return (i && (a += 1), { droppableId: t, index: a });
}
function In(e) {
  var t = e.contextId,
    r = e.droppableId,
    n = he(e, Dn),
    a = mn({ contextId: t, droppableId: r });
  if (a.length === 0) return { droppableId: r, index: 0 };
  var o = Dr(n),
    i = o === "top" || o === "left";
  if (i) return { droppableId: r, index: 0 };
  var l = a.reduce(function (d, u) {
    var c = parseInt(ae(u, Z.draggable.index), 10);
    return Math.max(d, c);
  }, 0);
  return { droppableId: r, index: l + 1 };
}
function xn(e) {
  var t = e.dropTargets;
  if (t.length === 0) return null;
  var r = t[0];
  return ve(r.data) ? hn(r.data) : Sr(r.data) ? In(r.data) : null;
}
function De(e, t) {
  return !(e?.droppableId !== t?.droppableId || e?.index !== t?.index);
}
function Sn() {
  var e = new Map(),
    t = function (i) {
      var l,
        d = i.droppableId;
      return (l = e.get(d)) !== null && l !== void 0 ? l : null;
    },
    r = null,
    n = function (i) {
      r = i;
    },
    a = function (i) {
      var l;
      return (
        e.set(i.droppableId, i),
        (l = r) === null || l === void 0 || l(i),
        function () {
          e.delete(i.droppableId);
        }
      );
    };
  return { getEntry: t, register: a, setUpdateListener: n };
}
function wn() {
  var e = v.useState(Sn),
    t = X(e, 1),
    r = t[0];
  return r;
}
function ge() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return function () {
    t.forEach(function (a) {
      return a();
    });
  };
}
var wr = "data-pdnd-honey-pot";
function Or(e) {
  return e instanceof Element && e.hasAttribute(wr);
}
function $e(e) {
  var t = document.elementsFromPoint(e.x, e.y),
    r = X(t, 2),
    n = r[0],
    a = r[1];
  return n ? (Or(n) ? (a ?? null) : n) : null;
}
var On = 2147483647;
function It(e, t) {
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
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? It(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : It(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ee = 2,
  St = Ee / 2;
function En(e) {
  return { x: Math.floor(e.x), y: Math.floor(e.y) };
}
function Rn(e) {
  return { x: e.x - St, y: e.y - St };
}
function An(e) {
  return { x: Math.max(e.x, 0), y: Math.max(e.y, 0) };
}
function Tn(e) {
  return { x: Math.min(e.x, window.innerWidth - Ee), y: Math.min(e.y, window.innerHeight - Ee) };
}
function wt(e) {
  var t = e.client,
    r = Tn(An(Rn(En(t))));
  return DOMRect.fromRect({ x: r.x, y: r.y, width: Ee, height: Ee });
}
function Ot(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px"),
  };
}
function Pn(e) {
  var t = e.client,
    r = e.clientRect;
  return t.x >= r.x && t.x <= r.x + r.width && t.y >= r.y && t.y <= r.y + r.height;
}
function Cn(e) {
  var t = e.initial,
    r = document.createElement("div");
  r.setAttribute(wr, "true");
  var n = wt({ client: t });
  (Object.assign(
    r.style,
    xt(
      xt(
        {
          backgroundColor: "transparent",
          position: "fixed",
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
        Ot({ clientRect: n }),
      ),
      {},
      { pointerEvents: "auto", zIndex: On },
    ),
  ),
    document.body.appendChild(r));
  var a = ne.bind(window, {
    type: "pointermove",
    listener: function (i) {
      var l = { x: i.clientX, y: i.clientY };
      ((n = wt({ client: l })), Object.assign(r.style, Ot({ clientRect: n })));
    },
    options: { capture: !0 },
  });
  return function (i) {
    var l = i.current;
    if ((a(), Pn({ client: l, clientRect: n }))) {
      r.remove();
      return;
    }
    function d() {
      (u(), r.remove());
    }
    var u = ne.bindAll(
      window,
      [
        { type: "pointerdown", listener: d },
        { type: "pointermove", listener: d },
        { type: "focusin", listener: d },
        { type: "focusout", listener: d },
        { type: "dragstart", listener: d },
        { type: "dragenter", listener: d },
        { type: "dragover", listener: d },
      ],
      { capture: !0 },
    );
  };
}
function Ln() {
  var e = null;
  function t() {
    return (
      (e = null),
      ne.bind(window, {
        type: "pointermove",
        listener: function (a) {
          e = { x: a.clientX, y: a.clientY };
        },
        options: { capture: !0 },
      })
    );
  }
  function r() {
    var n = null;
    return function (o) {
      var i = o.eventName,
        l = o.payload;
      if (i === "onDragStart") {
        var d = l.location.initial.input,
          u = e ?? { x: d.clientX, y: d.clientY };
        n = Cn({ initial: u });
      }
      if (i === "onDrop") {
        var c,
          s = l.location.current.input;
        ((c = n) === null || c === void 0 || c({ current: { x: s.clientX, y: s.clientY } }),
          (n = null),
          (e = null));
      }
    };
  }
  return { bindEvents: t, getOnPostDispatch: r };
}
function Ie(e) {
  var t = null;
  return function () {
    if (!t) {
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      var i = e.apply(this, a);
      t = { result: i };
    }
    return t.result;
  };
}
var jn = Ie(function () {
    return navigator.userAgent.includes("Firefox");
  }),
  ut = Ie(function () {
    var t = navigator,
      r = t.userAgent;
    return r.includes("AppleWebKit") && !r.includes("Chrome");
  }),
  et = { isLeavingWindow: Symbol("leaving"), isEnteringWindow: Symbol("entering") };
function Fn(e) {
  var t = e.dragLeave;
  return ut() ? t.hasOwnProperty(et.isLeavingWindow) : !1;
}
(function () {
  if (typeof window > "u" || !ut()) return;
  function t() {
    return { enterCount: 0, isOverWindow: !1 };
  }
  var r = t();
  function n() {
    r = t();
  }
  ne.bindAll(
    window,
    [
      {
        type: "dragstart",
        listener: function () {
          ((r.enterCount = 0), (r.isOverWindow = !0));
        },
      },
      { type: "drop", listener: n },
      { type: "dragend", listener: n },
      {
        type: "dragenter",
        listener: function (o) {
          (!r.isOverWindow && r.enterCount === 0 && (o[et.isEnteringWindow] = !0),
            (r.isOverWindow = !0),
            r.enterCount++);
        },
      },
      {
        type: "dragleave",
        listener: function (o) {
          (r.enterCount--,
            r.isOverWindow &&
              r.enterCount === 0 &&
              ((o[et.isLeavingWindow] = !0), (r.isOverWindow = !1)));
        },
      },
    ],
    { capture: !0 },
  );
})();
function kn(e) {
  return "nodeName" in e;
}
function Mn(e) {
  return kn(e) && e.ownerDocument !== document;
}
function Hn(e) {
  var t = e.dragLeave,
    r = t.type,
    n = t.relatedTarget;
  return r !== "dragleave"
    ? !1
    : ut()
      ? Fn({ dragLeave: t })
      : n == null
        ? !0
        : jn()
          ? Mn(n)
          : n instanceof HTMLIFrameElement;
}
function Er(e) {
  var t = e.onDragEnd;
  return [
    {
      type: "pointermove",
      listener: (function () {
        var r = 0;
        return function () {
          if (r < 20) {
            r++;
            return;
          }
          t();
        };
      })(),
    },
    { type: "pointerdown", listener: t },
  ];
}
function we(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY,
  };
}
var Un = function (t) {
    var r = [],
      n = null,
      a = function () {
        for (var i = arguments.length, l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d];
        ((r = l),
          !n &&
            (n = requestAnimationFrame(function () {
              ((n = null), t.apply(void 0, r));
            })));
      };
    return (
      (a.cancel = function () {
        n && (cancelAnimationFrame(n), (n = null));
      }),
      a
    );
  },
  Ne = Un(function (e) {
    return e();
  }),
  je = (function () {
    var e = null;
    function t(n) {
      var a = requestAnimationFrame(function () {
        ((e = null), n());
      });
      e = { frameId: a, fn: n };
    }
    function r() {
      e && (cancelAnimationFrame(e.frameId), e.fn(), (e = null));
    }
    return { schedule: t, flush: r };
  })();
function $n(e) {
  var t = e.source,
    r = e.initial,
    n = e.dispatchEvent,
    a = { dropTargets: [] };
  function o(l) {
    (n(l), (a = { dropTargets: l.payload.location.current.dropTargets }));
  }
  var i = {
    start: function (d) {
      var u = d.nativeSetDragImage,
        c = { current: r, previous: a, initial: r };
      (o({
        eventName: "onGenerateDragPreview",
        payload: { source: t, location: c, nativeSetDragImage: u },
      }),
        je.schedule(function () {
          o({ eventName: "onDragStart", payload: { source: t, location: c } });
        }));
    },
    dragUpdate: function (d) {
      var u = d.current;
      (je.flush(),
        Ne.cancel(),
        o({
          eventName: "onDropTargetChange",
          payload: { source: t, location: { initial: r, previous: a, current: u } },
        }));
    },
    drag: function (d) {
      var u = d.current;
      Ne(function () {
        je.flush();
        var c = { initial: r, previous: a, current: u };
        o({ eventName: "onDrag", payload: { source: t, location: c } });
      });
    },
    drop: function (d) {
      var u = d.current,
        c = d.updatedSourcePayload;
      (je.flush(),
        Ne.cancel(),
        o({
          eventName: "onDrop",
          payload: { source: c ?? t, location: { current: u, previous: a, initial: r } },
        }));
    },
  };
  return i;
}
var tt = { isActive: !1 };
function Rr() {
  return !tt.isActive;
}
function Bn(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Kn(e) {
  var t = e.current,
    r = e.next;
  if (t.length !== r.length) return !0;
  for (var n = 0; n < t.length; n++) if (t[n].element !== r[n].element) return !0;
  return !1;
}
function Wn(e) {
  var t = e.event,
    r = e.dragType,
    n = e.getDropTargetsOver,
    a = e.dispatchEvent;
  if (!Rr()) return;
  var o = Nn({ event: t, dragType: r, getDropTargetsOver: n });
  tt.isActive = !0;
  var i = { current: o };
  Ye({ event: t, current: o.dropTargets });
  var l = $n({ source: r.payload, dispatchEvent: a, initial: o });
  function d(g) {
    var f = Kn({ current: i.current.dropTargets, next: g.dropTargets });
    ((i.current = g), f && l.dragUpdate({ current: i.current }));
  }
  function u(g) {
    var f = we(g),
      m = Or(g.target) ? $e({ x: f.clientX, y: f.clientY }) : g.target,
      y = n({ target: m, input: f, source: r.payload, current: i.current.dropTargets });
    (y.length && (g.preventDefault(), Ye({ event: g, current: y })),
      d({ dropTargets: y, input: f }));
  }
  function c() {
    (i.current.dropTargets.length && d({ dropTargets: [], input: i.current.input }),
      l.drop({ current: i.current, updatedSourcePayload: null }),
      s());
  }
  function s() {
    ((tt.isActive = !1), p());
  }
  var p = ne.bindAll(
    window,
    [
      {
        type: "dragover",
        listener: function (f) {
          (u(f), l.drag({ current: i.current }));
        },
      },
      { type: "dragenter", listener: u },
      {
        type: "dragleave",
        listener: function (f) {
          Hn({ dragLeave: f }) &&
            (d({ input: i.current.input, dropTargets: [] }), r.startedFrom === "external" && c());
        },
      },
      {
        type: "drop",
        listener: function (f) {
          if (
            ((i.current = { dropTargets: i.current.dropTargets, input: we(f) }),
            !i.current.dropTargets.length)
          ) {
            c();
            return;
          }
          (f.preventDefault(),
            Ye({ event: f, current: i.current.dropTargets }),
            l.drop({
              current: i.current,
              updatedSourcePayload: r.type === "external" ? r.getDropPayload(f) : null,
            }),
            s());
        },
      },
      {
        type: "dragend",
        listener: function (f) {
          ((i.current = { dropTargets: i.current.dropTargets, input: we(f) }), c());
        },
      },
    ].concat(Ue(Er({ onDragEnd: c }))),
    { capture: !0 },
  );
  l.start({ nativeSetDragImage: Bn(t) });
}
function Ye(e) {
  var t,
    r = e.event,
    n = e.current,
    a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function Nn(e) {
  var t = e.event,
    r = e.dragType,
    n = e.getDropTargetsOver,
    a = we(t);
  if (r.startedFrom === "external") return { input: a, dropTargets: [] };
  var o = n({ input: a, source: r.payload, target: t.target, current: [] });
  return { input: a, dropTargets: o };
}
var Et = { canStart: Rr, start: Wn },
  rt = new Map();
function Yn(e) {
  var t = e.typeKey,
    r = e.mount,
    n = rt.get(t);
  if (n) return (n.usageCount++, n);
  var a = { typeKey: t, unmount: r(), usageCount: 1 };
  return (rt.set(t, a), a);
}
function zn(e) {
  var t = Yn(e);
  return function () {
    (t.usageCount--, !(t.usageCount > 0) && (t.unmount(), rt.delete(e.typeKey)));
  };
}
function Ar(e, t) {
  var r = t.attribute,
    n = t.value;
  return (
    e.setAttribute(r, n),
    function () {
      return e.removeAttribute(r);
    }
  );
}
function Rt(e, t) {
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
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ze(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Gn(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((l = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Gn(e, t) {
  if (e) {
    if (typeof e == "string") return At(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? At(e, t)
          : void 0
    );
  }
}
function At(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ge(e) {
  return e.slice(0).reverse();
}
function Vn(e) {
  var t = e.typeKey,
    r = e.defaultDropEffect,
    n = new WeakMap(),
    a = "data-drop-target-for-".concat(t),
    o = "[".concat(a, "]");
  function i(g) {
    return (
      n.set(g.element, g),
      function () {
        return n.delete(g.element);
      }
    );
  }
  function l(g) {
    var f = ge(Ar(g.element, { attribute: a, value: "true" }), i(g));
    return Ie(f);
  }
  function d(g) {
    var f,
      m,
      y,
      b,
      x = g.source,
      I = g.target,
      S = g.input,
      w = g.result,
      h = w === void 0 ? [] : w;
    if (I == null) return h;
    if (!(I instanceof Element))
      return I instanceof Node ? d({ source: x, target: I.parentElement, input: S, result: h }) : h;
    var R = I.closest(o);
    if (R == null) return h;
    var O = n.get(R);
    if (O == null) return h;
    var P = { input: S, source: x, element: O.element };
    if (O.canDrop && !O.canDrop(P))
      return d({ source: x, target: O.element.parentElement, input: S, result: h });
    var E =
        (f = (m = O.getData) === null || m === void 0 ? void 0 : m.call(O, P)) !== null &&
        f !== void 0
          ? f
          : {},
      j =
        (y = (b = O.getDropEffect) === null || b === void 0 ? void 0 : b.call(O, P)) !== null &&
        y !== void 0
          ? y
          : r,
      N = { data: E, element: O.element, dropEffect: j, isActiveDueToStickiness: !1 };
    return d({
      source: x,
      target: O.element.parentElement,
      input: S,
      result: [].concat(Ue(h), [N]),
    });
  }
  function u(g) {
    var f = g.eventName,
      m = g.payload,
      y = ze(m.location.current.dropTargets),
      b;
    try {
      for (y.s(); !(b = y.n()).done; ) {
        var x,
          I = b.value,
          S = n.get(I.element),
          w = ie(ie({}, m), {}, { self: I });
        S == null || (x = S[f]) === null || x === void 0 || x.call(S, w);
      }
    } catch (h) {
      y.e(h);
    } finally {
      y.f();
    }
  }
  var c = {
    onGenerateDragPreview: u,
    onDrag: u,
    onDragStart: u,
    onDrop: u,
    onDropTargetChange: function (f) {
      var m = f.payload,
        y = new Set(
          m.location.current.dropTargets.map(function (K) {
            return K.element;
          }),
        ),
        b = new Set(),
        x = ze(m.location.previous.dropTargets),
        I;
      try {
        for (x.s(); !(I = x.n()).done; ) {
          var S,
            w = I.value;
          b.add(w.element);
          var h = n.get(w.element),
            R = y.has(w.element),
            O = ie(ie({}, m), {}, { self: w });
          if (
            (h == null || (S = h.onDropTargetChange) === null || S === void 0 || S.call(h, O), !R)
          ) {
            var P;
            h == null || (P = h.onDragLeave) === null || P === void 0 || P.call(h, O);
          }
        }
      } catch (K) {
        x.e(K);
      } finally {
        x.f();
      }
      var E = ze(m.location.current.dropTargets),
        j;
      try {
        for (E.s(); !(j = E.n()).done; ) {
          var N,
            A,
            C = j.value;
          if (!b.has(C.element)) {
            var T = ie(ie({}, m), {}, { self: C }),
              L = n.get(C.element);
            (L == null || (N = L.onDropTargetChange) === null || N === void 0 || N.call(L, T),
              L == null || (A = L.onDragEnter) === null || A === void 0 || A.call(L, T));
          }
        }
      } catch (K) {
        E.e(K);
      } finally {
        E.f();
      }
    },
  };
  function s(g) {
    c[g.eventName](g);
  }
  function p(g) {
    var f = g.source,
      m = g.target,
      y = g.input,
      b = g.current,
      x = d({ source: f, target: m, input: y });
    if (x.length >= b.length) return x;
    for (var I = Ge(b), S = Ge(x), w = [], h = 0; h < I.length; h++) {
      var R,
        O = I[h],
        P = S[h];
      if (P != null) {
        w.push(P);
        continue;
      }
      var E = w[h - 1],
        j = I[h - 1];
      if (E?.element !== j?.element) break;
      var N = n.get(O.element);
      if (!N) break;
      var A = { input: y, source: f, element: N.element };
      if (
        (N.canDrop && !N.canDrop(A)) ||
        !((R = N.getIsSticky) !== null && R !== void 0 && R.call(N, A))
      )
        break;
      w.push(ie(ie({}, O), {}, { isActiveDueToStickiness: !0 }));
    }
    return Ge(w);
  }
  return { dropTargetForConsumers: l, getIsOver: p, dispatchEvent: s };
}
function Xn(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = qn(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((l = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function qn(e, t) {
  if (e) {
    if (typeof e == "string") return Tt(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Tt(e, t)
          : void 0
    );
  }
}
function Tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pt(e, t) {
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
function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zn() {
  var e = new Set(),
    t = null;
  function r(o) {
    t && (!o.canMonitor || o.canMonitor(t.canMonitorArgs)) && t.active.add(o);
  }
  function n(o) {
    var i = Qn({}, o);
    (e.add(i), r(i));
    function l() {
      (e.delete(i), t && t.active.delete(i));
    }
    return Ie(l);
  }
  function a(o) {
    var i = o.eventName,
      l = o.payload;
    if (i === "onGenerateDragPreview") {
      t = { canMonitorArgs: { initial: l.location.initial, source: l.source }, active: new Set() };
      var d = Xn(e),
        u;
      try {
        for (d.s(); !(u = d.n()).done; ) {
          var c = u.value;
          r(c);
        }
      } catch (y) {
        d.e(y);
      } finally {
        d.f();
      }
    }
    if (t) {
      for (var s = Array.from(t.active), p = 0, g = s; p < g.length; p++) {
        var f = g[p];
        if (t.active.has(f)) {
          var m;
          (m = f[i]) === null || m === void 0 || m.call(f, l);
        }
      }
      i === "onDrop" && (t.active.clear(), (t = null));
    }
  }
  return { dispatchEvent: a, monitorForConsumers: n };
}
function Jn(e) {
  var t = e.typeKey,
    r = e.mount,
    n = e.dispatchEventToSource,
    a = e.onPostDispatch,
    o = e.defaultDropEffect,
    i = Zn(),
    l = Vn({ typeKey: t, defaultDropEffect: o });
  function d(s) {
    (n?.(s), l.dispatchEvent(s), i.dispatchEvent(s), a?.(s));
  }
  function u(s) {
    var p = s.event,
      g = s.dragType;
    Et.start({ event: p, dragType: g, getDropTargetsOver: l.getIsOver, dispatchEvent: d });
  }
  function c() {
    function s() {
      var p = { canStart: Et.canStart, start: u };
      return r(p);
    }
    return zn({ typeKey: t, mount: s });
  }
  return { registerUsage: c, dropTarget: l.dropTargetForConsumers, monitor: i.monitorForConsumers };
}
var _n = Ie(function () {
    return navigator.userAgent.toLocaleLowerCase().includes("android");
  }),
  ea = "pdnd:android-fallback",
  Ct = "text/plain",
  ta = "text/uri-list",
  ra = "application/vnd.pdnd",
  ke = new WeakMap();
function na(e) {
  return (
    ke.set(e.element, e),
    function () {
      ke.delete(e.element);
    }
  );
}
var Lt = Ln(),
  ct = Jn({
    typeKey: "element",
    defaultDropEffect: "move",
    mount: function (t) {
      return ge(
        Lt.bindEvents(),
        ne.bind(document, {
          type: "dragstart",
          listener: function (n) {
            var a, o, i, l, d, u;
            if (t.canStart(n) && !n.defaultPrevented && n.dataTransfer) {
              var c = n.target;
              if (c instanceof HTMLElement) {
                var s = ke.get(c);
                if (s) {
                  var p = we(n),
                    g = {
                      element: s.element,
                      dragHandle: (a = s.dragHandle) !== null && a !== void 0 ? a : null,
                      input: p,
                    };
                  if (s.canDrag && !s.canDrag(g)) {
                    n.preventDefault();
                    return;
                  }
                  if (s.dragHandle) {
                    var f = $e({ x: p.clientX, y: p.clientY });
                    if (!s.dragHandle.contains(f)) {
                      n.preventDefault();
                      return;
                    }
                  }
                  var m =
                    (o =
                      (i = s.getInitialDataForExternal) === null || i === void 0
                        ? void 0
                        : i.call(s, g)) !== null && o !== void 0
                      ? o
                      : null;
                  if (m)
                    for (var y = 0, b = Object.entries(m); y < b.length; y++) {
                      var x = X(b[y], 2),
                        I = x[0],
                        S = x[1];
                      n.dataTransfer.setData(I, S ?? "");
                    }
                  (_n() &&
                    !n.dataTransfer.types.includes(Ct) &&
                    !n.dataTransfer.types.includes(ta) &&
                    n.dataTransfer.setData(Ct, ea),
                    n.dataTransfer.setData(ra, ""));
                  var w = {
                      element: s.element,
                      dragHandle: (l = s.dragHandle) !== null && l !== void 0 ? l : null,
                      data:
                        (d =
                          (u = s.getInitialData) === null || u === void 0
                            ? void 0
                            : u.call(s, g)) !== null && d !== void 0
                          ? d
                          : {},
                    },
                    h = { type: "element", payload: w, startedFrom: "internal" };
                  t.start({ event: n, dragType: h });
                }
              }
            }
          },
        }),
      );
    },
    dispatchEventToSource: function (t) {
      var r,
        n,
        a = t.eventName,
        o = t.payload;
      (r = ke.get(o.source.element)) === null ||
        r === void 0 ||
        (n = r[a]) === null ||
        n === void 0 ||
        n.call(r, o);
    },
    onPostDispatch: Lt.getOnPostDispatch(),
  }),
  Tr = ct.dropTarget,
  Be = ct.monitor;
function aa(e) {
  var t = ge(ct.registerUsage(), na(e), Ar(e.element, { attribute: "draggable", value: "true" }));
  return Ie(t);
}
function oa(e, t, r) {
  return (
    (t = re(t)),
    Ce(e, Pr() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function Pr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pr = function () {
    return !!e;
  })();
}
function ia(e) {
  var t = e.children,
    r = e.dragController,
    n = v.useRef(!1),
    a = v.useCallback(
      function (o) {
        var i = r.getDragState();
        if (i.isDragging) {
          (i.mode === "FLUID" && br(), i.mode === "SNAP" && r.stopDrag({ reason: "CANCEL" }));
          var l = o.error;
          l instanceof ot && o.preventDefault();
        }
      },
      [r],
    );
  return (
    v.useEffect(
      function () {
        return ge(
          Be({
            onDragStart: function () {
              n.current = !0;
            },
            onDrop: function () {
              n.current = !1;
            },
          }),
          ne.bind(window, { type: "error", listener: a }),
        );
      },
      [a],
    ),
    t
  );
}
var la = (function (e) {
  function t() {
    return (Pe(this, t), oa(this, t, arguments));
  }
  return (
    Ae(t, e),
    Te(
      t,
      [
        {
          key: "componentDidCatch",
          value: function (n) {
            if (!(n instanceof ot)) throw n;
          },
        },
        {
          key: "render",
          value: function () {
            return H.createElement(
              ia,
              { contextId: this.props.contextId, dragController: this.props.dragController },
              this.props.children,
            );
          },
        },
      ],
      [{ key: "getDerivedStateFromError", value: function () {} }],
    )
  );
})(H.Component);
function jt(e, t) {
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
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Re(e) {
  var t = e.start,
    r = e.target;
  if (r === null) return null;
  var n = t.droppableId === r.droppableId,
    a = r.index > t.index,
    o = n && a;
  return o ? Ve(Ve({}, r), {}, { index: r.index - 1 }) : Ve({}, r);
}
function st(e) {
  return "rbd-lift-instruction-".concat(e);
}
function da(e) {
  var t = e.contextId,
    r = e.text;
  v.useEffect(
    function () {
      var n = st(t),
        a = document.createElement("div");
      return (
        (a.id = n),
        (a.textContent = r),
        Object.assign(a.style, { display: "none" }),
        document.body.appendChild(a),
        function () {
          a.remove();
        }
      );
    },
    [t, r],
  );
}
function gt(e) {
  var t = getComputedStyle(e),
    r = t.overflowX,
    n = t.overflowY;
  if (r === "scroll" || r === "auto" || n === "scroll" || n === "auto") return e;
  var a = e.parentElement;
  return a === null ? null : gt(a);
}
function ua(e) {
  var t = e.contextId,
    r = e.type;
  return gr(
    { attribute: B.droppable.contextId, value: t },
    { attribute: Z.droppable.type, value: r },
  );
}
function Ft(e) {
  var t = e.droppableId,
    r = e.type,
    n = e.isMovingForward,
    a = e.contextId,
    o = e.droppableRegistry,
    i = ua({ contextId: a, type: r }),
    l = i.findIndex(function (c) {
      return ae(c, B.droppable.id) === t;
    }),
    d = i
      .filter(function (c, s) {
        return n ? s > l : s < l;
      })
      .filter(function (c) {
        var s = ae(c, B.droppable.id),
          p = o.getEntry({ droppableId: s }),
          g = p && !p.isDropDisabled;
        return g;
      }),
    u = n ? d.at(0) : d.at(-1);
  return u ?? null;
}
function Me(e, t) {
  return t
    ? Le(
        { attribute: B.draggable.contextId, value: e },
        { attribute: Z.draggable.droppableId, value: t.droppableId },
        { attribute: Z.draggable.index, value: String(t.index) },
      )
    : null;
}
function kt(e, t) {
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
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mt(e) {
  var t = gt(e);
  t && t.scrollTo(0, 0);
}
var le = {
  mainAxis: {
    prev: function (t, r) {
      var n = r.dragController;
      t.preventDefault();
      var a = n.getDragState();
      M(a.isDragging);
      var o = a.sourceLocation,
        i = a.targetLocation;
      if (i && i.index !== 0) {
        var l = de(de({}, i), {}, { index: i.index - 1 }),
          d = Re({ start: o, target: l });
        (De(o, d) && (l.index = i.index - 2), n.updateDrag({ targetLocation: l }));
      }
    },
    next: function (t, r) {
      var n = r.dragController,
        a = r.contextId;
      t.preventDefault();
      var o = n.getDragState();
      M(o.isDragging);
      var i = o.sourceLocation,
        l = o.targetLocation;
      if (l) {
        var d = Me(a, l),
          u = De(i, l);
        if (!(!u && !d)) {
          var c = de(de({}, l), {}, { index: l.index + 1 }),
            s = Re({ start: i, target: c });
          (De(i, s) && (c.index = l.index + 2), n.updateDrag({ targetLocation: c }));
        }
      }
    },
  },
  crossAxis: {
    prev: function (t, r) {
      var n = r.dragController,
        a = r.droppableRegistry,
        o = r.contextId;
      t.preventDefault();
      var i = n.getDragState();
      M(i.isDragging);
      var l = i.targetLocation,
        d = i.type;
      if (l) {
        var u = Ft({
          droppableId: l.droppableId,
          type: d,
          isMovingForward: !1,
          contextId: o,
          droppableRegistry: a,
        });
        if (u) {
          Mt(u);
          var c = { droppableId: ae(u, B.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: c });
        }
      }
    },
    next: function (t, r) {
      var n = r.dragController,
        a = r.droppableRegistry,
        o = r.contextId;
      t.preventDefault();
      var i = n.getDragState();
      M(i.isDragging);
      var l = i.targetLocation,
        d = i.type;
      if (l) {
        var u = Ft({
          droppableId: l.droppableId,
          type: d,
          isMovingForward: !0,
          contextId: o,
          droppableRegistry: a,
        });
        if (u) {
          Mt(u);
          var c = { droppableId: ae(u, B.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: c });
        }
      }
    },
  },
};
function me(e) {
  e.preventDefault();
}
var Ht = { PageUp: me, PageDown: me, Home: me, End: me, Enter: me, Tab: me },
  ca = {
    vertical: de(
      de({}, Ht),
      {},
      {
        ArrowUp: le.mainAxis.prev,
        ArrowDown: le.mainAxis.next,
        ArrowLeft: le.crossAxis.prev,
        ArrowRight: le.crossAxis.next,
      },
    ),
    horizontal: de(
      de({}, Ht),
      {},
      {
        ArrowUp: le.crossAxis.prev,
        ArrowDown: le.crossAxis.next,
        ArrowLeft: le.mainAxis.prev,
        ArrowRight: le.mainAxis.next,
      },
    ),
  };
function sa(e) {
  var t = e.dragController,
    r = e.droppableRegistry,
    n = e.contextId,
    a = e.setKeyboardCleanupFn,
    o = v.useCallback(
      function (i) {
        var l = i.event,
          d = i.draggableId,
          u = i.type,
          c = i.getSourceLocation,
          s = i.sourceElement;
        t.startDrag({
          draggableId: d,
          type: u,
          getSourceLocation: c,
          sourceElement: s,
          mode: "SNAP",
        });
        var p = c(),
          g = pr({ attribute: B.droppable.id, value: p.droppableId }),
          f = ae(g, Z.droppable.direction);
        M(f === "vertical" || f === "horizontal");
        function m() {
          t.stopDrag({ reason: "CANCEL" });
        }
        var y = [
            "mousedown",
            "mouseup",
            "click",
            "touchstart",
            "resize",
            "wheel",
            "visibilitychange",
          ].map(function (x) {
            return { type: x, listener: m };
          }),
          b = ne.bindAll(
            window,
            [
              {
                type: "keydown",
                listener: function (I) {
                  var S, w;
                  if (I !== l) {
                    var h = t.getDragState(),
                      R = h.isDragging;
                    if (R) {
                      if (I.key === " ") {
                        (I.preventDefault(), t.stopDrag({ reason: "DROP" }));
                        return;
                      }
                      if (I.key === "Escape") {
                        (I.preventDefault(), t.stopDrag({ reason: "CANCEL" }));
                        return;
                      }
                      (S = (w = ca[f])[I.key]) === null ||
                        S === void 0 ||
                        S.call(w, I, { dragController: t, droppableRegistry: r, contextId: n });
                    }
                  }
                },
              },
            ].concat(Ue(y)),
          );
        a(b);
      },
      [n, t, r, a],
    );
  return { startKeyboardDrag: o };
}
var Cr = function (t) {
    return function (r) {
      return t === r;
    };
  },
  ga = Cr("scroll"),
  pa = Cr("auto"),
  Ut = function (t, r) {
    return r(t.overflowX) || r(t.overflowY);
  },
  fa = function (t) {
    var r = window.getComputedStyle(t),
      n = { overflowX: r.overflowX, overflowY: r.overflowY };
    return Ut(n, ga) || Ut(n, pa);
  },
  Lr = function (t) {
    return !t || t === document.body || t === document.documentElement
      ? null
      : fa(t)
        ? t
        : Lr(t.parentElement);
  },
  jr = function (t) {
    var r = t.top,
      n = t.right,
      a = t.bottom,
      o = t.left,
      i = n - o,
      l = a - r,
      d = {
        top: r,
        right: n,
        bottom: a,
        left: o,
        width: i,
        height: l,
        x: o,
        y: r,
        center: { x: (n + o) / 2, y: (a + r) / 2 },
      };
    return d;
  },
  va = function (t) {
    var r = t.closestScrollable,
      n = r.getBoundingClientRect(),
      a = { x: r.scrollLeft, y: r.scrollTop };
    return {
      container: jr(n),
      scroll: {
        current: a,
        max: { x: r.scrollWidth - r.clientWidth, y: r.scrollHeight - r.clientHeight },
      },
    };
  },
  Fr = { x: 0, y: 0 },
  kr = function (t) {
    return function (r) {
      return { x: t(r.x), y: t(r.y) };
    };
  },
  Mr = function (t, r) {
    return t.x === r.x && t.y === r.y;
  },
  ba = function (t, r) {
    return { x: t.x + r.x, y: t.y + r.y };
  },
  ma = function (t, r) {
    return { x: t.x - r.x, y: t.y - r.y };
  },
  ya = kr(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  Da = (function () {
    var e = function (r, n) {
      return r < 0 ? r : r > n ? r - n : 0;
    };
    return function (t) {
      var r = t.current,
        n = t.max,
        a = t.change,
        o = ba(r, a),
        i = { x: e(o.x, n.x), y: e(o.y, n.y) };
      return Mr(i, Fr) ? null : i;
    };
  })(),
  Hr = function (t) {
    var r = t.max,
      n = t.current,
      a = t.change,
      o = { x: Math.max(n.x, r.x), y: Math.max(n.y, r.y) },
      i = ya(a),
      l = Da({ max: o, current: n, change: i });
    return !l || (i.x !== 0 && l.x === 0) || (i.y !== 0 && l.y === 0);
  },
  ha = function (t, r) {
    return Hr({ current: t.scroll.current, max: t.scroll.max, change: r });
  },
  Ia = function (t, r) {
    return Hr({ current: t.scroll.current, max: t.scroll.max, change: r });
  },
  pt = 1,
  Ur = {
    direction: "vertical",
    start: "top",
    end: "bottom",
    size: "height",
    scrollAxis: "scrollTop",
  },
  $r = {
    direction: "horizontal",
    start: "left",
    end: "right",
    size: "width",
    scrollAxis: "scrollLeft",
  };
($r.direction, Ur.direction);
var ue = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (t) {
      return Math.pow(t, 2);
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  xa = function (t, r) {
    var n = t[r.size] * ue.startFromPercentage,
      a = t[r.size] * ue.maxScrollAtPercentage,
      o = { startScrollingFrom: n, maxScrollValueAt: a };
    return o;
  },
  Br = function (t) {
    var r = t.startOfRange,
      n = t.endOfRange,
      a = t.current,
      o = n - r;
    if (o === 0) return 0;
    var i = a - r,
      l = i / o;
    return l;
  },
  $t = ue.durationDampening.accelerateAt,
  Bt = ue.durationDampening.stopDampeningAt,
  Sa = function (t, r) {
    var n = r,
      a = Bt,
      o = Date.now(),
      i = o - n;
    if (i >= Bt) return t;
    if (i < $t) return pt;
    var l = Br({ startOfRange: $t, endOfRange: a, current: i }),
      d = t * ue.ease(l);
    return Math.ceil(d);
  },
  wa = function (t, r) {
    if (t > r.startScrollingFrom) return 0;
    if (t <= r.maxScrollValueAt) return ue.maxPixelScroll;
    if (t === r.startScrollingFrom) return pt;
    var n = Br({ startOfRange: r.maxScrollValueAt, endOfRange: r.startScrollingFrom, current: t }),
      a = 1 - n,
      o = ue.maxPixelScroll * ue.ease(a);
    return Math.ceil(o);
  },
  Kt = function (t) {
    var r = t.distanceToEdge,
      n = t.thresholds,
      a = t.dragStartTime,
      o = t.shouldUseTimeDampening,
      i = wa(r, n);
    return i === 0 ? 0 : o ? Math.max(Sa(i, a), pt) : i;
  };
const Wt = function (e) {
  var t = e.container,
    r = e.distanceToEdges,
    n = e.dragStartTime,
    a = e.axis,
    o = e.shouldUseTimeDampening,
    i = xa(t, a),
    l = r[a.end] < r[a.start];
  return l
    ? Kt({ distanceToEdge: r[a.end], thresholds: i, dragStartTime: n, shouldUseTimeDampening: o })
    : -1 *
        Kt({
          distanceToEdge: r[a.start],
          thresholds: i,
          dragStartTime: n,
          shouldUseTimeDampening: o,
        });
};
var Oa = kr(function (e) {
  return e === 0 ? 0 : e;
});
const Kr = function (e) {
    var t = e.dragStartTime,
      r = e.container,
      n = e.center,
      a = e.shouldUseTimeDampening,
      o = { top: n.y - r.top, right: r.right - n.x, bottom: r.bottom - n.y, left: n.x - r.left },
      i = Wt({
        container: r,
        distanceToEdges: o,
        dragStartTime: t,
        axis: Ur,
        shouldUseTimeDampening: a,
      }),
      l = Wt({
        container: r,
        distanceToEdges: o,
        dragStartTime: t,
        axis: $r,
        shouldUseTimeDampening: a,
      }),
      d = Oa({ x: l, y: i });
    return Mr(d, Fr) ? null : d;
  },
  Ea = function (e) {
    var t = e.scrollable,
      r = e.center,
      n = e.dragStartTime,
      a = e.shouldUseTimeDampening,
      o = Kr({ dragStartTime: n, container: t.container, center: r, shouldUseTimeDampening: a });
    return o && Ia(t, o) ? o : null;
  },
  Ra = function (e) {
    var t = e.viewport,
      r = e.center,
      n = e.dragStartTime,
      a = e.shouldUseTimeDampening,
      o = Kr({ dragStartTime: n, container: t.container, center: r, shouldUseTimeDampening: a });
    return o && ha(t, o) ? o : null;
  },
  Aa = function (e) {
    var t = e.scrollHeight,
      r = e.scrollWidth,
      n = e.height,
      a = e.width,
      o = ma({ x: r, y: t }, { x: a, y: n }),
      i = { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    return i;
  },
  Ta = function () {
    var e = document.documentElement,
      t = Aa({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return t;
  },
  Pa = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Ca = function () {
    var e = Pa(),
      t = Ta(),
      r = e.y,
      n = e.x,
      a = document.documentElement,
      o = a.clientWidth,
      i = a.clientHeight,
      l = n + o,
      d = r + i,
      u = jr({ top: r, left: n, right: l, bottom: d }),
      c = { container: u, scroll: { current: e, max: t } };
    return c;
  };
var La = function (t) {
    var r = t.input,
      n = t.dragStartTime,
      a = t.shouldUseTimeDampening,
      o = t.scrollElement,
      i = t.scrollWindow,
      l = t.behavior,
      d = function () {
        var s = Ca(),
          p = Ra({
            dragStartTime: n,
            viewport: s,
            center: { x: r.clientX + s.scroll.current.x, y: r.clientY + s.scroll.current.y },
            shouldUseTimeDampening: a,
          });
        return p ? (i(p), !0) : !1;
      },
      u = function () {
        var s = $e({ x: r.clientX, y: r.clientY }),
          p = Lr(s);
        if (!p) return !1;
        var g = va({ closestScrollable: p }),
          f = Ea({
            dragStartTime: n,
            scrollable: g,
            center: { x: r.clientX, y: r.clientY },
            shouldUseTimeDampening: a,
          });
        return f ? (o(p, f), !0) : !1;
      };
    (l === "container-only" && u(),
      l === "window-only" && d(),
      l === "container-then-window" && (u() || d()),
      l === "window-then-container" && (d() || u()));
  },
  ja = function (t, r) {
    t.scrollBy(r.x, r.y);
  },
  Fa = function (t) {
    window.scrollBy(t.x, t.y);
  },
  ka = function () {
    var t = null;
    function r(l) {
      t != null &&
        La({
          input: t.latestInput,
          dragStartTime: t.dragStartTime,
          shouldUseTimeDampening: t.shouldUseTimeDampening,
          behavior: t.behavior,
          scrollElement: l ?? ja,
          scrollWindow: l ?? Fa,
        });
    }
    function n() {
      t &&
        (t.loopFrameId = requestAnimationFrame(function () {
          (r(), n());
        }));
    }
    var a = function (d) {
      var u = d.input,
        c = d.behavior,
        s = c === void 0 ? "window-then-container" : c,
        p = Date.now();
      t = {
        dragStartTime: p,
        latestInput: u,
        loopFrameId: null,
        shouldUseTimeDampening: !1,
        behavior: s,
      };
      var g = function () {
        t && (t.shouldUseTimeDampening = !0);
      };
      (r(g), n());
    };
    function o(l) {
      var d = l.input;
      t && (t.latestInput = d);
    }
    var i = function () {
      t && (t.loopFrameId && cancelAnimationFrame(t.loopFrameId), (t = null));
    };
    return { start: a, updateInput: o, stop: i };
  },
  Xe = ka();
function Nt(e) {
  e.defaultPrevented ||
    (e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.preventDefault());
}
var nt = null;
function Ma() {
  (Se(),
    (nt = ne.bindAll(
      window,
      [
        { type: "dragover", listener: Nt },
        { type: "dragenter", listener: Nt },
        {
          type: "drop",
          listener: function (t) {
            (t.preventDefault(), Se());
          },
        },
        { type: "dragend", listener: Se },
      ].concat(Ue(Er({ onDragEnd: Se }))),
      { capture: !1 },
    )));
}
function Se() {
  var e;
  ((e = nt) === null || e === void 0 || e(), (nt = null));
}
function Ha() {
  var e;
  if (((e = window.event) === null || e === void 0 ? void 0 : e.type) === "drop") {
    var t;
    (t = window.event) === null || t === void 0 || t.preventDefault();
  }
  Se();
}
var Yt = { start: Ma, stop: Ha };
function Ua(e) {
  var t = e.dragController,
    r = e.contextId,
    n = v.useCallback(
      function (a) {
        t.updateDrag({ targetLocation: xn(a.current) });
      },
      [t],
    );
  v.useEffect(
    function () {
      return Be({
        canMonitor: function (o) {
          var i = o.initial,
            l = o.source;
          if (!ve(l.data)) return !1;
          var d = l.data.contextId === r;
          if (!d) return !1;
          var u = i.dropTargets.find(function (s) {
            return Sr(s.data);
          });
          if (!u) return !0;
          var c = u.data.contextId === r;
          return c;
        },
        onDragStart: function (o) {
          var i = o.location,
            l = o.source;
          (Xe.start({ input: i.current.input }), Yt.start());
          var d = l.data;
          M(ve(d));
          var u = d.draggableId,
            c = d.droppableId,
            s = d.getIndex,
            p = d.type;
          t.startDrag({
            draggableId: u,
            type: p,
            getSourceLocation: function () {
              return { droppableId: c, index: s() };
            },
            sourceElement: l.element,
            mode: "FLUID",
          });
        },
        onDrag: function (o) {
          var i = o.location;
          (Xe.updateInput({ input: i.current.input }), n(i));
        },
        onDropTargetChange: function (o) {
          var i = o.location;
          n(i);
        },
        onDrop: function () {
          (Xe.stop(), Yt.stop(), t.stopDrag({ reason: "DROP" }));
        },
      });
    },
    [t, r, n],
  );
}
var Wr = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  $a = "data-rbd-style-context-id";
function Ba(e) {
  var t = e.selector,
    r = e.styles,
    n = Object.entries(r)
      .map(function (a) {
        var o = X(a, 2),
          i = o[0],
          l = o[1];
        return "".concat(i, ": ").concat(l, ";");
      })
      .join(" ");
  return "".concat(t, " { ").concat(n, " }");
}
function Ka(e) {
  var t = "[".concat(B.dragHandle.contextId, '="').concat(e, '"]'),
    r = { cursor: "grab", "-webkit-touch-callout": "none" };
  return Ba({ selector: t, styles: r });
}
function Wa(e) {
  var t = e.contextId,
    r = e.nonce,
    n = document.createElement("style");
  return (r && n.setAttribute("nonce", r), n.setAttribute($a, t), document.head.appendChild(n), n);
}
function Na(e) {
  var t = e.contextId,
    r = e.nonce,
    n = Wa({ contextId: t, nonce: r });
  return (
    (n.textContent = Ka(t)),
    function () {
      n.remove();
    }
  );
}
function Ya(e) {
  var t = e.contextId,
    r = e.nonce;
  Wr(
    function () {
      return Na({ contextId: t, nonce: r });
    },
    [t, r],
  );
}
var za = (function () {
  return typeof fe.unstable_batchedUpdates == "function" &&
    (typeof fe.version > "u" || fe.version.startsWith("16"))
    ? fe.unstable_batchedUpdates
    : function (e) {
        return e();
      };
})();
function Nr(e) {
  za(e);
}
function Ga(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Va(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((l = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Va(e, t) {
  if (e) {
    if (typeof e == "string") return zt(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? zt(e, t)
          : void 0
    );
  }
}
function zt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xa() {
  return {
    onPendingDragStart: [],
    onPrePendingDragUpdate: [],
    onPendingDragUpdate: [],
    onBeforeDragEnd: [],
  };
}
function qa() {
  var e = Xa(),
    t = function (a, o) {
      return (
        e[a].push(o),
        function () {
          e[a] = e[a].filter(function (i) {
            return i !== o;
          });
        }
      );
    },
    r = function (a, o) {
      Nr(function () {
        var i = Ga(e[a]),
          l;
        try {
          for (i.s(); !(l = i.n()).done; ) {
            var d = l.value;
            d(o);
          }
        } catch (u) {
          i.e(u);
        } finally {
          i.f();
        }
      });
    };
  return { addResponder: t, dispatch: r };
}
function Qa() {
  var e = v.useState(qa),
    t = X(e, 1),
    r = t[0];
  return r;
}
var Yr = v.createContext(null);
function Za(e) {
  var t = e.children,
    r = e.lifecycle,
    n = v.useCallback(
      function (a) {
        for (var o = [], i = 0, l = Object.entries(a); i < l.length; i++) {
          var d = l[i],
            u = d,
            c = X(u, 2),
            s = c[0],
            p = c[1];
          o.push(r.addResponder(s, p));
        }
        return ge.apply(void 0, o);
      },
      [r],
    );
  return H.createElement(Yr.Provider, { value: n }, t);
}
function Ke() {
  var e = v.useContext(Yr);
  return (M(e !== null), e);
}
var qe = null,
  pe = "1px",
  Ja = {
    width: pe,
    height: pe,
    padding: "0",
    position: "absolute",
    border: "0",
    clip: "rect(".concat(pe, ", ").concat(pe, ", ").concat(pe, ", ").concat(pe, ")"),
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "-".concat(pe),
    pointerEvents: "none",
  };
function _a() {
  var e = document.createElement("div");
  return (e.setAttribute("role", "alert"), Object.assign(e.style, Ja), document.body.append(e), e);
}
function eo() {
  return (qe === null && (qe = _a()), qe);
}
function Qe(e) {
  var t = eo();
  t.textContent = e;
}
function xe(e) {
  return e.index + 1;
}
var to = {
  onDragStart: function (t) {
    var r = t.source,
      n = xe(r);
    return "You have lifted an item in position ".concat(n, ".");
  },
  onDragUpdate: function (t) {
    var r = t.source,
      n = t.destination;
    if (!n) return "You are currently not dragging over a droppable area.";
    var a = xe(r),
      o = xe(n),
      i = r.droppableId === n.droppableId;
    return i
      ? "You have moved the item from position ".concat(a, " to position ").concat(o, ".")
      : "You have moved the item from position "
          .concat(a, " in list ")
          .concat(r.droppableId, " to list ")
          .concat(n.droppableId, " in position ")
          .concat(o, ".");
  },
  onDragEnd: function (t) {
    var r = t.source,
      n = t.destination,
      a = t.reason,
      o = xe(r);
    if (a === "CANCEL")
      return "Movement cancelled. The item has returned to its starting position of ".concat(
        o,
        ".",
      );
    if (!n)
      return "The item has been dropped while not over a droppable location. The item has returned to its starting position of ".concat(
        o,
        ".",
      );
    var i = xe(n),
      l = r.droppableId === n.droppableId;
    return l
      ? "You have dropped the item. It has moved from position ".concat(o, " to ").concat(i, ".")
      : "You have dropped the item. It has moved from position "
          .concat(o, " in list ")
          .concat(r.droppableId, " to position ")
          .concat(i, " in list ")
          .concat(n.droppableId, ".");
  },
};
function ro(e, t) {
  return to[e](t);
}
function Ze(e, t) {
  var r = null,
    n = {
      announce: function (i) {
        r = i;
      },
    };
  function a() {
    return r ?? ro(e, t);
  }
  return { provided: n, getMessage: a };
}
var no = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Gt = { status: "idle" };
function ao() {
  var e = Gt,
    t = function (a) {
      (e.status === "idle" && (e = { status: "pending", timeoutId: setTimeout(r, 0), items: [] }),
        e.items.push(a));
    },
    r = function () {
      if (e.status !== "idle") {
        clearTimeout(e.timeoutId);
        var a = Array.from(e.items);
        ((e = Gt),
          Nr(function () {
            a.forEach(function (o) {
              return o();
            });
          }));
      }
    };
  return { schedule: t, flush: r };
}
function oo() {
  var e = v.useState(ao),
    t = X(e, 1),
    r = t[0];
  return r;
}
var io = 0;
function lo() {
  return "".concat(io++);
}
function uo(e) {
  var t = vr(e);
  return { top: t.offsetTop, left: t.offsetLeft };
}
function co(e) {
  var t = e.children,
    r = e.dragHandleUsageInstructions,
    n = r === void 0 ? no : r,
    a = e.nonce,
    o = e.onBeforeCapture,
    i = e.onBeforeDragStart,
    l = e.onDragStart,
    d = e.onDragUpdate,
    u = e.onDragEnd,
    c = v.useState(lo),
    s = X(c, 1),
    p = s[0];
  da({ contextId: p, text: n });
  var g = Qa(),
    f = oo(),
    m = f.schedule,
    y = f.flush,
    b = v.useRef({ isDragging: !1 }),
    x = v.useCallback(function () {
      return b.current;
    }, []),
    I = wn(),
    S = v.useCallback(
      function (A) {
        for (
          var C = A.droppableId, T = I.getEntry({ droppableId: C });
          T !== null && T.isDropDisabled;

        ) {
          var L = T,
            K = L.parentDroppableId;
          T = K ? I.getEntry({ droppableId: K }) : null;
        }
        return T === null ? null : { droppableId: T.droppableId, index: 0 };
      },
      [I],
    );
  v.useEffect(
    function () {
      return function () {
        var A = x(),
          C = A.isDragging;
        C && br();
      };
    },
    [x],
  );
  var w = v.useCallback(
      function (A) {
        var C = A.targetLocation,
          T = A.isImmediate,
          L = T === void 0 ? !1 : T;
        if (!b.current.isDragging) return;
        var K = b.current,
          q = K.prevDestination,
          ee = K.draggableId,
          V = K.type,
          W = K.sourceLocation,
          Y = Re({ start: W, target: C });
        if (De(q, Y)) return;
        Object.assign(b.current, { prevDestination: Y, sourceLocation: W, targetLocation: C });
        var U = {
            mode: b.current.mode,
            draggableId: ee,
            type: V,
            source: W,
            destination: Y,
            combine: null,
          },
          z = C ? I.getEntry({ droppableId: C.droppableId }) : null;
        (g.dispatch("onPrePendingDragUpdate", { update: U, targetLocation: C }),
          g.dispatch("onPendingDragUpdate", { update: U, targetLocation: C, droppable: z }));
        function J() {
          var _ = Ze("onDragUpdate", U),
            F = _.provided,
            k = _.getMessage;
          (d?.(U, F), Qe(k()));
        }
        L ? J() : m(J);
      },
      [I, g, d, m],
    ),
    h = v.useCallback(
      function (A) {
        var C = A.draggableId,
          T = A.type,
          L = A.getSourceLocation,
          K = A.sourceElement,
          q = A.mode;
        if (!b.current.isDragging) {
          var ee = { draggableId: C, mode: q };
          o?.(ee);
          var V = { mode: q, draggableId: C, type: T, source: L() },
            W = document,
            Y = W.activeElement,
            U =
              Y instanceof HTMLElement && Y.hasAttribute(B.dragHandle.draggableId)
                ? ae(Y, B.dragHandle.draggableId)
                : null,
            z = V.source.droppableId,
            J = I.getEntry({ droppableId: z });
          (M(J),
            (b.current = {
              isDragging: !0,
              mode: q,
              draggableDimensions: pn(K),
              restoreFocusTo: U,
              draggableId: C,
              type: T,
              prevDestination: V.source,
              sourceLocation: V.source,
              targetLocation: V.source,
              draggableInitialOffsetInSourceDroppable: uo({ element: K, mode: J.mode }),
            }),
            i?.(V),
            g.dispatch("onPendingDragStart", { start: V, droppable: J }),
            m(function () {
              var _ = { mode: q, draggableId: C, type: T, source: L() },
                F = Ze("onDragStart", _),
                k = F.provided,
                $ = F.getMessage;
              (l?.(_, k),
                Qe($()),
                m(function () {
                  var Q = _.source.droppableId,
                    G = I.getEntry({ droppableId: Q });
                  if (G != null && G.isDropDisabled) {
                    var be = S({ droppableId: Q });
                    w({ targetLocation: be, isImmediate: !0 });
                  }
                }));
            }));
        }
      },
      [I, S, g, o, i, l, m, w],
    ),
    R = cr(),
    O = v.useCallback(
      function (A) {
        var C = A.reason;
        if (b.current.isDragging) {
          (R.runCleanupFn(), C === "CANCEL" && w({ targetLocation: null }));
          var T = b.current,
            L = T.mode,
            K = T.restoreFocusTo,
            q = T.sourceLocation,
            ee = T.targetLocation,
            V = T.type,
            W = T.draggableId;
          ((b.current = { isDragging: !1 }), y());
          var Y = Re({ start: q, target: ee }),
            U = {
              reason: Y === null ? "CANCEL" : "DROP",
              type: V,
              source: q,
              destination: Y,
              mode: L,
              draggableId: W,
              combine: null,
            };
          g.dispatch("onBeforeDragEnd", { draggableId: W });
          var z = Ze("onDragEnd", U),
            J = z.provided,
            _ = z.getMessage;
          (u(U, J),
            Qe(_()),
            K &&
              requestAnimationFrame(function () {
                var F = dt({ contextId: p, draggableId: W });
                F && F.focus();
              }));
        }
      },
      [p, y, R, g, u, w],
    ),
    P = v.useMemo(
      function () {
        return { getDragState: x, startDrag: h, updateDrag: w, stopDrag: O };
      },
      [x, h, O, w],
    );
  Ua({ dragController: P, contextId: p });
  var E = sa({
      dragController: P,
      droppableRegistry: I,
      contextId: p,
      setKeyboardCleanupFn: R.setCleanupFn,
    }),
    j = E.startKeyboardDrag,
    N = v.useCallback(
      function (A) {
        var C,
          T = b.current;
        if (
          T.isDragging &&
          A.isDropDisabled &&
          A.droppableId ===
            ((C = T.targetLocation) === null || C === void 0 ? void 0 : C.droppableId)
        ) {
          var L = S({ droppableId: A.droppableId });
          w({ targetLocation: L });
        }
      },
      [S, w],
    );
  return (
    I.setUpdateListener(N),
    Ya({ contextId: p, nonce: a }),
    H.createElement(
      la,
      { contextId: p, dragController: P },
      H.createElement(
        Za,
        { lifecycle: g },
        H.createElement(
          gn,
          { contextId: p, getDragState: x, startKeyboardDrag: j, droppableRegistry: I },
          t,
        ),
      ),
    )
  );
}
var Vt = (function () {
  if (typeof window > "u") return null;
  var e = new Image();
  return (
    (e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
    e
  );
})();
function so(e) {
  var t = e.nativeSetDragImage;
  t && Vt && t(Vt, 0, 0);
}
var ft = v.createContext(null),
  go = ft.Provider;
function Xt() {
  var e = v.useContext(ft);
  return (M(e), e);
}
function po() {
  var e = v.useContext(ft);
  return e ? e.droppableId : null;
}
function zr(e) {
  var t = e.elementRef,
    r = e.data,
    n = e.direction,
    a = e.contextId,
    o = e.isDropDisabled,
    i = e.type;
  v.useEffect(
    function () {
      var l = t.current;
      return (
        M(l instanceof HTMLElement),
        Tr({
          element: l,
          getIsSticky: function () {
            return !0;
          },
          canDrop: function (u) {
            var c = u.source;
            return !ve(c.data) || o ? !1 : c.data.type === i && c.data.contextId === a;
          },
          getData: function (u) {
            var c = u.input;
            return yr(r, {
              element: l,
              input: c,
              allowedEdges: n === "vertical" ? ["top", "bottom"] : ["left", "right"],
            });
          },
        })
      );
    },
    [r, n, a, o, i, t],
  );
}
function fo() {
  var e = oe(),
    t = e.startKeyboardDrag;
  return { startKeyboardDrag: t };
}
function Gr() {
  return Le({ attribute: Z.dropIndicator });
}
function vt(e) {
  return Le({ attribute: B.placeholder.contextId, value: e });
}
function Vr(e) {
  var t = v.useRef(e);
  v.useEffect(
    function () {
      t.current = e;
    },
    [e],
  );
  var r = v.useCallback(function () {
    return t.current;
  }, []);
  return r;
}
var vo = { dragging: 5e3 },
  Je = 24;
function qt(e, t) {
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
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bo = { transform: void 0, transition: void 0 },
  mo = {
    position: "fixed",
    top: 0,
    left: 0,
    boxSizing: "border-box",
    transition: "none",
    zIndex: vo.dragging,
    opacity: 0.75,
    pointerEvents: "none",
  };
function yo(e) {
  var t = e.draggableDimensions,
    r = e.previewOffset,
    n = t.rect,
    a = n.left + r.x,
    o = n.top + r.y,
    i = a === 0 && o === 0;
  return Qt(
    Qt({}, mo),
    {},
    {
      transform: i ? void 0 : "translate(".concat(a, "px, ").concat(o, "px)"),
      width: n.width,
      height: n.height,
    },
  );
}
function Xr(e) {
  var t = e.draggableDimensions,
    r = e.draggableState;
  return r.type !== "dragging" || !r.previewOffset || !t
    ? bo
    : yo({ draggableDimensions: t, previewOffset: r.previewOffset });
}
var Do = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function bt(e, t) {
  if (t == null) return !1;
  var r = !!Do[t.tagName.toLowerCase()];
  if (r) return !0;
  var n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : bt(e, t.parentElement);
}
function ho(e, t) {
  var r = t.target;
  return r instanceof HTMLElement ? bt(e, r) : !1;
}
function Zt(e, t) {
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
function Io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var qr = v.memo(
    v.forwardRef(function (t, r) {
      var n = t.style,
        a = it(),
        o = oe(),
        i = o.contextId,
        l = D({}, B.placeholder.contextId, i),
        d = v.useMemo(
          function () {
            if (a) {
              var u = a.margin,
                c = a.rect;
              return Io(
                { boxSizing: "border-box", width: c.width, height: c.height, margin: u },
                n,
              );
            }
          },
          [a, n],
        );
      return H.createElement("div", se({ ref: r, style: d }, l));
    }),
  ),
  ce = {
    vertical: {
      mainAxis: {
        name: "y",
        offset: "offsetTop",
        length: "offsetHeight",
        scrollOffset: "scrollTop",
        forwardEdge: "bottom",
        overflow: "overflowY",
        style: { length: "height", transform: "translateY" },
      },
      crossAxis: {
        name: "x",
        offset: "offsetLeft",
        length: "offsetWidth",
        style: { length: "width", offset: "left" },
      },
    },
    horizontal: {
      mainAxis: {
        name: "x",
        offset: "offsetLeft",
        length: "offsetWidth",
        scrollOffset: "scrollLeft",
        forwardEdge: "right",
        overflow: "overflowX",
        style: { length: "width", transform: "translateX" },
      },
      crossAxis: {
        name: "y",
        offset: "offsetTop",
        length: "offsetHeight",
        style: { length: "height", offset: "top" },
      },
    },
  },
  ye = 2,
  We = ye / 2;
function Jt(e, t) {
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
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jt(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var He = { type: "idle", draggingOver: null };
function xo(e) {
  return { type: "hiding", draggingOver: null, mode: e };
}
var at = {
  initial: function (t) {
    var r = t.direction,
      n = ce[r],
      a = n.mainAxis,
      o = n.crossAxis;
    return D(D({}, a.name, 0), o.name, Je);
  },
  home: function (t) {
    var r = t.droppable.direction,
      n = t.placeholderRect,
      a = t.draggableDimensions;
    M(n);
    var o = { x: n.x - a.rect.x, y: n.y - a.rect.y },
      i = ce[r],
      l = i.mainAxis,
      d = i.crossAxis;
    return D(D({}, l.name, o[l.name]), d.name, o[d.name] + Je);
  },
  away: function (t) {
    var r = t.droppable.direction,
      n = t.dropIndicatorRect,
      a = t.draggableDimensions;
    M(n);
    var o = { x: n.x - a.rect.x, y: n.y - a.rect.y },
      i = ce[r],
      l = i.mainAxis,
      d = i.crossAxis;
    return D(D({}, l.name, o[l.name] - 0.5 * a.rect[l.style.length]), d.name, o[d.name] + Je);
  },
};
function So(e, t) {
  var r,
    n = t.update,
    a = t.droppable,
    o = t.draggableDimensions,
    i = t.placeholderRect,
    l = t.dropIndicatorRect;
  if (!a || !o) return e;
  var d = { droppable: a, draggableDimensions: o, placeholderRect: i, dropIndicatorRect: l },
    u = De(n.source, (r = n.destination) !== null && r !== void 0 ? r : null),
    c = u ? at.home(d) : at.away(d);
  return c ? te(te({}, e), {}, { previewOffset: c }) : e;
}
function _t(e, t) {
  var r = t.start,
    n = t.previewOffset;
  M(e.type === "idle");
  var a = r.source.droppableId,
    o = {
      type: "dragging",
      draggingOver: a,
      location: null,
      start: r.source,
      draggableId: r.draggableId,
      mode: r.mode,
      previewOffset: n,
    };
  return o;
}
function Qr(e, t) {
  if (t.type === "START_POINTER_DRAG")
    return _t(e, te(te({}, t.payload), {}, { previewOffset: { x: 0, y: 0 } }));
  if (t.type === "START_KEYBOARD_DRAG") {
    var r = t.payload,
      n = r.draggableDimensions,
      a = r.droppable;
    return _t(
      e,
      te(
        te({}, t.payload),
        {},
        { previewOffset: at.initial({ draggableDimensions: n, direction: a.direction }) },
      ),
    );
  }
  if (t.type === "UPDATE_DRAG") {
    M(e.type === "dragging");
    var o = t.payload.update,
      i = o.destination ? o.destination.droppableId : null;
    if (i === e.draggingOver) return e;
    var l = te(te({}, e), {}, { draggingOver: i });
    return l;
  }
  if (t.type === "UPDATE_POINTER_PREVIEW") {
    M(e.type === "dragging");
    var d = t.payload.pointerLocation,
      u = te(
        te({}, e),
        {},
        {
          previewOffset: {
            x: d.current.input.clientX - d.initial.input.clientX,
            y: d.current.input.clientY - d.initial.input.clientY,
          },
        },
      );
    return u;
  }
  if (t.type === "UPDATE_KEYBOARD_PREVIEW") {
    if ((M(e.type === "dragging"), e.type !== "dragging")) return e;
    var c = So(e, t.payload);
    return c;
  }
  return t.type === "DROP"
    ? (M(e.type === "dragging"), He)
    : t.type === "START_HIDING"
      ? (M(e.type === "idle" || e.type === "hiding"), xo(t.payload.mode))
      : t.type === "STOP_HIDING"
        ? (M(e.type === "hiding"), He)
        : e;
}
function Zr(e) {
  var t = e.draggingOver,
    r = e.isClone,
    n = e.isDragging,
    a = e.mode;
  return v.useMemo(
    function () {
      return {
        isClone: r,
        isDragging: n,
        draggingOver: t,
        mode: a,
        isDropAnimating: !1,
        dropAnimation: null,
        combineWith: null,
        combineTargetFor: null,
      };
    },
    [t, r, n, a],
  );
}
var wo = function () {};
function Oo(e) {
  var t = e.children,
    r = e.draggableId,
    n = e.index,
    a = e.isDragDisabled,
    o = a === void 0 ? !1 : a,
    i = e.disableInteractiveElementBlocking,
    l = i === void 0 ? !1 : i,
    d = Xt(),
    u = d.direction,
    c = d.droppableId,
    s = d.type,
    p = d.mode,
    g = oe(),
    f = g.contextId,
    m = g.getDragState,
    y = v.useRef(null),
    b = v.useRef(null),
    x = cr(),
    I = x.setCleanupFn,
    S = x.runCleanupFn,
    w = v.useCallback(
      function (F) {
        if ((y.current && S(), F)) {
          var k = sr(F, D(D({}, Z.draggable.droppableId, c), Z.draggable.index, String(n)));
          I(k);
        }
        ((y.current = F), (b.current = dt({ contextId: f, draggableId: r })));
      },
      [f, r, c, n, S, I],
    ),
    h = Vr(n),
    R = v.useReducer(Qr, He),
    O = X(R, 2),
    P = O[0],
    E = O[1],
    j = Ir({ draggableId: r, droppableId: c, getIndex: h, contextId: f, type: s }),
    N = P.type === "dragging",
    A = P.type === "hiding",
    C = Xt(),
    T = C.shouldRenderCloneWhileDragging,
    L = C.isDropDisabled,
    K = Ke(),
    q = fo(),
    ee = q.startKeyboardDrag;
  (v.useEffect(
    function () {
      if (P.type === "idle" && !o) {
        var F = y.current;
        _e(F instanceof HTMLElement);
        var k = b.current;
        return (
          _e(k instanceof HTMLElement),
          ne.bindAll(k, [
            {
              type: "keydown",
              listener: function (Q) {
                if (Q.key === " ") {
                  if (Q.defaultPrevented || (!l && ho(F, Q))) return;
                  (Q.preventDefault(),
                    ee({
                      event: Q,
                      draggableId: r,
                      type: s,
                      getSourceLocation: function () {
                        return { droppableId: c, index: h() };
                      },
                      sourceElement: F,
                    }));
                }
              },
            },
          ])
        );
      }
    },
    [l, r, c, h, o, ee, P.type, s],
  ),
    v.useEffect(
      function () {
        if (!A && !o) {
          var F = y.current;
          M(F instanceof HTMLElement);
          var k = b.current;
          return (
            M(k instanceof HTMLElement),
            aa({
              canDrag: function (Q) {
                var G = Q.input;
                if (G.ctrlKey || G.metaKey || G.shiftKey || G.altKey) return !1;
                if (!l) {
                  var be = $e({ x: G.clientX, y: G.clientY });
                  return !bt(k, be);
                }
                return !N;
              },
              element: F,
              dragHandle: k,
              getInitialData: function () {
                return j;
              },
              onGenerateDragPreview: so,
            })
          );
        }
      },
      [j, l, o, N, A],
    ));
  var V = P.type !== "idle" && p === "standard",
    W = v.useRef(null);
  zr({ elementRef: V ? W : y, data: j, direction: u, contextId: f, isDropDisabled: L, type: s });
  var Y = v.useRef(!0);
  (v.useEffect(function () {
    return (
      (Y.current = !0),
      function () {
        Y.current = !1;
      }
    );
  }, []),
    v.useEffect(
      function () {
        var F = m();
        T &&
          F.isDragging &&
          F.draggableId === j.draggableId &&
          E({ type: "START_HIDING", payload: { mode: F.mode } });
      },
      [j.draggableId, m, T],
    ));
  var U = it();
  v.useEffect(
    function () {
      return T
        ? K({
            onPendingDragStart: function (k) {
              var $ = k.start;
              j.draggableId === $.draggableId &&
                E({ type: "START_HIDING", payload: { mode: $.mode } });
            },
            onBeforeDragEnd: function (k) {
              var $ = k.draggableId;
              $ === j.draggableId && E({ type: "STOP_HIDING" });
            },
          })
        : ge(
            K({
              onPendingDragStart: function (k) {
                var $ = k.start,
                  Q = k.droppable;
                if (j.draggableId === $.draggableId) {
                  if ($.mode === "FLUID")
                    return E({ type: "START_POINTER_DRAG", payload: { start: $ } });
                  if ($.mode === "SNAP") {
                    var G = m();
                    return (
                      M(G.isDragging && G.draggableDimensions),
                      E({
                        type: "START_KEYBOARD_DRAG",
                        payload: {
                          start: $,
                          draggableDimensions: G.draggableDimensions,
                          droppable: Q,
                        },
                      })
                    );
                  }
                }
              },
              onPendingDragUpdate: function (k) {
                var $ = k.update,
                  Q = k.droppable;
                j.draggableId === $.draggableId &&
                  (E({ type: "UPDATE_DRAG", payload: { update: $ } }),
                  $.mode === "SNAP" &&
                    queueMicrotask(function () {
                      var G = m();
                      if (G.isDragging) {
                        var be = vt(f),
                          rn = be ? be.getBoundingClientRect() : null,
                          mt = Gr(),
                          nn = mt ? mt.getBoundingClientRect() : null;
                        E({
                          type: "UPDATE_KEYBOARD_PREVIEW",
                          payload: {
                            update: $,
                            draggableDimensions: U,
                            droppable: Q,
                            placeholderRect: rn,
                            dropIndicatorRect: nn,
                          },
                        });
                      }
                    }));
              },
              onBeforeDragEnd: function (k) {
                var $ = k.draggableId;
                $ === j.draggableId && (M(Y.current), E({ type: "DROP" }));
              },
            }),
            Be({
              canMonitor: function (k) {
                var $ = k.source;
                return ve($.data)
                  ? $.data.contextId === j.contextId && $.data.draggableId === j.draggableId
                  : !1;
              },
              onDrag: function (k) {
                var $ = k.location;
                E({ type: "UPDATE_POINTER_PREVIEW", payload: { pointerLocation: $ } });
              },
            }),
          );
    },
    [j.draggableId, j.contextId, K, T, u, f, U, m],
  );
  var z = v.useMemo(
      function () {
        return {
          draggableProps: D(
            D(D({}, B.draggable.contextId, f), B.draggable.id, r),
            "style",
            Xr({ draggableDimensions: U, draggableState: P }),
          ),
          dragHandleProps: D(
            D(
              D(
                D(
                  D({ role: "button", "aria-describedby": st(f) }, B.dragHandle.contextId, f),
                  B.dragHandle.draggableId,
                  r,
                ),
                "tabIndex",
                0,
              ),
              "draggable",
              !1,
            ),
            "onDragStart",
            wo,
          ),
          innerRef: w,
        };
      },
      [f, r, U, P, w],
    ),
    J = Zr({ draggingOver: P.draggingOver, isClone: !1, isDragging: N, mode: N ? P.mode : null }),
    _ = v.useMemo(
      function () {
        return { draggableId: r, type: s, source: { droppableId: c, index: n } };
      },
      [r, c, n, s],
    );
  return H.createElement(
    H.Fragment,
    null,
    A ? null : t(z, J, _),
    V && H.createElement(qr, { ref: W }),
  );
}
function Eo() {
  return document.body;
}
function Ro(e) {
  var t = e.children,
    r = e.droppableId,
    n = e.type,
    a = e.draggableId,
    o = e.index,
    i = e.draggingOver,
    l = e.style,
    d = e.getContainerForClone,
    u = d === void 0 ? Eo : d,
    c = e.mode,
    s = oe(),
    p = s.contextId,
    g = v.useCallback(
      function (b) {
        if (b) {
          var x = dt({ contextId: p, draggableId: a });
          x?.focus();
        }
      },
      [p, a],
    ),
    f = v.useMemo(
      function () {
        return {
          innerRef: g,
          draggableProps: D(D(D({}, B.draggable.contextId, p), B.draggable.id, a), "style", l),
          dragHandleProps: D(
            D(
              D(
                D(
                  D({ role: "button", "aria-describedby": st(p) }, B.dragHandle.contextId, p),
                  B.dragHandle.draggableId,
                  a,
                ),
                "tabIndex",
                0,
              ),
              "draggable",
              !1,
            ),
            "onDragStart",
            function () {},
          ),
        };
      },
      [p, a, g, l],
    ),
    m = Zr({ draggingOver: i, isClone: !0, isDragging: !0, mode: c }),
    y = v.useMemo(
      function () {
        return { draggableId: a, type: n, source: { droppableId: r, index: o } };
      },
      [a, r, o, n],
    );
  return fe.createPortal(t(f, m, y), u());
}
function Ao(e) {
  var t = e.children,
    r = e.droppableId,
    n = e.type,
    a = e.getContainerForClone,
    o = oe(),
    i = o.contextId,
    l = o.getDragState,
    d = it(),
    u = v.useReducer(Qr, He),
    c = X(u, 2),
    s = c[0],
    p = c[1],
    g = Ke();
  if (
    (v.useEffect(
      function () {
        return ge(
          g({
            onPendingDragStart: function (y) {
              var b = y.start,
                x = y.droppable;
              if (r === b.source.droppableId) {
                if (b.mode === "FLUID")
                  return p({ type: "START_POINTER_DRAG", payload: { start: b } });
                if (b.mode === "SNAP") {
                  var I = l();
                  return (
                    M(I.isDragging && I.draggableDimensions),
                    p({
                      type: "START_KEYBOARD_DRAG",
                      payload: {
                        start: b,
                        draggableDimensions: I.draggableDimensions,
                        droppable: x,
                      },
                    })
                  );
                }
              }
            },
            onPendingDragUpdate: function (y) {
              var b = y.update,
                x = y.droppable;
              s.type === "dragging" &&
                s.draggableId === b.draggableId &&
                (p({ type: "UPDATE_DRAG", payload: { update: b } }),
                b.mode === "SNAP" &&
                  queueMicrotask(function () {
                    var I = l();
                    if (I.isDragging) {
                      var S = vt(i),
                        w = S ? S.getBoundingClientRect() : null,
                        h = Gr(),
                        R = h ? h.getBoundingClientRect() : null;
                      p({
                        type: "UPDATE_KEYBOARD_PREVIEW",
                        payload: {
                          update: b,
                          draggableDimensions: d,
                          droppable: x,
                          placeholderRect: w,
                          dropIndicatorRect: R,
                        },
                      });
                    }
                  }));
            },
            onBeforeDragEnd: function (y) {
              var b = y.draggableId;
              s.type === "dragging" && b === s.draggableId && p({ type: "DROP" });
            },
          }),
          Be({
            canMonitor: function (y) {
              var b = y.source;
              return ve(b.data) ? b.data.contextId === i && b.data.droppableId === r : !1;
            },
            onDrag: function (y) {
              var b = y.location;
              p({ type: "UPDATE_POINTER_PREVIEW", payload: { pointerLocation: b } });
            },
          }),
        );
      },
      [r, i, g, s, d, l],
    ),
    s.type !== "dragging")
  )
    return null;
  var f = Xr({ draggableDimensions: d, draggableState: s });
  return H.createElement(
    Ro,
    {
      droppableId: r,
      type: n,
      draggableId: s.draggableId,
      index: s.start.index,
      draggingOver: s.draggingOver,
      mode: s.mode,
      style: f,
      getContainerForClone: a,
    },
    t,
  );
}
var To = {
  horizontal: { rect: { start: "left", end: "right" } },
  vertical: { rect: { start: "top", end: "bottom" } },
};
function Po(e) {
  var t = e.a,
    r = e.b,
    n = e.direction,
    a = To[n].rect;
  return Math.max(t[a.start], r[a.start]) - Math.min(t[a.end], r[a.end]);
}
function Co(e) {
  return ae(e, Z.draggable.droppableId);
}
function Lo(e) {
  var t = ae(e, Z.draggable.index),
    r = parseInt(t);
  return (M(Number.isInteger(r)), r);
}
function jo(e) {
  var t = e.element,
    r = e.where,
    n = e.direction,
    a = e.contextId,
    o = Co(t),
    i = Lo(t),
    l = i - 1,
    d = i + 1,
    u = r === "before",
    c = Me(a, { droppableId: o, index: u ? l : d });
  if (c === null) {
    var s = getComputedStyle(t),
      p = s.marginTop,
      g = s.marginRight,
      f = s.marginBottom,
      m = s.marginLeft;
    return n === "horizontal" ? parseFloat(m) + parseFloat(g) : parseFloat(p) + parseFloat(f);
  }
  var y = Po({ direction: n, a: t.getBoundingClientRect(), b: c.getBoundingClientRect() });
  return y;
}
function Fo(e) {
  var t = e.element,
    r = e.where,
    n = e.direction,
    a = e.contextId,
    o = jo({ element: t, where: r, direction: n, contextId: a });
  return r === "before" ? -o / 2 : o / 2;
}
function er(e) {
  var t = e.element,
    r = e.isForwardEdge,
    n = e.mode,
    a = e.direction,
    o = e.contextId,
    i = ce[a],
    l = i.mainAxis,
    d = i.crossAxis,
    u = vr({ element: t, mode: n }),
    c = Fo({ element: t, where: r ? "after" : "before", direction: a, contextId: o }),
    s = u[l.offset] - We,
    p = r ? s + t[l.length] : s;
  return { mainAxis: { offset: p + c }, crossAxis: { offset: u[d.offset], length: u[d.length] } };
}
function ko(e) {
  var t = e.element,
    r = e.direction,
    n = ce[r],
    a = n.mainAxis,
    o = n.crossAxis,
    i = t[a.offset] - We,
    l = i + t[a.length] / 2;
  return { mainAxis: { offset: l }, crossAxis: { offset: t[o.offset], length: t[o.length] } };
}
function Mo(e) {
  var t = e.element,
    r = e.direction,
    n = ce[r].mainAxis,
    a = gt(t);
  if (!a) return 0;
  var o = getComputedStyle(a),
    i = o.position;
  return i !== "static" ? 0 : a[n.offset];
}
function Ho(e) {
  var t = e.droppableId,
    r = e.direction,
    n = pr({ attribute: B.droppable.id, value: t }),
    a = Mo({ element: n, direction: r });
  return { mainAxis: { offset: a }, crossAxis: { offset: 0, length: "100%" } };
}
function Uo(e) {
  var t = e.targetLocation,
    r = e.isInHomeLocation,
    n = e.direction,
    a = e.mode,
    o = e.contextId;
  if (r) {
    var i = vt(o);
    return i ? ko({ element: i, direction: n }) : null;
  }
  if (t.index === 0) {
    var l = Me(o, t);
    return l
      ? er({ element: l, isForwardEdge: !1, mode: a, direction: n, contextId: o })
      : Ho({ droppableId: t.droppableId, direction: n });
  }
  var d = Me(o, { droppableId: t.droppableId, index: t.index - 1 });
  return d ? er({ element: d, isForwardEdge: !0, mode: a, direction: n, contextId: o }) : null;
}
var tr = ye + 2 * We,
  $o = Oe({
    background: "var(--ds-border-brand, #0C66E4)",
    scrollMarginTop: tr,
    scrollMarginBottom: tr + We,
  }),
  Bo = Oe({ position: "absolute", top: 0, left: 0 }),
  Ko = Oe({ opacity: 0 }),
  Wo = {
    horizontal: Oe({ width: ye, height: "100%", marginLeft: -ye }),
    vertical: Oe({ width: "100%", height: ye, marginTop: -ye }),
  };
function No(e) {
  var t = e.direction,
    r = e.dimensions,
    n = e.indicatorOffset;
  if (r === null) return { opacity: 0 };
  var a = ce[t],
    o = a.mainAxis,
    i = a.crossAxis;
  return D(
    D(
      { transform: "".concat(o.style.transform, "(").concat(r.mainAxis.offset - n, "px)") },
      i.style.length,
      r.crossAxis.length,
    ),
    i.style.offset,
    r.crossAxis.offset,
  );
}
var Yo = D({}, Z.dropIndicator, ""),
  zo = function (t) {
    var r = t.direction,
      n = t.mode,
      a = oe(),
      o = a.contextId,
      i = a.getDragState,
      l = v.useRef(null),
      d = v.useState(null),
      u = X(d, 2),
      c = u[0],
      s = u[1],
      p = v.useState(!1),
      g = X(p, 2),
      f = g[0],
      m = g[1],
      y = Ke(),
      b = v.useCallback(
        function (h) {
          var R = h.targetLocation,
            O = h.source,
            P = h.destination;
          if (!R) return s(null);
          var E = De(O, P);
          return (
            m(E),
            s(Uo({ targetLocation: R, isInHomeLocation: E, direction: r, mode: n, contextId: o }))
          );
        },
        [o, r, n],
      );
    (v.useLayoutEffect(
      function () {
        var h = i();
        if (h.isDragging) {
          var R = h.targetLocation,
            O = h.sourceLocation,
            P = Re({ start: O, target: R });
          return (
            b({ targetLocation: R, destination: P, source: O }),
            y({
              onPrePendingDragUpdate: function (j) {
                var N = j.update,
                  A = j.targetLocation,
                  C = N.destination,
                  T = C === void 0 ? null : C,
                  L = N.source;
                b({ targetLocation: A, source: L, destination: T });
              },
            })
          );
        }
      },
      [o, r, i, n, y, b],
    ),
      v.useLayoutEffect(
        function () {
          if (c !== null) {
            var h = i();
            if (!(!h.isDragging || h.mode !== "SNAP")) {
              var R = l.current;
              (M(R instanceof HTMLElement), R.scrollIntoView({ block: "nearest" }));
            }
          }
        },
        [c, i],
      ));
    var x = ce[r].mainAxis,
      I = l.current ? l.current[x.offset] : 0,
      S = No({ direction: r, dimensions: c, indicatorOffset: I }),
      w = n === "virtual";
    return on("div", se({ ref: l, css: [$o, Wo[r], w && Bo, f && Ko], style: S }, Yo));
  };
function rr(e, t) {
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
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rr(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jr = { draggingFromThisWith: null, draggingOverWith: null, isDraggingOver: !1 };
function Go(e, t) {
  if (t.type === "DRAG_START") {
    var r = t.payload,
      n = r.droppableId,
      a = r.start,
      o = a.draggableId,
      i = a.source,
      l = i.droppableId === n,
      d = l ? o : null,
      u = i.droppableId === n,
      c = u ? o : null;
    return Fe(Fe({}, e), {}, { isDraggingOver: l, draggingFromThisWith: c, draggingOverWith: d });
  }
  if (t.type === "DRAG_UPDATE") {
    var s = t.payload,
      p = s.droppableId,
      g = s.update,
      f = g.destination,
      m = f === void 0 ? null : f,
      y = g.draggableId,
      b = g.source,
      x = m?.droppableId === p,
      I = x ? y : null,
      S = b.droppableId === p,
      w = S ? y : null;
    return Fe(Fe({}, e), {}, { isDraggingOver: x, draggingFromThisWith: w, draggingOverWith: I });
  }
  return t.type === "DRAG_CLEAR" ? Jr : e;
}
function Vo(e) {
  var t = e.draggableId,
    r = e.droppableId,
    n = e.type,
    a = e.direction,
    o = e.isDropDisabled,
    i = v.useRef(null),
    l = oe(),
    d = l.contextId,
    u = l.getDragState,
    c = u();
  M(c.isDragging);
  var s = v.useCallback(
      function () {
        return c.sourceLocation.index;
      },
      [c.sourceLocation.index],
    ),
    p = Ir({ draggableId: t, droppableId: r, getIndex: s, contextId: d, type: n });
  zr({ elementRef: i, data: p, direction: a, contextId: d, isDropDisabled: o, type: n });
  var g = v.useMemo(
    function () {
      return {
        position: "absolute",
        top: c.draggableInitialOffsetInSourceDroppable.top,
        left: c.draggableInitialOffsetInSourceDroppable.left,
        margin: 0,
      };
    },
    [c.draggableInitialOffsetInSourceDroppable.left, c.draggableInitialOffsetInSourceDroppable.top],
  );
  return H.createElement(qr, { ref: i, style: g });
}
function Xo(e) {
  var t = e.children,
    r = e.droppableId,
    n = e.type,
    a = n === void 0 ? "DEFAULT" : n,
    o = e.direction,
    i = o === void 0 ? "vertical" : o,
    l = e.mode,
    d = l === void 0 ? "standard" : l,
    u = e.renderClone,
    c = e.getContainerForClone,
    s = e.isDropDisabled,
    p = s === void 0 ? !1 : s,
    g = Vr(p),
    f = oe(),
    m = f.contextId,
    y = f.droppableRegistry,
    b = bn({ contextId: m, droppableId: r, getIsDropDisabled: g }),
    x = v.useRef(null),
    I = v.useCallback(
      function (W) {
        (W &&
          sr(
            W,
            D(
              D(D(D({}, Z.droppable.type, a), Z.droppable.direction, i), B.droppable.id, r),
              B.droppable.contextId,
              m,
            ),
          ),
          (x.current = W));
      },
      [m, i, r, a],
    ),
    S = v.useReducer(Go, Jr),
    w = X(S, 2),
    h = w[0],
    R = w[1],
    O = h.draggingFromThisWith,
    P = h.draggingOverWith,
    E = h.isDraggingOver,
    j = po();
  v.useEffect(
    function () {
      var W = x.current;
      return (
        _e(W instanceof HTMLElement),
        ge(
          y.register({
            droppableId: r,
            type: a,
            isDropDisabled: p,
            parentDroppableId: j,
            element: W,
            direction: i,
            mode: d,
          }),
          Tr({
            element: W,
            getData: function (U) {
              var z = U.input;
              return yr(b, {
                element: W,
                input: z,
                allowedEdges: i === "vertical" ? ["top", "bottom"] : ["left", "right"],
              });
            },
            canDrop: function (U) {
              var z = U.source;
              return !ve(z.data) || p ? !1 : z.data.contextId === m && z.data.type === a;
            },
            onDragLeave: function () {
              R({ type: "DRAG_CLEAR" });
            },
          }),
        )
      );
    },
    [b, r, m, p, a, y, j, i, d],
  );
  var N = Ke();
  v.useEffect(
    function () {
      function W(Y) {
        var U,
          z = Y.type === a,
          J = ((U = Y.destination) === null || U === void 0 ? void 0 : U.droppableId) === r,
          _ = !E && J,
          F = E && !J,
          k = _ || F;
        return z && k;
      }
      return N({
        onPendingDragStart: function (U) {
          var z = U.start;
          W({ destination: z.source, type: z.type }) &&
            R({ type: "DRAG_START", payload: { droppableId: r, start: z } });
        },
        onPendingDragUpdate: function (U) {
          var z = U.update;
          W(z) && R({ type: "DRAG_UPDATE", payload: { droppableId: r, update: z } });
        },
        onBeforeDragEnd: function () {
          R({ type: "DRAG_CLEAR" });
        },
      });
    },
    [r, E, N, a],
  );
  var A = v.useMemo(
      function () {
        return E ? H.createElement(zo, { direction: i, mode: d }) : null;
      },
      [i, E, d],
    ),
    C = v.useMemo(
      function () {
        return {
          innerRef: I,
          droppableProps: D(D({}, B.droppable.contextId, m), B.droppable.id, r),
          placeholder: d === "standard" ? A : null,
        };
      },
      [m, A, r, d, I],
    ),
    T = v.useMemo(
      function () {
        return {
          draggingFromThisWith: O,
          draggingOverWith: P,
          isDraggingOver: E,
          isUsingPlaceholder: E,
        };
      },
      [O, P, E],
    ),
    L = x.current,
    K = E && d === "virtual" && L;
  Wr(
    function () {
      if (K) {
        var W = window.getComputedStyle(L),
          Y = W.position;
        if (Y === "static") {
          var U = L.style.position;
          return (
            (L.style.position = "relative"),
            function () {
              L.style.position = U;
            }
          );
        }
      }
    },
    [L, K],
  );
  var q = !!u,
    ee = v.useMemo(
      function () {
        return {
          direction: i,
          droppableId: r,
          shouldRenderCloneWhileDragging: q,
          isDropDisabled: p,
          type: a,
          mode: d,
        };
      },
      [i, r, q, p, a, d],
    ),
    V = O && d === "virtual" && L;
  return H.createElement(
    go,
    { value: ee },
    t(C, T),
    K && fe.createPortal(A, L),
    V &&
      fe.createPortal(
        H.createElement(Vo, {
          droppableId: r,
          draggableId: O,
          type: a,
          direction: i,
          isDropDisabled: p,
        }),
        L,
      ),
    u && H.createElement(Ao, { droppableId: r, type: a, getContainerForClone: c }, u),
  );
}
var qo = ["isRanking", "isRankingItem", "testId"],
  Qo = v.forwardRef(function (e, t) {
    var r = e.isRanking,
      n = e.isRankingItem,
      a = e.testId,
      o = he(e, qo);
    return v.createElement(
      ln,
      se({ ref: t, testId: a }, o, {
        className: or([
          r && "_1e0c1ule",
          n && "_2rkolb4i _bfhk1bhr _16qs1cd0",
          "_12y3e4h9 _mizu1p6i _ra3xnqa1",
        ]),
      }),
    );
  }),
  Zo = ["isRanking", "innerRef"],
  Jo = function (t) {
    var r = t.isRanking,
      n = t.innerRef,
      a = he(t, Zo);
    return v.createElement(dn, se({}, a, { innerRef: n, className: or([r && "_vchhusvi"]) }));
  },
  _o = ["content", "testId"];
function ei(e, t, r) {
  return (
    (t = re(t)),
    Ce(e, _r() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function _r() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_r = function () {
    return !!e;
  })();
}
var ti = (function (e) {
  function t() {
    return (Pe(this, t), ei(this, t, arguments));
  }
  return (
    Ae(t, e),
    Te(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.cell,
            o = n.head,
            i = n.isFixedSize,
            l = n.isRanking,
            d = n.refWidth,
            u = n.innerRef,
            c = n.testId,
            s = a.content,
            p = a.testId,
            g = he(a, _o),
            f = o || {},
            m = f.shouldTruncate,
            y = f.width,
            b = lr(l, d);
          return H.createElement(
            Jo,
            se({}, g, {
              isFixedSize: i,
              shouldTruncate: m,
              width: y,
              isRanking: l,
              style: b,
              onKeyDown: function (I) {
                return I.stopPropagation();
              },
              innerRef: u,
              "data-testid": p || (c && "".concat(c, "--rankable--table--body--cell")),
            }),
            s,
          );
        },
      },
    ])
  );
})(H.Component);
const ri = ir(ti);
var ni = ["cells", "testId", "key", "isHighlighted"];
function nr(e, t) {
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
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nr(Object(r), !0).forEach(function (n) {
          D(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ai(e, t, r) {
  return (
    (t = re(t)),
    Ce(e, en() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function en() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (en = function () {
    return !!e;
  })();
}
var oi = (function (e) {
  function t() {
    var r;
    Pe(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = ai(this, t, [].concat(a))),
      D(r, "innerRef", function (i) {
        return function (l) {
          (i(l), typeof r.props.innerRef == "function" && r.props.innerRef(l));
        };
      }),
      r
    );
  }
  return (
    Ae(t, e),
    Te(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            a = this.props,
            o = a.row,
            i = a.head,
            l = a.isFixedSize,
            d = a.isRanking,
            u = a.refWidth,
            c = a.rowIndex,
            s = a.isRankingDisabled,
            p = a.isHighlighted,
            g = a.testId,
            f = o.cells,
            m = o.testId,
            y = o.key,
            b = o.isHighlighted,
            x = he(o, ni),
            I = lr(d, u);
          if (typeof y != "string" && !s)
            throw new Error(
              "dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.",
            );
          return H.createElement(
            Oo,
            { draggableId: y || c.toString(), index: c, isDragDisabled: s },
            function (S, w) {
              var h;
              return H.createElement(
                Qo,
                se({}, x, S.dragHandleProps, S.draggableProps, {
                  role: void 0,
                  "aria-labelledby": void 0,
                  "aria-describedby":
                    (h = S.dragHandleProps) === null || h === void 0
                      ? void 0
                      : h["aria-describedby"],
                  ref: n.innerRef(S.innerRef),
                  style: ar(ar({}, S.draggableProps.style), I),
                  isHighlighted: p || b,
                  isRanking: d,
                  isRankingItem: w.isDragging,
                  testId: m || (g && "".concat(g, "--rankable--table--body--row")),
                }),
                f.map(function (R, O) {
                  var P = (i || { cells: [] }).cells[O];
                  return H.createElement(ri, {
                    head: P,
                    cell: R,
                    isRanking: d,
                    key: R.key || O,
                    isFixedSize: l,
                    testId: g,
                  });
                }),
              );
            },
          );
        },
      },
    ])
  );
})(H.Component);
const ii = ir(oi);
function li(e, t, r) {
  return (
    (t = re(t)),
    Ce(e, tn() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function tn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tn = function () {
    return !!e;
  })();
}
var di = function (t, r) {
    var n = t.source.index,
      a = t.destination;
    if (a) {
      var o = a.index,
        i = o < n ? o - 1 : o,
        l = i !== -1 ? r[i].key : void 0,
        d = i === -1 ? 0 : i + 1,
        u = d < r.length ? r[d].key : void 0;
      return { index: o, afterKey: l, beforeKey: u };
    }
  },
  ui = (function (e) {
    function t() {
      var r;
      Pe(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = li(this, t, [].concat(a))),
        D(r, "onBeforeDragStart", function (i) {
          var l = i.draggableId,
            d = i.source.index,
            u = { index: d, key: l };
          r.props.onRankStart(u);
        }),
        D(r, "onDragEnd", function (i) {
          var l = r.props,
            d = l.pageRows,
            u = l.onRankEnd,
            c = i.draggableId,
            s = i.source.index,
            p = di(i, d),
            g = { sourceIndex: s, sourceKey: c, destination: p };
          u(g);
        }),
        r
      );
    }
    return (
      Ae(t, e),
      Te(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.highlightedRowIndex,
              o = n.pageRows,
              i = n.head,
              l = n.isFixedSize,
              d = n.isRanking,
              u = n.isRankingDisabled,
              c = n.testId,
              s = n.forwardedRef;
            return H.createElement(
              co,
              { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
              H.createElement(
                Xo,
                { droppableId: "dynamic-table-droppable", isDropDisabled: u },
                function (p) {
                  return H.createElement(
                    "tbody",
                    se(
                      {
                        "data-testid": c,
                        ref: function (f) {
                          (p && typeof p.innerRef == "function" && p.innerRef(f),
                            s && (s.current = f));
                        },
                      },
                      p.droppableProps,
                    ),
                    o.map(function (g, f) {
                      return H.createElement(ii, {
                        head: i,
                        isRanking: d,
                        isFixedSize: l,
                        key: g.key,
                        rowIndex: f,
                        row: g,
                        isRankingDisabled: u,
                        isHighlighted:
                          a !== void 0 && (typeof a == "number" ? a === f : a.indexOf(f) > -1),
                        testId: c && "".concat(c, "--").concat(g.key, "--rankable--table--row"),
                      });
                    }),
                    p.placeholder,
                  );
                },
              ),
            );
          },
        },
      ])
    );
  })(H.Component);
const fi = un(
  H.forwardRef(function (e, t) {
    return H.createElement(ui, se({}, e, { forwardedRef: t }));
  }),
);
export { ui as RankableBody, fi as default };
