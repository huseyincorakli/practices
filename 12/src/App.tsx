import { useEffect, useRef, useState } from 'react'
import './App.css'

function App () {
  const [show, setShow] = useState<boolean>(true)

  return (
    <>
      <Toggle show={show} setShow={setShow} />
    </>
  )
}

export const Toggle = (props: any) => {
  //const didMount= useRef(false)
  const calledOnce = useRef(false)
  const [input, setInput]= useState<string>()
  const handleInputChange = (e: any) => {
    setInput(e.target.value)
  }
  //#region Once
  useEffect(()=>{
    if(calledOnce.current){
      return;
    }
    if(props.show==false){
      console.log('its false');
      calledOnce.current=true
    }
  },[props.show])
//#endregion
  //#region didmount  
  // useEffect(() => {
  //   if (didMount) {
  //     console.log('rendered');
  //   }
  //   else{
  //     didMount.current=true;
  //   }
  // }, [props.show])
  //#endregion
  return (
    <>
      <button
        onClick={() => {
          props.setShow(show => !show)
        }}
      >
        {props.show ? 'Hide' : 'Show'}
      </button>
      {props.show && (
        <div className='container'>
          <p>Hello </p>
          <br />
          <input type='text' onChange={handleInputChange} />
        </div>
      )}
    </>
  )
}

export default App
