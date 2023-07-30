import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState<string>()
  const [users,setUsers]=useState<User[] >()

  
 const  fetchData = async()=>{
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(datas => {
      setUsers(datas.map((data: User) => new User(data.id, data.name, data.username, data.email)));
     
    })
    .catch(error => {
      console.error("Error fetching users:", error);
    });
 }

 
  useEffect(()=>{
    const interval= setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },100)
    return ()=>{
      clearInterval(interval)
    }
  },[])
  useEffect(()=>{
    const fetchDataTimeOut=setTimeout(fetchData,5000);
    return ()=>{
      clearTimeout(fetchDataTimeOut)
    }
  },[])
  return (
    <>
     <h1>{time}</h1>
     <div>
      {users? <div>{users.map((data:User)=>
      <div key={data.id}><h4>Name:{data.name}</h4><h4>Username:{data.username}</h4> <hr /></div>
      )}</div>:<div>Loading..</div>}
     </div>
    </>
  )
}


export class User{
  id:number;
  name:string;
  username:string;
  email:string;
  constructor(id:number,name:string,username:string,email:string){
    this.id=id;
    this.name=name;
    this.username=username;
    this.email=email;
}
}

export default App
