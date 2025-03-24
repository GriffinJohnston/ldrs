import styles from './LineWobble.scss'

interface LineWobbleProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  bgOpacity?: number | string
}

const LineWobble: React.FC<LineWobbleProps> = ({
  size = 80,
  color = 'black',
  speed = 1.75,
  stroke = 5,
  bgOpacity = 0.1,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-stroke': stroke + 'px',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <div className={styles.inner} />
    </div>
  )
}

export default LineWobble
