import React, { useState } from 'react'
import './App.css'

const users = [
  { id: '1', name: 'Huseyin' },
  { id: '2', name: 'Haci' },
  { id: '3', name: 'Mustafa' },
];

function App() {
  const [text, setText] = useState('')
  const [search,setSearch]=useState('')

  const handleText = (event) => {
    setText(event.target.value)
  };

  const handleSearch = () => {
    setSearch(text)
  };

//! useMemo Kullanmaz isek ===> her input girişinde data yeniden çağrılacak ve bunu 
//?  bir sunucudan aldığımızı düşünürsek uygulamamız yavaşlayacaktır 

//! useMemo kullandığımızda ise ====> istek sadece handleSearh durumunda gidecektir....
  
  const filteredUsers = React.useMemo(()=>
  users.filter((user) => {
    console.log('Filter function is running ...');
    return  user.name.toLocaleLowerCase().includes(search)
  }),[search]
  )

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>

    <List data= {filteredUsers} />
  </div>
  )
}

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

export default App
