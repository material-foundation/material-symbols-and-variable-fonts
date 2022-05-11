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

import { html, css, LitElement, svg } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("material-logo")
export class MaterialLogo extends LitElement {
  static styles = css`
    svg {
      width: 24px;
      height: 24px;
      padding: 0;
      margin: 0;
    }
  `;

  render() {
    return html`${this.renderLogo()}`;
  }

  renderLogo() {
    return svg`<svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Material Design Logo</title>
      <path
        d="M23 12C23 5.93 18.07 1 12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12ZM5 17.64C3.75 16.1 3 14.14 3 12C3 9.87 3.76 7.92 5 6.37V17.64ZM17.64 5H6.36C7.9 3.75 9.86 3 12 3C14.14 3 16.1 3.75 17.64 5ZM12 14.53L8.24 7H15.77L12 14.53ZM17 9V17H13L17 9ZM11 17H7V9L11 17ZM17.64 19C16.09 20.25 14.13 21 12 21C9.87 21 7.9 20.25 6.36 19H17.64ZM21 12C21 14.14 20.25 16.1 19 17.64V6.37C20.24 7.92 21 9.87 21 12Z"
        fill="var(--md-sys-color-on-surface)"
      />
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "material-logo": MaterialLogo;
  }
}
