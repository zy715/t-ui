(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{770:function(t,i,e){},801:function(t,i,e){"undefined"!=typeof self&&self,t.exports=function(t){function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=1)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e(4)();var o=e(5),s=e(6);i.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return s({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{reset:function(){this._cancle(),this._initMove()},leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var i=this;if(this.canTouchScroll){var e=void 0,o=t.targetTouches[0],s=this.options,n=s.waitTime,a=s.singleHeight,r=s.singleWidth;this.startPos={x:o.pageX,y:o.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,a&&r?(e&&clearTimeout(e),e=setTimeout((function(){i._cancle()}),n+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var i=t.targetTouches[0],e=this.options.direction;this.endPos={x:i.pageX-this.startPos.x,y:i.pageY-this.startPos.y},event.preventDefault();var o=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===o&&e<2?this.yPos=this.startPosY+this.endPos.y:0===o&&e>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var i=void 0,e=this.options.direction;if(this.delay=50,1===e)this.yPos>0&&(this.yPos=0);else if(0===e){var o=this.realBoxHeight/2*-1;this.yPos<o&&(this.yPos=o)}else if(2===e)this.xPos>0&&(this.xPos=0);else if(3===e){var s=-1*this.realBoxWidth;this.xPos<s&&(this.xPos=s)}i&&clearTimeout(i),i=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,i=this.realBoxHeight/2,e=this.realBoxWidth/2,o=this.options,s=o.direction,n=o.waitTime,a=this.step;1===s?(Math.abs(this.yPos)>=i&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=a):0===s?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*i),this.yPos+=a):2===s?(Math.abs(this.xPos)>=e&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=a):3===s&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*e),this.xPos+=a),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<a?this.singleWaitTime=setTimeout((function(){t._move()}),n):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<a?this.singleWaitTime=setTimeout((function(){t._move()}),n):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var i=t.options.switchDelay,e=t.autoPlay,o=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",o){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var s=t.$refs.slotList.offsetWidth;e&&(s=2*s+1),t.$refs.realBox.style.width=s+"px",t.realBoxWidth=s}if(!e)return t.ease="linear",void(t.delay=i);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,i){this._dataWarm(t),o(t,i)||this.reset()},autoPlay:function(t){t?this.reset():this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(e(2));o.default.install=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(i.componentName||o.default.name,o.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(o.default.name,o.default),i.default=o.default},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e(0),s=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);var a=e(7),r=e(3)(s.a,a.a,!1,null,null,null);i.default=r.exports},function(t,i){t.exports=function(t,i,e,o,s,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var h,c="function"==typeof r?r.options:r;if(i&&(c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),s&&(c._scopeId=s),n?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=h):o&&(h=o),h){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=h,c.render=function(t,i){return h.call(i),f(t,i)}):c.beforeCreate=f?[].concat(f,h):[h]}return{esModule:a,exports:r,options:c}}},function(t,i){t.exports=function(){window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}},function(t,i){t.exports=function(t,i){if(t===i)return!0;if(t.length!==i.length)return!1;for(var e=0;e<t.length;++e)if(t[e]!==i[e])return!1;return!0}},function(t,i){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function t(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var i=void 0,o=void 0,s=void 0,n=void 0,a=void 0,r=void 0,l=1,h=arguments[0]||{},c=!1,u=arguments.length;if("boolean"==typeof h&&(c=h,h=arguments[1]||{},l++),"object"!==(void 0===h?"undefined":e(h))&&"function"!=typeof h&&(h={}),l===u)return h;for(;l<u;l++)if(null!=(o=arguments[l]))for(i in o)s=h[i],n=o[i],a=Array.isArray(n),c&&n&&("object"===(void 0===n?"undefined":e(n))||a)?(a?(a=!1,r=s&&Array.isArray(s)?s:[]):r=s&&"object"===(void 0===s?"undefined":e(s))?s:{},h[i]=t(c,r,n)):void 0!==n&&(h[i]=n);return h}},function(t,i,e){"use strict";var o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrap"},[t.navigation?e("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?e("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),e("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[e("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),e("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},staticRenderFns:[]};i.a=o}]).default},802:function(t,i,e){"use strict";e(770)},907:function(t,i,e){"use strict";e.r(i);var o=e(801),s={name:"ScrollTable",data:function(){return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"待处理",age:18,address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"李四",age:19,status:"已处理",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"王五",age:20,status:"已完成",address:"广东省广州市天河区3"},{id:"3",date:"2019-09-27",name:"赵六",age:20,status:"已完成",address:"广东省广州市天河区3"}],columns:[{prop:"name",label:"姓名"},{prop:"date",label:"日期"},{prop:"age",label:"年龄"},{prop:"status",label:"状态"},{prop:"address",label:"地址"}],operator:[{text:"编辑",fun:this.edit}]}}},components:{VueSeamlessScroll:e.n(o).a},computed:{classOption:function(){return{step:.8,limitMoveNum:this.table.data.length,hoverStop:!0,direction:1,openWatch:!0,singleHeight:0,singleWidth:0,waitTime:1e3}}},methods:{edit:function(t){console.log("获取整行数据",t)}}},n=(e(802),e(2)),a=Object(n.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"scroll_table"},[i("div",{staticStyle:{display:"inline-block",width:"100%"}},[i("t-table",{staticClass:"table",attrs:{table:this.table,columns:this.table.columns,isShowPagination:!1}}),this._v(" "),i("vue-seamless-scroll",{staticClass:"seamless-warp",staticStyle:{width:"100%"},attrs:{data:this.table.data,"class-option":this.classOption}},[i("t-table",{staticClass:"table_scroll",attrs:{table:this.table,columns:this.table.columns,isShowPagination:!1}})],1)],1)])}),[],!1,null,"09556f79",null);i.default=a.exports}}]);