import { createSlice, createSelector } from '@reduxjs/toolkit'
import { INITIAL_STATE } from '../../app/INITIAL_STATE'

export const coinsSlice = createSlice({
    name: 'coins',
    initialState: INITIAL_STATE.coins,
    reducers : {
        collectCoin : (state, action) => {   
            return {
                ...state,
                collected : state.collected.map((el, idx) => idx === action.payload ? 1 : el)
            }
        },
        addCollectedCoin: (state) => {
            state.numCoinsCollected += 1
        }
    }
})


export const selectCoinPositions = (state) => state.coins.positions
export const selectCoinPositionByIndex = (idx) => createSelector(
    selectCoinPositions,
    coinPositions => coinPositions.filter((item, coinIndex) => idx === coinIndex  )
)
export const selectCollected = (state) => state.coins.collected
export const selectUncollectedCoinPositions = createSelector(
    [selectCoinPositions, selectCollected],
    (coinPositions, collected) => coinPositions.filter((position, idx) => collected[idx] < 1)
)
export const selectCoinSize = (state) => state.coins.size
export const selectNumCoinsCollected = ( state ) => state.coins.numCoinsCollected

export const { collectCoin, addCollectedCoin } = coinsSlice.actions;

export default coinsSlice.reducer