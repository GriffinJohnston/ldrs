import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './Ring.scss'

const template = document.createElement('template')

export default class Ring extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'lineweight', 'speed']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'lineweight', 'speed'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 40,
      color: 'black',
      lineweight: 5,
      speed: 2,
    })

    template.innerHTML = `
      <svg
        class="container"
        viewBox="25 25 50 50"
        height="${this.size}"
        width="${this.size}"
      >
        <circle cx="50" cy="50" r="20" stroke-width="${this.lineweight}" fill="none" />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
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
    circleEl.setAttribute('stroke-width', this.lineweight)

    styleEl.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${styles}
    `
  }
}
