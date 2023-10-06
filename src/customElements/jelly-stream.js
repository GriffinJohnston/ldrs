import JellyStream from '../customElementDefinitions/JellyStream'

if (typeof window !== 'undefined' && !customElements.get('l-jelly-stream')) {
  customElements.define('l-jelly-stream', class extends JellyStream {})
}

if (typeof window !== 'undefined' && !customElements.get('l-jst')) {
  customElements.define('l-jst', class extends JellyStream {})
}
