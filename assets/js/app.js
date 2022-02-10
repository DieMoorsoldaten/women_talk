//     $(document).ready((function () {
//         $(".burger").click((function () {
//             $(".header").toggleClass("btn-active"), $("body").toggleClass("menu-fixed")
//         }))
//     })), document.addEventListener("DOMContentLoaded", (function () {
//         var e = document.querySelector(".to-up");
//         window.onscroll = function () {
//             window.pageYOffset > 580 ? e.style.display = "block" : e.style.display = "none"
//         }, e.addEventListener("click", (function () {
//             window.scrollBy({
//                 top: -document.documentElement.scrollHeight,
//                 behavior: "smooth"
//             })
//         }))
//     })), function (e, t, n) {
//     var r = n(3);
//     "string" == typeof r && (r = [
//         [e.i, r, ""]
//     ]);
//     var o = {
//         hmr: !0,
//         transform: void 0,
//         insertInto: void 0
//     };
//     n(4)(r, o);
//     r.locals && (e.exports = r.locals)
// }, function (e, t, n) {}, function (e, t, n) {
//     var r, o, i = {},
//         s = (r = function () {
//             return window && document && document.all && !window.atob
//         }, function () {
//             return void 0 === o && (o = r.apply(this, arguments)), o
//         }),
//         a = function (e, t) {
//             return t ? t.querySelector(e) : document.querySelector(e)
//         },
//         c = function (e) {
//             var t = {};
//             return function (e, n) {
//                 if ("function" == typeof e) return e();
//                 if (void 0 === t[e]) {
//                     var r = a.call(this, e, n);
//                     if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
//                         r = r.contentDocument.head
//                     } catch (e) {
//                         r = null
//                     }
//                     t[e] = r
//                 }
//                 return t[e]
//             }
//         }(),
//         u = null,
//         f = 0,
//         l = [],
//         d = n(5);

//     function p(e, t) {
//         for (var n = 0; n < e.length; n++) {
//             var r = e[n],
//                 o = i[r.id];
//             if (o) {
//                 o.refs++;
//                 for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
//                 for (; s < r.parts.length; s++) o.parts.push(g(r.parts[s], t))
//             } else {
//                 var a = [];
//                 for (s = 0; s < r.parts.length; s++) a.push(g(r.parts[s], t));
//                 i[r.id] = {
//                     id: r.id,
//                     refs: 1,
//                     parts: a
//                 }
//             }
//         }
//     }

//     function v(e, t) {
//         for (var n = [], r = {}, o = 0; o < e.length; o++) {
//             var i = e[o],
//                 s = t.base ? i[0] + t.base : i[0],
//                 a = {
//                     css: i[1],
//                     media: i[2],
//                     sourceMap: i[3]
//                 };
//             r[s] ? r[s].parts.push(a) : n.push(r[s] = {
//                 id: s,
//                 parts: [a]
//             })
//         }
//         return n
//     }

//     function h(e, t) {
//         var n = c(e.insertInto);
//         if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
//         var r = l[l.length - 1];
//         if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
//         else if ("bottom" === e.insertAt) n.appendChild(t);
//         else {
//             if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
//             var o = c(e.insertAt.before, n);
//             n.insertBefore(t, o)
//         }
//     }

//     function b(e) {
//         if (null === e.parentNode) return !1;
//         e.parentNode.removeChild(e);
//         var t = l.indexOf(e);
//         t >= 0 && l.splice(t, 1)
//     }

//     function y(e) {
//         var t = document.createElement("style");
//         if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
//             var r = function () {
//                 0;
//                 return n.nc
//             }();
//             r && (e.attrs.nonce = r)
//         }
//         return m(t, e.attrs), h(e, t), t
//     }

//     function m(e, t) {
//         Object.keys(t).forEach((function (n) {
//             e.setAttribute(n, t[n])
//         }))
//     }

//     function g(e, t) {
//         var n, r, o, i;
//         if (t.transform && e.css) {
//             if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
//             e.css = i
//         }
//         if (t.singleton) {
//             var s = f++;
//             n = u || (u = y(t)), r = O.bind(null, n, s, !1), o = O.bind(null, n, s, !0)
//         } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
//             var t = document.createElement("link");
//             return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t
//         }(t), r = L.bind(null, n, t), o = function () {
//             b(n), n.href && URL.revokeObjectURL(n.href)
//         }) : (n = y(t), r = j.bind(null, n), o = function () {
//             b(n)
//         });
//         return r(e),
//             function (t) {
//                 if (t) {
//                     if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
//                     r(e = t)
//                 } else o()
//             }
//     }
//     e.exports = function (e, t) {
//         if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
//         (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
//         var n = v(e, t);
//         return p(n, t),
//             function (e) {
//                 for (var r = [], o = 0; o < n.length; o++) {
//                     var s = n[o];
//                     (a = i[s.id]).refs--, r.push(a)
//                 }
//                 e && p(v(e, t), t);
//                 for (o = 0; o < r.length; o++) {
//                     var a;
//                     if (0 === (a = r[o]).refs) {
//                         for (var c = 0; c < a.parts.length; c++) a.parts[c]();
//                         delete i[a.id]
//                     }
//                 }
//             }
//     };
//     var w, x = (w = [], function (e, t) {
//         return w[e] = t, w.filter(Boolean).join("\n")
//     });

//     function O(e, t, n, r) {
//         var o = n ? "" : r.css;
//         if (e.styleSheet) e.styleSheet.cssText = x(t, o);
//         else {
//             var i = document.createTextNode(o),
//                 s = e.childNodes;
//             s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
//         }
//     }

//     function j(e, t) {
//         var n = t.css,
//             r = t.media;
//         if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
//         else {
//             for (; e.firstChild;) e.removeChild(e.firstChild);
//             e.appendChild(document.createTextNode(n))
//         }
//     }

//     function L(e, t, n) {
//         var r = n.css,
//             o = n.sourceMap,
//             i = void 0 === t.convertToAbsoluteUrls && o;
//         (t.convertToAbsoluteUrls || i) && (r = d(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
//         var s = new Blob([r], {
//                 type: "text/css"
//             }),
//             a = e.href;
//         e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
//     }
// }, function (e, t) {
//     e.exports = function (e) {
//         var t = "undefined" != typeof window && window.location;
//         if (!t) throw new Error("fixUrls requires window.location");
//         if (!e || "string" != typeof e) return e;
//         var n = t.protocol + "//" + t.host,
//             r = n + t.pathname.replace(/\/[^\/]*$/, "/");
//         return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (e, t) {
//             var o, i = t.trim().replace(/^"(.*)"$/, (function (e, t) {
//                 return t
//             })).replace(/^'(.*)'$/, (function (e, t) {
//                 return t
//             }));
//             return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
//         }))
//     }
// }]);

$(document).ready(function () {
    $(".burger").click(function () {
        $('.header').toggleClass("btn-active");
        $('body').toggleClass("menu-fixed");
    });
});

document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.to-up');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    }

    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});


$(document).ready(function () {
    $('.form-ajax').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
        
                $('.form-submit').html('Успішно').addClass('success').attr('disabled', true);
                setTimeout(function(){
                    $('.form-submit').html('Відправити').removeClass('success').attr('disabled', false);  
                },3000);
            },

            error: function (result) {
                $('.form-submit').html('Спробуйте ще').addClass('error').attr('disabled', true);
                setTimeout(function(){
                    $('.form-submit').html('Відправити').removeClass('error').attr('disabled', false);  
                },3000);
            }
        });
    });
});

$(document).ready(function () {
    $('.form-ajax2').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
                $('.form2-btn').html('Успішно').addClass('success').attr('disabled', true);
                setTimeout(function(){
                    $('.form2-btn').html('Відправити').removeClass('success').attr('disabled', false);  
                },3000);
            },


            error: function (result) {
                $('.form2-btn').html('Спробуйте ще').addClass('error').attr('disabled', true);
                setTimeout(function(){
                    $('.form2-btn').html('Відправити').removeClass('error').attr('disabled', false);  
                },3000);
            }
        });
    });
});