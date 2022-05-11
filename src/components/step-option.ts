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

import "./step-divider.js";

@customElement("step-option")
export class StepOption extends LitElement {
  static styles = css`
    .setting {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .header {
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .title > svg {
      margin-left: 6px;
    }
    .description {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      opacity: 0.68;
    }
    .content {
      width: 100%;
    }
  `;

  @property({ type: String }) title = "Setting";
  @property({ type: String }) description = "Setting description";
  @property({ type: Boolean }) showDescription = false;
  @property({ type: Boolean }) hideDivider = false;

  render() {
    const { title, description, showDescription, hideDivider } = this;
    return html`<div class="setting">
      <div class="header">
        <div
          class="title"
          @click=${() => (this.showDescription = !showDescription)}
        >
          <span>${title}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.333328 6.99967C0.333328 3.31967 3.31999 0.333008 7 0.333008C10.68 0.333008 13.6667 3.31967 13.6667 6.99967C13.6667 10.6797 10.68 13.6663 7 13.6663C3.31999 13.6663 0.333328 10.6797 0.333328 6.99967ZM7.66666 6.33301V10.333H6.33333V6.33301H7.66666ZM7 12.333C4.06 12.333 1.66666 9.93967 1.66666 6.99967C1.66666 4.05967 4.06 1.66634 7 1.66634C9.93999 1.66634 12.3333 4.05967 12.3333 6.99967C12.3333 9.93967 9.93999 12.333 7 12.333ZM7.66666 3.66634V4.99967H6.33333V3.66634H7.66666Z"
              fill="var(--md-sys-color-on-surface)"
              opacity="0.5"
            />
          </svg>
        </div>
        ${!showDescription
          ? html`<span class="description">${description}</span> `
          : ``}
      </div>
      <div class="content"><slot></slot></div>
      <!-- ${!(showDescription && !hideDivider)
        ? html` <step-divider></step-divider> `
        : ``} -->
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "step-option": StepOption;
  }
}
