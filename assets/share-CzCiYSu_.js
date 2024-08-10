import{h as x,K as w,r as b,x as B,V as T,N as W,Q as v,U as P}from"./OrbitControls-DYZe1cjh.js";function C(o,r,e){let{x:f,y:t,z:n}=d(r);const i=new x({transparent:!0,map:o,alphaTest:.4,depthFunc:w}),s=new b(i);return s.position.set(f,t,n),s.scale.set(e,e,1),s.center.set(.5,0),s}function d(o){var r=new B().setFromObject(o);let e=r.getCenter(new T),f=r.getSize(new T),t=e.x,n=e.y+f.y/2,i=e.z;return{x:t,y:n,z:i}}function k(o,r,e="#fff"){o.width=o.height=265*2;const t=o.getContext("2d"),n=2,i=52,s=70;t.clearRect(0,0,o.width,o.height),t.translate(0,o.height-n*(i+s)),t.scale(n,n),t.fillStyle="rgba(8, 10, 12, 0.904)",S(t,0,0,265,i,10),t.fill(),t.strokeStyle=e,t.lineWidth=2,S(t,0,0,265,i,10),t.stroke(),t.lineWidth=2,t.fillStyle=e,t.beginPath(),t.moveTo(265/2,i),t.lineTo(265/2,i+s),t.stroke(),t.closePath();let c=10,u=10,p=[],g=[];r.forEach(l=>{l.align==="left"?p.push(l):g.push(l)}),p.forEach(l=>{h(t,l.text,c,i/2,l.fontSize,l.color,l.fontBold),c+=t.measureText(l.text).width}),g.reverse().forEach(l=>{t.font=`${l.fontSize}px normal Arial`;let z=t.measureText(l.text).width;u+=z+5,h(t,l.text,265-u,i/2,l.fontSize,l.color,l.fontBold)}),t.setTransform(1,0,0,1,0,0);const a=new W(o);return a.minFilter=v,a.wrapS=a.wrapT=P,a}function h(o,r,e,f,t=16,n="#fff",i){o.beginPath(),o.font=`${t}px normal Arial`,o.fillStyle=n,o.textAlign="left",o.textBaseline="middle",o.fillText(r,e,f),i&&o.fillText(r,e,f),o.closePath()}function S(o,r,e,f,t,n){o.beginPath(),o.moveTo(r+n,e),o.lineTo(r+f-n,e),o.quadraticCurveTo(r+f,e,r+f,e+n),o.lineTo(r+f,e+t-n),o.quadraticCurveTo(r+f,e+t,r+f-n,e+t),o.lineTo(r+n,e+t),o.quadraticCurveTo(r,e+t,r,e+t-n),o.lineTo(r,e+n),o.quadraticCurveTo(r,e,r+n,e),o.closePath()}function R(o,r,e,f,t,n,i){let s=[];switch(o){case"PRESSURE":const c=n===t?"pressure":"temp";if(e[c]&&e[c]!==void 0){const a=`${e[c]}${c=="pressure"?"kPa":"°C"}`;f[c]?f[c].value=a:f[c]={order:c==="pressure"?1:2,value:a}}let p=Object.values(f).sort((a,l)=>a.order-l.order).map(a=>a.value);s=[{text:`${r}`,align:"left",fontSize:16,color:"#fff",fontBold:!0},{text:p.join(" | "),align:"right",fontSize:16,color:"#fff",fontBold:!0}];break;case"UNIT":{let a=e.temp_cold_set,l=[{text:r,align:"left",color:"#fff",fontSize:16,fontBold:!0}];a&&(l.push({text:"设定温度",align:"right",color:"rgba(255,255,255,0.7)",fontSize:12,fontBold:!1}),l.push({text:`${e.temp_cold_set}°C`,align:"right",color:"#fff",fontSize:16,fontBold:!0})),s=l;break}case"TOWER":s=[{text:r,color:"#fff",align:"left",fontSize:16,fontBold:!0}];break;case"FREEZE":case"COOLANT":{const a=e.freqset;let l=[{text:r,color:"#fff",align:"left",fontSize:16,fontBold:!0}];a&&(l.push({text:"设定频率",align:"right",color:"rgba(255,255,255,0.7)",fontSize:12,fontBold:!1}),l.push({text:a+"Hz",color:"#fff",align:"right",fontSize:16,fontBold:!0})),s=l;break}default:s=[];break}return i&&s.push({text:"故障",align:"right",color:"#f50616",fontSize:16,fontBold:!0}),s}function V(o,r){const e=new b(o);e.center.set(.5,.5);const{x:f,y:t,z:n}=d(r);return e.position.set(f,t,n),e.material.dir="toBig",e}function m(o,r){let e=o;for(;!r(e);)if(e=e.parent,e===null)return null;return e}function q(o,r,e){const{x:f,y:t,z:n}=d(o),s=new T(f,t,n).project(r),c=e.clientWidth/2,u=e.clientHeight/2,p=Math.round(s.x*c+c),g=Math.round(-s.y*u+u);return{x:p,y:g}}export{k as a,C as b,V as c,m as f,R as g,q as t};