import DotSpinner from '../customElementDefinitions/DotSpinner'

if (typeof window !== 'undefined' && !customElements.get('l-dot-spinner')) {
  customElements.define('l-dot-spinner', class extends DotSpinner {})
}
