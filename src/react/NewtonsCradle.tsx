import styles from './NewtonsCradle.scss'

interface NewtonsCradleProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const NewtonsCradle: React.FC<NewtonsCradleProps> = ({
  size = 78,
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
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default NewtonsCradle
