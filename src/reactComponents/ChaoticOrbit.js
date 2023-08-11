import React from 'react'
import assert from '../lib/assert'
import insertCSS from '../lib/insertCSS'
import styles, { stylesheet } from './ChaoticOrbit.module.scss'

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
export default function ChaoticOrbit({
  size = 25,
  color = 'black',
  speed = 1.5,
}) {
  assert('ChaoticOrbit', 'size', size, 'number')
  assert('ChaoticOrbit', 'color', color, 'string')
  assert('ChaoticOrbit', 'speed', speed, 'number')

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
