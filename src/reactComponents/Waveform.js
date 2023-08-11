import React from 'react'
import assert from '../lib/assert'
import insertCSS from '../lib/insertCSS'
import styles, { stylesheet } from './Waveform.module.scss'

insertCSS(stylesheet)

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
export default function Waveform({
  size = 40,
  color = 'black',
  lineWeight = 3.5,
  speed = 1,
}) {
  assert('Waveform', 'size', size, 'number')
  assert('Waveform', 'color', color, 'string')
  assert('Waveform', 'speed', speed, 'number')
  assert('Waveform', 'lineWeight', lineWeight, 'number')

  return (
    <div
      className={styles.container}
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-line-weight': lineWeight + 'px',
        '--uib-speed': speed + 's',
      }}
    >
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  )
}
