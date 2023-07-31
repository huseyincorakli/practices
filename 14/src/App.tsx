import { useState } from 'react'

import './App.css'
import { MessageType, Position, useToast } from './hooks/notificationHook'
import { Toaster } from 'react-hot-toast'

function App () {
  const showToast = useToast()

  return (
    <>
      <button
        onClick={() =>
          showToast('hello', MessageType.success, Position.BottomCenter)
        }
      >
        Show
      </button>
      
      <Toaster></Toaster>
    </>
  )
}

export default App
