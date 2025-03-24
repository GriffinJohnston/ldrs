import styles from './Wobble.scss'

interface WobbleProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Wobble: React.FC<WobbleProps> = ({
  size = 45,
  color = 'black',
  speed = 0.9,
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

export default Wobble
