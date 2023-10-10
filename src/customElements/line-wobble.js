import LineWobble from '../customElementDefinitions/LineWobble'

if (typeof window !== 'undefined' && !customElements.get('l-line-wobble')) {
  customElements.define('l-line-wobble', class extends LineWobble {})
}
