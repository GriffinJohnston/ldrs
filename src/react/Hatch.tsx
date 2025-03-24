import styles from './Hatch.scss'

interface HatchProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}

const Hatch: React.FC<HatchProps> = ({
  size = 28,
  color = 'black',
  speed = 3.5,
  stroke = 4,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + '',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + '',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.line} />
      </div>
    </div>
  )
}

export default Hatch
