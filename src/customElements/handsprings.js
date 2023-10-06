import Handsprings from '../customElementDefinitions/Handsprings'

if (typeof window !== 'undefined' && !customElements.get('l-handsprings')) {
  customElements.define('l-handsprings', class extends Handsprings {})
}

if (typeof window !== 'undefined' && !customElements.get('l-hs')) {
  customElements.define('l-hs', class extends Handsprings {})
}
