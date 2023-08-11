import JellyTriangle from '../customElementDefinitions/JellyTriangle'

if (typeof window !== 'undefined' && !customElements.get('uib-jt')) {
  customElements.define('uib-jt', class extends JellyTriangle {})
}
