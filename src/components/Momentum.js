import PropTypes from 'prop-types'
import styles from './Momentum.module.scss'

export default function Momentum({ size = 40, color = 'black', speed = 1.1 }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    />
  )
}

Momentum.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
}
