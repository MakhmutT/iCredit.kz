_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return c}))},M7WW:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return n("zJ0N")}])},U8pU:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}))},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},jI6F:function(t,e){t.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("U8pU"),c=n("JX7q");function a(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!==typeof e?Object(c.a)(t):e}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return c}))},zJ0N:function(t,e,n){"use strict";n.r(e);var o=n("o0o1"),c=n.n(o),a=n("HaE+"),r=n("1OyB"),s=n("vuIU"),i=n("Ji7U"),u=n("md7G"),l=n("foSv"),f=n("nKUr"),d=n("q1tI"),p=n.n(d),h=n("nOHt"),m=n.n(h),b=n("vDqi"),j=n.n(b),g=n("GUC0"),y=n.n(g),v=n("8Kt/"),O=n.n(v),k=n("5JmO"),w=n.n(k),_=n("TruH"),x=n.n(_);n("tNPP"),n("uuUm"),n("Otl1"),n("uJQ+");function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(u.a)(this,n)}}function N(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}w.a.vfs=x.a.pdfMake.vfs,w.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRomanBold.ttf",italics:"TimesNewRomanItalics.ttf",bolditalics:"TimesNewRomanBoldItalics.ttf"},emptyCheckbox:{normal:"emptyCheckbox.ttf"}};var R=function(t){Object(i.a)(o,t);var e=S(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(s.a)(o,[{key:"getUserDocument",value:function(){var t=Object(a.a)(c.a.mark((function t(e){var n=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,j.a.get("https://api.i-credit.kz/api/getData?token=".concat(e)).then((function(t){t.data.success?n.setState({docs:t.data.docs,id:t.data.id,id_req:t.data.id_req,loading:!1,rest:t.data.rest,phone:t.data.phone}):m.a.push("/")})).catch((function(t){n.setState({loading:!1}),m.a.push("/")}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCode",value:function(){var t=Object(a.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&e.setState({isCodeSent:!0})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.state.code_conf){t.next=3;break}return t.next=3,j.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(t.message),"success").then((function(){m.a.push("/")}))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var t=this;this.setState({loading:!0}),j.a.get("https://api.i-credit.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(e){t.setState({loading:!1}),e.data.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))})).catch((function(e){t.setState({loading:!1}),console.log(e),m.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var t=Object(a.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0});try{j.a.get("https://api.i-credit.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(t){e.setState({loading:!1}),t.data.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){m.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),m.a.push("/")}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===N("token").length?m.a.push("/"):this.setState({token:N("token")}),this.getUserDocument(0!==N("token").length?N("token"):null)}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"container otherPages",children:[Object(f.jsx)(O.a,{children:Object(f.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(f.jsx)("div",{className:"modelLoader"}):Object(f.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsxs)("div",{className:"agreements-block",children:[Object(f.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(f.jsx)("ul",{className:"complete",children:this.state.docs.map((function(t){return Object(f.jsxs)("li",{className:null===t.link?"d-none":"",children:[Object(f.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(f.jsx)("a",{href:t.link,target:"_blank",children:t.name})]})}))}),Object(f.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(f.jsx)("button",{onClick:function(){return t.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(f.jsx)("button",{onClick:function(){return t.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),o}(p.a.Component);e.default=R}},[["M7WW",0,1,11,12,14,2,3,4,5,13]]]);