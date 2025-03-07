import styles from './Mirage.scss'

export default function Mirage({
  size = 60,
  color = 'black',
  speed = 2.5,
}: {
  size?: number | string
  color?: string
  speed?: number | string
}) {
  const sizeInt = parseInt(size + '')
  const height = sizeInt * 0.23

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
          <circle className={styles.dot} />
          <circle className={styles.dot} />
          <circle className={styles.dot} />
          <defs>
            <filter id="uib-mirage-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={sizeInt / 20}
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
