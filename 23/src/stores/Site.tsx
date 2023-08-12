import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SiteState{
    dark:boolean,
    language:string
}

const initialState:SiteState={
    dark:true,
    language:'tr'
}

const siteSlice = createSlice({
    name:"site",
    initialState,
    reducers:{
        changeTheme:(state)=>{state.dark=!state.dark},
        changeLanguage:(state,action:PayloadAction<string>)=>{
            state.language=action.payload
        }
    }
})

export const {changeTheme,changeLanguage}=siteSlice.actions
export default siteSlice.reducer
