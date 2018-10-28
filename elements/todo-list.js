import { LitElement, html, repeat } from '../vendor.js'

class AddTodo extends LitElement {
  submitAdd() {
    const textInput = this.shadowRoot.getElementById('text')
    const colorInput = this.shadowRoot.getElementById('color')
    this.add({ t: Date.now(), text: textInput.value, color: colorInput.value })
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

customElements.define('add-todo', AddTodo);

class TodoList extends LitElement {
  constructor() {
    super()
    this.items = []
  }
  add(item) {
    this.items.push(item)
    this.requestUpdate()
  }
  remove(index) {
    this.items.splice(index, 1)
    this.requestUpdate()
  }
  render() {
    return html`
      <add-todo .add=${item => this.add(item)}></add-todo>
      <ul>
        ${repeat(this.items, item => item.t, ({ text, color }, i) => html`
          <li style='color: ${color};'>${text} | <a href='#' @click=${() => this.remove(i)}>done</a></li>
        `)}
      </ul>
    `
  }
}

customElements.define('todo-list', TodoList);
