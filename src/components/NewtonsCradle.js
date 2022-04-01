import PropTypes from 'prop-types'
import styles from './NewtonsCradle.module.scss'

export default function NewtonsCradle({
  size = 40,
  color = 'black',
  duration = 1.4,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-duration': duration + 's',
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
  duration: PropTypes.number,
}
