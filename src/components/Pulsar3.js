import PropTypes from 'prop-types'
import styles from './Pulsar3.module.scss'

export default function Pulsar3({ size = 45, color = 'black' }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
      }}
    >
      <div className={styles.dot} />
    </div>
  )
}

Pulsar3.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
