parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pb3o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}var a=function(t){var a=t.callback,o=void 0===a?function(){}:a,l=t.isOpen,n=t.onClose,r=t.title,u=void 0===r?"Are you sure?":r,d=function(e){e.stopPropagation(),n()};return l?e.default.createElement("div",{className:"modal-popup-wrapper",onClick:d,tabIndex:-1,"data-testid":"overlay"},e.default.createElement("div",{className:"modal-popup",role:"dialog",onClick:function(e){return e.stopPropagation()}},e.default.createElement("div",{className:"modal-popup-header"},u),e.default.createElement("div",{className:"modal-popup-body"},e.default.createElement("button",{className:"btn",onClick:function(e){e.stopPropagation(),o(),n()}},"Yes"),e.default.createElement("button",{className:"btn",onClick:d},"No")))):null},o=a;exports.default=o;
},{"react":"HdMw"}],"LXtJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("../../utils");function a(e){return e&&e.__esModule?e:{default:e}}var n=function(a){var n=a.editSpeech,l=a.removeSpeech,r=a.showSpeech,o=a.speechNames;return o.length<1?e.default.createElement("p",null,e.default.createElement("strong",{"data-testid":"no-speeches"},"There are no saved speeches on local storage.")):e.default.createElement(e.default.Fragment,null,e.default.createElement("h3",null,"From browser local storage:"),e.default.createElement("ul",null,o.map(function(a){return e.default.createElement("li",{key:a,className:"storage-item"},e.default.createElement("button",{className:"btn-link","data-name":a,onClick:r,type:"button"},(0,t.doSpeechNameReadable)(a)),e.default.createElement("button",{className:"btn btn-green-outlined btn-bold btn-rounded","data-name":a,onClick:n,title:"Edit",type:"button"},e.default.createElement("i",{className:"icon-pencil icon","aria-hidden":"true"})),e.default.createElement("button",{className:"btn btn-orange-outlined btn-bold btn-rounded","data-name":a,onClick:l,title:"Remove",type:"button"},e.default.createElement("i",{className:"icon-trash-can icon","aria-hidden":"true"})))})))},l=n;exports.default=l;
},{"react":"HdMw","../../utils":"LPsV"}],"hXYg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=require("react-router-dom"),r=require("../../../utils/"),n=c(require("../card/Card")),a=c(require("../../modal-popup/ModalPopup")),u=c(require("../../load-speech-btn/LoadSpeechBtn")),o=c(require("../../speeches-list/SpeechesList"));function c(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function f(e,t,r,n,a,u,o){try{var c=e[u](o),l=c.value}catch(i){return void r(i)}c.done?t(l):Promise.resolve(l).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){f(u,n,a,o,c,"next",e)}function c(e){f(u,n,a,o,c,"throw",e)}o(void 0)})}}function d(e,t){return y(e)||h(e,t)||m(e,t)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,u=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw u}}return r}}function y(e){if(Array.isArray(e))return e}var g=function(){var c=d((0,e.useState)(null),2),l=c[0],i=c[1],f=d((0,e.useState)(null),2),p=f[0],m=f[1],v=d((0,e.useState)(null),2),h=v[0],y=v[1],g=d((0,e.useState)([]),2),b=g[0],S=g[1],O=function(){var e=(0,r.getSpeechNamesFromStorage)().filter(function(e){var t=(0,r.readFromStorage)(e);return(0,r.validateJSON)(t)});S(e)},w=function(){var e=s(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget,e.next=3,(0,r.readFromStorage)(n.dataset.name);case 3:a=e.sent,m(Object.assign(Object.assign({},a),{step:0}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=(0,e.useCallback)(function(e){return i(e)},[]),E=function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.removeFromStorage)(h);case 2:O();case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return(0,e.useEffect)(function(){O()},[]),l?e.default.createElement(n.default,Object.assign({},l)):p?e.default.createElement(t.Redirect,{to:{pathname:"/new",state:{data:p}}}):e.default.createElement(e.default.Fragment,null,e.default.createElement("h1",null,"My speeches"),e.default.createElement("p",null,"Select a speech saved to local storage or load an external JSON file with a speech."),e.default.createElement(o.default,{editSpeech:w,removeSpeech:function(e){var t=e.currentTarget;y(t.dataset.name)},showSpeech:function(e){var t=e.currentTarget,n=(0,r.readFromStorage)(t.dataset.name);n&&i(n)},speechNames:b}),e.default.createElement(a.default,{callback:E,isOpen:!!h,onClose:function(){return y(null)}}),e.default.createElement("br",null),e.default.createElement("br",null),e.default.createElement("h3",null,"Load speech:"),e.default.createElement(u.default,{onLoadSpeech:j}))},b=g;exports.default=b;
},{"react":"HdMw","react-router-dom":"rx6s","../../../utils/":"LPsV","../card/Card":"jAkm","../../modal-popup/ModalPopup":"Pb3o","../../load-speech-btn/LoadSpeechBtn":"kNIE","../../speeches-list/SpeechesList":"LXtJ"}]},{},[], null)