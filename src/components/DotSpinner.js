import PropTypes from 'prop-types'
import styles from './DotSpinner.module.scss'

export default function DotSpinner({ size = 40, color = 'black' }) {
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
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  )
}

DotSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
