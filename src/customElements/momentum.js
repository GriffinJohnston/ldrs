import Momentum from '../customElementDefinitions/Momentum'

if (typeof window !== 'undefined' && !customElements.get('l-momentum')) {
  customElements.define('l-momentum', class extends Momentum {})
}

if (typeof window !== 'undefined' && !customElements.get('l-mo')) {
  customElements.define('l-mo', class extends Momentum {})
}
