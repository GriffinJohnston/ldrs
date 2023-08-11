import Ping from '../customElementDefinitions/Ping'

if (typeof window !== 'undefined' && !customElements.get('uib-ping')) {
  customElements.define('uib-ping', class extends Ping {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-p')) {
  customElements.define('uib-p', class extends Ping {})
}
