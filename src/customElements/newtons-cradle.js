import NewtonsCradle from '../customElementDefinitions/NewtonsCradle'

if (typeof window !== 'undefined' && !customElements.get('l-nc')) {
  customElements.define('l-nc', class extends NewtonsCradle {})
}
