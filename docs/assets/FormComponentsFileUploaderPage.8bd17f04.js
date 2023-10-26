import{V as g}from"./VPreviewComponentCard.a8f7575d.js";import{C as k}from"./cross.a63e86ef.js";import{b as c,c as d,e as a,d as V,S as M,r as B,n as t,k as l,l as u,p as h,t as y,_ as F,F as N,C as S,m as f,D as w}from"./index.ffeb54e1.js";import{a as U,V as z}from"./VButton.a2f80ca7.js";import{a as j,V as A}from"./VIconButton.e623e9fb.js";import{V as D,a as H}from"./VOffset.dc95fc7a.js";import{V as T}from"./VTitle.893a08ef.js";import{G as R}from"./Colors.809f6113.js";const E={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","font-size":"1.5rem",class:"iconify iconify--mdi",width:"1em",height:"1em",viewBox:"0 0 24 24"},I=a("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"},null,-1),L=[I];function P(_,s){return c(),d("svg",E,L)}var G={render:P},O="/vue-crm-materio/assets/upload.4a14cec6.png";const W="_root_1xilh_1",q="_input_1xilh_5",X="_dropzone_1xilh_11",Z="_text_1xilh_22",J="_desc_1xilh_25",K="_img_1xilh_29";var Q={root:W,input:q,dropzone:X,text:Z,desc:J,img:K};const Y=["multiple"],ee=V({__name:"VFileUploader",props:{title:{default:""},desc:{default:""},multiple:{type:Boolean,default:!1},maxCount:{default:5},maxSize:{default:Number.MAX_SAFE_INTEGER},name:{default:""},cleanAfterLoad:{type:Boolean,default:!1}},emits:["upload","onMaxWeight"],setup(_,{emit:s}){const i=_,v=M(),e=B(null),n=o=>{const m=Array.from(o),p=[],b=[];if(m.length>i.maxCount){v.error(`Max ${i.maxCount} files to upload!`);return}for(const $ of m)$.size<i.maxSize?p.push($):b.push($.name);p.length&&s("upload",{name:i.name,files:p}),b.length&&s("onMaxWeight",{name:i.name,names:b}),i.cleanAfterLoad&&(e.value.value="")},r=o=>{const m=o.dataTransfer;if(m===null)return;const{files:p}=m;n(p)},x=o=>{n(o.target.files)};return(o,m)=>(c(),d("label",{class:t(o.$style.root)},[a("input",{ref_key:"inputRef",ref:e,class:t(o.$style.input),multiple:i.multiple,type:"file",onDrop:r,onChange:x},null,42,Y),a("div",{class:t(o.$style.dropzone)},[a("img",{class:t(o.$style.img),src:O,alt:"upload"},null,2),a("div",{class:t(o.$style.text)},[l(D,{mb:10},{default:u(()=>[l(T,{variant:"heading5"},{default:u(()=>[h(y(o.title),1)]),_:1})]),_:1}),l(H,{class:t(o.$style.desc),variant:"subtitle1"},{default:u(()=>[h(y(o.desc),1)]),_:1},8,["class"])],2)],2)],2))}}),te={$style:Q};var le=F(ee,[["__cssModules",te]]);const oe="_root_1bb3j_1",se="_files_1bb3j_5",ae="_file_1bb3j_5",ie="_fileName_1bb3j_21",ne="_fileSize_1bb3j_28",re="_actions_1bb3j_36",ue="_button_1bb3j_39",ce="_img_1bb3j_43",de="_remove_1bb3j_51";var me={root:oe,files:se,file:ae,fileName:ie,fileSize:ne,actions:re,button:ue,img:ce,remove:de};const pe=V({__name:"FileUploaderPresentation",props:{title:{default:""},desc:{default:""},name:{default:""},multiple:{type:Boolean,default:!1},maxCount:{default:5}},setup(_){const s=B([]),i=e=>{const{files:n}=e;s.value=n.map(r=>({file:r,id:Math.random().toString(16).substring(2,8)}))},v=e=>{e===null?s.value=[]:s.value=[...s.value].filter(n=>n.id!==e)};return(e,n)=>(c(),d("div",{class:t(e.$style.root)},[l(le,{"clean-after-load":"",title:e.title,desc:e.desc,multiple:e.multiple,name:e.name,"max-count":e.maxCount,onUpload:i},null,8,["title","desc","multiple","name","max-count"]),a("div",{class:t(e.$style.files)},[(c(!0),d(N,null,S(s.value,r=>(c(),d("div",{key:r.file.name,class:t(e.$style.file)},[a("div",{class:t(e.$style.img)},[l(f(G))],2),a("div",{class:t(e.$style.text)},[a("p",{class:t(e.$style.fileName)},y(r.file.name),3),a("p",{class:t(e.$style.fileSize)},y(r.file.size.toFixed(1))+" kb ",3)],2),a("div",{class:t(e.$style.remove)},[l(A,{size:f(j).SMALL,onClick:x=>v(r.id)},{default:u(()=>[l(f(k))]),_:2},1032,["size","onClick"])],2)],2))),128))],2),s.value.length?(c(),d("div",{key:0,class:t(e.$style.actions)},[l(z,{color:f(R).ERROR,variant:f(U).OUTLINED,class:t(e.$style.button),onClick:n[0]||(n[0]=r=>v(null))},{default:u(()=>[h(" Remove all ")]),_:1},8,["color","variant","class"]),l(z,{class:t(e.$style.button)},{default:u(()=>[h(" Upload files ")]),_:1},8,["class"])],2)):w("",!0)],2))}}),fe={$style:me};var C=F(pe,[["__cssModules",fe]]);const _e="_root_1rqpz_1";var ve={root:_e};const he=V({__name:"FormComponentsFileUploaderPage",setup(_){return(s,i)=>(c(),d("div",{class:t(s.$style.root)},[l(g,{title:"File uploader basic"},{default:u(()=>[l(C,{title:"Drop files here or click to upload.",desc:"Drop files here or click browse thorough your machine",name:"upload"})]),_:1}),l(g,{title:"File uploader multiple",desc:"Use \xABmultiple\xBB prop to upload multiple files."},{default:u(()=>[l(C,{title:"Drop files here or click to upload.",desc:"Drop files here or click browse thorough your machine",name:"upload",multiple:""})]),_:1}),l(g,{title:"File uploader with count limit",desc:"Use \xABmax-count\xBB prop, to limit count files to upload."},{default:u(()=>[l(C,{title:"Drop files here or click to upload.",desc:"Max 2 files to upload.",name:"upload",multiple:"","max-count":2})]),_:1})],2))}}),ye={$style:ve};var Be=F(he,[["__cssModules",ye]]);export{Be as default};
