import Quantum from '../customElementDefinitions/Quantum'

if (typeof window !== 'undefined' && !customElements.get('uib-quantum')) {
  customElements.define('uib-quantum', class extends Quantum {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-q')) {
  customElements.define('uib-q', class extends Quantum {})
}
