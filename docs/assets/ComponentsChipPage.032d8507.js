import{b as s,c as i,e as P,d as M,A as S,E as j,h as m,n as y,z as g,D as B,_ as w,y as p,l as a,k as l,C as h,m as t,p as n,t as C,F as f}from"./index.973ba0df.js";import{G as r}from"./VButton.8bbfd4f6.js";import{a as _,b,c as O,C as D,d as L}from"./VChip.ae131130.js";import{V as u}from"./VPreviewComponentCard.70830ab3.js";import{V as F}from"./VPreviewComponentPage.d26e1b6f.js";const N={class:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-deleteIcon MuiChip-deleteIconMedium MuiChip-deleteIconColorDefault MuiChip-deleteIconFilledColorDefault css-vubbuv","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CancelIcon"},U=P("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"},null,-1),x=[U];function E(v,d){return s(),i("svg",N,x)}var z={render:E};const G="_root_cisbe_11",R="_clickable_cisbe_27",H="_rectangle_cisbe_43",T="_prepend_cisbe_64",Y="_append_cisbe_65";var q={root:G,clickable:R,"variant-basic":"_variant-basic_cisbe_30","variant-outlined":"_variant-outlined_cisbe_34","variant-light":"_variant-light_cisbe_38",rectangle:H,"size-default":"_size-default_cisbe_57","size-small":"_size-small_cisbe_60",prepend:T,append:Y,"anka-ripple":"_anka-ripple_cisbe_1"};const J=M({__name:"VChip",props:{variant:{default:_.BASIC},color:{default:r.PRIMARY},size:{default:b.DEFAULT},clickable:{type:Boolean},rectangle:{type:Boolean}},setup(v){const d=v;S(o=>({"85ba937e":$.value,"2d34e37b":A.value,"2d6a4f55":I.value}));const k=j(),e=m(()=>!!k.iconPrepend),V=m(()=>!!k.iconAppend),$=m(()=>O[d.color]),A=m(()=>D[d.color]),I=m(()=>L[d.color]);return(o,Q)=>(s(),i("div",{class:y([o.$style.root,o.$style[`variant-${d.variant}`],o.$style[`size-${d.size}`],o.clickable&&o.$style.clickable,o.rectangle&&o.$style.rectangle])},[e.value?(s(),i("div",{key:0,class:y(o.$style.prepend)},[g(o.$slots,"iconPrepend")],2)):B("",!0),g(o.$slots,"default"),V.value?(s(),i("div",{key:1,class:y(o.$style.append)},[g(o.$slots,"iconAppend")],2)):B("",!0)],2))}}),K={$style:q};var c=w(J,[["__cssModules",K]]);const ae=M({__name:"ComponentsChipPage",setup(v){return(d,k)=>(s(),p(F,null,{default:a(()=>[l(u,{title:"Chip sizes",desc:"Chip sizes provided from the \xABChipSize\xBB model."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(b)),e=>(s(),p(c,{key:e,size:t(b)[e]},{default:a(()=>[n(C(t(b)[e]),1)]),_:2},1032,["size"]))),128))]),_:1}),l(u,{title:"Chip variants",desc:"Chip variants provided from the \xABChipVariant\xBB model."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(_)),e=>(s(),p(c,{key:e,variant:t(_)[e]},{default:a(()=>[n(C(t(_)[e]),1)]),_:2},1032,["variant"]))),128))]),_:1}),l(u,{title:"Chip colors",desc:"Chip colors provided from the \xABGlobalColors\xBB model."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(r)),e=>(s(),p(c,{key:e,color:t(r)[e]},{default:a(()=>[n(C(t(r)[e]),1)]),_:2},1032,["color"]))),128))]),_:1}),l(u,{title:"Chip clickable",desc:"\u0421hips that show something that can be clicked on."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(_)),e=>(s(),p(c,{key:e,variant:t(_)[e],clickable:""},{default:a(()=>[n(C(t(_)[e]),1)]),_:2},1032,["variant"]))),128))]),_:1}),l(u,{title:"Chip with icon and label",desc:"Use iconPrepend | iconAppend to add an icon."},{default:a(()=>[l(c,null,{iconPrepend:a(()=>[l(t(z))]),default:a(()=>[n(" prepend ")]),_:1}),l(c,null,{iconAppend:a(()=>[l(t(z))]),default:a(()=>[n(" append ")]),_:1})]),_:1}),l(u,{title:"Chip rectangle",desc:"Use a prop rectangle to remove the rounded corners."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(r)),e=>(s(),p(c,{key:e,color:t(r)[e],rectangle:""},{default:a(()=>[n(C(t(r)[e]),1)]),_:2},1032,["color"]))),128))]),_:1}),l(u,{title:"Chip rectangle",desc:"Use a prop rectangle to remove the rounded corners."},{default:a(()=>[(s(!0),i(f,null,h(Object.keys(t(r)),e=>(s(),p(c,{key:e,color:t(r)[e]},{default:a(()=>[n(C(t(r)[e]),1)]),_:2},1032,["color"]))),128))]),_:1})]),_:1}))}});export{ae as default};
