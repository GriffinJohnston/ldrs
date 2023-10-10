import Ring from '../customElementDefinitions/Ring'

if (typeof window !== 'undefined' && !customElements.get('l-ring')) {
  customElements.define('l-ring', class extends Ring {})
}
