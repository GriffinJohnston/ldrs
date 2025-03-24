import styles from './TailChase.scss'

interface TailChaseProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const TailChase: React.FC<TailChaseProps> = ({
  size = 40,
  color = 'black',
  speed = 1.5,
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
      </div>
    </div>
  )
}

export default TailChase
