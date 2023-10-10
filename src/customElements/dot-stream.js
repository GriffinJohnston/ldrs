import DotStream from '../customElementDefinitions/DotStream'

if (typeof window !== 'undefined' && !customElements.get('l-dot-stream')) {
  customElements.define('l-dot-stream', class extends DotStream {})
}
