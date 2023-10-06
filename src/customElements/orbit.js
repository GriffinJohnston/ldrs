import Orbit from '../customElementDefinitions/Orbit'

if (typeof window !== 'undefined' && !customElements.get('l-orbit')) {
  customElements.define('l-orbit', class extends Orbit {})
}

if (typeof window !== 'undefined' && !customElements.get('l-o')) {
  customElements.define('l-o', class extends Orbit {})
}
