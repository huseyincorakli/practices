import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
export interface Language{
    language:string;
}
const initialState:Language={
    language:'tr'
}

export const LanguageSlice = createSlice({
    name:'language',
    initialState,
    reducers:{
        setLanguage:(state,action:PayloadAction<string>)=>{
            state.language=action.payload
        }
    }
})

export const {setLanguage}=LanguageSlice.actions
export default LanguageSlice.reducer