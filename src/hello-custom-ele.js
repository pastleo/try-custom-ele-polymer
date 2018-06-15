class HelloCustomEle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style> h1 { color: #5bbd72; } </style>
      <h1>hello-custom-ele rendered!</h1>
    `
  }
}
customElements.define('hello-custom-ele', HelloCustomEle);
