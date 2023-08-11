import Spiral from '../customElementDefinitions/Spiral'

if (typeof window !== 'undefined' && !customElements.get('uib-spiral')) {
  customElements.define('uib-spiral', class extends Spiral {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-s')) {
  customElements.define('uib-s', class extends Spiral {})
}
