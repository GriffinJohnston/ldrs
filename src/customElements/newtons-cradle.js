import NewtonsCradle from '../customElementDefinitions/NewtonsCradle'

if (typeof window !== 'undefined' && !customElements.get('l-newtons-cradle')) {
  customElements.define('l-newtons-cradle', class extends NewtonsCradle {})
}
