import ChaoticOrbit from '../customElementDefinitions/ChaoticOrbit'

if (typeof window !== 'undefined' && !customElements.get('l-chaotic-orbit')) {
  customElements.define('l-chaotic-orbit', class extends ChaoticOrbit {})
}

if (typeof window !== 'undefined' && !customElements.get('l-co')) {
  customElements.define('l-co', class extends ChaoticOrbit {})
}
