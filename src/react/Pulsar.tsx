import styles from './Pulsar.scss'

export default function Pulsar({
  size = 40,
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
      <div className={styles.inner} />
    </div>
  )
}
