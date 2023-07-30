import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//eklenmiş elen işleyicilerle etkileşime geçmeden direkt olarak çalışır diğer işleyiciler çağrılmaz
// e.stopPropagation()  
//varsayılan tarayıcı davranışını engeller  {submit olayında tarayıcının yenilenmesi gibi}
// e.preventDefault() 
function App() {
  const [count, setCount] = useState(0)
  const handleAppClick = ()=>{
    console.log('app clicked');
    
  }
  return (
    <div onClick={handleAppClick}>
      <TestComponent onclick={(e)=>{'test component clicked'}}/>
    </div>
  )
}

function TestComponent({onclick}){
  const handleClick=(e)=>{
    console.log('test button clicked!');
    e.stopPropagation();
    onclick(e);
  }
  const handleTestComponentClick = ()=>{
    console.log('test componetnt clicked');
  }
  return (
    <div onClick={handleTestComponentClick}>
      <button onClick={handleClick}>TEST BUTTON</button>
    </div>
  )
}

export default App
