import PropTypes from 'prop-types'
import styles from './NewtonsCradle.module.scss'

export default function NewtonsCradle({ size = 40, color = 'black' }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
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
}
