import styles from './DotWave.scss'

interface DotWaveProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const DotWave: React.FC<DotWaveProps> = ({
  size = 47,
  color = 'black',
  speed = 1,
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
      </div>
    </div>
  )
}

export default DotWave
