import { configureStore } from "@reduxjs/toolkit";
import selecReducer from './select.js'

export const store = configureStore({
    reducer:{
        select:selecReducer
    }
})