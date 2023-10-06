import LineWobble from '../customElementDefinitions/LineWobble'

if (typeof window !== 'undefined' && !customElements.get('l-line-wobble')) {
  customElements.define('l-line-wobble', class extends LineWobble {})
}

if (typeof window !== 'undefined' && !customElements.get('l-lw')) {
  customElements.define('l-lw', class extends LineWobble {})
}
