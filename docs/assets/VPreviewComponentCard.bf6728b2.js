import{d as i,z as _,h as m,b as l,c as f,k as o,l as a,e as y,y as V,n as r,m as b,p as c,t as d,x as k,E as v,_ as C}from"./index.cae6f6fc.js";import{V as p,b as g,a as $}from"./VTitle.03c2dcf2.js";var n=(e=>(e.ROW="row",e.COLUMN="column",e))(n||{});const w="_root_sb0tk_1",B="_transparent_sb0tk_12",N="_title_sb0tk_18",O="_group_sb0tk_22",h="_row_sb0tk_28",E="_column_sb0tk_31";var M={root:w,transparent:B,title:N,group:O,row:h,column:E};const R=i({__name:"VPreviewComponentCard",props:{title:{default:"Untitled"},desc:{default:void 0},direction:{default:n.ROW},transparent:{type:Boolean,default:!1},gap:{default:15}},setup(e){_(t=>({"22a80589":u.value}));const s=e,u=m(()=>`${s.gap}px`);return(t,W)=>(l(),f("div",{class:r([t.$style.root,t.transparent&&t.$style.transparent])},[o(p,{mb:10},{default:a(()=>[o(g,{class:r(t.$style.title),variant:"heading4"},{default:a(()=>[c(d(s.title),1)]),_:1},8,["class"])]),_:1}),o(p,{mb:15},{default:a(()=>[s.desc?(l(),k($,{key:0,variant:"subtitle2"},{default:a(()=>[c(d(s.desc),1)]),_:1})):v("",!0)]),_:1}),y("div",{class:r([t.$style.group,t.direction===b(n).ROW?t.$style.row:t.$style.column])},[V(t.$slots,"default")],2)],2))}}),T={$style:M};var S=C(R,[["__cssModules",T]]);export{n as P,S as V};