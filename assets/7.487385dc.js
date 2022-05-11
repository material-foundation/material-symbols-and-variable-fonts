import{r as m,s as g,$ as d,n as u,o as r,i as b}from"./vendor.8226bdf7.js";import"./step-layout.c15fdb61.js";import"./optical.8bc9e44c.js";import"./tab-button.cfea5da5.js";import{c as f}from"./utilities.02bf2a00.js";import"./next-button.1a74693d.js";import"./directive.9b57a945.js";import"./slider-control.ab10962b.js";import"./if-defined.2ec4fe38.js";var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(t,e,l,a)=>{for(var i=a>1?void 0:a?v(e,l):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(a?n(e,l,i):n(i))||i);return a&&i&&_(e,l,i),i};let c=class extends g{render(){return d` <div class="icon-grid">${$.map(S)}</div>`}};c.styles=m`
    .icon-grid {
      font-family: var(--font-family);
      font-variation-settings: "opsz" var(--opsz), "GRAD" var(--grad),
        "FILL" var(--fill), "wght" var(--wght);
      display: grid;
      grid-template-columns: repeat(3, 56px);
      grid-template-rows: repeat(12, 56px);
      grid-gap: 8px;
      padding: 8px;
    }
    .icon {
      width: 128px;
      height: 128px;
      font-size: var(--font-size);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media (min-width: 500px) {
      .icon-grid {
        grid-template-columns: repeat(6, 56px);
        grid-template-rows: repeat(9, 56px);
      }
    }
    @media (min-width: 900px) {
      .icon-grid {
        grid-template-columns: repeat(9, 56px);
        grid-template-rows: repeat(9, 56px);
        grid-gap: 15px;
        padding: 15px;
      }
    }
  `;c=h([u("example-icons")],c);const S=t=>d` <span class="icon material-icons-outlined" title="${t}">
    ${t}
  </span>`,$=["admin_panel_settings","drive_eta","pin_end","event_available","report_problem","add","lunch_dining","map","phone_callback","alarm_on","query_builder","subtitles","library_add","mic_none","moving","my_location","navigation","do_not_disturb_alt","ads_click","queue","view_quilt","savings","settings_input_composite","not_listed_location","location_automation","directions_boat","menu_book","analytics","play_arrow","date_range","bookmarks","calendar_view_week","pest_control","design_services","breakfast_dining","bakery_dining","bookmark_border","web_asset","fiber_manual_record","settings_phone","card_travel","camera_enhance","medical_services","person_pin_circle","edit","check_circle_filled","hearing","contact_page","done_all","dynamic_form","delete","restaurant_menu","departure_board","local_play"];var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=(t,e,l,a)=>{for(var i=a>1?void 0:a?x(e,l):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(a?n(e,l,i):n(i))||i);return a&&i&&w(e,l,i),i};const o={"--font-family":"MaterialSymbolsOutlined","--fill":"0","--wght":"400","--opsz":"24","--grad":"100"};let p=class extends g{setStyle(t,e){t==="--opsz"&&this.setStyle("--font-size",`${Number(e)}px`),this.main.style.setProperty(t,e),o[t]=e,this.requestUpdate()}getStyle(t){var l;const e=(l=this.main)==null?void 0:l.style;if(e){const a=e==null?void 0:e.getPropertyValue(t);if(a)return a}return o[t]}firstUpdated(){for(const[t,e]of Object.entries(o))this.setStyle(t,e)}render(){return d`<section>
      <step-layout
        stepCount="7"
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
            @value=${t=>{const e=t.detail.value;this.setStyle("--fill",e)}}
          ></fill-symbol-control>
          <weight-symbol-control
            .value=${this.getStyle("--wght")}
            @value=${t=>{const e=t.detail.value;this.setStyle("--wght",e)}}
          >
          </weight-symbol-control>
          <optical-symbol-control
            .value=${this.getStyle("--opsz")}
            @value=${t=>{const e=t.detail.value;this.setStyle("--opsz",e)}}
          ></optical-symbol-control>
          <grade-symbol-control
            .value=${this.getStyle("--grad")}
            @value=${t=>{const e=t.detail.value;this.setStyle("--grad",e)}}
          >
          </grade-symbol-control>
        </div>
        <span class="demo" slot="preview"><example-icons></example-icons></span>
      </step-layout>
    </section>`}generateCode(){const t=[];return t.push(".text {","    font-variation-settings:",`        \u201Cwght\u201D  ${this.getStyle("--wght")},`,`        \u201Copsz\u201D  ${this.getStyle("--opsz")},`,`        "FILL"  ${this.getStyle("--fill")},`,`        "GRAD"  ${this.getStyle("--grad")};`,`    font-family: ${this.getStyle("--font-family")};`,`    font-size: ${this.getStyle("--opsz")}px;`,"}"),t.join(`
`)}};p.styles=m`
    ${f}
    .demo {
      --font-family: ${r(o["font-family"])};
      --fill: ${r(o["--fill"])};
      --wght: ${r(o["--wght"])};
      --opsz: ${r(o["--opsz"])};
      --grad: ${r(o["--grad"])};
    }

    div[slot="content-header"] {
      padding-top: 12px;
    }
  `;y([b(".demo")],p.prototype,"main",2);p=y([u("step-seven")],p);export{p as StepSeven};
