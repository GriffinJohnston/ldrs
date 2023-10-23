import scaleD from '../lib/scaleD.js'
import Base from '../lib/LdrsBaseElement.js'
import styles from './cardio.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-cardio': {
        size?: string | number
        color?: string | number
        speed?: string | number
        stroke?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

class Cardio extends Base {
  _attributes = ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  size: string
  color: string
  speed: string
  stroke: string
  'bg-opacity': string
  d: string

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)

    this.d = 'M0.5,17.2h8.2l3-4.7l5.9,12l7.8-24l5.9,16.7v0h8.2'
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 50,
      color: 'black',
      speed: 1.5,
      stroke: 4,
      'bg-opacity': 0.1,
    })

    const sizeInt = parseInt(this.size)
    const scaledD = scaleD(sizeInt / 40, this.d)

    this.template.innerHTML = `
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${sizeInt * (25 / 40)}"
        height="${sizeInt * (25 / 40)}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path 
          class="track"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${scaledD}"
        />
        <path 
          class="car"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${scaledD}"
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
    const sizeInt = parseInt(this.size)
    const styleEl = this.shadow.querySelector('style')
    const svgEl = this.shadow.querySelector('svg')
    const pathEls = this.shadow.querySelectorAll('path')

    if (!styleEl) return

    svgEl.setAttribute('height', String(sizeInt * (25 / 40)))
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${sizeInt * (25 / 40)}`)

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
      pathEl.setAttribute('d', scaleD(sizeInt / 40, this.d))
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
  register: (name = 'l-cardio') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Cardio {})
    }
  },
  element: Cardio,
}
