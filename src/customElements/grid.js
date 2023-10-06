import Grid from '../customElementDefinitions/Grid'

if (typeof window !== 'undefined' && !customElements.get('l-grid')) {
  customElements.define('l-grid', class extends Grid {})
}

if (typeof window !== 'undefined' && !customElements.get('l-g')) {
  customElements.define('l-g', class extends Grid {})
}
