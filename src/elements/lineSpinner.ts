import Base from '../lib/LdrsBaseElement.js'
import styles from './lineSpinner.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-line-spinner': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
      }
    }
  }
}

class LineSpinner extends Base {
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
      speed: 1,
      stroke: 3,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
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
  register: (name = 'l-line-spinner') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends LineSpinner {})
    }
  },
  element: LineSpinner,
}
