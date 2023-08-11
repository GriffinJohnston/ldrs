import Wobble from '../customElementDefinitions/Wobble'

if (typeof window !== 'undefined' && !customElements.get('uib-wobble')) {
  customElements.define('uib-wobble', class extends Wobble {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-w')) {
  customElements.define('uib-w', class extends Wobble {})
}
