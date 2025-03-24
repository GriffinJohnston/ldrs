import styles from './Ripples.scss'

interface RipplesProps {
  size?: number | string
  color?: string
  speed?: number | string
}

const Ripples: React.FC<RipplesProps> = ({
  size = 45,
  color = 'black',
  speed = 2,
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
      </div>
    </div>
  )
}

export default Ripples
