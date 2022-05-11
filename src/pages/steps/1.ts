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

import "../../components/step-layout.js";
import "../../components/step-option.js";
import "../../components/tab-button.js";
import { cssHelpers } from "../../styles/utilities.js";

const options = {
  "--font-family": "RobotoFlex",
};

@customElement("step-one")
export class StepOne extends LitElement {
  static styles = css`
    ${cssHelpers}
    .demo {
      --font-family: ${unsafeCSS(options["font-family"])};
      font-variation-settings: "wdth" 110;
      font-family: var(--font-family);
      font-size: 100px;
      text-align: center;
      color: var(--md-sys-color-on-surface);
    }
    div[slot="content-header"] {
      padding-top: 12px;
    }
    .tabs {
      width: 100%;
    }
    .demo[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `;

  @query(".demo") main!: HTMLElement;
  @property({ type: Boolean }) useSerif = false;

  setStyle(key: string, value: string) {
    this.main.style.setProperty(key, value);
    this.requestUpdate();
  }

  getStyle(key: string) {
    const style = this.main?.style;
    if (style) {
      const value = style?.getPropertyValue(key);
      return value;
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
        stepCount="1"
        totalSteps="8"
        title="What are Variable Fonts?"
        code="${this.generateCode()}"
        description="Variable fonts are a new innovative font format that allows users to gain control over their type and symbols. Roboto Serif and Roboto Flex are new typefaces made fresh for variable font technology, each with a wide range of styles."
      >
        <div slot="content-header" class="row center tabs">
          <tab-button
            label="Roboto Serif"
            ?active=${useSerif}
            @toggle=${this.switchSerif}
          ></tab-button>
          <tab-button
            label="Roboto Flex"
            ?active=${!useSerif}
            @toggle=${this.switchSerif}
          ></tab-button>
        </div>
        <div slot="options">
          ${useSerif
            ? html` <step-option
                title="Roboto Serif"
                description="Roboto Serif is a variable typeface family designed to create a comfortable and frictionless reading experience. Minimal and highly functional, it is useful anywhere (even for app interfaces) because it also offers an extensive set of weights and widths across many optical sizes."
                hideDivider
              >
              </step-option>`
            : html` <step-option
                title="Roboto Flex"
                description="Roboto has been updated to the next generation of system fonts, with robust support for many new weights and widths across a broad set of optical sizes, plus advanced variable font functionality such as grade, and even “parametric” axes for fine tuning every situation. We’ll explain what those mean in a moment."
                hideDivider
              >
              </step-option>`}
        </div>
        <div class="demo" slot="preview" contenteditable="true">
          ${useSerif ? "Roboto Serif" : "Roboto Flex"}
        </div>
      </step-layout>
    </section>`;
  }

  generateCode() {
    const sb: string[] = [];
    sb.push(
      ...[
        ".text {",
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
    "step-one": StepOne;
  }
}
