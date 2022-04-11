import PropTypes from 'prop-types'
import styles from './Handsprings.module.scss'

export default function Handsprings({
  size = 37,
  color = 'black',
  lineWeight = 5,
  speed = 2,
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

Handsprings.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  speed: PropTypes.number,
}
