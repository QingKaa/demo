import{X as W,Z as C,_ as H,C as _,a2 as k,a3 as I,V as y,a4 as S,c as g,M as v,z as E,$ as L,a0 as R,Y as T}from"./OrbitControls-sBDYM_KL.js";import{O as D}from"./OBB-Cmtq50qs.js";import{S as O}from"./stats.module--VATS4Kh.js";import{p as V,o as A,c as F,b as G}from"./index-BdHghL4a.js";const X={class:"main-container w-full h-full"},$={__name:"index",setup(Y){let r,l,s,x,u,f,w,m;const i=[],b=new W;V(()=>{j(),M()});function j(){r=new C(70,window.innerWidth/window.innerHeight,1,1e3),r.position.set(0,0,75),l=new H,l.background=new _(16777215),x=new T,w=new k;const n=new I(16777215,2236962,1.5);n.position.set(1,1,1),l.add(n);const t=new y(10,5,6),a=new S(t.x,t.y,t.z);a.userData.obb=new D,a.userData.obb.halfSize.copy(t).multiplyScalar(.5);for(let e=0;e<100;e++){const o=new g(a,new v({color:65280}));o.matrixAutoUpdate=!1,o.position.x=Math.random()*80-40,o.position.y=Math.random()*80-40,o.position.z=Math.random()*80-40,o.rotation.x=Math.random()*2*Math.PI,o.rotation.y=Math.random()*2*Math.PI,o.rotation.z=Math.random()*2*Math.PI,o.scale.x=Math.random()+.5,o.scale.y=Math.random()+.5,o.scale.z=Math.random()+.5,l.add(o),o.userData.obb=new D,o.userData.obb.copy(o.geometry.userData.obb),o.userData.obb.applyMatrix4(o.matrixWorld),i.push(o)}m=new g(a,new E({color:0,wireframe:!0})),s=new L({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),document.getElementById("target").appendChild(s.domElement),u=new R(r,s.domElement),u.enableDamping=!0,f=new O,document.body.appendChild(f.dom),window.addEventListener("resize",P),document.addEventListener("click",z)}function z(n){n.preventDefault(),b.x=n.clientX/window.innerWidth*2-1,b.y=-(n.clientY/window.innerHeight)*2+1,w.setFromCamera(b,r);const t=new y,a=[];for(let e=0,o=i.length;e<o;e++){const c=i[e],h=c.userData.obb,d=w.ray;if(h.intersectRay(d,t)!==null){const p=d.origin.distanceTo(t);a.push({distance:p,object:c})}}if(a.length>0)a.sort(B),a[0].object.add(m);else{const e=m.parent;e&&e.remove(m)}}function B(n,t){return n.distance-t.distance}function P(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function M(){requestAnimationFrame(M),u.update();const n=x.getDelta();for(let t=0,a=i.length;t<a;t++){const e=i[t];e.rotation.x+=n*Math.PI*.2,e.rotation.y+=n*Math.PI*.1,e.updateMatrix(),e.updateMatrixWorld(),e.userData.obb.copy(e.geometry.userData.obb),e.userData.obb.applyMatrix4(e.matrixWorld),e.material.color.setHex(65280)}for(let t=0,a=i.length;t<a;t++){const e=i[t],o=e.userData.obb;for(let c=t+1,h=i.length;c<h;c++){const d=i[c],p=d.userData.obb;o.intersectsOBB(p)===!0&&(e.material.color.setHex(16711680),d.material.color.setHex(16711680))}}s.render(l,r),f.update()}return(n,t)=>(A(),F("div",X,t[0]||(t[0]=[G("div",{id:"target",class:"w-full h-full"},null,-1)])))}};export{$ as default};