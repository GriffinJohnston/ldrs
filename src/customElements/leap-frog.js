import LeapFrog from '../customElementDefinitions/LeapFrog'

if (typeof window !== 'undefined' && !customElements.get('uib-leap-frog')) {
  customElements.define('uib-leap-frog', class extends LeapFrog {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-lf')) {
  customElements.define('uib-lf', class extends LeapFrog {})
}
