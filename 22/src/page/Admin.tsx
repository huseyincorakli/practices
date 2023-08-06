import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const {user,setUser}=useAuth();
  const navigate = useNavigate()
  const handleLogOut = ()=>{

    setUser(false);
    navigate('/');
  }
 
  return (
    <div>
      <h3>Admin Dashboard</h3>
      {user && <button onClick={handleLogOut} className="bg-grey-lighter border rounded-lg opacity-75 p-2 shadow-md">Log Out</button>}
    </div>
  )
}

export default Admin