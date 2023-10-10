import TailChase from '../customElementDefinitions/TailChase'

if (typeof window !== 'undefined' && !customElements.get('l-tail-chase')) {
  customElements.define('l-tail-chase', class extends TailChase {})
}
