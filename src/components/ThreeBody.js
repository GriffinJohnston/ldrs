import React from 'react'
import assert from '../lib/assert'
import styles from './ThreeBody.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function ThreeBody({ size = 35, color = 'black', speed = 1.1 }) {
  assert('ThreeBody', 'size', size, 'number')
  assert('ThreeBody', 'color', color, 'string')
  assert('ThreeBody', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  )
}
