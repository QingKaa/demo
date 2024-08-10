import{E as _}from"./scrollbar-sSlFFJrl.js";import{v as r,B as c}from"./VSlideIn-DaMdDCFT.js";import"./common-pmpcBkC7.js";import{d as h,f as v,o as t,c as b,a as o,w as s,g as f,b as e,e as d,u as l,h as p,p as x,i as w,_ as k}from"./index-BnFIS60n.js";import"./isObject-CcLpfYHe.js";const a=i=>(x("data-v-4290fc95"),i=i(),w(),i),q={class:"h-full main-bg"},y={class:"page-container px-3"},C={class:"h-400px"},S=a(()=>e("p",{class:"p2"},"使用CSS grid 实现高度过渡效果",-1)),B={class:"btn"},I=a(()=>e("div",{class:"btn-area p-2 bg-sky-500 color-white rd"},"Hover Me",-1)),j={class:"detail px-2"},z={class:"content rd bg-sky-500 rd"},E=a(()=>e("div",{class:"p2 color-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia cupiditate quo velit odit qui. Mollitia rem quibusdam cupiditate non quo omnis. Corporis natus quia inventore excepturi facere totam nam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam recusandae voluptatibus architecto aperiam? Officia alias quidem ducimus amet odit deserunt sed sunt, maiores deleniti, error sequi aperiam blanditiis fuga veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat optio aut magni eveniet, aliquam laboriosam voluptas a ad tenetur nesciunt vero saepe perspiciatis ea ab dolor nihil, earum voluptates possimus. ",-1)),L=a(()=>e("p",null,"常规使用",-1)),M={class:"mb-2 font-size-12px"},N=a(()=>e("div",{class:"grid-box2 grid mx-auto w-fit"},[e("div",{class:"item bg-sky"},"1"),e("div",{class:"item bg-amber"},"2"),e("div",{class:"item bg-cyan"},"3"),e("div",{class:"item bg-green"},"4"),e("div",{class:"item bg-fuchsia"},"5"),e("div",{class:"item bg-rose"},"6"),e("div",{class:"item bg-purple"},"7"),e("div",{class:"item bg-violet"},"8"),e("div",{class:"item bg-indigo"},"9")],-1)),V=a(()=>e("p",null,"grid-area 实现特殊布局 + css旋转视差动画",-1)),D={class:"mb-2 font-size-12px"},F=a(()=>e("div",{class:"box-wrapper p-20 flex items-center justify-center"},[e("div",{class:"grid-box3 w-fit"},[e("div",{class:"area area-a bg-zinc"},[e("img",{src:"https://picsum.photos/315/150?i=a",alt:""})]),e("div",{class:"area area-b bg-pink"},[e("img",{src:"https://picsum.photos/150/315?i=b",alt:""})]),e("div",{class:"area area-c bg-purple"},[e("img",{src:"https://picsum.photos/315/150?i=c",alt:""})]),e("div",{class:"area area-d bg-amber"},[e("img",{src:"https://picsum.photos/150/315?i=d",alt:""})]),e("div",{class:"area area-e bg-sky"},[e("img",{src:"https://picsum.photos/150/150?i=e",alt:""})])])],-1)),H={components:{highlightjs:f.component}},O=h({...H,__name:"grid",setup(i){const u=`
.grid-box2 {
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: 100px;
    row-gap: 10px;
    column-gap: 10px;
}
`,g=`
.grid-box3 {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    row-gap: 10px;
    column-gap: 10px;
    grid-template-areas:
        'a a b'
        'd e b'
        'd c c';

    .area-a {
        grid-area: a;
    }

    .area-b {
        grid-area: b;
    }

    .area-c {
        grid-area: c;
    }

    .area-d {
        grid-area: d;
    }

    .area-e {
        grid-area: e;
    }
}`;return(A,G)=>{const n=_,m=v("highlightjs");return t(),b("div",q,[o(n,null,{default:s(()=>[e("div",y,[d((t(),p(c,null,{default:s(()=>[e("div",C,[S,e("div",B,[I,e("div",j,[e("div",z,[o(n,null,{default:s(()=>[E]),_:1})])])])])]),_:1})),[[l(r)]]),d((t(),p(c,null,{default:s(()=>[L,e("div",M,[o(m,{autodetect:"",code:u})]),N]),_:1})),[[l(r)]]),d((t(),p(c,null,{default:s(()=>[V,e("div",D,[o(m,{autodetect:"",code:g})]),F]),_:1})),[[l(r)]])])]),_:1})])}}}),T=k(O,[["__scopeId","data-v-4290fc95"]]);export{T as default};
