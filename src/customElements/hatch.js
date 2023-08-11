import Hatch from '../customElementDefinitions/Hatch'

if (typeof window !== 'undefined' && !customElements.get('uib-hatch')) {
  customElements.define('uib-hatch', class extends Hatch {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-ha')) {
  customElements.define('uib-ha', class extends Hatch {})
}
