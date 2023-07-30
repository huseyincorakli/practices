import './App.css'
import { IPerson } from './contracts/IPerson'
import { IDepartmant } from './contracts/IDepartmant'
import { Person } from './components/Person'
import { Department } from './components/Departmant'
import { useEffect, useState } from 'react'

function App () {
  const [time,setTime]=useState<string>();
  const PersonObject: IPerson = {
    id:'abc',
    firstName: 'Hüseyin',
    lastName: 'Çoraklı',
    personEmail: 'huseyincorakli46@gmail.com'
  }

  const departmantObject: IDepartmant = {
    departmantName: 'Software Developer',
    departmantLocation: 'Yozgat '
  }
  useEffect(()=>{
    const clock= setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },100)
    return()=>{
      clearInterval(clock)
    }
  },[])

  return (
    <>
     {time&& time }
      <Person {...PersonObject} />
      <hr />
      <Department  {...departmantObject} personid={PersonObject.id} />
      <hr />
    </>
  )
}



export default App
