import Miyagi from '../customElementDefinitions/Miyagi'

if (typeof window !== 'undefined' && !customElements.get('uib-miyagi')) {
  customElements.define('uib-miyagi', class extends Miyagi {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-mi')) {
  customElements.define('uib-mi', class extends Miyagi {})
}
