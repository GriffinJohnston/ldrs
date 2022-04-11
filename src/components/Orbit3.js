import PropTypes from 'prop-types'
import styles from './Orbit3.module.scss'

export default function Orbit3({ size = 45, color = 'black', speed = 1.4 }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.electron} />
      <div className={styles.electron} />
    </div>
  )
}

Orbit3.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
