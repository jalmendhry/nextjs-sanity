(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"5Yp1":function(e,t,n){"use strict";n("q1tI");var r=n("8Kt/"),a=n.n(r),o=n("nKUr"),i=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("p",{className:"header__title",children:"NextJS + Sanity.io"})})},c=n("YFqc"),u=n.n(c),s=function(){return Object(o.jsx)("nav",{className:"navigation",children:Object(o.jsxs)("ul",{className:"navigation__list",children:[Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(u.a,{href:"/",children:Object(o.jsx)("a",{className:"navigation__link",children:"Home"})})}),Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(u.a,{href:"/about",children:Object(o.jsx)("a",{className:"navigation__link",children:"About"})})}),Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(u.a,{href:"/contact-us",children:Object(o.jsx)("a",{className:"navigation__link",children:"Contact us"})})})]})})};t.a=function(e){var t=e.pageTitle,n=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(a.a,{children:[Object(o.jsx)("title",{children:t}),Object(o.jsx)("script",{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(i,{}),Object(o.jsx)(s,{}),Object(o.jsx)("div",{className:"container__content",children:n})]})]})}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",m=i.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),y=m.href,b=m.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+b])return d(o,(function(){p(h,y,b)}))}),[t,o,y,b,h]);var j=e.children,g=e.replace,_=e.shallow,x=e.scroll;"string"===typeof j&&(j=i.default.createElement("a",null,j));var O=i.Children.only(j),w={ref:function(e){e&&s(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,b,g,_,x)}};return t&&(w.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(h,y,b,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(w.href=(0,c.addBasePath)((0,c.addLocale)(b,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(O,w)};t.default=h},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}}]);