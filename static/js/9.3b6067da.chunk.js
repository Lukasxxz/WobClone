(this["webpackJsonpwob-clone"]=this["webpackJsonpwob-clone"]||[]).push([[9],{265:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__14IVZ",wrapper:"SearchBar_wrapper__3aplh",closeIcon:"SearchBar_closeIcon__evSG6",searchBtn:"SearchBar_searchBtn__32SK2",searchInput:"SearchBar_searchInput__3DsOd",searchResultsList:"SearchBar_searchResultsList__1L9JW",underText:"SearchBar_underText__dDeby",ellipsis:"SearchBar_ellipsis__2AOwx"}},276:function(e,t,a){"use strict";a.r(t);var n=a(28),r=a(91),c=a(2),o=a(9),s=a(13),u=a(25),i=a(58),l=a(56),h=a(265),f=a.n(h),b=a(1),m=f.a.closeIcon,d=f.a.ellipsis,j=f.a.searchBar,N=f.a.searchBtn,O=f.a.searchInput,p=f.a.searchResultsList,v=f.a.underText,_=f.a.wrapper;t.default=function(){var e=Object(o.a)(),t=Object(o.b)(u.c),a=Object(o.b)(u.d),h=Object(o.b)(u.e),f=Object(c.useRef)([]),k=Object(c.useRef)(null),w=-1;Object(c.useEffect)((function(){e(Object(u.b)(""))}),[e]),Object(c.useEffect)((function(){if(!a)return e(Object(u.h)([]));var n=setTimeout((function(){e(Object(u.h)(function(){var e,n=[],c=[],o=Object(r.a)(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;(s.author.firstName.toLowerCase().includes(a.toLowerCase())||s.author.lastName.toLowerCase().includes(a.toLowerCase()))&&n.push({linkPathName:"/catalog/".concat(s.author.firstName,"-").concat(s.author.lastName),linkContent:{title:null,authorFirstName:s.author.firstName,authorLastName:s.author.lastName},linkState:{authorFirstName:s.author.firstName,authorLastName:s.author.lastName}}),s.title.toLowerCase().includes(a.toLowerCase())&&c.push({linkPathName:"/ebook/".concat(s.title,"-").concat(s.author.firstName,"-").concat(s.author.lastName),linkContent:{title:s.title,authorFirstName:s.author.firstName,authorLastName:s.author.lastName},linkState:{title:s.title,authorFirstName:s.author.firstName,authorLastName:s.author.lastName}})}}catch(u){o.e(u)}finally{o.f()}return[].concat(n,c)}()))}),500);return window.addEventListener("click",(function(){e(Object(u.h)([]))}),{once:!0}),function(){return clearTimeout(n)}}),[a,e]);var x=function(e){e.currentTarget.focus(),w=f.current.indexOf(e.currentTarget)};return Object(b.jsx)("div",{className:j,onKeyDown:function(e){var t,a=null;if(40===e.keyCode||38===e.keyCode)return 40===e.keyCode&&w<h.length-1&&w++,38===e.keyCode&&w>0&&w--,h.length>0&&(a=null===(t=f.current[w])||void 0===t?void 0:t.focus()),a},tabIndex:-1,children:Object(b.jsxs)("div",{className:_,children:[Object(b.jsx)("button",{className:N,children:Object(b.jsx)(i.a,{})}),Object(b.jsx)("input",{className:O,ref:k,type:"text",autoComplete:"off",placeholder:"Szukaj",name:"searchField",onChange:function(t){e(Object(u.g)(t.target.value))}}),Object(b.jsx)("button",{className:m,onClick:function(){e(Object(u.i)())},children:Object(b.jsx)(l.a,{})}),h.length>0?Object(b.jsx)("ul",{className:p,onMouseLeave:function(){var e,t;null===(e=f.current[w])||void 0===e||e.blur(),null===(t=k.current)||void 0===t||t.focus(),w=-1},children:h.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsxs)(s.b,{to:{pathname:e.linkPathName,state:Object(n.a)({},e.linkState)},ref:function(e){return f.current[t]=e},onMouseEnter:x,children:[e.linkContent.title?Object(b.jsx)("div",{className:d,children:e.linkContent.title}):null,Object(b.jsx)("div",{className:"".concat(e.linkContent.title?v:null),children:"".concat(e.linkContent.authorFirstName," ").concat(e.linkContent.authorLastName)})]})},t)}))}):null]})})}},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(41);function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(u)throw o}}}}}}]);
//# sourceMappingURL=9.3b6067da.chunk.js.map