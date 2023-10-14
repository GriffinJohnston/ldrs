export default function scaleD(multiplier: number, d: string): string {
  return d
    .replace(/([-A-y])/g, ',$1')
    .split(',')
    .filter((val) => val !== '')
    .map((val) => {
      const numberString = val.match(/(\d+\.?\d*)/g)?.[0]
      const modified = parseFloat(numberString) * multiplier
      return val.replace(numberString, modified.toString())
    })
    .join(' ')
}
