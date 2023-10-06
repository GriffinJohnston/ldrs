import Helix from '../customElementDefinitions/Helix'

if (typeof window !== 'undefined' && !customElements.get('l-helix')) {
  customElements.define('l-helix', class extends Helix {})
}

if (typeof window !== 'undefined' && !customElements.get('l-hx')) {
  customElements.define('l-hx', class extends Helix {})
}
