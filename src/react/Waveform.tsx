import styles from './Waveform.scss'

export default function Waveform({
  size = 35,
  color = 'black',
  speed = 1,
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
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    </div>
  )
}
