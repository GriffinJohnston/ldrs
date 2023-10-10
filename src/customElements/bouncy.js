import Bouncy from '../customElementDefinitions/Bouncy'

if (typeof window !== 'undefined' && !customElements.get('l-bouncy')) {
  customElements.define('l-bouncy', class extends Bouncy {})
}
