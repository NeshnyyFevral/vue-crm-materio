import{d as m,A as c,h as s,b as l,c as r,e as v,m as f,t as q,D as h,n as i,z as b,_ as g}from"./index.4f20a0c9.js";import{B as T,a as $,G as M}from"./VButton.8bbfd4f6.js";import"./VChip.ae131130.js";var I="/vue-crm-materio/assets/1.aac046b6.png",n=(o=>(o.RIGHT_TOP="right-top",o.LEFT_BOTTOM="left-bottom",o.RIGHT_BOTTOM="right-bottom",o.LEFT_TOP="left-top",o))(n||{}),e=(o=>(o.DEFAULT="content",o.LIGHT="light",o.DOT="dot",o))(e||{}),_=(o=>(o.SMALL="small",o.NORMAL="normal",o))(_||{});const y=T,C=$,L="_root_qql79_1",O="_badge_qql79_7",H="_hasHidden_qql79_67";var z={root:L,"size-small":"_size-small_qql79_7",badge:O,"position-left-top":"_position-left-top_qql79_14","position-right-top":"_position-right-top_qql79_18","position-left-bottom":"_position-left-bottom_qql79_22","position-right-bottom":"_position-right-bottom_qql79_26","size-normal":"_size-normal_qql79_30",hasHidden:H,"variant-light":"_variant-light_qql79_71"};const V={key:0},A=m({__name:"VBadge",props:{value:{default:0},color:{default:M.PRIMARY},size:{default:_.NORMAL},variant:{default:e.DEFAULT},position:{default:n.RIGHT_TOP},maxValue:{default:9999}},setup(o){const a=o;c(t=>({"02f96b16":p.value,"9dc750c0":d.value}));const p=s(()=>y[a.color]),d=s(()=>C[a.color]),u=s(()=>a.value>=a.maxValue?`${a.maxValue}+`:`${a.value}`);return(t,R)=>(l(),r("div",{class:i([t.$style.root,t.$style[`size-${a.size}`],t.$style[`position-${a.position}`],t.$style[`variant-${a.variant}`],t.value<=0&&t.$style.hasHidden])},[v("div",{class:i(t.$style.badge)},[t.variant!==f(e).DOT?(l(),r("span",V,q(u.value),1)):h("",!0)],2),b(t.$slots,"default")],2))}}),B={$style:z};var F=g(A,[["__cssModules",B]]);export{e as B,F as V,I as _,_ as a,n as b};