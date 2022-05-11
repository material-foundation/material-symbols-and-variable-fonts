import{r as h,s as k,$ as m,y as V,n as _,e as c,i as S,a as U,t as j,b as L,x as G}from"./vendor.8226bdf7.js";import{_ as r,a as P,R as K,l as Z,b as X,c as N,M as Q,B as Y,o as q,d as J}from"./if-defined.2ec4fe38.js";import{i as W,t as F,e as ee}from"./directive.9b57a945.js";var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,ne=(n,e,t,i)=>{for(var o=i>1?void 0:i?ie(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(o=(i?s(e,t,o):s(o))||o);return i&&o&&te(e,t,o),o};let w=class extends k{render(){return m`${this.renderLogo()}`}renderLogo(){return V`<svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Material Design Logo</title>
      <path
        d="M23 12C23 5.93 18.07 1 12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12ZM5 17.64C3.75 16.1 3 14.14 3 12C3 9.87 3.76 7.92 5 6.37V17.64ZM17.64 5H6.36C7.9 3.75 9.86 3 12 3C14.14 3 16.1 3.75 17.64 5ZM12 14.53L8.24 7H15.77L12 14.53ZM17 9V17H13L17 9ZM11 17H7V9L11 17ZM17.64 19C16.09 20.25 14.13 21 12 21C9.87 21 7.9 20.25 6.36 19H17.64ZM21 12C21 14.14 20.25 16.1 19 17.64V6.37C20.24 7.92 21 9.87 21 12Z"
        fill="var(--md-sys-color-on-surface)"
      />
    </svg>`}};w.styles=h`
    svg {
      width: 24px;
      height: 24px;
      padding: 0;
      margin: 0;
    }
  `;w=ne([_("material-logo")],w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class d extends k{constructor(){super(...arguments);this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new K(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?m`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return m`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${Z(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([c({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0);r([c({type:String})],d.prototype,"icon",void 0);r([P,c({type:String,attribute:"aria-label"})],d.prototype,"ariaLabel",void 0);r([P,c({type:String,attribute:"aria-haspopup"})],d.prototype,"ariaHasPopup",void 0);r([S("button")],d.prototype,"buttonElement",void 0);r([U("mwc-ripple")],d.prototype,"ripple",void 0);r([j()],d.prototype,"shouldRenderRipple",void 0);r([L({passive:!0})],d.prototype,"handleRippleMouseDown",null);r([L({passive:!0})],d.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const oe=h`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let A=class extends d{};A.styles=[oe];A=r([_("mwc-icon-button")],A);var ae=Object.defineProperty,se=Object.getOwnPropertyDescriptor,z=(n,e,t,i)=>{for(var o=i>1?void 0:i?se(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(o=(i?s(e,t,o):s(o))||o);return i&&o&&ae(e,t,o),o};let v=class extends k{constructor(){super(...arguments);this.darkMode=localStorage.getItem("dark-mode")==="true"}render(){const n="Variable fonts are the latest evolution of fonts. This demo allows users to explore and export variations of a typeface across every axis, including width, weight and more.";return m`<header>
      <material-logo class="logo pad-left pad-right"></material-logo>
      <span
        class="title pad-right desktop-only"
        @click=${()=>window.location.hash="/start"}
        >Material Design | Learning Variable Fonts and Symbols</span
      >
      <span
        class="title pad-right mobile-only"
        @click=${()=>window.location.hash="/start"}
        >Learning Variable Fonts and Symbols</span
      >
      <div class="spacer"></div>
      <mwc-icon-button
        class="action"
        aria-label="Switch to ${this.darkMode?"Light":"Dark"} theme"
        icon="${this.darkMode?"light_mode":"brightness_medium"}"
        @click=${()=>{this.darkMode=!this.darkMode,this.setBrightness(this.darkMode),localStorage.setItem("dark-mode",this.darkMode.toString())}}
      ></mwc-icon-button>
      <mwc-icon-button
        class="action"
        aria-label="Source code"
        @click=${()=>{window.open("https://github.com/material-foundation/material-symbols-and-variable-fonts","_blank")}}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.62 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.49C9.52 21.25 9.51 20.6 9.51 19.75C6.73 20.37 6.14 18.38 6.14 18.38C5.69 17.2 5.03 16.88 5.03 16.88C4.12 16.24 5.1 16.26 5.1 16.26C6.1 16.33 6.63 17.32 6.63 17.32C7.52 18.89 8.97 18.43 9.54 18.17C9.63 17.51 9.89 17.06 10.17 16.8C7.95 16.54 5.61 15.66 5.61 11.73C5.61 10.61 6 9.7 6.64 8.98C6.54 8.72 6.19 7.68 6.74 6.27C6.74 6.27 7.58 5.99 9.49 7.32C10.29 7.09 11.14 6.98 11.99 6.98C12.84 6.98 13.69 7.1 14.49 7.32C16.4 5.99 17.24 6.27 17.24 6.27C17.79 7.68 17.44 8.72 17.34 8.98C17.98 9.7 18.37 10.61 18.37 11.73C18.37 15.67 16.03 16.54 13.8 16.79C14.16 17.11 14.48 17.73 14.48 18.69C14.48 20.06 14.47 21.17 14.47 21.5C14.47 21.77 14.65 22.09 15.16 21.99C19.13 20.63 21.99 16.79 21.99 12.26C22 6.59 17.52 2 12 2Z"
            fill="var(--md-sys-color-on-surface)"
          />
        </svg>
      </mwc-icon-button>
      <div title="${n}">
        <mwc-icon-button
          class="action info"
          icon="help"
          label="${n}"
          @click=${()=>{this.dispatchEvent(new CustomEvent("message",{detail:n,bubbles:!0,composed:!0}))}}
        ></mwc-icon-button>
      </div>
    </header>`}setBrightness(n=window.matchMedia("(prefers-color-scheme: dark)").matches){n?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),localStorage.setItem("dark-mode",n.toString()),document.dispatchEvent(new Event("theme-change",{bubbles:!0,composed:!0}))}firstUpdated(){this.setBrightness(this.darkMode)}};v.styles=h`
    header {
      background-color: var(--md-comp-app-bar-color);
      color: var(--md-comp-app-bar-on-color);
      border-bottom: 1px solid var(--md-sys-color-outline);
      display: flex;
      align-items: center;
      --padding: 30px;
      height: var(--header-height);
      width: 100%;
      z-index: 10;
      overflow-x: auto;
    }
    .title {
      font-family: Google Sans;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
    }
    .action {
      padding-left: 4px;
    }
    .pad-left {
      padding-left: var(--padding);
    }
    .pad-right {
      padding-right: var(--padding);
    }
    .spacer {
      flex: 1;
    }
    .info {
      padding-right: calc(var(--padding) / 2);
    }
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: block;
    }

    @media (min-width: 600px) {
      .desktop-only {
        display: block;
      }
      .mobile-only {
        display: none;
      }
    }
  `;z([c({type:Boolean,attribute:"dark-mode"})],v.prototype,"darkMode",2);v=z([_("app-header")],v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const M=n=>(e,t)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const i=e.constructor._observers;e.constructor._observers=new Map,i.forEach((o,a)=>e.constructor._observers.set(a,o))}}else{e.constructor._observers=new Map;const i=e.updated;e.updated=function(o){i.call(this,o),o.forEach((a,s)=>{const f=this.constructor._observers.get(s);f!==void 0&&f.call(this,this[s],a)})}}e.constructor._observers.set(t,n)};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},O={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},l={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $=p.OPENING,D=p.OPEN,R=p.CLOSING,re=O.REASON_ACTION,C=O.REASON_DISMISS,ce=function(n){X(e,n);function e(t){var i=n.call(this,N(N({},e.defaultAdapter),t))||this;return i.opened=!1,i.animationFrame=0,i.animationTimer=0,i.autoDismissTimer=0,i.autoDismissTimeoutMs=l.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape=!0,i}return Object.defineProperty(e,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass($),this.adapter.removeClass(D),this.adapter.removeClass(R)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(R),this.adapter.addClass($),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(D),t.animationTimer=setTimeout(function(){var i=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),i!==l.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(C)},i))},l.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var i=this;t===void 0&&(t=""),!!this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(p.CLOSING),this.adapter.removeClass(p.OPEN),this.adapter.removeClass(p.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.notifyClosed(t)},l.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var i=l.MIN_AUTO_DISMISS_TIMEOUT_MS,o=l.MAX_AUTO_DISMISS_TIMEOUT_MS,a=l.INDETERMINATE;if(t===l.INDETERMINATE||t<=o&&t>=i)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+i+"\u2013"+o+`
        (or `+a+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var i=t.key==="Escape"||t.keyCode===27;i&&this.getCloseOnEscape()&&this.close(C)},e.prototype.handleActionButtonClick=function(t){this.close(re)},e.prototype.handleActionIconClick=function(t){this.close(C)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(p.OPENING),this.adapter.removeClass(p.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(t,0)})},e}(Q),I=ce;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(n,e)=>{var t,i;const o=n._$AN;if(o===void 0)return!1;for(const a of o)(i=(t=a)._$AO)===null||i===void 0||i.call(t,e,!1),b(a,e);return!0},y=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},B=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),me(e)}};function le(n){this._$AN!==void 0?(y(this),this._$AM=n,B(this)):this._$AM=n}function pe(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let a=t;a<i.length;a++)b(i[a],!1),y(i[a]);else i!=null&&(b(i,!1),y(i));else b(this,n)}const me=n=>{var e,t,i,o;n.type==F.CHILD&&((e=(i=n)._$AP)!==null&&e!==void 0||(i._$AP=pe),(t=(o=n)._$AQ)!==null&&t!==void 0||(o._$AQ=le))};class ue extends W{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),B(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(b(this,e),y(this))}setValue(e){if(de(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const{ARIA_LIVE_DELAY_MS:be}=I.numbers;class he extends ue{constructor(e){super(e);if(this.labelEl=null,this.timerId=null,this.previousPart=null,e.type!==F.CHILD)throw new Error("AccessibleSnackbarLabel only supports child parts.")}update(e,[t,i]){var o;if(!i)return;if(this.labelEl===null){const E=document.createElement("div"),f=m`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;G(f,E);const g=E.firstElementChild;return g.textContent=t,(o=e.endNode)===null||o===void 0||o.parentNode.insertBefore(g,e.endNode),this.labelEl=g,g}const a=this.labelEl;a.setAttribute("aria-live","off"),a.textContent="";const s=document.createElement("span");return s.style.display="inline-block",s.style.width="0",s.style.height="1px",s.textContent="\xA0",a.appendChild(s),a.setAttribute("data-mdc-snackbar-label-text",t),this.timerId!==null&&clearTimeout(this.timerId),this.timerId=window.setTimeout(()=>{this.timerId=null,a.setAttribute("aria-live","polite"),a.removeAttribute("data-mdc-snackbar-label-text"),a.textContent=t,this.setValue(this.labelEl)},be),a}render(e,t){return t?m`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${e}</div>`:m``}}const _e=ee(he);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const{OPENING_EVENT:fe,OPENED_EVENT:ge,CLOSING_EVENT:ve,CLOSED_EVENT:ye}=I.strings;class u extends Y{constructor(){super(...arguments);this.mdcFoundationClass=I,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const e={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return m`
      <div class="mdc-snackbar ${q(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${_e(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},J(this.mdcRoot)),{announce:()=>{},notifyClosed:e=>{this.dispatchEvent(new CustomEvent(ye,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyClosing:e=>{this.open=!1,this.dispatchEvent(new CustomEvent(ve,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(ge,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(fe,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(e=""){this.reason=e,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(e){this.mdcFoundation.handleKeyDown(e)}_handleActionClick(e){this.mdcFoundation.handleActionButtonClick(e)}_handleDismissClick(e){this.mdcFoundation.handleActionIconClick(e)}}r([S(".mdc-snackbar")],u.prototype,"mdcRoot",void 0);r([S(".mdc-snackbar__label")],u.prototype,"labelElement",void 0);r([c({type:Boolean,reflect:!0}),M(function(n){this.mdcFoundation&&(n?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],u.prototype,"open",void 0);r([M(function(n){this.mdcFoundation.setTimeoutMs(n)}),c({type:Number})],u.prototype,"timeoutMs",void 0);r([M(function(n){this.mdcFoundation.setCloseOnEscape(n)}),c({type:Boolean})],u.prototype,"closeOnEscape",void 0);r([c({type:String})],u.prototype,"labelText",void 0);r([c({type:Boolean})],u.prototype,"stacked",void 0);r([c({type:Boolean})],u.prototype,"leading",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const xe=h`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let T=class extends u{};T.styles=[xe];T=r([_("mwc-snackbar")],T);var ke=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,H=(n,e,t,i)=>{for(var o=i>1?void 0:i?Ee(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(o=(i?s(e,t,o):s(o))||o);return i&&o&&ke(e,t,o),o};let x=class extends k{constructor(){super(...arguments);this.message=""}render(){return m`<main>
      <app-header></app-header>
      <article><slot></slot></article>
      <mwc-snackbar
        ?open=${this.message!==""}
        labelText=${this.message}
      ></mwc-snackbar>
    </main> `}firstUpdated(){this.addEventListener("message",n=>{this.message=n.detail,setTimeout(()=>this.message="",2e3)})}};x.styles=h`
    main {
      --padding: 30px;
      --header-height: 80px;
      font-family: Google Sans;
      background-color: var(--md-sys-color-background);
      z-index: 1;
    }
    article {
      height: calc(100vh - var(--header-height));
      overflow: hidden;
    }
  `;H([c({type:String})],x.prototype,"message",2);x=H([_("root-component")],x);export{x as RootComponent};
