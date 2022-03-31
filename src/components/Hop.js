import PropTypes from 'prop-types'
import styles from './Hop.module.scss'

export default function Hop({ size = 80, color = 'black', lineWeight = 5 }) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
      }}
    />
  )
}

Hop.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
}
