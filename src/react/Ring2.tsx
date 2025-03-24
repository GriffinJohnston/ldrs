import styles from './Ring2.scss'

interface Ring2Props {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  strokeLength?: number | string
  bgOpacity?: number | string
}

const Ring2: React.FC<Ring2Props> = ({
  size = 40,
  color = 'black',
  speed = 0.8,
  stroke = 5,
  strokeLength = 0.25,
  bgOpacity = 0.1,
}) => {
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
        '--uib-dash': String(parseFloat(strokeLength + '') * 100),
        '--uib-gap': String(100 - parseFloat(strokeLength + '') * 100),
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <svg
        className={styles.inner}
        viewBox={`${centerPoint} ${centerPoint} ${size} ${size}`}
        height={size}
        width={size}
      >
        <circle
          className={styles.track}
          cx={size}
          cy={size}
          r={radius}
          pathLength="100"
          strokeWidth={`${stroke}px`}
          fill="none"
        />
        <circle
          className={styles.car}
          cx={size}
          cy={size}
          r={radius}
          pathLength="100"
          strokeWidth={`${stroke}px`}
          fill="none"
        />
      </svg>
    </div>
  )
}
export default Ring2
