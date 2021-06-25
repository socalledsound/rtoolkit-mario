// sounds downloaded from 
// https://orangefreesounds.com/?s=mario

import CoinSound from '../assets/Mario-coin-sound.mp3'
import ThemeSongSound from '../assets/Mario-theme-song.mp3'
import JumpSound from '../assets/Mario-jump-sound.mp3'

export const gameSoundsArray = [CoinSound, ThemeSongSound, JumpSound]
export const gameSoundsKey = {
    'coin': 0,
    'theme': 1,
    'jump': 2,
}


// new Map()
// gameSounds.set('coin', CoinSound)
// gameSounds.set('themesong', ThemeSongSound)
// gameSounds.set('jump', JumpSound)

// export default gameSounds