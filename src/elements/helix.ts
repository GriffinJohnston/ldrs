import Base from '../lib/LdrsBaseElement.js'
import styles from './helix.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-helix': {
        size?: string | number
        color?: string | number
        speed?: string | number
      }
    }
  }
}

class Helix extends Base {
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
      speed: 2.5,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
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
    const containerEl = this.shadow.querySelector('.container')
    const styleEl = this.shadow.querySelector('style')

    if (!containerEl) return

    containerEl.className = `container`
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
  register: (name = 'l-helix') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Helix {})
    }
  },
  element: Helix,
}
