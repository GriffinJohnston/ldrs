import PropTypes from 'prop-types'
import styles from './Orbit2.module.scss'

export default function Orbit2({ size = 25, color = 'black', speed = 1.5 }) {
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

Orbit2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
