/**
 * @param {number} multiplier
 * @param {string} d
 * @returns {string}
 */
export default function scaleD(multiplier, d) {
  const commas = d.replace(/([-A-y])/g, ',$1')
  const split = commas.split(',')
  const modified = split
    .filter((val) => val !== '')
    .map((val) => {
      const numberString = val.match(/(\d+\.?\d*)/g)?.[0]
      const modified = parseFloat(numberString) * multiplier
      return val.replace(numberString, modified.toString())
    })

  return modified.join(' ')
}
