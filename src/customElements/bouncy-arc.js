import BouncyArc from '../customElementDefinitions/BouncyArc.js'

if (typeof window !== 'undefined' && !customElements.get('uib-bouncy-arc')) {
  customElements.define('uib-bouncy-arc', class extends BouncyArc {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-ba')) {
  customElements.define('uib-ba', class extends BouncyArc {})
}
