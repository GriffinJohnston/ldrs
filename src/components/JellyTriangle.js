import PropTypes from 'prop-types'
import styles from './JellyTriangle.module.scss'

export default function JellyTriangle({
  size = 60,
  color = 'black',
  duration = 1.75,
}) {
  return (
    <>
      <div
        className={styles.container}
        style={{
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-duration': duration + 's',
        }}
      >
        <div className={styles.dot} />
        <div className={styles.traveler} />
      </div>

      <svg width="0" height="0" className={styles.svg}>
        <defs>
          <filter id="ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </>
  )
}

JellyTriangle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
}