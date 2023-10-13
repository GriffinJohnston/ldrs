import Base from '../lib/LdrsBaseElement'
import styles from './hatch.scss'

class Hatch extends Base {
  _attributes = ['size', 'color', 'speed', 'stroke']

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 28,
      color: 'black',
      speed: 3.5,
      stroke: 4,
    })

    this.template.innerHTML = `
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

    this.shadow.replaceChildren(this.template.content.cloneNode(true))

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
