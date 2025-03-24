import styles from './Trio.scss'

interface TrioProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Trio: React.FC<TrioProps> = ({
  size = 40,
  color = 'black',
  speed = 1.3,
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
      </div>
    </div>
  )
}

export default Trio
