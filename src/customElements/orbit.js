import Orbit from '../customElementDefinitions/Orbit'

if (typeof window !== 'undefined' && !customElements.get('uib-orbit')) {
  customElements.define('uib-orbit', class extends Orbit {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-o')) {
  customElements.define('uib-o', class extends Orbit {})
}
