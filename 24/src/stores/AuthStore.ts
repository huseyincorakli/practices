import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User{
    user:boolean|string
}

const initialState:User={
    user:false
}

export const AuthSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action:PayloadAction<string>)=>{
            state.user=action.payload
        },
        logout:(state)=>{
            state.user=false
        }
    }
    
})

export const {login,logout}=AuthSlice.actions
export default AuthSlice.reducer