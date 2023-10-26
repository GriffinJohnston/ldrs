import Base from '../lib/LdrsBaseElement.js'
import styles from './ring.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-ring': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

class Ring extends Base {
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
      size: 40,
      color: 'black',
      stroke: 5,
      speed: 2,
      'bg-opacity': 0,
    })

    const sizeInt = parseInt(this.size)
    const strokeInt = parseInt(this.stroke)
    const centerPoint = sizeInt / 2
    const radius = Math.max(0, sizeInt / 2 - strokeInt / 2)

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${centerPoint}" 
          cy="${centerPoint}" 
          r="${radius}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${centerPoint}" 
          cy="${centerPoint}" 
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
    const centerPoint = String(sizeInt / 2)
    const radius = String(Math.max(0, sizeInt / 2 - strokeInt / 2))

    svgEl.setAttribute('height', this.stroke)
    svgEl.setAttribute('width', this.stroke)
    svgEl.setAttribute('viewBox', `0 0 ${sizeInt} ${sizeInt}`)

    circleEls.forEach((circleEl) => {
      circleEl.setAttribute('cx', centerPoint)
      circleEl.setAttribute('cy', centerPoint)
      circleEl.setAttribute('r', radius)
      circleEl.setAttribute('stroke-width', this.stroke)
    })

    styleEl.innerHTML = `
      :host{
        --uib-size: ${sizeInt}px;
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
