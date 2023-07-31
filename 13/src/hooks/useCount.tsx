import { useState } from "react";
type CountHookReturn = [
    number,
    {
        Increment:()=>void;
        Decrement:()=>void;
        Reset:()=>void;
    }
]
export const useCount = (initialState=0):CountHookReturn=>{
    const [state,setState]=useState(initialState);

    const _Increment=()=>setState(state=>state+1);
    const _Decrement=()=>setState(state=>state-1);
    const _Reset =()=>setState(0)

    return[
        state,
        {
            Increment:_Increment,
            Decrement:_Decrement,
            Reset:_Reset
        }
    ]
}