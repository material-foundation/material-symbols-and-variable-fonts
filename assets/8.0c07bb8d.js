import{r as C,s as p,$ as m,n as v,o as n,i as f}from"./vendor.8226bdf7.js";import"./slider-control.ab10962b.js";import"./step-layout.40e1b7fd.js";import"./phone-mockup.fd2bfa1c.js";import"./optical.c848ff37.js";import"./tab-button.cfea5da5.js";import{c as h}from"./utilities.ebb9f1dd.js";import"./if-defined.2ec4fe38.js";import"./directive.9b57a945.js";import"./next-button.1a74693d.js";var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(e,t,s,o)=>{for(var i=o>1?void 0:o?g(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&u(t,s,i),i};let d=class extends p{render(){return m`
      <phone-mockup>
        <div class="content column">
          <header class="row center">
            <div class="title">Timer</div>
            <div class="spacer"></div>
            <div class="more-options center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7556 8.57768C13.9045 8.57768 14.8445 7.63768 14.8445 6.48879C14.8445 5.3399 13.9045 4.3999 12.7556 4.3999C11.6067 4.3999 10.6667 5.3399 10.6667 6.48879C10.6667 7.63768 11.6067 8.57768 12.7556 8.57768ZM12.7556 10.6666C11.6067 10.6666 10.6667 11.6066 10.6667 12.7555C10.6667 13.9044 11.6067 14.8444 12.7556 14.8444C13.9044 14.8444 14.8444 13.9044 14.8444 12.7555C14.8444 11.6066 13.9044 10.6666 12.7556 10.6666ZM12.7556 16.9333C11.6067 16.9333 10.6667 17.8733 10.6667 19.0222C10.6667 20.1711 11.6067 21.1111 12.7556 21.1111C13.9044 21.1111 14.8444 20.1711 14.8444 19.0222C14.8444 17.8733 13.9044 16.9333 12.7556 16.9333Z"
                  fill="var(--md-sys-color-on-surface)"
                />
              </svg>
            </div>
          </header>
          <article class="spacer column">
            <!-- <div class="timer spacer">
              <svg
                width="285"
                height="285"
                viewBox="0 0 285 285"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="142.677"
                  cy="142.794"
                  r="130.695"
                  stroke="var(--md-sys-color-surface)"
                  stroke-width="10.8161"
                />
                <path
                  d="M11.9819 142.794C11.9819 214.975 70.4961 273.489 142.677 273.489C214.858 273.489 273.372 214.975 273.372 142.794C273.372 70.6128 214.858 12.0986 142.677 12.0986"
                  stroke="var(--md-sys-color-primary)"
                  stroke-width="22.5336"
                  stroke-linecap="round"
                />
              </svg>
            </div> -->
            <div class="spacer timer">
              <svg
                width="314"
                height="285"
                viewBox="0 0 314 285"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90.125 171.584C88.106 171.584 85.9668 171.176 83.7075 170.358C81.4481 169.493 79.381 168.099 77.5062 166.176C75.6795 164.253 74.3335 161.729 73.4682 158.605L79.1647 156.297C79.8857 159.182 81.2318 161.489 83.2027 163.22C85.2217 164.902 87.5292 165.743 90.125 165.743C92.0479 165.743 93.8266 165.311 95.461 164.446C97.0954 163.58 98.3934 162.402 99.3548 160.912C100.364 159.422 100.869 157.74 100.869 155.865C100.869 154.038 100.364 152.404 99.3548 150.961C98.3453 149.519 96.9993 148.39 95.3168 147.572C93.6343 146.707 91.8075 146.274 89.8366 146.274H85.438V140.506H89.404C92.096 140.506 94.3794 139.737 96.2542 138.198C98.1771 136.612 99.1385 134.497 99.1385 131.853C99.1385 129.353 98.2011 127.334 96.3263 125.796C94.4996 124.258 92.2883 123.488 89.6924 123.488C87.9618 123.488 86.4475 123.873 85.1496 124.642C83.8517 125.411 82.7941 126.373 81.9769 127.526C81.2077 128.632 80.6549 129.714 80.3184 130.771L74.6219 128.392C75.1507 126.902 76.016 125.339 77.2178 123.705C78.4676 122.022 80.1261 120.604 82.1932 119.45C84.2603 118.249 86.76 117.648 89.6924 117.648C92.7209 117.648 95.4129 118.273 97.7684 119.522C100.124 120.724 101.975 122.407 103.321 124.57C104.667 126.685 105.34 129.089 105.34 131.781C105.34 134.857 104.619 137.285 103.177 139.064C101.734 140.794 100.1 142.092 98.2732 142.957V143.246C100.677 144.207 102.744 145.746 104.474 147.861C106.205 149.928 107.07 152.596 107.07 155.865C107.07 158.941 106.301 161.657 104.763 164.013C103.273 166.368 101.254 168.219 98.7058 169.565C96.158 170.911 93.2978 171.584 90.125 171.584ZM120.598 136.179C119.3 136.179 118.195 135.747 117.281 134.881C116.416 133.968 115.984 132.862 115.984 131.564C115.984 130.267 116.416 129.185 117.281 128.32C118.195 127.406 119.3 126.95 120.598 126.95C121.896 126.95 122.978 127.406 123.843 128.32C124.757 129.185 125.213 130.267 125.213 131.564C125.213 132.862 124.757 133.968 123.843 134.881C122.978 135.747 121.896 136.179 120.598 136.179ZM120.598 164.59C119.3 164.59 118.195 164.157 117.281 163.292C116.416 162.378 115.984 161.273 115.984 159.975C115.984 158.725 116.416 157.667 117.281 156.802C118.195 155.889 119.3 155.432 120.598 155.432C121.896 155.432 122.978 155.889 123.843 156.802C124.757 157.667 125.213 158.725 125.213 159.975C125.213 161.273 124.757 162.378 123.843 163.292C122.978 164.157 121.896 164.59 120.598 164.59ZM134.535 170.43V164.085C134.872 163.749 135.641 163.003 136.843 161.85C138.045 160.648 139.439 159.23 141.025 157.595C142.66 155.961 144.318 154.302 146.001 152.62C147.731 150.889 149.269 149.327 150.615 147.933C152.01 146.491 153.043 145.409 153.716 144.688C155.399 142.909 156.745 141.395 157.754 140.145C158.812 138.895 159.557 137.67 159.989 136.468C160.47 135.266 160.711 133.872 160.711 132.286C160.711 129.882 159.821 127.815 158.043 126.084C156.312 124.354 153.812 123.488 150.543 123.488C148.524 123.488 146.77 123.945 145.279 124.858C143.837 125.772 142.66 126.877 141.746 128.175C140.881 129.425 140.256 130.651 139.871 131.853L134.175 129.473C134.704 127.791 135.617 126.036 136.915 124.209C138.261 122.383 140.064 120.844 142.323 119.595C144.582 118.297 147.347 117.648 150.615 117.648C153.98 117.648 156.889 118.297 159.34 119.595C161.792 120.844 163.667 122.575 164.965 124.786C166.311 126.998 166.984 129.473 166.984 132.213C166.984 134.521 166.527 136.708 165.614 138.775C164.749 140.842 163.643 142.717 162.297 144.4C160.951 146.082 159.605 147.548 158.259 148.798C157.826 149.183 157.057 149.928 155.951 151.034C154.846 152.091 153.572 153.341 152.13 154.783C150.736 156.177 149.318 157.571 147.875 158.965C146.481 160.359 145.255 161.585 144.198 162.643C143.188 163.652 142.515 164.301 142.179 164.59H167.489V170.43H134.535ZM195.871 170.43V127.238L182.098 136.684L178.853 131.925L198.034 118.801H201.928V170.43H195.871Z"
                  fill="var(--md-sys-color-on-surface)"
                />
                <path
                  d="M125.617 218.643V217.316H128.17V214.778H129.497V217.316H132.049V218.643H129.497V221.181H128.17V218.643H125.617ZM135.659 221.888V214.115L134.044 215.268L133.25 214.071L136.106 212.024H137.216V221.888H135.659ZM140.454 215.326C140.146 215.326 139.886 215.22 139.675 215.009C139.463 214.797 139.358 214.543 139.358 214.245C139.358 213.937 139.463 213.682 139.675 213.48C139.886 213.269 140.146 213.163 140.454 213.163C140.752 213.163 141.006 213.269 141.218 213.48C141.429 213.682 141.535 213.937 141.535 214.245C141.535 214.543 141.429 214.797 141.218 215.009C141.006 215.22 140.752 215.326 140.454 215.326ZM140.454 220.734C140.146 220.734 139.886 220.628 139.675 220.417C139.463 220.205 139.358 219.951 139.358 219.653C139.358 219.355 139.463 219.1 139.675 218.888C139.886 218.677 140.146 218.571 140.454 218.571C140.752 218.571 141.006 218.677 141.218 218.888C141.429 219.1 141.535 219.355 141.535 219.653C141.535 219.951 141.429 220.205 141.218 220.417C141.006 220.628 140.752 220.734 140.454 220.734ZM147.174 222.119C146.356 222.119 145.645 221.893 145.039 221.441C144.434 220.979 143.962 220.359 143.626 219.58C143.299 218.792 143.136 217.917 143.136 216.956C143.136 215.985 143.299 215.11 143.626 214.331C143.962 213.552 144.434 212.937 145.039 212.485C145.645 212.024 146.356 211.793 147.174 211.793C148 211.793 148.717 212.024 149.322 212.485C149.928 212.937 150.394 213.552 150.721 214.331C151.058 215.11 151.226 215.985 151.226 216.956C151.226 217.917 151.058 218.792 150.721 219.58C150.394 220.359 149.928 220.979 149.322 221.441C148.717 221.893 148 222.119 147.174 222.119ZM147.174 220.648C147.693 220.648 148.135 220.484 148.5 220.157C148.875 219.83 149.159 219.388 149.351 218.831C149.553 218.273 149.654 217.648 149.654 216.956C149.654 216.254 149.553 215.624 149.351 215.067C149.159 214.509 148.875 214.071 148.5 213.754C148.135 213.427 147.693 213.264 147.174 213.264C146.664 213.264 146.227 213.427 145.861 213.754C145.496 214.071 145.212 214.509 145.01 215.067C144.818 215.624 144.722 216.254 144.722 216.956C144.722 217.648 144.818 218.273 145.01 218.831C145.212 219.388 145.496 219.83 145.861 220.157C146.227 220.484 146.664 220.648 147.174 220.648ZM156.77 222.119C155.953 222.119 155.241 221.893 154.636 221.441C154.03 220.979 153.559 220.359 153.222 219.58C152.896 218.792 152.732 217.917 152.732 216.956C152.732 215.985 152.896 215.11 153.222 214.331C153.559 213.552 154.03 212.937 154.636 212.485C155.241 212.024 155.953 211.793 156.77 211.793C157.597 211.793 158.313 212.024 158.919 212.485C159.525 212.937 159.991 213.552 160.318 214.331C160.654 215.11 160.823 215.985 160.823 216.956C160.823 217.917 160.654 218.792 160.318 219.58C159.991 220.359 159.525 220.979 158.919 221.441C158.313 221.893 157.597 222.119 156.77 222.119ZM156.77 220.648C157.289 220.648 157.732 220.484 158.097 220.157C158.472 219.83 158.755 219.388 158.948 218.831C159.15 218.273 159.251 217.648 159.251 216.956C159.251 216.254 159.15 215.624 158.948 215.067C158.755 214.509 158.472 214.071 158.097 213.754C157.732 213.427 157.289 213.264 156.77 213.264C156.261 213.264 155.823 213.427 155.458 213.754C155.092 214.071 154.809 214.509 154.607 215.067C154.415 215.624 154.318 216.254 154.318 216.956C154.318 217.648 154.415 218.273 154.607 218.831C154.809 219.388 155.092 219.83 155.458 220.157C155.823 220.484 156.261 220.648 156.77 220.648Z"
                  fill="var(--md-sys-color-outline)"
                />
                <circle
                  cx="142.677"
                  cy="142.794"
                  r="130.695"
                  stroke="var(--md-sys-color-surface)"
                  stroke-width="10.8161"
                />
                <path
                  d="M11.9819 142.794C11.9819 214.975 70.4961 273.489 142.677 273.489C214.858 273.489 273.372 214.975 273.372 142.794C273.372 70.6128 214.858 12.0986 142.677 12.0986"
                  stroke="var(--md-sys-color-primary)"
                  stroke-width="22.5336"
                  stroke-linecap="round"
                />
                <rect
                  x="306.722"
                  y="131.076"
                  width="7.21076"
                  height="19.8296"
                  rx="3.60538"
                  fill="var(--md-sys-color-primary)"
                />
                <rect
                  x="306.722"
                  y="154.511"
                  width="7.21076"
                  height="5.40807"
                  rx="2.70404"
                  fill="var(--md-sys-color-outline)"
                />
                <rect
                  x="306.722"
                  y="163.525"
                  width="7.21076"
                  height="5.40807"
                  rx="2.70404"
                  fill="var(--md-sys-color-outline)"
                />
              </svg>
            </div>
            <div class="actions row">
              <div class="tertiary-container sub-action">
                <span class="material-icons-outlined icon">
                  delete_forever
                </span>
              </div>
              <div class="primary-container main-action">
                <span class="material-icons-outlined icon"> pause </span>
              </div>
              <div class="tertiary-container sub-action">
                <span class="material-icons-outlined icon"> add </span>
              </div>
            </div>
          </article>
          <footer>
            <div class="tabs">
              <div class="tab">
                <span class="material-icons-outlined icon"> alarm </span>
              </div>
              <div class="tab">
                <span class="material-icons-outlined icon"> history </span>
              </div>
              <div class="tab" active>
                <span class="material-icons-outlined icon"> timer </span>
              </div>
              <div class="tab">
                <span class="material-icons-outlined icon"> schedule </span>
              </div>
              <div class="tab">
                <span class="material-icons-outlined icon"> local_hotel </span>
              </div>
            </div>
          </footer>
        </div>
      </phone-mockup>
    `}};d.styles=C`
    .content {
      width: 100%;
      height: 100%;
      --bottom-tabs-height: 90.13px;
      font-family: Roboto;
    }
    .icon {
      font-size: 24px;
      font-family: var(--font-family);
      font-variation-settings: "opsz" var(--opsz), "GRAD" var(--grad),
        "FILL" var(--fill), "wght" var(--wght);
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
    .spacer {
      flex: 1;
    }
    .actions {
      padding-bottom: 79px;
    }
    header {
      margin: 19px;
      height: 57.6px;
    }
    header .title {
      font-style: normal;
      font-weight: normal;
      font-size: 19.8296px;
      line-height: 25px;
      color: var(--md-sys-color-on-surface);
    }
    footer {
      background-color: var(--md-sys-color-surface);
      display: flex;
      flex-direction: column;
    }
    .tabs {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      padding: 17px;
    }
    .tab {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .tab span {
      font-size: 24px;
    }
    .tab[active] {
      background-color: var(--md-sys-color-primary-container);
      border-radius: 18.0717px;
      width: 57.83px;
      height: 28.91px;
    }
    .tertiary-container {
      background-color: var(--md-sys-color-tertiary-container);
      color: var(--md-sys-color-on-tertiary-container);
    }
    .primary-container {
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
    }
    .actions {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    .sub-action {
      width: 50.48px;
      height: 50.48px;
      border-radius: 216.323px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-action {
      width: 137px;
      height: 86.53px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 28.8431px;
    }
    .timer {
      margin-left: 24px;
      margin-top: 24px;
    }
  `;d=b([v("example-timer")],d);var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,y=(e,t,s,o)=>{for(var i=o>1?void 0:o?w(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&x(t,s,i),i};const l={"--font-family":"MaterialSymbolsOutlined","--fill":"0","--wght":"400","--opsz":"24","--grad":"100"};let c=class extends p{setStyle(e,t){e==="--opsz"&&this.setStyle("--font-size",`${Number(t)}px`),this.main.style.setProperty(e,t),l[e]=t,this.requestUpdate()}getStyle(e){var s;const t=(s=this.main)==null?void 0:s.style;if(t){const o=t==null?void 0:t.getPropertyValue(e);if(o)return o}return l[e]}firstUpdated(){for(const[e,t]of Object.entries(l))this.setStyle(e,t)}render(){return m`<section>
      <step-layout
        stepCount="8"
        totalSteps="8"
        title="Material Symbols"
        code="${this.generateCode()}"
        description=""
      >
        <span slot="description">
          Material Symbols are also variable, and have four adjustable
          attributes. The attributes are: <b>Weight</b>, <b>Fill</b>,
          <b>Grade</b>, <b>Optical Size</b>.
        </span>
        <div slot="content-header" class="row center">
          <tab-button
            label="Outlined"
            ?active=${this.getStyle("--font-family")==="MaterialSymbolsOutlined"}
            @click=${()=>{this.setStyle("--font-family","MaterialSymbolsOutlined")}}
          ></tab-button>
          <tab-button
            label="Sharp"
            ?active=${this.getStyle("--font-family")==="MaterialSymbolsSharp"}
            @click=${()=>{this.setStyle("--font-family","MaterialSymbolsSharp")}}
          ></tab-button>
          <tab-button
            label="Rounded"
            ?active=${this.getStyle("--font-family")==="MaterialSymbolsRounded"}
            @click=${()=>{this.setStyle("--font-family","MaterialSymbolsRounded")}}
          ></tab-button>
        </div>
        <div slot="options">
          <fill-symbol-control
            .value=${this.getStyle("--fill")}
            @value=${e=>{const t=e.detail.value;this.setStyle("--fill",t)}}
          ></fill-symbol-control>
          <weight-symbol-control
            .value=${this.getStyle("--wght")}
            @value=${e=>{const t=e.detail.value;this.setStyle("--wght",t)}}
          >
          </weight-symbol-control>
          <optical-symbol-control
            .value=${this.getStyle("--opsz")}
            @value=${e=>{const t=e.detail.value;this.setStyle("--opsz",t)}}
          ></optical-symbol-control>
          <grade-symbol-control
            .value=${this.getStyle("--grad")}
            @value=${e=>{const t=e.detail.value;this.setStyle("--grad",t)}}
          >
          </grade-symbol-control>
        </div>
        <span class="demo" slot="preview"><example-timer></example-timer></span>
      </step-layout>
    </section>`}generateCode(){const e=[];return e.push(".text {","    font-variation-settings:",`        \u201Cwght\u201D  ${this.getStyle("--wght")},`,`        \u201Copsz\u201D  ${this.getStyle("--opsz")},`,`        "FILL"  ${this.getStyle("--fill")},`,`        "GRAD"  ${this.getStyle("--grad")};`,`    font-family: ${this.getStyle("--font-family")};`,`    font-size: ${this.getStyle("--opsz")}px;`,"}"),e.join(`
`)}};c.styles=C`
    ${h}
    .demo {
      .demo {
        --font-family: ${n(l["font-family"])};
        --fill: ${n(l["--fill"])};
        --wght: ${n(l["--wght"])};
        --opsz: ${n(l["--opsz"])};
        --grad: ${n(l["--grad"])};
      }
    }
    .demo {
      font-size: 100px;
      text-align: center;
      color: var(--md-sys-color-on-surface);
    }
    div[slot="content-header"] {
      padding-top: 12px;
    }
  `;y([f(".demo")],c.prototype,"main",2);c=y([v("step-eight")],c);export{c as StepEight};
