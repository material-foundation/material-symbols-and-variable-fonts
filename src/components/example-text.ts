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

import "./phone-mockup";

@customElement("example-text")
export class ExampleText extends LitElement {
  static styles = css`
    .content {
      overflow: hidden;
      font-variation-settings: "wdth" var(--wdth), "wght" var(--wght);
      font-family: var(--font-family);
    }
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .spacer {
      flex: 1;
    }
    .header {
      margin-top: 14px;
      margin-bottom: 14px;
    }
    .heading {
      font-size: 39.1166px;
      line-height: 39px;
      color: var(--md-sys-color-on-surface);
      width: 100%;
      text-align: start;
      margin-bottom: 25px;
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 17.7803px;
      line-height: 25px;
      letter-spacing: 0.175508px;
      color: var(--md-sys-color-on-surface);
    }
    .bio {
      padding: 8px;
    }
    .bio .author {
      font-style: normal;
      font-weight: normal;
      font-size: 14.2242px;
      line-height: 18px;
      letter-spacing: 0.175508px;
      color: var(--md-sys-color-on-surface-variant);
    }
    .bio .date {
      font-style: normal;
      font-weight: normal;
      font-size: 14.2242px;
      line-height: 18px;
      letter-spacing: 0.175508px;
      color: var(--md-sys-color-outline);
    }
    section {
      padding-left: 14px;
      padding-right: 14px;
    }
  `;

  render() {
    return html`
      <phone-mockup>
        <div class="content">
          <section class="header row">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0045 10.1199H7.18519L12.1548 5.15036L10.8924 3.89685L3.78027 11.009L10.8924 18.1211L12.1459 16.8676L7.18519 11.898H18.0045V10.1199Z"
                fill="var(--md-sys-color-on-surface)"
              />
            </svg>
            <div class="spacer"></div>
            <svg
              width="65"
              height="22"
              viewBox="0 0 65 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_316_3933)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8888 12.138L18.9828 17.232L17.6582 18.5567L12.5641 13.4626C11.6129 14.1472 10.4661 14.565 9.21255 14.565C6.02099 14.565 3.43396 11.978 3.43396 8.7864C3.43396 5.59484 6.02099 3.00781 9.21255 3.00781C12.4041 3.00781 14.9911 5.59484 14.9911 8.7864C14.9911 10.0399 14.5733 11.1867 13.8888 12.138ZM9.21255 4.78584C6.9989 4.78584 5.21199 6.57276 5.21199 8.7864C5.21199 11 6.9989 12.787 9.21255 12.787C11.4262 12.787 13.2131 11 13.2131 8.7864C13.2131 6.57276 11.4262 4.78584 9.21255 4.78584Z"
                  fill="var(--md-sys-color-on-surface)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.1076 7.4529C55.0855 7.4529 55.8856 6.65279 55.8856 5.67488C55.8856 4.69696 55.0855 3.89685 54.1076 3.89685C53.1297 3.89685 52.3296 4.69696 52.3296 5.67488C52.3296 6.65279 53.1297 7.4529 54.1076 7.4529ZM54.1076 9.23093C53.1297 9.23093 52.3296 10.031 52.3296 11.009C52.3296 11.9869 53.1297 12.787 54.1076 12.787C55.0855 12.787 55.8856 11.9869 55.8856 11.009C55.8856 10.031 55.0855 9.23093 54.1076 9.23093ZM52.3296 16.343C52.3296 15.3651 53.1297 14.565 54.1076 14.565C55.0855 14.565 55.8856 15.3651 55.8856 16.343C55.8856 17.321 55.0855 18.1211 54.1076 18.1211C53.1297 18.1211 52.3296 17.321 52.3296 16.343Z"
                  fill="var(--md-sys-color-on-surface)"
                />
              </g>
            </svg>
          </section>
          <section class="row">
            <div class="heading">
              What Buttons are Artists Pushing When They Perform Live
            </div>
          </section>
          <section class="row">
            <img src="images/profile.png" />
            <div class="bio">
              <div class="author">by Selen Zeynep</div>
              <div class="date">May 8, 2022</div>
            </div>
          </section>
          <section class="paragraph">
            <p>
              The general consensus is that artists using digital turntables are
              just pushing random buttons when they perform live. But is that
              true? In the DMC Championships it’s obvious that some artists are
              putting their various honed skills on display.
            </p>
            <p>
              Most of the scorn for solo performers comes from the many who
              headline huge festivals. There must be some specialty skill they
              do in their performance to explain their million-dollar fees.
            </p>
            <p>
              We decided to send in an undercover reporter to the American EDM
              festival to find out what the whole DJ industry is really about
              and what was going on underneath all those lasers.
            </p>
          </section>
        </div>
      </phone-mockup>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "example-text": ExampleText;
  }
}
