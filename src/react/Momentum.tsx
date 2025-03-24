import styles from './Momentum.scss'

interface MomentumProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Momentum: React.FC<MomentumProps> = ({
  size = 40,
  color = 'black',
  speed = 1.1,
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

export default Momentum
