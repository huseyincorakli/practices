import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { RootState } from "../stores";
import { setDark } from "../stores/ThemeStore";

const Header = () => {
  const {dark} =useSelector((state:RootState)=>state.theme)
  const dispatch= useDispatch()
  
  const changeTheme=()=>{
    dispatch(setDark())
  }
  console.log(dark);
  return (
    <>
    <nav>
    <h3>Header</h3>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'blog'}>Blog</NavLink>
    <NavLink to={'profile'}>Profile</NavLink>
    <button onClick={changeTheme}>Dark Mod : {dark?'On':'Off'}</button>
    <p>Dil:Türkçe</p>
    </nav>
    <hr />
    </>
  )
}

export default Header