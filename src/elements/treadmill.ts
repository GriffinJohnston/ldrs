import { HTMLAttributes } from 'react'
import Base from '../lib/LdrsBaseElement.js'
import styles from './treadmill.scss'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-treadmill': LdrAttributes
    }
    interface LdrAttributes extends HTMLAttributes<HTMLElement> {
      size: string
      color: string
      speed: string
    }
  }
}

class Treadmill extends Base {
  _attributes: string[] = ['size', 'color', 'speed']
  size: string
  color: string
  speed: string

  static get observedAttributes() {
    return ['size', 'color', 'speed']
  }

  constructor() {
    super()

    this.storePropsToUpgrade(this._attributes)
    this.reflect(this._attributes)
  }

  connectedCallback() {
    this.upgradeStoredProps()
    this.applyDefaultProps({
      size: 70,
      color: 'black',
      speed: 1.25,
    })

    this.template.innerHTML = `
    <div class="container"><div class="cube"></div></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
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
      }
      ${styles}
    `
  }
}

export default {
  register: (name = 'l-treadmill') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Treadmill {})
    }
  },
  element: Treadmill,
}
