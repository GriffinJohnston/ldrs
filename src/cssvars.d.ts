import '@types/react'

declare module 'react' {
  interface CSSProperties {
    '--uib-size'?: string
    '--uib-color'?: string
    '--uib-speed'?: string
    '--uib-stroke'?: string
    '--uib-dash'?: string
    '--uib-gap'?: string
    '--uib-bg-opacity'?: string
  }
}
