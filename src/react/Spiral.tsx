import styles from './Spiral.scss'

interface SpiralProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Spiral: React.FC<SpiralProps> = ({
  size = 40,
  color = 'black',
  speed = 0.9,
}) => {
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
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default Spiral
