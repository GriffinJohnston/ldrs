import styles from './Ring.scss'

export default function Ring({
  size = 40,
  color = 'black',
  speed = 2,
  stroke = 5,
  bgOpacity = 0,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  bgOpacity?: number | string
}) {
  const sizeInt = parseInt(size + '')
  const strokeInt = parseInt(stroke + '')
  const centerPoint = sizeInt / 2
  const radius = Math.max(0, sizeInt / 2 - strokeInt / 2)

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <svg
        className={styles.inner}
        viewBox={`0 0 ${size} ${size}`}
        height={size}
        width={size}
      >
        <circle
          className={styles.track}
          cx={centerPoint}
          cy={centerPoint}
          r={radius}
          pathLength="100"
          strokeWidth={`${stroke}px`}
          fill="none"
        />
        <circle
          className={styles.car}
          cx={centerPoint}
          cy={centerPoint}
          r={radius}
          pathLength="100"
          strokeWidth={`${stroke}px`}
          fill="none"
        />
      </svg>
    </div>
  )
}
