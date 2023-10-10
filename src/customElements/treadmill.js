import Treadmill from '../customElementDefinitions/Treadmill'

if (typeof window !== 'undefined' && !customElements.get('l-treadmill')) {
  customElements.define('l-treadmill', class extends Treadmill {})
}
