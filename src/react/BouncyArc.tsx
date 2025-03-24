import styles from './BouncyArc.scss'

interface BouncyArcProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const BouncyArc: React.FC<BouncyArcProps> = ({
  size = 70,
  color = 'black',
  speed = 1.65,
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

export default BouncyArc
