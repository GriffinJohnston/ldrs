import styles from './DotSpinner.scss'

interface DotSpinnerProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const DotSpinner: React.FC<DotSpinnerProps> = ({
  size = 40,
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
      <div className={styles.inner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default DotSpinner
