import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './Hatch.scss'

const template = document.createElement('template')

export default class Hatch extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed', 'lineweight']
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
      size: 28,
      color: 'black',
      speed: 3.5,
      lineweight: 4,
    })

    template.innerHTML = `
      <div class="container"><div class="line"></div></div>
      <style>
        :host{
          --uib-size: ${this.size};
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-line-weight: ${this.lineweight};
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
        --uib-size: ${this.size};
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-line-weight: ${this.lineweight};
      }
      ${styles}
    `
  }
}
