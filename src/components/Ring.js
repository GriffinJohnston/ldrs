import PropTypes from 'prop-types'
import styles from './Ring.module.scss'

export default function Ring({ size = 40, color = 'black', lineWeight = 5 }) {
  return (
    <svg
      className={styles.container}
      viewBox="25 25 50 50"
      strokeWidth={lineWeight}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
      }}
    >
      <circle cx="50" cy="50" r="20" />
    </svg>
  )
}

Ring.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
}
