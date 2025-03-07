import styles from './Superballs.scss'

export default function Superballs({
  size = 40,
  color = 'black',
  speed = 1.4,
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
        <div className={styles.electron} />
        <div className={styles.electron} />
      </div>
    </div>
  )
}
