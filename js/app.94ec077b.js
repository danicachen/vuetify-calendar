(function(t){function e(e){for(var a,l,c=e[0],i=e[1],s=e[2],u=0,v=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vuetify-calendar/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app",[n("v-main",[n("Calendar")],1)],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v(" 新日程 ")]),n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:t.setToday}},[t._v(" 今日 ")]),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),n("v-toolbar-title",[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{outlined:""}},a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("日")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("周")])],1),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("月")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4天")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"事件（必填）"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"详情"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"开始 (必填)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"结束 (必填)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"颜色(点击打开选色器))"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" 添加 ")])],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogDate,callback:function(e){t.dialogDate=e},expression:"dialogDate"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"事件（必填）"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"详情"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"开始 (必填)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"结束 (必填)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"颜色(点击打开选色器))"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" 添加 ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,"event-margin-bottom":3,now:t.today,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.setDialogDate,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteEvent(t.selectedEvent.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("div",{staticClass:"flex-grow-1"})],1),n("v-card-text",[t.currentlyEditing!==t.selectedEvent.id?n("form",[t._v(" "+t._s(t.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"添加备注"},model:{value:t.selectedEvent.details,callback:function(e){t.$set(t.selectedEvent,"details",e)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" 关闭 ")]),t.currentlyEditing!==t.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.editEvent(t.selectedEvent)}}},[t._v(" 编辑 ")]):n("v-btn",{attrs:{text:"",type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateEvent(t.selectedEvent)}}},[t._v(" 提交 ")])],1)],1)],1)],1)],1)],1)},c=[],i=n("1da1"),s=(n("96cf"),n("99af"),n("d3b7"),n("159b"),n("b0c0"),n("260b")),d=n("e71f"),u=(Object(s["a"])({apiKey:"AIzaSyC2Z5tdrV01rmb6-P8CK77VkgsNT3b2J8o",authDomain:"vue-calendar-3093a.firebaseapp.com",projectId:"vue-calendar-3093a",storageBucket:"vue-calendar-3093a.appspot.com",messagingSenderId:"398043989622",appId:"1:398043989622:web:134198d29b5500a950c157",measurementId:"G-M6HX486FTV"}),Object(d["f"])()),v=u,f={data:function(){return{today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"月",week:"周",day:"天","4day":"4天"},name:null,details:null,start:null,end:null,color:"#1976D2",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],dialog:!1,dialogDate:!1}},mounted:function(){this.getEvents()},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var n=this.monthFormatter(t),a=this.monthFormatter(e),r=n===a?"":a,o=t.year,l=e.year,c=o===l?"":l,i=t.day+this.nth(t.day),s=e.day+this.nth(e.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(i," ").concat(o," - ").concat(r," ").concat(s," ").concat(c);case"day":return"".concat(n," ").concat(i," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},methods:{getEvents:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["e"])(Object(d["b"])(v,"calEvent"));case 2:n=e.sent,a=[],n.forEach((function(t){var e=t.data();e.id=t.id,a.push(e)})),t.events=a;case 6:case"end":return e.stop()}}),e)})))()},setDialogDate:function(t){var e=t.date;this.dialogDate=!0,this.focus=e},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},addEvent:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.name&&t.start&&t.end)){e.next=7;break}return e.next=3,Object(d["a"])(Object(d["b"])(v,"calEvent"),{name:t.name,details:t.details,start:t.start,end:t.end,color:t.color});case 3:t.getEvents(),t.name="",t.details="",t.start="",t.end="",t.color="",e.next=8;break;case 7:alert("请输入必填项");case 8:case"end":return e.stop()}}),e)})))()},editEvent:function(t){this.currentlyEditing=t.id},updateEvent:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=Object(d["d"])(v,"calEvent",e.currentlyEditing),n.next=3,Object(d["g"])(a,{details:t.details});case 3:e.selectedOpen=!1,e.updateEvent=null;case 4:case"end":return n.stop()}}),n)})))()},deleteEvent:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(d["c"])(Object(d["d"])(v,"calEvent",t));case 2:e.selectedOpen=!1,e.getEvents();case 3:case"end":return n.stop()}}),n)})))()},showEvent:function(t){var e=this,n=t.nativeEvent,a=t.event,r=function(){e.selectedEvent=a,e.selectedElement=n.target,setTimeout((function(){return e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(t){var e=t.start,n=t.end;this.start=e,this.end=n},nth:function(t){return t>3&&t<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][t%10]}}},p=f,m=n("2877"),b=n("6544"),h=n.n(b),y=n("8336"),g=n("a4f6"),x=n("b0af"),k=n("99d9"),E=n("62ad"),w=n("a523"),O=n("169a"),_=n("4bd4"),j=n("132d"),V=n("8860"),D=n("da13"),C=n("5d23"),T=n("e449"),S=n("0fd9"),P=n("8dd9"),R=n("8654"),I=n("71d9"),M=n("2a7f"),F=Object(m["a"])(p,l,c,!1,null,null,null),$=F.exports;h()(F,{VBtn:y["a"],VCalendar:g["a"],VCard:x["a"],VCardActions:k["a"],VCardText:k["b"],VCol:E["a"],VContainer:w["a"],VDialog:O["a"],VForm:_["a"],VIcon:j["a"],VList:V["a"],VListItem:D["a"],VListItemTitle:C["a"],VMenu:T["a"],VRow:S["a"],VSheet:P["a"],VTextField:R["a"],VToolbar:I["a"],VToolbarTitle:M["a"]});var L={name:"App",components:{Calendar:$},data:function(){return{}},created:function(){},methods:{}},A=L,J=n("7496"),z=n("f6c4"),B=Object(m["a"])(A,r,o,!1,null,null,null),H=B.exports;h()(B,{VApp:J["a"],VMain:z["a"]});var K=n("f309");a["a"].use(K["a"]);var Z=new K["a"]({}),G=n("3f9d");a["a"].use(G["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:Z,render:function(t){return t(H)}}).$mount("#app")}});
//# sourceMappingURL=app.94ec077b.js.map