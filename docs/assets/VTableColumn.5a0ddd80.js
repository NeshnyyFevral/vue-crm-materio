import{A as D}from"./chevron-down.b9deb57e.js";import{F as T,V as E}from"./VFlex.41a9361c.js";import{V as W}from"./VTitle.de9ea092.js";import{d as C,D as F,r as y,h as p,o as N,b as s,c as n,e as f,n as c,F as b,B as $,k as S,l as w,m as I,t as g,x as P,u as v,C as A,y as k,_ as V}from"./index.2eb262cb.js";var i=(o=>(o.ASK="ASK",o.DESC="DESC",o))(i||{});const x="_table_2jauu_1",z="_withKey_2jauu_1",L="_th_2jauu_1",O="_item_2jauu_2",R="_withMaxWidth_2jauu_5",q="_withSmallPaddings_2jauu_8",G="_thSort_2jauu_24",H="_thIcon_2jauu_30",J="_thIconActive_2jauu_34",Q="_thIconAsk_2jauu_37";var U={table:x,withKey:z,th:L,item:O,withMaxWidth:R,withSmallPaddings:q,thSort:G,thIcon:H,thIconActive:J,thIconAsk:Q};const X=["onClick"],Y=C({__name:"VTable",props:{data:{},withKey:{type:Boolean},maxWidth:{type:Boolean},smallPaddings:{type:Boolean}},setup(o){const r=o,d=F(),h=y([]),l=y(i.ASK),u=y(null),K=p(()=>d.default===void 0?[]:d.default({})),j=()=>{K.value.forEach(e=>{const a=e.props;h.value.push({label:a.label,sortable:(a==null?void 0:a.sortable)==="",name:a.name})})},B=e=>{if(!e.sortable)return;const a=[i.DESC,i.ASK,null],t=a.findIndex(m=>m===l.value);u.value!==e?(u.value=e,[l.value]=a):(l.value=t+1>=a.length?a[0]:a[t+1],l.value===null&&(u.value=null))},M=p(()=>{if(u.value===null||l.value===null)return r.data;const{name:e}=u.value;return l.value===i.ASK?[...r.data].sort((a,t)=>a[e].localeCompare(t[e])):[...r.data].sort((a,t)=>t[e].localeCompare(a[e]))});return N(()=>{j()}),(e,a)=>(s(),n("table",{class:c([e.$style.table,e.withKey&&e.$style.withKey,e.maxWidth&&e.$style.withMaxWidth,e.smallPaddings&&e.$style.withSmallPaddings])},[f("thead",null,[h.value.length?(s(),n("tr",{key:0,class:c(e.$style.headItem)},[(s(!0),n(b,null,$(h.value,(t,m)=>(s(),n("th",{key:`${t.label}_${m}`,class:c([e.$style.th,t.sortable&&e.$style.thSort]),onClick:_=>B(t)},[S(E,{align:v(T).CENTER},{default:w(()=>{var _;return[S(W,{mr:3,title:t.label},{default:w(()=>[I(g(t.label),1)]),_:2},1032,["title"]),t.sortable?(s(),P(v(D),{key:0,class:c([e.$style.thIcon,((_=u.value)==null?void 0:_.name)===t.name&&e.$style.thIconActive,l.value===v(i).ASK&&e.$style.thIconAsk,l.value===null&&e.$style.thIconDisabled])},null,8,["class"])):A("",!0)]}),_:2},1032,["align"])],10,X))),128))],2)):A("",!0)]),f("tbody",null,[(s(!0),n(b,null,$(M.value,t=>(s(),n("tr",{key:t,class:c(e.$style.item)},[k(e.$slots,"default",{row:t})],2))),128))])],2))}}),Z={$style:U};var ue=V(Y,[["__cssModules",Z]]);const ee="_td_1xwfx_1";var te={td:ee};const ae=C({__name:"VTableColumn",props:{name:{},label:{},sortable:{type:Boolean},row:{}},setup(o){const r=o;return(d,h)=>(s(),n("td",{class:c(d.$style.td)},[k(d.$slots,"default",{},()=>[I(g(r.row[r.name]),1)])],2))}}),le={$style:te};var ce=V(ae,[["__cssModules",le]]);export{ce as V,ue as a};
