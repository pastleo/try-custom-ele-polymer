import { LitElement, html } from '../vendor.js'

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
