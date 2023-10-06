import DotWave from '../customElementDefinitions/DotWave'

if (typeof window !== 'undefined' && !customElements.get('l-dot-wave')) {
  customElements.define('l-dot-wave', class extends DotWave {})
}

if (typeof window !== 'undefined' && !customElements.get('l-dw')) {
  customElements.define('l-dw', class extends DotWave {})
}
