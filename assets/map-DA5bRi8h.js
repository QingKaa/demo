        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;  
        uniform float ringWidth;
        uniform float innerRadius;
        uniform sampler2D uTexture; 
        void main() {
          float dist = distance(vUv - 0.5, vec2(0.0));
          float patternInner = step(innerRadius, dist*2.0);
          float patternOuter = step(1.0 - (innerRadius + ringWidth), 1.0 - dist*2.0);
          float pattern = patternInner * patternOuter;

          vec4 texture = texture2D(uTexture, vUv);
          gl_FragColor.rgba = vec4(pattern*texture.r*1.0, pattern*texture.g*1.0, pattern*texture.b*1.4, texture.b*pattern);
        }
      `}),M=new v1(200,200),h=new P0(M,P);h.position.z=4,h.rotation.x=-Math.PI/2;const S=Math.PI/2;M1({fun({ctx:v,elapsedTime:x},w,F){let I=x/3;I/w%2<1?v.uniforms.innerRadius.value=1.5*Math.abs(Math.sin(I)):v.uniforms.innerRadius.value=0,v.uniforms.ringWidth.value=F},args:[S,.075],content:P,key:"planeFloor"}),g.add(h)}let a;function l(g){if(A(a),!g.length)return;const N=g[0].object||{},P=A1(N,p);P&&d(P)}function p(g){const{canSelected:N,code:P}=g.userData;return N&&P}function d(g){a=g,g.position.z=2}function A(g){g&&(g.position.z=0)}return(g,N)=>(C1(),x1("div",w9,C9))}});export{T9 as default};