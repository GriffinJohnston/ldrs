import Jelly from '../customElementDefinitions/Jelly'

if (typeof window !== 'undefined' && !customElements.get('l-jelly')) {
  customElements.define('l-jelly', class extends Jelly {})
}
