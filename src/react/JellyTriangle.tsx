import styles from './JellyTriangle.scss'

export default function JellyTriangle({
  size = 30,
  color = 'black',
  speed = 1.75,
}: {
  size?: number | string
  color?: string
  speed?: number | string
}) {
  const sizeInt = parseInt(size + '')

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
          viewBox={`0 0 ${size} ${size}`}
          height={size}
          width={size}
          preserveAspectRatio="xMidYMid meet"
        >
          <circle className={styles.dot} />
          <circle className={styles.dot} />
          <circle className={styles.dot} />
          <circle className={styles.traveler} />
          <defs>
            <filter id="uib-jelly-triangle-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={sizeInt / 9}
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
