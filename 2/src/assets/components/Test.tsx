import { useState } from "react"

const Test  = ({user})=> {
const [show,setShow]=useState<boolean>(false);




  return (
    <div>
        <button onClick={()=>setShow(show=>!show)}>{show?'Gizle':'Göster'}</button>
      {
        show&& 
        <div>
        <h2>Full Name : {user.name} </h2>
        <h2>Username :{user.username} </h2>
        <h2>City : {user.city}</h2>
        <h2>Email :{user.email} </h2>
      </div>
      }
    </div>
  )
}

export default Test
