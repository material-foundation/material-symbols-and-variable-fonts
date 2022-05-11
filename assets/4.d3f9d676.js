import{s as f,$ as d,r as u,o as p,i as v,e as y,n as m}from"./vendor.8226bdf7.js";import"./step-layout.c15fdb61.js";import"./optical.7e66d1a0.js";import"./tab-button.cfea5da5.js";import{c as h}from"./utilities.02bf2a00.js";import"./next-button.1a74693d.js";import"./directive.9b57a945.js";import"./slider-control.ab10962b.js";import"./if-defined.2ec4fe38.js";var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,c=(e,t,o,i)=>{for(var s=i>1?void 0:i?g(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&b(t,o,s),s};const r={"--font-family":"RobotoFlex","--opsz":"8","--grad":"0"};let a=class extends f{constructor(){super(...arguments);this.useSerif=!1}setStyle(e,t){this.main.style.setProperty(e,t),r[e]=t,this.requestUpdate()}getStyle(e){var o;const t=(o=this.main)==null?void 0:o.style;if(t){const i=t==null?void 0:t.getPropertyValue(e);if(i)return i}return r[e]}switchSerif(){this.useSerif=!this.useSerif,this.setStyle("--font-family",this.useSerif?"RobotoSerif":"RobotoFlex")}firstUpdated(){for(const[e,t]of Object.entries(r))this.setStyle(e,t)}render(){const{useSerif:e}=this;return d`<section>
      <step-layout
        stepCount="4"
        totalSteps="8"
        title="Finesse"
        code="${this.generateCode()}"
      >
        <span slot="description"
          >Highly detailed axes like <b>Optical Size</b> and
          <b>Grade</b> provide an incrementally more specific experience. They
          can increase legibility at varying distances, or improve accessibility
          in a dark or high-contrast mode. Often these axes’ values are set
          indirectly to adapt to the text’s context, such as point size or
          device mode.</span
        >
        <div slot="content-header" class="row center">
          <tab-button
            label="Roboto Serif"
            ?active=${e}
            @click=${this.switchSerif}
          ></tab-button>
          <tab-button
            label="Roboto Flex"
            ?active=${!e}
            @click=${this.switchSerif}
          ></tab-button>
        </div>
        <div slot="options">
          <optical-font-control
            .value=${this.getStyle("--opsz")}
            @value=${t=>{const o=t.detail.value;this.setStyle("--opsz",o)}}
          ></optical-font-control>
          <grade-font-control
            .value=${this.getStyle("--grad")}
            @value=${t=>{const o=t.detail.value;this.setStyle("--grad",o)}}
          >
          </grade-font-control>
        </div>
         <div class="demo" slot="preview" contenteditable="true">
          ${e?"Roboto Serif":"Roboto Flex"}</span
        >
        </div>
      </step-layout>
    </section>`}generateCode(){const e=[];return e.push(".text {","    font-variation-settings:",`        \u201Copsz\u201D  ${this.getStyle("--opsz")},`,`        "GRAD"  ${this.getStyle("--grad")};`,`    font-family: ${this.getStyle("--font-family")};`,"    font-size: 100px;","}"),e.join(`
`)}};a.styles=u`
    ${h}
    .demo {
      --font-family: ${p(r["font-family"])};
      --opsz: ${p(r["--opsz"])};
      --grad: ${p(r["--grad"])};
      font-variation-settings: “opsz” var(--opsz), “GRAD” var(--grad);
      font-family: var(--font-family);
    }
    .demo {
      font-variation-settings: "opsz" var(--opsz), "GRAD" var(--grad);
      font-family: var(--font-family);
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
  `;c([v(".demo")],a.prototype,"main",2);c([y({type:Boolean})],a.prototype,"useSerif",2);a=c([m("step-four")],a);export{a as StepFour};
