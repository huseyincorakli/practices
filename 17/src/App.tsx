import React, { useCallback, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

interface User{
  id:string;
  name:string;
}

const App:React.FC= ()=> {
  console.log('Render: App');
  const [users,setUsers]=useState<User[]>([
    {id:'a',name:'Hüseyin'},
    {id:'b',name:'Hacı'},
    {id:'c',name:'Mustafa'}
  ])
  const [text, setText] = useState<string>('')

  const handleText = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }
  const addUser= ()=>{
    setUsers(users.concat({id:uuidv4(),name:text}))
  }
  const handleRemove=useCallback((id:string)=>setUsers(users.filter((user)=>user.id!==id)),[users])
  
  return (
    <>
      <input type='text' onChange={handleText} />
      <button onClick={addUser}>Add User</button>
      <List list={users} onRemove={handleRemove} />
    </>
  )
}

interface ListProps{
  list:User[],
  onRemove:(id: string) => void
}

const List:React.FC<ListProps> =  ({list,onRemove})=> {
  console.log('Render: List');
  return useMemo(()=>(
    <>
      {list.map((item)=>(
        <ListItem key={item.id} item={item} onRemove={onRemove}/>
      ))}
    </>
  ),[list])
}

interface ListItemProps{
  item:User
  onRemove:(id: string) => void
}

const ListItem:React.FC<ListItemProps> = ({onRemove,item}) => {
  console.log('Render: List Item');

  
  return useMemo(() => (
    <li className='list-item'>
      <div>{item.name}</div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  ), [onRemove]);
};

export default App
