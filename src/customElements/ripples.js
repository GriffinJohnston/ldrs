import Ripples from '../customElementDefinitions/Ripples'

if (typeof window !== 'undefined' && !customElements.get('l-ripples')) {
  customElements.define('l-ripples', class extends Ripples {})
}
