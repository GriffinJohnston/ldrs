import Base from '../lib/LdrsBaseElement'
import styles from './bouncy.scss'

class Bouncy extends Base {
  #attributes = ['size', 'color', 'speed']

  static get observedAttributes() {
    return ['size', 'color', 'speed']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this.#attributes)
    this.reflect(this.#attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()

    this.applyDefaultProps({
      size: 45,
      color: 'black',
      speed: 1.75,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
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
  register: (name = 'l-bouncy') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Bouncy {})
    }
  },
  element: Bouncy,
}
