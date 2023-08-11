import Pinwheel from '../customElementDefinitions/Pinwheel'

if (typeof window !== 'undefined' && !customElements.get('uib-pinwheel')) {
  customElements.define('uib-pinwheel', class extends Pinwheel {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-pw')) {
  customElements.define('uib-pw', class extends Pinwheel {})
}
