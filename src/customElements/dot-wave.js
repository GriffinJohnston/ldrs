import DotWave from '../customElementDefinitions/DotWave'

if (typeof window !== 'undefined' && !customElements.get('uib-dot-wave')) {
  customElements.define('uib-dot-wave', class extends DotWave {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-dw')) {
  customElements.define('uib-dw', class extends DotWave {})
}
