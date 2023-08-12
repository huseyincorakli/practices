import { useDispatch, useSelector } from "react-redux"
import { logout } from "../stores/AuthStore"
import { RootState } from "../stores"

const Profile = () => {
  const {user} = useSelector((state:RootState)=>state.auth)
  const dispatch =useDispatch()
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <h2>{user&& user}</h2>
      <button  onClick={()=>{dispatch(logout())}}>logout</button>
    </div>
  )
}

export default Profile