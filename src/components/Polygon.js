import PropTypes from 'prop-types'
import styles from './Polygon.module.scss'

export default function Polygon({ size = 35, color = 'black', duration = 3 }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-duration': duration + 's',
      }}
    />
  )
}

Polygon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
