import styles from './Bouncy.scss'

interface BouncyProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Bouncy: React.FC<BouncyProps> = ({
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
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
      </div>
    </div>
  )
}

export default Bouncy
