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
import "../../components/font-controls/weight";
import "../../components/font-controls/width";
import "../../components/example-text";
import { cssHelpers } from "../../styles/utilities";

const options = {
  "--font-family": "RobotoFlex",
  "--wdth": "110",
  "--wght": "400",
};

@customElement("step-three")
export class StepThree extends LitElement {
  static styles = css`
    ${cssHelpers}
    .demo {
      --font-family: ${unsafeCSS(options["font-family"])};
      --wdth: ${unsafeCSS(options["--wdth"])};
      --wght: ${unsafeCSS(options["--wght"])};
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
        stepCount="3"
        totalSteps="8"
        title="Aesthetic Expression with Variable Axes"
        code="${this.generateCode()}"
      >
        <span slot="description"
          >Variable font <b>axes</b> allow designers to exert much more control
          over how typefaces are applied. Instead of just one to nine predefined
          weights, the entire range of a typeface can be accessed. More choice
          facilitates a better user experience, with axes like <b>Weight</b> and
          <b>Width</b> allowing better information hierarchies and visible
          document structures.</span
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
          <width-font-control
            .value=${this.getStyle("--wdth")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--wdth", value);
            }}
          ></width-font-control>
          <weight-font-control
            .value=${this.getStyle("--wght")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--wght", value);
            }}
          >
          </weight-font-control>
        </div>
        <div class="demo" slot="preview"><example-text></example-text></div>
      </step-layout>
    </section>`;
  }

  generateCode() {
    const sb: string[] = [];
    sb.push(
      ...[
        ".text {",
        "    font-variation-settings:",
        `        “wght”  ${this.getStyle("--wght")},`,
        `        “wdth”  ${this.getStyle("--wdth")};`,
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
    "step-three": StepThree;
  }
}
