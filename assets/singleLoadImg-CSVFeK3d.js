import{d as v,r as b,a as p,o as i,c as r,b as c,F as j,e as k,f as y,t as d,u,g as C}from"./index-BrOodJn2.js";const $={class:"page-container"},x={class:"pl-2"},I=c("p",null,"图片列表：",-1),P={class:"ml-2"},N=v({__name:"singleLoadImg",setup(w){const o="/demo/",g=b([{path:`${o}image/imgLoad/img1.jpg`,state:""},{path:`${o}image/imgLoad/img0.jpg`,state:""},{path:`${o}image/imgLoad/img3.jpg`,state:""},{path:`${o}image/imgLoad/img4.jpg`,state:""},{path:`${o}image/imgLoad/img5.jpg`,state:""},{path:`${o}image/imgLoad/img6.jpg`,state:""}]),m=p(),h=t=>new Promise((s,a)=>{const e=new Image;e.setAttribute("src",t.path),e.setAttribute("class","img-item"),e.onload=()=>{setTimeout(()=>{t.state="加载成功",s({success:!0,img:e})},1e3)},e.onerror=L=>{t.state="加载失败",a({success:!1,errMsg:L})}});function f(){const t=[];g.forEach(n=>{t.push(()=>h(n))}),t.reduce((n,s)=>n.then(()=>s().then(a=>{var e;a&&a.success&&((e=m.value)==null||e.appendChild(a.img))}).catch(a=>(console.log(" 图片加载失败 =====> e:",a),Promise.resolve()))),Promise.resolve())}const l=p(!1);function _(){l.value=!0,f()}return(t,n)=>(i(),r("div",$,[c("div",x,[I,(i(!0),r(j,null,k(u(g),s=>(i(),r("p",{key:s.path},[y(d(s.path)+" ",1),c("span",P,d(s.state),1)]))),128))]),u(l)?C("",!0):(i(),r("div",{key:0,class:"load-btn p-1 bg-cyan inline-block cursor-pointer",onClick:_},"开始加载")),c("div",{class:"img-list flex justify-start flex-wrap",ref_key:"imgContent",ref:m},null,512)]))}});export{N as default};