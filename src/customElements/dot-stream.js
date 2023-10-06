import DotStream from '../customElementDefinitions/DotStream'

if (typeof window !== 'undefined' && !customElements.get('l-dot-stream')) {
  customElements.define('l-dot-stream', class extends DotStream {})
}

if (typeof window !== 'undefined' && !customElements.get('l-dst')) {
  customElements.define('l-dst', class extends DotStream {})
}
