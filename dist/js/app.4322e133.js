(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],d=0,v=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/csulb-tc-website/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0231":function(e,t,n){},"0a9b":function(e,t,n){},"0cfc":function(e,t,n){"use strict";n("35e8")},"0ea5":function(e,t,n){"use strict";n("4840f")},1211:function(e,t,n){"use strict";n("c28f")},1212:function(e,t,n){},"1e6a":function(e,t,n){},"22ef":function(e,t,n){"use strict";n("1212")},"2cec":function(e,t,n){"use strict";n("c57b")},"327e":function(e,t,n){},"35e8":function(e,t,n){},"40e2":function(e,t,n){"use strict";n("9279")},"4840f":function(e,t,n){},"4a2d":function(e,t,n){"use strict";n("d290")},5461:function(e,t,n){"use strict";n("327e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("v-main",[n("transition",{attrs:{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOutUp"}},[n("router-view")],1)],1),n("Footer")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light",fixed:"top"}},[n("NavbarBrand"),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("NavbarLinks")],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"navbar-brand-align",attrs:{to:{name:"Home"}}},[a("b-navbar-brand",[a("img",{attrs:{src:n("cf05"),alt:"",width:"50px"}}),e._v(" CSULB Tzu Ching ")])],1)},c=[],u={},d=u,v=(n("fa47"),n("2877")),m=Object(v["a"])(d,l,c,!1,null,null,null),p=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",e._l(e.links,(function(t){return n("b-nav-item",{key:t},[n("router-link",{attrs:{to:{name:t}}},[e._v(e._s(t))])],1)})),1)],1)},f=[],h={data:function(){return{links:["Home","About","Team","Events","Photos"]}}},b=h,g=(n("a672"),Object(v["a"])(b,_,f,!1,null,null,null)),C=g.exports,y={components:{NavbarBrand:p,NavbarLinks:C}},T=y,k=(n("fb32"),Object(v["a"])(T,s,r,!1,null,"1fc7f41e",null)),w=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"white",id:"footer",padless:""}},[n("v-row",{attrs:{id:"footer_content","no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{flat:"",tile:""}},e._l(e.externalLinks,(function(e){return n("a",{key:e.icon,attrs:{href:e.hyperlink,target:"_blank"}},[n("i",{staticClass:"mx-3 icon-link",class:e.icon})])})),0),n("v-col",{staticClass:"py-4",attrs:{cols:"12"}},[n("p",[e._v(e._s((new Date).getFullYear())+" — CSULB Tzu Ching")]),n("p",[e._v(" Designed by "),n("a",{attrs:{href:"https://www.brianenguyen.com/",target:"_blank"}},[e._v("Brian Nguyen")])])])],1)],1)],1)},E=[],j={data:function(){return{externalLinks:[{icon:"fas fa-envelope fa-2x",hyperlink:"mailto:tcca.csulb@gmail.com"},{icon:"fab fa-facebook fa-2x",hyperlink:"https://www.facebook.com/CSULBTzuChing"},{icon:"fab fa-instagram fa-2x",hyperlink:"https://www.instagram.com/tccaofcsulb/"},{icon:"fab fa-discord fa-2x",hyperlink:"https://discord.gg/fmf3JtTNCc"}]}}},B=j,S=(n("ded2"),n("6544")),P=n.n(S),V=n("b0af"),O=n("62ad"),z=n("553a"),W=n("0fd9"),A=Object(v["a"])(B,x,E,!1,null,null,null),U=A.exports;P()(A,{VCard:V["a"],VCol:O["a"],VFooter:z["a"],VRow:W["a"]});var L={name:"App",components:{Navbar:w,Footer:U},watch:{$route:{immediate:!0,handler:function(e){document.title=e.meta.title||"CSULB Tzu Ching"}}}},$=L,M=n("7496"),H=n("f6c4"),D=Object(v["a"])($,o,i,!1,null,null,null),I=D.exports;P()(D,{VApp:M["a"],VMain:H["a"]});var N=n("8c4f"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Carousel"),n("CardWrapper",[n("Introduction"),n("UpcomingEvents"),n("RecentPhotos"),n("Quote")],1)],1)},q=[],G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-carousel",{attrs:{cycle:"",height:"600",interval:"10000"}},e._l(e.contents,(function(e,t){return n("v-carousel-item",{key:t,attrs:{src:e.src}},[n("CarouselContent",{attrs:{content:e}})],1)})),1)},R=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"carousel_content"},[n("h1",{staticClass:"carousel_header"},[e._v(e._s(e.content.header))]),n("p",{staticClass:"carousel_description"},[e._v(e._s(e.content.description))]),e.content.link?n("div",[n("router-link",{staticClass:"carousel_btn",attrs:{to:e.content.link}},[n("v-btn",[e._v(e._s(e.content.button))])],1)],1):e._e()])},Q=[],Y={props:{content:Object}},Z=Y,K=(n("697c"),n("8336")),X=n("a523"),ee=Object(v["a"])(Z,J,Q,!1,null,null,null),te=ee.exports;P()(ee,{VBtn:K["a"],VContainer:X["a"]});var ne={name:"Carousel",components:{CarouselContent:te},data:function(){return{contents:[{header:"Welcome to CSULB Tzu Ching!",button:"About Us",link:"/about",src:"https://res.cloudinary.com/buraiyen/image/upload/v1636914034/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_j7ylph.jpg"},{header:"Events",description:"View our current / most recent events!",button:"View",link:"/events",src:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_2407/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg"},{header:"Photos",description:"Check out our photos from our events!",button:"View",link:"/photos",src:"https://res.cloudinary.com/buraiyen/image/upload/v1636245907/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_pboqz1.jpg"},{header:"Board Members",description:"Get to know our 2021-2022 officers and advisors!",src:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1531/v1636919257/CSULB_TC_Website/BEN_1689_01_hobk1j.jpg",button:"View",link:"/team"}]}}},ae=ne,oe=n("5e66"),ie=n("3e35"),se=Object(v["a"])(ae,G,R,!1,null,null,null),re=se.exports;P()(se,{VCarousel:oe["a"],VCarouselItem:ie["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"300","data-aos":"zoom-in-down","data-aos-duration":"500"}}),a("PageTitle",[e._v("Welcome to CSULB Tzu Ching!")]),a("p",{staticClass:"intro_description"},[e._v(" CSULB Tzu Ching (also known as the Tzu Chi Collegiate Association of CSULB) are a volunteering organization of diverse students that focuses on medicine, education, charity, and humanistic culture. We serve as the CSULB collegiate chapter for our mother organization: the Tzu Chi Foundation. ")])],1)],1)],1)},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"page_title"},[e._t("default")],2)},de=[],ve={},me=ve,pe=(n("b48a"),Object(v["a"])(me,ue,de,!1,null,null,null)),_e=pe.exports,fe={name:"Introduction",components:{PageTitle:_e}},he=fe,be=(n("b1b4"),n("adda")),ge=Object(v["a"])(he,le,ce,!1,null,"513e52c6",null),Ce=ge.exports;P()(ge,{VCol:O["a"],VContainer:X["a"],VImg:be["a"],VRow:W["a"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"recent_events_section"}},[n("PageHeader",[e._v("Upcoming Events")]),n("PageSubheader",[e._v(e._s(e.month))]),n("v-row",e._l(e.events,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",md:"6",lg:"4"}},[n("UpcomingEventCard",{attrs:{event:e}})],1)})),1),n("center",[n("router-link",{staticClass:"events_btn_hover",attrs:{to:"/events"}},[n("v-btn",{staticClass:"events_btn",attrs:{"x-large":""}},[e._v("View More Events")])],1)],1),n("hr")],1)},Te=[],ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{elevation:"3","data-aos":"fade-up","data-aos-duration":"1000"}},[n("v-card-title",[n("h1",{staticClass:"upcoming_event_name"},[e._v(" "+e._s(e.event.name)+" ")])]),n("v-card-subtitle",[e.event.date&&e.event.time?n("h4",{staticClass:"upcoming_event_datetime"},[e._v(" "+e._s(e.event.date)+" @ "+e._s(e.event.time)+" ")]):n("h4",{staticClass:"upcoming_event_datetime"},[e._v("Date and time TBA")]),n("h4",{staticClass:"upcoming_event_location"},[e._v(" "+e._s(e.event.location)+" ")])]),n("v-card-text",[n("p",{staticClass:"upcoming_event_description"},[e._v(" "+e._s(e.event.description)+" ")])]),n("v-card-actions",[e.event.link?n("v-btn",{staticClass:"upcoming_event_btn",attrs:{color:"blue",text:"",href:e.event.link,target:"_blank"}},[e._v("Sign Up")]):n("v-btn",{attrs:{color:"blue",text:"",target:"_blank",disabled:""}},[e._v("Sign Up Link Coming soon")])],1)],1)},we=[],xe={props:{event:Object}},Ee=xe,je=(n("6dc7"),n("99d9")),Be=Object(v["a"])(Ee,ke,we,!1,null,null,null),Se=Be.exports;P()(Be,{VBtn:K["a"],VCard:V["a"],VCardActions:je["a"],VCardSubtitle:je["b"],VCardText:je["c"],VCardTitle:je["d"]});var Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"page_header"},[e._t("default")],2)},Ve=[],Oe=(n("22ef"),{}),ze=Object(v["a"])(Oe,Pe,Ve,!1,null,null,null),We=ze.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"page_subheader"},[e._t("default")],2)},Ue=[],Le={},$e=Le,Me=(n("7696"),Object(v["a"])($e,Ae,Ue,!1,null,null,null)),He=Me.exports,De={components:{UpcomingEventCard:Se,PageHeader:We,PageSubheader:He},data:function(){return{month:"December 2021",events:[{name:"December General Meeting",date:"",time:"",location:"Zoom",description:"",link:""},{name:"Food Distribution",date:"Saturday, 12/18/21",time:"8:00 AM - 12:00 PM",location:"Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744",description:"Help distribute food for families!",link:""},{name:"Online Dharma Study",date:"Sunday, 12/05/21",time:"5:00 PM - 6:00 PM",location:"Zoom",description:"",link:""}]}}},Ie=De,Ne=(n("0cfc"),Object(v["a"])(Ie,ye,Te,!1,null,"54920f4b",null)),Fe=Ne.exports;P()(Ne,{VBtn:K["a"],VCol:O["a"],VContainer:X["a"],VRow:W["a"]});var qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"quote_content"},[n("h2",{staticClass:"quote_1"},[e._v('"Be grateful for the past')]),n("h2",{staticClass:"quote_2"},[e._v("Look forward to the future")]),n("h2",{staticClass:"quote_3"},[e._v('Take advantage of the present"')]),n("footer",{attrs:{id:"author"}},[e._v("— "),n("cite",[e._v("Dharma Master Cheng Yen")])])])])}],Re=(n("e774"),{}),Je=Object(v["a"])(Re,qe,Ge,!1,null,null,null),Qe=Je.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageHeader",[e._v("Recent Photos")]),n("v-row",{staticClass:"fill-height"},e._l(e.photos,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",md:"6",lg:"4","data-aos":"fade-up","data-aos-duration":"1000"}},[n("PhotoCard",{attrs:{photo:e}})],1)})),1),n("center",[n("router-link",{staticClass:"photos_btn_hover",attrs:{to:"/photos"}},[n("v-btn",{staticClass:"photos_btn",attrs:{"x-large":""}},[e._v("View More Photos")])],1)],1)],1)},Ze=[],Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"750"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-img",e._g(e._b({staticClass:"photo_card",attrs:{src:e.photo,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},"v-img",o,!1),a))]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("center",[n("v-img",e._g(e._b({staticClass:"photo_card_popup",attrs:{src:e.photo,width:"750px"},on:{click:function(t){e.dialog=!1}}},"v-img",e.attrs,!1),e.on))],1)],1)},Xe=[],et={name:"PhotoCard",data:function(){return{dialog:!1}},props:{photo:String}},tt=et,nt=(n("69ce"),n("169a")),at=n("490a"),ot=Object(v["a"])(tt,Ke,Xe,!1,null,null,null),it=ot.exports;P()(ot,{VDialog:nt["a"],VImg:be["a"],VProgressCircular:at["a"],VRow:W["a"]});var st={name:"RecentPhotos",components:{PhotoCard:it,PageHeader:We},data:function(){return{photos:["https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183820/CSULB_TC_Website/IMG_0040_txeaj1.jpg"]}}},rt=st,lt=(n("fe9b"),Object(v["a"])(rt,Ye,Ze,!1,null,null,null)),ct=lt.exports;P()(lt,{VBtn:K["a"],VCol:O["a"],VRow:W["a"]});var ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card_wrapper",attrs:{outlined:"",elevation:"3"}},[n("v-container",{staticClass:"card_wrapper_content"},[e._t("default")],2)],1)},dt=[],vt={},mt=vt,pt=(n("5461"),Object(v["a"])(mt,ut,dt,!1,null,null,null)),_t=pt.exports;P()(pt,{VCard:V["a"],VContainer:X["a"]});var ft={name:"Home",components:{Carousel:re,Introduction:Ce,UpcomingEvents:Fe,Quote:Qe,RecentPhotos:ct,CardWrapper:_t}},ht=ft,bt=(n("d39d"),Object(v["a"])(ht,F,q,!1,null,"3f5a70b2",null)),gt=bt.exports,Ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about"}},[n("CardWrapper",[n("PageTitle",[e._v("About Us")]),n("PageHeader",[e._v("The Tzu Chi Foundation")]),n("p",[e._v(" The Tzu Chi Foundation ("),n("em",[e._v("tzu")]),e._v(' - "compassionate", '),n("em",[e._v("chi")]),e._v(' - "relief") is a global relief organization whose main missions are charity, education, medicine, and humanistic culture. The organization was founded in Taiwan by Dharma Master Cheng in 1966, and it began as a group of 30 housewives who saved money everyday, which would then be donated to those in need. This incentivized others to follow their acts of compassion. The organization expanded throughout the years and became a major organization to provide relief services. The Tzu Chi Foundation today consists of over 10 million members worldwide in over 50 countries. In 2020, Tzu Chi has provided aid to 125 countries, donated over 2 million medical masks, provided food to over 70 thousand households, and benefitted 17,335 students from their tutoring program ')]),n("p",[e._v(" For more information about the Tzu Chi Foundation, "),n("a",{attrs:{href:"https://tzuchi.us/",target:"_blank"}},[e._v("click here to visit Tzu Chi USA's website")])]),n("PageHeader",[e._v("CSULB Tzu Ching")]),n("p",[e._v(" The Tzu Chi Foundation consists of collegiate chapters throughout the world. CSULB Tzu Ching ("),n("em",[e._v("tzu")]),e._v(' - "compassionate", '),n("em",[e._v("ching")]),e._v(' - "youth") was founded in 2014 and consists of many students from diverse backgrounds, majors, ethnicities, and more. Our general meetings are once a month and we provide diverse range of events for members to attend, such as food-packing events, medical outreaches, senior center visits, and socials. Go Beach! Go Tzu Ching! ')]),n("FAQ")],1)],1)},yt=[],Tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageHeader",[e._v("Frequently Asked Questions")]),n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v("1. Do I have to pay dues to become a member?")])]),n("v-expansion-panel-content",[n("p",[e._v(" No! You do not have to pay a single penny to be part of our organization ")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v("2. Do I have to be Buddhist or Asian?")])]),n("v-expansion-panel-content",[e._v(" No! The Tzu Chi Foundation is an international organization that has volunteers from many different backgrounds, races, religions, etc. ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v("3. Do I have to be vegetarian / vegan?")])]),n("v-expansion-panel-content",[n("p",[e._v(" We promote environmental protection by having a vegan / vegetarian diet. This diet eliminates environmental pollution and shows compassion towards animals; however, you do "),n("strong",[e._v("NOT")]),e._v(" have to be vegetarian / vegan to be part of our organization ")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v(' 4. What\'s the difference between "Tzu Chi" and "Tzu Ching"? ')])]),n("v-expansion-panel-content",[n("p",[n("em",[e._v("Tzu Chi")]),e._v(' is our main international-relief organization. In Chinese, it means "Compassionate Relief" ')]),n("p",[n("em",[e._v("Tzu Ching")]),e._v(' is the collegiate-level of Tzu Chi. In Chinese, it means "Compassionate Youth." We are the CSULB collegiate branch of Tzu Chi, hence we are called '),n("em",[e._v("CSULB Tzu Ching")]),e._v(". We are also sometimes called the "),n("em",[e._v("Tzu Chi Collegiate Association of CSULB")]),e._v(". Hopefully those terms aren't confusing!! ")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v(" 5. What is the uniform that you wear? How can I get one? ")])]),n("v-expansion-panel-content",[n("p",[e._v(" Tzu Chi members wear a blue Tzu Chi shirt, white pants, and white socks for their uniform. It signifies blue skies and white clouds. By wearing our uniforms, we are building a presence for those who are receiving our help ")]),n("p",[e._v(" To obtain a uniform, you must reach 20 hours of volunteering across "),n("u",[e._v("4 unique events")]),e._v(". This includes food distributions, medical outreaches, etc. We also have virtual volunteering for you at beanbeanbean.com and freerice.com, as well as sharing us your veggie foods. General meetings, book club gatherings, and Dharma studies also count towards your hours. Social events "),n("strong",[e._v(" DO NOT")]),e._v(" count. Hours carry over between semesters / years ")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[n("h4",{staticClass:"question"},[e._v("6. My question wasn't answered in here!")])]),n("v-expansion-panel-content",[n("p",[e._v(" Feel free to send us an email at "),n("a",{attrs:{href:"mailto:tcca.csulb@gmail.com",target:"_blank"}},[e._v("tcca.csulb@gmail.com")]),e._v("! You can also join our "),n("a",{attrs:{href:"https://discord.gg/fmf3JtTNCc",target:"_blank"}},[e._v("Discord server")]),e._v(" to ask us any questions, or to socialize with us and other general members! ")])])],1)],1)],1)},kt=[],wt={components:{PageHeader:We}},xt=wt,Et=(n("6c16"),n("cd55")),jt=n("49e2"),Bt=n("c865"),St=n("0393"),Pt=Object(v["a"])(xt,Tt,kt,!1,null,"0b128fa6",null),Vt=Pt.exports;P()(Pt,{VExpansionPanel:Et["a"],VExpansionPanelContent:jt["a"],VExpansionPanelHeader:Bt["a"],VExpansionPanels:St["a"]});var Ot={components:{CardWrapper:_t,FAQ:Vt,PageTitle:_e,PageHeader:We}},zt=Ot,Wt=Object(v["a"])(zt,Ct,yt,!1,null,null,null),At=Wt.exports,Ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("PageTitle",[e._v("2021-2022 Team")]),n("div",{staticClass:"section_spacer"},[n("PageHeader",{staticClass:"text-center"},[e._v("Officers")]),n("v-row",e._l(e.officers,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[n("TeamMemberCard",{attrs:{member:e}})],1)})),1)],1),n("div",[n("PageHeader",{staticClass:"text-center"},[e._v("Alumni")]),n("v-row",e._l(e.alumnis,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[n("TeamMemberCard",{attrs:{member:e}})],1)})),1)],1)],1)},Lt=[],$t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:"",elevation:"5","data-aos":"fade-zoom-in"}},[n("div",{staticClass:"card_content"},[n("h2",{staticClass:"member_name"},[e._v(e._s(e.member.name))]),n("p",[e._v(e._s(e.member.role))]),n("p",{staticClass:"member_description"},[e._v(e._s(e.member.description))]),n("a",{attrs:{href:""}},[n("i",{staticClass:"fas fa-envelope fa-2x mr-2"})]),n("a",{attrs:{href:e.member.linkedin}},[n("i",{staticClass:"fab fa-linkedin fa-2x mx-2"})])])])},Mt=[],Ht={props:{member:Object}},Dt=Ht,It=(n("2cec"),Object(v["a"])(Dt,$t,Mt,!1,null,null,null)),Nt=It.exports;P()(It,{VCard:V["a"]});var Ft={components:{TeamMemberCard:Nt,CardWrapper:_t,PageTitle:_e,PageHeader:We},data:function(){return{officers:[{name:"Samanta C.",role:"President",description:"Plans monthly events, leads general meetings, delegates tasks to other officers",email:"",linkedin:""},{name:"Vivienne A.",role:"Executive Vice President",description:"Helps lead general meetings with president, finds a common meeting time with officers",email:"",linkedin:""},{name:"Thu N.",role:"VP of Administration",description:"Takes notes during officer meetings, tracks members' volunteering hours",email:"",linkedin:""},{name:"Jose A.",role:"Treasurer",description:"Handles all financial and budgeting of the organization",email:"",linkedin:""},{name:"Mahya J.",role:"VP of Communications",description:"Sends monthly emails that advertise general meetings and volunteering events",email:"",linkedin:""}],alumnis:[{name:"Brian N.",role:"Webmaster / Photographer / Advisor",description:"Maintains CSULB TC website and advises current officer board",email:"",linkedin:"https://www.linkedin.com/in/brian-edison-nguyen/"},{name:"Lily K.",role:"Advisor",description:"",email:"",linkedin:""},{name:"Weili K.",role:"Advisor",description:"",email:"",linkedin:""}]}}},qt=Ft,Gt=(n("6da8"),Object(v["a"])(qt,Ut,Lt,!1,null,"0ac48d61",null)),Rt=Gt.exports;P()(Gt,{VCol:O["a"],VRow:W["a"]});var Jt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("PageTitle",[e._v("Events")]),n("v-checkbox",{attrs:{label:"Condensed view: "+e.isCondensed.toString()},model:{value:e.isCondensed,callback:function(t){e.isCondensed=t},expression:"isCondensed"}}),e.isCondensed?n("div",[n("EventTimelineCondensed",{attrs:{month:"December 2021",events:e.december}}),n("EventTimelineCondensed",{attrs:{month:"November 2021",events:e.november}})],1):n("div",[n("EventTimeline",{attrs:{month:"December 2021",events:e.december}}),n("EventTimeline",{attrs:{month:"November 2021",events:e.november}})],1)],1)},Qt=[],Yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"month"},[e._v(e._s(e.month))]),n("v-timeline",{staticClass:"timeline_spacing",attrs:{dense:""}},e._l(e.events,(function(e,t){return n("div",{key:t},[n("EventTimelineItem",{attrs:{event:e}})],1)})),0)],1)},Zt=[],Kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",[n("EventCard",{attrs:{event:e.event}})],1)},Xt=[],en=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{"max-width":"400",elevation:"5"}},[e.event.img?n("v-img",{attrs:{height:"200px",src:e.event.img}}):e._e(),n("v-card-title",{staticClass:"event_name"},[e._v(e._s(e.event.name))]),n("v-card-subtitle",[e.event.date&&e.event.time?n("h4",{staticClass:"event_datetime"},[e._v(" "+e._s(e.event.date)+" @ "+e._s(e.event.time)+" ")]):n("h4",[e._v("Date and time TBA")]),n("p",{staticClass:"event_location"},[e._v(e._s(e.event.location))])]),n("v-card-text",{staticClass:"event_description"},[e._v(e._s(e.event.description))]),n("v-card-actions",["TBA"==e.event.link?n("v-btn",{staticClass:"btn_disabled",attrs:{text:"",disabled:""}},[e._v("Link Coming Soon")]):e.event.link?n("a",{staticClass:"signup_link",attrs:{href:e.event.link}},[n("v-btn",{attrs:{color:"blue",text:""}},[e._v("Sign Up")])],1):n("v-btn",{staticClass:"btn_disabled",attrs:{text:"",disabled:""}},[e._v("Event Ended")])],1)],1)},tn=[],nn={props:{event:Object}},an=nn,on=(n("1211"),Object(v["a"])(an,en,tn,!1,null,"1e085156",null)),sn=on.exports;P()(on,{VBtn:K["a"],VCard:V["a"],VCardActions:je["a"],VCardSubtitle:je["b"],VCardText:je["c"],VCardTitle:je["d"],VImg:be["a"]});var rn={props:{event:Object},components:{EventCard:sn}},ln=rn,cn=n("1e06"),un=Object(v["a"])(ln,Kt,Xt,!1,null,null,null),dn=un.exports;P()(un,{VTimelineItem:cn["a"]});var vn={components:{EventTimelineItem:dn},props:{month:String,events:Array}},mn=vn,pn=(n("e1ac"),n("8414")),_n=Object(v["a"])(mn,Yt,Zt,!1,null,"102aaa73",null),fn=_n.exports;P()(_n,{VTimeline:pn["a"]});var hn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"month"},[e._v(e._s(e.month))]),n("v-timeline",{staticClass:"timeline_spacing",attrs:{dense:""}},e._l(e.events,(function(e,t){return n("div",{key:t},[n("EventTimelineItemCondensed",{attrs:{event:e}})],1)})),0)],1)},bn=[],gn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",{attrs:{small:""}},[n("h3",{staticClass:"event_name"},[e._v(e._s(e.event.name))]),e.event.date&&e.event.time?n("h4",{staticClass:"event_datetime"},[e._v(" "+e._s(e.event.date)+" @ "+e._s(e.event.time)+" ")]):n("h4",[e._v("Date and time TBA")]),n("p",{staticClass:"event_location"},[e._v(e._s(e.event.location))]),n("p",{staticClass:"event_description"},[e._v(e._s(e.event.description))]),"TBA"==e.event.link?n("v-btn",{staticClass:"btn_disabled",attrs:{text:"",disabled:""}},[e._v("Link Coming Soon")]):e.event.link?n("a",{staticClass:"signup_link",attrs:{href:e.event.link}},[n("v-btn",{attrs:{color:"blue"}},[e._v("Sign Up")])],1):n("v-btn",{staticClass:"btn_disabled",attrs:{disabled:""}},[e._v("Event Ended")])],1)},Cn=[],yn={props:{event:Object}},Tn=yn,kn=(n("0ea5"),Object(v["a"])(Tn,gn,Cn,!1,null,"fdb9c702",null)),wn=kn.exports;P()(kn,{VBtn:K["a"],VTimelineItem:cn["a"]});var xn={components:{EventTimelineItemCondensed:wn},props:{month:String,events:Array}},En=xn,jn=(n("4a2d"),Object(v["a"])(En,hn,bn,!1,null,null,null)),Bn=jn.exports;P()(jn,{VTimeline:pn["a"]});var Sn={components:{EventTimeline:fn,EventTimelineCondensed:Bn,CardWrapper:_t,PageTitle:_e},data:function(){return{isCondensed:!1,december:[{name:"December General Meeting",date:"Date and time TBA",time:"",location:"Zoom",description:"",link:"TBA"},{name:"Food Distribution",date:"Saturday, 12/18/21",time:"8:00 AM - 12:00 PM",location:"Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744",description:"Help distribute food for families!",img:"https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg",link:"TBA"},{name:"Online Dharma Study",date:"Sunday, 12/05/21",time:"5:00 PM - 6:00 PM",location:"Zoom",description:"",link:"TBA"}],november:[{name:"Bowling Social",date:"Sunday, 11/21/21",time:"12:00 PM - 2:00PM",location:"",description:"",link:""},{name:"Medical Outreach",date:"Saturday, 11/13/21",time:"9:00 AM",location:"Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744",description:"Assist medical professionals in providing medical services to those in need!",img:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg",link:""}]}}},Pn=Sn,Vn=n("ac7c"),On=Object(v["a"])(Pn,Jt,Qt,!1,null,null,null),zn=On.exports;P()(On,{VCheckbox:Vn["a"]});var Wn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("PageTitle",[e._v("Photos")]),n("PageHeader",{staticClass:"text-center"},[e._v(" Get a glimpse at what we do in our organization! ")]),e._l(e.events,(function(e,t){return n("div",{key:t},[n("PhotoGallery",{attrs:{event:e}})],1)}))],2)},An=[],Un=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery_section"},[n("h2",{staticClass:"event_namedate_header",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[e._v(" "+e._s(e.event.name)+", "+e._s(e.event.date)+" ")]),n("v-row",e._l(e.event.photos,(function(e){return n("v-col",{key:e,attrs:{cols:"6",lg:"4","data-aos":"fade-up","data-aos-duration":"1000"}},[n("PhotoCard",{attrs:{photo:e}})],1)})),1)],1)},Ln=[],$n={components:{PhotoCard:it},props:{event:Object}},Mn=$n,Hn=(n("d394"),Object(v["a"])(Mn,Un,Ln,!1,null,null,null)),Dn=Hn.exports;P()(Hn,{VCol:O["a"],VRow:W["a"]});var In={components:{PhotoGallery:Dn,CardWrapper:_t,PageTitle:_e,PageHeader:We},data:function(){return{events:[{name:"Medical Outreach",date:"11/13/21",photos:["https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1638232325/CSULB_TC_Website/outreach_totlvn.jpg"]},{name:"Fall Week of Welcome",date:"9/5/21",photos:["https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1151/v1637269283/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1548_pynqen.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1084/v1637269278/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1632_sdahq2.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1148/v1637269268/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1689_fjaew9.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_892/v1637269276/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1533_uplruz.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1020/v1637269282/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1661_klychz.jpg"]}]}}},Nn=In,Fn=(n("40e2"),Object(v["a"])(Nn,Wn,An,!1,null,null,null)),qn=Fn.exports,Gn=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Rn=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"error"}},[n("h1",[e._v("404 Error")]),n("h3",[e._v("The page you are on doesn't or no longer exists")])])}],Jn={},Qn=Jn,Yn=(n("bc5e"),Object(v["a"])(Qn,Gn,Rn,!1,null,null,null)),Zn=Yn.exports;a["default"].use(N["a"]);var Kn=[{path:"/",name:"Home",component:gt,meta:{title:"CSULB Tzu Ching"}},{path:"/about",name:"About",component:At,meta:{title:"About | CSULB TC"}},{path:"/team",name:"Team",component:Rt,meta:{title:"Team | CSULB TC"}},{path:"/events",name:"Events",component:zn,meta:{title:"Events | CSULB TC"}},{path:"/photos",name:"Photos",component:qn,meta:{title:"Photos | CSULB TC"}},{path:"*",component:Zn,meta:{title:"404"}}],Xn=new N["a"]({mode:"history",base:"/csulb-tc-website/",routes:Kn,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),ea=Xn,ta=n("f309");a["default"].use(ta["a"]);var na=new ta["a"]({}),aa=n("5f5b"),oa=n("b1e0"),ia=(n("77ed"),n("f5af")),sa=n.n(ia);n("e829"),n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(aa["a"]),a["default"].use(oa["a"]),new a["default"]({router:ea,vuetify:na,render:function(e){return e(I)},mounted:function(){sa.a.init()}}).$mount("#app")},"697c":function(e,t,n){"use strict";n("79c6")},"69ce":function(e,t,n){"use strict";n("dc90")},"6c16":function(e,t,n){"use strict";n("0231")},"6da8":function(e,t,n){"use strict";n("f4c3")},"6dc7":function(e,t,n){"use strict";n("df18")},7696:function(e,t,n){"use strict";n("bf53")},"789e":function(e,t,n){},"79c6":function(e,t,n){},"82e5":function(e,t,n){},"835b":function(e,t,n){},9279:function(e,t,n){},"92d6":function(e,t,n){},"9a0e":function(e,t,n){},a672:function(e,t,n){"use strict";n("92d6")},b1b4:function(e,t,n){"use strict";n("f153")},b48a:function(e,t,n){"use strict";n("f75f")},bc5e:function(e,t,n){"use strict";n("789e")},bf53:function(e,t,n){},c28f:function(e,t,n){},c57b:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.6bd7c5f2.png"},d0ac:function(e,t,n){},d290:function(e,t,n){},d394:function(e,t,n){"use strict";n("0a9b")},d39d:function(e,t,n){"use strict";n("1e6a")},dc90:function(e,t,n){},ded2:function(e,t,n){"use strict";n("f10d")},df18:function(e,t,n){},e1ac:function(e,t,n){"use strict";n("835b")},e774:function(e,t,n){"use strict";n("d0ac")},f10d:function(e,t,n){},f153:function(e,t,n){},f4c3:function(e,t,n){},f75f:function(e,t,n){},f9d6:function(e,t,n){},fa47:function(e,t,n){"use strict";n("82e5")},fb32:function(e,t,n){"use strict";n("9a0e")},fe9b:function(e,t,n){"use strict";n("f9d6")}});
//# sourceMappingURL=app.4322e133.js.map