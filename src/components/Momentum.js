import assert from '../lib/assert'
import styles from './Momentum.module.scss'

export default function Momentum({ size = 40, color = 'black', speed = 1.1 }) {
  assert('Momentum', 'size', size, 'number')
  assert('Momentum', 'color', color, 'string')
  assert('Momentum', 'speed', speed, 'number')

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
