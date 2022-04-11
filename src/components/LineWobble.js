import PropTypes from 'prop-types'
import styles from './LineWobble.module.scss'

export default function LineWobble({
  size = 80,
  color = 'black',
  lineWeight = 5,
  speed = 1.75,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-speed': speed + 's',
      }}
    />
  )
}

LineWobble.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  speed: PropTypes.number,
}
