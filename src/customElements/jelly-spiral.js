import JellySpiral from '../customElementDefinitions/JellySpiral'

if (typeof window !== 'undefined' && !customElements.get('uib-jelly-spiral')) {
  customElements.define('uib-jelly-spiral', class extends JellySpiral {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-jsprl')) {
  customElements.define('uib-jsprl', class extends JellySpiral {})
}
