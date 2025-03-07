import styles from './DotStream.scss'

export default function DotStream({
  size = 60,
  color = 'black',
  speed = 2.5,
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
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}
