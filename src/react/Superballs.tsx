import styles from './Superballs.scss'

interface SuperballsProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Superballs: React.FC<SuperballsProps> = ({
  size = 40,
  color = 'black',
  speed = 1.4,
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
        <div className={styles.electron} />
        <div className={styles.electron} />
      </div>
    </div>
  )
}

export default Superballs
