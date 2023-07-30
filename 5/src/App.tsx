import React from 'react'
import './App.css'
import Input from "./components/input"
import Todos from "./components/todos"
import {useState,useEffect} from 'react'
import { Todo } from './contracts/todo'

function App() {
  const[todos,setTodos]= useState<Todo[]>();
  useEffect(()=>{
    getData()
  },[])

  const getData= async()=>{
    await fetch('/data/todos.json')
    .then(response=>response.json())
    .then(datas=>{
      setTodos(datas)
    })
  }

  console.log('todos:',todos);
  
  return (
    <React.Fragment>
     <header className='my-3'><h1 className='text-3xl'>Welcome to Todo App </h1></header>
     <section>
      <Input setTodos={setTodos} ></Input>
      {todos !== null && <Todos todos={todos} setTodos={setTodos}></Todos>}
     </section>
    </React.Fragment>
  )
}

export default App
