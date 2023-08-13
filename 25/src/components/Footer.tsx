import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../stores"
import { setLanguage } from "../stores/LanguageStore"


const Footer = () => {
  const {dark}=useSelector((state:RootState)=>state.theme)
  const dispatch = useDispatch()
  
  const  changeLanguage =(language:string)=>{
    dispatch(setLanguage(language))
  }
  return (
    <footer>
      <h3>Footer</h3>
      <button onClick={()=>{changeLanguage('en')}}>en</button>
      <button onClick={()=>{changeLanguage('tr')}}>tr</button>
      <p>{dark?'Dark':'Light' }</p>
    </footer>
  )
}

export default Footer