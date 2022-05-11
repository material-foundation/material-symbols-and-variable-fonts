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
import { customElement } from "lit/decorators.js";

import "../components/next-button.js";
import { buttonActions } from "../styles/actions.js";

@customElement("start-page")
export class StartPage extends LitElement {
  static styles = css`
    .title {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      padding-top: var(--header-height);
      z-index: 0;
      font-size: 14vh;
      line-height: 1;
    }
    .title :last-child {
      padding-bottom: 10vh;
    }
    .variable-font {
      padding-left: 10vw;
      font-family: Google Sans;
    }
    @keyframes waveAnimation {
      0% {
        font-variation-settings: "wght" 50, "GRAD" 50, "opsz" 5;
      }
      50% {
        font-variation-settings: "wght" 400, "GRAD" -50, "opsz" 16;
      }
      100% {
        font-variation-settings: "wght" 50, "GRAD" 50, "opsz" 5;
      }
    }
    .animate-grade {
      animation: animateGrade 20s infinite;
    }
    .rows {
      font-family: RobotoFlex;
      font-style: normal;
      font-weight: normal;
      font-size: 120px;
      line-height: 96px;
    }
    .row:nth-child(1) {
      opacity: 0.04;
      animation: waveAnimation 4s infinite;
      transition-delay: 0.025s;
    }
    .row:nth-child(2) {
      opacity: 0.03;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 2);
    }
    .row:nth-child(3) {
      opacity: 0.02;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 3);
    }
    .row:nth-child(4) {
      opacity: 0.01;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 4);
    }
    .row:nth-child(5) {
      opacity: 0.005;
      animation: waveAnimation 4s infinite;
      transition-delay: calc(0.025s * 5);
    }
    .animate-grade {
      white-space: nowrap;
    }
    ${buttonActions}
  `;

  render() {
    const letters = ["l", "m", "n", "o", "p"];
    const rows: string[][] = [];
    for (let i = 0; i < letters.length; i++) {
      const row = Array(300).fill(letters[i]);
      rows.push(row);
    }
    return html`<article>
      <div class="background">
        <div class="rows">
          ${rows.map((row) => html`<div class="row">${row.join("")}</div>`)}
        </div>
      </div>
      <div class="title">
        <span class="variable-font animate-width">Learning</span>
        <span class="variable-font animate-weight">Variable Fonts</span>
        <span class="variable-font animate-grade">& Symbols</span>
      </div>
      <div class="actions">
        <next-button @click=${() => (location.hash = "/steps/1")}></next-button>
      </div>
    </article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "start-page": StartPage;
  }
}
