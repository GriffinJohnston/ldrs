import PropTypes from 'prop-types'
import styles from './Handsprings.module.scss'

export default function Handsprings({
  size = 37,
  color = 'black',
  lineWeight = 5,
  duration = 2,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-duration': duration + 's',
      }}
    />
  )
}

Handsprings.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  duration: PropTypes.number,
}
