import PropTypes from 'prop-types'
import styles from './Pulsar2.module.scss'

export default function Pulsar2({ size = 45, color = 'black' }) {
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

Pulsar2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
