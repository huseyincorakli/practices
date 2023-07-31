import { useState } from 'react'
import Validate from '../hoc/validate'

const Student = (props:any) => {
  const [studentName, setStudentName] = useState<string>()

  const handleInputValue = (e: any): void => {
    setStudentName(e.target.value)
  }

  console.log('student name:',studentName);
  

  return (
    <div>
      <input type='text' onChange={handleInputValue} />
      <button onClick={()=>{
        props.validate(studentName,'student name boş olamaz')
      }} >Submit</button>
    </div>
  )
}

export default Validate(Student)
