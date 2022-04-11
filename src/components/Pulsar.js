import PropTypes from 'prop-types'
import styles from './Pulsar.module.scss'

export default function Pulsar({ size = 40, color = 'black', speed = 1.75 }) {
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

Pulsar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
