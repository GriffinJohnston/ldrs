import PropTypes from 'prop-types'
import styles from './Wobble.module.scss'

export default function Wobble({ size = 45, color = 'black', speed = 0.9 }) {
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

Wobble.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
