import { useState } from "react";
type ToggleHookReturnType = [
    boolean,
    {
      setToggle: () => void;
    }
  ];
export const useBoolean=(initialSate=false):ToggleHookReturnType=>{
    const [state,setState]= useState(initialSate);

    const handleToggle=()=>setState(!state);

    return[
        state,
        {
            setToggle:handleToggle
        }
    ]

}