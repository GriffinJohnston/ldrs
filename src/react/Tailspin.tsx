import styles from './Tailspin.scss'

interface TailspinProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
}

const Tailspin: React.FC<TailspinProps> = ({
  size = 40,
  color = 'black',
  speed = 0.9,
  stroke = 5,
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
      <div className={styles.inner} />
    </div>
  )
}

export default Tailspin
