import PropTypes from 'prop-types'
import styles from './Wobble.module.scss'

export default function Wobble({ size = 45, color = 'black', duration = 0.9 }) {
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

Wobble.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
