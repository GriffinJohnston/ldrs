import styles from './BouncyArc.scss'

export default function BouncyArc({
  size = 70,
  color = 'black',
  speed = 1.65,
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
