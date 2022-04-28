import React from 'react'
import assert from '../lib/assert'
import styles from './Ping.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function Ping({ size = 45, color = 'black', speed = 2 }) {
  assert('Ping', 'size', size, 'number')
  assert('Ping', 'color', color, 'string')
  assert('Ping', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    />
  )
}
