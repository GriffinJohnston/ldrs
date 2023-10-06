import Pinwheel from '../customElementDefinitions/Pinwheel'

if (typeof window !== 'undefined' && !customElements.get('l-pinwheel')) {
  customElements.define('l-pinwheel', class extends Pinwheel {})
}

if (typeof window !== 'undefined' && !customElements.get('l-pw')) {
  customElements.define('l-pw', class extends Pinwheel {})
}
