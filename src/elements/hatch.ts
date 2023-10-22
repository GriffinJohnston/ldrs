import Base from '../lib/LdrsBaseElement.js'
import styles from './hatch.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-hatch': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
      }
    }
  }
}

class Hatch extends Base {
  _attributes: string[] = ['size', 'color', 'speed', 'stroke']
  size: string
  color: string
  speed: string
  stroke: string

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
