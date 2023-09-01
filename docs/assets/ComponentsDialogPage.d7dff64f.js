import{V as p}from"./VButton.a8bf16f5.js";import{d as C,r as V,i as q,b as _,x as M,c as L,e as $,y as S,n as v,C as E,T as P,_ as B,t as U,j as t,k as s,m as f,l as y}from"./index.50a5aeb5.js";import{V as k}from"./VPreviewComponentCard.a86870d1.js";import{V as A}from"./VPreviewComponentPage.7b10d87f.js";import{e as D,d as w}from"./VButton.8bbfd4f6.js";var b=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(b||{});const T="_root_8qdks_1",W="_dialog_8qdks_5",F="_backdrop_8qdks_28",N="_persistent_8qdks_38",R="_persistentCancel_8qdks_1",I="_fullscreen_8qdks_43",G="_open_8qdks_1";var X={root:T,dialog:W,"size-small":"_size-small_8qdks_18","size-medium":"_size-medium_8qdks_21","size-large":"_size-large_8qdks_24",backdrop:F,persistent:N,persistentCancel:R,fullscreen:I,open:G};const j=C({__name:"VDialog",props:{modelValue:{type:Boolean},size:{default:b.MEDIUM},fullscreen:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,{emit:n}){const u=r,a=()=>window.innerWidth-document.documentElement.clientWidth,i=V(!1),m=()=>{u.persistent?i.value=!0:n("update:modelValue",!1)};return q(()=>u.modelValue,()=>{const o=a();u.modelValue?(document.body.style.overflow="hidden",document.body.offsetWidth>1270&&(document.body.style.marginRight=`${o}px`)):(document.body.style.overflow="auto",document.body.style.marginRight="0px")}),(o,d)=>(_(),M(P,{to:"body"},[o.modelValue?(_(),L("div",{key:0,class:v(o.$style.root)},[$("div",{class:v([o.$style.dialog,o.$style[`size-${u.size}`],o.fullscreen&&o.$style.fullscreen,o.persistent&&i.value&&o.$style.persistent]),onAnimationend:d[0]||(d[0]=z=>i.value=!1)},[S(o.$slots,"default")],34),$("div",{class:v(o.$style.backdrop),onClick:d[1]||(d[1]=z=>m())},null,2)],2)):E("",!0)]))}}),O={$style:X};var g=B(j,[["__cssModules",O]]);const H="_title_55wke_1",J="_desc_55wke_9",K="_actions_55wke_17",Q="_button_55wke_23";var Y={title:H,desc:J,actions:K,button:Q};const Z=C({__name:"DialogPlaceholder",props:{modelValue:{type:Boolean},title:{default:"Lorem ipsum dolor sit amet"},desc:{default:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consequuntur earum eveniet excepturi fuga illum itaque laboriosam magni, mollitia necessitatibus nisi nostrum nulla placeat recusandae repellendus sapiente veniam voluptatem!"}},emits:["update:modelValue"],setup(r,{emit:n}){const u=r;return(a,i)=>(_(),L("div",{class:v(a.$style.root)},[$("h4",{class:v(a.$style.title)},U(u.title),3),$("p",{class:v(a.$style.desc)},U(u.desc),3),$("div",{class:v(a.$style.actions)},[t(p,{class:v(a.$style.button),variant:y(D).TEXT,size:y(w).SMALL,onClick:i[0]||(i[0]=m=>n("update:modelValue",!1))},{default:s(()=>[f(" close ")]),_:1},8,["class","variant","size"]),t(p,{class:v(a.$style.button),variant:y(D).TEXT,size:y(w).SMALL,onClick:i[1]||(i[1]=m=>n("update:modelValue",!1))},{default:s(()=>[f(" submit ")]),_:1},8,["class","variant","size"])],2)],2))}}),x={$style:Y};var c=B(Z,[["__cssModules",x]]);const oe=C({__name:"ComponentsDialogPage",setup(r){const n=V(!1),u=V(!1),a=V(!1),i=V(!1),m=V(!1),o=V(!1),d=V(!1);return(z,e)=>(_(),M(A,null,{default:s(()=>[t(k,{title:"Basic dialog",desc:"Manage model-value prop with the help of a state."},{default:s(()=>[t(p,{onClick:e[0]||(e[0]=l=>n.value=!0)},{default:s(()=>[f(" Basic dialog ")]),_:1}),t(g,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l)},{default:s(()=>[t(c,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l)},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(k,{title:"Dialog sizes",desc:"Use size={'small' | 'medium' | 'large'} prop with <VDialog> component for different sized dialog."},{default:s(()=>[t(p,{onClick:e[3]||(e[3]=l=>u.value=!0)},{default:s(()=>[f(" Small dialog ")]),_:1}),t(p,{onClick:e[4]||(e[4]=l=>a.value=!0)},{default:s(()=>[f(" Medium dialog ")]),_:1}),t(p,{onClick:e[5]||(e[5]=l=>i.value=!0)},{default:s(()=>[f(" Large dialog ")]),_:1}),t(g,{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=l=>u.value=l),size:y(b).SMALL},{default:s(()=>[t(c,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=l=>u.value=l),title:"Small Dialog"},null,8,["modelValue"])]),_:1},8,["modelValue","size"]),t(g,{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value=l),size:y(b).MEDIUM},{default:s(()=>[t(c,{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value=l),title:"Medium Dialog"},null,8,["modelValue"])]),_:1},8,["modelValue","size"]),t(g,{modelValue:i.value,"onUpdate:modelValue":e[11]||(e[11]=l=>i.value=l),size:y(b).LARGE},{default:s(()=>[t(c,{modelValue:i.value,"onUpdate:modelValue":e[10]||(e[10]=l=>i.value=l),title:"Large Dialog"},null,8,["modelValue"])]),_:1},8,["modelValue","size"])]),_:1}),t(k,{title:"Persistent dialog",desc:"Use a prop persistent to limit the possibility of closing without selecting"},{default:s(()=>[t(p,{onClick:e[12]||(e[12]=l=>o.value=!0)},{default:s(()=>[f(" Persistent dialog ")]),_:1}),t(g,{modelValue:o.value,"onUpdate:modelValue":e[14]||(e[14]=l=>o.value=l),persistent:""},{default:s(()=>[t(c,{modelValue:o.value,"onUpdate:modelValue":e[13]||(e[13]=l=>o.value=l)},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(k,{title:"Fullscreen dialog",desc:"Use a prop fullscreen to so that the dialog occupies the entire area"},{default:s(()=>[t(p,{onClick:e[15]||(e[15]=l=>m.value=!0)},{default:s(()=>[f(" Fullscreen dialog ")]),_:1}),t(g,{modelValue:m.value,"onUpdate:modelValue":e[17]||(e[17]=l=>m.value=l),fullscreen:""},{default:s(()=>[t(c,{modelValue:m.value,"onUpdate:modelValue":e[16]||(e[16]=l=>m.value=l)},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(k,{title:"Overflow dialog",desc:"When content overflows, a scroll will appear."},{default:s(()=>[t(p,{onClick:e[18]||(e[18]=l=>d.value=!0)},{default:s(()=>[f(" Fullscreen dialog ")]),_:1}),t(g,{modelValue:d.value,"onUpdate:modelValue":e[20]||(e[20]=l=>d.value=l)},{default:s(()=>[t(c,{modelValue:d.value,"onUpdate:modelValue":e[19]||(e[19]=l=>d.value=l),desc:"Lorem ipsum dolor ".repeat(400)},null,8,["modelValue","desc"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{oe as default};