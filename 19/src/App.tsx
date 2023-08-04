import { useState,useEffect,FC } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import { MainContext } from './context/MainContext'


const App:FC = () =>  {
  const [theme,setTheme] = useState<string>('dark')
  const [methods,setMethods]= useState<object>({})

  const appendMethods= (newMethods:object)=>{
    setMethods({
      ...methods,
      ...newMethods
    })
  }
    useEffect(()=>{
      document.body.className=theme;
    },[theme])
  
    const data = {
      theme,
      setTheme,
      appendMethods,
      ...methods,
    }

  return (
    <MainContext.Provider value={data}>
      <Header/>
      <Section/>
      <Footer/>
    </MainContext.Provider>
  )
}

export default App
