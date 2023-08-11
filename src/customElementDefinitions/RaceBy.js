import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './RaceBy.scss'

const template = document.createElement('template')

export default class RaceBy extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'speed', 'lineweight'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 80,
      color: 'black',
      speed: 1.4,
      lineweight: 5,
    })

    template.innerHTML = `
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-line-weight: ${this.lineweight}px;
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
        --uib-line-weight: ${this.lineweight}px;
      }
      ${styles}
    `
  }
}
