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
import { customElement, query } from "lit/decorators.js";

import "../../components/step-layout";
import "../../components/example-icons";
import "../../components/symbol-controls/weight";
import "../../components/symbol-controls/fill";
import "../../components/symbol-controls/grade";
import "../../components/symbol-controls/optical";
import "../../components/tab-button";
import { cssHelpers } from "../../styles/utilities";

const options = {
  "--font-family": "MaterialSymbolsOutlined",
  "--fill": "0",
  "--wght": "400",
  "--opsz": "24",
  "--grad": "100",
};

@customElement("step-seven")
export class StepSeven extends LitElement {
  static styles = css`
    ${cssHelpers}
    .demo {
      --font-family: ${unsafeCSS(options["font-family"])};
      --fill: ${unsafeCSS(options["--fill"])};
      --wght: ${unsafeCSS(options["--wght"])};
      --opsz: ${unsafeCSS(options["--opsz"])};
      --grad: ${unsafeCSS(options["--grad"])};
    }

    div[slot="content-header"] {
      padding-top: 12px;
    }
  `;

  @query(".demo") main!: HTMLElement;

  setStyle(key: string, value: string) {
    if (key === "--opsz") {
      this.setStyle("--font-size", `${Number(value)}px`);
    }
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

  firstUpdated() {
    for (const [key, value] of Object.entries(options)) {
      this.setStyle(key, value);
    }
  }

  render() {
    return html`<section>
      <step-layout
        stepCount="7"
        totalSteps="8"
        title="Material Symbols"
        code="${this.generateCode()}"
        description=""
      >
        <span slot="description">
          Material Symbols are also variable, and have four adjustable
          attributes. The attributes are: <b>Weight</b>, <b>Fill</b>,
          <b>Grade</b>, <b>Optical Size</b>.
        </span>
        <div slot="content-header" class="row center">
          <tab-button
            label="Outlined"
            ?active=${this.getStyle("--font-family") ===
            "MaterialSymbolsOutlined"}
            @click=${() => {
              this.setStyle("--font-family", "MaterialSymbolsOutlined");
            }}
          ></tab-button>
          <tab-button
            label="Sharp"
            ?active=${this.getStyle("--font-family") === "MaterialSymbolsSharp"}
            @click=${() => {
              this.setStyle("--font-family", "MaterialSymbolsSharp");
            }}
          ></tab-button>
          <tab-button
            label="Rounded"
            ?active=${this.getStyle("--font-family") ===
            "MaterialSymbolsRounded"}
            @click=${() => {
              this.setStyle("--font-family", "MaterialSymbolsRounded");
            }}
          ></tab-button>
        </div>
        <div slot="options">
          <fill-symbol-control
            .value=${this.getStyle("--fill")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--fill", value);
            }}
          ></fill-symbol-control>
          <weight-symbol-control
            .value=${this.getStyle("--wght")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--wght", value);
            }}
          >
          </weight-symbol-control>
          <optical-symbol-control
            .value=${this.getStyle("--opsz")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--opsz", value);
            }}
          ></optical-symbol-control>
          <grade-symbol-control
            .value=${this.getStyle("--grad")}
            @value=${(e: any) => {
              const value = e.detail.value;
              this.setStyle("--grad", value);
            }}
          >
          </grade-symbol-control>
        </div>
        <span class="demo" slot="preview"><example-icons></example-icons></span>
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
        `        “opsz”  ${this.getStyle("--opsz")},`,
        `        "FILL"  ${this.getStyle("--fill")},`,
        `        "GRAD"  ${this.getStyle("--grad")};`,
        `    font-family: ${this.getStyle("--font-family")};`,
        `    font-size: ${this.getStyle("--opsz")}px;`,
        "}",
      ]
    );
    return sb.join("\n");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "step-seven": StepSeven;
  }
}
