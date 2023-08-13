import { configureStore } from '@reduxjs/toolkit'
import  ThemeSlice  from './ThemeStore'
import  LanguageSlice  from './LanguageStore'


export const store = configureStore({
    reducer: {
        theme:ThemeSlice,
        language:LanguageSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch