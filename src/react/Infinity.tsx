import scaleD from '../lib/scaleD.js'
import styles from './Infinity.scss'

export default function Infinity({
  size = 55,
  color = 'black',
  speed = 1.3,
  stroke = 4,
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
    'M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z'
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
        viewBox={`0 0 ${size} ${sizeInt * (2.1 / 5)}`}
        height={sizeInt * (2.1 / 5)}
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
