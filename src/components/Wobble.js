import assert from '../lib/assert'
import styles from './Wobble.module.scss'

export default function Wobble({ size = 45, color = 'black', speed = 0.9 }) {
  assert('Wobble', 'size', size, 'number')
  assert('Wobble', 'color', color, 'string')
  assert('Wobble', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    />
  )
}
