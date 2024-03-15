import{b as i,c as v,e as b,d as T,z as A,h as w,q as k,s as D,x as y,l as a,n as r,w as F,k as t,A as S,t as U,_ as N,r as M,i as x,m as e,B as z,F as B,E as H,p as C,U as q,R as E}from"./index.fb95f128.js";import{P as j}from"./people.178bcf2f.js";import{a as I,V as m,F as d,u as L,b as G}from"./VFlex.429c6658.js";import{V as s,b as J,a as P}from"./VTitle.ff168383.js";import{G as O,a as g}from"./Colors.efb7d88d.js";import{P as W,C as Z}from"./place.52d2789d.js";import{C as X}from"./people-success.a70e50f2.js";import{V as Y,A as K,a as Q}from"./VAvatar.4201af33.js";import{V as ee}from"./VButton.7526dcbc.js";import{g as te}from"./PathTools.484cb364.js";import{a as R}from"./RandomTools.a04144a8.js";const ae={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},ne=b("path",{fill:"currentColor",d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5 5 5 0 0 0-5-5Z"},null,-1),oe=[ne];function se(u,n){return i(),v("svg",ae,[...oe])}var le={render:se};const ie={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},re=b("path",{fill:"currentColor",d:"M3 11h8V3H3m2 2h4v4H5m8 12h8v-8h-8m2 2h4v4h-4M3 21h8v-8H3m2 2h4v4H5m8-16v8h8V3m-2 6h-4V5h4Z"},null,-1),ce=[re];function de(u,n){return i(),v("svg",ie,[...ce])}var ue={render:de};const _e={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},me=b("path",{fill:"currentColor",d:"M13.07 10.41a5 5 0 0 0 0-5.82A3.39 3.39 0 0 1 15 4a3.5 3.5 0 0 1 0 7 3.39 3.39 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4 7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"},null,-1),fe=[me];function he(u,n){return i(),v("svg",_e,[...fe])}var ve={render:he};const pe="_button_6dqyl_11",ge="_active_6dqyl_23",ye="_link_6dqyl_28",be="_disabled_6dqyl_31",$e="_icon_6dqyl_36";var Ce={button:pe,active:ge,link:ye,disabled:be,icon:$e,"anka-ripple":"_anka-ripple_6dqyl_1"};const we=T({__name:"VTabsItem",props:{name:{},route:{},disabled:{type:Boolean},icon:{default:null},filled:{type:Boolean},color:{default:O.PRIMARY}},emits:["clickByItem"],setup(u,{emit:n}){A(_=>({b1c008fc:f.value}));const o=u,l=n,f=w(()=>g[700][o.color]);return(_,$)=>{const c=k("RouterLink"),h=D("ripple");return i(),y(c,{class:r([_.$style.link,o.disabled&&_.$style.disabled]),"active-class":o.filled&&_.$style.active,to:{name:o.route},onClick:$[0]||($[0]=p=>l("clickByItem",o.name))},{default:a(()=>[F((i(),y(s,{class:r(_.$style.button),width:"100%"},{default:a(()=>[t(s,{mr:5},{default:a(()=>[(i(),y(S(o.icon),{class:r(_.$style.icon)},null,8,["class"]))]),_:1}),b("span",null,U(o.name),1)]),_:1},8,["class"])),[[h]])]),_:1},8,["class","active-class","to"])}}}),Ee={$style:Ce};var Re=N(we,[["__cssModules",Ee]]);const Ve="_root_oo55l_1",Ie="_line_oo55l_9";var Te={root:Ve,line:Ie};const Pe=T({__name:"VTabs",props:{data:{default:()=>[]},active:{default:""},color:{default:O.PRIMARY},underline:{type:Boolean,default:!1},filled:{type:Boolean,default:!1},direction:{default:I.ROW}},setup(u){A(c=>({f148c136:$.value,b474cfd4:f.value,"329a1d2f":_.value}));const n=u,o=M(0),l=c=>{o.value=n.data.map(h=>({...h,name:h.name.toLowerCase()})).findIndex(h=>h.name===c.toLowerCase())},f=w(()=>`${100/n.data.length}%`),_=w(()=>`${o.value*Number.parseInt(f.value,10)}%`),$=w(()=>g[700][n.color]);return x(()=>n.active,()=>{n.active&&l(n.active)},{immediate:!0}),(c,h)=>(i(),y(m,{class:r([c.$style.root,n.underline&&c.$style.underline]),align:e(d).CENTER,direction:n.direction},{default:a(()=>[(i(!0),v(B,null,z(n.data,p=>(i(),y(s,{key:p.id,width:n.direction===e(I).COLUMN?"100%":"150px"},{default:a(()=>[t(Re,{route:p.route,name:p.name,disabled:p.disabled,icon:p.icon,filled:n.filled,color:n.color,onClickByItem:l},null,8,["route","name","disabled","icon","filled","color"])]),_:2},1032,["width"]))),128)),n.underline?(i(),v("div",{key:0,class:r(c.$style.line)},null,2)):H("",!0)]),_:1},8,["class","align","direction"]))}}),Ae={$style:Te};var Ne=N(Pe,[["__cssModules",Ae]]);const ke={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Me=b("path",{fill:"currentColor",d:"M12 19.58c-1.6 0-3.11-.62-4.24-1.75A5.951 5.951 0 0 1 6 13.58c0-1.58.62-3.11 1.76-4.24L12 5.1m5.66 2.83L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31Z"},null,-1),xe=[Me];function Be(u,n){return i(),v("svg",ke,[...xe])}var Le={render:Be};const Oe="_intro_17a2h_1",De="_icon_17a2h_14",Fe="_avatar_17a2h_18",Se="_banner_17a2h_22";var Ue={intro:Oe,icon:De,avatar:Fe,banner:Se};const ze=["src"],V=900,He=T({__name:"UserProfileIntro",setup(u){A(l=>({"2bc11563":n.value}));const n=w(()=>g[500].default),o=L(V);return(l,f)=>(i(),y(s,{class:r(l.$style.intro)},{default:a(()=>[t(s,{height:"250px",width:"100%",class:r(l.$style.banner)},null,8,["class"]),t(s,{ml:30,mt:-30},{default:a(()=>[t(m,{align:e(o)?e(d).CENTER:e(d).END,"justify-content":e(G).SPACE_BETWEEN,"direction-change-trigger":V},{default:a(()=>[t(m,{align:e(o)?e(d).CENTER:e(d).END,"direction-change-trigger":V},{default:a(()=>[t(Y,{size:e(K).EXTRA_LARGE,variant:e(Q).ROUNDED},{default:a(()=>[b("img",{src:e(te)("avatars/1.png"),alt:"avatar",class:r(l.$style.avatar)},null,10,ze)]),_:1},8,["size","variant"]),t(s,{ml:e(o)?0:30},{default:a(()=>[t(s,{mb:10},{default:a(()=>[t(J,{variant:"heading5"},{default:a(()=>[C(" John Doe ")]),_:1})]),_:1}),t(m,{"direction-change-trigger":V,align:e(o)?e(d).START:e(d).CENTER},{default:a(()=>[t(s,{mr:e(o)?0:20},{default:a(()=>[t(m,{align:e(d).CENTER},{default:a(()=>[t(s,{mr:5},{default:a(()=>[t(e(Le),{class:r(l.$style.icon)},null,8,["class"])]),_:1}),t(P,{variant:"subtitle1","font-weight":"600",color:e(g)[400].default},{default:a(()=>[C(" UX Designer ")]),_:1},8,["color"])]),_:1},8,["align"])]),_:1},8,["mr"]),t(s,{mr:e(o)?0:20},{default:a(()=>[t(m,{align:e(d).CENTER},{default:a(()=>[t(s,{mr:5},{default:a(()=>[t(e(W),{class:r(l.$style.icon)},null,8,["class"])]),_:1}),t(P,{variant:"subtitle1","font-weight":"600",color:e(g)[400].default},{default:a(()=>[C(" Vatican City ")]),_:1},8,["color"])]),_:1},8,["align"])]),_:1},8,["mr"]),t(s,{mr:e(o)?0:20},{default:a(()=>[t(m,{align:e(d).CENTER},{default:a(()=>[t(s,{mr:5},{default:a(()=>[t(e(Z),{class:r(l.$style.icon)},null,8,["class"])]),_:1}),t(P,{variant:"subtitle1","font-weight":"600",color:e(g)[400].default},{default:a(()=>[C(" Joined April 2021 ")]),_:1},8,["color"])]),_:1},8,["align"])]),_:1},8,["mr"])]),_:1},8,["align"])]),_:1},8,["ml"])]),_:1},8,["align"]),t(s,{mr:e(o)?0:30,mt:e(o)?20:0,mb:e(o)?20:0},{default:a(()=>[t(ee,null,{iconPrepend:a(()=>[t(e(X))]),default:a(()=>[C(" Connected ")]),_:1})]),_:1},8,["mr","mt","mb"])]),_:1},8,["align","justify-content"])]),_:1})]),_:1},8,["class"]))}}),qe={$style:Ue};var je=N(He,[["__cssModules",qe]]);const Ge=700,ot=T({__name:"UserProfilePage",setup(u){const n=q(),o=M(""),l=L(Ge),f=[{id:R(),name:"Profile",route:E.USER_PROFILE_PROFILE,icon:j,disabled:!1},{id:R(),name:"Teams",route:E.USER_PROFILE_TEAMS,icon:ve,disabled:!1},{id:R(),name:"Projects",route:E.USER_PROFILE_PROJECTS,icon:ue,disabled:!1},{id:R(),name:"Connections",route:E.USER_PROFILE_CONNECTIONS,icon:le,disabled:!1}];return x(()=>n.name,()=>{typeof n.name=="string"&&([,o.value]=n.name.split("/"))},{immediate:!0}),(_,$)=>{const c=k("RouterView");return i(),v(B,null,[t(s,{mb:30},{default:a(()=>[t(je)]),_:1}),t(m,null,{default:a(()=>[t(Ne,{active:o.value,data:f,filled:"",direction:e(l)?e(I).COLUMN:e(I).ROW},null,8,["active","direction"])]),_:1}),t(s,{mt:30},{default:a(()=>[t(c)]),_:1})],64)}}});export{ot as default};
