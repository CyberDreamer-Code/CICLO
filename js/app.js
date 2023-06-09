(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    /*!
* fullPage 4.0.17
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/
    !function(n, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).fullpage = t();
    }(void 0, (function() {
        "use strict";
        var n, t, e, i;
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(n) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var t = Object(this), e = t.length >>> 0;
                if ("function" != typeof n) throw new TypeError("predicate must be a function");
                for (var i = arguments[1], o = 0; o < e; ) {
                    var r = t[o];
                    if (n.call(i, r, o, t)) return r;
                    o++;
                }
            }
        }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t) {
            return "function" == typeof t || "[object Function]" === n.call(t);
        }, e = Math.pow(2, 53) - 1, i = function(n) {
            var t = function(n) {
                var t = Number(n);
                return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t;
            }(n);
            return Math.min(Math.max(t, 0), e);
        }, function(n) {
            var e = this, o = Object(n);
            if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var r, a = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== a) {
                if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (r = arguments[2]);
            }
            for (var l, u = i(o.length), c = t(e) ? Object(new e(u)) : new Array(u), s = 0; s < u; ) l = o[s], 
            c[s] = a ? void 0 === r ? a(l, s) : a.call(r, l, s) : l, s += 1;
            return c.length = u, c;
        }));
        var o = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), l = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent), u = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, c = !!window.MSInputMethodContext && !!document.documentMode, s = {
            test: {},
            shared: {}
        };
        function f(n, t) {
            o.console && o.console[n] && o.console[n]("fullPage: " + t);
        }
        function d(n) {
            return "none" !== o.getComputedStyle(n).display;
        }
        function v(n) {
            return Array.from(n).filter((function(n) {
                return d(n);
            }));
        }
        function p(n, t) {
            return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(n) : null;
        }
        function h(n) {
            n = n || {};
            for (var t = 1, e = arguments.length; t < e; ++t) {
                var i = arguments[t];
                if (i) for (var o in i) i.hasOwnProperty(o) && "__proto__" != o && "constructor" != o && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? n[o] = i[o] : n[o] = h(n[o], i[o]));
            }
            return n;
        }
        function g(n, t) {
            return null != n && n.classList.contains(t);
        }
        function m() {
            return "innerHeight" in o ? o.innerHeight : r.documentElement.offsetHeight;
        }
        function w() {
            return o.innerWidth;
        }
        function b(n, t) {
            var e;
            for (e in n = A(n), t) if (t.hasOwnProperty(e) && null !== e) for (var i = 0; i < n.length; i++) n[i].style[e] = t[e];
            return n;
        }
        function S(n, t) {
            if (null == t) return n.previousElementSibling;
            var e = S(n);
            return e && Q(e, t) ? e : null;
        }
        function y(n, t) {
            if (null == t) return n.nextElementSibling;
            var e = y(n);
            return e && Q(e, t) ? e : null;
        }
        function M(n) {
            return n[n.length - 1];
        }
        function T(n, t) {
            n = k(n) ? n[0] : n;
            for (var e = null != t ? p(t, n.parentNode) : n.parentNode.childNodes, i = 0, o = 0; o < e.length; o++) {
                if (e[o] == n) return i;
                1 == e[o].nodeType && i++;
            }
            return -1;
        }
        function A(n) {
            return k(n) ? n : [ n ];
        }
        function x(n) {
            n = A(n);
            for (var t = 0; t < n.length; t++) n[t].style.display = "none";
            return n;
        }
        function O(n) {
            n = A(n);
            for (var t = 0; t < n.length; t++) n[t].style.display = "block";
            return n;
        }
        function k(n) {
            return "[object Array]" === Object.prototype.toString.call(n) || "[object NodeList]" === Object.prototype.toString.call(n);
        }
        function E(n, t) {
            n = A(n);
            for (var e = 0; e < n.length; e++) n[e].classList.add(t);
            return n;
        }
        function R(n, t) {
            n = A(n);
            for (var e = t.split(" "), i = 0; i < e.length; i++) {
                t = e[i];
                for (var o = 0; o < n.length; o++) n[o].classList.remove(t);
            }
            return n;
        }
        function j(n, t) {
            t.appendChild(n);
        }
        function L(n, t, e) {
            var i;
            t = t || r.createElement("div");
            for (var o = 0; o < n.length; o++) {
                var a = n[o];
                (e && !o || !e) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a);
            }
            return n;
        }
        function z(n, t) {
            L(n, t, !0);
        }
        function D(n, t) {
            for ("string" == typeof t && (t = K(t)), n.appendChild(t); n.firstChild !== t; ) t.appendChild(n.firstChild);
        }
        function N(n) {
            for (var t = r.createDocumentFragment(); n.firstChild; ) t.appendChild(n.firstChild);
            n.parentNode.replaceChild(t, n);
        }
        function P(n, t) {
            return n && 1 === n.nodeType ? Q(n, t) ? n : P(n.parentNode, t) : null;
        }
        function H(n, t) {
            I(n, n.nextSibling, t);
        }
        function C(n, t) {
            I(n, n, t);
        }
        function I(n, t, e) {
            k(e) || ("string" == typeof e && (e = K(e)), e = [ e ]);
            for (var i = 0; i < e.length; i++) n.parentNode.insertBefore(e[i], t);
        }
        function W() {
            var n = r.documentElement;
            return (o.pageYOffset || n.scrollTop) - (n.clientTop || 0);
        }
        function F(n) {
            return Array.prototype.filter.call(n.parentNode.children, (function(t) {
                return t !== n;
            }));
        }
        function V(n) {
            n.preventDefault();
        }
        function Z(n, t) {
            return n.getAttribute(t);
        }
        function B(n, t, e) {
            r.addEventListener(n, t, "undefined" === e ? null : e);
        }
        function G(n, t, e) {
            o.addEventListener(n, t, "undefined" === e ? null : e);
        }
        function Y(n, t, e) {
            r.removeEventListener(n, t, "undefined" === e ? null : e);
        }
        function U(n, t, e) {
            o.removeEventListener(n, t, "undefined" === e ? null : e);
        }
        function X(n) {
            if ("function" == typeof n) return !0;
            var t = Object.prototype.toString.call(n);
            return "[object Function]" === t || "[object GeneratorFunction]" === t;
        }
        function _(n, t, e) {
            var i;
            e = void 0 === e ? {} : e, "function" == typeof o.CustomEvent ? i = new CustomEvent(t, {
                detail: e
            }) : (i = r.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, e), n.dispatchEvent(i);
        }
        function Q(n, t) {
            return (n.matches || n.t || n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector).call(n, t);
        }
        function J(n, t) {
            if ("boolean" == typeof t) for (var e = 0; e < n.length; e++) n[e].style.display = t ? "block" : "none";
            return n;
        }
        function K(n) {
            var t = r.createElement("div");
            return t.innerHTML = n.trim(), t.firstChild;
        }
        function q(n) {
            n = A(n);
            for (var t = 0; t < n.length; t++) {
                var e = n[t];
                e && e.parentElement && e.parentNode.removeChild(e);
            }
        }
        function $(n, t) {
            Array.prototype.filter.call(n, t);
        }
        function nn(n, t, e) {
            for (var i = n[e], o = []; i; ) (Q(i, t) || null == t) && o.push(i), i = i[e];
            return o;
        }
        function tn(n, t) {
            return nn(n, t, "nextElementSibling");
        }
        function en(n, t) {
            return nn(n, t, "previousElementSibling");
        }
        function on(n) {
            return Object.keys(n).map((function(t) {
                return n[t];
            }));
        }
        function rn(n) {
            return n[n.length - 1];
        }
        function an(n, t) {
            for (var e = 0, i = n.slice(Math.max(n.length - t, 1)), o = 0; o < i.length; o++) e += i[o];
            return Math.ceil(e / t);
        }
        function ln(n, t) {
            n.setAttribute(t, Z(n, "data-" + t)), n.removeAttribute("data-" + t);
        }
        function un(n, t) {
            var e = [ n ];
            do {
                n = n.parentNode, e.push(n);
            } while (!Q(n, t));
            return e;
        }
        function cn() {
            var n = r.activeElement;
            return Q(n, "textarea") || Q(n, "input") || Q(n, "select") || "true" == Z(n, "contentEditable") || "" == Z(n, "contentEditable");
        }
        o.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n, t) {
            t = t || window;
            for (var e = 0; e < this.length; e++) n.call(t, this[e], e, this);
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(n, t) {
                if (null == n) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(n), i = 1; i < arguments.length; i++) {
                    var o = arguments[i];
                    if (null != o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                }
                return e;
            },
            writable: !0,
            i: !0
        }), window.fp_utils = {
            $: p,
            deepExtend: h,
            hasClass: g,
            getWindowHeight: m,
            css: b,
            prev: S,
            next: y,
            last: M,
            index: T,
            getList: A,
            hide: x,
            show: O,
            isArrayOrList: k,
            addClass: E,
            removeClass: R,
            appendTo: j,
            wrap: L,
            wrapAll: z,
            wrapInner: D,
            unwrap: N,
            closest: P,
            after: H,
            before: C,
            insertBefore: I,
            getScrollTop: W,
            siblings: F,
            preventDefault: V,
            isFunction: X,
            trigger: _,
            matches: Q,
            toggle: J,
            createElementFromHTML: K,
            remove: q,
            filter: $,
            untilAll: nn,
            nextAll: tn,
            prevAll: en,
            showError: f
        };
        var sn = Object.freeze({
            __proto__: null,
            showError: f,
            isVisible: d,
            getVisible: v,
            $: p,
            deepExtend: h,
            hasClass: g,
            getWindowHeight: m,
            o: w,
            css: b,
            prev: S,
            next: y,
            last: M,
            index: T,
            getList: A,
            hide: x,
            show: O,
            isArrayOrList: k,
            addClass: E,
            removeClass: R,
            appendTo: j,
            wrap: L,
            wrapAll: z,
            wrapInner: D,
            unwrap: N,
            closest: P,
            after: H,
            before: C,
            insertBefore: I,
            getScrollTop: W,
            siblings: F,
            preventDefault: V,
            l: Z,
            u: B,
            v: G,
            p: Y,
            h: U,
            isFunction: X,
            trigger: _,
            matches: Q,
            toggle: J,
            createElementFromHTML: K,
            remove: q,
            filter: $,
            untilAll: nn,
            nextAll: tn,
            prevAll: en,
            toArray: on,
            g: rn,
            S: an,
            M: ln,
            T: un,
            A: cn
        });
        function fn(n) {
            return fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            }, fn(n);
        }
        var dn = {
            O: {},
            R: function(n, t) {
                var e = this;
                return "object" !== fn(this.O[n]) && (this.O[n] = []), this.O[n].push(t), function() {
                    return e.removeListener(n, t);
                };
            },
            removeListener: function(n, t) {
                if ("object" === fn(this.O[n])) {
                    var e = this.O[n].indexOf(t);
                    e > -1 && this.O[n].splice(e, 1);
                }
            },
            j: function(n) {
                for (var t = this, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                "object" === fn(this.O[n]) && this.O[n].forEach((function(n) {
                    return n.apply(t, i);
                }));
            },
            once: function(n, t) {
                var e = this, i = this.R(n, (function() {
                    i();
                    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    t.apply(e, o);
                }));
            }
        }, vn = {
            L: 0,
            D: 0,
            slides: [],
            N: [],
            P: null,
            H: null,
            C: !1,
            I: !1,
            W: !1,
            F: !1,
            V: !1,
            Z: void 0,
            B: void 0,
            G: !1,
            canScroll: !0,
            Y: "none",
            U: "none",
            X: !1,
            _: !1,
            J: !0,
            K: 0,
            q: m(),
            nn: !1,
            tn: {}
        };
        function pn(n) {
            Object.assign(vn, n);
        }
        function hn() {
            return vn;
        }
        o.state = vn;
        var gn = "onAfterRenderNoAnchor", mn = "onClickOrTouch", wn = "moveSlideLeft", bn = "moveSlideRight", Sn = "onInitialise", yn = "bindEvents", Mn = "onDestroy", Tn = "contentChanged", An = "onScrollOverflowScrolled", xn = "onScrollPageAndSlide", On = "onKeyDown", kn = "onMenuClick", En = "scrollPage", Rn = "landscapeScroll", jn = "scrollBeyondFullpage", Ln = "onPerformMovement", zn = "onSlideLeave", Dn = "onLeave", Nn = "afterSectionLoads", Pn = "afterSlideLoads";
        function Hn(n) {
            dn.j(mn, {
                e: n,
                target: n.target
            });
        }
        function Cn() {
            [ "click", "touchstart" ].forEach((function(n) {
                Y(n, Hn);
            }));
        }
        function In() {
            pn({
                J: !0
            });
        }
        dn.R(yn, (function() {
            [ "click", "touchstart" ].forEach((function(n) {
                B(n, Hn);
            })), G("focus", In), dn.R(Mn, Cn);
        }));
        var Wn = "fullpage-wrapper", Fn = "." + Wn, Vn = "fp-responsive", Zn = "fp-notransition", Bn = "fp-destroyed", Gn = "fp-enabled", Yn = "active", Un = ".active", Xn = "fp-completely", _n = "fp-section", Qn = "." + _n, Jn = ".fp-tableCell", Kn = "#fp-nav", qn = "fp-slide", $n = "." + qn, nt = ".fp-slide.active", tt = "fp-slides", et = ".fp-slides", it = "fp-slidesContainer", ot = "." + it, rt = "fp-table", at = "fp-overflow", lt = "." + at, ut = "fp-is-overflow", ct = ".fp-slidesNav", st = ".fp-slidesNav a", ft = "fp-controlArrow", dt = "." + ft, vt = "fp-prev", pt = ".fp-controlArrow.fp-prev", ht = ".fp-controlArrow.fp-next", gt = {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            licenseKey: "",
            credits: {
                enabled: !0,
                label: "Made with fullPage.js",
                position: "right"
            },
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            en: 600,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !0,
            scrollOverflowReset: !1,
            touchSensitivity: 5,
            touchWrapper: null,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            allowCorrectDirection: !1,
            scrollOverflowMacStyle: !0,
            controlArrows: !0,
            controlArrowsHTML: [ '<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>' ],
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            cards: !1,
            cardsOptions: {
                perspective: 100,
                fadeContent: !0,
                fadeBackground: !0
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            beforeLeave: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            onScrollOverflow: null,
            lazyLoading: !0,
            observer: !0
        }, mt = null, wt = !1, bt = h({}, gt), St = null;
        function yt(n) {
            return mt;
        }
        function Mt() {
            return St || gt;
        }
        function Tt() {
            return bt;
        }
        function At(n, t, e) {
            St[n] = t, "internal" !== e && (bt[n] = t);
        }
        function xt() {
            if (!Mt().anchors.length) {
                var n = p(Mt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", mt);
                n.length && n.length === p(Mt().sectionSelector, mt).length && (wt = !0, n.forEach((function(n) {
                    Mt().anchors.push(Z(n, "data-anchor").toString());
                })));
            }
            if (!Mt().navigationTooltips.length) {
                var t = p(Mt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", mt);
                t.length && t.forEach((function(n) {
                    Mt().navigationTooltips.push(Z(n, "data-tooltip").toString());
                }));
            }
        }
        function Ot(n) {
            return void 0 !== window["fp_" + n + "Extension"];
        }
        function kt(n) {
            var t = Mt();
            return null !== t[n] && "[object Array]" === Object.prototype.toString.call(t[n]) ? t[n].length && s[n] : t[n] && s[n];
        }
        function Et(n, t, e) {
            if (kt(n)) return X(s[n][t]) ? s[n][t](e) : s[n][t];
        }
        function Rt() {
            return Et("dragAndMove", "isAnimating");
        }
        function jt() {
            return Et("dragAndMove", "isGrabbing");
        }
        function Lt(n) {
            if (Mt().offsetSections && s.offsetSections) {
                var t = Et("offsetSections", "getWindowHeight", n);
                return "" !== t ? Math.round(t) + "px" : t;
            }
            return m() + "px";
        }
        function zt(n, t) {
            n.insertBefore(t, n.firstChild);
        }
        function Dt(n) {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function e(n) {
                var e, i, o, r, a, l, u = "", c = 0;
                for (n = n.replace(/[^A-Za-z0-9+/=]/g, ""); c < n.length; ) e = t.indexOf(n.charAt(c++)) << 2 | (r = t.indexOf(n.charAt(c++))) >> 4, 
                i = (15 & r) << 4 | (a = t.indexOf(n.charAt(c++))) >> 2, o = (3 & a) << 6 | (l = t.indexOf(n.charAt(c++))), 
                u += String.fromCharCode(e), 64 != a && (u += String.fromCharCode(i)), 64 != l && (u += String.fromCharCode(o));
                return u = function(n) {
                    for (var t, e = "", i = 0, o = 0, r = 0; i < n.length; ) (o = n.charCodeAt(i)) < 128 ? (e += String.fromCharCode(o), 
                    i++) : o > 191 && o < 224 ? (r = n.charCodeAt(i + 1), e += String.fromCharCode((31 & o) << 6 | 63 & r), 
                    i += 2) : (r = n.charCodeAt(i + 1), t = n.charCodeAt(i + 2), e += String.fromCharCode((15 & o) << 12 | (63 & r) << 6 | 63 & t), 
                    i += 3);
                    return e;
                }(u), u;
            }
            function i(n) {
                return n.slice(3).slice(0, -3);
            }
            return function(n) {
                var t = n.split("_");
                if (t.length > 1) {
                    var o = t[1];
                    return e(n.replace(i(t[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + e(o.slice(3).slice(0, -3));
                }
                return i(n);
            }(e(n));
        }
        o.fp_utils = o.fp_utils || {}, Object.assign(o.fp_utils, {
            prependTo: zt,
            toggleClass: function(n, t, e) {
                if (n.classList && null == e) n.classList.toggle(t); else {
                    var i = g(n, t);
                    i && null == e || !e ? R(n, t) : (!i && null == e || e) && E(n, t);
                }
            }
        });
        var Nt = function(n) {
            this.anchor = n.anchor, this.item = n.item, this.index = n.index(), this.isLast = this.index === n.item.parentElement.querySelectorAll(n.selector).length - 1, 
            this.isFirst = !this.index, this.isActive = n.isActive;
        }, Pt = function(n, t) {
            this.parent = this.parent || null, this.selector = t, this.anchor = Z(n, "data-anchor") || Mt().anchors[T(n, Mt().sectionSelector)], 
            this.item = n, this.isVisible = d(n), this.isActive = g(n, Yn), this.on = g(n, at) || null != p(lt, n)[0], 
            this.rn = t === Mt().sectionSelector, this.container = P(n, ot) || P(n, Fn), this.index = function() {
                return this.siblings().indexOf(this);
            };
        };
        function Ht(n) {
            return n.map((function(n) {
                return n.item;
            }));
        }
        function Ct(n, t) {
            return n.find((function(n) {
                return n.item === t;
            }));
        }
        Pt.prototype.siblings = function() {
            return this.rn ? this.isVisible ? vn.N : vn.an : this.parent ? this.parent.slides : 0;
        }, Pt.prototype.prev = function() {
            var n = this.siblings(), t = (this.rn ? n.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
            return t >= 0 ? n[t] : null;
        }, Pt.prototype.next = function() {
            var n = this.siblings(), t = (this.rn ? n.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
            return t < n.length ? n[t] : null;
        }, Pt.prototype.prevPanel = function() {
            return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
        }, Pt.prototype.nextPanel = function() {
            return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
        }, Pt.prototype.ln = function() {
            return this.rn ? vn.N : vn.un;
        };
        var It, Wt = function(n) {
            Nt.call(this, n);
        }, Ft = function(n) {
            Nt.call(this, n);
        };
        function Vt(n) {
            var t = p(nt, n);
            return t.length && (n = t[0]), n;
        }
        function Zt(n) {
            return n ? n.activeSlide ? n.activeSlide : n : null;
        }
        function Bt(n) {
            var t, e, i = Mt();
            return i.autoScrolling && !i.scrollBar ? (t = -n, e = p(Fn)[0]) : (t = n, e = window), 
            {
                options: t,
                element: e
            };
        }
        function Gt(n, t) {
            !Mt().autoScrolling || Mt().scrollBar || n.self != window && g(n, tt) ? n.self != window && g(n, tt) ? n.scrollLeft = t : n.scrollTo(0, t) : n.style.top = t + "px";
        }
        function Yt(n) {
            var t = "transform " + Mt().scrollingSpeed + "ms " + Mt().easingcss3;
            return R(n, Zn), b(n, {
                "-webkit-transition": t,
                transition: t
            });
        }
        function Ut(n, t) {
            var e = n.index(), i = T(t, Qn);
            return e == i ? "none" : e > i ? "up" : "down";
        }
        function Xt(n) {
            return E(n, Zn);
        }
        function _t(n) {
            return {
                "-webkit-transform": n,
                "-moz-transform": n,
                "-ms-transform": n,
                transform: n
            };
        }
        function Qt(n, t) {
            t ? Yt(yt()) : Xt(yt()), clearTimeout(It), b(yt(), _t(n)), s.test.cn = n, It = setTimeout((function() {
                R(yt(), Zn);
            }), 10);
        }
        function Jt(n) {
            var t = Math.round(n);
            if (Mt().css3 && Mt().autoScrolling && !Mt().scrollBar) Qt("translate3d(0px, -" + t + "px, 0px)", !1); else if (Mt().autoScrolling && !Mt().scrollBar) b(yt(), {
                top: -t + "px"
            }), s.test.top = -t + "px"; else {
                var e = Bt(t);
                Gt(e.element, e.options);
            }
        }
        function Kt(n, t) {
            "internal" !== t && Et("fadingEffect", "update", n), Et("cards", "update_", n), 
            At("scrollingSpeed", n, t);
        }
        s.setScrollingSpeed = Kt;
        var qt, $t = null, ne = null, te = null;
        function ee(n, t, e, i) {
            var r, a = function(n) {
                return n.self != o && g(n, tt) ? n.scrollLeft : !Mt().autoScrolling || Mt().scrollBar ? W() : n.offsetTop;
            }(n), l = t - a, u = !1, c = vn.G;
            pn({
                G: !0
            }), qt && window.cancelAnimationFrame(qt), qt = function(s) {
                r || (r = s);
                var f = Math.floor(s - r);
                if (vn.G) {
                    var d = t;
                    e && (d = o.fp_easings[Mt().easing](f, a, l, e)), f <= e && Gt(n, d), f < e ? window.requestAnimationFrame(qt) : void 0 === i || u || (i(), 
                    pn({
                        G: !1
                    }), u = !0);
                } else u || c || (i(), pn({
                    G: !1
                }), u = !0);
            }, window.requestAnimationFrame(qt);
        }
        function ie(n) {
            return n && !n.item ? new Wt(new vi(n)) : n ? new Wt(n) : null;
        }
        function oe(n) {
            return n ? new Ft(n) : null;
        }
        function re(n, t) {
            var e = function(n, t) {
                var e = {
                    afterRender: function() {
                        return {
                            section: ie(hn().P),
                            sn: oe(hn().P.activeSlide)
                        };
                    },
                    onLeave: function() {
                        return {
                            origin: ie(t.items.origin),
                            destination: ie(t.items.destination),
                            direction: t.direction,
                            trigger: hn().H
                        };
                    },
                    afterLoad: function() {
                        return e.onLeave();
                    },
                    afterSlideLoad: function() {
                        return {
                            section: ie(t.items.section),
                            origin: ie(t.items.origin),
                            destination: ie(t.items.destination),
                            direction: t.direction,
                            trigger: hn().H
                        };
                    },
                    onSlideLeave: function() {
                        return e.afterSlideLoad();
                    },
                    beforeLeave: function() {
                        return e.onLeave();
                    },
                    onScrollOverflow: function() {
                        return {
                            section: ie(hn().P),
                            sn: oe(hn().P.activeSlide),
                            position: t.position,
                            direction: t.direction
                        };
                    }
                };
                return e[n]();
            }(n, t);
            return _(yt(), n, e), !1 !== Mt()[n].apply(e[Object.keys(e)[0]], on(e));
        }
        function ae(n) {
            var t = Vt(n);
            p("video, audio", t).forEach((function(n) {
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
            })), p('iframe[src*="youtube.com/embed/"]', t).forEach((function(n) {
                n.hasAttribute("data-autoplay") && le(n), n.onload = function() {
                    n.hasAttribute("data-autoplay") && le(n);
                };
            }));
        }
        function le(n) {
            n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }
        function ue(n) {
            var t = Vt(n);
            p("video, audio", t).forEach((function(n) {
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
            })), p('iframe[src*="youtube.com/embed/"]', t).forEach((function(n) {
                /youtube\.com\/embed\//.test(Z(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            }));
        }
        function ce(n) {
            Mt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Vt(n)).forEach((function(n) {
                if ([ "src", "srcset" ].forEach((function(t) {
                    var e = Z(n, "data-" + t);
                    null != e && e && (ln(n, t), n.addEventListener("load", (function() {})));
                })), Q(n, "source")) {
                    var t = P(n, "video, audio");
                    t && (t.load(), t.onloadeddata = function() {});
                }
            }));
        }
        function se() {
            var n = hn().P.item, t = hn().P.activeSlide, e = fe(n), i = String(e);
            t && (i = i + "-" + fe(t.item)), i = i.replace("/", "-").replace("#", "");
            var o = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
            $t.className = $t.className.replace(o, ""), E($t, "fp-viewing-" + i);
        }
        function fe(n) {
            if (!n) return null;
            var t = Z(n, "data-anchor"), e = T(n);
            return null == t && (t = e), t;
        }
        function de(n, t, e) {
            var i = "";
            Mt().anchors.length && !Mt().lockAnchors && (n ? (null != e && (i = e), null == t && (t = n), 
            pn({
                B: t
            }), ve(i + "/" + t)) : null != n ? (pn({
                B: t
            }), ve(e)) : ve(e)), se();
        }
        function ve(n) {
            if (Mt().recordHistory) location.hash = n; else if (a || u) o.history.replaceState(void 0, void 0, "#" + n); else {
                var t = o.location.href.split("#")[0];
                o.location.replace(t + "#" + n);
            }
        }
        function pe(n, t, e) {
            var i = "Section" === t ? Mt().anchors[n] : Z(e, "data-anchor");
            return encodeURI(Mt().navigationTooltips[n] || i || t + " " + (n + 1));
        }
        function he(n) {
            V(n), pn({
                H: "horizontalNav"
            });
            var t = P(this, Qn), e = p(et, P(this, Qn))[0], i = Ct(hn().N, t).slides[T(P(this, "li"))];
            dn.j(Rn, {
                slides: e,
                destination: i.item
            });
        }
        var ge, me = {};
        function we(n, t, e) {
            "all" !== t ? me[e][t] = n : Object.keys(me[e]).forEach((function(t) {
                me[e][t] = n;
            }));
        }
        function be() {
            return me;
        }
        function Se() {
            var n = P(this, Qn);
            g(this, vt) ? be().m.left && (pn({
                H: "slideArrow"
            }), dn.j(wn, {
                section: n
            })) : be().m.right && (pn({
                H: "slideArrow"
            }), dn.j(bn, {
                section: n
            }));
        }
        function ye(n) {
            !Mt().loopHorizontal && Mt().controlArrows && (J(p(pt, n.section), 0 !== n.slideIndex), 
            J(p(ht, n.section), null != y(n.destiny)));
        }
        function Me() {
            clearTimeout(ge), pn({
                W: !1
            });
        }
        function Te(n, t, e) {
            var i = P(n, Qn), o = hn().N.filter((function(n) {
                return n.item == i;
            }))[0], r = o.slides.filter((function(n) {
                return n.item == t;
            }))[0], a = {
                slides: n,
                destiny: t,
                direction: e,
                destinyPos: {
                    left: t.offsetLeft
                },
                slideIndex: r.index(),
                section: i,
                sectionIndex: o.index(),
                anchorLink: o.anchor,
                slidesNav: p(ct, i)[0],
                slideAnchor: r.anchor,
                prevSlide: o.activeSlide.item,
                prevSlideIndex: o.activeSlide.index(),
                items: {
                    section: o,
                    origin: o.activeSlide,
                    destination: r
                },
                localIsResizing: vn.F
            };
            a.xMovement = xe(a.prevSlideIndex, a.slideIndex), a.direction = a.direction ? a.direction : a.xMovement, 
            a.localIsResizing || pn({
                canScroll: !1
            }), Et("parallax", "applyHorizontal", a), Et("cards", "apply", a), Et("dropEffect", "apply", a), 
            Et("waterEffect", "apply", a), Mt().onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && X(Mt().onSlideLeave) && !1 === re("onSlideLeave", a) ? pn({
                W: !1
            }) : (kt("dropEffect") && Mt().dropEffect || (E(t, Yn), R(F(t), Yn)), ci(), a.localIsResizing || (ue(a.prevSlide), 
            ce(t)), ye(a), o.isActive && !a.localIsResizing && de(a.slideIndex, a.slideAnchor, a.anchorLink), 
            Et("continuousHorizontal", "apply", a), dn.j(zn, a), jt() ? ke(a) : Ae(n, a, !0), 
            Mt().interlockedSlides && s.interlockedSlides && (kt("continuousHorizontal") && void 0 !== e && e !== a.xMovement || Et("interlockedSlides", "apply", a)));
        }
        function Ae(n, t, e) {
            var i, o, r = t.destinyPos;
            if (i = t.slidesNav, o = t.slideIndex, Mt().slidesNavigation && null != i && (R(p(Un, i), Yn), 
            E(p("a", p("li", i)[o]), Yn)), pn({
                scrollX: Math.round(r.left)
            }), Mt().css3) {
                var a = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                s.test.dn[t.sectionIndex] = a, kt("dragAndMove") && void 0 !== t.vn || Yt(p(ot, n)), 
                b(p(ot, n), _t(a)), kt("interlockedSlides") || clearTimeout(ge), ge = setTimeout((function() {
                    e && ke(t);
                }), Mt().scrollingSpeed);
            } else s.test.left[t.sectionIndex] = Math.round(r.left), ee(n, Math.round(r.left), Mt().scrollingSpeed, (function() {
                e && ke(t);
            }));
        }
        function xe(n, t) {
            return n == t ? "none" : n > t ? "left" : "right";
        }
        function Oe() {
            clearTimeout(ge);
        }
        function ke(n) {
            Et("continuousHorizontal", "afterSlideLoads", n), n.localIsResizing || (Et("parallax", "afterSlideLoads"), 
            Et("scrollOverflowReset", "setPrevious", n.prevSlide), Et("scrollOverflowReset", "reset"), 
            X(Mt().afterSlideLoad) && re("afterSlideLoad", n), pn({
                canScroll: !0
            }), ae(n.destiny), dn.j(Pn, n)), pn({
                W: !1
            }), Et("interlockedSlides", "interlockedSlides", n);
        }
        function Ee(n, t) {
            Kt(0, "internal"), void 0 !== t && pn({
                F: !0
            }), Te(P(n, et), n), void 0 !== t && pn({
                F: !1
            }), Kt(Tt().scrollingSpeed, "internal");
        }
        function Re(n, t) {
            At("recordHistory", n, t);
        }
        function je(n, t) {
            n || Jt(0), At("autoScrolling", n, t);
            var e = hn().P.item;
            if (Mt().autoScrolling && !Mt().scrollBar) b(te, {
                overflow: "hidden",
                height: "100%"
            }), R($t, "fp-scrollable"), Re(Tt().recordHistory, "internal"), b(yt(), {
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), null != e && Jt(e.offsetTop); else if (b(te, {
                overflow: "visible",
                height: "initial"
            }), E($t, "fp-scrollable"), Re(!!Mt().autoScrolling && Tt().recordHistory, "internal"), 
            b(yt(), {
                "-ms-touch-action": "",
                "touch-action": ""
            }), Xt(yt()), null != e) {
                var i = Bt(e.offsetTop);
                i.element.scrollTo(0, i.options);
            }
            _(yt(), "setAutoScrolling", n);
        }
        function Le() {
            for (var n = p(nt), t = 0; t < n.length; t++) Ee(n[t], "internal");
        }
        function ze() {
            var n = p(".fp-auto-height")[0] || qe() && p(".fp-auto-height-responsive")[0];
            Mt().lazyLoading && n && p(".fp-section:not(.active)").forEach((function(n) {
                var t, e, i, o, r;
                e = (t = n.getBoundingClientRect()).top, i = t.bottom, o = e + 2 < vn.q && e > 0, 
                r = i > 2 && i < vn.q, (o || r) && ce(n);
            }));
        }
        function De() {
            _(S(this), "click");
        }
        function Ne() {
            q(p(Kn));
            var n = r.createElement("div");
            n.setAttribute("id", "fp-nav");
            var t = r.createElement("ul");
            n.appendChild(t), j(n, $t);
            var e = p(Kn)[0];
            E(e, "fp-" + Mt().navigationPosition), Mt().showActiveTooltip && E(e, "fp-show-active");
            for (var i = "", o = 0; o < hn().N.length; o++) {
                var a = hn().N[o], l = "";
                Mt().anchors.length && (l = a.anchor), i += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + pe(a.index(), "Section") + "</span><span></span></a>";
                var u = Mt().navigationTooltips[a.index()];
                void 0 !== u && "" !== u && (i += '<div class="fp-tooltip fp-' + Mt().navigationPosition + '">' + u + "</div>"), 
                i += "</li>";
            }
            p("ul", e)[0].innerHTML = i;
            var c = p("li", p(Kn)[0])[hn().P.index()];
            E(p("a", c), Yn);
        }
        function Pe(n) {
            n.preventDefault && V(n), pn({
                H: "verticalNav"
            });
            var t = T(P(this, "#fp-nav li"));
            dn.j(En, {
                destination: hn().N[t]
            });
        }
        function He(n, t) {
            var e;
            e = n, Mt().menu && Mt().menu.length && p(Mt().menu).forEach((function(n) {
                null != n && (R(p(Un, n), Yn), E(p('[data-menuanchor="' + e + '"]', n), Yn));
            })), function(n, t) {
                var e = p(Kn)[0];
                Mt().navigation && null != e && "none" !== e.style.display && (R(p(Un, e), Yn), 
                E(n ? p('a[href="#' + n + '"]', e) : p("a", p("li", e)[t]), Yn));
            }(n, t);
        }
        me.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, me.k = h({}, me.m), dn.R(mn, (function(n) {
            var t = n.target;
            (Q(t, dt) || P(t, dt)) && Se.call(t, n);
        })), s.landscapeScroll = Te, dn.R(yn, (function() {
            dn.R(Ln, Me);
        })), s.setRecordHistory = Re, s.setAutoScrolling = je, s.test.setAutoScrolling = je, 
        (new Date).getTime();
        var Ce, Ie, We, Fe, Ve, Ze, Be = (Ie = !0, We = (new Date).getTime(), Fe = !o.fullpage_api, 
        function(n, t) {
            var e = (new Date).getTime(), i = "wheel" === n ? Mt().scrollingSpeed : 100;
            return Ie = Fe || e - We >= i, Fe = !o.fullpage_api, Ie && (Ce = t(), We = e), void 0 === Ce || Ce;
        });
        function Ge(n, t) {
            if (X(Mt().beforeLeave)) return Be(hn().H, (function() {
                return re(n, t);
            }));
        }
        function Ye(n, t, e) {
            var i = n.item;
            if (null != i) {
                var o, r, a = {
                    element: i,
                    callback: t,
                    isMovementUp: e,
                    dtop: Ue(i),
                    yMovement: Ut(hn().P, i),
                    anchorLink: n.anchor,
                    sectionIndex: n.index(),
                    activeSlide: n.activeSlide ? n.activeSlide.item : null,
                    leavingSection: hn().P.index() + 1,
                    localIsResizing: vn.F,
                    items: {
                        origin: hn().P,
                        destination: n
                    },
                    direction: null
                };
                if (!(hn().P.item == i && !vn.F || Mt().scrollBar && W() === a.dtop && !g(i, "fp-auto-height"))) {
                    if (null != a.activeSlide && (o = Z(a.activeSlide, "data-anchor"), r = T(a.activeSlide, null)), 
                    !a.localIsResizing) {
                        var l = a.yMovement;
                        if (void 0 !== e && (l = e ? "up" : "down"), a.direction = l, Ot("dropEffect") && s.dropEffect.onLeave_(a), 
                        Ot("waterEffect") && s.waterEffect.onLeave_(a), X(Mt().beforeLeave) && !1 === Ge("beforeLeave", a)) return;
                        if (X(Mt().onLeave) && !re("onLeave", a)) return;
                    }
                    Et("parallax", "apply", a), Et("cards", "apply", a), Et("dropEffect", "apply", a), 
                    Et("waterEffect", "apply", a), Mt().autoScrolling && Mt().continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = function(n) {
                        pn({
                            nn: !0
                        });
                        var t = hn().P.item;
                        return n.isMovementUp ? C(t, tn(t, Qn)) : H(t, en(t, Qn).reverse()), Jt(hn().P.item.offsetTop), 
                        Le(), n.pn = t, n.dtop = n.element.offsetTop, n.yMovement = Ut(hn().P, n.element), 
                        n.leavingSection = n.items.origin.index() + 1, n.sectionIndex = n.items.destination.index(), 
                        _(yt(), "onContinuousVertical", n), n;
                    }(a)), Et("scrollOverflowReset", "setPrevious", hn().P.item), a.localIsResizing || ue(hn().P.item), 
                    kt("dropEffect") && Mt().dropEffect || (E(i, Yn), R(F(i), Yn)), ci(), ce(i), pn({
                        canScroll: s.test.hn
                    }), de(r, o, a.anchorLink), dn.j(Dn, a), function(n) {
                        var t = Mt().scrollingSpeed < 700, e = t ? 700 : Mt().scrollingSpeed;
                        if (pn({
                            Y: "none",
                            scrollY: Math.round(n.dtop)
                        }), dn.j(Ln), Mt().css3 && Mt().autoScrolling && !Mt().scrollBar) Qt("translate3d(0px, -" + Math.round(n.dtop) + "px, 0px)", !0), 
                        kt("waterEffect") && Le(), Mt().scrollingSpeed ? (clearTimeout(Ve), Ve = setTimeout((function() {
                            Xe(n), pn({
                                canScroll: !t || s.test.hn
                            });
                        }), Mt().scrollingSpeed)) : Xe(n); else {
                            var i = Bt(n.dtop);
                            s.test.top = -n.dtop + "px", clearTimeout(Ve), ee(i.element, i.options, Mt().scrollingSpeed, (function() {
                                Mt().scrollBar ? Ve = setTimeout((function() {
                                    Xe(n);
                                }), 30) : (Xe(n), pn({
                                    canScroll: !t || s.test.hn
                                }));
                            }));
                        }
                        t && (clearTimeout(Ze), Ze = setTimeout((function() {
                            pn({
                                canScroll: !0
                            });
                        }), e));
                    }(a), pn({
                        Z: a.anchorLink
                    }), He(a.anchorLink, function(n) {
                        return null != n.pn ? n.isMovementUp ? vn.L - 1 : 0 : n.sectionIndex;
                    }(a));
                }
            }
        }
        function Ue(n) {
            var t = n.offsetHeight, e = n.offsetTop, i = e, o = kt("dragAndMove") && Et("dragAndMove", "isGrabbing") ? Et("dragAndMove", "isScrollingDown") : e > vn.K, r = i - m() + t, a = Mt().bigSectionsDestination;
            return t > m() ? (o || a) && "bottom" !== a || (i = r) : (o || vn.F && null == y(n)) && (i = r), 
            kt("offsetSections") && (i = s.offsetSections.getSectionPosition_(o, i, n)), pn({
                K: i
            }), i;
        }
        function Xe(n) {
            pn({
                C: !1
            }), function(n) {
                null != n.pn && (n.isMovementUp ? C(p(Qn)[0], n.pn) : H(p(Qn)[hn().N.length - 1], n.pn), 
                Jt(hn().P.item.offsetTop), function() {
                    for (var n = p(nt), t = 0; t < n.length; t++) Ee(n[t], "internal");
                }(), n.sectionIndex = n.items.destination.index(), n.leavingSection = n.items.origin.index() + 1, 
                pn({
                    nn: !1
                }));
            }(n), X(Mt().afterLoad) && !n.localIsResizing && re("afterLoad", n), Et("parallax", "afterLoad"), 
            Et("waterEffect", "afterLoad"), Et("dropEffect", "afterLoad"), Et("scrollOverflowReset", "reset"), 
            Et("resetSliders", "apply", n), ci(), n.localIsResizing || ae(n.element), E(n.element, Xn), 
            R(F(n.element), Xn), ze(), pn({
                canScroll: !0
            }), dn.j(Nn, n), X(n.callback) && n.callback();
        }
        function _e(n, t) {
            At("fitToSection", n, t);
        }
        function Qe() {
            vn.canScroll && (pn({
                F: !0
            }), Ye(vn.P), pn({
                F: !1
            }));
        }
        function Je() {
            var n = Mt().responsive || Mt().responsiveWidth, t = Mt().responsiveHeight, e = n && o.innerWidth < n, i = t && o.innerHeight < t;
            n && t ? Ke(e || i) : n ? Ke(e) : t && Ke(i);
        }
        function Ke(n) {
            var t = qe();
            n ? t || (je(!1, "internal"), _e(!1, "internal"), x(p(Kn)), E($t, Vn), X(Mt().afterResponsive) && Mt().afterResponsive.call(yt(), n), 
            Et("responsiveSlides", "toSections"), _(yt(), "afterResponsive", n)) : t && (je(Tt().autoScrolling, "internal"), 
            _e(Tt().autoScrolling, "internal"), O(p(Kn)), R($t, Vn), X(Mt().afterResponsive) && Mt().afterResponsive.call(yt(), n), 
            Et("responsiveSlides", "toSlides"), _(yt(), "afterResponsive", n));
        }
        function qe() {
            return g($t, Vn);
        }
        function $e(n) {
            Mt().verticalCentered && (!Mt().scrollOverflow && ai.gn(n.item) || ai.mn(n) || g(n.item, rt) || E(n.item, rt));
        }
        s.moveTo = moveTo, s.getScrollY = function() {
            return vn.scrollY;
        }, dn.R(Mn, (function() {
            clearTimeout(Ve), clearTimeout(Ze);
        })), s.setFitToSection = _e, s.fitToSection = Qe, s.setResponsive = Ke;
        var ni, ti = null;
        function ei(n) {
            var t = n.item, e = n.wn.length, i = n.index();
            !hn().P && n.isVisible && (E(t, Yn), ci(), ti = hn().P.item), kt("offsetSections") && b(t, {
                height: Lt(t)
            }), Mt().paddingTop && b(t, {
                "padding-top": Mt().paddingTop
            }), Mt().paddingBottom && b(t, {
                "padding-bottom": Mt().paddingBottom
            }), void 0 !== Mt().sectionsColor[i] && b(t, {
                "background-color": Mt().sectionsColor[i]
            }), void 0 !== Mt().anchors[i] && t.setAttribute("data-anchor", n.anchor), e || $e(n);
        }
        function ii() {
            Mt().scrollOverflow && !Mt().scrollBar && (ai.bn(), ai.Sn());
        }
        function oi() {
            Y("keyup", ai.yn);
        }
        s.getActiveSection = function() {
            return hn().P;
        }, dn.R(yn, (function() {
            dn.R(gn, ii), dn.R(Dn, ai.onLeave), dn.R(zn, ai.onLeave), dn.R(Pn, ai.afterLoad), 
            dn.R(Nn, ai.afterLoad), dn.R(Mn, oi), B("keyup", ai.yn);
        }));
        var ri, ai = {
            Mn: null,
            Tn: !0,
            An: !0,
            xn: null,
            On: null,
            kn: function(n) {
                if (!vn.canScroll) return V(n), !1;
            },
            En: function(n) {
                if (!cn() && Mt().keyboardScrolling && [ 38, 33, 32, 40, 34, 36, 35 ].indexOf(n.keyCode) > -1 && !ai.An) return V(n), 
                !1;
            },
            yn: function() {
                ai.Tn = vn.canScroll;
            },
            onLeave: function() {
                clearTimeout(ni), ai.An = !1;
            },
            afterLoad: function() {
                ai.An = !1, clearTimeout(ni), ni = setTimeout((function() {
                    ai.Tn = vn.canScroll;
                }), 200);
            },
            Rn: function() {
                r.activeElement === this.Mn && (this.Mn.blur(), ai.An = !1);
            },
            Sn: function() {
                if (Mt().scrollOverflow && ai.Tn) {
                    ai.Rn();
                    var n = ai.jn(hn().P.item);
                    !n || a || u || (this.Mn = n, requestAnimationFrame((function() {
                        n.focus(), ai.An = !0;
                    }))), ai.Tn = !1;
                }
            },
            bn: function() {
                Mt().scrollOverflowMacStyle && !l && E($t, "fp-scroll-mac"), hn().un.forEach((function(n) {
                    if (!(n.slides && n.slides.length || g(n.item, "fp-auto-height-responsive") && qe())) {
                        var t, e = Vt(n.item), i = ai.gn(n.item), o = (t = n).rn ? t : t.parent;
                        if (c) {
                            var r = i ? "addClass" : "removeClass";
                            sn[r](o.item, ut), sn[r](n.item, ut);
                        } else E(o.item, ut), E(n.item, ut);
                        n.on || (ai.Ln(e), ai.zn(e)), n.on = !0;
                    }
                }));
            },
            zn: function(n) {
                ai.jn(n).addEventListener("scroll", ai.Dn), n.addEventListener("wheel", ai.kn, {
                    passive: !1
                }), n.addEventListener("keydown", ai.En, {
                    passive: !1
                });
            },
            Ln: function(n) {
                var t = document.createElement("div");
                t.className = at, D(n, t), t.setAttribute("tabindex", "-1");
            },
            Nn: function(n) {
                var t = p(lt, n)[0];
                t && (N(t), n.removeAttribute("tabindex"));
            },
            jn: function(n) {
                var t = Vt(n);
                return p(lt, t)[0] || t;
            },
            on: function(n) {
                return g(n, at) || null != p(lt, n)[0];
            },
            mn: function(n) {
                return n.rn && n.activeSlide ? n.activeSlide.on : n.on;
            },
            gn: function(n) {
                return ai.jn(n).scrollHeight > o.innerHeight;
            },
            Pn: function(n, t) {
                if (!vn.canScroll) return !1;
                if (Mt().scrollBar) return !0;
                var e = ai.jn(t);
                if (!Mt().scrollOverflow || !g(e, at) || g(t, "fp-noscroll") || g(Vt(t), "fp-noscroll")) return !0;
                var i = c ? 1 : 0, o = e.scrollTop, r = "up" === n && o <= 0, a = "down" === n && e.scrollHeight <= Math.ceil(e.offsetHeight + o) + i, l = r || a;
                return l || (this.xn = (new Date).getTime()), l;
            },
            Hn: function() {
                this.On = (new Date).getTime();
                var n = this.On - ai.xn, t = (a || u) && vn.X, e = vn._ && n > 600;
                return t && n > 400 || e;
            },
            Dn: (ri = 0, function(n) {
                var t = n.target.scrollTop, e = "none" !== vn.Y ? vn.Y : ri < t ? "down" : "up";
                ri = t, X(Mt().onScrollOverflow) && re("onScrollOverflow", {
                    position: t,
                    direction: e
                }), g(n.target, at) && vn.canScroll && ai.Pn(e, n.target) && ai.Hn() && ai.gn(hn().P.item) && dn.j(An, {
                    direction: e
                });
            })
        }, li = null, ui = null;
        function ci() {
            vn.P = null, vn.N.map((function(n) {
                var t = g(n.item, Yn);
                n.isActive = t, n.on = ai.on(n.item), t && (vn.P = n), n.slides.length && (n.activeSlide = null, 
                n.slides.map((function(t) {
                    var e = g(t.item, Yn);
                    t.on = ai.on(n.item), t.isActive = e, e && (n.activeSlide = t);
                })));
            })), function() {
                var n = vn.P, t = !!vn.P && vn.P.slides.length, e = vn.P ? vn.P.activeSlide : null;
                if (!n && vn.N.length && !hn().C) {
                    if (li) {
                        var i = di(li, vn.N);
                        i && (vn.P = i, vn.P.isActive = !0, E(vn.P.item, Yn)), vn.P && Jt(vn.P.item.offsetTop);
                    }
                    if (t && !e && ui) {
                        var o = di(ui, vn.P.slides);
                        o && (vn.P.activeSlide = o, vn.P.activeSlide.isActive = !0, E(vn.P.activeSlide.item, Yn)), 
                        vn.P.activeSlide && Ee(vn.P.activeSlide.item, "internal");
                    }
                }
            }(), _(yt(), "onUpdateStateDone");
        }
        function si() {
            var n = p(Mt().sectionSelector + ", " + Qn, yt()), t = v(n), e = Array.from(n).map((function(n) {
                return new vi(n);
            })), i = e.filter((function(n) {
                return n.isVisible;
            })), o = i.reduce((function(n, t) {
                return n.concat(t.slides);
            }), []);
            li = fi(vn.P), ui = fi(vn.P ? vn.P.activeSlide : null), vn.L = t.length, vn.D = i.reduce((function(n, t) {
                return n + t.slides.length;
            }), 0), vn.N = i, vn.an = e, vn.slides = o, vn.un = vn.N.concat(vn.slides);
        }
        function fi(n) {
            if (!n) return null;
            var t = n ? n.item : null, e = n.rn ? vn.an : vn.P.Cn;
            if (t) {
                var i = Ct(e, t);
                return i ? i.index() : null;
            }
            return null;
        }
        function di(n, t) {
            var e, i = n - 1, o = n;
            do {
                if (e = t[i] || t[o]) break;
                i -= 1, o += 1;
            } while (i >= 0 || o < t.length);
            return e;
        }
        var vi = function(n) {
            var t = this;
            [].push.call(arguments, Mt().sectionSelector), Pt.apply(this, arguments), this.wn = p(Mt().slideSelector, n), 
            this.Cn = Array.from(this.wn).map((function(n) {
                return new hi(n, t);
            })), this.slides = this.Cn.filter((function(n) {
                return n.isVisible;
            })), this.activeSlide = this.slides.length ? this.slides.filter((function(n) {
                return n.isActive;
            }))[0] || this.slides[0] : null;
        };
        vi.prototype = Pt.prototype, vi.prototype.constructor = vi;
        var pi, hi = function(n, t) {
            this.parent = t, Pt.call(this, n, Mt().slideSelector);
        };
        function gi() {
            E(p(Mt().sectionSelector, yt()), _n), E(p(Mt().slideSelector, yt()), qn);
        }
        function mi(n) {
            var t = n.slides.length, e = n.wn, i = n.slides, o = 100 * t, a = 100 / t;
            if (!p(et, n.item)[0]) {
                var l = r.createElement("div");
                l.className = tt, z(e, l);
                var u = r.createElement("div");
                u.className = it, z(e, u);
            }
            b(p(ot, n.item), {
                width: o + "%"
            }), t > 1 && (Mt().controlArrows && function(n) {
                var t = n.item, e = [ K(Mt().controlArrowsHTML[0]), K(Mt().controlArrowsHTML[1]) ];
                H(p(et, t)[0], e), E(e, ft), E(e[0], vt), E(e[1], "fp-next"), "#fff" !== Mt().controlArrowColor && (b(p(ht, t), {
                    "border-color": "transparent transparent transparent " + Mt().controlArrowColor
                }), b(p(pt, t), {
                    "border-color": "transparent " + Mt().controlArrowColor + " transparent transparent"
                })), Mt().loopHorizontal || x(p(pt, t));
            }(n), Mt().slidesNavigation && function(n) {
                var t = n.item, e = n.slides.length;
                j(K('<div class="fp-slidesNav"><ul></ul></div>'), t);
                var i = p(ct, t)[0];
                E(i, "fp-" + Mt().slidesNavPosition);
                for (var o = 0; o < e; o++) j(K('<li><a href="#"><span class="fp-sr-only">' + pe(o, "Slide", p($n, t)[o]) + "</span><span></span></a></li>"), p("ul", i)[0]);
                b(i, {
                    "margin-left": "-" + i.innerWidth / 2 + "px"
                });
                var r = n.activeSlide ? n.activeSlide.index() : 0;
                E(p("a", p("li", i)[r]), Yn);
            }(n)), i.forEach((function(n) {
                b(n.item, {
                    width: a + "%"
                }), Mt().verticalCentered && $e(n);
            }));
            var c = kt("responsiveSlides") ? null : n.activeSlide || null;
            null != c && vn.P && (0 !== vn.P.index() || 0 === vn.P.index() && 0 !== c.index()) ? (Ee(c.item, "internal"), 
            E(c.item, "fp-initial")) : E(e[0], Yn);
        }
        hi.prototype = Pt.prototype, hi.prototype.constructor = vi;
        var wi = {
            attributes: !1,
            subtree: !0,
            childList: !0,
            characterData: !0
        };
        function bi() {
            return Et("responsiveSlides", "isResponsiveSlidesChanging") || v(p(Mt().slideSelector, yt())).length !== hn().D;
        }
        function Si(n) {
            var t = bi();
            (bi() || Et("responsiveSlides", "isResponsiveSlidesChanging") || v(p(Mt().sectionSelector, yt())).length !== hn().L) && !vn.nn && (Mt().observer && pi && pi.disconnect(), 
            si(), ci(), Mt().anchors = [], q(p(Kn)), Et("responsiveSlides", "isResponsiveSlidesChanging") || gi(), 
            xt(), Mt().navigation && Ne(), t && (q(p(ct)), q(p(dt))), hn().N.forEach((function(n) {
                n.slides.length ? t && mi(n) : ei(n);
            }))), Mt().observer && pi && p(Fn)[0] && pi.observe(p(Fn)[0], wi);
        }
        dn.R(yn, (function() {
            var n, t, e;
            Mt().observer && "MutationObserver" in window && p(Fn)[0] && (n = p(Fn)[0], t = wi, 
            (e = new MutationObserver(Si)).observe(n, t), pi = e), dn.R(Tn, Si);
        })), s.render = Si;
        var yi = function() {
            var n = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        n = !0;
                    }
                });
                G("testPassive", null, t), U("testPassive", null, t);
            } catch (n) {}
            return function() {
                return n;
            };
        }();
        function Mi() {
            return !!yi() && {
                passive: !1
            };
        }
        var Ti, Ai, xi, Oi, ki = (xi = (new Date).getTime(), Oi = [], {
            In: function(n) {
                var t = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail, e = Math.max(-1, Math.min(1, t)), i = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX;
                Ti = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !i;
                var r = (new Date).getTime();
                Ai = e < 0 ? "down" : "up", Oi.length > 149 && Oi.shift(), Oi.push(Math.abs(t));
                var a = r - xi;
                xi = r, a > 200 && (Oi = []);
            },
            Wn: function() {
                var n = an(Oi, 10) >= an(Oi, 70);
                return !!Oi.length && n && Ti;
            },
            Fn: function() {
                return Ai;
            }
        });
        function Ei() {
            var n = Mt().css3 ? W() + m() : rn(hn().N).item.offsetTop + rn(hn().N).item.offsetHeight, t = Bt(n);
            s.test.top = -n + "px", pn({
                canScroll: !1
            }), ee(t.element, t.options, Mt().scrollingSpeed, (function() {
                setTimeout((function() {
                    pn({
                        C: !0
                    }), pn({
                        canScroll: !0
                    });
                }), 30);
            }));
        }
        function Ri() {
            yt().getBoundingClientRect().bottom >= 0 && ji();
        }
        function ji() {
            var n = Bt(rn(hn().N).item.offsetTop);
            pn({
                canScroll: !1
            }), ee(n.element, n.options, Mt().scrollingSpeed, (function() {
                pn({
                    canScroll: !0
                }), pn({
                    C: !1
                }), pn({
                    Vn: !1
                });
            }));
        }
        var Li, zi, Di, Ni = (Li = !1, zi = {}, Di = {}, function(n, t, e) {
            switch (n) {
              case "set":
                zi[t] = (new Date).getTime(), Di[t] = e;
                break;

              case "isNewKeyframe":
                var i = (new Date).getTime();
                Li = i - zi[t] > Di[t];
            }
            return Li;
        });
        function Pi() {
            var n = hn().P.next();
            n || !Mt().loopBottom && !Mt().continuousVertical || (n = hn().N[0]), null != n ? Ye(n, null, !1) : yt().scrollHeight < $t.scrollHeight && dn.j(jn);
        }
        function Hi() {
            var n = hn().P.prev();
            n || !Mt().loopTop && !Mt().continuousVertical || (n = rn(hn().N)), null != n && Ye(n, null, !0);
        }
        s.moveSectionDown = Pi, s.moveSectionUp = Hi;
        var Ci = 0;
        function Ii(n) {
            Mt().autoScrolling && (vn.canScroll && (n.pageY < Ci && be().m.up ? Hi() : n.pageY > Ci && be().m.down && Pi()), 
            Ci = n.pageY);
        }
        function Wi(n) {
            if (be().m[n]) {
                var t = "down" === n ? Pi : Hi;
                kt("scrollHorizontally") && (t = Et("scrollHorizontally", "getScrollSection", {
                    type: n,
                    scrollSection: t
                })), Mt().scrollOverflow && ai.mn(hn().P) ? ai.Pn(n, hn().P.item) && ai.Hn() && t() : t();
            }
        }
        var Fi, Vi, Zi, Bi = 0, Gi = 0, Yi = 0, Ui = 0, Xi = no(), _i = {
            Zn: "ontouchmove" in window ? "touchmove" : Xi ? Xi.move : null,
            Bn: "ontouchstart" in window ? "touchstart" : Xi ? Xi.down : null
        };
        function Qi(n) {
            var t = P(n.target, Qn) || hn().P.item, e = ai.mn(hn().P);
            if (Ji(n)) {
                pn({
                    X: !0,
                    _: !1
                }), Mt().autoScrolling && (e && !vn.canScroll || Mt().scrollBar) && V(n);
                var i = $i(n);
                Yi = i.y, Ui = i.x;
                var r = Math.abs(Bi - Yi) > o.innerHeight / 100 * Mt().touchSensitivity, a = Math.abs(Gi - Ui) > w() / 100 * Mt().touchSensitivity, l = p(et, t).length && Math.abs(Gi - Ui) > Math.abs(Bi - Yi), u = Bi > Yi ? "down" : "up";
                pn({
                    Y: l ? Gi > Ui ? "right" : "left" : u
                }), l ? !vn.W && a && (Gi > Ui ? be().m.right && dn.j(bn, {
                    section: t
                }) : be().m.left && dn.j(wn, {
                    section: t
                })) : Mt().autoScrolling && vn.canScroll && r && Wi(u);
            }
        }
        function Ji(n) {
            return void 0 === n.pointerType || "mouse" != n.pointerType;
        }
        function Ki(n) {
            if (Mt().fitToSection && pn({
                G: !1
            }), Ji(n)) {
                var t = $i(n);
                Bi = t.y, Gi = t.x;
            }
            G("touchend", qi);
        }
        function qi() {
            U("touchend", qi), pn({
                X: !1
            });
        }
        function $i(n) {
            var t = {};
            return t.y = void 0 !== n.pageY && (n.pageY || n.pageX) ? n.pageY : n.touches[0].pageY, 
            t.x = void 0 !== n.pageX && (n.pageY || n.pageX) ? n.pageX : n.touches[0].pageX, 
            u && Ji(n) && Mt().scrollBar && void 0 !== n.touches && (t.y = n.touches[0].pageY, 
            t.x = n.touches[0].pageX), t;
        }
        function no() {
            var n;
            return o.PointerEvent && (n = {
                down: "pointerdown",
                move: "pointermove"
            }), n;
        }
        function to(n) {
            Mt().autoScrolling && Ji(n) && be().m.up && (vn.canScroll || V(n));
        }
        function eo(n, t) {
            var e = null == t ? hn().P.item : t, i = Ct(vn.N, e), o = p(et, e)[0];
            if (!(null == o || Rt() || vn.W || i.slides.length < 2)) {
                var r = i.activeSlide, a = "left" === n ? r.prev() : r.next();
                if (!a) {
                    if (!Mt().loopHorizontal) return;
                    a = "left" === n ? rn(i.slides) : i.slides[0];
                }
                pn({
                    W: !s.test.hn
                }), Te(o, a.item, n);
            }
        }
        function io(n) {
            eo("left", n);
        }
        function oo(n) {
            eo("right", n);
        }
        function ro(n) {
            var t = hn().N.filter((function(t) {
                return t.anchor === n;
            }))[0];
            if (!t) {
                var e = void 0 !== n ? n - 1 : 0;
                t = hn().N[e];
            }
            return t;
        }
        function ao(n) {
            null != n && Te(P(n, et), n);
        }
        function lo(n, t) {
            var e = ro(n);
            if (null != e) {
                var i = function(n, t) {
                    var e = t.slides.filter((function(t) {
                        return t.anchor === n;
                    }))[0];
                    return null == e && (n = void 0 !== n ? n : 0, e = t.slides[n]), e ? e.item : null;
                }(t, e);
                e.anchor === vn.Z || g(e.item, Yn) ? ao(i) : Ye(e, (function() {
                    ao(i);
                }));
            }
        }
        function uo(n, t) {
            var e = ro(n);
            void 0 !== t ? lo(n, t) : null != e && Ye(e);
        }
        function co() {
            clearTimeout(Vi), Y("keydown", so), Y("keyup", fo);
        }
        function so(n) {
            clearTimeout(Vi);
            var t = n.keyCode, e = [ 37, 39 ].indexOf(t) > -1, i = Mt().autoScrolling || Mt().fitToSection || e;
            9 === t ? function(n) {
                var t = n.shiftKey, e = r.activeElement, i = mo(Vt(hn().P.item));
                function o(n) {
                    return V(n), i[0] ? i[0].focus() : null;
                }
                if (!function(n) {
                    var t = mo(r), e = t.indexOf(r.activeElement), i = t[n.shiftKey ? e - 1 : e + 1], o = P(i, $n), a = P(i, Qn);
                    return !o && !a;
                }(n)) {
                    e ? null == P(e, ".fp-section.active,.fp-section.active .fp-slide.active") && (e = o(n)) : o(n);
                    var a = e == i[0], l = e == i[i.length - 1], u = t && a;
                    if (u || !t && l) {
                        V(n);
                        var c = function(n) {
                            var t, e = n ? "prevPanel" : "nextPanel", i = [], o = Zt((vn.P && vn.P.activeSlide ? vn.P.activeSlide : vn.P)[e]());
                            do {
                                (i = mo(o.item)).length && (t = {
                                    Gn: o,
                                    Yn: i[n ? i.length - 1 : 0]
                                }), o = Zt(o[e]());
                            } while (o && 0 === i.length);
                            return t;
                        }(u), s = c ? c.Gn : null;
                        if (s) {
                            var f = s.rn ? s : s.parent;
                            dn.j(xn, {
                                Un: f.index() + 1,
                                slideAnchor: s.rn ? 0 : s.index()
                            }), Zi = c.Yn, V(n);
                        }
                    }
                }
            }(n) : !cn() && Mt().keyboardScrolling && i && (Fi = n.ctrlKey, Vi = setTimeout((function() {
                !function(n) {
                    var t = n.shiftKey, e = r.activeElement, i = Q(e, "video") || Q(e, "audio"), o = ai.Pn("up", hn().P.item), a = ai.Pn("down", hn().P.item), l = [ 37, 39 ].indexOf(n.keyCode) > -1;
                    if (function(n) {
                        (function(n) {
                            return [ 40, 38, 32, 33, 34 ].indexOf(n.keyCode) > -1 && !vn.C;
                        })(n) && !P(n.target, lt) && n.preventDefault();
                    }(n), vn.canScroll || l) switch (pn({
                        H: "keydown"
                    }), n.keyCode) {
                      case 38:
                      case 33:
                        be().k.up && o ? vn.C ? dn.j(On, {
                            e: n
                        }) : Hi() : ai.Sn();
                        break;

                      case 32:
                        if (t && be().k.up && !i && o) {
                            Hi();
                            break;
                        }

                      case 40:
                      case 34:
                        if (be().k.down && a) {
                            if (vn.C) return;
                            32 === n.keyCode && i || Pi();
                        } else ai.Sn();
                        break;

                      case 36:
                        be().k.up && uo(1);
                        break;

                      case 35:
                        be().k.down && uo(hn().N.length);
                        break;

                      case 37:
                        be().k.left && io();
                        break;

                      case 39:
                        be().k.right && oo();
                    }
                }(n);
            }), 0));
        }
        function fo(n) {
            vn.J && (Fi = n.ctrlKey);
        }
        function vo() {
            pn({
                J: !1
            }), Fi = !1;
        }
        function po(n) {
            go();
        }
        function ho(n) {
            P(Zi, $n) && !P(Zi, nt) || go();
        }
        function go() {
            Zi && (Zi.focus(), Zi = null);
        }
        function mo(n) {
            return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n)).filter((function(n) {
                return "-1" !== Z(n, "tabindex") && null !== n.offsetParent;
            }));
        }
        s.moveSlideLeft = io, s.moveSlideRight = oo, s.moveTo = uo, dn.R(yn, (function() {
            G("blur", vo), B("keydown", so), B("keyup", fo), dn.R(Mn, co), dn.R(Pn, po), dn.R(Nn, ho);
        }));
        var wo = (new Date).getTime(), bo = [];
        function So(n) {
            n ? (function() {
                var n, t = "";
                o.addEventListener ? n = "addEventListener" : (n = "attachEvent", t = "on");
                var e = "onwheel" in r.createElement("div") ? "wheel" : void 0 !== r.onmousewheel ? "mousewheel" : "DOMMouseScroll", i = Mi();
                "DOMMouseScroll" == e ? r[n](t + "MozMousePixelScroll", yo, i) : r[n](t + e, yo, i);
            }(), yt().addEventListener("mousedown", Mo), yt().addEventListener("mouseup", To)) : (r.addEventListener ? (Y("mousewheel", yo, !1), 
            Y("wheel", yo, !1), Y("MozMousePixelScroll", yo, !1)) : r.detachEvent("onmousewheel", yo), 
            yt().removeEventListener("mousedown", Mo), yt().removeEventListener("mouseup", To));
        }
        function yo(n) {
            var t = (new Date).getTime(), e = g(p(".fp-completely")[0], "fp-normal-scroll"), i = function(n, t) {
                (new Date).getTime();
                var e = hn().C && n.getBoundingClientRect().bottom >= 0 && "up" === ki.Fn(), i = hn().Vn;
                if (i) return V(t), !1;
                if (hn().C) {
                    if (e) {
                        var o;
                        if (!(i || Ni("isNewKeyframe", "beyondFullpage") && ki.Wn())) return (o = Bt(rn(hn().N).item.offsetTop + rn(hn().N).item.offsetHeight)).element.scrollTo(0, o.options), 
                        pn({
                            Vn: !1
                        }), V(t), !1;
                        if (ki.Wn()) return e = !1, pn({
                            Vn: !0
                        }), pn({
                            H: "wheel"
                        }), ji(), V(t), !1;
                    } else Ni("set", "beyondFullpage", 1e3);
                    if (!i && !e) return !0;
                }
            }(yt(), n);
            if (vn._ || pn({
                X: !1,
                _: !0,
                Y: "none"
            }), !be().m.down && !be().m.up) return V(n), !1;
            if (i) return !0;
            if (!1 === i) return V(n), !1;
            if (Mt().autoScrolling && !Fi && !e) {
                var r = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail, a = Math.max(-1, Math.min(1, r)), l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX, u = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !l, c = a < 0 ? "down" : a > 0 ? "up" : "none";
                bo.length > 149 && bo.shift(), bo.push(Math.abs(r)), Mt().scrollBar && V(n);
                var s = t - wo;
                return wo = t, s > 200 && (bo = []), pn({
                    U: c
                }), vn.canScroll && !Rt() && an(bo, 10) >= an(bo, 70) && u && (pn({
                    H: "wheel"
                }), Wi(a < 0 ? "down" : "up")), !1;
            }
            Mt().fitToSection && pn({
                G: !1
            });
        }
        function Mo(n) {
            var t;
            2 == n.which && (t = n.pageY, Ci = t, yt().addEventListener("mousemove", Ii));
        }
        function To(n) {
            2 == n.which && yt().removeEventListener("mousemove", Ii);
        }
        function Ao(n) {
            n ? (So(!0), function() {
                if (_i.Zn && (a || u) && (!kt("dragAndMove") || "mouseonly" === Mt().dragAndMove)) {
                    Mt().autoScrolling && ($t.removeEventListener(_i.Zn, to, {
                        passive: !1
                    }), $t.addEventListener(_i.Zn, to, {
                        passive: !1
                    }));
                    var n = Mt().touchWrapper;
                    n.removeEventListener(_i.Bn, Ki), n.removeEventListener(_i.Zn, Qi, {
                        passive: !1
                    }), n.addEventListener(_i.Bn, Ki), n.addEventListener(_i.Zn, Qi, {
                        passive: !1
                    });
                }
            }()) : (So(!1), function() {
                if (_i.Zn && (a || u)) {
                    Mt().autoScrolling && ($t.removeEventListener(_i.Zn, Qi, {
                        passive: !1
                    }), $t.removeEventListener(_i.Zn, to, {
                        passive: !1
                    }));
                    var n = Mt().touchWrapper;
                    n.removeEventListener(_i.Bn, Ki), n.removeEventListener(_i.Zn, Qi, {
                        passive: !1
                    });
                }
            }());
        }
        s.setMouseWheelScrolling = So;
        var xo = !0;
        function Oo() {
            [ "mouseenter", "touchstart", "mouseleave", "touchend" ].forEach((function(n) {
                Y(n, Eo, !0);
            }));
        }
        function ko(n, t) {
            document["fp_" + n] = t, B(n, Eo, !0);
        }
        function Eo(n) {
            var t = n.type, e = !1, i = "mouseleave" === t ? n.toElement || n.relatedTarget : n.target;
            i != document && i ? ("touchend" === t && (xo = !1, setTimeout((function() {
                xo = !0;
            }), 800)), ("mouseenter" !== t || xo) && (Mt().normalScrollElements.split(",").forEach((function(n) {
                if (!e) {
                    var t = Q(i, n), o = P(i, n);
                    (t || o) && (s.shared.Xn || Ao(!1), s.shared.Xn = !0, e = !0);
                }
            })), !e && s.shared.Xn && (Ao(!0), s.shared.Xn = !1))) : Ao(!0);
        }
        function Ro(n, t) {
            Kt(0, "internal"), uo(n, t), Kt(Tt().scrollingSpeed, "internal");
        }
        dn.R(yn, (function() {
            Mt().normalScrollElements && ([ "mouseenter", "touchstart" ].forEach((function(n) {
                ko(n, !1);
            })), [ "mouseleave", "touchend" ].forEach((function(n) {
                ko(n, !0);
            }))), dn.R(Mn, Oo);
        })), s.silentMoveTo = Ro;
        var jo, Lo, zo = m(), Do = w(), No = !1;
        function Po() {
            clearTimeout(jo), clearTimeout(Lo), U("resize", Ho);
        }
        function Ho() {
            No || (Mt().autoScrolling && !Mt().scrollBar || !Mt().fitToSection) && Io(m()), 
            function() {
                if (a) for (var n = 0; n < 4; n++) Lo = setTimeout((function() {
                    window.requestAnimationFrame((function() {
                        Mt().autoScrolling && !Mt().scrollBar && (pn({
                            F: !0
                        }), Ro(vn.P.index() + 1), pn({
                            F: !1
                        }));
                    }));
                }), 200 * n);
            }(), No = !0, clearTimeout(jo), jo = setTimeout((function() {
                !function() {
                    if (pn({
                        F: !0
                    }), Io(""), _(yt(), "onResize"), Mt().autoScrolling || vn.C || function() {
                        if (!Mt().autoScrolling || Mt().scrollBar) {
                            var n = .01 * o.innerHeight;
                            r.documentElement.style.setProperty("--vh", "".concat(n, "px"));
                        }
                    }(), dn.j(Tn), ci(), Je(), a) {
                        var n = r.activeElement;
                        if (!Q(n, "textarea") && !Q(n, "input") && !Q(n, "select")) {
                            var t = m();
                            Math.abs(t - zo) > 20 * Math.max(zo, t) / 100 && (Co(!0), zo = t);
                        }
                    } else e = m(), i = w(), vn.q === e && Do === i || (pn({
                        q: e
                    }), Do = i, Co(!0));
                    var e, i;
                    _(yt(), "onResizeEnds"), pn({
                        F: !1
                    });
                }(), No = !1;
            }), 400);
        }
        function Co(n) {
            if (!g(yt(), Bn)) {
                pn({
                    F: !0,
                    q: m(),
                    _n: w()
                });
                for (var t = hn().N, e = 0; e < t.length; ++e) {
                    var i = t[e], r = p(et, i.item)[0], a = i.slides;
                    kt("offsetSections") && b(i.item, {
                        height: Lt(i.item)
                    }), a.length > 1 && Te(r, i.activeSlide.item);
                }
                Mt().scrollOverflow && ai.bn();
                var l = hn().P.index();
                vn.C || !l || kt("fadingEffect") || kt("dropEffect") || kt("waterEffect") || Ro(l + 1), 
                pn({
                    F: !1
                }), X(Mt().afterResize) && n && Mt().afterResize.call(yt(), o.innerWidth, o.innerHeight), 
                X(Mt().afterReBuild) && !n && Mt().afterReBuild.call(yt()), _(yt(), "afterRebuild");
            }
        }
        function Io(n) {
            hn().N.forEach((function(t) {
                var e = "" !== n || kt("offsetSections") ? Lt(t.item) : "";
                b(t.item, {
                    height: e
                });
            }));
        }
        function Wo() {
            var n, t, e = o.location.hash;
            if (e.length) {
                var i = e.replace("#", "").split("/"), r = e.indexOf("#/") > -1;
                n = r ? "/" + i[1] : decodeURIComponent(i[0]);
                var a = r ? i[2] : i[1];
                a && a.length && (t = decodeURIComponent(a));
            }
            return {
                section: n,
                sn: t
            };
        }
        function Fo() {
            U("hashchange", Vo);
        }
        function Vo() {
            if (!vn.V && !Mt().lockAnchors) {
                var n = Wo(), t = n.section, e = n.sn, i = void 0 === vn.Z, o = void 0 === vn.Z && void 0 === e && !vn.W;
                t && t.length && (t && t !== vn.Z && !i || o && !Rt() || !vn.W && vn.B != e && !Rt()) && dn.j(xn, {
                    Un: t,
                    slideAnchor: e
                });
            }
        }
        function Zo(n) {
            var t = n.target;
            P(t, Mt().menu + " [data-menuanchor]") && Bo.call(t, n);
        }
        function Bo(n) {
            pn({
                H: "menu"
            }), !p(Mt().menu)[0] || !Mt().lockAnchors && Mt().anchors.length || (V(n), dn.j(kn, {
                anchor: Z(this, "data-menuanchor")
            }));
        }
        function Go(n) {
            var t = n.target;
            t && P(t, "#fp-nav a") ? Pe.call(t, n.e) : Q(t, ".fp-tooltip") ? De.call(t) : (Q(t, st) || null != P(t, st)) && he.call(t, n.e);
        }
        s.reBuild = Co, dn.R(yn, (function() {
            Ho(), G("resize", Ho), dn.R(Mn, Po);
        })), s.setLockAnchors = function(n) {
            Mt().lockAnchors = n;
        }, dn.R(yn, (function() {
            G("hashchange", Vo), dn.R(Mn, Fo);
        })), dn.R(yn, (function() {
            B("wheel", ki.In, Mi()), dn.R(jn, Ei), dn.R(On, Ri);
        })), dn.R(yn, (function() {
            dn.R(mn, Zo);
        })), dn.R(yn, (function() {
            dn.R(mn, Go);
        }));
        var Yo, Uo, Xo = 0;
        function _o(n) {
            var t, e, i, o, r;
            if (_(yt(), "onScroll"), !vn.F && hn().P && (rn(hn().N), !hn().C && !hn().Vn && (!Mt().autoScrolling || Mt().scrollBar || kt("dragAndMove")) && !jt())) {
                var a = kt("dragAndMove") ? Math.abs(Et("dragAndMove", "getCurrentScroll")) : W(), l = function(n) {
                    var t = n > Xo ? "down" : "up";
                    return Xo = n, pn({
                        K: n
                    }), t;
                }(a), u = 0, c = a + m() / 2, s = (kt("dragAndMove") ? Et("dragAndMove", "getDocumentHeight") : $t.scrollHeight - m()) === a, f = hn().N;
                if (pn({
                    scrollY: a
                }), s) u = f.length - 1; else if (a) for (var d = 0; d < f.length; ++d) (P(f[d].item, Qn) || f[d].item).offsetTop <= c && (u = d); else u = 0;
                if (i = l, o = hn().P.item.offsetTop, r = o + m(), ("up" == i ? r >= W() + m() : o <= W()) && (g(hn().P.item, Xn) || (E(hn().P.item, Xn), 
                R(F(hn().P.item), Xn))), e = (t = f[u]).item, !t.isActive) {
                    pn({
                        V: !0
                    });
                    var v, p, h = hn().P.item, w = hn().P.index() + 1, b = Ut(hn().P, e), S = t.anchor, y = t.index() + 1, M = t.activeSlide, T = {
                        P: h,
                        sectionIndex: y - 1,
                        anchorLink: S,
                        element: e,
                        leavingSection: w,
                        direction: b,
                        items: {
                            origin: hn().P,
                            destination: t
                        }
                    };
                    if (M && (p = M.anchor, v = M.index()), vn.canScroll) R(f.filter((function(n) {
                        return n.index() !== t.index();
                    })).map((function(n) {
                        return n.item;
                    })), Yn), E(e, Yn), Et("parallax", "afterLoad"), X(Mt().beforeLeave) && Ge("beforeLeave", T), 
                    X(Mt().onLeave) && re("onLeave", T), X(Mt().afterLoad) && re("afterLoad", T), Et("resetSliders", "apply", {
                        localIsResizing: vn.F,
                        leavingSection: w
                    }), ue(h), ce(e), ae(e), He(S, y - 1), Mt().anchors.length && pn({
                        Z: S
                    }), de(v, p, S), ci();
                    clearTimeout(Yo), Yo = setTimeout((function() {
                        pn({
                            V: !1
                        });
                    }), 100);
                }
                Mt().fitToSection && vn.canScroll && (clearTimeout(Uo), Uo = setTimeout((function() {
                    vn.N.filter((function(n) {
                        var t = n.item.getBoundingClientRect();
                        return Math.round(t.bottom) === Math.round(m()) || 0 === Math.round(t.top);
                    })).length || Qe();
                }), Mt().en));
            }
        }
        function Qo(n, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                we(n, t, "k");
            })) : (we(n, "all", "k"), Mt().keyboardScrolling = n);
        }
        function Jo(n) {
            var t = n.index();
            void 0 !== Mt().anchors[t] && n.isActive && He(Mt().anchors[t], t), Mt().menu && Mt().css3 && null != P(p(Mt().menu)[0], Fn) && p(Mt().menu).forEach((function(n) {
                $t.appendChild(n);
            }));
        }
        function Ko() {
            var n, t, e = hn().P, i = hn().P.item;
            E(i, Xn), ce(i), ze(), ae(i), t = ro((n = Wo()).section), n.section && t && (void 0 === t || t.index() !== T(ti)) || !X(Mt().afterLoad) || re("afterLoad", {
                P: i,
                element: i,
                direction: null,
                anchorLink: e.anchor,
                sectionIndex: e.index(),
                items: {
                    origin: hn().P,
                    destination: hn().P
                }
            }), X(Mt().afterRender) && re("afterRender"), _(yt(), "afterRender");
        }
        function qo(n, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                we(n, t, "m");
            })) : we(n, "all", "m"), _(yt(), "setAllowScrolling", {
                value: n,
                Qn: t
            });
        }
        function $o() {
            var n = Wo(), t = n.section, e = n.sn;
            t ? Mt().animateAnchor ? lo(t, e) : Ro(t, e) : dn.j(gn, null);
        }
        dn.R(Mn, (function() {
            clearTimeout(Yo), clearTimeout(Uo);
        })), dn.R(yn, (function() {
            G("scroll", _o), r.body.addEventListener("scroll", _o), dn.R(xn, (function(n) {
                lo(n.Un, n.slideAnchor);
            })), dn.R(kn, (function(n) {
                uo(n.anchor, void 0);
            })), dn.R(An, (function(n) {
                ("down" === n.direction ? Pi : Hi)();
            })), dn.R(En, (function(n) {
                Ye(n.destination);
            }));
        })), dn.R(Mn, (function() {
            U("scroll", _o);
        })), s.getActiveSlide = function() {
            return oe(hn().P.activeSlide);
        }, s.getScrollX = function() {
            return vn.scrollX;
        }, dn.R(yn, (function() {
            dn.R(Mn, Oe), dn.R(Rn, (function(n) {
                Te(n.slides, n.destination);
            })), dn.R(bn, (function(n) {
                oo(n.section);
            })), dn.R(wn, (function(n) {
                io(n.section);
            }));
        })), dn.R(yn, (function() {
            var n = Mt().credits.position, t = [ "left", "right" ].indexOf(n) > -1 ? "".concat(n, ": 0;") : "", e = '\n        <div class="fp-watermark" style="'.concat(t, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000; display: none;">\n                    ').concat(Mt().credits.label, "\n            </a>\n        </div>\n    "), i = rn(vn.N), o = !vn.Jn || Mt().credits.enabled;
            i && i.item && o && i.item.insertAdjacentHTML("beforeend", e);
        })), function() {
            dn.R(Sn, (function() {
                var t, l, u;
                pn({
                    Jn: (Mt().licenseKey, t = Mt().licenseKey, l = function(t) {
                        var e = parseInt("514").toString(16);
                        if (!t || t.length < 29 || 4 === t.split(n[0]).length) return null;
                        var i = [ "Each", "for" ][o()]().join(""), l = t[[ "split" ]]("-"), u = [];
                        l[i]((function(n, t) {
                            if (t < 4) {
                                var i = function(n) {
                                    var t = n[n.length - 1], e = [ "NaN", "is" ][o()]().join("");
                                    return window[e](t) ? r(t) : function(n) {
                                        return n - Yn.length;
                                    }(t);
                                }(n);
                                u.push(i);
                                var a = r(n[i]);
                                if (1 === t) {
                                    var l = [ "pa", "dS", "t", "art" ].join("");
                                    a = a.toString()[l](2, "0");
                                }
                                e += a, 0 !== t && 1 !== t || (e += "-");
                            }
                        }));
                        var c = 0, s = "";
                        return t.split("-").forEach((function(n, t) {
                            if (t < 4) {
                                for (var e = 0, i = 0; i < 4; i++) i !== u[t] && (e += Math.abs(r(n[i])), isNaN(n[i]) || c++);
                                var o = a(e);
                                s += o;
                            }
                        })), s += a(c), {
                            Kn: new Date(e + "T00:00"),
                            qn: e.split("-")[2] === 8 * (Yn.length - 2) + "",
                            $n: s
                        };
                    }(t), u = function(n) {
                        var t = i[o()]().join("");
                        return n && 0 === t.indexOf(n) && n.length === t.length;
                    }(t), (l || u) && (l && e <= l.Kn && l.$n === t.split(n[0])[4] || u || l.qn) || !1)
                });
            }));
            var n = [ "-" ], t = "2023-1-16".split("-"), e = new Date(t[0], t[1], t[2]), i = [ "se", "licen", "-", "v3", "l", "gp" ];
            function o() {
                return [ [ "re", "verse" ].join("") ]["".length];
            }
            function r(n) {
                return n ? isNaN(n) ? n.charCodeAt(0) - 72 : n : "";
            }
            function a(n) {
                var t = 72 + n;
                return t > 90 && t < 97 && (t += 15), String.fromCharCode(t).toUpperCase();
            }
        }(), s.setKeyboardScrolling = Qo, s.shared.nt = Ko, s.setAllowScrolling = qo;
        var nr = {};
        function tr() {
            return nr;
        }
        var er, ir, or, rr, ar = !g($t, Dt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
        function lr(n) {
            if (ir = r.createElement("div"), er = Dt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), 
            ar || (er = er.replace("extensions/", "").replace("Extension", "")), ir.innerHTML = er, 
            ir = ir.firstChild, "MutationObserver" in window && new MutationObserver(cr).observe(r.body, {
                childList: !0,
                subtree: !1
            }), (!ar || kt(n) && s[n]) && (!function(n) {
                var t = void 0 !== tr()[n] && tr()[n].length, e = [], i = !1;
                return k(tr()[n]) ? e = tr()[n] : e.push(tr()[n]), e.forEach((function(e) {
                    var o = function() {
                        if (r.domain.length) {
                            for (var n = r.domain.replace(/^(www\.)/, "").split("."); n.length > 2; ) n.shift();
                            return n.join(".").replace(/(^\.*)|(\.*$)/g, "");
                        }
                        return "";
                    }(), a = [ "MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng==" ], l = Dt(a[0]), u = Dt(a[1]), c = Dt(a[2]), s = Dt(a[6]), f = Dt(a[3]), d = Dt(a[4]), v = Dt(a[5]), p = void 0 !== Mt()[d + v];
                    t = t || p;
                    var h = [ l, u, c, s ].indexOf(o) < 0 && 0 !== o.length;
                    if (!t && !p && h) return !1;
                    var g = t ? Dt(e) : "", m = (g = g.split("_")).length > 1 && g[1].indexOf(n, g[1].length - n.length) > -1, w = g.length > 1 && g[1].toLowerCase().indexOf(d) > -1, b = g[0].indexOf(o, g[0].length - o.length) < 0, S = m || w;
                    i = i || !(b && h && f != g[0]) && S || !h;
                })), i;
            }(n) || !ar)) {
                ur();
                var t = Dt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                window[t](ur, 2e3);
            }
        }
        function ur() {
            ir && (rr || (Math.random() < .5 ? zt($t, ir) : j(ir, $t), rr = !0), ir.setAttribute("style", Dt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, Dt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
        }
        function cr(n) {
            n.forEach((function(n) {
                if (n.removedNodes[0] && n.removedNodes[0].isEqualNode(ir)) {
                    clearTimeout(or);
                    var t = Dt("bDIwc2V0VGltZW91dDAzbA==");
                    or = window[t](sr, 900);
                }
            }));
        }
        function sr() {
            rr = !1;
        }
        function fr() {
            si(), ci(), Mt().scrollBar = Mt().scrollBar || Mt().hybrid, xt(), function() {
                b(un(yt(), "body"), {
                    height: "100%",
                    position: "relative"
                }), E(yt(), Wn), E(ne, Gn), pn({
                    q: m()
                }), R(yt(), Bn), gi(), Et("parallax", "init");
                for (var n = hn().an, t = 0; t < n.length; t++) {
                    var e = n[t], i = e.wn;
                    e.item.setAttribute("data-fp-styles", Z(e.item, "style")), ei(e), Jo(e), i.length > 0 && mi(e);
                }
                Mt().fixedElements && Mt().css3 && p(Mt().fixedElements).forEach((function(n) {
                    $t.appendChild(n);
                })), Mt().navigation && Ne(), p('iframe[src*="youtube.com/embed/"]', yt()).forEach((function(n) {
                    var t, e;
                    e = Z(t = n, "src"), t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "enablejsapi=1");
                })), Et("fadingEffect", "apply"), Et("waterEffect", "init"), Et("dropEffect", "init"), 
                Et("cards", "init"), Mt().scrollOverflow && ai.bn();
            }(), qo(!0), Ao(!0), je(Mt().autoScrolling, "internal"), Je(), se(), "complete" === r.readyState && $o(), 
            G("load", $o), Ko(), ar || lr("l"), si(), ci();
        }
        function dr() {
            var n = Mt().licenseKey;
            "" === Mt().licenseKey.trim() ? (f("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), 
            f("error", "https://github.com/alvarotrigo/fullPage.js#options")) : Mt() && vn.Jn || r.domain.indexOf("alvarotrigo.com") > -1 ? n && n.length : (f("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), 
            f("error", "https://alvarotrigo.com/fullPage/pricing")), g(ne, Gn) ? f("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Mt().continuousVertical && (Mt().loopTop || Mt().loopBottom) && (Mt().continuousVertical = !1, 
            f("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), 
            !Mt().scrollOverflow || !Mt().scrollBar && Mt().autoScrolling || f("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), 
            !Mt().continuousVertical || !Mt().scrollBar && Mt().autoScrolling || (Mt().continuousVertical = !1, 
            f("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), 
            Mt().anchors.forEach((function(n) {
                var t = [].slice.call(p("[name]")).filter((function(t) {
                    return Z(t, "name") && Z(t, "name").toLowerCase() == n.toLowerCase();
                })), e = [].slice.call(p("[id]")).filter((function(t) {
                    return Z(t, "id") && Z(t, "id").toLowerCase() == n.toLowerCase();
                }));
                if (e.length || t.length) {
                    f("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                    var i = e.length ? "id" : "name";
                    (e.length || t.length) && f("error", '"' + n + '" is is being used by another element `' + i + "` property");
                }
            })));
        }
        function vr() {
            return {
                options: Mt(),
                internals: {
                    container: yt(),
                    canScroll: vn.canScroll,
                    isScrollAllowed: be(),
                    getDestinationPosition: Ue,
                    isTouch: u,
                    c: lr,
                    getXmovement: xe,
                    removeAnimation: Xt,
                    getTransforms: _t,
                    lazyLoad: ce,
                    addAnimation: Yt,
                    performHorizontalMove: Ae,
                    landscapeScroll: Te,
                    silentLandscapeScroll: Ee,
                    keepSlidesPosition: Le,
                    silentScroll: Jt,
                    styleSlides: mi,
                    styleSection: ei,
                    scrollHandler: _o,
                    getEventsPage: $i,
                    getMSPointer: no,
                    isReallyTouch: Ji,
                    usingExtension: kt,
                    toggleControlArrows: ye,
                    touchStartHandler: Ki,
                    touchMoveHandler: Qi,
                    nullOrSection: ie,
                    items: {
                        SectionPanel: vi,
                        SlidePanel: hi,
                        Item: Pt
                    },
                    getVisible: v,
                    getState: hn,
                    updateState: ci,
                    updateStructuralState: si,
                    getPanels: function() {
                        return vn.un;
                    },
                    getSections: function() {
                        return vn.N;
                    },
                    setActiveSection: function(n) {
                        vn.P = n;
                    }
                }
            };
        }
        function pr(n) {
            var t = [ "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3" ], e = Dt(t[0]), i = Dt(t[1]), o = void 0 !== Mt()[e + i], r = "fp_" + n + "Extension";
            tr()[n] = o ? Mt()[e + i] : Mt()[n + i], s[n] = void 0 !== window[r] ? new window[r] : null, 
            s[n] && s[n].c(n);
        }
        function hr(n, t) {
            var e;
            if ($t = p("body")[0], ne = p("html")[0], te = p("html, body"), !g(ne, Gn)) return "touchWrapper", 
            e = "string" == typeof n ? p(n)[0] : n, gt.touchWrapper = e, function(n) {
                St = h({}, gt, n), bt = Object.assign({}, St);
            }(t), function(n) {
                mt = n;
            }("string" == typeof n ? p(n)[0] : n), dn.j(Sn), dr(), s.getFullpageData = vr, s.version = "4.0.17", 
            s.test = Object.assign(s.test, {
                top: "0px",
                cn: "translate3d(0px, 0px, 0px)",
                dn: function() {
                    for (var n = [], t = 0; t < p(Mt().sectionSelector, yt()).length; t++) n.push("translate3d(0px, 0px, 0px)");
                    return n;
                }(),
                left: function() {
                    for (var n = [], t = 0; t < p(Mt().sectionSelector, yt()).length; t++) n.push(0);
                    return n;
                }(),
                options: Mt(),
                setAutoScrolling: null
            }), s.shared = Object.assign(s.shared, {
                nt: null,
                Xn: !1
            }), o.fullpage_api = s, o.fullpage_extensions = !0, yt() && (dn.j("beforeInit"), 
            pr("continuousHorizontal"), pr("scrollHorizontally"), pr("resetSliders"), pr("interlockedSlides"), 
            pr("responsiveSlides"), pr("fadingEffect"), pr("dragAndMove"), pr("offsetSections"), 
            pr("scrollOverflowReset"), pr("parallax"), pr("cards"), pr("dropEffect"), pr("waterEffect"), 
            Et("dragAndMove", "init"), Et("responsiveSlides", "init"), fr(), dn.j(yn), Et("dragAndMove", "turnOffTouch")), 
            o.fullpage_api;
            dr();
        }
        return s.destroy = function(n) {
            _(yt(), "destroy", n), je(!1, "internal"), qo(!0), Ao(!1), Qo(!1), E(yt(), Bn), 
            dn.j(Mn), Et("dragAndMove", "destroy"), n && (Jt(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", yt()).forEach((function(n) {
                ln(n, "src");
            })), p("img[data-srcset]").forEach((function(n) {
                ln(n, "srcset");
            })), q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(Ht(hn().N), {
                height: "",
                "background-color": "",
                padding: ""
            }), b(Ht(hn().slides), {
                width: ""
            }), b(yt(), {
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), b(te, {
                overflow: "",
                height: ""
            }), R(ne, Gn), R($t, Vn), $t.className.split(/\s+/).forEach((function(n) {
                0 === n.indexOf("fp-viewing") && R($t, n);
            })), Ht(hn().un).forEach((function(n) {
                Mt().scrollOverflow && ai.Nn(n), R(n, "fp-table active " + Xn), Z(n, "data-fp-styles") && n.setAttribute("style", Z(n, "data-fp-styles")), 
                g(n, _n) && !wt && n.removeAttribute("data-anchor");
            })), Xt(yt()), [ Jn, ot, et ].forEach((function(n) {
                p(n, yt()).forEach((function(n) {
                    N(n);
                }));
            })), b(yt(), {
                "-webkit-transition": "none",
                transition: "none"
            }), o.scrollTo(0, 0), [ _n, qn, it ].forEach((function(n) {
                R(p("." + n), n);
            })));
        }, o.fp_easings = h(o.fp_easings, {
            easeInOutCubic: function(n, t, e, i) {
                return (n /= i / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t;
            }
        }), o.jQuery && function(n, t) {
            n && t ? n.fn.fullpage = function(e) {
                e = n.extend({}, e, {
                    $: n
                }), new t(this[0], e), Object.keys(s).forEach((function(n) {
                    Mt().$.fn.fullpage[n] = s[n];
                }));
            } : f("error", "jQuery is required to use the jQuery fullpage adapter!");
        }(o.jQuery, hr), hr;
    }));
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    "use strict";
    window.addEventListener("load", windowLoad);
    new fullpage("#fullpage", {
        licenseKey: "YOUR KEY HERE",
        css3: true,
        autoScrolling: true,
        keyboardScrolling: true,
        navigation: true,
        scrollOverflow: true,
        scrollHorizontally: false,
        loopBottom: true,
        navigationPosition: "left"
    });
    function windowLoad() {
        function digitsCountersInit(digitsCountersItems) {
            let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
            if (digitsCounters) digitsCounters.forEach((digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            }));
        }
        function digitsCountersAnimate(digitsCounter) {
            let startTimestamp = null;
            const duration = parseInt(digitsCounter.dataset.digitsCounter) ? perseInt(digitsCounter.dataset.digitsCounter) : 1500;
            const startValue = parseInt(digitsCounter.innerHTML);
            const startPosition = 0;
            const step = timestamp => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        }
        let options = {
            threshold: .3
        };
        let observer = new IntersectionObserver(((entries, observer) => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;
                    const digitsCountersItems = targetElement.querySelectorAll(`[data-digits-counter]`);
                    if (digitsCountersItems.length) digitsCountersInit(digitsCountersItems);
                }
            }));
        }), options);
        let sections = document.querySelectorAll(".page__section");
        if (sections.length) sections.forEach((section => {
            observer.observe(section);
        }));
    }
    window["FLS"] = true;
    isWebp();
    addLoadedClass();
})();