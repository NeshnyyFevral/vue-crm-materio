import{d as h,r as t,o as m,a as p,b as v,c as w,e,w as d,v as u}from"./index.772e45c4.js";const f={class:"auth"},b={class:"auth__container"},g={class:"auth__auth-box"},y={class:"auth__main auth__main--login"},x=e("div",{class:"auth__logo"}," logo icon ",-1),k=e("h3",{class:"auth__title title-2xl-bold"}," Log in ",-1),E=e("button",{class:"auth__action"}," Log in ",-1),L=e("div",{class:"auth__image-icon"},[e("div",{class:"auth__icon"}," login icon ")],-1),U=h({__name:"LoginPage",setup(B){const n=t(""),i=t(""),c=t(!1),o=t(!1),r=s=>new Promise(a=>setTimeout(a,s)),_=async s=>{o.value||s.keyCode===13&&!c.value&&(o.value=!0,await r(1e3),o.value=!1)};return m(()=>{window.addEventListener("keyup",_)}),p(()=>{window.removeEventListener("keyup",_)}),(s,a)=>(v(),w("div",f,[e("div",b,[e("div",g,[e("div",y,[x,k,d(e("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),label:"Email*","label-class":"auth__label",placeholder:"Enter your email",type:"email","max-width":"",class:"auth__field"},null,512),[[u,n.value]]),d(e("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),label:"Password*","label-class":"auth__label",placeholder:"Your password",type:"password","max-width":"",class:"auth__field"},null,512),[[u,i.value]]),E])]),L])]))}});export{U as default};
