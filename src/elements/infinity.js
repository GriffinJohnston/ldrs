import scaleD from '../lib/scaleD'
import Base from '../lib/LdrsBaseElement'
import styles from './infinity.scss'

class Infinity extends Base {
  #attributes = ['size', 'color', 'speed', 'stroke', 'bg-opacity']

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this.#attributes)
    this.reflect(this.#attributes)

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
      'bg-opacity': 0.1,
    })

    const scaledD = scaleD(this.size / 50, this.d)

    this.template.innerHTML = `
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size * (2.1 / 5)}"
        height="${this.size * (2.1 / 5)}"
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
    const pathEls = this.shadow.querySelectorAll('path')

    if (!styleEl) return

    svgEl.setAttribute('height', this.size * (2.1 / 5))
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size * (2.1 / 5)}`)

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
      pathEl.setAttribute('d', scaleD(this.size / 50, this.d))
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
  register: (name = 'l-infinity') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Infinity {})
    }
  },
  element: Infinity,
}
