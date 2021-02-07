/*! For license information please see 8.61012b1d.chunk.js.LICENSE.txt */
(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[8],{101:function(e,t,n){},102:function(e){e.exports=JSON.parse('[{"title":"Junior React Native Developer","company":"WorkoutMe","time_frame":"1 mo","start_date":"Present","description":"Supporting our Sr. developer in adding new functionality and screens for iOS. Latest project included adding localization for multi-language support.","type":"dev"},{"title":"Contract Web Development","company":"Gedalya Krycer Designs","time_frame":"5 yr","start_date":"Present","description":"Providing web design and development services via React, Wordpress and Squarespace.","type":"dev"},{"title":"Full-Stack Web Development Certification","company":"University of Arizona Bootcamp","time_frame":"6 mos","start_date":"2020","description":"Learned core languages and coding methodologies, while building multiple team-based projects.","type":"learning"},{"title":"Digital Design Director","company":"L\xfagh Studio","time_frame":"4 mos","start_date":"2020","description":"Lead both design and development teams, provided HR support and managed key client accounts.","type":"design"},{"title":"Sr. Web Designer","company":"L\xfagh Studio","time_frame":"1 yr 8 mos","start_date":"2018","description":"Designed multiple WordPress sites from the sitemap to performing final QA, mentored junior designers, and created processes for web production.","type":"design"},{"title":"Designer","company":"Mila International","time_frame":"3 mos","start_date":"2018","description":"Provided graphic design for print based marketing collateral and multiple event materials (booth & signage).","type":"design"},{"title":"Lead Graphic Designer","company":"L\xfagh Studio","time_frame":"2 yr 11 mos","start_date":"2015","description":"Worked on print, web, branding and motion graphic projects for multiple client accounts.","type":"design"},{"title":"Graphic Designer","company":"Winky Designs","time_frame":"5 mos","start_date":"2014","description":"Served as an intern and then came on board part-time. Designed watch interfaces and product brochure.","type":"design"},{"title":"Bachelors | Graphic Design","company":"The Art Institute of Las Vegas","time_frame":"4 yr","start_date":"2011","description":"AIGA Treasurer, won 3 student ADDY Awards and served as a tutor for graphic design subjects.","type":"learning"}]')},103:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(101),n(102)),i=n(11);n(103);var s=function(e){var t=e.title,n=e.company,a=e.timeFrame,s=e.startDate,c=e.description,l=e.type,p=Object(r.useState)(null),d=Object(i.a)(p,2),u=d[0],m=d[1],f=Object(r.useState)(null),h=Object(i.a)(f,2),v=h[0],g=h[1];return Object(r.useEffect)((function(){switch(l){case"dev":m("time-bar__start-date--dev"),g("cc__meta--dev");break;case"design":m("time-bar__start-date--design"),g("cc__meta--design");break;case"learning":m("time-bar__start-date--learn"),g("cc__meta--learn");break;default:m("time-bar__start-date--dev"),g("cc__meta--dev")}}),[l]),o.a.createElement("section",{className:"careerCard"},o.a.createElement("div",{className:"cc__card-wrapper"},o.a.createElement("div",{className:"cc__main-content"},o.a.createElement("h4",{className:"cc__title"},t),o.a.createElement("p",{className:"cc__meta ".concat(v)},n),o.a.createElement("p",{className:"cc__meta ".concat(v)},a)),o.a.createElement("div",{className:"cc__description"},o.a.createElement("p",{className:"cc__description-text"},c))),o.a.createElement("div",{className:"cc__vertical-spacer"}),o.a.createElement("div",{className:"time-bar"},o.a.createElement("p",{className:"time-bar__start-date ".concat(u)},s),o.a.createElement("div",{className:"time-bar__spacer"})))},c=n(8),l=n.n(c);var p=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));function d(e,t,n){var r,o,a,i,s;function c(){var l=Date.now()-i;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(s=e.apply(a,o),a=o=null))}null==t&&(t=100);var l=function(){a=this,o=arguments,i=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(s=e.apply(a,o),a=o=null),s};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(s=e.apply(a,o),a=o=null,clearTimeout(r),r=null)},l}d.debounce=d;var u=d;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto;\n}\n  .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab;\n    }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important;\n    }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto;\n  }\n\n.indiana-dragging {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n");var m,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=(m="indiana-scroll-container",function(e,t){if(!e)return m;var n;"string"===typeof e?n=e:t=e;var r=m;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce((function(e,n){var o=t[n];return o&&(e+=" "+("boolean"===typeof o?r+"--"+n:r+"--"+n+"_"+o)),e}),""):"")}),v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target))if(t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&n.isScrollable()&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=o.a.createRef(),n.onEndScroll=u(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.getRef=n.getRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)}},{key:"getElement",value:function(){return this.container.current}},{key:"isMobileDevice",value:function(){return"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"isDraggable",value:function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0}},{key:"isScrollable",value:function(){var e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}},{key:"processClick",value:function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0}},{key:"processStart",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.props.onStartScroll,r=this.container.current;this.started=!0,t&&document.body.classList.add("indiana-dragging"),n&&n(r.scrollLeft,r.scrollTop,r.scrollWidth,r.scrollHeight),this.forceUpdate()}},{key:"processScroll",value:function(e){if(this.started){var t=this.props.onScroll,n=this.container.current;t&&t(n.scrollLeft,n.scrollTop,n.scrollWidth,n.scrollHeight)}else this.processStart(e,!1)}},{key:"processMove",value:function(e,t,n){var r=this.props,o=r.horizontal,a=r.vertical,i=r.activationDistance,s=r.onScroll,c=this.container.current;this.started?(o&&(c.scrollLeft-=t-this.clientX),a&&(c.scrollTop-=n-this.clientY),s&&s(c.scrollLeft,c.scrollTop,c.scrollWidth,c.scrollHeight),this.clientX=t,this.clientY=n,this.scrollLeft=c.scrollLeft,this.scrollTop=c.scrollTop):(o&&Math.abs(t-this.clientX)>i||a&&Math.abs(n-this.clientY)>i)&&(this.clientX=t,this.clientY=n,this.processStart())}},{key:"processEnd",value:function(e){var t=this.props.onEndScroll,n=this.container.current;this.pressed=!1,this.started=!1,this.scrolling=!1,n&&t&&t(n.scrollLeft,n.scrollTop,n.scrollWidth,n.scrollHeight),document.body.classList.remove("indiana-dragging"),this.forceUpdate()}},{key:"getRef",value:function(e){[this.container,this.props.innerRef].forEach((function(t){t&&("function"===typeof t?t(e):t.current=e)}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=e.hideScrollbars,i=e.component;return o.a.createElement(i,{className:p(n,h({dragging:this.pressed,"hide-scrollbars":a,"native-scroll":this.isMobile})),style:r,ref:this.getRef,onScroll:this.onScroll},t)}}]),t}(r.PureComponent);v.propTypes={vertical:l.a.bool,horizontal:l.a.bool,hideScrollbars:l.a.bool,activationDistance:l.a.number,children:l.a.node,onStartScroll:l.a.func,onScroll:l.a.func,onEndScroll:l.a.func,onClick:l.a.func,className:l.a.string,style:l.a.object,ignoreElements:l.a.string,nativeMobileScroll:l.a.bool,stopPropagation:l.a.bool,component:l.a.string,innerRef:l.a.oneOfType([l.a.func,l.a.shape({current:l.a.any})])},v.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div"};var g=v;t.default=function(){return o.a.createElement("section",{className:"g__about-sections"},o.a.createElement("h2",null,"Career"),o.a.createElement("div",{className:"g_negative-margin cc__intro-wrapper"},o.a.createElement("p",{className:"cc__intro-text g__body-lg"},"Here is what I have been up to in ",o.a.createElement("span",{className:"cc__intro-text--dev"},"Development"),", ",o.a.createElement("span",{className:"cc__intro-text--design"},"Design")," and ",o.a.createElement("span",{className:"cc__intro-text--learn"},"Education"),".")),o.a.createElement("div",{className:"cc__timeline-wrapper"},o.a.createElement(g,{className:"cc__overflow"},o.a.createElement("div",{className:"cc__buffer"}),a&&a.map((function(e,t){return o.a.createElement(s,{key:t+e.title,title:e.title,company:e.company,timeFrame:e.time_frame,startDate:e.start_date,description:e.description,type:e.type})})),o.a.createElement("div",{className:"cc__buffer"}))))}}}]);
//# sourceMappingURL=8.61012b1d.chunk.js.map