/*!
 * vue-material v1.0.0-beta-8
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=522)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var a,s,u,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(a=e,d=e.default),s="function"==typeof d?d.options:d,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o),i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):r&&(u=r),u&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=u,s.render=function(e,t){return u.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,u):[u]),{esModule:a,exports:d,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},o=n(4),i=r(o),a=n(6),s=r(a)},11:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,n){(function(t){(function(){var n,r,o,i,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),s=1e9*t.uptime(),a=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(14))},14:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&h&&(m=!1,h.length?f=h.concat(f):p=-1,f.length&&s())}function s(){var e,t;if(!m){for(e=o(a),m=!0,t=f.length;t;){for(h=f,f=[];++p<t;)h&&h[p].run();p=-1,t=f.length}h=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,d,f,m,h,p,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}})(),f=[],m=!1,p=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new u(e,n)),1!==f.length||m||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},149:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,s,u,l,c;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),s=n(55),u=r(s),l=n(8),c=r(l),t.default=new a.default({name:"MdDrawer",components:{MdOverlay:u.default},props:{mdLeft:Boolean,mdRight:Boolean,mdPermanent:o({type:String},(0,c.default)("md-permanent",["full","clipped","card"])),mdPersistent:o({type:String},(0,c.default)("md-persistent",["mini","full"])),mdActive:Boolean,mdFixed:Boolean},watch:{mdActive:function(e){e?this.$emit("md-opened"):this.$emit("md-closed")}},computed:{drawerClasses:function(){var e={"md-left":this.mdLeft,"md-right":this.mdRight,"md-temporary":this.isTemporary,"md-persistent":this.mdPersistent,"md-permanent":this.mdPermanent,"md-active":this.mdActive,"md-fixed":this.mdFixed};return this.mdPermanent&&(e["md-permanent-"+this.mdPermanent]=!0),this.mdPersistent&&(e["md-persistent-"+this.mdPersistent]=!0),e},isTemporary:function(){return!this.mdPermanent&&!this.mdPersistent},mode:function(){return this.mdPersistent?"persistent":this.mdPermanent?"permanent":"temporary"},submode:function(){return this.mdPersistent?this.mdPersistent:this.mdPermanent?this.mdPermanent:void 0}},methods:{closeDrawer:function(){this.$emit("update:mdActive",!1)}}})},2:function(t,n){t.exports=e},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(2),i=r(o),a=n(9),s=r(a),t.default={name:"MdPortal",abstract:!0,props:{mdAttachToParent:Boolean,mdTarget:{type:null,validator:function(e){return!!(HTMLElement&&e&&e instanceof HTMLElement)||(i.default.util.warn("The md-target-el prop is invalid. You should pass a valid HTMLElement.",this),!1)}}},data:function(){return{leaveTimeout:null,originalParentEl:null}},computed:{transitionName:function(){var e,t,n=this._vnode.componentOptions.children[0];if(n){if(e=n.data.transition)return e.name;if(t=n.componentOptions.propsData.name)return t}return"v"},leaveClass:function(){return this.transitionName+"-leave"},leaveActiveClass:function(){return this.transitionName+"-leave-active"},leaveToClass:function(){return this.transitionName+"-leave-to"}},watch:{mdTarget:function(e,t){this.changeParentEl(e),t&&this.$forceUpdate()}},methods:{getTransitionDuration:function(e){var t=window.getComputedStyle(e).transitionDuration,n=parseFloat(t,10),r=t.match(/m?s/);return r&&(r=r[0]),"s"===r?1e3*n:"ms"===r?n:0},killGhostElement:function(e){e.parentNode&&(this.changeParentEl(this.originalParentEl),this.$options._parentElm=this.originalParentEl,e.parentNode.removeChild(e))},initDestroy:function(e){var t=this,n=this.$el;e&&this.$el.nodeType===Node.COMMENT_NODE&&(n=this.$vnode.elm),n.classList.add(this.leaveClass),n.classList.add(this.leaveActiveClass),this.$nextTick().then((function(){n.classList.add(t.leaveToClass),clearTimeout(t.leaveTimeout),t.leaveTimeout=setTimeout((function(){t.destroyElement(n)}),t.getTransitionDuration(n))}))},destroyElement:function(e){var t=this;(0,s.default)((function(){e.classList.remove(t.leaveClass),e.classList.remove(t.leaveActiveClass),e.classList.remove(t.leaveToClass),t.$emit("md-destroy"),t.killGhostElement(e)}))},changeParentEl:function(e){e&&e.appendChild(this.$el)}},mounted:function(){this.originalParentEl||(this.originalParentEl=this.$el.parentNode,this.$emit("md-initial-parent",this.$el.parentNode)),this.mdAttachToParent&&this.$el.parentNode.parentNode?this.changeParentEl(this.$el.parentNode.parentNode):document&&this.changeParentEl(this.mdTarget||document.body)},beforeDestroy:function(){this.$el.classList?this.initDestroy():this.killGhostElement(this.$el)},render:function(e){var t=this.$slots.default;if(t&&t[0])return t[0]}}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,s,u;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),a=n(4),s=r(a),u=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=u(),e.prototype.$material=e.material)}},359:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),a=n(360),s=r(a),t.default=function(e){(0,i.default)(e),e.component(s.default.name,s.default)}},360:function(e,t,n){"use strict";function r(e){n(361)}var o,i,a,s,u,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(149),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);s=n(362),u=n(0),l=!1,c=r,d=null,f=null,m=u(i.a,s.a,l,c,d,f),t.default=m.exports},361:function(e,t){},362:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-drawer",class:[e.$mdActiveTheme,e.drawerClasses]},[e._t("default"),e._v(" "),e.mdFixed?n("md-overlay",{attrs:{"md-active":e.mdActive},on:{click:e.closeDrawer}}):n("md-overlay",{attrs:{"md-active":e.mdActive,"md-attach-to-parent":""},on:{click:e.closeDrawer}})],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},4:function(e,t,n){"use strict";var r,o,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,a=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},52:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(26),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdOverlay",components:{MdPortal:o.default},props:{mdActive:Boolean,mdAttachToParent:Boolean,mdFixed:Boolean},computed:{overlayClasses:function(){return{"md-fixed":this.mdFixed}}}}},522:function(e,t,n){e.exports=n(359)},55:function(e,t,n){"use strict";function r(e){n(90)}var o,i,a,s,u,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(52),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);s=n(91),u=n(0),l=!1,c=r,d=null,f=null,m=u(i.a,s.a,l,c,d,f),t.default=m.exports},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===m}function a(e){return Array.isArray(e)?[]:{}}function s(e,t){return t&&!1===t.clone||!d(e)?e:c(a(e),e,t)}function u(e,t,n){return e.concat(t).map((function(e){return s(e,n)}))}function l(e,t,n){var r={};return d(e)&&Object.keys(e).forEach((function(t){r[t]=s(e[t],n)})),Object.keys(t).forEach((function(o){d(t[o])&&e[o]?r[o]=c(e[o],t[o],n):r[o]=s(t[o],n)})),r}function c(e,t,n){var r=Array.isArray(t),o=Array.isArray(e),i=n||{arrayMerge:u};return r===o?r?(i.arrayMerge||u)(e,t,n):l(e,t,n):s(t,n)}var d,f,m,h;Object.defineProperty(t,"__esModule",{value:!0}),d=function(e){return r(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})},h=c,t.default=h},7:function(e,t){},8:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(o.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}},9:function(e,t,n){(function(t){var r,o,i,a,s,u=n(13),l="undefined"==typeof window?t:window,c=["moz","webkit"],d="AnimationFrame",f=l["request"+d],m=l["cancel"+d]||l["cancelRequest"+d];for(r=0;!f&&r<c.length;r++)f=l[c[r]+"Request"+d],m=l[c[r]+"Cancel"+d]||l[c[r]+"CancelRequest"+d];f&&m||(o=0,i=0,a=[],s=1e3/60,f=function(e){if(0===a.length){var t=u(),n=Math.max(0,s-(t-o));o=n+t,setTimeout((function(){var e,t=a.slice(0);for(a.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return a.push({handle:++i,callback:e,cancelled:!1}),i},m=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return f.call(l,e)},e.exports.cancel=function(){m.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=f,e.cancelAnimationFrame=m}}).call(t,n(11))},90:function(e,t){},91:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-portal",{attrs:{"md-attach-to-parent":e.mdAttachToParent}},[n("transition",{attrs:{name:"md-overlay"}},[e.mdActive?n("div",e._g({staticClass:"md-overlay",class:e.overlayClasses},e.$listeners)):e._e()])],1)},o=[],i={render:r,staticRenderFns:o};t.a=i}})}));