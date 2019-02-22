(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{323:function(t,e,r){"use strict";r.r(e);var s=r(1),o=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),r("p",[t._v("发起一个请求。")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),r("ul",[r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/80b21a0fce98acdffad96c57b2eadd1d",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP method 示例"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/6dd65122144d9ad26594c0f900c75cd4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Post 示例"),r("OutboundLink")],1),t._v("，常见应用场景，发送 POST 请求。")]),r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/892bd1c977b61762baca8e02a65b6d97",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get 示例"),r("OutboundLink")],1),t._v("，常见应用场景，通过 GET 请求获取数据。")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream","aria-hidden":"true"}},[this._v("#")]),this._v(" stream")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("stream")]),this._v(" 模块提供了基本的网络请求能力，例如 GET 请求、POST 请求等，用于在组件的生命周期内与服务端进行交互。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"fetch-options-callback-progresscallback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch-options-callback-progresscallback","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch(options, callback, progressCallback)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("@options")]),t._v(", 请求的配置选项，支持以下配置\n"),r("ul",[r("li",[r("strong",[r("code",[t._v("method")])]),t._v(", string, HTTP 请求方法，值为 "),r("code",[t._v("GET")]),t._v("/"),r("code",[t._v("POST")]),t._v("/"),r("code",[t._v("PUT")]),t._v("/"),r("code",[t._v("DELETE")]),t._v("/"),r("code",[t._v("PATCH")]),t._v("/"),r("code",[t._v("HEAD")])]),r("li",[r("strong",[r("code",[t._v("url")])]),t._v(", string, 请求的 URL | string")]),r("li",[r("strong",[r("code",[t._v("headers")])]),t._v(", string, HTTP 请求头")]),r("li",[r("strong",[r("code",[t._v("type")])]),t._v(", string, 响应类型："),r("code",[t._v("json")]),t._v("，"),r("code",[t._v("text")]),t._v(" 或是 "),r("code",[t._v("jsonp")]),t._v("(在 native 原生实现中其实与 "),r("code",[t._v("json")]),t._v(" 相同)")]),r("li",[r("strong",[r("code",[t._v("body")])]),t._v(", string, HTTP 请求体")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),r("ul",[r("li",[r("code",[t._v("body")]),t._v(" 参数仅支持 "),r("code",[t._v("string")]),t._v(" 类型的参数，请勿直接传递 "),r("code",[t._v("JSON")]),t._v("，必须先将其转为字符串。")]),r("li",[r("code",[t._v("GET")]),t._v(" 请求不支持 "),r("code",[t._v("body")]),t._v(" 方式传递参数，请使用 URL 传参。")]),r("li",[t._v("默认 "),r("code",[t._v("Content-Type")]),t._v(" 是 "),r("code",[t._v("application/x-www-form-urlencoded")]),t._v("。")]),r("li",[t._v("如果你需要通过 POST 发送 json 数据， 需要将 "),r("code",[t._v("Content-Type")]),t._v(" 设为 "),r("code",[t._v("application/json")]),t._v("。")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[r("strong",[t._v("@callback")]),t._v(", 响应结果回调，回调函数将收到如下的 "),r("code",[t._v("response")]),t._v(" 对象：")]),r("ul",[r("li",[r("strong",[r("code",[t._v("status")])]),t._v(", number, 返回的状态码")]),r("li",[r("strong",[r("code",[t._v("ok")])]),t._v(", boolean, 如果状态码在 200-299 之间就为 true")]),r("li",[r("strong",[r("code",[t._v("statusText")])]),t._v(", string, 状态描述文本")]),r("li",[r("strong",[r("code",[t._v("data")])]),t._v(", string, 返回的数据，如果请求类型是 "),r("code",[t._v("json")]),t._v(" 和 "),r("code",[t._v("jsonp")]),t._v("，则它就是一个 "),r("code",[t._v("object")]),t._v(" ，否则是一个 "),r("code",[t._v("string")]),t._v("。")]),r("li",[r("strong",[r("code",[t._v("headers")])]),t._v(", object, rHTTP 响应头")])])]),r("li",[r("p",[r("strong",[t._v("@progressCallback")]),t._v(", function, a progress callback. This callback will be invoked before request finished.")]),r("ul",[r("li",[r("strong",[r("code",[t._v("readyState")])]),t._v(", number, 当前状态，"),r("code",[t._v("1")]),t._v(": 请求连接中；"),r("code",[t._v("2")]),t._v(": 返回响应头中；"),r("code",[t._v("3")]),t._v(": 正在加载返回数据")]),r("li",[r("strong",[r("code",[t._v("status")])]),t._v(", number, 返回的状态码")]),r("li",[r("strong",[r("code",[t._v("length")])]),t._v(" number, 已经接受到的数据长度. 你可以从响应头中获取总长度")]),r("li",[r("strong",[r("code",[t._v("statusText")])]),t._v(", string, 状态描述文本")]),r("li",[r("strong",[r("code",[t._v("headers")])]),t._v(". object, HTTP 响应头")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("ul",[e("li",[this._v("默认的 Content-Type 为 'application/x-www-form-urlencoded'. "),e("code",[this._v("fetch")]),this._v(" 方法中设置的 type 是响应类型。")]),e("li",[this._v("如果要发送 JSON 数据，需要设置 Content-Type 为 'application/json'。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("示例")])])}],!1,null,null,null);e.default=o.exports}}]);