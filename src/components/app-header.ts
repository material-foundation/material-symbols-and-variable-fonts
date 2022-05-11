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

import "./material-logo.js";
import "@material/mwc-icon-button";

@customElement("app-header")
export class AppHeader extends LitElement {
  static styles = css`
    header {
      background-color: var(--md-comp-app-bar-color);
      color: var(--md-comp-app-bar-on-color);
      border-bottom: 1px solid var(--md-sys-color-outline);
      display: flex;
      align-items: center;
      --padding: 30px;
      height: var(--header-height);
      width: 100%;
      z-index: 10;
      overflow-x: auto;
    }
    .title {
      font-family: Google Sans;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
    }
    .action {
      padding-left: 4px;
    }
    .pad-left {
      padding-left: var(--padding);
    }
    .pad-right {
      padding-right: var(--padding);
    }
    .spacer {
      flex: 1;
    }
    .info {
      padding-right: calc(var(--padding) / 2);
    }
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: block;
    }

    @media (min-width: 600px) {
      .desktop-only {
        display: block;
      }
      .mobile-only {
        display: none;
      }
    }
  `;

  @property({ type: Boolean, attribute: "dark-mode" }) darkMode =
    localStorage.getItem("dark-mode") === "true";

  render() {
    const tooltip =
      "Variable fonts are the latest evolution of fonts. This demo allows users to explore and export variations of a typeface across every axis, including width, weight and more.";
    return html`<header>
      <material-logo class="logo pad-left pad-right"></material-logo>
      <span
        class="title pad-right desktop-only"
        @click=${() => (window.location.hash = "/start")}
        >Material Design | Learning Variable Fonts and Symbols</span
      >
      <span
        class="title pad-right mobile-only"
        @click=${() => (window.location.hash = "/start")}
        >Learning Variable Fonts and Symbols</span
      >
      <div class="spacer"></div>
      <mwc-icon-button
        class="action"
        aria-label="Switch to ${this.darkMode ? "Light" : "Dark"} theme"
        icon="${this.darkMode ? "light_mode" : "brightness_medium"}"
        @click=${() => {
          this.darkMode = !this.darkMode;
          this.setBrightness(this.darkMode);
          localStorage.setItem("dark-mode", this.darkMode.toString());
        }}
      ></mwc-icon-button>
      <mwc-icon-button
        class="action"
        aria-label="Source code"
        @click=${() => {
          window.open(
            "https://github.com/material-foundation/material-symbols-and-variable-fonts",
            "_blank"
          );
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.62 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.49C9.52 21.25 9.51 20.6 9.51 19.75C6.73 20.37 6.14 18.38 6.14 18.38C5.69 17.2 5.03 16.88 5.03 16.88C4.12 16.24 5.1 16.26 5.1 16.26C6.1 16.33 6.63 17.32 6.63 17.32C7.52 18.89 8.97 18.43 9.54 18.17C9.63 17.51 9.89 17.06 10.17 16.8C7.95 16.54 5.61 15.66 5.61 11.73C5.61 10.61 6 9.7 6.64 8.98C6.54 8.72 6.19 7.68 6.74 6.27C6.74 6.27 7.58 5.99 9.49 7.32C10.29 7.09 11.14 6.98 11.99 6.98C12.84 6.98 13.69 7.1 14.49 7.32C16.4 5.99 17.24 6.27 17.24 6.27C17.79 7.68 17.44 8.72 17.34 8.98C17.98 9.7 18.37 10.61 18.37 11.73C18.37 15.67 16.03 16.54 13.8 16.79C14.16 17.11 14.48 17.73 14.48 18.69C14.48 20.06 14.47 21.17 14.47 21.5C14.47 21.77 14.65 22.09 15.16 21.99C19.13 20.63 21.99 16.79 21.99 12.26C22 6.59 17.52 2 12 2Z"
            fill="var(--md-sys-color-on-surface)"
          />
        </svg>
      </mwc-icon-button>
      <div title="${tooltip}">
        <mwc-icon-button
          class="action info"
          icon="help"
          label="${tooltip}"
          @click=${() => {
            this.dispatchEvent(
              new CustomEvent("message", {
                detail: tooltip,
                bubbles: true,
                composed: true,
              })
            );
          }}
        ></mwc-icon-button>
      </div>
    </header>`;
  }

  setBrightness(
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    if (dark) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
    localStorage.setItem("dark-mode", dark.toString());
    document.dispatchEvent(
      new Event("theme-change", {
        bubbles: true,
        composed: true,
      })
    );
  }

  firstUpdated() {
    this.setBrightness(this.darkMode);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
