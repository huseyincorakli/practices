
import {useBoolean} from './hooks/useBoolean'
import {useCount} from './hooks/useCount'
import './App.css'
import Popup from './components/popUp'

function App() {
  const[toggle,{setToggle}]=useBoolean(false)
  const [number,{Increment,Decrement,Reset}]=useCount(0);
  return (
    <>
      <button onClick={setToggle} >show</button>
      {toggle&& <Popup/>}
      <br />
      <hr />
      {number}
      <br />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      
    </>
  )
}

export default App
