import scaleD from '../lib/scaleD.js'
import Base from '../lib/LdrsBaseElement.js'
import styles from './infinity.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-infinity': {
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

class Infinity extends Base {
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
      'M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z'
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 55,
      color: 'black',
      speed: 1.3,
      stroke: 4,
      'stroke-length': 0.15,
      'bg-opacity': 0.1,
    })

    const sizeInt = parseInt(this.size)
    const scaledD = scaleD(sizeInt / 50, this.d)

    this.template.innerHTML = `
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${sizeInt * (2.1 / 5)}"
        height="${sizeInt * (2.1 / 5)}"
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
    const sizeInt = parseInt(this.size)

    if (!styleEl) return

    svgEl.setAttribute('height', String(sizeInt * (2.1 / 5)))
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${sizeInt * (2.1 / 5)}`)

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
      pathEl.setAttribute('d', scaleD(sizeInt / 50, this.d))
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
  register: (name = 'l-infinity') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Infinity {})
    }
  },
  element: Infinity,
}
