(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{341:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("在执行以下步骤之前，请先确认您的Android开发环境是ok的。")]),s("ul",[s("li",[s("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA环境, jdk7+"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://developer.android.com/training/basics/firstapp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://developer.android.com/ndk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NDK r16"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cmake 3.9.0+"),s("OutboundLink")],1),t._v(" (可选项：如果需要编译WEEX源码，需要NDK环境支持)")])]),t._m(1),t._m(2),t._m(3),s("p",[t._v("混淆规则如下，建议参考"),s("a",{attrs:{href:"https://github.com/apache/incubator-weex/blob/master/android/sdk/proguard-rules.pro",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("最新的源码配置")]),s("OutboundLink")],1)]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/apache/incubator-weex/blob/master/android/playground/app/src/main/java/com/alibaba/weex/WXApplication.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo初始化源码"),s("OutboundLink")],1)]),s("li",[s("router-link",{attrs:{to:"/guide/extend/extend-android.html"}},[t._v("其它扩展配置看这里")])],1)]),t._m(10),t._m(11),t._m(12),s("p",[t._v("参见源码: "),s("a",{attrs:{href:"https://github.com/apache/incubator-weex/blob/master/android/playground/app/src/main/java/com/alibaba/weex/WXPageActivity.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("WXPageActivity"),s("OutboundLink")],1)]),t._m(13),t._m(14),t._m(15),s("ul",[s("li",[s("a",{attrs:{href:"http://dotwe.org/vue/38e202c16bdfefbdb88a8754f975454c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hello World Demo 源码"),s("OutboundLink")],1)]),s("li",[t._v("提示: 点击二维码, 可以看到最终编译的代码产物。")])]),t._m(16),s("p",[t._v("Weex 提供了"),s("router-link",{attrs:{to:"/guide/extend/extend-android.html"}},[t._v("能力扩展机制")]),t._v("，可以根据自己的业务进行定制自己的功能。 主要分为：")],1),t._m(17)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"集成到android应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成到android应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 集成到Android应用")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_1-设置gradle依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置gradle依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 设置gradle依赖")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("dependencies {\n    ...\n    // weex sdk and fastjson\n    compile 'com.taobao.android:weex_sdk:0.20.0.2@aar'\n    compile 'com.alibaba:fastjson:1.1.46.android'\n\n    //support library dependencies\n    compile 'com.android.support:recyclerview-v7:23.1.1'\n    compile 'com.android.support:support-v4:23.1.1'\n    compile 'com.android.support:appcompat-v7:23.1.1'\n}\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_2-配置混淆规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置混淆规则","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 配置混淆规则")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("-keep class com.taobao.weex.bridge.** { *; }\n-keep class com.taobao.weex.layout.** { *; }\n-keep class com.taobao.weex.WXSDKEngine { *; }\n-keep class com.taobao.weex.base.SystemMessageHandler { *; }\n-dontwarn com.taobao.weex.bridge.**\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_3-声明权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-声明权限","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 声明权限")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在"),a("code",[this._v("AndroidManifest.xml")]),this._v("中声明权限")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("//网络\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.INTERNET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_NETWORK_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n//sd卡读写\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.WRITE_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.READ_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_4-初始化sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-初始化sdk","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 初始化sdk")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("InitConfig config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图片库接口")]),t._v("\n    \t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImgAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FrescoImageAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网络库接口")]),t._v("\n    \t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHttpAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptWXHttpAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nWXSDKEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("applicationContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_5-创建wxsdkinstance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建wxsdkinstance","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 创建WXSDKInstance")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("WXSDKInstance")]),this._v("是weex渲染页面的基本单元，")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("通过"),s("code",[t._v("instance.render(url)")]),t._v("拉取bundle，")]),s("li",[t._v("在回调"),s("code",[t._v("IWXRenderListener")]),t._v("的"),s("code",[t._v("onViewCreated")]),t._v("返回创建的view，")]),s("li",[t._v("将返回的view 添加到Activity的view上（rootView）")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppCompatActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IWXRenderListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  WXSDKInstance mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bundle savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mWXSDKInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WXSDKInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRenderListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * bundleUrl source http://dotwe.org/vue/38e202c16bdfefbdb88a8754f975454c\n    */")]),t._v("\n    String pageName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WXSample"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    String bundleUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://dotwe.org/raw/dist/38e202c16bdfefbdb88a8754f975454c.bundle.wx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderByUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bundleUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("WXRenderStrategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APPEND_ASYNC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onViewCreated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WXSDKInstance instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" View view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRenderSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WXSDKInstance instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRefreshSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WXSDKInstance instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WXSDKInstance instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String errCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onActivityResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onActivityPause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onActivityStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mWXSDKInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onActivityDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_6-运行app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-运行app","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 运行app")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("运行app，您将会看到一个 "),a("code",[this._v("hello world")]),this._v(" 页面。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_7-扩展android能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-扩展android能力","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. 扩展Android能力")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Module 扩展， 非 UI 的特定功能。例如 sendHttp、openURL 等。")]),a("li",[this._v("Component 扩展， 实现特别功能的 Native 控件。例如：RichTextview，RefreshListview 等。")]),a("li",[this._v("Adapter 扩展， Weex 对一些基础功能实现了统一的接口，可实现这些接口来定制自己的业务。例如：图片下载等。")])])}],!1,null,null,null);a.default=e.exports}}]);