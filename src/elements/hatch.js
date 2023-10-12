import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './hatch.scss'

const template = document.createElement('template')

class Hatch extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'speed', 'stroke'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 28,
      color: 'black',
      speed: 3.5,
      stroke: 4,
    })

    template.innerHTML = `
      <div class="container"><div class="line"></div></div>
      <style>
        :host{
          --uib-size: ${this.size};
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke};
        }
        ${styles}
      </style>
    `

    this.shadow.replaceChildren(template.content.cloneNode(true))

    this.dispatchEvent(new Event('ready'))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')

    if (!styleEl) return

    styleEl.innerHTML = `
      :host{
        --uib-size: ${this.size};
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke};
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-hatch') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Hatch {})
    }
  },
  element: Hatch,
}
