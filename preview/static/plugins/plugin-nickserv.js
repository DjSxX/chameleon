!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],u=t.base?o[0]+t.base:o[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=s(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(m)):a.push({identifier:l,updater:g(m,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,v=0;function g(e,t){var n,i,r;if(t.singleton){var o=v++;n=f||(f=c(t)),i=m.bind(null,n,o,!1),r=m.bind(null,n,o,!0)}else n=c(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);a[r].references--}for(var o=u(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'.kiwi-statebrowser-register {\n    position: absolute;\n    top: 0;\n    left: 39px;\n    width: auto;\n    text-align: left;\n    padding: 0 10px;\n    font-size: 1em;\n    box-sizing: border-box;\n    line-height: 57px;\n    cursor: pointer;\n    font-weight: 500;\n    letter-spacing: 1px;\n    transition: all 0.3s;\n    border-radius: 0 0 6px 0;\n    opacity: 0.8;\n}\n\n.kiwi-statebrowser-register:hover {\n    opacity: 1;\n}\n\n.kiwi-statebrowser-register span {\n    font-weight: 600;\n}\n\n.kiwi-statebrowser-register i {\n    line-height: 35px;\n    font-size: 1.2em;\n}\n\n#nickserv-form .kiwi-sky-simple-error {\n    width:468px;\n    margin:0 auto;\n    margin-bottom:10px;\n    text-align:left;\n\n}\n.kiwi-ns-login {\n    font-size:1.2em;\n}\n\n.kiwi-ns-login:before {\n    font-family:FontAwesome;\n    content: "\\f090" ;\n    margin-right:5px;\n}\n\n\n.kiwi-ns-register {\n    font-size:1.2em;\n}\n\n.kiwi-ns-register:before {\n    font-family:FontAwesome;\n    content: "\\f023" ;\n    margin-right:5px;\n}\n\n.kiwi-ns-error {\n    font-size:1.0em;\n}\n\n.kiwi-ns-error:before {\n    font-family:FontAwesome;\n    content: "\\f071" ;\n    margin-right:5px;\n}\n.kiwi-ns-input {\n\tmax-width:468px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n#nickserv-form .input-text-underline {\n    width:468px;\n\n}\n.kiwi-ns-button {\n\n}\n\n.kiwi-ns-button:before {\n    font-family:FontAwesome;\n    content: "\\f023" ;\n    margin-right:5px;\n}\n\n@media screen and (max-width: 468px) {\n\n    #nickserv-form .kiwi-sky-simple-error {\n        width:100%;\n    }\n\n\n    #nickserv-form .input-text-underline {\n        width:100%;\n        margin:0px;\n    }\n\n}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);i&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["kiwi-"+e.themeName+"-simple-nick","u-form","u-input","u-input-text","u-input-text--focus","u-input-text--reveal-value"],staticStyle:{"text-align":"center"},attrs:{id:"nickserv-form",title:"NickServ"}},[n("p",{class:["kiwi-"+e.themeName+"-simple-error","kiwi-ns-error"],attrs:{id:"validate"}},[e._v(e._s(e.ConfirmReqText))]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.codeInput,expression:"codeInput"}],staticClass:"u-input",attrs:{placeholder:"Inserisci il codice di conferma",type:"text"},domProps:{value:e.codeInput},on:{input:function(t){t.target.composing||(e.codeInput=t.target.value)}}})])]),e._v(" "),e._m(0),e._v(" "),n("button",{class:["u-button","u-button-primary","u-submit","kiwi-welcome-simple-start","kiwi-ns-button"],on:{click:e.onIdentify}},[e._v(e._s(e.ConfirmButton))])])};i._withStripped=!0;let r={LoginText:"Log in op een account",RegisterText:"Registreer de nicknaam die momenteel in gebruik is:",RegButton:"REGISTREREN",IDText:"De gekozen nickname is geregistreerd, voer het wachtwoord in om te verifiëren.",IDButton:"Login bij NickServ",ConfirmReqText:"Voer de bevestigingscode in die u per e-mail heeft ontvangen om de accountregistratie te voltooien.",ConfirmButton:"BEVESTIG DE REGISTRATIE"};function o(e){return r[e]}function a(e,t,n,i,r,o,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):r&&(u=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}var s=a({data:function(){return{codeInput:""}},computed:{themeName:function(){return kiwi.themes.currentTheme().name.toLowerCase()},ConfirmReqText:function(){return o("ConfirmReqText")},ConfirmButton:function(){return o("ConfirmButton")}},methods:{onIdentify:function(){kiwi.state.$emit("input.raw","/NS confirm "+this.codeInput)}}},i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"u-input-text-underline"},[t("div",{staticClass:"u-input-text-underline-active"})])}],!1,null,null,null);s.options.__file="components/confirmdialog.vue";var u=s.exports,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["kiwi-"+e.themeName+"-simple-nick","u-form","u-input","u-input-text","u-input-text--focus","u-input-text--reveal-value"],staticStyle:{"text-align":"center"},attrs:{id:"nickserv-form",title:"NickServ"}},[n("p",{class:["kiwi-"+e.themeName+"-simple-error","kiwi-ns-error"],attrs:{id:"validate"}},[e._v(e._s(e.IDText))]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pwdInput,expression:"pwdInput"}],staticClass:"u-input",attrs:{placeholder:"Inserisci la password",type:"password",required:""},domProps:{value:e.pwdInput},on:{input:function(t){t.target.composing||(e.pwdInput=t.target.value)}}})])]),e._v(" "),e._m(0),e._v(" "),n("button",{class:["u-button","u-button-primary","u-submit","kiwi-welcome-simple-start","kiwi-ns-button"],on:{click:e.onIdentify}},[e._v(e._s(e.IDButton))])])};c._withStripped=!0;var l=a({data:function(){return{pwdInput:""}},computed:{themeName:function(){return kiwi.themes.currentTheme().name.toLowerCase()},IDText:function(){return o("IDText")},IDButton:function(){return o("IDButton")}},methods:{onIdentify:function(){kiwi.state.$emit("input.raw","/NS identify "+this.pwdInput)}}},c,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"u-input-text-underline"},[t("div",{staticClass:"u-input-text-underline-active"})])}],!1,null,null,null);l.options.__file="components/nsdialog.vue";var d=l.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["kiwi-"+e.themeName+"-simple-nick","u-form","u-input","u-input-text","u-input-text--focus","u-input-text--reveal-value"],staticStyle:{"text-align":"center"},attrs:{id:"nickserv-form",title:"NickServ"}},[n("p",{class:["kiwi-"+e.themeName+"-simple-error","kiwi-ns-login"],attrs:{id:"validate"}},[e._v(e._s(e.LoginText))]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.accountInput,expression:"accountInput"}],staticClass:"u-input",attrs:{placeholder:"Voer een NickServ-account in",type:"text"},domProps:{value:e.accountInput},on:{input:function(t){t.target.composing||(e.accountInput=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pwdInput,expression:"pwdInput"}],staticClass:"u-input",attrs:{placeholder:"Voer uw wachtwoord in",type:"password"},domProps:{value:e.pwdInput},on:{input:function(t){t.target.composing||(e.pwdInput=t.target.value)}}})])]),e._v(" "),e._m(0),e._v(" "),n("button",{class:["u-button","u-button-primary","u-submit","kiwi-welcome-simple-start","kiwi-ns-button"],on:{click:e.onIdentify}},[e._v(e._s(e.IDButton))])])};m._withStripped=!0;var p=a({data:function(){return{accountInput:"",pwdInput:""}},computed:{themeName:function(){return kiwi.themes.currentTheme().name.toLowerCase()},LoginText:function(){return o("LoginText")},IDButton:function(){return o("IDButton")}},methods:{onIdentify:function(){kiwi.state.$emit("input.raw","/NS identify "+this.accountInput+" "+this.pwdInput),kiwi.state.$emit("input.raw","/NICK "+this.accountInput)}}},m,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"u-input-text-underline"},[t("div",{staticClass:"u-input-text-underline-active"})])}],!1,null,null,null);p.options.__file="components/nslogindialog.vue";var f=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["kiwi-"+e.themeName+"-simple-nick","u-form","u-input","u-input-text","u-input-text--focus","u-input-text--reveal-value"],staticStyle:{"text-align":"center"},attrs:{id:"nickserv-form",title:"NickServ"}},[n("p",{class:["kiwi-"+e.themeName+"-simple-error","kiwi-ns-register"],attrs:{id:"validate"}},[e._v(" "+e._s(e.RegisterText)+" "+e._s(e.currentNick))]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.accountInput,expression:"accountInput"}],staticClass:"u-input",attrs:{placeholder:"Voer een geldig e-mailadres in",type:"text"},domProps:{value:e.accountInput},on:{input:function(t){t.target.composing||(e.accountInput=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"u-input-text kiwi-ns-input"},[n("div",{staticClass:"u-input-text-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pwdInput,expression:"pwdInput"}],staticClass:"u-input",attrs:{placeholder:"Voer uw wachtwoord in",type:"password"},domProps:{value:e.pwdInput},on:{input:function(t){t.target.composing||(e.pwdInput=t.target.value)}}})])]),e._v(" "),e._m(0),e._v(" "),n("button",{class:["u-button","u-button-primary","u-submit","kiwi-welcome-simple-start","kiwi-ns-button"],on:{click:e.onRegister}},[e._v(" "+e._s(e.RegButton)+" ")])])};v._withStripped=!0;var g=a({data:function(){return{accountInput:"",pwdInput:""}},computed:{themeName:function(){return kiwi.themes.currentTheme().name.toLowerCase()},currentNick:function(){return kiwi.state.getActiveNetwork().ircClient.user.nick},RegisterText:function(){return o("RegisterText")},RegButton:function(){return o("RegButton")}},methods:{onRegister:function(){kiwi.state.$emit("input.raw","/NS register "+this.pwdInput+" "+this.accountInput)}}},v,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"u-input-text-underline"},[t("div",{staticClass:"u-input-text-underline-active"})])}],!1,null,null,null);g.options.__file="components/nsregisterdialog.vue";var w=g.exports;n(0);kiwi.plugin("nickserv",(function(e){var t=new RegExp("^Deze nicknaam is geregistreerd en beschermd. Als dit van jou is",""),n=new RegExp("^Verkeerd wachtwoord",""),i=new RegExp("^Uw nicknaam wordt gewijzigd in",""),r=new RegExp("^Uw e-mail is niet bevestigd. Om dit te bevestigen, volgt u de instructies in de e-mail die u ontving toen u zich registreerde",""),o=new RegExp("^ongeldige activatiecode",""),a=new RegExp("^Uw e-mailadres voor (.*) Is bevestigd.",""),s=new RegExp("^Waarschuwing, probeer het opnieuw met een veiliger wachtwoord.",""),c=new RegExp("het is geen geldig e-mailadres.",""),l=new RegExp("^Je moet deze nickname minimaal 30 seconden hebben gebruikt voordat je hem kunt registreren.",""),m=new RegExp("^Wachtwoord geaccepteerd - u wordt nu herkend.",""),p=new RegExp("^Je bent al geïdentificeerd.",""),v=new e.Vue({data:{themeName:""}});function g(){e.state.$emit("mediaviewer.show",{component:w})}function h(){e.state.$emit("input.raw","/NS Logout")}function k(){e.state.$emit("mediaviewer.show",{component:f})}v.themeName=e.themes.currentTheme().name.toLowerCase(),e.on("theme.change",(function(t){v.themeName=e.themes.currentTheme().name.toLowerCase()}));var x=document.createElement("div");x.className="kiwi-statebrowser-register",x.addEventListener("click",g),x.innerHTML='<i aria-hidden="true" class="fa fa-lock"></i>',e.addUi("browser",x);var b=document.createElement("a");b.innerHTML='<i aria-hidden="true" class="fa fa-sign-in"></i><span>Log in</span>',b.addEventListener("click",k),e.addUi("header_channel",b),e.on("irc.mode",(function(t,n){"NickServ"==t.nick&&t.target==n.nick&&setTimeout((function(){1==e.state.getActiveNetwork().ircClient.user.modes.has("r")?(b.innerHTML='<i aria-hidden="true" class="fa fa-sign-out"></i><span>Log uit</span>',b.removeEventListener("click",k),b.addEventListener("click",h),x.removeEventListener("click",g),x.style.visibility="hidden"):(b.innerHTML='<i aria-hidden="true" class="fa fa-sign-in"></i><span>Log in</span>',b.removeEventListener("click",h),b.addEventListener("click",k),x.style.visibility="visible",x.addEventListener("click",g))}),0)})),e.on("irc.notice",(function(f){if("nickserv"===f.nick.toLowerCase())if(f.message.match(t))e.state.$emit("mediaviewer.show",{component:d});else if(f.message.match(n))document.getElementById("validate").innerHTML="Verkeerd Wachtwoord!";else if(f.message.match(r))e.state.$emit("mediaviewer.show",{component:u});else if(f.message.match(o))document.getElementById("validate").innerHTML="Ongeldige activatiecode. Voer de bevestigingscode in die u per e-mail heeft ontvangen om de accountregistratie te voltooien.";else if(f.message.match(i))e.state.$emit("mediaviewer.hide");else if(f.message.match(a))e.state.$emit("mediaviewer.hide");else if(f.message.match(s))document.getElementById("validate").innerHTML="Waarschuwing, probeer het opnieuw met een veiliger wachtwoord. <br> Wachtwoorden moeten minimaal 5 tekens lang zijn, ze mogen niet gemakkelijk worden begrepen (bijv. Uw naam of bijnaam) <br> en ze mogen geen spaties bevatten en tabblad.";else if(f.message.match(c)){document.getElementById("validate").innerHTML=f.message}else{if(f.message.match(l))return document.getElementById("validate").innerHTML=f.message,void setTimeout((function(){e.state.$emit("mediaviewer.hide")}),2e3);if(f.message.match(m))return document.getElementById("validate").innerHTML=f.message,void setTimeout((function(){e.state.$emit("mediaviewer.hide")}),2e3);if(f.message.match(p))return document.getElementById("validate").innerHTML=f.message,void setTimeout((function(){e.state.$emit("mediaviewer.hide")}),2e3)}})),e.on("input.command.nick",(function(t){e.state.$emit("mediaviewer.hide")}))}))}]);