/**
 * @param {object} el
 * @param {string[]} props
 * @returns {void}
 */
export default function reflect(el, props) {
  props.forEach((prop) => {
    Object.defineProperty(el, prop, {
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
