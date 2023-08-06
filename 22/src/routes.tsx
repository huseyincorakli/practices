import PrivateRoute from './component/PrivateRoute'
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/Home'
import HomeLayout from './page/HomeLayout/HomeLayout'
import Admin from './page/Admin'
import AuthLayout from './page/AuthLayout/AuthLayout'
import Login from './page/Login'
import { ReactElement } from 'react'

interface Route {
  path: string
  element: ReactElement
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'admin',
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    )
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
]
