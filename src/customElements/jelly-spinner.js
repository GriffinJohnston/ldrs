import JellySpinner from '../customElementDefinitions/JellySpinner'

if (typeof window !== 'undefined' && !customElements.get('uib-jelly-spinner')) {
  customElements.define('uib-jelly-spinner', class extends JellySpinner {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-jspn')) {
  customElements.define('uib-jspn', class extends JellySpinner {})
}
