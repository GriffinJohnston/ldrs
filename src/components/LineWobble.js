import assert from '../lib/assert'
import styles from './LineWobble.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 * @prop {number} [lineWeight]
 */

/**
 * @param {Props} props
 */
export default function LineWobble({
  size = 80,
  color = 'black',
  lineWeight = 5,
  speed = 1.75,
}) {
  assert('LineWobble', 'size', size, 'number')
  assert('LineWobble', 'color', color, 'string')
  assert('LineWobble', 'speed', speed, 'number')
  assert('LineWobble', 'lineWeight', lineWeight, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-speed': speed + 's',
      }}
    />
  )
}
