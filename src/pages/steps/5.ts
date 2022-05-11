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

import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import "@material/mwc-slider";

import "../../components/step-layout";
import "../../components/font-controls/grade";
import "../../components/font-controls/optical";
import "../../components/tab-button";
import "../../components/example-tabs";
import { cssHelpers } from "../../styles/utilities";

const options = {
  "--font-family": "RobotoFlex",
  "--opsz": "8",
  "--grad": "0",
  "--wdth": "110",
  "--wght": "400",
};

@customElement("step-five")
export class StepFive extends LitElement {
  static styles = css`
    ${cssHelpers}
    .demo {
      --font-family: ${unsafeCSS(options["font-family"])};
      --opsz: ${unsafeCSS(options["--opsz"])};
      --grad: ${unsafeCSS(options["--grad"])};
    }
    div[slot="content-header"] {
      padding-top: 12px;
    }
  `;

  @query(".demo") main!: HTMLElement;
  @property({ type: Boolean }) useSerif = false;

  setStyle(key: string, value: string) {
    this.main.style.setProperty(key, value);
    options[key] = value;
    this.requestUpdate();
  }

  getStyle(key: string) {
    const style = this.main?.style;
    if (style) {
      const value = style?.getPropertyValue(key);
      if (value) return value;
    }
    return options[key];
  }

  switchSerif() {
    this.useSerif = !this.useSerif;
    this.setStyle(
      "--font-family",
      this.useSerif ? "RobotoSerif" : "RobotoFlex"
    );
  }

  firstUpdated() {
    for (const [key, value] of Object.entries(options)) {
      this.setStyle(key, value);
    }
  }

  render() {
    const { useSerif } = this;
    return html`<section>
      <step-layout
        stepCount="5"
        totalSteps="8"
        title="Finesse"
        code="${this.generateCode()}"
      >
        <span slot="description"
          >Highly detailed axes like <b>Optical Size</b> and
          <b>Grade</b> provide an incrementally more specific experience. They
          can increase legibility at varying distances, or improve accessibility
          in a dark or high-contrast mode. Often these axes’ values are set
          indirectly to adapt to the text’s context, such as point size or
          device mode.</span
        >
        <div slot="content-header" class="row center">
          <tab-button
            label="Roboto Serif"
            ?active=${useSerif}
            @click=${this.switchSerif}
          ></tab-button>
          <tab-button
            label="Roboto Flex"
            ?active=${!useSerif}
            @click=${this.switchSerif}
          ></tab-button>
        </div>
        <div slot="options">
          <optical-font-control
            .value=${this.getStyle("--opsz")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--opsz", value);
            }}
          ></optical-font-control>
          <grade-font-control
            .value=${this.getStyle("--grad")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--grad", value);
            }}
          >
          </grade-font-control>
        </div>
        <span class="demo" slot="preview"><example-tabs></example-tabs></span>
      </step-layout>
    </section>`;
  }

  generateCode() {
    const sb: string[] = [];
    sb.push(
      ...[
        ".text {",
        "    font-variation-settings:",
        `        “opsz”  ${this.getStyle("--opsz")},`,
        `        "GRAD"  ${this.getStyle("--grad")};`,
        `    font-family: ${this.getStyle("--font-family")};`,
        "    font-size: 100px;",
        "}",
      ]
    );
    return sb.join("\n");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "step-five": StepFive;
  }
}
