! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function n(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }

    function J(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function H(e) {
        return "string" == typeof e
    }

    function d(e) {
        return "function" == typeof e
    }

    function Q(e) {
        return "number" == typeof e
    }

    function r(e) {
        return void 0 === e
    }

    function E(e) {
        return "object" == typeof e
    }

    function O(e) {
        return !1 !== e
    }

    function i() {
        return "undefined" != typeof window
    }

    function Z(e) {
        return d(e) || H(e)
    }

    function g(e) {
        return (Ke = Ve(e, s)) && c
    }

    function $(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }

    function ee(e, t) {
        return !t && console.warn(e)
    }

    function m(e, t) {
        return e && (s[e] = t) && Ke && (Ke[e] = t) || s
    }

    function v() {
        return 0
    }

    function te(e) {
        var t, n, i = e[0];
        if (E(i) || d(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
            for (n = Bt.length; n-- && !Bt[n].targetTest(i););
            t = Bt[n]
        }
        for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new Jt(e[n], t))) || e.splice(n, 1);
        return e
    }

    function ne(e) {
        return e._gsap || te(M(e))[0]._gsap
    }

    function _(e, t, n) {
        return (n = e[t]) && d(n) ? e[t]() : r(n) && e.getAttribute && e.getAttribute(t) || n
    }

    function h(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }

    function R(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function k(e) {
        return Math.round(1e7 * e) / 1e7 || 0
    }

    function ie(e, t) {
        var n = t.charAt(0),
            t = parseFloat(t.substr(2));
        return e = parseFloat(e), "+" === n ? e + t : "-" === n ? e - t : "*" === n ? e * t : e / t
    }

    function oe() {
        var e, t, n = Pt.length,
            i = Pt.slice(0);
        for (Lt = {}, e = Pt.length = 0; e < n; e++)(t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }

    function y(e, t, n, i) {
        Pt.length && oe(), e.render(t, n, i || N), Pt.length && oe()
    }

    function b(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(Et).length < 2 ? t : H(e) ? e.trim() : e
    }

    function D(e) {
        return e
    }

    function B(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }

    function w(e, t) {
        for (var n in t) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = E(t[n]) ? w(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }

    function re(e, t) {
        var n, i = {};
        for (n in e) n in t || (i[n] = e[n]);
        return i
    }

    function se(e) {
        var i, t = e.parent || z,
            n = e.keyframes ? (i = F(e.keyframes), function(e, t) {
                for (var n in t) n in e || "duration" === n && i || "ease" === n || (e[n] = t[n])
            }) : B;
        if (O(e.inherit))
            for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    }

    function C(e, t, n, i, o) {
        void 0 === n && (n = "_first");
        var r, s = e[i = void 0 === i ? "_last" : i];
        if (o)
            for (r = t[o]; s && s[o] > r;) s = s._prev;
        s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e
    }

    function S(e, t, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var o = t._prev,
            r = t._next;
        o ? o._next = r : e[n] === t && (e[n] = r), r ? r._prev = o : e[i] === t && (e[i] = o), t._next = t._prev = t.parent = null
    }

    function ae(e, t) {
        !e.parent || t && !e.parent.autoRemoveChildren || e.parent.remove(e), e._act = 0
    }

    function T(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
        return e
    }

    function le(e, t, n, i) {
        e._startAt && (N ? e._startAt.revert(Ft) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    }

    function ue(e) {
        return e._repeat ? qe(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }

    function ce(e, t) {
        return (e - t._start) * t._ts + (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }

    function de(e) {
        e._end = k(e._start + (e._tDur / Math.abs(e._ts || e._rts || Y) || 0))
    }

    function pe(e, t) {
        var n = e._dp;
        n && n.smoothChildTiming && e._ts && (e._start = k(n._time - (0 < e._ts ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), de(e), n._dirty || T(n, e))
    }

    function he(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = ce(e.rawTime(), t), (!t._dur || Xe(0, t.totalDuration(), n) - t._tTime > Y) && t.render(n, !0)), T(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp;) 0 <= n.rawTime() && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -Y
        }
    }

    function A(e, t, n, i) {
        return t.parent && ae(t), t._start = k((Q(n) ? n : n || e !== z ? u(e, n, t) : e._time) + t._delay), t._end = k(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), C(e, t, "_first", "_last", e._sort ? "_start" : 0), Ye(t) || (e._recent = t), i || he(e, t), e._ts < 0 && pe(e, e._tTime), e
    }

    function fe(e, t) {
        (s.ScrollTrigger || $("scrollTrigger", t)) && s.ScrollTrigger.create(t, e)
    }

    function ge(e, t, n, i) {
        return nn(e, t), !e._initted || !n && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && Qe !== f.frame && (Pt.push(e), e._lazy = [t, i])
    }

    function me(e, t, n, i) {
        var o = e._repeat,
            t = k(t) || 0,
            r = e._tTime / e._tDur;
        return r && !i && (e._time *= t / e._dur), e._dur = t, e._tDur = o ? o < 0 ? 1e10 : k(t * (o + 1) + e._rDelay * o) : t, 0 < r && !i ? pe(e, e._tTime = e._tDur * r) : e.parent && de(e), n || T(e.parent, e), e
    }

    function ve(e) {
        return e instanceof L ? T(e) : me(e, e._dur)
    }

    function _e(e, t, n) {
        var i, o, r = Q(t[1]),
            s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
        if (r && (a.duration = t[1]), a.parent = n, e) {
            for (i = a, o = n; o && !("immediateRender" in i);) i = o.vars.defaults || {}, o = O(o.vars.inherit) && o.parent;
            a.immediateRender = O(i.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
        }
        return new j(t[0], a, t[1 + s])
    }

    function ye(e, t) {
        return e || 0 === e ? t(e) : t
    }

    function V(e, t) {
        return H(e) && (t = kt.exec(e)) ? t[1] : ""
    }

    function be(e, t) {
        return e && E(e) && "length" in e && (!t && !e.length || e.length - 1 in e && E(e[0])) && !e.nodeType && e !== l
    }

    function xe(n) {
        return n = M(n)[0] || ee("Invalid scope") || {},
            function(e) {
                var t = n.current || n.nativeElement || n;
                return M(e, t.querySelectorAll ? t : t === n ? ee("Invalid scope") || Ue.createElement("div") : n)
            }
    }

    function De(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }

    function we(e) {
        if (d(e)) return e;
        var h = E(e) ? e : {
                each: e
            },
            f = Wt(h.ease),
            g = h.from || 0,
            m = parseFloat(h.base) || 0,
            v = {},
            e = 0 < g && g < 1,
            _ = isNaN(g) || e,
            y = h.axis,
            b = g,
            x = g;
        return H(g) ? b = x = {
                center: .5,
                edges: .5,
                end: 1
            }[g] || 0 : !e && _ && (b = g[0], x = g[1]),
            function(e, t, n) {
                var i, o, r, s, a, l, u, c, d = (n || h).length,
                    p = v[d];
                if (!p) {
                    if (!(c = "auto" === h.grid ? 0 : (h.grid || [1, I])[1])) {
                        for (l = -I; l < (l = n[c++].getBoundingClientRect().left) && c < d;);
                        c--
                    }
                    for (p = v[d] = [], i = _ ? Math.min(c, d) * b - .5 : g % c, o = c === I ? 0 : _ ? d * x / c - .5 : g / c | 0, u = I, a = l = 0; a < d; a++) s = a % c - i, r = o - (a / c | 0), p[a] = s = y ? Math.abs("y" === y ? r : s) : _t(s * s + r * r), l < s && (l = s), s < u && (u = s);
                    "random" === g && De(p), p.max = l - u, p.min = u, p.v = d = (parseFloat(h.amount) || parseFloat(h.each) * (d < c ? d - 1 : y ? "y" === y ? d / c : c : Math.max(c, d / c)) || 0) * ("edges" === g ? -1 : 1), p.b = d < 0 ? m - d : m, p.u = V(h.amount || h.each) || 0, f = f && d < 0 ? Gt(f) : f
                }
                return d = (p[e] - p.min) / p.max || 0, k(p.b + (f ? f(d) : d) * p.v) + p.u
            }
    }

    function Ce(n) {
        var i = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(e) {
            var t = k(Math.round(parseFloat(e) / n) * n * i);
            return (t - t % 1) / i + (Q(e) ? 0 : V(e))
        }
    }

    function Se(l, e) {
        var u, c, t = F(l);
        return !t && E(l) && (u = t = l.radius || I, l.values ? (l = M(l.values), (c = !Q(l[0])) && (u *= u)) : l = Ce(l.increment)), ye(e, t ? d(l) ? function(e) {
            return c = l(e), Math.abs(c - e) <= u ? c : e
        } : function(e) {
            for (var t, n, i = parseFloat(c ? e.x : e), o = parseFloat(c ? e.y : 0), r = I, s = 0, a = l.length; a--;)(t = c ? (t = l[a].x - i) * t + (n = l[a].y - o) * n : Math.abs(l[a] - i)) < r && (r = t, s = a);
            return s = !u || r <= u ? l[s] : e, c || s === e || Q(e) ? s : s + V(e)
        } : Ce(l))
    }

    function Te(e, t, n, i) {
        return ye(F(e) ? !t : !0 === n ? !!(n = 0) : !i, function() {
            return F(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * i) / i
        })
    }

    function Ee(t, n, e) {
        return ye(e, function(e) {
            return t[~~n(e)]
        })
    }

    function ke(e) {
        for (var t, n, i, o, r = 0, s = ""; ~(t = e.indexOf("random(", r));) i = e.indexOf(")", t), o = "[" === e.charAt(t + 7), n = e.substr(t + 7, i - t - 7).match(o ? Et : Dt), s += e.substr(r, t - r) + Te(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), r = i + 1;
        return s + e.substr(r, e.length - r)
    }

    function Ae(e, t, n) {
        var i, o, r, s = e.labels,
            a = I;
        for (i in s)(o = s[i] - t) < 0 == !!n && o && a > (o = Math.abs(o)) && (r = i, a = o);
        return r
    }

    function Fe(e) {
        return ae(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && x(e, "onInterrupt"), e
    }

    function Me(e, t, n) {
        return (6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * p + .5 | 0
    }

    function Pe(e, t, n) {
        var i, o, r, s, a, l, u, c = e ? Q(e) ? [e >> 16, e >> 8 & p, e & p] : 0 : Ht.black;
        if (!c) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Ht[e]) c = Ht[e];
            else if ("#" === e.charAt(0)) {
                if (9 === (e = e.length < 6 ? "#" + (i = e.charAt(1)) + i + (o = e.charAt(2)) + o + (r = e.charAt(3)) + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "") : e).length) return [(c = parseInt(e.substr(1, 6), 16)) >> 16, c >> 8 & p, c & p, parseInt(e.substr(7), 16) / 255];
                c = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & p, e & p]
            } else if ("hsl" === e.substr(0, 3))
                if (c = u = e.match(Dt), t) {
                    if (~e.indexOf("=")) return c = e.match(wt), n && c.length < 4 && (c[3] = 1), c
                } else s = +c[0] % 360 / 360, a = c[1] / 100, i = 2 * (l = c[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < c.length && (c[3] *= 1), c[0] = Me(s + 1 / 3, i, o), c[1] = Me(s, i, o), c[2] = Me(s - 1 / 3, i, o);
            else c = e.match(Dt) || Ht.transparent;
            c = c.map(Number)
        }
        return t && !u && (i = c[0] / p, o = c[1] / p, r = c[2] / p, l = ((e = Math.max(i, o, r)) + (t = Math.min(i, o, r))) / 2, e === t ? s = a = 0 : (u = e - t, a = .5 < l ? u / (2 - e - t) : u / (e + t), s = e === i ? (o - r) / u + (o < r ? 6 : 0) : e === o ? (r - i) / u + 2 : (i - o) / u + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * a + .5), c[2] = ~~(100 * l + .5)), n && c.length < 4 && (c[3] = 1), c
    }

    function Le(e) {
        var t = [],
            n = [],
            i = -1;
        return e.split(Vt).forEach(function(e) {
            e = e.match(Ct) || [];
            t.push.apply(t, e), n.push(i += e.length + 1)
        }), t.c = n, t
    }

    function Oe(e, t, n) {
        var i, o, r, s, a = "",
            l = (e + a).match(Vt),
            u = t ? "hsla(" : "rgba(",
            c = 0;
        if (!l) return e;
        if (l = l.map(function(e) {
                return (e = Pe(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), n && (r = Le(e), (i = n.c).join(a) !== r.c.join(a)))
            for (s = (o = e.replace(Vt, "1").split(Ct)).length - 1; c < s; c++) a += o[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (r.length ? r : l.length ? l : n).shift());
        if (!o)
            for (s = (o = e.split(Vt)).length - 1; c < s; c++) a += o[c] + l[c];
        return a + o[s]
    }

    function Re(e) {
        var t = e.join(" ");
        if (Vt.lastIndex = 0, Vt.test(t)) return t = qt.test(t), e[1] = Oe(e[1], t), e[0] = Oe(e[0], t, Le(e[1])), !0
    }

    function Be(e, t) {
        for (var n, i = e._first; i;) i instanceof L ? Be(i, t) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === t || (i.timeline ? Be(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next
    }

    function Ne(e, t, n, i) {
        var o, r = {
            easeIn: t,
            easeOut: n = void 0 === n ? function(e) {
                return 1 - t(1 - e)
            } : n,
            easeInOut: i = void 0 === i ? function(e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            } : i
        };
        h(e, function(e) {
            for (var t in P[e] = s[e] = r, P[o = e.toLowerCase()] = n, r) P[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = P[e + "." + t] = r[t]
        })
    }

    function ze(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function Ie(n, e, t) {
        function i(e) {
            return 1 === e ? 1 : o * Math.pow(2, -10 * e) * bt((e - r) * s) + 1
        }
        var o = 1 <= e ? e : 1,
            r = (s = (t || (n ? .3 : .45)) / (e < 1 ? e : 1)) / gt * (Math.asin(1 / o) || 0),
            t = "out" === n ? i : "in" === n ? function(e) {
                return 1 - i(1 - e)
            } : ze(i),
            s = gt / s;
        return t.config = function(e, t) {
            return Ie(n, e, t)
        }, t
    }

    function He(t, n) {
        function i(e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0
        }
        void 0 === n && (n = 1.70158);
        var e = "out" === t ? i : "in" === t ? function(e) {
            return 1 - i(1 - e)
        } : ze(i);
        return e.config = function(e) {
            return He(t, e)
        }, e
    }

    function Ve(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function qe(e, t) {
        return t = Math.floor(e /= t), e && t === e ? t - 1 : t
    }

    function Ye(e) {
        return "isFromStart" === (e = e.data) || "isStart" === e
    }

    function u(e, t, n) {
        var i, o, r, s = e.labels,
            a = e._recent || zt,
            l = e.duration() >= I ? a.endTime(!1) : e._dur;
        return H(t) && (isNaN(t) || t in s) ? (o = t.charAt(0), r = "%" === t.substr(-1), i = t.indexOf("="), "<" === o || ">" === o ? (0 <= i && (t = t.replace(/=/, "")), ("<" === o ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(t.substr(1)) || 0) * (r ? (i < 0 ? a : n).totalDuration() / 100 : 1)) : i < 0 ? (t in s || (s[t] = l), s[t]) : (o = parseFloat(t.charAt(i - 1) + t.substr(i + 1)), r && n && (o = o / 100 * (F(n) ? n[0] : n).totalDuration()), 1 < i ? u(e, t.substr(0, i - 1), n) + o : l + o)) : null == t ? l : +t
    }

    function Xe(e, t, n) {
        return n < e ? e : t < n ? t : n
    }

    function je(t, e, n, i, o) {
        var r = e - t,
            s = i - n;
        return ye(o, function(e) {
            return n + ((e - t) / r * s || 0)
        })
    }

    function x(e, t, n) {
        var i = e.vars,
            o = i[t],
            r = a,
            s = e._ctx;
        if (o) t = i[t + "Params"], i = i.callbackScope || e, n && Pt.length && oe(), s && (a = s), e = t ? o.apply(i, t) : o.call(i), a = r
    }
    var Ge, N, a, z, l, We, Ue, Ke, Je, Qe, Ze, $e, et, tt, nt, it, ot, rt, st, at, lt, ut, ct, dt, pt, ht, q = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        ft = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        I = 1e8,
        Y = 1 / I,
        gt = 2 * Math.PI,
        mt = gt / 4,
        vt = 0,
        _t = Math.sqrt,
        yt = Math.cos,
        bt = Math.sin,
        xt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        F = Array.isArray,
        Dt = /(?:-?\.?\d|\.)+/gi,
        wt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        St = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Tt = /[+-]=-?[.\d]+/,
        Et = /[^,'"\[\]\s]+/gi,
        kt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        s = {},
        At = {
            suppressEvents: !0,
            isStart: !0
        },
        Ft = {
            suppressEvents: !0
        },
        Mt = {},
        Pt = [],
        Lt = {},
        X = {},
        Ot = {},
        Rt = 30,
        Bt = [],
        Nt = "",
        zt = {
            _start: 0,
            endTime: v,
            totalDuration: v
        },
        It = [].slice,
        M = function(e, t, n) {
            return a && !t && a.selector ? a.selector(e) : !H(e) || n || !We && Yt() ? F(e) ? (i = n, void 0 === o && (o = []), e.forEach(function(e) {
                return H(e) && !i || be(e, 1) ? o.push.apply(o, M(e)) : o.push(e)
            }) || o) : be(e) ? It.call(e, 0) : e ? [e] : [] : It.call((t || Ue).querySelectorAll(e), 0);
            var i, o
        },
        p = 255,
        Ht = {
            aqua: [0, p, p],
            lime: [0, p, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, p],
            navy: [0, 0, 128],
            white: [p, p, p],
            olive: [128, 128, 0],
            yellow: [p, p, 0],
            orange: [p, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [p, 0, 0],
            pink: [p, 192, 203],
            cyan: [0, p, p],
            transparent: [p, p, p, 0]
        },
        Vt = function() {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in Ht) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        qt = /hsl[a]?\(/,
        f = (rt = Date.now, st = 500, at = 33, lt = rt(), ut = lt, dt = ct = 1e3 / 240, nt = {
            time: 0,
            frame: 0,
            tick: function() {
                Ut(!0)
            },
            deltaRatio: function(e) {
                return it / (1e3 / (e || 60))
            },
            wake: function() {
                Je && (!We && i() && (l = We = window, Ue = l.document || {}, s.gsap = c, (l.gsapVersions || (l.gsapVersions = [])).push(c.version), g(Ke || l.GreenSockGlobals || !l.gsap && l || {}), tt = l.requestAnimationFrame), $e && nt.sleep(), et = tt || function(e) {
                    return setTimeout(e, dt - 1e3 * nt.time + 1 | 0)
                }, Ze = 1, Ut(2))
            },
            sleep: function() {
                (tt ? l.cancelAnimationFrame : clearTimeout)($e), Ze = 0, et = v
            },
            lagSmoothing: function(e, t) {
                st = e || 1e8, at = Math.min(t, st, 0)
            },
            fps: function(e) {
                ct = 1e3 / (e || 240), dt = 1e3 * nt.time + ct
            },
            add: function(o, e, t) {
                var r = e ? function(e, t, n, i) {
                    o(e, t, n, i), nt.remove(r)
                } : o;
                return nt.remove(o), pt[t ? "unshift" : "push"](r), Yt(), r
            },
            remove: function(e, t) {
                ~(t = pt.indexOf(e)) && pt.splice(t, 1) && t <= ot && ot--
            },
            _listeners: pt = []
        }),
        Yt = function() {
            return !Ze && f.wake()
        },
        P = {},
        Xt = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        Gt = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Wt = function(e, t) {
            return e && (d(e) ? e : P[e] || (r = ((e = e) + "").split("("), (s = P[r[0]]) && 1 < r.length && s.config ? s.config.apply(null, ~e.indexOf("{") ? [function(e) {
                for (var t, n, i, o = {}, r = e.substr(1, e.length - 3).split(":"), s = r[0], a = 1, l = r.length; a < l; a++) n = r[a], t = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, t), o[s] = isNaN(i) ? i.replace(jt, "").trim() : +i, s = n.substr(t + 1).trim();
                return o
            }(r[1])] : (n = (r = e).indexOf("(") + 1, i = r.indexOf(")"), o = r.indexOf("(", n), r.substring(n, ~o && o < i ? r.indexOf(")", i + 1) : i).split(",").map(b))) : P._CE && Xt.test(e) ? P._CE("", e) : s)) || t;
            var n, i, o, r, s
        };

    function Ut(e) {
        var t, n, i, o = rt() - ut,
            r = !0 === e;
        if (st < o && (lt += o - at), (0 < (o = (n = (ut += o) - lt) - dt) || r) && (i = ++nt.frame, it = n - 1e3 * nt.time, nt.time = n /= 1e3, dt += o + (ct <= o ? 4 : ct - o), t = 1), r || ($e = et(Ut)), t)
            for (ot = 0; ot < pt.length; ot++) pt[ot](n, it, i, e)
    }

    function Kt(e) {
        return e < 1 / 2.75 ? ht * e * e : e < .7272727272727273 ? ht * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < .9090909090909092 ? ht * (e -= 2.25 / 2.75) * e + .9375 : ht * Math.pow(e - 2.625 / 2.75, 2) + .984375
    }
    h("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        Ne(e + ",Power" + (n - 1), t ? function(e) {
            return Math.pow(e, n)
        } : function(e) {
            return e
        }, function(e) {
            return 1 - Math.pow(1 - e, n)
        }, function(e) {
            return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
    }), P.Linear.easeNone = P.none = P.Linear.easeIn, Ne("Elastic", Ie("in"), Ie("out"), Ie()), ht = 7.5625, Ne("Bounce", function(e) {
        return 1 - Kt(1 - e)
    }, Kt), Ne("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    }), Ne("Circ", function(e) {
        return -(_t(1 - e * e) - 1)
    }), Ne("Sine", function(e) {
        return 1 === e ? 1 : 1 - yt(e * mt)
    }), Ne("Back", He("in"), He("out"), He()), P.SteppedEase = P.steps = s.SteppedEase = {
        config: function(e, t) {
            var n = 1 / (e = void 0 === e ? 1 : e),
                i = e + (t ? 0 : 1),
                o = t ? 1 : 0;
            return function(e) {
                return ((i * Xe(0, .99999999, e) | 0) + o) * n
            }
        }
    }, ft.ease = P["quad.out"], h("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return Nt += e + "," + e + "Params,"
    });
    var Jt = function(e, t) {
            this.id = vt++, (e._gsap = this).target = e, this.harness = t, this.get = t ? t.get : _, this.set = t ? t.getSetter : Dn
        },
        Qt = ((t = Zt.prototype).delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, me(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(e, t) {
            if (Yt(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (pe(this, e), n._dp && !n.parent && he(n, this); n && n.parent;) n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && A(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Y || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), y(this, e, t)), this
        }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ue(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + ue(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? qe(this._tTime, n) + 1 : 1
        }, t.timeScale = function(e) {
            if (!arguments.length) return this._rts === -Y ? 0 : this._rts;
            if (this._rts === e) return this;
            for (var t = this.parent && this._ts ? ce(this.parent._time, this) : this._tTime, e = (this._rts = +e || 0, this._ts = this._ps || e === -Y ? 0 : this._rts, this.totalTime(Xe(-this._delay, this._tDur, t), !0), de(this), this), n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
            return e
        }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Yt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Y && (this._tTime -= Y)))), this) : this._ps
        }, t.startTime = function(e) {
            var t;
            return arguments.length ? (this._start = e, !(t = this.parent || this._dp) || !t._sort && this.parent || A(t, this, e - this._delay), this) : this._start
        }, t.endTime = function(e) {
            return this._start + (O(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ce(t.rawTime(e), this) : this._tTime : this._tTime
        }, t.revert = function(e) {
            var t = N;
            return N = e = void 0 === e ? Ft : e, this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents), "nested" !== this.data && ae(this), N = t, this
        }, t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (t._ts || 1), t = t._dp;
            return !this.parent && this.vars.immediateRender ? -1 : n
        }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, ve(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(e) {
            var t;
            return arguments.length ? (t = this._time, this._rDelay = e, ve(this), t ? this.time(t) : this) : this._rDelay
        }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, t.seek = function(e, t) {
            return this.totalTime(u(this, e), O(t))
        }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, O(t))
        }, t.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, t.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -Y : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Y, this
        }, t.isActive = function() {
            var e = this.parent || this._dp,
                t = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (e = e.rawTime(!0)) >= t && e < this.endTime(!0) - Y))
        }, t.eventCallback = function(e, t, n) {
            var i = this.vars;
            return 1 < arguments.length ? (t ? (i[e] = t, n && (i[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
        }, t.then = function(i) {
            var o = this;
            return new Promise(function(t) {
                function e() {
                    var e = o.then;
                    o.then = null, d(n) && (n = n(o)) && (n.then || n === o) && (o.then = e), t(n), o.then = e
                }
                var n = d(i) ? i : D;
                o._initted && 1 === o.totalProgress() && 0 <= o._ts || !o._tTime && o._ts < 0 ? e() : o._prom = e
            })
        }, t.kill = function() {
            Fe(this)
        }, Zt);

    function Zt(e) {
        this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, me(this, +e.duration, 1, 1), this.data = e.data, a && (this._ctx = a).data.push(this), Ze || f.wake()
    }
    B(Qt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Y,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    n(en, $t = Qt), (t = en.prototype).to = function(e, t, n) {
        return _e(0, arguments, this), this
    }, t.from = function(e, t, n) {
        return _e(1, arguments, this), this
    }, t.fromTo = function(e, t, n, i) {
        return _e(2, arguments, this), this
    }, t.set = function(e, t, n) {
        return t.duration = 0, t.parent = this, se(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new j(e, t, u(this, n), 1), this
    }, t.call = function(e, t, n) {
        return A(this, j.delayedCall(0, e, t), n)
    }, t.staggerTo = function(e, t, n, i, o, r, s) {
        return n.duration = t, n.stagger = n.stagger || i, n.onComplete = r, n.onCompleteParams = s, n.parent = this, new j(e, n, u(this, o)), this
    }, t.staggerFrom = function(e, t, n, i, o, r, s) {
        return n.runBackwards = 1, se(n).immediateRender = O(n.immediateRender), this.staggerTo(e, t, n, i, o, r, s)
    }, t.staggerFromTo = function(e, t, n, i, o, r, s, a) {
        return i.startAt = n, se(i).immediateRender = O(i.immediateRender), this.staggerTo(e, t, i, o, r, s, a)
    }, t.render = function(e, t, n) {
        var i, o, r, s, a, l, u, c, d, p, h = this._time,
            f = this._dirty ? this.totalDuration() : this._tDur,
            g = this._dur,
            m = e <= 0 ? 0 : k(e),
            v = this._zTime < 0 != e < 0 && (this._initted || !g);
        if ((m = this !== z && f < m && 0 <= e ? f : m) !== this._tTime || n || v) {
            if (h !== this._time && g && (m += this._time - h, e += this._time - h), i = m, c = this._start, a = !(u = this._ts), v && (g || (h = this._zTime), !e && t || (this._zTime = e)), this._repeat) {
                if (v = this._yoyo, s = g + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, n);
                if (i = k(m % s), m === f ? (r = this._repeat, i = g) : ((r = ~~(m / s)) && r === m / s && (i = g, r--), g < i && (i = g)), d = qe(this._tTime, s), v && 1 & r && (i = g - i, p = 1), r !== (d = !h && this._tTime && d !== r ? r : d) && !this._lock) {
                    var _ = v && 1 & d,
                        v = _ === (v && 1 & r),
                        h = (_ = r < d ? !_ : _) ? 0 : g;
                    if (this._lock = 1, this.render(h || (p ? 0 : k(r * s)), t, !g)._lock = 0, this._tTime = m, !t && this.parent && x(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), h && h !== this._time || a != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (g = this._dur, f = this._tDur, v && (this._lock = 2, this.render(h = _ ? g : -1e-4, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !a) return this;
                    Be(this, p)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(e, t, n) {
                    var i;
                    if (t < n)
                        for (i = e._first; i && i._start <= n;) {
                            if ("isPause" === i.data && i._start > t) return i;
                            i = i._next
                        } else
                            for (i = e._last; i && i._start >= n;) {
                                if ("isPause" === i.data && i._start < t) return i;
                                i = i._prev
                            }
                }(this, k(h), k(i))) && (m -= i - (i = l._start)), this._tTime = m, this._time = i, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, h = 0), !h && i && !t && (x(this, "onStart"), this._tTime !== m)) return this;
            if (h <= i && 0 <= e)
                for (y = this._first; y;) {
                    if (o = y._next, (y._act || i >= y._start) && y._ts && l !== y) {
                        if (y.parent !== this) return this.render(e, t, n);
                        if (y.render(0 < y._ts ? (i - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (i - y._start) * y._ts, t, n), i !== this._time || !this._ts && !a) {
                            l = 0, o && (m += this._zTime = -Y);
                            break
                        }
                    }
                    y = o
                } else {
                    n = n || N;
                    for (var y = this._last, b = e < 0 ? e : i; y;) {
                        if (o = y._prev, (y._act || b <= y._end) && y._ts && l !== y) {
                            if (y.parent !== this) return this.render(e, t, n);
                            if (y.render(0 < y._ts ? (b - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (b - y._start) * y._ts, t, n), i !== this._time || !this._ts && !a) {
                                l = 0, o && (m += this._zTime = b ? -Y : Y);
                                break
                            }
                        }
                        y = o
                    }
                }
            if (l && !t && (this.pause(), l.render(h <= i ? 0 : -Y)._zTime = h <= i ? 1 : -1, this._ts)) return this._start = c, de(this), this.render(e, t, n);
            this._onUpdate && !t && x(this, "onUpdate", !0), !(m === f && this._tTime >= this.totalDuration() || !m && h) || c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || (!e && g || !(m === f && 0 < this._ts || !m && this._ts < 0) || ae(this, 1), t || e < 0 && !h || !m && !h && f || (x(this, m === f && 0 <= e ? "onComplete" : "onReverseComplete", !0), !this._prom || m < f && 0 < this.timeScale() || this._prom()))
        }
        return this
    }, t.add = function(e, t) {
        var n = this;
        if (Q(t) || (t = u(this, t, e)), !(e instanceof Qt)) {
            if (F(e)) return e.forEach(function(e) {
                return n.add(e, t)
            }), this;
            if (H(e)) return this.addLabel(e, t);
            if (!d(e)) return this;
            e = j.delayedCall(0, e)
        }
        return this !== e ? A(this, e, t) : this
    }, t.getChildren = function(e, t, n, i) {
        void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === i && (i = -I);
        for (var o = [], r = this._first; r;) r._start >= i && (r instanceof j ? t && o.push(r) : (n && o.push(r), e && o.push.apply(o, r.getChildren(!0, t, n)))), r = r._next;
        return o
    }, t.getById = function(e) {
        for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
            if (t[n].vars.id === e) return t[n]
    }, t.remove = function(e) {
        return H(e) ? this.removeLabel(e) : d(e) ? this.killTweensOf(e) : (S(this, e), e === this._recent && (this._recent = this._last), T(this))
    }, t.totalTime = function(e, t) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = k(f.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), $t.prototype.totalTime.call(this, e, t), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(e, t) {
        return this.labels[e] = u(this, t), this
    }, t.removeLabel = function(e) {
        return delete this.labels[e], this
    }, t.addPause = function(e, t, n) {
        t = j.delayedCall(0, t || v, n);
        return t.data = "isPause", this._hasPause = 1, A(this, t, u(this, e))
    }, t.removePause = function(e) {
        var t = this._first;
        for (e = u(this, e); t;) t._start === e && "isPause" === t.data && ae(t), t = t._next
    }, t.killTweensOf = function(e, t, n) {
        for (var i = this.getTweensOf(e, n), o = i.length; o--;) rn !== i[o] && i[o].kill(e, t);
        return this
    }, t.getTweensOf = function(e, t) {
        for (var n, i = [], o = M(e), r = this._first, s = Q(t); r;) r instanceof j ? function(e, t) {
            for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
            return i < n
        }(r._targets, o) && (s ? (!rn || r._initted && r._ts) && r.globalTime(0) <= t && r.globalTime(r.totalDuration()) > t : !t || r.isActive()) && i.push(r) : (n = r.getTweensOf(o, t)).length && i.push.apply(i, n), r = r._next;
        return i
    }, t.tweenTo = function(e, t) {
        t = t || {};
        var n, i = this,
            o = u(i, e),
            r = t.startAt,
            s = t.onStart,
            a = t.onStartParams,
            e = t.immediateRender,
            l = j.to(i, B({
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: t.duration || Math.abs((o - (r && "time" in r ? r.time : i._time)) / i.timeScale()) || Y,
                onStart: function() {
                    var e;
                    i.pause(), n || (e = t.duration || Math.abs((o - (r && "time" in r ? r.time : i._time)) / i.timeScale()), l._dur !== e && me(l, e, 0, 1).render(l._time, !0, !0), n = 1), s && s.apply(l, a || [])
                }
            }, t));
        return e ? l.render(0) : l
    }, t.tweenFromTo = function(e, t, n) {
        return this.tweenTo(t, B({
            startAt: {
                time: u(this, e)
            }
        }, n))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(e) {
        return void 0 === e && (e = this._time), Ae(this, u(this, e))
    }, t.previousLabel = function(e) {
        return void 0 === e && (e = this._time), Ae(this, u(this, e), 1)
    }, t.currentLabel = function(e) {
        return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Y)
    }, t.shiftChildren = function(e, t, n) {
        void 0 === n && (n = 0);
        for (var i, o = this._first, r = this.labels; o;) o._start >= n && (o._start += e, o._end += e), o = o._next;
        if (t)
            for (i in r) r[i] >= n && (r[i] += e);
        return T(this)
    }, t.invalidate = function() {
        var e = this._first;
        for (this._lock = 0; e;) e.invalidate(), e = e._next;
        return $t.prototype.invalidate.call(this)
    }, t.clear = function(e) {
        void 0 === e && (e = !0);
        for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
        return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), T(this)
    }, t.totalDuration = function(e) {
        var t, n, i, o = 0,
            r = this,
            s = r._last,
            a = I;
        if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
        if (r._dirty) {
            for (i = r.parent; s;) t = s._prev, s._dirty && s.totalDuration(), a < (n = s._start) && r._sort && s._ts && !r._lock ? (r._lock = 1, A(r, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (o -= n, (!i && !r._dp || i && i.smoothChildTiming) && (r._start += n / r._ts, r._time -= n, r._tTime -= n), r.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            me(r, r === z && r._time > o ? r._time : o, 1, 1), r._dirty = 0
        }
        return r._tDur
    }, en.updateRoot = function(e) {
        if (z._ts && (y(z, ce(e, z)), Qe = f.frame), f.frame >= Rt) {
            Rt += q.autoSleep || 120;
            var t = z._first;
            if ((!t || !t._ts) && q.autoSleep && f._listeners.length < 2) {
                for (; t && !t._ts;) t = t._next;
                t || f.sleep()
            }
        }
    };
    var $t, L = en;

    function en(e, t) {
        var n;
        return (n = $t.call(this, e = void 0 === e ? {} : e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = O(e.sortChildren), z && A(e.parent || z, J(n), t), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && fe(J(n), e.scrollTrigger), n
    }

    function tn(e, t, n, i, o, r) {
        var s, a, l, u;
        if (X[e] && !1 !== (s = new X[e]).init(o, s.rawVars ? t[e] : function(e, t, n, i, o) {
                if (!E(e = d(e) ? on(e, o, t, n, i) : e) || e.style && e.nodeType || F(e) || xt(e)) return H(e) ? on(e, o, t, n, i) : e;
                var r, s = {};
                for (r in e) s[r] = on(e[r], o, t, n, i);
                return s
            }(t[e], i, o, r, n), n, i, r) && (n._pt = a = new G(n._pt, o, e, 0, 1, s.render, s, 0, s.priority), n !== Nn))
            for (l = n._ptLookup[n._targets.indexOf(o)], u = s._props.length; u--;) l[s._props[u]] = a;
        return s
    }
    B(L.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function nn(e, t) {
        var n, i, o, r, s, a, l, u, c, d, p, h, f, g = e.vars,
            m = g.ease,
            v = g.startAt,
            _ = g.immediateRender,
            y = g.lazy,
            b = g.onUpdate,
            x = g.onUpdateParams,
            D = g.callbackScope,
            w = g.runBackwards,
            C = g.yoyoEase,
            S = g.keyframes,
            T = g.autoRevert,
            E = e._dur,
            k = e._startAt,
            A = e._targets,
            F = e.parent,
            M = F && "nested" === F.data ? F.parent._targets : A,
            P = "auto" === e._overwrite && !Ge,
            L = e.timeline;
        if (e._ease = Wt(m = !L || S && m ? m : "none", ft.ease), e._yEase = C ? Gt(Wt(!0 === C ? m : C, ft.ease)) : 0, C && e._yoyo && !e._repeat && (C = e._yEase, e._yEase = e._ease, e._ease = C), e._from = !L && !!g.runBackwards, !L || S && !g.stagger) {
            if (h = (u = A[0] ? ne(A[0]).harness : 0) && g[u.prop], n = re(g, Mt), k && (k.revert(w && E ? Ft : At), k._lazy = 0), v) {
                if (ae(e._startAt = j.set(A, B({
                        data: "isStart",
                        overwrite: !1,
                        parent: F,
                        immediateRender: !0,
                        lazy: O(y),
                        startAt: null,
                        delay: 0,
                        onUpdate: b,
                        onUpdateParams: x,
                        callbackScope: D,
                        stagger: 0
                    }, v))), t < 0 && (N || !_ && !T) && e._startAt.revert(Ft), _ && E && t <= 0) return void(t && (e._zTime = t))
            } else if (w && E && !k)
                if (o = B({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: (_ = t ? !1 : _) && O(y),
                        immediateRender: _,
                        stagger: 0,
                        parent: F
                    }, n), h && (o[u.prop] = h), ae(e._startAt = j.set(A, o)), t < 0 && (N ? e._startAt.revert(Ft) : e._startAt.render(-1, !0)), e._zTime = t, _) {
                    if (!t) return
                } else nn(e._startAt, Y);
            for (e._pt = e._ptCache = 0, y = E && O(y) || y && !E, i = 0; i < A.length; i++) {
                if (l = (s = A[i])._gsap || te(A)[i]._gsap, e._ptLookup[i] = d = {}, Lt[l.id] && Pt.length && oe(), p = M === A ? i : M.indexOf(s), u && !1 !== (c = new u).init(s, h || n, e, p, M) && (e._pt = r = new G(e._pt, s, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach(function(e) {
                        d[e] = r
                    }), c.priority && (a = 1)), !u || h)
                    for (o in n) X[o] && (c = tn(o, n, e, p, s, M)) ? c.priority && (a = 1) : d[o] = r = ln.call(e, s, o, "get", n[o], p, M, 0, g.stringFilter);
                e._op && e._op[i] && e.kill(s, e._op[i]), P && e._pt && (rn = e, z.killTweensOf(s, d, e.globalTime(t)), f = !e.parent, rn = 0), e._pt && y && (Lt[l.id] = 1)
            }
            a && wn(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = b, e._initted = (!e._op || e._pt) && !f, S && t <= 0 && L.render(I, !0, !0)
    }

    function on(e, t, n, i, o) {
        return d(e) ? e.call(t, n, i, o) : H(e) && ~e.indexOf("random(") ? ke(e) : e
    }
    var rn, sn, an, ln = function(e, t, n, i, o, r, s, a, l, u) {
            d(i) && (i = i(o || 0, e, r));
            var c, o = e[t],
                r = "get" !== n ? n : d(o) ? l ? e[t.indexOf("set") || !d(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : o,
                n = d(o) ? l ? gn : fn : hn;
            if (H(i) && ("=" !== (i = ~i.indexOf("random(") ? ke(i) : i).charAt(1) || !(c = ie(r, i) + (V(r) || 0)) && 0 !== c || (i = c)), !u || r !== i || sn) return isNaN(r * i) || "" === i ? (o || t in e || $(t, i), function(e, t, n, i, o, r, s) {
                var a, l, u, c, d, p = new G(this._pt, e, t, 0, 1, _n, null, o),
                    h = 0,
                    f = 0;
                for (p.b = n, p.e = i, n += "", (o = ~(i += "").indexOf("random(")) && (i = ke(i)), r && (r(r = [n, i], e, t), n = r[0], i = r[1]), a = n.match(St) || []; c = St.exec(i);) u = c[0], c = i.substring(h, c.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), u !== a[f++] && (d = parseFloat(a[f - 1]) || 0, p._pt = {
                    _next: p._pt,
                    p: c || 1 === f ? c : ",",
                    s: d,
                    c: "=" === u.charAt(1) ? ie(d, u) - d : parseFloat(u) - d,
                    m: l && l < 4 ? Math.round : 0
                }, h = St.lastIndex);
                return p.c = h < i.length ? i.substring(h, i.length) : "", p.fp = s, (Tt.test(i) || o) && (p.e = 0), this._pt = p
            }.call(this, e, t, r, i, n, a || q.stringFilter, l)) : (c = new G(this._pt, e, t, +r || 0, i - (r || 0), "boolean" == typeof o ? vn : mn, 0, n), l && (c.fp = l), s && c.modifier(s, this, e), this._pt = c)
        },
        un = Nt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        cn = {},
        j = (h(un + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
            return cn[e] = 1
        }), n(o, an = Qt), (t = o.prototype).render = function(e, t, n) {
            var i, o, r = this._time,
                s = this._tDur,
                a = this._dur,
                l = e < 0,
                u = s - Y < e && !l ? s : e < Y ? 0 : e;
            if (a) {
                if (u !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != l) {
                    if (m = u, h = this.timeline, this._repeat) {
                        if (c = a + this._rDelay, this._repeat < -1 && l) return this.totalTime(100 * c + e, t, n);
                        if (m = k(u % c), u === s ? (_ = this._repeat, m = a) : ((_ = ~~(u / c)) && _ === u / c && (m = a, _--), a < m && (m = a)), (p = this._yoyo && 1 & _) && (d = this._yEase, m = a - m), y = qe(this._tTime, c), m === r && !n && this._initted) return this._tTime = u, this;
                        _ !== y && (h && this._yEase && Be(h, p), !this.vars.repeatRefresh || p || this._lock || (this._lock = n = 1, this.render(k(c * _), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (ge(this, l ? e : m, n, t)) return this._tTime = 0, this;
                        if (r !== this._time) return this;
                        if (a !== this._dur) return this.render(e, t, n)
                    }
                    if (this._tTime = u, this._time = m, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = o = (d || this._ease)(m / a), this._from && (this.ratio = o = 1 - o), m && !r && !t && (x(this, "onStart"), this._tTime !== u)) return this;
                    for (i = this._pt; i;) i.r(o, i.d), i = i._next;
                    h && h.render(e < 0 ? e : !m && p ? -Y : h._dur * h._ease(m / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (l && le(this, e, 0, n), x(this, "onUpdate")), this._repeat && _ !== y && this.vars.onRepeat && !t && this.parent && x(this, "onRepeat"), u !== this._tDur && u || this._tTime !== u || (l && !this._onUpdate && le(this, e, 0, !0), !e && a || !(u === this._tDur && 0 < this._ts || !u && this._ts < 0) || ae(this, 1), t || l && !r || !u && !r || (x(this, u === s ? "onComplete" : "onReverseComplete", !0), !this._prom || u < s && 0 < this.timeScale() || this._prom()))
                }
            } else {
                var c = this;
                var d = e;
                var p = t;
                var h = n;
                var f, g, m = c.ratio,
                    v = d < 0 || !d && (!c._start && function e(t) {
                        t = t.parent;
                        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || e(t))
                    }(c) && (c._initted || !Ye(c)) || (c._ts < 0 || c._dp._ts < 0) && !Ye(c)) ? 0 : 1,
                    _ = c._rDelay,
                    y = 0;
                if (_ && c._repeat && (y = Xe(0, c._tDur, d), g = qe(y, _), c._yoyo && 1 & g && (v = 1 - v), g !== qe(c._tTime, _) && (m = 1 - v, c.vars.repeatRefresh && c._initted && c.invalidate())), v !== m || N || h || c._zTime === Y || !d && c._zTime) {
                    if (c._initted || !ge(c, d, h, p)) {
                        for (g = c._zTime, c._zTime = d || (p ? Y : 0), p = p || d && !g, c.ratio = v, c._from && (v = 1 - v), c._time = 0, c._tTime = y, f = c._pt; f;) f.r(v, f.d), f = f._next;
                        d < 0 && le(c, d, 0, !0), c._onUpdate && !p && x(c, "onUpdate"), y && c._repeat && !p && c.parent && x(c, "onRepeat"), (d >= c._tDur || d < 0) && c.ratio === v && (v && ae(c, 1), p || (x(c, v ? "onComplete" : "onReverseComplete", !0), c._prom && c._prom()))
                    }
                } else c._zTime || (c._zTime = d)
            }
            return this
        }, t.targets = function() {
            return this._targets
        }, t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), an.prototype.invalidate.call(this)
        }, t.resetTo = function(e, t, n, i) {
            Ze || f.wake(), this._ts || this.play();
            var o, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || nn(this, r), o = this._ease(r / this._dur),
                function(e, t, n, i, o, r, s) {
                    var a, l, u, c, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                    if (!d)
                        for (d = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                            if ((a = u[c][t]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== t && a.fp !== t;) a = a._next;
                            if (!a) return sn = 1, e.vars[t] = "+=0", nn(e, s), sn = 0, 1;
                            d.push(a)
                        }
                    for (c = d.length; c--;)(a = (l = d[c])._pt || l).s = !i && 0 !== i || o ? a.s + (i || 0) + r * a.c : i, a.c = n - a.s, l.e && (l.e = R(n) + V(l.e)), l.b && (l.b = a.s + V(l.b))
                }(this, e, t, n, i, o, r) ? this.resetTo(e, t, n, i) : (pe(this, 0), this.parent || C(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, t.kill = function(e, t) {
            if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? Fe(this) : this;
            if (this.timeline) return p = this.timeline.totalDuration(), this.timeline.killTweensOf(e, t, rn && !0 !== rn.vars.overwrite)._first || Fe(this), this.parent && p !== this.timeline.totalDuration() && me(this, this._dur * this.timeline._tDur / p, 0, 1), this;
            var n, i, o, r, s, a, l, u = this._targets,
                c = e ? M(e) : u,
                d = this._ptLookup,
                p = this._pt;
            if ((!t || "all" === t) && function(e, t) {
                    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
                    return n < 0
                }(u, c)) return "all" === t && (this._pt = 0), Fe(this);
            for (n = this._op = this._op || [], "all" !== t && (H(t) && (s = {}, h(t, function(e) {
                    return s[e] = 1
                }), t = s), t = function(e, t) {
                    var n, i, o, r, e = e[0] ? ne(e[0]).harness : 0,
                        s = e && e.aliases;
                    if (!s) return t;
                    for (i in n = Ve({}, t), s)
                        if (i in n)
                            for (o = (r = s[i].split(",")).length; o--;) n[r[o]] = n[i];
                    return n
                }(u, t)), l = u.length; l--;)
                if (~c.indexOf(u[l]))
                    for (s in i = d[l], "all" === t ? (n[l] = t, r = i, o = {}) : (o = n[l] = n[l] || {}, r = t), r)(a = i && i[s]) && ("kill" in a.d && !0 !== a.d.kill(s) || S(this, a, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && p && Fe(this), this
        }, o.to = function(e, t, n) {
            return new o(e, t, n)
        }, o.from = function(e, t) {
            return _e(1, arguments)
        }, o.delayedCall = function(e, t, n, i) {
            return new o(t, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: t,
                onReverseComplete: t,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }, o.fromTo = function(e, t, n) {
            return _e(2, arguments)
        }, o.set = function(e, t) {
            return t.duration = 0, t.repeatDelay || (t.repeat = 0), new o(e, t)
        }, o.killTweensOf = function(e, t, n) {
            return z.killTweensOf(e, t, n)
        }, o);

    function o(e, t, n, i) {
        var o;
        "number" == typeof t && (n.duration = t, t = n, n = null);
        var r, s, a, l, u, c, d, p, i = (o = an.call(this, i ? t : se(t)) || this).vars,
            h = i.duration,
            f = i.delay,
            g = i.immediateRender,
            m = i.stagger,
            v = i.overwrite,
            _ = i.keyframes,
            y = i.defaults,
            b = i.scrollTrigger,
            x = i.yoyoEase,
            i = t.parent || z,
            D = (F(e) || xt(e) ? Q(e[0]) : "length" in t) ? [e] : M(e);
        if (o._targets = D.length ? te(D) : ee("GSAP target " + e + " not found. https://greensock.com", !q.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = v, _ || m || Z(h) || Z(f)) {
            if (t = o.vars, (r = o.timeline = new L({
                    data: "nested",
                    defaults: y || {}
                })).kill(), r.parent = r._dp = J(o), r._start = 0, m || Z(h) || Z(f)) {
                if (l = D.length, d = m && we(m), E(m))
                    for (u in m) ~un.indexOf(u) && ((p = p || {})[u] = m[u]);
                for (s = 0; s < l; s++)(a = re(t, cn)).stagger = 0, x && (a.yoyoEase = x), p && Ve(a, p), c = D[s], a.duration = +on(h, J(o), s, c, D), a.delay = (+on(f, J(o), s, c, D) || 0) - o._delay, !m && 1 === l && a.delay && (o._delay = f = a.delay, o._start += f, a.delay = 0), r.to(c, a, d ? d(s, c, D) : 0), r._ease = P.none;
                r.duration() ? h = f = 0 : o.timeline = 0
            } else if (_) {
                se(B(r.vars.defaults, {
                    ease: "none"
                })), r._ease = Wt(_.ease || t.ease || "none");
                var w, C, S, T = 0;
                if (F(_)) _.forEach(function(e) {
                    return r.to(D, e, ">")
                }), r.duration();
                else {
                    for (u in a = {}, _) "ease" !== u && "easeEach" !== u && function(e, n, t, i) {
                        var o, r, s = n.ease || i || "power1.inOut";
                        if (F(n)) r = t[e] || (t[e] = []), n.forEach(function(e, t) {
                            return r.push({
                                t: t / (n.length - 1) * 100,
                                v: e,
                                e: s
                            })
                        });
                        else
                            for (o in n) r = t[o] || (t[o] = []), "ease" !== o && r.push({
                                t: parseFloat(e),
                                v: n[o],
                                e: s
                            })
                    }(u, _[u], a, _.easeEach);
                    for (u in a)
                        for (w = a[u].sort(function(e, t) {
                                return e.t - t.t
                            }), s = T = 0; s < w.length; s++)(S = {
                            ease: (C = w[s]).e,
                            duration: (C.t - (s ? w[s - 1].t : 0)) / 100 * h
                        })[u] = C.v, r.to(D, S, T), T += S.duration;
                    r.duration() < h && r.to({}, {
                        duration: h - r.duration()
                    })
                }
            }
            h || o.duration(h = r.duration())
        } else o.timeline = 0;
        return !0 !== v || Ge || (rn = J(o), z.killTweensOf(D), rn = 0), A(i, J(o), n), t.reversed && o.reverse(), t.paused && o.paused(!0), (g || !h && !_ && o._start === k(i._time) && O(g) && function e(t) {
            return !t || t._ts && e(t.parent)
        }(J(o)) && "nested" !== i.data) && (o._tTime = -Y, o.render(Math.max(0, -f))), b && fe(J(o), b), o
    }

    function dn(e, t, n) {
        return e.setAttribute(t, n)
    }

    function pn(e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
    }
    B(j.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), h("staggerTo,staggerFrom,staggerFromTo", function(n) {
        j[n] = function() {
            var e = new L,
                t = It.call(arguments, 0);
            return t.splice("staggerFromTo" === n ? 5 : 4, 0, 0), e[n].apply(e, t)
        }
    });

    function hn(e, t, n) {
        return e[t] = n
    }

    function fn(e, t, n) {
        return e[t](n)
    }

    function gn(e, t, n, i) {
        return e[t](i.fp, n)
    }

    function mn(e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
    }

    function vn(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }

    function _n(e, t) {
        var n = t._pt,
            i = "";
        if (!e && t.b) i = t.b;
        else if (1 === e && t.e) i = t.e;
        else {
            for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + i, n = n._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    }

    function yn(e, t) {
        for (var n = t._pt; n;) n.r(e, n.d), n = n._next
    }

    function bn(e, t, n, i) {
        for (var o, r = this._pt; r;) o = r._next, r.p === i && r.modifier(e, t, n), r = o
    }

    function xn(e) {
        for (var t, n, i = this._pt; i;) n = i._next, i.p === e && !i.op || i.op === e ? S(this, i, "_pt") : i.dep || (t = 1), i = n;
        return !t
    }
    var Dn = function(e, t) {
            return d(e[t]) ? fn : r(e[t]) && e.setAttribute ? dn : hn
        },
        wn = function(e) {
            for (var t, n, i, o, r = e._pt; r;) {
                for (t = r._next, n = i; n && n.pr > r.pr;) n = n._next;
                (r._prev = n ? n._prev : o) ? r._prev._next = r: i = r, (r._next = n) ? n._prev = r : o = r, r = t
            }
            e._pt = i
        },
        G = (Cn.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set, this.set = pn, this.m = e, this.mt = n, this.tween = t
        }, Cn);

    function Cn(e, t, n, i, o, r, s, a, l) {
        this.t = t, this.s = i, this.c = o, this.p = n, this.r = r || mn, this.d = s || this, this.set = a || hn, this.pr = l || 0, (this._next = e) && (e._prev = this)
    }

    function Sn(e) {
        (kn[e] || An).map(function(e) {
            return e()
        })
    }

    function Tn() {
        var e = Date.now(),
            a = [];
        2 < e - Fn && (Sn("matchMediaInit"), En.forEach(function(e) {
            var t, n, i, o, r = e.queries,
                s = e.conditions;
            for (n in r)(t = l.matchMedia(r[n]).matches) && (i = 1), t !== s[n] && (s[n] = t, o = 1);
            o && (e.revert(), i && a.push(e))
        }), Sn("matchMediaRevert"), a.forEach(function(e) {
            return e.onMatch(e)
        }), Fn = e, Sn("matchMedia"))
    }
    h(Nt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return Mt[e] = 1
    }), s.TweenMax = s.TweenLite = j, s.TimelineLite = s.TimelineMax = L, z = new L({
        sortChildren: !1,
        defaults: ft,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), q.stringFilter = Re;
    var En = [],
        kn = {},
        An = [],
        Fn = 0,
        Mn = ((t = Pn.prototype).add = function(e, i, o) {
            function t() {
                var e, t = a,
                    n = r.selector;
                return t && t.data.push(r), o && (r.selector = xe(o)), a = r, d(e = i.apply(r, arguments)) && r._r.push(e), a = t, r.selector = n, r.isReverted = !1, e
            }
            d(e) && (o = i, i = e, e = d);
            var r = this;
            return r.last = t, e === d ? t(r) : e ? r[e] = t : t
        }, t.ignore = function(e) {
            var t = a;
            a = null, e(this), a = t
        }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(e) {
                return e instanceof Pn ? t.push.apply(t, e.getTweens()) : e instanceof j && e._targets[0] !== e.vars.onComplete && t.push(e)
            }), t
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(t, e) {
            var n = this;
            t ? (this.getTweens().map(function(e) {
                return {
                    g: e.globalTime(0),
                    t: e
                }
            }).sort(function(e, t) {
                return t.g - e.g || -1
            }).forEach(function(e) {
                return e.t.revert(t)
            }), this.data.forEach(function(e) {
                return !(e instanceof Qt) && e.revert && e.revert(t)
            }), this._r.forEach(function(e) {
                return e(t, n)
            }), this.isReverted = !0) : this.data.forEach(function(e) {
                return e.kill && e.kill()
            }), this.clear(), e && ~(e = En.indexOf(this)) && En.splice(e, 1)
        }, t.revert = function(e) {
            this.kill(e || {})
        }, Pn);

    function Pn(e, t) {
        this.selector = t && xe(t), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e)
    }(t = On.prototype).add = function(e, t, n) {
        E(e) || (e = {
            matches: e
        });
        var i, o, r, s = new Mn(0, n || this.scope),
            a = s.conditions = {};
        for (o in this.contexts.push(s), t = s.add("onMatch", t), s.queries = e) "all" === o ? r = 1 : (i = l.matchMedia(e[o])) && (En.indexOf(s) < 0 && En.push(s), (a[o] = i.matches) && (r = 1), i.addListener ? i.addListener(Tn) : i.addEventListener("change", Tn));
        return r && t(s), this
    }, t.revert = function(e) {
        this.kill(e || {})
    }, t.kill = function(t) {
        this.contexts.forEach(function(e) {
            return e.kill(t, !0)
        })
    };
    var Ln = On;

    function On(e) {
        this.contexts = [], this.scope = e
    }
    var Rn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(e) {
                var t = (e = !e.name && e.default || e).name,
                    n = d(e),
                    n = t && !n && e.init ? function() {
                        this._props = []
                    } : e,
                    i = {
                        init: v,
                        render: yn,
                        add: ln,
                        kill: xn,
                        modifier: bn,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Dn,
                        aliases: {},
                        register: 0
                    };
                if (Yt(), e !== n) {
                    if (X[t]) return;
                    B(n, B(re(e, i), o)), Ve(n.prototype, Ve(i, re(e, o))), X[n.prop = t] = n, e.targetTest && (Bt.push(n), Mt[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                m(t, n), e.register && e.register(c, n, G)
            })
        },
        timeline: function(e) {
            return new L(e)
        },
        getTweensOf: function(e, t) {
            return z.getTweensOf(e, t)
        },
        getProperty: function(i, e, t, n) {
            var o = ne((i = H(i) ? M(i)[0] : i) || {}).get,
                r = t ? D : b;
            return "native" === t && (t = ""), i && (e ? r((X[e] && X[e].get || o)(i, e, t, n)) : function(e, t, n) {
                return r((X[e] && X[e].get || o)(i, e, t, n))
            })
        },
        quickSetter: function(n, t, i) {
            var o, r;
            if (1 < (n = M(n)).length) return o = n.map(function(e) {
                    return c.quickSetter(e, t, i)
                }), r = o.length,
                function(e) {
                    for (var t = r; t--;) o[t](e)
                };
            n = n[0] || {};
            var s = X[t],
                a = ne(n),
                l = a.harness && (a.harness.aliases || {})[t] || t,
                u = s ? function(e) {
                    var t = new s;
                    Nn._pt = 0, t.init(n, i ? e + i : e, Nn, 0, [n]), t.render(1, t), Nn._pt && yn(1, Nn)
                } : a.set(n, l);
            return s ? u : function(e) {
                return u(n, l, i ? e + i : e, a, 1)
            }
        },
        quickTo: function(e, i, t) {
            function n(e, t, n) {
                return o.resetTo(i, e, t, n)
            }
            var o = c.to(e, Ve(((e = {})[i] = "+=0.1", e.paused = !0, e), t || {}));
            return n.tween = o, n
        },
        isTweening: function(e) {
            return 0 < z.getTweensOf(e, !0).length
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Wt(e.ease, ft.ease)), w(ft, e || {})
        },
        config: function(e) {
            return w(q, e || {})
        },
        registerEffect: function(e) {
            var i = e.name,
                o = e.effect,
                t = e.plugins,
                r = e.defaults,
                e = e.extendTimeline;
            (t || "").split(",").forEach(function(e) {
                return e && !X[e] && !s[e] && ee(i + " effect requires " + e + " plugin.")
            }), Ot[i] = function(e, t, n) {
                return o(M(e), B(t || {}, r), n)
            }, e && (L.prototype[i] = function(e, t, n) {
                return this.add(Ot[i](e, E(t) ? t : (n = t) && {}, this), n)
            })
        },
        registerEase: function(e, t) {
            P[e] = Wt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Wt(e, t) : P
        },
        getById: function(e) {
            return z.getById(e)
        },
        exportRoot: function(e, t) {
            var n, i, o = new L(e = void 0 === e ? {} : e);
            for (o.smoothChildTiming = O(e.smoothChildTiming), z.remove(o), o._dp = 0, o._time = o._tTime = z._time, n = z._first; n;) i = n._next, !t && !n._dur && n instanceof j && n.vars.onComplete === n._targets[0] || A(o, n, n._start - n._delay), n = i;
            return A(z, o, 0), o
        },
        context: function(e, t) {
            return e ? new Mn(e, t) : a
        },
        matchMedia: function(e) {
            return new Ln(e)
        },
        matchMediaRefresh: function() {
            return En.forEach(function(e) {
                var t, n, i = e.conditions;
                for (n in i) i[n] && (i[n] = !1, t = 1);
                t && e.revert()
            }) || Tn()
        },
        addEventListener: function(e, t) {
            e = kn[e] || (kn[e] = []);
            ~e.indexOf(t) || e.push(t)
        },
        removeEventListener: function(e, t) {
            e = kn[e], t = e && e.indexOf(t);
            0 <= t && e.splice(t, 1)
        },
        utils: {
            wrap: function e(t, n, i) {
                var o = n - t;
                return F(t) ? Ee(t, e(0, t.length), n) : ye(i, function(e) {
                    return (o + (e - t) % o) % o + t
                })
            },
            wrapYoyo: function e(t, n, i) {
                var o = n - t,
                    r = 2 * o;
                return F(t) ? Ee(t, e(0, t.length - 1), n) : ye(i, function(e) {
                    return t + (o < (e = (r + (e - t) % r) % r || 0) ? r - e : e)
                })
            },
            distribute: we,
            random: Te,
            snap: Se,
            normalize: function(e, t, n) {
                return je(e, t, 0, 1, n)
            },
            getUnit: V,
            clamp: function(t, n, e) {
                return ye(e, function(e) {
                    return Xe(t, n, e)
                })
            },
            splitColor: Pe,
            toArray: M,
            selector: xe,
            mapRange: je,
            pipe: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            unitize: function(t, n) {
                return function(e) {
                    return t(parseFloat(e)) + (n || V(e))
                }
            },
            interpolate: function e(t, n, i, o) {
                var r = isNaN(t + n) ? 0 : function(e) {
                    return (1 - e) * t + e * n
                };
                if (!r) {
                    var s, a, l, u, c, d = H(t),
                        p = {};
                    if (!0 === i && (o = 1) && (i = null), d) t = {
                        p: t
                    }, n = {
                        p: n
                    };
                    else if (F(t) && !F(n)) {
                        for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++) l.push(e(t[a - 1], t[a]));
                        u--, r = function(e) {
                            e *= u;
                            var t = Math.min(c, ~~e);
                            return l[t](e - t)
                        }, i = n
                    } else o || (t = Ve(F(t) ? [] : {}, t));
                    if (!l) {
                        for (s in n) ln.call(p, t, s, "get", n[s]);
                        r = function(e) {
                            return yn(e, p), d ? t.p : t
                        }
                    }
                }
                return ye(i, r)
            },
            shuffle: De
        },
        install: g,
        effects: Ot,
        ticker: f,
        updateRoot: L.updateRoot,
        plugins: X,
        globalTimeline: z,
        core: {
            PropTween: G,
            globals: m,
            Tween: j,
            Timeline: L,
            Animation: Qt,
            getCache: ne,
            _removeLinkedListItem: S,
            reverting: function() {
                return N
            },
            context: function(e) {
                return e && a && (a.data.push(e), e._ctx = a), a
            },
            suppressOverwrites: function(e) {
                return Ge = e
            }
        }
    };

    function Bn(e, c) {
        return {
            name: e,
            rawVars: 1,
            init: function(e, u, t) {
                t._onInit = function(e) {
                    var t, n;
                    if (H(u) && (t = {}, h(u, function(e) {
                            return t[e] = 1
                        }), u = t), c) {
                        for (n in t = {}, u) t[n] = c(u[n]);
                        u = t
                    }
                    var i, o, r, s = e,
                        a = u,
                        l = s._targets;
                    for (i in a)
                        for (o = l.length; o--;)(r = (r = s._ptLookup[o][i]) && r.d) && (r._pt && (r = function(e, t) {
                            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
                            return n
                        }(r, i)), r && r.modifier && r.modifier(a[i], s, l[o], i))
                }
            }
        }
    }
    h("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return Rn[e] = j[e]
    }), f.add(L.updateRoot);
    var Nn = Rn.to({}, {
            duration: 0
        }),
        c = Rn.registerPlugin({
            name: "attr",
            init: function(e, t, n, i, o) {
                var r, s, a;
                for (r in this.tween = n, t) a = e.getAttribute(r) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[r], i, o, 0, 0, r)).op = r, s.b = a, this._props.push(r)
            },
            render: function(e, t) {
                for (var n = t._pt; n;) N ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
            }
        }, {
            name: "endArray",
            init: function(e, t) {
                for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
            }
        }, Bn("roundProps", Ce), Bn("modifiers"), Bn("snap", Se)) || Rn;

    function zn(e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function In(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function Hn(e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    }

    function Vn(e, t) {
        e = t.s + t.c * e;
        t.set(t.t, t.p, ~~(e + (e < 0 ? -.5 : .5)) + t.u, t)
    }

    function qn(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }

    function Yn(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }

    function Xn(e, t, n) {
        return e.style[t] = n
    }

    function jn(e, t, n) {
        return e.style.setProperty(t, n)
    }

    function Gn(e, t, n) {
        return e._gsap[t] = n
    }

    function Wn(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }

    function Un(e, t, n, i, o) {
        e = e._gsap;
        e.scaleX = e.scaleY = n, e.renderTransform(o, e)
    }

    function Kn(e, t, n, i, o) {
        e = e._gsap;
        e[t] = n, e.renderTransform(o, e)
    }

    function Jn(e) {
        var t = this,
            n = this.target,
            i = n.style;
        if (e in Vi) {
            if (this.tfm = this.tfm || {}, "transform" !== e && (~(e = Ui[e] || e).indexOf(",") ? e.split(",").forEach(function(e) {
                    return t.tfm[e] = $i(n, e)
                }) : this.tfm[e] = n._gsap.x ? n._gsap[e] : $i(n, e)), n._gsap.svg && (this.svg = n.getAttribute(e) || ""), 0 <= this.props.indexOf(U)) return;
            e = U
        }
        i && this.props.push(e, i[e])
    }

    function Qn(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    }

    function Zn() {
        for (var e, t = this.props, n = this.target, i = n.style, o = n._gsap, r = 0; r < t.length; r += 2) t[r + 1] ? i[t[r]] = t[r + 1] : i.removeProperty(t[r].replace(ji, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in o.svg && n.setAttribute("transform", this.svg || ""), this.tfm) o[e] = this.tfm[e];
            !(r = Di()) || r.isStart || i[U] || (Qn(i), o.uncache = 1)
        }
    }

    function $n(e, t) {
        var n = {
            target: e,
            props: [],
            revert: Zn,
            save: Jn
        };
        return t && t.split(",").forEach(function(e) {
            return n.save(e)
        }), n
    }

    function ei(e, t) {
        t = vi.createElementNS ? vi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : vi.createElement(e);
        return t.style ? t : vi.createElement(e)
    }

    function W(e, t, n) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(ji, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && W(e, Ji(t) || t, 1) || ""
    }

    function ti() {
        "undefined" != typeof window && window.document && (_i = (vi = window.document).documentElement, bi = ei("div") || {
            style: {}
        }, ei("div"), U = Ji(U), K = U + "Origin", bi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wi = !!Ji("perspective"), Di = c.core.reverting, yi = 1)
    }

    function ni(e) {
        var t, n = ei("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            r = this.style.cssText;
        if (_i.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ni
        } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), _i.removeChild(n), this.style.cssText = r, t
    }

    function ii(e, t) {
        for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    }

    function oi(t) {
        var n;
        try {
            n = t.getBBox()
        } catch (e) {
            n = ni.call(t, !0)
        }
        return !(n = n && (n.width || n.height) || t.getBBox === ni ? n : ni.call(t, !0)) || n.width || n.x || n.y ? n : {
            x: +ii(t, ["x", "cx", "x1"]) || 0,
            y: +ii(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function ri(e) {
        return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !oi(e))
    }

    function si(e, t) {
        t && (e = e.style, t in Vi && t !== K && (t = U), e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(ji, "-$1").toLowerCase())) : e.removeAttribute(t))
    }

    function ai(e, t, n, i, o, r) {
        t = new G(e._pt, t, n, 0, 1, r ? Yn : qn);
        (e._pt = t).b = i, t.e = o, e._props.push(n)
    }

    function li(e, t, n, i) {
        var o, r = parseFloat(n) || 0,
            s = (n + "").trim().substr((r + "").length) || "px",
            a = bi.style,
            l = Gi.test(t),
            u = "svg" === e.tagName.toLowerCase(),
            c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
            d = "px" === i,
            p = "%" === i;
        return i === s || !r || Qi[i] || Qi[s] ? r : ("px" === s || d || (r = li(e, t, n, "px")), n = e.getCTM && ri(e), !p && "%" !== s || !Vi[t] && !~t.indexOf("adius") ? (a[l ? "width" : "height"] = 100 + (d ? s : i), t = ~t.indexOf("adius") || "em" === i && e.appendChild && !u ? e : e.parentNode, (i = (t = (t = n ? (e.ownerSVGElement || {}).parentNode : t) && t !== vi && t.appendChild ? t : vi.body)._gsap) && p && i.width && l && i.time === f.time && !i.uncache ? R(r / i.width * 100) : (!p && "%" !== s || Zi[W(t, "display")] || (a.position = W(e, "position")), t === e && (a.position = "static"), t.appendChild(bi), o = bi[c], t.removeChild(bi), a.position = "absolute", l && p && ((i = ne(t)).time = f.time, i.width = t[c]), R(d ? o * r / 100 : o && r ? 100 / o * r : 0))) : (o = n ? e.getBBox()[l ? "width" : "height"] : e[c], R(p ? r / o * 100 : r / 100 * o)))
    }

    function ui(e, t, n, i) {
        var o;
        n && "none" !== n || ((o = (r = Ji(t, e, 1)) && W(e, r, 1)) && o !== n ? (t = r, n = o) : "borderColor" === t && (n = W(e, "borderTopColor")));
        var r, s, a, l, u, c, d, p, h, f = new G(this._pt, e.style, t, 0, 1, _n),
            g = 0,
            m = 0;
        if (f.b = n, f.e = i, n += "", "auto" == (i += "") && (e.style[t] = i, i = W(e, t) || i, e.style[t] = n), Re(r = [n, i]), i = r[1], s = (n = r[0]).match(Ct) || [], (i.match(Ct) || []).length) {
            for (; d = Ct.exec(i);) p = d[0], d = i.substring(g, d.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), p !== (u = s[m++] || "") && (a = parseFloat(u) || 0, h = u.substr((a + "").length), "=" === p.charAt(1) && (p = ie(a, p) + h), c = parseFloat(p), p = p.substr((c + "").length), g = Ct.lastIndex - p.length, p || (p = p || q.units[t] || h, g === i.length && (i += p, f.e += p)), h !== p && (a = li(e, t, u, p) || 0), f._pt = {
                _next: f._pt,
                p: d || 1 === m ? d : ",",
                s: a,
                c: c - a,
                m: l && l < 4 || "zIndex" === t ? Math.round : 0
            });
            f.c = g < i.length ? i.substring(g, i.length) : ""
        } else f.r = "display" === t && "none" === i ? Yn : qn;
        return Tt.test(i) && (f.e = 0), this._pt = f
    }

    function ci(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n, i, o, r = t.t,
                s = r.style,
                a = t.u,
                t = r._gsap;
            if ("all" === a || !0 === a) s.cssText = "", i = 1;
            else
                for (o = (a = a.split(",")).length; - 1 < --o;) n = a[o], Vi[n] && (i = 1, n = "transformOrigin" === n ? K : U), si(r, n);
            i && (si(r, U), t && (t.svg && r.removeAttribute("transform"), oo(r, 1), t.uncache = 1, Qn(s)))
        }
    }

    function di(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }

    function pi(e) {
        e = W(e, U);
        return di(e) ? no : e.substr(7).match(wt).map(R)
    }

    function hi(e, t) {
        var n, i, o, r = e._gsap || ne(e),
            s = e.style,
            a = pi(e);
        return r.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? no : a : (a !== no || e.offsetParent || e === _i || r.svg || (i = s.display, s.display = "block", (r = e.parentNode) && e.offsetParent || (o = 1, n = e.nextElementSibling, _i.appendChild(e)), a = pi(e), i ? s.display = i : si(e, "display"), o && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : _i.removeChild(e))), t && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }

    function fi(e, t, n, i, o, r) {
        var s, a = e._gsap,
            o = o || hi(e, !0),
            l = a.xOrigin || 0,
            u = a.yOrigin || 0,
            c = a.xOffset || 0,
            d = a.yOffset || 0,
            p = o[0],
            h = o[1],
            f = o[2],
            g = o[3],
            m = o[4],
            v = o[5],
            _ = t.split(" "),
            y = parseFloat(_[0]) || 0,
            b = parseFloat(_[1]) || 0;
        n ? o !== no && (o = p * g - h * f) && (s = y * (-h / o) + b * (p / o) - (p * v - h * m) / o, y = y * (g / o) + b * (-f / o) + (f * v - g * m) / o, b = s) : (y = (o = oi(e)).x + (~_[0].indexOf("%") ? y / 100 * o.width : y), b = o.y + (~(_[1] || _[0]).indexOf("%") ? b / 100 * o.height : b)), i || !1 !== i && a.smooth ? (a.xOffset = c + ((m = y - l) * p + (v = b - u) * f) - m, a.yOffset = d + (m * h + v * g) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = b, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[K] = "0px 0px", r && (ai(r, a, "xOrigin", l, y), ai(r, a, "yOrigin", u, b), ai(r, a, "xOffset", c, a.xOffset), ai(r, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", y + " " + b)
    }

    function gi(e, t, n) {
        var i = V(t);
        return R(parseFloat(t) + parseFloat(li(e, "x", n + "px", i))) + i
    }

    function mi(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    j.version = L.version = c.version = "3.11.0", Je = 1, i() && Yt();
    var vi, _i, yi, bi, xi, Di, wi, t = P.Power0,
        Ci = P.Power1,
        Si = P.Power2,
        Ti = P.Power3,
        Ei = P.Power4,
        ki = P.Linear,
        Ai = P.Quad,
        Fi = P.Cubic,
        Mi = P.Quart,
        Pi = P.Quint,
        Li = P.Strong,
        Oi = P.Elastic,
        Ri = P.Back,
        Bi = P.SteppedEase,
        Ni = P.Bounce,
        zi = P.Sine,
        Ii = P.Expo,
        Hi = P.Circ,
        Vi = {},
        qi = 180 / Math.PI,
        Yi = Math.PI / 180,
        Xi = Math.atan2,
        ji = /([A-Z])/g,
        Gi = /(left|right|width|margin|padding|x)/i,
        Wi = /[\s,\(]\S/,
        Ui = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        U = "transform",
        K = U + "Origin",
        Ki = "O,Moz,ms,Ms,Webkit".split(","),
        Ji = function(e, t, n) {
            var i = (t || bi).style,
                o = 5;
            if (e in i && !n) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Ki[o] + e in i););
            return o < 0 ? null : (3 === o ? "ms" : 0 <= o ? Ki[o] : "") + e
        },
        Qi = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Zi = {
            grid: 1,
            flex: 1
        },
        $i = function(e, t, n, i) {
            var o;
            return yi || ti(), t in Ui && "transform" !== t && ~(t = Ui[t]).indexOf(",") && (t = t.split(",")[0]), Vi[t] && "transform" !== t ? (o = oo(e, i), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : ro(W(e, K)) + " " + o.zOrigin + "px") : (o = e.style[t]) && "auto" !== o && !i && !~(o + "").indexOf("calc(") || (o = to[t] && to[t](e, t, n) || W(e, t) || _(e, t) || ("opacity" === t ? 1 : 0)), n && !~(o + "").trim().indexOf(" ") ? li(e, t, o, n) + n : o
        },
        eo = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        to = {
            clearProps: function(e, t, n, i, o) {
                if ("isFromStart" !== o.data) return (t = e._pt = new G(e._pt, t, n, 0, 0, ci)).u = i, t.pr = -10, t.tween = o, e._props.push(n), 1
            }
        },
        no = [1, 0, 0, 1, 0, 0],
        io = {},
        oo = function(e, t) {
            var n = e._gsap || new Jt(e);
            if ("x" in n && !t && !n.uncache) return n;
            var i, o, r, s, a, l, u, c, d, p, h, f, g, m, v, _, y, b, x, D, w, C, S, T, E, k = e.style,
                A = n.scaleX < 0,
                F = "deg",
                M = getComputedStyle(e),
                P = W(e, K) || "0",
                L = i = o = s = a = l = u = c = 0,
                O = r = 1;
            return n.svg = !(!e.getCTM || !ri(e)), M.translate && ("none" === M.translate && "none" === M.scale && "none" === M.rotate || (k[U] = ("none" !== M.translate ? "translate3d(" + (M.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== M.rotate ? "rotate(" + M.rotate + ") " : "") + ("none" !== M.scale ? "scale(" + M.scale.split(" ").join(",") + ") " : "") + M[U]), k.scale = k.rotate = k.translate = "none"), M = hi(e, n.svg), n.svg && (y = (!n.uncache || "0px 0px" === P) && !t && e.getAttribute("data-svg-origin"), fi(e, y || P, !!y || n.originIsAbsolute, !1 !== n.smooth, M)), E = n.xOrigin || 0, S = n.yOrigin || 0, M !== no && (h = M[0], f = M[1], g = M[2], m = M[3], L = v = M[4], i = _ = M[5], 6 === M.length ? (O = Math.sqrt(h * h + f * f), r = Math.sqrt(m * m + g * g), s = h || f ? Xi(f, h) * qi : 0, (u = g || m ? Xi(g, m) * qi + s : 0) && (r *= Math.abs(Math.cos(u * Yi))), n.svg && (L -= E - (E * h + S * g), i -= S - (E * f + S * m))) : (E = M[6], S = M[7], D = M[8], w = M[9], C = M[10], T = M[11], L = M[12], i = M[13], o = M[14], a = (M = Xi(E, C)) * qi, M && (y = v * (d = Math.cos(-M)) + D * (p = Math.sin(-M)), b = _ * d + w * p, x = E * d + C * p, D = v * -p + D * d, w = _ * -p + w * d, C = E * -p + C * d, T = S * -p + T * d, v = y, _ = b, E = x), l = (M = Xi(-g, C)) * qi, M && (d = Math.cos(-M), T = m * (p = Math.sin(-M)) + T * d, h = y = h * d - D * p, f = b = f * d - w * p, g = x = g * d - C * p), s = (M = Xi(f, h)) * qi, M && (y = h * (d = Math.cos(M)) + f * (p = Math.sin(M)), b = v * d + _ * p, f = f * d - h * p, _ = _ * d - v * p, h = y, v = b), a && 359.9 < Math.abs(a) + Math.abs(s) && (a = s = 0, l = 180 - l), O = R(Math.sqrt(h * h + f * f + g * g)), r = R(Math.sqrt(_ * _ + E * E)), M = Xi(v, _), u = 2e-4 < Math.abs(M) ? M * qi : 0, c = T ? 1 / (T < 0 ? -T : T) : 0), n.svg && (y = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !di(W(e, U)), y && e.setAttribute("transform", y))), 90 < Math.abs(u) && Math.abs(u) < 270 && (A ? (O *= -1, u += s <= 0 ? 180 : -180, s += s <= 0 ? 180 : -180) : (r *= -1, u += u <= 0 ? 180 : -180)), t = t || n.uncache, n.x = L - ((n.xPercent = L && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-L) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = i - ((n.yPercent = i && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = R(O), n.scaleY = R(r), n.rotation = R(s) + F, n.rotationX = R(a) + F, n.rotationY = R(l) + F, n.skewX = u + F, n.skewY = 0 + F, n.transformPerspective = c + "px", (n.zOrigin = parseFloat(P.split(" ")[2]) || 0) && (k[K] = ro(P)), n.xOffset = n.yOffset = 0, n.force3D = q.force3D, n.renderTransform = n.svg ? po : wi ? co : so, n.uncache = 0, n
        },
        ro = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        so = function(e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, co(e, t)
        },
        ao = "0deg",
        lo = "0px",
        uo = ") ",
        co = function(e, t) {
            var n, i, t = t || this,
                o = t.xPercent,
                r = t.yPercent,
                s = t.x,
                a = t.y,
                l = t.z,
                u = t.rotation,
                c = t.rotationY,
                d = t.rotationX,
                p = t.skewX,
                h = t.skewY,
                f = t.scaleX,
                g = t.scaleY,
                m = t.transformPerspective,
                v = t.force3D,
                _ = t.target,
                t = t.zOrigin,
                y = "",
                e = "auto" === v && e && 1 !== e || !0 === v;
            !t || d === ao && c === ao || (v = parseFloat(c) * Yi, i = Math.sin(v), n = Math.cos(v), v = parseFloat(d) * Yi, s = gi(_, s, i * (i = Math.cos(v)) * -t), a = gi(_, a, -Math.sin(v) * -t), l = gi(_, l, n * i * -t + t)), m !== lo && (y += "perspective(" + m + uo), (o || r) && (y += "translate(" + o + "%, " + r + "%) "), !e && s === lo && a === lo && l === lo || (y += l !== lo || e ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + uo), u !== ao && (y += "rotate(" + u + uo), c !== ao && (y += "rotateY(" + c + uo), d !== ao && (y += "rotateX(" + d + uo), p === ao && h === ao || (y += "skew(" + p + ", " + h + uo), 1 === f && 1 === g || (y += "scale(" + f + ", " + g + uo), _.style[U] = y || "translate(0, 0)"
        },
        po = function(e, t) {
            var n, i, o, r, s, t = t || this,
                a = t.xPercent,
                l = t.yPercent,
                u = t.x,
                c = t.y,
                d = t.rotation,
                p = t.skewX,
                h = t.skewY,
                f = t.scaleX,
                g = t.scaleY,
                m = t.target,
                v = t.xOrigin,
                _ = t.yOrigin,
                y = t.xOffset,
                b = t.yOffset,
                t = t.forceCSS,
                x = parseFloat(u),
                D = parseFloat(c),
                d = parseFloat(d),
                p = parseFloat(p);
            (h = parseFloat(h)) && (p += h = parseFloat(h), d += h), d || p ? (d *= Yi, p *= Yi, n = Math.cos(d) * f, i = Math.sin(d) * f, o = Math.sin(d - p) * -g, r = Math.cos(d - p) * g, p && (h *= Yi, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), r *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), i *= s)), n = R(n), i = R(i), o = R(o), r = R(r)) : (n = f, r = g, i = o = 0), (x && !~(u + "").indexOf("px") || D && !~(c + "").indexOf("px")) && (x = li(m, "x", u, "px"), D = li(m, "y", c, "px")), (v || _ || y || b) && (x = R(x + v - (v * n + _ * o) + y), D = R(D + _ - (v * i + _ * r) + b)), (a || l) && (x = R(x + a / 100 * (s = m.getBBox()).width), D = R(D + l / 100 * s.height)), m.setAttribute("transform", s = "matrix(" + n + "," + i + "," + o + "," + r + "," + x + "," + D + ")"), t && (m.style[U] = s)
        };
    h("padding,margin,Width,Radius", function(t, n) {
        var e = "Right",
            i = "Bottom",
            o = "Left",
            a = (n < 3 ? ["Top", e, i, o] : ["Top" + o, "Top" + e, i + e, i + o]).map(function(e) {
                return n < 2 ? t + e : "border" + e + t
            });
        to[1 < n ? "border" + t : t] = function(t, e, n, i, o) {
            var r, s;
            if (arguments.length < 4) return r = a.map(function(e) {
                return $i(t, e, n)
            }), 5 === (s = r.join(" ")).split(r[0]).length ? r[0] : s;
            r = (i + "").split(" "), s = {}, a.forEach(function(e, t) {
                return s[e] = r[t] = r[t] || r[(t - 1) / 2 | 0]
            }), t.init(e, s, o)
        }
    });
    var ho, fo = {
            name: "css",
            register: ti,
            targetTest: function(e) {
                return e.style && e.nodeType
            },
            init: function(e, t, n, i, o) {
                var r, s, a, l, u, c, d, p, h, B, f, g, N, m, v, _, z, y, b, x, D, I = this._props,
                    w = e.style,
                    C = n.vars.startAt;
                for (u in yi || ti(), this.styles = this.styles || $n(e), m = this.styles.props, this.tween = n, t)
                    if ("autoRound" !== u && (s = t[u], !X[u] || !tn(u, t, n, i, e, o)))
                        if (p = typeof s, l = to[u], "function" === p && (p = typeof(s = s.call(n, i, e, o))), "string" === p && ~s.indexOf("random(") && (s = ke(s)), l) l(this, e, u, s, n) && (N = 1);
                        else if ("--" === u.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(u) + "").trim(), s += "", Vt.lastIndex = 0, Vt.test(r) || (c = V(r), d = V(s)), d ? c !== d && (r = li(e, u, r, d) + d) : c && (s += c), this.add(w, "setProperty", r, s, i, o, 0, 0, u), I.push(u), m.push(u, w[u]);
                else if ("undefined" !== p) {
                    if (C && u in C ? (V((r = H(r = "function" == typeof C[u] ? C[u].call(n, i, e, o) : C[u]) && ~r.indexOf("random(") ? ke(r) : r) + "") || (r += q.units[u] || V($i(e, u)) || ""), "=" === (r + "").charAt(1) && (r = $i(e, u))) : r = $i(e, u), l = parseFloat(r), (p = "string" === p && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), u in Ui && ("autoAlpha" === u && (1 === l && "hidden" === $i(e, "visibility") && a && (l = 0), m.push("visibility", w.visibility), ai(this, w, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = Ui[u]).indexOf(",") && (u = u.split(",")[0])), h = u in Vi)
                        if (this.styles.save(u), B || ((f = e._gsap).renderTransform && !t.parseTransform || oo(e, t.parseTransform), g = !1 !== t.smoothOrigin && f.smooth, (B = this._pt = new G(this._pt, w, U, 0, 1, f.renderTransform, f, 0, -1)).dep = 1), "scale" === u) this._pt = new G(this._pt, f, "scaleY", f.scaleY, (p ? ie(f.scaleY, p + a) : a) - f.scaleY || 0, zn), this._pt.u = 0, I.push("scaleY", u), u += "X";
                        else {
                            if ("transformOrigin" === u) {
                                m.push(K, w[K]), D = x = b = void 0, b = (y = s).split(" "), x = b[0], D = b[1] || "50%", "top" !== x && "bottom" !== x && "left" !== D && "right" !== D || (y = x, x = D, D = y), b[0] = eo[x] || x, b[1] = eo[D] || D, s = b.join(" "), f.svg ? fi(e, s, 0, g, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== f.zOrigin && ai(this, f, "zOrigin", f.zOrigin, d), ai(this, w, u, ro(r), ro(s)));
                                continue
                            }
                            if ("svgOrigin" === u) {
                                fi(e, s, 1, g, 0, this);
                                continue
                            }
                            if (u in io) {
                                y = this, x = f, D = u, b = l, v = p ? ie(l, p + s) : s, z = _ = P = R = void 0, R = 360, P = H(v), _ = parseFloat(v) * (P && ~v.indexOf("rad") ? qi : 1) - b, z = b + _ + "deg", P && ("short" === (P = v.split("_")[1]) && (_ %= R) != _ % 180 && (_ += _ < 0 ? R : -R), "cw" === P && _ < 0 ? _ = (_ + 36e9) % R - ~~(_ / R) * R : "ccw" === P && 0 < _ && (_ = (_ - 36e9) % R - ~~(_ / R) * R)), y._pt = v = new G(y._pt, x, D, b, _, In), v.e = z, v.u = "deg", y._props.push(D);
                                continue
                            }
                            if ("smoothOrigin" === u) {
                                ai(this, f, "smooth", f.smooth, s);
                                continue
                            }
                            if ("force3D" === u) {
                                f[u] = s;
                                continue
                            }
                            if ("transform" === u) {
                                R = O = F = A = k = A = E = T = S = L = P = M = void 0;
                                var S, T, E, k, A, F, M = this,
                                    P = s,
                                    L = e,
                                    O = mi({}, L._gsap),
                                    R = L.style;
                                for (T in O.svg ? (E = L.getAttribute("transform"), L.setAttribute("transform", ""), R[U] = P, S = oo(L, 1), si(L, U), L.setAttribute("transform", E)) : (E = getComputedStyle(L)[U], R[U] = P, S = oo(L, 1), R[U] = E), Vi)(E = O[T]) !== (A = S[T]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(T) < 0 && (k = V(E) !== (F = V(A)) ? li(L, T, E, F) : parseFloat(E), A = parseFloat(A), M._pt = new G(M._pt, S, T, k, A - k, zn), M._pt.u = F || 0, M._props.push(T));
                                mi(S, O);
                                continue
                            }
                        }
                    else u in w || (u = Ji(u) || u);
                    if (h || (a || 0 === a) && (l || 0 === l) && !Wi.test(s) && u in w) a = a || 0, (c = (r + "").substr((l + "").length)) !== (d = V(s) || (u in q.units ? q.units[u] : c)) && (l = li(e, u, r, d)), this._pt = new G(this._pt, h ? f : w, u, l, (p ? ie(l, p + a) : a) - l, h || "px" !== d && "zIndex" !== u || !1 === t.autoRound ? zn : Vn), this._pt.u = d || 0, c !== d && "%" !== d && (this._pt.b = r, this._pt.r = Hn);
                    else if (u in w) ui.call(this, e, u, r, p ? p + s : s);
                    else {
                        if (!(u in e)) {
                            $(u, s);
                            continue
                        }
                        this.add(e, u, r || e[u], p ? p + s : s, i, o)
                    }
                    h || m.push(u, w[u]), I.push(u)
                }
                N && wn(this)
            },
            render: function(e, t) {
                if (t.tween._time || !Di())
                    for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
                else t.styles.revert()
            },
            get: $i,
            aliases: Ui,
            getSetter: function(e, t, n) {
                var i = Ui[t];
                return (t = i && i.indexOf(",") < 0 ? i : t) in Vi && t !== K && (e._gsap.x || $i(e, "x")) ? n && xi === n ? "scale" === t ? Wn : Gn : (xi = n || {}) && ("scale" === t ? Un : Kn) : e.style && !r(e.style[t]) ? Xn : ~t.indexOf("-") ? jn : Dn(e, t)
            },
            core: {
                _removeProperty: si,
                _getMatrix: hi
            }
        },
        go = (c.utils.checkPrefix = Ji, c.core.getStyleSaver = $n, ho = h("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (go = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
            Vi[e] = 1
        }), h(go, function(e) {
            q.units[e] = "deg", io[e] = 1
        }), Ui[ho[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + go, h("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
            e = e.split(":");
            Ui[e[1]] = ho[e[0]]
        }), h("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
            q.units[e] = "px"
        }), c.registerPlugin(fo), c.registerPlugin(fo) || c),
        mo = go.core.Tween;
    e.Back = Ri, e.Bounce = Ni, e.CSSPlugin = fo, e.Circ = Hi, e.Cubic = Fi, e.Elastic = Oi, e.Expo = Ii, e.Linear = ki, e.Power0 = t, e.Power1 = Ci, e.Power2 = Si, e.Power3 = Ti, e.Power4 = Ei, e.Quad = Ai, e.Quart = Mi, e.Quint = Pi, e.Sine = zi, e.SteppedEase = Bi, e.Strong = Li, e.TimelineLite = L, e.TimelineMax = L, e.TweenLite = j, e.TweenMax = mo, e.default = go, e.gsap = go, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function n() {
        return "undefined" != typeof window
    }

    function i() {
        return j || n() && (j = window.gsap) && j.registerPlugin && j
    }
    oe.register = function(e) {
        return G || (j = e || i(), n() && window.document && (W = window, U = document, K = U.documentElement, J = U.body), j && (Q = j.utils.toArray, Z = j.utils.clamp, te = j.parseEase("expo"), $ = j.core.globals().ScrollTrigger, j.core.globals("ScrollSmoother", oe), J && $ && (ne = $.core._getVelocityProp, ie = $.core._inputObserver, oe.refresh = $.refresh, G = 1))), G
    }, o = oe, (r = [{
        key: "progress",
        get: function() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]) && t(o.prototype, r), s && t(o, s);
    var j, G, W, U, K, J, Q, Z, $, ee, te, ne, ie, o, r, s, a = oe;

    function oe(e) {
        var i = this;

        function t() {
            return L.update(-F)
        }

        function n() {
            return d.style.overflow = "visible"
        }

        function o(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), y = !1, e.animation.progress(e.progress, !0)
        }

        function r(e, t) {
            (e !== F && !v || t) && (A && (d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", d._gsap.y = e + "px"), M = e - F, F = e, $.isUpdating || $.update())
        }

        function s(e) {
            return arguments.length ? (O.y = -(e = e < 0 ? 0 : e), y = !0, v ? F = -e : r(-e), k(e), this) : -F
        }

        function a(e) {
            x.scrollTop = 0, e.target.contains && e.target.contains(x) || X && !1 === X(i, e) || ($.isInViewport(e.target) || e.target === V || i.scrollTo(e.target, !1, "center center"), V = e.target)
        }

        function l(e) {
            var n, i, o, r;
            D.forEach(function(t) {
                n = t.pins, r = t.markers, e.forEach(function(e) {
                    t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (i = e.start, o = (i - t.start - t.offset) / t.ratio - (i - t.start), n.forEach(function(e) {
                        return o -= e.distance / t.ratio - e.distance
                    }), e.setPositions(i + o, e.end + o), e.markerStart && r.push(j.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, n.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)))
                })
            })
        }

        function u() {
            n(), requestAnimationFrame(n), D && (D.forEach(function(e) {
                var t = e.start,
                    n = e.auto ? Math.min($.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
                    i = (n - e.end) / 2;
                t -= i, n -= i, e.offset = i || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, n), Math.max(t, n)), e.vars.onRefresh(e)
            }), l($.sort())), L.reset()
        }

        function c() {
            return $.addEventListener("refresh", u)
        }

        function B() {
            return D && D.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }

        function N() {
            return D && D.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }), B
        }

        function b(t, n, i, o) {
            return function() {
                var e = "function" == typeof n ? n(i, o) : n;
                return e || 0 === e || (e = o.getAttribute("data-" + E + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + E + t, e), "auto" === e ? e : parseFloat(e)
            }
        }

        function z(s, e, t, n) {
            function i() {
                e = h(), t = f(), l = parseFloat(e) || 1, d = (u = "auto" === e) ? 0 : .5, c && c.kill(), c = t && j.to(s, {
                    ease: te,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }), r && (r.ratio = l, r.autoSpeed = u)
            }

            function a() {
                m.y = g + "px", m.renderTransform(1), i()
            }

            function o(e) {
                var t, n, i, o, r;
                p = u ? (a(), t = s, n = Z(0, 1, -e.start / (e.end - e.start)), o = t.parentNode || K, t = t.getBoundingClientRect(), o = o.getBoundingClientRect(), r = o.top - t.top, t = o.bottom - t.bottom, r = (Math.abs(r) > Math.abs(t) ? r : t) / (1 - n), t = -r * n, 0 < r && (o = .5 == (i = o.height / (W.innerHeight + o.height)) ? 2 * o.height : 2 * Math.min(o.height, -r * i / (2 * i - 1)) * (n || 1), t += n ? -o * n : -o / 2, r += o), y = (i = {
                    change: r,
                    offset: t
                }).change, i.offset) : (y = (e.end - e.start) * (1 - l), 0), v.forEach(function(e) {
                    return y -= e.distance * (1 - l)
                }), e.vars.onUpdate(e), c && c.progress(1)
            }
            var l, r, u, c, d, p, h = b("speed", e, n, s),
                f = b("lag", t, n, s),
                g = j.getProperty(s, "y"),
                m = s._gsap,
                v = [],
                _ = [],
                y = 0;
            return i(), (1 !== l || u || c) && (o(r = $.create({
                trigger: u ? s.parentNode : s,
                scroller: x,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: a,
                onRefresh: o,
                onKill: function(e) {
                    e = D.indexOf(e);
                    0 <= e && D.splice(e, 1), a()
                },
                onUpdate: function(e) {
                    var t, n, i, o = g + y * (e.progress - d),
                        r = v.length,
                        s = 0;
                    if (e.offset) {
                        if (r) {
                            for (n = -F, i = e.end; r--;) {
                                if ((t = v[r]).trig.isActive || n >= t.start && n <= t.end) return void(c && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), c.resetTo("y", parseFloat(m.y), -M, !0), P && c.progress(1)));
                                n > t.end && (s += t.distance), i -= t.distance
                            }
                            o = g + s + y * ((j.utils.clamp(e.start, e.end, n) - e.start - s) / (i - e.start) - d)
                        }
                        e = o + p, o = Math.round(1e5 * e) / 1e5 || 0, _.length && !u && _.forEach(function(e) {
                            return e(o - s)
                        }), c ? (c.resetTo("y", o, -M, !0), P && c.progress(1)) : (m.y = o + "px", m.renderTransform(1))
                    }
                }
            })), j.core.getCache(r.trigger).stRevert = N, r.startY = g, r.pins = v, r.markers = _, r.ratio = l, r.autoSpeed = u, s.style.willChange = "transform"), r
        }
        G || oe.register(j) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, ee && ee.kill(), ee = this;
        var d, x, p, h, D, f, g, m, I, v, _, H, y, V, w = e.smoothTouch,
            q = e.onUpdate,
            Y = e.onStop,
            C = e.smooth,
            X = e.onFocusIn,
            S = e.normalizeScroll,
            T = "undefined" != typeof ResizeObserver && new ResizeObserver(function() {
                return h.refresh()
            }),
            E = e.effectsPrefix || "",
            k = $.getScrollFunc(W),
            A = 1 === $.isTouch ? !0 === w ? .8 : parseFloat(w) || 0 : 0 === C || !1 === C ? 0 : parseFloat(C) || .8,
            F = 0,
            M = 0,
            P = 1,
            L = ne(0),
            O = {
                y: 0
            };

        function R() {
            return p = d.clientHeight, d.style.overflow = "visible", J.style.height = p + "px", p - W.innerHeight
        }
        c(), $.addEventListener("killAll", c), j.delayedCall(.5, function() {
            return P = 0
        }), this.scrollTop = s, this.scrollTo = function(e, t, n) {
            n = j.utils.clamp(0, $.maxScroll(W), isNaN(e) ? i.offset(e, n) : +e);
            t ? v ? j.to(i, {
                duration: A,
                scrollTop: n,
                overwrite: "auto",
                ease: te
            }) : k(n) : s(n)
        }, this.offset = function(e, t) {
            var n, i = (e = Q(e)[0]).style.cssText,
                t = $.create({
                    trigger: e,
                    start: t || "top top"
                });
            return D && l([t]), n = t.start, t.kill(!1), e.style.cssText = i, j.core.getCache(e).uncache = 1, n
        }, this.content = function(e) {
            return arguments.length ? ((e = Q(e || "#smooth-content")[0] || J.children[0]) !== d && (I = (d = e).getAttribute("style") || "", T && T.observe(d), j.set(d, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
            }), A || j.set(d, {
                clearProps: "transform"
            })), this) : d
        }, this.wrapper = function(e) {
            return arguments.length ? (x = Q(e || "#smooth-wrapper")[0] || (e = d, (t = U.querySelector(".ScrollSmoother-wrapper")) || ((t = U.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t), m = x.getAttribute("style") || "", R(), j.set(x, A ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }), this) : x;
            var t
        }, this.effects = function(e, t) {
            if (D = D || [], !e) return D.slice(0);
            (e = Q(e)).forEach(function(e) {
                for (var t = D.length; t--;) D[t].trigger === e && D[t].kill()
            });
            for (var n, i = (t = t || {}).speed, o = t.lag, r = [], s = 0; s < e.length; s++)(n = z(e[s], i, o, s)) && r.push(n);
            return D.push.apply(D, r), r
        }, this.sections = function(e, t) {
            if (f = f || [], !e) return f.slice(0);
            e = Q(e).map(function(t) {
                return $.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function(e) {
                        t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? f.push.apply(f, e) : f = e.slice(0), e
        }, this.content(e.content), this.wrapper(e.wrapper), this.render = function(e) {
            return r(e || 0 === e ? e : F)
        }, this.getVelocity = function() {
            return L.getVelocity(-F)
        }, $.scrollerProxy(x, {
            scrollTop: s,
            scrollHeight: function() {
                return R() && J.scrollHeight
            },
            fixedMarkers: !1 !== e.fixedMarkers && !!A,
            content: d,
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: W.innerWidth,
                    height: W.innerHeight
                }
            }
        }), $.defaults({
            scroller: x
        });
        w = $.getAll().filter(function(e) {
            return e.scroller === W || e.scroller === x
        });
        w.forEach(function(e) {
            return e.revert(!0)
        }), h = $.create({
            animation: j.fromTo(O, {
                y: 0
            }, {
                y: function() {
                    return -R()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    var e;
                    this._dur && ((e = y) && (o(h), O.y = F), r(O.y, e), t(), q && !v && q(this))
                }
            }),
            onRefreshInit: function() {
                var e;
                D && (e = $.getAll().filter(function(e) {
                    return !!e.pin
                }), D.forEach(function(n) {
                    n.vars.pinnedContainer || e.forEach(function(e) {
                        var t;
                        e.pin.contains(n.trigger) && ((t = n.vars).pinnedContainer = e.pin, n.vars = null, n.init(t, n.animation))
                    })
                })), H = F, O.y = x.scrollTop = 0
            },
            id: "ScrollSmoother",
            scroller: W,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: R,
            onScrubComplete: function() {
                L.reset(), Y && Y(i)
            },
            scrub: A || !0,
            onRefresh: function(e) {
                o(e), O.y = -k(), r(O.y), P || e.animation.progress(j.utils.clamp(0, 1, H / -e.end))
            }
        }), this.smooth = function(e) {
            return arguments.length && (A = e || 0), arguments.length ? h.scrubDuration(e) : h.getTween() ? h.getTween().duration() : 0
        }, h.getTween() && (h.getTween().vars.ease = e.ease || te), this.scrollTrigger = h, e.effects && this.effects(!0 === e.effects ? "[data-" + E + "speed], [data-" + E + "lag]" : e.effects, {}), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), w.forEach(function(e) {
            e.vars.scroller = x, e.init(e.vars, e.animation)
        }), this.paused = function(e, t) {
            return arguments.length ? (!!v !== e && (e ? (h.getTween() && h.getTween().pause(), k(-F), L.reset(), (_ = $.normalizeScroll()) && _.disable(), (v = $.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function() {
                    return s(-F)
                }
            })).nested = ie(K, "wheel,touch,scroll", !0, !1 !== t)) : (v.nested.kill(), v.kill(), v = 0, _ && _.enable(), h.progress = (-F - h.start) / (h.end - h.start), o(h))), this) : !!v
        }, this.kill = function() {
            i.paused(!1), o(h), h.kill();
            for (var e = (D || []).concat(f || []), t = e.length; t--;) e[t].kill();
            $.scrollerProxy(x), $.removeEventListener("killAll", c), $.removeEventListener("refresh", u), J.style.removeProperty("height"), x.style.cssText = m, d.style.cssText = I;
            var n = $.defaults({});
            n && n.scroller === x && $.defaults({
                scroller: W
            }), i.normalizer && $.normalizeScroll(!1), clearInterval(g), ee = null, T && T.disconnect(), W.removeEventListener("focusin", a)
        }, this.refresh = function(e, t) {
            return h.refresh(e, t)
        }, S && (this.normalizer = $.normalizeScroll(!0 === S ? {
            debounce: !0,
            content: !A && d
        } : S)), $.config(e), "overscrollBehavior" in W.getComputedStyle(J) && j.set([J, K], {
            overscrollBehavior: "none"
        }), "scrollBehavior" in W.getComputedStyle(J) && j.set([J, K], {
            scrollBehavior: "auto"
        }), W.addEventListener("focusin", a), g = setInterval(t, 250), "loading" !== U.readyState && requestAnimationFrame(function() {
            return $.refresh()
        })
    }
    a.version = "3.11.0", a.create = function(e) {
        return ee && e && ee.content() === Q(e.content)[0] ? ee : new a(e)
    }, a.get = function() {
        return ee
    }, i() && j.registerPlugin(a), e.ScrollSmoother = a, e.default = a, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o() {
        return Ee || "undefined" != typeof window && (Ee = window.gsap) && Ee.registerPlugin && Ee
    }

    function nt(e, t) {
        return ~Pe.indexOf(e) && Pe[Pe.indexOf(e) + 1][t]
    }

    function it(e) {
        return !!~s.indexOf(e)
    }

    function Se(e, t, n, i, o) {
        e.addEventListener(t, n, {
            passive: !i,
            capture: !!o
        })
    }

    function Te(e, t, n, i) {
        e.removeEventListener(t, n, !!i)
    }

    function ot() {
        return Fe && Fe.isPressed || k.cache++
    }

    function r(n, i) {
        function o(e) {
            var t;
            return e || 0 === e ? (d && (ke.history.scrollRestoration = "manual"), t = Fe && Fe.isPressed, e = o.v = Math.round(e) || (Fe && Fe.iOS ? 1 : 0), n(e), o.cacheID = k.cache, t && p("ss", e)) : (i || k.cache !== o.cacheID || p("ref")) && (o.cacheID = k.cache, o.v = n()), o.v + o.offset
        }
        return o.offset = 0, n && o
    }

    function Ae(e) {
        return Ee.utils.toArray(e)[0] || ("string" == typeof e && !1 !== Ee.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function rt(t, e) {
        var n = e.s,
            e = e.sc,
            i = k.indexOf(t),
            o = e === Oe.sc ? 1 : 2;
        return ~i || (i = k.push(t) - 1), k[i + o] || (k[i + o] = r(nt(t, n), !0) || (it(t) ? e : r(function(e) {
            return arguments.length ? t[n] = e : t[n]
        })))
    }

    function st(e, t, o) {
        function r(e, t) {
            var n = yt();
            t || i < n - l ? (a = s, s = e, u = l, l = n) : o ? s += e : s = a + (e - a) / (n - u) * (l - u)
        }
        var s = e,
            a = e,
            l = yt(),
            u = l,
            i = t || 50,
            c = Math.max(500, 3 * i);
        return {
            update: r,
            reset: function() {
                a = s = o ? 0 : s, u = l = 0
            },
            getVelocity: function(e) {
                var t = u,
                    n = a,
                    i = yt();
                return !e && 0 !== e || e === s || r(e), l === u || c < i - u ? 0 : (s + (o ? n : -n)) / ((o ? i : l) - t) * 1e3
            }
        }
    }

    function at(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function lt(e) {
        var t = Math.max.apply(Math, e),
            e = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(e) ? t : e
    }

    function ut() {
        var e, n, t;
        (vt = Ee.core.globals().ScrollTrigger) && vt.core && (e = vt.core, n = e.bridge || {}, t = e._scrollers, e = e._proxies, t.push.apply(t, k), e.push.apply(e, Pe), k = t, Pe = e, p = function(e, t) {
            return n[e](t)
        })
    }

    function ct(e) {
        return (Ee = e || o()) && "undefined" != typeof document && document.body && (ke = window, ht = (pt = document).documentElement, ft = pt.body, s = [ke, pt, ht, ft], Ee.utils.clamp, mt = "onpointerenter" in ft ? "pointer" : "mouse", gt = A.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Me = A.eventTypes = ("ontouchstart" in ht ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ht ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return d = 0
        }, 500), ut(), dt = 1), dt
    }
    var Ee, dt, ke, pt, ht, ft, gt, mt, vt, s, Fe, Me, l, u, c, d = 1,
        _t = [],
        k = [],
        Pe = [],
        yt = Date.now,
        p = function(e, t) {
            return t
        },
        h = "scrollLeft",
        f = "scrollTop",
        Le = {
            s: h,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: r(function(e) {
                return arguments.length ? ke.scrollTo(e, Oe.sc()) : ke.pageXOffset || pt[h] || ht[h] || ft[h] || 0
            })
        },
        Oe = {
            s: f,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Le,
            sc: r(function(e) {
                return arguments.length ? ke.scrollTo(Le.sc(), e) : ke.pageYOffset || pt[f] || ht[f] || ft[f] || 0
            })
        },
        A = (Le.op = Oe, k.cache = 0, g.prototype.init = function(e) {
            dt || ct(Ee) || console.warn("Please gsap.registerPlugin(Observer)"), vt || ut();
            var o = e.tolerance,
                r = e.dragMinimum,
                t = e.type,
                i = e.target,
                n = e.lineHeight,
                s = e.debounce,
                a = e.preventDefault,
                l = e.onStop,
                B = e.onStopDelay,
                u = e.ignore,
                c = e.wheelSpeed,
                N = e.event,
                z = e.onDragStart,
                I = e.onDragEnd,
                H = e.onDrag,
                V = e.onPress,
                q = e.onRelease,
                Y = e.onRight,
                X = e.onLeft,
                j = e.onUp,
                G = e.onDown,
                W = e.onChangeX,
                U = e.onChangeY,
                K = e.onChange,
                J = e.onToggleX,
                Q = e.onToggleY,
                Z = e.onHover,
                $ = e.onHoverEnd,
                d = e.onMove,
                ee = e.ignoreCheck,
                p = e.isNormalizer,
                te = e.onGestureStart,
                ne = e.onGestureEnd,
                ie = e.onWheel,
                oe = e.onEnable,
                re = e.onDisable,
                se = e.onClick,
                h = e.scrollSpeed,
                f = e.capture,
                ae = e.allowClicks,
                le = e.lockAxis,
                ue = e.onLockAxis;

            function ce() {
                return Ce = yt()
            }

            function g(e, t) {
                return (S.event = e) && u && ~u.indexOf(e.target) || t && we && "touch" !== e.pointerType || ee && ee(e, t)
            }

            function m() {
                var e = S.deltaX = lt(P),
                    t = S.deltaY = lt(L),
                    n = Math.abs(e) >= o,
                    i = Math.abs(t) >= o;
                K && (n || i) && K(S, e, t, P, L), n && (Y && 0 < S.deltaX && Y(S), X && S.deltaX < 0 && X(S), W && W(S), J && S.deltaX < 0 != T < 0 && J(S), T = S.deltaX, P[0] = P[1] = P[2] = 0), i && (G && 0 < S.deltaY && G(S), j && S.deltaY < 0 && j(S), U && U(S), Q && S.deltaY < 0 != E < 0 && Q(S), E = S.deltaY, L[0] = L[1] = L[2] = 0), (x || b) && (d && d(S), b && (H(S), b = !1), x = !1), w && !(w = !1) && ue && ue(S), D && (ie(S), D = !1), y = 0
            }

            function de(e, t, n) {
                P[n] += e, L[n] += t, S._vx.update(e), S._vy.update(t), s ? y = y || requestAnimationFrame(m) : m()
            }

            function pe(e, t) {
                "y" !== C && (P[2] += e, S._vx.update(e, !0)), "x" !== C && (L[2] += t, S._vy.update(t, !0)), le && !C && (S.axis = C = Math.abs(e) > Math.abs(t) ? "x" : "y", w = !0), s ? y = y || requestAnimationFrame(m) : m()
            }

            function v(e) {
                var t, n, i, o;
                g(e, 1) || (t = (e = at(e, a)).clientX, e = e.clientY, n = t - S.x, i = e - S.y, o = S.isDragging, S.x = t, S.y = e, (o || Math.abs(S.startX - t) >= r || Math.abs(S.startY - e) >= r) && (H && (b = !0), o || (S.isDragging = !0), pe(n, i), o || z && z(S)))
            }

            function _(t) {
                var e, n;
                g(t, 1) || (Te(p ? i : M, Me[1], v, !0), e = S.isDragging && (3 < Math.abs(S.x - S.startX) || 3 < Math.abs(S.y - S.startY)), n = at(t), e || (S._vx.reset(), S._vy.reset(), a && ae && Ee.delayedCall(.08, function() {
                    var e;
                    300 < yt() - Ce && !t.defaultPrevented && (t.target.click ? t.target.click() : M.createEvent && ((e = M.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ke, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)))
                })), S.isDragging = S.isGesturing = S.isPressed = !1, l && !p && R.restart(!0), I && e && I(S), q && q(S, e))
            }

            function he(e) {
                return e.touches && 1 < e.touches.length && (S.isGesturing = !0) && te(e, S.isDragging)
            }

            function fe() {
                return S.isGesturing = !1, ne(S)
            }

            function ge(e) {
                var t;
                g(e) || (e = k(), t = A(), de((e - xe) * h, (t - De) * h, 1), xe = e, De = t, l && R.restart(!0))
            }

            function me(e) {
                var t;
                g(e) || (e = at(e, a), ie && (D = !0), t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? ke.innerHeight : 1) * c, de(e.deltaX * t, e.deltaY * t, 0), l && !p && R.restart(!0))
            }

            function ve(e) {
                var t, n, i;
                g(e) || (t = e.clientX, e = e.clientY, n = t - S.x, i = e - S.y, S.x = t, S.y = e, x = !0, (n || i) && pe(n, i))
            }

            function _e(e) {
                S.event = e, Z(S)
            }

            function ye(e) {
                S.event = e, $(S)
            }

            function be(e) {
                return g(e) || at(e, a) && se(S)
            }
            this.target = i = Ae(i) || ht, this.vars = e;
            var y, b, x, D, w, C, u = u && Ee.utils.toArray(u),
                o = o || 1e-9,
                r = r || 0,
                c = c || 1,
                h = h || 1,
                t = t || "wheel,touch,pointer",
                s = !1 !== s,
                n = n || parseFloat(ke.getComputedStyle(ft).lineHeight) || 22,
                S = this,
                T = 0,
                E = 0,
                k = rt(i, Le),
                A = rt(i, Oe),
                xe = k(),
                De = A(),
                we = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Me[0],
                F = it(i),
                M = i.ownerDocument || pt,
                P = [0, 0, 0],
                L = [0, 0, 0],
                Ce = 0,
                O = S.onPress = function(e) {
                    g(e, 1) || (S.axis = C = null, R.pause(), S.isPressed = !0, e = at(e), T = E = 0, S.startX = S.x = e.clientX, S.startY = S.y = e.clientY, S._vx.reset(), S._vy.reset(), Se(p ? i : M, Me[1], v, a, !0), S.deltaX = S.deltaY = 0, V && V(S))
                },
                R = S._dc = Ee.delayedCall(B || .25, function() {
                    S._vx.reset(), S._vy.reset(), R.pause(), l && l(S)
                }).pause();
            S.deltaX = S.deltaY = 0, S._vx = st(0, 50, !0), S._vy = st(0, 50, !0), S.scrollX = k, S.scrollY = A, S.isDragging = S.isGesturing = S.isPressed = !1, S.enable = function(e) {
                return S.isEnabled || (Se(F ? M : i, "scroll", ot), 0 <= t.indexOf("scroll") && Se(F ? M : i, "scroll", ge, a, f), 0 <= t.indexOf("wheel") && Se(i, "wheel", me, a, f), (0 <= t.indexOf("touch") && gt || 0 <= t.indexOf("pointer")) && (Se(i, Me[0], O, a, f), Se(M, Me[2], _), Se(M, Me[3], _), ae && Se(i, "click", ce, !1, !0), se && Se(i, "click", be), te && Se(M, "gesturestart", he), ne && Se(M, "gestureend", fe), Z && Se(i, mt + "enter", _e), $ && Se(i, mt + "leave", ye), d && Se(i, mt + "move", ve)), S.isEnabled = !0, e && e.type && O(e), oe && oe(S)), S
            }, S.disable = function() {
                S.isEnabled && (_t.filter(function(e) {
                    return e !== S && it(e.target)
                }).length || Te(F ? M : i, "scroll", ot), S.isPressed && (S._vx.reset(), S._vy.reset(), Te(p ? i : M, Me[1], v, !0)), Te(F ? M : i, "scroll", ge, f), Te(i, "wheel", me, f), Te(i, Me[0], O, f), Te(M, Me[2], _), Te(M, Me[3], _), Te(i, "click", ce, !0), Te(i, "click", be), Te(M, "gesturestart", he), Te(M, "gestureend", fe), Te(i, mt + "enter", _e), Te(i, mt + "leave", ye), Te(i, mt + "move", ve), S.isEnabled = S.isPressed = S.isDragging = !1, re && re(S))
            }, S.kill = function() {
                S.disable();
                var e = _t.indexOf(S);
                0 <= e && _t.splice(e, 1), Fe === S && (Fe = 0)
            }, _t.push(S), p && it(i) && (Fe = S), S.enable(N)
        }, l = g, (u = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]) && i(l.prototype, u), c && i(l, c), g);

    function g(e) {
        this.init(e)
    }

    function m() {
        return Gt = 1
    }

    function v() {
        return Gt = 0
    }

    function Re(e) {
        return e
    }

    function bt(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function _() {
        return "undefined" != typeof window
    }

    function y() {
        return qe || _() && (qe = window.gsap) && qe.registerPlugin && qe
    }

    function xt(e) {
        return !!~O.indexOf(e)
    }

    function Dt(e) {
        return nt(e, "getBoundingClientRect") || (xt(e) ? function() {
            return fn.width = Ye.innerWidth, fn.height = Ye.innerHeight, fn
        } : function() {
            return Ve(e)
        })
    }

    function wt(e, t) {
        t.s;
        var n, i = t.d2,
            o = t.d,
            t = t.a;
        return (n = "scroll" + i) && (t = nt(e, n)) ? t() - Dt(e)()[o] : xt(e) ? (je[n] || Ge[n]) - (Ye["inner" + i] || je["client" + i] || Ge["client" + i]) : e[n] - e["offset" + i]
    }

    function b(e, t) {
        for (var n = 0; n < H.length; n += 3) t && !~t.indexOf(H[n + 1]) || e(H[n], H[n + 1], H[n + 2])
    }

    function Be(e) {
        return "string" == typeof e
    }

    function Ne(e) {
        return "function" == typeof e
    }

    function Ct(e) {
        return "number" == typeof e
    }

    function St(e) {
        return "object" == typeof e
    }

    function Tt(e, t, n) {
        e && e.progress(t ? 0 : 1) && n && e.pause()
    }

    function Et(e, t) {
        e.enabled && (t = t(e)) && t.totalTime && (e.callbackAnimation = t)
    }

    function ze(e) {
        return Ye.getComputedStyle(e)
    }

    function kt(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }

    function At(e, t) {
        t = t.d2;
        return e["offset" + t] || e["client" + t] || 0
    }

    function Ft(e) {
        var t, n = [],
            i = e.labels,
            o = e.duration();
        for (t in i) n.push(i[t] / o);
        return n
    }

    function Mt(o) {
        var r = qe.utils.snap(o),
            s = Array.isArray(o) && o.slice(0).sort(function(e, t) {
                return e - t
            });
        return s ? function(e, t, n) {
            var i;
            if (void 0 === n && (n = .001), !t) return r(e);
            if (0 < t) {
                for (e -= n, i = 0; i < s.length; i++)
                    if (s[i] >= e) return s[i];
                return s[i - 1]
            }
            for (i = s.length, e += n; i--;)
                if (s[i] <= e) return s[i];
            return s[0]
        } : function(e, t, n) {
            void 0 === n && (n = .001);
            var i = r(e);
            return !t || Math.abs(i - e) < n || i - e < 0 == t < 0 ? i : r(t < 0 ? e - o : e + o)
        }
    }

    function x(t, n, e, i) {
        e.split(",").forEach(function(e) {
            return t(n, e, i)
        })
    }

    function Ie(e, t, n, i, o) {
        return e.addEventListener(t, n, {
            passive: !i,
            capture: !!o
        })
    }

    function He(e, t, n, i) {
        return e.removeEventListener(t, n, !!i)
    }

    function D(e, t, n) {
        n && n.wheelHandler && e(t, "wheel", n)
    }

    function Pt(e, t) {
        var n, i;
        return Be(e) && (i = ~(n = e.indexOf("=")) ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0, ~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in J ? J[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)), e
    }

    function Lt(e, t, n, i, o, r, s, a) {
        var l = o.startColor,
            u = o.endColor,
            c = o.fontSize,
            d = o.indent,
            o = o.fontWeight,
            p = Xe.createElement("div"),
            h = xt(n) || "fixed" === nt(n, "pinType"),
            f = -1 !== e.indexOf("scroller"),
            n = h ? Ge : n,
            g = -1 !== e.indexOf("start"),
            l = g ? l : u,
            u = "border-color:" + l + ";font-size:" + c + ";color:" + l + ";font-weight:" + o + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return u += "position:" + ((f || a) && h ? "fixed;" : "absolute;"), !f && !a && h || (u += (i === Oe ? U : K) + ":" + (r + parseFloat(d)) + "px;"), s && (u += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), p._isStart = g, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = u, p.innerText = t || 0 === t ? e + "-" + t : e, n.children[0] ? n.insertBefore(p, n.children[0]) : n.appendChild(p), p._offset = p["offset" + i.op.d2], F(p, 0, i, g), p
    }

    function w() {
        return 34 < Ke() - Je && P()
    }

    function Ot() {
        t && t.isPressed && !(t.startX > Ge.clientWidth) || (k.cache++, G = G || requestAnimationFrame(P), Je || $("scrollStart"), Je = Ke())
    }

    function C() {
        X = Ye.innerWidth, Y = Ye.innerHeight
    }

    function Rt() {
        k.cache++, We || V || Xe.fullscreenElement || Xe.webkitFullscreenElement || q && X === Ye.innerWidth && !(Math.abs(Ye.innerHeight - Y) > .25 * Ye.innerHeight) || R.restart(!0)
    }

    function Bt() {
        return He(a, "scrollEnd", Bt) || M(!0)
    }

    function S(e) {
        for (var t = 0; t < n.length; t += 5)(!e || n[t + 4] && n[t + 4].query === e) && (n[t].style.cssText = n[t + 1], n[t].getBBox && n[t].setAttribute("transform", n[t + 2] || ""), n[t + 3].uncache = 1)
    }

    function T(e, t) {
        var n;
        for (Ue = 0; Ue < et.length; Ue++) !(n = et[Ue]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
        t && S(t), t || $("revert")
    }

    function E() {
        return k.cache++ && k.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function Nt(e, t, n, i) {
        if (!e._gsap.swappedIn) {
            for (var o, r = ne.length, s = t.style, a = e.style; r--;) s[o = ne[r]] = n[o];
            s.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (s.display = "inline-block"), a[K] = a[U] = s.flexBasis = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[nn] = At(e, Le) + $e, s[on] = At(e, Oe) + $e, s[Qe] = a[Ze] = a.top = a.left = "0", qt(i), a[nn] = a.maxWidth = n[nn], a[on] = a.maxHeight = n[on], a[Qe] = n[Qe], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function zt(e) {
        for (var t = ie.length, n = e.style, i = [], o = 0; o < t; o++) i.push(ie[o], n[ie[o]]);
        return i.t = e, i
    }

    function It(e, t, n, i, o, r, s, a, l, u, c, d, p) {
        Be(e = Ne(e) ? e(a) : e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Pt("0" + e.substr(3), n) : 0));
        var h, f, g, m = p ? p.time() : 0;
        return p && p.seek(0), Ct(e) ? s && F(s, n, i, !0) : (Ne(t) && (t = t(a)), a = (e || "0").split(" "), f = Ae(t) || Ge, (t = Ve(f) || {}) && (t.left || t.top) || "none" !== ze(f).display || (h = f.style.display, f.style.display = "block", t = Ve(f), h ? f.style.display = h : f.style.removeProperty("display")), h = Pt(a[0], t[i.d]), a = Pt(a[1] || "0", n), e = t[i.p] - l[i.p] - u + h + o - a, s && F(s, a, i, n - a < 20 || s._isStart && 20 < a), n -= n - a), r && (t = r._isStart, g = "scroll" + i.d2, F(r, u = e + n, i, t && 20 < u || !t && (c ? Math.max(Ge[g], je[g]) : r.parentNode[g]) <= u + 1), c && (l = Ve(s), c && (r.style[i.op.p] = l[i.op.p] - i.op.m - r._offset + $e))), p && f && (g = Ve(f), p.seek(d), h = Ve(f), p._caScrollDist = g[i.p] - h[i.p], e = e / p._caScrollDist * d), p && p.seek(m), p ? e : Math.round(e)
    }

    function Ht(e, t, n, i) {
        if (e.parentNode !== t) {
            var o, r, s = e.style;
            if (t === Ge) {
                for (o in e._stOrig = s.cssText, r = ze(e)) + o || re.test(o) || !r[o] || "string" != typeof s[o] || "0" === o || (s[o] = r[o]);
                s.top = n, s.left = i
            } else s.cssText = e._stOrig;
            qe.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function Vt(a, e) {
        function l(e, t, n, i, o) {
            var r = l.tween,
                s = t.onComplete;
            return n = n || d(), o = i && o || 0, i = i || e - n, r && r.kill(), u = Math.round(n), t[p] = e, (t.modifiers = {})[p] = function(e) {
                return (e = Math.round(d())) !== u && e !== c && 3 < Math.abs(e - u) && 3 < Math.abs(e - c) ? (r.kill(), l.tween = 0) : e = n + i * r.ratio + o * r.ratio * r.ratio, c = u, u = Math.round(e)
            }, t.onComplete = function() {
                l.tween = 0, s && s.call(r)
            }, r = l.tween = qe.to(a, t)
        }
        var u, c, d = rt(a, e),
            p = "_scroll" + e.p2;
        return (a[p] = d).wheelHandler = function() {
            return l.tween && l.tween.kill() && (l.tween = 0)
        }, Ie(a, "wheel", d.wheelHandler), l
    }
    A.version = "3.11.0", A.create = function(e) {
        return new A(e)
    }, A.register = ct, A.getAll = function() {
        return _t.slice()
    }, A.getById = function(t) {
        return _t.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, o() && Ee.registerPlugin(A);

    function Ve(e, t) {
        return t = t && "matrix(1, 0, 0, 1, 0, 0)" !== ze(e)[N] && qe.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), e = e.getBoundingClientRect(), t && t.progress(0).kill(), e
    }

    function F(e, t, n, i) {
        var o = {
                display: "block"
            },
            r = n[i ? "os2" : "p2"],
            s = n[i ? "p2" : "os2"];
        e._isFlipped = i, o[n.a + "Percent"] = i ? -100 : 0, o[n.a] = i ? "1px" : 0, o["border" + r + un] = 1, o["border" + s + un] = 0, o[n.p] = t + "px", qe.set(e, o)
    }

    function M(e, t) {
        !Je || e ? (Qt = !0, e = $("refreshInit"), Wt && a.sort(), t || T(), et.slice(0).forEach(function(e) {
            return e.refresh()
        }), et.forEach(function(e) {
            return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, wt(e.scroller, e._dir)))
        }), e.forEach(function(e) {
            return e && e.render && e.render(-1)
        }), E(), R.pause(), ee++, Qt = !1, $("refresh")) : Ie(a, "scrollEnd", Bt)
    }

    function P() {
        if (!Qt) {
            a.isUpdating = !0, Zt && Zt.update(0);
            var e = et.length,
                t = Ke(),
                n = 50 <= t - W,
                i = e && et[0].scroll();
            if (hn = i < te ? -1 : 1, te = i, n && (Je && !Gt && 200 < t - Je && (Je = 0, $("scrollEnd")), jt = W, W = t), hn < 0) {
                for (Ue = e; 0 < Ue--;) et[Ue] && et[Ue].update(0, n);
                hn = 1
            } else
                for (Ue = 0; Ue < e; Ue++) et[Ue] && et[Ue].update(0, n);
            a.isUpdating = !1
        }
        G = 0
    }

    function qt(e) {
        if (e) {
            var t, n, i = e.t.style,
                o = e.length,
                r = 0;
            for ((e.t._gsap || qe.core.getCache(e.t)).uncache = 1; r < o; r += 2) n = e[r + 1], t = e[r], n ? i[t] = n : i[t] && i.removeProperty(t.replace(oe, "-$1").toLowerCase())
        }
    }
    var qe, L, Ye, Xe, je, Ge, O, R, Yt, Xt, jt, B, We, Gt, N, Ue, z, I, H, Wt, Ut, V, t, q, Y, X, j, Kt, Jt, G, Qt, Zt, $t = 1,
        Ke = Date.now,
        W = Ke(),
        Je = 0,
        en = 0,
        tn = Math.abs,
        U = "right",
        K = "bottom",
        nn = "width",
        on = "height",
        rn = "Right",
        sn = "Left",
        an = "Top",
        ln = "Bottom",
        Qe = "padding",
        Ze = "margin",
        un = "Width",
        $e = "px",
        cn = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        dn = {
            toggleActions: "play",
            anticipatePin: 0
        },
        J = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        et = [],
        pn = {},
        Q = {},
        Z = [],
        $ = function(e) {
            return Q[e] && Q[e].map(function(e) {
                return e()
            }) || Z
        },
        n = [],
        ee = 0,
        te = 0,
        hn = 1,
        ne = ["left", "top", K, U, Ze + ln, Ze + rn, Ze + an, Ze + sn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ie = ne.concat([nn, on, "boxSizing", "max" + un, "maxHeight", "position", Ze, Qe, Qe + an, Qe + rn, Qe + ln, Qe + sn]),
        oe = /([A-Z])/g,
        fn = {
            left: 0,
            top: 0
        },
        re = /(webkit|moz|length|cssText|inset)/i,
        a = (tt.prototype.init = function(m, v) {
            var _, i, q, y, Y, b, x, D, X, j, G, w, W, U, K, C, J, Q, Z, $, ee, te, S, s, p, T, E, ne, ie, oe, h, f, o, re, se, ae, k, A, F, le, ue, a, ce, de, g, pe, M, he, fe, P, L, O, R, B, ge, me, ve, N, z, _e, ye, be, xe, I, H, De, e, V, we, l, u, t, n, c, d, r, Ce, Se, Te, Ee, ke;
            this.progress = this.start = 0, this.vars && this.kill(!0, !0), en ? (h = (m = kt(Be(m) || Ct(m) || m.nodeType ? {
                trigger: m
            } : m, dn)).onUpdate, f = m.toggleClass, o = m.id, re = m.onToggle, se = m.onRefresh, ae = m.scrub, k = m.trigger, A = m.pin, F = m.pinSpacing, le = m.invalidateOnRefresh, ue = m.anticipatePin, a = m.onScrubComplete, ce = m.onSnapComplete, de = m.once, g = m.snap, pe = m.pinReparent, n = m.pinSpacer, M = m.containerAnimation, he = m.fastScrollEnd, fe = m.preventOverlaps, P = m.horizontal || m.containerAnimation && !1 !== m.horizontal ? Le : Oe, L = !ae && 0 !== ae, O = Ae(m.scroller || Ye), e = qe.core.getCache(O), R = xt(O), B = "fixed" === ("pinType" in m ? m.pinType : nt(O, "pinType") || R && "fixed"), ge = [m.onEnter, m.onLeave, m.onEnterBack, m.onLeaveBack], me = L && m.toggleActions.split(" "), t = ("markers" in m ? m : dn).markers, ve = !R && parseFloat(ze(O)["border" + P.p2 + un]) || 0, N = this, z = m.onRefreshInit && function() {
                return m.onRefreshInit(N)
            }, Ce = O, Se = R, Te = P.d, Ee = P.d2, ke = P.a, _e = (ke = nt(Ce, "getBoundingClientRect")) ? function() {
                return ke()[Te]
            } : function() {
                return (Se ? Ye["inner" + Ee] : Ce["client" + Ee]) || 0
            }, r = O, ye = !R || ~Pe.indexOf(r) ? Dt(r) : function() {
                return fn
            }, xe = be = 0, I = rt(O, P), Kt(N), N._dir = P, ue *= 45, N.scroller = O, N.scroll = M ? M.time.bind(M) : I, y = I(), N.vars = m, v = v || m.animation, "refreshPriority" in m && (Wt = 1, -9999 === m.refreshPriority && (Zt = N)), e.tweenScroll = e.tweenScroll || {
                top: Vt(O, Oe),
                left: Vt(O, Le)
            }, N.tweenTo = _ = e.tweenScroll[P.p], N.scrubDuration = function(e) {
                (s = Ct(e) && e) ? S ? S.duration(e) : S = qe.to(v, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: s,
                    paused: !0,
                    onComplete: function() {
                        return a && a(N)
                    }
                }): (S && S.progress(1).kill(), S = 0)
            }, v && (v.vars.lazy = !1, v._initted || !1 !== v.vars.immediateRender && !1 !== m.immediateRender && v.render(0, !0, !0), N.animation = v.pause(), (v.scrollTrigger = N).scrubDuration(ae), ee = 0, o = o || v.vars.id), et.push(N), g && (St(g) && !g.push || (g = {
                snapTo: g
            }), "scrollBehavior" in Ge.style && qe.set(R ? [Ge, je] : O, {
                scrollBehavior: "auto"
            }), q = Ne(g.snapTo) ? g.snapTo : "labels" === g.snapTo ? (d = v, function(e) {
                return qe.utils.snap(Ft(d), e)
            }) : "labelsDirectional" === g.snapTo ? (c = v, function(e, t) {
                return Mt(Ft(c))(e, t.direction)
            }) : !1 !== g.directional ? function(e, t) {
                return Mt(g.snapTo)(e, Ke() - xe < 500 ? 0 : t.direction)
            } : qe.utils.snap(g.snapTo), p = St(p = g.duration || {
                min: .1,
                max: 2
            }) ? Xt(p.min, p.max) : Xt(p, p), T = qe.delayedCall(g.delay || s / 2 || .1, function() {
                var e, t, n, i, o, r, s, a, l, u = I(),
                    c = Ke() - xe < 500,
                    d = _.tween;
                !(c || Math.abs(N.getVelocity()) < 10) || d || Gt || be === u ? N.isActive && be !== u && T.restart(!0) : (e = (u - b) / D, t = v && !L ? v.totalProgress() : e, c = !c && (t - te) / (Ke() - jt) * 1e3 || 0, n = qe.utils.clamp(-e, 1 - e, tn(c / 2) * c / .185), i = e + (!1 === g.inertia ? 0 : n), o = Xt(0, 1, q(i, N)), r = Math.round(b + o * D), s = g.onStart, a = g.onInterrupt, l = g.onComplete, u <= x && b <= u && r !== u && (d && !d._initted && d.data <= tn(r - u) || (!1 === g.inertia && (n = o - e), _(r, {
                    duration: p(tn(.185 * Math.max(tn(i - t), tn(o - t)) / c / .05 || 0)),
                    ease: g.ease || "power3",
                    data: tn(r - u),
                    onInterrupt: function() {
                        return T.restart(!0) && a && a(N)
                    },
                    onComplete: function() {
                        N.update(), be = I(), ee = te = v && !L ? v.totalProgress() : N.progress, ce && ce(N), l && l(N)
                    }
                }, u, n * D, r - u - n * D), s && s(N, _.tween))))
            }).pause()), o && (pn[o] = N), r = (r = (k = N.trigger = Ae(k || A)) && k._gsap && k._gsap.stRevert) && r(N), A = !0 === A ? k : Ae(A), Be(f) && (f = {
                targets: k,
                className: f
            }), A && (!1 !== F && F !== Ze && (F = !(!F && "flex" === ze(A.parentNode).display) && Qe), N.pin = A, !1 !== m.force3D && qe.set(A, {
                force3D: !0
            }), (i = qe.core.getCache(A)).spacer ? X = i.pinState : (n && ((n = Ae(n)) && !n.nodeType && (n = n.current || n.nativeElement), i.spacerIsNative = !!n, n && (i.spacerState = zt(n))), i.spacer = w = n || Xe.createElement("div"), w.classList.add("pin-spacer"), o && w.classList.add("pin-spacer-" + o), i.pinState = X = zt(A)), N.spacer = w = i.spacer, e = ze(A), J = e[F + P.os2], W = qe.getProperty(A), U = qe.quickSetter(A, P.a, $e), Nt(A, w, e), G = zt(A)), t && (n = St(t) ? kt(t, cn) : cn, H = Lt("scroller-start", o, O, P, n, 0), De = Lt("scroller-end", o, O, P, n, 0, H), e = H["offset" + P.op.d2], t = Ae(nt(O, "content") || O), V = this.markerStart = Lt("start", o, t, P, n, e, 0, M), we = this.markerEnd = Lt("end", o, t, P, n, e, 0, M), M && (oe = qe.quickSetter([V, we], P.a, $e)), B || Pe.length && !0 === nt(O, "fixedMarkers") || (n = ze(t = R ? Ge : O).position, t.style.position = "absolute" === n || "fixed" === n ? n : "relative", qe.set([H, De], {
                force3D: !0
            }), Z = qe.quickSetter(H, P.a, $e), $ = qe.quickSetter(De, P.a, $e))), M && (l = M.vars.onUpdate, u = M.vars.onUpdateParams, M.eventCallback("onUpdate", function() {
                N.update(0, 0, 1), l && l.apply(u || [])
            })), N.previous = function() {
                return et[et.indexOf(N) - 1]
            }, N.next = function() {
                return et[et.indexOf(N) + 1]
            }, N.revert = function(e, t) {
                if (!t) return N.kill(!0);
                var n, i = !1 !== e || !N.enabled,
                    t = We;
                i !== N.isReverted && (i && (!N.scroll.rec && We && Qt && (N.scroll.rec = I()), ne = Math.max(I(), N.scroll.rec || 0), E = N.progress, ie = v && v.progress()), V && [V, we, H, De].forEach(function(e) {
                    return e.style.display = i ? "none" : "block"
                }), i && (We = 1), N.update(i), We = t, A && (i ? (e = A, t = w, qt(n = X), (n = e._gsap).spacerIsNative ? qt(n.spacerState) : e._gsap.swappedIn && (n = t.parentNode) && (n.insertBefore(e, t), n.removeChild(t)), e._gsap.swappedIn = !1) : pe && N.isActive || Nt(A, w, ze(A), Q)), N.isReverted = i)
            }, N.refresh = function(e, t) {
                if (!We && N.enabled || t)
                    if (A && e && Je) Ie(tt, "scrollEnd", Bt);
                    else {
                        !Qt && z && z(N), We = 1, xe = Ke(), _.tween && (_.tween.kill(), _.tween = 0), S && S.pause(), le && v && v.revert().invalidate(), N.isReverted || N.revert(!0, !0);
                        for (var n, i, o, r, s, t = _e(), e = ye(), a = M ? M.duration() : wt(O, P), l = 0, u = 0, c = m.end, d = m.endTrigger || k, p = m.start || (0 !== m.start && k ? A ? "0 0" : "0 100%" : 0), h = N.pinnedContainer = m.pinnedContainer && Ae(m.pinnedContainer), f = k && Math.max(0, et.indexOf(N)) || 0, g = f; g--;)(o = et[g]).end || o.refresh(0, 1) || (We = 1), !(r = o.pin) || r !== k && r !== A || o.isReverted || ((s = s || []).unshift(o), o.revert(!0, !0)), o !== et[g] && (f--, g--);
                        for (Ne(p) && (p = p(N)), b = It(p, k, t, P, I(), V, H, N, e, ve, B, a, M) || (A ? -.001 : 0), Be(c = Ne(c) ? c(N) : c) && !c.indexOf("+=") && (~c.indexOf(" ") ? c = (Be(p) ? p.split(" ")[0] : "") + c : (l = Pt(c.substr(2), t), c = Be(p) ? p : b + l, d = k)), x = Math.max(b, It(c || (d ? "100% 0" : a), d, t, P, I() + l, we, De, N, e, ve, B, a, M)) || -.001, D = x - b || (b -= .01) && .001, l = 0, g = f; g--;)(r = (o = et[g]).pin) && o.start - o._pinPush < b && !M && 0 < o.end && (n = o.end - o.start, r !== k && r !== h || Ct(p) || (l += n * (1 - o.progress)), r === A && (u += n));
                        if (b += l, x += l, N._pinPush = u, V && l && ((n = {})[P.a] = "+=" + l, h && (n[P.p] = "-=" + I()), qe.set([V, we], n)), A) n = ze(A), c = P === Oe, d = I(), K = parseFloat(W(P.a)) + u, !a && 1 < x && ((R ? Ge : O).style["overflow-" + P.a] = "scroll"), Nt(A, w, n), G = zt(A), i = Ve(A, !0), t = B && rt(O, c ? Le : Oe)(), F && ((Q = [F + P.os2, D + u + $e]).t = w, (g = F === Qe ? At(A, P) + D + u : 0) && Q.push(P.d, g + $e), qt(Q), B && I(ne)), B && ((e = {
                            top: i.top + (c ? d - b : t) + $e,
                            left: i.left + (c ? t : d - b) + $e,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[nn] = e.maxWidth = Math.ceil(i.width) + $e, e[on] = e.maxHeight = Math.ceil(i.height) + $e, e[Ze] = e[Ze + an] = e[Ze + rn] = e[Ze + ln] = e[Ze + sn] = "0", e[Qe] = n[Qe], e[Qe + an] = n[Qe + an], e[Qe + rn] = n[Qe + rn], e[Qe + ln] = n[Qe + ln], e[Qe + sn] = n[Qe + sn], j = function(e, t, n) {
                            for (var i, o = [], r = e.length, s = n ? 8 : 0; s < r; s += 2) i = e[s], o.push(i, i in t ? t[i] : e[s + 1]);
                            return o.t = e.t, o
                        }(X, e, pe)), v ? (a = v._initted, Ut(1), v.render(v.duration(), !0, !0), C = W(P.a) - K + D + u, D !== C && B && j.splice(j.length - 2, 2), v.render(0, !0, !0), a || v.invalidate(), Ut(0)) : C = D;
                        else if (k && I() && !M)
                            for (i = k.parentNode; i && i !== Ge;) i._pinOffset && (b -= i._pinOffset, x -= i._pinOffset), i = i.parentNode;
                        s && s.forEach(function(e) {
                            return e.revert(!1, !0)
                        }), N.start = b, N.end = x, y = Y = I(), M || (y < ne && I(ne), N.scroll.rec = 0), N.revert(!1, !0), T && (be = -1, N.isActive && I(b + D * E), T.restart(!0)), We = 0, v && L && (v._initted || ie) && v.progress() !== ie && v.progress(ie, !0).render(v.time(), !0, !0), E === N.progress && !M || (v && !L && v.totalProgress(E, !0), N.progress = (y - b) / D === E ? 0 : E, N.update(0, 0, 1)), A && F && (w._pinOffset = Math.round(N.progress * C)), se && se(N)
                    }
            }, N.getVelocity = function() {
                return (I() - Y) / (Ke() - jt) * 1e3 || 0
            }, N.endAnimation = function() {
                Tt(N.callbackAnimation), v && (S ? S.progress(1) : v.paused() ? L || Tt(v, N.direction < 0, 1) : Tt(v, v.reversed()))
            }, N.labelToScroll = function(e) {
                return v && v.labels && (b || N.refresh() || b) + v.labels[e] / v.duration() * D || 0
            }, N.getTrailing = function(t) {
                var e = et.indexOf(N),
                    e = 0 < N.direction ? et.slice(0, e).reverse() : et.slice(e + 1);
                return (Be(t) ? e.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : e).filter(function(e) {
                    return 0 < N.direction ? e.end <= b : e.start >= x
                })
            }, N.update = function(e, t, n) {
                var i, o, r, s, a, l, u, c, d;
                M && !n && !e || (n = N.scroll(), a = (a = e ? 0 : (n - b) / D) < 0 ? 0 : 1 < a ? 1 : a || 0, u = N.progress, t && (Y = y, y = M ? I() : n, g && (te = ee, ee = v && !L ? v.totalProgress() : a)), (a = ue && !a && A && !We && !$t && Je && b < n + (n - Y) / (Ke() - jt) * ue ? 1e-4 : a) !== u && N.enabled && (c = (t = (i = N.isActive = !!a && a < 1) != (!!u && u < 1)) || !!a != !!u, N.direction = u < a ? 1 : -1, N.progress = a, c && !We && (o = a && !u ? 0 : 1 === a ? 1 : 1 === u ? 2 : 3, L && (r = !t && "none" !== me[o + 1] && me[o + 1] || me[o], s = v && ("complete" === r || "reset" === r || r in v))), fe && (t || s) && (s || ae || !v) && (Ne(fe) ? fe(N) : N.getTrailing(fe).forEach(function(e) {
                    return e.endAnimation()
                })), L || (!S || We || $t ? v && v.totalProgress(a, !!We) : ((M || Zt && Zt !== N) && S.render(S._dp._time - S._start), S.resetTo ? S.resetTo("totalProgress", a, v._tTime / v._tDur) : (S.vars.totalProgress = a, S.invalidate().restart()))), A && (e && F && (w.style[F + P.os2] = J), B ? c && (u = !e && u < a && n < x + 1 && n + 1 >= wt(O, P), pe && (e || !i && !u ? Ht(A, w) : (d = Ve(A, !0), l = n - b, Ht(A, Ge, d.top + (P === Oe ? l : 0) + $e, d.left + (P === Oe ? 0 : l) + $e))), qt(i || u ? j : G), C !== D && a < 1 && i || U(K + (1 !== a || u ? 0 : C))) : U(bt(K + C * a))), !g || _.tween || We || $t || T.restart(!0), f && (t || de && a && (a < 1 || !Jt)) && Yt(f.targets).forEach(function(e) {
                    return e.classList[i || de ? "add" : "remove"](f.className)
                }), !h || L || e || h(N), c && !We ? (L && (s && ("complete" === r ? v.pause().totalProgress(1) : "reset" === r ? v.restart(!0).pause() : "restart" === r ? v.restart(!0) : v[r]()), h && h(N)), !t && Jt || (re && t && Et(N, re), ge[o] && Et(N, ge[o]), de && (1 === a ? N.kill(!1, 1) : ge[o] = 0), t || ge[o = 1 === a ? 1 : 3] && Et(N, ge[o])), he && !i && Math.abs(N.getVelocity()) > (Ct(he) ? he : 2500) && (Tt(N.callbackAnimation), S ? S.progress(1) : Tt(v, !a, 1))) : L && h && !We && h(N)), $ && (d = M ? n / M.duration() * (M._caScrollDist || 0) : n, Z(d + (H._isFlipped ? 1 : 0)), $(d)), oe && oe(-n / M.duration() * (M._caScrollDist || 0)))
            }, N.enable = function(e, t) {
                N.enabled || (N.enabled = !0, Ie(O, "resize", Rt), Ie(R ? Xe : O, "scroll", Ot), z && Ie(tt, "refreshInit", z), !1 !== e && (N.progress = E = 0, y = Y = be = I()), !1 !== t && N.refresh())
            }, N.getTween = function(e) {
                return e && _ ? _.tween : S
            }, N.setPositions = function(e, t) {
                A && (K += e - b, C += t - e - D), N.start = b = e, N.end = x = t, D = t - e, N.update()
            }, N.disable = function(e, t) {
                if (N.enabled && (!1 !== e && N.revert(!0, !0), N.enabled = N.isActive = !1, t || S && S.pause(), ne = 0, i && (i.uncache = 1), z && He(tt, "refreshInit", z), T && (T.pause(), _.tween && _.tween.kill() && (_.tween = 0)), !R)) {
                    for (var n = et.length; n--;)
                        if (et[n].scroller === O && et[n] !== N) return;
                    He(O, "resize", Rt), He(O, "scroll", Ot)
                }
            }, N.kill = function(e, t) {
                N.disable(e, t), S && !t && S.kill(), o && delete pn[o];
                var n = et.indexOf(N);
                0 <= n && et.splice(n, 1), n === Ue && 0 < hn && Ue--, n = 0, et.forEach(function(e) {
                    return e.scroller === N.scroller && (n = 1)
                }), n || (N.scroll.rec = 0), v && (v.scrollTrigger = null, e && v.render(-1), t || v.kill()), V && [V, we, H, De].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }), Zt === N && (Zt = 0), A && (i && (i.uncache = 1), n = 0, et.forEach(function(e) {
                    return e.pin === A && n++
                }), n || (i.spacer = 0)), m.onKill && m.onKill(N)
            }, N.enable(!1, !1), r && r(N), v && v.add && !D ? qe.delayedCall(.01, function() {
                return b || x || N.refresh()
            }) && (D = .01) && (b = x = 0) : N.refresh()) : this.update = this.refresh = this.kill = Re
        }, tt.register = function(e) {
            return L || (qe = e || y(), _() && window.document && tt.enable(), L = en), L
        }, tt.defaults = function(e) {
            if (e)
                for (var t in e) dn[t] = e[t];
            return dn
        }, tt.disable = function(t, n) {
            en = 0, et.forEach(function(e) {
                return e[n ? "kill" : "disable"](t)
            }), He(Ye, "wheel", Ot), He(Xe, "scroll", Ot), clearInterval(B), He(Xe, "touchcancel", Re), He(Ge, "touchstart", Re), x(He, Xe, "pointerdown,touchstart,mousedown", m), x(He, Xe, "pointerup,touchend,mouseup", v), R.kill(), b(He);
            for (var e = 0; e < k.length; e += 3) D(He, k[e], k[e + 1]), D(He, k[e], k[e + 2])
        }, tt.enable = function() {
            if (Ye = window, Xe = document, je = Xe.documentElement, Ge = Xe.body, qe && (Yt = qe.utils.toArray, Xt = qe.utils.clamp, Kt = qe.core.context || Re, Ut = qe.core.suppressOverwrites || Re, qe.core.globals("ScrollTrigger", tt), Ge)) {
                en = 1, A.register(qe), tt.isTouch = A.isTouch, j = A.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ie(Ye, "wheel", Ot), O = [Ye, Xe, je, Ge], qe.matchMedia ? (tt.matchMedia = function(e) {
                    var t, n;
                    for (n in e) t ? t.add(n, e[n]) : t = qe.matchMedia(n, e[n]);
                    return t
                }, qe.addEventListener("matchMediaInit", function() {
                    return T()
                }), qe.addEventListener("matchMediaRevert", function() {
                    return S()
                }), qe.addEventListener("matchMedia", function() {
                    M(0, 1), $("matchMedia")
                }), qe.matchMedia("(orientation: portrait)", function() {
                    return C(), C
                })) : console.warn("Requires GSAP 3.11.0 or later"), Ie(Xe, "scroll", Ot);
                var e, t = Ge.style,
                    n = t.borderTopStyle,
                    i = qe.core.Animation.prototype;
                for (i.revert || Object.defineProperty(i, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), t.borderTopStyle = "solid", i = Ve(Ge), Oe.m = Math.round(i.top + Oe.sc()) || 0, Le.m = Math.round(i.left + Le.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), B = setInterval(w, 250), qe.delayedCall(.5, function() {
                        return $t = 0
                    }), Ie(Xe, "touchcancel", Re), Ie(Ge, "touchstart", Re), x(Ie, Xe, "pointerdown,touchstart,mousedown", m), x(Ie, Xe, "pointerup,touchend,mouseup", v), N = qe.utils.checkPrefix("transform"), ie.push(N), L = Ke(), R = qe.delayedCall(.2, M).pause(), H = [Xe, "visibilitychange", function() {
                        var e = Ye.innerWidth,
                            t = Ye.innerHeight;
                        Xe.hidden ? (z = e, I = t) : z === e && I === t || Rt()
                    }, Xe, "DOMContentLoaded", M, Ye, "load", M, Ye, "resize", Rt], b(Ie), et.forEach(function(e) {
                        return e.enable(0, 1)
                    }), e = 0; e < k.length; e += 3) D(He, k[e], k[e + 1]), D(He, k[e], k[e + 2])
            }
        }, tt.config = function(e) {
            "limitCallbacks" in e && (Jt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(B) || (B = t) && setInterval(w, t), "ignoreMobileResize" in e && (q = 1 === tt.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (b(He), b(Ie, e.autoRefreshEvents || "none"), V = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, tt.scrollerProxy = function(e, t) {
            var e = Ae(e),
                n = k.indexOf(e),
                i = xt(e);
            ~n && k.splice(n, i ? 6 : 2), t && (i ? Pe.unshift(Ye, t, Ge, t, je, t) : Pe.unshift(e, t))
        }, tt.clearMatchMedia = function(t) {
            et.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, tt.isInViewport = function(e, t, n) {
            e = (Be(e) ? Ae(e) : e).getBoundingClientRect(), t = e[n ? nn : on] * t || 0;
            return n ? 0 < e.right - t && e.left + t < Ye.innerWidth : 0 < e.bottom - t && e.top + t < Ye.innerHeight
        }, tt.positionInViewport = function(e, t, n) {
            var e = (e = Be(e) ? Ae(e) : e).getBoundingClientRect(),
                i = e[n ? nn : on],
                i = null == t ? i / 2 : t in J ? J[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return n ? (e.left + i) / Ye.innerWidth : (e.top + i) / Ye.innerHeight
        }, tt.killAll = function(e) {
            et.forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
            }), !0 !== e && (e = Q.killAll || [], Q = {}, e.forEach(function(e) {
                return e()
            }))
        }, tt);

    function tt(e, t) {
        L || tt.register(qe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }

    function se(e, t, n, i) {
        return i < t ? e(i) : t < 0 && e(0), i < n ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
    }

    function ae(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (A.isTouch ? " pinch-zoom" : "") : "none", e === je && ae(Ge, t)
    }

    function le(e) {
        var t = e.event,
            n = e.target,
            e = e.axis,
            i = (t.changedTouches ? t.changedTouches[0] : t).target,
            o = i._gsap || qe.core.getCache(i),
            r = Ke();
        if (!o._isScrollT || 2e3 < r - o._isScrollT) {
            for (; i && i.scrollHeight <= i.clientHeight;) i = i.parentNode;
            o._isScroll = i && !xt(i) && i !== n && (pe[(n = ze(i)).overflowY] || pe[n.overflowX]), o._isScrollT = r
        }!o._isScroll && "x" !== e || (t.stopPropagation(), t._gsapAllow = !0)
    }

    function ue(e, t, n, i) {
        return A.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: i = i && le,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return n && Ie(Xe, A.eventTypes[0], fe, !1, !0)
            },
            onDisable: function() {
                return He(Xe, A.eventTypes[0], fe, !0)
            }
        })
    }

    function ce(e) {
        function n() {
            return u = !1
        }

        function r() {
            a = wt(m, Oe), E = Xt(j ? 1 : 0, a), f && (T = Xt(0, wt(m, Le))), l = ee
        }

        function s() {
            _._gsap.y = bt(parseFloat(_._gsap.y) + y.offset) + "px", _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
        }

        function o() {
            r(), c.isActive() && c.vars.scrollY > a && (y() > a ? c.progress(1) && y(a) : c.resetTo("scrollY", a))
        }(e = St(e) ? e : {}).preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var i, a, l, u, c, d, p, h, f = e.normalizeScrollX,
            t = e.momentum,
            g = e.allowNestedScroll,
            m = Ae(e.target) || je,
            v = qe.core.globals().ScrollSmoother,
            v = v && v.get(),
            _ = j && (e.content && Ae(e.content) || v && !1 !== e.content && !v.smooth() && v.content()),
            y = rt(m, Oe),
            b = rt(m, Le),
            x = 1,
            D = (A.isTouch && Ye.visualViewport ? Ye.visualViewport.scale * Ye.visualViewport.width : Ye.outerWidth) / Ye.innerWidth,
            w = 0,
            C = Ne(t) ? function() {
                return t(i)
            } : function() {
                return t || 2.8
            },
            S = ue(m, e.type, !0, g),
            T = Re,
            E = Re;
        return _ && qe.set(_, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return j && "touchmove" === e.type && (u ? (requestAnimationFrame(n), t = bt(i.deltaY / 2), t = E(y.v - t), _ && t !== y.v + y.offset && (y.offset = t - y.v, t = bt((parseFloat(_ && _._gsap.y) || 0) - y.offset), _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + t + ", 0, 1)", _._gsap.y = t + "px", y.cacheID = k.cache, P()), !0) : (y.offset && s(), void(u = !0))) || 1.05 < x && "touchstart" !== e.type || i.isGesturing || e.touches && 1 < e.touches.length;
            var t
        }, e.onPress = function() {
            var e = x;
            x = bt((Ye.visualViewport && Ye.visualViewport.scale || 1) / D), c.pause(), e !== x && ae(m, 1.01 < x || !f && "x"), d = b(), p = y(), r(), l = ee
        }, e.onRelease = e.onGestureStart = function(e, t) {
            var n, i;
            y.offset && s(), t ? (k.cache++, t = C(), f && (i = (n = b()) + .05 * t * -e.velocityX / .227, t *= se(b, n, i, wt(m, Le)), c.vars.scrollX = T(i)), i = (n = y()) + .05 * t * -e.velocityY / .227, t *= se(y, n, i, wt(m, Oe)), c.vars.scrollY = E(i), c.invalidate().duration(t).play(.01), (j && c.vars.scrollY >= a || a - 1 <= n) && qe.to({}, {
                onUpdate: o,
                duration: t
            })) : h.restart(!0)
        }, e.onWheel = function() {
            c._ts && c.pause(), 1e3 < Ke() - w && (l = 0, w = Ke())
        }, e.onChange = function(e, t, n, i, o) {
            ee !== l && r(), t && f && b(T(i[2] === t ? d + (e.startX - e.x) : b() + t - i[1])), n && (y.offset && s(), e = (i = o[2] === n) ? p + e.startY - e.y : y() + n - o[1], o = E(e), i && e !== o && (p += o - e), y(o)), (n || t) && P()
        }, e.onEnable = function() {
            ae(m, !f && "x"), Ie(Ye, "resize", o), S.enable()
        }, e.onDisable = function() {
            ae(m, !0), He(Ye, "resize", o), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((i = new A(e)).iOS = j) && !y() && y(1), j && qe.ticker.add(Re), h = i._dc, c = qe.to(i, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: h.vars.onComplete
        }), i
    }
    a.version = "3.11.0", a.saveStyles = function(e) {
        return e ? Yt(e).forEach(function(e) {
            var t;
            e && e.style && (0 <= (t = n.indexOf(e)) && n.splice(t, 5), n.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), qe.core.getCache(e), Kt()))
        }) : n
    }, a.revert = function(e, t) {
        return T(!e, t)
    }, a.create = function(e, t) {
        return new a(e, t)
    }, a.refresh = function(e) {
        return e ? Rt() : (L || a.register()) && M(!0)
    }, a.update = P, a.clearScrollMemory = E, a.maxScroll = function(e, t) {
        return wt(e, t ? Le : Oe)
    }, a.getScrollFunc = function(e, t) {
        return rt(Ae(e), t ? Le : Oe)
    }, a.getById = function(e) {
        return pn[e]
    }, a.getAll = function() {
        return et.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, a.isScrolling = function() {
        return !!Je
    }, a.snapDirectional = Mt, a.addEventListener = function(e, t) {
        e = Q[e] || (Q[e] = []);
        ~e.indexOf(t) || e.push(t)
    }, a.removeEventListener = function(e, t) {
        e = Q[e], t = e && e.indexOf(t);
        0 <= t && e.splice(t, 1)
    }, a.batch = function(e, t) {
        var n, i = [],
            o = {},
            r = t.interval || .016,
            s = t.batchMax || 1e9;
        for (n in t) o[n] = "on" === n.substr(0, 2) && Ne(t[n]) && "onRefreshInit" !== n ? function(e) {
            var t = [],
                n = [],
                i = qe.delayedCall(r, function() {
                    e(t, n), t = [], n = []
                }).pause();
            return function(e) {
                t.length || i.restart(!0), t.push(e.trigger), n.push(e), s <= t.length && i.progress(1)
            }
        }(t[n]) : t[n];
        return Ne(s) && (s = s(), Ie(a, "refresh", function() {
            return s = t.batchMax()
        })), Yt(e).forEach(function(e) {
            var t = {};
            for (n in o) t[n] = o[n];
            t.trigger = e, i.push(a.create(t))
        }), i
    };
    var de, pe = {
            auto: 1,
            scroll: 1
        },
        he = /(input|label|select|textarea)/i,
        fe = function(e) {
            var t = he.test(e.target.tagName);
            (t || de) && (e._gsapAllow = !0, de = t)
        };
    a.sort = function(e) {
        return et.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, a.observe = function(e) {
        return new A(e)
    }, a.normalizeScroll = function(e) {
        if (void 0 === e) return t;
        if (!0 === e && t) return t.enable();
        if (!1 === e) return t && t.kill();
        e = e instanceof A ? e : ce(e);
        return t && t.target === e.target && t.kill(), xt(e.target) && (t = e), e
    }, a.core = {
        _getVelocityProp: st,
        _inputObserver: ue,
        _scrollers: k,
        _proxies: Pe,
        bridge: {
            ss: function() {
                Je || $("scrollStart"), Je = Ke()
            },
            ref: function() {
                return We
            }
        }
    }, y() && qe.registerPlugin(a), e.ScrollTrigger = a, e.default = a, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    var k = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function V(e) {
        return n.getComputedStyle(e)
    }

    function q(e, t) {
        var n;
        return o(e) ? e : "string" == (n = typeof e) && !t && e ? r.call(U.querySelectorAll(e), 0) : e && "object" == n && "length" in e ? r.call(e, 0) : e ? [e] : []
    }

    function Y(e) {
        return "absolute" === e.position || !0 === e.absolute
    }

    function A(e, t) {
        for (var n, i = t.length; - 1 < --i;)
            if (n = t[i], e.substr(0, n.length) === n) return n.length
    }

    function l(e, t) {
        var n = ~(e = void 0 === e ? "" : e).indexOf("++"),
            i = 1;
        return n && (e = e.split("++").join("")),
            function() {
                return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
            }
    }

    function X(e, t, n) {
        var i = e.nodeType;
        if (1 === i || 9 === i || 11 === i)
            for (e = e.firstChild; e; e = e.nextSibling) X(e, t, n);
        else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(t).join(n))
    }

    function j(e, t) {
        for (var n = t.length; - 1 < --n;) e.push(t[n])
    }

    function G(e, t, n) {
        for (var i; e && e !== t;) {
            if (i = e._next || e.nextSibling) return i.textContent.charAt(0) === n;
            e = e.parentNode || e._parent
        }
    }

    function W(e, t) {
        return parseFloat(t[e]) || 0
    }

    function u(e, t, n, i, o, r, s) {
        var a, l, u, c, d, p, h, f, g, m, v, _, y = V(e),
            b = W("paddingLeft", y),
            x = -999,
            D = W("borderBottomWidth", y) + W("borderTopWidth", y),
            B = W("borderLeftWidth", y) + W("borderRightWidth", y),
            N = W("paddingTop", y) + W("paddingBottom", y),
            z = W("paddingLeft", y) + W("paddingRight", y),
            I = W("fontSize", y) * (t.lineThreshold || .2),
            H = y.textAlign,
            w = [],
            C = [],
            S = [],
            T = t.wordDelimiter || " ",
            E = t.tag || (t.span ? "span" : "div"),
            k = t.type || t.split || "chars,words,lines",
            A = o && ~k.indexOf("lines") ? [] : null,
            F = ~k.indexOf("words"),
            M = ~k.indexOf("chars"),
            P = Y(t),
            L = t.linesClass,
            O = ~(L || "").indexOf("++"),
            R = [],
            k = "flex" === y.display,
            t = e.style.display;
        for (O && (L = L.split("++").join("")), k && (e.style.display = "block"), u = (l = e.getElementsByTagName("*")).length, d = [], a = 0; a < u; a++) d[a] = l[a];
        if (A || P)
            for (a = 0; a < u; a++)((p = (c = d[a]).parentNode === e) || P || M && !F) && (_ = c.offsetTop, A && p && Math.abs(_ - x) > I && ("BR" !== c.nodeName || 0 === a) && (A.push(h = []), x = _), P && (c._x = c.offsetLeft, c._y = _, c._w = c.offsetWidth, c._h = c.offsetHeight), A && ((c._isSplit && p || !M && p || F && p || !F && c.parentNode.parentNode === e && !c.parentNode._isSplit) && (h.push(c), c._x -= b, G(c, e, T) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === a) && A.push([])));
        for (a = 0; a < u; a++)
            if (p = (c = d[a]).parentNode === e, "BR" !== c.nodeName)
                if (P && (g = c.style, F || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), g.left = c._x + "px", g.top = c._y + "px", g.position = "absolute", g.display = "block", g.width = c._w + 1 + "px", g.height = c._h + "px"), !F && M)
                    if (c._isSplit)
                        for (c._next = l = c.nextSibling, c.parentNode.appendChild(c); l && 3 === l.nodeType && " " === l.textContent;) c._next = l.nextSibling, c.parentNode.appendChild(l), l = l.nextSibling;
                    else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && R.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), d.splice(a--, 1), u--) : p || (_ = !c.nextSibling && G(c.parentNode, e, T), c.parentNode._parent && c.parentNode._parent.appendChild(c), _ && c.parentNode.appendChild(U.createTextNode(" ")), "span" === E && (c.style.display = "inline"), w.push(c));
        else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? C.push(c) : M && !c._isSplit && ("span" === E && (c.style.display = "inline"), w.push(c));
        else A || P ? (c.parentNode && c.parentNode.removeChild(c), d.splice(a--, 1), u--) : F || e.appendChild(c);
        for (a = R.length; - 1 < --a;) R[a].parentNode.removeChild(R[a]);
        if (A) {
            for (P && (m = U.createElement(E), e.appendChild(m), v = m.offsetWidth + "px", _ = m.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(m)), g = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
            for (f = " " === T && (!P || !F && !M), a = 0; a < A.length; a++) {
                for (h = A[a], (m = U.createElement(E)).style.cssText = "display:block;text-align:" + H + ";position:" + (P ? "absolute;" : "relative;"), L && (m.className = L + (O ? a + 1 : "")), S.push(m), u = h.length, l = 0; l < u; l++) "BR" !== h[l].nodeName && (c = h[l], m.appendChild(c), f && c._wordEnd && m.appendChild(U.createTextNode(" ")), P && (0 === l && (m.style.top = c._y + "px", m.style.left = b + _ + "px"), c.style.top = "0px", _ && (c.style.left = c._x - _ + "px")));
                0 === u ? m.innerHTML = "&nbsp;" : F || M || (function e(t) {
                    for (var n, i = q(t.childNodes), o = i.length, r = 0; r < o; r++)(n = i[r])._isSplit ? e(n) : r && n.previousSibling && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += (3 === n.nodeType ? n : n.firstChild).nodeValue, t.removeChild(n)) : 3 !== n.nodeType && (t.insertBefore(n.firstChild, n), t.removeChild(n))
                }(m), X(m, String.fromCharCode(160), " ")), P && (m.style.width = v, m.style.height = c._h + "px"), e.appendChild(m)
            }
            e.style.cssText = g
        }
        P && (s > e.clientHeight && (e.style.height = s - N + "px", e.clientHeight < s && (e.style.height = s + D + "px")), r > e.clientWidth && (e.style.width = r - z + "px", e.clientWidth < r && (e.style.width = r + B + "px"))), k && (t ? e.style.display = t : e.style.removeProperty("display")), j(n, w), F && j(i, C), j(o, S)
    }

    function F(e, t, n, i) {
        var o, r, s = q(e.childNodes),
            a = s.length,
            l = Y(t);
        if (3 !== e.nodeType || 1 < a) {
            for (t.absolute = !1, o = 0; o < a; o++)(r = s[o])._next = r._isFirst = r._parent = r._wordEnd = null, 3 === r.nodeType && !/\S+/.test(r.nodeValue) || (l && 3 !== r.nodeType && "inline" === V(r).display && (r.style.display = "inline-block", r.style.position = "relative"), r._isSplit = !0, F(r, t, n, i));
            return t.absolute = l, e._isSplit = !0
        }
        var u, c, d, p, h, f, g, m = t,
            v = n,
            _ = i,
            y = m.tag || (m.span ? "span" : "div"),
            b = ~(m.type || m.split || "chars,words,lines").indexOf("chars"),
            x = Y(m),
            D = m.wordDelimiter || " ",
            w = " " !== D ? "" : x ? "&#173; " : " ",
            C = "</" + y + ">",
            S = 1,
            T = m.specialChars ? "function" == typeof m.specialChars ? m.specialChars : A : null,
            x = U.createElement("div"),
            E = e.parentNode;
        for (E.insertBefore(x, e), x.textContent = e.nodeValue, E.removeChild(e), x = -1 !== (u = function e(t) {
                var n = t.nodeType,
                    i = "";
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
                } else if (3 === n || 4 === n) return t.nodeValue;
                return i
            }(e = x)).indexOf("<"), !1 !== m.reduceWhiteSpace && (u = u.replace(P, " ").replace(M, "")), h = (u = x ? u.split("<").join("{{LT}}") : u).length, c = (" " === u.charAt(0) ? w : "") + v(), d = 0; d < h; d++)
            if (f = u.charAt(d), T && (g = T(u.substr(d), m.specialChars))) f = u.substr(d, g || 1), c += b && " " !== f ? _() + f + "</" + y + ">" : f, d += g - 1;
            else if (f === D && u.charAt(d - 1) !== D && d) {
            for (c += S ? C : "", S = 0; u.charAt(d + 1) === D;) c += w, d++;
            d === h - 1 ? c += w : ")" !== u.charAt(d + 1) && (c += w + v(), S = 1)
        } else "{" === f && "{{LT}}" === u.substr(d, 6) ? (c += b ? _() + "{{LT}}</" + y + ">" : "{{LT}}", d += 5) : 55296 <= f.charCodeAt(0) && f.charCodeAt(0) <= 56319 || 65024 <= u.charCodeAt(d + 1) && u.charCodeAt(d + 1) <= 65039 ? (p = ((u.substr(d, 12).split(k) || [])[1] || "").length || 2, c += b && " " !== f ? _() + u.substr(d, p) + "</" + y + ">" : u.substr(d, p), d += p - 1) : c += b && " " !== f ? _() + f + "</" + y + ">" : f;
        e.outerHTML = c + (S ? C : ""), x && X(E, "{{LT}}", "<")
    }
    var U, n, i, M = /(?:\r|\n|\t\t)/g,
        P = /(?:\s\s+)/g,
        o = Array.isArray,
        r = [].slice,
        t = ((t = s.prototype).split = function(e) {
            this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var t, n, i, o = this.elements.length, r = e.tag || (e.span ? "span" : "div"), s = l(e.wordsClass, r), a = l(e.charsClass, r); - 1 < --o;) i = this.elements[o], this._originals[o] = i.innerHTML, t = i.clientHeight, n = i.clientWidth, F(i, e, s, a), u(i, e, this.chars, this.words, this.lines, n, t);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, t.revert = function() {
            var n = this._originals;
            if (n) return this.elements.forEach(function(e, t) {
                return e.innerHTML = n[t]
            }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
            throw "revert() call wasn't scoped properly."
        }, s.create = function(e, t) {
            return new s(e, t)
        }, s);

    function s(e, t) {
        i || (U = document, n = window, i = 1), this.elements = q(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
    }
    t.version = "3.11.0", e.SplitText = t, e.default = t, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function i(e) {
        return "string" == typeof e
    }
    var A = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        W = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        U = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        c = /(^[#\.][a-z]|[a-y][a-z])/i,
        K = Math.PI / 180,
        L = Math.sin,
        O = Math.cos,
        R = Math.abs,
        B = Math.sqrt,
        a = function(e) {
            return "number" == typeof e
        },
        l = function(e) {
            return Math.round(1e5 * e) / 1e5 || 0
        };

    function b(e) {
        var t, n = 0;
        for (e.reverse(); n < e.length; n += 2) t = e[n], e[n] = e[n + 1], e[n + 1] = t;
        e.reversed = !e.reversed
    }
    var J = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function F(e, t) {
        var n, i, o, r, s, a, l, u, c, d, p, h, f, g, m, v, _, y = e.tagName.toLowerCase(),
            b = .552284749831;
        return "path" !== y && e.getBBox ? (s = function(e, t) {
            var n, i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                o = [].slice.call(e.attributes),
                r = o.length;
            for (t = "," + t + ","; - 1 < --r;) n = o[r].nodeName.toLowerCase(), t.indexOf("," + n + ",") < 0 && i.setAttributeNS(null, n, o[r].nodeValue);
            return i
        }(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), _ = function(e, t) {
            for (var n = t ? t.split(",") : [], i = {}, o = n.length; - 1 < --o;) i[n[o]] = +e.getAttribute(n[o]) || 0;
            return i
        }(e, J[y]), "rect" === y ? (o = _.rx, r = _.ry || o, n = _.x, i = _.y, a = _.width - 2 * o, l = _.height - 2 * r, m = o || r ? "M" + (h = (d = (c = n + o) + a) + o) + "," + (f = i + r) + " V" + (g = f + l) + " C" + [h, m = g + r * b, p = d + o * b, v = g + r, d, v, d - (d - c) / 3, v, c + (d - c) / 3, v, c, v, u = n + o * (1 - b), v, n, m, n, g, n, g - (g - f) / 3, n, f + (g - f) / 3, n, f, n, v = i + r * (1 - b), u, i, c, i, c + (d - c) / 3, i, d - (d - c) / 3, i, d, i, p, i, h, v, h, f].join(",") + "z" : "M" + (n + a) + "," + i + " v" + l + " h" + -a + " v" + -l + " h" + a + "z") : "circle" === y || "ellipse" === y ? (g = "circle" === y ? (o = r = _.r) * b : (o = _.rx, (r = _.ry) * b), m = "M" + ((n = _.cx) + o) + "," + (i = _.cy) + " C" + [n + o, i + g, n + (u = o * b), i + r, n, i + r, n - u, i + r, n - o, i + g, n - o, i, n - o, i - g, n - u, i - r, n, i - r, n + u, i - r, n + o, i - g, n + o, i].join(",") + "z") : "line" === y ? m = "M" + _.x1 + "," + _.y1 + " L" + _.x2 + "," + _.y2 : "polyline" !== y && "polygon" !== y || (m = "M" + (n = (c = (e.getAttribute("points") + "").match(W) || []).shift()) + "," + (i = c.shift()) + " L" + c.join(","), "polygon" === y && (m += "," + n + "," + i + "z")), s.setAttribute("d", P(s._gsRawPath = M(m))), t && e.parentNode && (e.parentNode.insertBefore(s, e), e.parentNode.removeChild(e)), s) : e
    }

    function M(e) {
        function t(e, t, n, i) {
            c = (n - e) / 3, d = (i - t) / 3, a.push(e + c, t + d, n - c, i - d, n, i)
        }
        var n, i, o, r, s, a, l, u, c, d, p, h, f, g = (e + "").replace(U, function(e) {
                e = +e;
                return e < 1e-4 && -1e-4 < e ? 0 : e
            }).match(A) || [],
            m = [],
            v = 0,
            _ = 0,
            y = g.length,
            b = 0,
            x = "ERROR: malformed path: " + e;
        if (!e || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), m;
        for (n = 0; n < y; n++)
            if (h = r, isNaN(g[n]) ? s = (r = g[n].toUpperCase()) !== g[n] : n--, f = +g[n + 1], o = +g[n + 2], s && (f += v, o += _), n || (l = f, u = o), "M" === r) a && (a.length < 8 ? --m.length : b += a.length), v = l = f, _ = u = o, a = [f, o], m.push(a), n += 2, r = "L";
            else if ("C" === r) s || (v = _ = 0), (a = a || [0, 0]).push(f, o, v + +g[n + 3], _ + +g[n + 4], v += +g[n + 5], _ += +g[n + 6]), n += 6;
        else if ("S" === r) c = v, d = _, "C" !== h && "S" !== h || (c += v - a[a.length - 4], d += _ - a[a.length - 3]), s || (v = _ = 0), a.push(c, d, f, o, v += +g[n + 3], _ += +g[n + 4]), n += 4;
        else if ("Q" === r) c = v + 2 / 3 * (f - v), d = _ + 2 / 3 * (o - _), s || (v = _ = 0), v += +g[n + 3], _ += +g[n + 4], a.push(c, d, v + 2 / 3 * (f - v), _ + 2 / 3 * (o - _), v, _), n += 4;
        else if ("T" === r) c = v - a[a.length - 4], d = _ - a[a.length - 3], a.push(v + c, _ + d, f + 2 / 3 * (v + 1.5 * c - f), o + 2 / 3 * (_ + 1.5 * d - o), v = f, _ = o), n += 2;
        else if ("H" === r) t(v, _, v = f, _), n += 1;
        else if ("V" === r) t(v, _, v, _ = f + (s ? _ - v : 0)), n += 1;
        else if ("L" === r || "Z" === r) "Z" === r && (f = l, o = u, a.closed = !0), ("L" === r || .5 < R(v - f) || .5 < R(_ - o)) && (t(v, _, f, o), "L" === r && (n += 2)), v = f, _ = o;
        else if ("A" === r) {
            if (h = g[n + 4], f = g[n + 5], c = g[n + 6], d = g[n + 7], i = 7, 1 < h.length && (h.length < 3 ? (d = c, c = f, i--) : (d = f, c = h.substr(2), i -= 2), f = h.charAt(1), h = h.charAt(0)), p = function(e, t, n, i, o, r, s, a, l) {
                    if (e !== a || t !== l) {
                        n = R(n), i = R(i);
                        var u = o % 360 * K,
                            c = O(u),
                            u = L(u),
                            d = Math.PI,
                            p = 2 * d,
                            h = (e - a) / 2,
                            f = (t - l) / 2,
                            g = c * h + u * f,
                            m = -u * h + c * f,
                            h = g * g,
                            f = m * m,
                            v = h / (n * n) + f / (i * i),
                            v = (1 < v && (n = B(v) * n, i = B(v) * i), n * n),
                            _ = i * i,
                            v = (v * _ - v * f - _ * h) / (v * f + _ * h),
                            f = (r === s ? -1 : 1) * B(v = v < 0 ? 0 : v),
                            _ = n * m / i * f,
                            h = -i * g / n * f,
                            y = c * _ - u * h + (e + a) / 2,
                            b = u * _ + c * h + (t + l) / 2,
                            x = (g - _) / n,
                            D = (m - h) / i,
                            r = (-g - _) / n,
                            v = (-m - h) / i,
                            f = x * x + D * D,
                            w = (D < 0 ? -1 : 1) * Math.acos(x / B(f)),
                            e = (x * v - D * r < 0 ? -1 : 1) * Math.acos((x * r + D * v) / B(f * (r * r + v * v)));
                        isNaN(e) && (e = d), !s && 0 < e ? e -= p : s && e < 0 && (e += p), w %= p, e %= p;
                        for (var C = Math.ceil(R(e) / (p / 4)), S = [], T = e / C, E = 4 / 3 * L(T / 2) / (1 + O(T / 2)), k = c * n, A = u * n, F = u * -i, M = c * i, P = 0; P < C; P++) g = O(o = w + P * T), m = L(o), x = O(o += T), D = L(o), S.push(g - E * m, m + E * g, x + E * D, D - E * x, x, D);
                        for (P = 0; P < S.length; P += 2) g = S[P], m = S[P + 1], S[P] = g * k + m * F + y, S[P + 1] = g * A + m * M + b;
                        return S[P - 2] = a, S[P - 1] = l, S
                    }
                }(v, _, +g[n + 1], +g[n + 2], +g[n + 3], +h, +f, (s ? v : 0) + +c, (s ? _ : 0) + +d), n += i, p)
                for (i = 0; i < p.length; i++) a.push(p[i]);
            v = a[a.length - 2], _ = a[a.length - 1]
        } else console.log(x);
        return (n = a.length) < 6 ? (m.pop(), n = 0) : a[0] === a[n - 2] && a[1] === a[n - 1] && (a.closed = !0), m.totalPoints = b + n, m
    }

    function P(e) {
        for (var t, n, i, o = "", r = (e = a(e[0]) ? [e] : e).length, s = 0; s < r; s++) {
            for (i = e[s], o += "M" + l(i[0]) + "," + l(i[1]) + " C", t = i.length, n = 2; n < t; n++) o += l(i[n++]) + "," + l(i[n++]) + " " + l(i[n++]) + "," + l(i[n++]) + " " + l(i[n++]) + "," + l(i[n]) + " ";
            i.closed && (o += "z")
        }
        return o
    }

    function t() {
        return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
    }

    function N(e) {
        return "function" == typeof e
    }

    function z(e) {
        console && console.warn(e)
    }

    function x(e) {
        for (var t = e.length, n = 0, i = 0, o = 0; o < t; o++) n += e[o++], i += e[o];
        return [n / (t / 2), i / (t / 2)]
    }

    function D(e) {
        for (var t, n = e.length, i = e[0], o = i, r = e[1], s = r, a = 6; a < n; a += 6) i < (t = e[a]) ? i = t : t < o && (o = t), r < (t = e[a + 1]) ? r = t : t < s && (s = t);
        return e.centerX = (i + o) / 2, e.centerY = (r + s) / 2, e.size = (i - o) * (r - s)
    }

    function I(e, t) {
        for (var n, i, o, r, s, a, l, u, c, d, p, h, f, g, m, v = e.length, _ = e[0][0], y = _, b = e[0][1], x = b, D = 1 / (t = void 0 === t ? 3 : t); - 1 < --v;)
            for (n = (r = e[v]).length, o = 6; o < n; o += 6)
                for (u = r[o], c = r[o + 1], d = r[o + 2] - u, f = r[o + 3] - c, p = r[o + 4] - u, g = r[o + 5] - c, h = r[o + 6] - u, m = r[o + 7] - c, s = t; - 1 < --s;) _ < (i = ((a = D * s) * a * h + 3 * (l = 1 - a) * (a * p + l * d)) * a + u) ? _ = i : i < y && (y = i), b < (i = (a * a * m + 3 * l * (a * g + l * f)) * a + c) ? b = i : i < x && (x = i);
        return e.centerX = (_ + y) / 2, e.centerY = (b + x) / 2, e.left = y, e.width = _ - y, e.top = x, e.height = b - x, e.size = (_ - y) * (b - x)
    }

    function Q(e, t) {
        return t.length - e.length
    }

    function w(e, t) {
        var n = e.size || D(e),
            i = t.size || D(t);
        return Math.abs(i - n) < (n + i) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : i - n
    }

    function C(e, t) {
        var n, i, o = e.slice(0),
            r = e.length,
            s = r - 2;
        for (t |= 0, n = 0; n < r; n++) i = (n + t) % s, e[n++] = o[i], e[n] = o[1 + i]
    }

    function S(e, t, n, i, o) {
        var r, s, a, l = e.length,
            u = 0,
            c = l - 2;
        for (n *= 6, r = 0; r < l; r += 6) a = e[s = (r + n) % c] - (t[r] - i), s = e[1 + s] - (t[r + 1] - o), u += k(s * s + a * a);
        return u
    }

    function T(e, t) {
        for (var n, i, o, r, s, a, l, u, c, d, p, h, f, g = 0, m = e.length, v = t / ((m - 2) / 6), _ = 2; _ < m; _ += 6)
            for (g += v; .999999 < g;) n = e[_ - 2], i = e[_ - 1], o = e[_], r = e[_ + 1], s = e[_ + 2], a = e[_ + 3], l = e[_ + 4], u = e[_ + 5], c = n + (o - n) * (f = 1 / ((Math.floor(g) || 1) + 1)), c += ((p = o + (s - o) * f) - c) * f, d = i + (r - i) * f, d += ((h = r + (a - r) * f) - d) * f, e.splice(_, 4, n + (o - n) * f, i + (r - i) * f, c, d, c + ((p += (s + (l - s) * f - p) * f) - c) * f, d + ((h += (a + (u - a) * f - h) * f) - d) * f, p, h, s + (l - s) * f, a + (u - a) * f), _ += 6, m += 6, g--
    }

    function H(e, t, n, i, o) {
        var r, s, a, l, u, c, d = t.length - e.length,
            p = 0 < d ? t : e,
            h = 0 < d ? e : t,
            f = 0,
            g = "complexity" === i ? Q : w,
            m = "position" === i ? 0 : "number" == typeof i ? i : .8,
            v = h.length,
            _ = "object" == typeof n && n.push ? n.slice(0) : [n],
            y = "reverse" === _[0] || _[0] < 0,
            i = "log" === n;
        if (h[0]) {
            if (1 < p.length && (e.sort(g), t.sort(g), p.size || I(p), h.size || I(h), u = p.centerX - h.centerX, c = p.centerY - h.centerY, g === w))
                for (v = 0; v < h.length; v++) p.splice(v, 0, function(e, t, n, i, o, r) {
                    for (var s, a, l, u = t.length, c = 0, d = Math.min(e.size || D(e), t[n].size || D(t[n])) * i, p = 1e20, h = e.centerX + o, f = e.centerY + r, g = n; g < u && !((t[g].size || D(t[g])) < d); g++) s = t[g].centerX - h, a = t[g].centerY - f, (l = k(s * s + a * a)) < p && (c = g, p = l);
                    return l = t[c], t.splice(c, 1), l
                }(h[v], p, v, m, u, c));
            if (d)
                for (d < 0 && (d = -d), p[0].length > h[0].length && T(h[0], (p[0].length - h[0].length) / 6 | 0), v = h.length; f < d;) p[v].size || D(p[v]), a = (l = function(e, t, n) {
                    for (var i, o, r, s, a, l = e.length, u = 1e20, c = 0, d = 0; - 1 < --l;)
                        for (a = (i = e[l]).length, s = 0; s < a; s += 6) r = i[s] - t, o = i[s + 1] - n, (r = k(r * r + o * o)) < u && (u = r, c = i[s], d = i[s + 1]);
                    return [c, d]
                }(h, p[v].centerX, p[v].centerY))[0], l = l[1], h[v++] = [a, l, a, l, a, l, a, l], h.totalPoints += 8, f++;
            for (v = 0; v < e.length; v++) r = t[v], s = e[v], (d = r.length - s.length) < 0 ? T(r, -d / 6 | 0) : 0 < d && T(s, d / 6 | 0), y && !1 !== o && !s.reversed && b(s), (n = _[v] || 0 === _[v] ? _[v] : "auto") && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === n || "log" === n ? (_[v] = n = function(e, t, n) {
                for (var i, o, r = e.length, s = x(e), a = x(t), l = a[0] - s[0], u = a[1] - s[1], c = S(e, t, 0, l, u), d = 0, p = 6; p < r; p += 6)(o = S(e, t, p / 6, l, u)) < c && (c = o, d = p);
                if (n)
                    for (b(i = e.slice(0)), p = 6; p < r; p += 6)(o = S(i, t, p / 6, l, u)) < c && (c = o, d = -p);
                return d / 6
            }(s, r, !v || !1 === o), n < 0 && (y = !0, b(s), n = -n), C(s, 6 * n)) : "reverse" !== n && (v && n < 0 && b(s), C(s, 6 * (n < 0 ? -n : n))) : !y && ("auto" === n && Math.abs(r[0] - s[0]) + Math.abs(r[1] - s[1]) + Math.abs(r[r.length - 2] - s[s.length - 2]) + Math.abs(r[r.length - 1] - s[s.length - 1]) > Math.abs(r[0] - s[s.length - 2]) + Math.abs(r[1] - s[s.length - 1]) + Math.abs(r[r.length - 2] - s[0]) + Math.abs(r[r.length - 1] - s[1]) || n % 2) ? (b(s), _[v] = -1, y = !0) : "auto" === n ? _[v] = 0 : "reverse" === n && (_[v] = -1), s.closed !== r.closed && (s.closed = r.closed = !1));
            return i && z("shapeIndex:[" + _.join(",") + "]"), e.shapeIndex = _
        }
    }

    function o(e, t, n, i, o) {
        var r = M(e[0]),
            s = M(e[1]);
        H(r, s, t || 0 === t ? t : "auto", n, o) && (e[0] = P(r), e[1] = P(s), "log" !== i && !0 !== i || z('precompile:["' + e[0] + '","' + e[1] + '"]'))
    }

    function r(e, t) {
        for (var n, i, o, r, s, a = 0, l = parseFloat(e[0]), u = parseFloat(e[1]), c = l + "," + u + " ", d = .5 * t / (.5 * (n = e.length) - 1), p = 0; p < n - 2; p += 2) {
            if (a += d, r = parseFloat(e[p + 2]), s = parseFloat(e[p + 3]), .999999 < a)
                for (o = 1 / (Math.floor(a) + 1), i = 1; .999999 < a;) c += (l + (r - l) * o * i).toFixed(2) + "," + (u + (s - u) * o * i).toFixed(2) + " ", a--, i++;
            c += r + "," + s + " ", l = r, u = s
        }
        return c
    }

    function V(e) {
        var t = e[0].match(j) || [],
            n = e[1].match(j) || [],
            i = n.length - t.length;
        0 < i ? e[0] = r(t, i) : e[1] = r(n, -i)
    }

    function q(e, t) {
        for (var n, i, o, r, s, a, l, u, c, d, p, h, f = e.length, g = .2 * (t || 1); - 1 < --f;) {
            for (p = (i = e[f]).isSmooth = i.isSmooth || [0, 0, 0, 0], h = i.smoothData = i.smoothData || [0, 0, 0, 0], p.length = 4, u = i.length - 2, l = 6; l < u; l += 6) o = i[l] - i[l - 2], r = i[l + 1] - i[l - 1], s = i[l + 2] - i[l], a = i[l + 3] - i[l + 1], c = E(r, o), d = E(a, s), (n = Math.abs(c - d) < g) && (h[l - 2] = c, h[l + 2] = d, h[l - 1] = k(o * o + r * r), h[l + 3] = k(s * s + a * a)), p.push(n, n, 0, 0, n, n);
            i[u] === i[0] && i[1 + u] === i[1] && (o = i[0] - i[u - 2], r = i[1] - i[u - 1], s = i[2] - i[0], a = i[3] - i[1], c = E(r, o), d = E(a, s), Math.abs(c - d) < g && (h[u - 2] = c, h[2] = d, h[u - 1] = k(o * o + r * r), h[3] = k(s * s + a * a), p[u - 2] = p[u - 1] = !0))
        }
        return e
    }

    function Z(e) {
        var t = e.trim().split(" ");
        return {
            x: (~e.indexOf("left") ? 0 : ~e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0])) / 100,
            y: (~e.indexOf("top") ? 0 : ~e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1])) / 100
        }
    }

    function d(e, t, n, i) {
        var o = this._origin,
            r = this._eOrigin,
            s = e[n] - o.x,
            o = e[n + 1] - o.y,
            a = k(s * s + o * o),
            l = E(o, s),
            s = t[n] - r.x,
            o = t[n + 1] - r.y,
            r = (r = t = E(o, s) - l) !== r % u ? r + (r < 0 ? p : -p) : r;
        return !i && X && Math.abs(r + X.ca) < h && (i = X), this._anchorPT = X = {
            _next: this._anchorPT,
            t: e,
            sa: l,
            ca: i && r * i.ca < 0 && Math.abs(r) > f ? t : r,
            sl: a,
            cl: k(s * s + o * o) - a,
            i: n
        }
    }

    function $(e) {
        n = t(), s = s || n && n.plugins.morphSVG, n && s ? (Y = n.utils.toArray, s.prototype._tweenRotation = d, ee = 1) : e && z("Please gsap.registerPlugin(MorphSVGPlugin)")
    }
    var n, Y, X, ee, s, E = Math.atan2,
        te = Math.cos,
        ne = Math.sin,
        k = Math.sqrt,
        u = Math.PI,
        p = 2 * u,
        h = .3 * u,
        f = .7 * u,
        j = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        ie = /(^[#\.][a-z]|[a-y][a-z])/i,
        oe = /[achlmqstvz]/i,
        re = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
        G = {
            version: "3.11.0",
            name: "morphSVG",
            rawVars: 1,
            register: function(e, t) {
                n = e, s = t, $()
            },
            init: function(e, t, n, i, o) {
                if (ee || $(1), !t) return z("invalid shape"), !1;
                var r, s, a, l, u, c, d, p, h, f, g, m, v, _, y, b;
                if ("string" == typeof(t = N(t) ? t.call(n, i, e, o) : t) || t.getBBox || t[0]) t = {
                    shape: t
                };
                else if ("object" == typeof t) {
                    for (s in r = {}, t) r[s] = N(t[s]) && "render" !== s ? t[s].call(n, i, e, o) : t[s];
                    t = r
                }
                var x, D, w, C, S, T, E = e.nodeType ? window.getComputedStyle(e) : {},
                    k = E.fill + "",
                    k = !("none" === k || "0" === (k.match(j) || [])[3] || "evenodd" === E.fillRule),
                    E = (t.origin || "50 50").split(","),
                    A = "POLYLINE" === (r = (e.nodeName + "").toUpperCase()) || "POLYGON" === r;
                if ("PATH" !== r && !A && !t.prop) return z("Cannot morph a <" + r + "> element. " + re), !1;
                if (!t.prop && !N(e.setAttribute)) return !1;
                if (x = t.shape || t.d || t.points || "", D = "d" === (s = "PATH" === r ? "d" : "points"), w = e, ("string" != typeof x || ie.test(x) || (x.match(j) || []).length < 3) && ((C = Y(x)[0]) ? (S = (C.nodeName + "").toUpperCase(), D && "PATH" !== S && (C = F(C, !1), S = "PATH"), x = C.getAttribute("PATH" === S ? "d" : "points") || "", C === w && (x = C.getAttributeNS(null, "data-original") || x)) : (z("WARNING: invalid morph to: " + x), x = !1)), D = x, A && oe.test(D)) return z("A <" + r + "> cannot accept path data. " + re), !1;
                if (S = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto", w = t.map || G.defaultMap, this._prop = t.prop, this._render = t.render || G.defaultRender, this._apply = "updateTarget" in t ? t.updateTarget : G.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision), this._tween = n, D) {
                    if (this._target = e, C = "object" == typeof t.precompile, c = this._prop ? e[this._prop] : e.getAttribute(s), this._prop || e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", c), "d" === s || this._prop) {
                        if (c = M(C ? t.precompile[0] : c), d = M(C ? t.precompile[1] : D), !C && !H(c, d, S, w, k)) return !1;
                        for ("log" !== t.precompile && !0 !== t.precompile || z('precompile:["' + P(c) + '","' + P(d) + '"]'), (y = "linear" !== (t.type || G.defaultType)) && (c = q(c, t.smoothTolerance), d = q(d, t.smoothTolerance), c.size || I(c), d.size || I(d), x = Z(E[0]), this._origin = c.origin = {
                                x: c.left + x.x * c.width,
                                y: c.top + x.y * c.height
                            }, E[1] && (x = Z(E[1])), this._eOrigin = {
                                x: d.left + x.x * d.width,
                                y: d.top + x.y * d.height
                            }), h = (this._rawPath = e._gsRawPath = c).length; - 1 < --h;)
                            for (g = c[h], m = d[h], l = g.isSmooth || [], u = m.isSmooth || [], f = g.length, p = X = 0; p < f; p += 2) m[p] === g[p] && m[p + 1] === g[p + 1] || (y ? l[p] && u[p] ? (v = g.smoothData, _ = m.smoothData, this._controlPT = {
                                _next: this._controlPT,
                                i: p,
                                j: h,
                                l1s: v[p + 1],
                                l1c: _[p + 1] - v[p + 1],
                                l2s: v[b = p + (p === f - 4 ? 7 - f : 5)],
                                l2c: _[b] - v[b]
                            }, a = this._tweenRotation(g, m, p + 2), this._tweenRotation(g, m, p, a), this._tweenRotation(g, m, b - 1, a), p += 4) : this._tweenRotation(g, m, p) : (a = this.add(g, p, g[p], m[p], 0, 0, 0, 0, 0, 1), a = this.add(g, p + 1, g[p + 1], m[p + 1], 0, 0, 0, 0, 0, 1) || a))
                    } else a = this.add(e, "setAttribute", e.getAttribute(s) + "", D + "", i, o, 0, (T = S, isNaN(T) ? V : function(e) {
                        V(e), e[1] = function(e, t) {
                            if (!t) return e;
                            for (var n, i = e.match(j) || [], o = i.length, r = "", s = "reverse" === t ? (n = o - 1, -2) : (n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * o) % o, 2), a = 0; a < o; a += 2) r += i[n - 1] + "," + i[n] + " ", n = (n + s) % o;
                            return r
                        }(e[1], parseInt(T, 10))
                    }), s);
                    y && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), a = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)), a && (this._props.push("morphSVG"), a.end = D, a.endProp = s)
                }
                return 1
            },
            render: function(e, t) {
                for (var n, i, o, r, s, a, l, u, c, d, p, h, f = t._rawPath, g = t._controlPT, m = t._anchorPT, v = t._rnd, _ = t._target, y = t._pt; y;) y.r(e, y.d), y = y._next;
                if (1 === e && t._apply)
                    for (y = t._pt; y;) y.end && (t._prop ? _[t._prop] = y.end : _.setAttribute(y.endProp, y.end)), y = y._next;
                else if (f) {
                    for (; m;) s = m.sa + e * m.ca, r = m.sl + e * m.cl, m.t[m.i] = t._origin.x + te(s) * r, m.t[m.i + 1] = t._origin.y + ne(s) * r, m = m._next;
                    for (i = e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1; g;) h = (a = g.i) + (a === (o = f[g.j]).length - 4 ? 7 - o.length : 5), s = E(o[h] - o[a + 1], o[h - 1] - o[a]), d = ne(s), p = te(s), u = o[a + 2], c = o[a + 3], r = g.l1s + i * g.l1c, o[a] = u - p * r, o[a + 1] = c - d * r, r = g.l2s + i * g.l2c, o[h - 1] = u + p * r, o[h] = c + d * r, g = g._next;
                    if (_._gsRawPath = f, t._apply) {
                        for (n = "", l = 0; l < f.length; l++)
                            for (r = (o = f[l]).length, n += "M" + (o[0] * v | 0) / v + " " + (o[1] * v | 0) / v + " C", a = 2; a < r; a++) n += (o[a] * v | 0) / v + " ";
                        t._prop ? _[t._prop] = n : _.setAttribute("d", n)
                    }
                }
                t._render && f && t._render.call(t._tween, f, _)
            },
            kill: function() {
                this._pt = this._rawPath = 0
            },
            getRawPath: function(e) {
                var t, n = (e = i(e) && c.test(e) && document.querySelector(e) || e).getAttribute ? e : 0;
                return n && (e = e.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (t = n._gsPath[e]) && !t._dirty ? t : n._gsPath[e] = M(e)) : e ? i(e) ? M(e) : a(e[0]) ? [e] : e : console.warn("Expecting a <path> element or an SVG path data string")
            },
            stringToRawPath: M,
            rawPathToString: P,
            normalizeStrings: function(e, t, n) {
                e = [e, t];
                return o(e, n.shapeIndex, n.map), e
            },
            pathFilter: o,
            pointsFilter: V,
            getTotalSize: I,
            equalizeSegmentQuantity: H,
            convertToPath: function(e, t) {
                return Y(e).map(function(e) {
                    return F(e, !1 !== t)
                })
            },
            defaultType: "linear",
            defaultUpdateTarget: !0,
            defaultMap: "size"
        };
    t() && n.registerPlugin(G), e.MorphSVGPlugin = G, e.default = G, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function u(e) {
        var t, n = e.ownerDocument || e;
        !(_ in e.style) && "msTransform" in e.style && (k = (_ = "msTransform") + "Origin");
        for (; n.parentNode && (n = n.parentNode););
        return p = window, v = new y, n && (T = (d = n).documentElement, h = n.body, (i = d.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none", e = n.createElement("div"), t = n.createElement("div"), h.appendChild(e), e.appendChild(t), e.style.position = "static", e.style[_] = "translate3d(0,0,1px)", E = t.offsetParent !== e, h.removeChild(e)), n
    }

    function g() {
        return p.pageYOffset || d.scrollTop || T.scrollTop || h.scrollTop || 0
    }

    function D() {
        return p.pageXOffset || d.scrollLeft || T.scrollLeft || h.scrollLeft || 0
    }

    function w(e) {
        return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
    }

    function c(e, t) {
        var n, i, o, r, s, a;
        if (e.parentNode && (d || u(e))) return a = (n = w(e)) ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", i = n ? t ? "rect" : "g" : "div", o = 2 !== t ? 0 : 100, r = 3 === t ? 100 : 0, s = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", a = d.createElementNS ? d.createElementNS(a.replace(/^https/, "http"), i) : d.createElement(i), t && (n ? (m = m || c(e), a.setAttribute("width", .01), a.setAttribute("height", .01), a.setAttribute("transform", "translate(" + o + "," + r + ")"), m.appendChild(a)) : (f || ((f = c(e)).style.cssText = s), a.style.cssText = s + "width:0.1px;height:0.1px;top:" + r + "px;left:" + o + "px", f.appendChild(a))), a;
        throw "Need document and parent."
    }

    function C(e) {
        var t, n = e.getCTM();
        return n || (t = e.style[_], e.style[_] = "none", e.appendChild(i), n = i.getCTM(), e.removeChild(i), t ? e.style[_] = t : e.style.removeProperty(_.replace(/([A-Z])/g, "-$1").toLowerCase())), n || v.clone()
    }

    function S(e, t, n, i, o, r, s) {
        return e.a = t, e.b = n, e.c = i, e.d = o, e.e = r, e.f = s, e
    }
    var d, p, T, h, f, m, v, i, E, _ = "transform",
        k = _ + "Origin",
        P = [],
        L = [],
        y = ((t = O.prototype).inverse = function() {
            var e = this.a,
                t = this.b,
                n = this.c,
                i = this.d,
                o = this.e,
                r = this.f,
                s = e * i - t * n || 1e-10;
            return S(this, i / s, -t / s, -n / s, e / s, (n * r - i * o) / s, -(e * r - t * o) / s)
        }, t.multiply = function(e) {
            var t = this.a,
                n = this.b,
                i = this.c,
                o = this.d,
                r = this.e,
                s = this.f,
                a = e.a,
                l = e.c,
                u = e.b,
                c = e.d,
                d = e.e,
                e = e.f;
            return S(this, a * t + u * i, a * n + u * o, l * t + c * i, l * n + c * o, r + d * t + e * i, s + d * n + e * o)
        }, t.clone = function() {
            return new O(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.equals = function(e) {
            var t = this.a,
                n = this.b,
                i = this.c,
                o = this.d,
                r = this.e,
                s = this.f;
            return t === e.a && n === e.b && i === e.c && o === e.d && r === e.e && s === e.f
        }, t.apply = function(e, t) {
            var n = e.x,
                e = e.y,
                i = this.a,
                o = this.b,
                r = this.c,
                s = this.d,
                a = this.e,
                l = this.f;
            return (t = void 0 === t ? {} : t).x = n * i + e * r + a || 0, t.y = n * o + e * s + l || 0, t
        }, O);

    function O(e, t, n, i, o, r) {
        S(this, e = void 0 === e ? 1 : e, t = void 0 === t ? 0 : t, n = void 0 === n ? 0 : n, i = void 0 === i ? 1 : i, o = void 0 === o ? 0 : o, r = void 0 === r ? 0 : r)
    }

    function U(e, t, n, i) {
        if (!e || !e.parentNode || (d || u(e)).documentElement === e) return new y;
        var o = function(e) {
                for (var t, n; e && e !== h;)(n = e._gsap) && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
                return t
            }(e),
            r = w(e) ? P : L,
            n = function(e, t) {
                var n, i, o, r, s = w(e),
                    a = e === s,
                    l = s ? P : L,
                    u = e.parentNode;
                if (e === p) return e;
                if (l.length || l.push(c(e, 1), c(e, 2), c(e, 3)), l = s ? m : f, s) a ? (o = -(i = C(e)).e / i.a, r = -i.f / i.d, n = v) : e.getBBox ? (i = e.getBBox(), o = (n = (n = e.transform ? e.transform.baseVal : {}).numberOfItems ? 1 < n.numberOfItems ? function(e) {
                    for (var t = new y, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                    return t
                }(n) : n.getItem(0).matrix : v).a * i.x + n.c * i.y, r = n.b * i.x + n.d * i.y) : (n = new y, o = r = 0), t && "g" === e.tagName.toLowerCase() && (o = r = 0), (a ? s : u).appendChild(l), l.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + r) + ")");
                else {
                    if (o = r = 0, E)
                        for (n = e.offsetParent, i = e;
                            (i = i && i.parentNode) && i !== n && i.parentNode;) 4 < (p.getComputedStyle(i)[_] + "").length && (o = i.offsetLeft, r = i.offsetTop, i = 0);
                    if ("absolute" !== (t = p.getComputedStyle(e)).position && "fixed" !== t.position)
                        for (n = e.offsetParent; u && u !== n;) o += u.scrollLeft || 0, r += u.scrollTop || 0, u = u.parentNode;
                    (i = l.style).top = e.offsetTop - r + "px", i.left = e.offsetLeft - o + "px", i[_] = t[_], i[k] = t[k], i.position = "fixed" === t.position ? "fixed" : "absolute", e.parentNode.appendChild(l)
                }
                return l
            }(e, n),
            s = r[0].getBoundingClientRect(),
            a = r[1].getBoundingClientRect(),
            r = r[2].getBoundingClientRect(),
            l = n.parentNode,
            i = !i && function e(t) {
                return "fixed" === p.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
            }(e),
            e = new y((a.left - s.left) / 100, (a.top - s.top) / 100, (r.left - s.left) / 100, (r.top - s.top) / 100, s.left + (i ? 0 : D()), s.top + (i ? 0 : g()));
        if (l.removeChild(n), o)
            for (s = o.length; s--;)(a = o[s]).scaleX = a.scaleY = 0, a.renderTransform(1, a);
        return t ? e.inverse() : e
    }

    function R(e, t) {
        e.actions.forEach(function(e) {
            return e.vars[t] && e.vars[t](e)
        })
    }

    function B(e) {
        return "string" == typeof e ? e.split(" ").join("").split(",") : e
    }

    function b(e) {
        return F(e)[0] || console.warn("Element not found:", e)
    }

    function A(e) {
        return Math.round(1e4 * e) / 1e4 || 0
    }

    function re(e, t, n) {
        return e.forEach(function(e) {
            return e.classList[n](t)
        })
    }

    function N(e) {
        return e.replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function K(e, t) {
        var n, i = {};
        for (n in e) t[n] || (i[n] = e[n]);
        return i
    }

    function se(e) {
        var t = ye[e] = B(e);
        return te[e] = t.concat(ne), t
    }

    function J(e, t, n) {
        return e.forEach(function(e) {
            return e.d = function e(t, n, i) {
                void 0 === i && (i = 0);
                for (var o = t.parentNode, r = 1e3 * Math.pow(10, i) * (n ? -1 : 1), s = n ? 900 * -r : 0; t;) s += r, t = t.previousSibling;
                return o ? s + e(o, n, i + 1) : s
            }(n ? e.element : e.t, t)
        }), e.sort(function(e, t) {
            return e.d - t.d
        }), e
    }

    function Q(e, t) {
        for (var n, i, o = e.element.style, r = e.css = e.css || [], s = t.length; s--;) i = o[n = t[s]] || o.getPropertyValue(n), r.push(i ? n : ge[n] || (ge[n] = N(n)), i);
        return o
    }

    function z(e) {
        var t = e.css,
            n = e.element.style,
            i = 0;
        for (e.cache.uncache = 1; i < t.length; i += 2) t[i + 1] ? n[t[i]] = t[i + 1] : n.removeProperty(t[i])
    }

    function ae(e, t) {
        e.forEach(function(e) {
            return e.a.cache.uncache = 1
        }), t || e.finalStates.forEach(z)
    }

    function I(e, t, n) {
        var i, o, r = e.element,
            s = e.width,
            a = e.height,
            l = e.uncache,
            u = e.getProp,
            c = r.style,
            d = 4;
        if ("object" != typeof t && (t = e), ee && 1 !== n) return ee._abs.push({
            t: r,
            b: e,
            a: e,
            sd: 0
        }), ee._final.push(function() {
            return e.cache.uncache = 1, z(e)
        }), r;
        for (n = "none" === u("display"), e.isVisible && !n || (n && (Q(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = s = e.width || t.width, e.height = a = e.height || t.height), Q(e, be), o = window.getComputedStyle(r); d--;) c[be[d]] = o[be[d]];
        return c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = s + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), l ? i = new oe(r) : ((i = K(e, x)).position = "absolute", e.simple ? (u = r.getBoundingClientRect(), i.matrix = new y(1, 0, 0, 1, u.left + D(), u.top + g())) : i.matrix = U(r, !1, !1, !0)), i = Z(i, e, !0), e.x = M(i.x, .01), e.y = M(i.y, .01), r
    }

    function le(e, t) {
        return !0 !== t && (t = F(t), e = e.filter(function(e) {
            if (-1 !== t.indexOf((e.sd < 0 ? e.b : e.a).element)) return !0;
            e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px")
        })), e
    }

    function ue(e) {
        J(e, !0).forEach(function(e) {
            return (e.a.isVisible || e.b.isVisible) && I(e.sd < 0 ? e.b : e.a, e.b, 1)
        })
    }

    function H(e, t) {
        var n, i = e.style || e;
        for (n in t) i[n] = t[n]
    }

    function V(e) {
        return e.map(function(e) {
            return e.element
        })
    }

    function ce(e, t, n) {
        e && t.length && n.add(e(V(t), n, new ie(t, 0, !0)), 0)
    }

    function q(e, t) {
        return e instanceof ie ? e : new ie(e, t)
    }

    function de(e, t, n) {
        var i = e.idLookup[n],
            e = e.alt[n];
        return !e.isVisible || (t.getElementState(e.element) || e).isVisible && i.isVisible ? i : e
    }

    function pe(e) {
        if (e !== a) {
            var t = r.style,
                n = r.clientWidth === window.outerWidth,
                i = r.clientHeight === window.outerHeight,
                o = 4;
            if (e && (n || i)) {
                for (; o--;) xe[o] = t[De[o]];
                n && (t.width = r.clientWidth + "px", t.overflowY = "hidden"), i && (t.height = r.clientHeight + "px", t.overflowX = "hidden"), a = e
            } else if (a) {
                for (; o--;) xe[o] ? t[De[o]] = xe[o] : t.removeProperty(N(De[o]));
                a = e
            }
        }
    }

    function Y(e, t, o, B) {
        e instanceof ie && t instanceof ie || console.warn("Not a valid state object.");
        var r, s, a, l, u, c, d, p, h, n, i, f, g, N = (o = o || {}).clearProps,
            z = o.onEnter,
            I = o.onLeave,
            m = o.absolute,
            H = o.absoluteOnLeave,
            v = o.custom,
            _ = o.delay,
            V = o.paused,
            y = o.repeat,
            q = o.repeatDelay,
            Y = o.yoyo,
            b = o.toggleClass,
            x = o.nested,
            D = o.zIndex,
            w = o.scale,
            C = o.fade,
            S = o.stagger,
            T = o.spin,
            X = o.prune,
            E = ("props" in o ? o : e).props,
            k = K(o, ve),
            A = $.timeline({
                delay: _,
                paused: V,
                repeat: y,
                repeatDelay: q,
                yoyo: Y
            }),
            F = k,
            M = [],
            P = [],
            L = [],
            O = [],
            j = !0 === T ? 1 : T || 0,
            G = "function" == typeof T ? T : function() {
                return j
            },
            R = e.interrupted || t.interrupted,
            W = A[1 !== B ? "to" : "from"];
        for (s in t.idLookup) i = t.alt[s] ? de(t, e, s) : t.idLookup[s], u = i.element, n = e.idLookup[s], !e.alt[s] || u !== n.element || !e.alt[s].isVisible && i.isVisible || (n = e.alt[s]), n ? (c = {
            t: u,
            b: n,
            a: i,
            sd: n.element === u ? 0 : i.isVisible ? 1 : -1
        }, L.push(c), c.sd && (c.sd < 0 && (c.b = i, c.a = n), R && Q(c.b, E ? te[E] : ne), C && L.push(c.swap = {
            t: n.element,
            b: c.b,
            a: c.a,
            sd: -c.sd,
            swap: c
        })), u._flip = n.element._flip = ee ? ee.timeline : A) : i.isVisible && (L.push({
            t: u,
            b: K(i, {
                isVisible: 1
            }),
            a: i,
            sd: 0,
            entering: 1
        }), u._flip = ee ? ee.timeline : A);
        return E && (ye[E] || se(E)).forEach(function(t) {
            return k[t] = function(e) {
                return L[e].a.props[t]
            }
        }), L.finalStates = h = [], _ = function() {
            for (J(L), pe(!0), l = 0; l < L.length; l++) c = L[l], f = c.a, g = c.b, !X || f.isDifferent(g) || c.entering ? (u = c.t, !x || c.sd < 0 || !l || (f.matrix = U(u, !1, !1, !0)), c.sd || g.isVisible && f.isVisible ? (c.sd < 0 ? (d = new oe(u, E, e.simple), Z(d, f, w, 0, 0, d), d.matrix = U(u, !1, !1, !0), d.css = c.b.css, c.a = f = d, C && (u.style.opacity = (R ? g : f).opacity), S && O.push(u)) : 0 < c.sd && C && (u.style.opacity = R ? f.opacity - g.opacity : "0"), Z(f, g, w, E)) : g.isVisible !== f.isVisible && (g.isVisible ? f.isVisible || (g.css = f.css, P.push(g), L.splice(l--, 1), m && x && Z(f, g, w, E)) : (f.isVisible && M.push(f), L.splice(l--, 1))), w || (u.style.maxWidth = Math.max(f.width, g.width) + "px", u.style.maxHeight = Math.max(f.height, g.height) + "px", u.style.minWidth = Math.min(f.width, g.width) + "px", u.style.minHeight = Math.min(f.height, g.height) + "px"), x && b && u.classList.add(b)) : L.splice(l--, 1), h.push(f);
            var t, n;
            if (b && (t = h.map(function(e) {
                    return e.element
                }), x && t.forEach(function(e) {
                    return e.classList.remove(b)
                })), pe(!1), w ? (k.scaleX = function(e) {
                    return L[e].a.scaleX
                }, k.scaleY = function(e) {
                    return L[e].a.scaleY
                }) : (k.width = function(e) {
                    return L[e].a.width + "px"
                }, k.height = function(e) {
                    return L[e].a.height + "px"
                }, k.autoRound = o.autoRound || !1), k.x = function(e) {
                    return L[e].a.x + "px"
                }, k.y = function(e) {
                    return L[e].a.y + "px"
                }, k.rotation = function(e) {
                    return L[e].a.rotation + (T ? 360 * G(e, p[e], p) : 0)
                }, k.skewX = function(e) {
                    return L[e].a.skewX
                }, p = L.map(function(e) {
                    return e.t
                }), !D && 0 !== D || (k.modifiers = {
                    zIndex: function() {
                        return D
                    }
                }, k.zIndex = D, k.immediateRender = !1 !== o.immediateRender), C && (k.opacity = function(e) {
                    return L[e].sd < 0 ? 0 : 0 < L[e].sd ? L[e].a.opacity : "+=0"
                }), O.length && (S = $.utils.distribute(S), n = p.slice(O.length), k.stagger = function(e, t) {
                    return S(~O.indexOf(t) ? p.indexOf(L[e].swap.t) : e, t, n)
                }), me.forEach(function(e) {
                    return o[e] && A.eventCallback(e, o[e], o[e + "Params"])
                }), v && p.length)
                for (s in F = K(k, ve), "scale" in v && (v.scaleX = v.scaleY = v.scale, delete v.scale), v)(r = K(v[s], _e))[s] = k[s], !("duration" in r) && "duration" in k && (r.duration = k.duration), r.stagger = k.stagger, W.call(A, p, r, 0), delete F[s];
            (p.length || P.length || M.length) && (b && A.add(function() {
                return re(t, b, A._zTime < 0 ? "remove" : "add")
            }, 0) && !V && re(t, b, "add"), p.length && W.call(A, p, F, 0)), ce(z, M, A), ce(I, P, A);
            var i = ee && ee.timeline;
            i && (i.add(A, 0), ee._final.push(function() {
                return ae(L, !N)
            })), a = A.duration(), A.call(function() {
                var e = A.time() >= a;
                e && !i && ae(L, !N), b && re(t, b, e ? "remove" : "add")
            })
        }, H && (m = L.filter(function(e) {
            return !e.sd && !e.a.isVisible && e.b.isVisible
        }).map(function(e) {
            return e.a.element
        })), ee ? (m && (y = ee._abs).push.apply(y, le(L, m)), ee._run.push(_)) : (m && ue(le(L, m)), _()), ee ? ee.timeline : A
    }

    function X(e, t) {
        if (e && e.progress() < 1 && !e.paused()) return t && (function e(t) {
            t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e)
        }(e), t < 2 && e.progress(1), e.kill()), !0
    }

    function s(e) {
        for (var t, n = e.idLookup = {}, i = e.alt = {}, o = e.elementStates, r = o.length; r--;) n[(t = o[r]).id] ? i[t.id] = t : n[t.id] = t
    }

    function j(e, t, n, i) {
        return e instanceof oe ? e : e instanceof ie ? (o = e, (i = i) && o.idLookup[j(i).id] || o.elementStates[0]) : new oe("string" == typeof e ? b(e) || console.warn(e + " not found") : e, t, n);
        var o
    }

    function Z(e, t, n, i, o, r) {
        var s, a, l, u, c, d, p = e.element,
            h = e.cache,
            f = e.parent,
            g = e.x,
            m = e.y,
            v = t.width,
            _ = t.height,
            y = t.scaleX,
            b = t.scaleY,
            x = t.rotation,
            D = t.bounds,
            w = r && p.style.cssText,
            C = r && p.getBBox && p.getAttribute("transform"),
            S = e,
            T = (E = t.matrix).e,
            E = E.f,
            k = !(D = e.bounds.width !== D.width || e.bounds.height !== D.height || e.scaleX !== y || e.scaleY !== b || e.rotation !== x) && e.simple && t.simple && !o;
        return k || !f ? (y = b = 1, x = s = 0) : (c = (d = (d = (c = f)._gsap || $.core.getCache(c)).gmCache === $.ticker.frame ? d.gMatrix : (d.gmCache = $.ticker.frame, d.gMatrix = U(c, !0, !1, !0))).clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), x = A(Math.atan2(c.b, c.a) * he), s = A(Math.atan2(c.c, c.d) * he + x) % 360, y = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2)), b = Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) * Math.cos(s * fe), o && (o = F(o)[0], l = $.getProperty(o), u = o.getBBox && "function" == typeof o.getBBox && o.getBBox(), S = {
            scaleX: l("scaleX"),
            scaleY: l("scaleY"),
            width: u ? u.width : Math.ceil(parseFloat(l("width", "px"))),
            height: u ? u.height : parseFloat(l("height", "px"))
        }), h.rotation = x + "deg", h.skewX = s + "deg"), n ? (y *= v !== S.width && S.width ? v / S.width : 1, b *= _ !== S.height && S.height ? _ / S.height : 1, h.scaleX = y, h.scaleY = b) : (v = M(v * y / S.scaleX, 0), _ = M(_ * b / S.scaleY, 0), p.style.width = v + "px", p.style.height = _ + "px"), i && H(p, t.props), k || !f ? (g += T - e.matrix.e, m += E - e.matrix.f) : D || f !== t.parent ? (h.renderTransform(1, h), c = U(o || p, !1, !1, !0), u = d.apply({
            x: c.e,
            y: c.f
        }), g += (a = d.apply({
            x: T,
            y: E
        })).x - u.x, m += a.y - u.y) : (d.e = d.f = 0, g += (a = d.apply({
            x: T - e.matrix.e,
            y: E - e.matrix.f
        })).x, m += a.y), g = M(g, .02), m = M(m, .02), !r || r instanceof oe ? (h.x = g + "px", h.y = m + "px", h.renderTransform(1, h)) : (p.style.cssText = w, p.getBBox && p.setAttribute("transform", C || ""), h.uncache = 1), r && (r.x = g, r.y = m, r.rotation = x, r.skewX = s, n ? (r.scaleX = y, r.scaleY = b) : (r.width = v, r.height = _)), r || h
    }
    var F, $, ee, o, r, M, a, G = 1,
        W = {},
        he = 180 / Math.PI,
        fe = Math.PI / 180,
        x = {},
        ge = {},
        te = {},
        me = B("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
        ne = B("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
        ve = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1
        },
        _e = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1
        },
        ye = {},
        be = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
        xe = [],
        De = "width,height,overflowX,overflowY".split(","),
        ie = ((t = we.prototype).update = function(e) {
            var t = this;
            return this.elementStates = this.targets.map(function(e) {
                return new oe(e, t.props, t.simple)
            }), s(this), this.interrupt(e), this.recordInlineStyles(), this
        }, t.clear = function() {
            return this.targets.length = this.elementStates.length = 0, s(this), this
        }, t.fit = function(e, t, n) {
            for (var i, o, r = J(this.elementStates.slice(0), !1, !0), s = (e || this).idLookup, a = 0; a < r.length; a++) i = r[a], n && (i.matrix = U(i.element, !1, !1, !0)), (o = s[i.id]) && Z(i, o, t, !0, 0, i), i.matrix = U(i.element, !1, !1, !0);
            return this
        }, t.getProperty = function(e, t) {
            e = this.getElementState(e) || x;
            return (t in e ? e : e.props || x)[t]
        }, t.add = function(e) {
            for (var t, n, i = e.targets.length, o = this.idLookup, r = this.alt; i--;)(n = o[(t = e.elementStates[i]).id]) && (t.element === n.element || r[t.id] && r[t.id].element === t.element) ? (n = this.elementStates.indexOf(t.element === n.element ? n : r[t.id]), this.targets.splice(n, 1, e.targets[i]), this.elementStates.splice(n, 1, t)) : (this.targets.push(e.targets[i]), this.elementStates.push(t));
            return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), s(this), this
        }, t.compare = function(e) {
            function i(e, t, n) {
                return (e.isVisible !== t.isVisible ? e.isVisible ? g : m : e.isVisible ? f : h).push(n) && v.push(n)
            }

            function t(e, t, n) {
                v.indexOf(n) < 0 && i(e, t, n)
            }
            var n, o, r, s, a, l, u, c, d = e.idLookup,
                p = this.idLookup,
                h = [],
                f = [],
                g = [],
                m = [],
                v = [],
                _ = e.alt,
                y = this.alt;
            for (r in d) a = _[r], l = y[r], s = (n = a ? de(e, this, r) : d[r]).element, o = p[r], l ? (c = o.isVisible || !l.isVisible && s === o.element ? o : l, (u = !a || n.isVisible || a.isVisible || c.element !== a.element ? n : a).isVisible && c.isVisible && u.element !== c.element ? ((u.isDifferent(c) ? f : h).push(u.element, c.element), v.push(u.element, c.element)) : i(u, c, u.element), a && u.element === a.element && (a = d[r]), t(u.element !== o.element && a ? a : u, o, o.element), t(a && a.element === l.element ? a : u, l, l.element), a && t(a, l.element === a.element ? l : o, a.element)) : (o ? o.isDifferent(n) ? i(n, o, s) : h.push(s) : g.push(s), a && t(a, o, a.element));
            for (r in p) d[r] || (m.push(p[r].element), y[r] && m.push(y[r].element));
            return {
                changed: f,
                unchanged: h,
                enter: g,
                leave: m
            }
        }, t.recordInlineStyles = function() {
            for (var e = te[this.props] || ne, t = this.elementStates.length; t--;) Q(this.elementStates[t], e)
        }, t.interrupt = function(n) {
            var i = this,
                o = [];
            this.targets.forEach(function(e) {
                var e = e._flip,
                    t = X(e, n ? 0 : 1);
                n && t && o.indexOf(e) < 0 && e.add(function() {
                    return i.updateVisibility()
                }), t && o.push(e)
            }), !n && o.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!o.length)
        }, t.updateVisibility = function() {
            this.elementStates.forEach(function(e) {
                var t = e.element.getBoundingClientRect();
                e.isVisible = !!(t.width || t.height || t.top || t.left), e.uncache = 1
            })
        }, t.getElementState = function(e) {
            return this.elementStates[this.targets.indexOf(b(e))]
        }, t.makeAbsolute = function() {
            return J(this.elementStates.slice(0), !0, !0).map(I)
        }, we);

    function we(e, t, n) {
        this.props = t && t.props, this.simple = !(!t || !t.simple), n ? (this.targets = V(e), this.elementStates = e, s(this)) : (this.targets = F(e), n = t && (!1 === t.kill || t.batch && !t.kill), ee && !n && ee._kill.push(this), this.update(n || !!ee))
    }(t = Ce.prototype).isDifferent = function(e) {
        var t = this.bounds,
            n = e.bounds;
        return t.top !== n.top || t.left !== n.left || t.width !== n.width || t.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props)
    }, t.update = function(e, t) {
        var n, i = this,
            o = i.element,
            r = $.getProperty(o),
            s = $.core.getCache(o),
            a = o.getBoundingClientRect(),
            l = o.getBBox && "function" == typeof o.getBBox && "svg" !== o.nodeName.toLowerCase() && o.getBBox(),
            u = t ? new y(1, 0, 0, 1, a.left + D(), a.top + g()) : U(o, !1, !1, !0);
        if (i.getProp = r, i.element = o, i.id = ((n = (c = o).getAttribute("data-flip-id")) || c.setAttribute("data-flip-id", n = "auto-" + G++), n), i.matrix = u, i.cache = s, i.bounds = a, i.isVisible = !!(a.width || a.height || a.left || a.top), i.display = r("display"), i.position = r("position"), i.parent = o.parentNode, i.x = r("x"), i.y = r("y"), i.scaleX = s.scaleX, i.scaleY = s.scaleY, i.rotation = r("rotation"), i.skewX = r("skewX"), i.opacity = r("opacity"), i.width = l ? l.width : M(r("width", "px"), .04), i.height = l ? l.height : M(r("height", "px"), .04), e) {
            for (var c = i, d = ye[e] || se(e), p = $.getProperty(c.element, null, "native"), h = c.props = {}, f = d.length; f--;) h[d[f]] = (p(d[f]) + "").trim();
            h.zIndex && (h.zIndex = parseFloat(h.zIndex) || 0)
        }
        i.ctm = o.getCTM && "svg" === o.nodeName.toLowerCase() && C(o).inverse(), i.simple = t || 1 === A(u.a) && !A(u.b) && !A(u.c) && 1 === A(u.d), i.uncache = 0
    };
    var oe = Ce;

    function Ce(e, t, n) {
        this.element = e, this.update(t, n)
    }(t = Te.prototype).getStateById = function(e) {
        for (var t = this.states.length; t--;)
            if (this.states[t].idLookup[e]) return this.states[t]
    }, t.kill = function() {
        this.batch.remove(this)
    };
    var Se = Te;

    function Te(e, t) {
        this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline
    }(t = ke.prototype).add = function(t) {
        var e = this.actions.filter(function(e) {
            return e.vars === t
        });
        return e.length ? e[0] : (e = new Se("function" == typeof t ? {
            animate: t
        } : t, this), this.actions.push(e), e)
    }, t.remove = function(e) {
        e = this.actions.indexOf(e);
        return 0 <= e && this.actions.splice(e, 1), this
    }, t.getState = function(t) {
        var n = this,
            e = ee,
            i = o;
        return (ee = this).state.clear(), this._kill.length = 0, this.actions.forEach(function(e) {
            e.vars.getState && (e.states.length = 0, (o = e).state = e.vars.getState(e)), t && e.states.forEach(function(e) {
                return n.state.add(e)
            })
        }), o = i, ee = e, this.killConflicts(), this
    }, t.animate = function() {
        var e, t, n = this,
            i = ee,
            o = this.timeline,
            r = this.actions.length;
        for (ee = this, o.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
                e.vars.animate && e.vars.animate(e);
                var t, n = e.vars.onEnter,
                    i = e.vars.onLeave,
                    o = e.targets;
                o && o.length && (n || i) && (t = new ie, e.states.forEach(function(e) {
                    return t.add(e)
                }), (e = t.compare(l.getState(o))).enter.length && n && n(e.enter), e.leave.length && i && i(e.leave))
            }), ue(this._abs), this._run.forEach(function(e) {
                return e()
            }), t = o.duration(), e = this._final.slice(0), o.add(function() {
                t <= o.time() && (e.forEach(function(e) {
                    return e()
                }), R(n, "onComplete"))
            }), ee = i; r--;) this.actions[r].vars.once && this.actions[r].kill();
        return R(this, "onStart"), o.restart(), this
    }, t.loadState = function(o) {
        o = o || function() {
            return 0
        };
        var r = [];
        return this.actions.forEach(function(n) {
            var i, e;
            n.vars.loadState && (r.push(e = function e(t) {
                t && (n.targets = t), ~(i = r.indexOf(e)) && (r.splice(i, 1), r.length || o())
            }), n.vars.loadState(e))
        }), r.length || o(), this
    }, t.setState = function() {
        return this.actions.forEach(function(e) {
            return e.targets = e.vars.setState && e.vars.setState(e)
        }), this
    }, t.killConflicts = function(t) {
        return this.state.interrupt(t), this._kill.forEach(function(e) {
            return e.interrupt(t)
        }), this
    }, t.run = function(e, t) {
        var n = this;
        return this !== ee && (e || this.getState(t), this.loadState(function() {
            n._killed || (n.setState(), n.animate())
        })), this
    }, t.clear = function(e) {
        this.state.clear(), e || (this.actions.length = 0)
    }, t.getStateById = function(e) {
        for (var t, n = this.actions.length; n--;)
            if (t = this.actions[n].getStateById(e)) return t;
        return this.state.idLookup[e] && this.state
    }, t.kill = function() {
        this._killed = 1, this.clear(), delete W[this.id]
    };
    var t, Ee = ke;

    function ke(e) {
        this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new ie, this.timeline = $.timeline()
    }
    n.getState = function(e, t) {
        e = q(e, t);
        return o && o.states.push(e), t && t.batch && n.batch(t.batch).state.add(e), e
    }, n.from = function(e, t) {
        return "clearProps" in (t = t || {}) || (t.clearProps = !0), Y(e, q(t.targets || e.targets, {
            props: t.props || e.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, -1)
    }, n.to = function(e, t) {
        return Y(e, q(t.targets || e.targets, {
            props: t.props || e.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, 1)
    }, n.fromTo = function(e, t, n) {
        return Y(e, t, n)
    }, n.fit = function(e, t, n) {
        var i = n ? K(n, _e) : {},
            o = n || i,
            r = o.absolute,
            s = o.scale,
            a = o.getVars,
            l = o.props,
            u = o.runBackwards,
            c = o.onComplete,
            o = o.simple,
            n = n && n.fitChild && b(n.fitChild),
            t = j(t, l, o, e),
            d = j(e, 0, o, t),
            e = l ? te[l] : ne;
        return l && H(i, t.props), u && (Q(d, e), "immediateRender" in i || (i.immediateRender = !0), i.onComplete = function() {
            z(d), c && c.apply(this, arguments)
        }), r && I(d, t), i = Z(d, t, s || n, l, n, i.duration || a ? i : 0), a ? i : i.duration ? $.to(d.element, i) : null
    }, n.makeAbsolute = function(e, t) {
        return (e instanceof ie ? e : new ie(e, t)).makeAbsolute()
    }, n.batch = function(e) {
        return W[e = e || "default"] || (W[e] = new Ee(e))
    }, n.killFlipsOf = function(e, t) {
        (e instanceof ie ? e.targets : F(e)).forEach(function(e) {
            return e && X(e._flip, !1 !== t ? 1 : 2)
        })
    }, n.isFlipping = function(e) {
        e = n.getByTarget(e);
        return !!e && e.isActive()
    }, n.getByTarget = function(e) {
        return (b(e) || x)._flip
    }, n.getElementState = function(e, t) {
        return new oe(b(e), t)
    }, n.convertCoordinates = function(e, t, n) {
        t = U(t, !0, !0).multiply(U(e));
        return n ? t.apply(n) : t
    }, n.register = function(e) {
        var n;
        (r = "undefined" != typeof document && document.body) && ($ = e, u(r), F = $.utils.toArray, n = $.utils.snap(.1), M = function(e, t) {
            return n(parseFloat(e) + t)
        })
    };
    var l = n;

    function n() {}
    l.version = "3.11.0", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(l), e.Flip = l, e.default = l, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(t) {
    "use strict";

    function g(e, t) {
        var n, i, o, r, s, a;
        if (e.parentNode && (u || c(e))) return a = (n = T(e)) ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", i = n ? t ? "rect" : "g" : "div", o = 2 !== t ? 0 : 100, r = 3 === t ? 100 : 0, s = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", a = u.createElementNS ? u.createElementNS(a.replace(/^https/, "http"), i) : u.createElement(i), t && (n ? (v = v || g(e), a.setAttribute("width", .01), a.setAttribute("height", .01), a.setAttribute("transform", "translate(" + o + "," + r + ")"), v.appendChild(a)) : (m || ((m = g(e)).style.cssText = s), a.style.cssText = s + "width:0.1px;height:0.1px;top:" + r + "px;left:" + o + "px", m.appendChild(a))), a;
        throw "Need document and parent."
    }

    function p(e, t, n, i, o, r, s) {
        return e.a = t, e.b = n, e.c = i, e.d = o, e.e = r, e.f = s, e
    }
    var u, h, s, a, m, v, _, y, b, f = "transform",
        x = f + "Origin",
        c = function(e) {
            var t, n = e.ownerDocument || e;
            !(f in e.style) && "msTransform" in e.style && (x = (f = "msTransform") + "Origin");
            for (; n.parentNode && (n = n.parentNode););
            return h = window, _ = new Ce, n && (s = (u = n).documentElement, a = n.body, (y = u.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none", e = n.createElement("div"), t = n.createElement("div"), a.appendChild(e), e.appendChild(t), e.style.position = "static", e.style[f] = "translate3d(0,0,1px)", b = t.offsetParent !== e, a.removeChild(e)), n
        },
        d = function(e) {
            for (var t, n; e && e !== a;)(n = e._gsap) && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
            return t
        },
        D = [],
        w = [],
        C = function() {
            return h.pageYOffset || u.scrollTop || s.scrollTop || a.scrollTop || 0
        },
        S = function() {
            return h.pageXOffset || u.scrollLeft || s.scrollLeft || a.scrollLeft || 0
        },
        T = function(e) {
            return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
        },
        E = function e(t) {
            return "fixed" === h.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
        },
        k = function(e, t) {
            var n, i, o, r, s, a, l, u = T(e),
                c = e === u,
                d = u ? D : w,
                p = e.parentNode;
            if (e === h) return e;
            if (d.length || d.push(g(e, 1), g(e, 2), g(e, 3)), d = u ? v : m, u) c ? ((l = (s = e).getCTM()) || (a = s.style[f], s.style[f] = "none", s.appendChild(y), l = y.getCTM(), s.removeChild(y), a ? s.style[f] = a : s.style.removeProperty(f.replace(/([A-Z])/g, "-$1").toLowerCase())), o = -(i = l || _.clone()).e / i.a, r = -i.f / i.d, n = _) : e.getBBox ? (i = e.getBBox(), o = (n = (n = e.transform ? e.transform.baseVal : {}).numberOfItems ? 1 < n.numberOfItems ? function(e) {
                for (var t = new Ce, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                return t
            }(n) : n.getItem(0).matrix : _).a * i.x + n.c * i.y, r = n.b * i.x + n.d * i.y) : (n = new Ce, o = r = 0), t && "g" === e.tagName.toLowerCase() && (o = r = 0), (c ? u : p).appendChild(d), d.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + r) + ")");
            else {
                if (o = r = 0, b)
                    for (n = e.offsetParent, i = e;
                        (i = i && i.parentNode) && i !== n && i.parentNode;) 4 < (h.getComputedStyle(i)[f] + "").length && (o = i.offsetLeft, r = i.offsetTop, i = 0);
                if ("absolute" !== (a = h.getComputedStyle(e)).position && "fixed" !== a.position)
                    for (n = e.offsetParent; p && p !== n;) o += p.scrollLeft || 0, r += p.scrollTop || 0, p = p.parentNode;
                (i = d.style).top = e.offsetTop - r + "px", i.left = e.offsetLeft - o + "px", i[f] = a[f], i[x] = a[x], i.position = "fixed" === a.position ? "fixed" : "absolute", e.parentNode.appendChild(d)
            }
            return d
        },
        Ce = ((e = n.prototype).inverse = function() {
            var e = this.a,
                t = this.b,
                n = this.c,
                i = this.d,
                o = this.e,
                r = this.f,
                s = e * i - t * n || 1e-10;
            return p(this, i / s, -t / s, -n / s, e / s, (n * r - i * o) / s, -(e * r - t * o) / s)
        }, e.multiply = function(e) {
            var t = this.a,
                n = this.b,
                i = this.c,
                o = this.d,
                r = this.e,
                s = this.f,
                a = e.a,
                l = e.c,
                u = e.b,
                c = e.d,
                d = e.e,
                e = e.f;
            return p(this, a * t + u * i, a * n + u * o, l * t + c * i, l * n + c * o, r + d * t + e * i, s + d * n + e * o)
        }, e.clone = function() {
            return new n(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function(e) {
            var t = this.a,
                n = this.b,
                i = this.c,
                o = this.d,
                r = this.e,
                s = this.f;
            return t === e.a && n === e.b && i === e.c && o === e.d && r === e.e && s === e.f
        }, e.apply = function(e, t) {
            var n = e.x,
                e = e.y,
                i = this.a,
                o = this.b,
                r = this.c,
                s = this.d,
                a = this.e,
                l = this.f;
            return (t = void 0 === t ? {} : t).x = n * i + e * r + a || 0, t.y = n * o + e * s + l || 0, t
        }, n);

    function n(e, t, n, i, o, r) {
        p(this, e = void 0 === e ? 1 : e, t = void 0 === t ? 0 : t, n = void 0 === n ? 0 : n, i = void 0 === i ? 1 : i, o = void 0 === o ? 0 : o, r = void 0 === r ? 0 : r)
    }

    function Xe(e, t, n, i) {
        if (!e || !e.parentNode || (u || c(e)).documentElement === e) return new Ce;
        var o = d(e),
            r = T(e) ? D : w,
            n = k(e, n),
            s = r[0].getBoundingClientRect(),
            a = r[1].getBoundingClientRect(),
            r = r[2].getBoundingClientRect(),
            l = n.parentNode,
            i = !i && E(e),
            e = new Ce((a.left - s.left) / 100, (a.top - s.top) / 100, (r.left - s.left) / 100, (r.top - s.top) / 100, s.left + (i ? 0 : S()), s.top + (i ? 0 : C()));
        if (l.removeChild(n), o)
            for (s = o.length; s--;)(a = o[s]).scaleX = a.scaleY = 0, a.renderTransform(1, a);
        return t ? e.inverse() : e
    }

    function l() {
        return "undefined" != typeof window
    }

    function A() {
        return Pe || l() && (Pe = window.gsap) && Pe.registerPlugin && Pe
    }

    function Se(e) {
        return "function" == typeof e
    }

    function je(e) {
        return "object" == typeof e
    }

    function Te(e) {
        return void 0 === e
    }

    function F() {
        return !1
    }

    function Ee(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function M(e, t) {
        t = Oe.createElementNS ? Oe.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Oe.createElement(e);
        return t.style ? t : Oe.createElement(e)
    }

    function Ge(e, t) {
        var n, i = {};
        for (n in e) i[n] = t ? e[n] * t : e[n];
        return i
    }

    function We(e, t) {
        for (var n, i = e.length; i--;) t ? e[i].style.touchAction = t : e[i].style.removeProperty("touch-action"), (n = e[i].children) && n.length && We(n, t)
    }

    function Ue() {
        return wt.forEach(function(e) {
            return e()
        })
    }

    function P() {
        return !wt.length && Pe.ticker.remove(Ue)
    }

    function Ke(e) {
        for (var t = wt.length; t--;) wt[t] === e && wt.splice(t, 1);
        Pe.to(P, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: P,
            data: "_draggable"
        })
    }

    function ke(e, t, n, i) {
        var o;
        e.addEventListener && (o = ht[t], i = i || (N ? {
            passive: !1
        } : null), e.addEventListener(o || t, n, i), o && t !== o && e.addEventListener(t, n, i))
    }

    function Ae(e, t, n) {
        var i;
        e.removeEventListener && (i = ht[t], e.removeEventListener(i || t, n), i && t !== i && e.removeEventListener(t, n))
    }

    function Fe(e) {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
    }

    function L(e) {
        gt = e.touches && ft < e.touches.length, Ae(e.target, "touchend", L)
    }

    function Je(e) {
        gt = e.touches && ft < e.touches.length, ke(e.target, "touchend", L)
    }

    function Qe(e) {
        return Le.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    }

    function Ze(e) {
        return Le.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    }

    function $e(e, t) {
        ke(e, "scroll", t), kt(e.parentNode) || $e(e.parentNode, t)
    }

    function et(e, t) {
        Ae(e, "scroll", t), kt(e.parentNode) || et(e.parentNode, t)
    }

    function O(e, t) {
        var t = "x" === t ? "Width" : "Height",
            n = "scroll" + t,
            i = "client" + t;
        return Math.max(0, kt(e) ? Math.max(Re[n], r[n]) - (Le["inner" + t] || Re[i] || r[i]) : e[n] - e[i])
    }

    function tt(e, t) {
        var n = O(e, "x"),
            i = O(e, "y");
        kt(e) ? e = He : tt(e.parentNode, t), e._gsMaxScrollX = n, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
    }

    function nt(e, t, n) {
        var i = e.style;
        i && (Te(i[t]) && (t = B(t, e) || t), null == n ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = n)
    }

    function it(e) {
        return Le.getComputedStyle(!(e instanceof Element) && (e.host || (e.parentNode || {}).host) || e)
    }

    function ot(e) {
        if (e === Le) return q.left = q.top = 0, q.width = q.right = Re.clientWidth || e.innerWidth || r.clientWidth || 0, q.height = q.bottom = (e.innerHeight || 0) - 20 < Re.clientHeight ? Re.clientHeight : e.innerHeight || r.clientHeight || 0, q;
        var t = e.ownerDocument || Oe,
            e = Te(e.pageX) ? e.nodeType || Te(e.left) || Te(e.top) ? Ne(e)[0].getBoundingClientRect() : e : {
                left: e.pageX - Ze(t),
                top: e.pageY - Qe(t),
                right: e.pageX - Ze(t) + 1,
                bottom: e.pageY - Qe(t) + 1
            };
        return Te(e.right) && !Te(e.width) ? (e.right = e.left + e.width, e.bottom = e.top + e.height) : Te(e.width) && (e = {
            width: e.right - e.left,
            height: e.bottom - e.top,
            right: e.right,
            left: e.left,
            bottom: e.bottom,
            top: e.top
        }), e
    }

    function Me(e, t, n) {
        var i, o = e.vars,
            r = o[n],
            s = e._listeners[t];
        return Se(r) && (i = r.apply(o.callbackScope || e, o[n + "Params"] || [e.pointerEvent])), i = s && !1 === e.dispatchEvent(t) ? !1 : i
    }

    function rt(e, t) {
        var n = Ne(e)[0];
        return n.nodeType || n === Le ? Y(n, t) : Te(e.left) ? {
            left: n = e.min || e.minX || e.minRotation || 0,
            top: t = e.min || e.minY || 0,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - t
        } : {
            left: e.left - (n = {
                x: 0,
                y: 0
            }).x,
            top: e.top - n.y,
            width: e.width,
            height: e.height
        }
    }

    function st(o, r, e, t, s, n) {
        var i, a, l, u = {};
        if (r)
            if (1 !== s && r instanceof Array) {
                if (u.end = i = [], l = r.length, je(r[0]))
                    for (a = 0; a < l; a++) i[a] = Ge(r[a], s);
                else
                    for (a = 0; a < l; a++) i[a] = r[a] * s;
                e += 1.1, t -= 1.1
            } else Se(r) ? u.end = function(e) {
                var t, n, i = r.call(o, e);
                if (1 !== s)
                    if (je(i)) {
                        for (n in t = {}, i) t[n] = i[n] * s;
                        i = t
                    } else i *= s;
                return i
            } : u.end = r;
        return !e && 0 !== e || (u.max = e), !t && 0 !== t || (u.min = t), n && (u.velocity = 0), u
    }

    function at(e) {
        var t;
        return !(!e || !e.getAttribute || e === r) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !V.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || at(e.parentNode))
    }

    function lt(e, t) {
        for (var n, i = e.length; i--;)(n = e[i]).ondragstart = n.onselectstart = t ? null : F, Pe.set(n, {
            lazy: !0,
            userSelect: t ? "text" : "none"
        })
    }

    function ut(r, o) {
        r = Pe.utils.toArray(r)[0], o = o || {};
        var s, a, l, e, u, c, d = document.createElement("div"),
            p = d.style,
            t = r.firstChild,
            h = 0,
            f = 0,
            g = r.scrollTop,
            m = r.scrollLeft,
            v = r.scrollWidth,
            _ = r.scrollHeight,
            y = 0,
            b = 0,
            x = 0;
        z && !1 !== o.force3D ? (u = "translate3d(", c = "px,0px)") : H && (u = "translate(", c = "px)"), this.scrollTop = function(e, t) {
            if (!arguments.length) return -this.top();
            this.top(-e, t)
        }, this.scrollLeft = function(e, t) {
            if (!arguments.length) return -this.left();
            this.left(-e, t)
        }, this.left = function(e, t) {
            return arguments.length ? (n = r.scrollLeft - m, i = f, (2 < n || n < -2) && !t ? (m = r.scrollLeft, Pe.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }), this.left(-m), void(o.onKill && o.onKill())) : ((e = -e) < 0 ? (f = e - .5 | 0, e = 0) : b < e ? (f = e - b | 0, e = b) : f = 0, (f || i) && (this._skip || (p[H] = u + -f + "px," + -h + c), 0 <= f + y && (p.paddingRight = f + y + "px")), r.scrollLeft = 0 | e, void(m = r.scrollLeft))) : -(r.scrollLeft + f);
            var n, i
        }, this.top = function(e, t) {
            return arguments.length ? (n = r.scrollTop - g, i = h, (2 < n || n < -2) && !t ? (g = r.scrollTop, Pe.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }), this.top(-g), void(o.onKill && o.onKill())) : ((e = -e) < 0 ? (h = e - .5 | 0, e = 0) : x < e ? (h = e - x | 0, e = x) : h = 0, !h && !i || this._skip || (p[H] = u + -f + "px," + -h + c), r.scrollTop = 0 | e, void(g = r.scrollTop))) : -(r.scrollTop + h);
            var n, i
        }, this.maxScrollTop = function() {
            return x
        }, this.maxScrollLeft = function() {
            return b
        }, this.disable = function() {
            for (t = d.firstChild; t;) e = t.nextSibling, r.appendChild(t), t = e;
            r === d.parentNode && r.removeChild(d)
        }, this.enable = function() {
            if ((t = r.firstChild) !== d) {
                for (; t;) e = t.nextSibling, d.appendChild(t), t = e;
                r.appendChild(d), this.calibrate()
            }
        }, this.calibrate = function(e) {
            var t, n, i, o = r.clientWidth === s;
            g = r.scrollTop, m = r.scrollLeft, o && r.clientHeight === a && d.offsetHeight === l && v === r.scrollWidth && _ === r.scrollHeight && !e || ((h || f) && (n = this.left(), i = this.top(), this.left(-r.scrollLeft), this.top(-r.scrollTop)), t = it(r), o && !e || (p.display = "block", p.width = "auto", p.paddingRight = "0px", (y = Math.max(0, r.scrollWidth - r.clientWidth)) && (y += parseFloat(t.paddingLeft) + (I ? parseFloat(t.paddingRight) : 0))), p.display = "inline-block", p.position = "relative", p.overflow = "visible", p.verticalAlign = "top", p.boxSizing = "content-box", p.width = "100%", p.paddingRight = y + "px", I && (p.paddingBottom = t.paddingBottom), s = r.clientWidth, a = r.clientHeight, v = r.scrollWidth, _ = r.scrollHeight, b = r.scrollWidth - s, x = r.scrollHeight - a, l = d.offsetHeight, p.display = "block", (n || i) && (this.left(n), this.top(i)))
        }, this.content = d, this.element = r, this._skip = !1, this.enable()
    }

    function ct(e) {
        var t, n, i, o;
        l() && document.body && (t = window && window.navigator, Le = window, Oe = document, Re = Oe.documentElement, r = Oe.body, R = M("div"), _t = !!window.PointerEvent, (Be = M("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", vt = "grab" === Be.style.cursor ? "grab" : "move", mt = t && -1 !== t.userAgent.toLowerCase().indexOf("android"), pt = "ontouchstart" in Re && "orientation" in Le || t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints), t = M("div"), i = (n = M("div")).style, o = r, i.display = "inline-block", i.position = "relative", t.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", t.appendChild(n), o.appendChild(t), i = n.offsetHeight + 18 > t.scrollHeight, o.removeChild(t), I = i, ht = function(e) {
            for (var t = e.split(","), n = (("onpointerdown" in R ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in R ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), i = {}, o = 4; - 1 < --o;) i[t[o]] = n[o], i[n[o]] = t[o];
            try {
                Re.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        N = 1
                    }
                }))
            } catch (e) {}
            return i
        }("touchstart,touchmove,touchend,touchcancel"), ke(Oe, "touchcancel", F), ke(Le, "touchmove", F), r && r.addEventListener("touchstart", F), ke(Oe, "contextmenu", function() {
            for (var e in Ct) Ct[e].isPressed && Ct[e].endDrag()
        }), Pe = dt = A()), Pe ? (ze = Pe.plugins.inertia, B = Pe.utils.checkPrefix, H = B(H), yt = B(yt), Ne = Pe.utils.toArray, z = !!B("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    }
    var Pe, Le, Oe, Re, r, R, Be, dt, B, Ne, N, pt, ht, ft, gt, mt, ze, vt, _t, z, I, H = "transform",
        yt = "transformOrigin",
        bt = Array.isArray,
        xt = 180 / Math.PI,
        Dt = new Ce,
        Ie = Date.now || function() {
            return (new Date).getTime()
        },
        wt = [],
        Ct = {},
        St = 0,
        V = /^(?:a|input|textarea|button|select)$/i,
        Tt = 0,
        Et = {},
        He = {},
        kt = function(e) {
            return !(e && e !== Re && 9 !== e.nodeType && e !== Oe.body && e !== Le && e.nodeType && e.parentNode)
        },
        q = {},
        Ve = {},
        Y = function(e, t) {
            t = Ne(t)[0];
            var n, i, o, r, s, a, l, u = e.getBBox && e.ownerSVGElement,
                c = e.ownerDocument || Oe;
            if (e === Le) o = Qe(c), i = (n = Ze(c)) + (c.documentElement.clientWidth || e.innerWidth || c.body.clientWidth || 0), r = o + ((e.innerHeight || 0) - 20 < c.documentElement.clientHeight ? c.documentElement.clientHeight : e.innerHeight || c.body.clientHeight || 0);
            else {
                if (t === Le || Te(t)) return e.getBoundingClientRect();
                n = o = 0, u ? (a = (s = e.getBBox()).width, l = s.height) : (e.viewBox && (s = e.viewBox.baseVal) && (n = s.x || 0, o = s.y || 0, a = s.width, l = s.height), a || (s = "border-box" === (c = it(e)).boxSizing, a = (parseFloat(c.width) || e.clientWidth || 0) + (s ? 0 : parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth)), l = (parseFloat(c.height) || e.clientHeight || 0) + (s ? 0 : parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth)))), i = a, r = l
            }
            return e === t ? {
                left: n,
                top: o,
                width: i - n,
                height: r - o
            } : (s = (u = Xe(t, !0).multiply(Xe(e))).apply({
                x: n,
                y: o
            }), c = u.apply({
                x: i,
                y: o
            }), a = u.apply({
                x: i,
                y: r
            }), l = u.apply({
                x: n,
                y: r
            }), {
                left: n = Math.min(s.x, c.x, a.x, l.x),
                top: o = Math.min(s.y, c.y, a.y, l.y),
                width: Math.max(s.x, c.x, a.x, l.x) - n,
                height: Math.max(s.y, c.y, a.y, l.y) - o
            })
        };

    function X(e) {
        this._listeners = {}, this.target = e || this
    }(e = X.prototype).addEventListener = function(e, t) {
        e = this._listeners[e] || (this._listeners[e] = []);
        ~e.indexOf(t) || e.push(t)
    }, e.removeEventListener = function(e, t) {
        e = this._listeners[e], t = e && e.indexOf(t);
        0 <= t && e.splice(t, 1)
    }, e.dispatchEvent = function(t) {
        var n, i = this;
        return (this._listeners[t] || []).forEach(function(e) {
            return !1 === e.call(i, {
                type: t,
                target: i.target
            }) && (n = !1)
        }), n
    };
    e = At = X, (j = qe).prototype = Object.create(e.prototype), (j.prototype.constructor = j).__proto__ = e, qe.register = function(e) {
        Pe = e, ct()
    }, qe.create = function(e, t) {
        return dt || ct(!0), Ne(e).map(function(e) {
            return new qe(e, t)
        })
    }, qe.get = function(e) {
        return Ct[(Ne(e)[0] || {})._gsDragID]
    }, qe.timeSinceDrag = function() {
        return (Ie() - Tt) / 1e3
    }, qe.hitTest = function(e, t, n) {
        if (e === t) return !1;
        var e = ot(e),
            t = ot(t),
            i = e.top,
            o = e.left,
            r = e.right,
            s = e.bottom,
            a = e.width,
            e = e.height,
            l = t.left > r || t.right < o || t.top > s || t.bottom < i;
        return l || !n ? !l : (l = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (o = {
            left: Math.max(o, t.left),
            top: Math.max(i, t.top)
        }).width = Math.min(r, t.right) - o.left, o.height = Math.min(s, t.bottom) - o.top, !(o.width < 0 || o.height < 0) && (l ? a * e * (n *= .01) <= (i = o.width * o.height) || i >= t.width * t.height * n : o.width > n && o.height > n))
    };
    var At, j, e, ge = qe;

    function qe(h, p) {
        var e;

        function o(e, t) {
            return parseFloat(V.get(h, e, t))
        }

        function r(e) {
            return Fe(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
        }

        function f(e) {
            if (N.autoScroll && N.isDragging && (I || T)) {
                var t, n, i, o, r, s, a, l, u = h,
                    c = 15 * N.autoScroll;
                for (I = !1, He.scrollTop = null != Le.pageYOffset ? Le.pageYOffset : (null != q.documentElement.scrollTop ? q.documentElement : q.body).scrollTop, He.scrollLeft = null != Le.pageXOffset ? Le.pageXOffset : (null != q.documentElement.scrollLeft ? q.documentElement : q.body).scrollLeft, o = N.pointerX - He.scrollLeft, r = N.pointerY - He.scrollTop; u && !n;) t = (n = kt(u.parentNode)) ? He : u.parentNode, i = n ? {
                    bottom: Math.max(Re.clientHeight, Le.innerHeight || 0),
                    right: Math.max(Re.clientWidth, Le.innerWidth || 0),
                    left: 0,
                    top: 0
                } : t.getBoundingClientRect(), s = a = 0, B && ((l = t._gsMaxScrollY - t.scrollTop) < 0 ? a = l : r > i.bottom - ve && l ? (I = !0, a = Math.min(l, c * (1 - Math.max(0, i.bottom - r) / ve) | 0)) : r < i.top + ge && t.scrollTop && (I = !0, a = -Math.min(t.scrollTop, c * (1 - Math.max(0, r - i.top) / ge) | 0)), a && (t.scrollTop += a)), R && ((l = t._gsMaxScrollX - t.scrollLeft) < 0 ? s = l : o > i.right - me && l ? (I = !0, s = Math.min(l, c * (1 - Math.max(0, i.right - o) / me) | 0)) : o < i.left + _e && t.scrollLeft && (I = !0, s = -Math.min(t.scrollLeft, c * (1 - Math.max(0, o - i.left) / _e) | 0)), s && (t.scrollLeft += s)), n && (s || a) && (Le.scrollTo(t.scrollLeft, t.scrollTop), we(N.pointerX + s, N.pointerY + a)), u = t
            }
            var d, p;
            T && (d = N.x, p = N.y, O ? (N.deltaX = d - parseFloat(V.rotation), N.rotation = d, V.rotation = d + "deg", V.renderTransform(1, V)) : g ? (B && (N.deltaY = p - g.top(), g.top(p)), R && (N.deltaX = d - g.left(), g.left(d))) : ue ? (B && (N.deltaY = p - parseFloat(V.y), V.y = p + "px"), R && (N.deltaX = d - parseFloat(V.x), V.x = d + "px"), V.renderTransform(1, V)) : (B && (N.deltaY = p - parseFloat(h.style.top || 0), h.style.top = p + "px"), R && (N.deltaX = d - parseFloat(h.style.left || 0), h.style.left = d + "px")), !J || e || oe || (!(oe = !0) === Me(N, "drag", "onDrag") && (R && (N.x -= N.deltaX), B && (N.y -= N.deltaY), f(!0)), oe = !1)), T = !1
        }

        function s(e, t) {
            var n, i, o = N.x,
                r = N.y;
            (V = h._gsap ? V : Pe.core.getCache(h)).uncache && Pe.getProperty(h, "x"), ue ? (N.x = parseFloat(V.x), N.y = parseFloat(V.y)) : O ? N.x = N.rotation = parseFloat(V.rotation) : g ? (N.y = g.top(), N.x = g.left()) : (N.y = parseFloat(h.style.top || (i = it(h)) && i.top) || 0, N.x = parseFloat(h.style.left || (i || {}).left) || 0), (E || k || te) && !t && (N.isDragging || N.isThrowing) && (te && (Et.x = N.x, Et.y = N.y, (n = te(Et)).x !== N.x && (N.x = n.x, T = !0), n.y !== N.y && (N.y = n.y, T = !0)), E && (n = E(N.x)) !== N.x && (N.x = n, O && (N.rotation = n), T = !0), k && ((n = k(N.y)) !== N.y && (N.y = n), T = !0)), T && f(!0), e || (N.deltaX = N.x - o, N.deltaY = N.y - r, Me(N, "throwupdate", "onThrowUpdate"))
        }

        function n(s, a, l, n) {
            return null == a && (a = -1e20), null == l && (l = 1e20), Se(s) ? function(e) {
                var t = N.isPressed ? 1 - N.edgeResistance : 1;
                return s.call(N, (l < e ? l + (e - l) * t : e < a ? a + (e - a) * t : e) * n) * n
            } : bt(s) ? function(e) {
                for (var t, n, i = s.length, o = 0, r = 1e20; - 1 < --i;)(n = (n = (t = s[i]) - e) < 0 ? -n : n) < r && a <= t && t <= l && (o = i, r = n);
                return s[o]
            } : isNaN(s) ? function(e) {
                return e
            } : function() {
                return s * n
            }
        }

        function l() {
            var e, t, s, r, a, l, u, c, d;
            x = !1, g ? (g.calibrate(), N.minX = w = -g.maxScrollLeft(), N.minY = S = -g.maxScrollTop(), N.maxX = D = N.maxY = C = 0, x = !0) : p.bounds && (t = rt(p.bounds, h.parentNode), O ? (N.minX = w = t.left, N.maxX = D = t.left + t.width, N.minY = S = N.maxY = C = 0) : Te(p.bounds.maxX) && Te(p.bounds.maxY) ? (e = rt(h, h.parentNode), N.minX = w = Math.round(o(ce, "px") + t.left - e.left), N.minY = S = Math.round(o(de, "px") + t.top - e.top), N.maxX = D = Math.round(w + (t.width - e.width)), N.maxY = C = Math.round(S + (t.height - e.height))) : (t = p.bounds, N.minX = w = t.minX, N.minY = S = t.minY, N.maxX = D = t.maxX, N.maxY = C = t.maxY), D < w && (N.minX = D, N.maxX = D = w, w = N.minX), C < S && (N.minY = C, N.maxY = C = S, S = N.minY), O && (N.minRotation = w, N.maxRotation = D), x = !0), p.liveSnap && (e = !0 === p.liveSnap ? p.snap || {} : p.liveSnap, t = bt(e) || Se(e), O ? (E = n(t ? e : e.rotation, w, D, 1), k = null) : e.points ? (s = t ? e : e.points, r = w, a = D, l = S, u = C, c = e.radius, d = g ? -1 : 1, c = c && c < 1e20 ? c * c : 1e20, te = Se(s) ? function(e) {
                var t, n = N.isPressed ? 1 - N.edgeResistance : 1,
                    i = e.x,
                    o = e.y;
                return e.x = i = a < i ? a + (i - a) * n : i < r ? r + (i - r) * n : i, e.y = o = u < o ? u + (o - u) * n : o < l ? l + (o - l) * n : o, (n = s.call(N, e)) !== e && (e.x = n.x, e.y = n.y), 1 !== d && (e.x *= d, e.y *= d), c < 1e20 && (n = e.x - i, t = e.y - o, c < n * n + t * t && (e.x = i, e.y = o)), e
            } : bt(s) ? function(e) {
                for (var t, n, i = s.length, o = 0, r = 1e20; - 1 < --i;)(n = (t = (n = s[i]).x - e.x) * t + (t = n.y - e.y) * t) < r && (o = i, r = n);
                return r <= c ? s[o] : e
            } : function(e) {
                return e
            }) : (R && (E = n(t ? e : e.x || e.left || e.scrollLeft, w, D, g ? -1 : 1)), B && (k = n(t ? e : e.y || e.top || e.scrollTop, S, C, g ? -1 : 1))))
        }

        function u() {
            N.isThrowing = !1, Me(N, "throwcomplete", "onThrowComplete")
        }

        function c() {
            N.isThrowing = !1
        }

        function Y(e, t) {
            var n, i;
            e && ze ? (!0 === e && (n = p.snap || p.liveSnap || {}, i = bt(n) || Se(n), e = {
                resistance: (p.throwResistance || p.resistance || 1e3) / (O ? 10 : 1)
            }, O ? e.rotation = st(N, i ? n : n.rotation, D, w, 1, t) : (R && (e[ce] = st(N, i ? n : n.points || n.x || n.left, D, w, g ? -1 : 1, t || "x" === N.lockedAxis)), B && (e[de] = st(N, i ? n : n.points || n.y || n.top, C, S, g ? -1 : 1, t || "y" === N.lockedAxis)), (n.points || bt(n) && je(n[0])) && (e.linkedProps = ce + "," + de, e.radius = n.radius))), N.isThrowing = !0, i = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - N.edgeResistance + .2 : p.overshootTolerance, e.duration || (e.duration = {
                max: Math.max(p.minDuration || 0, "maxDuration" in p ? p.maxDuration : 2),
                min: isNaN(p.minDuration) ? 0 === i || je(e) && 1e3 < e.resistance ? 0 : .5 : p.minDuration,
                overshoot: i
            }), N.tween = t = Pe.to(g || h, {
                inertia: e,
                data: "_draggable",
                onComplete: u,
                onInterrupt: c,
                onUpdate: p.fastMode ? Me : s,
                onUpdateParams: p.fastMode ? [N, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : []
            }), p.fastMode || (g && (g._skip = !0), t.render(1e9, !0, !0), s(!0, !0), N.endX = N.x, N.endY = N.y, O && (N.endRotation = N.x), t.play(0), s(!0, !0), g && (g._skip = !1))) : x && N.applyBounds()
        }

        function X(e) {
            var t = F;
            F = Xe(h.parentNode, !0), e && N.isPressed && !F.equals(t || new Ce) && (e = t.inverse().apply({
                x: v,
                y: _
            }), F.apply(e, e), v = e.x, _ = e.y), F.equals(Dt) && (F = null)
        }

        function j() {
            var e, t = 1 - N.edgeResistance,
                n = be ? Ze(q) : 0,
                i = be ? Qe(q) : 0;
            X(!1), Ve.x = N.pointerX - n, Ve.y = N.pointerY - i, F && F.apply(Ve, Ve), v = Ve.x, _ = Ve.y, T && (we(N.pointerX, N.pointerY), f(!0)), ae = Xe(h), g ? (l(), b = g.top(), y = g.left()) : (xe() ? (s(!0, !0), l()) : N.applyBounds(), O ? (e = h.ownerSVGElement ? [V.xOrigin - h.getBBox().x, V.yOrigin - h.getBBox().y] : (it(h)[yt] || "0 0").split(" "), $ = N.rotationOrigin = Xe(h).apply({
                x: parseFloat(e[0]) || 0,
                y: parseFloat(e[1]) || 0
            }), s(!0, !0), e = N.pointerX - $.x - n, n = $.y - N.pointerY + i, y = N.x, b = N.y = Math.atan2(n, e) * xt) : (b = o(de, "px"), y = o(ce, "px"))), x && t && (D < y ? y = D + (y - D) / t : y < w && (y = w - (w - y) / t), O || (C < b ? b = C + (b - C) / t : b < S && (b = S - (S - b) / t))), N.startX = y = Ee(y), N.startY = b = Ee(b)
        }

        function G() {
            !Be.parentNode || xe() || N.isDragging || Be.parentNode.removeChild(Be)
        }

        function W(e, t) {
            var n;
            if (!d || N.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || t) && Ie() - H < 30 && ht[N.pointerEvent.type]) L && e && d && Fe(e);
            else {
                if (ie = xe(), le = !1, N.pointerEvent = e, ht[e.type] ? (ke(A = ~e.type.indexOf("touch") ? e.currentTarget || e.target : q, "touchend", a), ke(A, "touchmove", De), ke(A, "touchcancel", a), ke(q, "touchstart", Je)) : (A = null, ke(q, "mousemove", De)), P = null, _t && A || (ke(q, "mouseup", a), e && e.target && ke(e.target, "mouseup", a)), ne = ye.call(N, e.target) && !1 === p.dragClickables && !t) return ke(e.target, "change", a), Me(N, "pressInit", "onPressInit"), Me(N, "press", "onPress"), lt(z, !0), void(L = !1);
                if (M = !(!A || R == B || !1 === N.vars.allowNativeTouchScrolling || N.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (R ? "y" : "x"), (L = !M && !N.allowEventDefault) && (Fe(e), ke(Le, "touchforcechange", Fe)), e.changedTouches ? (e = Z = e.changedTouches[0], m = e.identifier) : e.pointerId ? m = e.pointerId : Z = m = null, ft++, wt.push(f), 1 === wt.length && Pe.ticker.add(Ue), _ = N.pointerY = e.pageY, v = N.pointerX = e.pageX, Me(N, "pressInit", "onPressInit"), (M || N.autoScroll) && tt(h.parentNode), !h.parentNode || !N.autoScroll || g || O || !h.parentNode._gsMaxScrollX || Be.parentNode || h.getBBox || (Be.style.width = h.parentNode.scrollWidth + "px", h.parentNode.appendChild(Be)), j(), N.tween && N.tween.kill(), N.isThrowing = !1, Pe.killTweensOf(g || h, he, !0), g && Pe.killTweensOf(h, {
                        scrollTo: 1
                    }, !0), N.tween = N.lockedAxis = null, !p.zIndexBoost && (O || g || !1 === p.zIndexBoost) || (h.style.zIndex = qe.zIndex++), N.isPressed = !0, J = !(!p.onDrag && !N._listeners.drag), Q = !(!p.onMove && !N._listeners.move), !1 !== p.cursor || p.activeCursor)
                    for (n = z.length; - 1 < --n;) Pe.set(z[n], {
                        cursor: p.activeCursor || p.cursor || ("grab" === vt ? "grabbing" : vt)
                    });
                Me(N, "press", "onPress")
            }
        }

        function U(e) {
            var t, n;
            e && N.isDragging && !g && (t = (e = e.target || h.parentNode).scrollLeft - e._gsScrollX, n = e.scrollTop - e._gsScrollY, (t || n) && (F ? (v -= t * F.a + n * F.c, _ -= n * F.d + t * F.b) : (v -= t, _ -= n), e._gsScrollX += t, e._gsScrollY += n, we(N.pointerX, N.pointerY)))
        }

        function K(e) {
            var t = Ie(),
                n = t - H < 100,
                t = t - fe < 50,
                i = n && re === H,
                o = N.pointerEvent && N.pointerEvent.defaultPrevented,
                r = n && se === H,
                s = e.isTrusted || null == e.isTrusted && n && i;
            if ((i || t && !1 !== N.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), n && (!N.pointerEvent || !N.pointerEvent.defaultPrevented) && (!i || s && !r)) return s && i && (se = H), void(re = H);
            !(N.isPressed || t || n) || s && e.detail && n && !o || Fe(e), n || t || le || (e && e.target && (N.pointerEvent = e), Me(N, "click", "onClick"))
        }

        function i(e) {
            return F ? {
                x: e.x * F.a + e.y * F.c + F.e,
                y: e.x * F.b + e.y * F.d + F.f
            } : {
                x: e.x,
                y: e.y
            }
        }
        e = At.call(this) || this, dt || ct(1), h = Ne(h)[0], ze = ze || Pe.plugins.inertia, e.vars = p = Ge(p || {}), e.target = h, e.x = e.y = e.rotation = 0, e.dragResistance = parseFloat(p.dragResistance) || 0, e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0, e.lockAxis = p.lockAxis, e.autoScroll = p.autoScroll || 0, e.lockedAxis = null, e.allowEventDefault = !!p.allowEventDefault, Pe.getProperty(h, "x");
        var d, g, v, _, y, b, x, J, Q, D, w, C, S, Z, m, $, T, ee, E, k, te, ne, A, F, ie, M, P, oe, re, se, L, ae, le, t = (p.type || "x,y").toLowerCase(),
            ue = ~t.indexOf("x") || ~t.indexOf("y"),
            O = -1 !== t.indexOf("rotation"),
            ce = O ? "rotation" : ue ? "x" : "left",
            de = ue ? "y" : "top",
            R = !(!~t.indexOf("x") && !~t.indexOf("left") && "scroll" !== t),
            B = !(!~t.indexOf("y") && !~t.indexOf("top") && "scroll" !== t),
            pe = p.minimumMovement || 2,
            N = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e),
            z = Ne(p.trigger || p.handle || h),
            he = {},
            fe = 0,
            I = !1,
            ge = p.autoScrollMarginTop || 40,
            me = p.autoScrollMarginRight || 40,
            ve = p.autoScrollMarginBottom || 40,
            _e = p.autoScrollMarginLeft || 40,
            ye = p.clickableTest || at,
            H = 0,
            V = h._gsap || Pe.core.getCache(h),
            be = function e(t) {
                return "fixed" === it(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
            }(h),
            q = h.ownerDocument || Oe,
            xe = function() {
                return N.tween && N.tween.isActive()
            },
            De = function(e) {
                var t, n, i, o, r = e;
                if (d && !gt && N.isPressed && e) {
                    if (t = (N.pointerEvent = e).changedTouches) {
                        if ((e = t[0]) !== Z && e.identifier !== m) {
                            for (n = t.length; - 1 < --n && (e = t[n]).identifier !== m && e.target !== h;);
                            if (n < 0) return
                        }
                    } else if (e.pointerId && m && e.pointerId !== m) return;
                    A && M && !P && (Ve.x = e.pageX - (be ? Ze(q) : 0), Ve.y = e.pageY - (be ? Qe(q) : 0), F && F.apply(Ve, Ve), i = Ve.x, o = Ve.y, ((i = Math.abs(i - v)) !== (o = Math.abs(o - _)) && (pe < i || pe < o) || mt && M === P) && (P = o < i && R ? "x" : "y", M && P !== M && ke(Le, "touchforcechange", Fe), !1 !== N.vars.lockAxisOnTouchScroll && R && B && (N.lockedAxis = "x" === P ? "y" : "x", Se(N.vars.onLockAxis) && N.vars.onLockAxis.call(N, r)), mt && M === P)) ? a(r) : (L = N.allowEventDefault || M && (!P || M === P) || !1 === r.cancelable ? L && !1 : (Fe(r), !0), N.autoScroll && (I = !0), we(e.pageX, e.pageY, Q))
                } else L && e && d && Fe(e)
            },
            we = function(e, t, n) {
                var i, o, r, s = 1 - N.dragResistance,
                    a = 1 - N.edgeResistance,
                    l = N.pointerX,
                    u = N.pointerY,
                    c = b,
                    d = N.x,
                    p = N.y,
                    h = N.endX,
                    f = N.endY,
                    g = N.endRotation,
                    m = T;
                N.pointerX = e, N.pointerY = t, be && (e -= Ze(q), t -= Qe(q)), O ? (i = Math.atan2($.y - t, e - $.x) * xt, 180 < (o = N.y - i) ? (b -= 360, N.y = i) : o < -180 && (b += 360, N.y = i), o = N.x !== y || Math.abs(b - i) > pe ? (N.y = i, y + (b - i) * s) : y) : (F && (r = e * F.a + t * F.c + F.e, t = e * F.b + t * F.d + F.f, e = r), (t = t - _) < pe && -pe < t && (t = 0), (e = e - v) < pe && -pe < e && (e = 0), (N.lockAxis || N.lockedAxis) && (e || t) && ((r = N.lockedAxis) || (N.lockedAxis = r = R && Math.abs(e) > Math.abs(t) ? "y" : B ? "x" : null, r && Se(N.vars.onLockAxis) && N.vars.onLockAxis.call(N, N.pointerEvent)), "y" === r ? t = 0 : "x" === r && (e = 0)), o = Ee(y + e * s), i = Ee(b + t * s)), (E || k || te) && (N.x !== o || N.y !== i && !O) && (te && (Et.x = o, Et.y = i, o = Ee((r = te(Et)).x), i = Ee(r.y)), E && (o = Ee(E(o))), k && (i = Ee(k(i)))), x && (D < o ? o = D + Math.round((o - D) * a) : o < w && (o = w + Math.round((o - w) * a)), O || (C < i ? i = Math.round(C + (i - C) * a) : i < S && (i = Math.round(S + (i - S) * a)))), N.x === o && (N.y === i || O) || (O ? (N.endRotation = N.x = N.endX = o, T = !0) : (B && (N.y = N.endY = i, T = !0), R && (N.x = N.endX = o, T = !0)), n && !1 === Me(N, "move", "onMove") ? (N.pointerX = l, N.pointerY = u, b = c, N.x = d, N.y = p, N.endX = h, N.endY = f, N.endRotation = g, T = m) : !N.isDragging && N.isPressed && (N.isDragging = le = !0, Me(N, "dragstart", "onDragStart")))
            },
            a = function e(t, n) {
                if (d && N.isPressed && (!t || null == m || n || !(t.pointerId && t.pointerId !== m && t.target !== h || t.changedTouches && ! function(e, t) {
                        for (var n = e.length; n--;)
                            if (e[n].identifier === t) return 1
                    }(t.changedTouches, m)))) {
                    N.isPressed = !1;
                    var i, o, r, s, a = t,
                        l = N.isDragging,
                        u = N.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which),
                        c = Pe.delayedCall(.001, G);
                    if (A ? (Ae(A, "touchend", e), Ae(A, "touchmove", De), Ae(A, "touchcancel", e), Ae(q, "touchstart", Je)) : Ae(q, "mousemove", De), Ae(Le, "touchforcechange", Fe), _t && A || (Ae(q, "mouseup", e), t && t.target && Ae(t.target, "mouseup", e)), T = !1, l && (fe = Tt = Ie(), N.isDragging = !1), Ke(f), ne && !u) return t && (Ae(t.target, "change", e), N.pointerEvent = a), lt(z, !1), Me(N, "release", "onRelease"), Me(N, "click", "onClick"), void(ne = !1);
                    for (o = z.length; - 1 < --o;) nt(z[o], "cursor", p.cursor || (!1 !== p.cursor ? vt : null));
                    if (ft--, t) {
                        if ((i = t.changedTouches) && (t = i[0]) !== Z && t.identifier !== m) {
                            for (o = i.length; - 1 < --o && (t = i[o]).identifier !== m && t.target !== h;);
                            if (o < 0 && !n) return
                        }
                        N.pointerEvent = a, N.pointerX = t.pageX, N.pointerY = t.pageY
                    }
                    return u && a ? (Fe(a), L = !0, Me(N, "release", "onRelease")) : a && !l ? (L = !1, ie && (p.snap || p.bounds) && Y(p.inertia || p.throwProps), Me(N, "release", "onRelease"), mt && "touchmove" === a.type || -1 !== a.type.indexOf("cancel") || (Me(N, "click", "onClick"), Ie() - H < 300 && Me(N, "doubleclick", "onDoubleClick"), s = a.target || h, H = Ie(), mt || a.defaultPrevented || Pe.delayedCall(.05, function() {
                        H === re || !N.enabled() || N.isPressed || a.defaultPrevented || (s.click ? s.click() : q.createEvent && ((r = q.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, Le, 1, N.pointerEvent.screenX, N.pointerEvent.screenY, N.pointerX, N.pointerY, !1, !1, !1, !1, 0, null), s.dispatchEvent(r)))
                    }))) : (Y(p.inertia || p.throwProps), N.allowEventDefault || !a || !1 === p.dragClickables && ye.call(N, a.target) || !l || M && (!P || M !== P) || !1 === a.cancelable ? L = !1 : (L = !0, Fe(a)), Me(N, "release", "onRelease")), xe() && c.duration(N.tween.duration()), l && Me(N, "dragend", "onDragEnd"), !0
                }
                L && t && d && Fe(t)
            };
        return (ee = qe.get(h)) && ee.kill(), e.startDrag = function(e, t) {
            W(e || N.pointerEvent, !0), t && !N.hitTest(e || N.pointerEvent) && (t = ot(e || N.pointerEvent), e = ot(h), t = i({
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }), e = i({
                x: e.left + e.width / 2,
                y: e.top + e.height / 2
            }), v -= t.x - e.x, _ -= t.y - e.y), N.isDragging || (N.isDragging = le = !0, Me(N, "dragstart", "onDragStart"))
        }, e.drag = De, e.endDrag = function(e) {
            return a(e || N.pointerEvent, !0)
        }, e.timeSinceDrag = function() {
            return N.isDragging ? 0 : (Ie() - fe) / 1e3
        }, e.timeSinceClick = function() {
            return (Ie() - H) / 1e3
        }, e.hitTest = function(e, t) {
            return qe.hitTest(N.target, e, t)
        }, e.getDirection = function(e, t) {
            var n, i, o = "velocity" === e && ze ? e : je(e) && !O ? "element" : "start";
            return "element" === o && (n = ot(N.target), i = ot(e)), e = "start" === o ? N.x - y : "velocity" === o ? ze.getVelocity(h, ce) : n.left + n.width / 2 - (i.left + i.width / 2), O ? e < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2, o = "start" === o ? N.y - b : "velocity" === o ? ze.getVelocity(h, de) : n.top + n.height / 2 - (i.top + i.height / 2), i = (n = Math.abs(e / o)) < 1 / t ? "" : e < 0 ? "left" : "right", n < t && ("" !== i && (i += "-"), i += o < 0 ? "up" : "down"), i)
        }, e.applyBounds = function(e, t) {
            var n, i, o, r;
            if (e && p.bounds !== e) return p.bounds = e, N.update(!0, t);
            if (s(!0), l(), x && !xe()) {
                if (e = N.x, t = N.y, D < e ? e = D : e < w && (e = w), C < t ? t = C : t < S && (t = S), (N.x !== e || N.y !== t) && (n = !0, N.x = N.endX = e, O ? N.endRotation = e : N.y = N.endY = t, f(T = !0), N.autoScroll && !N.isDragging))
                    for (tt(h.parentNode), i = h, He.scrollTop = null != Le.pageYOffset ? Le.pageYOffset : (null != q.documentElement.scrollTop ? q.documentElement : q.body).scrollTop, He.scrollLeft = null != Le.pageXOffset ? Le.pageXOffset : (null != q.documentElement.scrollLeft ? q.documentElement : q.body).scrollLeft; i && !r;) o = (r = kt(i.parentNode)) ? He : i.parentNode, B && o.scrollTop > o._gsMaxScrollY && (o.scrollTop = o._gsMaxScrollY), R && o.scrollLeft > o._gsMaxScrollX && (o.scrollLeft = o._gsMaxScrollX), i = o;
                N.isThrowing && (n || N.endX > D || N.endX < w || N.endY > C || N.endY < S) && Y(p.inertia || p.throwProps, n)
            }
            return N
        }, e.update = function(e, t, n) {
            t && N.isPressed && (o = Xe(h), r = ae.apply({
                x: N.x - y,
                y: N.y - b
            }), (i = Xe(h.parentNode, !0)).apply({
                x: o.e - r.x,
                y: o.f - r.y
            }, r), N.x -= r.x - i.e, N.y -= r.y - i.f, f(!0), j());
            var i, o = N.x,
                r = N.y;
            return X(!t), e ? N.applyBounds() : (T && n && f(!0), s(!0)), t && (we(N.pointerX, N.pointerY), T && f(!0)), N.isPressed && !t && (R && .01 < Math.abs(o - N.x) || B && .01 < Math.abs(r - N.y) && !O) && j(), N.autoScroll && (tt(h.parentNode, N.isDragging), I = N.isDragging, f(!0), et(h, U), $e(h, U)), N
        }, e.enable = function(e) {
            var t, n, i = {
                lazy: !0
            };
            if (!1 !== p.cursor && (i.cursor = p.cursor || vt), Pe.utils.checkPrefix("touchCallout") && (i.touchCallout = "none"), "soft" !== e) {
                for (We(z, R == B ? "none" : p.allowNativeTouchScrolling && h.scrollHeight === h.clientHeight == (h.scrollWidth === h.clientHeight) || p.allowEventDefault ? "manipulation" : R ? "pan-y" : "pan-x"), t = z.length; - 1 < --t;) n = z[t], _t || ke(n, "mousedown", W), ke(n, "touchstart", W), ke(n, "click", K, !0), Pe.set(n, i), n.getBBox && n.ownerSVGElement && Pe.set(n.ownerSVGElement, {
                    touchAction: R == B ? "none" : p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : R ? "pan-y" : "pan-x"
                }), p.allowContextMenu || ke(n, "contextmenu", r);
                lt(z, !1)
            }
            return $e(h, U), d = !0, ze && "soft" !== e && ze.track(g || h, ue ? "x,y" : O ? "rotation" : "top,left"), h._gsDragID = e = "d" + St++, Ct[e] = N, g && (g.enable(), g.element._gsDragID = e), (p.bounds || O) && j(), p.bounds && N.applyBounds(), N
        }, e.disable = function(e) {
            for (var t, n = N.isDragging, i = z.length; - 1 < --i;) nt(z[i], "cursor", null);
            if ("soft" !== e) {
                for (We(z, null), i = z.length; - 1 < --i;) nt(t = z[i], "touchCallout", null), Ae(t, "mousedown", W), Ae(t, "touchstart", W), Ae(t, "click", K), Ae(t, "contextmenu", r);
                lt(z, !0), A && (Ae(A, "touchcancel", a), Ae(A, "touchend", a), Ae(A, "touchmove", De)), Ae(q, "mouseup", a), Ae(q, "mousemove", De)
            }
            return et(h, U), d = !1, ze && "soft" !== e && ze.untrack(g || h, ue ? "x,y" : O ? "rotation" : "top,left"), g && g.disable(), Ke(f), N.isDragging = N.isPressed = ne = !1, n && Me(N, "dragend", "onDragEnd"), N
        }, e.enabled = function(e, t) {
            return arguments.length ? e ? N.enable(t) : N.disable(t) : d
        }, e.kill = function() {
            return N.isThrowing = !1, N.tween && N.tween.kill(), N.disable(), Pe.set(z, {
                clearProps: "userSelect"
            }), delete Ct[h._gsDragID], N
        }, ~t.indexOf("scroll") && (g = e.scrollProxy = new ut(h, function(e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e
        }({
            onKill: function() {
                N.isPressed && a(null)
            }
        }, p)), h.style.overflowY = B && !pt ? "auto" : "hidden", h.style.overflowX = R && !pt ? "auto" : "hidden", h = g.content), O ? he.rotation = 1 : (R && (he[ce] = 1), B && (he[de] = 1)), V.force3D = !("force3D" in p) || p.force3D, e.enable(), e
    }
    var G, W = ge.prototype,
        U = {
            pointerX: 0,
            pointerY: 0,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            isDragging: !1,
            isPressed: !1
        };
    for (G in U) G in W || (W[G] = U[G]);

    function K() {
        return "undefined" != typeof window
    }

    function J() {
        return ye || K() && (ye = window.gsap) && ye.registerPlugin && ye
    }

    function me(e) {
        return "string" == typeof e
    }

    function Q(e) {
        return void 0 === e
    }

    function Ft(e, t, n) {
        var i = be.createElementNS ? be.createElementNS("svg" === e ? $ : ee, e) : be.createElement(e);
        return t && (t = me(t) ? be.querySelector(t) : t).appendChild(i), "svg" === e && (i.setAttribute("xmlns", $), i.setAttribute("xmlns:xlink", ee)), n && (i.style.cssText = n), i
    }

    function Mt() {
        be.selection ? be.selection.empty() : Z.getSelection && Z.getSelection().removeAllRanges()
    }

    function Pt(e, t) {
        var n = 0,
            i = Math.max(0, e._repeat),
            o = e._first;
        for (o || (n = e.duration()); o;) n = Math.max(n, 999 < o.totalDuration() ? o.endTime(!1) : o._start + o._tDur / o._ts), o = o._next;
        return !t && i ? n * (i + 1) + e._rDelay * i : n
    }

    function Lt(e, t, n, i) {
        var o;
        return me(e) && ("=" === e.charAt(1) ? e = (i = (o = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === i ? 100 : i) / 100 * t.duration() + o : isNaN(e) && t.labels && -1 !== t.labels[e] ? e = t.labels[e] : t === xe && (0 < (i = e.indexOf("=")) ? (o = parseInt(e.charAt(i - 1) + "1", 10) * parseFloat(e.substr(i + 1)), e = e.substr(0, i - 1)) : o = 0, (i = ye.getById(e)) && (e = function(e, t) {
            for (var n = e, i = 1 < arguments.length ? +t : n.rawTime(); n;) i = n._start + i / (n._ts || 1), n = n.parent;
            return i
        }(i, n / 100 * i.duration()) + o))), e = isNaN(e) ? n : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
    }

    function ve(t, e, n, i) {
        var o, r;
        if ("mousedown" !== e && "mouseup" !== e || (t.style.cursor = "pointer"), "mousedown" === e && (r = Q(t.onpointerdown) ? Q(t.ontouchstart) ? null : "touchstart" : "pointerdown")) return t.addEventListener(r, o = function(e) {
            "select" !== e.target.nodeName.toLowerCase() && e.type === r ? (e.stopPropagation(), te && (e.preventDefault(), n.call(t, e))) : e.type !== r && n.call(t, e), te = !0
        }, i), "pointerdown" !== r && t.addEventListener(e, o, i);
        t.addEventListener(e, n, i)
    }

    function _e(e, t, n) {
        e.removeEventListener(t, n), (t = "mousedown" !== t ? null : Q(e.onpointerdown) ? Q(e.ontouchstart) ? null : "touchstart" : "pointerdown") && e.removeEventListener(t, n)
    }

    function Ot(e, t, n, i) {
        var o, r = e.options,
            s = r.length;
        for (t += ""; - 1 < --s;)
            if (r[s].innerHTML === t || r[s].value === t) return e.selectedIndex = s, n.innerHTML = r[s].innerHTML, r[s];
        i && ((o = Ft("option", e)).setAttribute("value", t), o.innerHTML = n.innerHTML = me(i) ? i : t, e.selectedIndex = r.length - 1)
    }

    function Rt(e, t, n) {
        var i = e.options,
            t = Math.min(i.length - 1, Math.max(0, e.selectedIndex + t));
        return e.selectedIndex = t, n && (n.innerHTML = i[t].innerHTML), i[t].value
    }

    function Bt() {
        var e, t, n, i = o._first;
        if (we) {
            for (e = xe._dur; i;) t = i._next, "function" == typeof(n = i._targets && i._targets[0]) && n === i.vars.onComplete && !i._dur || n && n._gsIgnore || xe.add(i, i._start - i._delay), i = t;
            return e !== xe.duration()
        }
    }

    function Nt(e) {
        return ye.getById(e) || Ye.getById(e) || e === xe.vars.id && xe
    }

    function zt(e) {
        ye = e || J(), Ht || ye && K() && (be = document, Vt = be.documentElement, Z = window, ye.registerPlugin(ge), (o = ye.globalTimeline)._sort = !0, o.autoRemoveChildren = !1, qt = ye.core.Animation, (Ye = ye.timeline({
            data: "indy",
            autoRemoveChildren: !0,
            smoothChildTiming: !0
        })).kill(), Ye._dp = 0, Ye.to({}, {
            duration: 1e12
        }), xe = ye.timeline({
            data: "root",
            id: "Global Timeline",
            autoRemoveChildren: !1,
            smoothChildTiming: !0,
            parent: Ye
        }, 0), De = ye.to(xe, {
            duration: 1,
            time: 1,
            ease: "none",
            data: "root",
            id: "_rootTween",
            paused: !0,
            immediateRender: !1,
            parent: Ye
        }, 0), o.killTweensOf = function(e, t, n) {
            xe.killTweensOf(e, t, n), xe.killTweensOf.call(o, e, t, n)
        }, Ye._start = ye.ticker.time, ye.ticker.add(function(e) {
            return Ye.render(e - Ye._start)
        }), o._start += o._time, xe._start = o._time = o._tTime = 0, (Xt = function(e, t, n, i) {
            return ye.to(t, {
                delay: e,
                duration: 0,
                onComplete: t,
                onReverseComplete: t,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i,
                parent: Ye
            }, Ye._time)
        })(.01, function() {
            return we ? we.update() : Bt()
        }), Xt(2, function() {
            var e, t, n;
            if (!we)
                for (Bt(), e = xe._first, n = xe._start; e;) t = e._next, e._tDur !== e._tTime || !e._dur && 1 !== e.progress() ? o.add(e, e._start - e._delay + n) : e.kill(), e = t;
            2 < i.globalRecordingTime ? Xt(i.globalRecordingTime - 2, function() {
                we && we.update(), o.autoRemoveChildren = !0
            }) : o.autoRemoveChildren = !0, Gt = !1
        }), Ht = 1)
    }

    function It(e, t) {
        t.globalSync || e.parent === o || o.add(e, o.time())
    }
    ge.zIndex = 1e3, ge.version = "3.11.0", A() && Pe.registerPlugin(ge);
    var ye, Ht, be, Vt, Z, xe, qt, De, we, Yt, o, Ye, Xt, jt, Gt = !0,
        Wt = 0,
        $ = "http://www.w3.org/2000/svg",
        ee = "http://www.w3.org/1999/xhtml",
        Ut = 0,
        Kt = {},
        Jt = function() {
            try {
                return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0
            } catch (e) {
                return !1
            }
        }(),
        te = !0,
        i = function B(r) {
            function e(e) {
                return b.querySelector(e)
            }

            function i(e, t) {
                !1 !== r.persist && Jt && sessionStorage.setItem("gs-dev-" + e + r.id, t)
            }

            function o(e) {
                var t;
                if (!1 !== r.persist && Jt) return t = sessionStorage.getItem("gs-dev-" + e + r.id), "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
            }

            function N(a, l, u) {
                return function(e) {
                    var t, n = te.getBoundingClientRect(),
                        i = a.getBoundingClientRect(),
                        o = i.width * l,
                        r = ye.getProperty(a, "x"),
                        s = n.left - i.left - o + r,
                        i = n.right - i.right + (i.width - o) + r,
                        o = s;
                    u && (a !== w && (t = w.getBoundingClientRect()).left && (s += t.left + t.width - n.left), a !== C && (t = C.getBoundingClientRect()).left && (i -= n.left + n.width - t.left)), J = A, this.applyBounds({
                        minX: s,
                        maxX: i
                    }), c = h.duration() / n.width, d = -o * c, p ? h.pause() : h.pause(d + c * this.x), this.target === x && (this.activated && (this.allowEventDefault = !1), this.activated = !0), K = !0
                }
            }

            function z() {
                S = 0, T = 100, w.style.left = "0%", C.style.left = "100%", i("in", S), i("out", T), L(!0)
            }

            function I(e) {
                var t;
                if (!P.isPressed) return t = e.target.getBoundingClientRect(), (t = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100) < S ? (S = t = Math.max(0, t), w.style.left = S + "%", void ue.startDrag(e)) : T < t ? (T = t = Math.min(100, t), C.style.left = T + "%", void ce.startDrag(e)) : (h.progress(t / 100).pause(), L(!0), void P.startDrag(e))
            }

            function H() {
                var e;
                P.isPressed || (It(h, r), (e = h._targets && h._targets[0]) === l && e.seek(f + (g - f) * S / 100), h.progress(S / 100, !0), A || h.resume())
            }

            function V(e) {
                i("loop", m = e), m ? (ae.play(), h.progress() >= T / 100 && ((e = h._targets && h._targets[0]) === l && e.seek(f + (g - f) * S / 100), l._repeat && !S && 100 === T ? h.totalProgress(0, !0) : h.progress(S / 100, !0), O())) : ae.reverse()
            }

            function q() {
                return V(!m)
            }

            function s() {
                var e, t, n = function e(t, n) {
                        for (var i = [], o = 0, r = ye.core.Tween, s = t._first; s;) s instanceof r ? s.vars.id && (i[o++] = s) : (n && s.vars.id && (i[o++] = s), o = (i = i.concat(e(s, n))).length), s = s._next;
                        return i
                    }(u && !r.globalSync ? u : xe, !0),
                    i = E.children,
                    o = 0;
                for (u && !r.globalSync ? n.unshift(u) : r.hideGlobalTimeline || n.unshift(xe), t = 0; t < n.length; t++)(e = i[t] || Ft("option", E)).animation = n[t], o = t && n[t].vars.id === n[t - 1].vars.id ? o + 1 : 0, e.setAttribute("value", e.innerHTML = n[t].vars.id + (o ? " [" + o + "]" : n[t + 1] && n[t + 1].vars.id === n[t].vars.id ? " [0]" : ""));
                for (; t < i.length; t++) E.removeChild(i[t])
            }

            function a(e) {
                var t, n = parseFloat(M.options[M.selectedIndex].value) || 1;
                if (!arguments.length) return l;
                if ((e = me(e) ? Nt(e) : e) instanceof qt || console.warn("GSDevTools error: invalid animation."), e.scrollTrigger && console.warn("GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."), e !== l) {
                    if (l && (l._inProgress = S, l._outProgress = T), l = e, h && (n = h.timeScale(), h._targets && h._targets[0] === u && (u.resume(), h.kill())), S = l._inProgress || 0, T = l._outProgress || 100, w.style.left = S + "%", C.style.left = T + "%", Q && (i("animation", l.vars.id), i("in", S), i("out", T)), f = 0, e = r.maxDuration || Math.min(1e3, Pt(l)), l === xe || r.globalSync) {
                        if (Bt(), h = De, we && we !== y && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), we = y, l !== xe)
                            for (99999999 < (g = (t = l).totalDuration()) && (g = t.duration()); t.parent;) f = f / t._ts + t._start, g = g / t._ts + t._start, t = t.parent;
                        else g = xe.duration();
                        e < g - f && (g = f + e), xe.pause(f), De.vars.time = g, De.invalidate(), De.duration(g - f).timeScale(n), A ? De.progress(1, !0).pause(0, !0) : Xt(.01, function() {
                            De.resume().progress(S / 100), A && O()
                        })
                    } else {
                        if (we === y && (we = null), f = Math.min(S * l.duration(), l.time()), l !== u && u) {
                            for (99999999 < (g = (t = l).totalDuration()) && (g = t.duration()); t.parent.parent && t !== u;) f = f / (t._ts || t._pauseTS) + t._start, g = g / (t._ts || t._pauseTS) + t._start, t = t.parent;
                            e < g - f && (g = f + e), u.pause(f), h = ye.to(u, {
                                duration: g - f,
                                time: g,
                                ease: "none",
                                data: "root",
                                parent: Ye
                            }, Ye._time)
                        } else h = l, !m && h._repeat && V(!0);
                        h.timeScale(n), De.pause(), xe.resume(), h.seek(0)
                    }
                    ie.innerHTML = h.duration().toFixed(2), Ot(E, l.vars.id, re)
                }
            }

            function Y(e) {
                a(E.options[E.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), A && O()
            }

            function X() {
                var e, t = parseFloat(M.options[M.selectedIndex].value) || 1;
                h.timeScale(t), i("timeScale", t), A || (h.progress() >= T / 100 ? ((e = h._targets && h._targets[0]) === l && e.seek(f + (g - f) * S / 100), h.progress(S / 100, !0).pause()) : h.pause(), Xt(.01, function() {
                    return h.resume()
                })), le.innerHTML = t + "x", M.blur && M.blur()
            }

            function j(e) {
                ge.hitTest(e, b) || P.isDragging || ue.isDragging || ce.isDragging || fe.restart(!0)
            }

            function G() {
                R || (he.play(), fe.pause(), R = !0)
            }

            function W() {
                fe.pause(), R && (he.reverse(), R = !1)
            }

            function U(e) {
                Gt && !Wt && (Wt = xe._start), Q = !e, e = r.animation, (u = e instanceof qt ? e : e ? ye.getById(e) : null) && !u.vars.id && (u.vars.id = "[no id]"), Bt(), s();
                var e = Nt(o("animation")),
                    t = (e && (e._inProgress = o("in") || 0, e._outProgress = o("out") || 100), r.paused && de(), l = null, a(u || e || xe), r.timeScale || o("timeScale")),
                    n = e === l;
                t && (Ot(M, t, le, t + "x"), h.timeScale(t)), 100 === (S = ("inTime" in r ? Lt(r.inTime, l, 0, 0) : n ? e._inProgress : 0) || 0) && !r.animation && e && (a(xe), S = Lt(r.inTime, l, 0, 0) || 0), S && (w.style.left = S + "%", w.style.display = C.style.display = "block"), 100 !== (T = (T = ("outTime" in r ? Lt(r.outTime, l, 100, S) : n ? e._outProgress : 0) || 100) < S ? 100 : T) && (C.style.left = T + "%", w.style.display = C.style.display = "block"), (m = "loop" in r ? r.loop : o("loop")) && V(!0), r.paused && h.progress(S / 100, !0).pause(), Gt && l === xe && Wt && r.globalSync && !A && h.time(-Wt, !0), L(!0)
            }
            Ht || (zt(), ye || console.warn("Please gsap.registerPlugin(GSDevTools)")), this.vars = r = r || {}, r.animation && (B.getByAnimation(r.animation) || {
                kill: function() {
                    return 0
                }
            }).kill(), r.id = r.id || (me(r.animation) ? r.animation : Ut++), Kt[r.id + ""] = this, "globalSync" in r || (r.globalSync = !r.animation);
            var c, d, K, p, J, l, h, u, f, g, Q, Z, m, $, ee, t, n, v, _, y = this,
                b = (t = r.container, n = r.minimal, v = r.css, jt || (Ft("style", Vt).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", jt = !0), (_ = Ft("div", (t = me(t) ? be.querySelector(t) : t) || Vt.getElementsByTagName("body")[0] || Vt)).setAttribute("class", "gs-dev-tools" + (n ? " minimal" : "")), _.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', t && (_.style.position = "absolute", _.style.top = n ? "calc(100% - 42px)" : "calc(100% - 51px)"), v && (me(v) ? _.style.cssText = v : "object" == typeof v && (v.data = "root", ye.set(_, v).kill()), _.style.top && (_.style.bottom = "auto"), _.style.width && ye.set(_, {
                    xPercent: -50,
                    left: "50%",
                    right: "auto",
                    data: "root"
                }).kill()), !n && _.offsetWidth < 600 && (_.setAttribute("class", "gs-dev-tools minimal"), t && (_.style.top = "calc(100% - 42px)")), _),
                x = e(".playhead"),
                te = e(".timeline-track"),
                D = e(".progress-bar"),
                ne = e(".time"),
                ie = e(".duration"),
                oe = 0,
                w = e(".in-point"),
                C = e(".out-point"),
                S = 0,
                T = 100,
                E = e(".animation-list"),
                re = e(".animation-label"),
                k = e(".play-pause"),
                se = (v = k, (ee = ye.timeline({
                    data: "root",
                    parent: Ye,
                    onComplete: function() {
                        return ee.kill()
                    }
                }, Ye._time)).to(v.querySelector(".play-1"), {
                    duration: .4,
                    attr: {
                        d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                    },
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }).to(v.querySelector(".play-2"), {
                    duration: .4,
                    attr: {
                        d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                    },
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }, .05), ee),
                A = !1,
                F = e(".loop"),
                ae = (n = F, ($ = ye.timeline({
                    data: "root",
                    id: "loop",
                    parent: Ye,
                    paused: !0,
                    onComplete: function() {
                        return $.kill()
                    }
                }, Ye._time)).to(n, {
                    duration: .5,
                    rotation: 360,
                    ease: "power3.inOut",
                    transformOrigin: "50% 50%"
                }).to(n.querySelectorAll(".loop-path"), {
                    duration: .5,
                    fill: "#91e600",
                    ease: "none"
                }, 0), $),
                M = e(".time-scale select"),
                le = e(".time-scale-label"),
                P = ge.create(x, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: N(x, .5, !0),
                    onDrag: function() {
                        var e = d + c * this.x;
                        e < 0 ? e = 0 : e > h._dur && (e = h._dur), p || h.time(e), D.style.width = Math.min(T - S, Math.max(0, e / h._dur * 100 - S)) + "%", ne.innerHTML = e.toFixed(2)
                    },
                    onRelease: function() {
                        A || h.resume()
                    }
                })[0],
                ue = ge.create(w, {
                    type: "x",
                    cursor: "ew-resize",
                    zIndexBoost: !1,
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: N(w, 1, !0),
                    onDoubleClick: z,
                    onDrag: function() {
                        S = (d + c * this.x) / h.duration() * 100, h.progress(S / 100), L(!0)
                    },
                    onRelease: function() {
                        S < 0 && (S = 0), Mt(), w.style.left = S + "%", i("in", S), ye.set(w, {
                            x: 0,
                            data: "root",
                            display: "block"
                        }), A || h.resume()
                    }
                })[0],
                ce = ge.create(C, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    zIndexBoost: !1,
                    onPress: N(C, 0, !0),
                    onDoubleClick: z,
                    onDrag: function() {
                        T = (d + c * this.x) / h.duration() * 100, h.progress(T / 100), L(!0)
                    },
                    onRelease: function() {
                        100 < T && (T = 100), Mt(), C.style.left = T + "%", i("out", T), ye.set(C, {
                            x: 0,
                            data: "root",
                            display: "block"
                        }), J || (O(), h.resume())
                    }
                })[0],
                L = function(e) {
                    var t, n;
                    P.isPressed && !0 !== e || (t = m || -1 !== l._repeat ? 100 * h.progress() || 0 : l.totalTime() / l.duration() * 100, n = l._repeat && l._rDelay && l.totalTime() % (l.duration() + l._rDelay) > l.duration(), T <= (t = 100 < t ? 100 : t) ? !m || h.paused() || P.isDragging ? (t === T && -1 !== l._repeat || (t = T, h.progress(t / 100)), !A && (T < 100 || 1 === l.totalProgress() || -1 === l._repeat) && de()) : n || (t = S, (n = h._targets && h._targets[0]) === l && n.seek(f + (g - f) * S / 100), 0 < l._repeat && !S && 100 === T ? 1 === l.totalProgress() && h.totalProgress(0, !0).resume() : h.progress(t / 100, !0).resume()) : t < S && (t = S, h.progress(t / 100, !0)), t === oe && !0 !== e || (D.style.left = S + "%", D.style.width = Math.max(0, t - S) + "%", x.style.left = t + "%", ne.innerHTML = h._time.toFixed(2), ie.innerHTML = h._dur.toFixed(2), K && (x.style.transform = "translate(-50%,0)", x._gsap.x = "0px", x._gsap.xPercent = -50, K = !1), oe = t), h.paused() !== A && pe())
                },
                O = function() {
                    var e;
                    h.progress() >= T / 100 && (It(h, r), (e = h._targets && h._targets[0]) === l && e.seek(f + (g - f) * S / 100), h._repeat && !S ? h.totalProgress(0, !0) : h.reversed() || h.progress(S / 100, !0)), se.play(), h.resume(), A && y.update(), A = !1
                },
                de = function() {
                    se.reverse(), h && h.pause(), A = !0
                },
                pe = function() {
                    (A ? O : de)()
                },
                he = ye.to([e(".gs-bottom"), e(".gs-top")], {
                    duration: .3,
                    autoAlpha: 0,
                    y: 50,
                    ease: "power2.in",
                    data: "root",
                    paused: !0,
                    parent: Ye
                }, Ye._time),
                R = !1,
                fe = Xt(1.3, G).pause();
            ve(E, "change", Y), ve(E, "mousedown", s), ve(k, "mousedown", pe), ve(e(".seek-bar"), "mousedown", I), ve(e(".rewind"), "mousedown", H), ve(F, "mousedown", q), ve(M, "change", X), "auto" === r.visibility ? (ve(b, "mouseout", j), ve(b, "mouseover", W)) : "hidden" === r.visibility && (R = !0, he.progress(1)), !1 !== r.keyboard && (Yt && r.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (Yt = y, ve(Vt, "keydown", Z = function(e) {
                var t, e = e.keyCode || e.which;
                32 === e ? pe() : 38 === e ? (t = parseFloat(Rt(M, -1, le)), h.timeScale(t), i("timeScale", t)) : 40 === e ? (t = parseFloat(Rt(M, 1, le)), h.timeScale(t), i("timeScale", t)) : 37 === e ? H() : 39 === e ? h.progress(T / 100) : 76 === e ? q() : 72 === e ? (R ? W : G)() : 73 === e ? (i("in", S = 100 * h.progress()), w.style.left = S + "%", L(!0)) : 79 === e && (i("out", T = 100 * h.progress()), C.style.left = T + "%", L(!0))
            }))), ye.set(x, {
                xPercent: -50,
                x: 0,
                data: "root"
            }), ye.set(w, {
                xPercent: -100,
                x: 0,
                data: "root"
            }), w._gsIgnore = C._gsIgnore = x._gsIgnore = k._gsIgnore = F._gsIgnore = !0, ye.killTweensOf([w, C, x]), U(Gt), Gt && Xt(1e-4, U, [!1], this), ye.ticker.add(L), this.update = function(e) {
                var t, n;
                we === y && (De.paused() && !e || Bt(), l === xe && (e = xe._time, xe.progress(1, !0).time(e, !0), e = (De._dp._time - De._start) * De._ts, 1e3 === (n = Math.min(1e3, xe.duration())) && (n = Math.min(1e3, Pt(xe))), 1 != (t = De.duration() / n) && n && (S *= t, T < 100 && (T *= t), De.seek(0), De.vars.time = n, De.invalidate(), De.duration(n), De.time(e), ie.innerHTML = n.toFixed(2), w.style.left = S + "%", C.style.left = T + "%", L(!0))))
            }, this.kill = function() {
                _e(E, "change", Y), _e(E, "mousedown", s), _e(k, "mousedown", pe), _e(e(".seek-bar"), "mousedown", I), _e(e(".rewind"), "mousedown", H), _e(F, "mousedown", q), _e(M, "change", X), P.disable(), ue.disable(), ce.disable(), ye.ticker.remove(L), _e(b, "mouseout", j), _e(b, "mouseover", W), b.parentNode.removeChild(b), we === y && (we = null), Yt === y && (Yt = null, _e(Vt, "keydown", Z)), delete Kt[r.id + ""]
            }, this.minimal = function(e) {
                var t = b.classList.contains("minimal");
                if (!arguments.length || t === e) return t;
                e ? b.classList.add("minimal") : b.classList.remove("minimal"), r.container && (b.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"), P.isPressed && (p = !0, P.endDrag(P.pointerEvent), p = !1, t = 100 * h.progress(), D.style.width = Math.max(0, t - S) + "%", x.style.left = t + "%", x.style.transform = "translate(-50%,0)", x._gsap.x = "0px", x._gsap.xPercent = -50, P.startDrag(P.pointerEvent, !0))
            }, this.animation = a, this.updateList = s
        };
    i.version = "3.11.0", i.globalRecordingTime = 2, i.getById = function(e) {
        return e ? Kt[e] : we
    }, i.getByAnimation = function(e) {
        for (var t in me(e) && (e = ye.getById(e)), Kt)
            if (Kt[t].animation() === e) return Kt[t]
    }, i.create = function(e) {
        return new i(e)
    }, i.register = zt, J() && ye.registerPlugin(i), t.GSDevTools = i, t.default = i, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
});
let userAgentString = navigator.userAgent,
    chromeAgent = -1 < userAgentString.indexOf("Chrome"),
    safariAgent = -1 < userAgentString.indexOf("Safari");
if (chromeAgent && safariAgent && (safariAgent = !1), !is_touch_enabled()) {
    let e = document.querySelectorAll(".--btn-svg-hover");
    e.forEach(e => {
        constructBtnHover(e)
    })
}

function constructBtnHover(e) {
    let t = gsap.timeline().pause();
    e.querySelector("#btn-background") && gsap.set(e.querySelector("#btn-background"), {
        opacity: 0
    }, "<"), t.to(e.querySelector("#btn-start-1"), {
        duration: .5,
        ease: "power1.out",
        morphSVG: e.querySelector("#btn-mid-1")
    }), e.querySelector("#btn-mid-2") && t.to(e.querySelector("#btn-start-2"), {
        duration: .5,
        ease: "power1.out",
        morphSVG: e.querySelector("#btn-mid-2")
    }, "<"), e.querySelector("#btn-background") && t.fromTo(e.querySelector("#btn-background"), {
        opacity: 0
    }, {
        opacity: 1,
        duration: .5,
        ease: "power1.out"
    }, "<"), e.addEventListener("mouseenter", function() {
        t.restart()
    }), e.addEventListener("mouseleave", function() {
        t.timeScale(1.5).reverse()
    })
}
if (! function() {
        "use strict";
        var e = "initCookieConsent";
        "undefined" != typeof window && "function" != typeof window[e] && (window[e] = function(_) {
            function y(e) {
                var t;
                "number" == typeof(I = e).cookie_expiration && (b.cookie_expiration = I.cookie_expiration), "number" == typeof I.cookie_necessary_only_expiration && (b.cookie_necessary_only_expiration = I.cookie_necessary_only_expiration), "boolean" == typeof I.autorun && (b.autorun = I.autorun), "string" == typeof I.cookie_domain && (b.cookie_domain = I.cookie_domain), "string" == typeof I.cookie_same_site && (b.cookie_same_site = I.cookie_same_site), "string" == typeof I.cookie_path && (b.cookie_path = I.cookie_path), "string" == typeof I.cookie_name && (b.cookie_name = I.cookie_name), "function" == typeof I.onAccept && (T = I.onAccept), "function" == typeof I.onFirstAction && (k = I.onFirstAction), "function" == typeof I.onChange && (E = I.onChange), "opt-out" === I.mode && (b.mode = "opt-out"), "number" == typeof I.revision && (-1 < I.revision && (b.revision = I.revision), O = !0), "boolean" == typeof I.autoclear_cookies && (b.autoclear_cookies = I.autoclear_cookies), !0 === I.use_rfc_cookie && (b.use_rfc_cookie = !0), "boolean" == typeof I.hide_from_bots && (b.hide_from_bots = I.hide_from_bots), b.hide_from_bots && (N = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver)), b.page_scripts = !0 === I.page_scripts, "browser" === I.auto_language || !0 === I.auto_language ? b.auto_language = "browser" : "document" === I.auto_language && (b.auto_language = "document"), b.auto_language, b.current_lang = (e = I.languages, t = I.current_lang, "browser" === b.auto_language ? o(pe(), e) : "document" === b.auto_language ? o(document.documentElement.lang, e) : "string" == typeof t ? b.current_lang = o(t, e) : (b.current_lang, b.current_lang))
            }

            function D(t) {
                for (var e = "accept-", n = a("c-settings"), i = a(e + "all"), o = a(e + "necessary"), r = a(e + "custom"), s = 0; s < n.length; s++) n[s].setAttribute("aria-haspopup", "dialog"), oe(n[s], "click", function(e) {
                    e.preventDefault(), Q.showSettings(0)
                });
                for (s = 0; s < i.length; s++) oe(i[s], "click", function(e) {
                    l(e, "all")
                });
                for (s = 0; s < r.length; s++) oe(r[s], "click", function(e) {
                    l(e)
                });
                for (s = 0; s < o.length; s++) oe(o[s], "click", function(e) {
                    l(e, [])
                });

                function a(e) {
                    return (t || document).querySelectorAll('a[data-cc="' + e + '"], button[data-cc="' + e + '"]')
                }

                function l(e, t) {
                    e.preventDefault(), Q.accept(t), Q.hideSettings(), Q.hide()
                }
            }

            function w(e) {
                !0 === I.force_consent && re(de, "force--consent"), a || (a = ie("div"), t = ie("div"), n = ie("div"), a.id = "cm", t.id = "c-inr-i", n.id = "cm-ov", a.setAttribute("role", "dialog"), a.setAttribute("aria-modal", "true"), a.setAttribute("aria-hidden", "false"), a.setAttribute("aria-labelledby", "c-ttl"), a.setAttribute("aria-describedby", "c-txt"), se.appendChild(a), se.appendChild(n), a.style.visibility = n.style.visibility = "hidden", n.style.opacity = 0);
                (n = I.languages[e].consent_modal.title) && (l || ((l = ie("div")).id = "c-ttl", l.setAttribute("role", "heading"), l.setAttribute("aria-level", "2"), t.appendChild(l)), l.innerHTML = n);
                var t, n = I.languages[e].consent_modal.description;
                O && (n = R ? n.replace("{{revision_message}}", "") : n.replace("{{revision_message}}", I.languages[e].consent_modal.revision_message || "")), F || ((F = ie("div")).id = "c-txt", t.appendChild(F)), F.innerHTML = n;
                var i, n = I.languages[e].consent_modal.primary_btn,
                    o = I.languages[e].consent_modal.secondary_btn,
                    e = (n && (p || ((p = ie("button")).id = "c-p-bn", p.className = "c-bn", "accept_all" === n.role && (i = "all"), oe(p, "click", function() {
                        Q.hide(), Q.accept(i)
                    })), p.innerHTML = I.languages[e].consent_modal.primary_btn.text), o && (h || ((h = ie("button")).id = "c-s-bn", h.className = "c-bn c_link", "accept_necessary" === o.role ? oe(h, "click", function() {
                        Q.hide(), Q.accept([])
                    }) : oe(h, "click", function() {
                        Q.showSettings(0)
                    })), h.innerHTML = I.languages[e].consent_modal.secondary_btn.text), I.gui_options);
                g || ((g = ie("div")).id = "c-inr", g.appendChild(t)), f || ((f = ie("div")).id = "c-bns", e && e.consent_modal && !0 === e.consent_modal.swap_buttons ? (o && f.appendChild(h), n && f.appendChild(p), f.className = "swap") : (n && f.appendChild(p), o && f.appendChild(h)), (n || o) && g.appendChild(f), a.appendChild(g)), v = !0, D(g)
            }

            function C(e) {
                q ? (G = ie("div")).id = "s-bl" : (q = ie("div"), t = ie("div"), n = ie("div"), i = ie("div"), Y = ie("div"), ae = ie("div"), o = ie("div"), X = ie("button"), r = ie("div"), j = ie("div"), s = ie("div"), q.id = "s-cnt", t.id = "c-vln", i.id = "c-s-in", n.id = "cs", ae.id = "s-ttl", Y.id = "s-inr", o.id = "s-hdr", j.id = "s-bl", X.id = "s-c-bn", s.id = "cs-ov", r.id = "s-c-bnc", X.className = "c-bn", q.setAttribute("role", "dialog"), q.setAttribute("aria-modal", "true"), q.setAttribute("aria-hidden", "true"), q.setAttribute("aria-labelledby", "s-ttl"), ae.setAttribute("role", "heading"), q.style.visibility = s.style.visibility = "hidden", s.style.opacity = 0, r.appendChild(X), oe(t, "keydown", function(e) {
                    27 === (e = e || window.event).keyCode && Q.hideSettings(0)
                }, !0), oe(X, "click", function() {
                    Q.hideSettings(0)
                })), X.setAttribute("aria-label", I.languages[e].settings_modal.close_btn_label || "Close"), V = I.languages[e].settings_modal.blocks, H = I.languages[e].settings_modal.cookie_table_headers;
                var t, n, i, o, r, s, B = V.length;
                ae.innerHTML = I.languages[e].settings_modal.title;
                for (var a = 0; a < B; ++a) {
                    var l, u, c, d, p, h, f = V[a].title,
                        g = V[a].description,
                        m = V[a].toggle,
                        v = V[a].cookie_table,
                        _ = !0 === I.remove_cookie_tables,
                        y = (g || !_ && v) && "truthy",
                        b = ie("div"),
                        x = ie("div"),
                        D = (g && ((l = ie("div")).className = "p", l.insertAdjacentHTML("beforeend", g)), ie("div"));
                    if (D.className = "title", b.className = "c-bl", x.className = "desc", void 0 !== m ? (A = "c-ac-" + a, u = ie(y ? "button" : "div"), c = ie("label"), R = ie("input"), d = ie("span"), p = ie("span"), h = ie("span"), E = ie("span"), u.className = y ? "b-tl exp" : "b-tl", c.className = "b-tg", R.className = "c-tgl", h.className = "on-i", E.className = "off-i", d.className = "c-tg", p.className = "t-lb", y && (u.setAttribute("aria-expanded", "false"), u.setAttribute("aria-controls", A)), R.type = "checkbox", d.setAttribute("aria-hidden", "true"), k = m.value, R.value = k, p.textContent = f, u.insertAdjacentHTML("beforeend", f), D.appendChild(u), d.appendChild(h), d.appendChild(E), $ ? m.enabled ? (R.checked = !0, G || ee.push(!0), m.enabled && !G && le.push(k)) : G || ee.push(!1) : -1 < ne(Z.categories, k) ? (R.checked = !0, G || ee.push(!0)) : G || ee.push(!1), G || te.push(k), m.readonly ? (R.disabled = !0, re(d, "c-ro"), G || ce.push(!0)) : G || ce.push(!1), re(x, "b-acc"), re(D, "b-bn"), re(b, "b-ex"), x.id = A, x.setAttribute("aria-hidden", "true"), c.appendChild(R), c.appendChild(d), c.appendChild(p), D.appendChild(c), y && function(e, t, n) {
                            oe(u, "click", function() {
                                xe(t, "act") ? (be(t, "act"), n.setAttribute("aria-expanded", "false"), e.setAttribute("aria-hidden", "true")) : (re(t, "act"), n.setAttribute("aria-expanded", "true"), e.setAttribute("aria-hidden", "false"))
                            }, !1)
                        }(x, b, u)) : f && ((h = ie("div")).className = "b-tl", h.setAttribute("role", "heading"), h.setAttribute("aria-level", "3"), h.insertAdjacentHTML("beforeend", f), D.appendChild(h)), f && b.appendChild(D), g && x.appendChild(l), !_ && void 0 !== v) {
                        for (var w = document.createDocumentFragment(), C = 0; C < H.length; ++C) {
                            var S = ie("th"),
                                T = H[C];
                            S.setAttribute("scope", "col"), T && (P = T && ye(T)[0], S.textContent = H[C][P], w.appendChild(S))
                        }
                        var E = ie("tr"),
                            k = (E.appendChild(w), ie("thead")),
                            A = (k.appendChild(E), ie("table"));
                        A.appendChild(k);
                        for (var F = document.createDocumentFragment(), M = 0; M < v.length; M++) {
                            for (var P, L, N = ie("tr"), O = 0; O < H.length; ++O)(T = H[O]) && (P = ye(T)[0], (L = ie("td")).insertAdjacentHTML("beforeend", v[M][P]), L.setAttribute("data-column", T[P]), N.appendChild(L));
                            F.appendChild(N)
                        }
                        var R = ie("tbody");
                        R.appendChild(F), A.appendChild(R), x.appendChild(A)
                    }(m && f || !m && (f || g)) && (b.appendChild(x), (G || j).appendChild(b))
                }
                W || ((W = ie("div")).id = "s-bns"), K || ((K = ie("button")).id = "s-all-bn", K.className = "c-bn", W.appendChild(K), oe(K, "click", function() {
                    Q.hideSettings(), Q.hide(), Q.accept("all")
                })), K.innerHTML = I.languages[e].settings_modal.accept_all_btn;
                var z = I.languages[e].settings_modal.reject_all_btn;
                if (z && (J || ((J = ie("button")).id = "s-rall-bn", J.className = "c-bn", oe(J, "click", function() {
                        Q.hideSettings(), Q.hide(), Q.accept([])
                    }), Y.className = "bns-t", W.appendChild(J)), J.innerHTML = z), U || ((U = ie("button")).id = "s-sv-bn", U.className = "c-bn", W.appendChild(U), oe(U, "click", function() {
                        Q.hideSettings(), Q.hide(), Q.accept()
                    })), U.innerHTML = I.languages[e].settings_modal.save_settings_btn, G) return Y.replaceChild(G, j), j = G;
                o.appendChild(ae), o.appendChild(r), Y.appendChild(o), Y.appendChild(j), Y.appendChild(W), i.appendChild(Y), n.appendChild(i), t.appendChild(n), q.appendChild(t), se.appendChild(q), se.appendChild(s)
            }

            function S(e) {
                var t, n = V.length,
                    i = -1,
                    o = (B = !1, ve("", "all")),
                    r = [b.cookie_domain, "." + b.cookie_domain];
                "www." === b.cookie_domain.slice(0, 4) && (t = b.cookie_domain.substr(4), r.push(t), r.push("." + t));
                for (var s = 0; s < n; s++) {
                    var a = V[s];
                    if (Object.prototype.hasOwnProperty.call(a, "toggle")) {
                        var l = -1 < ne(x, a.toggle.value);
                        if (!ee[++i] && Object.prototype.hasOwnProperty.call(a, "cookie_table") && (e || l)) {
                            var u = a.cookie_table,
                                c = ye(H[0])[0],
                                d = u.length;
                            "on_disable" === a.toggle.reload && l && (B = !0);
                            for (var p = 0; p < d; p++) {
                                var h = r,
                                    f = u[p],
                                    g = [],
                                    m = f[c],
                                    v = f.is_regex || !1,
                                    _ = f.domain || null,
                                    f = f.path || !1;
                                if (_ && (h = [_, "." + _]), v)
                                    for (var y = 0; y < o.length; y++) o[y].match(m) && g.push(o[y]);
                                else {
                                    _ = ne(o, m); - 1 < _ && g.push(o[_])
                                }
                                0 < g.length && (_e(g, f, h), "on_clear" === a.toggle.reload && (B = !0))
                            }
                        }
                    }
                }
            }
            var I, u, c, d, r, H, V, T, E, k, A, n, t, s, se, a, l, F, p, h, f, g, q, Y, ae, X, j, G, W, U, K, J, i, e, b = {
                    mode: "opt-in",
                    current_lang: "en",
                    auto_language: null,
                    autorun: !0,
                    page_scripts: !0,
                    hide_from_bots: !0,
                    cookie_name: "cc_cookie",
                    cookie_expiration: 182,
                    cookie_domain: window.location.hostname,
                    cookie_path: "/",
                    cookie_same_site: "Lax",
                    use_rfc_cookie: !1,
                    autoclear_cookies: !0,
                    revision: 0,
                    script_selector: "data-cookiecategory"
                },
                Q = {},
                Z = {},
                m = null,
                $ = !0,
                v = !1,
                M = !1,
                P = !1,
                L = !1,
                O = !1,
                R = !0,
                x = [],
                B = !1,
                le = [],
                N = !1,
                z = [],
                ue = [],
                ee = [],
                te = [],
                ce = [],
                de = document.documentElement,
                o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(t, e) ? e : 0 < ye(t).length ? Object.prototype.hasOwnProperty.call(t, b.current_lang) ? b.current_lang : ye(t)[0] : void 0
                },
                ne = (Q.updateLanguage = function(e, t) {
                    if ("string" == typeof e) return ((e = o(e, I.languages)) !== b.current_lang || !0 === t) && (b.current_lang = e, v && w(e), C(e), !0)
                }, function(e, t) {
                    return e.indexOf(t)
                }),
                ie = function(e) {
                    var t = document.createElement(e);
                    return "button" === e && t.setAttribute("type", e), t
                },
                pe = function() {
                    var e = navigator.language || navigator.browserLanguage;
                    return (e = 2 < e.length ? e[0] + e[1] : e).toLowerCase()
                },
                he = (Q.allowedCategory = function(e) {
                    var t = $ && "opt-in" !== b.mode ? le : JSON.parse(ve(b.cookie_name, "one", !0) || "{}").categories || [];
                    return -1 < ne(t, e)
                }, Q.run = function(e) {
                    var t, l, n;

                    function i(e, t, n, i, o, r, s) {
                        if (r = r && r.split(" ") || [], -1 < ne(t, o) && (re(e, o), ("bar" !== o || "middle" !== r[0]) && -1 < ne(n, r[0])))
                            for (var a = 0; a < r.length; a++) re(e, r[a]); - 1 < ne(i, s) && re(e, s)
                    }

                    function o(e, t) {
                        var n = !1,
                            i = !1;
                        try {
                            for (var o, r = e.querySelectorAll(l.join(':not([tabindex="-1"]), ')), s = r.length, a = 0; a < s;) o = r[a].getAttribute("data-focus"), i || "1" !== o ? "0" === o && (n = r[a], i || "0" === r[a + 1].getAttribute("data-focus") || (i = r[a + 1])) : i = r[a], a++
                        } catch (t) {
                            return e.querySelectorAll(l.join(", "))
                        }
                        t[0] = r[0], t[1] = r[r.length - 1], t[2] = n, t[3] = i
                    }
                    document.getElementById("cc_div") || (y(e), N || (Z = JSON.parse(ve(b.cookie_name, "one", !0) || "{}"), n = void 0 !== (d = Z.consent_uuid), (u = Z.consent_date) && (u = new Date(u)), (c = Z.last_consent_update) && (c = new Date(c)), m = void 0 !== Z.data ? Z.data : null, O && Z.revision !== b.revision && (R = !1), v = $ = !(n && R && u && c && d), (s = ie("div")).id = "cc--main", s.style.position = "fixed", s.style.zIndex = "2147483647", s.innerHTML = '\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e', se = s.children[0], n = b.current_lang, v && w(n), C(n), (_ || document.body).appendChild(s), l = ["[href]", "button", "input", "details", '[tabindex="0"]'], o(Y, ue), v && o(a, z), "object" == typeof(n = e.gui_options) && (t = n.consent_modal, n = n.settings_modal, v && t && i(a, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], t.layout, t.position, t.transition), n && i(q, ["bar"], ["left", "right"], ["zoom", "slide"], n.layout, n.position, n.transition)), D(), b.autorun && v && Q.show(e.delay || 0), setTimeout(function() {
                        re(s, "c--anim")
                    }, 30), setTimeout(function() {
                        var t = !1,
                            n = !1;
                        oe(document, "keydown", function(e) {
                            "Tab" === (e = e || window.event).key && (r && (e.shiftKey ? document.activeElement === r[0] && (r[1].focus(), e.preventDefault()) : document.activeElement === r[1] && (r[0].focus(), e.preventDefault()), n || L || (n = !0, t || e.preventDefault(), (e.shiftKey ? r[3] ? r[2] || r[0] : r[1] : r[3] || r[0]).focus())), n || (t = !0))
                        }), document.contains && oe(s, "click", function(e) {
                            e = e || window.event, P ? L = !!Y.contains(e.target) || (Q.hideSettings(0), !1) : M && a.contains(e.target) && (L = !0)
                        }, !0)
                    }, 100), $ ? "opt-out" === b.mode && (b.mode, he(le)) : ("boolean" == typeof Z.rfc_cookie && Z.rfc_cookie === b.use_rfc_cookie || (Z.rfc_cookie = b.use_rfc_cookie, me(b.cookie_name, JSON.stringify(Z))), A = ge(fe()), he(), "function" == typeof T && T(Z))))
                }, Q.showSettings = function(e) {
                    setTimeout(function() {
                        re(de, "show--settings"), q.setAttribute("aria-hidden", "false"), P = !0, setTimeout(function() {
                            M ? t = document.activeElement : n = document.activeElement, 0 !== ue.length && ((ue[3] || ue[0]).focus(), r = ue)
                        }, 200)
                    }, 0 < e ? e : 0)
                }, function(e) {
                    var t, d, p;
                    b.page_scripts && (t = document.querySelectorAll("script[" + b.script_selector + "]"), d = e || Z.categories || [], (p = function(e, t) {
                        if (t < e.length) {
                            var n = e[t],
                                i = n.getAttribute(b.script_selector);
                            if (-1 < ne(d, i)) {
                                n.type = "text/javascript", n.removeAttribute(b.script_selector);
                                for (var i = n.getAttribute("data-src"), o = (i && n.removeAttribute("data-src"), ie("script")), r = (o.textContent = n.innerHTML, o), s = n, a = s.attributes, l = a.length, u = 0; u < l; u++) {
                                    var c = a[u].nodeName;
                                    r.setAttribute(c, s[c] || s.getAttribute(c))
                                }
                                if (i ? o.src = i : i = n.src, i && (o.readyState ? o.onreadystatechange = function() {
                                        "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, p(e, ++t))
                                    } : o.onload = function() {
                                        o.onload = null, p(e, ++t)
                                    }), n.parentNode.replaceChild(o, n), i) return
                            }
                            p(e, ++t)
                        }
                    })(t, 0))
                }),
                fe = (Q.set = function(e, o) {
                    return "data" === e && function(e) {
                        var t = !1;
                        if ("update" === o.mode) {
                            var n = typeof(m = Q.get("data")) == typeof e;
                            if (n && "object" == typeof m)
                                for (var i in m || (m = {}), e) m[i] !== e[i] && (m[i] = e[i], t = !0);
                            else !n && m || m === e || (m = e, t = !0)
                        } else m = e, t = !0;
                        return t && (Z.data = m, me(b.cookie_name, JSON.stringify(Z))), t
                    }(o.value)
                }, Q.get = function(e, t) {
                    return JSON.parse(ve(t || b.cookie_name, "one", !0) || "{}")[e]
                }, Q.getConfig = function(e) {
                    return b[e] || I[e]
                }, function() {
                    return i = Z.categories || [], e = te.filter(function(e) {
                        return -1 === ne(i, e)
                    }), {
                        accepted: i,
                        rejected: e
                    }
                }),
                ge = function(e) {
                    var t = "custom",
                        n = ce.filter(function(e) {
                            return !0 === e
                        }).length;
                    return e.accepted.length === te.length ? t = "all" : e.accepted.length === n && (t = "necessary"), t
                },
                me = (Q.getUserPreferences = function() {
                    var e = fe();
                    return {
                        accept_type: ge(e),
                        accepted_categories: e.accepted,
                        rejected_categories: e.rejected
                    }
                }, Q.loadScript = function(e, t, n) {
                    var i = "function" == typeof t;
                    if (document.querySelector('script[src="' + e + '"]')) i && t();
                    else {
                        var o = ie("script");
                        if (n && 0 < n.length)
                            for (var r = 0; r < n.length; ++r) n[r] && o.setAttribute(n[r].name, n[r].value);
                        i && (o.onload = t), o.src = e, document.head.appendChild(o)
                    }
                }, Q.updateScripts = function() {
                    he()
                }, Q.show = function(e, t) {
                    !0 === t && w(b.current_lang), v && setTimeout(function() {
                        re(de, "show--consent"), a.setAttribute("aria-hidden", "false"), M = !0, setTimeout(function() {
                            n = document.activeElement, r = z
                        }, 200)
                    }, 0 < e ? e : t ? 30 : 0)
                }, Q.hide = function() {
                    v && (be(de, "show--consent"), a.setAttribute("aria-hidden", "true"), M = !1, setTimeout(function() {
                        n.focus(), r = null
                    }, 200))
                }, Q.hideSettings = function() {
                    be(de, "show--settings"), P = !1, q.setAttribute("aria-hidden", "true"), setTimeout(function() {
                        r = M ? (t && t.focus(), z) : (n && n.focus(), null), L = !1
                    }, 200)
                }, Q.accept = function(e, t) {
                    var n = e || void 0,
                        i = t || [],
                        o = [];
                    if (n)
                        if ("object" == typeof n && "number" == typeof n.length)
                            for (var r = 0; r < n.length; r++) - 1 !== ne(te, n[r]) && o.push(n[r]);
                        else "string" == typeof n && ("all" === n ? o = te.slice() : -1 !== ne(te, n) && o.push(n));
                    else o = function() {
                        for (var e = document.querySelectorAll(".c-tgl") || [], t = [], n = 0; n < e.length; n++) e[n].checked && t.push(e[n].value);
                        return t
                    }();
                    if (1 <= i.length)
                        for (r = 0; r < i.length; r++) o = o.filter(function(e) {
                            return e !== i[r]
                        });
                    for (r = 0; r < te.length; r++) !0 === ce[r] && -1 === ne(o, te[r]) && o.push(te[r]);
                    var s = o,
                        a = (x = [], document.querySelectorAll(".c-tgl") || []);
                    if (0 < a.length)
                        for (var l = 0; l < a.length; l++) - 1 !== ne(s, te[l]) ? (a[l].checked = !0, ee[l] || (x.push(te[l]), ee[l] = !0)) : (a[l].checked = !1, ee[l] && (x.push(te[l]), ee[l] = !1));
                    !$ && b.autoclear_cookies && 0 < x.length && S(), u = u || new Date, d = d || ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                        try {
                            return (e ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                        } catch (e) {
                            return ""
                        }
                    }), Z = {
                        categories: s,
                        level: s,
                        revision: b.revision,
                        data: m,
                        rfc_cookie: b.use_rfc_cookie,
                        consent_date: u.toISOString(),
                        consent_uuid: d
                    }, ($ || 0 < x.length) && (R = !0, c = c ? new Date : u, Z.last_consent_update = c.toISOString(), A = ge(fe()), me(b.cookie_name, JSON.stringify(Z)), he()), $ && (b.autoclear_cookies && S(!0), "function" == typeof k && k(Q.getUserPreferences(), Z), "function" == typeof T && T(Z), $ = !1, "opt-in" === b.mode) || ("function" == typeof E && 0 < x.length && E(Z, x), B && window.location.reload())
                }, Q.eraseCookies = function(e, t, n) {
                    var i = [],
                        n = n ? [n, "." + n] : [b.cookie_domain, "." + b.cookie_domain];
                    if ("object" == typeof e && 0 < e.length)
                        for (var o = 0; o < e.length; o++) this.validCookie(e[o]) && i.push(e[o]);
                    else this.validCookie(e) && i.push(e);
                    _e(i, t, n)
                }, function(e, t) {
                    var n = b.cookie_expiration,
                        i = ("number" == typeof b.cookie_necessary_only_expiration && "necessary" === A && (n = b.cookie_necessary_only_expiration), t = b.use_rfc_cookie ? encodeURIComponent(t) : t, new Date),
                        n = (i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), e + "=" + (t || "") + "; expires=" + i.toUTCString() + "; Path=" + b.cookie_path + ";");
                    n += " SameSite=" + b.cookie_same_site + ";", -1 < window.location.hostname.indexOf(".") && (n += " Domain=" + b.cookie_domain + ";"), "https:" === window.location.protocol && (n += " Secure;"), document.cookie = n
                }),
                ve = function(e, t, n) {
                    if ("one" === t) {
                        if ((o = (o = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) ? n ? o.pop() : e : "") && e === b.cookie_name) {
                            try {
                                o = JSON.parse(o)
                            } catch (e) {
                                try {
                                    o = JSON.parse(decodeURIComponent(o))
                                } catch (e) {
                                    o = {}
                                }
                            }
                            o = JSON.stringify(o)
                        }
                    } else if ("all" === t)
                        for (var i = document.cookie.split(/;\s*/), o = [], r = 0; r < i.length; r++) o.push(i[r].split("=")[0]);
                    return o
                },
                _e = function(e, t, n) {
                    for (var i = t || "/", o = 0; o < e.length; o++) {
                        for (var r = 0; r < n.length; r++) document.cookie = e[o] + "=; path=" + i + (0 == n[r].indexOf(".") ? "; domain=" + n[r] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        e[o]
                    }
                },
                oe = (Q.validCookie = function(e) {
                    return "" !== ve(e, "one", !0)
                }, function(e, t, n, i) {
                    e.addEventListener(t, n, !0 === i && {
                        passive: !0
                    })
                }),
                ye = function(e) {
                    if ("object" == typeof e) return Object.keys(e)
                },
                re = function(e, t) {
                    e.classList.add(t)
                },
                be = function(e, t) {
                    e.classList.remove(t)
                },
                xe = function(e, t) {
                    return e.classList.contains(t)
                };
            return Q
        })
    }(), document.querySelector(".info")) {
    let e = gsap.timeline({
            scrollTrigger: {
                trigger: ".info h2",
                start: "top 80%",
                end: "top 80%",
                once: !0,
                toggleActions: "restart none none none"
            }
        }),
        t = (e.add(setupTextSkewLoad(".info h2", skew = 10, opacity = .3, yDistance = "100%", ease = "power3.out", duration = 1.25)), gsap.timeline({
            scrollTrigger: {
                trigger: ".info h2",
                start: "top 40%",
                end: "top 40%",
                once: !0,
                toggleActions: "restart none none none"
            }
        })),
        n = [".info .detailed-text", ".info .line", ".info .work-fields-wrapper"];
    gsap.set(n, {
        y: 200,
        opacity: 0
    }), t.fromTo(n, {
        y: 200,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.5
    }, .25)
}
if (document.querySelector(".projects")) {
    let e = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects h2",
            start: "top 90%",
            end: "top 90%",
            once: !0,
            toggleActions: "restart none none none"
        }
    });
    e.add(setupTextSkewLoad(".projects h2", skew = 10, opacity = .3, yDistance = "100%", ease = "power3.out", duration = 1.25)), e.from(".projects .date", {
        y: 50,
        opacity: 0,
        ease: "power3.out",
        duration: 1.25
    }, "<0.5")
}
if (document.querySelector(".testimonials") && !document.querySelector(".--project-variant")) {
    let e = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials .h2-normal",
                start: "top 80%",
                end: "top 80%",
                once: !0,
                toggleActions: "restart none none none"
            }
        }),
        t = (e.add(setupTextSkewLoad(".testimonials h2", skew = 10, opacity = .3, yDistance = "100%", ease = "power3.out", duration = 1)), [".testimonials .play-btn", ".testimonials .quotes-wrapper"]);
    gsap.fromTo(t, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.25,
        delay: .5,
        scrollTrigger: {
            trigger: ".testimonials .h2-normal",
            start: "top 80%",
            end: "top 80%",
            once: !0,
            toggleActions: "restart none none none"
        }
    })
}

function setupTextSkewLoad(e, t = "10deg", n = .3, i = "100%", o = "power3.out", r = 1) {
    e = new SplitText(e, {
        type: "lines",
        linesClass: "h-animation-wrapper",
        lineThreshold: .3
    }), e = new SplitText(e.lines, {
        type: "lines",
        linesClass: "h-line",
        lineThreshold: .3
    });
    let s = gsap.timeline();
    return e.lines.forEach(e => {
        gsap.set(e, {
            transformOrigin: "top left",
            opacity: 0
        }), s.fromTo(e, {
            skewY: t,
            opacity: n,
            y: i
        }, {
            skewY: "0deg",
            opacity: 1,
            y: 0,
            ease: o,
            duration: r
        }, "<")
    }), s
}
document.querySelector(".footer h2") && ScrollTrigger.create({
    animation: setupTextSkewLoad(".footer h2"),
    trigger: ".footer h2",
    start: "top 80%",
    end: "top 80%",
    once: !0,
    toggleActions: "restart none none none"
});
const debug = !1;
class Ripples {
    constructor({
        callback: e = null,
        curtains: t = null,
        viscosity: n = 2,
        speed: i = 3.5,
        size: o = 1,
        gui: r = null,
        guiParams: s = null
    } = {}) {
        t && (this.curtains = t, this.params = {
            container: this.curtains.container,
            callback: e,
            viscosity: n,
            speed: i,
            size: o,
            gui: r,
            guiParams: s
        }, this.mouse = {
            current: {
                x: 0,
                y: 0
            },
            last: {
                x: 0,
                y: 0
            },
            velocity: {
                x: 0,
                y: 0
            }
        }, debug && this.debug(), this.init())
    }
    debug() {
        this.params.gui && this.params.guiParams && (this.params.guiParams.viscosity = this.params.viscosity, this.params.guiParams.speed = this.params.speed, this.params.guiParams.size = this.params.size, this.ripplesGui = this.params.gui.addFolder("Render targets"), this.ripplesGui.open(), this.guiViscosity = this.ripplesGui.add(this.params.guiParams, "viscosity", 1, 15), this.guiSpeed = this.ripplesGui.add(this.params.guiParams, "speed", 1, 15), this.guiSize = this.ripplesGui.add(this.params.guiParams, "size", .5, 2.5).step(.025), this.guiViscosity.onChange(e => {
            this.ripples && (this.ripples.uniforms.viscosity.value = e)
        }), this.guiSpeed.onChange(e => {
            this.ripples && (this.ripples.uniforms.speed.value = e)
        }), this.guiSize.onChange(e => {
            this.ripples && (this.ripples.uniforms.size.value = e)
        }))
    }
    getCanvasSizes() {
        return this.curtains.getBoundingRect()
    }
    lerp(e, t, n) {
        return (1 - n) * e + n * t
    }
    onMouseMove(t) {
        if (this.ripples) {
            this.mouse.last.x = this.mouse.current.x, this.mouse.last.y = this.mouse.current.y;
            var n, i, o = this.ripples.mouseToPlaneCoords(this.mouse.last.x, this.mouse.last.y);
            this.ripples.uniforms.lastMousePosition.value = [o.x, o.y];
            let e = !0;
            0 === this.mouse.last.x && 0 === this.mouse.last.y && 0 === this.mouse.current.x && 0 === this.mouse.current.y && (e = !1), t.targetTouches ? (this.mouse.current.x = t.targetTouches[0].clientX, this.mouse.current.y = t.targetTouches[0].clientY) : (i = n = 0, this.mouse.current.x = t.clientX, document.querySelector(".team") ? (n = getTranslateValues(document.querySelector(".team .headline-container")), i = getTranslateValues(document.querySelector(".team .headline-wrapper")), this.mouse.current.y = t.pageY - n.y - i.y) : this.mouse.current.y = t.pageY), o = this.ripples.mouseToPlaneCoords(this.mouse.current.x, this.mouse.current.y), this.ripples.uniforms.mousePosition.value = [o.x, o.y], e && (this.mouse.velocity = {
                x: (this.mouse.current.x - this.mouse.last.x) / 16,
                y: (this.mouse.current.y - this.mouse.last.y) / 16
            })
        }
    }
    setRipplesShaders() {
        this.ripplesVs = `

            #ifdef GL_FRAGMENT_PRECISION_HIGH

            precision highp float;

            #else

            precision mediump float;

            #endif

    

            // default mandatory variables

            attribute vec3 aVertexPosition;

            attribute vec2 aTextureCoord;

    

            uniform mat4 uMVMatrix;

            uniform mat4 uPMatrix;

    

            // custom variables

            varying vec3 vVertexPosition;

            varying vec2 vTextureCoord;

    

            void main() {

    

                vec3 vertexPosition = aVertexPosition;

    

                gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

    

                // varyings

                vTextureCoord = aTextureCoord;

                vVertexPosition = vertexPosition;

            }

        `, this.ripplesFs = `

            #ifdef GL_FRAGMENT_PRECISION_HIGH

            precision highp float;

            #else

            precision mediump float;

            #endif

    

            uniform vec2 uResolution;

            uniform vec2 uMousePosition;

            uniform vec2 uLastMousePosition;

            uniform vec2 uVelocity;

            uniform int uTime;

            uniform sampler2D uTargetTexture;

            

            uniform float uViscosity;

            uniform float uSpeed;

            uniform float uSize;

            

            varying vec3 vVertexPosition;

            varying vec2 vTextureCoord;

            

            // line distance field

            float sdLine( vec2 p, vec2 a, vec2 b ){

                float velocity = clamp(length(uVelocity), 0.5, 1.5);

                vec2 pa = p - a, ba = b - a;

                float h = clamp( dot(pa, ba)/dot(ba, ba), 0.0, 1.0 );

                return length( pa - ba*h ) / velocity;

            }

    

            

            void main() {

                float velocity = clamp(length(uVelocity), 0.1, 1.0);

                vec3 speed = vec3(vec2(uSpeed) / uResolution.xy, 0.0);

                        

                vec2 mouse = (uMousePosition + 1.0) * 0.5;

                vec2 lastMouse = (uLastMousePosition + 1.0) * 0.5;            

    

                vec4 color = texture2D(uTargetTexture, vTextureCoord);

                

                // trick given by Edan Kwan on this codepen: https://codepen.io/edankwan/pen/YzXgxxr

                // "It is always better to use line distance field instead of single point distance for ripple drawing. And it is cheap and simple."

                //float shade = smoothstep(0.02 * uSize * velocity, 0.0, length(mouse - vTextureCoord));

                float shade = smoothstep(0.02 * uSize * velocity, 0.0, sdLine(vTextureCoord, lastMouse, mouse));        

            

                vec4 texelColor = color;

                

                float d = shade * uViscosity;

                

                float top = texture2D(uTargetTexture, vTextureCoord - speed.zy, 1.0).x;

                float right = texture2D(uTargetTexture, vTextureCoord - speed.xz, 1.0).x;

                float bottom = texture2D(uTargetTexture, vTextureCoord + speed.xz, 1.0).x;

                float left = texture2D(uTargetTexture, vTextureCoord + speed.zy, 1.0).x;

                

                d += -(texelColor.y - 0.5) * 2.0 + (top + right + bottom + left - 2.0);

                d *= 0.99;

                

                // skip first frames

                d *= float(uTime > 5);

                

                d = d * 0.5 + 0.5;

                

                color = vec4(d, texelColor.x, 0.0, 1.0);

            

                gl_FragColor = color;

            }

        `
    }
    swapPasses() {
        var e = this.readPass;
        this.readPass = this.writePass, this.writePass = e, this.ripplesTexture.setFromTexture(this.readPass.textures[0])
    }
    createRipplesTexture() {
        return this.ripplesTexture = this.ripples.createTexture({
            sampler: "uTargetTexture"
        }), new Promise(e => {
            this.ripplesTexture && e()
        })
    }
    init() {
        this.readPass = this.curtains.addRenderTarget({
            clear: !1
        }), this.writePass = this.curtains.addRenderTarget({
            clear: !1
        }), this.setRipplesShaders();
        let e = this.getCanvasSizes();
        this.ripplesParams = {
            vertexShader: this.ripplesVs,
            fragmentShader: this.ripplesFs,
            autoloadSources: !1,
            depthTest: !1,
            watchScroll: !1,
            uniforms: {
                mousePosition: {
                    name: "uMousePosition",
                    type: "2f",
                    value: [this.mouse.current.x, this.mouse.current.y]
                },
                lastMousePosition: {
                    name: "uLastMousePosition",
                    type: "2f",
                    value: [this.mouse.current.x, this.mouse.current.y]
                },
                velocity: {
                    name: "uVelocity",
                    type: "2f",
                    value: [this.mouse.velocity.x, this.mouse.velocity.y]
                },
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: [e.width, e.height]
                },
                time: {
                    name: "uTime",
                    type: "1i",
                    value: -1
                },
                viscosity: {
                    name: "uViscosity",
                    type: "1f",
                    value: this.params.viscosity
                },
                speed: {
                    name: "uSpeed",
                    type: "1f",
                    value: this.params.speed
                },
                size: {
                    name: "uSize",
                    type: "1f",
                    value: this.params.size
                }
            }
        }, this.ripples = this.curtains.addPlane(this.params.container, this.ripplesParams), this.ripples && (this.createRipplesTexture().then(() => {
            this.params.callback && this.params.callback(this.ripplesTexture)
        }), this.ripples.onReady(() => {
            window.addEventListener("mousemove", e => this.onMouseMove(e)), window.addEventListener("touchmove", e => this.onMouseMove(e))
        }).onRender(() => {
            this.ripples.uniforms.velocity.value = [this.mouse.velocity.x, this.mouse.velocity.y], this.mouse.velocity = {
                x: this.lerp(this.mouse.velocity.x, 0, .1),
                y: this.lerp(this.mouse.velocity.y, 0, .1)
            }, this.ripples.uniforms.velocity.value = [this.mouse.velocity.x, this.mouse.velocity.y], this.ripples.uniforms.time.value++, this.writePass && this.ripples.setRenderTarget(this.writePass)
        }).onAfterRender(() => {
            this.readPass && this.writePass && this.swapPasses()
        }).onAfterResize(() => {
            e = this.getCanvasSizes(), this.ripples.uniforms.resolution.value = [e.width, e.height]
        }))
    }
}

function getTranslateValues(e) {
    e = window.getComputedStyle(e);
    const t = e.transform || e.webkitTransform || e.mozTransform;
    if ("none" === t || void 0 === t) return {
        x: 0,
        y: 0,
        z: 0
    };
    var e = t.includes("3d") ? "3d" : "2d",
        n = t.match(/matrix.*\((.+)\)/)[1].split(", ");
    return "2d" == e ? {
        x: parseFloat(n[4]),
        y: parseFloat(n[5]),
        z: 0
    } : "3d" == e ? {
        x: parseFloat(n[12]),
        y: parseFloat(n[13]),
        z: parseFloat(n[14])
    } : void 0
}
class RipplesScene {
    constructor({
        ripplesContainer: e = "",
        canvasWrapper: t = "",
        headingSelector: n = "",
        xCenter: i = !1,
        yCenter: o = !1,
        customText: r = null,
        viscosity: s = 5,
        speed: a = 3.5,
        size: l = 1,
        displacementStrength: u = 4,
        lightIntensity: c = 5,
        shadowIntensity: d = 2.5
    } = {}) {
        this.params = {
            ripplesContainer: e,
            canvasWrapper: t,
            headingSelector: n,
            xCenter: i,
            yCenter: o,
            customText: r,
            viscosity: s,
            speed: a,
            size: l,
            displacementStrength: u,
            lightIntensity: c,
            shadowIntensity: d
        }, this.init()
    }
    debug() {
        this.sceneGui = this.gui.addFolder("Scene"), this.sceneGui.open(), this.guiDisplacement = this.sceneGui.add(this.guiParams, "displacement", 0, 5), this.guiLights = this.sceneGui.add(this.guiParams, "lights", .1, 10), this.guiShadows = this.sceneGui.add(this.guiParams, "shadows", .1, 10), this.guiBlurRipples = this.sceneGui.add(this.guiParams, "blurRipples", !0), this.guiShowTexture = this.sceneGui.add(this.guiParams, "showTexture", !0), this.guiTitleColor = this.sceneGui.addColor(this.guiParams, "titleColor"), this.guiDisplacement.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.displacementStrength.value = e)
        }), this.guiLights.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.lightIntensity.value = e)
        }), this.guiShadows.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.shadowIntensity.value = e)
        }), this.guiBlurRipples.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.blurRipples.value = e ? 1 : 0)
        }), this.guiShowTexture.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.showTexture.value = e ? 1 : 0)
        }), this.guiTitleColor.onChange(e => {
            this.scenePlane && (this.scenePlane.uniforms.titleColor.value = e)
        })
    }
    init() {
        this.curtains = new Curtains({
            container: document.querySelector(this.params.canvasWrapper),
            alpha: !0,
            watchScroll: !1
        }).onError(() => {
            document.body.classList.add("no-curtains"), console.log("error")
        }).onContextLost(() => {
            this.curtains.restoreContext(), console.log("context lost")
        }), this.setSceneShaders(), this.sceneElement = document.querySelector(this.params.ripplesContainer), this.guiParams = {
            displacement: this.params.displacementStrength,
            lights: this.params.lightIntensity,
            shadows: this.params.shadowIntensity,
            blurRipples: !0,
            showTexture: !0,
            titleColor: [255, 255, 255]
        }, debug && (this.gui = new dat.GUI), this.ripples = new Ripples({
            curtains: this.curtains,
            container: this.sceneElement,
            viscosity: this.params.viscosity || null,
            speed: this.params.speed || null,
            size: this.params.size || null,
            callback: e => {
                this.createScenePlane(e)
            },
            gui: this.gui || null,
            guiParams: this.guiParams || null
        }), this.titleObject = {
            x: 0,
            y: 0,
            skewY: 0,
            opacity: 1,
            printParams: () => {}
        }, this.canvas = null, debug && this.debug()
    }
    setSceneShaders() {
        this.sceneVs = `

            precision highp float;

            

            // default mandatory variables

            attribute vec3 aVertexPosition;

            attribute vec2 aTextureCoord;

            

            uniform mat4 uMVMatrix;

            uniform mat4 uPMatrix;

            

            // varyings

            varying vec3 vVertexPosition;

            varying vec2 vTextureCoord;

            varying vec2 vPlaneTextureCoord;

            

            // textures matrices

            uniform mat4 planeTextureMatrix;

    

            void main() {

                gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

                

                // varyings

                vTextureCoord = aTextureCoord;

                vPlaneTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;

                vVertexPosition = aVertexPosition;

            }

        `, this.sceneFs = `

            precision highp float;

            

            // varyings

            varying vec3 vVertexPosition;

            varying vec2 vTextureCoord;

            varying vec2 vPlaneTextureCoord;

            

            uniform sampler2D uRippleTexture;

            uniform sampler2D planeTexture;

            uniform sampler2D titleTexture;

            

            uniform vec2 uResolution;

            

            uniform float uDisplacementStrength;

            uniform float uLightIntensity;

            uniform float uShadowIntensity;

            

            uniform float uBlurRipples;

            uniform float uShowTexture;

            uniform vec3 uTitleColor;

            

            

            // Holy fuck balls, fresnel!

            const float bias = 0.2;

            const float scale = 10.0;

            const float power = 10.1;

            

            // taken from https://github.com/Jam3/glsl-fast-gaussian-blur

            vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {

                vec4 color = vec4(0.0);

                vec2 off1 = vec2(1.3333333333333333) * direction;

                color += texture2D(image, uv) * 0.29411764705882354;

                color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;

                color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;

                return color;

            }

            

            float bumpMap(vec2 uv, float height, inout vec3 colormap) {

                vec3 shade;

                // branching on an uniform is OK

                if(uBlurRipples == 1.0) {

                    shade = blur5(uRippleTexture, vTextureCoord, uResolution, vec2(1.0, 1.0)).rgb;

                }

                else {

                    shade = texture2D(uRippleTexture, vTextureCoord).rgb;

                }

                

                return 1.0 - shade.r * height;

            }

            

            float bumpMap(vec2 uv, float height) {

                vec3 colormap;

                return bumpMap(uv, height, colormap);

            }

    

            // add bump map, reflections and lightnings to the ripples render target texture

            vec4 renderPass(vec2 uv, inout float distortion) {

                vec3 surfacePos = vec3(uv, 0.0);

                vec3 ray = normalize(vec3(uv, 1.0));

    

                vec3 lightPos = vec3( 2.0, 3.0, -3.0);

                vec3 normal = vec3(0.0, 0.0, -1);

                

                vec2 sampleDistance = vec2(0.005, 0.0);

                

                vec3 colormap;

                

                float fx = bumpMap(sampleDistance.xy, 0.2);

                float fy = bumpMap(sampleDistance.yx, 0.2);

                float f = bumpMap(vec2(0.0), 0.2, colormap);

                

                distortion = f;

                

                fx = (fx - f) / sampleDistance.x;

                fy = (fy - f) / sampleDistance.x;

                normal = normalize(normal + vec3(fx, fy, 0.0) * 0.2);

                

                // Holy fuck balls, fresnel!

                float shade = bias + (scale * pow(1.0 + dot(normalize(surfacePos - vec3(uv, -3.0)), normal), power));

                

                vec3 lightV = lightPos - surfacePos;

                float lightDist = max(length(lightV), 0.001);

                lightV /= lightDist;

                

                // light color based on light intensity

                vec3 lightColor = vec3(1.0 - uLightIntensity / 20.0);

                

                float shininess = 0.1;

                // brightness also based on light intensity

                float brightness = 1.0 - uLightIntensity / 40.0;

                

                float falloff = 0.1;

                // finally attenuation based on light intensity as well

                float attenuation = (0.75 + uLightIntensity / 40.0) / (1.0 + lightDist * lightDist * falloff);

                

                float diffuse = max(dot(normal, lightV), 0.0);

                float specular = pow(max(dot( reflect(-lightV, normal), -ray), 0.0), 15.0) * shininess;

                

                vec3 reflect_ray = reflect(vec3(uv, 1.0), normal * 1.0);

                vec3 texCol = (vec3(0.5) * brightness);

                

                float metalness = (1.0 - colormap.x);

                metalness *= metalness;

                

                vec3 color = (texCol * (diffuse * vec3(0.9) * 2.0 + 0.5) + lightColor * specular * f * 2.0 * metalness) * attenuation * 2.0;

    

                return vec4(color, 1.0);

            }

    

    

            void main() {

                vec4 color = vec4(1.0);

                

                float distortion;

                vec4 reflections = renderPass(vTextureCoord, distortion);            

                

                vec4 ripples = vec4(0.16);            

                ripples += distortion * 0.1 - 0.1;

                ripples += reflections * 0.7;

                

                

                vec2 textureCoords = vTextureCoord + distortion * (uDisplacementStrength / 250.0);

                vec2 planeTextureCoords = vPlaneTextureCoord + distortion * (uDisplacementStrength / 250.0);

                

                vec4 texture = texture2D(planeTexture, planeTextureCoords);

                vec4 title = texture2D(titleTexture, textureCoords);

                title.rgb *= vec3(uTitleColor.r / 255.0, uTitleColor.g / 255.0, uTitleColor.b / 255.0);

                

                // mix texture and title

                color = mix(vec4(0.05, 0.05, 0.05, 1.0), texture, uShowTexture);

                color = mix(color, title, title.a);

    

                

                // add fake lights & shadows

                float lights = max(0.0, ripples.r - 0.5);

                color.rgb += lights * (uLightIntensity / 10.0);

                

                float shadow = max(0.0, 1.0 - (ripples.r + 0.5));

                color.rgb -= shadow * (uShadowIntensity / 10.0);

                

                gl_FragColor = color;

            }

        `
    }
    writeTitleCanvas() {
        const e = document.querySelectorAll(this.params.headingSelector),
            l = this.scenePlane.getBoundingRect();
        var t = l.width,
            n = l.height;
        this.canvas.width = t, this.canvas.height = n;
        let u = this.canvas.getContext("2d");
        u.width = t, u.height = n, e.forEach(e => {
            u.save();
            var t = window.getComputedStyle(e),
                n = "team" == this.params.headingSelector.substr(1, 4),
                i = !!document.querySelector(".careers-hero");
            let o = e.offsetTop * this.curtains.pixelRatio,
                r = ((l.width / this.curtains.pixelRatio - 1368) / 2 + e.offsetLeft) * this.curtains.pixelRatio,
                s = (window.innerWidth <= 1500 && (r = ((l.width / this.curtains.pixelRatio - 1100) / 2 + e.offsetLeft) * this.curtains.pixelRatio), this.params.yCenter && (o = (l.height / this.curtains.pixelRatio - e.parentElement.clientHeight) / 2 * this.curtains.pixelRatio), this.params.xCenter && (r = (l.width / this.curtains.pixelRatio - e.clientWidth) / 2 * this.curtains.pixelRatio), n && (window.innerWidth <= 1500 ? (o += 0, r += 6 * this.curtains.pixelRatio) : (o += -10 * this.curtains.pixelRatio, r += 8 * this.curtains.pixelRatio)), this.titleObject.y * this.curtains.pixelRatio + o);
            var a = this.titleObject.x * this.curtains.pixelRatio + r;
            if (s += e.clientHeight * this.curtains.pixelRatio * .1, u.fillStyle = t.color, u.fillStyle = "rgba(255, 255, 255, " + this.titleObject.opacity + ")", "Urbanist" == t.fontFamily ? (u.font = "500 " + parseFloat(t.fontSize) * this.curtains.pixelRatio + "px Urbanist-canvas", n && (o += -8 * this.curtains.pixelRatio, s += -12 * this.curtains.pixelRatio), safariAgent && (s -= n ? parseFloat(t.fontSize) / 136 * 16 * this.curtains.pixelRatio : parseFloat(t.fontSize) / 104 * 16 * this.curtains.pixelRatio)) : (u.font = "400 " + parseFloat(t.fontSize) * this.curtains.pixelRatio + "px " + t.fontFamily, s -= e.clientHeight * this.curtains.pixelRatio * .05, safariAgent && (s -= n ? parseFloat(t.fontSize) / 164 * 50 * this.curtains.pixelRatio : parseFloat(t.fontSize) / 130 * 36 * this.curtains.pixelRatio)), u.fontStyle = t.fontStyle, u.textAlign = "left", u.textBaseline = "top", i) {
                let e = new Path2D;
                e.rect(r, o, 1300 * this.curtains.pixelRatio, 164 * this.curtains.pixelRatio), u.clip(e)
            } else if (!n) {
                let e = new Path2D;
                e.rect(r, o, 1300 * this.curtains.pixelRatio, 130 * this.curtains.pixelRatio), u.clip(e)
            }
            u.transform(1, this.titleObject.skewY, 0, 1, 0, 0), "Urbanist" == t.fontFamily ? fillTextWithSpacing(u, e.innerText, a, s, n ? 2 : 4) : fillTextWithSpacing(u, e.innerText, a, s, 5), u.restore()
        }), this.scenePlane.textures && 1 < this.scenePlane.textures.length && (this.scenePlane.textures[1].resize(), this.scenePlane.textures[1].needUpdate())
    }
    createScenePlane(e) {
        let t = this.curtains.getBoundingRect();
        var n = {
            vertexShader: this.sceneVs,
            fragmentShader: this.sceneFs,
            uniforms: {
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: [t.width, t.height]
                },
                displacementStrength: {
                    name: "uDisplacementStrength",
                    type: "1f",
                    value: this.params.displacementStrength
                },
                lightIntensity: {
                    name: "uLightIntensity",
                    type: "1f",
                    value: this.params.lightIntensity
                },
                shadowIntensity: {
                    name: "uShadowIntensity",
                    type: "1f",
                    value: this.params.shadowIntensity
                },
                blurRipples: {
                    name: "uBlurRipples",
                    type: "1f",
                    value: 1
                },
                showTexture: {
                    name: "uShowTexture",
                    type: "1f",
                    value: 1
                },
                titleColor: {
                    name: "uTitleColor",
                    type: "3f",
                    value: [255, 255, 255]
                }
            }
        };
        if (this.scenePlane = this.curtains.addPlane(this.sceneElement, n), this.scenePlane) {
            const i = document.createElement("canvas");
            (this.canvas = i).setAttribute("data-sampler", "titleTexture"), i.style.display = "none", this.scenePlane.loadCanvas(i), this.scenePlane.onLoading(e => {
                e.shouldUpdate = !1, this.scenePlane.canvases && 0 < this.scenePlane.canvases.length && (document.fonts ? document.fonts.ready.then(() => {
                    this.writeTitleCanvas()
                }) : setTimeout(() => {
                    this.writeTitleCanvas()
                }, 750))
            }).onReady(() => {
                this.scenePlane.createTexture({
                    sampler: "uRippleTexture",
                    fromTexture: e
                })
            }).onAfterResize(() => {
                t = this.curtains.getBoundingRect(), this.scenePlane.uniforms.resolution.value = [t.width, t.height], this.writeTitleCanvas()
            })
        }
    }
}

function fillTextWithSpacing(e, t, n, i, o) {
    for (wAll = e.measureText(t).width; char = t.substr(0, 1), t = t.substr(1), e.fillText(char, n, i), wShorter = "" == t ? 0 : e.measureText(t).width, n += (wChar = wAll - wShorter) + o, wAll = wShorter, "" != t;);
}

function DitheredRadialGradient(e, t, n, i, o, r) {
    this.x0 = e, this.y0 = t, this.x1 = i, this.y1 = o, this.rad0 = n, this.rad1 = r, this.colorStops = []
}

function vimeoInit(i) {
    const o = new Vimeo.Player(i);
    window.innerWidth <= 767 && i.classList.contains("--desktop-version") ? o.destroy().then(function() {}).catch(function(e) {}) : 768 <= window.innerWidth && i.classList.contains("--mobile-version") ? o.destroy().then(function() {}).catch(function(e) {}) : Promise.all([o.getVideoWidth(), o.getVideoHeight()], o.ready()).then(function(e) {
        i.closest("section").classList.contains("project-hero") || o.pause();
        var t = e[0],
            e = e[1];
        let n = i.closest("section");
        getComputedStyle(n).getPropertyValue("--video-aspect-ratio") && n.style.setProperty("--video-aspect-ratio", Math.round(t / e * 1e4) / 1e4), ScrollTrigger.create({
            trigger: i.closest("section"),
            start: "2% bottom",
            end: "bottom top",
            toggleActions: "restart none none reverse",
            onToggle: e => {
                e.isActive ? o.play() : o.pause()
            }
        })
    })
}
DitheredRadialGradient.prototype.addColorStop = function(e, t, n, i) {
    if (!(e < 0 || 1 < e)) {
        t = {
            ratio: e,
            r: t,
            g: n,
            b: i
        };
        if (0 <= e && e <= 1)
            if (0 == this.colorStops.length) this.colorStops.push(t);
            else {
                for (var o = 0, r = !1, s = this.colorStops.length; !r && o < s;)(r = e <= this.colorStops[o].ratio) || o++;
                r ? e == this.colorStops[o].ratio ? this.colorStops.splice(o, 1, t) : this.colorStops.splice(o, 0, t) : this.colorStops.push(t)
            }
    }
}, DitheredRadialGradient.prototype.fillRect = function(e, t, n, o, r) {
    if (0 != this.colorStops.length) {
        var s, a, l, u, c, d, p, h, f, g, m, v, _, y, b, x, r = e.getImageData(t, n, o, r),
            D = r.data,
            w = D.length,
            C = (this.x1, this.x0, this.y1, this.y0, []),
            S = [],
            T = [],
            E = this.x1 - this.x0,
            k = this.y1 - this.y0,
            A = this.rad1 - this.rad0,
            F = A * A - E * E - k * k,
            M = 2 * this.rad0 * (this.rad1 - this.rad0),
            P = this.rad0 * this.rad0;
        for (0 != this.colorStops[0].ratio && (x = {
                ratio: 0,
                r: this.colorStops[0].r,
                g: this.colorStops[0].g,
                b: this.colorStops[0].b
            }, this.colorStops.splice(0, 0, x)), 1 != this.colorStops[this.colorStops.length - 1].ratio && (x = {
                ratio: 1,
                r: this.colorStops[this.colorStops.length - 1].r,
                g: this.colorStops[this.colorStops.length - 1].g,
                b: this.colorStops[this.colorStops.length - 1].b
            }, this.colorStops.push(x)), i = 0; i < w / 4; i++) {
            if (y = t + i % o, b = n + Math.floor(i / o), 0 <= (y = (_ = M + 2 * ((y = y - this.x0) * E + (b = b - this.y0) * k)) * _ - 4 * F * (P - y * y - b * b))) {
                if ((l = (-_ + Math.sqrt(y)) / (2 * F)) < 0 ? l = 0 : 1 < l && (l = 1), 1 == l) g = this.colorStops.length - 1;
                else
                    for (g = 0, m = !1; !m;)(m = l < this.colorStops[g].ratio) || g++;
                d = this.colorStops[g - 1].r, p = this.colorStops[g - 1].g, h = this.colorStops[g - 1].b, b = this.colorStops[g].r, y = this.colorStops[g].g, f = this.colorStops[g].b, u = d + (b - d) * (b = (l - (b = this.colorStops[g - 1].ratio)) / (this.colorStops[g].ratio - b)), c = p + (y - p) * b, _ = h + (f - h) * b
            } else u = d, c = p, _ = h;
            C.push(u), S.push(c), T.push(_)
        }
        for (i = 0; i < w / 4; i++) s = ~~C[i], a = C[i] - s, C[i + 1] += 7 / 16 * a, C[i - 1 + o] += 3 / 16 * a, C[i + o] += 5 / 16 * a, C[i + 1 + o] += 1 / 16 * a, s = ~~S[i], a = S[i] - s, S[i + 1] += 7 / 16 * a, S[i - 1 + o] += 3 / 16 * a, S[i + o] += 5 / 16 * a, S[i + 1 + o] += 1 / 16 * a, s = ~~T[i], a = T[i] - s, T[i + 1] += 7 / 16 * a, T[i - 1 + o] += 3 / 16 * a, T[i + o] += 5 / 16 * a, T[i + 1 + o] += 1 / 16 * a;
        for (i = 0; i < w; i += 4) v = i / 4, D[i] = ~~C[v], D[i + 1] = ~~S[v], D[i + 2] = ~~T[v], D[i + 3] = 255;
        e.putImageData(r, t, n)
    }
}, document.querySelector("iframe.embeded-video") && (iframes = document.querySelectorAll("iframe.embeded-video")).forEach(e => {
    vimeoInit(e)
});
let smoother = null;
smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    ignoreMobileResize: !0,
    smooth: .5,
    effects: !0,
    smoothTouch: .01
}), document.querySelector(".team") && (smoother.effects(".team-photo__first", {
    speed: 1.3,
    lag: 0
}), smoother.effects(".team-photo__second", {
    speed: 1.05,
    lag: 0
}), smoother.effects(".team-photo__third", {
    speed: 1.05,
    lag: 0
}), smoother.effects(".team-photo__fourth", {
    speed: 1.1,
    lag: 0
})), document.querySelector(".job-images") && (smoother.effects(".team-photo__first", {
    speed: 1.3,
    lag: 0
}), smoother.effects(".team-photo__second", {
    speed: 1.2,
    lag: 0
}), smoother.effects(".team-photo__third", {
    speed: 1.05,
    lag: 0
}), smoother.effects(".team-photo__fourth", {
    speed: 1.1,
    lag: 0
})), document.querySelector(".careers-team") && smoother.effects(".careers-team .images-block img:last-of-type", {
    speed: 1.2,
    lag: 0
}), smoother.effects(".--image-paralax img", {
    speed: .85,
    lag: 0
});
const appHeight = () => {
    let e = document.documentElement;
    e.style.setProperty("--app-height", +window.innerHeight + "px")
};
if (appHeight(), document.querySelector(".nav")) {
    var burgerBox = document.querySelector(".nav__burger"),
        nav = document.querySelector(".nav");
    burgerBox.onclick = function() {
        nav.classList.toggle("--active"), burgerBox.classList.toggle("--active"), nav.classList.contains("--active") ? smoother && smoother.paused(!0) : setTimeout(function() {
            smoother && smoother.paused(!1)
        }, 500)
    };
    const mGa = document.querySelectorAll(".--link-out");
    mGa.forEach(e => {
        e.addEventListener("click", e => {
            linkOutEvent(e)
        })
    });
    var buttons = gsap.utils.toArray(".nav__button"),
        infoScroll = gsap.utils.toArray(".info-scroll"),
        projectScroll = gsap.utils.toArray(".project-scroll"),
        footerScroll = gsap.utils.toArray(".footer-scroll"),
        formScroll = gsap.utils.toArray(".form-scroll"),
        topScroll = gsap.utils.toArray(".back-to-top");

    function navMenuEvent(e, t, n, i) {
        e.preventDefault(), document.querySelector(".nav").classList.remove("--active"), burgerBox.classList.remove("--active"), smoother && (smoother.paused(!1), gsap.to(smoother, {
            scrollTop: smoother.offset(t, i),
            duration: n,
            ease: "power2.inOut"
        }))
    }

    function linkOutEvent(e) {
        e.preventDefault();
        const t = document.querySelector(".loader"),
            n = (t.classList.remove("--black"), e.currentTarget.href);
        let i = gsap.timeline({
            onComplete: function() {
                window.open(n, "_self")
            }
        }).pause();
        gsap.set(t, {
            display: "flex",
            opacity: 1
        }), i.fromTo(".loader-wave svg", {
            scaleY: 0
        }, {
            scaleY: .75,
            duration: .8,
            ease: "power2.out"
        }), i.fromTo(t, {
            y: "-100%"
        }, {
            y: "0%",
            duration: .8,
            ease: "power4.out"
        }, "<"), i.fromTo(".loader-gif", {
            y: "100vh"
        }, {
            y: "0",
            duration: .8,
            ease: "power4.out"
        }, "<"), i.restart()
    }
    infoScroll.forEach(e => {
        e.addEventListener("click", e => navMenuEvent(e, ".info .pre-text", 1.5, "top 10%"))
    }), projectScroll.forEach(e => {
        e.addEventListener("click", e => navMenuEvent(e, ".project-hero", 1.5, "bottom top"))
    }), footerScroll.forEach(e => {
        e.addEventListener("click", e => navMenuEvent(e, ".footer", 2.5, "top top"))
    }), formScroll.forEach(e => {
        e.addEventListener("click", e => navMenuEvent(e, ".job-form-section", 1.5, "top 30%"))
    }), topScroll.forEach(e => {
        e.addEventListener("click", e => navMenuEvent(e, "body", 2.5, "top top"))
    }), buttons.forEach(t => {
        t.addEventListener("click", e => {
            "" != t.dataset.scroll && document.querySelector(t.dataset.scroll) ? navMenuEvent(e, t.dataset.scroll, 1.5, "top 10%") : linkOutEvent(e)
        })
    })
}
if (document.querySelector(".hero")) {
    let e = gsap.matchMedia();
    e.add({
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isTablet: "(min-width: 768px) and (max-width: 952px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        var t, e = e.conditions["isMobile"];
        return e && (e = document.querySelector(".awards-group-1"), t = document.querySelector(".awards-group-2"), gsap.to([e, t], {
            x: -(e.clientWidth + 86),
            duration: 12,
            ease: "none",
            repeat: -1
        })), () => {}
    })
}
if (document.querySelector(".showreel") && (document.querySelector(".showreel.--comming-soon") ? (gsap.fromTo(".showreel .video-wrapper", {
        x: "100%"
    }, {
        x: "0%",
        duration: 1.25,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".showreel",
            start: "top 95%"
        }
    }), gsap.fromTo(".showreel h2", {
        opacity: 0
    }, {
        opacity: .2,
        duration: 1,
        delay: 1.25,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".showreel",
            start: "top 95%"
        }
    })) : gsap.fromTo(".showreel .video-wrapper", {
        width: 0
    }, {
        width: "100%",
        duration: 1.25,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".showreel",
            start: "top 95%"
        }
    })), document.querySelector(".testimonials")) {
    let e = document.querySelector(".quotes-container"),
        t = document.querySelector(".left-btn"),
        n = document.querySelector(".right-btn"),
        i = e.childElementCount,
        o = (e.children[0].classList.contains("--active") || e.children[0].classList.add("--active"), 0);

    function rotateQuotes(e, t, n) {
        let i = 0;
        return e[i = t + n >= e.length ? 0 : t + n < 0 ? e.length - 1 : t + n].classList.add("--active"), e[t].classList.remove("--active"), i
    }
    1 == i ? document.querySelector(".buttons-wrapper").style.display = "none" : (t.addEventListener("click", function() {
        o = rotateQuotes(e.children, o, -1)
    }), n.addEventListener("click", function() {
        o = rotateQuotes(e.children, o, 1)
    }))
}
if (document.querySelector(".clients")) {
    let e = gsap.timeline({
        scrollTrigger: {
            trigger: ".clients",
            start: "top center",
            end: "top center",
            toggleActions: "restart none none reverse"
        }
    });
    e.fromTo([".testimonials", ".clients", ".projects", ".team"], {
        backgroundColor: "#FFFFFF"
    }, {
        backgroundColor: "#0E0E13",
        duration: .75,
        ease: "power2.inOut"
    }), e.to([".testimonials h2", ".testimonials p", ".testimonials a", ".testimonials span"], {
        color: "#FFFFFF",
        duration: .75,
        ease: "power2.inOut"
    }, "<"), e.to([".testimonials .play-btn path", ".testimonials .symbol path"], {
        fill: "#FFFFFF",
        duration: .75,
        ease: "power2.inOut"
    }, "<"), e.to([".client__logo"], {
        opacity: 1,
        duration: .75,
        ease: "power2.inOut"
    }, "<"), e.to([".client__logo-dark"], {
        opacity: 0,
        duration: .75,
        ease: "power2.inOut"
    }, "<"), e.from([".client p", ".clients h3"], {
        color: "#0E0E13",
        duration: .75,
        ease: "power2.inOut"
    }, "<"), gsap.from([".client", ".clients h3"], {
        y: 200,
        opacity: 0,
        duration: .75,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".clients",
            start: "top center",
            end: "top center",
            once: !0,
            toggleActions: "restart none none reverse"
        }
    })
}
let teamRippleScene = null;
if (document.querySelector(".team")) {
    let e = gsap.matchMedia(),
        o = null;
    e.add({
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isTablet: "(min-width: 768px) and (max-width: 952px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        let {
            isMax1440p: t,
            isTablet: n,
            isMobile: i
        } = e.conditions;
        return (o = gsap.timeline({
            scrollTrigger: {
                trigger: ".team .headline-container",
                start: "center center",
                end: () => i ? "+=950" : t ? "+=1120" : "+=1400",
                scrub: !0,
                pin: !0
            }
        })).to(".team .headline-wrapper", {
            y: () => n ? "-=280" : i ? "-=260" : t ? "-=115" : "-=140",
            ease: "power4.in"
        }), () => {}
    }), window.addEventListener("load", function() {
        !is_touch_enabled() && 952 < window.innerWidth && (teamRippleScene = safariAgent ? new RipplesScene({
            ripplesContainer: ".team #water-ripples",
            canvasWrapper: ".team #canvas",
            headingSelector: ".team .headline-wrapper h2",
            xCenter: !1,
            yCenter: !0,
            viscosity: 2,
            speed: 2.4,
            size: 1.2,
            displacementStrength: 2,
            lightIntensity: 2.4,
            shadowIntensity: 3.2
        }) : new RipplesScene({
            ripplesContainer: ".team #water-ripples",
            canvasWrapper: ".team #canvas",
            headingSelector: ".team .headline-wrapper h2",
            xCenter: !1,
            yCenter: !0,
            viscosity: .8,
            speed: 2,
            size: 1,
            displacementStrength: 1,
            lightIntensity: 2,
            shadowIntensity: 2.8
        }))
    })
}
if (document.querySelector(".footer")) {
    const gHa = document.querySelector(".info-column__btn.details-btn");
    gHa.addEventListener("click", e => {
        e.preventDefault();
        navigator.clipboard.writeText("Blackfish & Co. s.r.o. \nRoháčova 145/14, 130 00 Praha 3 \nIČ: 06526411 VAT ID: CZ06526411"), gHa.classList.add("--alert"), setTimeout(() => {
            gHa.classList.remove("--alert")
        }, 2e3)
    })
}
if (document.querySelector(".careers-team")) {
    let e = gsap.matchMedia();
    e.add({
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isTablet: "(min-width: 768px) and (max-width: 952px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        e = e.conditions.isMobile;
        return e && gsap.fromTo([".careers-team .headline-wrapper", ".careers-team .images-block"], {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1.25,
            scrollTrigger: {
                trigger: ".careers-team .headline-wrapper",
                start: "top 80%",
                end: "top 80%",
                once: !0,
                toggleActions: "restart none none none"
            }
        }), gsap.fromTo(".careers-team .stats-block", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1.25,
            scrollTrigger: {
                trigger: ".careers-team .images-block",
                start: "bottom 80%",
                end: "bottom 80%",
                once: !0,
                toggleActions: "restart none none none"
            }
        }), () => {}
    })
}
if (document.querySelector(".casetudies-feed .filters")) {
    const pHa = document.querySelectorAll(".filter"),
        qHa = document.querySelector(".sub-feed"),
        rHa = document.querySelector(".main-feed");
    let o = document.querySelector(".casetudies-feed");
    pHa[0].addEventListener("click", e => {
        if (e.preventDefault(), !o.classList.contains("--animating") && !pHa[0].classList.contains("--active")) {
            ressetSubFeedTl(qHa), pHa[1].classList.remove("--active"), pHa[0].classList.add("--active"), o.classList.add("--animating");
            let e = gsap.timeline({
                onComplete: () => setTimeout(() => o.classList.remove("--animating"), 200)
            });
            e.to(qHa, {
                y: 200,
                opacity: 0,
                ease: "power3.out",
                duration: 1.25,
                onComplete: () => {
                    qHa.style.display = "none", gsap.set(qHa, {
                        y: 0,
                        opacity: 1
                    }), rHa.classList.remove("--absolute")
                }
            }), e.fromTo(rHa, {
                y: 200,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                duration: 1.25,
                onStart: () => {
                    rHa.classList.add("--absolute"), rHa.style.display = "flex"
                }
            }, "<0.3")
        }
    }), pHa[1].addEventListener("click", e => {
        if (e.preventDefault(), !(o.classList.contains("--animating") || pHa[1].classList.contains("--active") && !document.querySelector(".type-feed.--expanded"))) {
            pHa[1].classList.add("--active"), pHa[0].classList.remove("--active"), o.classList.add("--animating");
            let e = gsap.timeline({
                onComplete: () => o.classList.remove("--animating")
            });
            document.querySelector(".type-feed.--expanded") ? e.add(ressetSubFeedTl(qHa)) : (e.to(rHa, {
                y: 200,
                opacity: 0,
                ease: "power3.out",
                duration: 1.25,
                onComplete: () => {
                    rHa.style.display = "none", gsap.set(rHa, {
                        y: 0,
                        opacity: 1
                    }), qHa.classList.remove("--absolute")
                }
            }), e.fromTo(qHa, {
                y: 200,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                duration: 1.25,
                onStart: () => {
                    qHa.classList.add("--absolute"), qHa.style.display = "block"
                }
            }, "<0.3"))
        }
    });
    const tHa = document.querySelectorAll(".type-feed");

    function ressetSubFeedTl(e) {
        const t = gsap.timeline();
        var n = document.querySelectorAll(".type-feed.--expanded .project:nth-of-type(n + 5)");
        return t.to(tHa, {
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            onComplete: () => {
                document.querySelectorAll(".type-feed.--vertical").forEach(e => {
                    e.classList.remove("--vertical")
                })
            }
        }), t.set(tHa, {
            display: "block"
        }), t.set(n, {
            display: "none"
        }), t.set(".show-more .more", {
            opacity: 1
        }), t.set(".show-more .close", {
            opacity: 0
        }), t.to(tHa, {
            opacity: 1,
            ease: "power3.out",
            duration: 1,
            onComplete: () => {
                document.querySelectorAll(".type-feed.--expanded").forEach(e => {
                    e.classList.remove("--expanded")
                })
            }
        }), t
    }
    tHa.forEach(i => {
        i.querySelectorAll(".project").length <= 3 && i.classList.add("--short"), i.querySelector(".show-more").addEventListener("click", t => {
            if (t.preventDefault(), !o.classList.contains("--animating")) {
                o.classList.add("--animating"), i.classList.toggle("--expanded");
                const n = i.querySelectorAll(".project:nth-of-type(n + 4)");
                t = qHa.querySelectorAll('.type-feed:not([class*="--expanded"])');
                let e = gsap.timeline({
                    onComplete: () => {
                        o.classList.remove("--animating")
                    }
                });
                i.classList.contains("--expanded") ? 952 < window.innerWidth ? (e.to(t, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: .75
                }), e.to(smoother, {
                    scrollTop: smoother.offset(pHa, "top 80px"),
                    duration: .75,
                    ease: "power1.inOut"
                }, "<0.2"), e.to(i, {
                    y: -i.offsetTop,
                    duration: .75,
                    ease: "power1.inOut"
                }, "<"), e.set(".show-more .more", {
                    opacity: 0
                }), e.set(".show-more .close", {
                    opacity: 1
                }), e.from(n, {
                    opacity: 0,
                    duration: .75,
                    ease: "power1.inOut",
                    onStart: () => {
                        n.forEach(e => {
                            e.style.display = "block"
                        })
                    }
                }), e.set(t, {
                    display: "none"
                }, "<"), e.set(i, {
                    y: 0
                }, "<")) : (e.to(tHa, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: .75
                }), e.to(smoother, {
                    scrollTop: smoother.offset(pHa, "top 80px"),
                    duration: .5,
                    ease: "power1.inOut"
                }, "<0.2"), e.set(n, {
                    display: "block"
                }), e.set(t, {
                    display: "none"
                }), e.set(".show-more .more", {
                    opacity: 0
                }), e.set(".show-more .close", {
                    opacity: 1
                }), e.to(i, {
                    opacity: 1,
                    ease: "power3.out",
                    duration: .75,
                    onStart: function() {
                        i.classList.add("--vertical")
                    }
                })) : i.classList.contains("--expanded") || (952 < window.innerWidth ? (e.to(t, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: .75
                }), e.set(t, {
                    display: "block"
                }), e.set(n, {
                    display: "none"
                }), e.set(".show-more .more", {
                    opacity: 1
                }), e.set(".show-more .close", {
                    opacity: 0
                }), e.to(tHa, {
                    opacity: 1,
                    ease: "power3.out",
                    duration: .75
                })) : (e.to(tHa, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: .75
                }), e.set(n, {
                    display: "none"
                }), e.set(t, {
                    display: "block"
                }), e.set(".show-more .more", {
                    opacity: 1
                }), e.set(".show-more .close", {
                    opacity: 0
                }), e.to(tHa, {
                    opacity: 1,
                    ease: "power3.out",
                    duration: .75,
                    onStart: function() {
                        i.classList.remove("--vertical")
                    }
                })))
            }
        })
    })
}
if (is_mouse_enabled() && document.querySelector(".cursor")) {
    const JHa = document.querySelector(".cursor"),
        KHa = document.querySelector(".testimonials");
    let t = gsap.quickTo(".cursor-main", "x", {
            duration: .05,
            ease: "power3"
        }),
        n = gsap.quickTo(".cursor-main", "y", {
            duration: .05,
            ease: "power3"
        }),
        i = gsap.quickTo(".cursor-follower", "x", {
            duration: .5,
            ease: "power3"
        }),
        o = gsap.quickTo(".cursor-follower", "y", {
            duration: .5,
            ease: "power3"
        }),
        r = (window.addEventListener("mousemove", e => {
            t(e.clientX), n(e.clientY), i(e.clientX), o(e.clientY)
        }), []);
    if (KHa && !KHa.classList.contains("--no-video") && 952 <= window.innerWidth) {
        let t = gsap.quickTo(".testimonials-video-wrapper", "left", {
                duration: .1,
                ease: "power3"
            }),
            n = gsap.quickTo(".testimonials-video-wrapper", "top", {
                duration: .1,
                ease: "power3"
            });
        window.addEventListener("mousemove", e => {
            (r = testimonialsH2effect(e)) && (gsap.to(".h2-white-wrapper", {
                clipPath: "circle(130px at " + r[0] + "px " + r[1] + "px",
                duration: .1,
                ease: "power3"
            }), t(r[0]), n(r[1]))
        })
    }
    window.addEventListener("load", () => {
        document.querySelector("#cm") && (document.querySelector("#cm").classList.add("--cursor-light"), document.querySelector("#c-p-bn").classList.add("--cursor-focus-dark"), document.querySelector("#c-s-bn").classList.add("--cursor-focus-light"), document.querySelector(".cc-link").classList.add("--cursor-focus-light"));
        setupMouseEvents(document.querySelectorAll(".--cursor-light"), 1, "--light");
        var e = document.querySelectorAll(".--cursor-dark"),
            e = (setupMouseEvents(e, setupCursorTl("--dark"), "--dark"), document.querySelectorAll(".--cursor-reel")),
            e = (setupMouseEvents(e, 1, "--reel"), document.querySelectorAll(".--cursor-soon")),
            e = (setupMouseEvents(e, setupSoonCursorTl(), "--soon"), document.querySelectorAll(".--cursor-more")),
            e = (setupMouseEvents(e, setupSoonCursorTl(), "--more"), document.querySelectorAll(".--cursor-arrow")),
            e = (setupMouseEvents(e, setupCursorTl("--arrow"), "--arrow"), document.querySelectorAll(".--cursor-focus-light")),
            e = (setupMouseEvents(e, setupCursorTl("--focus-light"), "--focus-light"), document.querySelectorAll(".--cursor-focus-dark"));
        setupMouseEvents(e, setupCursorTl("--focus-dark"), "--focus-dark");
        const t = document.querySelector(".testimonials .h2-white");
        document.querySelector(".testimonials-video");
        let n = testimonialsCursorTl();
        t && (t.addEventListener("mouseenter", e => {
            n.restart()
        }), t.addEventListener("mouseleave", e => {
            n.reverse()
        })), gsap.set([".cursor-main", ".cursor-follower"], {
            opacity: 0
        })
    })
}

function setupMouseEvents(e, t, n) {
    const i = document.querySelectorAll(".cursor");
    e.forEach(e => {
        e.addEventListener("mouseover", e => {
            i[0].classList.add(n), i[1].classList.add(n)
        }), e.addEventListener("mouseout", e => {
            i[0].classList.remove(n), i[1].classList.remove(n)
        })
    })
}

function testimonialsH2effect(e) {
    var t = getPosition(document.querySelector(".testimonials .h2-white-wrapper")),
        n = e.clientX - t[0],
        e = e.clientY - t[1];
    return 0 <= e && e <= 440 && [n, e]
}

function getPosition(e) {
    e = e.getBoundingClientRect();
    return [e.left, e.top]
}

function is_touch_enabled() {
    return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints
}

function is_mouse_enabled() {
    return !!matchMedia("(pointer:fine)").matches
}

function setupCursorTl(e) {
    const t = document.querySelectorAll(".cursor");
    let n = gsap.timeline().pause();
    return n.set(t, {
        onComplete: function() {
            t[0].classList.add(e), t[1].classList.add(e)
        },
        onReverseComplete: function() {
            t[0].classList.remove(e), t[1].classList.remove(e)
        }
    }), n
}

function setupSoonCursorTl() {
    let e = gsap.timeline().pause();
    const t = document.querySelectorAll(".cursor");
    return e.fromTo(t, {
        scale: 1,
        opacity: 1
    }, {
        scale: .1,
        opacity: 0,
        duration: .2,
        ease: "power2.inOut"
    }), e.set(t, {
        onComplete: function() {
            t[0].classList.add("--soon"), t[1].classList.add("--soon"), t[0].classList.remove("--dark"), t[1].classList.remove("--dark")
        },
        onReverseComplete: function() {
            t[0].classList.remove("--soon"), t[1].classList.remove("--soon"), t[0].classList.add("--dark"), t[1].classList.add("--dark")
        }
    }), e.fromTo(t, {
        scale: .1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: .2,
        ease: "power2.inOut"
    }), e
}

function setupArrowCursorTl() {
    let e = gsap.timeline().pause();
    const t = document.querySelectorAll(".cursor");
    return e.to(t, {
        scale: .1,
        opacity: 0,
        duration: .2,
        ease: "power2.inOut"
    }), e.set(t, {
        onComplete: function() {
            t[0].classList.add("--arrow"), t[1].classList.add("--arrow")
        },
        onReverseComplete: function() {
            t[0].classList.remove("--arrow"), t[1].classList.remove("--arrow")
        }
    }), e.to(t, {
        scale: 1,
        opacity: 1,
        duration: .2,
        ease: "power2.inOut"
    }), e
}

function testimonialsCursorTl() {
    let e = gsap.timeline().pause();
    const t = document.querySelectorAll(".cursor");
    return e.fromTo(t, {
        scale: 1,
        opacity: 1
    }, {
        scale: .1,
        opacity: 0,
        duration: .2,
        ease: "power2.inOut"
    }), e.set(t, {
        onComplete: function() {
            t[0].classList.add("--testimonials-Cursor"), t[1].classList.add("--testimonials-Cursor")
        },
        onReverseComplete: function() {
            t[0].classList.remove("--testimonials-Cursor"), t[1].classList.remove("--testimonials-Cursor")
        }
    }), document.querySelector(".testimonials") && (e.fromTo(".testimonials-video-wrapper", {
        width: 0,
        opacity: 0
    }, {
        width: 260,
        opacity: 1,
        duration: .4,
        ease: "power2.inOut",
        immediateRender: !0
    }), e.fromTo(".testimonials .h2-white-wrapper", {
        opacity: 0
    }, {
        opacity: 1,
        duration: .4,
        ease: "power2.inOut"
    }, "<")), e
}
if (document.querySelector(".job-form-section")) {
    document.addEventListener("wpcf7invalid", function(e) {
        document.querySelector(".wpcf7-response-output").style.color = "#CE204A"
    }, !1), document.addEventListener("wpcf7spam", function(e) {
        document.querySelector(".wpcf7-response-output").style.color = "#CE204A"
    }, !1), document.addEventListener("wpcf7mailfailed", function(e) {
        document.querySelector(".wpcf7-response-output").style.color = "#CE204A"
    }, !1), document.addEventListener("wpcf7mailsent", function(e) {
        document.querySelector(".wpcf7-response-output").style.color = "#009C35"
    }, !1);
    const JIa = document.querySelector("#file"),
        KIa = (JIa.addEventListener("change", n => {
            setTimeout(function() {
                var e, t;
                document.querySelector("label:last-of-type .wpcf7-not-valid-tip") ? (document.querySelector(".job-form-section .file-name-wrap").style.display = "none", document.querySelector(".job-form-section .file-name").textContent = "") : ([t] = n.target.files, {
                    name: t,
                    size: e
                } = t, t = t + ` - ${(e/1e3).toFixed(2)}KB`, document.querySelector(".job-form-section .file-name-wrap").style.display = "flex", document.querySelector(".job-form-section .file-name").textContent = t)
            }, 250)
        }), document.querySelectorAll(".job-form-section label"));
    KIa.forEach(t => {
        t.querySelector(".check") && t.addEventListener("change", e => {
            setTimeout(function() {
                t.querySelector(".wpcf7-not-valid-tip") ? t.querySelector(".check").style.display = "none" : t.querySelector(".check").style.display = "block"
            }, 250)
        })
    });
    var wpcf7Elm = document.querySelector(".wpcf7");
    wpcf7Elm.addEventListener("wpcf7mailsent", function(e) {
        document.querySelector(".job-form-section .file-name-wrap").style.display = "none", document.querySelector(".job-form-section .file-name").textContent = "", document.querySelectorAll(".check").forEach(e => {
            e.style.display = "none"
        })
    }, !1), document.querySelector(".wpcf7-textarea").oninput = function() {
        auto_grow(document.querySelector(".wpcf7-textarea"))
    }
}

function auto_grow(e) {
    e.style.height = e.scrollHeight + "px"
}
if (document.querySelector(".job-hero")) {
    let e = gsap.matchMedia();
    e.add({
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isTablet: "(min-width: 768px) and (max-width: 952px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        var e = e.conditions["isMobile"];
        return e || (e = document.querySelector(".job-hero .right-block").clientHeight - document.querySelector(".job-hero .left-block").clientHeight, gsap.to(".job-hero .left-block", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".job-hero .container",
                start: "-72px top",
                end: "+=" + e,
                scrub: !0,
                pin: ".left-block",
                pinSpacing: !1
            }
        })), () => {}
    });
    const _Ia = document.querySelector(".job-hero .copy-link");
    _Ia.addEventListener("click", e => {
        e.preventDefault(), navigator.clipboard.writeText(e.target.href), _Ia.classList.add("--alert"), setTimeout(() => {
            _Ia.classList.remove("--alert")
        }, 2e3)
    })
}
if (document.querySelector(".job-images")) {
    let e = gsap.matchMedia(),
        o = null;
    e.add({
        isMax1280p: "(min-width: 953px) and (max-width: 1280px)",
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isTablet: "(min-width: 768px) and (max-width: 952px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        let {
            isMax1280p: t,
            isMax1440p: n,
            isMobile: i
        } = e.conditions;
        return o = gsap.timeline({
            scrollTrigger: {
                trigger: ".job-images .container",
                start: () => i ? "316px center" : t ? "692px center" : n ? "772px center" : "884px center",
                end: "bottom center",
                scrub: !0,
                pin: ".job-images .headline-wrapper"
            }
        }), () => {}
    })
}
smoother && smoother.paused(!0);
let pageLoadTl = gsap.timeline({
    id: "pageLoadTl",
    onComplete: function() {
        smoother && smoother.paused(!1)
    }
});
const loader = document.querySelector(".loader");
if (loader)
    if (loader.classList.contains("--homepage")) pageLoadTl.to(".loader-gif", {
        opacity: 0,
        duration: .5,
        ease: "power1.Out"
    }, 3), pageLoadTl.to(loader, {
        opacity: 0,
        duration: 1,
        ease: "power1.Out"
    }), pageLoadTl.set(loader, {
        display: "none"
    });
    else if (loader.classList.contains("--fast")) {
    let e = loader.classList.contains("--delayed") ? 1 : 0;
    pageLoadTl.addLabel("loaderUp", e), pageLoadTl.to(loader, {
        y: "-100%",
        duration: .6,
        ease: "power4.Out"
    }, "loaderUp"), pageLoadTl.fromTo(".loader-wave svg", {
        scaleY: .75
    }, {
        scaleY: 0,
        duration: .6,
        ease: "power1.inOut"
    }, "-=0.3")
} else pageLoadTl.to(".body", {
    duration: 1
});
if (document.querySelector(".--loader-slide") && (gsap.set(".--loader-slide", {
        y: 200,
        opacity: 0
    }), pageLoadTl.to(".--loader-slide", {
        y: 0,
        duration: .75,
        ease: "power1.Out",
        delay: .25
    }, "loaderUp"), pageLoadTl.to(".--loader-slide", {
        opacity: 1,
        duration: 1.25,
        ease: "power1.Out",
        delay: .25
    }, "loaderUp")), document.querySelector(".--loader-gradient") && pageLoadTl.from(".--loader-gradient", {
        opacity: 0,
        duration: 1,
        ease: "power1.Out"
    }), document.querySelector(".post") ? pageLoadTl.addLabel("headingLabel", "-=1") : pageLoadTl.addLabel("headingLabel", "-=0.75"), document.querySelector(".--loader-headline") && pageLoadTl.add(setupTextSkewLoad(".--loader-headline", skew = 10, opacity = .3, yDistance = "100%", ease = "power3.inOut", duration = 1.5), "headingLabel"), document.querySelector("nav") && (gsap.set(".nav", {
        y: "-100%",
        opacity: 0
    }), document.querySelector(".job-hero") ? pageLoadTl.to(".nav", {
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        duration: 1.5
    }, "headingLabel") : pageLoadTl.to(".nav", {
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        duration: 1.5
    }, "headingLabel+=1.25")), document.querySelector(".--loader-fade-in") && (gsap.set(".--loader-fade-in", {
        opacity: 0
    }), pageLoadTl.to(".--loader-fade-in", {
        opacity: 1,
        ease: "power3.out",
        duration: 1.25,
        delay: .25
    }, "<")), document.querySelector(".--loader-bottom-panel") && pageLoadTl.from(".--loader-bottom-panel", {
        y: "100%",
        opacity: 0,
        ease: "power3.out",
        duration: 1.5
    }, "<"), document.querySelector(".--loader-appear-up") && pageLoadTl.from(".--loader-appear-up", {
        y: 125,
        opacity: 0,
        ease: "power3.out",
        duration: 1.5
    }, "<"), document.querySelector(".cursor") && pageLoadTl.fromTo([".cursor-main", ".cursor-follower"], {
        opacity: 0
    }, {
        opacity: 1,
        ease: "power3.out",
        duration: 1.5
    }, "<"), pageLoadTl.pause(), window.addEventListener("load", () => {
        if (pageLoadTl.play(), !is_touch_enabled() && 952 < window.innerWidth && document.querySelector(".ripples__gradient")) {
            let n = null,
                e = ".hero .headline-wrapper h1",
                t = !1;
            document.querySelector(".careers-hero") && (e = ".careers-hero .headline-wrapper h1", t = !0), n = safariAgent ? new RipplesScene({
                ripplesContainer: ".ripples__gradient #water-ripples",
                canvasWrapper: ".ripples__gradient #canvas",
                headingSelector: e,
                xCenter: t,
                yCenter: !1,
                viscosity: 2,
                speed: 2.4,
                size: 1.2,
                displacementStrength: 2,
                lightIntensity: 2.4,
                shadowIntensity: 3.2
            }) : new RipplesScene({
                ripplesContainer: ".ripples__gradient #water-ripples",
                canvasWrapper: ".ripples__gradient #canvas",
                headingSelector: e,
                xCenter: t,
                yCenter: !1,
                viscosity: .8,
                speed: 2,
                size: 1,
                displacementStrength: 1.2,
                lightIntensity: 2,
                shadowIntensity: 2.8
            }), pageLoadTl.from(n.titleObject, {
                y: 104,
                skewY: .2,
                opacity: .3,
                duration: 1.5,
                ease: "power3.inOut",
                onUpdate: () => {
                    n.writeTitleCanvas()
                }
            }, "headingLabel");
            var i = performance.now(),
                o = performance.now(),
                r = 0;

            function s() {
                if (i + 15e3 >= performance.now()) {
                    var e = performance.now();
                    if (r++, 1e3 < e - o) {
                        var t = (r / ((e - o) / 1e3)).toFixed(1);
                        if (o = e, r = 0, t <= 25) return console.log("--- LOW FPS ---"), void a([n, teamRippleScene])
                    }
                }
                requestAnimationFrame(s)
            }
            setTimeout(() => {
                i = performance.now(), o = performance.now(), requestAnimationFrame(s)
            }, 2e3)
        } else is_touch_enabled(), a();

        function a(e = []) {
            e.forEach(e => {
                e && e.curtains.dispose()
            });
            let t = document.querySelectorAll(".ripples-section");
            t.forEach(e => {
                e.classList.add("--no-ripples")
            })
        }
    }), document.querySelector(".share-buttons")) {
    const EJa = document.querySelector(".share-socials .copy-link");
    EJa.addEventListener("click", e => {
        e.preventDefault();
        e = EJa.dataset.link;
        navigator.clipboard.writeText(e), EJa.classList.add("--alert"), setTimeout(() => {
            EJa.classList.remove("--alert")
        }, 2e3)
    })
}

function setHeroHeight() {
    let e = document.querySelector(".project-hero");
    getComputedStyle(e).getPropertyValue("--container-height") && e.style.setProperty("--container-height", e.offsetHeight + "px")
}
if (document.querySelector(".project-hero") && (document.querySelector(".project-hero__background__img") ? gsap.to(".project-hero__background__img", {
        ease: "none",
        scrollTrigger: {
            trigger: ".project-hero__background__img",
            start: "top top",
            end: "+=200%",
            scrub: !0,
            pin: !0
        }
    }) : document.querySelector(".project-hero__background__video") && gsap.to(".project-hero__background__video", {
        ease: "none",
        scrollTrigger: {
            trigger: ".project-hero__background__video",
            start: "top top",
            end: "+=200%",
            scrub: !0,
            pin: !0
        }
    }), setHeroHeight(), window.addEventListener("resize", e => {
        setHeroHeight()
    })), document.querySelector(".scroll-wave")) {
    let e = gsap.matchMedia();
    e.add({
        isMax1440p: "(min-width: 953px) and (max-width: 1500px)",
        isMin1440p: "(min-width: 1501px)",
        isMobile: "(max-width: 952px)"
    }, e => {
        let n = e.conditions["isMobile"];
        document.querySelectorAll(".scroll-wave svg");
        let i = {
                scaleY: 0
            },
            o = (gsap.quickSetter(".scroll-wave svg", "scaleY", ""), gsap.utils.clamp(0, 1));
        ScrollTrigger.create({
            onUpdate: (e, t = smoother) => {
                e = o(e.getVelocity() / (n ? 400 : 1800));
                Math.abs(e) > Math.abs(i.scaleY) && (i.scaleY = e, gsap.to(i, {
                    scaleY: 0,
                    duration: .4,
                    ease: "power3.out",
                    overwrite: !0,
                    onUpdate: () => gsap.to(".scroll-wave svg", {
                        scaleY: i.scaleY,
                        duration: .4,
                        ease: "none"
                    })
                }))
            }
        }), gsap.set(".scroll-wave svg", {
            transformOrigin: "top center",
            force3D: !0
        })
    })
}
var cc = initCookieConsent();

function tablesWrap() {
    for (var e = document.querySelectorAll(".entry-content table"), t = 0; t < e.length; ++t) {
        e[t].classList.add("table");
        var n = document.createElement("div");
        n.classList.add("u-table-responsive"), e[t].parentNode.insertBefore(n, e[t]), n.appendChild(e[t])
    }
}

function iframesWrap() {
    for (var e = document.querySelectorAll(".entry-content iframe"), t = 0; t < e.length; ++t) {
        e[t].removeAttribute("height"), e[t].removeAttribute("width");
        var n = document.createElement("div");
        n.classList.add("u-embed-responsive"), n.classList.add("u-embed-responsive-16by9"), e[t].parentNode.insertBefore(n, e[t]), n.appendChild(e[t])
    }
}

function findShapeIndex(i, o, r) {
    r = r || {};

    function e(e) {
        return w.querySelectorAll(e)
    }

    function t(e, t) {
        var n, i = w.createElementNS("http://www.w3.org/2000/svg", e),
            o = /([a-z])([A-Z])/g;
        for (n in t) i.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), t[n]);
        return i
    }

    function s(e, t) {
        var n, i;
        return e = "string" != typeof e || (e.match(S) || []).length < 3 ? (n = C.selector(e)) && n[0] ? (i = (n = n[0]).nodeName.toUpperCase(), t && "PATH" !== i && (n = MorphSVGPlugin.convertToPath(n, !1)[0], i = "PATH"), n.getAttribute("PATH" === i ? "d" : "points") || "") : (console.log("WARNING: invalid morph to: " + e), !1) : e
    }

    function a() {
        f.reversed(!f.reversed()).resume(), g.reversed(!g.reversed()).resume()
    }

    function n() {
        T.innerHTML = "shapeIndex: " + E + (E === _ ? " (auto)" : ""), f.seek(0).kill(), g.seek(0).kill(), A(), C.fromTo(T.parentNode, .4, {
            backgroundColor: "#777"
        }, {
            backgroundColor: "black",
            ease: Linear.easeNone
        })
    }

    function l() {
        E = (E + 1) % (1 + y), n()
    }

    function u() {
        E = (E - 1) % (1 + y), n()
    }
    var c, d, p, h, f, g, m, v, _, y, b, x, D, w = document,
        C = (window.GreenSockGlobals || window).TweenLite,
        S = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        T = e("#shapeIndexLabel")[0] || (b = w.createElement("div"), x = w.createElement("div"), D = e("body")[0], p = w.createElement("div"), h = w.createElement("div"), x.setAttribute("id", "shapeIndexLabel"), c = t("circle", {
            cx: 0,
            cy: 0,
            r: (r.startStrokeWidth || 3) + 3,
            fill: r.startStroke || "red"
        }), d = t("circle", {
            cx: 0,
            cy: 0,
            r: (r.endStrokeWidth || 3) + 3,
            fill: r.endStroke || "yellow"
        }), C.set(b, {
            padding: "0px",
            position: "absolute",
            bottom: 0,
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "black",
            color: "#91e600",
            border: "1px solid #999",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            userSelect: "none",
            fontFamily: "sans-serif"
        }), C.set(x, {
            display: "inline-block",
            minWidth: "210px",
            marginRight: "10px",
            textAlign: "center",
            marginLeft: "10px"
        }), C.set([p, h], {
            display: "inline-block",
            padding: "0 15px",
            color: "#ccc",
            height: "50px",
            lineHeight: "48px",
            cursor: "pointer"
        }), C.set(h, {
            borderRight: "1px solid #999"
        }), C.set(p, {
            borderLeft: "1px solid #999"
        }), h.innerHTML = " - ", p.innerHTML = " + ", b.appendChild(h), b.appendChild(x), b.appendChild(p), D && D.appendChild(b), x),
        E = 0,
        k = {
            x: 0,
            y: 0
        },
        A = function() {
            n = i.getAttribute("d"), e = s(o, !0), t = E, m = MorphSVGPlugin.pathDataToRawBezier(n), v = MorphSVGPlugin.pathDataToRawBezier(e), MorphSVGPlugin.equalizeSegmentQuantity(m, v, t);
            var e, t, n = [m[0][0], m[0][1], v[0][0], v[0][1]];
            k.x = n[0], k.y = n[1], c.setAttribute("cx", k.x), c.setAttribute("cy", k.y), d.setAttribute("cx", n[2]), d.setAttribute("cy", n[3]), f = C.to(i, r.duration || 3, {
                delay: .5,
                morphSVG: {
                    shape: o,
                    shapeIndex: E
                },
                ease: r.ease || "Linear.easeNone",
                onComplete: a,
                onReverseComplete: a
            }), g = C.to(k, r.duration || 3, {
                delay: .5,
                x: n[2],
                y: n[3],
                ease: r.ease || "Linear.easeNone",
                onUpdate: function() {
                    c.setAttribute("cx", k.x), c.setAttribute("cy", k.y)
                }
            })
        };
    (i = "string" == typeof i ? C.selector(i)[0] : i) ? i.nodeName && "PATH" !== i.nodeName.toUpperCase() ? console.log("ERROR: target of findShapeIndex() must be a path.") : ((i = i.push && i[0] && i[0].nodeName ? i[0] : i).parentNode && (i.parentNode.appendChild(d), i.parentNode.appendChild(c)), ("string" != typeof o || (o.match(S) || []).length < 3) && (D = C.selector(o)) && D[0] && (D = D[0], C.set(D, {
        display: "block",
        strokeWidth: r.endStrokeWidth || 3,
        stroke: r.endStroke || "yellow",
        fill: r.endFill || "none",
        visibility: "visible",
        opacity: r.endOpacity || .7
    })), C.set(i, {
        display: "block",
        strokeWidth: r.startStrokeWidth || 3,
        stroke: r.startStroke || "red",
        fill: r.startFill || "none",
        visibility: "visible",
        opacity: r.startOpacity || .7
    }), m = MorphSVGPlugin.pathDataToRawBezier(i.getAttribute("d")), v = MorphSVGPlugin.pathDataToRawBezier(s(o, !0)), _ = E = Math.round(MorphSVGPlugin.equalizeSegmentQuantity(m, v, "auto")[0]), y = m[0].length / 6 | 0, C.killTweensOf([i, o], !1, {
        morphSVG: !0
    }), A(), T.innerHTML = "shapeIndex: " + E + (E === _ ? " (auto)" : ""), window.addEventListener("keydown", function(e) {
        e = e.keyCode;
        38 === e || 39 === e || 85 === e ? l() : 37 !== e && 40 !== e && 68 !== e || u()
    }), p.addEventListener("click", l), h.addEventListener("click", u)): console.log("ERROR: target not found for findShapeIndex(). Please use a valid target.")
}
cc.run({
        current_lang: "en",
        autoclear_cookies: !0,
        page_scripts: !0,
        delay: 5e3,
        gui_options: {
            consent_modal: {
                layout: "cloud",
                position: "bottom right",
                transition: "slide",
                swap_buttons: !1
            },
            settings_modal: {
                layout: "box",
                transition: "slide"
            }
        },
        onFirstAction: function(e, t) {},
        onAccept: function(e) {},
        onChange: function(e, t) {},
        languages: {
            en: {
                consent_modal: {
                    title: "We use cookies!",
                    description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                    primary_btn: {
                        text: "Accept all",
                        role: "accept_all"
                    },
                    secondary_btn: {
                        text: "Reject all",
                        role: "accept_necessary"
                    }
                },
                settings_modal: {
                    title: "Cookie preferences",
                    save_settings_btn: "Save settings",
                    accept_all_btn: "Accept all",
                    reject_all_btn: "Reject all",
                    close_btn_label: "Close",
                    cookie_table_headers: [{
                        col1: "Name"
                    }, {
                        col2: "Domain"
                    }, {
                        col3: "Expiration"
                    }, {
                        col4: "Description"
                    }],
                    blocks: [{
                        title: "Cookie usage 📢",
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: "Strictly necessary cookies",
                        description: "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                        toggle: {
                            value: "necessary",
                            enabled: !0,
                            readonly: !0
                        }
                    }, {
                        title: "Performance and Analytics cookies",
                        description: "These cookies allow the website to remember the choices you have made in the past",
                        toggle: {
                            value: "analytics",
                            enabled: !1,
                            readonly: !1
                        },
                        cookie_table: [{
                            col1: "^_ga",
                            col2: "google.com",
                            col3: "2 years",
                            col4: "description ...",
                            is_regex: !0
                        }, {
                            col1: "_gid",
                            col2: "google.com",
                            col3: "1 day",
                            col4: "description ..."
                        }]
                    }, {
                        title: "Advertisement and Targeting cookies",
                        description: "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
                        toggle: {
                            value: "targeting",
                            enabled: !1,
                            readonly: !1
                        }
                    }, {
                        title: "More information",
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.'
                    }]
                }
            }
        }
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.dat = {})
    }(this, function(e) {
        "use strict";

        function t(e, t) {
            var n = e.__state.conversionName.toString(),
                i = Math.round(e.r),
                o = Math.round(e.g),
                r = Math.round(e.b),
                s = e.a,
                a = Math.round(e.h),
                l = e.s.toFixed(1),
                u = e.v.toFixed(1);
            if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                for (var c = e.hex.toString(16); c.length < 6;) c = "0" + c;
                return "#" + c
            }
            return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + o + "," + r + "," + s + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + o + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + r + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + u + ",a:" + s + "}" : "unknown format"
        }

        function B(e, t, n) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "RGB" === this.__state.space || v.recalculateRGB(this, t, n), this.__state[t]
                },
                set: function(e) {
                    "RGB" !== this.__state.space && (v.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                }
            })
        }

        function N(e, t) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "HSV" === this.__state.space || v.recalculateHSV(this), this.__state[t]
                },
                set: function(e) {
                    "HSV" !== this.__state.space && (v.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
                }
            })
        }

        function n(e) {
            if ("0" === e || m.isUndefined(e)) return 0;
            e = e.match(re);
            return m.isNull(e) ? 0 : parseFloat(e[1])
        }

        function z(e) {
            e = e.toString();
            return -1 < e.indexOf(".") ? e.length - e.indexOf(".") - 1 : 0
        }

        function I(e, t, n, i, o) {
            return i + (e - t) / (n - t) * (o - i)
        }

        function H(t, n, i, o) {
            t.style.background = "", m.each(ce, function(e) {
                t.style.cssText += "background: " + e + "linear-gradient(" + n + ", " + i + " 0%, " + o + " 100%); "
            })
        }

        function V(e, t, n) {
            var i = document.createElement("li");
            return t && i.appendChild(t), n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i), e.onResize(), i
        }

        function q(e) {
            y.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && y.unbind(window, "unload", e.saveToLocalStorageIfPossible)
        }

        function Y(e, t) {
            e = e.__preset_select[e.__preset_select.selectedIndex];
            e.innerHTML = t ? e.value + "*" : e.value
        }

        function X(e, t) {
            var n = e.getRoot(),
                i = n.__rememberedObjects.indexOf(t.object);
            if (-1 !== i) {
                var o = n.__rememberedObjectIndecesToControllers[i];
                if (void 0 === o && (n.__rememberedObjectIndecesToControllers[i] = o = {}), o[t.property] = t, n.load && n.load.remembered) {
                    o = n.load.remembered, n = void 0;
                    if (o[e.preset]) n = o[e.preset];
                    else {
                        if (!o[P]) return;
                        n = o[P]
                    }
                    n[i] && void 0 !== n[i][t.property] && (e = n[i][t.property], t.initialValue = e, t.setValue(e))
                }
            }
        }

        function u(e, t, n, i) {
            if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
            var o, r, s, a, l = void 0,
                n = (l = i.color ? new w(t, n) : (t = [t, n].concat(i.factoryArgs), oe.apply(e, t)), i.before instanceof _ && (i.before = i.before.__li), X(e, l), y.addClass(l.domElement, "c"), document.createElement("span")),
                t = (y.addClass(n, "property-name"), n.innerHTML = l.property, document.createElement("div")),
                n = (t.appendChild(n), t.appendChild(l.domElement), V(e, t, i.before));
            return y.addClass(n, R.CLASS_CONTROLLER_ROW), l instanceof w ? y.addClass(n, "color") : y.addClass(n, Z(l.getValue())), o = e, r = n, (s = l).__li = r, s.__gui = o, m.extend(s, {
                options: function(e) {
                    var t;
                    return 1 < arguments.length ? (t = s.__li.nextElementSibling, s.remove(), u(o, s.object, s.property, {
                        before: t,
                        factoryArgs: [m.toArray(arguments)]
                    })) : m.isArray(e) || m.isObject(e) ? (t = s.__li.nextElementSibling, s.remove(), u(o, s.object, s.property, {
                        before: t,
                        factoryArgs: [e]
                    })) : void 0
                },
                name: function(e) {
                    return s.__li.firstElementChild.firstElementChild.innerHTML = e, s
                },
                listen: function() {
                    return s.__gui.listen(s), s
                },
                remove: function() {
                    return s.__gui.remove(s), s
                }
            }), s instanceof D ? (a = new x(s.object, s.property, {
                min: s.__min,
                max: s.__max,
                step: s.__step
            }), m.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(e) {
                var t = s[e],
                    n = a[e];
                s[e] = a[e] = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return n.apply(a, e), t.apply(s, e)
                }
            }), y.addClass(r, "has-slider"), s.domElement.insertBefore(a.domElement, s.domElement.firstElementChild)) : s instanceof x ? (s.min = m.compose(t = function(e) {
                var t, n, i;
                return m.isNumber(s.__min) && m.isNumber(s.__max) ? (t = s.__li.firstElementChild.firstElementChild.innerHTML, n = -1 < s.__gui.__listening.indexOf(s), s.remove(), (i = u(o, s.object, s.property, {
                    before: s.__li.nextElementSibling,
                    factoryArgs: [s.__min, s.__max, s.__step]
                })).name(t), n && i.listen(), i) : e
            }, s.min), s.max = m.compose(t, s.max)) : s instanceof se ? (y.bind(r, "click", function() {
                y.fakeEvent(s.__checkbox, "click")
            }), y.bind(s.__checkbox, "click", function(e) {
                e.stopPropagation()
            })) : s instanceof ue ? (y.bind(r, "click", function() {
                y.fakeEvent(s.__button, "click")
            }), y.bind(r, "mouseover", function() {
                y.addClass(s.__button, "hover")
            }), y.bind(r, "mouseout", function() {
                y.removeClass(s.__button, "hover")
            })) : s instanceof w && (y.addClass(r, "color"), s.updateDisplay = m.compose(function(e) {
                return r.style.borderLeftColor = s.__color.toString(), e
            }, s.updateDisplay), s.updateDisplay()), s.setValue = m.compose(function(e) {
                return o.getRoot().__preset_select && s.isModified() && Y(o.getRoot(), !0), e
            }, s.setValue), e.__controllers.push(l), l
        }

        function h(e, t) {
            return document.location.href + "." + t
        }

        function j(e, t, n) {
            var i = document.createElement("option");
            i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }

        function G(e, t) {
            t.style.display = e.useLocalStorage ? "block" : "none"
        }

        function W(e, t) {
            e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
        }

        function i(o, r) {
            var s = {};
            return m.each(o.__rememberedObjects, function(e, t) {
                var n = {},
                    i = o.__rememberedObjectIndecesToControllers[t];
                m.each(i, function(e, t) {
                    n[t] = r ? e.initialValue : e.getValue()
                }), s[t] = n
            }), s
        }

        function p() {
            l = !1;
            var n = 1 < arguments.length ? m.toArray(arguments) : arguments[0];
            return m.each(Q, function(e) {
                if (e.litmus(n)) return m.each(e.conversions, function(e, t) {
                    if (a = e.read(n), !1 === l && !1 !== a) return (l = a).conversionName = t, a.conversion = e, m.BREAK
                }), m.BREAK
            }), l
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t, n) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, t);
            return void 0 === i ? null === (e = Object.getPrototypeOf(e)) ? void 0 : o(e, t, n) : "value" in i ? i.value : void 0 !== (e = i.get) ? e.call(n) : void 0
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function g(e, t) {
            if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        var U, K, J = Array.prototype.forEach,
            s = Array.prototype.slice,
            m = {
                BREAK: {},
                extend: function(n) {
                    return this.each(s.call(arguments, 1), function(t) {
                        (this.isObject(t) ? Object.keys(t) : []).forEach(function(e) {
                            this.isUndefined(t[e]) || (n[e] = t[e])
                        }.bind(this))
                    }, this), n
                },
                defaults: function(n) {
                    return this.each(s.call(arguments, 1), function(t) {
                        (this.isObject(t) ? Object.keys(t) : []).forEach(function(e) {
                            this.isUndefined(n[e]) && (n[e] = t[e])
                        }.bind(this))
                    }, this), n
                },
                compose: function() {
                    var n = s.call(arguments);
                    return function() {
                        for (var e = s.call(arguments), t = n.length - 1; 0 <= t; t--) e = [n[t].apply(this, e)];
                        return e[0]
                    }
                },
                each: function(e, t, n) {
                    if (e)
                        if (J && e.forEach && e.forEach === J) e.forEach(t, n);
                        else if (e.length === e.length + 0) {
                        for (var i = void 0, i = 0, o = e.length; i < o; i++)
                            if (i in e && t.call(n, e[i], i) === this.BREAK) return
                    } else
                        for (var r in e)
                            if (t.call(n, e[r], r) === this.BREAK) return
                },
                defer: function(e) {
                    setTimeout(e, 0)
                },
                debounce: function(i, o, r) {
                    var s = void 0;
                    return function() {
                        var e = this,
                            t = arguments,
                            n = r || !s;
                        clearTimeout(s), s = setTimeout(function() {
                            s = null, r || i.apply(e, t)
                        }, o), n && i.apply(e, t)
                    }
                },
                toArray: function(e) {
                    return e.toArray ? e.toArray() : s.call(e)
                },
                isUndefined: function(e) {
                    return void 0 === e
                },
                isNull: function(e) {
                    return null === e
                },
                isNaN: (K = function(e) {
                    return isNaN(e)
                }, te.toString = function() {
                    return K.toString()
                }, te),
                isArray: Array.isArray || function(e) {
                    return e.constructor === Array
                },
                isObject: function(e) {
                    return e === Object(e)
                },
                isNumber: function(e) {
                    return e === e + 0
                },
                isString: function(e) {
                    return e === e + ""
                },
                isBoolean: function(e) {
                    return !1 === e || !0 === e
                },
                isFunction: function(e) {
                    return e instanceof Function
                }
            },
            Q = [{
                litmus: m.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(e) {
                            e = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0)
                            }
                        },
                        write: t
                    },
                    SIX_CHAR_HEX: {
                        read: function(e) {
                            e = e.match(/^#([A-F0-9]{6})$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString(), 0)
                            }
                        },
                        write: t
                    },
                    CSS_RGB: {
                        read: function(e) {
                            e = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3])
                            }
                        },
                        write: t
                    },
                    CSS_RGBA: {
                        read: function(e) {
                            e = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3]),
                                a: parseFloat(e[4])
                            }
                        },
                        write: t
                    }
                }
            }, {
                litmus: m.isNumber,
                conversions: {
                    HEX: {
                        read: function(e) {
                            return {
                                space: "HEX",
                                hex: e,
                                conversionName: "HEX"
                            }
                        },
                        write: function(e) {
                            return e.hex
                        }
                    }
                }
            }, {
                litmus: m.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(e) {
                            return 3 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(e) {
                            return 4 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2],
                                a: e[3]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b, e.a]
                        }
                    }
                }
            }, {
                litmus: m.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(e) {
                            return !!(m.isNumber(e.r) && m.isNumber(e.g) && m.isNumber(e.b) && m.isNumber(e.a)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(e) {
                            return !!(m.isNumber(e.r) && m.isNumber(e.g) && m.isNumber(e.b)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(e) {
                            return !!(m.isNumber(e.h) && m.isNumber(e.s) && m.isNumber(e.v) && m.isNumber(e.a)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(e) {
                            return !!(m.isNumber(e.h) && m.isNumber(e.s) && m.isNumber(e.v)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        }
                    }
                }
            }],
            a = void 0,
            l = void 0,
            c = {
                hsv_to_rgb: function(e, t, n) {
                    var i = Math.floor(e / 60) % 6,
                        e = e / 60 - Math.floor(e / 60),
                        o = n * (1 - t),
                        r = n * (1 - e * t),
                        e = n * (1 - (1 - e) * t),
                        t = [
                            [n, e, o],
                            [r, n, o],
                            [o, n, e],
                            [o, r, n],
                            [e, o, n],
                            [n, o, r]
                        ][i];
                    return {
                        r: 255 * t[0],
                        g: 255 * t[1],
                        b: 255 * t[2]
                    }
                },
                rgb_to_hsv: function(e, t, n) {
                    var i = Math.min(e, t, n),
                        o = Math.max(e, t, n),
                        i = o - i,
                        r = void 0;
                    return 0 === o ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (r = e === o ? (t - n) / i : t === o ? 2 + (n - e) / i : 4 + (e - t) / i, (r /= 6) < 0 && (r += 1), {
                        h: 360 * r,
                        s: i / o,
                        v: o / 255
                    })
                },
                rgb_to_hex: function(e, t, n) {
                    e = this.hex_with_component(0, 2, e), e = this.hex_with_component(e, 1, t);
                    return this.hex_with_component(e, 0, n)
                },
                component_from_hex: function(e, t) {
                    return e >> 8 * t & 255
                },
                hex_with_component: function(e, t, n) {
                    return n << (U = 8 * t) | e & ~(255 << U)
                }
            },
            Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            d = function(e, t, n) {
                return t && ee(e.prototype, t), n && ee(e, n), e
            },
            v = (d($, [{
                key: "toString",
                value: function() {
                    return t(this)
                }
            }, {
                key: "toHexString",
                value: function() {
                    return t(this, !0)
                }
            }, {
                key: "toOriginal",
                value: function() {
                    return this.__state.conversion.write(this)
                }
            }]), $);

        function $() {
            if (f(this, $), this.__state = p.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
            this.__state.a = this.__state.a || 1
        }

        function ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function te(e) {
            return K.apply(this, arguments)
        }
        v.recalculateRGB = function(e, t, n) {
            if ("HEX" === e.__state.space) e.__state[t] = c.component_from_hex(e.__state.hex, n);
            else {
                if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                m.extend(e.__state, c.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
            }
        }, v.recalculateHSV = function(e) {
            var t = c.rgb_to_hsv(e.r, e.g, e.b);
            m.extend(e.__state, {
                s: t.s,
                v: t.v
            }), m.isNaN(t.h) ? m.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
        }, v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], B(v.prototype, "r", 2), B(v.prototype, "g", 1), B(v.prototype, "b", 0), N(v.prototype, "h"), N(v.prototype, "s"), N(v.prototype, "v"), Object.defineProperty(v.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(e) {
                this.__state.a = e
            }
        }), Object.defineProperty(v.prototype, "hex", {
            get: function() {
                return "HEX" !== this.__state.space && (this.__state.hex = c.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
            },
            set: function(e) {
                this.__state.space = "HEX", this.__state.hex = e
            }
        });
        d(ie, [{
            key: "onChange",
            value: function(e) {
                return this.__onChange = e, this
            }
        }, {
            key: "onFinishChange",
            value: function(e) {
                return this.__onFinishChange = e, this
            }
        }, {
            key: "setValue",
            value: function(e) {
                return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
            }
        }, {
            key: "getValue",
            value: function() {
                return this.object[this.property]
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return this
            }
        }, {
            key: "isModified",
            value: function() {
                return this.initialValue !== this.getValue()
            }
        }]);
        var _ = ie,
            ne = {};

        function ie(e, t) {
            f(this, ie), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
        }
        m.each({
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        }, function(e, t) {
            m.each(e, function(e) {
                ne[e] = t
            })
        });

        function oe(e, t) {
            var n = e[t];
            return m.isArray(arguments[2]) || m.isObject(arguments[2]) ? new ae(e, t, arguments[2]) : m.isNumber(n) ? m.isNumber(arguments[2]) && m.isNumber(arguments[3]) ? m.isNumber(arguments[4]) ? new D(e, t, arguments[2], arguments[3], arguments[4]) : new D(e, t, arguments[2], arguments[3]) : m.isNumber(arguments[4]) ? new x(e, t, {
                min: arguments[2],
                max: arguments[3],
                step: arguments[4]
            }) : new x(e, t, {
                min: arguments[2],
                max: arguments[3]
            }) : m.isString(n) ? new le(e, t) : m.isFunction(n) ? new ue(e, t, "") : m.isBoolean(n) ? new se(e, t) : null
        }
        var re = /(\d+(\.\d+)?)px/,
            y = {
                makeSelectable: function(e, t) {
                    void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                        return !1
                    } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
                },
                makeFullscreen: function(e, t, n) {
                    m.isUndefined(t) && (t = !0), m.isUndefined(n) && (n = !0), e.style.position = "absolute", t && (e.style.left = 0, e.style.right = 0), n && (e.style.top = 0, e.style.bottom = 0)
                },
                fakeEvent: function(e, t, n, i) {
                    var o = n || {},
                        n = ne[t];
                    if (!n) throw new Error("Event type " + t + " not supported.");
                    var r = document.createEvent(n);
                    switch (n) {
                        case "MouseEvents":
                            var s = o.x || o.clientX || 0,
                                a = o.y || o.clientY || 0;
                            r.initMouseEvent(t, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, s, a, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            s = r.initKeyboardEvent || r.initKeyEvent;
                            m.defaults(o, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), s(t, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                            break;
                        default:
                            r.initEvent(t, o.bubbles || !1, o.cancelable || !0)
                    }
                    m.defaults(r, i), e.dispatchEvent(r)
                },
                bind: function(e, t, n, i) {
                    return e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n), y
                },
                unbind: function(e, t, n, i) {
                    return e.removeEventListener ? e.removeEventListener(t, n, i || !1) : e.detachEvent && e.detachEvent("on" + t, n), y
                },
                addClass: function(e, t) {
                    var n;
                    return void 0 === e.className ? e.className = t : e.className !== t && -1 === (n = e.className.split(/ +/)).indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")), y
                },
                removeClass: function(e, t) {
                    var n;
                    return t ? e.className === t ? e.removeAttribute("class") : -1 !== (t = (n = e.className.split(/ +/)).indexOf(t)) && (n.splice(t, 1), e.className = n.join(" ")) : e.className = void 0, y
                },
                hasClass: function(e, t) {
                    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
                },
                getWidth: function(e) {
                    e = getComputedStyle(e);
                    return n(e["border-left-width"]) + n(e["border-right-width"]) + n(e["padding-left"]) + n(e["padding-right"]) + n(e.width)
                },
                getHeight: function(e) {
                    e = getComputedStyle(e);
                    return n(e["border-top-width"]) + n(e["border-bottom-width"]) + n(e["padding-top"]) + n(e["padding-bottom"]) + n(e.height)
                },
                getOffset: function(e) {
                    var t = e,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (t.offsetParent)
                        for (; n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;);
                    return n
                },
                isActive: function(e) {
                    return e === document.activeElement && (e.type || e.href)
                }
            },
            se = (r(M, _), d(M, [{
                key: "setValue",
                value: function(e) {
                    e = o(M.prototype.__proto__ || Object.getPrototypeOf(M.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), o(M.prototype.__proto__ || Object.getPrototypeOf(M.prototype), "updateDisplay", this).call(this)
                }
            }]), M),
            ae = (r(F, _), d(F, [{
                key: "setValue",
                value: function(e) {
                    e = o(F.prototype.__proto__ || Object.getPrototypeOf(F.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return y.isActive(this.__select) ? this : (this.__select.value = this.getValue(), o(F.prototype.__proto__ || Object.getPrototypeOf(F.prototype), "updateDisplay", this).call(this))
                }
            }]), F),
            le = (r(A, _), d(A, [{
                key: "updateDisplay",
                value: function() {
                    return y.isActive(this.__input) || (this.__input.value = this.getValue()), o(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "updateDisplay", this).call(this)
                }
            }]), A),
            b = (r(k, _), d(k, [{
                key: "setValue",
                value: function(e) {
                    return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), o(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "setValue", this).call(this, e)
                }
            }, {
                key: "min",
                value: function(e) {
                    return this.__min = e, this
                }
            }, {
                key: "max",
                value: function(e) {
                    return this.__max = e, this
                }
            }, {
                key: "step",
                value: function(e) {
                    return this.__step = e, this.__impliedStep = e, this.__precision = z(e), this
                }
            }]), k),
            x = (r(E, b), d(E, [{
                key: "updateDisplay",
                value: function() {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : (e = this.getValue(), t = this.__precision, t = Math.pow(10, t), Math.round(e * t) / t), o(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "updateDisplay", this).call(this);
                    var e, t
                }
            }]), E),
            D = (r(T, b), d(T, [{
                key: "updateDisplay",
                value: function() {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * e + "%", o(T.prototype.__proto__ || Object.getPrototypeOf(T.prototype), "updateDisplay", this).call(this)
                }
            }]), T),
            ue = (r(S, _), d(S, [{
                key: "fire",
                value: function() {
                    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }
            }]), S),
            w = (r(C, _), d(C, [{
                key: "updateDisplay",
                value: function() {
                    var t, n = p(this.getValue()),
                        e = (!1 !== n && (t = !1, m.each(v.COMPONENTS, function(e) {
                            if (!m.isUndefined(n[e]) && !m.isUndefined(this.__color.__state[e]) && n[e] !== this.__color.__state[e]) return t = !0, {}
                        }, this), t && m.extend(this.__color.__state, n)), m.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1, this.__color.v < .5 || .5 < this.__color.s ? 255 : 0),
                        i = 255 - e;
                    m.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + e + "," + e + "," + e + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, H(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), m.extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + e + "," + e + "," + e + ")",
                        textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)"
                    })
                }
            }]), C),
            ce = ["-moz-", "-o-", "-webkit-", "-ms-", ""],
            de = function(e, t) {
                var t = t || document,
                    n = document.createElement("style"),
                    t = (n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0]);
                try {
                    t.appendChild(n)
                } catch (e) {}
            },
            pe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            },
            he = (d(fe, [{
                key: "show",
                value: function() {
                    var e = this;
                    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), m.defer(function() {
                        e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    function e() {
                        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", y.unbind(t.domElement, "webkitTransitionEnd", e), y.unbind(t.domElement, "transitionend", e), y.unbind(t.domElement, "oTransitionEnd", e)
                    }
                    var t = this;
                    y.bind(this.domElement, "webkitTransitionEnd", e), y.bind(this.domElement, "transitionend", e), y.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                }
            }, {
                key: "layout",
                value: function() {
                    this.domElement.style.left = window.innerWidth / 2 - y.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - y.getHeight(this.domElement) / 2 + "px"
                }
            }]), fe);

        function fe() {
            f(this, fe), this.backgroundElement = document.createElement("div"), m.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear",
                transition: "opacity 0.2s linear"
            }), y.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), m.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                transition: "transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var e = this;
            y.bind(this.backgroundElement, "click", function() {
                e.hide()
            })
        }

        function C(e, t) {
            function n(e) {
                l(e), y.bind(window, "mousemove", l), y.bind(window, "touchmove", l), y.bind(window, "mouseup", o), y.bind(window, "touchend", o)
            }

            function i(e) {
                u(e), y.bind(window, "mousemove", u), y.bind(window, "touchmove", u), y.bind(window, "mouseup", r), y.bind(window, "touchend", r)
            }

            function o() {
                y.unbind(window, "mousemove", l), y.unbind(window, "touchmove", l), y.unbind(window, "mouseup", o), y.unbind(window, "touchend", o), a()
            }

            function r() {
                y.unbind(window, "mousemove", u), y.unbind(window, "touchmove", u), y.unbind(window, "mouseup", r), y.unbind(window, "touchend", r), a()
            }

            function s() {
                var e = p(this.value);
                !1 !== e ? (d.__color.__state = e, d.setValue(d.__color.toOriginal())) : this.value = d.__color.toString()
            }

            function a() {
                d.__onFinishChange && d.__onFinishChange.call(d, d.__color.toOriginal())
            }

            function l(e) {
                -1 === e.type.indexOf("touch") && e.preventDefault();
                var t = d.__saturation_field.getBoundingClientRect(),
                    e = e.touches && e.touches[0] || e,
                    n = e.clientX,
                    e = e.clientY,
                    n = (n - t.left) / (t.right - t.left),
                    e = 1 - (e - t.top) / (t.bottom - t.top);
                return 1 < e ? e = 1 : e < 0 && (e = 0), 1 < n ? n = 1 : n < 0 && (n = 0), d.__color.v = e, d.__color.s = n, d.setValue(d.__color.toOriginal()), !1
            }

            function u(e) {
                -1 === e.type.indexOf("touch") && e.preventDefault();
                var t = d.__hue_field.getBoundingClientRect(),
                    e = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);
                return 1 < e ? e = 1 : e < 0 && (e = 0), d.__color.h = 360 * e, d.setValue(d.__color.toOriginal()), !1
            }
            f(this, C);
            var c, e = g(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, e, t)),
                d = (e.__color = new v(e.getValue()), e.__temp = new v(0), e),
                t = (e.domElement = document.createElement("div"), y.makeSelectable(e.domElement, !1), e.__selector = document.createElement("div"), e.__selector.className = "selector", e.__saturation_field = document.createElement("div"), e.__saturation_field.className = "saturation-field", e.__field_knob = document.createElement("div"), e.__field_knob.className = "field-knob", e.__field_knob_border = "2px solid ", e.__hue_knob = document.createElement("div"), e.__hue_knob.className = "hue-knob", e.__hue_field = document.createElement("div"), e.__hue_field.className = "hue-field", e.__input = document.createElement("input"), e.__input.type = "text", e.__input_textShadow = "0 1px 1px ", y.bind(e.__input, "keydown", function(e) {
                    13 === e.keyCode && s.call(this)
                }), y.bind(e.__input, "blur", s), y.bind(e.__selector, "mousedown", function() {
                    y.addClass(this, "drag").bind(window, "mouseup", function() {
                        y.removeClass(d.__selector, "drag")
                    })
                }), y.bind(e.__selector, "touchstart", function() {
                    y.addClass(this, "drag").bind(window, "touchend", function() {
                        y.removeClass(d.__selector, "drag")
                    })
                }), document.createElement("div"));
            return m.extend(e.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), m.extend(e.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: e.__field_knob_border + (e.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), m.extend(e.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), m.extend(e.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), m.extend(t.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), H(t, "top", "rgba(0,0,0,0)", "#000"), m.extend(e.__hue_field.style, {
                width: "15px",
                height: "100px",
                border: "1px solid #555",
                cursor: "ns-resize",
                position: "absolute",
                top: "3px",
                right: "3px"
            }), (c = e.__hue_field).style.background = "", c.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", c.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", c.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", c.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", c.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", m.extend(e.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: e.__input_textShadow + "rgba(0,0,0,0.7)"
            }), y.bind(e.__saturation_field, "mousedown", n), y.bind(e.__saturation_field, "touchstart", n), y.bind(e.__field_knob, "mousedown", n), y.bind(e.__field_knob, "touchstart", n), y.bind(e.__hue_field, "mousedown", i), y.bind(e.__hue_field, "touchstart", i), e.__saturation_field.appendChild(t), e.__selector.appendChild(e.__field_knob), e.__selector.appendChild(e.__saturation_field), e.__selector.appendChild(e.__hue_field), e.__hue_field.appendChild(e.__hue_knob), e.domElement.appendChild(e.__input), e.domElement.appendChild(e.__selector), e.updateDisplay(), e
        }

        function S(e, t, n) {
            f(this, S);
            var e = g(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, e, t)),
                i = e;
            return e.__button = document.createElement("div"), e.__button.innerHTML = void 0 === n ? "Fire" : n, y.bind(e.__button, "click", function(e) {
                return e.preventDefault(), i.fire(), !1
            }), y.addClass(e.__button, "button"), e.domElement.appendChild(e.__button), e
        }

        function T(e, t, n, i, o) {
            function r(e) {
                e.preventDefault();
                var t = u.__background.getBoundingClientRect();
                return u.setValue(I(e.clientX, t.left, t.right, u.__min, u.__max)), !1
            }

            function s() {
                y.unbind(window, "mousemove", r), y.unbind(window, "mouseup", s), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
            }

            function a(e) {
                var e = e.touches[0].clientX,
                    t = u.__background.getBoundingClientRect();
                u.setValue(I(e, t.left, t.right, u.__min, u.__max))
            }

            function l() {
                y.unbind(window, "touchmove", a), y.unbind(window, "touchend", l), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
            }
            f(this, T);
            var e = g(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, e, t, {
                    min: n,
                    max: i,
                    step: o
                })),
                u = e;
            return e.__background = document.createElement("div"), e.__foreground = document.createElement("div"), y.bind(e.__background, "mousedown", function(e) {
                document.activeElement.blur(), y.bind(window, "mousemove", r), y.bind(window, "mouseup", s), r(e)
            }), y.bind(e.__background, "touchstart", function(e) {
                1 === e.touches.length && (y.bind(window, "touchmove", a), y.bind(window, "touchend", l), a(e))
            }), y.addClass(e.__background, "slider"), y.addClass(e.__foreground, "slider-fg"), e.updateDisplay(), e.__background.appendChild(e.__foreground), e.domElement.appendChild(e.__background), e
        }

        function E(e, t, n) {
            function i() {
                s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
            }

            function o(e) {
                var t = a - e.clientY;
                s.setValue(s.getValue() + t * s.__impliedStep), a = e.clientY
            }

            function r() {
                y.unbind(window, "mousemove", o), y.unbind(window, "mouseup", r), i()
            }
            f(this, E);
            var e = g(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, e, t, n)),
                s = (e.__truncationSuspended = !1, e),
                a = void 0;
            return e.__input = document.createElement("input"), e.__input.setAttribute("type", "text"), y.bind(e.__input, "change", function() {
                var e = parseFloat(s.__input.value);
                m.isNaN(e) || s.setValue(e)
            }), y.bind(e.__input, "blur", function() {
                i()
            }), y.bind(e.__input, "mousedown", function(e) {
                y.bind(window, "mousemove", o), y.bind(window, "mouseup", r), a = e.clientY
            }), y.bind(e.__input, "keydown", function(e) {
                13 === e.keyCode && (s.__truncationSuspended = !0, this.blur(), s.__truncationSuspended = !1, i())
            }), e.updateDisplay(), e.domElement.appendChild(e.__input), e
        }

        function k(e, t, n) {
            f(this, k);
            e = g(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, e, t)), t = n || {};
            return e.__min = t.min, e.__max = t.max, e.__step = t.step, m.isUndefined(e.__step) ? 0 === e.initialValue ? e.__impliedStep = 1 : e.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(e.initialValue)) / Math.LN10)) / 10 : e.__impliedStep = e.__step, e.__precision = z(e.__impliedStep), e
        }

        function A(e, t) {
            function n() {
                i.setValue(i.__input.value)
            }
            f(this, A);
            var e = g(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, e, t)),
                i = e;
            return e.__input = document.createElement("input"), e.__input.setAttribute("type", "text"), y.bind(e.__input, "keyup", n), y.bind(e.__input, "change", n), y.bind(e.__input, "blur", function() {
                i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
            }), y.bind(e.__input, "keydown", function(e) {
                13 === e.keyCode && this.blur()
            }), e.updateDisplay(), e.domElement.appendChild(e.__input), e
        }

        function F(e, t, n) {
            f(this, F);
            var i, e = g(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, e, t)),
                t = n,
                o = e;
            return e.__select = document.createElement("select"), m.isArray(t) && (i = {}, m.each(t, function(e) {
                i[e] = e
            }), t = i), m.each(t, function(e, t) {
                var n = document.createElement("option");
                n.innerHTML = t, n.setAttribute("value", e), o.__select.appendChild(n)
            }), e.updateDisplay(), y.bind(e.__select, "change", function() {
                var e = this.options[this.selectedIndex].value;
                o.setValue(e)
            }), e.domElement.appendChild(e.__select), e
        }

        function M(e, t) {
            f(this, M);
            var e = g(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, e, t)),
                n = e;
            return e.__prev = e.getValue(), e.__checkbox = document.createElement("input"), e.__checkbox.setAttribute("type", "checkbox"), y.bind(e.__checkbox, "change", function() {
                n.setValue(!n.__prev)
            }, !1), e.domElement.appendChild(e.__checkbox), e.updateDisplay(), e
        }
        de(function(e) {
            var t;
            if ("undefined" != typeof window) return (t = document.createElement("style")).setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e
        }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
        var P = "Default",
            L = function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !1
                }
            }(),
            ge = void 0,
            me = !0,
            O = void 0,
            ve = !1,
            _e = [],
            R = function t(e) {
                var n, i, o, r = this,
                    s = e || {},
                    a = (this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), y.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], s = m.defaults(s, {
                        closeOnTop: !1,
                        autoPlace: !0,
                        width: t.DEFAULT_WIDTH
                    }), s = m.defaults(s, {
                        resizable: s.autoPlace,
                        hideable: s.autoPlace
                    }), m.isUndefined(s.load) ? s.load = {
                        preset: P
                    } : s.preset && (s.load.preset = s.preset), m.isUndefined(s.parent) && s.hideable && _e.push(this), s.resizable = m.isUndefined(s.parent) && s.resizable, s.autoPlace && m.isUndefined(s.scrollable) && (s.scrollable = !0), L && "true" === localStorage.getItem(h(0, "isLocal"))),
                    l = void 0,
                    u = void 0;

                function c(e) {
                    return e.preventDefault(), i.width += o - e.clientX, i.onResize(), o = e.clientX, !1
                }

                function d() {
                    y.removeClass(i.__closeButton, R.CLASS_DRAG), y.unbind(window, "mousemove", c), y.unbind(window, "mouseup", d)
                }

                function p(e) {
                    return e.preventDefault(), o = e.clientX, y.addClass(i.__closeButton, R.CLASS_DRAG), y.bind(window, "mousemove", c), y.bind(window, "mouseup", d), !1
                }
                Object.defineProperties(this, {
                    parent: {
                        get: function() {
                            return s.parent
                        }
                    },
                    scrollable: {
                        get: function() {
                            return s.scrollable
                        }
                    },
                    autoPlace: {
                        get: function() {
                            return s.autoPlace
                        }
                    },
                    closeOnTop: {
                        get: function() {
                            return s.closeOnTop
                        }
                    },
                    preset: {
                        get: function() {
                            return (r.parent ? r.getRoot() : s.load).preset
                        },
                        set: function(e) {
                            r.parent ? r.getRoot().preset = e : s.load.preset = e;
                            for (var t = this, n = 0; n < t.__preset_select.length; n++) t.__preset_select[n].value === t.preset && (t.__preset_select.selectedIndex = n);
                            r.revert()
                        }
                    },
                    width: {
                        get: function() {
                            return s.width
                        },
                        set: function(e) {
                            s.width = e, W(r, e)
                        }
                    },
                    name: {
                        get: function() {
                            return s.name
                        },
                        set: function(e) {
                            s.name = e, u && (u.innerHTML = s.name)
                        }
                    },
                    closed: {
                        get: function() {
                            return s.closed
                        },
                        set: function(e) {
                            s.closed = e, s.closed ? y.addClass(r.__ul, t.CLASS_CLOSED) : y.removeClass(r.__ul, t.CLASS_CLOSED), this.onResize(), r.__closeButton && (r.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function() {
                            return s.load
                        }
                    },
                    useLocalStorage: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            L && ((a = e) ? y.bind(window, "unload", l) : y.unbind(window, "unload", l), localStorage.setItem(h(0, "isLocal"), e))
                        }
                    }
                }), m.isUndefined(s.parent) ? (this.closed = s.closed || !1, y.addClass(this.domElement, t.CLASS_MAIN), y.makeSelectable(this.domElement, !1), L && a && (r.useLocalStorage = !0, (e = localStorage.getItem(h(0, "gui"))) && (s.load = JSON.parse(e))), this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = t.TEXT_CLOSED, y.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON), s.closeOnTop ? (y.addClass(this.__closeButton, t.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (y.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), y.bind(this.__closeButton, "click", function() {
                    r.closed = !r.closed
                })) : (void 0 === s.closed && (s.closed = !0), e = document.createTextNode(s.name), y.addClass(e, "controller-name"), u = V(r, e), y.addClass(this.__ul, t.CLASS_CLOSED), y.addClass(u, "title"), y.bind(u, "click", function(e) {
                    return e.preventDefault(), r.closed = !r.closed, !1
                }), s.closed || (this.closed = !1)), s.autoPlace && (m.isUndefined(s.parent) && (me && (O = document.createElement("div"), y.addClass(O, "dg"), y.addClass(O, t.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(O), me = !1), O.appendChild(this.domElement), y.addClass(this.domElement, t.CLASS_AUTO_PLACE)), this.parent || W(r, s.width)), this.__resizeHandler = function() {
                    r.onResizeDebounced()
                }, y.bind(window, "resize", this.__resizeHandler), y.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), y.bind(this.__ul, "transitionend", this.__resizeHandler), y.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), s.resizable && (o = void 0, (i = this).__resize_handle = document.createElement("div"), m.extend(i.__resize_handle.style, {
                    width: "6px",
                    marginLeft: "-3px",
                    height: "200px",
                    cursor: "ew-resize",
                    position: "absolute"
                }), y.bind(i.__resize_handle, "mousedown", p), y.bind(i.__closeButton, "mousedown", p), i.domElement.insertBefore(i.__resize_handle, i.domElement.firstElementChild)), l = function() {
                    L && "true" === localStorage.getItem(h(0, "isLocal")) && localStorage.setItem(h(0, "gui"), JSON.stringify(r.getSaveObject()))
                }, this.saveToLocalStorageIfPossible = l, s.parent || ((n = r.getRoot()).width += 1, m.defer(function() {
                    --n.width
                }))
            },
            d = (R.toggleHide = function() {
                ve = !ve, m.each(_e, function(e) {
                    e.domElement.style.display = ve ? "none" : ""
                })
            }, R.CLASS_AUTO_PLACE = "a", R.CLASS_AUTO_PLACE_CONTAINER = "ac", R.CLASS_MAIN = "main", R.CLASS_CONTROLLER_ROW = "cr", R.CLASS_TOO_TALL = "taller-than-window", R.CLASS_CLOSED = "closed", R.CLASS_CLOSE_BUTTON = "close-button", R.CLASS_CLOSE_TOP = "close-top", R.CLASS_CLOSE_BOTTOM = "close-bottom", R.CLASS_DRAG = "drag", R.DEFAULT_WIDTH = 245, R.TEXT_CLOSED = "Close Controls", R.TEXT_OPEN = "Open Controls", R._keydownHandler = function(e) {
                "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || R.toggleHide()
            }, y.bind(window, "keydown", R._keydownHandler, !1), m.extend(R.prototype, {
                add: function(e, t) {
                    return u(this, e, t, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    })
                },
                addColor: function(e, t) {
                    return u(this, e, t, {
                        color: !0
                    })
                },
                remove: function(e) {
                    this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
                    var t = this;
                    m.defer(function() {
                        t.onResize()
                    })
                },
                destroy: function() {
                    if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                    this.autoPlace && O.removeChild(this.domElement);
                    var t = this;
                    m.each(this.__folders, function(e) {
                        t.removeFolder(e)
                    }), y.unbind(window, "keydown", R._keydownHandler, !1), q(this)
                },
                addFolder: function(e) {
                    if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                    var t = {
                            name: e,
                            parent: this
                        },
                        t = (t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]), new R(t)),
                        e = (this.__folders[e] = t, V(this, t.domElement));
                    return y.addClass(e, "folder"), t
                },
                removeFolder: function(t) {
                    this.__ul.removeChild(t.domElement.parentElement), delete this.__folders[t.name], this.load && this.load.folders && this.load.folders[t.name] && delete this.load.folders[t.name], q(t);
                    var e = this;
                    m.each(t.__folders, function(e) {
                        t.removeFolder(e)
                    }), m.defer(function() {
                        e.onResize()
                    })
                },
                open: function() {
                    this.closed = !1
                },
                close: function() {
                    this.closed = !0
                },
                hide: function() {
                    this.domElement.style.display = "none"
                },
                show: function() {
                    this.domElement.style.display = ""
                },
                onResize: function() {
                    var e, t, n = this.getRoot();
                    n.scrollable && (e = y.getOffset(n.__ul).top, t = 0, m.each(n.__ul.childNodes, function(e) {
                        n.autoPlace && e === n.__save_row || (t += y.getHeight(e))
                    }), window.innerHeight - e - 20 < t ? (y.addClass(n.domElement, R.CLASS_TOO_TALL), n.__ul.style.height = window.innerHeight - e - 20 + "px") : (y.removeClass(n.domElement, R.CLASS_TOO_TALL), n.__ul.style.height = "auto")), n.__resize_handle && m.defer(function() {
                        n.__resize_handle.style.height = n.__ul.offsetHeight + "px"
                    }), n.__closeButton && (n.__closeButton.style.width = n.width + "px")
                },
                onResizeDebounced: m.debounce(function() {
                    this.onResize()
                }, 50),
                remember: function() {
                    if (m.isUndefined(ge) && ((ge = new he).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");
                    var c = this;
                    m.each(Array.prototype.slice.call(arguments), function(e) {
                        var n, t, i, o, r, s, a, l, u;
                        0 === c.__rememberedObjects.length && (i = (n = c).__save_row = document.createElement("li"), y.addClass(n.domElement, "has-save"), n.__ul.insertBefore(i, n.__ul.firstChild), y.addClass(i, "save-row"), (o = document.createElement("span")).innerHTML = "&nbsp;", y.addClass(o, "button gears"), (r = document.createElement("span")).innerHTML = "Save", y.addClass(r, "button"), y.addClass(r, "save"), (s = document.createElement("span")).innerHTML = "New", y.addClass(s, "button"), y.addClass(s, "save-as"), (a = document.createElement("span")).innerHTML = "Revert", y.addClass(a, "button"), y.addClass(a, "revert"), l = n.__preset_select = document.createElement("select"), n.load && n.load.remembered ? m.each(n.load.remembered, function(e, t) {
                            j(n, t, t === n.preset)
                        }) : j(n, P, !1), y.bind(l, "change", function() {
                            for (var e = 0; e < n.__preset_select.length; e++) n.__preset_select[e].innerHTML = n.__preset_select[e].value;
                            n.preset = this.value
                        }), i.appendChild(l), i.appendChild(o), i.appendChild(r), i.appendChild(s), i.appendChild(a), L && (t = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(h(0, "isLocal")) && l.setAttribute("checked", "checked"), G(n, t), y.bind(l, "change", function() {
                            n.useLocalStorage = !n.useLocalStorage, G(n, t)
                        })), u = document.getElementById("dg-new-constructor"), y.bind(u, "keydown", function(e) {
                            !e.metaKey || 67 !== e.which && 67 !== e.keyCode || ge.hide()
                        }), y.bind(o, "click", function() {
                            u.innerHTML = JSON.stringify(n.getSaveObject(), void 0, 2), ge.show(), u.focus(), u.select()
                        }), y.bind(r, "click", function() {
                            n.save()
                        }), y.bind(s, "click", function() {
                            var e = prompt("Enter a new preset name.");
                            e && n.saveAs(e)
                        }), y.bind(a, "click", function() {
                            n.revert()
                        })), -1 === c.__rememberedObjects.indexOf(e) && c.__rememberedObjects.push(e)
                    }), this.autoPlace && W(this, this.width)
                },
                getRoot: function() {
                    for (var e = this; e.parent;) e = e.parent;
                    return e
                },
                getSaveObject: function() {
                    var n = this.load;
                    return n.closed = this.closed, 0 < this.__rememberedObjects.length && (n.preset = this.preset, n.remembered || (n.remembered = {}), n.remembered[this.preset] = i(this)), n.folders = {}, m.each(this.__folders, function(e, t) {
                        n.folders[t] = e.getSaveObject()
                    }), n
                },
                save: function() {
                    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = i(this), Y(this, !1), this.saveToLocalStorageIfPossible()
                },
                saveAs: function(e) {
                    this.load.remembered || (this.load.remembered = {}, this.load.remembered[P] = i(this, !0)), this.load.remembered[e] = i(this), this.preset = e, j(this, e, !0), this.saveToLocalStorageIfPossible()
                },
                revert: function(t) {
                    m.each(this.__controllers, function(e) {
                        this.getRoot().load.remembered ? X(t || this.getRoot(), e) : e.setValue(e.initialValue), e.__onFinishChange && e.__onFinishChange.call(e, e.getValue())
                    }, this), m.each(this.__folders, function(e) {
                        e.revert(e)
                    }), t || Y(this.getRoot(), !1)
                },
                listen: function(e) {
                    var t = 0 === this.__listening.length;
                    this.__listening.push(e), t && function e(t) {
                        0 !== t.length && pe.call(window, function() {
                            e(t)
                        }), m.each(t, function(e) {
                            e.updateDisplay()
                        })
                    }(this.__listening)
                },
                updateDisplay: function() {
                    m.each(this.__controllers, function(e) {
                        e.updateDisplay()
                    }), m.each(this.__folders, function(e) {
                        e.updateDisplay()
                    })
                }
            }), {
                Color: v,
                math: c,
                interpret: p
            }),
            de = {
                Controller: _,
                BooleanController: se,
                OptionController: ae,
                StringController: le,
                NumberController: b,
                NumberControllerBox: x,
                NumberControllerSlider: D,
                FunctionController: ue,
                ColorController: w
            },
            b = {
                dom: y
            },
            ye = {
                GUI: R
            },
            be = R,
            xe = {
                color: d,
                controllers: de,
                dom: b,
                gui: ye,
                GUI: be
            };
        e.color = d, e.controllers = de, e.dom = b, e.gui = ye, e.GUI = be, e.default = xe, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }), tablesWrap(), iframesWrap(), gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, MorphSVGPlugin, Flip);
const lazyImages = document.querySelectorAll("img.lazy"),
    lazyVideos = document.querySelectorAll("video.lazy"),
    lazyMobile = document.querySelectorAll("video.lazy-mobile"),
    lazyDesktop = document.querySelectorAll("video.lazy-desktop");
768 <= window.innerWidth ? window.addEventListener("load", function() {
    lazyDesktop.forEach(e => {
        for (var t in e.children) {
            t = e.children[t];
            "string" == typeof t.tagName && "SOURCE" === t.tagName && (t.src = t.dataset.src)
        }
        e.load(), e.classList.remove("lazy-dekstop")
    })
}) : window.addEventListener("load", () => {
    lazyMobile.forEach(e => {
        for (var t in e.children) {
            t = e.children[t];
            "string" == typeof t.tagName && "SOURCE" === t.tagName && (t.src = t.dataset.src)
        }
        e.load(), e.classList.remove("lazy-mobile")
    })
}), lazyVideos.forEach(t => {
    gsap.to(t, {
        onStart: function() {
            for (var e in t.children) {
                e = t.children[e];
                "string" == typeof e.tagName && "SOURCE" === e.tagName && (e.src = e.dataset.src)
            }
            t.load(), t.classList.remove("lazy")
        },
        scrollTrigger: {
            trigger: t,
            start: "top 300%",
            end: "top 300%",
            once: !0
        }
    })
}), lazyImages.forEach(e => {
    gsap.to(e, {
        onStart: function() {
            e.src = e.dataset.src, e.classList.remove("lazy")
        },
        scrollTrigger: {
            trigger: e,
            start: "top 250%",
            end: "top 250%",
            once: !0
        }
    })
});