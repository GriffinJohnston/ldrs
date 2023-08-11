/**
 * @param {object} obj
 * @param {object} props
 * @returns {void}
 */
export default function reflect(obj, props) {
  props.forEach((prop) => {
    Object.defineProperty(obj, prop, {
      set(val) {
        if (val) {
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
