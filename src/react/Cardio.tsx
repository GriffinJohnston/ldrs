import scaleD from '../lib/scaleD.js'
import styles from './Cardio.scss'

export default function Cardio({
  size = 50,
  color = 'black',
  speed = 1.5,
  stroke = 4,
  bgOpacity = 0.1,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  bgOpacity?: number | string
}) {
  const d = 'M0.5,17.2h8.2l3-4.7l5.9,12l7.8-24l5.9,16.7v0h8.2'
  const sizeInt = parseInt(size + '')
  const scaledD = scaleD(sizeInt / 40, d)

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + '',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <svg
        className={styles.inner}
        x="0px"
        y="0px"
        viewBox={`0 0 ${size} ${sizeInt * (25 / 40)}`}
        height={sizeInt * (25 / 40)}
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
