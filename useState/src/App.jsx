import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterExample from './Components/CounterExample'
import PasswordExample from './Components/PasswordExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <PasswordExample />
    </>
  )
}

export default App
