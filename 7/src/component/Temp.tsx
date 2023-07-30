import { useState } from 'react'
import TempInput from './TempInput'
import TempOutput from './TempOutput'
//C = K - 273.15
const Temp = () => {
    const [inputValue,setInputValue]= useState<number>(null)
  console.log(inputValue);
  
  return (
    <div>
      <h2>☃️ Temperature Converter 🌞</h2>
      <h2> Kelvin to Celcius </h2>
      <TempInput setInputValue={setInputValue}/>
      <TempOutput Output={inputValue}/>
    </div>
  )
}

export default Temp
