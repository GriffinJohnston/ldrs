import Hourglass from '../customElementDefinitions/Hourglass'

if (typeof window !== 'undefined' && !customElements.get('uib-hourglass')) {
  customElements.define('uib-hourglass', class extends Hourglass {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-ho')) {
  customElements.define('uib-ho', class extends Hourglass {})
}
