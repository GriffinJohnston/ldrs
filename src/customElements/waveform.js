import Waveform from '../customElementDefinitions/Waveform'

if (typeof window !== 'undefined' && !customElements.get('l-waveform')) {
  customElements.define('l-waveform', class extends Waveform {})
}
