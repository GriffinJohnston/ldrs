import Hourglass from '../customElementDefinitions/Hourglass'

if (typeof window !== 'undefined' && !customElements.get('l-hourglass')) {
  customElements.define('l-hourglass', class extends Hourglass {})
}

if (typeof window !== 'undefined' && !customElements.get('l-h')) {
  customElements.define('l-h', class extends Hourglass {})
}
