import test from 'node:test'
import assert from 'node:assert/strict'
import scaleD from '../src/lib/scaleD.js'

test('scaleD', () => {
  const d =
    'M49.5,42.9c0-18.1-9.9-34-24.5-42.4C10.4,9,0.5,24.8,0.5,42.9c7.2,4.2,15.6,6.6,24.5,6.6S42.3,47.1,49.5,42.9z'

  assert.strictEqual(
    scaleD(2, d),
    'M99 85.8 c0 -36.2 -19.8 -68 -49 -84.8 C20.8 18 1 49.6 1 85.8 c14.4 8.4 31.2 13.2 49 13.2 S84.6 94.2 99 85.8z',
  )
})
