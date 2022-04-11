import PropTypes from 'prop-types'
import styles from './RaceBy.module.scss'

export default function RaceBy({
  size = 80,
  color = 'black',
  lineWeight = 5,
  speed = 1.4,
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

RaceBy.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  speed: PropTypes.number,
}
