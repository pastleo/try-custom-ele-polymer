class HelloCustomEle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>hello-custom-ele rendered!</h1>
    `;
  }
}

customElements.define('hello-custom-ele', HelloCustomEle);
