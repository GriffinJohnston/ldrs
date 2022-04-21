import assert from '../lib/assert'
import styles from './DotWave.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function DotWave({ size = 47, color = 'black', speed = 1 }) {
  assert('DotWave', 'size', size, 'number')
  assert('DotWave', 'color', color, 'string')
  assert('DotWave', 'speed', speed, 'number')

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
      <div className={styles.dot} />
    </div>
  )
}
