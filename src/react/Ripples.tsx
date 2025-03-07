import styles from './Ripples.scss'

export default function Ripples({
  size = 45,
  color = 'black',
  speed = 2,
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
