import { useEffect, useState } from 'react'
import axios from 'axios'

interface User{
  title:string;
}

const About = () => {
  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    setTimeout(() => {}, 20000)
    axios.get<User[]>('https://jsonplaceholder.typicode.com/photos').then(res => {
      setUser(res.data)
    })
  }, [])

 

  return (
  <div>
    {user.length==0 ? <p>loading..</p> :user.map((user)=>(<p>{user.title}</p>))} 
  </div>)

}

export default About
