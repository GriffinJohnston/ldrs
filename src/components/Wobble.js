import PropTypes from 'prop-types'
import styles from './Wobble.module.scss'

export default function Wobble({ size = 40, color = 'black' }) {
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

Wobble.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
