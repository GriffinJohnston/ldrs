import Base from '../lib/LdrsBaseElement.js'
import styles from './ripples.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-ripples': {
        size?: string | number
        color?: string | number
        speed?: string | number
      }
    }
  }
}

class Ripples extends Base {
  _attributes: string[] = ['size', 'color', 'speed']
  size: string
  color: string
  speed: string

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
      size: 45,
      color: 'black',
      speed: 2,
    })

    this.template.innerHTML = `
      <div class="container">
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
  register: (name = 'l-ripples') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Ripples {})
    }
  },
  element: Ripples,
}
