import{b as d,c as f,e as m,d as g,r as k,o as O,J as B,z as M,n as h,_ as x,x as I,w as D,t as H,y as L,l as o,k as e,m as p,p as V}from"./index.43a0673b.js";import{V as C}from"./VButton.ad275bb4.js";import{i as E}from"./ClickOutside.e41a60df.js";import{V as $}from"./VPreviewComponentCard.fe4c5e5a.js";import{V as S}from"./VPreviewComponentPage.8f20deeb.js";import{e as w}from"./VButton.8bbfd4f6.js";const b={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},U=m("path",{fill:"currentColor",d:"m4 8 8 5 8-5-8-5-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z"},null,-1),z=[U];function N(r,n){return d(),f("svg",b,z)}var A={render:N};const P={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},T=m("path",{fill:"currentColor",d:"M16 10h-2V7h-4v3H8l4 4m7 1h-4a3 3 0 0 1-3 3 3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"},null,-1),Z=[T];function j(r,n){return d(),f("svg",P,Z)}var R={render:j};const J={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Y=m("path",{fill:"currentColor",d:"m2 21 21-9L2 3v7l15 2-15 2v7Z"},null,-1),q=[Y];function F(r,n){return d(),f("svg",J,q)}var G={render:F};const K="_root_n9nei_1",Q="_container_n9nei_8",W="_hasOpened_n9nei_36";var X={root:K,container:Q,hasOpened:W};const ee=g({__name:"VMenu",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:n}){const l=k(null),i=()=>{n("update:modelValue",!1)};return O(()=>{E(l.value,i).addClickOutside()}),B(()=>{E(l.value,i).removeClickOutside()}),(t,v)=>(d(),f("nav",{ref_key:"navRef",ref:l,class:h([t.$style.root,t.modelValue&&t.$style.hasOpened])},[m("div",{class:h(t.$style.container)},[M(t.$slots,"default")],2)],2))}}),ne={$style:X};var y=x(ee,[["__cssModules",ne]]);const te="_root_b329j_11";var oe={root:te,"anka-ripple":"_anka-ripple_b329j_1"};const le=g({__name:"VMenuItem",props:{name:{default:""}},emits:["clickElem"],setup(r,{emit:n}){const l=r,i=()=>{n("clickElem",l.name)};return(t,v)=>{const c=I("ripple");return D((d(),f("button",{class:h(t.$style.root),onClick:i},[M(t.$slots,"prefix"),m("span",{class:h(t.$style.text)},H(l.name),3)],2)),[[c]])}}}),ae={$style:oe};var s=x(le,[["__cssModules",ae]]);const se="_root_3klhz_1";var ie={root:se};const re={};function ce(r,n){return d(),f("div",{class:h(r.$style.root)},null,2)}const ue={$style:ie};var me=x(re,[["render",ce],["__cssModules",ue]]);const ke=g({__name:"ComponentsMenuPage",setup(r){const n=k(!1),l=k(!1),i=k(!1),t=_=>{console.log(_),n.value=!1},v=_=>{console.log(_),l.value=!1},c=_=>{console.log(_),i.value=!1};return(_,a)=>(d(),L(S,null,{default:o(()=>[e($,{title:"Basic menu"},{default:o(()=>[m("div",null,[e(C,{variant:p(w).OUTLINED,"max-width":"",onClick:a[0]||(a[0]=u=>n.value=!n.value)},{default:o(()=>[V(" Open menu ")]),_:1},8,["variant"]),e(y,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u)},{default:o(()=>[e(s,{name:"Menu",onClickElem:t}),e(s,{name:"Account info",onClickElem:t}),e(s,{name:"Logout",onClickElem:t})]),_:1},8,["modelValue"])])]),_:1}),e($,{title:"Custom menu",desc:`A menu where you can add a named slot (prefix) with\r
       a picture or icon, you can also add any other small text or even style it somehow`},{default:o(()=>[m("div",null,[e(C,{variant:p(w).OUTLINED,"max-width":"",onClick:a[2]||(a[2]=u=>l.value=!l.value)},{default:o(()=>[V(" Open custom menu ")]),_:1},8,["variant"]),e(y,{modelValue:l.value,"onUpdate:modelValue":a[3]||(a[3]=u=>l.value=u)},{default:o(()=>[e(s,{name:"Send e-mail",onClickElem:v},{prefix:o(()=>[e(p(G))]),_:1}),e(s,{name:"Drafts",onClickElem:v},{prefix:o(()=>[e(p(A))]),_:1}),e(s,{name:"Inbox",onClickElem:v},{prefix:o(()=>[e(p(R))]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e($,{title:"Basic menu",desc:"You can also use VMenuSplitter in VMenu to split in logical blocks."},{default:o(()=>[m("div",null,[e(C,{variant:p(w).OUTLINED,"max-width":"",onClick:a[4]||(a[4]=u=>i.value=!i.value)},{default:o(()=>[V(" Open menu with splitter ")]),_:1},8,["variant"]),e(y,{modelValue:i.value,"onUpdate:modelValue":a[5]||(a[5]=u=>i.value=u)},{default:o(()=>[e(s,{name:"Menu",onClickElem:c}),e(s,{name:"Account info",onClickElem:c}),e(s,{name:"Logout",onClickElem:c}),e(me),e(s,{name:"Menu \u21162",onClickElem:c}),e(s,{name:"Account info \u21162",onClickElem:c}),e(s,{name:"Logout \u21162",onClickElem:c})]),_:1},8,["modelValue"])])]),_:1})]),_:1}))}});export{ke as default};
