import styles from './Treadmill.scss'

export default function Treadmill({
  size = 70,
  color = 'black',
  speed = 1.25,
}: {
  size?: number | string
  color?: string
  speed?: number | string
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.cube} />
      </div>
    </div>
  )
}
