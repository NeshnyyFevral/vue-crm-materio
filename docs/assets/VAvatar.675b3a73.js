import{d as m,A as v,G as C,h as a,b as i,c as n,z as h,t as f,D as g,n as y,_ as L}from"./index.4f20a0c9.js";import{B as M,a as k,G as $}from"./VButton.8bbfd4f6.js";var u=(t=>(t.SMALL="small",t.MEDIUM="medium",t.LARGE="large",t))(u||{}),c=(t=>(t.CYCLE="cycle",t.ROUNDED="rounded",t.SQUARE="square",t))(c||{});const z=M,j=k,E="_root_ipkji_1",A="_withLetter_ipkji_16",B="_light_ipkji_38";var D={root:E,withLetter:A,"variant-cycle":"_variant-cycle_ipkji_19","variant-rounded":"_variant-rounded_ipkji_22","size-small":"_size-small_ipkji_25","size-medium":"_size-medium_ipkji_29","size-large":"_size-large_ipkji_33",light:B};const U={key:0},b=m({__name:"VAvatar",props:{size:{default:u.MEDIUM},variant:{default:c.CYCLE},letter:{default:"Noname"},color:{default:$.PRIMARY},light:{type:Boolean,default:!1}},setup(t){const s=t;v(e=>({"07b748b5":_.value,"48d32561":d.value}));const o=C(),l=a(()=>!(o!=null&&o.default)),p=a(()=>{const e=s.letter.split(" "),{length:r}=e;return r>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():r===1?e[0][0].toUpperCase():"N"}),_=a(()=>z[s.color]),d=a(()=>j[s.color]);return(e,r)=>(i(),n("div",{class:y([e.$style.root,e.$style[`variant-${s.variant}`],e.$style[`size-${s.size}`],l.value&&e.$style.withLetter,e.light&&e.$style.light])},[h(e.$slots,"default"),l.value?(i(),n("div",U,f(p.value),1)):g("",!0)],2))}}),R={$style:D};var N=L(b,[["__cssModules",R]]);export{u as A,N as V,c as a};