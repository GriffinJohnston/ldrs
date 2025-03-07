import styles from './DotPulse.scss'

export default function DotPulse({
  size = 43,
  color = 'black',
  speed = 1.3,
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
        <div className={styles.dot} />
      </div>
    </div>
  )
}
