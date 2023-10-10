import Wobble from '../customElementDefinitions/Wobble'

if (typeof window !== 'undefined' && !customElements.get('l-wobble')) {
  customElements.define('l-wobble', class extends Wobble {})
}
