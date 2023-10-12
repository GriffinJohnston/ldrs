import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import scaleD from '../lib/scaleD'
import styles from './cardio.scss'

const template = document.createElement('template')

class Cardio extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'speed', 'stroke', 'bg-opacity'])
    this.d = 'M0.5,17.2h8.2l3-4.7l5.9,12l7.8-24l5.9,16.7v0h8.2'
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 50,
      color: 'black',
      speed: 1.5,
      stroke: 4,
      'bg-opacity': 0.1,
    })

    const scaledD = scaleD(this.size / 40, this.d)

    template.innerHTML = `
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size * (25 / 40)}"
        height="${this.size * (25 / 40)}"
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

    this.shadow.replaceChildren(template.content.cloneNode(true))

    this.dispatchEvent(new Event('ready'))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')
    const svgEl = this.shadow.querySelector('svg')
    const pathEls = this.shadow.querySelectorAll('path')

    if (!styleEl) return

    const m = this.size / 40

    svgEl.setAttribute('height', this.size * (25 / 40))
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute('viewBox', `0 0 ${this.size} ${this.size * (25 / 40)}`)

    pathEls.forEach((pathEl) => {
      pathEl.setAttribute('stroke-width', this.stroke)
      pathEl.setAttribute('d', scaleD(this.size / 40, this.d))
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
