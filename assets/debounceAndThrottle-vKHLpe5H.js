import{a as v,i as k}from"./iFunc-DJAG35JR.js";import{d as m,r as d,o as t,c,b as e,F as n,e as r,g as x,u as a}from"./index-C4GdMXzn.js";const w=e("h1",{class:"text-center py-1"},"debounce 与 throttle",-1),y=e("p",{class:"text-center"},"点击查看执行效果",-1),g={class:"flex justify-start flex-wrap px-2"},C=e("div",{class:"block mb-6"},[e("div",{class:"flex flex-col"},[e("div",{class:"h-25px w-60px font-size-12px"},"点击 ->"),e("div",{class:"h-25px w-60px font-size-12px"},"执行 ->")])],-1),E={class:"flex flex-col"},j=e("div",{class:"items border w-10px h-25px bg-blue"},null,-1),z={key:0,class:"border w-10px h-25px bg-blue"},B={class:"flex justify-start flex-wrap px-2"},I=e("div",{class:"block mb-6"},[e("div",{class:"flex flex-col"},[e("div",{class:"h-25px w-60px font-size-12px"},"点击 ->"),e("div",{class:"h-25px w-60px font-size-12px"},"执行 ->")])],-1),L={class:"flex flex-col"},F=e("div",{class:"items border w-10px h-25px bg-sky"},null,-1),N={key:0,class:"border w-10px h-25px bg-sky"},q=m({__name:"debounceAndThrottle",setup(T){const o=d([]);let p=0;const u=()=>{let s=p++;o.push({index:s,isExec:!1}),h(s)},h=v(s=>{o[s].isExec=!0},600),i=d([]);let b=0;const _=()=>{let s=b++;i.push({index:s,isExec:!1}),f(s)},f=k(s=>{i[s].isExec=!0},600);return(s,V)=>(t(),c(n,null,[w,y,e("div",{class:"flex justify-center p-2"},[e("button",{class:"color-white bg-blue px-2 rd",onClick:u},"debounce")]),e("div",g,[C,(t(!0),c(n,null,r(a(o),l=>(t(),c("div",{class:"block mb-6",key:l.index},[e("div",E,[j,l.isExec?(t(),c("div",z)):x("",!0)])]))),128))]),e("div",{class:"flex justify-center p-2"},[e("button",{class:"color-white bg-blue px-2 rd",onClick:_},"throttle")]),e("div",B,[I,(t(!0),c(n,null,r(a(i),l=>(t(),c("div",{class:"block mb-6",key:l.index},[e("div",L,[F,l.isExec?(t(),c("div",N)):x("",!0)])]))),128))])],64))}});export{q as default};