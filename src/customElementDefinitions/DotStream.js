import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './DotStream.scss'

const template = document.createElement('template')

export default class DotStream extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'speed']
  }

  constructor() {
    super()
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: 'open' })
    }
    reflect(this, ['size', 'color', 'speed'])
  }

  connectedCallback() {
    applyDefaultProps(this, {
      size: 60,
      color: 'black',
      speed: 2.5,
    })

    template.innerHTML = `
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --size: ${this.size}px;
          --color: ${this.color};
          --speed: ${this.speed}s;
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
        --size: ${this.size}px;
        --color: ${this.color};
        --speed: ${this.speed}s;
      }
      ${styles}
    `
  }
}
