import PropTypes from 'prop-types'
import styles from './Metronome.module.scss'

export default function Metronome({ size = 40, color = 'black' }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
      }}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  )
}

Metronome.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
