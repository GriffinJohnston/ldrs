import PropTypes from 'prop-types'
import styles from './Pinwheel.module.scss'

export default function Pinwheel({
  size = 35,
  color = 'black',
  lineWeight = 3.5,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
      }}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  )
}

Pinwheel.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
}
