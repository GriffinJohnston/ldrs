import Jelly from '../customElementDefinitions/Jelly'

if (typeof window !== 'undefined' && !customElements.get('uib-jelly')) {
  customElements.define('uib-jelly', class extends Jelly {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-j')) {
  customElements.define('uib-j', class extends Jelly {})
}
