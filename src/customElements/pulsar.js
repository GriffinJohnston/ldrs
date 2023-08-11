import Pulsar from '../customElementDefinitions/Pulsar'

if (typeof window !== 'undefined' && !customElements.get('uib-pulsar')) {
  customElements.define('uib-pulsar', class extends Pulsar {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-pu')) {
  customElements.define('uib-pu', class extends Pulsar {})
}
