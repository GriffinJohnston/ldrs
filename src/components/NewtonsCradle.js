import React from 'react'
import assert from '../lib/assert'
import styles from './NewtonsCradle.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function NewtonsCradle({
  size = 40,
  color = 'black',
  speed = 1.4,
}) {
  assert('NewtonsCradle', 'size', size, 'number')
  assert('NewtonsCradle', 'color', color, 'string')
  assert('NewtonsCradle', 'speed', speed, 'number')

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
      <div className={styles.dot} />
    </div>
  )
}
