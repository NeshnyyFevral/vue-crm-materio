import{V as u}from"./VPreviewComponentCard.70830ab3.js";import{V as v}from"./VPreviewComponentPage.d26e1b6f.js";import{V as o,T as n}from"./VTextField.36909fea.js";import{d as f,r as i,b as d,y as w,l as r,k as a,c as b,C as T,m,F as U}from"./index.973ba0df.js";import"./VButton.8bbfd4f6.js";const E=f({__name:"FormComponentsTextareaPage",setup(C){const s=i(""),t=i(""),V=i(""),p=i("");return(F,l)=>(d(),w(v,null,{default:r(()=>[a(u,{title:"Basic textarea",desc:"Use multiline prop with <VTextField>"},{default:r(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e),multiline:"","max-width":"",label:"Basic"},null,8,["modelValue"])]),_:1}),a(u,{title:"Multiline textarea",desc:"Use rows prop with <VTextField>, that to control visible rows."},{default:r(()=>[a(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),multiline:"","max-width":"",label:"2 rows",rows:"2"},null,8,["modelValue"]),a(o,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),multiline:"","max-width":"",label:"3 rows",rows:"3"},null,8,["modelValue"]),a(o,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value=e),multiline:"","max-width":"",label:"5 rows",rows:"5"},null,8,["modelValue"])]),_:1}),a(u,{title:"Textarea variants",desc:"Use variant={'standard' | 'outlined'}"},{default:r(()=>[(d(!0),b(U,null,T(Object.keys(m(n)),e=>(d(),w(o,{key:e,modelValue:V.value,"onUpdate:modelValue":l[4]||(l[4]=x=>V.value=x),multiline:"","max-width":"",label:m(n)[e],variant:m(n)[e],rows:"3"},null,8,["modelValue","label","variant"]))),128))]),_:1}),a(u,{title:"Error with textarea",desc:"Use error prop."},{default:r(()=>[a(o,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=e=>p.value=e),multiline:"","max-width":"",label:"Error",error:"",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1}))}});export{E as default};
