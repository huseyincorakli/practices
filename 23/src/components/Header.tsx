import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store"
import { changeTheme } from "../stores/Site"

const Header = () => {
  const {dark,language} = useSelector((state:RootState)=>state.site)
  const dispatch=useDispatch()

  const handleChangeTheme=()=>{
    dispatch(changeTheme())
  }
  return (
    <div>
      <h1>Header Component</h1>
      <p>güncel theme : {dark?'dark':'light'}</p>
      <p>güncel dil : {language}</p>
      <button onClick={handleChangeTheme} >{dark?'light':'dark'}</button>
    </div>
  )
}

export default Header