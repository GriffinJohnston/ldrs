import React from 'react'
import assert from '../lib/assert'
import styles from './Handsprings.module.scss'

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
export default function Handsprings({
  size = 37,
  color = 'black',
  lineWeight = 5,
  speed = 2,
}) {
  assert('Handsprings', 'size', size, 'number')
  assert('Handsprings', 'color', color, 'string')
  assert('Handsprings', 'lineWeight', lineWeight, 'number')
  assert('Handsprings', 'speed', speed, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-speed': speed + 's',
      }}
    />
  )
}
