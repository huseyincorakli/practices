import { createContext, useState,useContext } from "react";

interface IAuthContext{
    user:boolean;
    setUser:React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthContext = createContext<IAuthContext>({
    user:false,
    setUser:()=>{}
});

export  const AuthProvider = ({children})=>{
const [user,setUser]=useState(false);

const data = {
    user,setUser
}

    return (    
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)