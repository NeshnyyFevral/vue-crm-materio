import{d as _,z as u,h as s,s as p,w as c,b as y,c as m,y as v,n as h,_ as f}from"./index.cae6f6fc.js";import{G as b,a as o}from"./Colors.efb7d88d.js";var r=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(r||{}),t=(e=>(e.FILLED="filled",e.LIGHT="light",e.TRANSPARENT="transparent",e))(t||{});const q="_root_qhloy_11",z="_disabled_qhloy_95",$="_rounded_qhloy_100";var E={root:q,"variant-filled":"_variant-filled_qhloy_34","variant-light":"_variant-light_qhloy_47","variant-transparent":"_variant-transparent_qhloy_60","size-small":"_size-small_qhloy_67","size-medium":"_size-medium_qhloy_76","size-large":"_size-large_qhloy_85",disabled:z,rounded:$,"anka-ripple":"_anka-ripple_qhloy_1"};const L=_({__name:"VIconButton",props:{size:{default:r.MEDIUM},color:{default:b.DEFAULT},variant:{default:t.TRANSPARENT},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){u(a=>({"0112032e":i.value,"4b970e88":n.value}));const l=e,i=s(()=>o[700][l.color]),n=s(()=>o[200][l.color]);return(a,g)=>{const d=p("ripple");return c((y(),m("button",{class:h([a.$style.root,a.$style[`variant-${l.variant}`],a.$style[`size-${l.size}`],a.disabled&&a.$style.disabled,a.rounded&&a.$style.rounded])},[v(a.$slots,"default")],2)),[[d]])}}}),M={$style:E};var D=f(L,[["__cssModules",M]]);export{t as I,D as V,r as a};