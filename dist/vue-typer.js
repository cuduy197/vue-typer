/*!
 * vue-typer v1.0.2
 * Copyright 2016-2017 Chris Nguyen
 * Released under the MIT license.
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueTyper = e() : t.VueTyper = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 55)
    }([function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e, n) {
        t.exports = !n(4)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(0),
            o = n(26),
            s = n(30),
            a = "prototype",
            u = function(t, e, n) {
                var c, f, l, p = t & u.F,
                    d = t & u.G,
                    h = t & u.S,
                    v = t & u.P,
                    y = t & u.B,
                    m = t & u.W,
                    x = d ? i : i[e] || (i[e] = {}),
                    g = x[a],
                    T = d ? r : h ? r[e] : (r[e] || {})[a];
                d && (n = e);
                for (c in n) f = !p && T && void 0 !== T[c], f && c in x || (l = f ? T[c] : n[c], x[c] = d && "function" != typeof T[c] ? n[c] : y && f ? o(l, r) : m && T[c] == l ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[a] = t[a], e
                }(l) : v && "function" == typeof l ? o(Function.call, l) : l, v && ((x.virtual || (x.virtual = {}))[c] = l, t & u.R && g && !g[c] && s(g, c, l)))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e, n) {
        var r = n(32),
            i = n(6);
        t.exports = function(t) {
            return r(i(t))
        }
    }, function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var s = e[i];
                    "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function(t, e) {
        function n(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = f[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(a(r.parts[o], e))
                } else {
                    for (var s = [], o = 0; o < r.parts.length; o++) s.push(a(r.parts[o], e));
                    f[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function r(t) {
            for (var e = [], n = {}, r = 0; r < t.length; r++) {
                var i = t[r],
                    o = i[0],
                    s = i[1],
                    a = i[2],
                    u = i[3],
                    c = {
                        css: s,
                        media: a,
                        sourceMap: u
                    };
                n[o] ? n[o].parts.push(c) : e.push(n[o] = {
                    id: o,
                    parts: [c]
                })
            }
            return e
        }

        function i(t, e) {
            var n = d(),
                r = y[y.length - 1];
            if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), y.push(e);
            else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(e)
            }
        }

        function o(t) {
            t.parentNode.removeChild(t);
            var e = y.indexOf(t);
            e >= 0 && y.splice(e, 1)
        }

        function s(t) {
            var e = document.createElement("style");
            return e.type = "text/css", i(t, e), e
        }

        function a(t, e) {
            var n, r, i;
            if (e.singleton) {
                var a = v++;
                n = h || (h = s(e)), r = u.bind(null, n, a, !1), i = u.bind(null, n, a, !0)
            } else n = s(e), r = c.bind(null, n), i = function() {
                o(n)
            };
            return r(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e)
                    } else i()
                }
        }

        function u(t, e, n, r) {
            var i = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, i);
            else {
                var o = document.createTextNode(i),
                    s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
            }
        }

        function c(t, e) {
            var n = e.css,
                r = e.media,
                i = e.sourceMap;
            if (r && t.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
        var f = {},
            l = function(t) {
                var e;
                return function() {
                    return "undefined" == typeof e && (e = t.apply(this, arguments)), e
                }
            },
            p = l(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            d = l(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            h = null,
            v = 0,
            y = [];
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = p()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var i = r(t);
            return n(i, e),
                function(t) {
                    for (var o = [], s = 0; s < i.length; s++) {
                        var a = i[s],
                            u = f[a.id];
                        u.refs--, o.push(u)
                    }
                    if (t) {
                        var c = r(t);
                        n(c, e)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (0 === u.refs) {
                            for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                            delete f[u.id]
                        }
                    }
                }
        };
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function(t, e, n) {
        var r, i;
        n(54), r = n(15);
        var o = n(52);
        i = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (i = r = r.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, i._scopeId = "data-v-4386318c", t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t) {
            return "number" == typeof t && !(0, c.default)(t) && (0, a.default)(t)
        }

        function o(t, e) {
            return i(t) && i(e) && t <= e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(16),
            a = r(s),
            u = n(17),
            c = r(u);
        e.default = function(t, e) {
            return o(t, e) ? (t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t) : -1
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t, e, n) {
            if (e !== n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(12),
            s = r(o);
        e.default = function(t) {
            if (t instanceof Array)
                for (var e = t.length - 1; e > 0; e--) {
                    var n = (0, s.default)(0, e);
                    i(t, e, n)
                }
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = "vue-typer-caret-";
        e.default = {
            props: {
                animation: {
                    type: String,
                    default: "blink",
                    validator: function(t) {
                        return /^solid$|^blink$|^smooth$|^phase$|^expand$/.test(t)
                    }
                }
            },
            computed: {
                animationClass: function() {
                    return n + this.animation
                }
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(18),
            o = r(i),
            s = n(50),
            a = r(s),
            u = n(13),
            c = r(u),
            f = {
                IDLE: "idle",
                TYPING: "typing",
                ERASING: "erasing",
                COMPLETE: "complete"
            },
            l = {
                BACKSPACE: "backspace",
                SELECT_BACK: "select-back",
                SELECT_ALL: "select-all",
                CLEAR: "clear"
            };
        e.default = {
            name: "VueTyper",
            components: {
                Caret: a.default
            },
            props: {
                text: {
                    type: [String, Array],
                    required: !0,
                    validator: function(t) {
                        return "string" == typeof t ? t.length > 0 : t.every(function(t) {
                            return "string" == typeof t && t.length > 0
                        })
                    }
                },
                repeat: {
                    type: Number,
                    default: 1 / 0,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                shuffle: {
                    type: Boolean,
                    default: !1
                },
                initialAction: {
                    type: String,
                    default: f.TYPING,
                    validator: function(t) {
                        return !!t.match("^" + f.TYPING + "|" + f.ERASING + "$")
                    }
                },
                preTypeDelay: {
                    type: Number,
                    default: 70,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                typeDelay: {
                    type: Number,
                    default: 70,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                preEraseDelay: {
                    type: Number,
                    default: 2e3,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                eraseDelay: {
                    type: Number,
                    default: 250,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                eraseStyle: {
                    type: String,
                    default: l.SELECT_ALL,
                    validator: function(t) {
                        return (0, o.default)(l).some(function(e) {
                            return l[e] === t
                        })
                    }
                },
                eraseOnComplete: {
                    type: Boolean,
                    default: !1
                },
                caretAnimation: String
            },
            data: function() {
                return {
                    state: f.IDLE,
                    repeatCounter: 0,
                    actionTimeout: 0,
                    actionInterval: 0,
                    spool: [],
                    spoolIndex: -1,
                    previousTextIndex: -1,
                    currentTextIndex: -1
                }
            },
            computed: {
                caretClasses: function() {
                    return {
                        idle: this.state === f.IDLE,
                        typing: this.state === f.TYPING,
                        selecting: this.state === f.ERASING && this.isSelectionBasedEraseStyle,
                        erasing: this.state === f.ERASING && !this.isSelectionBasedEraseStyle,
                        complete: this.state === f.COMPLETE
                    }
                },
                rightCharClasses: function() {
                    return {
                        selected: this.state === f.ERASING && this.isSelectionBasedEraseStyle,
                        erased: this.state !== f.ERASING || this.state === f.ERASING && !this.isSelectionBasedEraseStyle
                    }
                },
                isSelectionBasedEraseStyle: function() {
                    return !!this.eraseStyle.match("^" + l.SELECT_BACK + "|" + l.SELECT_ALL + "$")
                },
                isEraseAllStyle: function() {
                    return !!this.eraseStyle.match("^" + l.CLEAR + "|" + l.SELECT_ALL + "$")
                },
                isDoneTyping: function() {
                    return this.currentTextIndex >= this.currentText.length
                },
                isDoneErasing: function() {
                    return this.isSelectionBasedEraseStyle ? this.currentTextIndex <= 0 && this.previousTextIndex <= 0 : this.currentTextIndex <= 0
                },
                onLastWord: function() {
                    return this.spoolIndex === this.spool.length - 1
                },
                shouldRepeat: function() {
                    return this.repeatCounter < this.repeat
                },
                currentText: function() {
                    return this.spoolIndex >= 0 && this.spoolIndex < this.spool.length ? this.spool[this.spoolIndex] : ""
                },
                currentTextArray: function() {
                    return this.currentText.split("")
                },
                numLeftChars: function() {
                    return this.currentTextIndex < 0 ? 0 : this.currentTextIndex
                },
                numRightChars: function() {
                    return this.currentText.length - this.numLeftChars
                }
            },
            mounted: function() {
                this.init()
            },
            beforeDestroy: function() {
                this.cancelCurrentAction()
            },
            methods: {
                init: function() {
                    if ("string" == typeof this.text) this.spool = [this.text];
                    else {
                        var t = this.text.slice();
                        t = t.filter(function(t) {
                            return t.length
                        }), this.spool = t
                    }
                    this.repeatCounter = 0, this.resetSpool(), this.initialAction === f.TYPING ? this.startTyping() : this.initialAction === f.ERASING && (this.moveCaretToEnd(), this.onTyped())
                },
                reset: function() {
                    this.cancelCurrentAction(), this.init()
                },
                resetSpool: function() {
                    this.spoolIndex = 0, this.shuffle && this.spool.length > 1 && (0, c.default)(this.spool)
                },
                cancelCurrentAction: function() {
                    this.actionInterval && (clearInterval(this.actionInterval), this.actionInterval = 0), this.actionTimeout && (clearTimeout(this.actionTimeout), this.actionTimeout = 0)
                },
                shiftCaret: function(t) {
                    this.previousTextIndex = this.currentTextIndex;
                    var e = this.currentTextIndex + t;
                    this.currentTextIndex = Math.min(Math.max(e, 0), this.currentText.length)
                },
                moveCaretToStart: function() {
                    this.previousTextIndex = this.currentTextIndex, this.currentTextIndex = 0
                },
                moveCaretToEnd: function() {
                    this.previousTextIndex = this.currentTextIndex, this.currentTextIndex = this.currentText.length
                },
                typeStep: function() {
                    this.isDoneTyping || this.shiftCaret(1), this.isDoneTyping && (this.cancelCurrentAction(), this.$nextTick(this.onTyped))
                },
                eraseStep: function() {
                    this.isDoneErasing || (this.isEraseAllStyle ? this.moveCaretToStart() : this.shiftCaret(-1)), this.isDoneErasing && (this.cancelCurrentAction(), this.$nextTick(this.onErased))
                },
                startTyping: function() {
                    var t = this;
                    this.actionTimeout || this.actionInterval || (this.moveCaretToStart(), this.state = f.IDLE, this.actionTimeout = setTimeout(function() {
                        t.state = f.TYPING, t.typeStep(), t.isDoneTyping || (t.actionInterval = setInterval(t.typeStep, t.typeDelay))
                    }, this.preTypeDelay))
                },
                startErasing: function() {
                    var t = this;
                    this.actionTimeout || this.actionInterval || (this.moveCaretToEnd(), this.state = f.IDLE, this.actionTimeout = setTimeout(function() {
                        t.state = f.ERASING, t.eraseStep(), t.isDoneErasing || (t.actionInterval = setInterval(t.eraseStep, t.eraseDelay))
                    }, this.preEraseDelay))
                },
                onTyped: function() {
                    this.$emit("typed", this.currentText), this.onLastWord ? this.eraseOnComplete || this.shouldRepeat ? this.startErasing() : this.onComplete() : this.startErasing()
                },
                onErased: function() {
                    this.$emit("erased", this.currentText), this.onLastWord ? this.shouldRepeat ? (this.repeatCounter++, this.resetSpool(), this.startTyping()) : this.onComplete() : (this.spoolIndex++, this.startTyping())
                },
                onComplete: function() {
                    this.state = f.COMPLETE, this.$emit("completed")
                }
            },
            watch: {
                text: function() {
                    this.reset()
                },
                repeat: function() {
                    this.reset()
                },
                shuffle: function() {
                    this.reset()
                }
            }
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(19),
            __esModule: !0
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(20),
            __esModule: !0
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(21),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(45), t.exports = n(0).Number.isFinite
    }, function(t, e, n) {
        n(46), t.exports = n(0).Number.isNaN
    }, function(t, e, n) {
        n(47), t.exports = n(0).Object.keys
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(8),
            i = n(41),
            o = n(40);
        t.exports = function(t) {
            return function(e, n, s) {
                var a, u = r(e),
                    c = i(u.length),
                    f = o(s, c);
                if (t && n != n) {
                    for (; c > f;)
                        if (a = u[f++], a != a) return !0
                } else
                    for (; c > f; f++)
                        if ((t || f in u) && u[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(22);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(5),
            i = n(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        var r = n(33),
            i = n(37);
        t.exports = n(2) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        t.exports = !n(2) && !n(4)(function() {
            return 7 != Object.defineProperty(n(27)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(25);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(23),
            i = n(31),
            o = n(43),
            s = Object.defineProperty;
        e.f = n(2) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(29),
            i = n(8),
            o = n(24)(!1),
            s = n(38)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = i(t),
                u = 0,
                c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; e.length > u;) r(a, n = e[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function(t, e, n) {
        var r = n(34),
            i = n(28);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(0),
            o = n(4);
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t],
                s = {};
            s[t] = e(n), r(r.S + r.F * o(function() {
                n(1)
            }), "Object", s)
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        var r = n(39)("keys"),
            i = n(44);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }, function(t, e, n) {
        var r = n(1),
            i = "__core-js_shared__",
            o = r[i] || (r[i] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    }, function(t, e, n) {
        var r = n(7),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        var r = n(7),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(1).isFinite;
        r(r.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && i(t)
            }
        })
    }, function(t, e, n) {
        var r = n(3);
        r(r.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }, function(t, e, n) {
        var r = n(42),
            i = n(35);
        n(36)("keys", function() {
            return function(t) {
                return i(r(t))
            }
        })
    }, function(t, e, n) {
        e = t.exports = n(9)(), e.push([t.i, '@keyframes vue-typer-caret-blink{50%{opacity:0}to{opacity:1}}@keyframes vue-typer-caret-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes vue-typer-caret-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes vue-typer-caret-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.vue-typer-caret-blink[data-v-24f97679]{animation:vue-typer-caret-blink 1s step-start 0s infinite}.vue-typer-caret-smooth[data-v-24f97679]{animation:vue-typer-caret-smooth .5s ease-in-out 0s infinite alternate}.vue-typer-caret-phase[data-v-24f97679]{animation:vue-typer-caret-phase .5s ease-in-out 0s infinite alternate}.vue-typer-caret-expand[data-v-24f97679]{animation:vue-typer-caret-expand .5s ease-in-out 0s infinite alternate}span.caret[data-v-24f97679]:empty:before{content:"\\200B"}span[data-v-24f97679]{display:inline-block;width:1px}.idle[data-v-24f97679],.typing[data-v-24f97679]{background-color:#000}.selecting[data-v-24f97679]{display:none;background-color:#000}.erasing[data-v-24f97679]{background-color:#000}.complete[data-v-24f97679]{display:none;background-color:#000}', ""])
    }, function(t, e, n) {
        e = t.exports = n(9)(), e.push([t.i, "span.vue-typer[data-v-4386318c]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;word-break:break-all}span.vue-typer span.char[data-v-4386318c]{white-space:pre-wrap}span.vue-typer span.left[data-v-4386318c],span.vue-typer span.right[data-v-4386318c]{display:inline}span[data-v-4386318c]{display:inline-block}.typed[data-v-4386318c]{color:#000;background-color:transparent}.selected[data-v-4386318c]{color:#000;background-color:#accef7}.erased[data-v-4386318c]{display:none}", ""])
    }, function(t, e, n) {
        var r, i;
        n(53), r = n(14);
        var o = n(51);
        i = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (i = r = r.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, i._scopeId = "data-v-24f97679", t.exports = r
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", {
                    staticClass: "caret custom",
                    class: t.animationClass
                })
            },
            staticRenderFns: []
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", {
                    staticClass: "vue-typer"
                }, [n("span", {
                    staticClass: "left"
                }, t._l(t.numLeftChars, function(e) {
                    return n("span", {
                        staticClass: "char custom typed"
                    }, [t._v(t._s(t.currentTextArray[e - 1]))])
                })), n("caret", {
                    class: t.caretClasses,
                    attrs: {
                        animation: t.caretAnimation
                    }
                }), n("span", {
                    staticClass: "right"
                }, t._l(t.numRightChars, function(e) {
                    return n("span", {
                        staticClass: "char custom",
                        class: t.rightCharClasses
                    }, [t._v(t._s(t.currentTextArray[t.numLeftChars + e - 1]))])
                }))], 1)
            },
            staticRenderFns: []
        }
    }, function(t, e, n) {
        var r = n(48);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        n(10)(r, {});
        r.locals && (t.exports = r.locals)
    }, function(t, e, n) {
        var r = n(49);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        n(10)(r, {});
        r.locals && (t.exports = r.locals)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.VueTyper = void 0;
        var i = n(11),
            o = r(i);
        e.VueTyper = o.default;
        e.default = {
            install: function(t) {
                t.component("vue-typer", o.default)
            }
        }
    }])
});
