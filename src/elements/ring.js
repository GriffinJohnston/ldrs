import Base from '../lib/LdrsBaseElement'
import styles from './ring.scss'

class Ring extends Base {
  #attributes = ['size', 'color', 'stroke', 'speed', 'bg-opacity']

  static get observedAttributes() {
    return ['size', 'color', 'stroke', 'speed', 'bg-opacity']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this.#attributes)
    this.reflect(this.#attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 40,
      color: 'black',
      stroke: 5,
      speed: 2,
      'bg-opacity': 0,
    })

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size / 2}" 
          cy="${this.size / 2}" 
          r="${this.size / 2 - this.stroke / 2}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size / 2}" 
          cy="${this.size / 2}" 
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
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`)

    circleEls.forEach((circleEl) => {
      circleEl.setAttribute('cx', this.size / 2)
      circleEl.setAttribute('cy', this.size / 2)
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
  register: (name = 'l-ring') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Ring {})
    }
  },
  element: Ring,
}
