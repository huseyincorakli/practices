import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/Profile'}>Profile</NavLink>
      <NavLink to={'/Login'}>Login</NavLink>
    </div>
  )
}

export default Header
