import styles from './DotStream.scss'

interface DotStreamProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const DotStream: React.FC<DotStreamProps> = ({
  size = 60,
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
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default DotStream
