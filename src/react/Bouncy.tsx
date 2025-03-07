import styles from './Bouncy.scss'

export default function Bouncy({
  size = 45,
  color = 'black',
  speed = 1.75,
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
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
      </div>
    </div>
  )
}
