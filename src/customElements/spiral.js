import Spiral from '../customElementDefinitions/Spiral'

if (typeof window !== 'undefined' && !customElements.get('l-spiral')) {
  customElements.define('l-spiral', class extends Spiral {})
}
