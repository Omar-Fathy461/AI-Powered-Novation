import { configureStore } from "@reduxjs/toolkit";
import aiSlice from './slices/aiSlice'
const store = configureStore({
    reducer:{
        ai :aiSlice
    },
    devTools:true
})

export default store