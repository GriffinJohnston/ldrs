/**
 * @param {object} obj
 * @param {object} props
 * @returns {void}
 */
export default function applyDefaultProps(obj, props) {
  obj.defaultProps = props
  Object.entries(props).forEach(([key, defaultValue]) => {
    obj[key] = obj[key] || defaultValue.toString()
  })
}
