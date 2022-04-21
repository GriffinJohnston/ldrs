/**
 * @param {string} componentName
 * @param {string} propName
 * @param {any} value
 * @param {string} type
 * @returns {void}
 */
export default function assert(componentName, propName, value, type) {
  const isValid = typeof value === type

  if (!isValid) {
    throw new TypeError(
      `Invalid prop '${propName}' of type '${typeof value}' supplied to '${componentName}', expected '${type}'.`
    )
  }
}
