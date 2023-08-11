import Handsprings from '../customElementDefinitions/Handsprings'

if (typeof window !== 'undefined' && !customElements.get('uib-handsprings')) {
  customElements.define('uib-handsprings', class extends Handsprings {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-hs')) {
  customElements.define('uib-hs', class extends Handsprings {})
}
