import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  

  const handleLogOut = (): void => {
    setUser(false)
    navigate('/')
  }

  return (
    <div>
      <p>Profile Bilgileri</p>
      <button onClick={handleLogOut}>Çıkış yap</button>
    </div>
  )
}

export default Profile
