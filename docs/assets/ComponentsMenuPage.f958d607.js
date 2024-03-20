import{b as m,c as d,e as s,d as x,r as c,x as O,l as t,k as e,m as l,p as f,B as y,t as B,F as M}from"./index.cae6f6fc.js";import{V as p,a as h}from"./VButton.f9b0ada6.js";import{M as u,V as _}from"./VMenu.93f81756.js";import{V as o}from"./VMenuItem.d67274b0.js";import{V as v}from"./VPreviewComponentCard.bf6728b2.js";import{V as T}from"./VPreviewComponentPage.dea4a2c3.js";import{V as L}from"./VSplitter.06bd9af6.js";import"./VTitle.03c2dcf2.js";import"./Colors.efb7d88d.js";import"./ClickOutsideTools.021077b1.js";const I={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},b=s("path",{fill:"currentColor",d:"m4 8 8 5 8-5-8-5-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z"},null,-1),U=[b];function P(V,r){return m(),d("svg",I,[...U])}var $={render:P};const D={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},H=s("path",{fill:"currentColor",d:"M16 10h-2V7h-4v3H8l4 4m7 1h-4a3 3 0 0 1-3 3 3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"},null,-1),N=[H];function S(V,r){return m(),d("svg",D,[...N])}var A={render:S};const F={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},z=s("path",{fill:"currentColor",d:"m2 21 21-9L2 3v7l15 2-15 2v7Z"},null,-1),Z=[z];function G(V,r){return m(),d("svg",F,[...Z])}var R={render:G};const ne=x({__name:"ComponentsMenuPage",setup(V){const r=c(!1),w=c(!1),C=c(!1),g=c({[u.TOP_LEFT]:!1,[u.TOP_RIGHT]:!1,[u.BOTTOM_RIGHT]:!1,[u.BOTTOM_LEFT]:!1}),n=E=>{console.log(E)};return(E,i)=>(m(),O(T,null,{default:t(()=>[e(v,{title:"Basic menu"},{default:t(()=>[s("div",null,[e(_,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=a=>r.value=a)},{body:t(()=>[e(p,{variant:l(h).OUTLINED,"max-width":""},{default:t(()=>[f(" Open menu ")]),_:1},8,["variant"])]),default:t(()=>[e(o,{name:"Menu",onClickElem:n}),e(o,{name:"Account info",onClickElem:n}),e(o,{name:"Logout",onClickElem:n})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Custom menu",desc:`A menu where you can add a named slot (prefix) with\r
       a picture or icon, you can also add any other small text or even style it somehow`},{default:t(()=>[s("div",null,[e(_,{modelValue:w.value,"onUpdate:modelValue":i[1]||(i[1]=a=>w.value=a)},{body:t(()=>[e(p,{variant:l(h).OUTLINED,"max-width":""},{default:t(()=>[f(" Open custom menu ")]),_:1},8,["variant"])]),default:t(()=>[e(o,{name:"Send e-mail",onClickElem:n},{default:t(()=>[e(l(R))]),_:1}),e(o,{name:"Drafts",onClickElem:n},{default:t(()=>[e(l($))]),_:1}),e(o,{name:"Inbox",onClickElem:n},{default:t(()=>[e(l(A))]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Basic menu",desc:"You can also use VSplitter in VMenu to split in logical blocks."},{default:t(()=>[s("div",null,[e(_,{modelValue:C.value,"onUpdate:modelValue":i[2]||(i[2]=a=>C.value=a)},{body:t(()=>[e(p,{variant:l(h).OUTLINED,"max-width":""},{default:t(()=>[f(" Open menu with splitter ")]),_:1},8,["variant"])]),default:t(()=>[e(o,{name:"Menu",onClickElem:n}),e(o,{name:"Account info",onClickElem:n}),e(o,{name:"Logout",onClickElem:n}),e(L),e(o,{name:"Menu \u21162",onClickElem:n}),e(o,{name:"Account info \u21162",onClickElem:n}),e(o,{name:"Logout \u21162",onClickElem:n})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Menu positions",desc:"Use position={'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'} prop with <VMenu> component for different positioned menu."},{default:t(()=>[(m(!0),d(M,null,y(Object.values(l(u)),a=>(m(),d("div",{key:a},[e(_,{modelValue:g.value[a],"onUpdate:modelValue":k=>g.value[a]=k,position:a},{body:t(()=>[e(p,{variant:l(h).OUTLINED,"max-width":""},{default:t(()=>[f(B(a),1)]),_:2},1032,["variant"])]),default:t(()=>[e(o,{name:"Menu",onClickElem:n}),e(o,{name:"Account info",onClickElem:n}),e(o,{name:"Logout",onClickElem:n})]),_:2},1032,["modelValue","onUpdate:modelValue","position"])]))),128))]),_:1})]),_:1}))}});export{ne as default};
