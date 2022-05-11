import{s as c,$ as r,r as d,n as p}from"./vendor.8226bdf7.js";import{b as f}from"./next-button.1a74693d.js";var v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=(o,i,t,n)=>{for(var a=n>1?void 0:n?m(i,t):i,e=o.length-1,s;e>=0;e--)(s=o[e])&&(a=(n?s(i,t,a):s(a))||a);return n&&a&&v(i,t,a),a};let l=class extends c{render(){const o=["l","m","n","o","p"],i=[];for(let t=0;t<o.length;t++){const n=Array(300).fill(o[t]);i.push(n)}return r`<article>
      <div class="background">
        <div class="rows">
          ${i.map(t=>r`<div class="row">${t.join("")}</div>`)}
        </div>
      </div>
      <div class="title">
        <span class="variable-font animate-width">Learning</span>
        <span class="variable-font animate-weight">Variable Fonts</span>
        <span class="variable-font animate-grade">& Symbols</span>
      </div>
      <div class="actions">
        <next-button @click=${()=>location.hash="/steps/1"}></next-button>
      </div>
    </article>`}};l.styles=d`
    .title {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      padding-top: var(--header-height);
      z-index: 0;
      font-size: 14vh;
      line-height: 1;
    }
    .title :last-child {
      padding-bottom: 10vh;
    }
    .variable-font {
      padding-left: 10vw;
      font-family: Google Sans;
    }
    @keyframes waveAnimation {
      0% {
        font-variation-settings: "wght" 50, "GRAD" 50, "opsz" 5;
      }
      50% {
        font-variation-settings: "wght" 400, "GRAD" -50, "opsz" 16;
      }
      100% {
        font-variation-settings: "wght" 50, "GRAD" 50, "opsz" 5;
      }
    }
    .animate-grade {
      animation: animateGrade 20s infinite;
    }
    .rows {
      font-family: RobotoFlex;
      font-style: normal;
      font-weight: normal;
      font-size: 120px;
      line-height: 96px;
    }
    .row:nth-child(1) {
      opacity: 0.04;
      animation: waveAnimation 4s infinite;
      transition-delay: 0.025s;
    }
    .row:nth-child(2) {
      opacity: 0.03;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 2);
    }
    .row:nth-child(3) {
      opacity: 0.02;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 3);
    }
    .row:nth-child(4) {
      opacity: 0.01;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 4);
    }
    .row:nth-child(5) {
      opacity: 0.005;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 5);
    }
    .animate-grade {
      white-space: nowrap;
    }
    ${f}
  `;l=h([p("start-page")],l);export{l as StartPage};
