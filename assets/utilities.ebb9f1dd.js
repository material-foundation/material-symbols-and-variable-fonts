import{r as a,e as p,s as v,$ as d,n as f}from"./vendor.8226bdf7.js";import"./step-layout.40e1b7fd.js";var h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(r,s,e,n)=>{for(var t=n>1?void 0:n?g(s,e):s,l=r.length-1,c;l>=0;l--)(c=r[l])&&(t=(n?c(s,e,t):c(t))||t);return n&&t&&h(s,e,t),t};let i=class extends v{constructor(){super(...arguments);this.title="Setting",this.description="Setting description",this.showDescription=!1,this.hideDivider=!1}render(){const{title:r,description:s,showDescription:e,hideDivider:n}=this;return d`<div class="setting">
      <div class="header">
        <div
          class="title"
          @click=${()=>this.showDescription=!e}
        >
          <span>${r}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.333328 6.99967C0.333328 3.31967 3.31999 0.333008 7 0.333008C10.68 0.333008 13.6667 3.31967 13.6667 6.99967C13.6667 10.6797 10.68 13.6663 7 13.6663C3.31999 13.6663 0.333328 10.6797 0.333328 6.99967ZM7.66666 6.33301V10.333H6.33333V6.33301H7.66666ZM7 12.333C4.06 12.333 1.66666 9.93967 1.66666 6.99967C1.66666 4.05967 4.06 1.66634 7 1.66634C9.93999 1.66634 12.3333 4.05967 12.3333 6.99967C12.3333 9.93967 9.93999 12.333 7 12.333ZM7.66666 3.66634V4.99967H6.33333V3.66634H7.66666Z"
              fill="var(--md-sys-color-on-surface)"
              opacity="0.5"
            />
          </svg>
        </div>
        ${e?"":d`<span class="description">${s}</span> `}
      </div>
      <div class="content"><slot></slot></div>
      <!-- ${e&&!n?"":d` <step-divider></step-divider> `} -->
    </div>`}};i.styles=a`
    .setting {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .header {
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .title > svg {
      margin-left: 6px;
    }
    .description {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      opacity: 0.68;
    }
    .content {
      width: 100%;
    }
  `;o([p({type:String})],i.prototype,"title",2);o([p({type:String})],i.prototype,"description",2);o([p({type:Boolean})],i.prototype,"showDescription",2);o([p({type:Boolean})],i.prototype,"hideDivider",2);i=o([f("step-option")],i);const w=a`
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
`;export{w as c};
