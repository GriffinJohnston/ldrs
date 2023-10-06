import Leapfrog from '../customElementDefinitions/Leapfrog'

if (typeof window !== 'undefined' && !customElements.get('l-leapfrog')) {
  customElements.define('l-leapfrog', class extends Leapfrog {})
}

if (typeof window !== 'undefined' && !customElements.get('l-lf')) {
  customElements.define('l-lf', class extends Leapfrog {})
}
