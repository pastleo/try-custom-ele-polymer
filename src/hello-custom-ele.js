import { html, render as litRender } from '/node_modules/lit-html/lit-html.js';

class HelloCustomEle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'});
    litRender(this.render('#5bbd72'), this.shadowRoot);
  }

  render(color) {
    return html`
      <style> h1 { color: ${color}; } </style>
      <h1>hello-custom-ele rendered!</h1>
    `
  }
}
customElements.define('hello-custom-ele', HelloCustomEle);
