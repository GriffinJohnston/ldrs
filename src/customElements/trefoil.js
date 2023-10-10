import Trefoil from '../customElementDefinitions/Trefoil'

if (typeof window !== 'undefined' && !customElements.get('l-trefoil')) {
  customElements.define('l-trefoil', class extends Trefoil {})
}
