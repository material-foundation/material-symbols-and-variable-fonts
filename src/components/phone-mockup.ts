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

import {
  html,
  css,
  LitElement,
  ReactiveController,
  ReactiveControllerHost,
} from "lit";
import { customElement } from "lit/decorators.js";

@customElement("phone-mockup")
export class PhoneMockup extends LitElement {
  static styles = css`
    .frame {
      width: 367px;
      height: 794.57px;
      border-radius: 10px;
      box-shadow: 0 0 10px var(--md-sys-color-shadow);
      --scale: 1;
      transform: scale(var(--scale));
      --bezel-width: 4px;
      --status-bar-height: 30px;
    }
    .bezel {
      background-color: var(--md-sys-color-outline);
      padding: var(--bezel-width);
      position: relative;
      width: calc(100% - var(--bezel-width) * 2);
      height: calc(100% - var(--bezel-width) * 2);
      border-radius: 15px;
    }
    .screen {
      position: absolute;
      top: var(--bezel-width);
      left: var(--bezel-width);
      bottom: var(--bezel-width);
      right: var(--bezel-width);
      background-color: var(--md-sys-color-background);
      font-family: Google Sans;
      border-radius: 15px;
    }
    .status-bar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: var(--status-bar-height);
    }
    .clock {
      padding: 11.5px;
      font-style: normal;
      font-weight: 500;
      font-size: 12.4462px;
      line-height: 18px;
      letter-spacing: 0.222253px;
      color: var(--md-sys-color-on-surface);
    }
    .actions {
      padding: 11.5px;
    }
    .content {
      position: absolute;
      top: var(--status-bar-height);
      left: var(--bezel-width);
      bottom: var(--bezel-width);
      right: var(--bezel-width);
      overflow-y: auto;
    }
    @media (max-height: 1150px) {
      .frame {
        --scale: 0.8;
      }
    }
    @media (max-height: 900px) {
      .frame {
        --scale: 0.7;
      }
    }
    @media (max-height: 700px) {
      .frame {
        --scale: 0.6;
      }
    }
    @media (max-height: 500px) {
      .frame {
        --scale: 0.4;
      }
    }
  `;

  private clock = new ClockController(this);

  render() {
    const date = this.clock.value;
    const time = `${date.getHours() % 12}:${date.getMinutes()}`;
    return html`<div class="frame">
      <div class="bezel">
        <div class="screen">
          <div class="status-bar">
            <div class="clock">${time}</div>
            <svg
              class="actions"
              width="44"
              height="16"
              viewBox="0 0 44 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.37717 1.82434C5.35452 1.82434 2.70971 3.14805 0.820557 5.22817L8.37717 14.4311L15.9338 5.22817C14.0446 3.14805 11.3998 1.82434 8.37717 1.82434V1.82434Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                d="M28.8985 1.82434L16.3042 14.4311H28.8985V1.82434V1.82434Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.9184 3.08502V1.82434H41.067V3.08502H42.4334C42.8931 3.08502 43.271 3.46322 43.271 3.92337V10.0188V13.5928C43.271 14.0529 42.8931 14.4311 42.4271 14.4311H36.5519C36.0922 14.4311 35.7144 14.0529 35.7144 13.5928V10.0188V3.92337C35.7144 3.46322 36.0922 3.08502 36.5519 3.08502H37.9184ZM36.9738 10.0192V13.1709H42.0115V10.0192V4.34612H36.9738V10.0192Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                d="M42.4334 14.4312H36.5519C36.0922 14.4312 35.7144 14.053 35.7144 13.5928V3.92343C35.7144 3.46329 36.0922 3.08508 36.5519 3.08508H42.4334C42.8931 3.08508 43.271 3.46329 43.271 3.92343V13.5928C43.271 14.053 42.8931 14.4312 42.4334 14.4312Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                d="M8.40008 1.81799C5.3793 1.81799 2.73613 3.14188 0.848145 5.22228L8.40008 14.4265L15.952 5.22228C14.064 3.14188 11.4209 1.81799 8.40008 1.81799V1.81799Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                d="M28.9088 1.81799L16.3223 14.4265H28.9088V1.81799V1.81799Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.9229 3.07884V1.81799H41.0695V3.07884H42.4352C42.8946 3.07884 43.2722 3.4571 43.2722 3.9173V10.0135V13.588C43.2722 14.0482 42.8946 14.4265 42.4289 14.4265H36.5572C36.0978 14.4265 35.7202 14.0482 35.7202 13.588V10.0135V3.9173C35.7202 3.4571 36.0978 3.07884 36.5572 3.07884H37.9229ZM36.9789 10.0135V13.1657H42.0135V10.0135V4.33971H36.9789V10.0135Z"
                fill="var(--md-sys-color-on-surface)"
              />
              <path
                d="M42.4352 14.4264H36.5572C36.0978 14.4264 35.7202 14.0481 35.7202 13.5879V3.9172C35.7202 3.45699 36.0978 3.07874 36.5572 3.07874H42.4352C42.8946 3.07874 43.2722 3.45699 43.2722 3.9172V13.5879C43.2722 14.0481 42.8946 14.4264 42.4352 14.4264Z"
                fill="var(--md-sys-color-on-surface)"
              />
            </svg>
          </div>
          <div class="content"><slot></slot></div>
        </div>
      </div>
    </div>`;
  }
}

class ClockController implements ReactiveController {
  host: ReactiveControllerHost;

  value = new Date();
  timeout: number;
  private _timerID?: number;

  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout;
  }
  hostConnected() {
    // Start a timer when the host is connected
    // @ts-ignore
    this._timerID = setInterval(() => {
      this.value = new Date();
      // Update the host with new value
      this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    // Clear the timer when the host is disconnected
    clearInterval(this._timerID);
    this._timerID = undefined;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "phone-mockup": PhoneMockup;
  }
}
