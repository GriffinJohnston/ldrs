import Wobble from '../customElementDefinitions/Wobble'

if (typeof window !== 'undefined' && !customElements.get('l-wobble')) {
  customElements.define('l-wobble', class extends Wobble {})
}

if (typeof window !== 'undefined' && !customElements.get('l-w')) {
  customElements.define('l-w', class extends Wobble {})
}
