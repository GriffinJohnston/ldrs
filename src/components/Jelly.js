import assert from '../lib/assert'
import styles from './Jelly.module.scss'

export default function Jelly({ size = 50, color = 'black', speed = 0.9 }) {
  assert('Jelly', 'size', size, 'number')
  assert('Jelly', 'color', color, 'string')
  assert('Jelly', 'speed', speed, 'number')

  return (
    <>
      <div
        className={styles.container}
        style={{
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-speed': speed + 's',
        }}
      />

      <svg width="0" height="0" className={styles.svg}>
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={size / 8}
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
