import PropTypes from 'prop-types'
import styles from './NewtonsCradle.module.scss'

export default function NewtonsCradle({
  size = 40,
  color = 'black',
  speed = 1.4,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  )
}

NewtonsCradle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
