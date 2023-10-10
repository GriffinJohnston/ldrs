import Miyagi from '../customElementDefinitions/Miyagi'

if (typeof window !== 'undefined' && !customElements.get('l-miyagi')) {
  customElements.define('l-miyagi', class extends Miyagi {})
}
