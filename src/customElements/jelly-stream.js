import JellyStream from '../customElementDefinitions/JellyStream'

if (typeof window !== 'undefined' && !customElements.get('uib-jelly-stream')) {
  customElements.define('uib-jelly-stream', class extends JellyStream {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-jst')) {
  customElements.define('uib-jst', class extends JellyStream {})
}
