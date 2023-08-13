import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../stores'


const HomeLayout = () => {
  const {dark} = useSelector((state:RootState)=>state.theme)

  const theme = dark? 'dark':'light';
  
  return (
    <div className={theme}>
    <Header />
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default HomeLayout