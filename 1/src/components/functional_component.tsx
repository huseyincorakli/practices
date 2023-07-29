import { useState } from 'react'
import Props from './props'
//Functional Component==>
interface Props {
  text: string;
}

const FunctionalComponent = () => {
    
    //JavaScript in JSX with Curly Braces
  const componentName: string = 'functional'
  
  //useState
  const [number, setNumber] = useState<number>(0);
  const [show,setShow]=useState<boolean>(true);
  const [inputValue,setInputValue]=useState<string>('Prop');

  // Increase & Decrease
  const handleIncrease=():void=>{
    setNumber(number+1);
  }
  const handleDecrease=():void=>{
    if (number<=0) {
        setNumber(0)
    }
    else{
        setNumber(number-1)
    }
    
  }

  //Show h2 Title
  const handleShow=():void=>{
    if (show) {
        setShow(false)
    }
    else{
        setShow(true)
    }
  }
 //Input Change
 const handleInputChange=(event:any):void=>{
    setInputValue(event.target.value)
 }


  return (
    <div>
        <hr />
      <div>This is a {componentName} component</div>
      <div>
        {show && <h2>Use State</h2>}
        <button onClick={handleShow}>{show?'Hide':'Show'}</button>
        <p>useState Number: {number}</p>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}/>
        <hr />
        <h3>Props</h3>
        <Props text={inputValue}  titleStatus={show}></Props>
        <hr />
      </div>
      <hr />
    </div>
  )
}



export default FunctionalComponent
