import{d,A as _,h as s,x as u,w as p,b as c,c as v,z as m,n as y,_ as h}from"./index.4f20a0c9.js";import{B as f,a as b,G as M}from"./VButton.8bbfd4f6.js";var l=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(l||{}),t=(e=>(e.FILLED="filled",e.LIGHT="light",e.TRANSPARENT="transparent",e))(t||{});const q=f,C=b,z="_root_qhloy_11",B="_disabled_qhloy_95",L="_rounded_qhloy_100";var $={root:z,"variant-filled":"_variant-filled_qhloy_34","variant-light":"_variant-light_qhloy_47","variant-transparent":"_variant-transparent_qhloy_60","size-small":"_size-small_qhloy_67","size-medium":"_size-medium_qhloy_76","size-large":"_size-large_qhloy_85",disabled:B,rounded:L,"anka-ripple":"_anka-ripple_qhloy_1"};const g=d({__name:"VIconButton",props:{size:{default:l.MEDIUM},color:{default:M.DEFAULT},variant:{default:t.TRANSPARENT},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){const a=e;_(o=>({eb21e33a:r.value,"3419bc73":n.value}));const r=s(()=>q[a.color]),n=s(()=>C[a.color]);return(o,E)=>{const i=u("ripple");return p((c(),v("button",{class:y([o.$style.root,o.$style[`variant-${a.variant}`],o.$style[`size-${a.size}`],o.disabled&&o.$style.disabled,o.rounded&&o.$style.rounded])},[m(o.$slots,"default")],2)),[[i]])}}}),A={$style:$};var I=h(g,[["__cssModules",A]]);export{t as I,I as V,l as a};
