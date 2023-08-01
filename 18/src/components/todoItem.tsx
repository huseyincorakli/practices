import React, { memo } from 'react'

const TodoItem = ({todo}) => {
    console.log('TodoItem Rendered',todo);
    
  return (
    <div>{todo}</div>
  )
}

export default  memo(TodoItem)