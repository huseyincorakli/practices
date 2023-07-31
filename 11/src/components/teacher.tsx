import React, { useState } from 'react'
import Validate from '../hoc/validate';

const Teacher = (props:any) => {
  const [teacherName,setTeacherName]=useState<string>();

  

  const handleInputValue=(e)=>{
    setTeacherName(e.target.value)
  }
  console.log('teacher name:',teacherName);
  
  return (
    <div>
      <input type="text"  onChange={handleInputValue} />
      <button onClick={()=>{props.validate(teacherName,'teacher name boş olamaz')}} >Submit</button>
    </div>
  )
}

export default Validate(Teacher)