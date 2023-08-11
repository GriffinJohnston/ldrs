import Bouncy from '../customElementDefinitions/Bouncy'

if (typeof window !== 'undefined' && !customElements.get('uib-bouncy')) {
  customElements.define('uib-bouncy', class extends Bouncy {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-b')) {
  customElements.define('uib-b', class extends Bouncy {})
}
