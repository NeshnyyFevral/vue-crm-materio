import{V}from"./VPreviewComponentCard.fe4c5e5a.js";import{V as M}from"./VPreviewComponentPage.8f20deeb.js";import{d as g,A as U,r as _,h as P,b as n,c as h,e as z,n as m,w,M as B,t as O,_ as A,y,l as c,k as d,C,m as o,F as k}from"./index.43a0673b.js";import{B as D,G as f}from"./VButton.8bbfd4f6.js";var u=(l=>(l.SMALL="small",l.NORMAL="normal",l.LARGE="large",l))(u||{}),i=(l=>(l.LEFT="left",l.RIGHT="right",l.TOP="top",l.BOTTOM="bottom",l))(i||{});const T=D,G="_root_p9z2i_1",F="_hasChecked_p9z2i_6",L="_hasDisabled_p9z2i_9",N="_container_p9z2i_14",j="_cycle_p9z2i_19",E="_input_p9z2i_179",H="_label_p9z2i_184",I="_appear_p9z2i_1";var Y={root:G,hasChecked:F,hasDisabled:L,container:N,"size-small":"_size-small_p9z2i_19",cycle:j,"size-normal":"_size-normal_p9z2i_72","size-large":"_size-large_p9z2i_125",input:E,label:H,"labelPlace-left":"_labelPlace-left_p9z2i_190","labelPlace-top":"_labelPlace-top_p9z2i_196","labelPlace-bottom":"_labelPlace-bottom_p9z2i_202","labelPlace-right":"_labelPlace-right_p9z2i_208",appear:I};const q=["name","value","disabled"],J=g({__name:"VRadio",props:{modelValue:{},value:{},name:{},color:{default:f.PRIMARY},size:{default:u.NORMAL},labelPlace:{default:i.RIGHT},label:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:v}){const s=l;U(e=>({"5b4209bc":r.value}));const p=_(""),r=P(()=>T[s.color]),R=P(()=>s.value===s.modelValue),a=async e=>{v("update:modelValue",e.target.value)};return(e,t)=>(n(),h("label",{class:m([e.$style.root,e.$style[`color-${s.color}`],e.$style[`size-${s.size}`],e.$style[`labelPlace-${s.labelPlace}`],R.value&&e.$style.hasChecked,e.disabled&&e.$style.hasDisabled])},[z("div",{class:m(e.$style.container)},[z("span",{class:m(e.$style.cycle)},null,2),w(z("input",{"onUpdate:modelValue":t[0]||(t[0]=$=>p.value=$),class:m(e.$style.input),name:e.name,type:"radio",value:e.value,disabled:e.disabled,onChange:a},null,42,q),[[B,p.value]]),z("span",{class:m(e.$style.label)},O(e.label),3)],2)],2))}}),K={$style:Y};var b=A(J,[["__cssModules",K]]);const Z=g({__name:"FormComponentsRadioPage",setup(l){const v=_(""),s=_(""),p=_(""),r=_("Checked");return(R,a)=>(n(),y(M,null,{default:c(()=>[d(V,{title:"Radio colors",desc:"se color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VRadio> component for different colored inputs."},{default:c(()=>[(n(!0),h(k,null,C(Object.keys(o(f)),e=>(n(),y(b,{key:e,modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=t=>v.value=t),value:o(f)[e],name:"color",label:o(f)[e],color:o(f)[e]},null,8,["modelValue","value","label","color"]))),128))]),_:1}),d(V,{title:"Radio sizes",desc:"Use size={'small' | 'normal'} prop with <VRadio> component for different sized inputs."},{default:c(()=>[(n(!0),h(k,null,C(Object.keys(o(u)),e=>(n(),y(b,{key:e,modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=t=>s.value=t),value:o(u)[e],name:"size",label:o(u)[e],size:o(u)[e]},null,8,["modelValue","value","label","size"]))),128))]),_:1}),d(V,{title:"Radio label placement",desc:"Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VRadio> component for different label placement."},{default:c(()=>[(n(!0),h(k,null,C(Object.keys(o(i)),e=>(n(),y(b,{key:e,modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=t=>p.value=t),value:o(i)[e],name:"labelPlacement",label:o(i)[e],"label-place":o(i)[e]},null,8,["modelValue","value","label","label-place"]))),128))]),_:1}),d(V,{title:"Radio disabled",desc:"Use disabled=true."},{default:c(()=>[d(b,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e),value:"Unchecked",name:"size",label:"Unchecked",disabled:""},null,8,["modelValue"]),d(b,{modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=e=>r.value=e),value:"Checked",name:"size",label:"Checked",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}))}});export{Z as default};
