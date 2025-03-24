import styles from './Leapfrog.scss'

interface LeapfrogProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Leapfrog: React.FC<LeapfrogProps> = ({
  size = 40,
  color = 'black',
  speed = 2.5,
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

export default Leapfrog
