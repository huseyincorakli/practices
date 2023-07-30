const Todos = ({ todos,setTodos }) => {
   const handleFinishClick=(todoid)=>{
    const updatedTodos = todos.map((todo) =>
      todo.id === todoid ? { ...todo, isComplete: true } : todo
    );
    setTodos(updatedTodos);
    }
  return (
    <>
      {todos
        ? todos.map(todo => (
            <div className='my-3' key={todo.id}>
              <ul className='space-y-2'>
                {todo.isComplete==false ? (
                  <li className='flex items-center justify-between text-black  bg-blue-100 py-2 px-4 rounded'>
                    {todo.task}
                    <button onClick={() => handleFinishClick(todo.id)} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded'>
                      Finish
                    </button>
                  </li>
                ) : (
                  <li className='flex items-center justify-between text-black  line-through bg-blue-100 py-2 px-4 rounded'>
                    {todo.task}
                  </li>
                )}
              </ul>
            </div>
          ))
        : 'loading...'}
    </>
  )
}

export default Todos
