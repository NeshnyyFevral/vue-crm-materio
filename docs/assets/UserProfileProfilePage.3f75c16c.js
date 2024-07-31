import{T as oe,V as l,b as z,a as v}from"./VTitle.03c2dcf2.js";import{M as re,V as I}from"./VCard.020d147b.js";import{V as D,A as J}from"./VAvatar.b84c86fe.js";import{V as ie}from"./VAvatarGroup.209a6cc0.js";import{d as S,b as r,c as _,y as U,e as h,n as f,_ as A,h as O,V as ce,t as y,E as F,F as R,B as x,M as Q,x as C,l as t,W as G,X as ee,Y as de,r as ue,k as e,p as d,m as n,A as me}from"./index.cae6f6fc.js";import{V as T,F as E,b as j}from"./VFlex.e77b52b0.js";import{V as _e}from"./VIconButton.ec8a644b.js";import{V as fe,M as pe}from"./VMenu.93f81756.js";import{V as k}from"./VMenuItem.d67274b0.js";import{V as he}from"./VProgress.8ff7f5e1.js";import{V as Z}from"./VSplitter.06bd9af6.js";import{G as M,a as P}from"./Colors.efb7d88d.js";import{g as N}from"./PathTools.484cb364.js";import{a}from"./RandomTools.a04144a8.js";import{C as ve}from"./comments.3465bc51.js";import{M as ge}from"./message.98c18971.js";import{P as X}from"./people.02e70e4a.js";import{V as Y,B as be,a as H}from"./VButton.f9b0ada6.js";import{V as ye,a as Ce}from"./VChip.3a8c694a.js";import{a as $e,V as B}from"./VTimelineItem.2bedb400.js";import"./VTooltip.25923a5d.js";import"./ClickOutsideTools.021077b1.js";const we="_tableSort_1lyrj_1",Te="_tableSortIcon_1lyrj_15",Se="_asc_1lyrj_29",Ee="_desc_1lyrj_32";var Ve={tableSort:we,tableSortIcon:Te,asc:Se,desc:Ee,"tableSort--asc":"_tableSort--asc_1lyrj_35","tableSort--desc":"_tableSort--desc_1lyrj_38"};const Me={viewBox:"0 0 320 512"},ke=S({__name:"VTableSort",props:{order:{default:null}},emits:["click"],setup(m,{emit:s}){const i=m,$=s,u=()=>{let p;i.order===null?p="asc":i.order==="asc"?p="desc":p=null,$("click",p)};return(p,g)=>(r(),_("button",{class:f([p.$style.tableSort,i.order&&p.$style[`tableSort--${i.order}`]]),onClick:u},[U(p.$slots,"default"),h("i",{class:f(p.$style.tableSortIcon)},[(r(),_("svg",Me,[h("path",{class:f(p.$style.asc),d:"M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,2),h("path",{class:f(p.$style.desc),d:"M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"},null,2)]))],2)],2))}}),Pe={$style:Ve};var Ae=A(ke,[["__cssModules",Pe]]);const Re="_table_1om26_1",xe="_tableMaxWidth_1om26_4",Ie="_tableHead_1om26_7",De="_tableCell_1om26_7",Ne="_tableCaption_1om26_14",Le="_tableBody_1om26_20",Be="_tableRow_1om26_20";var Ue={table:Re,tableMaxWidth:xe,tableHead:Ie,tableCell:De,tableCaption:Ne,tableBody:Le,tableRow:Be,"tableRow--hand":"_tableRow--hand_1om26_26","tableCell--small":"_tableCell--small_1om26_39","tableCell--hidden":"_tableCell--hidden_1om26_42"};const He=["title"],ze=["title"],je=["onClick"],We=S({__name:"VDynamicTable",props:{head:{},data:{},sort:{default:void 0},clickable:{type:Boolean,default:!1},caption:{default:""},largePadding:{type:Boolean},maxWidth:{type:Boolean}},emits:["rowClick"],setup(m,{emit:s}){const i=m,$=s,u=O(()=>i.head.length!==0),p=O(()=>i.data.length!==0);function g(o,b,c){return b[c]<o[c]?-1:b[c]>o[c]?1:0}function V(){return i.sort!==void 0?{name:i.sort.name,sort:i.sort.order}:{name:"",sort:null}}const w=ce(V()),le=O(()=>{const o=JSON.parse(JSON.stringify(i.data));return w.sort===null?i.data:o.sort((b,c)=>w.sort==="desc"?g(b,c,w.name):-g(b,c,w.name))});function ne(o,b){w.name=o,w.sort=b}function se(o){i.clickable&&$("rowClick",o)}function q(o){const b={};switch(o.width&&(b.width=o.width,b.minWidth=o.width,b.maxWidth=o.width),o.minWidth&&(b.minWidth=o.minWidth),o.maxWidth&&(b.maxWidth=o.maxWidth),o.align){case"center":b.textAlign="center";break;case"right":b.textAlign="right";break}return b}return(o,b)=>u.value?(r(),_("table",{key:0,class:f([o.$style.table,o.maxWidth&&o.$style.tableMaxWidth])},[i.caption?(r(),_("caption",{key:0,class:f(o.$style.tableCaption)},y(i.caption),3)):F("",!0),h("thead",{class:f(o.$style.tableHead)},[h("tr",{class:f(o.$style.tableRow)},[(r(!0),_(R,null,x(i.head,c=>(r(),_("th",{key:c.name,class:f([o.$style.tableCell,!i.largePadding&&o.$style["tableCell--small"],!c.hidden&&o.$style["tableCell--hidden"]]),style:Q(q(c))},[c.sort?(r(),C(Ae,{key:0,order:w.name===c.name?w.sort:null,onClick:W=>ne(c.name,W)},{default:t(()=>[U(o.$slots,`${c.name}_head`,G(ee(c)),()=>[h("span",{title:c.label},y(c.label),9,He)])]),_:2},1032,["order","onClick"])):U(o.$slots,`${c.name}_head`,G(de({key:1},c)),()=>[h("span",{title:c.label},y(c.label),9,ze)])],6))),128))],2)],2),p.value?(r(),_("tbody",{key:1,class:f(o.$style.tableBody)},[(r(!0),_(R,null,x(le.value,(c,W)=>(r(),_("tr",{key:W,class:f([o.$style.tableRow,i.clickable&&o.$style["tableRow--hand"]]),onClick:L=>se(c)},[(r(!0),_(R,null,x(i.head,(L,K)=>(r(),_("td",{key:K,class:f([o.$style.tableCell,!i.largePadding&&o.$style["tableCell--small"],i.head[K].hidden&&o.$style["tableCell--hidden"]]),style:Q(q(L))},[U(o.$slots,L.name,G(ee(c)),()=>[h("span",null,y(c[L.name]),1)])],6))),128))],10,je))),128))],2)):F("",!0)],2)):F("",!0)}}),Oe={$style:Ue};var Fe=A(We,[["__cssModules",Oe]]);const Ge="_table_yqvtx_1";var Je={table:Ge};const Ze=["src","alt"],Xe=S({__name:"UserProfileProjectsTable",setup(m){const s=[{label:"NAME",name:"title",sort:!0},{label:"LEADER",name:"leader",sort:!0},{label:"TEAM",name:"team",sort:!0},{label:"STATUS",name:"progress"},{label:"ACTIONS",name:"actions",align:oe.CENTER}],i=ue([{id:a(),avatar:null,title:"Website SEO",date:"10 May 2021",leader:"Eileen",team:[{id:a(),src:"avatars/1.png",alt:""},{id:a(),src:"avatars/7.png",alt:""},{id:a(),src:"avatars/3.png",alt:""},{id:a(),src:"avatars/4.png",alt:""}],progress:"38",actions:!1},{id:a(),avatar:"social.png",title:"Social Banners",date:"03 Jan 2021",leader:"Owen",team:[{id:a(),src:"avatars/2.png",alt:""},{id:a(),src:"avatars/8.png",alt:""}],progress:"45",actions:!1},{id:a(),avatar:"sketch.png",title:"Logo Designs",date:"12 Aug 2021",leader:"Keith",team:[{id:a(),src:"avatars/6.png",alt:""},{id:a(),src:"avatars/5.png",alt:""},{id:a(),src:"avatars/1.png",alt:""},{id:a(),src:"avatars/7.png",alt:""}],progress:"92",actions:!1},{id:a(),avatar:"sketch.png",title:"IOS App Design",date:"19 Apr 2021",leader:"Merline",team:[{id:a(),src:"avatars/3.png",alt:""},{id:a(),src:"avatars/4.png",alt:""},{id:a(),src:"avatars/2.png",alt:""},{id:a(),src:"avatars/8.png",alt:""}],progress:"56",actions:!1},{id:a(),avatar:"figma.png",title:"Figma Dashboards",date:"08 Apr 2021",leader:"Harmonia",team:[{id:a(),src:"avatars/6.png",alt:""},{id:a(),src:"avatars/5.png",alt:""},{id:a(),src:"avatars/1.png",alt:""}],progress:"25",actions:!1},{id:a(),avatar:"html.png",title:"Crypto Admin",date:"29 Sept 2021",leader:"Allyson",team:[{id:a(),src:"avatars/7.png",alt:""},{id:a(),src:"avatars/3.png",alt:""},{id:a(),src:"avatars/4.png",alt:""},{id:a(),src:"avatars/2.png",alt:""}],progress:"36",actions:!1},{id:a(),avatar:"react.png",title:"Crypto Admin",date:"20 Mar 2021",leader:"Georgie",team:[{id:a(),src:"avatars/8.png",alt:""},{id:a(),src:"avatars/6.png",alt:""},{id:a(),src:"avatars/5.png",alt:""},{id:a(),src:"avatars/1.png",alt:""}],progress:"36",actions:!1}]),$=(u,p)=>{const g=i.value.find(V=>V.id===u);g&&(g.actions=p)};return(u,p)=>(r(),C(I,{"overflow-x":""},{default:t(()=>[e(l,{mb:25},{default:t(()=>[e(l,{mb:5},{default:t(()=>[e(z,{variant:"heading5"},{default:t(()=>[d(" Profile table ")]),_:1})]),_:1}),e(v,{variant:"caption"},{default:t(()=>[d(" Description ")]),_:1}),e(v,{variant:"caption"},{default:t(()=>[d(" This table contains information about teams, including the team's name, leader, team members, and status. ")]),_:1})]),_:1}),e(Fe,{data:i.value,"max-width":"",class:f(u.$style.table),head:s},{title:t(({title:g,avatar:V,date:w})=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{mr:10},{default:t(()=>[V?(r(),C(D,{key:0,size:n(J).SMALL,light:""},{default:t(()=>[h("img",{src:n(N)(`images/user-profile/teams/${V}`),alt:`avatar-${V}`},null,8,Ze)]),_:2},1032,["size"])):(r(),C(D,{key:1,letter:g,size:n(J).SMALL,color:n(M).SUCCESS,light:""},null,8,["letter","size","color"]))]),_:2},1024),e(l,null,{default:t(()=>[e(v,{variant:"body1","font-weight":"600"},{default:t(()=>[d(y(g),1)]),_:2},1024),e(v,{color:n(P)[400].default,variant:"caption"},{default:t(()=>[d(y(w),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1032,["align"])]),leader:t(({leader:g})=>[e(v,{variant:"body1",color:n(P)[400].default},{default:t(()=>[d(y(g),1)]),_:2},1032,["color"])]),team:t(({team:g})=>[e(l,{height:"30px",width:`${18*4}px`,mt:-10},{default:t(()=>[e(ie,{data:g},null,8,["data"])]),_:2},1024)]),progress:t(({progress:g})=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{width:"100%",mr:2},{default:t(()=>[e(he,{"border-radius":"5",percentage:g,width:"75%"},null,8,["percentage"])]),_:2},1024),e(v,{variant:"body2",color:n(P)[400].default},{default:t(()=>[d(y(g)+"% ",1)]),_:2},1032,["color"])]),_:2},1032,["align"])]),actions:t(({id:g,actions:V})=>[e(fe,{"model-value":V,position:n(pe).TOP_RIGHT,"onUpdate:modelValue":w=>$(g,w)},{body:t(()=>[e(_e,null,{default:t(()=>[e(n(re))]),_:1})]),default:t(()=>[e(k,{name:"Details"}),e(k,{name:"Archive"}),e(Z),e(k,null,{default:t(()=>[e(v,{variant:"subtitle1",color:n(P)[700].error},{default:t(()=>[d(" Delete ")]),_:1},8,["color"])]),_:1})]),_:2},1032,["model-value","position","onUpdate:modelValue"])]),_:1},8,["data","class"])]),_:1}))}}),Ye={$style:Je};var qe=A(Xe,[["__cssModules",Ye]]);const Ke={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Qe=h("path",{fill:"currentColor",d:"m12.36 6 .4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6"},null,-1),et=[Qe];function tt(m,s){return r(),_("svg",Ke,[...et])}var at={render:tt};const lt={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},nt=h("path",{fill:"currentColor",d:"m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7 1.62-4.33L19.12 17h-3.24Z"},null,-1),st=[nt];function ot(m,s){return r(),_("svg",lt,[...st])}var rt={render:ot};const it={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},ct=h("path",{fill:"currentColor",d:"m12 15.39-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24Z"},null,-1),dt=[ct];function ut(m,s){return r(),_("svg",it,[...dt])}var mt={render:ut};const _t={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},ft=h("path",{fill:"currentColor",d:"M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"},null,-1),pt=[ft];function ht(m,s){return r(),_("svg",_t,[...pt])}var te={render:ht};const vt={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},gt=h("path",{fill:"currentColor",d:"M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4V19Z"},null,-1),bt=[gt];function yt(m,s){return r(),_("svg",vt,[...bt])}var Ct={render:yt};const $t="_listItem_1ih2z_1";var wt={listItem:$t};const Tt=S({__name:"UserProfileList",props:{data:{}},setup(m){const s=m;return(i,$)=>(r(!0),_(R,null,x(s.data,u=>(r(),C(l,{key:u.id,mb:25,class:f(i.$style.listItem)},{default:t(()=>[e(l,{mb:15},{default:t(()=>[e(v,{"font-weight":"600",variant:"caption"},{default:t(()=>[d(y(u.title),1)]),_:2},1024)]),_:2},1024),(r(!0),_(R,null,x(u.fields,p=>(r(),C(l,{key:p.id,mb:10},{default:t(()=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{mr:7},{default:t(()=>[(r(),C(me(p.icon)))]),_:2},1024),e(l,{mr:7},{default:t(()=>[e(v,{variant:"subtitle1","font-weight":"600"},{default:t(()=>[d(y(p.name)+": ",1)]),_:2},1024)]),_:2},1024),e(l,null,{default:t(()=>[e(v,{variant:"subtitle1"},{default:t(()=>[d(y(p.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["align"])]),_:2},1024))),128))]),_:2},1032,["class"]))),128))}}),St={$style:wt};var ae=A(Tt,[["__cssModules",St]]);const Et=S({__name:"UserProfileAbout",setup(m){const s=[{id:a(),title:"ABOUT",fields:[{id:a(),icon:X,name:"Full Name",value:"John Doe"},{id:a(),icon:te,name:"Status",value:"Active"},{id:a(),icon:mt,name:"Role",value:"Developer"},{id:a(),icon:at,name:"Country",value:"USA"},{id:a(),icon:rt,name:"Language",value:"English"}]},{id:a(),title:"CONTACTS",fields:[{id:a(),icon:Ct,name:"Contact",value:"(123) 456-7890"},{id:a(),icon:ve,name:"Skype",value:"John.doe"},{id:a(),icon:ge,name:"E-mail",value:"John.doe@example.com"}]},{id:a(),title:"TEAMS",fields:[{id:a(),icon:null,name:"Backend Developer",value:"(126 Members)"},{id:a(),icon:null,name:"React Developer",value:"(98 Members)"}]}];return(i,$)=>(r(),C(I,{"overflow-x":""},{default:t(()=>[e(ae,{data:s})]),_:1}))}}),Vt="_icon_1x7ow_1";var Mt={icon:Vt};const kt=["src"],Pt=S({__name:"UserProfileConnectionCompact",props:{avatar:{},name:{},connectionsCount:{},connected:{type:Boolean}},setup(m){const s=m;return(i,$)=>(r(),C(l,{mb:10},{default:t(()=>[e(T,{align:n(E).CENTER,"justify-content":n(j).SPACE_BETWEEN},{default:t(()=>[e(l,null,{default:t(()=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{mr:10},{default:t(()=>[e(D,null,{default:t(()=>[h("img",{src:n(N)(s.avatar),alt:"avatar"},null,8,kt)]),_:1})]),_:1}),e(l,{mt:5},{default:t(()=>[e(l,{mb:5},{default:t(()=>[e(v,{variant:"body2","font-weight":"600"},{default:t(()=>[d(y(s.name),1)]),_:1})]),_:1}),e(l,{mb:5},{default:t(()=>[e(v,{variant:"caption"},{default:t(()=>[d(y(s.connectionsCount)+" Connections ",1)]),_:1})]),_:1})]),_:1})]),_:1},8,["align"])]),_:1}),e(l,null,{default:t(()=>[e(Y,{size:n(be).SMALL,variant:s.connected?n(H).CONTAINED:n(H).OUTLINED},{default:t(()=>[e(n(X),{class:f(i.$style.icon)},null,8,["class"])]),_:1},8,["size","variant"])]),_:1})]),_:1},8,["align","justify-content"])]),_:1}))}}),At={$style:Mt};var Rt=A(Pt,[["__cssModules",At]]);const xt=S({__name:"UserProfileConnections",setup(m){const s=[{id:a(),avatar:"avatars/7.png",name:"Cecilia Payne",connectionsCount:"45",connected:!1},{id:a(),avatar:"avatars/3.png",name:"Curtis Fletcher",connectionsCount:"1.32k",connected:!0},{id:a(),avatar:"avatars/4.png",name:"Alice Stone",connectionsCount:"125",connected:!0},{id:a(),avatar:"avatars/2.png",name:"Darrell Barnes",connectionsCount:"456",connected:!1},{id:a(),avatar:"avatars/5.png",name:"Eugenia Moore",connectionsCount:"1.2k",connected:!1}];return(i,$)=>(r(),C(I,null,{menu:t(()=>[e(k,{name:"Share connections"}),e(k,{name:"Suggest edits"}),e(Z),e(k,{name:"Report bug"})]),default:t(()=>[e(l,{mb:10},{default:t(()=>[e(z,{variant:"heading6"},{default:t(()=>[d(" Connections ")]),_:1})]),_:1}),e(l,{mb:20},{default:t(()=>[(r(),_(R,null,x(s,u=>e(Rt,{key:u.id,connected:u.connected,name:u.name,avatar:u.avatar,"connections-count":u.connectionsCount},null,8,["connected","name","avatar","connections-count"])),64))]),_:1}),e(l,null,{default:t(()=>[e(T,{"justify-content":n(j).CENTER},{default:t(()=>[e(Y,{variant:n(H).TEXT},{default:t(()=>[d(" View all connections ")]),_:1},8,["variant"])]),_:1},8,["justify-content"])]),_:1})]),_:1}))}}),It={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Dt=h("path",{fill:"currentColor",d:"M3 21h8v-8H3m2 2h4v4H5m-2-8h8V3H3m2 2h4v4H5m8-6v8h8V3m-2 6h-4V5h4m-1 11h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"},null,-1),Nt=[Dt];function Lt(m,s){return r(),_("svg",It,[...Nt])}var Bt={render:Lt};const Ut=S({__name:"UserProfileOverview",setup(m){const s=[{id:a(),title:"OVERVIEW",fields:[{id:a(),icon:te,name:"Task Compiled",value:"13.5k"},{id:a(),icon:X,name:"Connections",value:"897"},{id:a(),icon:Bt,name:"Projects Compiled",value:"146"}]}];return(i,$)=>(r(),C(I,null,{default:t(()=>[e(ae,{data:s})]),_:1}))}}),Ht="_icon_1x7ow_1";var zt={icon:Ht};const jt=["src"],Wt=S({__name:"UserProfileTeamsCompact",props:{avatar:{},name:{},membersCount:{},chipTitle:{},chipColor:{}},setup(m){const s=m;return(i,$)=>(r(),C(l,{mb:10},{default:t(()=>[e(T,{align:n(E).CENTER,"justify-content":n(j).SPACE_BETWEEN},{default:t(()=>[e(l,null,{default:t(()=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{mr:10},{default:t(()=>[e(D,null,{default:t(()=>[h("img",{src:n(N)(`images/user-profile/teams/${s.avatar}`),alt:"avatar"},null,8,jt)]),_:1})]),_:1}),e(l,{mt:5},{default:t(()=>[e(l,{mb:5},{default:t(()=>[e(v,{variant:"body2","font-weight":"600"},{default:t(()=>[d(y(s.name),1)]),_:1})]),_:1}),e(l,{mb:5},{default:t(()=>[e(v,{variant:"caption"},{default:t(()=>[d(y(s.membersCount)+" Connections ",1)]),_:1})]),_:1})]),_:1})]),_:1},8,["align"])]),_:1}),e(l,null,{default:t(()=>[e(ye,{variant:n(Ce).LIGHT,color:s.chipColor},{default:t(()=>[d(y(s.chipTitle),1)]),_:1},8,["variant","color"])]),_:1})]),_:1},8,["align","justify-content"])]),_:1}))}}),Ot={$style:zt};var Ft=A(Wt,[["__cssModules",Ot]]);const Gt=S({__name:"UserProfileTeams",setup(m){const s=[{id:a(),avatar:"react.png",name:"React Developers",membersCount:"72",chipTitle:"Developer",chipColor:M.ERROR},{id:a(),avatar:"support.png",name:"Support Team",membersCount:"122",chipTitle:"Support",chipColor:M.PRIMARY},{id:a(),avatar:"figma.png",name:"UI Designer",membersCount:"7",chipTitle:"Designer",chipColor:M.INFO},{id:a(),avatar:"vue.png",name:"Vue.js Developers",membersCount:"289",chipTitle:"Developer",chipColor:M.ERROR},{id:a(),avatar:"twitter.png",name:"Digital Marketing",membersCount:"72",chipTitle:"Marketing",chipColor:M.DEFAULT}];return(i,$)=>(r(),C(I,null,{menu:t(()=>[e(k,{name:"Share teams"}),e(k,{name:"Suggest edits"}),e(Z),e(k,{name:"Report bug"})]),default:t(()=>[e(l,{mb:10},{default:t(()=>[e(z,{variant:"heading6"},{default:t(()=>[d(" Teams ")]),_:1})]),_:1}),e(l,{mb:20},{default:t(()=>[(r(),_(R,null,x(s,u=>e(Ft,{key:u.id,"members-count":u.membersCount,"chip-title":u.chipTitle,"chip-color":u.chipColor,name:u.name,avatar:u.avatar},null,8,["members-count","chip-title","chip-color","name","avatar"])),64))]),_:1}),e(l,null,{default:t(()=>[e(T,{"justify-content":n(j).CENTER},{default:t(()=>[e(Y,{variant:n(H).TEXT},{default:t(()=>[d(" View all teams ")]),_:1},8,["variant"])]),_:1},8,["justify-content"])]),_:1})]),_:1}))}}),Jt={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Zt=h("path",{fill:"currentColor",d:"m3 14 .5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0 .53.52.7 1.26.52 1.91l2.57 2.57.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2l.07-.5-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5 5 16a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2Z"},null,-1),Xt=[Zt];function Yt(m,s){return r(),_("svg",Jt,[...Xt])}var qt={render:Yt};const Kt="_pdf_1j9al_1";var Qt={pdf:Kt};const ea=["src"],ta=["src"],aa=S({__name:"UserProfileTimeline",setup(m){return(s,i)=>(r(),C(I,null,{default:t(()=>[e(l,{mb:30},{default:t(()=>[e(T,{align:n(E).CENTER},{default:t(()=>[e(l,{mr:5},{default:t(()=>[e(n(qt))]),_:1}),e(z,{variant:"heading6"},{default:t(()=>[d(" Activity Timeline ")]),_:1})]),_:1},8,["align"])]),_:1}),e(l,{mb:30},{default:t(()=>[e($e,null,{default:t(()=>[e(B,{color:n(M).ERROR,title:"Get on the flight",date:"Wednesday"},{default:t(()=>[e(v,{variant:"body2",color:n(P)[400].default},{default:t(()=>[d(" Invoices have been paid to the company. ")]),_:1},8,["color"]),e(T,{align:n(E).CENTER},{default:t(()=>[h("img",{src:n(N)("images/crm/pdf.png"),alt:"pdf-file",class:f(s.$style.pdf)},null,10,ea),e(l,{ml:5},{default:t(()=>[e(v,{variant:"caption","font-weight":"600",color:n(P)[400].default},{default:t(()=>[d(" bookingCard.pdf ")]),_:1},8,["color"])]),_:1})]),_:1},8,["align"])]),_:1},8,["color"]),e(B,{title:"Create a new project for client \u{1F60E}",date:"April, 18"},{default:t(()=>[e(v,{variant:"body2",color:n(P)[400].default},{default:t(()=>[d(" Invoices have been paid to the company. ")]),_:1},8,["color"]),e(T,{align:n(E).CENTER},{default:t(()=>[e(D,{size:n(J).SMALL},{default:t(()=>[h("img",{src:n(N)("avatars/1.png"),alt:"avatar"},null,8,ta)]),_:1},8,["size"]),e(l,{ml:5},{default:t(()=>[e(v,{variant:"body2","font-weight":"600"},{default:t(()=>[d(" John Doe (Client) ")]),_:1})]),_:1})]),_:1},8,["align"])]),_:1}),e(B,{color:n(M).INFO,title:"Order #37745 from September",date:"January, 10"},{default:t(()=>[e(v,{variant:"body2",color:n(P)[400].default},{default:t(()=>[d(" Invoices have been paid to the company. ")]),_:1},8,["color"])]),_:1},8,["color"]),e(B,{color:n(M).WARNING,title:"Public Meeting",date:"September, 30"},null,8,["color"])]),_:1})]),_:1})]),_:1}))}}),la={$style:Qt};var na=A(aa,[["__cssModules",la]]);const sa="_flex_1mllx_1",oa="_about_1mllx_7",ra="_cards_1mllx_16",ia="_connections_1mllx_26",ca="_teams_1mllx_36";var da={flex:sa,about:oa,cards:ra,connections:ia,teams:ca};const ua=S({__name:"UserProfileProfilePage",setup(m){return(s,i)=>(r(),_("div",{class:f(s.$style.flex)},[e(l,{mt:20,class:f(s.$style.about)},{default:t(()=>[e(l,{mb:20},{default:t(()=>[e(Et)]),_:1}),e(l,null,{default:t(()=>[e(Ut)]),_:1})]),_:1},8,["class"]),e(l,{ml:20,mt:20,class:f(s.$style.cards)},{default:t(()=>[e(l,{mb:20},{default:t(()=>[e(na)]),_:1}),e(l,{mb:20},{default:t(()=>[h("div",{class:f(s.$style.flex)},[e(l,{class:f(s.$style.connections)},{default:t(()=>[e(xt)]),_:1},8,["class"]),e(l,{ml:20,class:f(s.$style.teams)},{default:t(()=>[e(Gt)]),_:1},8,["class"])],2)]),_:1}),e(l,null,{default:t(()=>[e(qe)]),_:1})]),_:1},8,["class"])],2))}}),ma={$style:da};var Da=A(ua,[["__cssModules",ma]]);export{Da as default};