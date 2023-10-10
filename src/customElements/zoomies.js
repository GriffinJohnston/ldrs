import Zoomies from '../customElementDefinitions/Zoomies'

if (typeof window !== 'undefined' && !customElements.get('l-zoomies')) {
  customElements.define('l-zoomies', class extends Zoomies {})
}
