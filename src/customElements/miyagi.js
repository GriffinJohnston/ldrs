import Miyagi from '../customElementDefinitions/Miyagi'

if (typeof window !== 'undefined' && !customElements.get('l-miyagi')) {
  customElements.define('l-miyagi', class extends Miyagi {})
}

if (typeof window !== 'undefined' && !customElements.get('l-mi')) {
  customElements.define('l-mi', class extends Miyagi {})
}
