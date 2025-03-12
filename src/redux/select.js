import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    stage:0
}

const selectSlice = createSlice({
    name:"selector",
    initialState:INITIAL_STATE,
    reducers:{
        autoShift:(state,action)=>{           
            state.stage = action.payload;
            
        }
    }
})

export const {autoShift} = selectSlice.actions
export default selectSlice.reducer