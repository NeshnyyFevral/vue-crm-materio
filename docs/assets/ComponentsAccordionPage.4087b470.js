import{d as b,A as g,r as c,o as C,i as q,b as f,c as x,e as r,n as d,t as A,z as k,_ as y,y as E,l as n,k as s,p as m}from"./index.772e45c4.js";import{V as _}from"./VPreviewComponentCard.2567bdc7.js";import{V as L}from"./VPreviewComponentPage.a98c93a4.js";const V="_root_nl1o5_11",$="_desc_nl1o5_21",I="_open_nl1o5_27",B="_visible_nl1o5_32",U="_title_nl1o5_38",h="_icon_nl1o5_44";var w={root:V,desc:$,open:I,visible:B,title:U,icon:h,"anka-ripple":"_anka-ripple_nl1o5_1"};const P=r("div",null,null,-1),M=r("div",null,null,-1),N=[P,M],z=b({__name:"VAccordion",props:{name:{default:void 0},title:{default:"Untitled"}},emits:["update:name"],setup(p,{emit:t}){const a=p;g(i=>({bb96450a:o.value}));const e=c(null),o=c("0px"),u=c(!1);return C(()=>{e!=null&&e.value&&(o.value=`${e.value.getBoundingClientRect().height}px`)}),q(()=>u.value,()=>{u.value&&t("update:name",a.title)}),q(()=>a.name,()=>{a.name!==void 0&&a.name!==a.title&&(u.value=!1)}),(i,v)=>(f(),x("div",{class:d([i.$style.root,u.value&&i.$style.open]),onClick:v[0]||(v[0]=T=>u.value=!u.value)},[r("div",{class:d(i.$style.visible)},[r("h6",{class:d(i.$style.title)},A(a.title),3),r("div",{class:d(i.$style.icon)},N,2)],2),r("div",{class:d(i.$style.desc)},[r("div",{ref_key:"desc",ref:e},[k(i.$slots,"default")],512)],2)],2))}}),S={$style:w};var l=y(z,[["__cssModules",S]]);const R=b({__name:"ComponentsAccordionPage",setup(p){const t=c("");return(a,e)=>(f(),E(L,null,{default:n(()=>[s(_,{title:"Basic accordion",desc:"Use <VAccordion> components",transparent:""},{default:n(()=>[s(l,{title:"Accordion 1"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1}),s(l,{title:"Accordion 2"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1}),s(l,{title:"Accordion 3"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1})]),_:1}),s(_,{title:"Linked Accordions",desc:"To make linked accordions, you need to create a variable and bind it via \xABv-model:name\xBB to each accordion to be linked",transparent:""},{default:n(()=>[s(l,{name:t.value,"onUpdate:name":e[0]||(e[0]=o=>t.value=o),title:"Accordion 1"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1},8,["name"]),s(l,{name:t.value,"onUpdate:name":e[1]||(e[1]=o=>t.value=o),title:"Accordion 2"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1},8,["name"]),s(l,{name:t.value,"onUpdate:name":e[2]||(e[2]=o=>t.value=o),title:"Accordion 3"},{default:n(()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur! ")]),_:1},8,["name"])]),_:1})]),_:1}))}});export{R as default};
