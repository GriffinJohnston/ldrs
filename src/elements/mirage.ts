import Base from '../lib/LdrsBaseElement.js'
import styles from './mirage.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-mirage': {
        size?: number | string
        color?: number | string
        speed?: number | string
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

    const sizeInt = parseInt(this.size)
    const height = sizeInt * 0.23

    this.template.innerHTML = `
      <div class="container">
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${height}"
          height="${height}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
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
    const svgEl = this.shadow.querySelector('svg')

    if (svgEl) {
      const blurDef = svgEl.querySelector('feGaussianBlur')
      const sizeInt = parseInt(this.size)
      const height = sizeInt * 0.23
      blurDef.setAttribute('stdDeviation', String(sizeInt / 20))
      svgEl.setAttribute('height', String(height))
      svgEl.setAttribute('width', this.size)
      svgEl.setAttribute('viewBox', `0 0 ${this.size} ${height}`)
    }

    if (styleEl) {
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
}

export default {
  register: (name = 'l-mirage') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Mirage {})
    }
  },
  element: Mirage,
}
