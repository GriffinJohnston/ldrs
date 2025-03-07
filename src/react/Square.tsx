import styles from './Square.scss'

export default function Square({
  size = 35,
  color = 'black',
  speed = 1.2,
  stroke = 5,
  strokeLength = 0.25,
  bgOpacity = 0.1,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  strokeLength?: number | string
  bgOpacity?: number | string
}) {
  const sizeInt = parseInt(size + '')
  const strokeInt = parseInt(stroke + '')
  const centerPoint = strokeInt / 2
  const strokeAdjustedSize = Math.max(sizeInt - strokeInt / 2, 0)

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-dash': String(parseFloat(strokeLength + '') * 100),
        '--uib-gap': String(100 - parseFloat(strokeLength + '') * 100),
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <svg
        className={styles.inner}
        viewBox={`0 0 ${size} ${size}`}
        height={size}
        width={size}
      >
        <rect
          className={styles.track}
          x={centerPoint}
          y={centerPoint}
          fill="none"
          strokeWidth={`${stroke}px`}
          width={strokeAdjustedSize}
          height={strokeAdjustedSize}
        />
        <rect
          className={styles.car}
          x={centerPoint}
          y={centerPoint}
          fill="none"
          strokeWidth={`${stroke}px`}
          width={strokeAdjustedSize}
          height={strokeAdjustedSize}
          pathLength="100"
        />
      </svg>
    </div>
  )
}
