import PropTypes from 'prop-types'
import styles from './SuperBalls.module.scss'

export default function SuperBalls({
  size = 45,
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
      <div className={styles.electron} />
      <div className={styles.electron} />
    </div>
  )
}

SuperBalls.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
