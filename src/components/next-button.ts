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

@customElement("next-button")
export class NextButton extends LitElement {
  static styles = css`
    button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;

      position: static;
      height: 48px;
      left: 0px;
      top: 0px;

      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
      border-radius: 100px;

      flex: none;
      order: 2;
      flex-grow: 0;

      border: none;
      cursor: pointer;
    }

    button :first-child {
      padding-right: 16px;
    }

    button:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;

  render() {
    return html`<button>
      <span>Next</span>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 0.5L7.09 1.91L12.67 7.5H0.5V9.5H12.67L7.09 15.09L8.5 16.5L16.5 8.5L8.5 0.5Z"
          fill="var(--md-sys-color-on-secondary-container)"
        />
      </svg>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "next-button": NextButton;
  }
}
