import{d as i,b as a,c as n,e as l,t as c,n as t,C as p,y as d,l as _,_ as u}from"./index.8e3c3ae3.js";var r=(s=>(s.ROW="row",s.COLUMN="column",s))(r||{});const f="_root_1jfiz_11",m="_transparent_1jfiz_21",y="_title_1jfiz_27",z="_desc_1jfiz_35",C="_group_1jfiz_42",$="_row_1jfiz_48",j="_column_1jfiz_51";var v={root:f,transparent:m,title:y,desc:z,group:C,row:$,column:j,"anka-ripple":"_anka-ripple_1jfiz_1"};const w=i({__name:"VPreviewComponentCard",props:{title:{default:"Untitled"},desc:{default:void 0},direction:{default:r.ROW},transparent:{type:Boolean,default:!1}},setup(s){const o=s;return(e,k)=>(a(),n("div",{class:t([e.$style.root,e.transparent&&e.$style.transparent])},[l("h4",{class:t(e.$style.title)},c(o.title),3),o.desc?(a(),n("p",{key:0,class:t(e.$style.desc)},c(o.desc),3)):p("",!0),l("div",{class:t([e.$style.group,e.direction===_(r).ROW?e.$style.row:e.$style.column])},[d(e.$slots,"default")],2)],2))}}),g={$style:v};var B=u(w,[["__cssModules",g]]);export{r as P,B as V};