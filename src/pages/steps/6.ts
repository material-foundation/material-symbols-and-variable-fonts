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

import "../../components/step-layout";
import "../../components/step-option";
import "../../components/tab-button";
import "../../components/slider-control";
import "../../components/example-bookmarks";
import "../../components/font-controls/weight";
import "../../components/font-controls/width";
import "../../components/font-controls/grade";
import "../../components/font-controls/optical";
import { cssHelpers } from "../../styles/utilities";

const options = {
  "--font-family": "RobotoFlex",
  "--wdth": "110",
  "--wght": "400",
  "--opsz": "8",
  "--grad": "0",
};

@customElement("step-six")
export class StepSix extends LitElement {
  static styles = css`
    ${cssHelpers}
    .demo {
      --font-family: ${unsafeCSS(options["font-family"])};
      --wdth: ${unsafeCSS(options["--wdth"])};
      --wght: ${unsafeCSS(options["--wght"])};
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
        stepCount="6"
        totalSteps="8"
        title="All Axes"
        code="${this.generateCode()}"
        description="Together, all the axes provide a palette of tools for solving an almost infinite variety of typographic problems. And because variable fonts are intensely efficient, it may be possible to gain all the expressiveness and fine-tuning benefits without adding too much additional size to the page or app."
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
        <span class="demo" slot="preview"><example-bookmarks></example-bookmarks></span>
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
        `        “wdth”  ${this.getStyle("--wdth")},`,
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
    "step-six": StepSix;
  }
}
