import JellySpinner from '../customElementDefinitions/JellySpinner'

if (typeof window !== 'undefined' && !customElements.get('l-jelly-spinner')) {
  customElements.define('l-jelly-spinner', class extends JellySpinner {})
}

if (typeof window !== 'undefined' && !customElements.get('l-jspn')) {
  customElements.define('l-jspn', class extends JellySpinner {})
}
