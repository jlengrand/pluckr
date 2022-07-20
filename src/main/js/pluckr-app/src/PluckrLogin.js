import {css, html, LitElement} from "lit";
import '@vaadin/horizontal-layout';
import '@vaadin/button';
import '@vaadin/dialog';
import '@vaadin/form-layout';
import '@vaadin/text-field';
import '@vaadin/password-field';
import {dialogRenderer} from "@vaadin/dialog/lit";
import '@vaadin/horizontal-layout';
import '@vaadin/progress-bar';

export class PluckrLogin extends LitElement {

  responsiveSteps = [
    {minWidth: 0, columns: 1},
  ];

  static get properties() {
    return {
      signUpOpened: {type: Boolean},
      username: {type: String},
      password: {type: String},
      passwordConfirm: {type: String},
      loadingBarActive: {type: Boolean}
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.signUpOpened = false;
    this.loadingBarActive = false;
  }

  render() {
    return html`
      <vaadin-horizontal-layout slot="navbar touch-optimized" theme="spacing padding">
        <vaadin-button theme="primary" @click="${this.signUpClicked}">Sign up</vaadin-button>
        <vaadin-button theme="secondary">Login</vaadin-button>
      </vaadin-horizontal-layout>


      <vaadin-dialog
        header-title="SignUp"
        .opened="${this.signUpOpened}"
        @opened-changed="${e => (this.signUpOpened = e.detail.value)}"
        ${dialogRenderer(this.signUpRenderer)}
        id="signUp">

      </vaadin-dialog>
    `;
  }

  signUpClicked() {
    this.signUpOpened = true;
    console.log("Signup clicked!");
  }

  signUpRenderer() {
    return html`
      <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
        <vaadin-text-field value="${this.username}" @change="${(e) => {
          this.username = e.target.value
        }}" label="email"></vaadin-text-field>
        <vaadin-password-field value="${this.password}" @change="${(e) => {
          this.password = e.target.value
        }}" label="Password"></vaadin-password-field>
        <vaadin-password-field value="${this.passwordConfirm}" @change="${(e) => {
          this.passwordConfirm = e.target.value
        }}" label="Confirm password"></vaadin-password-field>

        ${ this.loadingBarActive ?
            html`<vaadin-progress-bar indeterminate></vaadin-progress-bar>`
            : undefined
        }

        <vaadin-horizontal-layout theme="spacing padding" style="justify-content: end">
          <vaadin-button theme="secondary" @click="${() => {
            this.signUpOpened = false
          }}">Cancel
          </vaadin-button>
          <vaadin-button theme="primary" @click="${this.signUp}">Sign up</vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-form-layout>
    `;
  }

  signUp() {
    this.loadingBarActive = true;

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'username': this.username,
        'password': this.password,
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        this.loadingBarActive = false;
        this.signUpOpened = false;

        // TODO : Add errors!
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
}
