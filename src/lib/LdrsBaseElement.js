export default class LdrsBaseElement extends HTMLElement {
  #propsToUpgrade = {}

  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.template = document.createElement('template')
  }

  /**
   * @param {string[]} props
   * @returns {void}
   */
  storePropsToUpgrade(props) {
    props.forEach((prop) => {
      if (this.hasOwnProperty(prop)) {
        this.#propsToUpgrade[prop] = this[prop]
        delete this[prop]
      }
    })
  }

  /**
   * @returns {void}
   */
  upgradeStoredProps() {
    Object.entries(this.#propsToUpgrade).forEach(([key, val]) => {
      this.setAttribute(key, val)
    })
  }

  /**
   * @param {string[]} props
   * @returns {void}
   */
  reflect(props) {
    props.forEach((prop) => {
      Object.defineProperty(this, prop, {
        set(val) {
          if ('string,number'.includes(typeof val)) {
            this.setAttribute(prop, val.toString())
          } else {
            this.removeAttribute(prop)
          }
        },
        get() {
          return this.getAttribute(prop)
        },
      })
    })
  }

  /**
   * @param {object} props
   * @returns {void}
   */
  applyDefaultProps(props) {
    this.defaultProps = props

    Object.entries(props).forEach(([key, defaultValue]) => {
      this[key] = this[key] || defaultValue.toString()
    })
  }
}
