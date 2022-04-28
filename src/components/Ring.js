import React from 'react'
import assert from '../lib/assert'
import styles from './Ring.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 * @prop {number} [lineWeight]
 */

/**
 * @param {Props} props
 */
export default function Ring({
  size = 40,
  color = 'black',
  lineWeight = 5,
  speed = 2,
}) {
  assert('Ring', 'size', size, 'number')
  assert('Ring', 'color', color, 'string')
  assert('Ring', 'lineWeight', lineWeight, 'number')
  assert('Ring', 'speed', speed, 'number')

  return (
    <svg
      height={size}
      width={size}
      className={styles.container}
      viewBox="25 25 50 50"
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-speed': speed + 's',
      }}
    >
      <circle cx="50" cy="50" r="20" strokeWidth={lineWeight} />
    </svg>
  )
}
