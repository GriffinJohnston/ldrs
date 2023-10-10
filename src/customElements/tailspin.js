import Tailspin from '../customElementDefinitions/Tailspin'

if (typeof window !== 'undefined' && !customElements.get('l-tailspin')) {
  customElements.define('l-tailspin', class extends Tailspin {})
}
