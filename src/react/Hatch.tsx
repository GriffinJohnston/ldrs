import styles from './Hatch.scss'

export default function Hatch({
  size = 28,
  color = 'black',
  speed = 3.5,
  stroke = 4,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + '',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + '',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.line} />
      </div>
    </div>
  )
}
