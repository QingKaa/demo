import{d as v,j as k,k as p,o as r,c as i,b as c,F as b,r as j,l as C,t as d,n as I,u,m as x,_ as y}from"./index-BdHghL4a.js";const $={class:"page-container"},P={class:"pl-2"},w=v({__name:"singleLoadImg",setup(B){const n="/demo/",g=k([{path:`${n}image/imgLoad/img1.jpg`,state:""},{path:`${n}image/imgLoad/img0.jpg`,state:""},{path:`${n}image/imgLoad/img3.jpg`,state:""},{path:`${n}image/imgLoad/img4.png`,state:""},{path:`${n}image/imgLoad/img5.jpg`,state:""},{path:`${n}image/imgLoad/img6.jpg`,state:""}]),l=p(),f=s=>new Promise((e,o)=>{const t=new Image;s.state="加载中",t.setAttribute("src",s.path),t.setAttribute("class","img-item"),t.onload=()=>{setTimeout(()=>{s.state="加载成功",e({success:!0,img:t})},1e3)},t.onerror=L=>{s.state="加载失败",o({success:!1,errMsg:L})}});function h(){const s=[];g.forEach(a=>{s.push(()=>f(a))}),s.reduce((a,e)=>a.then(()=>e().then(o=>{var t;o&&o.success&&((t=l.value)==null||t.appendChild(o.img))}).catch(o=>(console.log(" 图片加载失败 =====> e:",o),Promise.resolve()))),Promise.resolve())}const m=p(!1);function _(){m.value=!0,h()}return(s,a)=>(r(),i("div",$,[c("div",P,[a[0]||(a[0]=c("p",null,"图片列表：",-1)),(r(!0),i(b,null,j(u(g),e=>(r(),i("p",{key:e.path},[C(d(e.path)+" ",1),c("span",{class:I(["ml-2",{loading:e.state==="加载中",fail:e.state==="加载失败",success:e.state==="加载成功"}])},d(e.state),3)]))),128))]),u(m)?x("",!0):(r(),i("div",{key:0,class:"load-btn p-1 bg-cyan inline-block cursor-pointer",onClick:_},"开始加载")),c("div",{class:"img-list flex justify-start flex-wrap",ref_key:"imgContent",ref:l},null,512)]))}}),V=y(w,[["__scopeId","data-v-421a092a"]]);export{V as default};
