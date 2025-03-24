import styles from './LineSpinner.scss'

interface LineSpinnerProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}

const LineSpinner: React.FC<LineSpinnerProps> = ({
  size = 40,
  color = 'black',
  speed = 1,
  stroke = 3,
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

export default LineSpinner
