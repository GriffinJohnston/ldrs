import { HTMLAttributes } from 'react'
import Base from '../lib/LdrsBaseElement.js'
import styles from './pinwheel.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-pinwheel': LdrAttributes
    }
    interface LdrAttributes extends HTMLAttributes<HTMLElement> {
      size: string
      color: string
      speed: string
      stroke: string
    }
  }
}

class Pinwheel extends Base {
  _attributes: string[] = ['size', 'color', 'speed', 'stroke']
  size: string
  color: string
  speed: string
  stroke: string

  static get observedAttributes() {
    return ['size', 'color', 'speed', 'stroke']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 35,
      color: 'black',
      speed: 0.9,
      stroke: 3.5,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${styles}
      </style>
    `

    this.shadow.replaceChildren(this.template.content.cloneNode(true))

    this.dispatchEvent(new Event('ready'))
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
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-pinwheel') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Pinwheel {})
    }
  },
  element: Pinwheel,
}
