import assert from '../lib/assert'
import styles from './MrMiyagi.module.scss'

export default function MrMiyagi({
  size = 35,
  color = 'black',
  lineWeight = 3.5,
  speed = 1,
}) {
  assert('MrMiyagi', 'size', size, 'number')
  assert('MrMiyagi', 'color', color, 'string')
  assert('MrMiyagi', 'speed', speed, 'number')
  assert('MrMiyagi', 'lineWeight', lineWeight, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  )
}
