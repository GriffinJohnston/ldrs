import ChaoticOrbit from '../customElementDefinitions/ChaoticOrbit'

if (typeof window !== 'undefined' && !customElements.get('uib-chaotic-orbit')) {
  customElements.define('uib-chaotic-orbit', class extends ChaoticOrbit {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-co')) {
  customElements.define('uib-co', class extends ChaoticOrbit {})
}
