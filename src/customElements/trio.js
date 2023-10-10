import Trio from '../customElementDefinitions/Trio'

if (typeof window !== 'undefined' && !customElements.get('l-trio')) {
  customElements.define('l-trio', class extends Trio {})
}
