import{V as y}from"./VPreviewComponentCard.bf6728b2.js";import{V as z}from"./VPreviewComponentPage.dea4a2c3.js";import{b as o,c as b,e as $,d as P,C as M,z as F,D as B,r as f,h as U,I as O,w as T,J as D,n as i,x as _,m as v,E as N,k as n,l as s,y as R,_ as G,B as k,p as m,t as C,F as j}from"./index.cae6f6fc.js";import{a as I}from"./VTitle.03c2dcf2.js";import{G as x,a as L}from"./Colors.efb7d88d.js";const A={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},E=$("path",{d:"m9 21.035-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436L24 5.782z"},null,-1),S=[E];function H(l,r){return o(),b("svg",A,[...S])}var q={render:H},g=(l=>(l.SMALL="small",l.NORMAL="normal",l))(g||{}),w=(l=>(l.LEFT="left",l.RIGHT="right",l.TOP="top",l.BOTTOM="bottom",l))(w||{});const J="_root_1dyj7_11",Y="_hasDisabled_1dyj7_17",K="_hasFocused_1dyj7_21",Q="_container_1dyj7_21",W="_hasChecked_1dyj7_32",X="_label_1dyj7_36",Z="_input_1dyj7_108",ee="_icon_1dyj7_114";var le={root:J,hasDisabled:Y,hasFocused:K,container:Q,hasChecked:W,"labelPlace-left":"_labelPlace-left_1dyj7_36",label:X,"labelPlace-bottom":"_labelPlace-bottom_1dyj7_42","labelPlace-right":"_labelPlace-right_1dyj7_48","labelPlace-top":"_labelPlace-top_1dyj7_54","size-small":"_size-small_1dyj7_61","size-normal":"_size-normal_1dyj7_84",input:Z,icon:ee,"anka-ripple":"_anka-ripple_1dyj7_1"};const ae=["disabled"],se=P({__name:"VCheckbox",props:M({color:{default:x.PRIMARY},size:{default:g.NORMAL},disabled:{type:Boolean,default:!1},labelPlace:{default:w.RIGHT}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){F(e=>({"0a1619c2":d.value}));const r=B(l,"modelValue"),u=l,t=f(!1),h=f(!1),d=U(()=>L[700][u.color]),a=e=>{r.value=e.target.checked};return O(()=>{t.value=r.value}),(e,c)=>(o(),b("label",{class:i([e.$style.root,e.$style[`labelPlace-${u.labelPlace}`],e.disabled&&e.$style.hasDisabled,h.value&&e.$style.hasFocused])},[$("span",{class:i([e.$style.container,e.$style[`size-${u.size}`],t.value&&e.$style.hasChecked])},[T($("input",{"onUpdate:modelValue":c[0]||(c[0]=V=>t.value=V),class:i(e.$style.input),type:"checkbox",disabled:e.disabled,onChange:a,onFocusin:c[1]||(c[1]=V=>h.value=!0),onFocusout:c[2]||(c[2]=V=>h.value=!1)},null,42,ae),[[D,t.value]]),t.value?(o(),_(v(q),{key:0,class:i(e.$style.icon)},null,8,["class"])):N("",!0)],2),n(I,{variant:"body2",class:i(e.$style.label)},{default:s(()=>[R(e.$slots,"default")]),_:3},8,["class"])],2))}}),oe={$style:le};var p=G(se,[["__cssModules",oe]]);const ce=P({__name:"FormComponentsCheckbox",setup(l){const r=f(!1),u=f(!1),t=f(!1);return(h,d)=>(o(),_(z,null,{default:s(()=>[n(y,{title:"Checkbox colors",desc:"Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VCheckbox> component for different colored inputs."},{default:s(()=>[(o(!0),b(j,null,k(Object.values(v(x)),a=>(o(),_(p,{key:a,modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=e=>r.value=e),color:a},{default:s(()=>[m(C(a),1)]),_:2},1032,["modelValue","color"]))),128))]),_:1}),n(y,{title:"Checkbox sizes",desc:"Use size={'small' | 'normal'} prop with <VCheckbox> component for different sized inputs."},{default:s(()=>[(o(!0),b(j,null,k(Object.values(v(g)),a=>(o(),_(p,{key:a,modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=e=>u.value=e),size:a},{default:s(()=>[m(C(a),1)]),_:2},1032,["modelValue","size"]))),128))]),_:1}),n(y,{title:"Checkbox label placement",desc:"Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VCheckbox> component for different label placement."},{default:s(()=>[(o(!0),b(j,null,k(Object.values(v(w)),a=>(o(),_(p,{key:a,modelValue:t.value,"onUpdate:modelValue":d[2]||(d[2]=e=>t.value=e),"label-place":a},{default:s(()=>[m(C(a),1)]),_:2},1032,["modelValue","label-place"]))),128))]),_:1}),n(y,{title:"Checkbox disabled",desc:"Use disabled=true."},{default:s(()=>[n(p,{"model-value":!1,disabled:""},{default:s(()=>[m(" Unchecked ")]),_:1}),n(p,{"model-value":!0,disabled:""},{default:s(()=>[m(" Checked ")]),_:1})]),_:1})]),_:1}))}});export{ce as default};
