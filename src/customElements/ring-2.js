import Ring2 from '../customElementDefinitions/Ring2'

if (typeof window !== 'undefined' && !customElements.get('l-ring-2')) {
  customElements.define('l-ring-2', class extends Ring2 {})
}
