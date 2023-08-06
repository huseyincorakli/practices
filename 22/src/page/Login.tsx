import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {setUser,user} =useAuth()
  const navigate= useNavigate()

  const handleSignIn  = ()=>{
    setUser(true)
    navigate('/')
  }

  
  
  return (
    <div>
    <h3>Login Page</h3>
    <button onClick={handleSignIn} >Sign In</button>
    </div>
    
  )
}

export default Login