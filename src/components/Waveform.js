import PropTypes from 'prop-types'
import styles from './Waveform.module.scss'

export default function Waveform({
  size = 40,
  color = 'black',
  lineWeight = 3.5,
  speed = 1,
}) {
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
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  )
}

Waveform.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  speed: PropTypes.number,
}
