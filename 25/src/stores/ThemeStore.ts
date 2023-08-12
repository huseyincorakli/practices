import { createSlice } from '@reduxjs/toolkit'

export  interface Theme{
    dark:boolean
}

 const initialState:Theme= {
    dark:true
}

export const ThemeSlice =createSlice({
    name:'theme',
    initialState,
    reducers:{
        setDark:(state)=>{state.dark=!state.dark}
    }
})


export const {setDark}=ThemeSlice.actions
export default ThemeSlice.reducer