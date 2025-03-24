import styles from './Miyagi.scss'

interface MiyagiProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}

const Miyagi: React.FC<MiyagiProps> = ({
  size = 35,
  color = 'black',
  speed = 0.9,
  stroke = 3.5,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + 'px',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  )
}
export default Miyagi
