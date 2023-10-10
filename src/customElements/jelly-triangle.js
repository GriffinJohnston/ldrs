import JellyTriangle from '../customElementDefinitions/JellyTriangle'

if (typeof window !== 'undefined' && !customElements.get('l-jelly-triangle')) {
  customElements.define('l-jelly-triangle', class extends JellyTriangle {})
}
