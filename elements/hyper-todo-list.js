import { HyperHTMLElement } from '../vendor.js'
const { wire } = HyperHTMLElement

import './todo-list-add.js'

class HyperTodoList extends HyperHTMLElement {
  created() {
    this.items = []

    // remove this line to choose not to use shadow DOM, then will render to innerHTML
    this.attachShadow({mode: 'open'})

    this.render()
  }
  add(item) {
    this.items.push(item)
    this.render()
  }
  remove(index) {
    this.items.splice(index, 1)
    this.render()
  }
  render() {
    // important notes:
    // 1. `data=` can be used to pass js value to sub-element: https://viperhtml.js.org/hyperhtml/documentation/#essentials-6-2
    // 2. to render partials, `wire([obj[, type:id]])` should be used
    //   2.1. `obj` is for diff when updating
    //   2.2. `type:id` is the template name of partial, I guess this is used to let hyperHTML know the cache key for this partial template
    //   2.3. explanation: https://viperhtml.js.org/hyperhtml/documentation/#essentials-1
    //   2.4. example: https://viperhtml.js.org/hyperhtml/documentation/#api-1-2
    // 3. value of `style=` should be an object: https://viperhtml.js.org/hyperhtml/documentation/#essentials-6-1
    return this.html`
      <todo-list-add data=${{add: item => this.add(item)}}></todo-list-add>
      <ul>
        ${this.items.map((item, i) => wire(item, ':item')`
          <li style=${{color: item.color}}>${item.text} | <a href='#' onclick=${() => this.remove(i)}>done</a></li>
        `)}
      </ul>
    `
  }
}

HyperTodoList.define('hyper-todo-list');
