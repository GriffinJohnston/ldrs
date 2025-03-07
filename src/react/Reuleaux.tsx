import scaleD from '../lib/scaleD.js'
import styles from './Reuleaux.scss'

export default function Reuleaux({
  size = 37,
  color = 'black',
  speed = 0.9,
  stroke = 5,
  strokeLength = 0.15,
  bgOpacity = 0.1,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  strokeLength?: number | string
  bgOpacity?: number | string
}) {
  const d =
    'M49.5,42.9c0-18.1-9.9-34-24.5-42.4C10.4,9,0.5,24.8,0.5,42.9c7.2,4.2,15.6,6.6,24.5,6.6S42.3,47.1,49.5,42.9z'
  const sizeInt = parseInt(size + '')
  const scaledD = scaleD(sizeInt / 50, d)

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
