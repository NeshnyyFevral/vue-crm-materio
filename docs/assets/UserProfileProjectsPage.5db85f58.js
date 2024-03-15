import{C as R}from"./comments.1a7e28fd.js";import{V as G}from"./VAvatarGroup.15c14d94.js";import{V as T}from"./VCard.10284f9b.js";import{V as D,a as V}from"./VChip.0cce4347.js";import{V as c,F as m,b as p}from"./VFlex.429c6658.js";import{V as v}from"./VMenuItem.695584e0.js";import{a as i,V as l,b as L}from"./VTitle.ff168383.js";import{V as $}from"./VProgress.5089a3e9.js";import{V as k}from"./VSplitter.efb71b20.js";import{a as u,G as f}from"./Colors.efb7d88d.js";import{g as P}from"./PathTools.484cb364.js";import{d as N,h as S,b as C,x as w,l as a,k as t,m as e,p as r,e as A,n as y,t as d,_ as B,c as h,F as H,B as I}from"./index.fb95f128.js";import{a as o}from"./RandomTools.a04144a8.js";import"./VAvatar.4201af33.js";import"./VTooltip.96345478.js";import"./VIconButton.ddc8bd00.js";import"./ClickOutsideTools.021077b1.js";const x="_image_15s4z_1",W="_totalBudget_15s4z_7",M="_commentsIcon_15s4z_13";var U={image:x,totalBudget:W,commentsIcon:M};const z=["src","alt"],E=365,F=N({__name:"UserProfileProject",props:{avatar:{},title:{},client:{},totalBudgetGot:{},totalBudgetNeed:{},startDate:{},deadline:{},desc:{},allHours:{},daysLeft:{},daysLeftColor:{},taskComplete:{},taskNeed:{},avatarGroup:{},membersCount:{},comments:{}},setup(b){const s=b,_=S(()=>`${Math.round(s.taskComplete/s.taskNeed*100)}`);return(g,n)=>(C(),w(T,null,{menu:a(()=>[t(v,{name:"Rename Project"}),t(v,{name:"View Details"}),t(v,{name:"Add to Favorites"}),t(k),t(v,null,{default:a(()=>[t(i,{color:e(u)[700].error,variant:"subtitle1"},{default:a(()=>[r(" Leave Project ")]),_:1},8,["color"])]),_:1})]),default:a(()=>[t(l,{mb:10},{default:a(()=>[t(c,{align:e(m).START},{default:a(()=>[A("img",{src:e(P)(`images/user-profile/teams/${s.avatar}`),alt:s.avatar,class:y(g.$style.image)},null,10,z),t(l,{ml:10},{default:a(()=>[t(l,null,{default:a(()=>[t(L,{variant:"heading6"},{default:a(()=>[r(d(s.title),1)]),_:1})]),_:1}),t(l,null,{default:a(()=>[t(c,{align:e(m).CENTER},{default:a(()=>[t(l,{mr:5},{default:a(()=>[t(i,{variant:"body2","font-weight":"600",color:e(u)[400].default},{default:a(()=>[r(" Client: ")]),_:1},8,["color"])]),_:1}),t(i,{variant:"body2",color:e(u)[400].default},{default:a(()=>[r(d(s.client),1)]),_:1},8,["color"])]),_:1},8,["align"])]),_:1})]),_:1})]),_:1},8,["align"])]),_:1}),t(l,{mb:20},{default:a(()=>[t(c,{align:e(m).CENTER,"justify-content":e(p).SPACE_BETWEEN,"direction-change-trigger":E},{default:a(()=>[t(l,{class:y(g.$style.totalBudget)},{default:a(()=>[t(l,null,{default:a(()=>[t(c,{align:e(m).CENTER},{default:a(()=>[t(l,null,{default:a(()=>[t(i,{variant:"subtitle1","font-weight":"600"},{default:a(()=>[r(d(s.totalBudgetGot),1)]),_:1})]),_:1}),t(l,null,{default:a(()=>[t(i,{variant:"subtitle1",color:e(u)[500].default},{default:a(()=>[r(" /"+d(s.totalBudgetNeed),1)]),_:1},8,["color"])]),_:1})]),_:1},8,["align"])]),_:1}),t(l,null,{default:a(()=>[t(i,{variant:"subtitle1",color:e(u)[500].default},{default:a(()=>[r(" Total Budget ")]),_:1},8,["color"])]),_:1})]),_:1},8,["class"]),t(l,null,{default:a(()=>[t(l,null,{default:a(()=>[t(c,{align:e(m).CENTER},{default:a(()=>[t(l,{mr:5},{default:a(()=>[t(i,{variant:"subtitle1","font-weight":"600"},{default:a(()=>[r(" Start Date: ")]),_:1})]),_:1}),t(i,{variant:"subtitle1",color:e(u)[400].default},{default:a(()=>[r(d(s.startDate),1)]),_:1},8,["color"])]),_:1},8,["align"])]),_:1}),t(l,null,{default:a(()=>[t(c,{"justify-content":e(p).END,align:e(m).CENTER},{default:a(()=>[t(l,{mr:5},{default:a(()=>[t(i,{variant:"subtitle1","font-weight":"600"},{default:a(()=>[r(" Deadline ")]),_:1})]),_:1}),t(i,{variant:"subtitle1",color:e(u)[400].default},{default:a(()=>[r(d(s.deadline),1)]),_:1},8,["color"])]),_:1},8,["justify-content","align"])]),_:1})]),_:1})]),_:1},8,["align","justify-content"])]),_:1}),t(l,{mb:20},{default:a(()=>[t(i,{variant:"subtitle1",color:e(u)[400].default},{default:a(()=>[r(d(s.desc),1)]),_:1},8,["color"])]),_:1}),t(k),t(l,{mt:20,mb:10},{default:a(()=>[t(c,{align:e(m).CENTER,"justify-content":e(p).SPACE_BETWEEN,"direction-change-trigger":E},{default:a(()=>[t(c,{align:e(m).CENTER},{default:a(()=>[t(l,{mr:5},{default:a(()=>[t(i,{variant:"subtitle1","font-weight":"600"},{default:a(()=>[r(" All Hours: ")]),_:1})]),_:1}),t(i,{variant:"subtitle1",color:e(u)[400].default},{default:a(()=>[r(d(s.allHours),1)]),_:1},8,["color"])]),_:1},8,["align"]),t(D,{variant:e(V).LIGHT,color:s.daysLeftColor},{default:a(()=>[r(d(s.daysLeft)+" days left ",1)]),_:1},8,["variant","color"])]),_:1},8,["align","justify-content"])]),_:1}),t(l,{mb:10},{default:a(()=>[t(l,{mb:7},{default:a(()=>[t(c,{align:e(m).CENTER,"justify-content":e(p).SPACE_BETWEEN},{default:a(()=>[t(i,{variant:"caption",color:e(u)[400].default},{default:a(()=>[r(" Tasks: "+d(s.taskNeed)+"/"+d(g.taskComplete),1)]),_:1},8,["color"]),t(i,{variant:"caption",color:e(u)[400].default},{default:a(()=>[r(d(_.value)+"% Completed ",1)]),_:1},8,["color"])]),_:1},8,["align","justify-content"])]),_:1}),t($,{"border-radius":"5",height:"10px",weight:"8",percentage:_.value,width:"100%"},null,8,["percentage"])]),_:1}),t(l,null,{default:a(()=>[t(c,{align:e(m).CENTER,"justify-content":e(p).SPACE_BETWEEN},{default:a(()=>[t(c,{align:e(m).CENTER},{default:a(()=>[t(l,{height:"30px",width:"90px",mr:5},{default:a(()=>[t(G,{data:s.avatarGroup},null,8,["data"])]),_:1}),t(i,{variant:"body2",color:e(u)[400].default},{default:a(()=>[r(d(s.membersCount)+" members ",1)]),_:1},8,["color"])]),_:1},8,["align"]),t(c,null,{default:a(()=>[t(l,{mr:5},{default:a(()=>[t(e(R),{class:y(g.$style.commentsIcon)},null,8,["class"])]),_:1}),t(i,{variant:"body2",color:e(u)[400].default},{default:a(()=>[r(d(s.comments),1)]),_:1},8,["color"])]),_:1})]),_:1},8,["align","justify-content"])]),_:1})]),_:1}))}}),K={$style:U};var J=B(F,[["__cssModules",K]]);const j="_projects_mm3pd_1";var O={projects:j};const X=N({__name:"UserProfileProjectsPage",setup(b){const s=[{id:o(),avatar:"social.png",title:"Social Banners",client:"Christian Jimenez",totalBudgetGot:"$24.8k",totalBudgetNeed:"$18.2k",startDate:"14/2/21",deadline:"28/2/22",desc:"We are Consulting, Software Development and Web Development Services.",allHours:"380/244",daysLeft:28,daysLeftColor:f.SUCCESS,taskComplete:328,taskNeed:344,avatarGroup:[{id:o(),src:"avatars/1.png",alt:"1",tooltip:"Vinnie Mostowy"},{id:o(),src:"avatars/7.png",alt:"1",tooltip:"Allen Rieske"},{id:o(),src:"avatars/3.png",alt:"1",tooltip:"Julee Rossignol"}],membersCount:"280",comments:15},{id:o(),avatar:"react.png",title:"Admin Template",client:"Jeffrey Phillips",totalBudgetGot:"$2.4k",totalBudgetNeed:"$1.8k",startDate:"18/8/21",deadline:"21/6/22",desc:"Time is our most valuable asset, that's why we want to help you save it by creating\u2026",allHours:"98/135",daysLeft:15,daysLeftColor:f.WARNING,taskComplete:38,taskNeed:90,avatarGroup:[{id:o(),src:"avatars/4.png",alt:"1",tooltip:"Kaith D`souza"},{id:o(),src:"avatars/2.png",alt:"1",tooltip:"Jhon Doe"},{id:o(),src:"avatars/8.png",alt:"1",tooltip:"Alan Walker"}],membersCount:"1.1k",comments:236},{id:o(),avatar:"vue.png",title:"App Design",client:"Ricky McDonald",totalBudgetGot:"$980",totalBudgetNeed:"$420",startDate:"24/7/21",deadline:"8/10/21",desc:"App design combines the user interface (UI) and user experience (UX).",allHours:"880/421",daysLeft:45,daysLeftColor:f.ERROR,taskComplete:95,taskNeed:140,avatarGroup:[{id:o(),src:"avatars/6.png",alt:"1",tooltip:"Jimmy Ressula"},{id:o(),src:"avatars/5.png",alt:"1",tooltip:"Krisi Lawker"},{id:o(),src:"avatars/1.png",alt:"1",tooltip:"Danny Paul"}],membersCount:"458",comments:98},{id:o(),avatar:"html.png",title:"Create Website",client:"Hulda Wright",totalBudgetGot:"$8.5k",totalBudgetNeed:"$2.43k",startDate:"10/2/19",deadline:"12/9/22",desc:"Your domain name should reflect your products or services so that your...",allHours:"1.2k/820",daysLeft:126,daysLeftColor:f.WARNING,taskComplete:302,taskNeed:420,avatarGroup:[{id:o(),src:"avatars/7.png",alt:"1",tooltip:"Rishi Swaat"},{id:o(),src:"avatars/3.png",alt:"1",tooltip:"Andrew Tye"},{id:o(),src:"avatars/4.png",alt:"1",tooltip:"Rossie Kim"}],membersCount:"137",comments:120},{id:o(),avatar:"figma.png",title:"Figma Dashboard",client:"Jerry Greene",totalBudgetGot:"$52.7k",totalBudgetNeed:"$28.4k",startDate:"12/12/20",deadline:"25/12/21",desc:"Use this template to organize your design project. Some of the key features are\u2026",allHours:"142/420",daysLeft:5,daysLeftColor:f.ERROR,taskComplete:100,taskNeed:285,avatarGroup:[{id:o(),src:"avatars/2.png",alt:"1",tooltip:"Kim Merchent"},{id:o(),src:"avatars/8.png",alt:"1",tooltip:"Sam D`souza"},{id:o(),src:"avatars/6.png",alt:"1",tooltip:"Nurvi Karlos"}],membersCount:"82",comments:20},{id:o(),avatar:"xd.png",title:"Logo Design",client:"Olive Strickland",totalBudgetGot:"$1.3k",totalBudgetNeed:"$655",startDate:"17/8/21",deadline:"02/11/21",desc:"Premium logo designs created by top logo designers. Create the branding of business.",allHours:"580/445",daysLeft:4,daysLeftColor:f.SUCCESS,taskComplete:290,taskNeed:290,avatarGroup:[{id:o(),src:"avatars/5.png",alt:"1",tooltip:"Kim Karlos"},{id:o(),src:"avatars/1.png",alt:"1",tooltip:"Katy Turner"},{id:o(),src:"avatars/7.png",alt:"1",tooltip:"Peter Adward"}],membersCount:"16",comments:16}];return(_,g)=>(C(),h("div",{class:y(_.$style.projects)},[(C(),h(H,null,I(s,n=>t(J,{key:n.id,"task-complete":n.taskComplete,"members-count":n.membersCount,comments:n.comments,"all-hours":n.allHours,avatar:n.avatar,title:n.title,"total-budget-need":n.totalBudgetNeed,"task-need":n.taskNeed,"total-budget-got":n.totalBudgetGot,client:n.client,"days-left":n.daysLeft,deadline:n.deadline,"avatar-group":n.avatarGroup,"start-date":n.startDate,desc:n.desc,"days-left-color":n.daysLeftColor},null,8,["task-complete","members-count","comments","all-hours","avatar","title","total-budget-need","task-need","total-budget-got","client","days-left","deadline","avatar-group","start-date","desc","days-left-color"])),64))],2))}}),Y={$style:O};var gt=B(X,[["__cssModules",Y]]);export{gt as default};
