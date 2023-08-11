import Ring from '../customElementDefinitions/Ring'

if (typeof window !== 'undefined' && !customElements.get('uib-ring')) {
  customElements.define('uib-ring', class extends Ring {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-r')) {
  customElements.define('uib-r', class extends Ring {})
}
