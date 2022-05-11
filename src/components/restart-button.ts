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

@customElement("restart-button")
export class RestartButton extends LitElement {
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
      <span>Start Over</span>
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 5.5C16.42 5.5 20 9.08 20 13.5C20 17.58 16.95 20.94 13 21.43V19.41C15.83 18.93 18 16.47 18 13.5C18 10.19 15.31 7.5 12 7.5C11.9761 7.5 11.95 7.50228 11.9227 7.50466C11.8927 7.50727 11.8614 7.51 11.83 7.51L12.91 8.59L11.5 10L8 6.5L11.5 3L12.91 4.42L11.82 5.51C11.85 5.51 11.88 5.5075 11.91 5.505C11.94 5.5025 11.97 5.5 12 5.5ZM7.76 9.26C6.67 10.35 6 11.85 6 13.5C6 16.47 8.17 18.93 11 19.41V21.43C7.05 20.94 4 17.58 4 13.5C4 11.29 4.9 9.29 6.34 7.84L7.76 9.26Z"
          fill="var(--md-sys-color-on-secondary-container)"
        />
      </svg>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "restart-button": RestartButton;
  }
}
