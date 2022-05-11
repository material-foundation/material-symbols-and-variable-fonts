import{r as c,e as v,s as h,$ as m,n as d}from"./vendor.8226bdf7.js";import"./utilities.02bf2a00.js";import"./slider-control.ab10962b.js";var O=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(s,e,r,o)=>{for(var t=o>1?void 0:o?$(e,r):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(t=(o?n(e,r,t):n(t))||t);return o&&t&&O(e,r,t),t};let i=class extends h{constructor(){super(...arguments);this.value=0}render(){return m`
      <step-option
        title="Weight"
        description="Weight defines the thickness of a symbol. It provides a full, continuous range of stroke thicknesses."
      >
        <slider-control
          step="1"
          min="100"
          max="700"
          .value=${this.value}
          @value=${s=>{const e=s.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(s){const e=new CustomEvent("value",{detail:{value:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}};i.styles=c``;b([v({type:Number})],i.prototype,"value",2);i=b([d("weight-symbol-control")],i);var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,f=(s,e,r,o)=>{for(var t=o>1?void 0:o?P(e,r):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(t=(o?n(e,r,t):n(t))||t);return o&&t&&w(e,r,t),t};let a=class extends h{constructor(){super(...arguments);this.value=0}render(){return m`
      <step-option
        title="Fill"
        description="Control if the icon is outlined or filled. This is an expressive, visual preference."
      >
        <slider-control
          step="0.5"
          min="0"
          max="1"
          .value=${this.value}
          @value=${s=>{const e=s.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(s){const e=new CustomEvent("value",{detail:{value:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}};a.styles=c``;f([v({type:Number})],a.prototype,"value",2);a=f([d("fill-symbol-control")],a);var g=Object.defineProperty,C=Object.getOwnPropertyDescriptor,_=(s,e,r,o)=>{for(var t=o>1?void 0:o?C(e,r):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(t=(o?n(e,r,t):n(t))||t);return o&&t&&g(e,r,t),t};let u=class extends h{constructor(){super(...arguments);this.value=0}render(){return m`
      <step-option
        title="Grade"
        description="Both weight and grade affect a symbol’s thickness, but adjustments with grade are much more granular."
      >
        <slider-control
          step="1"
          min="25"
          max="200"
          .value=${this.value}
          @value=${s=>{const e=s.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(s){const e=new CustomEvent("value",{detail:{value:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}};u.styles=c``;_([v({type:Number})],u.prototype,"value",2);u=_([d("grade-symbol-control")],u);var j=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=(s,e,r,o)=>{for(var t=o>1?void 0:o?x(e,r):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(t=(o?n(e,r,t):n(t))||t);return o&&t&&j(e,r,t),t};let p=class extends h{constructor(){super(...arguments);this.value=0}render(){return m`
      <step-option
        title="Optical Size"
        description="Optimizes the icon for specific sizes, from 20dp to 48dp. Stroke thicknesses change so that the icon always looks “optically correct.”"
      >
        <slider-control
          step="1"
          min="20"
          max="48"
          .value=${this.value}
          @value=${s=>{const e=s.detail.value;this.onValue(e)}}
        >
        </slider-control>
      </step-option>
    `}onValue(s){const e=new CustomEvent("value",{detail:{value:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}};p.styles=c``;y([v({type:Number})],p.prototype,"value",2);p=y([d("optical-symbol-control")],p);
