import{r as p,e as c,s as b,$ as u,n as d}from"./vendor.8226bdf7.js";var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,i=(r,e,s,n)=>{for(var t=n>1?void 0:n?f(e,s):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(t=(n?l(e,s,t):l(t))||t);return n&&t&&g(e,s,t),t};let o=class extends b{constructor(){super(...arguments);this.active=!1,this.label=""}render(){const{active:r,label:e}=this;return u`<button
      ?active=${r}
      @click=${()=>{this.active||this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0}))}}
    >
      <slot name="leading"></slot>
      <span>${e}</span>
      <slot name="trailing"></slot>
    </button>`}};o.styles=p`
    button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;

      flex: none;
      order: 2;
      flex-grow: 0;

      border: none;
      cursor: pointer;

      border-radius: 100px;

      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);

      transition: all 0.2s ease-in-out;

      margin-left: 8px;
      margin-right: 8px;

      font-family: Google Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    button[active] {
      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
    }

    button:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;i([c({type:Boolean})],o.prototype,"active",2);i([c({type:String})],o.prototype,"label",2);o=i([d("tab-button")],o);
