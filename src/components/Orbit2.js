import PropTypes from 'prop-types'
import styles from './Orbit2.module.scss'

export default function Orbit2({ size = 25, color = 'black' }) {
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

Orbit2.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
