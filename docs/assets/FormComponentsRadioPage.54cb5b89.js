import{V as b}from"./VPreviewComponentCard.bf6728b2.js";import{V as M}from"./VPreviewComponentPage.dea4a2c3.js";import{d as P,C as U,z as w,D as O,r as p,h as g,b as t,c as v,e as f,n as m,w as T,Z as B,k as n,l as d,p as D,t as G,_ as A,x as _,B as y,m as V,F as h}from"./index.cae6f6fc.js";import{a as N}from"./VTitle.03c2dcf2.js";import{G as $,a as F}from"./Colors.efb7d88d.js";var C=(l=>(l.SMALL="small",l.NORMAL="normal",l.LARGE="large",l))(C||{}),k=(l=>(l.LEFT="left",l.RIGHT="right",l.TOP="top",l.BOTTOM="bottom",l))(k||{});const L="_root_1o4y9_1",j="_hasChecked_1o4y9_6",E="_hasDisabled_1o4y9_9",H="_container_1o4y9_14",I="_cycle_1o4y9_19",q="_input_1o4y9_179",Y="_label_1o4y9_184",Z="_appear_1o4y9_1";var J={root:L,hasChecked:j,hasDisabled:E,container:H,"size-small":"_size-small_1o4y9_19",cycle:I,"size-normal":"_size-normal_1o4y9_72","size-large":"_size-large_1o4y9_125",input:q,"labelPlace-left":"_labelPlace-left_1o4y9_184",label:Y,"labelPlace-top":"_labelPlace-top_1o4y9_190","labelPlace-bottom":"_labelPlace-bottom_1o4y9_196","labelPlace-right":"_labelPlace-right_1o4y9_202",appear:Z};const K=["name","value","disabled"],Q=P({__name:"VRadio",props:U({value:{},name:{},color:{default:$.PRIMARY},size:{default:C.NORMAL},labelPlace:{default:k.RIGHT},label:{default:""},disabled:{type:Boolean,default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){w(e=>({"6db9a1e6":r.value}));const u=O(l,"modelValue"),o=l,i=p(""),r=g(()=>F[700][o.color]),R=g(()=>o.value===u.value),a=async e=>{u.value=e.target.value};return(e,s)=>(t(),v("label",{class:m([e.$style.root,e.$style[`color-${o.color}`],e.$style[`size-${o.size}`],e.$style[`labelPlace-${o.labelPlace}`],R.value&&e.$style.hasChecked,e.disabled&&e.$style.hasDisabled])},[f("div",{class:m(e.$style.container)},[f("span",{class:m(e.$style.cycle)},null,2),T(f("input",{"onUpdate:modelValue":s[0]||(s[0]=z=>i.value=z),class:m(e.$style.input),name:e.name,type:"radio",value:e.value,disabled:e.disabled,onChange:a},null,42,K),[[B,i.value]]),n(N,{variant:"subtitle2",class:m(e.$style.label)},{default:d(()=>[D(G(e.label),1)]),_:1},8,["class"])],2)],2))}}),S={$style:J};var c=A(Q,[["__cssModules",S]]);const ae=P({__name:"FormComponentsRadioPage",setup(l){const u=p(""),o=p(""),i=p(""),r=p("Checked");return(R,a)=>(t(),_(M,null,{default:d(()=>[n(b,{title:"Radio colors",desc:"se color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VRadio> component for different colored inputs."},{default:d(()=>[(t(!0),v(h,null,y(Object.values(V($)),e=>(t(),_(c,{key:e,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s),value:e,name:"color",label:e,color:e},null,8,["modelValue","value","label","color"]))),128))]),_:1}),n(b,{title:"Radio sizes",desc:"Use size={'small' | 'normal'} prop with <VRadio> component for different sized inputs."},{default:d(()=>[(t(!0),v(h,null,y(Object.values(V(C)),e=>(t(),_(c,{key:e,modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s),value:e,name:"size",label:e,size:e},null,8,["modelValue","value","label","size"]))),128))]),_:1}),n(b,{title:"Radio label placement",desc:"Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VRadio> component for different label placement."},{default:d(()=>[(t(!0),v(h,null,y(Object.values(V(k)),e=>(t(),_(c,{key:e,modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=s=>i.value=s),value:e,name:"labelPlacement",label:e,"label-place":e},null,8,["modelValue","value","label","label-place"]))),128))]),_:1}),n(b,{title:"Radio disabled",desc:"Use disabled=true."},{default:d(()=>[n(c,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e),value:"Unchecked",name:"size",label:"Unchecked",disabled:""},null,8,["modelValue"]),n(c,{modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=e=>r.value=e),value:"Checked",name:"size",label:"Checked",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}))}});export{ae as default};
