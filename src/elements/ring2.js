import Base from '../lib/LdrsBaseElement.js'
import styles from './ring2.scss'

class Ring2 extends Base {
  _attributes = ['size', 'color', 'stroke', 'speed', 'bg-opacity']

  static get observedAttributes() {
    return ['size', 'color', 'stroke', 'speed', 'bg-opacity']
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
      stroke: 5,
      speed: 0.8,
      'bg-opacity': 0.1,
    })

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="${this.size / 2} ${this.size / 2} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${this.size / 2 - this.stroke / 2}" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${this.size / 2 - this.stroke / 2}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
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

    this.dispatchEvent(new Event('ready'))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')
    const svgEl = this.shadow.querySelector('svg')
    const circleEls = this.shadow.querySelectorAll('circle')

    if (!styleEl) return

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute(
      'viewBox',
      `${this.size / 2} ${this.size / 2} ${this.size} ${this.size}`,
    )

    circleEls.forEach((circleEl) => {
      circleEl.setAttribute('cx', this.size)
      circleEl.setAttribute('cy', this.size)
      circleEl.setAttribute('r', this.size / 2 - this.stroke / 2)
      circleEl.setAttribute('stroke-width', this.stroke)
    })

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
  register: (name = 'l-ring-2') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Ring2 {})
    }
  },
  element: Ring2,
}
