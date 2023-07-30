

const TempInput = ({setInputValue}) => {
  
  const handleInputChange=(event)=>{
    const value = event.target.value
    if (value==='') {
     setInputValue(null)
    }
    else{
      convertToCelcius(value)
    }
    }
    const convertToCelcius = (value:number)=>{
      const CelciusValue = (value-273.15)
      setInputValue(CelciusValue)
  }
   
  return (
    <div>
      <label htmlFor="tempInput">Kelvin:</label>
        <input className='number-input' type="number" name='tempInput' placeholder='Lütfen bir değer giriniz' onChange={handleInputChange}  />
    </div>
  )
}

export default TempInput
