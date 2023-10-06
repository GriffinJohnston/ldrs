import Ping from '../customElementDefinitions/Ping'

if (typeof window !== 'undefined' && !customElements.get('l-ping')) {
  customElements.define('l-ping', class extends Ping {})
}

if (typeof window !== 'undefined' && !customElements.get('l-p')) {
  customElements.define('l-p', class extends Ping {})
}
