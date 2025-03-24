import styles from './Pulsar.scss'

interface PulsarProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Pulsar: React.FC<PulsarProps> = ({
  size = 40,
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
      <div className={styles.inner} />
    </div>
  )
}

export default Pulsar
