parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function g(a){return a&&a.__esModule?{d:a.default}:{d:a}}var b={};function d(r,e){return m(r)||k(r,e)||j(r,e)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(r,e){if(r){if("string"==typeof r)return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(r,e):void 0}}function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}function k(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],a=!0,o=!1,u=void 0;try{for(var n,$=r[Symbol.iterator]();!(a=(n=$.next()).done)&&(t.push(n.value),!e||t.length!==e);a=!0);}catch(i){o=!0,u=i}finally{try{a||null==$.return||$.return()}finally{if(o)throw u}}return t}}function m(r){if(Array.isArray(r))return r}require("n8MK");var p=function(r){var e=r.currentValue,t=r.delay,a=void 0===t?25:t,o=r.label,u=r.total,n=d(require("n8MK").useState(1),2),$=n[0],i=n[1],l=d(require("n8MK").useState(o||"".concat($,"%")),2),s=l[0],c=l[1];var $n8MK$$interop$default=g(require("n8MK"));return require("n8MK").useEffect(function(){var r,t=Math.ceil(100*e/u);if($!==t){var n=$<t?1:-1;r=setTimeout(function(){return i(function(r){return r+n})},a)}else c(function(){return 100===$?"Done":o||"".concat($,"%")});return function(){return clearTimeout(r)}},[e,a,$,o,u]),u<2?null:$n8MK$$interop$default.d.createElement("div",{className:"progress progress-".concat($),role:"progressbar","aria-valuemax":u,"aria-valuemin":1,"aria-valuenow":e,"aria-valuetext":s,"aria-label":s},$n8MK$$interop$default.d.createElement("div",{className:"progress__count"},s),$n8MK$$interop$default.d.createElement("div",{className:"progress__curve"},$n8MK$$interop$default.d.createElement("div",{className:"progress__curve-first-half"}),$n8MK$$interop$default.d.createElement("div",{className:"progress__curve-second-half"})))},q=require("n8MK").memo(p);b.default=q;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}b.__esModule=true;return{"oZur":b};});