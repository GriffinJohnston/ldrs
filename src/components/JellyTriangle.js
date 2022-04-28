import React from 'react'
import assert from '../lib/assert'
import styles from './JellyTriangle.module.scss'

/**
 * @typedef Props
 * @prop {number} [size]
 * @prop {string} [color]
 * @prop {number} [speed]
 */

/**
 * @param {Props} props
 */
export default function JellyTriangle({
  size = 44,
  color = 'black',
  speed = 1.75,
}) {
  assert('JellyTriangle', 'size', size, 'number')
  assert('JellyTriangle', 'color', color, 'string')
  assert('JellyTriangle', 'speed', speed, 'number')

  return (
    <>
      <div
        className={styles.container}
        style={{
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-speed': speed + 's',
        }}
      >
        <div className={styles.dot} />
        <div className={styles.traveler} />
      </div>

      <svg width="0" height="0" className={styles.svg}>
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={size / 6}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
