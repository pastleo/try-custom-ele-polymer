import { LitElement, html } from '@polymer/lit-element';

const color1 = '#5bbd72'
const color2 = '#42a2c3'

class HelloCustomEle extends LitElement {
  static get properties() { return { color: String } }

  constructor() {
    super();
    this.color = this.color || color1;
  }

  _render({ color }) {
    return html`
      <style> h1 { color: ${color}; } </style>
      <h1 on-click="${() => { this.color = this.color === color1 ? color2 : color1 } }">
        hello-custom-ele rendered!
      </h1>
    `
  }
}
customElements.define('hello-custom-ele', HelloCustomEle);
