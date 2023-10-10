import Cardio from '../customElementDefinitions/Cardio'

if (typeof window !== 'undefined' && !customElements.get('l-cardio')) {
  customElements.define('l-cardio', class extends Cardio {})
}
