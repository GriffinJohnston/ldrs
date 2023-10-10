import DotPulse from '../customElementDefinitions/DotPulse'

if (typeof window !== 'undefined' && !customElements.get('l-dot-pulse')) {
  customElements.define('l-dot-pulse', class extends DotPulse {})
}
