import assert from '../lib/assert'
import styles from './DotPulse.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function DotPulse({ size = 40, color = 'black', speed = 1.3 }) {
  assert('DotPulse', 'size', size, 'number')
  assert('DotPulse', 'color', color, 'string')
  assert('DotPulse', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.dot} />
    </div>
  )
}
