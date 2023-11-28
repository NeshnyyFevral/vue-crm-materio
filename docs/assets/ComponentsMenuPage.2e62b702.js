import{b as u,c as h,e as s,d as x,r as d,x as O,l as t,k as e,u as a,m as c,B as y,t as T,F as B}from"./index.fd1b77bf.js";import{I as M}from"./inbox.62e8ac2f.js";import{V as f,a as p}from"./VButton.fb080fa7.js";import{M as i,a as _,V as n}from"./VMenuItem.d429ac23.js";import{V as v}from"./VPreviewComponentCard.ee6fdf35.js";import{V as I}from"./VPreviewComponentPage.6642e263.js";import{V as L}from"./VSplitter.65458686.js";import"./VTitle.8efa3e19.js";import"./Colors.efb7d88d.js";import"./ClickOutsideTools.021077b1.js";const b={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},U=s("path",{fill:"currentColor",d:"m4 8 8 5 8-5-8-5-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z"},null,-1),P=[U];function D(V,r){return u(),h("svg",b,P)}var N={render:D};const S={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},A=s("path",{fill:"currentColor",d:"m2 21 21-9L2 3v7l15 2-15 2v7Z"},null,-1),F=[A];function H(V,r){return u(),h("svg",S,F)}var $={render:H};const W=x({__name:"ComponentsMenuPage",setup(V){const r=d(!1),C=d(!1),w=d(!1),k=d({[i.TOP_LEFT]:!1,[i.TOP_RIGHT]:!1,[i.BOTTOM_RIGHT]:!1,[i.BOTTOM_LEFT]:!1}),o=E=>{console.log(E)};return(E,m)=>(u(),O(I,null,{default:t(()=>[e(v,{title:"Basic menu"},{default:t(()=>[s("div",null,[e(_,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=l=>r.value=l)},{body:t(()=>[e(f,{variant:a(p).OUTLINED,"max-width":""},{default:t(()=>[c(" Open menu ")]),_:1},8,["variant"])]),default:t(()=>[e(n,{name:"Menu",onClickElem:o}),e(n,{name:"Account info",onClickElem:o}),e(n,{name:"Logout",onClickElem:o})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Custom menu",desc:`A menu where you can add a named slot (prefix) with\r
       a picture or icon, you can also add any other small text or even style it somehow`},{default:t(()=>[s("div",null,[e(_,{modelValue:C.value,"onUpdate:modelValue":m[1]||(m[1]=l=>C.value=l)},{body:t(()=>[e(f,{variant:a(p).OUTLINED,"max-width":""},{default:t(()=>[c(" Open custom menu ")]),_:1},8,["variant"])]),default:t(()=>[e(n,{name:"Send e-mail",onClickElem:o},{default:t(()=>[e(a($))]),_:1}),e(n,{name:"Drafts",onClickElem:o},{default:t(()=>[e(a(N))]),_:1}),e(n,{name:"Inbox",onClickElem:o},{default:t(()=>[e(a(M))]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Basic menu",desc:"You can also use VSplitter in VMenu to split in logical blocks."},{default:t(()=>[s("div",null,[e(_,{modelValue:w.value,"onUpdate:modelValue":m[2]||(m[2]=l=>w.value=l)},{body:t(()=>[e(f,{variant:a(p).OUTLINED,"max-width":""},{default:t(()=>[c(" Open menu with splitter ")]),_:1},8,["variant"])]),default:t(()=>[e(n,{name:"Menu",onClickElem:o}),e(n,{name:"Account info",onClickElem:o}),e(n,{name:"Logout",onClickElem:o}),e(L),e(n,{name:"Menu \u21162",onClickElem:o}),e(n,{name:"Account info \u21162",onClickElem:o}),e(n,{name:"Logout \u21162",onClickElem:o})]),_:1},8,["modelValue"])])]),_:1}),e(v,{title:"Menu positions",desc:"Use position={'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'} prop with <VMenu> component for different positioned menu."},{default:t(()=>[(u(!0),h(B,null,y(Object.keys(a(i)),l=>(u(),h("div",{key:l},[e(_,{modelValue:k.value[a(i)[l]],"onUpdate:modelValue":g=>k.value[a(i)[l]]=g,position:a(i)[l]},{body:t(()=>[e(f,{variant:a(p).OUTLINED,"max-width":""},{default:t(()=>[c(T(a(i)[l]),1)]),_:2},1032,["variant"])]),default:t(()=>[e(n,{name:"Menu",onClickElem:o}),e(n,{name:"Account info",onClickElem:o}),e(n,{name:"Logout",onClickElem:o})]),_:2},1032,["modelValue","onUpdate:modelValue","position"])]))),128))]),_:1})]),_:1}))}});export{W as default};