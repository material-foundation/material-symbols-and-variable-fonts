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

import "../components/app-header.js";
import "@material/mwc-snackbar";

@customElement("root-component")
export class RootComponent extends LitElement {
  static styles = css`
    main {
      --padding: 30px;
      --header-height: 80px;
      font-family: Google Sans;
      background-color: var(--md-sys-color-background);
      z-index: 1;
    }
    article {
      height: calc(100vh - var(--header-height));
      overflow: hidden;
    }
  `;

  @property({ type: String }) message = "";

  render() {
    return html`<main>
      <app-header></app-header>
      <article><slot></slot></article>
      <mwc-snackbar
        ?open=${this.message !== ""}
        labelText=${this.message}
      ></mwc-snackbar>
    </main> `;
  }

  firstUpdated() {
    this.addEventListener("message", (e: CustomEvent) => {
      this.message = e.detail;
      setTimeout(() => (this.message = ""), 2000);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "root-component": RootComponent;
  }
}
