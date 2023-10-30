import scaleD from '../lib/scaleD.js'
import Base from '../lib/LdrsBaseElement.js'
import styles from './reuleaux.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-reuleaux': {
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

class Reuleaux extends Base {
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
      'M49.5,42.9c0-18.1-9.9-34-24.5-42.4C10.4,9,0.5,24.8,0.5,42.9c7.2,4.2,15.6,6.6,24.5,6.6S42.3,47.1,49.5,42.9z'
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 37,
      color: 'black',
      stroke: 5,
      speed: 0.9,
      'stroke-length': 0.15,
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
  register: (name = 'l-reuleaux') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Reuleaux {})
    }
  },
  element: Reuleaux,
}
