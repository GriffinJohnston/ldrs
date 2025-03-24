import styles from './Metronome.scss'

interface MetronomeProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Metronome: React.FC<MetronomeProps> = ({
  size = 40,
  color = 'black',
  speed = 1.6,
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

export default Metronome
