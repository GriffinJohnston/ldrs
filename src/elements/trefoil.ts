import scaleD from '../lib/scaleD.js'
import Base from '../lib/LdrsBaseElement.js'
import styles from './trefoil.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-trefoil': {
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

class Trefoil extends Base {
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
  d: string

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'stroke-length', 'bg-opacity']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)

    this.d =
      'M37.2,23.4c0,9.1-4.9,17-12.3,21.2c-3.6,2.1-7.8,3.3-12.3,3.3c-4.5,0-8.6-1.2-12.2-3.3c0-9.1,4.9-16.9,12.3-21.2c3.6-2.1,7.8-3.3,12.2-3.3S33.6,21.3,37.2,23.4c7.3,4.2,12.2,12.1,12.3,21.2c-3.6,2.1-7.8,3.3-12.2,3.3c-4.5,0-8.6-1.2-12.3-3.3c-7.3-4.2-12.2-12.1-12.2-21.2c0-9.1,4.9-17,12.2-21.2C32.3,6.4,37.2,14.3,37.2,23.4z'
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 40,
      color: 'black',
      stroke: 4,
      'stroke-length': 0.15,
      speed: 1.4,
      'bg-opacity': 0.1,
    })

    const scaledD = scaleD(parseInt(this.size) / 50, this.d)

    this.template.innerHTML = `
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${scaledD}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${scaledD}"
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
    const pathEls = this.shadow.querySelectorAll('path')

    if (!styleEl) return

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`)

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
      pathEl.setAttribute('d', scaleD(parseInt(this.size) / 50, this.d))
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
  register: (name = 'l-trefoil') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Trefoil {})
    }
  },
  element: Trefoil,
}
