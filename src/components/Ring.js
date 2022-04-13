import PropTypes from 'prop-types'
import styles from './Ring.module.scss'

export default function Ring({
  size = 40,
  color = 'black',
  lineWeight = 5,
  speed = 2,
}) {
  return (
    <svg
      height={size}
      width={size}
      className={styles.container}
      viewBox="25 25 50 50"
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <circle cx="50" cy="50" r="20" strokeWidth={lineWeight} />
    </svg>
  )
}

Ring.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  speed: PropTypes.number,
}
