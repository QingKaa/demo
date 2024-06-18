import{d as p,a as _,h as v,o as y,c as k,b as g,u as M}from"./index-BGph44bk.js";function x(t,n){const o=document.createElement("canvas"),r="150px",a="130px";o.setAttribute("width",r+"px"),o.setAttribute("height",a+"px");const e=o.getContext("2d");e.textAlign="center",e.textBaseline="middle",e.font="20px Arial",e.fillStyle="rgba(0,0,0,0.5)",e.rotate(Math.PI/180*30),e.fillText(n,50,50);const i=t.style.zIndex||1e3,b=o.toDataURL(),c=`__waterMark_instance_${Date.now()}`,m=document.querySelector(`.${c}`),l=m||document.createElement("div"),h=`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    pointer-events:none;
    background-repeat: repeat;
    z-index:${i};
    background-image: url(${b});
    `;l.setAttribute("style",h),l.classList.add(c),m||(t.style.position="relative",t.insertBefore(l,t.firstChild));const f=window.MutationObserver||window.WebKitMutationObserver;if(f){let w=new f(function(){const s=document.querySelector(`.${c}`);let d=!s;if(s){const u=window.getComputedStyle(s);d=u.display=="none"||u.visibility=="hidden"||Number(u.opacity)<.1||s.getAttribute("style")!==h,d&&A(t,s)}d&&(w.disconnect(),x(t,n))});w.observe(t,{attributes:!0,subtree:!0,childList:!0})}}function A(t,n){try{t.removeChild(n)}catch(o){console.log(" moveWaterMark =====> error:",o)}}function C(t,n,o){const r=new Image;r.src=t,r.crossOrigin="anonymous",r.onload=function(){const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const e=a.getContext("2d");e.drawImage(r,0,0),e.textAlign="right",e.textBaseline="bottom",e.font="20px Arial",e.fillStyle=n.textColor||"rgba(0,0,0,0.5)",e.fillText(n.content||"清咖",r.width-(n.offsetRight||10),r.height-(n.offsetBottom||10));const i=a.toDataURL();o&&o(i)}}const S="/demo/assets/disturb-DDP_uFZ9.jpg",B={class:"waterMark h-full overflow-hidden relative",id:"waterMarkParent"},I=g("h1",{class:"text-center"},"水印",-1),U=["src"],$=p({__name:"waterMark",setup(t){const n=_("");return v(()=>{x(document.getElementById("waterMarkParent"),"清咖"),C(S,{content:"清咖",textColor:"white"},o=>{n.value=o})}),(o,r)=>(y(),k("div",B,[I,g("img",{src:M(n),alt:"",class:"w-300px h-300px"},null,8,U)]))}});export{$ as default};
