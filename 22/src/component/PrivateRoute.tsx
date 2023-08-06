import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  
    const {user} = useAuth()

    if (!user) {
        return <Navigate replace={true} to={'/auth/login'}/>
    }
    
    return children
}

export default PrivateRoute