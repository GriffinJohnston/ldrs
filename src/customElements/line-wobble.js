import LineWobble from '../customElementDefinitions/LineWobble'

if (typeof window !== 'undefined' && !customElements.get('uib-line-wobble')) {
  customElements.define('uib-line-wobble', class extends LineWobble {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-lw')) {
  customElements.define('uib-lw', class extends LineWobble {})
}
