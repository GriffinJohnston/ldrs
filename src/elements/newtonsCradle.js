import Base from '../lib/LdrsBaseElement.js'
import styles from './newtonsCradle.scss'

class NewtonsCradle extends Base {
  _attributes = ['size', 'color', 'speed']

  static get observedAttributes() {
    return ['size', 'color', 'speed']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 78,
      color: 'black',
      speed: 1.4,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${styles}
      </style>
    `

    this.shadow.replaceChildren(this.template.content.cloneNode(true))

    this.dispatchEvent(new Event('ready'))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')

    if (!styleEl) return

    styleEl.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-newtons-cradle') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends NewtonsCradle {})
    }
  },
  element: NewtonsCradle,
}
