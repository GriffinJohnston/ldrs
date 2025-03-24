import styles from './Helix.scss'

interface HelixProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Helix: React.FC<HelixProps> = ({
  size = 45,
  color = 'black',
  speed = 2.5,
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
        <div className={styles.slice} />
        <div className={styles.slice} />
        <div className={styles.slice} />
        <div className={styles.slice} />
        <div className={styles.slice} />
        <div className={styles.slice} />
      </div>
    </div>
  )
}
export default Helix
