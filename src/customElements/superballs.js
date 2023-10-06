import Superballs from '../customElementDefinitions/Superballs'

if (typeof window !== 'undefined' && !customElements.get('l-superballs')) {
  customElements.define('l-superballs', class extends Superballs {})
}

if (typeof window !== 'undefined' && !customElements.get('l-sb')) {
  customElements.define('l-sb', class extends Superballs {})
}
