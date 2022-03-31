import PropTypes from 'prop-types'
import styles from './Polygon.module.scss'

export default function Polygon({ size = 30, color = 'black' }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
      }}
    />
  )
}

Polygon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
