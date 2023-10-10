import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './LineWobble.scss'

const template = document.createElement('template')

export default class LineWobble extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke', 'bg-opacity']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'speed', 'stroke', 'bg-opacity'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 80,
      color: 'black',
      speed: 1.75,
      stroke: 5,
      'bg-opacity': 0.1,
    })

    template.innerHTML = `
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this['bg-opacity']};
        }
        ${styles}
      </style>
    `

    this.shadow.replaceChildren(template.content.cloneNode(true))
  }

  attributeChangedCallback() {
    const styleEl = this.shadow.querySelector('style')

    if (!styleEl) return

    styleEl.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
        --uib-bg-opacity: ${this['bg-opacity']};
      }
      ${styles}
    `
  }
}
