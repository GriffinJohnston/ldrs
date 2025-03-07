import styles from './Pinwheel.scss'

export default function Pinwheel({
  size = 35,
  color = 'black',
  speed = 0.9,
  stroke = 3.5,
}: {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + 'px',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  )
}
