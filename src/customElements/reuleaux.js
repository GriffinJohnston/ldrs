import Reuleaux from '../customElementDefinitions/Reuleaux'

if (typeof window !== 'undefined' && !customElements.get('l-reuleaux')) {
  customElements.define('l-reuleaux', class extends Reuleaux {})
}
