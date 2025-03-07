import Base from '../lib/LdrsBaseElement.js'
import styles from './jellyTriangle.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-jelly-triangle': {
        size?: string | number
        color?: string | number
        speed?: string | number
      }
    }
  }
}

class JellyTriangle extends Base {
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
      size: 30,
      color: 'black',
      speed: 1.75,
    })

    this.template.innerHTML = `
      <div
        class="container"
      >
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${this.size}"
          height="${this.size}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot"/>
          <circle class="dot"/>
          <circle class="dot"/>
          <circle class="traveler"/>
          <defs>
            <filter id="uib-jelly-triangle-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size) / 9}
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
  register: (name = 'l-jelly-triangle') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends JellyTriangle {})
    }
  },
  element: JellyTriangle,
}
