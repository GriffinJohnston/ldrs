import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './Ring.scss'

const template = document.createElement('template')

export default class Ring extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'stroke', 'speed', 'bg-opacity']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'stroke', 'speed', 'bg-opacity'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 40,
      color: 'black',
      stroke: 5,
      speed: 2,
      'bg-opacity': 0,
    })

    template.innerHTML = `
      <svg
        class="container"
        viewBox="${this.size / 2} ${this.size / 2} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${this.size / 2 - this.stroke / 2}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${this.size / 2 - this.stroke / 2}" 
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

    this.shadow.replaceChildren(template.content.cloneNode(true))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')
    const svgEl = this.shadow.querySelector('svg')
    const circleEl = this.shadow.querySelector('circle')

    if (!styleEl) return

    svgEl.setAttribute('height', this.size)
    svgEl.setAttribute('width', this.size)
    svgEl.setAttribute(
      'viewBox',
      `${this.size / 2} ${this.size / 2} ${this.size} ${this.size}`,
    )
    circleEl.setAttribute('cx', this.size)
    circleEl.setAttribute('cy', this.size)
    circleEl.setAttribute('r', this.size / 2 - this.stroke / 2)
    circleEl.setAttribute('stroke-width', this.stroke)

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
