import { useState } from 'react'
import './App.css'
import Test from './components/Test'

function App () {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      <hr />
      {show && <Test />}
    </>
  )
}

export default App
