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

@customElement("tab-button")
export class TabButton extends LitElement {
  static styles = css`
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
  `;

  @property({ type: Boolean }) active = false;
  @property({ type: String }) label = "";

  render() {
    const { active, label } = this;
    return html`<button
      ?active=${active}
      @click=${() => {
        if (this.active) {
          return;
        }
        this.dispatchEvent(new CustomEvent("toggle", { bubbles: true }));
      }}
    >
      <slot name="leading"></slot>
      <span>${label}</span>
      <slot name="trailing"></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tab-button": TabButton;
  }
}
