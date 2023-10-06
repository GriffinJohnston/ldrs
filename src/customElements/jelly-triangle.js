import JellyTriangle from '../customElementDefinitions/JellyTriangle'

if (typeof window !== 'undefined' && !customElements.get('l-jt')) {
  customElements.define('l-jt', class extends JellyTriangle {})
}
