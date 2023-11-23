"use client"

import { configureStore } from "@reduxjs/toolkit"
import artistsReducer from "./features/artists/artistsSlice"

export const store = configureStore({
    reducer: {
        artists: artistsReducer
    }
})