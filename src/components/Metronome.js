import assert from '../lib/assert'
import styles from './Metronome.module.scss'

export default function Metronome({ size = 40, color = 'black', speed = 1.6 }) {
  assert('Metronome', 'size', size, 'number')
  assert('Metronome', 'color', color, 'string')
  assert('Metronome', 'speed', speed, 'number')

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
