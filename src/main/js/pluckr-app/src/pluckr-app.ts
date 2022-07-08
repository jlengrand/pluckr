import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pluckr-app')
export class PluckrApp extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
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
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
