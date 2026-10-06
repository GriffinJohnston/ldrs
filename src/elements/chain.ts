import Base from '../lib/LdrsBaseElement.js'
import styles from './chain.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-chain': {
        size?: number | string
        color?: number | string
        speed?: number | string
        stroke?: number | string
        'bg-opacity'?: number | string
      }
    }
  }
}

const LINK_A = 'M13 18H23A7 7 0 0 1 23 32H13A7 7 0 0 1 13 18Z'
const LINK_B = 'M27 18H37A7 7 0 0 1 37 32H27A7 7 0 0 1 27 18Z'

class Chain extends Base {
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
      size: 50,
      color: 'black',
      stroke: 5,
      speed: 1.2,
      'bg-opacity': 0.15,
    })

    this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 50 50"
        height="${this.size}"
        width="${this.size}"
      >
        <g transform="rotate(-45 25 25)">
          <g class="link-a">
            <path
              class="track"
              d="${LINK_A}"
              pathlength="100"
              stroke-width="${this.stroke}"
              fill="none"
            />
            <path
              class="car"
              d="${LINK_A}"
              pathlength="100"
              stroke-width="${this.stroke}"
              fill="none"
            />
          </g>
          <g class="link-b">
            <path
              class="track"
              d="${LINK_B}"
              pathlength="100"
              stroke-width="${this.stroke}"
              fill="none"
            />
            <path
              class="car"
              d="${LINK_B}"
              pathlength="100"
              stroke-width="${this.stroke}"
              fill="none"
            />
          </g>
        </g>
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
    const pathEls = this.shadow.querySelectorAll('path')

    if (!styleEl) return

    if (svgEl) {
      svgEl.setAttribute('height', this.size)
      svgEl.setAttribute('width', this.size)
    }

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
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
  register: (name = 'l-chain') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Chain { })
    }
  },
  element: Chain,
}
