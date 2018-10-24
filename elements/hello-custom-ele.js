import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module'

class HelloCustomEle extends LitElement {
  constructor() {
    super()
    this.color = 'green'
  }
  handleClick() {
    this.color = 'purple'
  }
  render() {
    return html`
      <style> h1 { color: ${this.color}; } </style>
      <link href='./elements/hello-custom-ele.css' rel='stylesheet'>
      <h1 @click=${() => this.handleClick()}>
        <span>hello-custom-ele</span>
        rendered!
      </h1>
    `
  }
}

HelloCustomEle.properties = {
  color: { type: String }
}

customElements.define('hello-custom-ele', HelloCustomEle);
