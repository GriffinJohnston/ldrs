import styles from './Chain.scss'

interface ChainProps {
  size?: number | string
  color?: string
  speed?: number | string
  stroke?: number | string
  bgOpacity?: number | string
}

const LINK_A = 'M13 18H23A7 7 0 0 1 23 32H13A7 7 0 0 1 13 18Z'
const LINK_B = 'M27 18H37A7 7 0 0 1 37 32H27A7 7 0 0 1 27 18Z'

const Chain: React.FC<ChainProps> = ({
  size = 50,
  color = 'black',
  speed = 1.6,
  stroke = 3,
  bgOpacity = 0.15,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
        '--uib-bg-opacity': bgOpacity + '',
      }}
    >
      <svg
        className={styles.inner}
        viewBox="0 0 50 50"
        height={size}
        width={size}
      >
        <g transform="rotate(-45 25 25)">
          <g className="link-a">
            <path
              className={styles.track}
              d={LINK_A}
              pathLength="100"
              strokeWidth={`${stroke}px`}
              fill="none"
            />
            <path
              className={styles.car}
              d={LINK_A}
              pathLength="100"
              strokeWidth={`${stroke}px`}
              fill="none"
            />
          </g>
          <g className="link-b">
            <path
              className={styles.track}
              d={LINK_B}
              pathLength="100"
              strokeWidth={`${stroke}px`}
              fill="none"
            />
            <path
              className={styles.car}
              d={LINK_B}
              pathLength="100"
              strokeWidth={`${stroke}px`}
              fill="none"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chain
