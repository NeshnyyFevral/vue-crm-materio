import{d as p,b as r,c as a,e as l,t as c,n as s,C as d,y as _,l as u,_ as i}from"./index.ddb1da35.js";var o=(t=>(t.ROW="row",t.COLUMN="column",t))(o||{});const m="_root_1n4t8_11",y="_transparent_1n4t8_21",f="_title_1n4t8_27",C="_desc_1n4t8_35",$="_group_1n4t8_42",v="_row_1n4t8_48",w="_column_1n4t8_51";var g={root:m,transparent:y,title:f,desc:C,group:$,row:v,column:w,"anka-ripple":"_anka-ripple_1n4t8_1"};const k=p({__name:"VPreviewComponentCard",props:{title:{default:"Untitled"},desc:{default:void 0},direction:{default:o.ROW},transparent:{type:Boolean,default:!1}},setup(t){const n=t;return(e,B)=>(r(),a("div",{class:s([e.$style.root,e.transparent&&e.$style.transparent])},[l("h4",{class:s(e.$style.title)},c(n.title),3),n.desc?(r(),a("p",{key:0,class:s(e.$style.desc)},c(n.desc),3)):d("",!0),l("div",{class:s([e.$style.group,e.direction===u(o).ROW?e.$style.row:e.$style.column])},[_(e.$slots,"default")],2)],2))}}),V={$style:g};var M=i(k,[["__cssModules",V]]);export{o as P,M as V};
