import { LitElement, html } from '../vendor.js'

class TodoListAdd extends LitElement {
  submitAdd() {
    const textInput = this.shadowRoot.getElementById('text')
    const colorInput = this.shadowRoot.getElementById('color')
    const add = this.add || this.data.add
    add({ t: Date.now(), text: textInput.value, color: colorInput.value })
    textInput.value = ''
  }
  handleClick() {
    this.submitAdd()
  }
  handleKeypress({ keyCode }) {
    if(keyCode === 13) {
      this.submitAdd()
    }
  }
  render() {
    return html`
      <input id='text' type='text' @keypress=${e => this.handleKeypress(e)} />
      <input id='color' type='color' />
      <button @click=${() => this.handleClick()}>
        Add
      </button>
    `
  }
}

customElements.define('todo-list-add', TodoListAdd);
