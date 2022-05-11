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

@customElement("example-icons")
export class ExampleIcons extends LitElement {
  static styles = css`
    .icon-grid {
      font-family: var(--font-family);
      font-variation-settings: "opsz" var(--opsz), "GRAD" var(--grad),
        "FILL" var(--fill), "wght" var(--wght);
      display: grid;
      grid-template-columns: repeat(3, 56px);
      grid-template-rows: repeat(12, 56px);
      grid-gap: 8px;
      padding: 8px;
    }
    .icon {
      width: 128px;
      height: 128px;
      font-size: var(--font-size);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media (min-width: 500px) {
      .icon-grid {
        grid-template-columns: repeat(6, 56px);
        grid-template-rows: repeat(9, 56px);
      }
    }
    @media (min-width: 900px) {
      .icon-grid {
        grid-template-columns: repeat(9, 56px);
        grid-template-rows: repeat(9, 56px);
        grid-gap: 15px;
        padding: 15px;
      }
    }
  `;

  render() {
    return html` <div class="icon-grid">${icons.map(icon)}</div>`;
  }
}

const icon = (name: string) =>
  html` <span class="icon material-icons-outlined" title="${name}">
    ${name}
  </span>`;

export const icons = [
  // Row 1
  "admin_panel_settings",
  "drive_eta",
  "pin_end",
  "event_available",
  "report_problem",
  "add",
  "lunch_dining",
  "map",
  "phone_callback",
  // Row 2
  "alarm_on",
  "query_builder",
  "subtitles",
  "library_add",
  "mic_none",
  "moving",
  "my_location",
  "navigation",
  "do_not_disturb_alt",
  // Row 3
  "ads_click",
  "queue",
  "view_quilt",
  "savings",
  "settings_input_composite",
  "not_listed_location",
  "location_automation",
  "directions_boat",
  "menu_book",
  // Row 4
  "analytics",
  "play_arrow",
  "date_range",
  "bookmarks",
  "calendar_view_week",
  "pest_control",
  "design_services",
  "breakfast_dining",
  "bakery_dining",
  // Row 5
  "bookmark_border",
  "web_asset",
  "fiber_manual_record",
  "settings_phone",
  "card_travel",
  "camera_enhance",
  "medical_services",
  "person_pin_circle",
  "edit",
  // Row 6
  "check_circle_filled",
  "hearing",
  "contact_page",
  "done_all",
  "dynamic_form",
  "delete",
  "restaurant_menu",
  "departure_board",
  "local_play",
];

declare global {
  interface HTMLElementTagNameMap {
    "example-icons": ExampleIcons;
  }
}
