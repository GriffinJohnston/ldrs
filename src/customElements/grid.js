import Grid from '../customElementDefinitions/Grid'

if (typeof window !== 'undefined' && !customElements.get('uib-grid')) {
  customElements.define('uib-grid', class extends Grid {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-g')) {
  customElements.define('uib-g', class extends Grid {})
}
