import DotGrid from '../customElementDefinitions/DotGrid'

if (typeof window !== 'undefined' && !customElements.get('uib-dot-grid')) {
  customElements.define('uib-dot-grid', class extends DotGrid {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-dg')) {
  customElements.define('uib-dg', class extends DotGrid {})
}
