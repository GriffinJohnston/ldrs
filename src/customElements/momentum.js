import Momentum from '../customElementDefinitions/Momentum'

if (typeof window !== 'undefined' && !customElements.get('uib-momentum')) {
  customElements.define('uib-momentum', class extends Momentum {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-mo')) {
  customElements.define('uib-mo', class extends Momentum {})
}
