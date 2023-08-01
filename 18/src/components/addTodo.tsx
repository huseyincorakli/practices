


const AddTodo = ({handleChange,handleSubmit,text}) => {
  return (
   <>
    <form onSubmit={handleSubmit} >
    <input value={text} type="text" onChange={handleChange} />
    <button type='submit'>Add Todo</button>
    </form>
   </>
  )
}

export default AddTodo