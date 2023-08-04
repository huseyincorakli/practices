import { useState, useEffect,FC } from "react"
import { MainContext, useContext } from "../context/MainContext"

const Header:FC = () => {
  const staticLogoText:string='Logo Text'
  const [logoText,setLogoText]=useState<string>();
  const {theme,appendMethods}= useContext(MainContext)
  
  useEffect(()=>{
    appendMethods({setLogoText})
  },[])
  

  return (
    <div className="container"> 
    <h2>{logoText?logoText:staticLogoText }</h2>
    <p>Current Theme :{theme}</p>
    </div>
  )
}

export default Header