import Base from '../lib/LdrsBaseElement.js'
import styles from './ring2.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-ring-2': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
        'stroke-length'?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

class Ring2 extends Base {
  _attributes = [
    'size',
    'color',
    'speed',
    'stroke',
    'stroke-length',
    'bg-opacity',
  ]
  size: string
  color: string
  speed: string
  stroke: string
  'stroke-length': string
  'bg-opacity': string

  static get observedAttributes() {
    return ['size', 'color', 'stroke', 'stroke-length', 'speed', 'bg-opacity']
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
      'stroke-length': 0.25,
      speed: 0.8,
      'bg-opacity': 0.1,
    })

    const sizeInt = parseInt(this.size)
    const strokeInt = parseInt(this.stroke)
    const centerPoint = sizeInt / 2
    const radius = Math.max(0, sizeInt / 2 - strokeInt / 2)

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="${centerPoint} ${centerPoint} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${radius}" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${radius}" 
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
          --uib-dash: ${parseFloat(this['stroke-length']) * 100};
          --uib-gap: ${100 - parseFloat(this['stroke-length']) * 100};
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
    const circleEls = this.shadow.querySelectorAll('circle')

    if (!styleEl) return

    const sizeInt = parseInt(this.size)
    const strokeInt = parseInt(this.stroke)
    const centerPoint = sizeInt / 2
    const radius = String(Math.max(0, sizeInt / 2 - strokeInt / 2))

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute(
      'viewBox',
      `${centerPoint} ${centerPoint} ${this.size} ${this.size}`,
    )

    circleEls.forEach((circleEl) => {
      circleEl.setAttribute('cx', this.size)
      circleEl.setAttribute('cy', this.size)
      circleEl.setAttribute('r', radius)
      circleEl.setAttribute('stroke-width', this.stroke)
    })

    styleEl.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${parseFloat(this['stroke-length']) * 100};
        --uib-gap: ${100 - parseFloat(this['stroke-length']) * 100};
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
