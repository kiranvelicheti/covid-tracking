(this.webpackJsonptracking=this.webpackJsonptracking||[]).push([[0],{56:function(e,a,t){e.exports=t(68)},61:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),o=t.n(i),l=(t(61),t(62),t(43)),c=t(103),s=t(19),m=t(44),u=t(91),d=t(4),g=t(96),b=t(98),h=t(92),p=t(95),E=t(97),f=t(93),v=t(70),k={AZ:"Arizona",AL:"Alabama",AK:"Alaska",AR:"Arkansas",AS:"American Samoa",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MP:"Northern Mariana Islands",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",VI:"Virgin Islands",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},y=function(e){return k[e]},O=t(106),N=t(107),C=t(94),j=t(22),A=t.n(j),w=Object(u.a)({table:{minWidth:"100vh"},expandedPanel:{justifyContent:"center",backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}}}),x=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(h.a),M=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(f.a),I=function(){var e=w(),a=Object(n.useState)([]),t=Object(s.a)(a,2),i=t[0],o=t[1],l=["State","Positive","Positive","Pending","Death"];return Object(n.useEffect)((function(){fetch("https://covidtracking.com/api/states/daily").then((function(e){return e.json()})).then((function(e){o(A.a.groupBy(e,"dateChecked"))}))}),[]),A.a.keysIn(i).map((function(a){var t=i[a];return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(N.a,{id:a,className:e.expandedPanel},A.a.split(a,"T",1)),r.a.createElement(C.a,null,r.a.createElement(p.a,{component:v.a},r.a.createElement(g.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(E.a,null,r.a.createElement(M,null,l.map((function(e){return r.a.createElement(x,{align:"center"},e)})))),r.a.createElement(b.a,null,t.map((function(e){return r.a.createElement(M,{key:e.state},r.a.createElement(x,{align:"center"},y(e.state)),r.a.createElement(x,{align:"center"},e.positive?e.positive:0),r.a.createElement(x,{align:"center"},e.negative?e.negative:0),r.a.createElement(x,{align:"center"},e.pending?e.pending:0),r.a.createElement(x,{align:"center"},e.death?e.death:0))}))))))))}))},S=t(99),D=t(100),W=t(101),P=t(105),T=t(102),H=t(104),V=Object(u.a)({table:{minWidth:"100vh"},expandedPanel:{justifyContent:"center",backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}}}),B=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(h.a),R=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(f.a),F=function(){var e=V(),a=Object(n.useState)([]),t=Object(s.a)(a,2),i=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("https://covidtracking.com/api/states").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(p.a,{component:v.a},r.a.createElement(g.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(E.a,null,r.a.createElement(R,null,r.a.createElement(B,{align:"center"},"State"),r.a.createElement(B,{align:"center"},"Positive"),r.a.createElement(B,{align:"center"},"Negative"),r.a.createElement(B,{align:"center"},"Total"),r.a.createElement(B,{align:"center"},"Death"))),r.a.createElement(b.a,null,i.map((function(e){return r.a.createElement(R,{key:e.state},r.a.createElement(B,{align:"center"},y(e.state)),r.a.createElement(B,{align:"center"},e.positive?e.positive:0),r.a.createElement(B,{align:"center"},e.negative?e.negative:0),r.a.createElement(B,{align:"center"},e.pending?e.total:0),r.a.createElement(B,{align:"center"},e.death?e.death:0))}))))))};function K(e){var a=e.children,t=e.value,n=e.index,i=Object(m.a)(e,["children","value","index"]);return r.a.createElement(S.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),t===n&&r.a.createElement(H.a,{p:3},a))}function z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var G=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,width:"100vh"}}})),L=function(){var e=G(),a=r.a.useState(0),t=Object(s.a)(a,2),n=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:24,sm:12},r.a.createElement(S.a,{variant:"h4",style:{justifyContent:"center"}},"COVID-19 Tracking")),r.a.createElement(D.a,{item:!0,xs:12,sm:6},r.a.createElement(W.a,{position:"static",style:{width:"110vh"}},r.a.createElement(P.a,{value:n,onChange:function(e,a){i(a)},"aria-label":"simple tabs example"},r.a.createElement(T.a,Object.assign({label:"By Date"},z(0))),r.a.createElement(T.a,Object.assign({label:"By State"},z(1))))),r.a.createElement(K,{value:n,index:0},r.a.createElement(D.a,null,r.a.createElement(I,null))),r.a.createElement(K,{value:n,index:1},r.a.createElement(D.a,null,r.a.createElement(F,null))))))},J=Object(l.a)({palette:{primary:{main:"#3A96E8"},text:{disabled:"#FFF"}},shape:{borderRadius:10},typography:{button:{textTransform:"none"},fontFamily:"'Helvetica', 'Arial', sans-serif, 'Roboto'",subtitle2:{fontWeight:"bold"}}});var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{theme:J},r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.c21890d5.chunk.js.map