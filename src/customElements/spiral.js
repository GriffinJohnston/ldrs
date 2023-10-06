import Spiral from '../customElementDefinitions/Spiral'

if (typeof window !== 'undefined' && !customElements.get('l-spiral')) {
  customElements.define('l-spiral', class extends Spiral {})
}

if (typeof window !== 'undefined' && !customElements.get('l-s')) {
  customElements.define('l-s', class extends Spiral {})
}
