import PropTypes from 'prop-types'
import styles from './Momentum.module.scss'

export default function Momentum({
  size = 40,
  color = 'black',
  duration = 1.1,
}) {
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

Momentum.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}
