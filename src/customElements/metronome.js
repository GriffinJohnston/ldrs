import Metronome from '../customElementDefinitions/Metronome'

if (typeof window !== 'undefined' && !customElements.get('l-metronome')) {
  customElements.define('l-metronome', class extends Metronome {})
}

if (typeof window !== 'undefined' && !customElements.get('l-me')) {
  customElements.define('l-me', class extends Metronome {})
}
