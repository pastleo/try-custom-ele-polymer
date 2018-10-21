import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js?module'

class HelloCustomEle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    render(
      html`
        <style> h1 { color: green; } </style>
        <link href='./elements/hello-custom-ele.css' rel='stylesheet'>
        <h1>
          <span>hello-custom-ele</span>
          rendered!
        </h1>
      `,
      this.shadowRoot
    )
  }
}

customElements.define('hello-custom-ele', HelloCustomEle);
