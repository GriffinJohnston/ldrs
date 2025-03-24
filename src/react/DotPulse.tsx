import styles from './DotPulse.scss'

interface DotPulseProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const ChaoticOrbit: React.FC<DotPulseProps> = ({
  size = 43,
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
      </div>
    </div>
  )
}

export default ChaoticOrbit
