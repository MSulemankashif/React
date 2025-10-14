import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterExample from './Components/CounterExample'
import PasswordExample from './Components/PasswordExample'
import BoxExample from './Components/BoxExample'
import Mode from './Components/Mode'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mode />
    </>
  )
}

export default App
