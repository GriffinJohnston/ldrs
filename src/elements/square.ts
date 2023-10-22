import Base from '../lib/LdrsBaseElement.js'
import styles from './square.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-square': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

class Square extends Base {
  _attributes = ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  size: string
  color: string
  speed: string
  stroke: string
  'bg-opacity': string

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

    const sizeInt = parseInt(this.size)
    const strokeInt = parseInt(this.stroke)

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <rect 
          class="track"
          x="${strokeInt / 2}" 
          y="${strokeInt / 2}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${sizeInt - strokeInt / 2}" 
          height="${sizeInt - strokeInt / 2}"
        />
        <rect 
          class="car"
          x="${strokeInt / 2}" 
          y="${strokeInt / 2}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${sizeInt - strokeInt / 2}" 
          height="${sizeInt - strokeInt / 2}"
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
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')
    const svgEl = this.shadow.querySelector('svg')
    const squareEls = this.shadow.querySelectorAll('rect')

    if (!styleEl) return

    const sizeInt = parseInt(this.size)
    const strokeInt = parseInt(this.stroke)

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`)

    squareEls.forEach((squareEl) => {
      squareEl.setAttribute('stroke-width', this.stroke)
      squareEl.setAttribute('width', String(sizeInt - strokeInt / 2))
      squareEl.setAttribute('height', String(sizeInt - strokeInt / 2))
      squareEl.setAttribute('x', String(strokeInt / 2))
      squareEl.setAttribute('y', String(strokeInt / 2))
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
