import styles from './Hourglass.scss'

interface HourglassProps {
  size?: number | string
  color?: string
  speed?: number | string
  bgOpacity?: number | string
}

const Hourglass: React.FC<HourglassProps> = ({
  size = 40,
  color = 'black',
  speed = 1.75,
  bgOpacity = 0.1,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.half} />
        <div className={styles.half} />
      </div>
    </div>
  )
}

export default Hourglass
