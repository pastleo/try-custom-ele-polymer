import './todo-list-add.js'

class PlainRenderTodoList extends HTMLElement {
  connectedCallback() {
    this.items = []
    this.attachShadow({mode: 'open'})
    this.render()
  }
  add(item) {
    this.items.push(item)
    this.render()
  }
  render() {
    this.shadowRoot.innerHTML = `
      <todo-list-add></todo-list-add>
      <ul>
        ${
          this.items.map(({ text, color }) => `
            <li style='color: ${color};'>${text}</li>
          `).join('')
        }
      </ul>
    `
    this.shadowRoot.querySelector('todo-list-add').add = item => this.add(item)
  }
}

customElements.define('plain-render-todo-list', PlainRenderTodoList);
