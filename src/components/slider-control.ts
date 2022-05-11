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

import "@material/mwc-slider";

@customElement("slider-control")
export class SliderControl extends LitElement {
  static styles = css`
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    mwc-slider {
      flex: 1;
      margin-left: -20px;
    }
    .value {
      padding: 8px;
      color: var(--md-sys-color-inverse-surface);
      background-color: var(--md-sys-color-inverse-on-surface);
      border-radius: 4px;
      /* width: 40px; */
      text-align: center;
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean }) stepper = false;

  render() {
    return html`
      <div class="row">
        ${this.stepper
          ? html`
              <mwc-slider
                withTickMarks
                discrete
                step="${this.step}"
                min="${this.min}"
                max="${this.max}"
                .value="${this.value}"
                @input=${(e: any) => {
                  const value = e.target.value;
                  this.onValue(value);
                }}
              ></mwc-slider>
            `
          : html` <mwc-slider
              min="${this.min}"
              max="${this.max}"
              step="0.01"
              .value="${this.value}"
              @input=${(e: any) => {
                const value = e.target.value;
                this.onValue(value);
              }}
            >
            </mwc-slider>`}
        <div class="value">
          <span>${this.value}</span>
        </div>
      </div>
    `;
  }

  onValue(value: number) {
    this.value = value;
    this.dispatchEvent(
      new CustomEvent("value", {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "slider-control": SliderControl;
  }
}
