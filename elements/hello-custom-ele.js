class HelloCustomEle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style> h1 { color: green; } </style>
      <link href='./elements/hello-custom-ele.css' rel='stylesheet'>
      <h1>
        <span>hello-custom-ele</span>
        rendered!
      </h1>
    `
  }
}

customElements.define('hello-custom-ele', HelloCustomEle);
