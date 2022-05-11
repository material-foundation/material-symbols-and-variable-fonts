import{r as d,e as p,s as f,$ as u,n as m}from"./vendor.8226bdf7.js";import"./step-layout.40e1b7fd.js";import"./next-button.1a74693d.js";import"./directive.9b57a945.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=(s,e,i,o)=>{for(var t=o>1?void 0:o?h(e,i):e,n=s.length-1,l;n>=0;n--)(l=s[n])&&(t=(o?l(e,i,t):l(t))||t);return o&&t&&g(e,i,t),t};let a=class extends f{constructor(){super(...arguments);this.title="",this.subtitle="",this.href=""}render(){const{title:s,subtitle:e}=this;return u`<button
      @click=${()=>{this.href&&window.open(this.href,"_blank")}}
    >
      <span class="title">${s}</span>
      <span class="subtitle">${e}</span>
    </button>`}};a.styles=d`
    button {
      width: 295px;
      height: 85px;
      margin: 10px auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);

      border-radius: 30px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    .subtitle {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  `;r([p()],a.prototype,"title",2);r([p()],a.prototype,"subtitle",2);r([p()],a.prototype,"href",2);a=r([m("cta-button")],a);var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=(s,e,i,o)=>{for(var t=o>1?void 0:o?b(e,i):e,n=s.length-1,l;n>=0;n--)(l=s[n])&&(t=(o?l(e,i,t):l(t))||t);return o&&t&&x(e,i,t),t};let c=class extends f{render(){return u`<section>
      <step-layout
        stepCount="9"
        totalSteps="8"
        title="Get Started"
        description="Material Symbols have four adjustable stylistic variable font attributes called axes. The axis refers to an attribute of a symbol that can be altered to create visual variations. The attributes are: weight, fill, grade, optical size."
      >
        <div slot="content-header"></div>
        <div slot="options">
          <cta-button
            title="Download Roboto Flex"
            subtitle="fonts.google.com"
            href="https://fonts.google.com/specimen/Roboto+Flex"
          ></cta-button>
          <cta-button
            title="Download Roboto Serif"
            subtitle="fonts.google.com"
            href="https://fonts.google.com/specimen/Roboto+Serif"
          ></cta-button>
          <cta-button
            title="Material Symbols Plugin"
            subtitle="figma.com"
            href="https://www.figma.com/community/plugin/1088610476491668236"
          ></cta-button>
        </div>
        <div class="demo" slot="preview">
          <div class="read-more">Read more →</div>
          <div class="content">
            <div
              class="card"
              @click="${()=>window.open("https://M3.Material.io","_blank")}"
            >
              <img src="images/fonts.png" />
              <div class="details">
                <span class="subhead">M3.Material.io</span>
                <span class="card-title">Typography</span>
                <span class="subtitle"
                  >Material's default type scale includes a range of contrasting
                  and extensible styles to support a wide range of use
                  cases.</span
                >
              </div>
            </div>
            <div
              class="card"
              @click="${()=>window.open("https://fonts.google.com","_blank")}"
            >
              <img src="images/symbols.png" />
              <div class="details">
                <span class="subhead">Fonts.google.com</span>
                <span class="card-title">Fonts Knowledge</span>
                <span class="subtitle"
                  >Google Fonts Knowledge enables designers and developers of
                  all skill sets to choose and use type with purpose.</span
                >
              </div>
            </div>
          </div>
        </div>
      </step-layout>
    </section>`}};c.styles=d`
    .title {
      display: flex;
      flex-direction: column;
      position: fixed;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      font-size: 150px;
    }
    .title :last-child {
      padding-bottom: 86px;
    }
    .title :first-child {
      padding-top: 86px;
    }
    .variable-font {
      padding-left: 86px;
      /* font-family: RobotoFlex; */
    }
    .read-more {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 28px;
      color: var(--md-sys-color-on-background);
      opacity: 0.68;
      margin-left: 20px;
    }
    .demo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      width: 414px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 23px;
      cursor: pointer;
      margin: 20px;
    }
    .card img {
      height: 244px;
      width: 100%;
    }
    .card .details {
      padding: 30px;
      background-color: var(--md-sys-color-surface);
      display: flex;
      flex-direction: column;
      border-radius: 0 0 23px 23px;
    }
    .subhead {
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      color: var(--md-sys-color-on-surface);
    }
    .card-title {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: var(--md-sys-color-on-surface);
    }
    .subtitle {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: var(--md-sys-color-on-surface);
      opacity: 0.68;
    }
    .content {
      display: flex;
      flex-direction: row;
    }
    .options {
      font-family: GoogleSans;
    }
    @media (max-width: 1300px) {
      .content {
        flex-direction: column;
      }
      .card img {
        height: 200px;
      }
      .read-more {
        display: none;
      }
    }
  `;c=y([m("finish-page")],c);export{c as FinishPage};
