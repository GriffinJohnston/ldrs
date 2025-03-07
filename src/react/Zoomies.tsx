import styles from './Zoomies.scss'

export default function Zoomies({
  size = 80,
  color = 'black',
  speed = 1.4,
  stroke = 5,
  bgOpacity = 0.1,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  bgOpacity?: number | string
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + 'px',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <div className={styles.inner} />
    </div>
  )
}
