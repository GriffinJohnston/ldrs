import Base from '../lib/LdrsBaseElement.js'
import styles from './tailspin.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-tailspin': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
      }
    }
  }
}

class Tailspin extends Base {
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
      size: 40,
      color: 'black',
      speed: 0.9,
      stroke: 5,
    })

    this.template.innerHTML = `
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
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
        --uib-stroke: ${this.stroke}px;
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-tailspin') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Tailspin {})
    }
  },
  element: Tailspin,
}
