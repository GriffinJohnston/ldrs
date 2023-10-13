import Base from '../lib/LdrsBaseElement'
import styles from './waveform.scss'

class Waveform extends Base {
  _attributes = ['size', 'color', 'speed', 'stroke']

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
      speed: 1,
      stroke: 3.5,
    })

    this.template.innerHTML = `
      <div class="container">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
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
  register: (name = 'l-waveform') => {
    if (!customElements.get(name)) {
      customElements.define(name, class extends Waveform {})
    }
  },
  element: Waveform,
}
