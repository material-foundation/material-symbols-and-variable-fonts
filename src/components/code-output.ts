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

import hljs from "highlight.js";
import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("code-output")
export class CodeOutput extends LitElement {
  static styles = css`
    .code {
      color: var(--md-sys-color-on-surface-variant);
      background-color: var(--md-sys-color-surface-variant);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
    .code-content {
      padding-left: 37px;
      padding-right: 37px;
      padding-bottom: 37px;
    }
    code {
      white-space: pre;
    }
    pre {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }
    svg {
      cursor: pointer;
    }
    svg[copied] {
      --md-sys-color-on-surface: var(--md-sys-color-primary);
    }

    .code code {
      color: #0c0c0c;
    }
    .code .hljs-selector-class {
      color: #726f6f;
    }
    .code .hljs-attribute {
      color: #088c30;
    }

    .code[dark] code {
      color: #cfcfcf;
    }
    .code[dark] .hljs-selector-class {
      color: #bbbbbb;
    }
    .code[dark] .hljs-attribute {
      color: #2da752;
    }
  `;

  @property() code = "";
  @property() platform = "CSS";
  @state() copied = false;

  render() {
    const code = hljs.highlightAuto(this.code).value;
    const bodyDark = document.body.classList.contains("dark-theme");
    return html` <div class="code" ?dark=${bodyDark}>
      <div class="code-header">
        <span class="subtitle">CSS</span>
        <svg
          ?copied=${this.copied}
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click=${async (e: Event) => {
            if (this.copied) return;
            // Copy code to clipboard
            this.dispatchEvent(
              new CustomEvent("message", {
                detail: "Copied!",
                bubbles: true,
                composed: true,
              })
            );
            try {
              await navigator.clipboard.writeText(this.code);
            } catch (error) {}
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 16L19 2C19 0.9 18.1 0 17 0L6 0C4.9 0 4 0.9 4 2L4 16C4 17.1 4.9 18 6 18L17 18C18.1 18 19 17.1 19 16ZM16 20L2 20L2 6H0L0 20C0 21.1 0.9 22 2 22L16 22V20ZM6 16L17 16L17 2L6 2L6 16Z"
            fill="var(--md-sys-color-on-background)"
          />
        </svg>
      </div>
      <div class="code-content">
        <pre><code>${unsafeHTML(code)}</code></pre>
      </div>
    </div>`;
  }

  firstUpdated() {
    document.addEventListener("theme-change", () => {
      this.requestUpdate();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-output": CodeOutput;
  }
}
