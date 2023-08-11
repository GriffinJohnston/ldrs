import DotStream from '../customElementDefinitions/DotStream'

if (typeof window !== 'undefined' && !customElements.get('uib-dot-stream')) {
  customElements.define('uib-dot-stream', class extends DotStream {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-dst')) {
  customElements.define('uib-dst', class extends DotStream {})
}
