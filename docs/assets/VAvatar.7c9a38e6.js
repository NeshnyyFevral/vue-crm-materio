import{d as m,A as p,E as v,h as l,b as n,c as i,z as C,t as h,D as g,n as y,_ as L}from"./index.973ba0df.js";import{B as M,a as $,G as z}from"./VButton.8bbfd4f6.js";var u=(t=>(t.SMALL="small",t.MEDIUM="medium",t.LARGE="large",t))(u||{}),c=(t=>(t.CYCLE="cycle",t.ROUNDED="rounded",t.SQUARE="square",t))(c||{});const E=M,A=$,B="_root_a7fll_1",D="_withLetter_a7fll_15",U="_light_a7fll_37";var b={root:B,withLetter:D,"variant-cycle":"_variant-cycle_a7fll_18","variant-rounded":"_variant-rounded_a7fll_21","size-small":"_size-small_a7fll_24","size-medium":"_size-medium_a7fll_28","size-large":"_size-large_a7fll_32",light:U};const R={key:0},w=m({__name:"VAvatar",props:{size:{default:u.MEDIUM},variant:{default:c.CYCLE},letter:{default:"Noname"},color:{default:z.PRIMARY},light:{type:Boolean,default:!1}},setup(t){const a=t;p(e=>({"1a8fb0e1":d.value,"0010f8b5":f.value}));const s=v(),r=l(()=>!(s!=null&&s.default)),_=l(()=>{const e=a.letter.split(" "),{length:o}=e;return o>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():o===1?e[0][0].toUpperCase():"N"}),d=l(()=>E[a.color]),f=l(()=>A[a.color]);return(e,o)=>(n(),i("div",{class:y([e.$style.root,e.$style[`variant-${a.variant}`],e.$style[`size-${a.size}`],r.value&&e.$style.withLetter,e.light&&e.$style.light])},[C(e.$slots,"default"),r.value?(n(),i("div",R,h(_.value),1)):g("",!0)],2))}}),N={$style:b};var G=L(w,[["__cssModules",N]]);export{u as A,G as V,c as a};
