import PropTypes from 'prop-types'
import styles from './Pinwheel2.module.scss'

export default function Pinwheel2({
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

Pinwheel2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
}
