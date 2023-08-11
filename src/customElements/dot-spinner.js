import DotSpinner from '../customElementDefinitions/DotSpinner'

if (typeof window !== 'undefined' && !customElements.get('uib-dot-spinner')) {
  customElements.define('uib-dot-spinner', class extends DotSpinner {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-ds')) {
  customElements.define('uib-ds', class extends DotSpinner {})
}
