import{b as R,V as l,a as g,c as q}from"./VTitle.8efa3e19.js";import{V as X,B as nt}from"./VButton.fb080fa7.js";import{V as M,S as h,a as _,_ as rt,g as D,D as Q,C as st,R as it,c as ct,r as ut,b as tt,i as dt,P as F,j as _t,h as ft,e as pt,k as mt}from"./BarChart.f34dd39c.js";import{a as p,G as d}from"./Colors.efb7d88d.js";import{d as y,r as V,o as gt,b as c,x as m,l as e,k as t,m as i,u as n,e as k,n as E,_ as x,h as I,y as et,t as b,c as A,B as P,F as B,z as ht,j as vt,A as at,K as yt}from"./index.fd1b77bf.js";import{V as $,F as S,b as L,u as z,a as ot}from"./VFlex.4f3ffb16.js";import{g as H}from"./PathTools.484cb364.js";import{V as C}from"./VMenuItem.d429ac23.js";import{V as U,A as O}from"./VAvatar.7481f625.js";import{V as bt,a as $t}from"./VChip.0adc5e62.js";import{V as W,a as Ct}from"./VTableColumn.5c861162.js";import"./VIconButton.9eff86de.js";import"./ClickOutsideTools.021077b1.js";import"./chevron-down.72271f82.js";var wt="/vue-crm-materio/assets/trophy.5e0e9a86.png";const St="_root_qoabe_1",Et="_trophy_qoabe_5",kt="_trImage_qoabe_11";var At={root:St,trophy:Et,trImage:kt};const Rt=y({__name:"AnalyticsCongratulations",setup(u){const a=V(null),s=()=>{if(a.value){const r=a.value.getContext("2d"),{width:o}=a.value,{height:f}=a.value;r&&(r.beginPath(),r.moveTo(o,0),r.lineTo(o,f),r.lineTo(0,f),r.closePath(),r.fillStyle=p[100].default,r.fill()),a.value.style.borderBottomRightRadius="12px"}};return gt(()=>{s()}),(r,o)=>(c(),m(M,{class:E(r.$style.root)},{default:e(()=>[t(l,null,{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Congratulations John! \u{1F973} ")]),_:1})]),_:1}),t(l,{mb:15},{default:e(()=>[t(g,{variant:"body2",color:n(p)[400].default},{default:e(()=>[i(" Best seller of the month ")]),_:1},8,["color"])]),_:1}),t(l,{mb:15},{default:e(()=>[t(R,{variant:"heading5",color:n(p)[700].primary},{default:e(()=>[i(" $42.8k ")]),_:1},8,["color"])]),_:1}),t(l,null,{default:e(()=>[t(X,{size:n(nt).SMALL},{default:e(()=>[i(" View sales ")]),_:1},8,["size"])]),_:1}),t(l,{class:E(r.$style.trophy)},{default:e(()=>[k("canvas",{ref_key:"canvasRef",ref:a,width:"175",height:"175"},null,512),k("img",{src:wt,alt:"trophy",class:E(r.$style.trImage)},null,2)]),_:1},8,["class"])]),_:1},8,["class"]))}}),Tt={$style:At};var It=x(Rt,[["__cssModules",Tt]]);const Mt="_root_1gpwv_1";var xt={root:Mt};const Nt=y({__name:"TransactionItem",props:{value:{default:""},title:{default:""},type:{default:h.UP},desc:{default:""}},setup(u){const a=u,s=I(()=>a.type===h.UP?"+":"-"),r=I(()=>a.type===h.UP?p[700].success:p[700].error);return(o,f)=>(c(),m($,{class:E(o.$style.root),align:n(S).CENTER,"justify-content":n(L).SPACE_BETWEEN},{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{width:"27px",height:"27px",mr:20},{default:e(()=>[et(o.$slots,"default")]),_:3}),t(l,null,{default:e(()=>[t(l,{mb:4.5},{default:e(()=>[t(g,{"font-weight":"600",variant:"body2"},{default:e(()=>[i(b(a.title),1)]),_:1})]),_:1}),t(g,{variant:"caption",color:n(p)[400].default},{default:e(()=>[i(b(a.desc),1)]),_:1},8,["color"])]),_:1})]),_:3},8,["align"]),t(l,null,{default:e(()=>[t(g,{color:r.value,variant:"body2","font-weight":"600"},{default:e(()=>[i(b(s.value)+b(a.value),1)]),_:1},8,["color"])]),_:1})]),_:3},8,["class","align","justify-content"]))}}),Pt={$style:xt};var Bt=x(Nt,[["__cssModules",Pt]]);const Lt="_block_wltwg_1",jt="_hasSplitted_wltwg_7";var Dt={block:Lt,hasSplitted:jt};const Vt=["src","alt"],Wt=y({__name:"TransactionBlock",props:{title:{default:""},data:{default:()=>[]},splitter:{type:Boolean,default:!1}},setup(u){const a=u;return(s,r)=>(c(),m(l,{class:E([s.$style.block,a.splitter&&s.$style.hasSplitted])},{default:e(()=>[t(l,{mb:30},{default:e(()=>[t($,{align:n(S).CENTER,"justify-content":n(L).SPACE_BETWEEN},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(b(a.title),1)]),_:1}),t(g,{variant:"caption",color:n(p)[400].default},{default:e(()=>[i(" View All ")]),_:1},8,["color"])]),_:1},8,["align","justify-content"])]),_:1}),(c(!0),A(B,null,P(a.data,o=>(c(),m(l,{key:o.id,mb:32},{default:e(()=>[t(Bt,{type:o.type,title:o.title,value:o.value,desc:o.desc},{default:e(()=>[k("img",{src:n(H)(`images/analytics/deposits/${o.imgSrc}`),alt:`avatar-${o.imgSrc}`},null,8,Vt)]),_:2},1032,["type","title","value","desc"])]),_:2},1024))),128))]),_:1},8,["class"]))}}),Ut={$style:Dt};var G=x(Wt,[["__cssModules",Ut]]);const zt="_deposit_1epol_1",Ot="_withdraw_1epol_2";var Ft={deposit:zt,withdraw:Ot};const Ht=630,Yt=y({__name:"AnalyticsDepositWithdraw",setup(u){const a=[{id:_(),title:"Gumroad Account",desc:"Sell UI Kit",value:"$4,650",type:h.UP,imgSrc:"gumroad.png"},{id:_(),title:"Mastercard",desc:"Wallet deposit",value:"$92,705",type:h.UP,imgSrc:"mastercard.png"},{id:_(),title:"Stripe Account",desc:"iOS Application",value:"$957",type:h.UP,imgSrc:"stripe.png"},{id:_(),title:"American Bank",desc:"Bank Transfer",value:"$6,837",type:h.UP,imgSrc:"american-bank.png"},{id:_(),title:"Bank Account",desc:"Wallet deposit",value:"$446",type:h.UP,imgSrc:"citi-bank.png"}],s=[{id:_(),title:"Google Adsense",desc:"Paypal deposit",value:"$145",type:h.DOWN,imgSrc:"google.png"},{id:_(),title:"Github Enterprise",desc:"Security & compliance",value:"$1870",type:h.DOWN,imgSrc:"github.png"},{id:_(),title:"Upgrade Slack Plan",desc:"Debit card deposit",value:"$450",type:h.DOWN,imgSrc:"slack.png"},{id:_(),title:"Digital Ocean",desc:"Cloud Hosting",value:"$540",type:h.DOWN,imgSrc:"digital-ocean.png"},{id:_(),title:"AWS Account",desc:"Choosing a Cloud Platform",value:"$21",type:h.DOWN,imgSrc:"aws.png"}];return(r,o)=>(c(),m(M,null,{default:e(()=>[t($,{"direction-change-trigger":Ht,align:n(S).CENTER},{default:e(()=>[t(G,{title:"Deposit",data:a,splitter:""}),t(G,{title:"Withdraw",data:s})]),_:1},8,["align"])]),_:1}))}}),Gt={$style:Ft};var Zt=x(Yt,[["__cssModules",Gt]]);const Jt=1125,Kt=20,qt=y({__name:"AnalyticsTotalProfit",setup(u){const a=z(Jt),s=V({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",align:"end",labels:{usePointStyle:!0,font:{size:0}}}},interaction:{mode:"index",intersect:!1},radius:0,scales:{x:{grid:{display:!1,color:"transparent"}},y:{grid:{display:!1},ticks:{callback(){return""}}}}}),r=w=>{var N;const v=[];let T=0;for(let j=0;j<w;j+=1)T=(N=v[j-1])!=null?N:0,Math.floor(Math.random()*(1+1))?v[j]=T+D(2500,5e3):v[j]=T-D(1e3,2e3);return v},f={labels:I(()=>Array(Kt).fill("")).value,datasets:[{data:r(8*5),borderColor:p[700].primary,backgroundColor:p[700].primary}]};return(w,v)=>(c(),m(M,null,{default:e(()=>[t(l,null,{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" $86.4k ")]),_:1}),t(l,{ml:-27,mt:-30},{default:e(()=>[t(rt,{options:s.value,data:f,height:n(a)?150:300},null,8,["options","height"])]),_:1}),t(l,{mt:-20},{default:e(()=>[t(g,{"font-weight":"600",variant:"body2",align:n(q).CENTER},{default:e(()=>[i(" Total Profit ")]),_:1},8,["align"])]),_:1})]),_:1})]),_:1}))}}),Xt=550,Qt=y({__name:"AnalyticsJoinProfProj",setup(u){const a=z(Xt);return(s,r)=>(c(),m($,{direction:n(ot).COLUMN,align:n(S).CENTER},{default:e(()=>[t(l,{height:n(a)?"auto":`${390/2-20}px`,width:"100%"},{default:e(()=>[t(qt)]),_:1},8,["height"]),t(l,{height:n(a)?"auto":`${390/2}px`,width:"100%",mt:20},{default:e(()=>[t(Q,{title:"New Project",icon:n(st),suffix:"18%",type:n(h).DOWN,value:"862",desc:"Yearly Project","menu-items":["Refresh","Share","Update"],color:n(d).PRIMARY},null,8,["icon","type","color"])]),_:1},8,["height"])]),_:1},8,["direction","align"]))}}),te={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},ee=k("path",{fill:"currentColor",d:"M3 22V8h4v14H3m7 0V2h4v20h-4m7 0v-8h4v8h-4Z"},null,-1),ae=[ee];function oe(u,a){return c(),A("svg",te,ae)}var le={render:oe},Y=(u=>(u.VERTICAL="vertical",u.HORIZONTAL="horizontal",u))(Y||{});const ne="_root_1jhrh_1",re="_front_1jhrh_11",se="_back_1jhrh_12",ie="_loadHoriz_1jhrh_1",ce="_loadVert_1jhrh_1";var ue={root:ne,"variant-horizontal":"_variant-horizontal_1jhrh_11",front:re,back:se,loadHoriz:ie,"variant-vertical":"_variant-vertical_1jhrh_25",loadVert:ce};const de=y({__name:"VProgress",props:{percentage:{default:"0"},color:{default:d.PRIMARY},variant:{default:Y.HORIZONTAL},height:{default:"5px"},borderRadius:{default:"0"},weight:{default:"5"},width:{default:"100%"}},setup(u){const a=u;ht(v=>({"28ded245":w.value,"6030b26a":o.value,"74dbcd67":s.value,"203973cf":r.value,bba2842a:f.value}));const s=I(()=>p[600][a.color]),r=I(()=>p[100][a.color]),o=I(()=>`${a.percentage}%`),f=I(()=>`${a.borderRadius}px`),w=I(()=>`${a.weight}px`);return(v,T)=>(c(),m(l,{height:a.height,width:a.width,class:E([v.$style.root,v.$style[`variant-${a.variant}`]])},{default:e(()=>[k("div",{class:E(v.$style.back)},null,2),k("div",{class:E(v.$style.front)},null,2)]),_:1},8,["height","width","class"]))}}),_e={$style:ue};var lt=x(de,[["__cssModules",_e]]);const fe=5,pe=y({__name:"AnalyticsSessions",setup(u){const a=[d.PRIMARY,d.ERROR],s=V([]),r=f=>{const{length:w}=f,v=D(0,w-1);return f[v]},o=()=>{for(let f=0;f<fe;f+=1)s.value.push({id:_(),color:r(a),value:D(30,85).toString()})};return vt(()=>{o()}),(f,w)=>(c(),m(M,null,{default:e(()=>[t(l,{mb:10},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" 2,856 ")]),_:1})]),_:1}),t(l,{mb:20,ml:-7},{default:e(()=>[t($,{"justify-content":n(L).SPACE_AROUND,align:n(S).CENTER},{default:e(()=>[(c(!0),A(B,null,P(s.value,v=>(c(),m(l,{key:v.id,width:"7"},{default:e(()=>[t(lt,{width:"7px",weight:"7","border-radius":"12",height:"70px",percentage:v.value,color:v.color,variant:n(Y).VERTICAL},null,8,["percentage","color","variant"])]),_:2},1024))),128))]),_:1},8,["justify-content","align"])]),_:1}),t(l,null,{default:e(()=>[t(g,{variant:"body2",align:n(q).CENTER,"font-weight":"600"},{default:e(()=>[i(" Sessions ")]),_:1},8,["align"])]),_:1})]),_:1}))}}),me=550,ge=y({__name:"AnalyticsJoinProfSess",setup(u){const a=z(me);return(s,r)=>(c(),m($,{direction:n(ot).COLUMN,align:n(S).CENTER},{default:e(()=>[t(l,{height:n(a)?"auto":`${390/2-20}px`,width:"100%"},{default:e(()=>[t(Q,{title:"Total Profit",icon:n(le),suffix:"42%",type:n(h).UP,value:"$25.6k",desc:"Weekly Profit","menu-items":["Refresh","Share","Update"],color:n(d).DEFAULT},null,8,["icon","type","color"])]),_:1},8,["height"]),t(l,{height:n(a)?"auto":`${390/2}px`,width:"100%",mt:20},{default:e(()=>[t(pe)]),_:1},8,["height"])]),_:1},8,["direction","align"]))}}),he=y({__name:"RadarChart",props:{data:{},options:{}},setup(u){const a=u;return(s,r)=>(c(),m(n(it),{options:a.options,"chart-data":a.data},null,8,["options","chart-data"]))}}),ve=y({__name:"AnalyticsPerformance",setup(u){ct.register(...ut);const a=V({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",align:"end",labels:{usePointStyle:!0,font:{size:0}}}},interaction:{mode:"index",intersect:!1},radius:0,scales:{r:{ticks:{display:!1}}}}),s=I(()=>`${p[700].info}EE`),r=I(()=>`${p[700].primary}EE`),o={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Income",backgroundColor:s.value,borderColor:s.value,pointBackgroundColor:s.value,pointBorderColor:s.value,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:p[700].default,data:[10,7,8,6,8,7]},{label:"Net WorthV1",backgroundColor:r.value,borderColor:r.value,pointBackgroundColor:r.value,pointBorderColor:r.value,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:p[700].default,data:[0,8,7,8,7,8]},{label:"Net WorthV2",backgroundColor:r.value,borderColor:r.value,pointBackgroundColor:r.value,pointBorderColor:r.value,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:p[700].default,data:[8,8,0,0,0,8]}]};return(f,w)=>(c(),m(M,null,{menu:e(()=>[t(C,{name:"Last 28 Days"}),t(C,{name:"Last Month"}),t(C,{name:"Last Year"})]),default:e(()=>[t(l,null,{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Performance ")]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(he,{data:o,options:a.value},null,8,["options"])]),_:1})]),_:1}))}}),ye={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},be=k("path",{d:"M7.41 15.42 12 10.83l4.59 4.59L18 14l-6-6-6 6 1.41 1.42Z"},null,-1),$e=[be];function Ce(u,a){return c(),A("svg",ye,$e)}var we={render:Ce};const Se=y({__name:"SalesByCountiesItem",props:{name:{default:""},count:{default:""},desc:{default:""},type:{default:h.UP},value:{default:"$0"},percentage:{default:""},color:{default:d.PRIMARY}},setup(u){const a=u;return(s,r)=>(c(),m($,{align:n(S).CENTER,"justify-content":n(L).SPACE_BETWEEN},{default:e(()=>[t(l,null,{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{mr:10},{default:e(()=>[t(U,{color:a.color,light:"",letter:a.name},null,8,["color","letter"])]),_:1}),t(l,null,{default:e(()=>[t(l,null,{default:e(()=>[t(tt,{icon:n(we),type:a.type},{value:e(()=>[t(g,{variant:"body1","font-weight":"600"},{default:e(()=>[i(b(a.value),1)]),_:1})]),suffix:e(({color:o,prefix:f})=>[t(g,{variant:"body2",color:o,"font-weight":"600"},{default:e(()=>[i(b(f)+b(a.percentage),1)]),_:2},1032,["color"])]),_:1},8,["icon","type"])]),_:1}),t(l,null,{default:e(()=>[t(g,{variant:"caption",color:n(p)[400].default},{default:e(()=>[i(b(a.name),1)]),_:1},8,["color"])]),_:1})]),_:1})]),_:1},8,["align"])]),_:1}),t(l,null,{default:e(()=>[t(l,{mb:5},{default:e(()=>[t(g,{variant:"body2","font-weight":"600"},{default:e(()=>[i(b(a.count),1)]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(g,{color:n(p)[400].default,variant:"caption"},{default:e(()=>[i(b(a.desc),1)]),_:1},8,["color"])]),_:1})]),_:1})]),_:1},8,["align","justify-content"]))}}),Ee=y({__name:"AnalyticsSalesByCountries",setup(u){const a=[{id:_(),name:"USA",value:"$8,656k",percentage:"25.8%",type:h.UP,count:"894k",desc:"Sales",color:d.SUCCESS},{id:_(),name:"UK",value:"$2,415k",percentage:"6.2%",type:h.DOWN,count:"645k",desc:"Sales",color:d.ERROR},{id:_(),name:"India",value:"$865k",percentage:"12.4%",type:h.UP,count:"148k",desc:"Sales",color:d.WARNING},{id:_(),name:"Japan",value:"$745k",percentage:"11.9%",type:h.DOWN,count:"86k",desc:"Sales",color:d.DEFAULT},{id:_(),name:"Korea",value:"$45k",percentage:"16.2%",type:h.DOWN,count:"42k",desc:"Sales",color:d.ERROR}];return(s,r)=>(c(),m(M,null,{menu:e(()=>[t(C,{name:"Last 28 Days"}),t(C,{name:"Last Month"}),t(C,{name:"Last Year"})]),default:e(()=>[t(l,{mb:20},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Sales by Countries ")]),_:1})]),_:1}),(c(),A(B,null,P(a,o=>t(l,{key:o.id,mb:16.5},{default:e(()=>[t(Se,{type:o.type,count:o.count,desc:o.desc,name:o.name,value:o.value,percentage:o.percentage,color:o.color},null,8,["type","count","desc","name","value","percentage","color"])]),_:2},1024)),64))]),_:1}))}}),ke={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ae=k("path",{fill:"currentColor",d:"m7 15 5-5 5 5H7Z"},null,-1),Re=[Ae];function Te(u,a){return c(),A("svg",ke,Re)}var Ie={render:Te};const Me="_image_1jg01_1",xe="_value_1jg01_15";var Ne={image:Me,value:xe};const Pe=y({__name:"TotalEarning",props:{title:{default:""},desc:{default:""},value:{default:""},percentage:{default:"0"},color:{default:d.PRIMARY}},setup(u){const a=u;return(s,r)=>(c(),m(l,null,{default:e(()=>[t($,{align:n(S).CENTER,"justify-content":n(L).SPACE_BETWEEN},{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{mr:10,class:E(s.$style.image)},{default:e(()=>[et(s.$slots,"default")]),_:3},8,["class"]),t(l,null,{default:e(()=>[t(l,{mb:8},{default:e(()=>[t(g,{variant:"body2","font-weight":"600"},{default:e(()=>[i(b(s.title),1)]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(g,{variant:"caption",color:n(p)[500].default},{default:e(()=>[i(b(s.desc),1)]),_:1},8,["color"])]),_:1})]),_:1})]),_:3},8,["align"]),t(l,{class:E(s.$style.value)},{default:e(()=>[t(l,{mb:5},{default:e(()=>[t(g,{variant:"body2","font-weight":"600"},{default:e(()=>[i(b(s.value),1)]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(lt,{color:a.color,percentage:a.percentage},null,8,["color","percentage"])]),_:1})]),_:1},8,["class"])]),_:3},8,["align","justify-content"])]),_:3}))}}),Be={$style:Ne};var Le=x(Pe,[["__cssModules",Be]]);const je=["src","alt"],De=y({__name:"AnalyticsTotalEarning",setup(u){const a=[{id:_(),title:"Zipcar",value:"$24,895.65",desc:"Vuejs, React & HTML",percentage:"75",avatar:"zipcar.png",color:d.PRIMARY},{id:_(),title:"Bitbank",value:"$8,650.20",desc:"Sketch, Figma & XD",percentage:"45",avatar:"bitbank.png",color:d.INFO},{id:_(),title:"Aviato",value:"$1,245.80",desc:"HTML & Angular",percentage:"15",avatar:"aviato.png",color:d.DEFAULT}];return(s,r)=>(c(),m(M,null,{menu:e(()=>[t(C,{name:"Last 28 Days"}),t(C,{name:"Last Month"}),t(C,{name:"Last Year"})]),default:e(()=>[t(l,{mb:30},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Total Earning ")]),_:1})]),_:1}),t(l,{mb:10},{default:e(()=>[t(tt,{icon:n(Ie)},{value:e(()=>[t(R,{"font-weight":"600",variant:"heading4"},{default:e(()=>[i(" $24,895 ")]),_:1})]),suffix:e(({color:o})=>[t(g,{color:o,"font-weight":"600",variant:"body2"},{default:e(()=>[i(" 10% ")]),_:2},1032,["color"])]),_:1},8,["icon"])]),_:1}),t(l,{mb:30},{default:e(()=>[t(g,{variant:"caption",color:n(p)[400].default},{default:e(()=>[i(" Compared to $84,325 last year ")]),_:1},8,["color"])]),_:1}),(c(),A(B,null,P(a,o=>t(l,{key:o.id,mb:20},{default:e(()=>[t(Le,{title:o.title,value:o.value,desc:o.desc,percentage:o.percentage,color:o.color},{default:e(()=>[k("img",{src:n(H)(`images/analytics/${o.avatar}`),alt:`avatar-${o.avatar}`},null,8,je)]),_:2},1032,["title","value","desc","percentage","color"])]),_:2},1024)),64))]),_:1}))}}),Z=625,Ve=y({__name:"AnalyticsTransactions",setup(u){const a=z(Z),s=[{id:_(),title:"Sales",value:"245k",icon:dt,color:d.PRIMARY},{id:_(),title:"Customers",value:"12.5k",icon:F,color:d.SUCCESS},{id:_(),title:"Products",value:"1.54k",icon:_t,color:d.WARNING},{id:_(),title:"Revenue",value:"$88k",icon:ft,color:d.INFO}];return(r,o)=>(c(),m(M,null,{menu:e(()=>[t(C,{name:"Last 28 Days"}),t(C,{name:"Last Month"}),t(C,{name:"Last Year"})]),default:e(()=>[t(l,{mb:10},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Transactions ")]),_:1})]),_:1}),t(l,{mb:22},{default:e(()=>[t($,null,{default:e(()=>[t(l,{mr:5},{default:e(()=>[t(g,{variant:"body2","font-weight":"600"},{default:e(()=>[i(" Total 48.5% growth ")]),_:1})]),_:1}),t(g,{variant:"body2"},{default:e(()=>[i(" \u{1F60E} this month ")]),_:1})]),_:1})]),_:1}),t(l,{mb:10},{default:e(()=>[t($,{"direction-change-trigger":Z,"justify-content":n(L).SPACE_BETWEEN},{default:e(()=>[(c(),A(B,null,P(s,f=>t(l,{key:f.id,width:n(a)?"auto":"33%"},{default:e(()=>[t(pt,{title:f.title,value:f.value,icon:f.icon,color:f.color},null,8,["title","value","icon","color"])]),_:2},1032,["width"])),64))]),_:1},8,["justify-content"])]),_:1})]),_:1}))}}),We={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ue=k("path",{fill:"currentColor",d:"M11 2v20c-5.1-.5-9-4.8-9-10s3.9-9.5 9-10m2 0v9h9c-.5-4.8-4.2-8.5-9-9m0 11v9c4.7-.5 8.5-4.2 9-9h-9Z"},null,-1),ze=[Ue];function Oe(u,a){return c(),A("svg",We,ze)}var J={render:Oe};const Fe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},He=k("path",{fill:"currentColor",d:"M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"},null,-1),Ye=[He];function Ge(u,a){return c(),A("svg",Fe,Ye)}var K={render:Ge};const Ze={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},Je=k("path",{fill:"currentColor",d:"M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"},null,-1),Ke=[Je];function qe(u,a){return c(),A("svg",Ze,Ke)}var Xe={render:qe};const Qe="_roleIcon_9336c_1";var ta={roleIcon:Qe};const ea=["src","alt"],aa=y({__name:"UserTable",props:{data:{}},setup(u){const a=u;return(s,r)=>(c(),m(Ct,{data:a.data,"max-width":"","small-paddings":""},{default:e(({row:o})=>[t(W,{name:"name",label:"NAME",row:o,sortable:""},{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{mr:10},{default:e(()=>[o.avatar?(c(),m(U,{key:0,size:n(O).SMALL,light:""},{default:e(()=>[k("img",{src:n(H)(`avatars/${o.avatar}`),alt:`avatar-${o.avatar}`},null,8,ea)]),_:2},1032,["size"])):(c(),m(U,{key:1,letter:o.name,size:n(O).SMALL,light:""},null,8,["letter","size"]))]),_:2},1024),t(l,null,{default:e(()=>[t(l,null,{default:e(()=>[t(g,{variant:"body2","font-weight":"600"},{default:e(()=>[i(b(o.name),1)]),_:2},1024)]),_:2},1024),t(l,null,{default:e(()=>[t(g,{variant:"caption",color:n(p)[400].default},{default:e(()=>[i(b(o.tag),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["align"])]),_:2},1032,["row"]),t(W,{name:"email",label:"EMAIL",row:o,sortable:""},{default:e(()=>[t(g,{variant:"body2",color:n(p)[400].default},{default:e(()=>[i(b(o.email),1)]),_:2},1032,["color"])]),_:2},1032,["row"]),t(W,{name:"role",label:"ROLE",row:o},{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{mr:10},{default:e(()=>[t(U,{color:o.roleColor,size:n(O).SMALL,light:""},{default:e(()=>[(c(),m(at(o.roleIcon),{class:E(s.$style.roleIcon)},null,8,["class"]))]),_:2},1032,["color","size"])]),_:2},1024),t(l,null,{default:e(()=>[t(g,{variant:"body2",color:n(p)[400].default},{default:e(()=>[i(b(o.role),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1032,["align"])]),_:2},1032,["row"]),t(W,{name:"status",label:"STATUS",row:o},{default:e(()=>[t(bt,{variant:n($t).LIGHT,color:o.statusColor},{default:e(()=>[i(b(o.status),1)]),_:2},1032,["variant","color"])]),_:2},1032,["row"])]),_:1},8,["data"]))}}),oa={$style:ta};var la=x(aa,[["__cssModules",oa]]);const na=y({__name:"AnalyticsUserTable",setup(u){const a=[{avatar:"1.png",name:"Joseph Wheeler",tag:"@gslixby0",email:"nuroani@icpair.com",role:"Maintainer",roleColor:d.PRIMARY,roleIcon:J,status:"Inactive",statusColor:d.DEFAULT},{avatar:"7.png",name:"May Lloyd",tag:"@hredmore1",email:"jeju@ma.co.uk",role:"Subscriber",roleColor:d.WARNING,roleIcon:F,status:"Active",statusColor:d.SUCCESS},{avatar:null,name:"William Mckinney",tag:"@msicely2",email:"cidagehe@nonalbo.com",role:"Subscriber",roleColor:d.WARNING,roleIcon:F,status:"Pending",statusColor:d.WARNING},{avatar:"2.png",name:"Warren Clarke",tag:"@mhurran4",email:"hirasles@zozzetkuv.edu",role:"Editor",roleColor:d.INFO,roleIcon:K,status:"Active",statusColor:d.SUCCESS},{avatar:null,name:"Isabel Briggs",tag:"@crisby3",email:"temiwiho@ohacma.gov",role:"Maintainer",roleColor:d.PRIMARY,roleIcon:J,status:"Inactive",statusColor:d.DEFAULT},{avatar:"4.png",name:"Adeline Bennett",tag:"@shalstead5",email:"boz@peh.co.uk",role:"Author",roleColor:d.SUCCESS,roleIcon:Xe,status:"Pending",statusColor:d.WARNING},{avatar:"5.png",name:"Lora Simpson",tag:"@bkildayr",email:"dude@oco.nl",role:"Editor",roleColor:d.INFO,roleIcon:K,status:"Active",statusColor:d.SUCCESS}];return(s,r)=>(c(),m(M,null,{default:e(()=>[t(la,{data:a})]),_:1}))}}),ra=y({__name:"AnalyticsWeeklyOverview",setup(u){const a=V({responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"top",align:"end",labels:{usePointStyle:!0,font:{size:0}}}},scales:{x:{grid:{display:!0,color:"transparent"}},y:{beginAtZero:!0,grid:{display:!0},ticks:{callback(o){return o}}}},backgroundColor:p[700].primary}),r={labels:["","","","","",""],datasets:[{data:(o=>{var v;const f=[];let w=0;for(let T=0;T<o;T+=1){w=(v=f[T-1])!=null?v:0;const N=D(2e3,2500);Math.floor(Math.random()*(1+1))?f[T]=w+N:f[T]=w-N<0?w+N:w-N}return f})(12),backgroundColor:p[700].primary,borderWidth:1,borderRadius:12}]};return(o,f)=>(c(),m(M,null,{menu:e(()=>[t(C,{name:"Refresh"}),t(C,{name:"Update"}),t(C,{name:"Delete"})]),default:e(()=>[t(l,{mb:10},{default:e(()=>[t(R,{variant:"heading6"},{default:e(()=>[i(" Weekly Overview ")]),_:1})]),_:1}),t(l,{mb:20},{default:e(()=>[t(mt,{options:a.value,data:r},null,8,["options"])]),_:1}),t(l,{mb:30},{default:e(()=>[t($,{align:n(S).CENTER},{default:e(()=>[t(l,{mr:20},{default:e(()=>[t(R,{variant:"heading5","font-weight":"600"},{default:e(()=>[i(" 45% ")]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(g,{variant:"body2",color:n(p)[400].default},{default:e(()=>[i(" Your sales performance is 45% \u{1F60E} better compared to last month ")]),_:1},8,["color"])]),_:1})]),_:1},8,["align"])]),_:1}),t(l,null,{default:e(()=>[t(X,{"max-width":""},{default:e(()=>[i(" Details ")]),_:1})]),_:1})]),_:1}))}}),sa="_root_1jb1v_1",ia="_congratulations_1jb1v_7",ca="_performance_1jb1v_8",ua="_salesByCountries_1jb1v_9",da="_transactions_1jb1v_20",_a="_depositWithdraw_1jb1v_21",fa="_userTable_1jb1v_22",pa="_earning_1jb1v_33",ma="_weekly_1jb1v_34",ga="_join_1jb1v_50";var ha={root:sa,congratulations:ia,performance:ca,salesByCountries:ua,transactions:da,depositWithdraw:_a,userTable:fa,earning:pa,weekly:ma,join:ga};const va=y({__name:"AnalyticsPage",setup(u){const a=yt([{id:_(),component:It,class:"congratulations"},{id:_(),component:Ve,class:"transactions"},{id:_(),component:ra,class:"weekly"},{id:_(),component:De,class:"earning"},{id:_(),component:Qt,class:"join"},{id:_(),component:ge,class:"join"},{id:_(),component:ve,class:"performance"},{id:_(),component:Zt,class:"depositWithdraw"},{id:_(),component:Ee,class:"salesByCountries"},{id:_(),component:na,class:"userTable"}]);return(s,r)=>(c(),A("div",{class:E(s.$style.root)},[(c(!0),A(B,null,P(n(a),o=>(c(),m(l,{key:o.id,ml:20,mt:20,class:E(s.$style[o.class])},{default:e(()=>[(c(),m(at(o.component),{"overflow-x":o.class==="userTable"},null,8,["overflow-x"]))]),_:2},1032,["class"]))),128))],2))}}),ya={$style:ha};var Pa=x(va,[["__cssModules",ya]]);export{Pa as default};