(window.webpackJsonp = window.webpackJsonp || []).push([[30], {
    464: function(t, s, a) {},
    561: function(t, s, a) {
        "use strict";
        a(464)
    },
    592: function(t, s, a) {
        "use strict";
        a.r(s);
        a(37),
        a(131);
        var e = a(389)
          , i = a.n(e)
          , n = {
            components: {},
            props: {
                bigTitle: {
                    type: String,
                    default: "微信扫一扫"
                },
                smallTitle: {
                    type: String,
                    default: "关注我们防止失联"
                }
            },
            data: function() {
                return {
                    isWechat: !1
                }
            },
            mounted: function() {
                /micromessenger/.test(navigator.userAgent.toLowerCase()) && (this.isWechat = !0)
            },
            methods: {
                showWechatDialog: function() {
                    i.a.fire({
                        title: "这里有更多开源项目",
                        width: 500,
                        showCloseButton: !1,
                        showConfirmButton: !1,
                        html: '<img style="width: 100%;margin-top: 15px;" src="https://pic.rmb.bdstatic.com/bjh/e7a831a848b541549a6b205da9aae36b7154.png">'
                    })
                }
            }
        }
          , o = (a(561),
        a(36))
          , c = Object(o.a)(n, (function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return t.isWechat ? t._e() : a("div", {
                staticClass: "wechat-box no-dark-mode",
                attrs: {
                    title: "点击查看二维码"
                },
                on: {
                    click: t.showWechatDialog
                }
            }, [a("Icon", {
                attrs: {
                    name: "wechat",
                    size: "36"
                }
            }), t._v(" "), a("div", {
                staticClass: "title"
            }, [a("span", {
                staticClass: "big"
            }, [t._v(t._s(t.bigTitle))]), t._v(" "), a("span", {
                staticClass: "small"
            }, [t._v(t._s(t.smallTitle))])]), t._v(" "), a("div", {
                staticClass: "input-box"
            }, [a("Icon", {
                attrs: {
                    name: "search",
                    size: "16"
                }
            }), t._v(" "), a("span", {
                staticClass: "name"
            }, [t._v("开源人")])], 1), t._v(" "), a("div", {
                staticClass: "qr-code"
            }, [a("Icon", {
                attrs: {
                    name: "qr",
                    size: "30"
                }
            })], 1)], 1)
        }
        ), [], !1, null, "6f0e2599", null);
        s.default = c.exports
    }
}]);