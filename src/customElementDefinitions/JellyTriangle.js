import reflect from '../lib/reflect'
import applyDefaultProps from '../lib/applyDefaultProps'
import styles from './JellyTriangle.scss'

const template = document.createElement('template')

export default class JellyTriangle extends HTMLElement {
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
      size: 40,
      color: 'black',
      speed: 1.75,
    })

    template.innerHTML = `
      <div
        class="container"
      >
      <div class="dot"></div>
      <div class="traveler"></div>
      </div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${this.size / 6}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
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

    if (!styleEl) return

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

if (
  typeof window !== 'undefined' &&
  !customElements.get('uib-jelly-triangle')
) {
  customElements.define('uib-jelly-triangle', JellyTriangle)
}