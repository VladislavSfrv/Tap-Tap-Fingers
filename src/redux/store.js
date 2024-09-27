import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./Slices/themeSwitchSlice.js"

const store = configureStore({
    reducer:{
        theme: themeReducer,
    }
})

export default store;