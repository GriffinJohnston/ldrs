import JellySpiral from '../customElementDefinitions/JellySpiral'

if (typeof window !== 'undefined' && !customElements.get('l-jelly-spiral')) {
  customElements.define('l-jelly-spiral', class extends JellySpiral {})
}

if (typeof window !== 'undefined' && !customElements.get('l-jsprl')) {
  customElements.define('l-jsprl', class extends JellySpiral {})
}
