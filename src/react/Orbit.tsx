import styles from './Orbit.scss'

interface OrbitProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Orbit: React.FC<OrbitProps> = ({
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

export default Orbit
