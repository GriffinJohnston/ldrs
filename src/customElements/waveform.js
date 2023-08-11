import Waveform from '../customElementDefinitions/Waveform'

if (typeof window !== 'undefined' && !customElements.get('uib-waveform')) {
  customElements.define('uib-waveform', class extends Waveform {})
}

if (typeof window !== 'undefined' && !customElements.get('uib-wf')) {
  customElements.define('uib-wf', class extends Waveform {})
}
