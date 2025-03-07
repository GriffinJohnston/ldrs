import styles from './Wobble.scss'

export default function Wobble({
  size = 45,
  color = 'black',
  speed = 0.9,
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
      <div className={styles.inner} />
    </div>
  )
}
