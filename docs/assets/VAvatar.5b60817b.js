import{d as m,z as p,D as h,h as s,b as n,c as i,y as g,t as y,C,n as $,_ as L}from"./index.155b1d31.js";import{G as z,a as d}from"./Colors.efb7d88d.js";var u=(t=>(t.SMALL="small",t.MEDIUM="medium",t.LARGE="large",t.EXTRA_LARGE="extra-large",t))(u||{}),_=(t=>(t.CYCLE="cycle",t.ROUNDED="rounded",t.SQUARE="square",t))(_||{});const E="_root_17v0d_1",M="_filled_17v0d_10",R="_withLetter_17v0d_23",U="_hasOutlined_17v0d_52",D="_light_17v0d_59";var B={root:E,filled:M,"variant-cycle":"_variant-cycle_17v0d_13","variant-rounded":"_variant-rounded_17v0d_16",withLetter:R,"variant-square":"_variant-square_17v0d_32","size-small":"_size-small_17v0d_35","size-medium":"_size-medium_17v0d_39","size-large":"_size-large_17v0d_43","size-extra-large":"_size-extra-large_17v0d_47",hasOutlined:U,light:D};const G={key:0},O=m({__name:"VAvatar",props:{size:{default:u.MEDIUM},variant:{default:_.CYCLE},letter:{default:"Noname"},color:{default:z.PRIMARY},light:{type:Boolean,default:!1},outlined:{type:Boolean},filled:{type:Boolean,default:!1},letterStrong:{default:""}},setup(t){const l=t;p(e=>({"9117f5d4":c.value,f99c04c0:f.value}));const a=h(),o=s(()=>a.default&&a.default()[0].children==="v-if"?!0:!(a!=null&&a.default)),v=s(()=>{const e=l.letter.split(" "),{length:r}=e;return r>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():r===1?e[0].length>=2?`${e[0][0]}${e[0][1]}`.toUpperCase():`${e[0][0]}`.toUpperCase():"N"}),c=s(()=>d[700][l.color]),f=s(()=>d[100][l.color]);return(e,r)=>(n(),i("div",{class:$([e.$style.root,e.$style[`variant-${l.variant}`],e.$style[`size-${l.size}`],o.value&&e.$style.withLetter,e.light&&e.$style.light,e.outlined&&e.$style.hasOutlined,e.filled&&e.$style.filled])},[g(e.$slots,"default"),o.value?(n(),i("div",G,y(e.letterStrong?e.letterStrong:v.value),1)):C("",!0)],2))}}),S={$style:B};var A=L(O,[["__cssModules",S]]);export{u as A,A as V,_ as a};
