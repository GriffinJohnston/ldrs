import PropTypes from 'prop-types'
import styles from './Pulsar.module.scss'

export default function Pulsar({
  size = 40,
  color = 'black',
  duration = 1.75,
}) {
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

Pulsar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
