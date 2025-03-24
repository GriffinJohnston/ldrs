import styles from './ChaoticOrbit.scss'

interface ChaoticOrbitProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const ChaoticOrbit: React.FC<ChaoticOrbitProps> = ({
  size = 35,
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
      <div className={styles.inner} />
    </div>
  )
}

export default ChaoticOrbit
