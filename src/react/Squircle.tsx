import scaleD from '../lib/scaleD.js'
import styles from './Squircle.scss'

interface SquircleProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  strokeLength?: number | string
  bgOpacity?: number | string
}

const Squircle: React.FC<SquircleProps> = ({
  size = 37,
  color = 'black',
  speed = 0.9,
  stroke = 5,
  strokeLength = 0.15,
  bgOpacity = 0.1,
}) => {
  const d =
    'M0.5,25C0.5,7.8,7.8,0.5,25,0.5S49.5,7.8,49.5,25S42.2,49.5,25,49.5S0.5,42.2,0.5,25'
  const scaledD = scaleD(parseInt(size + '') / 50, d)

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
        x="0px"
        y="0px"
        viewBox={`0 0 ${size} ${size}`}
        height={size}
        width={size}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className={styles.track}
          strokeWidth={stroke}
          fill="none"
          pathLength="100"
          d={scaledD}
        />
        <path
          className={styles.car}
          strokeWidth={stroke}
          fill="none"
          pathLength="100"
          d={scaledD}
        />
      </svg>
    </div>
  )
}

export default Squircle
