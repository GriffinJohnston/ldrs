import Hourglass from '../customElementDefinitions/Hourglass'

if (typeof window !== 'undefined' && !customElements.get('l-hourglass')) {
  customElements.define('l-hourglass', class extends Hourglass {})
}
