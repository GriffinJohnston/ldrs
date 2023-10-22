import Base from '../lib/LdrsBaseElement.js'
import styles from './zoomies.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-zoomies': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

class Zoomies extends Base {
  _attributes = ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  size: string
  color: string
  speed: string
  stroke: string
  'bg-opacity': string

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 80,
      color: 'black',
      speed: 1.4,
      stroke: 5,
      'bg-opacity': 0.1,
    })

    this.template.innerHTML = `
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this['bg-opacity']};
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
        --uib-bg-opacity: ${this['bg-opacity']};
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-zoomies') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Zoomies {})
    }
  },
  element: Zoomies,
}
