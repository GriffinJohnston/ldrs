import Hatch from '../customElementDefinitions/Hatch'

if (typeof window !== 'undefined' && !customElements.get('l-hatch')) {
  customElements.define('l-hatch', class extends Hatch {})
}
