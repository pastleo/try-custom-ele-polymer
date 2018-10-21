import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js?module'

class HelloCustomEle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.render('green')
  }

  render(color) {
    render(
      html`
        <style> h1 { color: ${color}; } </style>
        <link href='./elements/hello-custom-ele.css' rel='stylesheet'>
        <h1 @click=${() => this.render('purple')}>
          <span>hello-custom-ele</span>
          rendered!
        </h1>
      `,
      this.shadowRoot
    )
  }
}

customElements.define('hello-custom-ele', HelloCustomEle);
