import Base from '../lib/LdrsBaseElement.js'
import styles from './mirage.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-mirage': {
        size?: string | number
        color?: string | number
        speed?: string | number
      }
    }
  }
}

class Mirage extends Base {
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
      size: 60,
      color: 'black',
      speed: 2.5,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size) / 20}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
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
  register: (name = 'l-mirage') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Mirage {})
    }
  },
  element: Mirage,
}
