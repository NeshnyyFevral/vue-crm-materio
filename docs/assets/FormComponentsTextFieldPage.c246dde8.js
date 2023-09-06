import{b as a,c as r,e as U,d as P,r as m,y as i,l as u,k as o,C as p,m as t,F as f,B as L,p as $}from"./index.973ba0df.js";import{V as C}from"./VIconButton.ccc9e855.js";import{V}from"./VPreviewComponentCard.70830ab3.js";import{V as F}from"./VPreviewComponentPage.d26e1b6f.js";import{V as d,T as s,a as B,b}from"./VTextField.36909fea.js";import{G as g}from"./VButton.8bbfd4f6.js";const O={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},S=U("path",{fill:"currentColor",d:"M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12 9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"},null,-1),M=[S];function j(k,x){return a(),r("svg",O,M)}var z={render:j};const D={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"20",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},N=U("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0 9.821 9.821 0 0 0-17.64 0Z"},null,-1),Z=[N];function E(k,x){return a(),r("svg",D,Z)}var G={render:E};const H={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},R=U("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"},null,-1),W=[R];function X(k,x){return a(),r("svg",H,W)}var q={render:X};const ae=P({__name:"FormComponentsTextFieldPage",setup(k){const x=m(""),_=m(""),h=m(""),c=m(""),A=m(""),y=m(""),v=m(""),w=m(!0),T=()=>w.value?z:G,I=()=>w.value?b.PASSWORD:b.TEXT;return(J,l)=>(a(),i(F,null,{default:u(()=>[o(V,{title:"Input colors",desc:"Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VTextField> component for different colored inputs."},{default:u(()=>[(a(!0),r(f,null,p(Object.keys(t(g)),e=>(a(),i(d,{key:e,modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=n=>x.value=n),label:t(g)[e],color:t(g)[e]},null,8,["modelValue","label","color"]))),128))]),_:1}),o(V,{title:"Input disabled and readonly",desc:"Use {disabled | readonly}=true."},{default:u(()=>[(a(!0),r(f,null,p(Object.keys(t(s)),e=>(a(),i(d,{key:e,modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=n=>c.value=n),variant:t(s)[e],label:t(s)[e]},null,8,["modelValue","variant","label"]))),128)),(a(!0),r(f,null,p(Object.keys(t(s)),e=>(a(),i(d,{key:e,modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=n=>c.value=n),variant:t(s)[e],label:`${t(s)[e]} + disabled`,disabled:""},null,8,["modelValue","variant","label"]))),128)),(a(!0),r(f,null,p(Object.keys(t(s)),e=>(a(),i(d,{key:e,modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=n=>c.value=n),variant:t(s)[e],label:`${t(s)[e]} + readonly`,readonly:""},null,8,["modelValue","variant","label"]))),128))]),_:1}),o(V,{title:"Input variants",desc:"Use variant={'outlined' | 'standard'}"},{default:u(()=>[(a(!0),r(f,null,p(Object.keys(t(s)),e=>(a(),i(d,{key:e,modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=n=>_.value=n),variant:t(s)[e],label:t(s)[e]},null,8,["modelValue","variant","label"]))),128))]),_:1}),o(V,{title:"Input sizes",desc:"Use size={'small' | 'normal'}"},{default:u(()=>[(a(!0),r(f,null,p(Object.keys(t(B)),e=>(a(),i(d,{key:e,modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=n=>h.value=n),size:t(B)[e],label:t(B)[e]},null,8,["modelValue","size","label"]))),128))]),_:1}),o(V,{title:"Input types",desc:"Use type={'text' | 'password' | 'number' | 'search'}"},{default:u(()=>[(a(!0),r(f,null,p(Object.keys(t(b)),e=>(a(),i(d,{key:e,modelValue:A.value,"onUpdate:modelValue":l[6]||(l[6]=n=>A.value=n),label:t(b)[e],type:t(b)[e]},null,8,["modelValue","label","type"]))),128))]),_:1}),o(V,{title:"Input placeholder and helper text",desc:"Use \xABplaceholder\xBB and \xABhelp-text\xBB prop"},{default:u(()=>[o(d,{modelValue:y.value,"onUpdate:modelValue":l[7]||(l[7]=e=>y.value=e),label:"Label",placeholder:"Placeholder"},null,8,["modelValue"]),o(d,{modelValue:y.value,"onUpdate:modelValue":l[8]||(l[8]=e=>y.value=e),label:"Label","help-text":"Some important text!"},null,8,["modelValue"])]),_:1}),o(V,{title:"Input prefix and suffix",desc:"Use \xABprefix\xBB and \xABsuffix\xBB slots to add icons (often used for password fields, user profiles) or default text (kg, km, m and etc.)."},{default:u(()=>[o(d,{modelValue:v.value,"onUpdate:modelValue":l[9]||(l[9]=e=>v.value=e),label:"Label"},{prefix:u(()=>[o(C,null,{default:u(()=>[o(t(q))]),_:1})]),_:1},8,["modelValue"]),o(d,{modelValue:v.value,"onUpdate:modelValue":l[11]||(l[11]=e=>v.value=e),label:"Label",type:I()},{suffix:u(()=>[o(C,{onClick:l[10]||(l[10]=e=>w.value=!w.value)},{default:u(()=>[(a(),i(L(T())))]),_:1})]),_:1},8,["modelValue","type"]),o(d,{modelValue:v.value,"onUpdate:modelValue":l[12]||(l[12]=e=>v.value=e),label:"Label"},{suffix:u(()=>[$(" kg ")]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{ae as default};
