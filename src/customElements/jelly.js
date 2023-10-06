import Jelly from '../customElementDefinitions/Jelly'

if (typeof window !== 'undefined' && !customElements.get('l-jelly')) {
  customElements.define('l-jelly', class extends Jelly {})
}

if (typeof window !== 'undefined' && !customElements.get('l-j')) {
  customElements.define('l-j', class extends Jelly {})
}
