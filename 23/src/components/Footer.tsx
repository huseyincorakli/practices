import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../stores/Site";
import { RootState } from "../Store";

const Footer = () => {
    const dispatch =useDispatch();
    const {language}=useSelector((state:RootState)=>state.site)

    const handleChangeLanguage = (language:string)=>{
        dispatch(changeLanguage(language))
    }

  return (
    <div>
        <h1>Footer</h1>
        <button onClick={()=>{handleChangeLanguage('en')}}>{language=='en'?'English':'İngilizce'}</button>
        <button onClick={()=>{handleChangeLanguage('tr')}}>{language=='en'?'Turkish':'Türkçe'}</button>
    </div>
  )
}

export default Footer