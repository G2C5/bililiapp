(function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="5947")})({"0002":function(t,e,n){var a=n("7d70");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("f06624c2",a,!0,{sourceMap:!1,shadowMode:!1})},"0205":function(t,e,n){"use strict";n.r(e);var a=n("29ad"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0750":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={NavigationBar:n("f049").default,SwiperPage:n("8221").default,VideoList:n("bae2").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("uni-view",{staticClass:this._$g(0,"sc"),attrs:{_i:0}},[e("NavigationBar",{attrs:{_i:1}}),e("IndexNav",{attrs:{_i:2}}),e("SwiperPage",{attrs:{_i:3}}),e("VideoList",{attrs:{_i:4}})],1)},r=[]},"07a0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".nav[data-v-59569c92]{width:750rpx;background-color:#fa7298;z-index:999;height:44px}.nav .navlist[data-v-59569c92]{display:flex;justify-content:space-evenly;align-items:center;height:44px}.nav .navlist .user-img[data-v-59569c92]{display:inline-block;height:88rpx;width:88rpx;border-radius:50%}.nav .navlist .user-input[data-v-59569c92]{display:flex;justify-content:space-between;align-items:center;font-size:0;background-color:#fff;border-radius:32rpx;padding-left:10rpx}.nav .navlist .user-input uni-input[data-v-59569c92]{width:80%;padding:10rpx;background-color:#fff;border-radius:32rpx;font-size:24rpx}.nav .navlist .hot-img[data-v-59569c92]{width:60rpx;height:60rpx;border-radius:50rpx}.icon-input[data-v-59569c92]{padding-left:20rpx;width:32rpx;height:32rpx;fill:currentColor;overflow:hidden}.hh[data-v-59569c92]{width:32rpx;height:32rpx}",""]),t.exports=e},"0864":function(t,e,n){"use strict";n.r(e);var a=n("7583"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0b7d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"NavigationBar",props:["navTitle","leftIcon","rightIcon"],data:function(){return{wxsProps:{}}},components:{}}},"0bc5":function(t,e,n){var a=n("07a0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("674fede7",a,!0,{sourceMap:!1,shadowMode:!1})},1325:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-image[data-v-01c481e6]{width:100%;height:400rpx;background-size:cover}.box[data-v-01c481e6]{padding:10rpx}uni-swiper[data-v-01c481e6]{width:100%;height:400rpx}[data-v-01c481e6] .uni-swiper-dots-horizontal{left:90%}",""]),t.exports=e},"22e9":function(t,e,n){var a=n("a9d2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("628be93c",a,!0,{sourceMap:!1,shadowMode:!1})},"24fb":function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"===typeof btoa){var i=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(a),r=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var o=[].concat(t[c]);a&&i[o[0]]||(n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),e.push(o))}},e}},"29ad":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},"2e80":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("uni-view",{attrs:{_i:0}})},i=[]},"367c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-scroll-view",{staticClass:t._$g(2,"sc"),attrs:{"scroll-into-view":t._$g(2,"a-scroll-into-view"),"scroll-x":"true",_i:2}},t._l(t._$g(3,"f"),(function(e,a,i,r){return n("uni-view",{key:e,staticClass:t._$g("3-"+r,"sc"),class:t._$g("3-"+r,"c"),attrs:{id:t._$g("3-"+r,"a-id"),_i:"3-"+r}},[n("v-uni-text",{staticClass:t._$g("4-"+r,"sc"),attrs:{_i:"4-"+r},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v(t._$g("4-"+r,"t0-0"))])],1)})),1)],1),n("uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[n("uni-view",{staticClass:t._$g(6,"sc"),attrs:{_i:6}})],1)],1)},i=[]},"3c70":function(t,e,n){"use strict";n.r(e);var a=n("367c"),i=n("0205");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a6d0");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"ac2a5ac0",null,!1,a["a"],void 0);e["default"]=c.exports},4221:function(t,e,n){"use strict";var a=n("0002"),i=n.n(a);i.a},"45e1":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.t-icon{display:inline-block;width:16px;height:16px;background-repeat:no-repeat;background-position:50%;background-size:100%}.icon{width:48rpx;height:48rpx;fill:currentColor;overflow:hidden;background-repeat:no-repeat}.t-icon-more-1{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M416.102 223.962c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.003-95.984-95.984zM416.102 511.914c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.004-95.984-95.984zM416.102 800.038c0-52.98 43.004-95.984 95.984-95.984s95.984 43.003 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.176-95.984-95.984z' fill='%23fff'/%3E%3C/svg%3E\")}.t-icon-game-2{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M917.4 507c-27.8-98.4-66-189.8-79.3-214.7-16.8-31.4-39.9-55.5-68.7-71.5-29.8-16.6-66.7-25.1-109.6-25.1H364c-42.9 0-79.8 8.4-109.6 25.1-28.7 16-51.8 40.1-68.7 71.5-13.4 24.9-51.5 116.3-79.3 214.7-37.1 131.4-42.1 224.8-14.7 277.7 15.2 29.3 40.4 47 73.1 51.1 13.5 1.7 26 2.5 37.7 2.5 87.6 0 127.7-44.2 163.5-83.8 21.2-23.4 41.3-45.6 70.9-57.9h166.3c29.4 12.3 46.5 33.8 66.1 58.5 18 22.7 36.7 46.1 65.9 62.6 32.8 18.5 73.3 24.5 123.9 18.1 32.7-4.1 57.9-21.8 73.1-51.1 27.3-52.9 22.3-146.3-14.8-277.7zm-29.7 254.8c-7.7 14.8-18.4 22.4-34.9 24.4-11.4 1.4-21.8 2.1-31.3 2.1-61.9 0-85-29-113.1-64.4-22-27.6-46.9-59-91.7-75.8-2.8-1.1-5.8-1.6-8.8-1.6H432.1c-3 0-6 .5-8.8 1.6-43.2 16.2-70.4 46.3-94.4 72.8-38.7 42.7-69.2 76.4-158 65.3-16.5-2.1-27.2-9.6-34.9-24.4-20.7-40.1-14.2-125.7 18.4-241.1 27.3-96.7 64.4-184.4 75.3-204.7 25.6-47.9 68.3-70.1 134.2-70.1h295.8c65.9 0 108.6 22.3 134.2 70.1 10.9 20.3 48 108 75.3 204.7 32.7 115.4 39.2 201 18.5 241.1z' fill='%232c2c2c'/%3E%3Cpath d='M450 444.9h-70.3v-70.5c0-11-9-20-20-20s-20 9-20 20v70.5H270c-11 0-20 9-20 20s9 20 20 20h69.7v69.5c0 11 9 20 20 20s20-9 20-20v-69.5H450c11 0 20-9 20-20s-9-20-20-20zM598.6 427a41.9 41.9 0 1083.8 0 41.9 41.9 0 10-83.8 0zM697.2 525.6a41.9 41.9 0 1083.8 0 41.9 41.9 0 10-83.8 0z' fill='%232c2c2c'/%3E%3C/svg%3E\")}.t-icon-game-1{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M917.4 507c-27.8-98.4-66-189.8-79.3-214.7-16.8-31.4-39.9-55.5-68.7-71.5-29.8-16.6-66.7-25.1-109.6-25.1H364c-42.9 0-79.8 8.4-109.6 25.1-28.7 16-51.8 40.1-68.7 71.5-13.4 24.9-51.5 116.3-79.3 214.7-37.1 131.4-42.1 224.8-14.7 277.7 15.2 29.3 40.4 47 73.1 51.1 13.5 1.7 26 2.5 37.7 2.5 87.6 0 127.7-44.2 163.5-83.8 21.2-23.4 41.3-45.6 70.9-57.9h166.3c29.4 12.3 46.5 33.8 66.1 58.5 18 22.7 36.7 46.1 65.9 62.6 32.8 18.5 73.3 24.5 123.9 18.1 32.7-4.1 57.9-21.8 73.1-51.1 27.3-52.9 22.3-146.3-14.8-277.7zm-29.7 254.8c-7.7 14.8-18.4 22.4-34.9 24.4-11.4 1.4-21.8 2.1-31.3 2.1-61.9 0-85-29-113.1-64.4-22-27.6-46.9-59-91.7-75.8-2.8-1.1-5.8-1.6-8.8-1.6H432.1c-3 0-6 .5-8.8 1.6-43.2 16.2-70.4 46.3-94.4 72.8-38.7 42.7-69.2 76.4-158 65.3-16.5-2.1-27.2-9.6-34.9-24.4-20.7-40.1-14.2-125.7 18.4-241.1 27.3-96.7 64.4-184.4 75.3-204.7 25.6-47.9 68.3-70.1 134.2-70.1h295.8c65.9 0 108.6 22.3 134.2 70.1 10.9 20.3 48 108 75.3 204.7 32.7 115.4 39.2 201 18.5 241.1z' fill='%23fff'/%3E%3Cpath d='M450 444.9h-70.3v-70.5c0-11-9-20-20-20s-20 9-20 20v70.5H270c-11 0-20 9-20 20s9 20 20 20h69.7v69.5c0 11 9 20 20 20s20-9 20-20v-69.5H450c11 0 20-9 20-20s-9-20-20-20zM598.6 427a41.9 41.9 0 1083.8 0 41.9 41.9 0 10-83.8 0zM697.2 525.6a41.9 41.9 0 1083.8 0 41.9 41.9 0 10-83.8 0z' fill='%23fff'/%3E%3C/svg%3E\")}.t-icon-more-2{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M416.102 223.962c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.003-95.984-95.984zM416.102 511.914c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.004-95.984-95.984zM416.102 800.038c0-52.98 43.004-95.984 95.984-95.984s95.984 43.003 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.176-95.984-95.984z' fill='%238a8a8a'/%3E%3C/svg%3E\")}.t-icon-liebiao-1{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M853.333 725.333H170.667v-42.666h682.666v42.666zm0-426.666H426.667V256h426.666v42.667zm0 213.333H170.667v-42.667h682.666V512z' fill='%23fff'/%3E%3C/svg%3E\")}.t-icon-mailbox-1{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M888.018 234.854L533.97 588.765c-12.5 12.495-32.76 12.49-45.255-.009a32.238 32.238 0 01-.067-.067L136.49 234.29A31.886 31.886 0 00128 256v512c0 17.673 14.327 32 32 32h704c17.673 0 32-14.327 32-32V256a31.878 31.878 0 00-7.982-21.146zM128 160h768c35.346 0 64 28.654 64 64v576c0 35.346-28.654 64-64 64H128c-35.346 0-64-28.654-64-64V224c0-35.346 28.654-64 64-64zm663.255 81.106a8 8 0 00-5.643-13.657l-547.423-.87a8 8 0 00-5.688 13.638l273.226 274.964.017.017a8 8 0 0011.313.002l274.198-274.094z' fill='%23fff'/%3E%3C/svg%3E\")}.t-icon-fenlei-1{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M575.68 736A160.32 160.32 0 10736 575.68H599.893c-13.461 0-24.192 10.752-24.192 24.192V736zM736 533.333A202.667 202.667 0 11533.333 736V599.893a66.432 66.432 0 0166.539-66.56H736zM490.667 736A202.667 202.667 0 11288 533.333h136.128a66.432 66.432 0 0166.539 66.539V736zM288 575.68A160.32 160.32 0 10448.32 736V599.893c0-13.44-10.73-24.192-24.192-24.192H288zm245.333-287.701A202.667 202.667 0 11736 490.667H599.893a66.432 66.432 0 01-66.56-66.539V288zM736 448.32A160.32 160.32 0 10575.68 288v136.128c0 13.44 10.73 24.192 24.192 24.192H736zM448.32 288A160.32 160.32 0 10288 448.32h136.128c13.461 0 24.192-10.752 24.192-24.192V288zM288 490.667A202.667 202.667 0 11490.667 288v136.128a66.432 66.432 0 01-66.539 66.539H288z' fill='%23fff'/%3E%3C/svg%3E\")}.t-icon-fenlei-2{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M575.68 736A160.32 160.32 0 10736 575.68H599.893c-13.461 0-24.192 10.752-24.192 24.192V736zM736 533.333A202.667 202.667 0 11533.333 736V599.893a66.432 66.432 0 0166.539-66.56H736zM490.667 736A202.667 202.667 0 11288 533.333h136.128a66.432 66.432 0 0166.539 66.539V736zM288 575.68A160.32 160.32 0 10448.32 736V599.893c0-13.44-10.73-24.192-24.192-24.192H288zm245.333-287.701A202.667 202.667 0 11736 490.667H599.893a66.432 66.432 0 01-66.56-66.539V288zM736 448.32A160.32 160.32 0 10575.68 288v136.128c0 13.44 10.73 24.192 24.192 24.192H736zM448.32 288A160.32 160.32 0 10288 448.32h136.128c13.461 0 24.192-10.752 24.192-24.192V288zM288 490.667A202.667 202.667 0 11490.667 288v136.128a66.432 66.432 0 01-66.539 66.539H288z' fill='%232c2c2c'/%3E%3C/svg%3E\")}.t-icon-liebiao-2{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M853.333 725.333H170.667v-42.666h682.666v42.666zm0-426.666H426.667V256h426.666v42.667zm0 213.333H170.667v-42.667h682.666V512z' fill='%232c2c2c'/%3E%3C/svg%3E\")}.t-icon-sousuo{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M705.314 660.06l244.633 244.632c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L660.059 705.314C597.003 758.174 515.72 790 427 790 226.52 790 64 627.48 64 427S226.52 64 427 64s363 162.52 363 363c0 88.718-31.827 170.003-84.686 233.06zM427 726c165.133 0 299-133.867 299-299S592.133 128 427 128 128 261.867 128 427s133.867 299 299 299z' fill='%23bfbfbf'/%3E%3C/svg%3E\")}.t-icon-mailbox-2{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M888.018 234.854L533.97 588.765c-12.5 12.495-32.76 12.49-45.255-.009a32.238 32.238 0 01-.067-.067L136.49 234.29A31.886 31.886 0 00128 256v512c0 17.673 14.327 32 32 32h704c17.673 0 32-14.327 32-32V256a31.878 31.878 0 00-7.982-21.146zM128 160h768c35.346 0 64 28.654 64 64v576c0 35.346-28.654 64-64 64H128c-35.346 0-64-28.654-64-64V224c0-35.346 28.654-64 64-64zm663.255 81.106a8 8 0 00-5.643-13.657l-547.423-.87a8 8 0 00-5.688 13.638l273.226 274.964.017.017a8 8 0 0011.313.002l274.198-274.094z' fill='%232c2c2c'/%3E%3C/svg%3E\")}*{padding:0;margin:0}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}",""]),t.exports=e},"46f2":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("uni-view",{staticClass:this._$g(0,"sc"),attrs:{_i:0}},[e("uni-view",{staticClass:this._$g(1,"sc"),attrs:{_i:1}},[e("v-uni-scroll-view",{staticClass:this._$g(2,"sc"),attrs:{"scroll-into-view":this._$g(2,"a-scroll-into-view"),"scroll-x":"true",_i:2}})],1),e("uni-view",{staticClass:this._$g(3,"sc"),attrs:{_i:3}},[e("svg",{staticClass:this._$g(4,"sc"),attrs:{_i:4}},[e("use",{attrs:{_i:5}})],1)],1)],1)},i=[]},"4e73":function(t,e,n){"use strict";n.r(e);var a=n("c884"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},5218:function(t,e,n){"use strict";n.r(e);var a=n("acef"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"531f":function(t,e,n){"use strict";n.r(e);var a=n("0b7d"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"55d3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},5947:function(t,e,n){"use strict";function a(){function t(t){var e=n("4e73");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("f0a5"),"undefined"!==typeof plus?a():document.addEventListener("plusready",a)},"59fd":function(t,e,n){var a=n("e432");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("252504f6",a,!0,{sourceMap:!1,shadowMode:!1})},"5a9a":function(t,e,n){"use strict";n.r(e);var a=n("2e80"),i=n("e3a5");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports},"5e42":function(t,e,n){"use strict";n.r(e);var a=n("e07d"),i=n("0864");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d209");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5144d87b",null,!1,a["a"],void 0);e["default"]=c.exports},"74cb":function(t,e,n){"use strict";n.r(e);var a=n("0750"),i=n("ced4");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4221");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"75e1d46d",null,!1,a["a"],void 0);e["default"]=c.exports},7583:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},"7d70":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".icon[data-v-75e1d46d]{width:2em;height:2em;vertical-align:-.15em;fill:currentColor;overflow:hidden}",""]),t.exports=e},"7f7e":function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],s=r[0],c=r[1],o=r[2],u=r[3],d={id:t+":"+i,css:c,media:o,sourceMap:u};a[s]?a[s].parts.push(d):n.push(a[s]={id:s,parts:[d]})}return n}n.r(e),n.d(e,"default",(function(){return v}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),c=null,o=0,u=!1,d=function(){},f=null,l="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,i){u=n,f=i||{};var s=a(t,e);return p(s),function(e){for(var n=[],i=0;i<s.length;i++){var c=s[i],o=r[c.id];o.refs--,n.push(o)}e?(s=a(t,e),p(s)):s=[];for(i=0;i<n.length;i++){o=n[i];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete r[o.id]}}}}function p(t){for(var e=0;e<t.length;e++){var n=t[e],a=r[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(_(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(_(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function _(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(u)return d;a.parentNode.removeChild(a)}if(l){var i=o++;a=c||(c=g()),e=x.bind(null,a,i,!1),n=x.bind(null,a,i,!0)}else a=g(),e=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,a){var i=n?"":E(a.css);if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function w(t,e){var n=E(e.css),a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var b=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,m=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,y=/var\(--window-bottom\)/gi,$=/var\(--window-left\)/gi,M=/var\(--window-right\)/gi,z=!1;function E(t){if(!uni.canIUse("css.var")){!1===z&&(z=plus.navigator.getStatusbarHeight());var e={statusBarHeight:z,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(m,e.statusBarHeight+"px").replace(C,e.top+"px").replace(y,e.bottom+"px").replace($,"0px").replace(M,"0px")}return t.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return t.replace(b,(function(t,e){return uni.upx2px(e)+"px"}))}))}},8221:function(t,e,n){"use strict";n.r(e);var a=n("f5e2"),i=n("5218");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("9fed");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"01c481e6",null,!1,a["a"],void 0);e["default"]=c.exports},"89d1":function(t,e,n){"use strict";var a=n("59fd"),i=n.n(a);i.a},"8c6c":function(t,e,n){"use strict";n.r(e);var a=n("d37a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"8de0":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("3c70")),r=a(n("f80d")),s={data:function(){return{wxsProps:{}}},components:{IndexNav:i.default,hhhh:r.default}};e.default=s},"950a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".imm[data-v-5144d87b]{background-size:cover}",""]),t.exports=e},"97d1":function(t,e,n){var a=n("950a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("72a5d0f8",a,!0,{sourceMap:!1,shadowMode:!1})},"9fed":function(t,e,n){"use strict";var a=n("ee78"),i=n.n(a);i.a},a6d0:function(t,e,n){"use strict";var a=n("22e9"),i=n.n(a);i.a},a9d2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".nav[data-v-ac2a5ac0]{display:flex;justify-content:center;align-items:center;width:750rpx;height:80rpx;background-color:#fa7298}.nav-content[data-v-ac2a5ac0]{padding-left:50rpx;overflow:hidden}.scroll-content[data-v-ac2a5ac0]{white-space:nowrap;height:80rpx;line-height:80rpx}.nav-item[data-v-ac2a5ac0]{display:inline-block;height:80rpx;margin-right:40rpx;color:#efefef}.nav-icon[data-v-ac2a5ac0]{z-index:999;padding-right:40rpx;padding-left:10rpx;background-repeat:no-repeat;box-shadow:-20rpx 0 10rpx rgba(250,114,152,.6)}.nav-item-title[data-v-ac2a5ac0]{display:inline-block}.nav-item-active[data-v-ac2a5ac0]{font-size:36rpx;font-weight:700;box-sizing:border-box;border-bottom:4px solid #fff}",""]),t.exports=e},acef:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"SwiperPage",data:function(){return{wxsProps:{}}},components:{}}},bae2:function(t,e,n){"use strict";n.r(e);var a=n("f0e8"),i=n("8c6c");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("89d1");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"8ac335f2",null,!1,a["a"],void 0);e["default"]=c.exports},c40d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},c884:function(t,e,n){var a=n("45e1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("3980dff6",a,!0,{sourceMap:!1,shadowMode:!1})},ced4:function(t,e,n){"use strict";n.r(e);var a=n("8de0"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d1a6:function(t,e,n){"use strict";var a=n("0bc5"),i=n.n(a);i.a},d209:function(t,e,n){"use strict";var a=n("97d1"),i=n.n(a);i.a},d37a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},de28:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("uni-view",{staticClass:t._$g(1,"sc"),style:t._$g(1,"s"),attrs:{_i:1}},[n("uni-view",{staticClass:t._$g(2,"sc"),style:t._$g(2,"s"),attrs:{_i:2}},[n("v-uni-image",{staticClass:t._$g(3,"sc"),attrs:{src:t._$g(3,"a-src"),_i:3}}),n("uni-view",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[n("uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}}),n("v-uni-input",{attrs:{type:"text",placeholder:"\u7334\u5b50\u5c45\u7136\u5403\u756a\u85af\uff1f",_i:6}})],1),n("v-uni-image",{staticClass:t._$g(7,"sc"),attrs:{src:t._$g(7,"a-src"),_i:7}}),n("uni-view",{staticClass:t._$g(8,"sc"),attrs:{_i:8}}),n("uni-view",{staticClass:t._$g(9,"sc"),attrs:{_i:9}})],1)],1)],1)},i=[]},e07d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-view",{attrs:{_i:0}},[n("uni-view",{attrs:{_i:1}},[n("v-uni-button",{attrs:{_i:2},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("\u6765\u4e00\u5f20\u56fe")])],1),n("img",{staticClass:t._$g(3,"sc"),attrs:{src:t._$g(3,"a-src"),alt:"",_i:3}})],1)},i=[]},e3a5:function(t,e,n){"use strict";n.r(e);var a=n("c40d"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},e3df:function(t,e,n){"use strict";n.r(e);var a=n("55d3"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},e432:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".video-content[data-v-8ac335f2]{background-color:#efefef;display:flex;flex-wrap:wrap}.video-item[data-v-8ac335f2]{width:360rpx;height:500rpx;margin-left:10rpx;margin-bottom:10rpx;box-sizing:border-box;background-color:#fff;border-radius:20rpx;overflow:hidden}.vedio-cover[data-v-8ac335f2]{width:100%;height:300rpx}.vedio-title[data-v-8ac335f2]{padding:0 10rpx;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.vedio-info[data-v-8ac335f2]{width:100%;height:200rpx;display:flex;flex-direction:column;justify-content:space-between}.vedio-author[data-v-8ac335f2]{font-size:24rpx;color:#868686;display:flex;justify-content:space-between;padding:0 10rpx 30rpx}.vedio-type1[data-v-8ac335f2]{padding:2rpx;border:2rpx solid #868686;border-radius:30%;overflow:hidden;margin-right:10rpx}.vedio-type2[data-v-8ac335f2]{padding:2rpx 6rpx;color:#ff3e04;border:2rpx solid #ffefe2;background-color:#ffefe2;border-radius:10%;margin-right:10rpx}.vedio-type3[data-v-8ac335f2]{padding:2rpx 6rpx;color:#f04;border:2rpx solid #f04;border-radius:10%;margin-right:10rpx}.hh[data-v-8ac335f2]{width:30rpx;height:30rpx}",""]),t.exports=e},ee78:function(t,e,n){var a=n("1325");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("7f7e").default;i("f5beadda",a,!0,{sourceMap:!1,shadowMode:!1})},f049:function(t,e,n){"use strict";n.r(e);var a=n("de28"),i=n("531f");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d1a6");var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"59569c92",null,!1,a["a"],void 0);e["default"]=c.exports},f0a5:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var a=uni.requireGlobal();ArrayBuffer=a.ArrayBuffer,Int8Array=a.Int8Array,Uint8Array=a.Uint8Array,Uint8ClampedArray=a.Uint8ClampedArray,Int16Array=a.Int16Array,Uint16Array=a.Uint16Array,Int32Array=a.Int32Array,Uint32Array=a.Uint32Array,Float32Array=a.Float32Array,Float64Array=a.Float64Array,BigInt64Array=a.BigInt64Array,BigUint64Array=a.BigUint64Array}window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom",scrollIndicator:"none"},darkmode:!1},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("74cb").default)})),__definePage("pages/my/my",(function(){return Vue.extend(n("5e42").default)})),__definePage("pages/space/space",(function(){return Vue.extend(n("5a9a").default)}))},f0c5:function(t,e,n){"use strict";function a(t,e,n,a,i,r,s,c,o,u){var d,f="function"===typeof t?t.options:t;if(o){f.components||(f.components={});var l=Object.prototype.hasOwnProperty;for(var v in o)l.call(o,v)&&!l.call(f.components,v)&&(f.components[v]=o[v])}if(u&&("function"===typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),a&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),s?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=d):i&&(d=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(f.functional){f._injectStyles=d;var p=f.render;f.render=function(t,e){return d.call(e),p(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,d):[d]}return{exports:t,options:f}}n.d(e,"a",(function(){return a}))},f0e8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-image",{staticClass:t._$g(2,"sc"),attrs:{src:t._$g(2,"a-src"),mode:"",_i:2}}),n("uni-view",{staticClass:t._$g(3,"sc"),attrs:{_i:3}},[n("v-uni-text",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[n("uni-view",{attrs:{_i:6}},[n("v-uni-text",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[t._v("UP")]),n("v-uni-text",{attrs:{_i:8}},[t._v("\u4e00\u53ea\u756a\u85af")])],1),n("uni-view",{staticClass:t._$g(9,"sc"),attrs:{_i:9}})],1)],1)],1),n("uni-view",{staticClass:t._$g(10,"sc"),attrs:{_i:10}},[n("v-uni-image",{staticClass:t._$g(11,"sc"),attrs:{src:t._$g(11,"a-src"),mode:"",_i:11}}),n("uni-view",{staticClass:t._$g(12,"sc"),attrs:{_i:12}},[n("v-uni-text",{staticClass:t._$g(13,"sc"),attrs:{_i:13}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(14,"sc"),attrs:{_i:14}},[n("uni-view",{attrs:{_i:15}},[n("v-uni-text",{staticClass:t._$g(16,"sc"),attrs:{_i:16}},[t._v("\u7ad6\u5c4f")]),n("v-uni-text",{attrs:{_i:17}},[t._v("\u4e00\u53ea\u756a\u85af")])],1),n("uni-view",{staticClass:t._$g(18,"sc"),attrs:{_i:18}})],1)],1)],1),n("uni-view",{staticClass:t._$g(19,"sc"),attrs:{_i:19}},[n("v-uni-image",{staticClass:t._$g(20,"sc"),attrs:{src:t._$g(20,"a-src"),mode:"",_i:20}}),n("uni-view",{staticClass:t._$g(21,"sc"),attrs:{_i:21}},[n("v-uni-text",{staticClass:t._$g(22,"sc"),attrs:{_i:22}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(23,"sc"),attrs:{_i:23}},[n("uni-view",{attrs:{_i:24}},[n("v-uni-text",{staticClass:t._$g(25,"sc"),attrs:{_i:25}},[t._v("\u76f4\u64ad")]),n("v-uni-text",{attrs:{_i:26}},[t._v("\u4e00\u53ea\u7334\u5b50")])],1),n("uni-view",{staticClass:t._$g(27,"sc"),attrs:{_i:27}})],1)],1)],1),n("uni-view",{staticClass:t._$g(28,"sc"),attrs:{_i:28}},[n("v-uni-image",{staticClass:t._$g(29,"sc"),attrs:{src:t._$g(29,"a-src"),mode:"",_i:29}}),n("uni-view",{staticClass:t._$g(30,"sc"),attrs:{_i:30}},[n("v-uni-text",{staticClass:t._$g(31,"sc"),attrs:{_i:31}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(32,"sc"),attrs:{_i:32}},[n("uni-view",{attrs:{_i:33}},[n("v-uni-text",{staticClass:t._$g(34,"sc"),attrs:{_i:34}},[t._v("\u5df2\u5173\u6ce8")]),n("v-uni-text",{attrs:{_i:35}},[t._v("\u4e00\u53ea\u5927\u756a\u85af")])],1),n("uni-view",{staticClass:t._$g(36,"sc"),attrs:{_i:36}})],1)],1)],1),n("uni-view",{staticClass:t._$g(37,"sc"),attrs:{_i:37}},[n("v-uni-image",{staticClass:t._$g(38,"sc"),attrs:{src:t._$g(38,"a-src"),mode:"",_i:38}}),n("uni-view",{staticClass:t._$g(39,"sc"),attrs:{_i:39}},[n("v-uni-text",{staticClass:t._$g(40,"sc"),attrs:{_i:40}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(41,"sc"),attrs:{_i:41}},[n("uni-view",{attrs:{_i:42}},[n("v-uni-text",{staticClass:t._$g(43,"sc"),attrs:{_i:43}},[t._v("\u5df2\u5173\u6ce8")]),n("v-uni-text",{attrs:{_i:44}},[t._v("\u4e00\u53ea\u5927\u756a\u85af")])],1),n("uni-view",{staticClass:t._$g(45,"sc"),attrs:{_i:45}})],1)],1)],1),n("uni-view",{staticClass:t._$g(46,"sc"),attrs:{_i:46}},[n("v-uni-image",{staticClass:t._$g(47,"sc"),attrs:{src:t._$g(47,"a-src"),mode:"",_i:47}}),n("uni-view",{staticClass:t._$g(48,"sc"),attrs:{_i:48}},[n("v-uni-text",{staticClass:t._$g(49,"sc"),attrs:{_i:49}},[t._v("\u6807\u9898\u662f\u4ec0\u4e48\u554a\uff1f\u7684rfhai\u4ed8\u597d\u6b3e\u653e\u5927\u53d1\u75af\u963f\u5fb7\u6cd5\u6848\u53d1\u8fbe\u7f5a\u554a\u6253\u53d1das")]),n("uni-view",{staticClass:t._$g(50,"sc"),attrs:{_i:50}},[n("uni-view",{attrs:{_i:51}},[n("v-uni-text",{staticClass:t._$g(52,"sc"),attrs:{_i:52}},[t._v("9\u5343\u70b9\u8d5e")]),n("v-uni-text",{attrs:{_i:53}},[t._v("\u4e00\u53ea\u5927\u756a\u85af")])],1),n("uni-view",{staticClass:t._$g(54,"sc"),attrs:{_i:54}})],1)],1)],1)],1)},i=[]},f5e2:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3,"indicator-active-color":"rgba(255,255,255,1)","indicator-color":"rgba(233,235,236,.5)",_i:1}},t._l(t._$g(2,"f"),(function(e,a,i,r){return n("v-uni-swiper-item",{key:e,attrs:{_i:"2-"+r}},[n("uni-view",{staticClass:t._$g("3-"+r,"sc"),attrs:{_i:"3-"+r}},[n("v-uni-image",{attrs:{src:t._$g("4-"+r,"a-src"),alt:"\u5931\u8d25",_i:"4-"+r}})],1)],1)})),1)],1)},i=[]},f80d:function(t,e,n){"use strict";n.r(e);var a=n("46f2"),i=n("e3df");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports}});