import Ripples from '../customElementDefinitions/Ripples'

if (typeof window !== 'undefined' && !customElements.get('uib-ripples')) {
  customElements.define('uib-ripples', class extends Ripples {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-ri')) {
  customElements.define('uib-ri', class extends Ripples {})
}
