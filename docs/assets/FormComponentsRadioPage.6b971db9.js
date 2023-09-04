import{V as v}from"./VPreviewComponentCard.8144e22e.js";import{V as U}from"./VPreviewComponentPage.534b947f.js";import{d as $,A as M,r as h,h as P,b as n,c as y,e as V,n as c,w,L as B,t as O,_ as A,y as g,l as p,k as r,C,m as o,F as k}from"./index.2541f829.js";import{B as D,G as _}from"./VButton.8bbfd4f6.js";var u=(l=>(l.SMALL="small",l.NORMAL="normal",l.LARGE="large",l))(u||{}),i=(l=>(l.LEFT="left",l.RIGHT="right",l.TOP="top",l.BOTTOM="bottom",l))(i||{});const T=D,G="_root_gh2h4_1",L="_hasChecked_gh2h4_6",F="_hasDisabled_gh2h4_9",N="_container_gh2h4_14",j="_cycle_gh2h4_19",E="_appear_gh2h4_1",H="_input_gh2h4_170",I="_label_gh2h4_175";var Y={root:G,hasChecked:L,hasDisabled:F,container:N,"size-small":"_size-small_gh2h4_19",cycle:j,appear:E,"size-normal":"_size-normal_gh2h4_69","size-large":"_size-large_gh2h4_119",input:H,label:I,"labelPlace-left":"_labelPlace-left_gh2h4_181","labelPlace-top":"_labelPlace-top_gh2h4_187","labelPlace-bottom":"_labelPlace-bottom_gh2h4_193","labelPlace-right":"_labelPlace-right_gh2h4_199"};const q=["name","value","disabled"],J=$({__name:"VRadio",props:{modelValue:{},value:{},name:{},color:{default:_.PRIMARY},size:{default:u.NORMAL},labelPlace:{default:i.RIGHT},label:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:f}){const s=l;M(e=>({"62549fad":d.value}));const m=h(""),d=P(()=>T[s.color]),R=P(()=>s.value===s.modelValue),a=async e=>{f("update:modelValue",e.target.value)};return(e,t)=>(n(),y("label",{class:c([e.$style.root,e.$style[`color-${s.color}`],e.$style[`size-${s.size}`],e.$style[`labelPlace-${s.labelPlace}`],R.value&&e.$style.hasChecked,e.disabled&&e.$style.hasDisabled])},[V("div",{class:c(e.$style.container)},[V("span",{class:c(e.$style.cycle)},null,2),w(V("input",{"onUpdate:modelValue":t[0]||(t[0]=z=>m.value=z),class:c(e.$style.input),name:e.name,type:"radio",value:e.value,disabled:e.disabled,onChange:a},null,42,q),[[B,m.value]]),V("span",{class:c(e.$style.label)},O(e.label),3)],2)],2))}}),K={$style:Y};var b=A(J,[["__cssModules",K]]);const Z=$({__name:"FormComponentsRadioPage",setup(l){const f=h(""),s=h(""),m=h(""),d=h("Checked");return(R,a)=>(n(),g(U,null,{default:p(()=>[r(v,{title:"Radio colors",desc:"se color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VRadio> component for different colored inputs."},{default:p(()=>[(n(!0),y(k,null,C(Object.keys(o(_)),e=>(n(),g(b,{key:e,modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=t=>f.value=t),value:o(_)[e],name:"color",label:o(_)[e],color:o(_)[e]},null,8,["modelValue","value","label","color"]))),128))]),_:1}),r(v,{title:"Radio sizes",desc:"Use size={'small' | 'normal'} prop with <VRadio> component for different sized inputs."},{default:p(()=>[(n(!0),y(k,null,C(Object.keys(o(u)),e=>(n(),g(b,{key:e,modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=t=>s.value=t),value:o(u)[e],name:"size",label:o(u)[e],size:o(u)[e]},null,8,["modelValue","value","label","size"]))),128))]),_:1}),r(v,{title:"Radio label placement",desc:"Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VRadio> component for different label placement."},{default:p(()=>[(n(!0),y(k,null,C(Object.keys(o(i)),e=>(n(),g(b,{key:e,modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=t=>m.value=t),value:o(i)[e],name:"labelPlacement",label:o(i)[e],"label-place":o(i)[e]},null,8,["modelValue","value","label","label-place"]))),128))]),_:1}),r(v,{title:"Radio disabled",desc:"Use disabled=true."},{default:p(()=>[r(b,{modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value=e),value:"Unchecked",name:"size",label:"Unchecked",disabled:""},null,8,["modelValue"]),r(b,{modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value=e),value:"Checked",name:"size",label:"Checked",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}))}});export{Z as default};
