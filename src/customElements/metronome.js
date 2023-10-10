import Metronome from '../customElementDefinitions/Metronome'

if (typeof window !== 'undefined' && !customElements.get('l-metronome')) {
  customElements.define('l-metronome', class extends Metronome {})
}
