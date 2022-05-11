import{r as u,e as p,s as v,$ as c,n as d}from"./vendor.8226bdf7.js";import"./utilities.ebb9f1dd.js";import"./slider-control.ab10962b.js";var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(r,e,s,o)=>{for(var t=o>1?void 0:o?b(e,s):e,n=r.length-1,l;n>=0;n--)(l=r[n])&&(t=(o?l(e,s,t):l(t))||t);return o&&t&&f(e,s,t),t};let i=class extends v{constructor(){super(...arguments);this.value=0}render(){return c`
      <step-option
        title="Weight"
        description="Adjust the style from lighter to bolder, by varying stroke thicknesses. This typically changes overall width, and so may be used in conjunction with Width and Grade (if also available in the font)."
      >
        <slider-control
          step="1"
          min="100"
          max="900"
          .value=${this.value}
          @value=${r=>{const e=r.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(r){const e=new CustomEvent("value",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};i.styles=u``;h([p({type:Number})],i.prototype,"value",2);i=h([d("weight-font-control")],i);var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,m=(r,e,s,o)=>{for(var t=o>1?void 0:o?w(e,s):e,n=r.length-1,l;n>=0;n--)(l=r[n])&&(t=(o?l(e,s,t):l(t))||t);return o&&t&&y(e,s,t),t};let a=class extends v{constructor(){super(...arguments);this.value=0}render(){return c`
      <step-option
        title="Width"
        description="Adjust the style from narrower to wider, by varying the proportions of letters and overall spacing and kerning."
      >
        <slider-control
          step="1"
          min="50"
          max="150"
          .value=${this.value}
          @value=${r=>{const e=r.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(r){const e=new CustomEvent("value",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};a.styles=u``;m([p({type:Number})],a.prototype,"value",2);a=m([d("width-font-control")],a);
