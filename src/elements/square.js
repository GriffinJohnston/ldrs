import Base from '../lib/LdrsBaseElement'
import styles from './square.scss'

class Square extends Base {
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
      size: 35,
      color: 'black',
      stroke: 5,
      speed: 1.2,
      'bg-opacity': 0.1,
    })

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <rect 
          class="track"
          x="${this.stroke / 2}" 
          y="${this.stroke / 2}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${this.size - this.stroke / 2}" 
          height="${this.size - this.stroke / 2}"
        />
        <rect 
          class="car"
          x="${this.stroke / 2}" 
          y="${this.stroke / 2}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${this.size - this.stroke / 2}" 
          height="${this.size - this.stroke / 2}"
          pathlength="100"
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
    const squareEls = this.shadow.querySelectorAll('rect')

    if (!styleEl) return

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`)

    squareEls.forEach((squareEl) => {
      squareEl.setAttribute('stroke-width', this.stroke)
      squareEl.setAttribute('width', this.size - this.stroke / 2)
      squareEl.setAttribute('height', this.size - this.stroke / 2)
      squareEl.setAttribute('x', this.stroke / 2)
      squareEl.setAttribute('y', this.stroke / 2)
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
  register: (name = 'l-square') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Square {})
    }
  },
  element: Square,
}
