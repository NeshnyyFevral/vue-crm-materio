import{b as m,c as b,e as A,d as v,r as c,D as k,x as g,l as a,k as e,m as t,p as _,n as d,_ as y,T as F,i as C,q as M}from"./index.cae6f6fc.js";import{u as R,V as E,b as p,F as $,a as N}from"./VFlex.e77b52b0.js";import{V as s,b as S,T as h,a as B}from"./VTitle.03c2dcf2.js";import{V as O}from"./VTabs.ebba07f2.js";import{V as I}from"./VIconButton.ec8a644b.js";import{V as q,a as z}from"./VTextField.96da0385.js";import{a as Q}from"./Colors.efb7d88d.js";import{u as j}from"./faq.a5fbb71e.js";import"./RandomTools.a04144a8.js";const H={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",class:"v-icon__svg"},P=A("path",{d:"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z"},null,-1),U=[P];function D(u,l){return m(),b("svg",H,[...U])}var L={render:D};const G="_header_1nayk_1",J="_headerInner_1nayk_8",W="_textfield_1nayk_13";var Z={header:G,headerInner:J,textfield:W};const K=v({__name:"OtherFAQHeader",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(u){const l=c(""),i=k(u,"modelValue");return(n,r)=>(m(),g(s,{class:d(n.$style.header)},{default:a(()=>[e(s,{class:d(n.$style.headerInner)},{default:a(()=>[e(s,{mb:5},{default:a(()=>[e(S,{color:t(Q)[700].primary,variant:"heading4",align:t(h).CENTER},{default:a(()=>[_(" Hello, how can we help? ")]),_:1},8,["color","align"])]),_:1}),e(s,{mb:20},{default:a(()=>[e(B,{align:t(h).CENTER,variant:"subtitle1"},{default:a(()=>[_(" or choose a category to quickly find the help you need ")]),_:1},8,["align"])]),_:1}),e(s,{class:d(n.$style.textfield)},{default:a(()=>[e(q,{modelValue:l.value,"onUpdate:modelValue":[r[0]||(r[0]=o=>l.value=o),r[1]||(r[1]=o=>i.value=o)],size:t(z).NORMAL,placeholder:"Ask a question..."},{prefix:a(()=>[e(I,{disabled:""},{default:a(()=>[e(t(L))]),_:1})]),_:1},8,["modelValue","size"])]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]))}}),X={$style:Z};var Y=y(K,[["__cssModules",X]]),ee={};const V=580,ae=v({__name:"OtherFAQPage",setup(u){const l=F(),i=c(""),n=c(""),r=j(),o=R(V);return C(()=>l.name,()=>{typeof l.name=="string"&&([,i.value]=l.name.split("/"))},{immediate:!0}),(x,f)=>{const T=M("RouterView");return m(),g(s,{class:d(x.$style.root)},{default:a(()=>[e(s,{mb:15},{default:a(()=>[e(Y,{modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=w=>n.value=w)},null,8,["modelValue"])]),_:1}),e(s,null,{default:a(()=>[e(s,null,{default:a(()=>[e(E,{"justify-content":t(p).SPACE_BETWEEN,align:t($).START,"direction-change-trigger":V},{default:a(()=>[e(s,{"min-width":t(o)?"none":"240px",width:t(o)?"100%":"auto",mr:20,mb:t(o)?20:0},{default:a(()=>[e(O,{data:t(r).tabs,direction:t(N).COLUMN,active:i.value,"justify-content":t(p).START,filled:""},null,8,["data","direction","active","justify-content"])]),_:1},8,["min-width","width","mb"]),e(s,null,{default:a(()=>[e(T)]),_:1})]),_:1},8,["justify-content","align"])]),_:1})]),_:1})]),_:1},8,["class"])}}}),te={$style:ee};var me=y(ae,[["__cssModules",te]]);export{me as default};