import { LitElement, html, repeat } from '../vendor.js'

import './todo-list-add.js'

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
      <todo-list-add .add=${item => this.add(item)}></todo-list-add>
      <ul>
        ${repeat(this.items, item => item.t, ({ text, color }, i) => html`
          <li style='color: ${color};'>${text} | <a href='#' @click=${() => this.remove(i)}>done</a></li>
        `)}
      </ul>
    `
  }
}

customElements.define('todo-list', TodoList);
