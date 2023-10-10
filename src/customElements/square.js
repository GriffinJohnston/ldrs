import Square from '../customElementDefinitions/Square'

if (typeof window !== 'undefined' && !customElements.get('l-square')) {
  customElements.define('l-square', class extends Square {})
}
