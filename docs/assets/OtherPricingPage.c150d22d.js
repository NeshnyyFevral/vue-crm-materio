import{V as z}from"./VCard.020d147b.js";import{V as M,a as O,C as G}from"./VChip.3a8c694a.js";import{V as R,b as U,u as Y,F as S}from"./VFlex.e77b52b0.js";import{V as l,a as g,T as v,b as w}from"./VTitle.03c2dcf2.js";import{V as x}from"./VSwitch.b4d881a0.js";import{d as N,b as f,x as y,l as e,k as a,e as E,n as o,t as _,w as H,L as J,m as t,p as n,_ as A,z as q,h as D,E as K,c as B,B as F,F as j,r as T,j as Q,i as W}from"./index.cae6f6fc.js";import{V as X,a as I}from"./VButton.f9b0ada6.js";import{a as $,G as P}from"./Colors.efb7d88d.js";import{g as Z}from"./PathTools.484cb364.js";import{a as V}from"./RandomTools.a04144a8.js";import"./VIconButton.ec8a644b.js";import"./VMenu.93f81756.js";import"./ClickOutsideTools.021077b1.js";const ee="_root_1rvd1_1",ae="_desc_1rvd1_5",te="_pre_1rvd1_11",se="_value_1rvd1_15",ie="_suf_1rvd1_21";var le={root:ee,desc:ae,pre:te,value:se,suf:ie};const re=N({__name:"OtherPricingPrice",props:{value:{},align:{},justifyContent:{},desc:{}},setup(d){const c=d;return(s,b)=>(f(),y(l,{class:o(s.$style.root)},{default:e(()=>[a(l,null,{default:e(()=>[a(R,{align:c.align,"justify-content":c.justifyContent},{default:e(()=>[E("sup",{class:o(s.$style.pre)},"$",2),E("span",{class:o(s.$style.value)},_(c.value),3),E("sup",{class:o(s.$style.suf)},"/month",2)]),_:1},8,["align","justify-content"])]),_:1}),H(a(l,{class:o(s.$style.desc)},{default:e(()=>[a(g,{align:t(v).CENTER,variant:"body2",color:t($)[400].default},{default:e(()=>[n(_(c.desc),1)]),_:1},8,["align","color"])]),_:1},8,["class"]),[[J,c.desc]])]),_:1},8,["class"]))}}),ne={$style:le};var oe=A(re,[["__cssModules",ne]]),h=(d=>(d.POPULAR="popular",d.DEFAULT="default",d))(h||{});const ue="_root_hd9y9_1",ce="_chip_hd9y9_15",de="_image_hd9y9_21",me="_ability_hd9y9_25";var pe={root:ue,"variant--popular":"_variant--popular_hd9y9_11",chip:ce,image:de,ability:me};const fe=["src","alt"],_e=N({__name:"OtherPricingItem",props:{item:{},disabled:{type:Boolean}},emits:["upgrade"],setup(d,{emit:c}){q(m=>({"5fbfc762":C.value}));const s=d,b=c,r=D(()=>s.item.isPurchased),C=D(()=>r.value?$[700].success:$[700].primary);return(m,i)=>(f(),y(l,{class:o([m.$style.root,m.$style[`variant--${s.item.variant}`]])},{default:e(()=>[s.item.variant===t(h).POPULAR?(f(),y(M,{key:0,class:o(m.$style.chip),variant:t(O).LIGHT,color:r.value?t(P).SUCCESS:t(P).PRIMARY},{default:e(()=>[n(" Popular ")]),_:1},8,["class","variant","color"])):K("",!0),a(l,{mt:40,mb:20},{default:e(()=>[E("img",{src:t(Z)(s.item.icon),alt:`${s.item.price}_image`,class:o(m.$style.image)},null,10,fe)]),_:1}),a(l,{mb:5},{default:e(()=>[a(w,{align:t(v).CENTER,variant:"heading5"},{default:e(()=>[n(_(s.item.title),1)]),_:1},8,["align"])]),_:1}),a(l,{mb:30},{default:e(()=>[a(g,{align:t(v).CENTER,variant:"body1",color:t($)[500].default},{default:e(()=>[n(_(s.item.subtitle),1)]),_:1},8,["align","color"])]),_:1}),a(l,{mb:40},{default:e(()=>[a(oe,{"justify-content":t(U).CENTER,value:s.item.price,desc:s.item.priceDesc},null,8,["justify-content","value","desc"])]),_:1}),a(l,{mb:40},{default:e(()=>[(f(!0),B(j,null,F(s.item.abilities,u=>(f(),y(l,{key:u,mb:10,class:o(m.$style.ability)},{default:e(()=>[a(g,{variant:"body1"},{default:e(()=>[n(_(u),1)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1}),a(l,null,{default:e(()=>[a(X,{"max-width":"",disabled:s.disabled,color:r.value?t(P).SUCCESS:t(P).PRIMARY,variant:s.item.variant===t(h).POPULAR?t(I).CONTAINED:t(I).OUTLINED,onClick:i[0]||(i[0]=u=>b("upgrade",s.item.id))},{default:e(()=>[n(_(r.value?"Your Current Plan":"Upgrade"),1)]),_:1},8,["disabled","color","variant"])]),_:1})]),_:1},8,["class"]))}}),ge={$style:pe};var ve=A(_e,[["__cssModules",ge]]);const ye="_chip_1alwf_1",he="_parent_1alwf_7",be="_item_1alwf_11",Ce="_itemColumn_1alwf_14";var Pe={chip:ye,parent:he,item:be,itemColumn:Ce};const L=980,Ee=N({__name:"OtherPricingPage",setup(d){const c=Y(L),s=T(!1),b=T(-1),r=T([{id:V(),icon:"images/other/pricing-basic.png",title:"Basic",subtitle:"A simple start for everyone",price:0,variant:h.DEFAULT,abilities:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"],isPurchased:!0},{id:V(),icon:"images/other/pricing-standard.png",title:"Standard",subtitle:"For small to medium businesses",price:49,variant:h.POPULAR,abilities:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom \u201CThank you\u201D page"],isPurchased:!1},{id:V(),icon:"images/other/pricing-enterprise.png",title:"Enterprise",subtitle:"Solution for big organizations",price:99,variant:h.DEFAULT,abilities:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"],isPurchased:!1}]),C=()=>{b.value=r.value.findIndex(i=>i.isPurchased)},m=i=>{r.value=r.value.map(p=>({...p,isPurchased:!1}));const u=r.value.find(p=>p.id===i);u!==void 0&&(u.isPurchased=!0,C())};return Q(()=>{C()}),W(()=>s.value,()=>{r.value=r.value.map((i,u)=>({...i,price:s.value?Math.round(i.price-i.price*.19):Math.round(i.price+i.price*.235),priceDesc:s.value&&u>0?`UDS ${Math.round(i.price-i.price*.19)*12}/year`:void 0}))}),(i,u)=>(f(),y(z,null,{default:e(()=>[a(l,{mt:40,mb:15},{default:e(()=>[a(w,{align:t(v).CENTER,variant:"heading4"},{default:e(()=>[n(" Pricing Plans ")]),_:1},8,["align"])]),_:1}),a(l,{mb:30},{default:e(()=>[a(g,{align:t(v).CENTER,variant:"body1"},{default:e(()=>[n(" All plans include 40+ advanced tools and features to boost your product. ")]),_:1},8,["align"]),a(g,{align:t(v).CENTER,variant:"body1"},{default:e(()=>[n(" Choose the best plan to fit your needs. ")]),_:1},8,["align"])]),_:1}),a(l,{mb:30},{default:e(()=>[a(R,{"justify-content":t(U).CENTER,align:t(S).CENTER},{default:e(()=>[a(l,{mr:10},{default:e(()=>[a(g,{variant:"body2"},{default:e(()=>[n(" Monthly ")]),_:1})]),_:1}),a(l,{class:o(i.$style.parent)},{default:e(()=>[a(x,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=p=>s.value=p)},{default:e(()=>[n(" Annually ")]),_:1},8,["modelValue"]),a(M,{class:o(i.$style.chip),size:t(G).DEFAULT,variant:t(O).LIGHT},{default:e(()=>[n(" Save up to 20% ")]),_:1},8,["class","size","variant"])]),_:1},8,["class"])]),_:1},8,["justify-content","align"])]),_:1}),a(l,null,{default:e(()=>[a(R,{align:t(S).CENTER,"justify-content":t(U).SPACE_AROUND,"direction-change-trigger":L},{default:e(()=>[(f(!0),B(j,null,F(r.value,(p,k)=>(f(),y(ve,{key:p.id,item:p,disabled:b.value>k,class:o([i.$style.item,t(c)&&i.$style.itemColumn]),onUpgrade:m},null,8,["item","disabled","class"]))),128))]),_:1},8,["align","justify-content"])]),_:1})]),_:1}))}}),$e={$style:Pe};var Be=A(Ee,[["__cssModules",$e]]);export{Be as default};