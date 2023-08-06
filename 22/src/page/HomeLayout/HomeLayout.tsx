import { NavLink, Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <nav className='flex sm:justify-center space-x-4'>
        <NavLink
          className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
          className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          to={'/contact'}
        >
          Contact
        </NavLink>
        <NavLink
          className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          to={'/admin'}
        >
          Admin
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
