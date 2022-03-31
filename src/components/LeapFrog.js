import PropTypes from 'prop-types'
import styles from './LeapFrog.module.scss'

export default function LeapFrog({ size = 40, color = 'black' }) {
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
    </div>
  )
}

LeapFrog.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
