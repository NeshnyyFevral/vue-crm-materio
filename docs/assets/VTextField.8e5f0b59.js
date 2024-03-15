import{d as q,C as z,z as A,D as L,G as P,r as i,h as d,o as I,I as H,b as n,c as v,n as r,y as E,E as m,k as O,l as k,w as R,Q as U,v as G,x as X,_ as Q,S as Y,p as T,t as V}from"./index.fb95f128.js";import{a as C}from"./VTitle.ff168383.js";import{G as j,a as D}from"./Colors.efb7d88d.js";var S=(l=>(l.OUTLINED="outlined",l.STANDARD="standard",l))(S||{}),B=(l=>(l.TEXT="text",l.PASSWORD="password",l.NUMBER="number",l.SEARCH="search",l))(B||{}),F=(l=>(l.SMALL="small",l.NORMAL="normal",l))(F||{});const J="_root_vvw22_11",K="_hasDisabled_vvw22_18",Z="_isError_vvw22_21",ee="_input_vvw22_21",le="_isMultiline_vvw22_24",se="_isMaxWidth_vvw22_41",ae="_hasFocused_vvw22_73",te="_label_vvw22_85",oe="_hasFilled_vvw22_100",ie="_isPrefix_vvw22_100",re="_isSuffix_vvw22_128",ne="_helpText_vvw22_135",ue="_animationErrorHelpText_vvw22_1",de="_suffix_vvw22_146",ve="_prefix_vvw22_156";var fe={root:J,hasDisabled:K,isError:Z,input:ee,isMultiline:le,isMaxWidth:se,"size-small":"_size-small_vvw22_45","size-normal":"_size-normal_vvw22_48","variant-standard":"_variant-standard_vvw22_52",hasFocused:ae,"variant-outlined":"_variant-outlined_vvw22_80",label:te,hasFilled:oe,isPrefix:ie,isSuffix:re,helpText:ne,animationErrorHelpText:ue,suffix:de,prefix:ve,"anka-ripple":"_anka-ripple_vvw22_1"};const pe=["placeholder","disabled","required","type","readonly"],ye=["placeholder","disabled","required","readonly","rows"],ce=q({__name:"VTextField",props:z({label:{default:""},placeholder:{default:""},helpText:{default:""},rows:{default:"1"},type:{default:B.TEXT},variant:{default:S.OUTLINED},color:{default:j.PRIMARY},size:{default:F.NORMAL},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},maxWidth:{type:Boolean,default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){A(e=>({db832656:W.value,"7836fd16":_.value,"189947d4":w.value}));const p=L(l,"modelValue"),a=l,h=P(),f=i(null),y=i(null),c=i(null),_=i(""),w=i(""),t=i(""),u=i(!1),N=d(()=>!!t.value||!!a.placeholder),$=d(()=>a.error),W=d(()=>$.value?D[700].error:D[700][a.color]),b=d(()=>!!h.prefix),x=d(()=>!!h.suffix),M=async e=>{p.value=e.target.value,await Y(),t.value=p.value},g=()=>{f.value&&f.value.focus()};return I(()=>{y.value&&(_.value=`${y.value.getBoundingClientRect().width+10}px`),c.value&&(w.value=`${c.value.getBoundingClientRect().width+10}px`)}),H(()=>{t.value=p.value}),(e,s)=>(n(),v("div",{class:r([e.$style.root,e.$style[`variant-${a.variant}`],e.$style[`size-${a.size}`],u.value&&e.$style.hasFocused,N.value&&e.$style.hasFilled,e.disabled&&e.$style.hasDisabled,$.value&&e.$style.isError,b.value&&e.$style.isPrefix,x.value&&e.$style.isSuffix,e.multiline&&e.$style.isMultiline,e.maxWidth&&e.$style.isMaxWidth])},[b.value?(n(),v("div",{key:0,ref_key:"prefixRef",ref:y,class:r(e.$style.prefix)},[E(e.$slots,"prefix")],2)):m("",!0),O(C,{class:r(e.$style.label),variant:"caption","font-weight":"400",onClick:g},{default:k(()=>[T(V(a.label),1)]),_:1},8,["class"]),e.multiline?R((n(),v("textarea",{key:2,ref_key:"inputRef",ref:f,"onUpdate:modelValue":s[3]||(s[3]=o=>t.value=o),class:r(e.$style.input),placeholder:e.placeholder,disabled:e.disabled,required:e.required,readonly:e.readonly,rows:e.rows,onInput:M,onFocus:s[4]||(s[4]=o=>u.value=!0),onFocusout:s[5]||(s[5]=o=>u.value=!1)},null,42,ye)),[[G,t.value]]):R((n(),v("input",{key:1,ref_key:"inputRef",ref:f,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),class:r(e.$style.input),placeholder:e.placeholder,disabled:e.disabled,required:e.required,type:e.type,readonly:e.readonly,onInput:M,onFocus:s[1]||(s[1]=o=>u.value=!0),onFocusout:s[2]||(s[2]=o=>u.value=!1)},null,42,pe)),[[U,t.value]]),a.helpText?(n(),X(C,{key:3,variant:"body2",class:r(e.$style.helpText)},{default:k(()=>[T(V(a.helpText),1)]),_:1},8,["class"])):m("",!0),x.value?(n(),v("div",{key:4,ref_key:"suffixRef",ref:c,class:r(e.$style.suffix)},[E(e.$slots,"suffix")],2)):m("",!0)],2))}}),me={$style:fe};var $e=Q(ce,[["__cssModules",me]]);export{S as T,$e as V,F as a,B as b};
