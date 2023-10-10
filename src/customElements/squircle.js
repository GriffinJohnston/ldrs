import Squircle from '../customElementDefinitions/Squircle'

if (typeof window !== 'undefined' && !customElements.get('l-squircle')) {
  customElements.define('l-squircle', class extends Squircle {})
}
