/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cta-button")
export class CtaButton extends LitElement {
  static styles = css`
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
  `;

  @property() title: string = "";
  @property() subtitle: string = "";
  @property() href: string = "";

  render() {
    const { title, subtitle } = this;
    return html`<button
      @click=${() => {
        if (this.href) {
          window.open(this.href, "_blank");
        }
      }}
    >
      <span class="title">${title}</span>
      <span class="subtitle">${subtitle}</span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cta-button": CtaButton;
  }
}
