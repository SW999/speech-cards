parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function f(a){return a&&a.__esModule?{d:a.default}:{d:a}}var b={};function g(e,r,t,a,n,c,i){try{var $=e[c](i),o=$.value}catch(u){return void t(u)}$.done?r(o):Promise.resolve(o).then(a,n)}function h(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var c=e.apply(r,t);function i(e){g(c,a,n,i,$,"next",e)}function $(e){g(c,a,n,i,$,"throw",e)}i(void 0)})}}function d(e,r){return w(e)||v(e,r)||q(e,r)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(e,r){if(e){if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,r):void 0}}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function v(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],a=!0,n=!1,c=void 0;try{for(var i,$=e[Symbol.iterator]();!(a=(i=$.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(o){n=!0,c=o}finally{try{a||null==$.return||$.return()}finally{if(n)throw c}}return t}}function w(e){if(Array.isArray(e))return e}require("n8MK");var x=function(e){var t=e.callback,a=void 0===t?function(){}:t,o=e.isOpen,r=e.onClose,l=e.title,n=void 0===l?"Are you sure?":l,p=function(e){e.stopPropagation(),r()};var $n8MK$$interop$default=f(require("n8MK"));return o?$n8MK$$interop$default.d.createElement("div",{className:"modal-popup-wrapper",onClick:p,tabIndex:-1,"data-testid":"overlay"},$n8MK$$interop$default.d.createElement("div",{className:"modal-popup",role:"dialog",onClick:function(e){return e.stopPropagation()}},$n8MK$$interop$default.d.createElement("div",{className:"modal-popup-header"},n),$n8MK$$interop$default.d.createElement("div",{className:"modal-popup-body"},$n8MK$$interop$default.d.createElement("button",{className:"btn",onClick:function(e){e.stopPropagation(),a(),r()}},"Yes"),$n8MK$$interop$default.d.createElement("button",{className:"btn",onClick:p},"No")))):null};require("n8MK"),require("s2T4");var y=function(e){var t=e.editSpeech,a=e.removeSpeech,n=e.showSpeech,r=e.speechNames;var $n8MK$$interop$default=f(require("n8MK"));return r.length<1?$n8MK$$interop$default.d.createElement("p",null,$n8MK$$interop$default.d.createElement("strong",{"data-testid":"no-speeches"},"There are no saved speeches on local storage.")):$n8MK$$interop$default.d.createElement($n8MK$$interop$default.d.Fragment,null,$n8MK$$interop$default.d.createElement("h3",null,"From browser local storage:"),$n8MK$$interop$default.d.createElement("ul",null,r.map(function(e){return $n8MK$$interop$default.d.createElement("li",{key:e,className:"storage-item"},$n8MK$$interop$default.d.createElement("button",{className:"btn-link","data-name":e,onClick:n,type:"button"},require("s2T4").doSpeechNameReadable(e)),$n8MK$$interop$default.d.createElement("button",{className:"btn btn-green-outlined btn-bold btn-rounded","data-name":e,onClick:t,title:"Edit",type:"button"},$n8MK$$interop$default.d.createElement("i",{className:"icon-pencil icon","aria-hidden":"true"})),$n8MK$$interop$default.d.createElement("button",{className:"btn btn-orange-outlined btn-bold btn-rounded","data-name":e,onClick:a,title:"Remove",type:"button"},$n8MK$$interop$default.d.createElement("i",{className:"icon-trash-can icon","aria-hidden":"true"})))})))};require("n8MK"),require("uc19"),require("s2T4"),require("DRu2"),require("OpAJ");var z=function(){var e=d(require("n8MK").useState(null),2),r=e[0],t=e[1],a=d(require("n8MK").useState(null),2),n=a[0],c=a[1],i=d(require("n8MK").useState(null),2),$=i[0],o=i[1],u=d(require("n8MK").useState([]),2),l=u[0],p=u[1],s=function(){var e=require("s2T4").getSpeechNamesFromStorage().filter(function(e){var r=require("s2T4").readFromStorage(e);return require("s2T4").validateJSON(r)});p(e)},m=function(){var e=h(regeneratorRuntime.mark(function e(r){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.currentTarget,e.next=3,require("s2T4").readFromStorage(t.dataset.name);case 3:a=e.sent,c(Object.assign(Object.assign({},a),{step:0}));case 5:case"end":return e.stop();}},e)}));return function(r){return e.apply(this,arguments)}}(),L=require("n8MK").useCallback(function(e){return t(e)},[]),O=function(){var e=h(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,require("s2T4").removeFromStorage($);case 2:s();case 3:case"end":return e.stop();}},e)}));return function(){return e.apply(this,arguments)}}();var $n8MK$$interop$default=f(require("n8MK"));return require("n8MK").useEffect(function(){s()},[]),r?$n8MK$$interop$default.d.createElement(require("DRu2").default,Object.assign({},r)):n?$n8MK$$interop$default.d.createElement(require("uc19").Redirect,{to:{pathname:"/new",state:{data:n}}}):$n8MK$$interop$default.d.createElement($n8MK$$interop$default.d.Fragment,null,$n8MK$$interop$default.d.createElement("h1",null,"My speeches"),$n8MK$$interop$default.d.createElement("p",null,"Select a speech saved to local storage or load an external JSON file with a speech."),$n8MK$$interop$default.d.createElement(y,{editSpeech:m,removeSpeech:function(e){var r=e.currentTarget;o(r.dataset.name)},showSpeech:function(e){var r=e.currentTarget,a=require("s2T4").readFromStorage(r.dataset.name);a&&t(a)},speechNames:l}),$n8MK$$interop$default.d.createElement(x,{callback:O,isOpen:!!$,onClose:function(){return o(null)}}),$n8MK$$interop$default.d.createElement("br",null),$n8MK$$interop$default.d.createElement("br",null),$n8MK$$interop$default.d.createElement("h3",null,"Load speech:"),$n8MK$$interop$default.d.createElement(require("OpAJ").default,{onLoadSpeech:L}))};b.default=z;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}b.__esModule=true;return{"LicO":b};});