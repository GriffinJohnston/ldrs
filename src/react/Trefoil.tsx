import scaleD from '../lib/scaleD.js'
import styles from './Trefoil.scss'

export default function Trefoil({
  size = 40,
  color = 'black',
  speed = 1.4,
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
    'M37.2,23.4c0,9.1-4.9,17-12.3,21.2c-3.6,2.1-7.8,3.3-12.3,3.3c-4.5,0-8.6-1.2-12.2-3.3c0-9.1,4.9-16.9,12.3-21.2c3.6-2.1,7.8-3.3,12.2-3.3S33.6,21.3,37.2,23.4c7.3,4.2,12.2,12.1,12.3,21.2c-3.6,2.1-7.8,3.3-12.2,3.3c-4.5,0-8.6-1.2-12.3-3.3c-7.3-4.2-12.2-12.1-12.2-21.2c0-9.1,4.9-17,12.2-21.2C32.3,6.4,37.2,14.3,37.2,23.4z'
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
