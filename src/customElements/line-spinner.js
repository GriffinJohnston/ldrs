import LineSpinner from '../customElementDefinitions/LineSpinner'

if (typeof window !== 'undefined' && !customElements.get('l-line-spinner')) {
  customElements.define('l-line-spinner', class extends LineSpinner {})
}
