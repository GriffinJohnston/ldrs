import PropTypes from 'prop-types'
import styles from './ThreeBody.module.scss'

export default function ThreeBody({ size = 35, color = 'black' }) {
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
    </div>
  )
}

ThreeBody.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
