import { useEffect, useState } from "react";
import Test from "./assets/components/Test";
import {User} from './contracts/User'

function App() {
  const [user, setUser] = useState<User | null>(null);
  let [id,setId]=useState<number>(6);

 

  useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then(res=>res.json())
   .then(data=>{
    const newUser = new User(data.name,data.username,data.email,data.address.city);
    setUser(newUser);
   })
   .catch((error) => {
    console.error("Error fetching user:", error);
    setUser(null);
  });
  return()=>{}
  },[id])

  console.log(user);
  
const Decrease=()=>{
  if (id>=10) {
    setId(10)
  }
  else{
    setId(id+=1)
  }
}
const Increase= ()=>{
  if (id<=1) {
    setId(1)
  }
  else{
    setId(id-=1)
  }
}

  return (
    <>
    {id}
    <br />
    <button onClick={Increase} >Geri</button>
    <button onClick={Decrease}>İleri</button>
    
      <Test user={user} ></Test>
    </>
  )
}

export default App
