(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);g&&g(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({"auth~login~registration":"auth~login~registration",auth:"auth",login:"login",registration:"registration"}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"auth~login~registration":1,auth:1,registration:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"auth~login~registration":"auth~login~registration",auth:"auth",login:"login",registration:"registration"}[e]||e)+".css",i=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===i)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete o[e],g.parentNode.removeChild(g),n(a)},g.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(g)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var g=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("b6fa"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={},u=a,c=(n("5c0b"),n("2877")),l=Object(c["a"])(u,o,i,!1,null,null,null),s=l.exports,f=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",class:e.$route.name},[n("router-link",{staticClass:"logo",attrs:{tag:"img",to:{name:"auth"},src:"/img/logo.png",exact:""}}),n("router-view",{staticClass:"auth-form",class:e.$route.name})],1)},p=[],d={name:"Home"},h=d,m=(n("21bb"),Object(c["a"])(h,g,p,!1,null,null,null)),v=m.exports;r["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",component:v,children:[{path:"",name:"auth",component:function(){return Promise.all([n.e("auth~login~registration"),n.e("auth")]).then(n.bind(null,"2fef"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("auth~login~registration"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/registration",name:"registration",component:function(){return Promise.all([n.e("auth~login~registration"),n.e("registration")]).then(n.bind(null,"3fd1"))}}]}]}),y=n("795b"),w=n.n(y),O=(n("7f7f"),n("2f62"));function F(e){setTimeout(function(){return e()},200)}function E(e,t){var n=e.email;F(function(){t("example@yandex.ru"===n)})}r["a"].use(O["a"]);var P=new O["a"].Store({state:{currentForm:{}},getters:{currentForm:function(e){return e.currentForm}},mutations:{UPDATE_FORM:function(e,t){var n=t.name,o=t.value;n&&o&&(e.currentForm.hasOwnProperty(n)?e.currentForm[n]=o:r["a"].set(e.currentForm,n,o))},CLEAR_FORM:function(e){e.currentForm={}}},actions:{checkEmail:function(e,t){var n=e.dispatch;return new w.a(function(e){E({email:t.value},function(r){n("updateForm",t),e(r)})})},updateForm:function(e,t){var n=e.commit;n("UPDATE_FORM",t)},clearForm:function(e){var t=e.commit;t("CLEAR_FORM")}}}),j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:b,store:P,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(e,t,n){},b6fa:function(e,t,n){}});
//# sourceMappingURL=app.js.map