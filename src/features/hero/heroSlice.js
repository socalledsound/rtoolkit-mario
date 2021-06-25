import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from '../../app/INITIAL_STATE'
import { selectCoinPositions, selectCollected, collectCoin, selectCoinSize} from '../coins/coinsSlice'
import { checkCollision } from '../../app/utils.js'
import { trigGameSound } from '../../app/audioMiddleware/audio.actions'


export const heroSlice = createSlice({
    name: 'hero',
    initialState : INITIAL_STATE.hero,
    reducers : {
        moveHero : (state, action) => {
            // console.log(state)
            const newPosition = {...state.position}
            newPosition.x += action.payload.x
            newPosition.y += action.payload.y
            state.position = newPosition 
        },
    }
})

export const selectHeroSize = (state) => state.hero.size


export const selectHeroPosition = (state) => {
    // console.log(state)
    return state.hero.position
}

const { moveHero } = heroSlice.actions;

export const checkCoin = (coin, idx) => (dispatch, getState) => {
    // const coinPosition = selectCoinPositionByIndex(idx)(getState())[0]
    const coinSize = selectCoinSize(getState())
    const heroSize = selectHeroSize(getState())
    const heroPosition = selectHeroPosition(getState())
    const collision = checkCollision(heroPosition, heroSize, coin, coinSize)
    if (collision) {
        const uncollectedCoins = selectCollected(getState())
        const val = uncollectedCoins[idx]
        console.log(val)
        if(val === 0){
            dispatch(collectCoin(idx));
            dispatch(trigGameSound('coin'))
       }
    }
  };

  export const updateHero = (action) => (dispatch, getState) => {
      dispatch(moveHero(action))
      const coins = selectCoinPositions(getState()) 
      
      coins.forEach((coin, idx) => dispatch(checkCoin(coin, idx)))
  }



export default heroSlice.reducer;