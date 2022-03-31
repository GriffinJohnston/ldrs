import PropTypes from 'prop-types'
import styles from './Orbit.module.scss'

export default function Orbit({ size = 25, color = 'black' }) {
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

Orbit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
