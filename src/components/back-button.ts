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
import { customElement } from "lit/decorators.js";

@customElement("back-button")
export class BackButton extends LitElement {
  static styles = css`
    button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;

      position: static;
      width: 100px;
      height: 48px;
      left: 0px;
      top: 0px;

      border-radius: 100px;
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);

      flex: none;
      order: 2;
      flex-grow: 0;

      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`<button>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 7.5H4.33L9.92 1.91L8.5 0.5L0.5 8.5L8.5 16.5L9.91 15.09L4.33 9.5H16.5V7.5Z"
          fill=" var(--md-sys-color-on-background)"
        />
      </svg>
      <span>Back</span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "back-button": BackButton;
  }
}
