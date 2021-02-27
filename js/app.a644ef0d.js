(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1eee":function(t,e,n){},"330d":function(t,e,n){"use strict";n("1eee")},"340d":function(t,e,n){},4791:function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b34c:function(t,e,n){"use strict";n("340d")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("title",[t._v("Planning Poker")]),n("router-view")],1)},i=[],r=(n("5c0b"),n("2877")),s={},c=Object(r["a"])(s,o,i,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("button",{staticClass:"button",class:{disabled:t.clickedStart},on:{click:function(e){return t.startGame()}}},[t.clickedStart?t._e():n("span",[t._v("Start new game")]),t.clickedStart?n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30","xml:space":"preserve"}},[n("rect",{attrs:{x:"0",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),n("rect",{attrs:{x:"8",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),n("rect",{attrs:{x:"16",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])]):t._e()])])},d=[],b=n("d4ec"),f=n("bee2"),m=n("262e"),v=n("2caf"),h=n("9ab4"),y=n("1b40"),k=n("8e27"),w=n("2f62");a["a"].use(w["a"]);var g=new w["a"].Store({state:{players:[],socket:{}},mutations:{setSocket:function(t,e){t.socket=e}},actions:{},modules:{}}),C=function(t){Object(m["a"])(n,t);var e=Object(v["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.clickedStart=!1,t}return Object(f["a"])(n,[{key:"startGame",value:function(){this.clickedStart=!0;var t=Object(k["io"])("https://planning-poker-free.herokuapp.com");g.commit("setSocket",t),g.state.socket.on("room",(function(t){J.push({path:"game/".concat(t)})}))}}]),n}(y["c"]);C=Object(h["a"])([Object(y["a"])({components:{}})],C);var _=C,O=_,j=(n("b34c"),Object(r["a"])(O,p,d,!1,null,"5d49d232",null)),V=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.modal||t.showCopiedToClipboard?t._e():n("button",{staticClass:"button invite",on:{click:function(e){return t.copyToClipboard()}}},[n("div",[t._v("Invite players")]),n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}})])])]),!t.modal&&t.showCopiedToClipboard?n("button",{staticClass:"button invite copied no-hover"},[n("div",[t._v("Copied to clipboard")]),n("div")]):t._e(),t.modal||t.playerHasVoted()||t.showVotes?t._e():n("button",{staticClass:"button no-hover"},[n("span",[t._v("Cast your votes")])]),t.modal||!t.playerHasVoted()||t.showVotes?t._e():n("button",{staticClass:"button",on:{click:function(e){return t.showVotesClicked()}}},[n("span",[t._v("Show votes!")])]),t.showVotes?n("button",{staticClass:"button start",on:{click:function(e){return t.startNewGame()}}},[n("span",[t._v("Start new game!")])]):t._e(),t.modal?n("Modal",{attrs:{title:"What is your name?"},on:{completed:t.enteredName}}):t._e(),t._l(t.getPlayers(),(function(e){return n("div",{key:e.id,staticClass:"players"},[n("div",{staticClass:"player",class:{voted:void 0!=e.vote&&null!=e.vote&&!t.showVotes}},[t.showVotes?n("span",[t._v(t._s(e.vote))]):t._e()]),n("div",{staticClass:"name"},[n("span",[t._v(t._s(e.name))])])])})),t.modal?t._e():n("div",{staticClass:"options"},[n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("0")}}},[n("span",[t._v("0")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("1")}}},[n("span",[t._v("1")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("2")}}},[n("span",[t._v("2")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("3")}}},[n("span",[t._v("3")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("5")}}},[n("span",[t._v("5")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("8")}}},[n("span",[t._v("8")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("13")}}},[n("span",[t._v("13")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("21")}}},[n("span",[t._v("21")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("34")}}},[n("span",[t._v("34")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("55")}}},[n("span",[t._v("55")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("89")}}},[n("span",[t._v("89")])]),n("button",{staticClass:"fib-button",on:{click:function(e){return t.performVote("?")}}},[n("span",[t._v("?")])])])],2)},T=[],S=(n("4de4"),n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal"},[n("span",[t._v(t._s(t.title))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{id:"selectNameInput",type:"text"},domProps:{value:t.name},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.completed(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])])}),M=[],N=(n("b0c0"),function(t){Object(m["a"])(n,t);var e=Object(v["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.name="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=document.getElementById("selectNameInput");t&&t.focus()}},{key:"completed",value:function(){this.$emit("completed",this.name)}}]),n}(y["c"]));Object(h["a"])([Object(y["b"])()],N.prototype,"title",void 0),N=Object(h["a"])([y["a"]],N);var P=N,L=P,X=(n("cd8d"),Object(r["a"])(L,S,M,!1,null,"0148b500",null)),H=X.exports,E=function(t){Object(m["a"])(n,t);var e=Object(v["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.modal=!0,t.showVotes=!1,t.showCopiedToClipboard=!1,t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;if(this.joiningAGame()){var e=Object(k["io"])("https://planning-poker-free.herokuapp.com",{query:{roomId:this.$route.params.id}});g.commit("setSocket",e)}g.state.socket.on("update",(function(t){g.state.players=t})),g.state.socket.on("show",(function(){t.showVotes=!0})),g.state.socket.on("restart",(function(){t.showVotes=!1}))}},{key:"showVotesClicked",value:function(){g.state.socket.emit("show")}},{key:"getPlayers",value:function(){return g.state.players}},{key:"performVote",value:function(t){g.state.socket.emit("vote",t)}},{key:"startNewGame",value:function(){g.state.socket.emit("restart")}},{key:"enteredName",value:function(t){g.state.socket.emit("name",t),this.modal=!1}},{key:"playerHasVoted",value:function(){var t=g.state.players;return t.filter((function(t){return null!==t.vote&&void 0!==t.vote})).length>0}},{key:"copyToClipboard",value:function(){var t=this,e=document.createElement("input");e.value=window.location.href,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.showCopiedToClipboard=!0,setTimeout((function(){return t.showCopiedToClipboard=!1}),3e3)}},{key:"joiningAGame",value:function(){var t=g.state.socket;return t&&0===Object.keys(t).length&&t.constructor===Object}}]),n}(y["c"]);E=Object(h["a"])([Object(y["a"])({components:{Modal:H}})],E);var G=E,$=G,I=(n("330d"),Object(r["a"])($,x,T,!1,null,"c4e0a74a",null)),z=I.exports;a["a"].use(l["a"]);var B=[{path:"/",name:"Home",component:V,meta:{auth:!1,title:"Planning Poker"}},{path:"/game/:id",name:"Game",component:z,meta:{auth:!1,title:"Planning Poker"}}],A=new l["a"]({mode:"history",routes:B}),J=A;a["a"].config.productionTip=!1,new a["a"]({router:J,store:g,render:function(t){return t(u)}}).$mount("#app")},cd8d:function(t,e,n){"use strict";n("4791")}});
//# sourceMappingURL=app.a644ef0d.js.map