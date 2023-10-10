import Infinity from '../customElementDefinitions/Infinity'

if (typeof window !== 'undefined' && !customElements.get('l-infinity')) {
  customElements.define('l-infinity', class extends Infinity {})
}
