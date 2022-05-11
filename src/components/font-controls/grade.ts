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

import "../step-option";
import "../slider-control";

@customElement("grade-font-control")
export class GradeControl extends LitElement {
  static styles = css``;

  @property({ type: Number }) value = 0;

  render() {
    return html`
      <step-option
        title="Grade"
        description="Finesse the style from lighter to bolder, without any changes in overall width – so there are no changes to line breaks or page layout typically caused by changes in weight."
      >
        <slider-control
          step="1"
          min="-150"
          max="150"
          .value=${this.value}
          @value=${(e: any) => {
            const value = e.detail.value;
            this.onValue(value);
          }}
        >
        </slider-control>
      </step-option>
    `;
  }

  private onValue(value: number) {
    const event = new CustomEvent("value", {
      detail: { value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "grade-font-control": GradeControl;
  }
}
