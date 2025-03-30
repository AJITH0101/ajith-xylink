import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    stage:0,
    navBar:null
}

const selectSlice = createSlice({
    name:"selector",
    initialState:INITIAL_STATE,
    reducers:{
        autoShift:(state,action)=>{           
            state.stage = action.payload;
            
        },
        menuIconAction:(state,action)=>{
            state.navBar = action.payload
        }
    }
})

export const {autoShift, menuIconAction} = selectSlice.actions
export default selectSlice.reducer;