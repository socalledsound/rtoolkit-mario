import { store} from '../store'
import { gameSoundsArray, gameSoundsKey } from '../sounds'
import { initBuffer, reverseBuffers, getSoundFileData } from './audio.utils'
// import { sounds } from '../sounds-info/sounds'
// import soundsInfo from '../sounds-info/SoundsInfo'
// import { addAudioContext } from '../sounds-info/soundsInfo.actions'
// // import Voice from '../../redux/granular/granular-objects/Voice'
// // import { getFrame, getRandom, randomizeSettings } from '../../utils'


// import { loaded } from '../granular/granular.actions'
// // import { loaded } from '../../redux/granular/granular.actions'
// import globalSettings from '../../globalSettings';
// import { initSoundFileData } from '../granular/granular.actions';

const numSounds = gameSoundsArray.length

const Context = window.AudioContext || window.webkitAudioContext;

class AudioEngine {
    constructor(){
        this.audioContext = new Context();
        this.masterVolume = this.audioContext.createGain();
        this.buffers = [];
        this.reversedBuffers = [];
        this.soundFileDatas = [];
        this.indexes = Array.from({ length : numSounds}, (el, i) => i);
        this.sources = Array.from({ length: numSounds});
        // this.gainNodes = Array.from({ length : numSounds}, () => this.audioContext.createGain());
        this.playingSounds = Array.from({length : numSounds}, () => false);
        this.init();
    }

    init(){
        this.initSoundBuffers().then((buffers) => {
            this.buffers = buffers;
            this.reversedBuffers = reverseBuffers(buffers);
            this.soundFileDatas = getSoundFileData(buffers);
            // store.dispatch(loaded())
            // store.dispatch(initSoundFileData(this.soundFileDatas));
            // store.dispatch(addAudioContext(this.audioContext))
            // this is where addVoice used to be
           
        })
    }    



    initSoundBuffers = async () => {
        //this.initSoundBuffers().then( (buffers) => console.log(buffers)); 
        return Promise.all(gameSoundsArray.map(src => initBuffer(this.audioContext, src)));   
     }

    play(idx, audioParameters, dir){
        this.gainNodes[idx].gain.value = audioParameters.vol;
        const buf = dir > 0 ? this.buffers[idx] : this.reversedBuffers[idx]; 
        const offset = Math.abs(0)%buf.duration;
        this.sources[idx] = this.audioContext.createBufferSource();
        this.sources[idx].buffer = buf;
        this.gainNodes[idx].connect(this.audioContext.destination);
        this.sources[idx].connect(this.gainNodes[idx]);
        this.sources[idx].loop = true;
        this.sources[idx].playbackRate.value = audioParameters.rate;
        this.sources[idx].start(0, offset);
        this.playingSounds[idx] = true;
    }

    playGrain({ id, bufnum, offset }){
        // console.log(id);
        // console.log(store.getState().controls.voiceSettings)
        // store.dispatch(addItemToPlayingSoundsList(soundsInfo[bufnum]))

        const setting = store.getState().controls.voiceSettings.filter(setting => setting.id === id)[0];
        // console.log(setting, setting.volume);
        const { attack, release, duration } = setting;
        const masterSettings = store.getState().controls.masterSettings;
        const now = this.audioContext.currentTime;
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = setting.volume * masterSettings.volume;
        const env = (attack + release + duration);
        // console.log(attack, duration, release);
        // console.log(env, setting.volume, masterSettings.volume)
        gainNode.gain.linearRampToValueAtTime(setting.volume * masterSettings.volume, now + attack);
        gainNode.gain.linearRampToValueAtTime(0, now + env);
        this.sources[bufnum] = this.audioContext.createBufferSource();
        this.sources[bufnum].buffer = this.buffers[bufnum];
        gainNode.connect(this.audioContext.destination);
        this.sources[bufnum].connect(gainNode);
        this.sources[bufnum].playbackRate.value = setting.rate * masterSettings.rate;
        // console.log(this.buffers[bufnum].duration);
        this.sources[bufnum].start(0, offset, env);  
    }
    
    stop = (idx) => {
        this.sources[idx].stop(0);
        this.playingSounds[idx] = false;
    }


    trigGameSound(key){
        console.log(key)
        const idx = gameSoundsKey[key]
        const buf = this.buffers[idx]
        const gainNode = this.audioContext.createGain();
        const now = this.audioContext.currentTime;
        gainNode.gain.value = 0.6
        gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
        this.sources[idx] = this.audioContext.createBufferSource();
        this.sources[idx].buffer = buf;
        gainNode.connect(this.audioContext.destination);
        this.sources[idx].connect(gainNode);
        this.sources[idx].start(0,0,0.5);
        // this.gainNodes[idx].gain.value = audioParameters.vol;
        // const buf = dir > 0 ? this.buffers[idx] : this.reversedBuffers[idx]; 
        // const offset = Math.abs(0)%buf.duration;
        // this.sources[idx] = this.audioContext.createBufferSource();
        // this.sources[idx].buffer = buf;
        // this.gainNodes[idx].connect(this.audioContext.destination);
        // this.sources[idx].connect(this.gainNodes[idx]);
        // this.sources[idx].loop = true;
        // this.sources[idx].playbackRate.value = audioParameters.rate;
        // this.sources[idx].start(0, offset);
        // this.playingSounds[idx] = true;
    }



    trig(idx, audioParameters, dir){
        if(this.playingSounds[idx]){
            this.stop(idx);
        }
        else {
            this.play(idx, audioParameters, dir);
        }
    }

    trigAll(dir){

        this.indexes.forEach(idx => {   
            this.trig(idx, {vol : 1.0, rate: 1.0, offset: 0}, dir);
        })
    }

    updatePitch = (idx, val) => {
        this.sources[idx].playbackRate.value = val;
    }
    

    updateVolume = (idx, val) => {
        this.gainNodes[idx].gain.value = val;
    }
}

export default AudioEngine