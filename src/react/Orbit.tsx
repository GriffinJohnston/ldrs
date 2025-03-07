import styles from './Orbit.scss'

export default function Orbit({
  size = 35,
  color = 'black',
  speed = 1.5,
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
