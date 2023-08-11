import Helix from '../customElementDefinitions/Helix'

if (typeof window !== 'undefined' && !customElements.get('uib-helix')) {
  customElements.define('uib-helix', class extends Helix {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-he')) {
  customElements.define('uib-he', class extends Helix {})
}
