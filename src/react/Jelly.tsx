import styles from './Jelly.scss'

export default function Jelly({
  size = 40,
  color = 'black',
  speed = 0.9,
}: {
  size?: number | string
  color?: string
  speed?: number | string
}) {
  const sizeInt = parseInt(size + '')
  const height = sizeInt / 2

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.inner}>
        <svg
          className={styles.svg}
          x="0px"
          y="0px"
          viewBox={`0 0 ${size} ${height}`}
          height={height}
          width={size}
          preserveAspectRatio="xMidYMid meet"
        >
          <circle className={styles.dot} />
          <circle className={styles.dot} />
          <defs>
            <filter id="uib-jelly-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={sizeInt / 8}
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
      </div>
    </div>
  )
}
