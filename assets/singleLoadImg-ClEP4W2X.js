import{d as I,k,l as d,o as r,c,b as g,F as b,r as C,m as j,t as u,n as x,u as h,q as y,p as $,i as P,_ as w}from"./index-BnFIS60n.js";const S=i=>($("data-v-421a092a"),i=i(),P(),i),B={class:"page-container"},N={class:"pl-2"},V=S(()=>g("p",null,"图片列表：",-1)),A=I({__name:"singleLoadImg",setup(i){const o="/demo/",l=k([{path:`${o}image/imgLoad/img1.jpg`,state:""},{path:`${o}image/imgLoad/img0.jpg`,state:""},{path:`${o}image/imgLoad/img3.jpg`,state:""},{path:`${o}image/imgLoad/img4.png`,state:""},{path:`${o}image/imgLoad/img5.jpg`,state:""},{path:`${o}image/imgLoad/img6.jpg`,state:""}]),p=d(),f=s=>new Promise((e,a)=>{const t=new Image;s.state="加载中",t.setAttribute("src",s.path),t.setAttribute("class","img-item"),t.onload=()=>{setTimeout(()=>{s.state="加载成功",e({success:!0,img:t})},1e3)},t.onerror=L=>{s.state="加载失败",a({success:!1,errMsg:L})}});function _(){const s=[];l.forEach(n=>{s.push(()=>f(n))}),s.reduce((n,e)=>n.then(()=>e().then(a=>{var t;a&&a.success&&((t=p.value)==null||t.appendChild(a.img))}).catch(a=>(console.log(" 图片加载失败 =====> e:",a),Promise.resolve()))),Promise.resolve())}const m=d(!1);function v(){m.value=!0,_()}return(s,n)=>(r(),c("div",B,[g("div",N,[V,(r(!0),c(b,null,C(h(l),e=>(r(),c("p",{key:e.path},[j(u(e.path)+" ",1),g("span",{class:x(["ml-2",{loading:e.state==="加载中",fail:e.state==="加载失败",success:e.state==="加载成功"}])},u(e.state),3)]))),128))]),h(m)?y("",!0):(r(),c("div",{key:0,class:"load-btn p-1 bg-cyan inline-block cursor-pointer",onClick:v},"开始加载")),g("div",{class:"img-list flex justify-start flex-wrap",ref_key:"imgContent",ref:p},null,512)]))}}),F=w(A,[["__scopeId","data-v-421a092a"]]);export{F as default};