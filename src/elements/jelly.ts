import Base from '../lib/LdrsBaseElement.js'
import styles from './jelly.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-jelly': {
        size?: string | number
        color?: string | number
        speed?: string | number
      }
    }
  }
}

class Jelly extends Base {
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
      size: 40,
      color: 'black',
      speed: 0.9,
    })

    this.template.innerHTML = `
      <div
        class="container"
      ></div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size) / 8}
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
  register: (name = 'l-jelly') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Jelly {})
    }
  },
  element: Jelly,
}
