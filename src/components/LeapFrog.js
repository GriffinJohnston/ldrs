import assert from '../lib/assert'
import styles from './LeapFrog.module.scss'

/**
 * @typedef Props
 * @prop {number} size
 * @prop {string} color
 * @prop {number} speed
 */

/**
 * @param {Props} props
 */
export default function LeapFrog({ size = 40, color = 'black', speed = 2.5 }) {
  assert('LeapFrog', 'size', size, 'number')
  assert('LeapFrog', 'color', color, 'string')
  assert('LeapFrog', 'speed', speed, 'number')

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
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  )
}
