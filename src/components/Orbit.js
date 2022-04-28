import React from 'react'
import assert from '../lib/assert'
import styles from './Orbit.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function Orbit({ size = 25, color = 'black', speed = 1.5 }) {
  assert('Orbit', 'size', size, 'number')
  assert('Orbit', 'color', color, 'string')
  assert('Orbit', 'speed', speed, 'number')

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
