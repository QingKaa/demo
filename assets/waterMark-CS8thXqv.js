import{d as b,k as p,p as v,o as _,c as k,b as y,u as M}from"./index-BdHghL4a.js";function g(e,n){const o=document.createElement("canvas"),r="150px",a="130px";o.setAttribute("width",r+"px"),o.setAttribute("height",a+"px");const t=o.getContext("2d");t.textAlign="center",t.textBaseline="middle",t.font="20px Arial",t.fillStyle="rgba(0,0,0,0.5)",t.rotate(Math.PI/180*30),t.fillText(n,50,50);const s=e.style.zIndex||1e3,x=o.toDataURL(),c=`__waterMark_instance_${Date.now()}`,m=document.querySelector(`.${c}`),l=m||document.createElement("div"),h=`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    pointer-events:none;
    background-repeat: repeat;
    z-index:${s};
    background-image: url(${x});
    `;l.setAttribute("style",h),l.classList.add(c),m||(e.style.position="relative",e.insertBefore(l,e.firstChild));const f=window.MutationObserver||window.WebKitMutationObserver;if(f){let w=new f(function(){const i=document.querySelector(`.${c}`);let d=!i;if(i){const u=window.getComputedStyle(i);d=u.display=="none"||u.visibility=="hidden"||Number(u.opacity)<.1||i.getAttribute("style")!==h,d&&A(e,i)}d&&(w.disconnect(),g(e,n))});w.observe(e,{attributes:!0,subtree:!0,childList:!0})}}function A(e,n){try{e.removeChild(n)}catch(o){console.log(" moveWaterMark =====> error:",o)}}function C(e,n,o){const r=new Image;r.src=e,r.crossOrigin="anonymous",r.onload=function(){const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const t=a.getContext("2d");t.drawImage(r,0,0),t.textAlign="right",t.textBaseline="bottom",t.font="20px Arial",t.fillStyle=n.textColor||"rgba(0,0,0,0.5)",t.fillText(n.content||"清咖",r.width-(n.offsetRight||10),r.height-(n.offsetBottom||10));const s=a.toDataURL();o&&o(s)}}const S="/demo/assets/disturb-DDP_uFZ9.jpg",B={class:"waterMark h-full overflow-hidden relative",id:"waterMarkParent"},I=["src"],W=b({__name:"waterMark",setup(e){const n=p("");return v(()=>{g(document.getElementById("waterMarkParent"),"清咖"),C(S,{content:"清咖",textColor:"white"},o=>{n.value=o})}),(o,r)=>(_(),k("div",B,[y("img",{src:M(n),alt:"",class:"w-300px h-300px mx-auto mt-20"},null,8,I)]))}});export{W as default};
