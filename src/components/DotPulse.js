import PropTypes from 'prop-types'
import styles from './DotPulse.module.scss'

export default function DotPulse({ size = 40, color = 'black', speed = 1.3 }) {
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

DotPulse.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
