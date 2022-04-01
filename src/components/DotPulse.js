import PropTypes from 'prop-types'
import styles from './DotPulse.module.scss'

export default function DotPulse({
  size = 40,
  color = 'black',
  duration = 1.3,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-duration': duration + 's',
      }}
    >
      <div className={styles.dot} />
    </div>
  )
}

DotPulse.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
