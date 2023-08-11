import DotPulse from '../customElementDefinitions/DotPulse'

if (typeof window !== 'undefined' && !customElements.get('uib-dot-pulse')) {
  customElements.define('uib-dot-pulse', class extends DotPulse {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-dp')) {
  customElements.define('uib-dp', class extends DotPulse {})
}
