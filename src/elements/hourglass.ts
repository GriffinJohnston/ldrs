import Base from '../lib/LdrsBaseElement.js'
import styles from './hourglass.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-hourglass': {
        size?: number | string
        color?: number | string
        speed?: number | string
        'bg-opacity'?: number | string
      }
    }
  }
}

class Hourglass extends Base {
  _attributes: string[] = ['size', 'color', 'speed', 'bg-opacity']
  size: string
  color: string
  speed: string
  'bg-opacity': string

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'bg-opacity']
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
      speed: 1.75,
      'bg-opacity': 0.1,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
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
        --uib-bg-opacity: ${this['bg-opacity']};
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-hourglass') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Hourglass {})
    }
  },
  element: Hourglass,
}
