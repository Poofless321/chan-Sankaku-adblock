// ==UserScript==
// @name         Sankaku redirect prevention
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  obsfucated to make WinterXIX have to work overtime.
// @author       Me
// @match        https://chan.sankakucomplex.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sankakucomplex.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function s(e, t) {
        var n = (0, r.Qo)(t);
        var i;
        var r;

        if (n) {
            if (n.targetClass !== t) {
                i = function() {
                    return new t;
                };
            } else {
                i = n.factory || function() {
                    return new t;
                };
            }
        } else {
            i = function() {
                return new t;
            };
        }

        var s = e.initial,
            l = function(t) {
                var a;
                var n = i();
                l && o(l, n);
                var c = e.initCallback ? e.initCallback.bind(n) : a;

                if (s) {
                    var u;
                    if (typeof s === "function" && t.json) {
                        u = s.bind(n)(t.json);
                    } else {
                        u = s;
                    }
                    u ? (0, r.Vx)(n, u, c, {}) : c();
                } else {
                    c();
                }

                return n;
            };

        if (n) {
            if (n.targetClass !== t) {
                n = (0, r.yu)(t, Object.assign({}, n.props), l);
            } else {
                n.factory = l;
            }
        } else {
            n = (0, r.yu)(t, {}, l);
        }

        if (e.restrictProperties) {
            n.props["*"] = true;
        }
    }
    function o(e, t, k) {
        var o_ = arguments[1];
        for (var n in e) {
            if (e.hasOwnProperty(n) && n in t && e[n]) {
                t[n] = e[n];
            }
        }
    }
    const k = window.setTimeout;
    function l(e, t, n, i, a) {
        var l;
        var r;
        if (t !== null && t !== undefined) {
            if (e) {
                var s = (0, r.Qo)(e);
                if (s) {
                    l = (0, r.vB)(s, t);
                } else {
                    l = a ? new e(t) : Object.assign(new e, t);
                }
            } else {
                l = Object(t);
            }
            var c = n.args && n.args.inject;
            c && o(c, l);
            i(null, l);
        } else {
            i(null, t);
        }
    }

    window.setTimeout = function(e, t) {
            var i = arguments[0];
            var a = arguments[1];
        if (a === 6e3) {
            return;
        }
        return k.apply(this, arguments);
    };

    function c(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        return {
            serializer: function(e) {
                return e;
            },
            deserializer: function(n, r, i) {
                return l(e);
            }
        };
    }

})();
