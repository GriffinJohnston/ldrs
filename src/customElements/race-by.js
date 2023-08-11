import RaceBy from '../customElementDefinitions/RaceBy'

if (typeof window !== 'undefined' && !customElements.get('uib-race-by')) {
  customElements.define('uib-race-by', class extends RaceBy {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-rb')) {
  customElements.define('uib-rb', class extends RaceBy {})
}
