parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function g(a){return a&&a.__esModule?{d:a.default}:{d:a}}var b={};function d(r,e){return m(r)||k(r,e)||j(r,e)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(r,e){if(r){if("string"==typeof r)return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(r,e):void 0}}function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function k(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,a=!1,$=void 0;try{for(var n,u=r[Symbol.iterator]();!(o=(n=u.next()).done)&&(t.push(n.value),!e||t.length!==e);o=!0);}catch(i){a=!0,$=i}finally{try{o||null==u.return||u.return()}finally{if(a)throw $}}return t}}function m(r){if(Array.isArray(r))return r}require("n8MK");var p=function(r){var e=r.currentValue,t=r.delay,o=void 0===t?25:t,a=r.label,$=r.total,n=d(require("n8MK").useState(1),2),u=n[0],i=n[1],l=d(require("n8MK").useState(a||"".concat(u,"%")),2),c=l[0],s=l[1];var $n8MK$$interop$default=g(require("n8MK"));return require("n8MK").useEffect(function(){var r,t=Math.ceil(100*e/$);if(u!==t){var n=u<t?1:-1;r=setTimeout(function(){return i(function(r){return r+n})},o)}else s(function(){return 100===u?"Done":a||"".concat(u,"%")});return function(){return clearTimeout(r)}},[e,o,u,a,$]),$<2?null:$n8MK$$interop$default.d.createElement("div",{className:"progress progress-".concat(u),role:"progressbar"},$n8MK$$interop$default.d.createElement("div",{className:"progress__count"},c),$n8MK$$interop$default.d.createElement("div",{className:"progress__curve"},$n8MK$$interop$default.d.createElement("div",{className:"progress__curve-first-half"}),$n8MK$$interop$default.d.createElement("div",{className:"progress__curve-second-half"})))},q=require("n8MK").memo(p);b.default=q;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}b.__esModule=true;return{"oZur":b};});