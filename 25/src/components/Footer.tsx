import { useSelector } from "react-redux"
import { RootState } from "../stores"


const Footer = () => {
  const {dark}=useSelector((state:RootState)=>state.theme)
  
  return (
    <footer>
      <h3>Footer</h3>
      <button>en</button>
      <button>tr</button>
      <p>{dark?'Dark':'Light' }</p>
    </footer>
  )
}

export default Footer