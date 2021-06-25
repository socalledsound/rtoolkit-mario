import AudioActionTypes from './audio.actions.types'
import AudioEngine from './AudioEngine'
export const audio = new AudioEngine();

const audioMiddleware = store => {

    
    return next => action => {
        switch(action.type){
            case AudioActionTypes.TRIG_GAME_SOUND :
                audio.trigGameSound(action.payload)
                break
            case AudioActionTypes.START_THEME_MUSIC :
                audio.loopTheme()
                break
            default :
                break
        }
        next(action)
    }
}

export default audioMiddleware