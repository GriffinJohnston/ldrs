import assert from '../lib/assert'
import styles from './Ripples.module.scss'

export default function Ripples({ size = 45, color = 'black', speed = 2 }) {
  assert('Ripples', 'size', size, 'number')
  assert('Ripples', 'color', color, 'string')
  assert('Ripples', 'speed', speed, 'number')

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
