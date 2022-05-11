import{s as c,$ as l,r as d,o as h,i as u,e as b,n as m}from"./vendor.8226bdf7.js";import"./step-layout.40e1b7fd.js";import{c as y}from"./utilities.ebb9f1dd.js";import"./tab-button.cfea5da5.js";import"./next-button.1a74693d.js";import"./directive.9b57a945.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(e,t,i,s)=>{for(var o=s>1?void 0:s?g(t,i):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&v(t,i,o),o};const f={"--font-family":"RobotoFlex"};let n=class extends c{constructor(){super(...arguments);this.useSerif=!1}setStyle(e,t){this.main.style.setProperty(e,t),this.requestUpdate()}getStyle(e){var i;const t=(i=this.main)==null?void 0:i.style;return t?t==null?void 0:t.getPropertyValue(e):f[e]}switchSerif(){this.useSerif=!this.useSerif,this.setStyle("--font-family",this.useSerif?"RobotoSerif":"RobotoFlex")}firstUpdated(){for(const[e,t]of Object.entries(f))this.setStyle(e,t)}render(){const{useSerif:e}=this;return l`<section>
      <step-layout
        stepCount="1"
        totalSteps="8"
        title="What are Variable Fonts?"
        code="${this.generateCode()}"
        description="Variable fonts are a new innovative font format that allows users to gain control over their type and symbols. Roboto Serif and Roboto Flex are new typefaces made fresh for variable font technology, each with a wide range of styles."
      >
        <div slot="content-header" class="row center tabs">
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
          ${e?l` <step-option
                title="Roboto Serif"
                description="Roboto Serif is a variable typeface family designed to create a comfortable and frictionless reading experience. Minimal and highly functional, it is useful anywhere (even for app interfaces) because it also offers an extensive set of weights and widths across many optical sizes."
                hideDivider
              >
              </step-option>`:l` <step-option
                title="Roboto Flex"
                description="Roboto has been updated to the next generation of system fonts, with robust support for many new weights and widths across a broad set of optical sizes, plus advanced variable font functionality such as grade, and even “parametric” axes for fine tuning every situation. We’ll explain what those mean in a moment."
                hideDivider
              >
              </step-option>`}
        </div>
        <div class="demo" slot="preview" contenteditable="true">
          ${e?"Roboto Serif":"Roboto Flex"}
        </div>
      </step-layout>
    </section>`}generateCode(){const e=[];return e.push(".text {",`    font-family: ${this.getStyle("--font-family")};`,"    font-size: 100px;","}"),e.join(`
`)}};n.styles=d`
    ${y}
    .demo {
      --font-family: ${h(f["font-family"])};
      font-variation-settings: "wdth" 110;
      font-family: var(--font-family);
      font-size: 100px;
      text-align: center;
      color: var(--md-sys-color-on-surface);
    }
    div[slot="content-header"] {
      padding-top: 12px;
    }
    .tabs {
      width: 100%;
    }
    .demo[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `;p([u(".demo")],n.prototype,"main",2);p([b({type:Boolean})],n.prototype,"useSerif",2);n=p([m("step-one")],n);export{n as StepOne};
