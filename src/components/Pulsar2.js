import PropTypes from 'prop-types'
import styles from './Pulsar2.module.scss'

export default function Pulsar2({ size = 45, color = 'black', duration = 2 }) {
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

Pulsar2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
