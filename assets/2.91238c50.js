import{s as c,$ as p,r as d,o as h,i as u,e as w,n as b}from"./vendor.8226bdf7.js";import"./step-layout.c15fdb61.js";import"./width.3d902cbb.js";import"./tab-button.cfea5da5.js";import{c as g}from"./utilities.02bf2a00.js";import"./next-button.1a74693d.js";import"./directive.9b57a945.js";import"./slider-control.ab10962b.js";import"./if-defined.2ec4fe38.js";var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=(e,t,o,i)=>{for(var s=i>1?void 0:i?v(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&m(t,o,s),s};const r={"--font-family":"RobotoFlex","--wdth":"110","--wght":"400"};let n=class extends c{constructor(){super(...arguments);this.useSerif=!1}setStyle(e,t){this.main.style.setProperty(e,t),r[e]=t,this.requestUpdate()}getStyle(e){var o;const t=(o=this.main)==null?void 0:o.style;if(t){const i=t==null?void 0:t.getPropertyValue(e);if(i)return i}return r[e]}switchSerif(){this.useSerif=!this.useSerif,this.setStyle("--font-family",this.useSerif?"RobotoSerif":"RobotoFlex")}firstUpdated(){for(const[e,t]of Object.entries(r))this.setStyle(e,t)}render(){const{useSerif:e}=this;return p`<section>
      <step-layout
        stepCount="2"
        totalSteps="8"
        title="Aesthetic Expression with Variable Axes"
        code="${this.generateCode()}"
      >
        <span slot="description"
          >Variable font <b>axes</b> allow designers to exert much more control
          over how typefaces are applied. Instead of just one to nine predefined
          weights, the entire range of a typeface can be accessed. More choice
          facilitates a better user experience, with axes like <b>Weight</b> and
          <b>Width</b> allowing better information hierarchies and visible
          document structures.</span
        >
        <div slot="content-header" class="row center">
          <tab-button
            label="Roboto Serif"
            ?active=${e}
            @toggle=${this.switchSerif}
          ></tab-button>
          <tab-button
            label="Roboto Flex"
            ?active=${!e}
            @toggle=${this.switchSerif}
          ></tab-button>
        </div>
        <div slot="options">
          <width-font-control
            .value=${this.getStyle("--wdth")}
            @value=${t=>{const o=t.detail.value;this.setStyle("--wdth",o)}}
          ></width-font-control>
          <weight-font-control
            .value=${this.getStyle("--wght")}
            @value=${t=>{const o=t.detail.value;this.setStyle("--wght",o)}}
          >
          </weight-font-control>
        </div>
         <div class="demo" slot="preview" contenteditable="true">${e?"Roboto Serif":"Roboto Flex"}</span
        >
        </div>
      </step-layout>
    </section>`}generateCode(){const e=[];return e.push(".text {","    font-variation-settings:",`        \u201Cwght\u201D  ${this.getStyle("--wght")},`,`        \u201Cwdth\u201D  ${this.getStyle("--wdth")};`,`    font-family: ${this.getStyle("--font-family")};`,"    font-size: 100px;","}"),e.join(`
`)}};n.styles=d`
    ${g}
    .demo {
      --font-family: ${h(r["font-family"])};
      --wdth: ${h(r["--wdth"])};
      --wght: ${h(r["--wght"])};
      font-variation-settings: "wdth" var(--wdth), "wght" var(--wght);
      font-family: var(--font-family);
    }
    .demo {
      font-size: 100px;
      text-align: center;
      color: var(--md-sys-color-on-surface);
    }
    div[slot="content-header"] {
      padding-top: 12px;
    }
    .demo[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `;f([u(".demo")],n.prototype,"main",2);f([w({type:Boolean})],n.prototype,"useSerif",2);n=f([b("step-two")],n);export{n as StepTwo};
