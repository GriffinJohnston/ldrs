import PropTypes from 'prop-types'
import styles from './Orbit2.module.scss'

export default function Orbit2({ size = 25, color = 'black', duration = 1.5 }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-duration': duration + 's',
      }}
    />
  )
}

Orbit2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
