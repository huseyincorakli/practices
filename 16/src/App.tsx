import { useEffect, useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App () {
  const [users, setUser] = useState([])
  const [text,setText]= useState('');
  const [search,setSearch]=useState('');

  useEffect(() => {
     getData()
  }, [])
  
  const getData= async ()=>{
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(datas => {
        setUser(datas)
      })
  }
  const handleChange= (e:any)=>{
   setText(e.target.value)
  }
  const handleSearch=()=>{
    setSearch(text);
  }
  
  const filteredUsers = useMemo(()=>
  users.filter((user) => {
    console.log('Filter function is running ...');
    return  user.name.toLocaleLowerCase().includes(search)
  }),[search]
  )
  return (
    <>
      <input onChange={handleChange} type="text" placeholder='Search' />
      <button onClick={handleSearch}>Search</button>
      <List data={filteredUsers} />
    </>
  )
}

export default App

function List({data}){
  return(
    <ul>
    {data.map((item) => (
   <ListItem key={item.id} item={item} />
 ))}
</ul>
  )
}

const ListItem = ({item}) => {
  return(
    <li>{item.name}</li>
  )
};
