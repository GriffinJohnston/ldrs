import assert from '../lib/assert'
import styles from './RaceBy.module.scss'

export default function RaceBy({
  size = 80,
  color = 'black',
  lineWeight = 5,
  speed = 1.4,
}) {
  assert('RaceBy', 'size', size, 'number')
  assert('RaceBy', 'color', color, 'string')
  assert('RaceBy', 'speed', speed, 'number')
  assert('RaceBy', 'lineWeight', lineWeight, 'number')

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
