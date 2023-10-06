import ThreeBody from '../customElementDefinitions/ThreeBody'

if (typeof window !== 'undefined' && !customElements.get('l-three-body')) {
  customElements.define('l-three-body', class extends ThreeBody {})
}

if (typeof window !== 'undefined' && !customElements.get('l-tb')) {
  customElements.define('l-tb', class extends ThreeBody {})
}
