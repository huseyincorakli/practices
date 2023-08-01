import React, { memo } from 'react'
import TodoItem from './todoItem';


const Todos = ({todos}) => {
    console.log('Todos Rendered');
    
  return (
    <div>
        Todos:
      {todos.map((todo,index)=>
      <TodoItem key={index} todo={todo}/>
      )}
    </div>
  )
}

export default memo(Todos)