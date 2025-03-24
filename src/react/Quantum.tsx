import styles from './Quantum.scss'

interface QuantumProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Quantum: React.FC<QuantumProps> = ({
  size = 45,
  color = 'black',
  speed = 1.75,
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
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
      </div>
    </div>
  )
}

export default Quantum
