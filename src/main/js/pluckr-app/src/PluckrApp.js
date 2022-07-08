import { LitElement, html, css } from 'lit';
import {
  map as createMap,
  tileLayer,
} from '../node_modules/leaflet/dist/leaflet-src.esm.js';

export class PluckrApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--pluckr-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      #map {
        height: 1096px;
        width: 1096px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    const map = createMap(this.renderRoot.querySelector('#map')).setView(
      [51.505, -0.09],
      13
    );

    tileLayer(
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamxlbmdyYW5kIiwiYSI6ImNsNWM3YTl3YjBla3ozYm8yMHo3NTRtbHkifQ.mhHRpOn0v-v59tXbvEYnlQ',
      {
        maxZoom: 19,
        attribution:
          '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
        integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        crossorigin=""
      />
      <main>
        <h1>${this.title}</h1>
        <div id="map"></div>
      </main>
    `;
  }
}
