import { LitElement, html, css } from 'lit';
import './pluckr-login.js';

import '@vaadin/text-field';
import '@vaadin/icons';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle.js';
import '@vaadin/tabs';
import '@vaadin/button';

import mapboxgl from '../dist/mapbox-gl.esm.js';
import MapboxGeocoder from '../dist/mapbox-gl-geocoder.esm.min.js';

export class PluckrApp extends LitElement {
  map = null;

  static get properties() {
    return {
      title: { type: String },
      location: { type: Object },
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

      pluckr-login {
        margin-left: auto;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Pluckr';
    this.location = { x: 52.0474828687443, y: 5.080036739440433 };
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiamxlbmdyYW5kIiwiYSI6ImNsNWM3YTl3YjBla3ozYm8yMHo3NTRtbHkifQ.mhHRpOn0v-v59tXbvEYnlQ',
      container: this.renderRoot.querySelector('#map'),
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.location.y, this.location.x],
      zoom: 13,
    });

    this.map.addControl(
      new MapboxGeocoder({
        accessToken:
          'pk.eyJ1IjoiamxlbmdyYW5kIiwiYSI6ImNsNWM3YTl3YjBla3ozYm8yMHo3NTRtbHkifQ.mhHRpOn0v-v59tXbvEYnlQ',
        mapboxgl,
      })
    );

    this.map.on('moveend', this.moveEnd.bind(this));

    this.loadMarkers(this.map.getBounds());
  }

  loadMarkers(bounds) {
    fetch(
      `/api/trees?bbox=${bounds._ne.lat},${bounds._ne.lng},${bounds._sw.lat},${bounds._sw.lng}`
    )
      .then(response => response.json())
      .then(data => {
        data.map(p =>
          new mapboxgl.Marker()
            .setLngLat([p.location.y, p.location.x])
            .addTo(this.map)
        );
      })
      .catch(error => {
        console.error('Impossible to log Points of Interests:', error);
      });
  }

  moveEnd(e) {
    this.loadMarkers(e.target.getBounds());
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
        integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        crossorigin=""
      />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"
        type="text/css"
      />
      <vaadin-app-layout>
        <vaadin-drawer-toggle slot="navbar touch-optimized">
        </vaadin-drawer-toggle>
        <h3 slot="navbar touch-optimized">${this.title}</h3>
        <pluckr-login slot="navbar"></pluckr-login>
        <div>
          <vaadin-text-field placeholder="Search">
            <vaadin-icon slot="prefix" icon="vaadin:search"></vaadin-icon>
          </vaadin-text-field>
          <div id="map"></div>
        </div>
      </vaadin-app-layout>
    `;
  }
}
