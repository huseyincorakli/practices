import { ChangeEvent, useCallback, useState } from 'react'
import './App.css'
import Header from './components/header'
import Todos from './components/todos'
import AddTodo from './components/addTodo'

const App = () => {
  console.log('App Rendered')
  const [count, setCount] = useState<number>(0)
  const [todos, setTodos] = useState<Array<string>>(['abc','xyz','dlc'])
  const [text, setText] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleSubmit = useCallback((
    (e: SubmitEvent) => {
      e.preventDefault()
      if (text.trim() == '') {
        alert('empty')
      } else {
        setTodos([...todos, text])
        setText('')
      }
    }
  ),[text])
  return (
    <>
      {count}
      <button onClick={() => {setCount(count => count + 1)}}>+</button>
      <Header />
      <AddTodo
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Todos todos={todos} />
    </>
  )
}

export default App
