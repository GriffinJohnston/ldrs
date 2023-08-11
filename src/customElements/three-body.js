import ThreeBody from '../customElementDefinitions/ThreeBody'

if (typeof window !== 'undefined' && !customElements.get('uib-three-body')) {
  customElements.define('uib-three-body', class extends ThreeBody {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-tb')) {
  customElements.define('uib-tb', class extends ThreeBody {})
}
