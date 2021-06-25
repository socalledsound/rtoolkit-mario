import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_STATE } from '../../app/INITIAL_STATE'

export const cloudSlice = createSlice({
    name: 'cloud',
    initialState : INITIAL_STATE.cloud,
    reducers : {
        move : (state) => {

        },
    }
})


export const selectCloudPosition = (state) => state.cloud.position

export default cloudSlice.reducer;