import{V as o}from"./VAvatar.7481f625.js";import{V as s,a as p,b as B,B as V}from"./VBadge.c4a2b375.js";import{V as b,a as h}from"./VButton.fb080fa7.js";import{V as i}from"./VPreviewComponentCard.ee6fdf35.js";import{V as y}from"./VPreviewComponentPage.6642e263.js";import{G as d}from"./Colors.efb7d88d.js";import{g as n}from"./PathTools.484cb364.js";import{d as x,r as C,b as r,x as c,l as e,k as a,c as f,B as m,u as t,e as u,F as g,m as k}from"./index.fd1b77bf.js";import"./VTitle.8efa3e19.js";const w=["src"],z=["src"],O=["src"],T=["src"],P=["src"],U=["src"],j=["src"],E=["src"],L=["src"],M=x({__name:"ComponentsBadgePage",setup(G){const v=C(2);return(N,_)=>(r(),c(y,null,{default:e(()=>[a(i,{title:"Badge colors",desc:"Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VBadge> component for different colored badge."},{default:e(()=>[(r(!0),f(g,null,m(Object.keys(t(d)),l=>(r(),c(s,{key:l,value:4,color:t(d)[l]},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,w)]),_:1})]),_:2},1032,["color"]))),128))]),_:1}),a(i,{title:"Badge sizes",desc:"Use size={'small' | 'normal} prop with <VBadge> component for different sized badge."},{default:e(()=>[(r(!0),f(g,null,m(Object.keys(t(p)),l=>(r(),c(s,{key:l,value:3,size:t(p)[l]},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/2.png"),alt:"1"},null,8,z)]),_:1})]),_:2},1032,["size"]))),128))]),_:1}),a(i,{title:"Badge positions",desc:"Use position={'right-top' | 'right-bottom' | 'left-bottom' | 'left-top'} prop with <VBadge> component   for different positioned badge."},{default:e(()=>[(r(!0),f(g,null,m(Object.keys(t(B)),l=>(r(),c(s,{key:l,value:1,position:t(B)[l]},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/3.png"),alt:"1"},null,8,O)]),_:1})]),_:2},1032,["position"]))),128))]),_:1}),a(i,{title:"Badge light",desc:"Use variant={'light'} to reverse the colors of the badge."},{default:e(()=>[(r(!0),f(g,null,m(Object.keys(t(d)),l=>(r(),c(s,{key:l,value:4,color:t(d)[l],variant:t(V).LIGHT},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,T)]),_:1})]),_:2},1032,["color","variant"]))),128))]),_:1}),a(i,{title:"Badge dots",desc:"Use variant={'dot'} to remove badge text."},{default:e(()=>[(r(!0),f(g,null,m(Object.keys(t(d)),l=>(r(),c(s,{key:l,value:4,color:t(d)[l],variant:t(V).DOT,size:t(p).SMALL},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,P)]),_:1})]),_:2},1032,["color","variant","size"]))),128))]),_:1}),a(i,{title:"Badge max value",desc:"Use prop max-value, to limit current value.",gap:20},{default:e(()=>[a(s,{"max-value":9,value:10},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,U)]),_:1})]),_:1}),a(s,{"max-value":99,value:100},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,j)]),_:1})]),_:1}),a(s,{"max-value":999,value:1e3},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/1.png"),alt:"1"},null,8,E)]),_:1})]),_:1})]),_:1}),a(i,{title:"Badge visibility"},{default:e(()=>[a(s,{value:v.value},{default:e(()=>[a(o,null,{default:e(()=>[u("img",{src:t(n)("avatars/3.png"),alt:"1"},null,8,L)]),_:1})]),_:1},8,["value"]),a(b,{variant:t(h).TEXT,color:t(d).ERROR,onClick:_[0]||(_[0]=l=>v.value-=1)},{default:e(()=>[k(" remove ")]),_:1},8,["variant","color"]),a(b,{variant:t(h).TEXT,onClick:_[1]||(_[1]=l=>v.value+=1)},{default:e(()=>[k(" add ")]),_:1},8,["variant"])]),_:1})]),_:1}))}});export{M as default};