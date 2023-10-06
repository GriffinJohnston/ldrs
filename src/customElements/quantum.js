import Quantum from '../customElementDefinitions/Quantum'

if (typeof window !== 'undefined' && !customElements.get('l-quantum')) {
  customElements.define('l-quantum', class extends Quantum {})
}

if (typeof window !== 'undefined' && !customElements.get('l-q')) {
  customElements.define('l-q', class extends Quantum {})
}
