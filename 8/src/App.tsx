import { useRef, useState } from 'react'

import './App.css'

function App() {
  const firstPic= useRef(null)
  const secondPic=useRef(null)
  const thirdPic=useRef(null)

  const handleFirstPic= ()=>
  {
    firstPic.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  const handleSecondPic= ()=>
  {
    secondPic.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  const handleThirdPic= ()=>
  {
    thirdPic.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
   <>
   <nav>
    <button onClick={handleFirstPic}>pic 1</button>
    <button onClick={handleSecondPic}>pic 2</button>
    <button onClick={handleThirdPic}>pic 3</button>
   </nav>
   <div className='pic'>
   <ul>
    <li><img src="https://picsum.photos/id/237/600/400" alt="pic 1" ref={firstPic} /></li>
    <li><img src="https://picsum.photos/id/236/600/400" alt="pic 2" ref={secondPic} /></li>
    <li><img src="https://picsum.photos/id/235/600/400" alt="pic 3" ref={thirdPic} /></li>
   </ul>
   </div>
   </>
  )
}

export default App
