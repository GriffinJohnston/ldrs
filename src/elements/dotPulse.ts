import Base from '../lib/LdrsBaseElement.js'
import styles from './dotPulse.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-dot-pulse': {
        size?: number | string
        color?: number | string
        speed?: number | string
      }
    }
  }
}

class DotPulse extends Base {
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
      size: 43,
      color: 'black',
      speed: 1.3,
    })

    this.template.innerHTML = `
      <div class="container"><div class="dot" /></div>
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
  register: (name = 'l-dot-pulse') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends DotPulse {})
    }
  },
  element: DotPulse,
}
