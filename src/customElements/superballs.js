import Superballs from '../customElementDefinitions/Superballs'

if (typeof window !== 'undefined' && !customElements.get('uib-superballs')) {
  customElements.define('uib-superballs', class extends Superballs {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-sb')) {
  customElements.define('uib-sb', class extends Superballs {})
}
