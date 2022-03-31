import PropTypes from 'prop-types'
import styles from './Pulsar.module.scss'

export default function Pulsar({ size = 40, color = 'black' }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
      }}
    />
  )
}

Pulsar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
