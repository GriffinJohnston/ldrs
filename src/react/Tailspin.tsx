import styles from './Tailspin.scss'

export default function Tailspin({
  size = 40,
  color = 'black',
  speed = 0.9,
  stroke = 5,
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
      <div className={styles.inner} />
    </div>
  )
}
