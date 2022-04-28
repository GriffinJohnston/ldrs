import React from 'react'
import assert from '../lib/assert'
import styles from './SuperBalls.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function SuperBalls({
  size = 45,
  color = 'black',
  speed = 1.4,
}) {
  assert('SuperBalls', 'size', size, 'number')
  assert('SuperBalls', 'color', color, 'string')
  assert('SuperBalls', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.electron} />
      <div className={styles.electron} />
    </div>
  )
}
