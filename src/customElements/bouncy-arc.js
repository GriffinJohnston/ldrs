import BouncyArc from '../customElementDefinitions/BouncyArc.js'

if (typeof window !== 'undefined' && !customElements.get('l-bouncy-arc')) {
  customElements.define('l-bouncy-arc', class extends BouncyArc {})
}
