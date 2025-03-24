import styles from './Ping.scss'

interface PingProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Ping: React.FC<PingProps> = ({
  size = 45,
  color = 'black',
  speed = 2,
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

export default Ping
