import{d as w,A,E as W,r as t,h as u,o as z,G as L,b as d,c as f,n as i,z as x,D as j,e as M,t as E,w as R,K as N,v as P,_ as g,L as H}from"./index.43a0673b.js";import{B as I,G as O}from"./VButton.8bbfd4f6.js";var B=(a=>(a.OUTLINED="outlined",a.STANDARD="standard",a))(B||{}),T=(a=>(a.TEXT="text",a.PASSWORD="password",a.NUMBER="number",a.SEARCH="search",a))(T||{}),D=(a=>(a.SMALL="small",a.NORMAL="normal",a))(D||{});const k=I,U="_root_1qajr_11",G="_hasDisabled_1qajr_19",X="_isError_1qajr_22",K="_input_1qajr_22",Y="_isMultiline_1qajr_25",J="_isMaxWidth_1qajr_42",Q="_hasFocused_1qajr_74",Z="_label_1qajr_86",ee="_hasFilled_1qajr_106",ae="_isPrefix_1qajr_106",le="_isSuffix_1qajr_134",se="_helpText_1qajr_141",re="_animationErrorHelpText_1qajr_1",oe="_suffix_1qajr_155",te="_prefix_1qajr_165";var ie={root:U,hasDisabled:G,isError:X,input:K,isMultiline:Y,isMaxWidth:J,"size-small":"_size-small_1qajr_46","size-normal":"_size-normal_1qajr_49","variant-standard":"_variant-standard_1qajr_53",hasFocused:Q,"variant-outlined":"_variant-outlined_1qajr_81",label:Z,hasFilled:ee,isPrefix:ae,isSuffix:le,helpText:se,animationErrorHelpText:re,suffix:oe,prefix:te,"anka-ripple":"_anka-ripple_1qajr_1"};const ne=["placeholder","disabled","required","type","readonly"],ue=["placeholder","disabled","required","readonly","rows"],de=w({__name:"VTextField",props:{modelValue:{},label:{default:""},placeholder:{default:""},helpText:{default:""},rows:{default:"1"},type:{default:T.TEXT},variant:{default:B.OUTLINED},color:{default:O.PRIMARY},size:{default:D.NORMAL},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},maxWidth:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:F}){const s=a;A(e=>({"3ff841b8":C.value,"6dc1c986":c.value,c4deb7b2:h.value}));const m=W(),p=t(null),v=t(null),y=t(null),c=t(""),h=t(""),r=t(""),n=t(!1),V=u(()=>!!r.value||!!s.placeholder),_=u(()=>s.error),C=u(()=>_.value?k.error:k[s.color]),$=u(()=>!!m.prefix),q=u(()=>!!m.suffix),b=async e=>{F("update:modelValue",e.target.value),await H(),r.value=s.modelValue},S=()=>{p.value&&p.value.focus()};return z(()=>{v.value&&(c.value=`${v.value.getBoundingClientRect().width+10}px`),y.value&&(h.value=`${y.value.getBoundingClientRect().width+10}px`)}),L(()=>{r.value=s.modelValue}),(e,l)=>(d(),f("div",{class:i([e.$style.root,e.$style[`variant-${s.variant}`],e.$style[`size-${s.size}`],n.value&&e.$style.hasFocused,V.value&&e.$style.hasFilled,e.disabled&&e.$style.hasDisabled,_.value&&e.$style.isError,$.value&&e.$style.isPrefix,q.value&&e.$style.isSuffix,e.multiline&&e.$style.isMultiline,e.maxWidth&&e.$style.isMaxWidth])},[$.value?(d(),f("div",{key:0,ref_key:"prefixRef",ref:v,class:i(e.$style.prefix)},[x(e.$slots,"prefix")],2)):j("",!0),M("p",{class:i(e.$style.label),onClick:S},E(s.label),3),e.multiline?R((d(),f("textarea",{key:2,ref_key:"inputRef",ref:p,"onUpdate:modelValue":l[3]||(l[3]=o=>r.value=o),class:i(e.$style.input),placeholder:e.placeholder,disabled:e.disabled,required:e.required,readonly:e.readonly,rows:e.rows,onInput:b,onFocus:l[4]||(l[4]=o=>n.value=!0),onFocusout:l[5]||(l[5]=o=>n.value=!1)},null,42,ue)),[[P,r.value]]):R((d(),f("input",{key:1,ref_key:"inputRef",ref:p,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o),class:i(e.$style.input),placeholder:e.placeholder,disabled:e.disabled,required:e.required,type:e.type,readonly:e.readonly,onInput:b,onFocus:l[1]||(l[1]=o=>n.value=!0),onFocusout:l[2]||(l[2]=o=>n.value=!1)},null,42,ne)),[[N,r.value]]),M("p",{class:i(e.$style.helpText)},E(s.helpText),3),q.value?(d(),f("div",{key:3,ref_key:"suffixRef",ref:y,class:i(e.$style.suffix)},[x(e.$slots,"suffix")],2)):j("",!0)],2))}}),fe={$style:ie};var ye=g(de,[["__cssModules",fe]]);export{B as T,ye as V,D as a,T as b};
