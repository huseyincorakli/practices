import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState{
    value:number;
}

const initialValue:CounterState={
    value:0
}

export const  counterSlice = createSlice({
    name:'counter',
    initialState:initialValue,
    reducers:{
        increment:(state)=> {state.value+=1},
        decrement:(state)=>{state.value-=1},
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload;
        },
        decrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value-=action.payload;
        }
    }
})

export const {increment,decrement,incrementByAmount,decrementByAmount} =counterSlice.actions
export default counterSlice.reducer