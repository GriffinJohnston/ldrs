import styles from './Treadmill.scss'

interface TreadmillProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Treadmill: React.FC<TreadmillProps> = ({
  size = 70,
  color = 'black',
  speed = 1.25,
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
        <div className={styles.cube} />
      </div>
    </div>
  )
}

export default Treadmill
