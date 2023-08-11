import NewtonsCradle from '../customElementDefinitions/NewtonsCradle'

if (typeof window !== 'undefined' && !customElements.get('uib-nc')) {
  customElements.define('uib-nc', class extends NewtonsCradle {})
}
