_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t);var o=n("q1tI"),i=n.n(o),c=n("8Kt/"),s=n.n(c),u=n("JDnx"),l=(n("RNiq"),n("MX0m")),f=n.n(l),d=n("YFqc"),p=n.n(d),m=n("ELrk"),v=n("sDqW"),h=n("17x9"),y=n.n(h),b=n("TSYQ"),g=n.n(b),x=n("33Jr"),w=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],j={tabs:y.a.bool,pills:y.a.bool,vertical:y.a.oneOfType([y.a.bool,y.a.string]),horizontal:y.a.string,justified:y.a.bool,fill:y.a.bool,navbar:y.a.bool,card:y.a.bool,tag:x.c,className:y.a.string,cssModule:y.a.object},O=function(e){var t=e.className,n=e.cssModule,r=e.tabs,a=e.pills,o=e.vertical,c=e.horizontal,s=e.justified,u=e.fill,l=e.navbar,f=e.card,d=e.tag,p=Object(v.a)(e,w),h=Object(x.b)(g()(t,l?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":r,"card-header-tabs":f&&r,"nav-pills":a,"card-header-pills":f&&a,"nav-justified":s,"nav-fill":u}),n);return i.a.createElement(d,Object(m.a)({},p,{className:h}))};O.propTypes=j,O.defaultProps={tag:"ul",vertical:!1};var S=O,C=["className","cssModule","active","tag"],_={tag:x.c,active:y.a.bool,className:y.a.string,cssModule:y.a.object},M=function(e){var t=e.className,n=e.cssModule,r=e.active,a=e.tag,o=Object(v.a)(e,C),c=Object(x.b)(g()(t,"nav-item",!!r&&"active"),n);return i.a.createElement(a,Object(m.a)({},o,{className:c}))};M.propTypes=_,M.defaultProps={tag:"li"};var A=M,N=n("1Yj4"),k=i.a.createElement,I=function(e){var t=Object(o.useContext)(u.a).user;return k("div",null,k(s.a,null,k("title",null,"Restaurant Application"),k("meta",{charSet:"utf-8"}),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),k("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),k("script",{src:"https://js.stripe.com/v3"})),k("header",{className:"jsx-3796417845"},k(f.a,{id:"3796417845"},["a.jsx-3796417845{color:white;}","h5.jsx-3796417845{color:white;padding-top:11px;}"]),k(S,{className:"navbar navbar-dark bg-dark"},k(A,null,k(p.a,{href:"/"},k("a",{className:"jsx-3796417845 navbar-brand"},"Home"))),k(A,{className:"ml-auto"},t?k("h5",{className:"jsx-3796417845"},t.username):k(p.a,{href:"/register"},k("a",{className:"jsx-3796417845 nav-link"}," Sign up"))),k(A,null,t?k(p.a,{href:"/"},k("a",{onClick:function(){logout(),setUser(null)},className:"jsx-3796417845 nav-link"},"Logout")):k(p.a,{href:"/login"},k("a",{className:"jsx-3796417845 nav-link"},"Sign in"))))),k(N.a,null,e.children))},P=(n("p46w"),i.a.createElement);t.default=function(e){var t=Object(o.useContext)(u.a),n=t.cart,r=t.addItem,i=t.removeItem,c=(t.user,t.setUser,Object(o.useState)({cart:n})),l=c[0],f=c[1],d=e.Component,p=e.pageProps;return function(e){f({user:e})},r=function(e){var t=l.cart.items,n=!0;if(t.length>0&&(n=t.find((function(t){return t.id===e.id})))||(n=!1),console.log("Found Item value: ".concat(JSON.stringify(n))),n)console.log("Total so far:  ".concat(l.cart.total)),o={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity+1}):e})),total:l.cart.total+e.price};else{var r=JSON.parse(JSON.stringify(e));r.quantity=1;var o={items:[].concat(a(l.cart.items),[r]),total:l.cart.total+e.price};f({cart:o}),console.log("Total items: ".concat(JSON.stringify(o)))}f({cart:o}),console.log("state reset to cart:".concat(JSON.stringify(l)))},i=function(e){var t=l.cart.items,n=t.find((function(t){return t.id===e.id}));if(n.quantity>1)var r={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity-1}):e})),total:l.cart.total-e.price};else{console.log("Try remove item ".concat(JSON.stringify(n)));var a=t.findIndex((function(e){return e.id===n.id}));t.splice(a,1);r={items:t,total:l.cart.total-e.price}}f({cart:r})},P(u.a.Provider,{value:{cart:l.cart,addItem:r,removeItem:i,isAuthenticated:!1,user:null,setUser:function(){}}},P(s.a,null,P("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),P(I,null,P(d,p)))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var u=d[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},p46w:function(e,t,n){var r,a;!function(o){if(void 0===(a="function"===typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=a),!0,e.exports=o(),!!0){var i=window.Cookies,c=window.Cookies=o();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function o(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},a.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(u){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in o)o[s]&&(c+="; "+s,!0!==o[s]&&(c+="="+o[s].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!==typeof document){for(var a={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var c=o[i].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(c[0]);if(s=(r.read||r)(s,u)||t(s),n)try{s=JSON.parse(s)}catch(l){}if(a[u]=s,e===u)break}catch(l){}}return e?a[e]:a}}return a.set=o,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(t,n){o(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))}},[[0,0,1,2,3,5]]]);