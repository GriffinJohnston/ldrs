import PropTypes from 'prop-types'
import styles from './DotWave.module.scss'

export default function DotWave({ size = 45, color = 'black' }) {
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

DotWave.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
