import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <nav>
      {/* activeLink diye class atar yoksa default olarak active classı atar */}
      <NavLink className={({ isActive }) => isActive && 'activeLink'} to={'/'}>
        Home
      </NavLink>
      <NavLink to={'/blog'}>Blog</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/profile'}>Profile</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout
