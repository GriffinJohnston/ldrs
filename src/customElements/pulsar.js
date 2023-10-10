import Pulsar from '../customElementDefinitions/Pulsar'

if (typeof window !== 'undefined' && !customElements.get('l-pulsar')) {
  customElements.define('l-pulsar', class extends Pulsar {})
}
