import {useState} from 'react'

const Input = ({setTodos}) => {
    const [task,setTask]=useState('')
    const handleInputChange=(event)=>{
        const inputValue=event.target.value;
        setTask(inputValue);
    }
    
    const handleAddClick = () => {
        if (task.trim() !== '') {
          setTodos((prevTodos) => [
            ...prevTodos,
            console.log(prevTodos),
            
            { id: prevTodos.length + 1, task: task, isComplete: false }
          ]);
          setTask('');
          
          //set todos.json again
        }
      };
  return (
    <div className="flex items-center">
    <input onChange={handleInputChange} type="text" className="border w-full border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Metin girin..."/>
    <button onClick={handleAddClick} className=" border  border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md">Add</button>
    </div>

  )
}

export default Input
