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
import { buttonActions } from "../styles/actions";

import "./back-button";
import "./next-button";
import "./restart-button";
import "./code-output";
import "./step-divider";

@customElement("step-layout")
export class StepLayout extends LitElement {
  static styles = css`
    main {
      --height: calc(100vh - var(--header-height));
      --options-width: 382px;
      --code-height: auto;
      --code-background-color: rgba(51, 51, 60, 1);
      width: 100%;
      height: var(--height);
      display: flex;
      flex-direction: row;
    }
    aside {
      width: var(--options-width);
      border-right: 1px solid var(--md-sys-color-outline);
      height: var(--height);
      display: flex;
      flex-direction: column;
    }
    .options {
      flex: 1;
      width: var(--options-width);
      overflow-y: auto;
    }
    .options > div {
      padding: 40px;
      display: flex;
      flex-direction: column;
    }
    .code {
      width: var(--options-width);
      height: var(--code-height);
      border-top: 1px solid var(--md-sys-color-outline);
    }
    article {
      height: var(--height);
      width: calc(100% - var(--options-width));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
    }
    .step-tracker {
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.1px;
      text-align: left;
    }
    .title {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
    .subtitle {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    .description {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      opacity: 0.68;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    @media (max-width: 500px) {
      main {
        --options-width: 100%;
      }
      article {
        display: none;
      }
      aside {
        border-right: unset;
      }
    }
    ${buttonActions}
  `;

  @property({ type: Number }) stepCount = 1;
  @property({ type: Number }) totalSteps = 1;
  @property({ type: String }) title = "Current Step";
  @property({ type: String }) description = "Step description...";
  @property({ type: String }) code = "";

  render() {
    const { stepCount, totalSteps, title, description } = this;
    return html`
      <main>
        <aside>
          <div class="options">
            <div>
              <span ?hidden=${stepCount > totalSteps} class="step-tracker"
                >${stepCount} of ${totalSteps}</span
              >
              <span class="title">${title}</span>
              <span class="description"
                ><slot name="description">${description}</slot></span
              >
              <slot name="content-header"></slot>
              <step-divider></step-divider>
              <slot name="options"></slot>
            </div>
          </div>
          <code-output
            class="code"
            .code=${this.code}
            ?hidden=${this.code === ""}
          ></code-output>
        </aside>
        <article><slot name="preview"></slot></article>
      </main>
      <div class="actions">
        ${stepCount === 1
          ? html`<back-button
              @click=${() => (location.hash = "/start")}
            ></back-button>`
          : stepCount > 1
          ? html`<back-button
              @click=${() => (location.hash = "/steps/" + (stepCount - 1))}
            ></back-button>`
          : html``}
        ${stepCount === totalSteps
          ? html`<next-button
              @click=${() => (location.hash = "/finish")}
            ></next-button>`
          : stepCount > totalSteps
          ? html`
              <restart-button
                @click=${() => (location.hash = "/steps/1")}
              ></restart-button>
            `
          : html` <next-button
              @click=${() => (location.hash = "/steps/" + (stepCount + 1))}
            ></next-button>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "step-layout": StepLayout;
  }
}
