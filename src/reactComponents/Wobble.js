import React from 'react'
import assert from '../lib/assert'
import insertCSS from '../lib/insertCSS'
import styles, { stylesheet } from './Wobble.module.scss'

insertCSS(stylesheet)

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function Wobble({ size = 45, color = 'black', speed = 0.9 }) {
  assert('Wobble', 'size', size, 'number')
  assert('Wobble', 'color', color, 'string')
  assert('Wobble', 'speed', speed, 'number')

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
