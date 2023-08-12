import { Route, Routes,Navigate } from 'react-router-dom'
import routes from './routes/routes'
import Header from './pages/Header'
import Footer from './pages/Footer'
import './App.css'
import { connect, useSelector } from 'react-redux'
import { RootState } from './stores'

const mapStateProps= (state:RootState) =>({
  user:state.auth
})

function App () {
  const {user}= useSelector((state:RootState)=>state.auth)
  return (
    <>
      <Header />
      <Routes>
        {routes.map(route => (
          <Route 
          key={route.path} 
          path={route.path} 
          element={route.auth && !user? <Navigate to={'/login'}/> :route.component }/>
        ))}
      </Routes>
      <Footer/>
    </>
  )
}

export default connect(mapStateProps)(App)
