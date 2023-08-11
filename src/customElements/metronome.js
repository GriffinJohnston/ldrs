import Metronome from '../customElementDefinitions/Metronome'

if (typeof window !== 'undefined' && !customElements.get('uib-metronome')) {
  customElements.define('uib-metronome', class extends Metronome {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-met')) {
  customElements.define('uib-met', class extends Metronome {})
}
