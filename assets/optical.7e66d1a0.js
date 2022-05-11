import{r as p,e as u,s as c,$ as v,n as h}from"./vendor.8226bdf7.js";import"./utilities.02bf2a00.js";import"./slider-control.ab10962b.js";var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d=(r,e,o,s)=>{for(var t=s>1?void 0:s?f(e,o):e,l=r.length-1,n;l>=0;l--)(n=r[l])&&(t=(s?n(e,o,t):n(t))||t);return s&&t&&y(e,o,t),t};let i=class extends c{constructor(){super(...arguments);this.value=0}render(){return v`
      <step-option
        title="Grade"
        description="Finesse the style from lighter to bolder, without any changes in overall width – so there are no changes to line breaks or page layout typically caused by changes in weight."
      >
        <slider-control
          step="1"
          min="-150"
          max="150"
          .value=${this.value}
          @value=${r=>{const e=r.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(r){const e=new CustomEvent("value",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};i.styles=p``;d([u({type:Number})],i.prototype,"value",2);i=d([h("grade-font-control")],i);var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=(r,e,o,s)=>{for(var t=s>1?void 0:s?g(e,o):e,l=r.length-1,n;l>=0;l--)(n=r[l])&&(t=(s?n(e,o,t):n(t))||t);return s&&t&&b(e,o,t),t};let a=class extends c{constructor(){super(...arguments);this.value=0}render(){return v`
      <step-option
        title="Optical Size"
        description="Adapts the style to specific text sizes to optimize the reading experience for smaller and larger sizes. Typically this is set indirectly, by setting the font-size. At larger sizes, much more extreme styles have room to work."
      >
        <slider-control
          step="1"
          min="0"
          max="32"
          .value=${this.value}
          @value=${r=>{const e=r.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(r){const e=new CustomEvent("value",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};a.styles=p``;m([u({type:Number})],a.prototype,"value",2);a=m([h("optical-font-control")],a);
